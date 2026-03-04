import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

export function CaseHeroOverview({
  className,
  logo,
  projectName,
  headline,
  tags = [],
  cover,
  overviewTitle = "Overview",
  overview,
  links = [],
  meta = [],
}) {
  // logo (64px) + gap-4 (16px) => 80px => pl-20
  return (
    <section className={cn("w-full", className)}>
      {/* Top text area (5xl) */}
      <FullBleedSection size="text" className="pt-16 pb-8">
        <div className="flex items-center gap-4">
          {logo?.src ? (
            <img
              src={logo.src}
              alt={logo.alt ?? ""}
              className="h-16 w-16 shrink-0 rounded-md object-contain"
              loading="eager"
            />
          ) : (
            <div className="h-16 w-16 shrink-0" />
          )}

          {projectName ? (
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {projectName}
            </h1>
          ) : null}
        </div>

        {/* headline + tags aligned with logo's left edge */}
        <div className="mt-4 pl-20">
          {headline ? (
            <p className="text-balance text-lg text-muted-foreground sm:text-xl">
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

      {/* Cover image (8xl) */}
      {cover?.src ? (
        <FullBleedSection size="media" className="pb-10">
          <Card className="overflow-hidden rounded-2xl">
            <div className={cn("w-full", cover.aspect ?? "aspect-[16/9]")}>
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

      {/* Overview + meta (5xl) */}
      <FullBleedSection size="text" className="pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-8">
          {/* Left (~5/8) */}
          <div className="md:col-span-5">
            <h2 className="text-base font-semibold tracking-tight">
              {overviewTitle}
            </h2>

            <div className="mt-3 leading-relaxed text-muted-foreground">
              {typeof overview === "string" ? <p>{overview}</p> : overview}
            </div>

            {links?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {links.map((l) => (
                  <Button
                    key={l.href}
                    variant={l.variant ?? "outline"}
                    size="sm"
                    asChild
                  >
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Right (~3/8) */}
          <Card className="rounded-2xl md:col-span-3">
            <div className="p-5">
              <dl className="space-y-4">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Card>
        </div>
      </FullBleedSection>
    </section>
  )
}