import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

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
    <div id={id} className={cn("space-y-3", sp.sectionToContent, "[&_h2_em]:italic [&_h2_em]:text-(--project-kicker,var(--project-primary,currentColor))", className)}>
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
                "mb-5 flex items-center gap-3 text-xs font-bold font-mono uppercase tracking-[0.14em]",
                isCenter ? "mx-auto" : null
              )}
              style={{ color: "var(--project-kicker, var(--project-primary, var(--muted-foreground)))" }}
            >
              {kicker}
              <span className="block h-px w-10 shrink-0 bg-current opacity-40" aria-hidden="true" />
            </div>
          ) : null}

          {title ? (
            <Prose>
              {size === "lg" ? (
                <h2 className={cn(isCenter ? "mx-auto" : null)}>{title}</h2>
              ) : (
                <h2 className={cn("font-serif text-3xl font-semibold tracking-tight", isCenter ? "mx-auto" : null)}>
                  {title}
                </h2>
              )}
            </Prose>
          ) : null}

          {subtitle ? (
            <div className={cn("mt-4 max-w-2xl", isCenter ? "mx-auto" : null)}>
              <Prose>
                <p className="text-(--project-muted-foreground,var(--muted-foreground))">{subtitle}</p>
              </Prose>
            </div>
          ) : null}
        </div>

        {actions ? <div className={cn(isCenter ? "mx-auto" : null)}>{actions}</div> : null}
      </div>

      {divider ? <div className="h-px mt-6 w-full opacity-40" style={{ background: "var(--project-kicker, var(--project-primary, var(--border)))" }} /> : null}
    </div>
  )
}