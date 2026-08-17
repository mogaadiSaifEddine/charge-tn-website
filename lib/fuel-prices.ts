/**
 * What the same kilometres cost at a Tunisian pump.
 *
 * Fuel is sold at a regulated price here, so the three grades a driver can
 * actually buy are a short, closed list rather than a market average. The
 * figures below are the tariff published by the Ministry of Energy; they are
 * defaults, and every screen that uses them lets the driver override the
 * price.
 */

import { AVERAGE_CHARGING_EFFICIENCY } from "@/lib/emissions"

export type FuelGrade = "unleaded" | "diesel" | "diesel50"

export interface FuelGradeSpec {
  id: FuelGrade
  /** Regulated pump price, TND per litre. */
  pricePerL: number
  /**
   * Consumption of this grade relative to the petrol figure for the same car.
   * A diesel engine covers the same distance on roughly 15 % less fuel, so
   * comparing both at the petrol number would overstate the diesel bill.
   */
  consumptionFactor: number
}

/** Effective date of the regulated tariff below. */
export const FUEL_PRICES_UPDATED = "2022-11-24"

export const FUEL_GRADES: readonly FuelGradeSpec[] = [
  { id: "unleaded", pricePerL: 2.525, consumptionFactor: 1 },
  { id: "diesel", pricePerL: 1.985, consumptionFactor: 0.85 },
  { id: "diesel50", pricePerL: 2.205, consumptionFactor: 0.85 },
] as const

export function getFuelGrade(id: FuelGrade): FuelGradeSpec {
  return FUEL_GRADES.find((g) => g.id === id) ?? FUEL_GRADES[0]
}

/* ------------------------------------------------------------------ *
 * Yearly mileage projected over the life of the car
 * ------------------------------------------------------------------ */

export type SavingsHorizonId = "day" | "month" | "year" | "y3" | "y5" | "y10" | "y20" | "y30"

export interface SavingsHorizon {
  id: SavingsHorizonId
  /** Length of the horizon in years; the short ones are fractions. */
  years: number
}

/**
 * The horizons the savings table runs over. A day and a month make the number
 * tangible; thirty years is roughly how long the driving decision compounds.
 */
export const SAVINGS_HORIZONS: readonly SavingsHorizon[] = [
  { id: "day", years: 1 / 365 },
  { id: "month", years: 1 / 12 },
  { id: "year", years: 1 },
  { id: "y3", years: 3 },
  { id: "y5", years: 5 },
  { id: "y10", years: 10 },
  { id: "y20", years: 20 },
  { id: "y30", years: 30 },
] as const

export interface FuelSavingsInput {
  /** Distance driven in a year, km. */
  annualKm: number
  /** Combustion consumption, L/100 km. */
  iceConsumption: number
  pricePerL: number
  /** EV consumption at the battery, kWh/100 km. */
  evConsumption: number
  pricePerKwh: number
  /** Yearly rise in the pump price, as a fraction: 0.05 is 5 % a year. */
  fuelRise?: number
  /** Yearly rise in the electricity tariff, same units. */
  electricityRise?: number
}

export interface HorizonSaving extends SavingsHorizon {
  km: number
  litres: number
  kwh: number
  /** Cumulative cost over the horizon, TND. */
  iceCost: number
  evCost: number
  saved: number
}

export interface FuelSavings {
  annualLitres: number
  annualKwh: number
  iceCostPerYear: number
  evCostPerYear: number
  savedPerYear: number
  /** Share of the fuel bill avoided, 0-1. */
  savedShare: number
  icePer100: number
  evPer100: number
  savedPer100: number
  horizons: HorizonSaving[]
}

/**
 * Sum of a yearly amount over `years`, with the amount growing by `rate` at
 * the start of every year after the first. A partial year is charged pro rata
 * at the rate the year it falls in.
 */
function accumulate(perYear: number, rate: number, years: number): number {
  const whole = Math.floor(years)
  const frac = years - whole
  const wholeSum = rate === 0 ? whole : ((1 + rate) ** whole - 1) / rate
  return perYear * (wholeSum + frac * (1 + rate) ** whole)
}

export function projectFuelSavings(input: FuelSavingsInput): FuelSavings {
  const {
    annualKm,
    iceConsumption,
    pricePerL,
    evConsumption,
    pricePerKwh,
    fuelRise = 0,
    electricityRise = 0,
  } = input

  // Charging is lossy, so the meter reads more than the pack stores. Billing
  // the pack figure would flatter the electric car.
  const kwhPerKm = evConsumption / 100 / AVERAGE_CHARGING_EFFICIENCY
  const litresPerKm = iceConsumption / 100

  const annualLitres = litresPerKm * annualKm
  const annualKwh = kwhPerKm * annualKm

  const iceCostPerYear = annualLitres * pricePerL
  const evCostPerYear = annualKwh * pricePerKwh
  const savedPerYear = iceCostPerYear - evCostPerYear

  const icePer100 = annualKm > 0 ? (iceCostPerYear / annualKm) * 100 : 0
  const evPer100 = annualKm > 0 ? (evCostPerYear / annualKm) * 100 : 0

  const horizons = SAVINGS_HORIZONS.map((h) => {
    const iceCost = accumulate(iceCostPerYear, fuelRise, h.years)
    const evCost = accumulate(evCostPerYear, electricityRise, h.years)
    return {
      ...h,
      km: annualKm * h.years,
      litres: annualLitres * h.years,
      kwh: annualKwh * h.years,
      iceCost,
      evCost,
      saved: iceCost - evCost,
    }
  })

  return {
    annualLitres,
    annualKwh,
    iceCostPerYear,
    evCostPerYear,
    savedPerYear,
    savedShare: iceCostPerYear > 0 ? savedPerYear / iceCostPerYear : 0,
    icePer100,
    evPer100,
    savedPer100: icePer100 - evPer100,
    horizons,
  }
}
