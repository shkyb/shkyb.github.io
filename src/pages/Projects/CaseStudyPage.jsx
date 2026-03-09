import { useParams, Navigate } from "react-router-dom"
import { cases } from "@/case-studies/registry"
import { projectIndex } from "@/case-studies/projectIndex"
import { NextProject } from "@/components/case/blocks/NextProject"

import { StickySidenav } from "@/components/case/layout/StickySidenav"
import { CaseSection } from "@/components/case/layout/Section"
import { CaseHero } from "@/components/case/blocks/CaseHero"
import { CaseOverview } from "@/components/case/blocks/CaseOverview"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]
  if (!data) return <Navigate to="/projects" replace />

  const { caseMeta, sections } = data

  // Keep only published projects for page-to-page navigation.
  // If isPublished is missing, treat the project as published by default.
  const publishedProjects = projectIndex.filter(
    (project) => project.isPublished !== false
  )

  // Find the current project inside the ordered published list.
  const currentProjectIndex = publishedProjects.findIndex(
    (project) => project.slug === slug
  )

  // Compute the next project based on the order in projectIndex.
  // This wraps around so the last published project points back to the first one.
  const nextProject =
    currentProjectIndex !== -1 && publishedProjects.length > 1
      ? publishedProjects[(currentProjectIndex + 1) % publishedProjects.length]
      : null

  // Add Overview as first sidenav item.
  // NextProject is intentionally NOT included here because it should behave
  // like a page handoff, not like part of the case-study narrative.
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
          <div className="absolute inset-y-0 left-0 w-(--case-nav-w)">
            <div className="pointer-events-auto sticky top-16 pl-6 pr-4">
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
              navSafe={false} // sidenav is xl+ overlay only, so keep content clean
            >
              {typeof s.render === "function" ? s.render() : s.content}
            </CaseSection>
          ))}
        </div>

        {/* 5) Page handoff to the next published project.
              This sits outside the narrative sections, so it does not appear in the sidenav. */}
        {nextProject ? (
          <FullBleedSection
            bgClass="bg-muted/30"
            size="fill"
            className="py-16 md:py-20"
          >
            <NextProject
              href={nextProject.href}
              title={nextProject.title}
              description={nextProject.description}
              image={nextProject.image}
              imageAlt={nextProject.imageAlt}
              tags={nextProject.tags}
              kicker={nextProject.kicker ?? "Next project"}
            />
          </FullBleedSection>
        ) : null}

        {/* 6) Bottom sentinel so the last real section can still activate correctly
              in the sticky sidenav even when there is no footer. Keep this last. */}
        <div id="case-end-sentinel" className="h-[35vh]" />
      </div>
    </main>
  )
}