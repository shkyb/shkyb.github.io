import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

/**
 * ProblemStatement
 *
 * items: Array<{
 *   label: ReactNode
 *   value: ReactNode
 *   icon?: React.ComponentType<{ className?: string }>
 *   number?: string | number
 * }>
 *
 * Props:
 * - title?: ReactNode
 * - intro?: ReactNode
 * - items: Array<{ label, value }>
 * - variant?: "stack" | "grid"   // default "stack"
 * - className?: string
 */
export function ProblemStatement({
  title,
  intro,
  items = [],
  variant = "stack",
  className,
}) {
  if (!title && !intro && !items?.length) return null

  const isGrid = variant === "grid"

  return (
    <div className={cn(sp.itemToItem, "space-y-6", className)}>
      {(title || intro) ? (
        <div className="max-w-3xl space-y-2">
          {title ? (
            <Prose>
              <h2>{title}</h2>
            </Prose>
          ) : null}

          {intro ? (
            <Prose>
              <p className="text-(--project-muted-foreground,var(--muted-foreground))">{intro}</p>
            </Prose>
          ) : null}
        </div>
      ) : null}

      {items?.length ? (
        <div
          className={cn(
            isGrid
              ? "grid gap-4 md:grid-cols-2"
              : "space-y-4"
          )}
        >
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white/80 p-5 backdrop-blur-sm"
              >
                {item.number != null ? (
                  <span
                    className="shrink-0 font-serif text-5xl font-bold leading-none tabular-nums"
                    style={{ color: "var(--project-primary, var(--project-kicker, #334155))" }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                ) : null}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {Icon ? (
                      <Icon
                        className="h-4 w-4 shrink-0"
                        style={{ color: "var(--project-primary, var(--project-kicker, #334155))" }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <Prose>
                      <p className="m-0 text-sm font-medium text-(--project-muted-foreground,var(--muted-foreground))">
                        {item.label}
                      </p>
                    </Prose>
                  </div>

                  <div className="mt-2">
                    <Prose>
                      <p className="m-0 text-base text-(--project-foreground,var(--foreground))">
                        {item.value}
                      </p>
                    </Prose>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}