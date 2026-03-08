import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

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
 * - variant?: "default" | "divided"   // default "divided"
 * - size?: "sm" | "md"                // default "md"
 * - className?: string
 */
export function InsightList({
  items = [],
  variant = "divided",
  size = "md",
  className,
}) {
  if (!items?.length) return null

  return (
    <div className={cn("mt-6", className)}>
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
                    className="mt-0.5 shrink-0 rounded-xl border border-slate-200/70 bg-background/70 p-2"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 text-slate-700" />
                  </div>
                ) : null}

                <div className="min-w-0 flex-1">
                  {item.eyebrow ? (
                    <Prose>
                      <p className="m-0 text-xs font-medium tracking-tight text-muted-foreground">
                        {item.eyebrow}
                      </p>
                    </Prose>
                  ) : null}

                  <Prose>
                    <p
                      className={cn(
                        "m-0 font-semibold tracking-tight text-slate-950",
                        size === "sm" ? "text-sm" : "text-base"
                      )}
                    >
                      {item.title}
                    </p>
                  </Prose>

                  {item.description ? (
                    <div className="mt-1">
                      <Prose>
                        <p
                          className={cn(
                            "m-0 text-muted-foreground",
                            size === "sm" ? "text-sm" : "text-sm"
                          )}
                        >
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