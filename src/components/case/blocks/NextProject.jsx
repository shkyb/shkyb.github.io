import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Prose } from "../layout/Prose"
import { HiMiniArrowRight } from "react-icons/hi2"

export function NextProject({
  href,
  kicker = "Next project",
  title,
  description,
  image,
  imageAlt = "",
  tags = [],
  className,
}) {
  if (!href || !title) return null

  return (
    <section className={cn("pt-10 md:pt-14", className)} aria-label="Next project">
      <a
        href={href}
        className="group block rounded-3xl border border-slate-200/70 bg-background/60 p-4 transition-colors hover:bg-slate-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 md:p-6"
      >
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Prose>
              <p className="m-0 text-sm font-medium text-muted-foreground">
                {kicker}
              </p>
            </Prose>

            <Prose>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                {title}
              </h2>
            </Prose>

            {description ? (
              <div className="mt-3 max-w-2xl">
                <Prose>
                  <p className="m-0 text-muted-foreground">
                    {description}
                  </p>
                </Prose>
              </div>
            ) : null}

            {tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-5">
              <Button variant="ghost" className="gap-2 px-0 group-hover:translate-x-0.5">
                View project
                <HiMiniArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="aspect-16/10 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <div className="aspect-16/10 w-full" />
              )}
            </div>
          </div>
        </div>
      </a>
    </section>
  )
}