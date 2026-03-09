import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HiMiniArrowUpRight } from "react-icons/hi2"
import { Metrics } from "@/components/case/blocks/Metrics"
import { SectionHeading } from "@/components/case/blocks/SectionHeading"
import { Figure } from "@/components/case/blocks/Figure"
import { ImageGrid } from "@/components/case/blocks/ImageGrid"
import { BeforeAfter } from "@/components/case/blocks/BeforeAfter"
import { Timeline } from "@/components/case/blocks/Timeline"
import { NextProject } from "@/components/case/blocks/NextProject"
import { InsightList } from "@/components/case/blocks/InsightList"
import { PullQuote } from "@/components/case/blocks/PullQuote"
import { ComparisonTable } from "@/components/case/blocks/ComparisonTable"
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { ProblemStatement } from "@/components/case/blocks/ProblemStatement"




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

export const demoCase = {
  slug: "demo",

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
      size: "fill",
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
          <Figure
  src={cover}
  alt="D-Heart hero cover"
  frame="soft"
  aspect="aspect-video"
  caption="Concept cover used to validate the wide media container."
/>
        </Prose>
        
      ),
    },
    {
  id: "framing",
  label: "Framing",
  bgClass: "bg-background",
  size: "fill",
  render: () => (
    <>
      <SectionHeading
        title="Problem framing"
        subtitle="A concise summary of the challenge, intended outcome, and project constraints."
      />

      <ProblemStatement
        variant="grid"
        items={[
          {
            label: "Problem",
            value:
              "Users often felt uncertain during the measurement flow and were unsure whether the result was valid.",
          },
          {
            label: "Goal",
            value:
              "Reduce anxiety, improve clarity, and help users complete the flow with more confidence.",
          },
          {
            label: "Constraints",
            value:
              "Clinical accuracy, regulated wording, and limited tolerance for ambiguity in a high-stakes context.",
          },
          {
            label: "Success criteria",
            value:
              "Higher completion confidence, clearer result interpretation, and smoother repeat usage over time.",
          },
        ]}
      />
    </>
  ),
},

