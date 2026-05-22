import React from "react"

import logo from "./assets/logo.png"
import cover from "./assets/cover.webp"
import placeholder from "./assets/placeholder.webp"
import imgProblem from "./assets/dheart_problem_01.webp"
import imgNurse_1 from "./assets/dh_nurse_1.webp"
import imgNurse_2 from "./assets/dh_nurse_2.webp"
import imgNurse_3 from "./assets/dh_nurse_3.webp"
import imgNurse_4 from "./assets/dh_nurse_4.webp"
import imgNurse_5 from "./assets/dh_nurse_5.webp"
import imgNurse_6 from "./assets/dh_nurse_6.webp"
import imgNurse_7 from "./assets/dh_nurse_7.webp"
import imgNurse_8 from "./assets/dh_nurse_8.webp"
import imgNurse_9 from "./assets/dh_nurse_9.webp"


import vidProblem from "./assets/old d-heart video.webm"
import vidSolInstruction from "./assets/d-heart_solution_instructions.webm"
import vidSolInterface from "./assets/d-heart_solution_interface.webm"
import imgSolElec from "./assets/d-heart_solution_electrode.webp"
import vidFindElec from "./assets/dh_find_elec.webm"
import imgFindInstr from "./assets/dh_find_instruct.webp"
import imgFindPain from "./assets/dh_find_pain.webp"
import imgFindLed from "./assets/dh_find_led.webp"
import imgFindCntx from "./assets/dh_find_cntx.webp"
import imgFindResult from "./assets/dh_find_rslt.webp"
import imgNewEco from "./assets/dh_new_eco.webp"
import imgNewIA from "./assets/dh_new_ia.webp"
import imgDecTablet from "./assets/dh_dec_tablet.webp"
import imgDecDash from "./assets/dh_dec_dash.webp"
import imgDecNest from "./assets/dh_dec_nest.webp"
import imgDec3DViz from "./assets/dh_dec_3dviz.webp"
import imgPhysClip from "./assets/dh_phys_clip.webp"
import imgPhysCable from "./assets/dh_phys_cable.webp"
import imgPhysLed from "./assets/dh_phys_led.webp"
import imgDes1 from "./assets/dh_des_1.webp"
import imgDes2 from "./assets/dh_des_2.webp"
import imgDes3 from "./assets/dh_des_3.webp"
import imgDes4 from "./assets/dh_des_4.webp"
import imgDes5 from "./assets/dh_des_5.webp"
import imgDes6 from "./assets/dh_des_6.webp"
import imgFinal00 from "./assets/dh-fin-00.webp"
import imgFinal01 from "./assets/dh-fin-01.webp"
import imgFinal02 from "./assets/dh-fin-02.webp"
import imgFinal03 from "./assets/dh-fin-03.webp"
import imgFinal04 from "./assets/dh-fin-04.webp"


import { ClipboardCheck, Users, GitBranch } from "lucide-react"

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
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
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
    icon: ClipboardCheck,
    label: "Final average SEQ",
    value: "6.25 / 7",
    // delta: "⬆️",
    note: "Across connect, perform ECG, and share-result tasks.",
  },
  {
    icon: Users,
    label: "Participants",
    value: "5×",
    note: "Nurses tested in real nursing home setting.",
  },
  // {
  //   label: "Share results",
  //   value: "6.3 / 7",
  //   note: "Saving and progressing after the exam became clearer.",
  // },
  {
    icon: GitBranch,
    label: "Tree testing",
    value: "71%",
    note: "Overall success, with 80% overall directness.",
  },
]



