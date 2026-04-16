import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function StickySidenav({ sections, className }) {
  // Only keep sections that are actually navigable.
  // This prevents empty/invalid rows when a section has no id or no label.
  const navSections = useMemo(
    () => sections.filter((s) => s?.id && s?.label),
    [sections]
  )

  const ids = useMemo(() => navSections.map((s) => s.id), [navSections])
  const [activeId, setActiveId] = useState(ids[0] || null)

  const clickLockRef = useRef(false)
  const clickTimerRef = useRef(null)
  const endReachedRef = useRef(false)

  useEffect(() => {
    if (!ids.length) return

    setActiveId(ids[0] || null)

    const getEls = () => ids.map((id) => document.getElementById(id)).filter(Boolean)
    const elements = getEls()
    if (!elements.length) return

    // Align with sticky header + spacing
    const cssTopOffset = getComputedStyle(document.documentElement)
      .getPropertyValue("--case-top-offset")
      .trim()
    const topOffset = Number.parseInt(cssTopOffset || "120", 10)

    const lastId = ids[ids.length - 1]

    const pickActiveSection = () => {
      if (clickLockRef.current) return

      if (endReachedRef.current && lastId) {
        setActiveId((prev) => (prev === lastId ? prev : lastId))
        return
      }

      let bestId = elements[0]?.id ?? null
      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= topOffset) bestId = el.id
        else break
      }

      if (bestId) setActiveId((prev) => (prev === bestId ? prev : bestId))
    }

    let rafId = null
    const schedulePickActiveSection = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = null
        pickActiveSection()
      })
    }

    // Bottom sentinel: ensures last section can become active even without footer space
    const sentinel = document.getElementById("case-end-sentinel")
    let endObserver = null

    if (sentinel && lastId) {
      endObserver = new IntersectionObserver(
        (entries) => {
          endReachedRef.current = entries.some((e) => e.isIntersecting)
          schedulePickActiveSection()
        },
        { root: null, threshold: 0 }
      )
      endObserver.observe(sentinel)
    }

    // Set once on mount / direct loads / hash
    pickActiveSection()

    // Re-evaluate after assets load (images can shift layout)
    const onLoad = () => schedulePickActiveSection()
    const onScroll = () => schedulePickActiveSection()
    const onResize = () => schedulePickActiveSection()

    window.addEventListener("load", onLoad)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("load", onLoad)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      if (endObserver) endObserver.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
      endReachedRef.current = false
      if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)
    }
  }, [ids])

  const handleClick = (id) => (e) => {
    e.preventDefault()

    setActiveId(id)

    // Lock observer updates briefly to prevent flicker mid-smooth-scroll
    clickLockRef.current = true
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)

    const el = document.getElementById(id)

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" })

    clickTimerRef.current = window.setTimeout(() => {
      clickLockRef.current = false
    }, 600)
  }

  return (
    // NOTE: You said you handle the vertical positioning (1/3) in CaseStudyPage.jsx,
    // so this component stays neutral and just renders the nav content.
    <aside className={cn("h-fit top-0", className)}>
      <div className="h-full pr-2 overflow-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <nav className="flex flex-col gap-1">
          {navSections.map((s) => {
            const isActive = s.id === activeId

            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={handleClick(s.id)}
                className={cn(
                  "group relative rounded-md px-3 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60",
                  isActive
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {s.label}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
