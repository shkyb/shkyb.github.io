import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

/**
 * ProblemStatement
 *
 * items: Array<{
 *   label: ReactNode
 *   value: ReactNode
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
    <div className={cn("space-y-6", className)}>
      {(title || intro) ? (
        <div className="max-w-3xl space-y-2">
          {title ? (
            <Prose>
              <h2>{title}</h2>
            </Prose>
          ) : null}

          {intro ? (
            <Prose>
              <p className="text-muted-foreground">{intro}</p>
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
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/70 bg-background/60 p-5 backdrop-blur-sm"
            >
              <Prose>
                <p className="m-0 text-xs font-medium text-muted-foreground">
                  {item.label}
                </p>
              </Prose>

              <div className="mt-2">
                <Prose>
                  <p className="m-0 text-sm text-foreground">
                    {item.value}
                  </p>
                </Prose>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}