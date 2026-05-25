import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

/**
 * Timeline
 *
 * items: Array<{
 *   title: ReactNode
 *   range?: ReactNode          // e.g. "Week 1–2" or "Jan–Mar 2026"
 *   body?: ReactNode           // short paragraph
 *   bullets?: ReactNode[]      // deliverables / notes
 *   tags?: ReactNode[]         // compact badge-like labels
 *   link?: { label: string, href: string, external?: boolean }
 *   tone?: "neutral" | "info" | "success" | "warning"  // subtle dot color intent
 * }>
 *
 * Props:
 * - variant?: "rail" | "cards"    // default "rail"
 * - compact?: boolean             // default false
 * - className?: string
 */
export function Timeline({
  items = [],
  variant = "rail",
  compact = false,
  className,
}) {
  if (!items?.length) return null

  const pad = compact ? "py-3" : "py-4"

  const dotStyle = (tone) => {
    switch (tone) {
      case "info":
        return { background: "var(--project-kicker, var(--project-primary, #64748b))" }
      case "success":
        return { background: "#10b981" }
      case "warning":
        return { background: "#f59e0b" }
      default:
        return { background: "var(--project-kicker, var(--project-primary, #cbd5e1))" }
    }
  }

  const renderBody = (body, className) => {
    if (!body) return null

    if (typeof body === "string") {
      return (
        <Prose>
          <p className={cn("m-0 text-base text-(--project-muted-foreground,var(--muted-foreground))", className)}>{body}</p>
        </Prose>
      )
    }

    return (
      <Prose>
        <p className={cn("m-0 text-base text-(--project-muted-foreground,var(--muted-foreground))", className)}>{body}</p>
      </Prose>
    )
  }

  if (variant === "cards") {
    return (
      <div className={cn(sp.itemToItem, "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {items.map((it, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-2xl border border-(--project-border,var(--border)) bg-white/80 p-5 backdrop-blur-sm"
            )}
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 rounded-full" style={dotStyle(it.tone)} aria-hidden="true" />
              <div className="min-w-0">
                <Prose>
                  <p className="m-0 text-lg font-semibold tracking-tight text-(--project-foreground,var(--foreground))">{it.title}</p>
                </Prose>
                {it.range ? (
                  <Prose>
                    <p className="m-0 text-xs text-(--project-muted-foreground,var(--muted-foreground))">{it.range}</p>
                  </Prose>
                ) : null}

                {it.body ? <div className="mt-3">{renderBody(it.body)}</div> : null}

                {it.bullets?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-(--project-muted-foreground,var(--muted-foreground))">
                    {it.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {it.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {it.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                {it.link ? (
                  <div className="mt-3">
                    <a
                      className="text-sm font-medium underline underline-offset-4"
                      style={{ color: "var(--project-kicker, var(--project-primary, #64748b))" }}
                      href={it.link.href}
                      target={(it.link.external ?? /^https?:\/\//.test(it.link.href)) ? "_blank" : undefined}
                      rel={(it.link.external ?? /^https?:\/\//.test(it.link.href)) ? "noreferrer" : undefined}
                    >
                      {it.link.label}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Default: "rail" timeline
  return (
    <div className={cn(sp.itemToItem, "relative", className)}>
      {/* vertical rail */}
      <div className="absolute left-2.75 top-0 h-full w-px opacity-20" style={{ background: "var(--project-kicker, var(--project-primary, var(--muted-foreground)))" }} aria-hidden="true" />

      <div className="space-y-4">
        {items.map((it, idx) => (
          <div key={idx} className={cn("relative pl-9", pad)}>
            {/* dot */}
            <span
              className="absolute left-1.5 top-6 h-3 w-3 rounded-full border border-background"
              style={dotStyle(it.tone)}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <Prose>
                  <p className="m-0 text-lg font-semibold tracking-tight text-(--project-foreground,var(--foreground))">{it.title}</p>
                </Prose>
                {it.range ? (
                  <Prose>
                    <p className="m-0 text-xs text-(--project-muted-foreground,var(--muted-foreground))">{it.range}</p>
                  </Prose>
                ) : null}
              </div>

              {it.body ? renderBody(it.body) : null}

              {it.bullets?.length ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-(--project-muted-foreground,var(--muted-foreground))">
                  {it.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                </ul>
              ) : null}

              {it.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {it.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}

              {it.link ? (
                <div className="mt-2">
                  <a
                    className="text-sm font-medium underline underline-offset-4"
                      style={{ color: "var(--project-kicker, var(--project-primary, #64748b))" }}
                    href={it.link.href}
                    target={(it.link.external ?? /^https?:\/\//.test(it.link.href)) ? "_blank" : undefined}
                    rel={(it.link.external ?? /^https?:\/\//.test(it.link.href)) ? "noreferrer" : undefined}
                  >
                    {it.link.label}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
