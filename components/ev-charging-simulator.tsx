"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import type { Language } from "@/lib/i18n"
import {
  CHARGERS,
  compareChargers,
  formatDuration,
  getCharger,
  simulate,
  type Charger,
  type CurvePoint,
  type EvModel,
  type SimulationInput,
} from "@/lib/charging-model"
import { leviesMillimes, sessionPricing, vatRate, type Segment } from "@/lib/steg-tariff"
import { useEvCatalogue } from "@/hooks/use-ev-catalogue"
import { VehiclePicker, useVehicleSelection } from "@/components/vehicle-picker"
import {
  AlertTriangle,
  BatteryCharging,
  Check,
  Gauge,
  Info,
  Plug,
  Route,
  Snowflake,
  Thermometer,
  Zap,
} from "lucide-react"

const GOOGLE_ELEVATION = {
  level1: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
  level2: "0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)",
}

const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1]

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

const LOCALES: Record<Language, string> = {
  en: "en-GB",
  ar: "ar-TN",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE",
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-200"

const labelClass = "text-gray-900 dark:text-white font-medium mb-2 block text-sm"

export function EvChargingSimulator() {
  const { t, language } = useLanguage()
  const locale = LOCALES[language] ?? "en-GB"

  const { catalogue } = useEvCatalogue()
  const { vehicleId } = useVehicleSelection()

  const [batteryInput, setBatteryInput] = useState<string>("")
  const [customAc, setCustomAc] = useState("11")
  const [customDc, setCustomDc] = useState("100")
  const [customCons, setCustomCons] = useState("17")

  const [chargerId, setChargerId] = useState("ac-11")
  const [startSoc, setStartSoc] = useState(20)
  const [targetSoc, setTargetSoc] = useState(80)
  const [ambientC, setAmbientC] = useState(22)
  const [precondition, setPrecondition] = useState(false)
  const [applyVehicleLimit, setApplyVehicleLimit] = useState(true)
  const [pricingMode, setPricingMode] = useState<"residential" | "business" | "custom">("residential")
  const [monthlyBase, setMonthlyBase] = useState("250")
  const [price, setPrice] = useState("0.500")

  const vehicle = useMemo(
    () => catalogue?.models.find((m) => m.id === vehicleId) ?? null,
    [catalogue, vehicleId],
  )

  // A newly picked vehicle brings its own battery size along.
  useEffect(() => {
    if (vehicle) setBatteryInput(String(vehicle.net))
  }, [vehicle])

  const hasDcPort = vehicle ? Boolean(vehicle.dc) : Number(customDc) > 0

  // A car without a DC port cannot be paired with a fast charger.
  useEffect(() => {
    if (!hasDcPort && getCharger(chargerId).kind === "dc") setChargerId("ac-11")
  }, [chargerId, hasDcPort])

  const results = useMemo(() => {
    const charger = getCharger(chargerId)
    const battery = Number(batteryInput) > 0 ? Number(batteryInput) : (vehicle?.net ?? 50)
    const acKw = vehicle ? vehicle.ac : Number(customAc) || 11
    const dcKw = vehicle ? vehicle.dc : Number(customDc) || null
    const consumption = vehicle ? vehicle.cons : Number(customCons) || 17

    const input: SimulationInput = {
      batteryKwh: battery,
      vehicleAcKw: acKw,
      vehicleDcKw: dcKw,
      // Without a catalogue entry, a very high DC rating is the usual sign of
      // an 800 V car.
      highVoltage: vehicle ? Boolean(vehicle.hv) : (dcKw ?? 0) > 200,
      lfp: vehicle ? vehicle.chem === 1 : false,
      heatPump: vehicle ? Boolean(vehicle.heatPump) : true,
      consumption,
      charger,
      startSoc,
      targetSoc: Math.max(targetSoc, startSoc),
      ambientC,
      precondition,
      applyVehicleLimit,
      dcRef: vehicle?.dcRef ?? null,
    }

    return { input, result: simulate(input), comparison: compareChargers(input), charger }
  }, [
    ambientC,
    applyVehicleLimit,
    batteryInput,
    chargerId,
    customAc,
    customCons,
    customDc,
    precondition,
    startSoc,
    targetSoc,
    vehicle,
  ])

  const { input, result, comparison, charger } = results

  /**
   * What the session costs. On the STEG tariff this is the difference the
   * session makes to the monthly bill, not energy × rate — because STEG
   * re-prices the whole month when the consumption crosses a tranche.
   */
  const pricing = useMemo(() => {
    const kwh = result.energyFromGrid
    if (pricingMode === "custom") {
      const perKwh = Number(price) || 0
      return { cost: kwh * perKwh, perKwh, steg: null }
    }
    const segment: Segment = pricingMode
    const base = Math.max(0, Number(monthlyBase) || 0)
    const steg = sessionPricing(base, kwh, segment)
    return { cost: steg.cost, perKwh: steg.effectivePerKwh, steg, segment, base }
  }, [monthlyBase, price, pricingMode, result.energyFromGrid])

  const costPer100km = result.kmAdded > 0 ? (pricing.cost / result.kmAdded) * 100 : 0

  // How much of the session is spent on the last 20 % — the classic
  // "stop at 80 %" argument, only worth showing when the user goes past it.
  const taperSaving = useMemo(() => {
    if (targetSoc <= 80 || startSoc >= 80) return null
    const to80 = simulate({ ...input, targetSoc: 80 })
    const saved = result.minutes - to80.minutes
    return saved > 4 ? saved : null
  }, [input, result.minutes, startSoc, targetSoc])

  const nf = (value: number, digits = 1) =>
    new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)

  const duration = (minutes: number) => formatDuration(minutes, t("simHour"), t("simMin"))

  const chargerLabel = (c: Charger) => {
    const suffix =
      c.kind === "dc"
        ? t("simChargerDc")
        : c.kw <= 2.5
          ? t("simChargerSocket")
          : c.phases === 3
            ? t("simCharger3ph")
            : t("simCharger1ph")
    return `${nf(c.kw, c.kw % 1 === 0 ? 0 : 1)} kW — ${suffix}`
  }

  const insightKey = result.stalled
    ? "simInsightStalled"
    : result.bottleneck === "temperature"
      ? "simInsightTemperature"
      : result.bottleneck === "vehicle"
        ? "simInsightVehicle"
        : result.bottleneck === "taper"
          ? "simInsightTaper"
          : "simInsightCharger"

  const vehicleName = vehicle ? `${vehicle.make} ${vehicle.model}` : t("simVehicleCustom")

  return (
    <section
      id="simulator"
      className="py-16 md:py-24 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
              <BatteryCharging className="w-4 h-4 mr-2" />
              {t("simBadge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
            {t("simTitle")} <span className="text-blue-600 dark:text-blue-400">{t("simTitleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("simSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card
              className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
              style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <VehiclePicker id="sim-vehicle" />
                  </div>

                  {/* Battery */}
                  <div>
                    <Label htmlFor="sim-battery" className={labelClass}>
                      {t("simBattery")}
                    </Label>
                    <Input
                      id="sim-battery"
                      type="number"
                      min={5}
                      max={250}
                      step={0.5}
                      value={batteryInput}
                      onChange={(e) => setBatteryInput(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Charger */}
                  <div>
                    <Label htmlFor="sim-charger" className={labelClass}>
                      {t("simCharger")}
                    </Label>
                    <select
                      id="sim-charger"
                      value={chargerId}
                      onChange={(e) => setChargerId(e.target.value)}
                      className={inputClass}
                    >
                      <optgroup label={t("simAcGroup")}>
                        {CHARGERS.filter((c) => c.kind === "ac").map((c) => (
                          <option key={c.id} value={c.id}>
                            {chargerLabel(c)}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t("simDcGroup")}>
                        {CHARGERS.filter((c) => c.kind === "dc").map((c) => (
                          <option key={c.id} value={c.id} disabled={!hasDcPort}>
                            {chargerLabel(c)}
                            {hasDcPort ? "" : ` — ${t("simNoDcPort")}`}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Manual specs, only when no catalogue entry is selected */}
                  {!vehicle && (
                    <>
                      <div>
                        <Label htmlFor="sim-ac" className={labelClass}>
                          {t("simVehicleAc")} (kW)
                        </Label>
                        <Input
                          id="sim-ac"
                          type="number"
                          min={1}
                          max={44}
                          step={0.1}
                          value={customAc}
                          onChange={(e) => setCustomAc(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <Label htmlFor="sim-dc" className={labelClass}>
                          {t("simVehicleDc")} (kW)
                        </Label>
                        <Input
                          id="sim-dc"
                          type="number"
                          min={0}
                          max={500}
                          step={1}
                          value={customDc}
                          onChange={(e) => setCustomDc(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="sim-cons" className={labelClass}>
                          {t("simConsumption")} (kWh/100 km)
                        </Label>
                        <Input
                          id="sim-cons"
                          type="number"
                          min={8}
                          max={45}
                          step={0.1}
                          value={customCons}
                          onChange={(e) => setCustomCons(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </>
                  )}

                  {/* State of charge */}
                  <div>
                    <Label htmlFor="sim-start" className={labelClass}>
                      {t("simStartSoc")}
                    </Label>
                    <Input
                      id="sim-start"
                      type="number"
                      min={0}
                      max={99}
                      value={startSoc}
                      onChange={(e) => {
                        const v = Math.max(0, Math.min(99, Number(e.target.value)))
                        setStartSoc(v)
                        if (v >= targetSoc) setTargetSoc(Math.min(100, v + 1))
                      }}
                      className={inputClass}
                    />
                    <input
                      type="range"
                      min={0}
                      max={99}
                      value={startSoc}
                      onChange={(e) => {
                        const v = Number(e.target.value)
                        setStartSoc(v)
                        if (v >= targetSoc) setTargetSoc(Math.min(100, v + 1))
                      }}
                      className="w-full mt-3 accent-blue-600 dark:accent-blue-400"
                      aria-label={t("simStartSoc")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="sim-target" className={labelClass}>
                      {t("simTargetSoc")}
                    </Label>
                    <Input
                      id="sim-target"
                      type="number"
                      min={1}
                      max={100}
                      value={targetSoc}
                      onChange={(e) => setTargetSoc(Math.max(startSoc + 1, Math.min(100, Number(e.target.value))))}
                      className={inputClass}
                    />
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={targetSoc}
                      onChange={(e) => setTargetSoc(Math.max(startSoc + 1, Number(e.target.value)))}
                      className="w-full mt-3 accent-green-600 dark:accent-green-400"
                      aria-label={t("simTargetSoc")}
                    />
                  </div>

                  {/* Temperature */}
                  <div>
                    <Label htmlFor="sim-temp" className={`${labelClass} flex items-center gap-2`}>
                      <Thermometer className="w-4 h-4 text-orange-500" />
                      {t("simTemperature")}
                      <span className="ms-auto text-gray-500 dark:text-gray-400 font-normal">{ambientC} °C</span>
                    </Label>
                    <input
                      id="sim-temp"
                      type="range"
                      min={-10}
                      max={48}
                      value={ambientC}
                      onChange={(e) => setAmbientC(Number(e.target.value))}
                      className="w-full mt-3 accent-orange-500"
                    />
                  </div>

                  {/* Pricing */}
                  <div>
                    <Label htmlFor="sim-pricing" className={labelClass}>
                      {t("simPricing")}
                    </Label>
                    <select
                      id="sim-pricing"
                      value={pricingMode}
                      onChange={(e) => setPricingMode(e.target.value as typeof pricingMode)}
                      className={inputClass}
                    >
                      <option value="residential">{t("simPricingSteg")}</option>
                      <option value="business">{t("simPricingStegPro")}</option>
                      <option value="custom">{t("simPricingCustom")}</option>
                    </select>
                  </div>

                  {pricingMode === "custom" ? (
                    <div>
                      <Label htmlFor="sim-price" className={labelClass}>
                        {t("simPrice")}
                      </Label>
                      <Input
                        id="sim-price"
                        type="number"
                        min={0}
                        max={5}
                        step={0.005}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="sim-monthly" className={labelClass}>
                        {t("simMonthlyBase")}
                      </Label>
                      <Input
                        id="sim-monthly"
                        type="number"
                        min={0}
                        max={5000}
                        step={10}
                        value={monthlyBase}
                        onChange={(e) => setMonthlyBase(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  )}

                  {/* Switches */}
                  <div className="sm:col-span-2 space-y-3 pt-1">
                    <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={applyVehicleLimit}
                        onChange={(e) => setApplyVehicleLimit(e.target.checked)}
                        className="w-4 h-4 accent-blue-600 dark:accent-blue-400"
                      />
                      {t("simApplyLimit")}
                    </label>
                    <label
                      className={`flex items-center gap-3 text-sm cursor-pointer ${
                        charger.kind === "dc"
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={precondition}
                        disabled={charger.kind !== "dc"}
                        onChange={(e) => setPrecondition(e.target.checked)}
                        className="w-4 h-4 accent-blue-600 dark:accent-blue-400"
                      />
                      {t("simPrecondition")}
                    </label>
                  </div>
                </div>

                {/* Vehicle spec sheet */}
                {vehicle && (
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                      <Spec label={t("simVehicleAc")} value={`${nf(vehicle.ac)} kW · ${vehicle.phases}ph`} />
                      <Spec label={t("simVehicleDc")} value={vehicle.dc ? `${vehicle.dc} kW` : t("simNoDcPort")} />
                      <Spec label={t("simArchitecture")} value={vehicle.hv ? "800 V" : "400 V"} />
                      <Spec label={t("simChemistry")} value={vehicle.chem === 1 ? "LFP" : "NMC / NCA"} />
                      <Spec label={t("simConsumption")} value={`${nf(vehicle.cons)} kWh/100 km`} />
                      <Spec
                        label={t("simRatedRange")}
                        value={vehicle.range ? `${vehicle.range} km ${vehicle.cycle?.toUpperCase() ?? ""}` : "—"}
                      />
                    </div>
                    {vehicle.dcRef && (
                      <p className="mt-4 text-xs text-green-700 dark:text-green-400 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        {t("simCalibrated")}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Result panel */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div
              className="h-full rounded-xl bg-gray-900 dark:bg-gray-950 border border-gray-800 p-6 md:p-8 flex flex-col"
              style={{ boxShadow: GOOGLE_ELEVATION.level2 }}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-green-400 mb-3">{t("simResult")}</p>

              <div className="text-5xl md:text-6xl font-semibold text-green-400 leading-none mb-4 tabular-nums">
                {duration(result.minutes)}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t("simEnergyLine")
                  .replace("{energy}", nf(result.energyToBattery))
                  .replace("{power}", nf(result.avgPowerKw, result.avgPowerKw >= 20 ? 0 : 1))}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <Tile label={t("simEnergyBilled")} value={`${nf(result.energyFromGrid)}`} unit="kWh" />
                <Tile
                  label={t("simPeakPower")}
                  value={nf(result.peakPowerKw, result.peakPowerKw >= 20 ? 0 : 1)}
                  unit="kW"
                />
                <Tile
                  label={t("simVehicleLimit")}
                  value={
                    result.vehicleLimitKw > 0
                      ? nf(result.vehicleLimitKw, result.vehicleLimitKw >= 20 ? 0 : 1)
                      : "—"
                  }
                  unit={result.vehicleLimitKw > 0 ? `kW ${charger.kind.toUpperCase()}` : ""}
                />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <Tile label={t("simRangeAdded")} value={String(Math.round(result.kmAdded))} unit="km" />
                <Tile label={t("simCost")} value={nf(pricing.cost, 2)} unit="TND" />
                <Tile label={t("simCostPer100")} value={nf(costPer100km, 2)} unit="TND" />
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {t("simEffectivePrice").replace("{price}", nf(pricing.perKwh, 3))}
                {pricing.steg && (
                  <>
                    {" · "}
                    {t("simPriceBreakdown")
                      .replace("{rate}", String(pricing.steg.after.rateMillimes))
                      .replace("{tranche}", pricing.steg.after.tranche.label)
                      .replace("{vat}", String(Math.round(vatRate(pricing.segment) * 100)))
                      .replace("{levies}", String(leviesMillimes(pricing.steg.after.kwh)))}
                  </>
                )}
                {" · "}
                {t("simEfficiency")} {nf(result.efficiency * 100, 0)} %
              </p>

              {pricing.steg?.crossesTranche && (
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/40 p-4 mb-4">
                  <p className="text-xs font-medium tracking-wide uppercase text-amber-400 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {t("simTrancheJumpTitle")}
                  </p>
                  <p className="text-sm text-amber-100 leading-relaxed">
                    {t("simTrancheJump")
                      .replace("{from}", pricing.steg.before.tranche.label)
                      .replace("{to}", pricing.steg.after.tranche.label)
                      .replace("{rate}", String(pricing.steg.after.rateMillimes))
                      .replace("{price}", nf(pricing.perKwh, 2))
                      .replace("{normal}", nf(pricing.steg.marginalPerKwh, 3))}
                  </p>
                </div>
              )}

              {/* What limits this session */}
              <div className="rounded-lg bg-gray-800/70 dark:bg-gray-900 border border-gray-700 p-4 mb-4">
                <p className="text-xs font-medium tracking-wide uppercase text-gray-400 mb-2 flex items-center gap-2">
                  {result.stalled ? (
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  ) : result.bottleneck === "temperature" ? (
                    <Snowflake className="w-3.5 h-3.5 text-blue-300" />
                  ) : result.bottleneck === "vehicle" ? (
                    <Plug className="w-3.5 h-3.5 text-green-400" />
                  ) : result.bottleneck === "taper" ? (
                    <Gauge className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-green-400" />
                  )}
                  {t("simInsight")}
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">{t(insightKey as "simInsightCharger")}</p>
                {taperSaving && (
                  <p className="text-sm text-gray-400 leading-relaxed mt-2 flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    {t("simTaperTip").replace("{minutes}", duration(taperSaving))}
                  </p>
                )}
              </div>

              <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium py-3"
                >
                  <Route className="w-4 h-4 me-2" />
                  {t("simFindCharger")}
                </Button>
                <Button
                  onClick={() => document.getElementById("for-hosts")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="flex-1 border-gray-600 bg-transparent text-gray-200 hover:bg-gray-800 hover:text-white rounded-lg text-sm font-medium py-3"
                >
                  {t("simHostCta")}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Power curve */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card
              className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
              style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t("simCurveTitle")}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 truncate">{vehicleName}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-blue-600 dark:bg-blue-400 inline-block" />
                    {t("simCurvePower")} (kW)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 border-t-2 border-dashed border-green-600 dark:border-green-400 inline-block" />
                    {t("simCurveSoc")} (%)
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <PowerCurveChart curve={result.curve} formatTime={duration} nf={nf} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Comparison */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card
              className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
              style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{t("simCompareTitle")}</h3>
                <ul className="space-y-2.5">
                  {comparison.map(({ charger: c, minutes, available }) => {
                    const longest = Math.max(...comparison.filter((x) => x.available).map((x) => x.minutes), 1)
                    // Square-root scale: a domestic socket is 20x slower than a
                    // fast charger, and a linear bar would flatten everything.
                    const width = available ? Math.max(4, Math.sqrt(minutes / longest) * 100) : 0
                    const selected = c.id === chargerId
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => setChargerId(c.id)}
                          className={`w-full text-start rounded-lg px-3 py-1.5 transition-colors duration-150 ${
                            selected
                              ? "bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-500"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                        >
                          <div className="flex items-baseline justify-between gap-3 mb-1.5">
                            <span className="text-sm text-gray-900 dark:text-white">
                              <span className="font-medium">{nf(c.kw, c.kw % 1 === 0 ? 0 : 1)} kW</span>
                              <span className="text-gray-500 dark:text-gray-400 ms-1.5 text-xs uppercase">
                                {c.kind}
                              </span>
                            </span>
                            <span
                              className={`text-sm tabular-nums ${
                                available
                                  ? "text-gray-900 dark:text-white font-medium"
                                  : "text-gray-400 dark:text-gray-500 text-xs"
                              }`}
                            >
                              {available ? duration(minutes) : t("simCompareUnavailable")}
                            </span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-300 ${
                                selected ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
                              }`}
                              style={{ width: `${width}%` }}
                            />
                          </div>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
          {t("simDisclaimer").replace("{count}", String(catalogue?.count ?? 500))}{" "}
          {catalogue && (
            <a
              href={catalogue.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700 dark:hover:text-gray-200"
            >
              {catalogue.source}
            </a>
          )}
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">{t("simStegNote")}</p>
      </div>
    </section>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="text-gray-900 dark:text-white font-medium">{value}</dd>
    </div>
  )
}

function Tile({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-lg bg-gray-800/70 dark:bg-gray-900 border border-gray-700 p-3">
      <p className="text-[10px] font-medium tracking-wide uppercase text-gray-400 mb-1 leading-tight">{label}</p>
      <p className="text-lg font-semibold text-white leading-tight tabular-nums">
        {value}
        {unit && <span className="text-xs font-normal text-gray-400 ms-1">{unit}</span>}
      </p>
    </div>
  )
}

/**
 * Power at the plug and state of charge over the session. Hand-drawn SVG:
 * a chart library would cost more bundle than the whole simulator.
 */
function PowerCurveChart({
  curve,
  formatTime,
  nf,
}: {
  curve: CurvePoint[]
  formatTime: (minutes: number) => string
  nf: (value: number, digits?: number) => string
}) {
  const W = 640
  const H = 330
  const pad = { l: 48, r: 48, t: 18, b: 34 }

  if (curve.length < 2) {
    return <div className="h-[240px] w-full flex items-center justify-center text-sm text-gray-400">—</div>
  }

  const maxT = Math.max(curve[curve.length - 1].t, 0.1)
  const maxKw = Math.max(...curve.map((p) => p.kw), 1) * 1.12

  const x = (t: number) => pad.l + (t / maxT) * (W - pad.l - pad.r)
  const yPower = (kw: number) => H - pad.b - (kw / maxKw) * (H - pad.t - pad.b)
  const ySoc = (soc: number) => H - pad.b - (soc / 100) * (H - pad.t - pad.b)

  const powerLine = curve.map((p) => `${x(p.t).toFixed(1)},${yPower(p.kw).toFixed(1)}`).join(" ")
  const socLine = curve.map((p) => `${x(p.t).toFixed(1)},${ySoc(p.soc).toFixed(1)}`).join(" ")
  const area = `M ${x(0)},${H - pad.b} L ${powerLine.split(" ").join(" L ")} L ${x(maxT)},${H - pad.b} Z`

  const powerTicks = [0, 0.5, 1].map((f) => f * maxKw)
  const timeTicks = [0, 0.5, 1].map((f) => f * maxT)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img">
      <defs>
        <linearGradient id="simPowerFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1a73e8" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {powerTicks.map((kw, i) => (
        <g key={i}>
          <line
            x1={pad.l}
            x2={W - pad.r}
            y1={yPower(kw)}
            y2={yPower(kw)}
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="1"
          />
          <text
            x={pad.l - 8}
            y={yPower(kw) + 4}
            textAnchor="end"
            className="fill-gray-500 dark:fill-gray-400"
            fontSize="13"
          >
            {nf(kw, 0)}
          </text>
        </g>
      ))}

      {[0, 50, 100].map((soc) => (
        <text
          key={soc}
          x={W - pad.r + 8}
          y={ySoc(soc) + 4}
          className="fill-gray-500 dark:fill-gray-400"
          fontSize="13"
        >
          {soc}
        </text>
      ))}

      <path d={area} fill="url(#simPowerFill)" />
      <polyline
        points={socLine}
        fill="none"
        strokeDasharray="5 4"
        strokeWidth="2"
        className="stroke-green-600 dark:stroke-green-400"
      />
      <polyline
        points={powerLine}
        fill="none"
        strokeWidth="2.5"
        strokeLinejoin="round"
        className="stroke-blue-600 dark:stroke-blue-400"
      />

      <line
        x1={pad.l}
        x2={W - pad.r}
        y1={H - pad.b}
        y2={H - pad.b}
        className="stroke-gray-300 dark:stroke-gray-600"
        strokeWidth="1"
      />
      {timeTicks.map((t, i) => (
        <text
          key={i}
          x={x(t)}
          y={H - pad.b + 18}
          textAnchor={i === 0 ? "start" : i === timeTicks.length - 1 ? "end" : "middle"}
          className="fill-gray-500 dark:fill-gray-400"
          fontSize="13"
        >
          {formatTime(t)}
        </text>
      ))}
    </svg>
  )
}
