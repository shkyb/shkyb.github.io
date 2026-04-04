// src/pages/Projects/CaseStudyBlocksPage.jsx

import logo from "@/case-studies/demo/assets/logo.png"
import cover from "@/case-studies/demo/assets/cover.webp"
import screen1 from "@/case-studies/demo/assets/screen-1.jpg"
import screen2 from "@/case-studies/demo/assets/screen-2.jpg"
import screen3 from "@/case-studies/demo/assets/screen-3.jpg"
import process1 from "@/case-studies/demo/assets/process-1.jpg"
import process2 from "@/case-studies/demo/assets/process-2.jpg"

import { FullBleedSection } from "@/components/case/layout/FullBleedSection"
import { CaseHero } from "@/components/case/blocks/CaseHero"
import { CaseOverview } from "@/components/case/blocks/CaseOverview"
import { SectionHeading } from "@/components/case/blocks/SectionHeading"
import { ProblemStatement } from "@/components/case/blocks/ProblemStatement"
import { Metrics } from "@/components/case/blocks/Metrics"
import { Callout } from "@/components/case/blocks/Callout"
import { Figure } from "@/components/case/blocks/Figure"
import { ImageGrid } from "@/components/case/blocks/ImageGrid"
import { BeforeAfter } from "@/components/case/blocks/BeforeAfter"
import { Timeline } from "@/components/case/blocks/Timeline"
import { InsightList } from "@/components/case/blocks/InsightList"
import { PullQuote } from "@/components/case/blocks/PullQuote"
import { ComparisonTable } from "@/components/case/blocks/ComparisonTable"
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { NextProject } from "@/components/case/blocks/NextProject"
import { DocSection } from "@/components/case/docs/DocSection"
import { UsageNote } from "@/components/case/docs/UsageNote"
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"


const groups = [
  { id: "framing", label: "Framing" },
  { id: "evidence", label: "Evidence" },
  { id: "visuals", label: "Visuals" },
  { id: "narrative", label: "Narrative" },
  { id: "navigation", label: "Navigation" },
]

