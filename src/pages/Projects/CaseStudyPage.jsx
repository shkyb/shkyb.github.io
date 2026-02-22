import { useParams, Navigate } from "react-router-dom"
import { cases } from "@/case-studies/registry"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]

  if (!data) return <Navigate to="/projects" replace />

  const { caseMeta, sections } = data

  return (
    <main className="mx-auto w-full max-w-screen-2xl px-6 md:px-12 py-16">
      <header className="mb-10">
        <p className="text-sm text-slate-500">{caseMeta.year}</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {caseMeta.title}
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">{caseMeta.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        <aside className="hidden lg:block sticky top-24 h-fit">
          <nav className="flex flex-col gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-slate-600 hover:text-slate-950 transition"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold">{s.label}</h2>
              <p className="mt-3 text-slate-600">
                Placeholder content for {s.id}.
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}