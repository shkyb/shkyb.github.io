import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

export function StickySidenav({ sections, className }) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const [activeId, setActiveId] = useState(ids[0] || null)

  useEffect(() => {
    if (!ids.length) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        // This makes “active” switch a bit earlier/later so it feels right with a sticky header
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return (
    <aside className={cn("hidden lg:block sticky top-24 h-fit", className)}>
      <nav className="flex flex-col gap-1">
        {sections.map((s) => {
          const isActive = s.id === activeId
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "text-sm transition-colors rounded-md px-2 py-1",
                isActive ? "text-slate-950 bg-slate-100" : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
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