/**
 * EV charging simulation model.
 *
 * This is not a `kWh / kW` division. A charging session is integrated over the
 * state of charge in small steps, because the power a battery accepts changes
 * continuously with SoC, pack architecture, chemistry and temperature:
 *
 *   - DC: the pack follows a charge curve. Peak power is held for a while,
 *     then the BMS tapers it down. 800 V packs hold the plateau much longer
 *     than 400 V ones, LFP tapers earlier and harder.
 *   - AC: the on-board charger is the bottleneck, so power is flat until the
 *     BMS balances the last few percent.
 *   - Temperature: a cold pack refuses power. Preconditioning recovers most
 *     of it. Cold also runs the heaters, which draw from the plug without
 *     ever reaching the battery.
 *   - Losses: the plug always delivers more energy than the battery stores
 *     (conversion + auxiliaries), which is what the meter actually bills.
 *
 * Where a manufacturer publishes a DC fast-charge figure (e.g. 10-80 % in
 * 26 min at 150 kW), the curve is calibrated against it so the simulation
 * reproduces the official number.
 */

export type ChargerKind = "ac" | "dc"

export interface EvModel {
  id: string
  make: string
  model: string
  year: number
  /** Usable pack capacity in kWh. */
  net: number
  /** Gross pack capacity in kWh, when known. */
  gross: number | null
  /** Max on-board AC charging power in kW. */
  ac: number
  phases: number
  /** Max DC charging power in kW, null when the car has no DC port. */
  dc: number | null
  /** 1 when the pack uses an 800 V architecture. */
  hv: number
  /** 0 = NMC-like, 1 = LFP. */
  chem: number
  heatPump: number
  range: number | null
  cycle: string | null
  /** Real-world consumption in kWh/100 km. */
  cons: number
  /** 1 when consumption is a body-type estimate rather than derived. */
  consEst: number
  connector: string | null
  /** Published DC reference used to calibrate the curve. */
  dcRef: { kw: number; from: number; to: number; min: number } | null
  type: string
  old: number
}

export interface Charger {
  id: string
  kind: ChargerKind
  kw: number
  /** 1 or 3 for AC, 0 for DC. */
  phases: number
}

export interface SimulationInput {
  batteryKwh: number
  /** Max AC power the car accepts, kW. */
  vehicleAcKw: number
  /** Max DC power the car accepts, kW. null/0 when there is no DC port. */
  vehicleDcKw: number | null
  highVoltage: boolean
  lfp: boolean
  heatPump: boolean
  /** Real-world consumption, kWh/100 km. */
  consumption: number
  charger: Charger
  startSoc: number
  targetSoc: number
  ambientC: number
  precondition: boolean
  /** When false the vehicle's own limit is ignored (theoretical charger-only). */
  applyVehicleLimit: boolean
  dcRef?: EvModel["dcRef"]
}

export interface CurvePoint {
  /** Minutes since the session started. */
  t: number
  soc: number
  /** Power measured at the plug, kW. */
  kw: number
}

export type Bottleneck = "charger" | "vehicle" | "taper" | "temperature"

export interface SimulationResult {
  minutes: number
  /** Energy actually stored in the pack, kWh. */
  energyToBattery: number
  /** Energy drawn at the plug — what gets billed, kWh. */
  energyFromGrid: number
  /** Session efficiency, 0-1. */
  efficiency: number
  avgPowerKw: number
  peakPowerKw: number
  /** Highest power the pairing could ever reach, kW. */
  ceilingKw: number
  /** Vehicle-side ceiling for the selected charger kind, kW. */
  vehicleLimitKw: number
  kmAdded: number
  /** Minutes spent below 80 % of the ceiling because of the taper. */
  taperMinutes: number
  /** True when heating/cooling swallows a large share of the plug power. */
  stalled: boolean
  bottleneck: Bottleneck
  /** Temperature derating applied to DC power, 0-1. */
  tempFactor: number
  /** Consumption penalty from temperature, e.g. 1.25 = +25 %. */
  consumptionFactor: number
  curve: CurvePoint[]
  /** Calibration factor applied from the published DC reference, if any. */
  calibration: number | null
}

/* -------------------------------------------------------------------------- */
/* Charge curves                                                              */
/* -------------------------------------------------------------------------- */

type Anchor = readonly [soc: number, value: number]

/**
 * DC acceptance is modelled as a C-rate envelope rather than a fraction of the
 * car's peak power, because the two behave very differently:
 *
 *   - a 75 kWh pack rated 250 kW (3.3 C) can only hold that spike near the
 *     bottom and falls away steeply;
 *   - a 46 kWh pack rated 100 kW (2.2 C) sits under the envelope and stays
 *     flat almost to 40 %.
 *
 * One envelope per architecture reproduces both, and matches published curves
 * for the Model 3, e-208, IONIQ 5 and friends within a few minutes.
 */

