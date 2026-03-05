import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

function getExt(src = "") {
  // strip query/hash
  const clean = src.split("#")[0].split("?")[0]
  const parts = clean.split(".")
  return parts.length > 1 ? parts.pop().toLowerCase() : ""
}

function inferType(src) {
  const ext = getExt(src)
  if (["webm", "mp4", "mov", "m4v", "ogg"].includes(ext)) return "video"
  return "image"
}

/**
 * Figure
 *
 * Supports image + video.
 *
 * Props:
 * - src: string
 * - alt?: string                   // used for images; for video used as aria-label fallback
 * - caption?: ReactNode
 * - label?: ReactNode
 * - credit?: ReactNode
 * - frame?: "none" | "soft" | "card"     // default "soft"
 * - aspect?: string                // e.g. "aspect-[16/9]" | "aspect-video"
 * - fit?: "cover" | "contain"      // image fit only (video uses cover-like behavior)
 * - loading?: "lazy" | "eager"     // image only
 * - type?: "auto" | "image" | "video"    // default "auto"
 *
 * Video props:
 * - controls?: boolean             // default true
 * - autoPlay?: boolean             // default false (if true, we force muted + playsInline)
 * - loop?: boolean                 // default false
 * - muted?: boolean                // default false (auto-enabled if autoPlay)
 * - playsInline?: boolean          // default true
 * - poster?: string                // video poster image
 *
 * - className?: string
 * - imgClassName?: string
 * - mediaClassName?: string        // applies to img/video element
 */
export function Figure({
  src,
  alt = "",
  caption,
  label,
  credit,
  frame = "soft",
  aspect,
  fit = "cover",
  loading = "lazy",
  type = "auto",

  // video
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  poster,

  className,
  imgClassName,
  mediaClassName,
}) {
  if (!src) return null

  const resolvedType = type === "auto" ? inferType(src) : type

  const frameClass =
    frame === "none"
      ? ""
      : frame === "card"
      ? "rounded-2xl border border-slate-200/70 bg-background/60 p-2 backdrop-blur-sm"
      : "rounded-2xl border border-slate-200/70 bg-background/40 backdrop-blur-sm"

  const imgFit = fit === "contain" ? "object-contain" : "object-cover"

  const shouldMute = autoPlay ? true : muted

  return (
    <figure className={cn("space-y-3", className)}>
      <div className={cn("overflow-hidden", frameClass, aspect ? aspect : null)}>
        {resolvedType === "video" ? (
          <video
            className={cn(
              "h-auto w-full",
              aspect ? "h-full object-cover" : null,
              mediaClassName
            )}
            src={src}
            poster={poster}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={shouldMute}
            playsInline={playsInline}
            // Safari sometimes blocks autoplay unless muted+inline; handled above.
            aria-label={alt || "Case study video"}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            className={cn(
              "h-auto w-full",
              aspect ? "h-full" : null,
              imgFit,
              mediaClassName,
              imgClassName
            )}
          />
        )}
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