import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
  const LOGO = 64
  const GAP = 12 // gap-3

  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Top block — LEFT ALIGNED */}
        <div className="flex flex-col items-start text-left">
          {/* Logo + Project Name (one row) */}
          <div className="flex items-center gap-3">
            {logo?.src ? (
              <img
                src={logo.src}
                alt={logo.alt ?? ""}
                className="h-16 w-16 object-contain"
                loading="eager"
              />
            ) : (
              // keeps alignment if logo missing
              <div className="h-16 w-16" />
            )}

            {projectName ? (
              <span className="text-sm font-medium text-muted-foreground">
                {projectName}
              </span>
            ) : null}
          </div>

          {/* Headline + tags aligned to the LOGO (not the name) */}
          <div className="mt-4" >
            {headline ? (
              <h1 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
                {headline}
              </h1>
            ) : null}

            {tags?.length ? (
              <div className="mt-3 flex flex-wrap justify-start gap-2">
                {tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Cover image */}
        {cover?.src ? (
          <Card className="mt-8 overflow-hidden rounded-2xl">
            <div className={cn("w-full", cover.aspect ?? "aspect-[16/9]")}>
              <img
                src={cover.src}
                alt={cover.alt ?? ""}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Card>
        ) : null}

        {/* Below image — two columns */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-8">
          {/* Left (larger) — Overview */}
          <div className="md:col-span-5">
            <h2 className="text-base font-semibold tracking-tight">
              {overviewTitle}
            </h2>

            <div className="mt-3 text-muted-foreground leading-relaxed">
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

          {/* Right (smaller) — Meta */}
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
      </div>
    </section>
  )
}