import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

/**
 * Figure
 *
 * Props:
 * - src: string
 * - alt: string
 * - caption?: ReactNode
 * - label?: ReactNode        // small label above caption (e.g., "Fig 01")
 * - credit?: ReactNode       // small trailing text (e.g., "Source: ...")
 * - frame?: "none" | "soft" | "card"   // default "soft"
 * - aspect?: string          // e.g. "aspect-[16/9]" | "aspect-video" (optional)
 * - fit?: "cover" | "contain"          // default "cover"
 * - loading?: "lazy" | "eager"         // default "lazy"
 * - className?: string
 * - imgClassName?: string
 */
export function Figure({
  src,
  alt,
  caption,
  label,
  credit,
  frame = "soft",
  aspect,
  fit = "cover",
  loading = "lazy",
  className,
  imgClassName,
}) {
  const frameClass =
    frame === "none"
      ? ""
      : frame === "card"
      ? "rounded-2xl border border-slate-200/70 bg-background/60 p-2 backdrop-blur-sm"
      : "rounded-2xl border border-slate-200/70 bg-background/40 backdrop-blur-sm"

  const imgFit = fit === "contain" ? "object-contain" : "object-cover"

  return (
    <figure className={cn("space-y-3", className)}>
      <div className={cn("overflow-hidden", frameClass, aspect ? aspect : null)}>
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={cn("h-auto w-full", aspect ? "h-full" : null, imgFit, imgClassName)}
        />
      </div>

      {(caption || label || credit) ? (
        <figcaption className="space-y-1">
          {label ? (
            <Prose>
              <p className="m-0 text-xs font-medium text-muted-foreground">{label}</p>
            </Prose>
          ) : null}

          {caption ? (
            <Prose>
              <p className="m-0 text-sm text-muted-foreground">{caption}</p>
            </Prose>
          ) : null}

          {credit ? (
            <Prose>
              <p className="m-0 text-xs text-muted-foreground">{credit}</p>
            </Prose>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  )
}