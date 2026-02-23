import { useParams, Navigate } from "react-router-dom"
import { cases } from "@/case-studies/registry"
import { CaseContainer } from "@/components/case/layout/Container"
import { CaseSection } from "@/components/case/layout/Section"
import { StickySidenav } from "@/components/case/layout/StickySidenav"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]

  if (!data) return <Navigate to="/projects" replace />

  const { caseMeta, sections } = data

  return (
    <main className="w-full">
      <CaseContainer className="py-16">
        <header className="mb-10">
          <p className="text-sm text-slate-500">{caseMeta.year}</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {caseMeta.title}
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">{caseMeta.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          <StickySidenav sections={sections} />

          <div className="min-w-0">
            {sections.map((s) => (
              <CaseSection key={s.id} id={s.id}>
                <h2 className="text-xl font-semibold">{s.label}</h2>
                <p className="mt-3 text-slate-600">
                  Placeholder content for {s.id}.
                </p>
              </CaseSection>
            ))}
          </div>
        </div>
      </CaseContainer>
    </main>
  )
}