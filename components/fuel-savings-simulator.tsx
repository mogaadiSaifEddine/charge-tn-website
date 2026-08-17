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
import { AVERAGE_CHARGING_EFFICIENCY, ICE_CONSUMPTION_BY_TYPE } from "@/lib/emissions"
import {
  FUEL_GRADES,
  FUEL_PRICES_UPDATED,
  getFuelGrade,
  projectFuelSavings,
  type FuelGrade,
  type HorizonSaving,
} from "@/lib/fuel-prices"
import { Fuel, PiggyBank, Plug, TrendingUp, Zap } from "lucide-react"

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

/** Translation key for each horizon in the projection table. */
const HORIZON_LABELS: Record<HorizonSaving["id"], string> = {
  day: "fuelHDay",
  month: "fuelHMonth",
  year: "fuelHYear",
  y3: "fuelH3",
  y5: "fuelH5",
  y10: "fuelH10",
  y20: "fuelH20",
  y30: "fuelH30",
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-200"

const labelClass = "text-gray-900 dark:text-white font-medium mb-2 block text-sm"

export function FuelSavingsSimulator() {
  const { t, language } = useLanguage()
  const locale = LOCALES[language] ?? "en-GB"
  const { catalogue } = useEvCatalogue()
  const { vehicleId } = useVehicleSelection()

  const vehicle = useMemo(() => catalogue?.models.find((m) => m.id === vehicleId) ?? null, [catalogue, vehicleId])

  const [annualKm, setAnnualKm] = useState("15000")
  const [fuelGrade, setFuelGrade] = useState<FuelGrade>("unleaded")
  const [fuelPrice, setFuelPrice] = useState(FUEL_GRADES[0].pricePerL.toFixed(3))
  const [iceConsumption, setIceConsumption] = useState("6.5")
  const [evConsumption, setEvConsumption] = useState("16.5")
  const [electricityPrice, setElectricityPrice] = useState("0.482")
  const [fuelRise, setFuelRise] = useState("0")
  const [electricityRise, setElectricityRise] = useState("0")

  const grade = useMemo(() => getFuelGrade(fuelGrade), [fuelGrade])

  // Switching grade re-quotes the pump price; the field stays editable because
  // the regulated tariff moves faster than this constant does.
  useEffect(() => {
    setFuelPrice(grade.pricePerL.toFixed(3))
  }, [grade])

  // The combustion car to compare against is the one the driver would have
  // bought instead: same body style, same fuel.
  useEffect(() => {
    const base = ICE_CONSUMPTION_BY_TYPE[vehicle?.type ?? ""] ?? ICE_CONSUMPTION_BY_TYPE.passenger_car
    setIceConsumption((base * grade.consumptionFactor).toFixed(1))
  }, [grade, vehicle])

  useEffect(() => {
    if (vehicle) setEvConsumption(String(vehicle.cons))
  }, [vehicle])

  const km = Math.max(0, Number(annualKm) || 0)

  const savings = useMemo(
    () =>
      projectFuelSavings({
        annualKm: km,
        iceConsumption: Math.max(0.1, Number(iceConsumption) || 6.5),
        pricePerL: Math.max(0, Number(fuelPrice) || 0),
        evConsumption: Math.max(1, Number(evConsumption) || 16.5),
        pricePerKwh: Math.max(0, Number(electricityPrice) || 0),
        fuelRise: (Number(fuelRise) || 0) / 100,
        electricityRise: (Number(electricityRise) || 0) / 100,
      }),
    [electricityPrice, electricityRise, evConsumption, fuelPrice, fuelRise, iceConsumption, km],
  )

  const nf = (value: number, digits = 1) =>
    new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)

  const int = (value: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value)

  /** Long totals are unreadable to the millime; short ones need the detail. */
  const money = (value: number) => (Math.abs(value) >= 100 ? int(value) : nf(value, 2))

  const fuelLabel = (id: FuelGrade) =>
    id === "unleaded" ? t("simFuelUnleaded") : id === "diesel" ? t("simFuelDiesel") : t("simFuelDiesel50")

  const worseOff = savings.savedPerYear < 0

  // Bars are drawn against the larger of the two so the comparison is honest.
  const scale = Math.max(savings.iceCostPerYear, savings.evCostPerYear, 1)

  const accent = worseOff ? "amber" : "green"

  return (
    <section id="fuel-savings" className="py-16 md:py-24 bg-white dark:bg-gray-950">
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
              <PiggyBank className="w-4 h-4 mr-2" />
              {t("fuelBadge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
            {t("fuelTitle")} <span className="text-green-600 dark:text-green-400">{t("fuelTitleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("fuelSubtitle")}
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
                    <VehiclePicker id="fuel-vehicle" />
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="fuel-annual-km" className={labelClass}>
                      {t("fuelAnnualKm")}
                    </Label>
                    <Input
                      id="fuel-annual-km"
                      type="number"
                      min={0}
                      max={200000}
                      step={500}
                      value={annualKm}
                      onChange={(e) => setAnnualKm(e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="range"
                      min={0}
                      max={60000}
                      step={500}
                      value={Math.min(60000, km)}
                      onChange={(e) => setAnnualKm(e.target.value)}
                      aria-label={t("fuelAnnualKm")}
                      className="w-full mt-3 accent-green-600 dark:accent-green-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fuel-ev-cons" className={labelClass}>
                      {t("fuelEvConsumption")}
                    </Label>
                    <Input
                      id="fuel-ev-cons"
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
                    <Label htmlFor="fuel-elec-price" className={labelClass}>
                      {t("fuelElectricityPrice")}
                    </Label>
                    <Input
                      id="fuel-elec-price"
                      type="number"
                      min={0}
                      max={5}
                      step={0.005}
                      value={electricityPrice}
                      onChange={(e) => setElectricityPrice(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* The combustion car this replaces */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-gray-500" />
                    {t("simFuelTitle")}
                  </p>

                  <Label className={labelClass}>{t("simFuelGrade")}</Label>
                  <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={t("simFuelGrade")}>
                    {FUEL_GRADES.map((g) => {
                      const selected = g.id === fuelGrade
                      return (
                        <button
                          key={g.id}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setFuelGrade(g.id)}
                          className={`rounded-lg border px-3 py-3 text-sm text-center transition-colors duration-150 ${
                            selected
                              ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium ring-1 ring-green-500"
                              : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          <span className="block leading-tight">{fuelLabel(g.id)}</span>
                          <span
                            className={`block text-xs mt-1 tabular-nums ${
                              selected ? "text-green-700 dark:text-green-400" : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {nf(g.pricePerL, 3)} TND/L
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div>
                      <Label htmlFor="fuel-ice-cons" className={labelClass}>
                        {t("simFuelConsumption")}
                      </Label>
                      <Input
                        id="fuel-ice-cons"
                        type="number"
                        min={2}
                        max={25}
                        step={0.1}
                        value={iceConsumption}
                        onChange={(e) => setIceConsumption(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <Label htmlFor="fuel-pump-price" className={labelClass}>
                        {t("simFuelPrice")}
                      </Label>
                      <Input
                        id="fuel-pump-price"
                        type="number"
                        min={0}
                        max={20}
                        step={0.005}
                        value={fuelPrice}
                        onChange={(e) => setFuelPrice(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Optional yearly price drift */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    {t("fuelAssumptions")}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fuel-rise" className={labelClass}>
                        {t("fuelFuelRise")}
                      </Label>
                      <Input
                        id="fuel-rise"
                        type="number"
                        min={0}
                        max={30}
                        step={0.5}
                        value={fuelRise}
                        onChange={(e) => setFuelRise(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <Label htmlFor="fuel-elec-rise" className={labelClass}>
                        {t("fuelElectricityRise")}
                      </Label>
                      <Input
                        id="fuel-elec-rise"
                        type="number"
                        min={0}
                        max={30}
                        step={0.5}
                        value={electricityRise}
                        onChange={(e) => setElectricityRise(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* A year of fuel against a year of charge */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between text-sm mb-1.5">
                      <span className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-gray-500" />
                        {t("fuelIceLabel")}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white tabular-nums">
                        {int(savings.iceCostPerYear)} TND · {int(savings.annualLitres)} L
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gray-400 dark:bg-gray-500 transition-all duration-300"
                        style={{ width: `${(savings.iceCostPerYear / scale) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between text-sm mb-1.5">
                      <span className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <Plug className="w-4 h-4 text-green-600 dark:text-green-400" />
                        {t("fuelEvLabel")}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white tabular-nums">
                        {int(savings.evCostPerYear)} TND · {int(savings.annualKwh)} kWh
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-green-500 dark:bg-green-400 transition-all duration-300"
                        style={{ width: `${(savings.evCostPerYear / scale) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Headline result */}
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
              <p
                className={`text-xs font-medium tracking-widest uppercase mb-3 ${
                  worseOff ? "text-amber-400" : "text-green-400"
                }`}
              >
                {worseOff ? t("fuelWorsePerYear") : t("fuelPerYear")}
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span
                  className={`text-5xl md:text-6xl font-semibold leading-none tabular-nums ${
                    worseOff ? "text-amber-400" : "text-green-400"
                  }`}
                >
                  {money(Math.abs(savings.savedPerYear))}
                </span>
                <span className={`text-lg ${worseOff ? "text-amber-200" : "text-green-200"}`}>TND</span>
                <span className="ms-auto text-sm text-gray-400 tabular-nums">
                  {nf(Math.abs(savings.savedShare) * 100, 0)} %
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t("fuelPerYearLine")
                  .replace("{km}", int(km))
                  .replace("{litres}", int(savings.annualLitres))
                  .replace("{fuel}", fuelLabel(fuelGrade))
                  .replace("{ice}", int(savings.iceCostPerYear))
                  .replace("{kwh}", int(savings.annualKwh))
                  .replace("{ev}", int(savings.evCostPerYear))}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <Tile label={t("fuelIceLabel")} value={nf(savings.icePer100, 2)} unit="TND/100 km" />
                <Tile label={t("fuelEvLabel")} value={nf(savings.evPer100, 2)} unit="TND/100 km" />
                <Tile
                  label={worseOff ? t("simFuelWorseTitle") : t("simFuelSavedTitle")}
                  value={nf(Math.abs(savings.savedPer100), 2)}
                  unit="TND/100 km"
                  accent={accent}
                />
              </div>

              <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium py-3"
                >
                  <Zap className="w-4 h-4 me-2" />
                  {t("fuelCta")}
                </Button>
                <Button
                  onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="flex-1 border-gray-600 bg-transparent text-gray-200 hover:bg-gray-800 hover:text-white rounded-lg text-sm font-medium py-3"
                >
                  {t("fuelBackToSim")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Day, month, year and the decades after that */}
        <motion.div
          className="mt-10"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{t("fuelHorizonTitle")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t("fuelHorizonSubtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {savings.horizons.map((h) => (
              <div
                key={h.id}
                className={`rounded-xl border p-4 transition-colors duration-200 ${
                  worseOff
                    ? "border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-900/10"
                    : "border-green-200 dark:border-green-900/60 bg-green-50/60 dark:bg-green-900/10"
                }`}
                style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
              >
                <p className="text-xs font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400 mb-2">
                  {t(HORIZON_LABELS[h.id] as Parameters<typeof t>[0])}
                </p>
                <p
                  className={`text-2xl font-semibold leading-tight tabular-nums ${
                    worseOff ? "text-amber-600 dark:text-amber-400" : "text-green-700 dark:text-green-400"
                  }`}
                >
                  {money(Math.abs(h.saved))}
                  <span className="text-xs font-normal text-gray-500 dark:text-gray-400 ms-1.5">TND</span>
                </p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed tabular-nums">
                  {int(h.km)} km
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed tabular-nums">
                  {t("fuelHorizonDetail").replace("{ice}", money(h.iceCost)).replace("{ev}", money(h.evCost))}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
          {t("fuelNote").replace("{efficiency}", int(AVERAGE_CHARGING_EFFICIENCY * 100))}
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
          {t("simFuelNote")
            .replace(
              "{date}",
              new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(FUEL_PRICES_UPDATED)),
            )
            .replace("{unleaded}", nf(getFuelGrade("unleaded").pricePerL, 3))
            .replace("{diesel}", nf(getFuelGrade("diesel").pricePerL, 3))
            .replace("{diesel50}", nf(getFuelGrade("diesel50").pricePerL, 3))}
        </p>
      </div>
    </section>
  )
}

function Tile({
  label,
  value,
  unit,
  accent,
}: {
  label: string
  value: string
  unit: string
  accent?: "green" | "amber"
}) {
  const valueColor = accent === "green" ? "text-green-400" : accent === "amber" ? "text-amber-400" : "text-white"
  return (
    <div className="rounded-lg bg-gray-800/70 dark:bg-gray-900 border border-gray-700 p-3">
      <p className="text-[10px] font-medium tracking-wide uppercase text-gray-400 mb-1 leading-tight">{label}</p>
      <p className={`text-lg font-semibold leading-tight tabular-nums ${valueColor}`}>
        {value}
        {unit && <span className="text-[10px] font-normal text-gray-400 ms-1">{unit}</span>}
      </p>
    </div>
  )
}
