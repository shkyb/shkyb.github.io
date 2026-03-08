import logo from "@/case-studies/d-heart/assets/logo.png"
import cover from "@/case-studies/d-heart/assets/cover.webp"
import screen1 from "@/case-studies/d-heart/assets/screen-1.jpg"
import screen2 from "@/case-studies/d-heart/assets/screen-2.jpg"
import screen3 from "@/case-studies/d-heart/assets/screen-3.jpg"
import process1 from "@/case-studies/d-heart/assets/process-1.jpg"
import process2 from "@/case-studies/d-heart/assets/process-2.jpg"

import { FullBleedSection } from "@/components/case/layout/FullBleedSection"
import { CaseHero } from "@/components/case/blocks/CaseHero"
import { CaseOverview } from "@/components/case/blocks/CaseOverview"
import { SectionHeading } from "@/components/case/blocks/SectionHeading"
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
import { ProblemStatement } from "@/components/case/blocks/ProblemStatement"
import { NextProject } from "@/components/case/blocks/NextProject"

/**
 * Block usage rules
 *
 * - Use SectionHeading at the start of most sections.
 * - Use Metrics for quantitative proof.
 * - Use InsightList for qualitative findings.
 * - Use PullQuote sparingly: 1–2 times per case.
 * - Use Figure as the default single-media block.
 * - Use ImageGrid for multiple related visuals.
 * - Use BeforeAfter for redesign comparisons.
 * - Use ComparisonTable to explain decisions.
 * - Use ProcessStep for methodology/process storytelling.
 * - Use NextProject outside the main narrative when possible.
 */


export default function CaseStudyBlocksPage() {
  return (
    <main className="w-full">
      <CaseHero
        logo={{ src: logo, alt: "D-Heart logo" }}
        title="Case Study Block Showcase"
        headline="A live sandbox page to validate all reusable case-study blocks before using them in real projects."
        tags={["System", "Portfolio", "Demo"]}
        cover={{ src: cover, alt: "Block showcase cover", aspect: "aspect-[16/9]" }}
      />

      <CaseOverview
        overviewTitle="Overview"
        overview={[
          "This page documents the case-study block system and shows recommended usage patterns.",
          "Use it as a living style guide while building future portfolio cases."
        ]}
        links={[
          { label: "Back to portfolio", href: "/", variant: "outline" },
        ]}
        meta={[
          { label: "Purpose", value: "Block documentation" },
          { label: "Scope", value: "Reusable case-study components" },
          { label: "Year", value: "2026" },
          { label: "Status", value: "Internal demo page" },
        ]}
      />

      <FullBleedSection bgClass="bg-background" size="fill" className="py-16">
        <SectionHeading
          title="Problem framing"
          subtitle="Use this block near the beginning of a case study to establish the challenge clearly."
        />
        <ProblemStatement
          variant="grid"
          items={[
            {
              label: "Problem",
              value: "Users felt uncertain during measurement and did not know whether results were trustworthy.",
            },
            {
              label: "Goal",
              value: "Increase confidence, reduce friction, and make results easier to understand.",
            },
            {
              label: "Constraints",
              value: "Regulated wording, high-stakes content, and limited tolerance for ambiguity.",
            },
            {
              label: "Success criteria",
              value: "Clearer completion, better comprehension, and stronger repeat use.",
            },
          ]}
        />
      </FullBleedSection>

      <FullBleedSection bgClass="bg-muted/30" size="fill" className="py-16">
        <SectionHeading
          title="Metrics"
          subtitle="Use this block for quantitative outcomes, research counts, or performance improvements."
        />
        <Metrics
          items={[
            { label: "Onboarding drop-off", value: "–32%", note: "after simplifying the first-time flow", deltaTone: "good" },
            { label: "Task completion", value: "+18%", note: "first-time users", deltaTone: "good" },
            { label: "Usability rounds", value: "2", note: "prototype testing" },
            { label: "Interviews", value: "12", note: "patients + clinicians" },
          ]}
          columns={4}
        />
      </FullBleedSection>

      <FullBleedSection bgClass="bg-background" size="fill" className="py-16">
        <SectionHeading
          title="Callout and pull quote"
          subtitle="Use these to create emphasis and editorial rhythm."
        />
        <div className="space-y-8">
          <Callout title="Key insight">
            Participants repeatedly asked for a clear confirmation that the measurement had succeeded.
          </Callout>

          <PullQuote
            quote="We redesigned around reassurance and clarity, not around feature exposure."
            role="Core design principle"
            align="center"
            showMark={false}
          />
        </div>
      </FullBleedSection>

      <FullBleedSection bgClass="bg-muted/30" size="fill" className="py-16">
        <SectionHeading
          title="Insight list"
          subtitle="Use this instead of plain bullets when you want findings to feel more structured."
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
              description: "Participants wanted a clearer sense of progress over time.",
            },
          ]}
        />
      </FullBleedSection>

      <FullBleedSection bgClass="bg-background" size="fill" className="py-16">
        <SectionHeading
          title="Timeline"
          subtitle="Use this for process phases, project cadence, or key milestones."
        />
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
      </FullBleedSection>

      <FullBleedSection bgClass="bg-muted/30" size="media" className="py-16">
        <SectionHeading
          title="Figure"
          subtitle="Use one standard figure block for images and videos."
        />
        <Figure
          src={cover}
          alt="Cover figure example"
          frame="card"
          aspect="aspect-[16/9]"
          caption="Single figure with caption inside a media-width section."
        />
      </FullBleedSection>

      <FullBleedSection bgClass="bg-background" size="media" className="py-16">
        <SectionHeading
          title="Image grid"
          subtitle="Use this for multiple screens, artifacts, or mixed media."
        />
        <ImageGrid
          cols={3}
          items={[
            { src: screen1, alt: "Screen 1", frame: "soft" },
            { src: screen2, alt: "Screen 2", frame: "soft" },
            { src: screen3, alt: "Screen 3", frame: "soft" },
          ]}
        />
      </FullBleedSection>

      <FullBleedSection bgClass="bg-muted/30" size="media" className="py-16">
        <SectionHeading
          title="Before / After"
          subtitle="Use this for redesign comparisons or flow improvements."
        />
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
      </FullBleedSection>

      <FullBleedSection bgClass="bg-background" size="fill" className="py-16">
        <SectionHeading
          title="Comparison table"
          subtitle="Use this to explain what changed and why."
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
              before: "Users had to infer whether they completed the step correctly.",
              after: "Each step included direct feedback and a clear next action.",
            },
            {
              before: "History and measurement felt disconnected.",
              after: "Results and progress over time were tied together more clearly.",
            },
          ]}
        />
      </FullBleedSection>

      <FullBleedSection bgClass="bg-muted/30" size="media" className="py-16">
        <SectionHeading
          title="Process steps"
          subtitle="Use these to tell a method story more clearly than plain paragraphs."
        />
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
      </FullBleedSection>

      <FullBleedSection bgClass="bg-background" size="fill" className="py-16">
        <SectionHeading
          title="Next project"
          subtitle="Use this outside the main case narrative as the page handoff."
        />
        <NextProject
          href="/projects/d-heart"
          kicker="Example handoff"
          title="D-Heart"
          description="Reusable bottom-of-page navigation block for the next case study."
          image={cover}
          imageAlt="Next project preview"
          tags={["UX Design", "Healthcare", "Mobile"]}
        />
      </FullBleedSection>
    </main>
  )
}