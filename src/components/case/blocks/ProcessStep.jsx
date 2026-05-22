import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { Figure } from "./Figure"
import { sp } from "../layout/spacing"

/**
 * ProcessStep
 *
 * Props:
 * - number?: string | number  // large serif number above step, e.g. "01"
 * - step?: ReactNode          // "Step 1", "Phase 01", etc.
 * - title: ReactNode
 * - description?: ReactNode
 * - bullets?: ReactNode[]
 * - figure?: {
 *     src: string
 *     alt?: string
 *     caption?: ReactNode
 *     aspect?: string
 *     frame?: "none" | "soft" | "card"
 *     loading?: "lazy" | "eager"
 *   }
 * - reverse?: boolean
 * - justifyEnd?: boolean
 * - className?: string
 */

export function ProcessStep({
  number,
  step,
  title,
  description,
  bullets,
  figure,
  reverse = false,
  justifyEnd = false,
  figureCols = 6,
  className,
}) {
  const colSpan = {
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
  }
  const textCols = 12 - figureCols

  return (
    <div
      className={cn(
        sp.itemToItem, "grid gap-8 md:grid-cols-12 md:items-start",
        className
      )}
    >
      {/* Text */}
      <div
        className={cn(
          colSpan[textCols],
          justifyEnd && "flex h-full flex-col justify-end",
          reverse ? "md:order-2" : "md:order-1"
        )}
      >
        {number != null ? (
          <span
            className="block font-serif text-5xl font-bold leading-none tabular-nums lining-nums"
            style={{ color: "color-mix(in srgb, var(--project-primary, var(--project-kicker, #334155)) 20%, transparent)" }}
            aria-hidden="true"
          >
            {number}
          </span>
        ) : null}

        {step ? (
          <p
            className={cn("text-xs font-medium uppercase tracking-normal", number != null ? "mt-2" : "")}
            style={{ color: "var(--project-kicker, var(--project-primary, var(--project-foreground, var(--foreground))))" }}
          >
            {step}
          </p>
        ) : null}

        <Prose>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-(--project-foreground,var(--foreground))">
            {title}
          </h3>
        </Prose>

        {description ? (
          <div className="mt-2">
            <Prose>
              <p className="m-0 text-base text-(--project-muted-foreground,var(--muted-foreground))">{description}</p>
            </Prose>
          </div>
        ) : null}

        {bullets?.length ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-(--project-muted-foreground,var(--muted-foreground))">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Figure */}
      {figure ? (
        <div
          className={cn(
            colSpan[figureCols],
            reverse ? "md:order-1" : "md:order-2"
          )}
        >
          <Figure
            frame="soft"
            {...figure}
          />
        </div>
      ) : null}
    </div>
  )
}
