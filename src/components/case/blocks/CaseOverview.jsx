import React from "react"
import { Button } from "@/components/ui/button"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"
import { Prose } from "../layout/Prose"
import { HiMiniArrowUpRight } from "react-icons/hi2"

function isExternalHref(href) {
  return /^https?:\/\//.test(href)
}

function MetaValue({ value }) {
  if (!value) return null

  if (Array.isArray(value) && value.length && typeof value[0] === "object" && value[0]?.name) {
    return (
      <>
        {value.map((m, i) => (
          <span key={`${m.name}-${i}`}>
            {m.href ? (
              <a
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-(--project-border,var(--border)) hover:decoration-(--project-muted-foreground,var(--muted-foreground)) transition-colors duration-200"
              >
                {m.name}
              </a>
            ) : (
              m.name
            )}
            {i < value.length - 1 ? ", " : ""}
          </span>
        ))}
      </>
    )
  }

  if (typeof value === "string") return value
  return value
}

export function CaseOverview({
  id = "overview",
  bgClass,
  overviewTitle = "Overview",
  overview,
  links = [],
  meta = [],
}) {
  const paragraphs = Array.isArray(overview)
    ? overview
    : typeof overview === "string"
    ? [overview]
    : null

  const accentBorder = {
    borderColor: "var(--project-kicker, var(--project-primary, var(--border)))",
  }

  return (
    <FullBleedSection
      as="section"
      id={id}
      bgClass={bgClass}
      size="fill"
      className="scroll-mt-(--case-top-offset) py-16 md:py-20"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-8 md:gap-16">

        {/* Left: overview text (5/8) */}
        <div className="md:col-span-5 space-y-4">
          <div
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--project-kicker, var(--project-primary, var(--muted-foreground)))" }}
          >
            {overviewTitle}
            <span className="block h-px w-10 shrink-0 bg-current opacity-40" aria-hidden="true" />
          </div>
          {paragraphs ? (
            paragraphs.map((p, i) =>
              typeof p === "string" ? (
                <Prose key={i}><p className="m-0">{p}</p></Prose>
              ) : (
                <React.Fragment key={i}>{p}</React.Fragment>
              )
            )
          ) : overview ? (
            <Prose>{overview}</Prose>
          ) : null}

          {links?.length ? (
            <div className="pt-4 flex flex-wrap gap-2">
              {links.map((l) => {
                const Icon = l.icon || HiMiniArrowUpRight
                const external = l.external ?? isExternalHref(l.href)
                return (
                  <Button
                    key={l.href}
                    variant={l.variant ?? "outline"}
                    size={l.size ?? "lg"}
                    asChild
                    className="gap-2"
                  >
                    <a
                      href={l.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      <span>{l.label}</span>
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    </a>
                  </Button>
                )
              })}
            </div>
          ) : null}
        </div>

        {/* Right: meta factsheet (3/8) */}
        {meta?.length ? (
          <div className="md:col-span-3">
            <dl className="space-y-6">
              {meta.map((m) => (
                <div key={m.label} className="border-l-2 pl-4" style={accentBorder}>
                  <dt className="text-xs font-medium uppercase tracking-widest text-(--project-muted-foreground,var(--muted-foreground))">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-(--project-foreground,var(--foreground))">
                    <MetaValue value={m.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

      </div>
    </FullBleedSection>
  )
}
