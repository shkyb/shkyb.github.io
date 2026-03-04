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

    setActiveId(ids[0] || null)

    const getEls = () => ids.map((id) => document.getElementById(id)).filter(Boolean)
    const elements = getEls()
    if (!elements.length) return

    const topOffset = 120

    const pickClosestToTop = () => {
      if (clickLockRef.current) return

      const entries = Array.from(stateRef.current.entries())
        .map(([id, v]) => ({ id, ...v }))
        .filter((v) => v.isIntersecting)

      if (entries.length) {
        // rootMargin already positions the “activation band” near the top.
        // Pick the intersecting section whose top is closest to the topOffset line.
        entries.sort((a, b) => {
          const da = Math.abs(a.top - topOffset)
          const db = Math.abs(b.top - topOffset)
          return da - db
        })

        const next = entries[0].id
        setActiveId((prev) => (prev === next ? prev : next))
        return
      }

      let bestId = elements[0]?.id ?? null
      let bestDist = Infinity

      for (const el of elements) {
        const rect = el.getBoundingClientRect()
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
        rootMargin: `-${topOffset}px 0px -90% 0px`,
        threshold: [0, 0.01, 0.1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    pickClosestToTop()

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
    setActiveId(id)

    clickLockRef.current = true
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)

    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })

    clickTimerRef.current = window.setTimeout(() => {
      clickLockRef.current = false
    }, 600)
  }

  return (
    // Sticky viewport column
    <aside className={cn("h-screen top-0", className)}>
      {/* Position nav content around 1/3 down the screen */}
      <div className="h-full pr-2">
        <nav className="flex flex-col gap-1">
          {sections.map((s) => {
            const isActive = s.id === activeId
            const label = s.label ?? s.title ?? s.id // supports label/title defensively

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
                {label}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}