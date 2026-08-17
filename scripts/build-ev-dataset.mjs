/**
 * Builds the compact EV catalogue used by the charging simulator.
 *
 *   node scripts/build-ev-dataset.mjs
 *
 * Source : open-ev-data.json (Open EV Data, 1189 real vehicle records)
 * Target : public/data/ev-models.json (deduplicated, only the fields the
 *          simulator needs, so the browser downloads ~80 KB instead of 3 MB)
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const SOURCE = resolve(root, "open-ev-data.json")
const TARGET = resolve(root, "public/data/ev-models.json")

// Real-world range factors per homologation cycle. WLTP/NEDC/CLTC are
// optimistic, EPA is close to real use. Used to derive consumption.
const CYCLE_REALISM = { epa: 1.0, wltp: 0.85, other: 0.85, nedc: 0.72, cltc: 0.72, jc08: 0.7 }
const CYCLE_PRIORITY = ["epa", "wltp", "other", "nedc", "cltc", "jc08"]

const CHEMISTRY = { "li-ion": 0, nmc: 0, lfp: 1 } // 0 = NMC-like, 1 = LFP

// Plausible real-world consumption band (kWh/100 km). A handful of source
// records carry a wrong range figure, which would otherwise yield absurd
// values such as 3 or 49 kWh/100 km.
const CONS_MIN = 11
const CONS_MAX = 38
const CONS_DEFAULT = { passenger_car: 16.5, suv: 19.5, pickup: 27, van: 23, other: 18 }

const round = (n, d = 1) => (n == null ? null : Number(n.toFixed(d)))

const raw = JSON.parse(readFileSync(SOURCE, "utf8"))

/** Human label for a variant, avoiding "Model 3 Long Range Long Range". */
function buildLabel(v) {
  const parts = [v.model?.name].filter(Boolean)
  const push = (name, slug) => {
    if (!name || !slug || slug === "base" || slug === "standard") return
    const norm = name.toLowerCase()
    if (parts.some((p) => p.toLowerCase().includes(norm))) return
    parts.push(name)
  }
  push(v.variant?.name, v.variant?.slug)
  push(v.trim?.name, v.trim?.slug)
  return parts.join(" ")
}

function pickRange(v) {
  const rated = v.range?.rated ?? []
  for (const cycle of CYCLE_PRIORITY) {
    const hit = rated.find((r) => r.cycle === cycle && r.range_km > 0)
    if (hit) return { km: hit.range_km, cycle }
  }
  return null
}

/** Published DC fast-charge reference (10-80 % style figures), when known. */
function pickDcReference(v) {
  const entries = v.charging?.charging_time?.dc ?? []
  const best = entries.find((e) => e.time_min > 0 && e.to_soc_percent > e.from_soc_percent)
  if (!best) return null
  return {
    kw: best.charger_power_kw,
    from: best.from_soc_percent,
    to: best.to_soc_percent,
    min: best.time_min,
  }
}

function connectorOf(v) {
  const ports = v.charge_ports ?? []
  const dc = ports.find((p) => ["ccs2", "ccs1", "nacs", "chademo", "gb_t_dc", "combo"].includes(p.connector))
  return dc?.connector ?? ports[0]?.connector ?? null
}

const candidates = []

