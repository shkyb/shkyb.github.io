import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

/**
 * Metrics
 *
 * items: Array<{
 *   label: ReactNode
 *   value: ReactNode
 *   note?: ReactNode        // small supporting text under value
 *   delta?: ReactNode       // e.g. "+18%" or "–32%"
 *   deltaTone?: "good" | "bad" | "neutral"
 *   icon?: React.ComponentType<{ className?: string }>
 * }>
 *
 * Props:
 * - columns?: 1 | 2 | 3 | 4        // optional, otherwise auto
 * - variant?: "plain" | "card"     // default "card"
 * - size?: "sm" | "md"             // typography density
 * - align?: "start" | "center"     // default "start"; center stacks icon above label
 * - className?: string
 */
export function Metrics({
  items = [],
  columns,
  variant = "card",
  size = "md",
  align = "start",
  className,
}) {
  if (!items?.length) return null

  const colCount = columns ?? Math.min(4, Math.max(1, items.length))

  const gridCols =
    colCount === 1
      ? "grid-cols-1"
      : colCount === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : colCount === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

  return (
    <div className={cn(sp.itemToItem, className)}>
      <div className={cn("grid gap-3 sm:gap-4", gridCols)}>
        {items.map((it, idx) => {
          const Icon = it.icon

          const deltaToneClass =
            it.deltaTone === "good"
              ? "text-emerald-600"
              : it.deltaTone === "bad"
              ? "text-rose-600"
              : "text-(--project-muted-foreground,var(--muted-foreground))"

          return (
            <div
              key={idx}
              className={cn(
                "rounded-2xl",
                variant === "card"
                  ? "border border-border bg-white/80 p-4 backdrop-blur-sm"
                  : "p-0"
              )}
            >
              <div className={cn(
                "flex gap-3",
                align === "center" ? "flex-col items-center text-center" : "items-start"
              )}>
                {Icon ? (
                  <div
                    className={cn(
                      "shrink-0 rounded-xl border border-border bg-white/80 p-2",
                      align === "start" && "mt-0.5"
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" style={{ color: "var(--project-primary, var(--project-kicker, #334155))" }} />
                  </div>
                ) : null}

                <div className={cn("min-w-0 flex-1", align === "center" && "flex flex-col items-center")}>
                  {/* label */}
                  <Prose>
                    <p
                      className={cn(
                        "m-0 text-xs font-semibold uppercase tracking-normal text-(--project-muted-foreground,var(--muted-foreground))",
                        size === "sm" ? "leading-5" : "leading-6"
                      )}
                    >
                      {it.label}
                    </p>
                  </Prose>

                  {/* value + delta */}
                  <div className={cn(
                    "mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1",
                    align === "center" && "justify-center"
                  )}>
                    <Prose>
                      <p
                        className={cn(
                          "m-0 font-serif font-bold tracking-tight lining-nums tabular-nums",
                          size === "sm" ? "text-3xl" : "text-4xl"
                        )}
                        style={{ color: "var(--project-kicker, var(--project-primary, var(--project-foreground, var(--foreground))))" }}
                      >
                        {it.value}
                      </p>
                    </Prose>

                    {it.delta ? (
                      <Prose>
                        <p className={cn("m-0 text-sm font-medium", deltaToneClass)}>
                          {it.delta}
                        </p>
                      </Prose>
                    ) : null}
                  </div>

                  {/* note */}
                  {it.note ? (
                    <div className="mt-2">
                      <Prose>
                        <p className="m-0 text-sm text-(--project-muted-foreground,var(--muted-foreground))">{it.note}</p>
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