/**
 * What the same kilometres cost at a Tunisian pump.
 *
 * Fuel is sold at a regulated price here, so the three grades a driver can
 * actually buy are a short, closed list rather than a market average. The
 * figures below are the tariff published by the Ministry of Energy; they are
 * defaults, and every screen that uses them lets the driver override the
 * price.
 */

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

/** Distance used to turn a per-100 km saving into a yearly one. */
export const REFERENCE_ANNUAL_KM = 15000

export interface FuelComparisonInput {
  km: number
  /** Combustion consumption over that distance, L/100 km. */
  consumption: number
  pricePerL: number
  /** What the same distance costs on electricity, TND. */
  electricCost: number
}

export interface FuelComparison {
  litres: number
  /** Cost of the distance at the pump, TND. */
  iceCost: number
  /** Pump cost minus electricity cost — negative when electricity is dearer. */
  saved: number
  /** Share of the fuel bill avoided, 0-1. */
  savedShare: number
  icePer100: number
  evPer100: number
  savedPer100: number
  savedPerYear: number
}

export function compareFuelCost({ km, consumption, pricePerL, electricCost }: FuelComparisonInput): FuelComparison {
  const litres = (km / 100) * consumption
  const iceCost = litres * pricePerL
  const saved = iceCost - electricCost

  const icePer100 = km > 0 ? (iceCost / km) * 100 : 0
  const evPer100 = km > 0 ? (electricCost / km) * 100 : 0
  const savedPer100 = icePer100 - evPer100

  return {
    litres,
    iceCost,
    saved,
    savedShare: iceCost > 0 ? saved / iceCost : 0,
    icePer100,
    evPer100,
    savedPer100,
    savedPerYear: (savedPer100 * REFERENCE_ANNUAL_KM) / 100,
  }
}