{
  id: "timeline",
  label: "Timeline",
  bgClass: "bg-background",
  size: "small",
  render: () => (
    <>
      <SectionHeading
        title="Timeline"
        subtitle="A lightweight view of phases, deliverables, and what we shipped."
      />

      <Timeline
        items={[
          {
            title: "Discovery",
            range: "Week 1",
            body: "Interviewed target users and mapped the current measurement journey.",
            bullets: ["12 interviews", "Journey map", "Terminology audit"],
            tone: "info",
          },
          {
            title: "Define",
            range: "Week 2",
            body: "Translated findings into a simpler task model and success criteria.",
            bullets: ["Problem framing", "MVP scope", "Success metrics"],
          },
          {
            title: "Design",
            range: "Weeks 3–5",
            body: "Created flows and UI states focused on feedback and reassurance.",
            bullets: ["Core flow wireframes", "Hi-fi prototype", "Content guidelines"],
            tone: "success",
          },
          {
            title: "Test & iterate",
            range: "Weeks 6–7",
            body: "Validated clarity and reduced uncertainty with usability sessions.",
            bullets: ["2 usability rounds", "Copy refinements", "Edge-case handling"],
            tone: "warning",
          },
          {
            title: "Outcome",
            range: "Week 8",
            body: "Prepared a shareable summary experience for clinician conversations.",
            bullets: ["Summary screen", "Share flow", "Design QA checklist"],
            tone: "neutral",
          },
        ]}
      />
    </>
  ),
},


    {
      id: "problem",
      label: "Problem",
      bgClass: "bg-muted/30",
      size: "fill",
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
  id: "process",
  label: "Process",
  bgClass: "bg-background",
  size: "fill",
  render: () => (
    <>
      <SectionHeading
        title="Process"
        subtitle="A simplified overview of how the concept evolved."
      />

      <div className="space-y-12">
        <ProcessStep
          step="Step 01"
          title="Understanding the measurement journey"
          description="We interviewed users to identify the moments where uncertainty interrupted confidence."
          bullets={[
            "12 discovery interviews",
            "Journey mapping",
            "Terminology analysis",
          ]}
          figure={{
            src: process1,
            alt: "Journey map artifact",
            caption: "Early journey map capturing uncertainty points.",
            aspect: "aspect-[16/9]",
          }}
        />

        <ProcessStep
          step="Step 02"
          title="Simplifying the task structure"
          description="We reorganized the experience around user intent rather than system features."
          bullets={[
            "Goal-based IA",
            "Measurement flow redesign",
            "Clear feedback states",
          ]}
          figure={{
            src: process2,
            alt: "Flow redesign",
            caption: "Goal-led task grouping simplified the flow.",
            aspect: "aspect-[16/9]",
          }}
          reverse
        />
      </div>
    </>
  ),
},

    {
      id: "goals",
      label: "Goals",
      bgClass: "bg-background",
      size: "fill",
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
  size: "fill",
  render: () => (
    <>
      <SectionHeading
        title="Research"
        subtitle="We ran lightweight discovery interviews and terminology testing to identify where confidence broke down."
      />
      <PullQuote
        quote="I’m not sure if I did it correctly, and I don’t know whether I should trust this result."
        author="Participant"
        role="Usability session"
        size="lg"
      />
      <PullQuote
  quote="We redesigned around reassurance and clarity, not around feature exposure."
  role="Core design principle"
  align="center"
  size="lg"
  showMark={false}
/>
<PullQuote
  quote="Small changes in feedback and language created the biggest increase in confidence."
  tone="muted"
  size="md"
/>
      <InsightList
        items={[
          {
            eyebrow: "Insight 01",
            title: "Users needed explicit confirmation that the measurement was successful.",
            description: "Participants often repeated actions because they were unsure whether the result was valid.",
          },
          {
            eyebrow: "Insight 02",
            title: "Medical terminology reduced comprehension and increased hesitation.",
            description: "Users understood the goal, but many struggled to interpret labels and result states.",
          },
          {
            eyebrow: "Insight 03",
            title: "History and measurement views felt disconnected.",
            description: "Participants wanted a clearer sense of how one result related to their broader progress over time.",
          },
        ]}
      />
    </>
  ),
},


    {
      id: "flows",
      label: "Core flows",
      bgClass: "bg-background",
      size: "page", // allows max-w-8xl
      render: () => (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Core flows</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Wide section (8xl). This should feel noticeably wider than text sections and can sit under the overlay nav.
            </p>
          </div>
          <ImageGrid
  cols={2}
  items={[
    {
      src: process1,
      alt: "Process artifact 1",
      frame: "soft",
      label: "Artifact",
      caption: "Early flow sketch used to validate step clarity.",
    },
    {
      src: process2,
      alt: "Process artifact 2",
      frame: "soft",
      label: "Artifact",
      caption: "IA draft showing goal-led grouping.",
    },
  ]}
/>
        </div>
      ),
    },

   {
  id: "design",
  label: "Design",
  bgClass: "bg-muted/30",
  size: "fill",
  render: () => (
    <>
      <SectionHeading
        title="Design decisions"
        subtitle="We moved from a feature-led structure to a clearer, confidence-building experience."
      />

      <ComparisonTable
        columns={[
          { key: "before", label: "Before" },
          { key: "after", label: "After", emphasis: true },
        ]}
        rows={[
          {
            before: "Dense terminology and unclear result states created hesitation.",
            after: "Plain language and explicit confirmation improved confidence.",
          },
          {
            before: "History and measurement lived as separate mental models.",
            after: "Result context and progress over time were connected more clearly.",
          },
          {
            before: "Users had to infer whether they completed the step correctly.",
            after: "Each step included direct feedback and a clear next action.",
          },
        ]}
      />
      <ComparisonTable
  columns={[
    { key: "finding", label: "Research finding" },
    { key: "response", label: "Design response", emphasis: true },
  ]}
  rows={[
    {
      finding: "Users repeated actions because they were unsure whether the measurement was successful.",
      response: "Added explicit success confirmation and clear completion states.",
    },
    {
      finding: "Medical labels reduced comprehension.",
      response: "Replaced jargon with plain language and lightweight explanations.",
    },
    {
      finding: "Progress over time felt disconnected from single-session results.",
      response: "Introduced a more coherent summary and history relationship.",
    },
  ]}
/>
    </>
  ),
},