const requirments = [
  {
    tone: "info",
    title: "Clarify ECG flow",
    body: "Improve visibility of key components and guide users through a clear step-by-step ECG process.",
  },
  {
    tone: "info",
    title: "Simplify guidance",
    body: "Provide clear, minimal, and visual instructions for quick understanding.",
  },
  {
    tone: "info",
    title: "Reduce discomfort",
    body: "Design a gentler, more ergonomic attachment mechanism.",
  },
  {
    tone: "info",
    title: "Improve device feedback",
    body: "Use multiple LEDs with distinct meanings for clarity.",
  },
  {
    tone: "info",
    title: "Use a better device",
    body: "Provide a portable, larger interface better suited for clinical use.",
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

const NursingHome = [
  {
    src: imgNurse_1,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_2,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_3,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_4,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_5,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_6,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_7,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_8,
    alt: "Nurse testing the D-Heart device in a nursing home",
  },
  {
    src: imgNurse_9,
    alt: "Nurse testing the D-Heart device in a nursing home",
  }
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
            className="mx-auto max-w-3xl"
            step={solution.step}
            title={solution.title}
            description={solution.description}
            figure={solution.figure}
            justifyEnd
          />
        ))}
      </div>
    )
  }

  return (
    <Carousel
      className="mx-auto mt-12"
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
                  className="mx-auto"
                  step={solution.step}
                  title={solution.title}
                  description={solution.description}
                  figure={solution.figure}
                  justifyEnd
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
    cssVars: {
      "--project-primary": "#E8601A",
      "--project-primary-light": "#F5845A",
      "--project-kicker": "#E8601A",
      "--project-foreground": "#1A1714",
      "--project-muted-foreground": "#7A736C",
      "--project-background": "#FAF7F4",
      "--project-border": "#EAE4DC",
      "--project-accent": "#3A6EBF",
      "--project-tint": "#FDF0E8",
    },
  },

  sections: [
    {
      id: "problem",
      label: "Problem",

      size: "fill",
      bgStyle: { background: "var(--project-tint)" },
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

          <SectionHeading
            className="mx-auto max-w-3xl"
            kicker="The Problem"
            align="left"
            title={<>D-Heart introduced <em>friction at every step</em> — slowing nurses down when <em>speed mattered most.</em></>}
          // title={<>Performing an ECG is a <em>time-sensitive</em> task. During testing, we found that the D-Heart ecosystem introduced <em>unnecessary friction</em> in both the app and the device, slowing nurses down at <em>critical moments</em>.</>}
          // subtitle=""
          />


          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Figure
                src={vidProblem}
                // caption="© d-heartcare.com"
                alt="d-heart device and app"
                frame="soft"
                loop
                controls={false}
                autoPlay
              // aspect="aspect-[3/2]"
              />
            </div>

            <div>
              <ProblemStatement
                variant="stack"
                items={[
                  {
                    number: "01",
                    label: "Wrong ECG workflow",
                    value: "A smartphone app with a consumer mental model — the flow conflicted with real clinical routines."
                  },
                  {
                    number: "02",
                    label: "Friction in the physical experience",
                    value: "Cables tangled. Clips hurt patients. Key electrodes went unnoticed by every single test participant."
                  },
                  {
                    number: "03",
                    label: "Unclear feedback",
                    value: "One LED for everything — nurses couldn't tell if the device was working, connecting, or failing."
                  },
                ]}
              />

            </div>
          </div>

          <PullQuote
            align="center"
            quote="It doesn't look like a normal ECG."
            author="Nurse,"
            role="Initial user test at Villa le Magnolie nursing home"
          />

        </>
      ),
    },

    {
      id: "solution",
      label: "Solution",

      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="The Solution"
            className="max-w-3xl mx-auto"
            title={<>The redesign <em>matched</em> how nurses actually work.</>}
            subtitle="We redesigned the full D-Heart ecosystem — app and device — around the needs of healthcare professionals working under real clinical pressure."
          // title=" We redesigned the experience around three principles: direct access to key actions, a clearer step-by-step ECG flow, and stronger feedback between the app and the device."
          />


          {/* <SolutionsShowcase /> */}

          <div className="grid md:grid-cols-2 gap-4 ">
            <div>
              <Figure
                src={vidSolInstruction}
                loop
                autoPlay
                controls={false}
              />
            </div>

            <div>
              <Figure
                src={vidSolInterface}
                loop
                autoPlay
                controls={false}
              />
            </div>
            <div>
              <Figure
                src={imgSolElec}
                className="mt-0!"
              />
            </div>
            <div>
              <Metrics items={topMetrics} columns={1} compact className="mt-0! my-auto" />
            </div>

          </div>





        </>
      ),
    },

    {
      size: "fill",
      bgStyle: { background: "var(--project-primary)", "--project-muted-foreground": "rgba(255,255,255,0.85)", "--project-border": "rgba(255,255,255,0.35)" },
      render: () => (
        <CaseSeparator label="↓ Dive deeper into the project ↓" />
      ),
    },

    {
      id: "research",
      label: "Research",

      size: "screen",
      render: () => (
        <>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              kicker="UX Research"
              title={<>Research reframed the project around <em>nurses</em> as the primary users</>}
              subtitle="We combined expert evaluation with in-context usability testing — observing real healthcare professionals using the device on a real patient, in a real nursing home."
              className="mb-10"
            />

            <Timeline
              // variant="cards"
              items={[
                {
                  title: "Expert evaluation",
                  meta: "Heuristic evaluation · cognitive walkthrough · task analysis",
                  body: <>Reviewed against <b>Nielsen's 10 heuristics</b> and simulated the full clinical workflow — exposing violations in visibility, error prevention, and learnability.</>,
                  tags: ["Heuristic evaluation", "Cognitive Walkthrough", "Task Analysis"],
                  tone: "info",
                  // range: "Checkpoint 1"
                },
                {
                  title: "User testing",
                  meta: "5 nurses in a nursing home + 3 standard users",
                  body: <>Five nurses at <b>Villa le Magnolie</b> used the real device on a real patient, thinking aloud. What they said matched what we feared.</>,
                  tone: "success",
                  tags: ["Usability Testing", "SEQ", "UEQ", "PREMO"],
                  // range: "Checkpoint 1"
                },

              ]}
            />
          </div>
          {/* this is the images of nursing home */}
          <FigureCarousel
            className="w-full pb-8 [background:var(--project-background)] grayscale"
            options={{ align: "start", loop: true, dragFree: true, watchDrag: false }}
            autoScroll={{
              speed: 1,
              startDelay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }}
            contentClassName="-ml-3 md:-ml-4"
            itemClassName="basis-auto pl-1 md:pl-2"
            figureClassName="[&>div:first-child]:h-[50vh] [&>div:first-child]:rounded-md"
            showArrows={false}
            showDots={false}
            items={
              NursingHome.length
                ? [...NursingHome, ...NursingHome, ...NursingHome].map((item) => ({
                  frame: "none",
                  fit: "contain",
                  loading: "eager",
                  mediaClassName: "h-full w-auto max-w-none",
                  ...item,
                }))
                : NursingHome
            }
          />
        </>
      ),
    },


    {
      id: "findings",
      label: "Findings",
      bgStyle: { background: "var(--project-tint)" },
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Key Findings"
            // title="The product worked — just not the way nurses did, creating a mismatch with clinical workflows and overally low usability score for performing ECG (5.6/7 SEQ)."
            title={<>The mismatch wasn't in the hardware, but in the <em>context</em>.</>}
            subtitle="Six friction points surfaced only when we tested in a real nursing home — and a 5.6/7 SEQ score confirmed the gap between the product and its clinical context."
            className="mx-auto max-w-3xl"
          />
          {/* <Figure
            src={placeholder}
            className="py-10"
            caption="SEQ"
            alt="SEQ"

          /> */}

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                src: vidFindElec,
                number: "01",
                title: "Hidden electrodes",
                description: "Two back electrodes went unnoticed, causing repeated errors.",
              },
              {
                src: imgFindInstr,
                number: "02",
                title: "Unclear instructions",
                description: "Mapping a 6-lead device to a 12-lead ECG confused every nurse.",
              },
              {
                src: imgFindPain,
                number: "03",
                title: "Painful electrode use",
                description: "Clip mechanics caused discomfort, especially on elderly patients.",
              },
              {
                src: imgFindLed,
                number: "04",
                title: "Confusing LED feedback",
                description: "One LED, too many states.",
              },
              {
                src: imgFindCntx,
                number: "05",
                title: "Wrong device context",
                description: "Personal phones aren't clinical tools — small screens, no shared access.",
              },
              {
                src: imgFindResult,
                number: "06",
                title: "Result access issues",
                description: "Reports were hard to find, harder to act on.",
              },
            ].map((item) => (
              <Card key={item.title} className="gap-4 overflow-hidden pt-0 shadow-none bg-white/80">
                <CardContent className="px-0 pt-0">
                  <Figure
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover mt-0!"
                    loading="eager"
                    aspect="aspect-square"
                    frame="none"
                    autoPlay
                    loop
                    controls={false}

                  />
                </CardContent>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="mb-4">Problem {item.number}.</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>


        </>
      ),
    },

    {
      // id: "requirments",
      // label: "Requirments",

      size: "fill",
      render: () => (
        <>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                kicker="Requirements"
                title="Translating the challenges into clear design directions"
              />
            </div>

            <div>
              <Timeline items={requirments} compact />
            </div>
          </div>

        </>
      ),
    },

    {
      id: "redesign",
      label: "Re-Design",
      bgStyle: { background: "var(--project-tint)" },
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Redesign"
            title="Redesigning the D-Heart Ecosystem — a different backend"

            className="mb-10 mx-auto max-w-3xl"
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
            <div>
              <Figure
                src={imgNewEco}
                alt="The new propsed ecosystem"
                aspect="aspect-2/3" />
            </div>

            <div>

              <Prose className="mb-10 mx-auto max-w-3xl">
                <p>
                  D-Heart was redesigned to align with real clinical workflows—replacing a <b>fragmented, manual ECG process</b> with a <b>streamlined digital ecosystem</b>.
                </p>
                <p>
                  The process began with rethinking the information architecture, followed by iterative wireframing and mid-fidelity prototype testing.
                </p>
              </Prose>


              <Timeline
                // variant="cards"
                // className="mx-auto max-w-3xl"
                items={[
                  {
                    title: "IA re-design",
                    body: "In-person and online card sorting (Optimal Workshop) was perfomed to organize the new IA, followed by Tree Testing with mostly health professional users to validate it.",
                    tags: ["Card Sorting (63 Users)", "Tree Testing (44 Participants)"],
                    tone: "",
                    // range: "Checkpoint 1"
                  },
                  {
                    title: "Wireframe Testing",
                    body: "Evaluated the usability, information placement, and readability using low-fidelity wireframes.",
                    tone: "info",
                    tags: ["5 Expert Users"],
                    // range: "Checkpoint 1"
                  },
                  {
                    title: "High-Fidelity Prototype Testing",
                    body: "Validated the high-fidelity digital interface and physical Arduino prototype.",
                    tone: "success",
                    tags: ["6 Expert Users"],
                  },

                ]}
              />


            </div>
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            {/* 
            <SectionHeading
              className="my-36"
              align="center"
              // divider
              kicker="Device Change → Tablet"
              title="We chose the tablet to better support clinical workflows"
              subtitle="— providing a larger, shared interface that improves readability, reduces friction, and fits how nurses operate during patient care."
            /> */}

            {/* <ProcessStep
              className=""
              title="The IA Pattern"
              description={
                <prose className="">
                  <h3>
                    Dashboard for homepage
                  </h3>
                  <p>
                    We structured the homepage as a dashboard to prioritize speed and clarity—bringing all critical actions into one place so nurses can act immediately without navigating away.
                  </p>
                  <h3>
                    Nested dolls for ECG flow
                  </h3>
                  <p>
                    We used a nested dolls pattern to enforce a clear, step-by-step ECG process—guiding users through each stage in a controlled, predictable flow.
                  </p>
                </prose>
              }

              figure={{
                src: placeholder,
                aspect: "aspect-[2/3]",
                caption: "// ia pattern image",
              }}

            /> */}

            {/* <Carousel
              className="mx-auto mt-12 max-w-5xl"
              options={{ align: "start", loop: true }}
              plugins={[
                Autoplay({ delay: 4500, stopOnInteraction: false })
              ]}
            >
              <CarouselContent>
                {[
                  {
                    src: placeholder,
                    alt: "new IA",
                    aspect: "aspect-[16/10]",
                    caption: "Placeholder image 1.",
                    fetchPriority: "high",
                  },
                  {
                    src: placeholder,
                    alt: "old IA",
                    aspect: "aspect-[16/10]",
                    caption: "Placeholder image 2.",
                    fetchPriority: "high",
                  },
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <Figure
                      src={item.src}
                      alt={item.alt}
                      aspect={item.aspect}
                      caption={item.caption}
                      loading="eager"
                      fetchPriority={item.fetchPriority}
                      decoding="sync"
                      frame="smooth"
                    />
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
            </Carousel> */}




          </div>
          <Figure
            src={imgNewIA}
          />


        </>
      ),
    },

    {
      // id: "design decisions",
      // label: "Design Decisions",
      size: "small",
      render: () => (
        <>
          <SectionHeading kicker="Design Decisions" />

          <div className="mx-auto max-w-3xl">
            <ProcessStep
              className="mb-10"
              justifyEnd
              step="01"
              title="Device Change → Tablet"
              description={<>We chose the tablet to better support clinical workflows — <b>owned by the nursing home</b>, it provides a larger, shared interface that improves readability, reduces friction, and fits how nurses operate during patient care.</>}

              figure={{
                src: imgDecTablet,
                alt: "Placeholder for redesigned instruction flow",
                aspect: "aspect-[3/2]",
              }}
            />

            <ProcessStep
              className="mb-10"
              justifyEnd
              step="02. IA Pattern"
              reverse
              title="Dashboard for Homepage"
              description={<>We structured the homepage as a dashboard with a <b>prominent “Big Start Button”</b> to prioritize speed and clarity — bringing all critical actions into one place so nurses can act immediately without navigating away.</>}

              figure={{
                src: imgDecDash,
                alt: "Placeholder for physical device improvements",
                aspect: "aspect-[3/2]",
              }}
            />
            <ProcessStep
              justifyEnd
              className="mb-10"
              step="03"
              title="Nested dolls for ECG flow"
              description="We used a nested dolls pattern to enforce a clear, step-by-step ECG process — guiding users through each stage in a controlled, predictable flow."

              figure={{
                src: imgDecNest,
                alt: "Placeholder for redesigned instruction flow",
                aspect: "aspect-[3/2]",
              }}
            />

            <ProcessStep
              className="mb-10"
              justifyEnd
              step="04"
              reverse
              title="3D Animated Instruction"
              description={<>The original instructions failed to guide the nurse to move the black lead properly to complete a 12-lead ECG.<br />New visuals ensure that nurses won't miss the two electrodes on the back and match with their clinical procedure of attaching all electrodes before performing the ECG.</>}

              figure={{
                src: imgDec3DViz,
                alt: "Placeholder for physical device improvements",
                aspect: "aspect-[3/2]",
              }}
            />

          </div>
        </>
      )
    },

    // {
    //   // id: "wireframe",
    //   // label: "Wireframe Testing",
    //   render: () => (
    //     <>
    //       <div>
    //         <CaseSeparator label="Wireframe testing" />
    //         <SectionHeading
    //           title=" We conducted low-fidelity wireframe testing with five users to identify usability issues early and validate core flows before moving into high-fidelity design."
    //           subtitle="The main challenges identified were:"
    //           // align="center"
    //           className="mb-10 mx-auto max-w-3xl "
    //         />
    //         <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    //           {[
    //             {
    //               src: placeholder,
    //               tag: "Task 01 ",
    //               title: "Bluetooth Connection",
    //               description:
    //                 "Users lacked clear visual feedback during Bluetooth pairing, making it unclear whether the device was successfully connected.",
    //             },
    //             {
    //               src: placeholder,
    //               tag: "Task 02 ",
    //               title: "ECG Procedure",
    //               description:
    //                 "Navigation, instructions, and layout created friction—breaking the workflow and making the ECG process confusing to follow.",
    //             },
    //             {
    //               src: placeholder,
    //               tag: "Task 03 ",
    //               title: "Report Access",
    //               description:
    //                 "Users struggled to find past results and interpret data due to poor search, low visibility, and unclear presentation.",
    //             },
    //           ].map((item) => (
    //             <Card key={item.title} className="gap-4 overflow-hidden pt-0 shadow-none">
    //               <CardContent className="px-0 pt-0">
    //                 <img
    //                   src={item.src}
    //                   alt={item.title}
    //                   className="aspect-2/3 w-full object-cover"
    //                   loading="eager"
    //                 />
    //               </CardContent>
    //               <CardContent className="pt-0">
    //                 <Badge variant="secondary" className="mb-4">{item.tag}</Badge>
    //                 <CardTitle>{item.title}</CardTitle>
    //                 <CardDescription className="mt-2">{item.description}</CardDescription>
    //               </CardContent>
    //             </Card>
    //           ))}
    //         </div>
    //       </div>

    //     </>
    //   )
    // },


    {
      // id: "device",
      // label: "Device",

      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="The Physical Touchpoint"
            title="We extended the redesign into the physical device, "
            subtitle="using 3D printing, Arduino prototyping, and hands-on testing to explore and validate improvements. We iterated on how the device is handled, attached, and communicates—reducing friction, improving patient comfort, and making feedback clearer during use."
            align="center"
            className="mb-10"
          />
          <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                src: imgPhysClip,
                tag: "Mod 01 ",
                title: "Ergonomic ECG clips",
                description:
                  "Redesigned the attachment mechanism to reduce discomfort, especially for elderly patients.",
              },
              {
                src: imgPhysCable,
                tag: "Mod 02 ",
                title: "Improved cable usability",
                description:
                  "Added visual markers to prevent over-extension and reduce tangling during use.",
              },
              {
                src: imgPhysLed,
                tag: "Mod 03 ",
                title: "Clearer LED feedback system",
                description:
                  "Reworked device feedback using color-coded signals to communicate connection, battery, and ECG status more clearly.",
              },
            ].map((item) => (
              <Card key={item.title} className="gap-4 overflow-hidden pt-0 shadow-none">
                <CardContent className="px-0 pt-0">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="aspect-[1] w-full object-cover"
                    loading="eager"
                  />
                </CardContent>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="mb-4">{item.tag}</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>


        </>
      ),
    },


    {
      // id: "designsystem",
      // label: "Design System",

      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Design System"
            title="A unified system for faster, clearer, and more reliable care."
            subtitle="We developed a design system to ensure consistency, clarity, and scalability across the D-Heart ecosystem—supporting both clinical usability and efficient future development."
            className="mb-10 mx-auto max-w-3xl"
          />

          <ImageGrid
            cols={2}
            items={[
              {
                src: imgDes1,
                alt: "D-Heart design system",
                frame: "soft",
              },
              {
                src: imgDes2,
                alt: "D-Heart design system",
                frame: "soft",
              },
              {
                src: imgDes3,
                alt: "D-Heart design system",
                frame: "soft",
              },
              {
                src: imgDes4,
                alt: "D-Heart design system",
                frame: "soft",
              },
              {
                src: imgDes5,
                alt: "D-Heart design system",
                frame: "soft",
              },
              {
                src: imgDes6,
                alt: "D-Heart design system",
                frame: "soft",
              },
            ]}
          />

        </>
      )

    },

    {
      id: "final",
      label: "Final Design",

      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Final Design"
            title="D-Heart Pro — a Connected ECG Ecosystem"
            subtitle="We redesigned D-Heart across device, interface, and workflow to help nurses perform clearer, faster, and more reliable ECGs in real clinical settings."
            className="mb-10 mx-auto max-w-3xl"
          />

          <div className="space-y-12">
            <Figure
              src={imgFinal00}
              alt="D-Heart final design concept 00"
              className="pt-10"
            // label="Final Design 00"
            // caption="Placeholder caption for final design image 00."
            // frame="soft"
            />

            <Figure
              src={imgFinal01}
              alt="D-Heart final design concept 01"
              className="pt-10"
            // label="Final Design 01"
            // caption="Placeholder caption for final design image 01."
            // frame="soft"
            />

            <Figure
              src={imgFinal02}
              alt="D-Heart final design concept 02"
              className="pt-10"
            // label="Final Design 02"
            // caption="Placeholder caption for final design image 02."
            // frame="soft"
            />

            <Figure
              src={imgFinal03}
              alt="D-Heart final design concept 03"
              className="pt-10"
            // label="Final Design 03"
            // caption="Placeholder caption for final design image 03."
            // frame="soft"
            />

            <Figure
              src={imgFinal04}
              alt="D-Heart final design concept 04"
              className="pt-10"
            // label="Final Design 04"
            // caption="Placeholder caption for final design image 04."
            // frame="soft"
            />
          </div>

        </>
      )

    },

    {
      // id: "testing",
      // label: "Testing",

      size: "small",
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

      size: "fill",
      render: () => (
        <>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionHeading
                kicker="Takeaways"
                title="Usability in Healthcare Means Fitting Into a Routine, Not Replacing One"
                className="mb-10"
              // subtitle="In healthcare, usability is not just about cleaner screens. It is about trust, pace, and how well digital decisions support real-world routines."
              />

              <div>
                <Prose>
                  <p>
                    Designing for professionals means designing around <b>expertise, not against it</b>. Watching nurses follow their clinical instincts over the original product was the clearest signal — a good tool has to <b>fit into existing mastery</b>, not demand they abandon it.
                  </p>

                  <p>
                    <b>Context of use will always outweigh convention.</b> Moving to tablet was the only honest answer once we understood how nurses actually work. That kind of decision requires <b>confidence in your research</b> over pressure to follow the crowd.
                  </p>

                  <p>
                    On complex products, <b>physical and digital can't be designed in isolation.</b> The moment a user has to mentally translate between a blinking LED and an app state, you've introduced doubt. Coherence across touchpoints is the <b>foundation of trust in a medical tool</b>.
                  </p>

                  <p>
                    A heartfelt thank you to <a href="https://www.linkedin.com/in/davidespallazzo/" target="_blank">Prof. Davide Spallazzo</a> and <a href="https://www.linkedin.com/in/martina-sciannam%C3%A8-920570157/" target="_blank">Prof. Martina Sciannamè</a> for their guidance throughout this project, to my teammates Filippo, Marjan, and Beyza for the collaboration, and to <b>Villa Le Magnolie</b> for welcoming us and making the research possible.
                  </p>

                </Prose>
              </div>
            </div>
            <div>
              <Figure
                src={cover}
                aspect="aspect-[2/3]"
              />

            </div>
          </div>


          {/* <InsightList
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
          /> */}
        </>
      ),
    },
  ],
}