export default function CaseStudyBlocksPage() {
  return (
    <main className="w-full">
      <CaseHero
        logo={{ src: logo, alt: "D-Heart logo" }}
        projectName="Case Study Block Showcase"
        headline="A live reference page for documenting, testing, and refining reusable case-study blocks before using them in real portfolio projects."
        tags={["System", "Portfolio", "Documentation"]}
        cover={{ src: cover, alt: "Case study blocks showcase cover", aspect: "aspect-[16/9]" }}
      />

      <div className="relative w-full [--case-nav-w:16rem] [--case-top-offset:120px]">
        <CaseOverview
          overviewTitle="Overview"
          overview={[
            "This page is an internal reference for the case-study system. It shows how each reusable block behaves inside the real portfolio layout, with realistic content and spacing.",
            "The goal is to make future case studies faster to build, easier to maintain, and more visually consistent."
          ]}
          links={[
            { label: "Back to portfolio", href: "/", variant: "outline" },
            { label: "Open demo case", href: "/projects/d-heart", variant: "secondary" },
          ]}
          meta={[
            { label: "Purpose", value: "Internal documentation page" },
            { label: "Scope", value: "Reusable case-study blocks" },
            { label: "Layout", value: "React + Vite + Tailwind + shadcn/ui" },
            { label: "Status", value: "Living reference" },
          ]}
        />

        <FullBleedSection bgClass="bg-background" size="fill" className="pb-8">
          <div className="flex flex-wrap gap-2">
            {groups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-slate-200/70 px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {group.label}
              </a>
            ))}
          </div>
        </FullBleedSection>

        <DocSection
          id="framing"
          title="Framing"
          description="Blocks used to introduce the project, define the challenge, and structure the opening of a case study."
          bgClass="bg-background"
          size="fill"
        >
          <div className="space-y-12">
            <div className="space-y-4">
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
              <UsageNote>
                Use this near the beginning of a case study when you want the challenge, objective, and constraints to be immediately clear.
              </UsageNote>
            </div>

            <div className="space-y-4">
              <SectionHeading
                kicker="Heading utility"
                title="SectionHeading"
                subtitle="Use this as the default opener for most sections. It creates consistent rhythm and reduces repeated one-off heading styling."
              />
              <UsageNote>
                Best used at the start of sections that introduce a theme, such as research, design decisions, process, or outcomes.
              </UsageNote>
            </div>
          </div>
        </DocSection>

        <DocSection
          id="evidence"
          title="Evidence"
          description="Blocks used to support decisions with metrics, research findings, and structured comparison."
          bgClass="bg-muted/30"
          size="fill"
        >
          <div className="space-y-12">
            <div className="space-y-4">
              <Metrics
                items={[
                  {
                    label: "Onboarding drop-off",
                    value: "–32%",
                    note: "after simplifying the first-time flow",
                    deltaTone: "good",
                  },
                  {
                    label: "Task completion",
                    value: "+18%",
                    note: "first-time users",
                    deltaTone: "good",
                  },
                  {
                    label: "Interviews",
                    value: "12",
                    note: "patients + clinicians",
                  },
                  {
                    label: "Usability rounds",
                    value: "2",
                    note: "prototype validation",
                  },
                ]}
                columns={4}
              />
              <UsageNote>
                Best for measurable outcomes, research sample sizes, KPI snapshots, and concise impact summaries.
              </UsageNote>
            </div>

            <div className="space-y-4">
              <InsightList
                items={[
                  {
                    eyebrow: "Insight 01",
                    title: "Users needed explicit confirmation that the measurement was successful.",
                    description:
                      "Participants often repeated actions because they were unsure whether the result was valid.",
                  },
                  {
                    eyebrow: "Insight 02",
                    title: "Medical terminology reduced comprehension and increased hesitation.",
                    description:
                      "Users understood the goal, but many struggled to interpret labels and result states.",
                  },
                  {
                    eyebrow: "Insight 03",
                    title: "History and measurement views felt disconnected.",
                    description:
                      "Participants wanted a clearer sense of how one result related to their broader progress over time.",
                  },
                ]}
              />
              <UsageNote>
                Use this instead of plain bullet lists when findings deserve a little more hierarchy and structure.
              </UsageNote>
            </div>

            <div className="space-y-4">
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
                    before: "Users had to infer whether they completed the step correctly.",
                    after: "Each step included direct feedback and a clear next action.",
                  },
                  {
                    before: "History and measurement felt disconnected.",
                    after: "Results and progress over time were tied together more clearly.",
                  },
                ]}
              />
              <UsageNote>
                Ideal for explaining redesign rationale, research finding to design response, or old versus new decision logic.
              </UsageNote>
            </div>
          </div>
        </DocSection>

        <DocSection
          id="visuals"
          title="Visuals"
          description="Blocks used for screenshots, artifacts, galleries, mixed media, and visual comparison."
          bgClass="bg-background"
          size="media"
        >
          <div className="space-y-12">
            <div className="space-y-4">
              <Figure
                src={cover}
                alt="Cover figure example"
                frame="card"
                aspect="aspect-[16/9]"
                caption="Single figure with caption inside a media-width section."
              />
              <UsageNote>
                Use Figure as the default single-media block for screenshots, boards, diagrams, hero-like images, or videos.
              </UsageNote>
            </div>

            <div className="space-y-4">
              <ImageGrid
                cols={3}
                items={[
                  {
                    src: screen1,
                    alt: "D-Heart screen 1",
                    frame: "soft",
                    caption: "Measurement screen",
                  },
                  {
                    src: screen2,
                    alt: "D-Heart screen 2",
                    frame: "soft",
                    caption: "Feedback state",
                  },
                  {
                    src: screen3,
                    alt: "D-Heart screen 3",
                    frame: "soft",
                    caption: "History view",
                  },
                ]}
              />
              <UsageNote>
                Best for showing multiple related screens or artifacts together. Use it when the items belong to the same story beat.
              </UsageNote>
            </div>

            <div className="space-y-4">
              <BeforeAfter
                before={{
                  src: screen1,
                  alt: "Before screen",
                  caption: "Dense terminology and unclear state changes increased hesitation.",
                  aspect: "aspect-[16/9]",
                }}
                after={{
                  src: screen2,
                  alt: "After screen",
                  caption: "Plain language and explicit confirmation improved confidence.",
                  aspect: "aspect-[16/9]",
                }}
              />
              <UsageNote>
                Use this for redesign comparisons, flow improvements, or showing how a specific problem was resolved visually.
              </UsageNote>
            </div>
          </div>
        </DocSection>

        <DocSection
          id="narrative"
          title="Narrative"
          description="Blocks used to improve storytelling rhythm, highlight important points, and explain process."
          bgClass="bg-muted/30"
          size="fill"
        >
          <div className="space-y-12">
            <div className="space-y-4">
              <Callout title="Key insight">
                Participants repeatedly asked for a clear confirmation that the measurement had succeeded.
              </Callout>
              <UsageNote>
                Use Callout when one point deserves emphasis but does not need the visual weight of a full section.
              </UsageNote>
            </div>

            <div className="space-y-4">
              <PullQuote
                quote="We redesigned around reassurance and clarity, not around feature exposure."
                role="Core design principle"
                align="center"
                showMark={false}
              />
              <UsageNote>
                PullQuote works best as an editorial pause. Use it sparingly, usually once or twice per case study.
              </UsageNote>
            </div>

            <div className="space-y-4">
              <Timeline
                items={[
                  {
                    title: "Discovery",
                    range: "Week 1",
                    body: "Interviewed users and mapped the current journey.",
                    bullets: ["12 interviews", "Journey map", "Terminology audit"],
                    tone: "info",
                  },
                  {
                    title: "Define",
                    range: "Week 2",
                    body: "Turned findings into a clearer task model and success criteria.",
                  },
                  {
                    title: "Design",
                    range: "Weeks 3–5",
                    body: "Created and iterated on a calmer, feedback-rich flow.",
                    tone: "success",
                  },
                  {
                    title: "Test",
                    range: "Weeks 6–7",
                    body: "Validated clarity and comprehension with prototype sessions.",
                    tone: "warning",
                  },
                ]}
              />
              <UsageNote>
                Best for project phases, milestones, weekly cadence, or a lightweight end-to-end view of the process.
              </UsageNote>
            </div>

            <div className="space-y-4">
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
                    alt: "Flow redesign artifact",
                    caption: "Goal-led grouping simplified the flow.",
                    aspect: "aspect-[16/9]",
                  }}
                  reverse
                />
              </div>
              <UsageNote>
                Use ProcessStep when you want to explain method, artifacts, and outputs in a clearer way than plain paragraphs.
              </UsageNote>


              <div className="space-y-12">
                <Callout title="Key insight">
                  Participants repeatedly asked for clear confirmation that the measurement succeeded.
                </Callout>

                <CaseSeparator/>

                <PullQuote
                  quote="We redesigned around reassurance and clarity, not around feature exposure."
                  role="Core design principle"
                  align="center"
                />
              </div>

            </div>
          </div>
        </DocSection>

        <DocSection
          id="navigation"
          title="Navigation"
          description="Blocks used to guide the reader forward once the case study story is complete."
          bgClass="bg-background"
          size="fill"
        >
          <div className="space-y-12">
            <div className="space-y-4">
              <NextProject
                href="/projects/d-heart"
                kicker="Example handoff"
                title="D-Heart"
                description="Reusable bottom-of-page navigation block for leading the reader into the next project."
                image={cover}
                imageAlt="Next project preview"
                tags={["UX Design", "Healthcare", "Mobile"]}
              />
              <UsageNote>
                Best placed after the main narrative rather than inside the sticky section flow, so it feels like a portfolio handoff instead of content.
              </UsageNote>
            </div>
          </div>
        </DocSection>
      </div>
    </main>
  )
}