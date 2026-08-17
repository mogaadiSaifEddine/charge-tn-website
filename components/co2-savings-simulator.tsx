"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import { useEvCatalogue } from "@/hooks/use-ev-catalogue"
import { VehiclePicker, useVehicleSelection } from "@/components/vehicle-picker"
import type { Language } from "@/lib/i18n"
import {
  BATTERY_MANUFACTURING_KG_PER_KWH,
  GRID_PRESETS,
  ICE_CONSUMPTION_BY_TYPE,
  calculateEmissions,
  type FuelType,
} from "@/lib/emissions"
import { Fuel, Leaf, Sun, TreeDeciduous, TrendingDown } from "lucide-react"

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

export function Co2SavingsSimulator() {
  const { t, language } = useLanguage()
  const locale = LOCALES[language] ?? "en-GB"
  const { catalogue } = useEvCatalogue()
  const { vehicleId } = useVehicleSelection()

  const vehicle = useMemo(() => catalogue?.models.find((m) => m.id === vehicleId) ?? null, [catalogue, vehicleId])

  const [annualKm, setAnnualKm] = useState("15000")
  const [fuelType, setFuelType] = useState<FuelType>("petrol")
  const [fuelConsumption, setFuelConsumption] = useState("6.5")
  const [electricitySource, setElectricitySource] = useState<"tunisia" | "solar" | "custom">("tunisia")
  const [customFactor, setCustomFactor] = useState("0.500")
  const [includeUpstream, setIncludeUpstream] = useState(false)
  const [fuelPrice, setFuelPrice] = useState("2.525")
  const [electricityPrice, setElectricityPrice] = useState("0.482")
  const [evConsumption, setEvConsumption] = useState("16.5")

  // The chosen car brings its consumption, its pack size and a sensible
  // combustion equivalent for its body style.
  useEffect(() => {
    if (!vehicle) return
    setEvConsumption(String(vehicle.cons))
    setFuelConsumption(String(ICE_CONSUMPTION_BY_TYPE[vehicle.type] ?? ICE_CONSUMPTION_BY_TYPE.passenger_car))
  }, [vehicle])

  const gridFactor =
    electricitySource === "custom" ? Number(customFactor) || 0 : GRID_PRESETS[electricitySource]

  const batteryKwh = vehicle?.net ?? 50

  const result = useMemo(
    () =>
      calculateEmissions({
        annualKm: Math.max(0, Number(annualKm) || 0),
        evConsumption: Math.max(1, Number(evConsumption) || 16.5),
        gridFactor,
        fuelType,
        fuelConsumption: Math.max(0.1, Number(fuelConsumption) || 6.5),
        includeUpstream,
        batteryKwh,
        fuelPricePerL: Number(fuelPrice) || 0,
        electricityPricePerKwh: Number(electricityPrice) || 0,
      }),
    [
      annualKm,
      batteryKwh,
      electricityPrice,
      evConsumption,
      fuelConsumption,
      fuelPrice,
      fuelType,
      gridFactor,
      includeUpstream,
    ],
  )

  /** The same car charged from a host's rooftop solar instead of the grid. */
  const solarResult = useMemo(
    () =>
      calculateEmissions({
        annualKm: Math.max(0, Number(annualKm) || 0),
        evConsumption: Math.max(1, Number(evConsumption) || 16.5),
        gridFactor: GRID_PRESETS.solar,
        fuelType,
        fuelConsumption: Math.max(0.1, Number(fuelConsumption) || 6.5),
        includeUpstream,
        batteryKwh,
        fuelPricePerL: Number(fuelPrice) || 0,
        electricityPricePerKwh: Number(electricityPrice) || 0,
      }),
    [annualKm, batteryKwh, electricityPrice, evConsumption, fuelConsumption, fuelPrice, fuelType, includeUpstream],
  )

  const nf = (value: number, digits = 1) =>
    new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)

  const int = (value: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value)

  const tonnes = result.savedKgPerYear / 1000
  const savedLabel = Math.abs(tonnes) >= 1 ? `${nf(tonnes, 2)} t` : `${int(result.savedKgPerYear)} kg`
  const worseOff = result.savedKgPerYear <= 0

  // Bars are drawn against the larger of the two so the comparison is honest.
  const scale = Math.max(result.evKgPerYear, result.iceKgPerYear, 1)

  return (
    <section id="co2" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
              <Leaf className="w-4 h-4 mr-2" />
              {t("co2Badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
            {t("co2Title")} <span className="text-green-600 dark:text-green-400">{t("co2TitleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("co2Subtitle")}
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
                    <VehiclePicker id="co2-vehicle" />
                  </div>

                  <div>
                    <Label htmlFor="co2-km" className={labelClass}>
                      {t("co2AnnualKm")}
                    </Label>
                    <Input
                      id="co2-km"
                      type="number"
                      min={0}
                      max={200000}
                      step={500}
                      value={annualKm}
                      onChange={(e) => setAnnualKm(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <Label htmlFor="co2-ev-cons" className={labelClass}>
                      {t("co2EvConsumption")}
                    </Label>
                    <Input
                      id="co2-ev-cons"
                      type="number"
                      min={5}
                      max={45}
                      step={0.1}
                      value={evConsumption}
                      onChange={(e) => setEvConsumption(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <Label htmlFor="co2-fuel" className={labelClass}>
                      {t("co2FuelType")}
                    </Label>
                    <select
                      id="co2-fuel"
                      value={fuelType}
                      onChange={(e) => setFuelType(e.target.value as FuelType)}
                      className={inputClass}
                    >
                      <option value="petrol">{t("co2Petrol")}</option>
                      <option value="diesel">{t("co2Diesel")}</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="co2-ice-cons" className={labelClass}>
                      {t("co2IceConsumption")}
                    </Label>
                    <Input
                      id="co2-ice-cons"
                      type="number"
                      min={2}
                      max={25}
                      step={0.1}
                      value={fuelConsumption}
                      onChange={(e) => setFuelConsumption(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <Label htmlFor="co2-source" className={labelClass}>
                      {t("co2Electricity")}
                    </Label>
                    <select
                      id="co2-source"
                      value={electricitySource}
                      onChange={(e) => setElectricitySource(e.target.value as typeof electricitySource)}
                      className={inputClass}
                    >
                      <option value="tunisia">{t("co2GridTunisia")}</option>
                      <option value="solar">{t("co2GridSolar")}</option>
                      <option value="custom">{t("co2GridCustom")}</option>
                    </select>
                  </div>

                  {electricitySource === "custom" && (
                    <div>
                      <Label htmlFor="co2-factor" className={labelClass}>
                        {t("co2Factor")}
                      </Label>
                      <Input
                        id="co2-factor"
                        type="number"
                        min={0}
                        max={2}
                        step={0.005}
                        value={customFactor}
                        onChange={(e) => setCustomFactor(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="co2-fuel-price" className={labelClass}>
                      {t("co2FuelPrice")}
                    </Label>
                    <Input
                      id="co2-fuel-price"
                      type="number"
                      min={0}
                      max={20}
                      step={0.005}
                      value={fuelPrice}
                      onChange={(e) => setFuelPrice(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <Label htmlFor="co2-elec-price" className={labelClass}>
                      {t("co2ElectricityPrice")}
                    </Label>
                    <Input
                      id="co2-elec-price"
                      type="number"
                      min={0}
                      max={5}
                      step={0.005}
                      value={electricityPrice}
                      onChange={(e) => setElectricityPrice(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2 pt-1">
                    <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeUpstream}
                        onChange={(e) => setIncludeUpstream(e.target.checked)}
                        className="w-4 h-4 accent-green-600 dark:accent-green-400"
                      />
                      {t("co2Upstream")}
                    </label>
                  </div>
                </div>

                {/* Annual comparison bars */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">{t("co2CompareTitle")}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between text-sm mb-1.5">
                        <span className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <Fuel className="w-4 h-4 text-gray-500" />
                          {fuelType === "petrol" ? t("co2Petrol") : t("co2Diesel")}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white tabular-nums">
                          {int(result.iceKgPerYear)} kg · {int(result.iceKgPerKm * 1000)} g/km
                        </span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gray-400 dark:bg-gray-500 transition-all duration-300"
                          style={{ width: `${(result.iceKgPerYear / scale) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between text-sm mb-1.5">
                        <span className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                          {t("co2Electric")}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white tabular-nums">
                          {int(result.evKgPerYear)} kg · {int(result.evKgPerKm * 1000)} g/km
                        </span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-green-500 dark:bg-green-400 transition-all duration-300"
                          style={{ width: `${(result.evKgPerYear / scale) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t("co2EnergyLine")
                      .replace("{kwh}", int(result.annualKwh))
                      .replace("{litres}", int(result.annualLitres))}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Result */}
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
              <p className="text-xs font-medium tracking-widest uppercase text-green-400 mb-3">
                {worseOff ? t("co2ResultWorse") : t("co2Result")}
              </p>

              <div className="text-5xl md:text-6xl font-semibold text-green-400 leading-none mb-4 tabular-nums">
                {savedLabel}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t("co2SavedLine").replace("{percent}", nf(Math.abs(result.savedShare) * 100, 0))}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <Tile label={t("co2Electric")} value={int(result.evKgPerKm * 1000)} unit="g/km" />
                <Tile
                  label={fuelType === "petrol" ? t("co2Petrol") : t("co2Diesel")}
                  value={int(result.iceKgPerKm * 1000)}
                  unit="g/km"
                />
                <Tile label={t("co2Trees")} value={int(Math.max(0, result.treesPerYear))} unit="" />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <Tile label={t("co2FuelSaved")} value={nf(result.savedCostPerYear, 0)} unit="TND" />
                <Tile label={t("co2AnnualEnergy")} value={int(result.annualKwh)} unit="kWh" />
              </div>

              {/* Battery manufacturing debt */}
              <div className="rounded-lg bg-gray-800/70 dark:bg-gray-900 border border-gray-700 p-4 mb-4">
                <p className="text-xs font-medium tracking-wide uppercase text-gray-400 mb-2 flex items-center gap-2">
                  <TrendingDown className="w-3.5 h-3.5 text-green-400" />
                  {t("co2BreakEvenTitle")}
                </p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {isFinite(result.breakEvenKm)
                    ? t("co2BreakEven")
                        .replace("{battery}", nf(batteryKwh, 0))
                        .replace("{debt}", int(result.batteryDebtKg))
                        .replace("{km}", int(result.breakEvenKm))
                        .replace("{years}", nf(result.breakEvenYears, 1))
                    : t("co2NeverBreakEven")}
                </p>
              </div>

              {/* Solar hosting angle */}
              {electricitySource !== "solar" && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/40 p-4 mb-4">
                  <p className="text-xs font-medium tracking-wide uppercase text-green-400 mb-2 flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5" />
                    {t("co2SolarTitle")}
                  </p>
                  <p className="text-sm text-green-50 leading-relaxed">
                    {t("co2Solar")
                      .replace("{gkm}", int(solarResult.evKgPerKm * 1000))
                      .replace("{saved}", int(solarResult.savedKgPerYear))}
                  </p>
                </div>
              )}

              <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium py-3"
                >
                  <TreeDeciduous className="w-4 h-4 me-2" />
                  {t("co2Cta")}
                </Button>
                <Button
                  onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="flex-1 border-gray-600 bg-transparent text-gray-200 hover:bg-gray-800 hover:text-white rounded-lg text-sm font-medium py-3"
                >
                  {t("co2BackToSim")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
          {t("co2Note").replace("{battery}", String(BATTERY_MANUFACTURING_KG_PER_KWH))}
        </p>
      </div>
    </section>
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
