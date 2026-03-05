import { cn } from "@/lib/utils"
import { Figure } from "@/components/case/blocks/Figure"

/**
 * BeforeAfter
 *
 * Props:
 * - before: {
 *     src: string
 *     alt: string
 *     caption?: ReactNode
 *     label?: ReactNode      // optional override; default "Before"
 *     aspect?: string
 *     fit?: "cover" | "contain"
 *     frame?: "none" | "soft" | "card"
 *   }
 * - after: same shape, default label "After"
 * - layout?: "stack" | "split"          // default "split" (stack on mobile anyway)
 * - gap?: "sm" | "md" | "lg"            // default "md"
 * - note?: ReactNode                    // optional note below comparison
 * - className?: string
 */
export function BeforeAfter({
  before,
  after,
  layout = "split",
  gap = "md",
  note,
  className,
}) {
  if (!before?.src || !after?.src) return null

  const gridGap = gap === "sm" ? "gap-3" : gap === "lg" ? "gap-6" : "gap-4"

  const isStack = layout === "stack"

  return (
    <div className={cn("space-y-3", className)}>
      <div
        className={cn(
          "grid",
          gridGap,
          isStack ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
        )}
      >
        <Figure
          src={before.src}
          alt={before.alt}
          label={before.label ?? "Before"}
          caption={before.caption}
          aspect={before.aspect}
          fit={before.fit}
          frame={before.frame ?? "soft"}
        />

        <Figure
          src={after.src}
          alt={after.alt}
          label={after.label ?? "After"}
          caption={after.caption}
          aspect={after.aspect}
          fit={after.fit}
          frame={after.frame ?? "soft"}
        />
      </div>

      {note ? (
        <p className="text-sm text-muted-foreground">{note}</p>
      ) : null}
    </div>
  )
}