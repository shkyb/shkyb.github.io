import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CaseHero({
  eyebrow, // e.g. "2024 • UX Case Study"
  title,
  subtitle,
  tags = [],
  meta = [], // [{ label: "Role", value: "UX Designer" }, ...]
  links = [], // [{ label: "Figma", href: "..." }]
  cover, // { src, alt, aspect? } OR { node: <Component/> }
  className,
}) {
  return (
    <header className={cn("space-y-8", className)}>
      <div className="space-y-4">
        {eyebrow ? (
          <p className="text-sm text-muted-foreground">{eyebrow}</p>
        ) : null}

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h1>

          {subtitle ? (
            <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>

        {(tags.length > 0 || links.length > 0) && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}

            {links.map((l) => (
              <Button key={l.href} variant="outline" size="sm" asChild>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>

      {meta.length > 0 && (
        <Card className="rounded-2xl">
          <CardContent className="p-5">
            <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label} className="space-y-1">
                  <dt className="text-xs text-muted-foreground">{m.label}</dt>
                  <dd className="text-sm font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      )}

      {cover ? (
        <Card className="overflow-hidden rounded-2xl">
          {"node" in cover && cover.node ? (
            <div className="w-full">{cover.node}</div>
          ) : (
            <div className={cn("w-full", cover.aspect ?? "aspect-[16/9]")}>
              <img
                src={cover.src}
                alt={cover.alt ?? ""}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          )}
        </Card>
      ) : null}
    </header>
  )
}