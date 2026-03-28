import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { Figure } from "./Figure"

/**
 * ProcessStep
 *
 * Props:
 * - step?: ReactNode        // "01", "Step 1", etc.
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
 * - className?: string
 */

export function ProcessStep({
  step,
  title,
  description,
  bullets,
  figure,
  reverse = false,
  className,
}) {
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-12 md:items-start",
        className
      )}
    >
      {/* Text */}
      <div
        className={cn(
          "md:col-span-6",
          reverse ? "md:order-2" : "md:order-1"
        )}
      >
        {step ? (
          <p className="text-sm font-medium text-muted-foreground">
            {step}
          </p>
        ) : null}

        <Prose>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">
            {title}
          </h3>
        </Prose>

        {description ? (
          <div className="mt-2">
            <Prose>
              <p className="m-0 text-muted-foreground">{description}</p>
            </Prose>
          </div>
        ) : null}

        {bullets?.length ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
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
            "md:col-span-6",
            reverse ? "md:order-1" : "md:order-2"
          )}
        >
          <Figure
            src={figure.src}
            alt={figure.alt}
            caption={figure.caption}
            aspect={figure.aspect}
            frame={figure.frame ?? "soft"}
            loading={figure.loading}
          />
        </div>
      ) : null}
    </div>
  )
}
