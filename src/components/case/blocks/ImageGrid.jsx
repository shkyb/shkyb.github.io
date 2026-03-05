import { cn } from "@/lib/utils"
import { Figure } from "@/components/case/blocks/Figure"

/**
 * ImageGrid
 *
 * items: Array<{
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
 * }>
 *
 * Props:
 * - cols?: 1 | 2 | 3 | 4
 * - gap?: "sm" | "md" | "lg"
 * - className?: string
 */
export function ImageGrid({ items = [], cols, gap = "md", className }) {
  if (!items?.length) return null

  const colCount = cols ?? Math.min(3, Math.max(1, items.length))

  const gridCols =
    colCount === 1
      ? "grid-cols-1"
      : colCount === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : colCount === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

  const gridGap = gap === "sm" ? "gap-3" : gap === "lg" ? "gap-6" : "gap-4"

  return (
    <div className={cn("grid", gridCols, gridGap, className)}>
      {items.map((it, idx) => (
        <Figure
          key={it.src ?? idx}
          src={it.src}
          alt={it.alt ?? ""}
          type={it.type ?? "auto"}
          caption={it.caption}
          label={it.label}
          credit={it.credit}
          aspect={it.aspect}
          fit={it.fit}
          frame={it.frame}
          loading={it.loading}
          // video passthrough
          controls={it.controls}
          autoPlay={it.autoPlay}
          loop={it.loop}
          muted={it.muted}
          playsInline={it.playsInline}
          poster={it.poster}
        />
      ))}
    </div>
  )
}