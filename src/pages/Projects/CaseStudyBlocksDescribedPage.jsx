import logo from "@/case-studies/d-heart/assets/logo.png"
import cover from "@/case-studies/d-heart/assets/cover.webp"
import screen1 from "@/case-studies/d-heart/assets/screen-1.jpg"
import screen2 from "@/case-studies/d-heart/assets/screen-2.jpg"
import screen3 from "@/case-studies/d-heart/assets/screen-3.jpg"
import process1 from "@/case-studies/d-heart/assets/process-1.jpg"
import process2 from "@/case-studies/d-heart/assets/process-2.jpg"

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
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

const groups = [
  { id: "framing", label: "Framing" },
  { id: "evidence", label: "Evidence" },
  { id: "visuals", label: "Visuals" },
  { id: "narrative", label: "Narrative" },
  { id: "navigation", label: "Navigation" },
]

const docs = {
  sectionHeading: {
    title: "SectionHeading",
    summary: "Default section opener for consistent rhythm and hierarchy.",
    props: [
      ["kicker", 'Small label above the title. Example: "Phase 01".'],
      ["title", "Main heading content."],
      ["subtitle", "Supporting text under the heading."],
      ["align", '"left" | "center". Controls text alignment.'],
      ["size", '"md" | "lg". Controls heading scale.'],
      ["divider", "Adds a bottom divider line."],
      ["actions", "Optional buttons or actions rendered beside the heading."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<SectionHeading
  kicker="Phase 01"
  title="Research"
  subtitle="A short explanation of the section."
  align="left"
  size="md"
/>`,
  },

  problemStatement: {
    title: "ProblemStatement",
    summary: "Use near the beginning of a case study to frame the challenge clearly.",
    props: [
      ["title", "Optional heading if used standalone."],
      ["intro", "Optional intro paragraph."],
      ["items", "Array of { label, value } pairs."],
      ["variant", '"stack" | "grid". Grid is better for concise framing.'],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<ProblemStatement
  variant="grid"
  items={[
    { label: "Problem", value: "Users were unsure whether the measurement was valid." },
    { label: "Goal", value: "Improve clarity and confidence." },
    { label: "Constraints", value: "Regulated wording in a high-stakes context." },
    { label: "Success criteria", value: "Better completion and comprehension." },
  ]}
/>`,
  },

  metrics: {
    title: "Metrics",
    summary: "Quantitative proof for impact, sample sizes, and measurable outcomes.",
    props: [
      ["items", "Array of metric objects with label, value, note, delta, deltaTone, icon."],
      ["columns", "1–4 columns depending on context and density."],
      ["variant", '"plain" | "card". Usually use "card".'],
      ["size", '"sm" | "md". Controls density and type scale.'],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<Metrics
  columns={4}
  items={[
    { label: "Drop-off", value: "-32%", note: "after onboarding simplification", deltaTone: "good" },
    { label: "Task completion", value: "+18%", note: "first-time users", deltaTone: "good" },
    { label: "Interviews", value: "12", note: "patients + clinicians" },
    { label: "Usability rounds", value: "2", note: "prototype validation" },
  ]}
/>`,
  },

  insightList: {
    title: "InsightList",
    summary: "Structured qualitative findings, stronger than plain bullet lists.",
    props: [
      ["items", "Array of { eyebrow, title, description, icon }."],
      ["variant", '"default" | "divided". Use divided for clearer separation.'],
      ["size", '"sm" | "md". Controls text density.'],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<InsightList
  items={[
    {
      eyebrow: "Insight 01",
      title: "Users needed explicit confirmation that the measurement was successful.",
      description: "Participants often repeated actions because they were unsure whether the result was valid.",
    },
    {
      eyebrow: "Insight 02",
      title: "Medical terminology reduced comprehension and increased hesitation.",
      description: "Users understood the goal, but struggled to interpret labels and result states.",
    },
  ]}
/>`,
  },

  comparisonTable: {
    title: "ComparisonTable",
    summary: "Explain old vs new, finding vs response, or assumption vs evidence.",
    props: [
      ["columns", "Array of column definitions: { key, label, emphasis? }."],
      ["rows", "Array of objects keyed by the column keys."],
      ["compact", "Tighter row spacing."],
      ["stackedOnMobile", "Uses stacked cards on mobile if true."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<ComparisonTable
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
  ]}
/>`,
  },

  figure: {
    title: "Figure",
    summary: "Default single-media block for images and videos.",
    props: [
      ["src", "Required media source."],
      ["alt", "Accessible alt text for images, or label fallback for video."],
      ["type", '"auto" | "image" | "video". Auto-detect is default.'],
      ["caption", "Short explanation below the media."],
      ["label", 'Small label above the caption. Example: "Artifact".'],
      ["credit", "Optional source / credit text."],
      ["frame", '"none" | "soft" | "card". Controls visual framing.'],
      ["aspect", 'Tailwind aspect class. Example: "aspect-[16/9]".'],
      ["fit", '"cover" | "contain". Mostly relevant for images.'],
      ["loading", '"lazy" | "eager". Image loading behavior.'],
      ["controls / autoPlay / loop / muted / playsInline / poster", "Video-only props."],
      ["className / mediaClassName / imgClassName", "Visual overrides."],
    ],
    code: `<Figure
  src={cover}
  alt="Cover figure example"
  frame="card"
  aspect="aspect-[16/9]"
  caption="Single figure with caption."
/>

// Video example
<Figure
  src={demoWebm}
  alt="Prototype demo"
  type="auto"
  autoPlay
  loop
  muted
  controls={false}
  aspect="aspect-[16/9]"
/>`,
  },

  imageGrid: {
    title: "ImageGrid",
    summary: "Use when multiple screenshots or artifacts belong to the same story beat.",
    props: [
      ["items", "Array of Figure-like objects."],
      ["cols", "1–4 columns depending on density."],
      ["gap", '"sm" | "md" | "lg".'],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<ImageGrid
  cols={3}
  items={[
    { src: screen1, alt: "Screen 1", frame: "soft", caption: "Measurement screen" },
    { src: screen2, alt: "Screen 2", frame: "soft", caption: "Feedback state" },
    { src: screen3, alt: "Screen 3", frame: "soft", caption: "History view" },
  ]}
/>`,
  },

  beforeAfter: {
    title: "BeforeAfter",
    summary: "Side-by-side comparison for redesigns and flow improvements.",
    props: [
      ["before", "Figure-like object for the original state."],
      ["after", "Figure-like object for the improved state."],
      ["layout", '"split" | "stack". Split is the common choice.'],
      ["gap", '"sm" | "md" | "lg".'],
      ["note", "Optional note below the comparison."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<BeforeAfter
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
/>`,
  },

  callout: {
    title: "Callout",
    summary: "Light emphasis block for key insights, constraints, and important notes.",
    props: [
      ["title", "Optional short heading."],
      ["children", "Main content."],
      ["icon", "Optional icon component."],
      ["tone", '"info" | "success" | "warning" | "danger" | "neutral".'],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<Callout title="Key insight" tone="info">
  Participants repeatedly asked for a clear confirmation that the measurement had succeeded.
</Callout>`,
  },

  pullQuote: {
    title: "PullQuote",
    summary: "Editorial pause for a strong statement, quote, or principle.",
    props: [
      ["quote", "Main quotation content."],
      ["author", "Optional attribution name."],
      ["role", "Optional role or source."],
      ["align", '"left" | "center".'],
      ["size", '"md" | "lg".'],
      ["tone", '"default" | "muted".'],
      ["showMark", "Shows decorative quote mark if true."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<PullQuote
  quote="We redesigned around reassurance and clarity, not around feature exposure."
  role="Core design principle"
  align="center"
  showMark={false}
/>`,
  },

  timeline: {
    title: "Timeline",
    summary: "Use for phases, weekly cadence, milestones, or process summaries.",
    props: [
      ["items", "Array of { title, range, body, bullets, link, tone }."],
      ["variant", '"rail" | "cards". Rail is the default.'],
      ["compact", "Tighter spacing."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<Timeline
  items={[
    {
      title: "Discovery",
      range: "Week 1",
      body: "Interviewed users and mapped the current journey.",
      bullets: ["12 interviews", "Journey map", "Terminology audit"],
      tone: "info",
    },
    {
      title: "Design",
      range: "Weeks 3–5",
      body: "Created and iterated on a calmer, feedback-rich flow.",
      tone: "success",
    },
  ]}
/>`,
  },

  processStep: {
    title: "ProcessStep",
    summary: "Structured step block for method, outputs, and artifact storytelling.",
    props: [
      ["step", 'Small step label. Example: "Step 01".'],
      ["title", "Main step title."],
      ["description", "Short supporting description."],
      ["bullets", "Array of outputs or activities."],
      ["figure", "Optional figure object with src, alt, caption, aspect, frame."],
      ["reverse", "Swaps media/text order on desktop."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<ProcessStep
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
/>`,
  },

  separator: {
    title: "CaseSeparator",
    summary: "A lightweight divider between dense narrative beats.",
    props: [
      ["label", "Optional inline label."],
      ["align", '"left" | "center" | "right".'],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<CaseSeparator />
<CaseSeparator label="Design response" />`,
  },

  nextProject: {
    title: "NextProject",
    summary: "Bottom-of-page handoff block rendered by CaseStudyPage, not by sections[].",
    props: [
      ["href", "Route to the next case study."],
      ["kicker", 'Small label above the project title. Example: "Next project".'],
      ["title", "Project title."],
      ["description", "Short preview copy."],
      ["image", "Preview image."],
      ["imageAlt", "Accessible description for the preview image."],
      ["tags", "Array of short tags."],
      ["className", "Extra spacing or layout overrides."],
    ],
    code: `<NextProject
  href="/projects/demo"
  kicker="Next project"
  title="Demo Case"
  description="Reusable bottom-of-page navigation block for leading the reader into the next project."
  image={cover}
  imageAlt="Next project preview"
  tags={["UX Design", "Healthcare", "Mobile"]}
/>`,
  },
}

function CodeBlock({ code }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 px-4 py-2 text-xs font-medium text-slate-400">
        Example code
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function CaseStudyBlocksDescribedPage() {
  return (
    <main className="w-full">
      <CaseHero
        logo={{ src: logo, alt: "D-Heart logo" }}
        projectName="Blocks Described"
        headline="A documentation page that explains every case-study block, shows a live example, and includes editable code."
        tags={["System", "Documentation", "Reference"]}
        cover={{ src: cover, alt: "Blocks described cover", aspect: "aspect-[16/9]" }}
      />

      <div className="relative w-full [--case-nav-w:16rem] [--case-top-offset:120px]">
        <CaseOverview
          id="overview"
          overviewTitle="Overview"
          overview={[
            "This page is a more detailed companion to the block showcase page. It includes live examples, editable code samples, and clear explanations of what each prop controls.",
            "No extra helper components are used for the documentation layout beyond this page file itself, so everything stays transparent and easy to modify."
          ]}
          links={[
            { label: "Open blocks page", href: "/projects/blocks", variant: "outline" },
            { label: "Open demo case", href: "/projects/d-heart", variant: "secondary" },
          ]}
          meta={[
            { label: "Purpose", value: "Block reference + code guide" },
            { label: "Audience", value: "Future me while building real case studies" },
            { label: "Approach", value: "Live example + code + prop guide" },
            { label: "Status", value: "Living documentation" },
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

        <FullBleedSection
          as="section"
          id="framing"
          bgClass="bg-background"
          size="fill"
          className="scroll-mt-[var(--case-top-offset)] py-16 md:py-20"
        >
          <div className="space-y-12">
            <SectionHeading
              title="Framing"
              subtitle="Blocks used to introduce the project and establish structure at the beginning of a case study."
            />

            <div className="space-y-6">
              <SectionHeading
                kicker="Live example"
                title={docs.sectionHeading.title}
                subtitle={docs.sectionHeading.summary}
                divider
              />
              <CodeBlock code={docs.sectionHeading.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.sectionHeading.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator label="Problem framing" />

            <div className="space-y-6">
              <ProblemStatement
                variant="grid"
                items={[
                  {
                    label: "Problem",
                    value: "Users often felt uncertain during the measurement flow and were unsure whether the result was valid.",
                  },
                  {
                    label: "Goal",
                    value: "Reduce anxiety, improve clarity, and help users complete the flow with more confidence.",
                  },
                  {
                    label: "Constraints",
                    value: "Clinical accuracy, regulated wording, and limited tolerance for ambiguity in a high-stakes context.",
                  },
                  {
                    label: "Success criteria",
                    value: "Higher completion confidence, clearer result interpretation, and smoother repeat usage over time.",
                  },
                ]}
              />
              <CodeBlock code={docs.problemStatement.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.problemStatement.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FullBleedSection>

        <FullBleedSection
          as="section"
          id="evidence"
          bgClass="bg-muted/30"
          size="fill"
          className="scroll-mt-[var(--case-top-offset)] py-16 md:py-20"
        >
          <div className="space-y-12">
            <SectionHeading
              title="Evidence"
              subtitle="Blocks for measurable outcomes, qualitative findings, and structured rationale."
            />

            <div className="space-y-6">
              <Metrics
                items={[
                  { label: "Onboarding drop-off", value: "–32%", note: "after simplifying the first-time flow", deltaTone: "good" },
                  { label: "Task completion", value: "+18%", note: "first-time users", deltaTone: "good" },
                  { label: "Interviews", value: "12", note: "patients + clinicians" },
                  { label: "Usability rounds", value: "2", note: "prototype validation" },
                ]}
                columns={4}
              />
              <CodeBlock code={docs.metrics.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.metrics.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
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
                    description: "Users understood the goal, but struggled to interpret labels and result states.",
                  },
                  {
                    eyebrow: "Insight 03",
                    title: "History and measurement views felt disconnected.",
                    description: "Participants wanted a clearer sense of progress over time.",
                  },
                ]}
              />
              <CodeBlock code={docs.insightList.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.insightList.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
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
              <CodeBlock code={docs.comparisonTable.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.comparisonTable.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FullBleedSection>

        <FullBleedSection
          as="section"
          id="visuals"
          bgClass="bg-background"
          size="media"
          className="scroll-mt-[var(--case-top-offset)] py-16 md:py-20"
        >
          <div className="space-y-12">
            <SectionHeading
              title="Visuals"
              subtitle="Blocks for screenshots, artifacts, galleries, and side-by-side visual comparison."
            />

            <div className="space-y-6">
              <Figure
                src={cover}
                alt="Cover figure example"
                frame="card"
                aspect="aspect-[16/9]"
                caption="Single figure with caption inside a media-width section."
              />
              <CodeBlock code={docs.figure.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.figure.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
              <ImageGrid
                cols={3}
                items={[
                  { src: screen1, alt: "D-Heart screen 1", frame: "soft", caption: "Measurement screen" },
                  { src: screen2, alt: "D-Heart screen 2", frame: "soft", caption: "Feedback state" },
                  { src: screen3, alt: "D-Heart screen 3", frame: "soft", caption: "History view" },
                ]}
              />
              <CodeBlock code={docs.imageGrid.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.imageGrid.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
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
              <CodeBlock code={docs.beforeAfter.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.beforeAfter.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FullBleedSection>

        <FullBleedSection
          as="section"
          id="narrative"
          bgClass="bg-muted/30"
          size="fill"
          className="scroll-mt-[var(--case-top-offset)] py-16 md:py-20"
        >
          <div className="space-y-12">
            <SectionHeading
              title="Narrative"
              subtitle="Blocks that add emphasis, pacing, and method storytelling."
            />

            <div className="space-y-6">
              <Callout title="Key insight">
                Participants repeatedly asked for a clear confirmation that the measurement had succeeded.
              </Callout>
              <CodeBlock code={docs.callout.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.callout.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
              <PullQuote
                quote="We redesigned around reassurance and clarity, not around feature exposure."
                role="Core design principle"
                align="center"
                showMark={false}
              />
              <CodeBlock code={docs.pullQuote.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.pullQuote.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
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
              <CodeBlock code={docs.timeline.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.timeline.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
              <div className="space-y-12">
                <ProcessStep
                  step="Step 01"
                  title="Understanding the measurement journey"
                  description="We interviewed users to identify the moments where uncertainty interrupted confidence."
                  bullets={["12 discovery interviews", "Journey mapping", "Terminology analysis"]}
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
                  bullets={["Goal-based IA", "Measurement flow redesign", "Clear feedback states"]}
                  figure={{
                    src: process2,
                    alt: "Flow redesign artifact",
                    caption: "Goal-led grouping simplified the flow.",
                    aspect: "aspect-[16/9]",
                  }}
                  reverse
                />
              </div>
              <CodeBlock code={docs.processStep.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.processStep.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CaseSeparator />

            <div className="space-y-6">
              <CaseSeparator label="Design response" />
              <CodeBlock code={docs.separator.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-background p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.separator.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FullBleedSection>

        <FullBleedSection
          as="section"
          id="navigation"
          bgClass="bg-background"
          size="fill"
          className="scroll-mt-[var(--case-top-offset)] py-16 md:py-20"
        >
          <div className="space-y-12">
            <SectionHeading
              title="Navigation"
              subtitle="Blocks that hand the reader from the current case study to the next one."
            />

            <div className="space-y-6">
              <NextProject
                href="/projects/demo"
                kicker="Next project"
                title="Demo Case"
                description="Reusable bottom-of-page navigation block for leading the reader into the next project."
                image={cover}
                imageAlt="Next project preview"
                tags={["UX Design", "Healthcare", "Mobile"]}
              />
              <CodeBlock code={docs.nextProject.code} />
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold">Available props</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {docs.nextProject.props.map(([name, desc]) => (
                    <li key={name}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground"> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <strong>Important:</strong> render <code>NextProject</code> from <code>CaseStudyPage</code>, not inside a case study’s <code>sections[]</code>. The next project should come from your ordered <code>projectIndex.js</code>, filtered by <code>isPublished</code>.
              </div>
            </div>
          </div>
        </FullBleedSection>
      </div>
    </main>
  )
}