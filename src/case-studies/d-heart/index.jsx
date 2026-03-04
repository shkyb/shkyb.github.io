import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HiMiniArrowUpRight } from "react-icons/hi2"

// assets (adjust filenames to match your folder)
import logo from "./assets/logo.png"
import cover from "./assets/cover.webp"
import screen1 from "./assets/screen-1.jpg"
import screen2 from "./assets/screen-2.jpg"
import screen3 from "./assets/screen-3.jpg"
import process1 from "./assets/process-1.jpg"
import process2 from "./assets/process-2.jpg"

function Prose({ children }) {
  return <div className="prose prose-slate max-w-none dark:prose-invert">{children}</div>
}

function PlaceholderCallouts() {
  const items = [
    { title: "Impact", body: "Reduced onboarding drop-off by simplifying the first-time flow into 3 steps and adding clear progress feedback." },
    { title: "Constraint", body: "Clinical content accuracy and regulatory wording requirements limited copy flexibility." },
    { title: "Key decision", body: "Moved from feature-led IA to goal-led tasks to match patient mental models." },
  ]

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} className="rounded-2xl p-5">
          <p className="text-sm font-semibold">{it.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
        </Card>
      ))}
    </div>
  )
}

function ImageCard({ src, alt }) {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" />
    </Card>
  )
}

function MediaGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <ImageCard src={screen1} alt="D-Heart screen 1" />
      <ImageCard src={screen2} alt="D-Heart screen 2" />
      <ImageCard src={screen3} alt="D-Heart screen 3" />
    </div>
  )
}

function ProcessStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ImageCard src={process1} alt="Process artifact 1" />
      <ImageCard src={process2} alt="Process artifact 2" />
    </div>
  )
}

function KPIBadges() {
  const kpis = ["12 interviews", "2 usability rounds", "3 core flows", "8 weeks"]
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {kpis.map((k) => (
        <Badge key={k} variant="secondary">
          {k}
        </Badge>
      ))}
    </div>
  )
}

