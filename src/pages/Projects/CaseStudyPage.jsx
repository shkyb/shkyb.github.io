import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { cases } from "@/case-studies/registry"
import { projects } from "@/data/projects"
import NotFoundPage from "@/pages/NotFoundPage"

import { StickySidenav } from "@/components/case/layout/StickySidenav"
import { Reveal } from "@/components/case/layout/Reveal"
import { CaseSection } from "@/components/case/layout/Section"
import { CaseContainer } from "@/components/case/layout/Container"
import { CaseHero } from "@/components/case/blocks/CaseHero"
import { CaseOverview } from "@/components/case/blocks/CaseOverview"
import { NextProject } from "@/components/case/blocks/NextProject"
import Footer from "@/components/homepage/Footer"

const BASE_URL = "https://shakib.design"
const HOMEPAGE_TITLE = "Shakib Alipour — Interaction Designer"
const HOMEPAGE_DESC =
  "Interaction designer specialising in HMI and human-robot interaction. MSc candidate at Politecnico di Milano. Five years shipping hardware-digital products."
const HOMEPAGE_IMAGE = `${BASE_URL}/og/default.webp`

function setOgMeta(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute("property", property)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setNameMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute("name", name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setCanonical(href) {
  let el = document.querySelector(`link[rel="canonical"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = cases[slug]
  const currentProject = projects.find((p) => p.id === slug)

  useEffect(() => {
    if (!data?.caseMeta?.title) return

    const vars = data.caseMeta.cssVars
    const title = `${data.caseMeta.title} — Shakib Alipour`
    const desc = currentProject?.description ?? data.caseMeta.overview ?? HOMEPAGE_DESC
    const image = `${BASE_URL}/og/${slug}.webp`

    document.title = title
    setOgMeta("og:title", title)
    setOgMeta("og:description", desc)
    setOgMeta("og:image", image)
    setOgMeta("og:url", `${BASE_URL}/projects/${slug}`)
    setNameMeta("description", desc)
    setNameMeta("twitter:title", title)
    setNameMeta("twitter:description", desc)
    setNameMeta("twitter:image", image)
    setCanonical(`${BASE_URL}/projects/${slug}`)

    const root = document.documentElement
    if (vars) Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))

    return () => {
      document.title = HOMEPAGE_TITLE
      setOgMeta("og:title", HOMEPAGE_TITLE)
      setOgMeta("og:description", HOMEPAGE_DESC)
      setOgMeta("og:image", HOMEPAGE_IMAGE)
      setOgMeta("og:url", BASE_URL)
      setNameMeta("description", HOMEPAGE_DESC)
      setNameMeta("twitter:title", HOMEPAGE_TITLE)
      setNameMeta("twitter:description", HOMEPAGE_DESC)
      setNameMeta("twitter:image", HOMEPAGE_IMAGE)
      setCanonical(BASE_URL)
      if (vars) Object.keys(vars).forEach((k) => root.style.removeProperty(k))
    }
  }, [data, slug, currentProject])

  if (!data) return <NotFoundPage />

  const { caseMeta, sections } = data

  const currentIndex = projects.findIndex((p) => p.id === slug)
  const orderedFromNext = [
    ...projects.slice(currentIndex + 1),
    ...projects.slice(0, currentIndex),
  ]
  const nextProject = orderedFromNext.find((p) => p.status === "published")

  // Add Overview as first sidenav item.
  // NextProject is intentionally NOT included here because it should behave
  // like a page handoff, not like part of the case-study narrative.
  const navSections = [
    { id: "overview", label: "Overview" },
    ...sections.map((s) => ({ id: s.id, label: s.label })),
  ]

  return (
    <main
      className="w-full bg-background"
      style={caseMeta.cssVars}
    >
      {/* caseMeta.cssVars: optional CSS vars scoped to this page.
          e.g. { "--project-primary": "#306fc8", "--project-background": "#F1F5FB" }
          Components like SectionHeading read var(--project-primary) automatically. */}
      {/* 1) Hero (includes cover image) */}
      <CaseHero
        logo={caseMeta.logo}
        projectName={caseMeta.title}
        headline={caseMeta.headline}
        tags={caseMeta.tags}
        cover={caseMeta.cover}
      />

      {/* 2) Everything below hero (sidenav starts here) */}
      <div className="relative w-full [--case-nav-w:16rem] [--case-top-offset:48px]">
        {/* Overlay sidenav - starts after hero because it's inside this wrapper */}
        <aside className="pointer-events-none hidden min-[1440px]:block">
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
              bgStyle={s.bgStyle}
              size={s.size}
              navSafe={false}
            >
              <Reveal>
                {typeof s.render === "function" ? s.render() : s.content}
              </Reveal>
            </CaseSection>
          ))}
        </div>

        {nextProject && (
          <div className="bg-white">
          <CaseContainer size="fill">
            <NextProject
              href={nextProject.href}
              kicker={nextProject.title}
              title={nextProject.title}
              headline={nextProject.headline}
              accent={nextProject.accent}
              image={`/images/cover/${nextProject.id}.webp`}
              imageAlt={nextProject.title}
              tags={nextProject.tags}
            />
          </CaseContainer>
          </div>
        )}

        {/* 6) Bottom sentinel so the last real section can still activate correctly
              in the sticky sidenav even when there is no footer. Keep this last. */}
        {/* <div id="case-end-sentinel" className="h-[35vh]" /> */}
      </div>
      <Footer variant="light" />
    </main>
  )
}