/** Max sustainable C-rate vs SoC — 400 V NMC/NCA packs. */
const ENVELOPE_400V: readonly Anchor[] = [
  [0, 3.6],
  [10, 3.6],
  [20, 2.9],
  [30, 2.1],
  [40, 1.72],
  [50, 1.45],
  [60, 1.25],
  [70, 1.05],
  [80, 0.88],
  [85, 0.68],
  [90, 0.5],
  [95, 0.3],
  [100, 0.1],
]

/** 800 V packs hold a far higher envelope well past half charge. */
const ENVELOPE_800V: readonly Anchor[] = [
  [0, 4.2],
  [20, 4.2],
  [45, 3.0],
  [50, 2.6],
  [60, 1.75],
  [70, 1.45],
  [80, 1.25],
  [85, 0.95],
  [90, 0.68],
  [95, 0.36],
  [100, 0.12],
]

/** LFP: lower ceiling, flatter middle, sharp collapse near the top. */
const ENVELOPE_LFP: readonly Anchor[] = [
  [0, 3.2],
  [20, 2.6],
  [30, 2.2],
  [40, 1.9],
  [50, 1.6],
  [60, 1.35],
  [70, 1.1],
  [80, 0.9],
  [90, 0.48],
  [95, 0.25],
  [100, 0.08],
]

/**
 * No pack takes its rated peak at 0 %: the BMS ramps in over the first few
 * percent. Above that the envelope alone decides.
 */
const PEAK_RAMP: readonly Anchor[] = [
  [0, 0.7],
  [3, 0.88],
  [6, 0.97],
  [9, 1.0],
  [100, 1.0],
]

function interpolate(anchors: readonly Anchor[], x: number): number {
  if (x <= anchors[0][0]) return anchors[0][1]
  const last = anchors[anchors.length - 1]
  if (x >= last[0]) return last[1]
  for (let i = 1; i < anchors.length; i++) {
    const [x1, y1] = anchors[i]
    if (x <= x1) {
      const [x0, y0] = anchors[i - 1]
      const k = (x - x0) / (x1 - x0)
      return y0 + (y1 - y0) * k
    }
  }
  return last[1]
}

function envelopeFor(lfp: boolean, highVoltage: boolean): readonly Anchor[] {
  if (lfp) return ENVELOPE_LFP
  return highVoltage ? ENVELOPE_800V : ENVELOPE_400V
}

/**
 * AC power is flat: the on-board charger, not the pack, sets the pace. Only
 * the final balancing phase tapers.
 */
function acShape(soc: number, lfp: boolean): number {
  const knee = lfp ? 95 : 90
  if (soc <= knee) return 1
  const k = (soc - knee) / (100 - knee)
  return 1 - k * 0.7
}

/* -------------------------------------------------------------------------- */
/* Environment                                                                */
/* -------------------------------------------------------------------------- */

/** DC power acceptance vs pack temperature (approximated from ambient). */
const TEMP_ANCHORS: readonly Anchor[] = [
  [-20, 0.22],
  [-10, 0.3],
  [0, 0.5],
  [10, 0.8],
  [18, 0.98],
  [25, 1.0],
  [32, 0.96],
  [40, 0.87],
  [50, 0.8],
]

export function temperatureFactor(ambientC: number, precondition: boolean, kind: ChargerKind): number {
  if (kind === "ac") {
    // AC power is low enough that the pack almost always accepts it; only
    // deep cold slows the on-board charger down.
    return ambientC < 0 ? 0.9 : 1
  }
  const base = interpolate(TEMP_ANCHORS, ambientC)
  if (!precondition || ambientC >= 20) return base
  // Preconditioning warms the pack on the way to the charger and recovers
  // most, not all, of the cold penalty.
  return base + (1 - base) * 0.78
}

/** Extra plug draw for cabin/battery heating and cooling, kW. */
function auxiliaryDrawKw(ambientC: number, heatPump: boolean, kind: ChargerKind): number {
  let aux = kind === "dc" ? 0.4 : 0.25 // pumps, BMS, DC-DC
  if (ambientC < 12) {
    const cold = Math.min(12 - ambientC, 30)
    aux += cold * (heatPump ? 0.075 : 0.12)
  } else if (ambientC > 32) {
    aux += (ambientC - 32) * 0.08
  }
  return Math.min(aux, kind === "dc" ? 5 : 2.4)
}

/** Consumption penalty from temperature — cold costs range, not just time. */
export function consumptionFactor(ambientC: number, heatPump: boolean): number {
  const cold: readonly Anchor[] = heatPump
    ? [
        [-10, 1.36],
        [0, 1.22],
        [10, 1.08],
        [20, 1.0],
        [30, 1.07],
        [45, 1.2],
      ]
    : [
        [-10, 1.52],
        [0, 1.34],
        [10, 1.13],
        [20, 1.0],
        [30, 1.09],
        [45, 1.24],
      ]
  return interpolate(cold, ambientC)
}

