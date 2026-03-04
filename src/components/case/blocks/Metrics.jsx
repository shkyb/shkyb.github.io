import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

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
 * - className?: string
 */
export function Metrics({
  items = [],
  columns,
  variant = "card",
  size = "md",
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
    <div className={cn("mt-6", className)}>
      <div className={cn("grid gap-3 sm:gap-4", gridCols)}>
        {items.map((it, idx) => {
          const Icon = it.icon

          const deltaToneClass =
            it.deltaTone === "good"
              ? "text-emerald-600"
              : it.deltaTone === "bad"
              ? "text-rose-600"
              : "text-muted-foreground"

          return (
            <div
              key={idx}
              className={cn(
                "rounded-2xl",
                variant === "card"
                  ? "border border-slate-200/70 bg-background/60 p-4 backdrop-blur-sm"
                  : "p-0"
              )}
            >
              <div className="flex items-start gap-3">
                {Icon ? (
                  <div
                    className={cn(
                      "mt-0.5 shrink-0 rounded-xl border border-slate-200/70 bg-background/70 p-2"
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 text-slate-700" />
                  </div>
                ) : null}

                <div className="min-w-0 flex-1">
                  {/* label */}
                  <Prose>
                    <p
                      className={cn(
                        "m-0 text-xs font-medium tracking-tight text-muted-foreground",
                        size === "sm" ? "leading-5" : "leading-6"
                      )}
                    >
                      {it.label}
                    </p>
                  </Prose>

                  {/* value + delta */}
                  <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <Prose>
                      <p
                        className={cn(
                          "m-0 font-semibold tracking-tight text-slate-950",
                          size === "sm" ? "text-2xl" : "text-3xl"
                        )}
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
                        <p className="m-0 text-sm text-muted-foreground">{it.note}</p>
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