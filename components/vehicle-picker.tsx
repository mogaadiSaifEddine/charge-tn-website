"use client"

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import { useEvCatalogue } from "@/hooks/use-ev-catalogue"
import { AlertTriangle, ChevronDown, Loader2, Search } from "lucide-react"

export const CUSTOM_VEHICLE = "__custom__"
export const DEFAULT_VEHICLE = "tesla-model-3-long-range-75-11-250"

interface Selection {
  vehicleId: string
  setVehicleId: (id: string) => void
}

const SelectionContext = createContext<Selection | null>(null)

/**
 * Shares one selected car between the charging and CO2 simulators, so the
 * visitor picks their vehicle once.
 */
export function VehicleSelectionProvider({ children }: { children: ReactNode }) {
  const [vehicleId, setVehicleId] = useState<string>(DEFAULT_VEHICLE)
  return <SelectionContext.Provider value={{ vehicleId, setVehicleId }}>{children}</SelectionContext.Provider>
}

/** Falls back to local state when rendered outside a provider. */
export function useVehicleSelection(): Selection {
  const shared = useContext(SelectionContext)
  const [vehicleId, setVehicleId] = useState<string>(DEFAULT_VEHICLE)
  return shared ?? { vehicleId, setVehicleId }
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-200"

export function VehiclePicker({ id }: { id: string }) {
  const { t, language } = useLanguage()
  const { catalogue, error } = useEvCatalogue()
  const { vehicleId, setVehicleId } = useVehicleSelection()

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  useEffect(() => {
    if (error) setVehicleId(CUSTOM_VEHICLE)
  }, [error, setVehicleId])

  const vehicle = catalogue?.models.find((m) => m.id === vehicleId) ?? null
  const q = query.trim().toLowerCase()
  const matches = (catalogue?.models ?? [])
    .filter((m) => !q || `${m.make} ${m.model}`.toLowerCase().includes(q))
    .slice(0, 60)

  const nf = (value: number) =>
    new Intl.NumberFormat(language === "ar" ? "ar-TN" : language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value)

  return (
    <div ref={boxRef}>
      <Label className="text-gray-900 dark:text-white font-medium mb-2 block text-sm">{t("simVehicle")}</Label>
      <div className="relative">
        <button
          type="button"
          id={id}
          onClick={() => setOpen((v) => !v)}
          disabled={!catalogue && !error}
          className={`${inputClass} flex items-center justify-between text-start disabled:opacity-60`}
        >
          <span className="truncate font-medium">
            {!catalogue && !error ? (
              <span className="inline-flex items-center text-gray-500 dark:text-gray-400 font-normal">
                <Loader2 className="w-4 h-4 me-2 animate-spin" />
                {t("simLoading")}
              </span>
            ) : vehicle ? (
              `${vehicle.make} ${vehicle.model} — ${nf(vehicle.net)} kWh`
            ) : (
              t("simVehicleCustom")
            )}
          </span>
          <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-500" />
        </button>

        {open && catalogue && (
          <div className="absolute z-20 mt-2 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
            <div className="p-2 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("simVehiclePlaceholder")}
                className="w-full bg-transparent text-sm text-gray-900 dark:text-white outline-none py-1"
              />
            </div>
            <ul className="max-h-64 overflow-y-auto py-1 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setVehicleId(CUSTOM_VEHICLE)
                    setOpen(false)
                  }}
                  className="w-full text-start px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium"
                >
                  {t("simVehicleCustom")}
                </button>
              </li>
              {matches.map((m) => (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setVehicleId(m.id)
                      setOpen(false)
                    }}
                    className="w-full text-start px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between gap-3"
                  >
                    <span className="text-gray-900 dark:text-white truncate">
                      <span className="font-medium">{m.make}</span> {m.model}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
                      {nf(m.net)} kWh · {m.dc ? `${m.dc} kW DC` : t("simNoDcPort")}
                    </span>
                  </button>
                </li>
              ))}
              {matches.length === 0 && <li className="px-4 py-3 text-gray-500 dark:text-gray-400">{t("simNoMatch")}</li>}
            </ul>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" />
          {t("simError")}
        </p>
      )}
    </div>
  )
}