/** Plug-to-battery conversion efficiency, before auxiliaries. */
function conversionEfficiency(charger: Charger): number {
  if (charger.kind === "dc") return 0.96
  if (charger.kw <= 2.5) return 0.88 // domestic socket: long thin cable, poor power factor
  return charger.phases === 3 ? 0.94 : 0.92
}

/* -------------------------------------------------------------------------- */
/* Simulation                                                                 */
/* -------------------------------------------------------------------------- */

const SOC_STEP = 0.25

interface Internals {
  ceilingKw: number
  vehicleLimitKw: number
  curveScale: number
  tempFactor: number
  aux: number
  eta: number
}

function setup(input: SimulationInput, curveScale: number): Internals {
  const { charger, applyVehicleLimit } = input
  const vehicleLimitKw =
    charger.kind === "dc" ? (input.vehicleDcKw ?? 0) : Math.min(input.vehicleAcKw, charger.phases === 1 ? 7.4 : Infinity)

  const ceilingKw = applyVehicleLimit && vehicleLimitKw > 0 ? Math.min(charger.kw, vehicleLimitKw) : charger.kw

  return {
    ceilingKw,
    vehicleLimitKw,
    curveScale,
    tempFactor: temperatureFactor(input.ambientC, input.precondition, charger.kind),
    aux: auxiliaryDrawKw(input.ambientC, input.heatPump, charger.kind),
    eta: conversionEfficiency(charger),
  }
}

/** Power drawn at the plug at a given SoC, kW. */
function plugPowerAt(input: SimulationInput, s: Internals, soc: number): number {
  if (input.charger.kind === "ac") {
    return Math.min(input.charger.kw, s.ceilingKw * acShape(soc, input.lfp))
  }
  // The pack accepts the lowest of: the charger, the car's rated peak (ramped
  // in at the very bottom) and the chemistry's C-rate envelope.
  const rated = input.applyVehicleLimit ? (input.vehicleDcKw ?? input.charger.kw) : input.charger.kw
  const peak = rated * interpolate(PEAK_RAMP, soc)
  const envelope = interpolate(envelopeFor(input.lfp, input.highVoltage), soc) * input.batteryKwh * s.curveScale
  return Math.min(input.charger.kw, peak, envelope) * s.tempFactor
}

function integrate(input: SimulationInput, s: Internals, collectCurve: boolean) {
  const start = Math.max(0, Math.min(100, input.startSoc))
  const target = Math.max(0, Math.min(100, input.targetSoc))

  let minutes = 0
  let energyToBattery = 0
  let energyFromGrid = 0
  let peakPowerKw = 0
  let taperMinutes = 0
  let stalled = false

  const curve: CurvePoint[] = []
  const steps = Math.max(0, Math.round((target - start) / SOC_STEP))
  const sampleEvery = Math.max(1, Math.floor(steps / 110))

  if (collectCurve && steps > 0) {
    curve.push({ t: 0, soc: Number(start.toFixed(1)), kw: Number(plugPowerAt(input, s, start).toFixed(1)) })
  }

  for (let i = 0; i < steps; i++) {
    const soc = start + i * SOC_STEP
    const plugKw = plugPowerAt(input, s, soc + SOC_STEP / 2)
    // Auxiliaries eat into the plug power before conversion; what is left
    // reaches the pack. On a weak supply in the cold the heaters can swallow
    // most of it — real behaviour, so it is flagged rather than hidden.
    if (s.aux > plugKw * 0.5) stalled = true
    const toBatteryKw = Math.max((plugKw - Math.min(s.aux, plugKw * 0.6)) * s.eta, 0.15)

    const dEnergy = (input.batteryKwh * SOC_STEP) / 100
    const dHours = dEnergy / toBatteryKw

    minutes += dHours * 60
    energyToBattery += dEnergy
    energyFromGrid += plugKw * dHours
    if (plugKw > peakPowerKw) peakPowerKw = plugKw
    if (plugKw < s.ceilingKw * 0.8) taperMinutes += dHours * 60

    if (collectCurve && (i % sampleEvery === 0 || i === steps - 1)) {
      curve.push({
        t: Number(minutes.toFixed(1)),
        soc: Number((soc + SOC_STEP).toFixed(1)),
        kw: Number(plugKw.toFixed(1)),
      })
    }
  }

  return { minutes, energyToBattery, energyFromGrid, peakPowerKw, taperMinutes, curve, stalled }
}