for (const v of raw.vehicles ?? []) {
  const net = v.battery?.pack_capacity_kwh_net
  const ac = v.charging?.ac?.max_power_kw
  if (!net || net < 10 || !ac) continue // plug-in hybrids with tiny packs / no AC data

  const status = v.availability?.status ?? ""
  if (status === "announced") continue // specs not confirmed yet

  const range = pickRange(v)
  const dcKw = v.charging?.dc?.max_power_kw ?? null
  const type = v.vehicle_type ?? "passenger_car"

  // Consumption from the pack and the de-optimised cycle range. Out-of-band
  // results mean the source range is wrong, so fall back to a body estimate.
  const rawCons = range ? (net / (range.km * (CYCLE_REALISM[range.cycle] ?? 0.85))) * 100 : null
  const consOk = rawCons != null && rawCons >= CONS_MIN && rawCons <= CONS_MAX
  const cons = consOk ? rawCons : (CONS_DEFAULT[type] ?? CONS_DEFAULT.passenger_car)

  candidates.push({
    make: v.make?.name ?? "",
    label: buildLabel(v),
    year: v.year ?? 0,
    discontinued: status === "discontinued",
    net: round(net, 1),
    gross: round(v.battery?.pack_capacity_kwh_gross ?? null, 1),
    ac: round(ac, 1),
    // Single phase tops out around 7.4 kW (32 A / 230 V), so anything above
    // that is three-phase regardless of what the record claims.
    phases: ac >= 7.9 ? 3 : (v.charging?.ac?.phases ?? 1),
    dc: dcKw ? round(dcKw, 0) : null,
    // 1 when the pack runs on an 800 V architecture (holds peak power longer)
    hv: v.charging?.dc?.architecture_voltage_class === "800v" ? 1 : 0,
    chem: CHEMISTRY[v.battery?.chemistry] ?? 0,
    heatPump: v.battery?.heat_pump ? 1 : 0,
    rangeKm: range && consOk ? Math.round(range.km) : null,
    cycle: consOk ? (range?.cycle ?? null) : null,
    cons: round(cons, 1),
    consEstimated: consOk ? 0 : 1,
    connector: connectorOf(v),
    dcRef: pickDcReference(v),
    type,
  })
}

// Deduplicate: same car, same pack, same charging hardware -> keep the newest
// production record (it carries the most reliable specs).
const byKey = new Map()
for (const c of candidates) {
  const key = [c.make, c.label, c.net, c.ac, c.dc].join("|")
  const prev = byKey.get(key)
  if (
    !prev ||
    (prev.discontinued && !c.discontinued) ||
    (prev.discontinued === c.discontinued && c.year > prev.year) ||
    (prev.discontinued === c.discontinued && c.year === prev.year && !prev.dcRef && c.dcRef)
  ) {
    byKey.set(key, c)
  }
}

const models = [...byKey.values()]
  .map((c, i) => ({
    id: `${c.make}-${c.label}-${c.net}-${c.ac}-${c.dc ?? 0}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    make: c.make,
    model: c.label,
    year: c.year,
    net: c.net,
    gross: c.gross,
    ac: c.ac,
    phases: c.phases,
    dc: c.dc,
    hv: c.hv,
    chem: c.chem,
    heatPump: c.heatPump,
    range: c.rangeKm,
    cycle: c.cycle,
    cons: c.cons,
    consEst: c.consEstimated,
    connector: c.connector,
    dcRef: c.dcRef,
    type: c.type,
    old: c.discontinued ? 1 : 0,
  }))
  .sort((a, b) => a.make.localeCompare(b.make) || a.model.localeCompare(b.model) || a.net - b.net)

// Guard against id collisions after slugification.
const seen = new Set()
for (const m of models) {
  let id = m.id
  let n = 2
  while (seen.has(id)) id = `${m.id}-${n++}`
  m.id = id
  seen.add(id)
}

const out = {
  source: "Open EV Data",
  sourceUrl: "https://github.com/electric-vehicle-data/open-ev-data",
  sourceGeneratedAt: raw.generated_at ?? null,
  builtAt: new Date().toISOString(),
  count: models.length,
  calibrated: models.filter((m) => m.dcRef).length,
  models,
}

mkdirSync(dirname(TARGET), { recursive: true })
writeFileSync(TARGET, JSON.stringify(out))

console.log(`models: ${models.length} (from ${raw.vehicles.length} records)`)
console.log(`with published DC reference: ${out.calibrated}`)
console.log(`makes: ${new Set(models.map((m) => m.make)).size}`)
console.log(`size: ${(JSON.stringify(out).length / 1024).toFixed(1)} KB`)
console.log("samples:")
for (const m of models.filter((x) => ["Tesla", "Renault", "BYD", "Volkswagen"].includes(x.make)).slice(0, 12)) {
  console.log(`  ${m.make} ${m.model} — ${m.net} kWh, AC ${m.ac} kW/${m.phases}ph, DC ${m.dc} kW, ${m.hv ? "800V" : "400V"}`)
}
