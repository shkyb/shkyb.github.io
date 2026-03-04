import { useParams, Navigate } from "react-router-dom"
import { cases } from "@/case-studies/registry"

import { StickySidenav } from "@/components/case/layout/StickySidenav"
import { CaseSection } from "@/components/case/layout/Section"
import { CaseHero } from "@/components/case/blocks/CaseHero"
import { CaseOverview } from "@/components/case/blocks/CaseOverview"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]
  if (!data) return <Navigate to="/projects" replace />

  const { caseMeta, sections } = data

  // Add Overview as first sidenav item
  const navSections = [
    { id: "overview", label: "Overview" },
    ...sections.map((s) => ({ id: s.id, label: s.label })),
  ]

  return (
    <main className="w-full">
      {/* 1) Hero (includes cover image) */}
      <CaseHero
        logo={caseMeta.logo}
        projectName={caseMeta.title}
        headline={caseMeta.headline}
        tags={caseMeta.tags}
        cover={caseMeta.cover}
      />

      {/* 2) Everything below hero (sidenav starts here) */}
      <div className="relative w-full [--case-nav-w:16rem] [--case-top-offset:120px]">
        {/* Overlay sidenav - starts after hero because it's inside this wrapper */}
        <aside className="pointer-events-none hidden xl:block">
          <div className="absolute inset-y-0 left-0 w-[var(--case-nav-w)]">
            <div className="pointer-events-auto sticky top-1/3 pl-6 pr-4">
              <StickySidenav sections={navSections} />
            </div>
          </div>
        </aside>

        {/* 3) Overview section (first item in nav) */}
        <CaseOverview
          id="overview"
          overviewTitle="Overview"
          overview={caseMeta.overview}
          links={caseMeta.links}
          meta={caseMeta.meta}
        />

        {/* 4) Rest of sections */}
        <div className="min-w-0">
          {sections.map((s) => (
            <CaseSection
              key={s.id}
              id={s.id}
              bgClass={s.bgClass}
              size={s.size}
              navSafe={false} // since sidenav is xl+ overlay only, keep it clean
            >
              {typeof s.render === "function" ? s.render() : s.content}
            </CaseSection>
          ))}
          <div id="case-end-sentinel" className="h-[40vh]" />
        </div>
      </div>
    </main>
  )
}