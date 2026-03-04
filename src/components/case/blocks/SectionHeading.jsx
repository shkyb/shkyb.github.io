import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

/**
 * SectionHeading
 *
 * Props:
 * - id?: string                     // optional anchor target
 * - kicker?: ReactNode              // small label above title (e.g., "Research", "Phase 2")
 * - title: ReactNode                // main heading
 * - subtitle?: ReactNode            // short supporting paragraph
 * - align?: "left" | "center"       // default "left"
 * - size?: "md" | "lg"              // default "md"
 * - divider?: boolean               // default false
 * - actions?: ReactNode             // right-side actions (buttons/links)
 * - className?: string
 */
export function SectionHeading({
  id,
  kicker,
  title,
  subtitle,
  align = "left",
  size = "md",
  divider = false,
  actions,
  className,
}) {
  const isCenter = align === "center"

  return (
    <div id={id} className={cn("space-y-3", className)}>
      <div
        className={cn(
          "flex flex-col gap-4",
          actions ? "md:flex-row md:items-end md:justify-between" : null,
          isCenter ? "items-center text-center" : "items-start text-left"
        )}
      >
        <div className="min-w-0">
          {kicker ? (
            <div
              className={cn(
                "text-sm font-medium tracking-tight text-muted-foreground",
                isCenter ? "mx-auto" : null
              )}
            >
              {kicker}
            </div>
          ) : null}

          <Prose>
            {size === "lg" ? (
              <h2 className={cn(isCenter ? "mx-auto" : null)}>{title}</h2>
            ) : (
              <h2 className={cn("text-2xl font-semibold tracking-tight", isCenter ? "mx-auto" : null)}>
                {title}
              </h2>
            )}
          </Prose>

          {subtitle ? (
            <div className={cn("mt-2 max-w-2xl", isCenter ? "mx-auto" : null)}>
              <Prose>
                <p className="text-muted-foreground">{subtitle}</p>
              </Prose>
            </div>
          ) : null}
        </div>

        {actions ? <div className={cn(isCenter ? "mx-auto" : null)}>{actions}</div> : null}
      </div>

      {divider ? <div className="h-px w-full bg-border" /> : null}
    </div>
  )
}