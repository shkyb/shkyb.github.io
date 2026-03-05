import { cn } from "@/lib/utils"
import { Figure } from "@/components/case/blocks/Figure"

/**
 * BeforeAfter
 *
 * before/after support both image and video via Figure.
 *
 * before: {
 *   src: string
 *   alt?: string
 *   type?: "auto" | "image" | "video"
 *   caption?: ReactNode
 *   label?: ReactNode
 *   credit?: ReactNode
 *   aspect?: string
 *   fit?: "cover" | "contain"
 *   frame?: "none" | "soft" | "card"
 *   loading?: "lazy" | "eager"
 *
 *   // video passthrough
 *   controls?: boolean
 *   autoPlay?: boolean
 *   loop?: boolean
 *   muted?: boolean
 *   playsInline?: boolean
 *   poster?: string
 * }
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
          alt={before.alt ?? ""}
          type={before.type ?? "auto"}
          label={before.label ?? "Before"}
          caption={before.caption}
          credit={before.credit}
          aspect={before.aspect}
          fit={before.fit}
          frame={before.frame ?? "soft"}
          loading={before.loading}
          // video passthrough
          controls={before.controls}
          autoPlay={before.autoPlay}
          loop={before.loop}
          muted={before.muted}
          playsInline={before.playsInline}
          poster={before.poster}
        />

        <Figure
          src={after.src}
          alt={after.alt ?? ""}
          type={after.type ?? "auto"}
          label={after.label ?? "After"}
          caption={after.caption}
          credit={after.credit}
          aspect={after.aspect}
          fit={after.fit}
          frame={after.frame ?? "soft"}
          loading={after.loading}
          // video passthrough
          controls={after.controls}
          autoPlay={after.autoPlay}
          loop={after.loop}
          muted={after.muted}
          playsInline={after.playsInline}
          poster={after.poster}
        />
      </div>

      {note ? <p className="text-sm text-muted-foreground">{note}</p> : null}
    </div>
  )
}