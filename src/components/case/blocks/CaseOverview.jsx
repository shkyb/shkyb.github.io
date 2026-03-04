import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

export function CaseOverview({
  id = "overview", // important for sidenav
  bgClass,
  overviewTitle = "Overview",
  overview,
  links = [], // [{ label, href, variant? }]
  meta = [], // [{ label, value }]
}) {
  return (
    <FullBleedSection
      as="section"
      id={id}
      bgClass={bgClass}
      size="text"
      className="scroll-mt-24 pb-16"
    >
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
  )
}