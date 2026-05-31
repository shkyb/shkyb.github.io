import { useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

function parseEm(text, accent) {
  const parts = text.split(/\*([^*]+)\*/)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <em key={i} style={{ color: accent }} className="not-italic">{part}</em>
      : part
  )
}

export function NextProject({
  href,
  kicker = "Next project",
  title,
  headline,
  accent,
  image,
  imageAlt = "",
  tags = [],
  className,
}) {
  const [hovered, setHovered] = useState(false)

  if (!href || !title) return null

  return (
    <section className={cn("py-16 md:py-30", className)} aria-label="Next project">
      <Link
        to={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 md:flex-row"
      >
        {/* Flush image — left, 1/3 */}
        <div className="aspect-5/4 shrink-0 overflow-hidden md:w-1/3 md:self-start">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col pl-6 pr-5 pt-5 pb-5 md:flex-1 md:pl-10 md:pr-7 md:pt-7 md:pb-7">
          <p
            className="text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: accent ?? "var(--project-muted-foreground, var(--muted-foreground))" }}
          >
            Next — {kicker}
          </p>

          <h2 className="mt-2 line-clamp-2 font-serif text-2xl font-semibold tracking-tight text-(--project-foreground,var(--foreground)) md:text-3xl">
            {headline ? parseEm(headline, accent) : title}
          </h2>

          {/* Tags + CTA */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground/80">
              {tags.slice(0, 3).map((tag, i) => (
                <span key={tag} className="flex items-center gap-x-3">
                  {i > 0 && <span className="font-light text-muted-foreground/30">/</span>}
                  {tag}
                </span>
              ))}
            </div>

            <span
              className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] inline-flex items-center gap-1.5 px-2 py-1"
              style={{
                color: hovered ? "white" : accent,
                backgroundImage: `linear-gradient(${accent}, ${accent})`,
                backgroundSize: hovered ? "100% 100%" : "0% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                transition: "background-size 0.4s ease-out, color 0.2s ease-out",
              }}
            >
              Read Case Study →
            </span>
          </div>
        </div>

      </Link>
    </section>
  )
}
