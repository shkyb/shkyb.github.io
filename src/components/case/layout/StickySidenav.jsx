import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function StickySidenav({ sections, className }) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const [activeId, setActiveId] = useState(ids[0] || null)

  // Keep latest intersection states across callbacks
  const stateRef = useRef(new Map()) // id -> { isIntersecting, top, bottom }
  const clickLockRef = useRef(false)
  const clickTimerRef = useRef(null)

  useEffect(() => {
    if (!ids.length) return

    // Reset on case change / sections reorder
    setActiveId(ids[0] || null)

    const getEls = () => ids.map((id) => document.getElementById(id)).filter(Boolean)
    const elements = getEls()
    if (!elements.length) return

    // This should match your sticky header + spacing.
    // Also aligns with your "sticky top-24" (~96px) + extra spacing.
    const topOffset = 120

    const pickClosestToTop = () => {
      // don’t fight immediate click selection while smooth-scrolling
      if (clickLockRef.current) return

      // Prefer intersecting sections (within our observer band)
      const entries = Array.from(stateRef.current.entries())
        .map(([id, v]) => ({ id, ...v }))
        .filter((v) => v.isIntersecting)

      if (entries.length) {
        // Choose the section whose top is closest to the activation line
        // (smallest positive distance preferred; if above line, penalize)
        entries.sort((a, b) => {
          const da = a.top - topOffset
          const db = b.top - topOffset
          const sa = da >= 0 ? da : Math.abs(da) * 2
          const sb = db >= 0 ? db : Math.abs(db) * 2
          return sa - sb
        })

        const next = entries[0].id
        setActiveId((prev) => (prev === next ? prev : next))
        return
      }

      // Fallback: nothing intersecting (can happen near extremes)
      // Choose best by DOM positions right now
      let bestId = elements[0]?.id ?? null
      let bestDist = Infinity

      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        // only consider sections that extend below the activation line
        if (rect.bottom <= topOffset) continue

        const dist = Math.abs(rect.top - topOffset)
        if (dist < bestDist) {
          bestDist = dist
          bestId = el.id
        }
      }

      if (bestId) setActiveId((prev) => (prev === bestId ? prev : bestId))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          stateRef.current.set(e.target.id, {
            isIntersecting: e.isIntersecting,
            top: e.boundingClientRect.top,
            bottom: e.boundingClientRect.bottom,
          })
        }
        pickClosestToTop()
      },
      {
        root: null,
        // Top margin = header offset; bottom margin shrinks so "active band" is near top
        rootMargin: `-${topOffset}px 0px -70% 0px`,
        threshold: [0, 0.01, 0.1], // avoid noisy “ratio wars”
      }
    )

    elements.forEach((el) => observer.observe(el))

    // Set once on mount / direct loads / hash
    pickClosestToTop()

    // Re-evaluate after assets load (images can shift layout)
    const onLoad = () => pickClosestToTop()
    window.addEventListener("load", onLoad)

    return () => {
      window.removeEventListener("load", onLoad)
      observer.disconnect()
      stateRef.current.clear()
      if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)
    }
  }, [ids])

  const handleClick = (id) => (e) => {
    e.preventDefault()

    // Set active immediately
    setActiveId(id)

    // Lock observer updates briefly to prevent flicker mid-smooth-scroll
    clickLockRef.current = true
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)

    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })

    clickTimerRef.current = window.setTimeout(() => {
      clickLockRef.current = false
    }, 600)
  }

  return (
    <aside className={cn("hidden lg:block sticky top-1/3 h-fit", className)}>
      <nav className="flex flex-col gap-1">
        {sections.map((s) => {
          const isActive = s.id === activeId
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={handleClick(s.id)}
              className={cn(
                "text-sm transition-colors rounded-md px-2 py-1",
                isActive
                  ? "text-slate-950 bg-slate-100"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              )}
              aria-current={isActive ? "location" : undefined}
            >
              {s.label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}