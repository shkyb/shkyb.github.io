import React from "react"

import logo from "./assets/logo.png"
import cover from "./assets/cover.webp"
import placeholder from "./assets/placeholder.webp"
import screen1 from "./assets/screen-1.jpg"
import screen2 from "./assets/screen-2.jpg"
import screen3 from "./assets/screen-3.jpg"

import { Prose } from "@/components/case/layout/Prose"

import { SectionHeading } from "@/components/case/blocks/SectionHeading"
import { ProblemStatement } from "@/components/case/blocks/ProblemStatement"
import { Metrics } from "@/components/case/blocks/Metrics"
import { InsightList } from "@/components/case/blocks/InsightList"
import { ComparisonTable } from "@/components/case/blocks/ComparisonTable"
import { Figure } from "@/components/case/blocks/Figure"
import { FigureCarousel } from "@/components/case/blocks/FigureCarousel"
import { ImageGrid } from "@/components/case/blocks/ImageGrid"
import { BeforeAfter } from "@/components/case/blocks/BeforeAfter"
import { Callout } from "@/components/case/blocks/Callout"
import { PullQuote } from "@/components/case/blocks/PullQuote"
import { Timeline } from "@/components/case/blocks/Timeline"
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"


const topMetrics = [
  {
    label: "Final average SEQ",
    value: "6.25 / 7",
    delta:"⬆️",
    note: "Across connect, perform ECG, and share-result tasks.",
  },
  {
    label: "Participants",
    value: "5 x🧑‍⚕️",
    // delta:"🧑‍⚕️",
    note: "Nurses tested in real nursing home setting.",
  },
  // {
  //   label: "Share results",
  //   value: "6.3 / 7",
  //   note: "Saving and progressing after the exam became clearer.",
  // },
  {
    label: "Tree testing",
    value: "71%",
    note: "Overall success, with 80% overall directness.",
  },
]



const researchInsights = [
  {
    eyebrow: "Behavior",
    title: "Nurses followed their training, not the product’s assumptions",
    description:
      "Professional users ignored tutorials and acted from established medical routines, exposing a mismatch between the interface and real clinical behavior.",
  },
  {
    eyebrow: "Clarity",
    title: "The ECG task created the most uncertainty",
    description:
      "Users were often unsure how to progress, what the prompts meant, and whether the system was responding correctly.",
  },
  {
    eyebrow: "Feedback",
    title: "One LED was trying to explain too much",
    description:
      "Power, Bluetooth, charging, battery, and ECG states were all routed through a single feedback channel.",
  },
]

const solutions = [
  {
    step: "01",
    title: "Tablet-First Application",
    description:
      "Shifted from smartphone to tablet. Redesigned IA with a dashboard home and nested ECG flow — aligned with how nurses think.",
    figure: {
      src: cover,
      alt: "Screen 1",
      aspect: "aspect-square",
      loading: "eager",
    },
  },
  {
    step: "02",
    title: "Redesigned Physical Clips",
    description:
      "Spring-loaded ECG clips with ergonomic grip, reducing patient discomfort. Added red markers to prevent cable over-extension.",
    figure: {
      src: cover,
      alt: "Screen 1",
      aspect: "aspect-square",
      loading: "eager",
    },
  },
  {
    step: "03",
    title: "Intelligent LED System",
    description:
      "Separated LED into primary (ECG) and secondary (battery, Bluetooth). Clear color system: orange, blue, green, yellow.",
    figure: {
      src: cover,
      alt: "Screen 1",
      aspect: "aspect-square",
      loading: "eager",
    },
  },
  {
    step: "04",
    title: "Nurse-Integrated Ecosystem",
    description:
      "Integrated with patient databases to remove manual entry. Added nurse login via ID card, validated across multiple countries.",
    figure: {
      src: cover,
      alt: "Screen 1",
      aspect: "aspect-square",
      loading: "eager",
    },
  },
  {
    step: "05",
    title: "3D Instructional Renders",
    description:
      "Replaced flat diagrams with 3D visuals of device and electrode placement. Carousel allows self-paced guidance.",
    figure: {
      src: cover,
      alt: "Screen 1",
      aspect: "aspect-square",
      loading: "eager",
    },
  },
]

