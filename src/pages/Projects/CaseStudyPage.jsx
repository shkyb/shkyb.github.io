import { useParams, Navigate } from "react-router-dom"
import { cases } from "@/case-studies/registry"
import { CaseContainer } from "@/components/case/layout/Container"
import { CaseSection } from "@/components/case/layout/Section"
import { StickySidenav } from "@/components/case/layout/StickySidenav"
import { CaseHeroOverview } from "@/components/case/blocks/CaseHeroOverview"


export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]

  if (!data) return <Navigate to="/projects" replace />

  const { caseMeta, sections } = data

  return (
    <main className="w-full">
      <CaseContainer className="py-16">
        <CaseHeroOverview
          logo={caseMeta.logo}
          projectName={caseMeta.title}
          headline={caseMeta.headline}
          tags={caseMeta.tags}
          cover={caseMeta.cover}
          overviewTitle="Overview"
          overview={caseMeta.overview}
          links={caseMeta.links}
          meta={caseMeta.meta}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          <StickySidenav sections={sections} />

          <div className="min-w-0">
            {sections.map((s) => (

              <CaseSection key={s.id} id={s.id}>
                <h2 className="text-xl font-semibold">{s.label}</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  Placeholder content for {s.id}. This section is intentionally longer to test
                  the sticky sidenav and active highlighting behavior with IntersectionObserver.
                </p>

                <div className="mt-8 grid gap-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <p className="text-sm text-slate-500">Block {i + 1}</p>
                      <p className="mt-2 text-slate-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.
                      </p>
                    </div>
                  ))}
                </div>
              </CaseSection>
            ))}
          </div>
        </div>
      </CaseContainer>
    </main>
  )
}