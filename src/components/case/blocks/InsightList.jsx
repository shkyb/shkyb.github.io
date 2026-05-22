import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

/**
 * InsightList
 *
 * items: Array<{
 *   title: ReactNode
 *   description?: ReactNode
 *   eyebrow?: ReactNode
 *   icon?: React.ComponentType<{ className?: string }>
 * }>
 *
 * Props:
 * - variant?: "default" | "divided" | "cards"   // default "divided"
 * - cols?: 1 | 2 | 3 | 4                        // cards only, default auto (min(3, items.length))
 * - size?: "sm" | "md"                           // default "md"
 * - className?: string
 */
export function InsightList({
  items = [],
  variant = "divided",
  cols,
  size = "md",
  className,
}) {
  if (!items?.length) return null

  const iconStyle = { color: "var(--project-primary, var(--project-kicker, #334155))" }

  const titleClass = cn(
    "m-0 font-semibold tracking-tight text-(--project-foreground,var(--foreground))",
    size === "sm" ? "text-base" : "text-lg"
  )

  if (variant === "cards") {
    const colCount = cols ?? Math.min(3, Math.max(1, items.length))
    const gridCols =
      colCount === 1 ? "grid-cols-1" :
      colCount === 2 ? "grid-cols-1 sm:grid-cols-2" :
      colCount === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
                       "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

    return (
      <div className={cn(sp.itemToItem, "grid gap-4", gridCols, className)}>
        {items.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="flex flex-col gap-3 rounded-2xl border border-border bg-white/80 p-5 backdrop-blur-sm">
              {Icon ? (
                <div className="inline-flex w-fit rounded-xl border border-border bg-white p-2" aria-hidden="true">
                  <Icon className="h-5 w-5" style={iconStyle} />
                </div>
              ) : null}

              <div className="min-w-0">
                {item.eyebrow ? (
                  <Prose>
                    <p className="m-0 text-sm font-medium tracking-tight text-(--project-muted-foreground,var(--muted-foreground))">
                      {item.eyebrow}
                    </p>
                  </Prose>
                ) : null}

                <Prose>
                  <p className={titleClass}>{item.title}</p>
                </Prose>

                {item.description ? (
                  <div className="mt-1">
                    <Prose>
                      <p className="m-0 text-base text-(--project-muted-foreground,var(--muted-foreground))">
                        {item.description}
                      </p>
                    </Prose>
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn(sp.itemToItem, className)}>
      <div className="space-y-0">
        {items.map((item, idx) => {
          const Icon = item.icon

          return (
            <div
              key={idx}
              className={cn(
                "py-4",
                variant === "divided" && idx !== 0 ? "border-t border-border" : null
              )}
            >
              <div className="flex items-start gap-3">
                {Icon ? (
                  <div
                    className="mt-0.5 shrink-0 rounded-xl border border-border bg-white/80 p-2"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" style={iconStyle} />
                  </div>
                ) : null}

                <div className="min-w-0 flex-1">
                  {item.eyebrow ? (
                    <Prose>
                      <p className="m-0 text-sm font-medium tracking-tight text-(--project-muted-foreground,var(--muted-foreground))">
                        {item.eyebrow}
                      </p>
                    </Prose>
                  ) : null}

                  <Prose>
                    <p className={titleClass}>{item.title}</p>
                  </Prose>

                  {item.description ? (
                    <div className="mt-1">
                      <Prose>
                        <p className="m-0 text-base text-(--project-muted-foreground,var(--muted-foreground))">
                          {item.description}
                        </p>
                      </Prose>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}