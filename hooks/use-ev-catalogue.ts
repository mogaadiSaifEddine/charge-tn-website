"use client"

import { useEffect, useState } from "react"
import type { EvModel } from "@/lib/charging-model"

export interface Catalogue {
  count: number
  source: string
  sourceUrl: string
  models: EvModel[]
}

/**
 * The catalogue is ~145 KB, so it is fetched once and shared by every
 * simulator on the page rather than bundled or re-fetched per section.
 */
let pending: Promise<Catalogue> | null = null

function load(): Promise<Catalogue> {
  if (!pending) {
    pending = fetch("/data/ev-models.json").then((r) => {
      if (!r.ok) throw new Error(`ev-models: ${r.status}`)
      return r.json()
    })
  }
  return pending
}

export function useEvCatalogue() {
  const [catalogue, setCatalogue] = useState<Catalogue | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    load()
      .then((data) => {
        if (!cancelled) setCatalogue(data)
      })
      .catch(() => {
        pending = null // allow a later mount to retry
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { catalogue, error }
}
