import { useParams, Navigate } from "react-router-dom"
import { cases } from "@/case-studies/registry"

import { StickySidenav } from "@/components/case/layout/StickySidenav"
import { CaseHeroOverview } from "@/components/case/blocks/CaseHeroOverview"
import { CaseSection } from "@/components/case/layout/Section"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]
  if (!data) return <Navigate to="/projects" replace />

  const { caseMeta, sections } = data

  return (
    <main className="w-full">
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

      {/* Everything BELOW hero */}
      <div className="relative w-full [--case-nav-w:16rem]">
        {/* Overlay sidenav (does not affect layout) */}
        <aside className="pointer-events-none hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-[var(--case-nav-w)]">
            <div className="pointer-events-auto sticky top-24 pl-6 pr-4">
              <StickySidenav sections={sections} />
            </div>
          </div>
        </aside>

        {/* Content flow (full width); each section self-constrains */}
        <div className="min-w-0">
          
          {sections.map((s) => (
            <CaseSection
              key={s.id}
              id={s.id}
              bgClass={s.bgClass}
              size={s.size}      // "text" | "media"
              navSafe={s.navSafe} // optional per-section override
            >
              {typeof s.render === "function" ? s.render() : s.content}
            </CaseSection>
          ))}
        </div>
      </div>
    </main>
  )
}