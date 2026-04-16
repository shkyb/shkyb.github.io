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
    label: "Final average SEQ",
    value: "6.25 / 7",
    delta: "⬆️",
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



const requirments = [
  {
    tone: "info",
    title: (
      <Prose>
        <h3>Clarify ECG flow</h3>
      </Prose>
    ),
    body: (
      <Prose>
        <p>
          Improve visibility of key components and guide users through a clear step-by-step ECG process.
        </p>
      </Prose>
    ),
  },
  {
    tone: "info",
    title: (
      <Prose>
        <h3>Simplify guidance</h3>
      </Prose>
    ),
    body: (
      <Prose>
        <p>
          Provide clear, minimal, and visual instructions for quick
          understanding.
        </p>
      </Prose>
    ),
  },
  {
    tone: "info",
    title: (
      <Prose>
        <h3>Reduce discomfort</h3>
      </Prose>
    ),
    body: (
      <Prose>
        <p>Design a gentler, more ergonomic attachment mechanism.</p>
      </Prose>
    ),
  },
  {
    tone: "info",
    title: (
      <Prose>
        <h3>Improve device feedback</h3>
      </Prose>
    ),
    body: (
      <Prose>
        <p>Use multiple LEDs with distinct meanings for clarity.</p>
      </Prose>
    ),
  },
  {
    tone: "info",
    title: (
      <Prose>
        <h3>Use a better device</h3>
      </Prose>
    ),
    body: (
      <Prose>
        <p>
          Provide a portable, larger interface better suited for clinical use.
        </p>
      </Prose>
    ),
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
            className="mx-auto max-w-3xl"
            // kicker="Main Problem"
            align="left"
            title="Performing an ECG is a time-sensitive task. During testing, we found that the D-Heart ecosystem introduced unnecessary friction in both the app and the device, slowing nurses down at critical moments."
          // subtitle=""
          />


          {/* first image gird */}
          {/* <ImageGridinsert a figure carousel, add two items, 

show 
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


          {/* <ImageGrid
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
          /> */}

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div>
              <Figure
                src={vidProblem}
                // caption="© d-heartcare.com"
                alt="d-heart device and app"
                frame="none"
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
                    label: "01. Wrong ECG workflow",
                    value: "A smartphone app with a consumer mental model — the flow conflicted with real clinical routines.mx-auto max-w-3xl"
                  },
                  {
                    label: "02. Friction in the physical experience",
                    value: "Cables tangled. Clips hurt patients. Key electrodes went unnoticed by every single test participant."
                  },
                  {
                    label: "03. Unclear feedback",
                    value: "One LED for everything — nurses couldn't tell if the device was working, connecting, or failing."
                  },
                ]}
              />

            </div>
          </div>

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
            // kicker="A clearer ecosystem built around how nurses actually work."
            className="max-w-3xl mx-auto"
            title=" We redesigned the experience around three principles: direct access to key actions, a clearer step-by-step ECG flow, and stronger feedback between the app and the device."
          // subtitle="Instead of polishing isolated screens, we simplified the structure, clarified the ECG flow, and reduced ambiguity across both the app and the device."
          />

          {/* <Prose className="mb-10 mt-4 mx-auto max-w-3xl">
            <p>
              The redesign addressed every layer of the experience — from the app's information architecture to the physical clips nurses touch every day. A complete, coherent healthcare ecosystem.            </p>
          </Prose> */}

          {/* <SolutionsShowcase /> */}

          <div className="grid md:grid-cols-2 gap-4 mt-16">
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
              />
            </div>
            <div>
              <Metrics items={topMetrics} columns={1} className=" my-auto" />
            </div>

          </div>





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
                body: (
                  <Prose>
                    <p>
                      We reviewed the app against <b>Nielsen's heuristics</b> to reveal violations across interface consistency, visibility, error prevention, and recognition. Then we <b>simulated the professional workflow</b> from registration to sharing results to expose breakdowns in learnability and feedback.
                    </p>
                  </Prose>
                ),
                tags: ["Heuristic evaluation", "Cognitive Walkthrough", "Task Analysis"],
                tone: "info",
                // range: "Checkpoint 1"
              },
              {
                title: "User testing",
                meta: "5 nurses in a nursing home + 3 standard users",
                body: (
                  <Prose>
                    <p>
                      Two groups of health professionals and standard users were studied in the user testing. <b>Five nurses</b> at Villa le Magnolie nursing home in Reggio Emilia used the real device on a real patient, acted by a team member. Every interaction was <b>video</b> and <b>screen-recorded</b>. Nurses were asked to think aloud, and what they said matched what we feared.
                    </p>
                  </Prose>
                ),
                tone: "success",
                tags: ["Usability Testing", "SEQ", "UEQ", "PREMO"],
                // range: "Checkpoint 1"
              },

            ]}
          />
        </>
      ),
    },

    {
      // this is for the nursing home user tests images
      size: "screen",
      render: () => (
        <>
          <FigureCarousel
            className="w-full my-12"
            options={{ align: "start", loop: true, dragFree: true }}
            autoScroll={{
              speed: 1,
              startDelay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
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
      )
    },

    {
      id: "findings",
      label: "Findings",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator label="Key Findings" />
          <SectionHeading
            title="The product worked — just not the way nurses did, creating a mismatch with clinical workflows and overally low usability score for performing ECG (5.6/7 SEQ)."
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
                description:
                  "Users missed the two electrodes on the back, making the ECG process confusing and error-prone.",
              },
              {
                src: imgFindInstr,
                number: "02",
                title: "Unclear instructions",
                description:
                  "Nurses struggled to understand and follow instructions to perform a standard 12-lead ECG with the 6-lead device.",
              },
              {
                src: imgFindPain,
                number: "03",
                title: "Painful electrode use",
                description:
                  "Attaching and moving electrodes caused discomfort, especially for elderly patients.",
              },
              {
                src: imgFindLed,
                number: "04",
                title: "Confusing LED feedback",
                description:
                  "A single LED communicated multiple states, leaving users unsure about device status.",
              },
              {
                src: imgFindCntx,
                number: "05",
                title: "Wrong device context",
                description:
                  "Nurses couldn't rely on personal phones, and small screens made medical data hard to read.",
              },
              {
                src: imgFindResult,
                number: "06",
                title: "Result access issues",
                description:
                  "Users struggled to locate reports, interpret some data, and understand where result actions lived.",
              },
            ].map((item) => (
              <Card key={item.title} className="gap-4 overflow-hidden pt-0 shadow-none">
                <CardContent className="px-0 pt-0">
                  <Figure
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover"
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
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator label="Requirements" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Prose>
                <h2>Translating the challenges into clear design directions</h2>
                <p></p>
              </Prose>
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
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator label="Redesign" />
          <SectionHeading
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



          <CaseSeparator label="Design Decisions" />

          <div className="mx-auto max-w-3xl">
            {/* design decisions */}
            <ProcessStep
              className="mb-10"
              justifyEnd
              step="01"
              title="Device Change → Tablet"
              description={
                <Prose>
                  <p>
                    We chose the tablet to better support clinical workflows — <b> owned by the nursing home </b>, it provides a larger, shared interface that improves readability, reduces friction, and fits how nurses operate during patient care.
                  </p>
                </Prose>
              }

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
              description={
                <Prose>
                  <p>
                    We structured the homepage as a dashboard with a <b>prominent “Big Start Button”</b> to prioritize speed and clarity—bringing all critical actions into one place so nurses can act immediately without navigating away.
                  </p>
                </Prose>
              }

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
              description={
                <Prose>
                  <p>
                    We used a nested dolls pattern to enforce a clear, step-by-step ECG process—guiding users through each stage in a controlled, predictable flow.
                  </p>
                </Prose>
              }

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
              description={
                <Prose>
                  <p>
                    The original instructions failed to guide the nurse to move the black lead properly to complete a 12-lead ECG. <br />
                    New visuals ensure that nurses won't miss the two electrodes on the back and match with their clinical procedure of attaching all electrodes before perfoming the ECG.
                  </p>
                </Prose>
              }

              figure={{
                src: imgDec3DViz,
                alt: "Placeholder for physical device improvements",
                aspect: "aspect-[3/2]",
              }}
            />

          </div>


          {/* <div>
            <CaseSeparator label="Wireframe testing" />
            <SectionHeading
              title=" We conducted low-fidelity wireframe testing with five users to identify usability issues early and validate core flows before moving into high-fidelity design."
              subtitle="The main challenges identified were:"
              // align="center"
              className="mb-10 mx-auto max-w-3xl "
            />
            <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  src: placeholder,
                  tag: "Task 01 ",
                  title: "Bluetooth Connection",
                  description:
                    "Users lacked clear visual feedback during Bluetooth pairing, making it unclear whether the device was successfully connected.",
                },
                {
                  src: placeholder,
                  tag: "Task 02 ",
                  title: "ECG Procedure",
                  description:
                    "Navigation, instructions, and layout created friction—breaking the workflow and making the ECG process confusing to follow.",
                },
                {
                  src: placeholder,
                  tag: "Task 03 ",
                  title: "Report Access",
                  description:
                    "Users struggled to find past results and interpret data due to poor search, low visibility, and unclear presentation.",
                },
              ].map((item) => (
                <Card key={item.title} className="gap-4 overflow-hidden pt-0 shadow-none">
                  <CardContent className="px-0 pt-0">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="aspect-2/3 w-full object-cover"
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
          </div> */}


        </>
      ),
    },




    {
      // id: "device",
      // label: "Device",
      bgClass: "bg-muted/30",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator label="The Physical Touchpoint" />
          <SectionHeading
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
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator label="Design System" />

          <SectionHeading
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
      bgClass: "bg-background",
      size: "fill",
      render: () => (
        <>
          <CaseSeparator label="Final Design" />

          <SectionHeading
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
      bgClass: "bg-background",
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