function SolutionsShowcase() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const sync = () => setIsMobile(mediaQuery.matches)

    sync()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", sync)
      return () => mediaQuery.removeEventListener("change", sync)
    }

    mediaQuery.addListener(sync)
    return () => mediaQuery.removeListener(sync)
  }, [])

  if (isMobile) {
    return (
      <div className="mt-12 space-y-6">
        {solutions.map((solution) => (
          <ProcessStep
            key={solution.step}
            className="mx-auto max-w-3xl [&>div:first-child]:flex [&>div:first-child]:h-full [&>div:first-child]:flex-col [&>div:first-child]:justify-end"
            step={solution.step}
            title={solution.title}
            description={solution.description}
            figure={solution.figure}
          />
        ))}
      </div>
    )
  }

  return (
    <Carousel
      className="mx-auto mt-12 max-w-3xl"
      options={{ align: "start", loop: true }}
      plugins={[
        Autoplay({ delay: 4500, stopOnInteraction: false })
      ]}
    >
      <CarouselContent>
        {solutions.map((solution) => (
          <CarouselItem key={solution.step}>
            <Card className="shadow-none">
              <CardContent>
                <ProcessStep
                  className="mx-auto max-w-3xl [&>div:first-child]:flex [&>div:first-child]:h-full [&>div:first-child]:flex-col [&>div:first-child]:justify-end"
                  step={solution.step}
                  title={solution.title}
                  description={solution.description}
                  figure={solution.figure}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CarouselPrevious className="static left-auto top-auto translate-y-0" />
          <CarouselNext className="static right-auto top-auto translate-y-0" />
        </div>

        <CarouselDots className="mt-0 justify-end" progressDuration={4500} />
      </div>
    </Carousel>
  )
}

export const dHeartCase = {
  slug: "d-heart",

  caseMeta: {
    logo: { src: logo, alt: "D-Heart logo" },
    title: "D-Heart Pro",
    projectName: "D-Heart",
    headline: "Redesigning a portable ECG ecosystem to make cardiac exams clearer, faster, and easier to trust for nurses working under pressure.",
    tags: ["UX Research", "UX/UI Design", "Healthcare", "Tablet", "Physical + Digital"],
    cover: {
      src: cover,
      alt: "D-Heart case study cover",
      aspect: "aspect-[16/9]",
    },
    overview: [
      <Prose>
        <p><a href="https://www.d-heartcare.com/en" target="_blank" rel="noopener noreferrer">D-Heart</a> is an award-winning portable ECG device paired with a companion app, which is built to improve diagnostic accessibility. In the Digital Design Studio course <a href="https://www.polimi.it/en/" target="_blank" rel="noopener noreferrer">@PoliMI</a>, our team redesigned both the digital workflow and key physical touch-points to make the product more usable for nurses working in nursing homes.</p>
        <p>The project moved from expert evaluation and field testing into information architecture redesign, tablet-first UI work, physical product improvements, and iterative validation with healthcare professionals.</p>
        {/* <p>My contribution focused on turning research into clearer flows, more understandable instructions, and a more coherent relationship between the app and the device.</p> */}
      </Prose>
    ],
    links: [
      // {label: "Prototype", href:"", icon:""},
      // {label: "Report", href:"", icon:"", variant:"secondary"}
    ],

    meta: [
      { label: "Role", value: "Conducting user research & testing, developing the design system & high-fidelity prototypes." },
      {
        label: "Team", value:
          [
            { name: "@Beyza Artunc", href: "https://www.linkedin.com/in/beyzaartunc/" },
            { name: "@Filippo Randon", href: "https://www.linkedin.com/in/filippo-randon-b25466180/" },
            { name: "@Marjan Mehrabi", href: "https://www.linkedin.com/in/marjan-mehrabi/" },
            { name: "& Me" }
          ]
      },
      { label: "Timeline", value: "Academic project · 4 Months · 2024" },
      { label: "Focus", value: "Research, UX, Usability, User Testing" },
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
          {/* <CaseSeparator
            className="mb-4"
            label="The Context"
            align="center"
          />

          <prose> 
            <p>D-Heart was originally designed as a portable ECG solution for both <strong>standard users</strong> and <strong>healthcare professionals</strong>. However, in a <strong>professional clinical setting</strong> —where every second counts—the device and its accompanying application suffered from <strong>significant usability friction</strong> that hindered medical workflows</p>
          </prose> */}

          <CaseSeparator
            className="mb-4"
            label="The Problem"
            align="center"
          />

          <SectionHeading
            // className="px-16"
            // kicker="Main Problem"
            align="left"
            title="Performing an ECG is a time-sensitive task. During testing, we found that the D-Heart ecosystem introduced unnecessary friction in both the app and the device, slowing nurses down at critical moments."
          // subtitle=""
          />


          {/* first image gird */}
          {/* <ImageGrid
            className="mt-16"
            cols={3}
            items={[
              { src: cover, 
                aspect: "aspect-square",
                alt: "Screen 1", 
                label: "01. Unclear ECG workflow", 
                caption: "Nurses struggled to follow the exam flow, understand instructions, and confirm when the device was correctly connected." },
             
              { src: cover, 
                aspect: "aspect-square",
                alt: "Screen 1", 
                label: "02. Navigation mismatch", 
                caption: "The app structure did not reflect nurses' mental models, making patients, results, and operational tasks harder to find." },
             
              { src: cover, 
                aspect: "aspect-square",
                alt: "Screen 1", 
                label: "03. Weak hardware feedback", 
                caption: "LED signals, hidden electrodes, and cable handling were unclear, reducing confidence during use." },
            ]}
          /> */}


          <ImageGrid
            className="mt-16"
            cols={3}
            items={[
              {
                src: cover,
                aspect: "aspect-[2/3]",
                alt: "Screen 1",
                label: "01. Wrong ECG workflow",
                caption: "A smartphone app with a consumer mental model — the flow conflicted with real clinical routines."
              },

              {
                src: cover,
                aspect: "aspect-[2/3]",
                alt: "Screen 1",
                label: "02. Friction in the physical experience",
                caption: "Cables tangled. Clips hurt patients. Key electrodes went unnoticed by every single test participant."
              },

              {
                src: cover,
                aspect: "aspect-[2/3]",
                alt: "Screen 1",
                label: "03. Unclear feedback",
                caption: "One LED for everything — nurses couldn't tell if the device was working, connecting, or failing."
              },
            ]}
          />

          <PullQuote
            className="mt-10"
            align="center"
            quote="It doesn't look like a normal ECG."
            author="— Nurse,"
            role="Initial user test at Villa le Magnolie nursing home"
          />

        </>
      ),
    },

    {
      id: "solution",
      label: "Solution",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator
            className="mb-4"
            label="The Solution"
            align="center"
          />

          <SectionHeading
            className="max-w-3xl mx-auto"
            title="A clearer ecosystem built around how nurses actually work."
          // subtitle="Instead of polishing isolated screens, we simplified the structure, clarified the ECG flow, and reduced ambiguity across both the app and the device."
          />

          <Prose className="mb-10 mt-4 mx-auto max-w-3xl">
            <p>
              We redesigned the experience around three principles: direct access to key actions, a clearer step-by-step ECG flow, and stronger feedback between the app and the device.
            </p>
          </Prose>

          <SolutionsShowcase />


          <Metrics items={topMetrics} columns={3} className="mt-20 mx-auto max-w-3xl" />


        </>
      ),
    },


    {
      id: "research",
      label: "Research",
      bgClass: "bg-background",
      size: "small",
      render: () => (
        <>
          <CaseSeparator label="UX Research" />
          <SectionHeading
            title="Research reframed the project around nurses as the primary users"
            subtitle="We combined expert evaluation, in-context testing, questionnaires, card sorting, and tree testing to understand how D-Heart behaved in real care scenarios."
            className="mb-10"
          />

          <Timeline
            // variant="cards"
            items={[
              {
                title: "Expert evaluation",
                meta: "Heuristic evaluation · cognitive walkthrough · task analysis",
                body:
                  "Each team member independently evaluated the app against Nielsen's 10 heuristics on both iOS and Android versions. Individual results were merged into a single severity-rated report — uncovering everything from minor cosmetic issues to usability catastrophes.",
                tags: ["Heuristic evaluation", "Cognitive Walkthrough", "Task Analysis"],
                tone: "info",
                range: "Checkpoint 1"
              },
              {
                title: "User testing",
                meta: "5 nurses in a nursing home + 3 standard users",
                body:
                  "Five nurses at Villa le Magnolie nursing home in Reggio Emilia used the real device on a real patient (acted by a team member). Every interaction was video and screen-recorded. Nurses were asked to think aloud — what they said matched what we feared.",
                tone: "success",
                tags: ["Usability Testing", "SEQ", "UEQ", "PREMO"],
                range: "Checkpoint 2"
              },
            
            ]}
          />

          <InsightList items={researchInsights} className="mt-10" />

          <Callout title="Key reframing" className="mt-10">
            Once we treated nurses in nursing homes as the primary audience, the
            design decisions around IA, instructions, and device feedback became much
            more coherent.
          </Callout>
        </>
      ),
    },

    {
      id: "ia",
      label: "IA",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="The information architecture was rebuilt around directness"
            subtitle="The original structure did not match nurses’ mental models, so we reorganized the app around the actions users expected to reach quickly."
          />

          <Prose className="mb-10">
            <p>
              The IA work showed that users mentally separated patients, results,
              functions, and help. It also revealed that Bluetooth and ECG actions
              were closely related. Those findings helped us simplify the structure
              and make the homepage feel more operational.
            </p>
          </Prose>

          <ComparisonTable
            columns={[
              { key: "before", label: "Before" },
              { key: "after", label: "After" },
            ]}
            rows={[
              {
                before:
                  "Users had to move around the app to reach operational tasks.",
                after:
                  "The homepage became a dashboard for quick access to ECG, patients, results, and device status.",
              },
              {
                before: "The ECG flow felt fragmented and unclear.",
                after:
                  "The ECG process was restructured as a clearer, step-by-step sequence.",
              },
              {
                before:
                  "Low-value features added confusion to the overall experience.",
                after:
                  "Features that caused friction without strong value were removed from the main flow.",
              },
            ]}
          />

          <Figure
            className="mt-10"
            src={placeholder}
            alt="Placeholder for information architecture artifacts"
            caption="Placeholder for card sorting, tree testing, or IA diagrams."
            aspect="aspect-[16/9]"
          />
        </>
      ),
    },

    {
      id: "design",
      label: "Design",
      bgClass: "bg-background",
      size: "media",
      render: () => (
        <>
          <SectionHeading
            title="The UI was redesigned for tablet use, clarity, and fast decision-making"
            subtitle="The experience shifted to a tablet-first approach because nurses could not rely on personal smartphones during work, and the larger screen supported better readability."
          />

          <BeforeAfter
            before={{
              src: placeholder,
              alt: "Placeholder for previous homepage",
              label: "Before",
              caption: "Placeholder for the previous homepage.",
              aspect: "aspect-[16/10]",
            }}
            after={{
              src: placeholder,
              alt: "Placeholder for redesigned homepage",
              label: "After",
              caption: "Placeholder for the redesigned dashboard homepage.",
              aspect: "aspect-[16/10]",
            }}
            note="The homepage evolved into a clearer dashboard that surfaced the main ECG action and the most important operational areas."
          />

          <ImageGrid
            className="mt-10"
            cols={3}
            items={[
              {
                src: placeholder,
                alt: "Placeholder for homepage redesign",
                caption: "Dashboard home.",
                aspect: "aspect-[4/3]",
              },
              {
                src: placeholder,
                alt: "Placeholder for patient page redesign",
                caption: "Patients page.",
                aspect: "aspect-[4/3]",
              },
              {
                src: placeholder,
                alt: "Placeholder for ECG flow redesign",
                caption: "ECG execution flow.",
                aspect: "aspect-[4/3]",
              },
            ]}
          />
        </>
      ),
    },

    {
      id: "device",
      label: "Device",
      bgClass: "bg-muted/30",
      size: "media",
      render: () => (
        <>
          <SectionHeading
            title="Instructions and hardware feedback were redesigned together"
            subtitle="Because the ECG procedure was the most demanding part of the experience, we focused on making guidance more visual and device feedback easier to interpret."
          />

          <ProcessStep
            step="01"
            title="Make setup and progression easier to understand"
            description={
              <Prose>
                <p>
                  The first instruction screens were revised to make setup clearer,
                  including details users had repeatedly missed, such as the rear
                  electrodes and movement during the 12-lead process.
                </p>
              </Prose>
            }
            bullets={[
              "Critical setup details were brought earlier in the flow.",
              "Wording became more explicit and easier to scan.",
              "Users could re-access guidance during the exam.",
            ]}
            figure={{
              src: placeholder,
              alt: "Placeholder for redesigned instruction flow",
              caption: "Placeholder for instruction redesign.",
              aspect: "aspect-[16/10]",
            }}
          />

          <ProcessStep
            step="02"
            reverse
            title="Reduce ambiguity in the physical touchpoint"
            description={
              <Prose>
                <p>
                  We explored gentler clips, cable signifiers, and clearer device
                  status logic so the hardware felt easier to understand and more
                  dependable in use.
                </p>
              </Prose>
            }
            bullets={[
              "Clip concepts aimed to reduce discomfort and frustration.",
              "Cable signifiers clarified safe pull length.",
              "LED feedback was revised to communicate state more clearly.",
            ]}
            figure={{
              src: placeholder,
              alt: "Placeholder for physical device improvements",
              caption: "Placeholder for clip, cable, and LED improvements.",
              aspect: "aspect-[16/10]",
            }}
          />
        </>
      ),
    },

    {
      id: "testing",
      label: "Testing",
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="Final testing showed a much stronger experience across the key tasks"
            subtitle="After high-fidelity digital and physical prototypes were completed, participants were asked to connect the device, perform an ECG, and share the results."
          />

          <Metrics
            columns={3}
            items={[
              {
                label: "Connect the device",
                value: "6.67 / 7",
                note: "Clearer pairing and better feedback.",
              },
              {
                label: "Perform an ECG",
                value: "5.83 / 7",
                note: "Still the hardest task, but improved from earlier testing.",
              },
              {
                label: "Share results",
                value: "6.3 / 7",
                note: "Progression after the exam became easier to understand.",
              },
            ]}
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
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            title="What I learned"
            subtitle="In healthcare, usability is not just about cleaner screens. It is about trust, pace, and how well digital decisions support real-world routines."
          />

          <InsightList
            items={[
              {
                eyebrow: "Systems thinking",
                title: "The solution had to go beyond screens",
                description:
                  "The strongest improvements came from treating the app and device as one system rather than designing them independently.",
              },
              {
                eyebrow: "Mental models",
                title: "Professional workflows should shape the product",
                description:
                  "Nurses did not need more explanation. They needed a tool that respected how they already work.",
              },
              {
                eyebrow: "Iteration",
                title: "Small clarity changes created outsized impact",
                description:
                  "Labels, instruction access, and clearer feedback states had a big effect on how trustworthy the product felt.",
              },
            ]}
          />
        </>
      ),
    },
  ],
}
