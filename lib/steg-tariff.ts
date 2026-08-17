/**
 * STEG low-voltage (basse tension) electricity pricing, Tunisia.
 *
 * Sources:
 *   - STEG "Table des tarifs", low-voltage tariffs in force since 1 May 2022,
 *     quoted excluding tax in millimes/kWh.
 *   - Levies and VAT as described on the back of the STEG invoice
 *     (FTE contribution per article 51 of the 2024 finance act).
 *
 * The quirk that matters for an EV: the energy price is NOT marginal. STEG
 * reads the total monthly consumption, picks one rate from that bracket, and
 * applies it to every kWh of the month — which is why the published table
 * shows a single price spanning all the lower tranches. Crossing a bracket
 * therefore re-prices the entire bill, and a car charging at home is by far
 * the easiest way to cross one.
 */

export type Segment = "residential" | "business"

export interface Tranche {
  /** Upper bound of monthly consumption in kWh, Infinity for the last one. */
  max: number
  /** Energy price excluding tax, in millimes per kWh. */
  millimes: number
  /** Display label, e.g. "201-300". */
  label: string
}

/** Residential, "Basse Tension Générale", from 1 May 2022 (excl. tax). */
const RESIDENTIAL: readonly Tranche[] = [
  { max: 50, millimes: 62, label: "1-50" },
  { max: 100, millimes: 96, label: "51-100" },
  { max: 200, millimes: 176, label: "101-200" },
  { max: 300, millimes: 218, label: "201-300" },
  { max: 500, millimes: 341, label: "301-500" },
  { max: Infinity, millimes: 414, label: "501+" },
]

/** Non-residential, same table (the first two tranches are merged at 104). */
const BUSINESS: readonly Tranche[] = [
  { max: 100, millimes: 104, label: "1-100" },
  { max: 200, millimes: 195, label: "101-200" },
  { max: 300, millimes: 240, label: "201-300" },
  { max: 500, millimes: 333, label: "301-500" },
  { max: Infinity, millimes: 391, label: "501+" },
]

/** VAT on the energy price, per the tariff table's footnotes. */
const VAT = { residential: 0.13, business: 0.19 }

/** Contribution au profit des collectivités locales, millimes/kWh. */
const LOCAL_AUTHORITY_MILLIMES = 5

/** Fonds de Transition Énergétique, millimes/kWh (2024 finance act). */
const ENERGY_FUND_MILLIMES = 5

/** The energy fund levy does not apply below this monthly consumption. */
const ENERGY_FUND_EXEMPT_BELOW = 100

export interface BillBreakdown {
  kwh: number
  tranche: Tranche
  /** Energy price excluding tax, millimes/kWh. */
  rateMillimes: number
  energyExclTax: number
  vat: number
  localAuthority: number
  energyFund: number
  broadcasting: number
  /** Everything above, in TND. Excludes the fixed power charge, which does
   *  not change when you plug a car in. */
  total: number
}

function tranchesFor(segment: Segment): readonly Tranche[] {
  return segment === "business" ? BUSINESS : RESIDENTIAL
}

export function trancheFor(monthlyKwh: number, segment: Segment): Tranche {
  const list = tranchesFor(segment)
  return list.find((t) => monthlyKwh <= t.max) ?? list[list.length - 1]
}

/**
 * Contribution RTT (public broadcasting): exempt up to 25 kWh, then
 * 10 millimes per kWh up to 150 and 4 millimes beyond, capped at 3.5 TND
 * per month.
 */
function broadcastingLevy(monthlyKwh: number): number {
  if (monthlyKwh <= 25) return 0
  const millimes = Math.min(monthlyKwh, 150) * 10 + Math.max(0, monthlyKwh - 150) * 4
  return Math.min(millimes, 3500) / 1000
}

/** Full monthly energy bill for a given consumption, in TND. */
export function monthlyBill(monthlyKwh: number, segment: Segment): BillBreakdown {
  const kwh = Math.max(0, monthlyKwh)
  const tranche = trancheFor(kwh, segment)
  const energyExclTax = (kwh * tranche.millimes) / 1000
  const vat = energyExclTax * VAT[segment]
  const localAuthority = (kwh * LOCAL_AUTHORITY_MILLIMES) / 1000
  const energyFund = kwh <= ENERGY_FUND_EXEMPT_BELOW ? 0 : (kwh * ENERGY_FUND_MILLIMES) / 1000
  const broadcasting = broadcastingLevy(kwh)

  return {
    kwh,
    tranche,
    rateMillimes: tranche.millimes,
    energyExclTax,
    vat,
    localAuthority,
    energyFund,
    broadcasting,
    total: energyExclTax + vat + localAuthority + energyFund + broadcasting,
  }
}

export interface SessionPricing {
  /** What this charging session actually adds to the monthly bill, TND. */
  cost: number
  /** cost / kWh — the price the driver really pays, all taxes included. */
  effectivePerKwh: number
  /** Price of one kWh when no bracket is crossed, all taxes included. */
  marginalPerKwh: number
  before: BillBreakdown
  after: BillBreakdown
  /** True when the session moves the month into a higher tranche. */
  crossesTranche: boolean
}

/**
 * Cost of a charging session as the difference it makes to the monthly bill.
 * This is the honest number: when the session tips the household into the
 * next tranche, every kWh of the month is re-priced, and the session can end
 * up costing several times the headline rate.
 */
export function sessionPricing(baseMonthlyKwh: number, sessionKwh: number, segment: Segment): SessionPricing {
  const before = monthlyBill(baseMonthlyKwh, segment)
  const after = monthlyBill(baseMonthlyKwh + sessionKwh, segment)
  const cost = after.total - before.total

  // What a kWh costs while staying inside the current tranche.
  const rate = after.tranche.millimes / 1000
  const levies =
    LOCAL_AUTHORITY_MILLIMES / 1000 +
    (baseMonthlyKwh + sessionKwh > ENERGY_FUND_EXEMPT_BELOW ? ENERGY_FUND_MILLIMES / 1000 : 0) +
    (baseMonthlyKwh + sessionKwh > 150 ? 0.004 : 0.01)
  const marginalPerKwh = rate * (1 + VAT[segment]) + levies

  return {
    cost,
    effectivePerKwh: sessionKwh > 0 ? cost / sessionKwh : marginalPerKwh,
    marginalPerKwh,
    before,
    after,
    crossesTranche: before.tranche.millimes !== after.tranche.millimes,
  }
}

/** Levies added on top of the energy price, in millimes/kWh, for display. */
export function leviesMillimes(monthlyKwh: number): number {
  return (
    LOCAL_AUTHORITY_MILLIMES +
    (monthlyKwh > ENERGY_FUND_EXEMPT_BELOW ? ENERGY_FUND_MILLIMES : 0) +
    (monthlyKwh > 150 ? 4 : 10)
  )
}

export function vatRate(segment: Segment): number {
  return VAT[segment]
}
