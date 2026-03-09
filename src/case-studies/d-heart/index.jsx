import React from "react"

import logo from "./assets/logo.png"
import cover from "./assets/cover.webp"
import placeholder from "./assets/placeholder.webp"

import { SectionHeading } from "@/components/case/blocks/SectionHeading"
import { ProblemStatement } from "@/components/case/blocks/ProblemStatement"
import { Metrics } from "@/components/case/blocks/Metrics"
import { InsightList } from "@/components/case/blocks/InsightList"
import { ComparisonTable } from "@/components/case/blocks/ComparisonTable"
import { Figure } from "@/components/case/blocks/Figure"
import { ImageGrid } from "@/components/case/blocks/ImageGrid"
import { BeforeAfter } from "@/components/case/blocks/BeforeAfter"
import { Callout } from "@/components/case/blocks/Callout"
import { PullQuote } from "@/components/case/blocks/PullQuote"
import { Timeline } from "@/components/case/blocks/Timeline"
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"
import { href } from "react-router-dom"

const problemItems = [
  {
    label: "Digital flow",
    value:
      "The ECG workflow was difficult to follow. Nurses struggled with Bluetooth pairing, unclear button labels, and step-by-step instructions that did not match how they normally perform an ECG.",
  },
  {
    label: "Information architecture",
    value:
      "Navigation did not reflect nurses’ mental models. Users had trouble finding results, understanding where actions lived, and distinguishing between operational tasks and supporting content.",
  },
  {
    label: "Physical touchpoint",
    value:
      "The device introduced avoidable friction: two electrodes on the back were often missed, clips caused discomfort during attachment and detachment, and cable handling created confusion and risk of damage.",
  },
]

const solutionMetrics = [
  {
    label: "Final usability score",
    value: "6.25 / 7",
    helper: "Average SEQ across the final validation tasks.",
  },
  {
    label: "Connection task",
    value: "6.67 / 7",
    helper: "Users found pairing and starting the device much clearer in the final prototype.",
  },
  {
    label: "Sharing results",
    value: "6.3 / 7",
    helper: "Saving and sending outcomes became more understandable after redesign.",
  },
  {
    label: "IA validation",
    value: "71% success",
    helper: "Tree testing showed solid overall success, with 80% overall directness.",
  },
]

const researchInsights = [
  {
    eyebrow: "Workflow mismatch",
    title: "Nurses ignored tutorials and followed their own training",
    description:
      "The original solution assumed users would learn through guidance inside the app. In practice, nurses acted from established medical routines and expected the interface to support those habits immediately.",
  },
  {
    eyebrow: "Clarity",
    title: "The ECG procedure created uncertainty at critical moments",
    description:
      "Users were unsure when the device was connected, how to move through the 12-lead process, and whether they were progressing correctly through the exam.",
  },
  {
    eyebrow: "Findability",
    title: "Results and patient flows were harder to reach than expected",
    description:
      "Participants often searched for patients instead of manually adding them, and they struggled to retrieve previous ECG results when they did not remember a patient’s name.",
  },
  {
    eyebrow: "Hardware feedback",
    title: "The device was speaking too much through a single LED",
    description:
      "One central light tried to communicate power, Bluetooth, battery, charging, and ECG states. Users could not reliably interpret those patterns the first time.",
  },
]

const impactRows = [
  {
    area: "Workflow",
    before:
      "Users had to interpret unclear steps, unclear labels, and weak system feedback during a high-pressure medical task.",
    after:
      "The experience was reorganized around quick access, linear ECG execution, and explicit feedback between digital and physical touchpoints.",
  },
  {
    area: "Instructions",
    before:
      "Text-heavy guidance and unclear transitions made the ECG procedure harder to learn and harder to remember while performing it.",
    after:
      "3D-rendered visual instructions, clearer button wording, and in-flow access to guidance reduced uncertainty during the exam.",
  },
  {
    area: "Device comprehension",
    before:
      "Users often missed the rear electrodes and struggled to understand light patterns, cable limits, and hardware state.",
    after:
      "A revised LED model, cable signifiers, and redesigned clips made the device easier to understand and safer to use.",
  },
]

