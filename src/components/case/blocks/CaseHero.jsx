import { cn } from "@/lib/utils"

export function CaseHero({
  eyebrow, // e.g. "2024 • UX Case Study"
  title,
  subtitle,
  tags = [], // e.g. ["Product Design", "Research", "B2B"]
  meta = [], // [{ label: "Role", value: "UX Designer" }, ...]
  links = [], // [{ label: "Live", href: "..." }, { label: "Figma", href: "..." }]
  cover, // { src, alt, aspect? } OR { node: <YourCustomCover/> }
  className,
}) {
  return (
    <header className={cn("space-y-8", className)}>
      <div className="space-y-4">
        {eyebrow ? (
          <p className="text-sm text-slate-500">{eyebrow}</p>
        ) : null}

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
            {title}
          </h1>

          {subtitle ? (
            <p className="max-w-2xl text-base md:text-lg text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>

        {(tags?.length || links?.length) ? (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {tags?.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
              >
                {t}
              </span>
            ))}

            {links?.length ? (
              <div className="flex flex-wrap items-center gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 hover:bg-slate-100"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {meta?.length ? (
        <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="space-y-1">
              <dt className="text-xs text-slate-500">{m.label}</dt>
              <dd className="text-sm font-medium text-slate-900">{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {cover ? (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
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
        </div>
      ) : null}
    </header>
  )
}