{
  id: "before-after",
  label: "Before/After",
  bgClass: "bg-background",
  size: "media",
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Before / After</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A side-by-side comparison to highlight what changed and why.
        </p>
      </div>

      <BeforeAfter
        before={{
          src: screen1,
          alt: "Before: old measurement screen",
          caption: "Unclear success criteria and dense terminology increased uncertainty.",
          aspect: "aspect-[16/9]",
          frame: "soft",
        }}
        after={{
          src: screen2,
          alt: "After: redesigned measurement screen",
          caption: "Step-based guidance with explicit confirmation improved confidence.",
          aspect: "aspect-[16/9]",
          frame: "soft",
        }}
        note="Tip: keep captions short and focus on the design principle, not UI trivia."
      />
    </div>
  ),
}    ,

{
  id: "screens",
  label: "Screens",
  bgClass: "bg-background",
  size: "fill",
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Screens</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Another 7xl section to validate repeated wide blocks mid-page.
        </p>
      </div>

      <ImageGrid
        // cols={3}
        items={[
          { src: screen1, alt: "D-Heart screen 1", frame: "soft" },
          { src: screen2, alt: "D-Heart screen 2", frame: "soft" },
          { src: screen3, alt: "D-Heart screen 3", frame: "soft" },
        ]}
      />
    </div>
  ),
},

{
  id: "outcome",
  label: "Outcome",
  bgClass: "bg-muted/30",
  size: "text",
  render: () => (
    <>
      <SectionHeading
        title="Outcome"
        subtitle="A quick snapshot of impact (placeholder metrics for layout testing)."
      />

      <Metrics
        items={[
          {
            label: "Onboarding drop-off",
            value: "–32%",
            note: "after simplifying the first-time flow",
            delta: "↓",
            deltaTone: "good",
            icon:"facebook",
          },
          {
            label: "Task completion",
            value: "+18%",
            note: "first-time users",
            delta: "ok",
            deltaTone: "good",
          },
          {
            label: "Time to first result",
            value: "–24s",
            note: "median time",
            delta: "↓",
            deltaTone: "good",
          },
          {
            label: "Satisfaction",
            value: "4.6/5",
            note: "post-task survey",
            deltaTone: "neutral",
          },
        ]}
        columns={4}
        variant="card"
      />

      {/* Keep your existing narrative under it (Prose, bullets, etc.) */}
      <Prose>
        <p>
          This is a concept case study used to validate your layout system. In a real project, you’d summarize measurable
          impact and what shipped.
        </p>
        <ul>
          <li>Cleaner measurement flow with explicit “success” states</li>
          <li>Reduced jargon and improved clarity</li>
          <li>Sharable summaries for clinician conversations</li>
        </ul>
      </Prose>
    </>
  ),
},

{
  id: "learnings",
  label: "Learnings",
  bgClass: "bg-background",
  size: "fill",
  render: () => (
    <>
      <SectionHeading
        title="Learnings"
        subtitle="The most valuable improvements came from clarity, not complexity."
      />

      <InsightList
        variant="divided"
        items={[
          {
            title: "Success feedback matters more than extra features in high-stakes flows.",
            description: "Reducing ambiguity improved confidence faster than adding more information.",
          },
          {
            title: "Plain language is a UX tool, not just a content decision.",
            description: "Replacing jargon reduced hesitation and made the flow feel safer.",
          },
          {
            title: "Task structure should reflect user intent, not system architecture.",
            description: "Grouping content by goals helped users understand what to do next.",
          },
        ]}
      />
    </>
  ),
},
    {
  id: "next-project",
  label: "Next project",
  bgClass: "bg-muted/30",
  size: "fill",
  render: () => (
    <NextProject
      href="/projects/man-truck-bus"
      kicker="Next case study"
      title="MAN Truck & Bus"
      description="A UX case study focused on structuring complex information and improving clarity across service touchpoints."
      image={cover}
      imageAlt="Preview of the next case study"
      tags={["UX Design", "Mobility", "Systems"]}
    />
  ),
}
  ],
}