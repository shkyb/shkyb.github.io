import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

export function CaseHero({
  className,
  logo,
  projectName,
  headline,
  tags = [],
  cover, // { src, alt, aspect? }
  bgClass,
}) {
  return (
    <section className={cn("w-full", bgClass, className)}>
      {/* Top area (text width = 5xl) */}
      <FullBleedSection bgClass={bgClass} size="text" className="pt-14 pb-8">
        <div className="flex items-center gap-4">
          {logo?.src ? (
            <img
              src={logo.src}
              alt={logo.alt ?? ""}
              className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-md object-contain"
              loading="eager"
            />
          ) : (
            <div className="h-16 w-16 shrink-0 rounded-md bg-muted" />
          )}

          {projectName ? (
            <h1 className="text-lg font-medium text-muted-foreground tracking-tight sm:text-xl">
              {projectName}
            </h1>
          ) : null}
        </div>

        {/* Headline + tags aligned to the logo's left edge */}
        <div className="mt-4 pl-3 sm:pl-20">
          {headline ? (
            <p className="lg:text-balance text-lg font-semibold sm:text-2xl">
              {headline}
            </p>
          ) : null}

          {tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </FullBleedSection>

      {/* Cover (media width = 8xl) */}
      {cover?.src ? (
        <FullBleedSection bgClass={bgClass} size="page" className="pb-8">
          <Card className="overflow-hidden rounded-2xl py-0">
            <div className={cn("w-full", cover.aspect ?? "aspect-video")}>
              <img
                src={cover.src}
                alt={cover.alt ?? ""}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Card>
        </FullBleedSection>
      ) : null}
    </section>
  )
}