function LongFillerList() {
  const rows = Array.from({ length: 10 }).map((_, i) => ({
    title: `Finding ${i + 1}`,
    body:
      "Participants understood the goal, but struggled with terminology and the difference between measurement vs. history views.",
  }))

  return (
    <div className="mt-8 space-y-4">
      {rows.map((r) => (
        <Card key={r.title} className="rounded-2xl p-5">
          <p className="text-sm font-semibold">{r.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
        </Card>
      ))}
    </div>
  )
}

export const dHeartCase = {
  slug: "d-heart",

  // adjust these keys to whatever your CaseStudyPage expects (caseMeta / hero / etc.)
  caseMeta: {
    logo: { src: logo, alt: "D-Heart logo" },
    title: "D-Heart",
    headline:
      "A patient-first experience for capturing heart measurements and sharing meaningful summaries with clinicians.",
    tags: ["UX Design", "Mobile", "Healthcare", "Research", "Prototyping"],
    cover: { src: cover, alt: "D-Heart hero cover", aspect: "aspect-[16/9]" },

    overview:
      "D-Heart is a concept case study focused on simplifying a high-stakes measurement workflow. The goal was to reduce anxiety, improve comprehension, and support repeat use with clear feedback and safe defaults. This page uses placeholder content to validate your layout system (hero merge, full-bleed bands, 5xl text, 8xl media, and sticky sidenav).",

    links: [
      {
        label: "Prototype",
        href: "https://example.com",
        variant: "secondary",
        icon: HiMiniArrowUpRight, // optional; fallback exists anyway
        external: true,           // optional; auto-detects via http(s)
      },
      {
        label: "Figma",
        href: "https://example.com",
        variant: "outline",
        icon: HiMiniArrowUpRight,
        external: true,
      },
    ],

    meta: [
      { label: "Role", value: "Product Designer (concept)" },
      { label: "Team", value: "Solo" },
      {
        label: "Team",
        value: [
          { name: "@Jane Doe", href: "https://janedoe.com" },
          { name: "John Smith", href: "https://johnsmith.com" },
        ],
      },
      { label: "Year", value: "2026" },
      { label: "Tools", value: "Figma, FigJam, shadcn/ui, Tailwind" },
    ],
  },

  // StickySidenav expects [{ id, label, ... }]
  // CaseSection can also use bgClass + size + navSafe (optional)
  sections: [
    {
      id: "context",
      label: "Context",
      bgClass: "bg-background",
      size: "text",
      render: () => (
        <Prose>
          <h2>Context</h2>
          <p>
            Heart measurement experiences can feel intimidating—especially when the user is unsure what the numbers mean or
            whether they performed the measurement correctly. This case explores a calmer, clearer workflow that prioritizes:
            <strong> understanding, reassurance, and repeatability</strong>.
          </p>
          <p>
            This is intentionally “content heavy” so you can test scroll, section activation, and spacing between blocks.
          </p>
          <KPIBadges />
          <PlaceholderCallouts />
        </Prose>
      ),
    },

    {
      id: "problem",
      label: "Problem",
      bgClass: "bg-muted/30",
      size: "text",
      render: () => (
        <Prose>
          <h2>Problem</h2>
          <p>
            Users need to capture measurements accurately, but the current flow is often unclear, jargon-heavy, and doesn’t
            provide enough feedback. That leads to abandoned attempts and low confidence in results.
          </p>
          <ul>
            <li>Unclear steps and success criteria (“Did I do it right?”)</li>
            <li>Medical terminology causes confusion</li>
            <li>History and measurement views feel inconsistent</li>
          </ul>
          <LongFillerList />
        </Prose>
      ),
    },

    {
      id: "goals",
      label: "Goals",
      bgClass: "bg-background",
      size: "text",
      render: () => (
        <Prose>
          <h2>Goals</h2>
          <p>We defined three primary outcomes for the MVP experience:</p>
          <ol>
            <li>
              <strong>Reduce anxiety:</strong> guide the user with calm language and predictable steps.
            </li>
            <li>
              <strong>Increase comprehension:</strong> show “what this means” without over-medicalizing.
            </li>
            <li>
              <strong>Enable repeat use:</strong> make it easy to track and share a clean summary.
            </li>
          </ol>
          <p>
            We also set a design constraint: the app must function well for one-handed use and remain readable in bright
            environments.
          </p>
        </Prose>
      ),
    },

    {
      id: "research",
      label: "Research",
      bgClass: "bg-muted/30",
      size: "text",
      render: () => (
        <Prose>
          <h2>Research</h2>
          <p>
            We ran lightweight discovery interviews and a quick terminology test using paper and clickable prototypes.
            Participants repeatedly asked for:
          </p>
          <ul>
            <li>Clear “success” confirmation</li>
            <li>A simple explanation of the number</li>
            <li>Ability to compare results over time</li>
          </ul>
          <p>
            This section is intentionally long to test IntersectionObserver accuracy over multiple paragraphs and cards.
          </p>
          <LongFillerList />
        </Prose>
      ),
    },

    {
      id: "flows",
      label: "Core flows",
      bgClass: "bg-background",
      size: "media", // allows max-w-8xl
      render: () => (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Core flows</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Wide section (8xl). This should feel noticeably wider than text sections and can sit under the overlay nav.
            </p>
          </div>
          <ProcessStrip />
        </div>
      ),
    },

    {
      id: "design",
      label: "Design",
      bgClass: "bg-muted/30",
      size: "text",
      render: () => (
        <Prose>
          <h2>Design decisions</h2>
          <p>
            The UI prioritizes legibility and feedback. The measurement flow uses a step-based pattern with high-contrast
            states and explicit confirmation. We avoided icon-only actions in critical steps.
          </p>
          <h3>Information hierarchy</h3>
          <p>
            We grouped content into “Measure”, “Understand”, and “History” to match user intent rather than system features.
          </p>
          <PlaceholderCallouts />
        </Prose>
      ),
    },

    {
      id: "screens",
      label: "Screens",
      bgClass: "bg-background",
      size: "media",
      render: () => (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Screens</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Another 8xl section to validate repeated wide blocks mid-page.
            </p>
          </div>
          <MediaGrid />
        </div>
      ),
    },

    {
      id: "outcome",
      label: "Outcome",
      bgClass: "bg-muted/30",
      size: "text",
      render: () => (
        <Prose>
          <h2>Outcome</h2>
          <p>
            This is a concept case study used to validate your layout system. In a real project, you’d summarize measurable
            impact and what shipped. For now, this section helps test the bottom of the page and the final active state in
            the sidenav.
          </p>
          <ul>
            <li>Cleaner measurement flow with explicit “success” states</li>
            <li>Reduced jargon and improved clarity</li>
            <li>Sharable summaries for clinician conversations</li>
          </ul>
        </Prose>
      ),
    },

    {
      id: "learnings",
      label: "Learnings",
      bgClass: "bg-background",
      size: "text",
      render: () => (
        <Prose>
          <h2>Learnings</h2>

          <p>
            Small copy and feedback decisions matter more in high-stakes contexts.
            The biggest gains came from clarifying “what to do next” and “what this means”
            rather than adding more features.
          </p>

          <h3>What worked</h3>
          <ul>
            <li>Explicit success states reduced uncertainty</li>
            <li>Step-based guidance improved completion confidence</li>
            <li>Replacing jargon with plain language reduced misinterpretation</li>
          </ul>

          <h3>What I’d improve next</h3>
          <p>
            If this were a shipped product, the next iteration would focus on accessibility,
            offline support, and clinician-configurable thresholds. The goal would be to
            keep the experience calm while increasing trust in the results.
          </p>

          <p>
            This extra space is intentionally here to ensure the last section reliably
            becomes active in the sidenav even without a real footer.
          </p>

          <PlaceholderCallouts />
          <LongFillerList />
          <LongFillerList />
        </Prose>
      ),
    }
  ],
}