export const dHeartCase = {
  slug: "d-heart",

  caseMeta: {
    logo: { src: logo, alt: "D-Heart logo" },
    title: "D-Heart",
    projectName: "D-Heart",
    headline: "Redesigning a portable ECG ecosystem for healthcare professionals.",
    tags: ["UX Research", "UX/UI Design", "Healthcare", "Tablet", "Physical + Digital"],
    cover: {
      src: cover,
      alt: "D-Heart case study cover",
      aspect: "aspect-[16/9]",
    },
    overview: [
      "D-Heart is a portable ECG device paired with a companion application. Our team redesigned both the digital workflow and key physical touchpoints to make the product more usable for nurses working in nursing homes.",
      "The project started with expert evaluation and user testing, then moved into information architecture redesign, tablet-first UI work, physical product improvements, and iterative validation with healthcare professionals.",
      "My contribution focused on translating research into clearer flows, better instructions, and a more coherent experience between the app and the device.",
    ],
    meta: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Team", value: 
        [
          {name:"@Beyza Artunc", href:"https://www.linkedin.com/in/beyzaartunc/"},
          {name:"@Filippo Randon", href:"https://www.linkedin.com/in/filippo-randon-b25466180/"},
          {name:"@Marjan Mehrabi", href:"https://www.linkedin.com/in/marjan-mehrabi/"},
          {name:"&Me", href:"/"}
        ]
       },
      { label: "Timeline", value: "Academic project · 2023/2024" },
      { label: "Focus", value: "Research, IA, interaction design, testing" },
    ],
  },

  sections: [
    {
      id: "problem",
      label: "Problem",
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="The existing solution slowed down a task that needed to feel immediate and trustworthy"
            subtitle="D-Heart had strong potential for use in professional care settings, but the original experience introduced too much friction in both the app and the device for nurses working under time pressure."
          />

          <ProblemStatement
            intro="From the first research round, the biggest issue was not one isolated screen. It was the gap between how the product expected people to behave and how healthcare professionals actually work."
            items={problemItems}
            variant="grid"
          />

          <PullQuote
            quote="It doesn’t look like a normal ECG."
            author="Nurse participant"
            role="Usability testing"
            className="mt-10"
          />
        </>
      ),
    },

    {
      id: "solution-impact",
      label: "Solution & Impact",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="We redesigned D-Heart as a clearer, more professional ecosystem"
            subtitle="Instead of polishing isolated screens, we reframed the product around the needs of nurses: quick access, linear execution, clearer feedback, and less friction between physical and digital interactions."
          />

          <InsightList
            items={[
              {
                eyebrow: "Digital",
                title: "A dashboard-style home for the most important actions",
                description:
                  "The new structure prioritized starting an ECG, checking patients, and accessing results without forcing users through unnecessary detours.",
              },
              {
                eyebrow: "Flow",
                title: "A more linear ECG process with clearer instructions",
                description:
                  "The exam flow was redesigned around nested, step-by-step progression so the user always understood where they were and what came next.",
              },
              {
                eyebrow: "Hardware",
                title: "Physical improvements that supported the digital experience",
                description:
                  "We redesigned clips, introduced cable signifiers, and split feedback across multiple LEDs so device state became easier to read.",
              },
            ]}
          />

          <Metrics items={solutionMetrics} columns={4} className="mt-10" />

          <ComparisonTable
            className="mt-10"
            columns={[
              { key: "area", label: "Area" },
              { key: "before", label: "Before" },
              { key: "after", label: "After" },
            ]}
            rows={impactRows}
          />
        </>
      ),
    },

    {
      id: "deep-dive",
      label: "Deep Dive",
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <CaseSeparator label="Deep dive" />
      ),
    },

    {
      id: "research",
      label: "Research",
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="Research reframed the project around healthcare professionals"
            subtitle="The team combined expert evaluation, field testing, questionnaires, card sorting, and tree testing to understand how D-Heart behaved in real care scenarios."
          />

          <Timeline
            items={[
              {
                title: "Expert evaluation",
                meta: "Heuristic evaluation · cognitive walkthrough · task analysis",
                body:
                  "We reviewed the current app against usability principles and stepped through the core tasks expected from a professional user.",
                tone: "info",
              },
              {
                title: "User testing with nurses",
                meta: "5 nurses in a nursing home + 3 standard users",
                body:
                  "We observed the full ECG workflow from opening the case to sharing results, while collecting SEQ, UEQ, and PREMO responses.",
                tone: "success",
              },
              {
                title: "Information architecture research",
                meta: "63 card-sorting participants · 44 tree-testing participants",
                body:
                  "We validated labels, grouping logic, and findability to build an IA that matched how users expected content to be organized.",
                tone: "warning",
              },
              {
                title: "Iterative validation",
                meta: "Lo-fi and hi-fi prototype testing",
                body:
                  "Wireframes, mockups, and high-fidelity prototypes were tested to refine labels, layouts, instructions, and physical feedback mechanisms.",
                tone: "info",
              },
            ]}
          />

          <InsightList items={researchInsights} className="mt-10" />

          <Callout title="Key reframing" className="mt-10">
            The most important strategic shift was deciding to design primarily for
            nurses in nursing homes. That choice made the workflow, IA, and physical
            feedback decisions much more coherent.
          </Callout>
        </>
      ),
    },

    {
      id: "ia",
      label: "Information Architecture",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="The information architecture was rebuilt around directness"
            subtitle="The original structure did not match nurses’ mental models. We used card sorting and tree testing to reorganize the app around what users expected to find quickly."
          />

          <ProcessStep
            step="01"
            title="Card sorting exposed more intuitive groupings"
            description="Participants consistently grouped the product into four major clusters: patients, functions, results, and help. This showed that patients and results should remain clearly distinct instead of being blended together."
            bullets={[
              "Users strongly connected Bluetooth and ECG functions.",
              "Patients and results were mentally modeled as separate spaces.",
              "Some labels needed to be simplified for better intelligibility.",
            ]}
            figure={{
              src: placeholder,
              alt: "Placeholder for card sorting artifacts",
              caption: "Placeholder for card sorting results.",
              aspect: "aspect-[4/3]",
            }}
          />

          <ProcessStep
            step="02"
            title="Tree testing validated a more operational homepage"
            description="Based on the new grouping logic, the homepage was redesigned as a dashboard that emphasized the most important actions and reduced unnecessary branching."
            bullets={[
              "Overall success reached 71%.",
              "Overall directness reached 80%.",
              "Reminder-related tasks performed poorly and were removed from the core app experience.",
            ]}
            reverse
            figure={{
              src: placeholder,
              alt: "Placeholder for tree testing results",
              caption: "Placeholder for tree testing analysis.",
              aspect: "aspect-[4/3]",
            }}
          />

          <ComparisonTable
            className="mt-10"
            columns={[
              { key: "old", label: "Before" },
              { key: "new", label: "After" },
            ]}
            rows={[
              {
                old: "Users had to move around the app to reach operational tasks.",
                new: "The homepage became a dashboard for quick access to patients, results, Bluetooth, battery, and ECG.",
              },
              {
                old: "The ECG flow felt fragmented and unclear.",
                new: "The ECG process was restructured as a nested, linear sequence.",
              },
              {
                old: "Reminder functionality added confusion and little value.",
                new: "Low-value, low-comprehension features were removed.",
              },
            ]}
          />
        </>
      ),
    },

    {
      id: "digital-design",
      label: "Digital Design",
      bgClass: "bg-background",
      size: "media",
      render: () => (
        <>
          <SectionHeading
            title="The UI was redesigned for tablet use, clarity, and fast decision-making"
            subtitle="The app was rethought as a tablet-first experience because nurses could not rely on personal smartphones during work, and the larger screen supported better readability and exam management."
          />

          <BeforeAfter
            before={{
              src: placeholder,
              alt: "Placeholder for old homepage",
              label: "Before",
              caption: "Placeholder for the previous homepage.",
              aspect: "aspect-[16/10]",
            }}
            after={{
              src: placeholder,
              alt: "Placeholder for redesigned homepage",
              label: "After",
              caption: "Placeholder for the redesigned dashboard home.",
              aspect: "aspect-[16/10]",
            }}
            note="The homepage evolved from a less structured layout into a dashboard that surfaced the primary ECG action and quick access to patients, results, and device status."
          />

          <ImageGrid
            className="mt-10"
            cols={3}
            items={[
              {
                src: placeholder,
                alt: "Placeholder for homepage redesign",
                caption: "Homepage and dashboard structure.",
                aspect: "aspect-[4/3]",
              },
              {
                src: placeholder,
                alt: "Placeholder for patient page",
                caption: "Patients page redesigned for larger screens.",
                aspect: "aspect-[4/3]",
              },
              {
                src: placeholder,
                alt: "Placeholder for ECG flow",
                caption: "ECG execution flow and task hierarchy.",
                aspect: "aspect-[4/3]",
              },
            ]}
          />

          <Callout title="Why this mattered" className="mt-10">
            In 5-second testing, users immediately recognized the app as health-related
            and correctly noticed the primary ECG action. The redesign made the
            product’s purpose and main path clearer at first glance.
          </Callout>
        </>
      ),
    },

    {
      id: "instructions",
      label: "Instructions",
      bgClass: "bg-muted/30",
      size: "media",
      render: () => (
        <>
          <SectionHeading
            title="Instructions became more visual, more progressive, and easier to re-access"
            subtitle="The ECG procedure was one of the most confusing parts of the original solution, so a large part of the redesign focused on helping nurses understand each step without breaking their rhythm."
          />

          <ProcessStep
            step="01"
            title="Clarify the beginning of the flow"
            description="The first screens were redesigned to show device positioning more clearly, including the previously missed rear electrodes."
            bullets={[
              "Critical setup details were brought earlier into the flow.",
              "The step structure was made more explicit.",
              "Wording was simplified to reduce hesitation.",
            ]}
            figure={{
              src: placeholder,
              alt: "Placeholder for opening instructions",
              caption: "Placeholder for the redesigned opening instructions.",
              aspect: "aspect-[16/10]",
            }}
          />

          <ProcessStep
            step="02"
            title="Replace vague guidance with 3D-rendered instruction sequences"
            description="3D visuals explained movement, depth, and repositioning more clearly than flat instructions, especially for the black electrode movement during the 12-lead process."
            bullets={[
              "Instruction pages became easier to understand visually.",
              "The interaction was improved with a carousel-like progression.",
              "Button labels such as “Skip instructions” and “Next step” made intent clearer.",
            ]}
            reverse
            figure={{
              src: placeholder,
              alt: "Placeholder for 3D instruction renders",
              caption: "Placeholder for the 3D instruction system.",
              aspect: "aspect-[16/10]",
            }}
          />

          <Callout title="During validation">
            Users appreciated the visual clarity of the new instructions, but still
            needed access to guidance during the exam itself. That led to a floating
            shortcut so initial instructions could always be reopened mid-flow.
          </Callout>
        </>
      ),
    },

    {
      id: "physical-device",
      label: "Physical Device",
      bgClass: "bg-background",
      size: "media",
      render: () => (
        <>
          <SectionHeading
            title="The physical touchpoint was redesigned to reduce confusion and discomfort"
            subtitle="Because the product experience depended on the app and the hardware working together, the redesign also addressed clips, cable handling, and LED communication."
          />

          <ImageGrid
            cols={3}
            items={[
              {
                src: placeholder,
                alt: "Placeholder for clip redesign",
                caption: "Redesigned ECG clips for easier attachment and detachment.",
                aspect: "aspect-square",
              },
              {
                src: placeholder,
                alt: "Placeholder for cable signifier",
                caption: "Cable signifier marking the maximum safe pull length.",
                aspect: "aspect-square",
              },
              {
                src: placeholder,
                alt: "Placeholder for LED logic",
                caption: "Split LED logic for ECG state and status feedback.",
                aspect: "aspect-square",
              },
            ]}
          />

          <InsightList
            className="mt-10"
            items={[
              {
                eyebrow: "Clips",
                title: "A gentler and more secure attachment mechanism",
                description:
                  "The new clip concept aimed to reduce frustration during repeated use while preserving the secure feeling professionals expect from medical hardware.",
              },
              {
                eyebrow: "Cables",
                title: "A simple signifier prevented accidental over-pulling",
                description:
                  "A small red marker showed users where the cable effectively ended, helping protect the mechanical integrity of the wires.",
              },
              {
                eyebrow: "LEDs",
                title: "Feedback was distributed across clearer states",
                description:
                  "Instead of forcing every signal through one large LED, the redesign separated ECG activity from Bluetooth and battery status so meanings were easier to interpret.",
              },
            ]}
          />
        </>
      ),
    },

    {
      id: "testing",
      label: "Testing",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="Final testing showed a much stronger experience across the key tasks"
            subtitle="After the high-fidelity prototypes of the digital and physical product were completed, the final test asked participants to connect the device, perform an ECG, and share the results."
          />

          <Metrics
            columns={3}
            items={[
              {
                label: "Connect the device",
                value: "6.67 / 7",
                helper: "Strong performance after adding clearer digital and hardware feedback.",
              },
              {
                label: "Perform an ECG",
                value: "5.83 / 7",
                helper: "Still the most demanding task, but much improved from earlier rounds.",
              },
              {
                label: "Share results",
                value: "6.3 / 7",
                helper: "Result handling and progression became more understandable.",
              },
            ]}
          />

          <Figure
            className="mt-10"
            src={placeholder}
            alt="Placeholder for final user test"
            caption="Placeholder for the final prototype validation with digital and physical touchpoints."
            aspect="aspect-[16/9]"
          />

          <PullQuote
            className="mt-10"
            quote="You did a very great job. I especially liked the minimal graphic style that you used, I can clearly see it matches your final user."
            author="Andrea Desiato"
            role="Digital Product Director"
          />
        </>
      ),
    },

    {
      id: "reflection",
      label: "Reflection",
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="What this project taught me"
            subtitle="This project reinforced that in healthcare, usability is not just about cleaner screens. It is about trust, pace, and how well digital decisions support real-world routines."
          />

          <InsightList
            items={[
              {
                eyebrow: "System thinking",
                title: "The best solution was not screen-deep",
                description:
                  "The main improvements came from redesigning the ecosystem across IA, interface, instructions, and physical feedback rather than focusing on isolated pages.",
              },
              {
                eyebrow: "Mental models",
                title: "Professional workflows should shape the product, not the other way around",
                description:
                  "Nurses did not need more explanation. They needed a system that respected how they already work and reduced friction around it.",
              },
              {
                eyebrow: "Iteration",
                title: "Small wording and feedback changes had outsized effects",
                description:
                  "Changes like clearer CTA labels, visible state communication, and always-available instructions made the product feel more understandable and reliable.",
              },
            ]}
          />
        </>
      ),
    },
  ],
}