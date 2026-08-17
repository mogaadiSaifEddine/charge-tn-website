/**
 * CO2 comparison between an electric car and the equivalent combustion car.
 *
 * The honest version of this calculation has three parts that marketing
 * material usually skips:
 *
 *   1. The electricity has to be generated. Tunisia's grid is roughly 97 %
 *      natural gas, so an EV here is nowhere near "zero emission" — it is
 *      about half a kilo of CO2 per kWh at the meter.
 *   2. Charging loses energy. What matters is the kWh drawn from the plug,
 *      not the kWh stored in the pack.
 *   3. Building the battery emits CO2 up front. An EV therefore starts its
 *      life in debt and only overtakes a petrol car after some distance,
 *      which this module computes instead of hiding.
 */

export type FuelType = "petrol" | "diesel"

/** Direct combustion, kg CO2 per litre burned. */
const COMBUSTION_KG_PER_L: Record<FuelType, number> = {
  petrol: 2.31,
  diesel: 2.68,
}

/**
 * Well-to-tank multiplier: extraction, refining and distribution of the fuel
 * before it reaches the tank.
 */
const FUEL_UPSTREAM: Record<FuelType, number> = {
  petrol: 1.22,
  diesel: 1.24,
}

/** Gas production and transport upstream of a gas-fired power station. */
const GRID_UPSTREAM = 1.08

/**
 * Grid intensity presets, kg CO2 per kWh delivered to the meter (generation
 * plus transmission losses).
 *
 *   - tunisia: gas-dominated national grid. Published estimates sit between
 *     roughly 0.45 and 0.55 depending on year and methodology.
 *   - solar: rooftop PV, lifecycle emissions of the panels themselves.
 */
export const GRID_PRESETS = {
  tunisia: 0.5,
  solar: 0.045,
} as const

/** kg CO2 per kWh of battery capacity manufactured (literature: 60-100). */
export const BATTERY_MANUFACTURING_KG_PER_KWH = 70

/**
 * Average share of plug energy that reaches the battery over a year of mixed
 * home AC and occasional DC charging.
 */
export const AVERAGE_CHARGING_EFFICIENCY = 0.9

/** A mature tree absorbs roughly this much CO2 per year. */
const TREE_KG_PER_YEAR = 22

/** Typical combustion consumption by body style, L/100 km. */
export const ICE_CONSUMPTION_BY_TYPE: Record<string, number> = {
  passenger_car: 6.5,
  suv: 8.0,
  pickup: 10.5,
  van: 8.5,
  other: 7.0,
}

export interface EmissionsInput {
  annualKm: number
  /** EV consumption at the battery, kWh/100 km. */
  evConsumption: number
  /** kg CO2 per kWh delivered. */
  gridFactor: number
  fuelType: FuelType
  /** Combustion car consumption, L/100 km. */
  fuelConsumption: number
  /** Include fuel refining and gas supply-chain emissions on both sides. */
  includeUpstream: boolean
  /** Usable battery capacity, kWh — drives the manufacturing debt. */
  batteryKwh: number
  fuelPricePerL: number
  electricityPricePerKwh: number
}

export interface EmissionsResult {
  /** Grid energy needed per year, kWh. */
  annualKwh: number
  annualLitres: number
  evKgPerKm: number
  iceKgPerKm: number
  evKgPerYear: number
  iceKgPerYear: number
  savedKgPerYear: number
  /** Share of the combustion car's emissions avoided, 0-1. */
  savedShare: number
  treesPerYear: number
  evCostPerYear: number
  iceCostPerYear: number
  savedCostPerYear: number
  /** Up-front CO2 of building the pack, kg. */
  batteryDebtKg: number
  /** Distance after which the EV has repaid that debt, km. */
  breakEvenKm: number
  /** The same in years at the given mileage. */
  breakEvenYears: number
}

export function calculateEmissions(input: EmissionsInput): EmissionsResult {
  const {
    annualKm,
    evConsumption,
    gridFactor,
    fuelType,
    fuelConsumption,
    includeUpstream,
    batteryKwh,
    fuelPricePerL,
    electricityPricePerKwh,
  } = input

  // Energy billed at the plug, not the energy stored in the pack.
  const kwhPerKm = evConsumption / 100 / AVERAGE_CHARGING_EFFICIENCY
  const litresPerKm = fuelConsumption / 100

  const gridKg = gridFactor * (includeUpstream ? GRID_UPSTREAM : 1)
  const fuelKg = COMBUSTION_KG_PER_L[fuelType] * (includeUpstream ? FUEL_UPSTREAM[fuelType] : 1)

  const evKgPerKm = kwhPerKm * gridKg
  const iceKgPerKm = litresPerKm * fuelKg

  const annualKwh = kwhPerKm * annualKm
  const annualLitres = litresPerKm * annualKm
  const evKgPerYear = evKgPerKm * annualKm
  const iceKgPerYear = iceKgPerKm * annualKm
  const savedKgPerYear = iceKgPerYear - evKgPerYear

  const batteryDebtKg = batteryKwh * BATTERY_MANUFACTURING_KG_PER_KWH
  const savingPerKm = iceKgPerKm - evKgPerKm

  return {
    annualKwh,
    annualLitres,
    evKgPerKm,
    iceKgPerKm,
    evKgPerYear,
    iceKgPerYear,
    savedKgPerYear,
    savedShare: iceKgPerYear > 0 ? savedKgPerYear / iceKgPerYear : 0,
    treesPerYear: savedKgPerYear / TREE_KG_PER_YEAR,
    evCostPerYear: annualKwh * electricityPricePerKwh,
    iceCostPerYear: annualLitres * fuelPricePerL,
    savedCostPerYear: annualLitres * fuelPricePerL - annualKwh * electricityPricePerKwh,
    batteryDebtKg,
    // Negative saving (a dirty grid and a frugal diesel) means the debt is
    // never repaid; Infinity is the truthful answer there.
    breakEvenKm: savingPerKm > 0 ? batteryDebtKg / savingPerKm : Infinity,
    breakEvenYears: savingPerKm > 0 && annualKm > 0 ? batteryDebtKg / savingPerKm / annualKm : Infinity,
  }
}