/**
 * Scales the generic curve so the simulation reproduces the manufacturer's
 * published DC figure for this exact car. Returns 1 when nothing is published.
 */
function calibrate(input: SimulationInput): number {
  const ref = input.dcRef
  if (!ref || input.charger.kind !== "dc" || !ref.min || ref.to <= ref.from) return 1

  const reference: SimulationInput = {
    ...input,
    charger: { id: "ref", kind: "dc", kw: ref.kw, phases: 0 },
    startSoc: ref.from,
    targetSoc: ref.to,
    ambientC: 22,
    precondition: false,
    applyVehicleLimit: true,
  }

  let scale = 1
  // Two fixed-point passes converge well: power scales inversely with time.
  for (let pass = 0; pass < 2; pass++) {
    const s = setup(reference, scale)
    const { minutes } = integrate(reference, s, false)
    if (minutes <= 0) return 1
    scale *= minutes / ref.min
  }
  return Math.min(1.6, Math.max(0.6, scale))
}

export function simulate(input: SimulationInput): SimulationResult {
  const calibration = calibrate(input)
  const s = setup(input, calibration)
  const consFactor = consumptionFactor(input.ambientC, input.heatPump)

  const { minutes, energyToBattery, energyFromGrid, peakPowerKw, taperMinutes, curve, stalled } = integrate(
    input,
    s,
    true,
  )

  const avgPowerKw = minutes > 0 ? energyFromGrid / (minutes / 60) : 0
  const effectiveConsumption = input.consumption * consFactor
  const kmAdded = effectiveConsumption > 0 ? (energyToBattery / effectiveConsumption) * 100 : 0

  let bottleneck: Bottleneck = "charger"
  if (input.charger.kind === "dc") {
    if (s.tempFactor < 0.9) bottleneck = "temperature"
    else if (peakPowerKw < input.charger.kw * 0.97) bottleneck = "vehicle"
    else if (taperMinutes > minutes * 0.4) bottleneck = "taper"
  } else if (input.applyVehicleLimit && s.vehicleLimitKw < input.charger.kw - 0.1) {
    bottleneck = "vehicle"
  }

  return {
    minutes,
    energyToBattery,
    energyFromGrid,
    efficiency: energyFromGrid > 0 ? energyToBattery / energyFromGrid : 0,
    avgPowerKw,
    peakPowerKw,
    ceilingKw: s.ceilingKw,
    vehicleLimitKw: s.vehicleLimitKw,
    kmAdded,
    taperMinutes,
    stalled,
    bottleneck,
    tempFactor: s.tempFactor,
    consumptionFactor: consFactor,
    curve,
    calibration: input.dcRef && input.charger.kind === "dc" ? calibration : null,
  }
}

/* -------------------------------------------------------------------------- */
/* Charger catalogue                                                          */
/* -------------------------------------------------------------------------- */

export const CHARGERS: readonly Charger[] = [
  { id: "socket-2.3", kind: "ac", kw: 2.3, phases: 1 },
  { id: "ac-3.7", kind: "ac", kw: 3.7, phases: 1 },
  { id: "ac-7.4", kind: "ac", kw: 7.4, phases: 1 },
  { id: "ac-11", kind: "ac", kw: 11, phases: 3 },
  { id: "ac-22", kind: "ac", kw: 22, phases: 3 },
  { id: "dc-50", kind: "dc", kw: 50, phases: 0 },
  { id: "dc-100", kind: "dc", kw: 100, phases: 0 },
  { id: "dc-150", kind: "dc", kw: 150, phases: 0 },
  { id: "dc-250", kind: "dc", kw: 250, phases: 0 },
  { id: "dc-350", kind: "dc", kw: 350, phases: 0 },
]

export function getCharger(id: string): Charger {
  return CHARGERS.find((c) => c.id === id) ?? CHARGERS[3]
}

/** Session duration on every charger in the catalogue, for the comparison table. */
export function compareChargers(input: SimulationInput): { charger: Charger; minutes: number; available: boolean }[] {
  return CHARGERS.map((charger) => {
    const available = charger.kind === "ac" || Boolean(input.vehicleDcKw)
    if (!available) return { charger, minutes: 0, available }
    return { charger, minutes: simulate({ ...input, charger }).minutes, available }
  })
}

/* -------------------------------------------------------------------------- */
/* Formatting                                                                 */
/* -------------------------------------------------------------------------- */

export function formatDuration(minutes: number, hourLabel = "h", minuteLabel = "min"): string {
  if (!isFinite(minutes) || minutes <= 0) return `0 ${minuteLabel}`
  const total = Math.round(minutes)
  const h = Math.floor(total / 60)
  const m = total % 60
  if (h === 0) return `${m} ${minuteLabel}`
  return `${h} ${hourLabel} ${String(m).padStart(2, "0")}`
}
