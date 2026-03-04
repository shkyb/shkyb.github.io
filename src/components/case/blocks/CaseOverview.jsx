// src/components/case/blocks/CaseOverview.jsx
import { Button } from "@/components/ui/button"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"
import { Prose } from "../layout/Prose"
import { HiMiniArrowUpRight } from "react-icons/hi2"

function isExternalHref(href) {
  return /^https?:\/\//.test(href)
}

function MetaValue({ value }) {
  // value can be:
  // - string
  // - ReactNode
  // - array of team members: [{ name, href }]
  if (!value) return null

  if (Array.isArray(value) && value.length && typeof value[0] === "object" && value[0]?.name && value[0]?.href) {
    return (
      <>
        {value.map((m, i) => (
          <span key={`${m.name}-${i}`}>
            <a
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500"
            >
              {m.name}
            </a>
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
  id = "overview", // important for sidenav
  bgClass,
  overviewTitle = "Overview",
  overview,
  links = [], // [{ label, href, variant?, size?, icon? }]
  meta = [], // [{ label, value }]
}) {
  const paragraphs = Array.isArray(overview) ? overview : typeof overview === "string" ? [overview] : null

  return (
    <FullBleedSection
      as="section"
      id={id}
      bgClass={bgClass}
      size="fill"
      className="scroll-mt-(--case-top-offset) sm:mt-16 sm:pb-16"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-8">
        {/* Left (~5/8) */}
        <div className="md:col-span-5">
          <Prose>
            <h2>{overviewTitle}</h2>
          </Prose>

          <div className="mt-3 space-y-4">
            {paragraphs ? (
              paragraphs.map((p, i) => (
                <Prose key={i}>
                  <p>{p}</p>
                </Prose>
              ))
            ) : (
              // if it's already JSX, still ensure it's inside Prose
              <Prose>{overview}</Prose>
            )}
          </div>

          {links?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {links.map((l) => {
                const Icon = l.icon || HiMiniArrowUpRight
                const external = l.external ?? isExternalHref(l.href)

                // Requirement says: "for any external link use shadcn button with icon"
                // We'll show icon for ALL links (consistent), but you can set l.icon={null} if you ever want no icon.
                return (
                  <Button
                    key={l.href}
                    variant={l.variant ?? "outline"}
                    size={l.size ?? "sm"}
                    asChild
                    className="gap-2"
                  >
                    <a href={l.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                      <span>{l.label}</span>
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    </a>
                  </Button>
                )
              })}
            </div>
          ) : null}
        </div>

        {/* Right (~3/8) */}
        <div className="md:col-span-3">
          <div className=" border-t pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5 border-slate-200/70 bg-background/60 ">
            <dl className="space-y-4 sm:space-y-8">
              {meta.map((m) => (
                <div key={m.label}>
                  <Prose>
                    <dt className="text-xs text-muted-foreground">{m.label}</dt>
                  </Prose>
                  <Prose>
                    <dl className="mt-1 text-sm font-medium">
                      <MetaValue value={m.value} />
                    </dl>
                  </Prose>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </FullBleedSection>
  )
}