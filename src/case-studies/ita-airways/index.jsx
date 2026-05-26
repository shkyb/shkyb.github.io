import React from "react"
import { TeamAvatars } from "@/components/TeamAvatars"

import itaLogo from "./assets/ita-logo.webp"
import itaCover from "./assets/ita-cover.webp"

import itaAccessContrast from "./assets/ita-access-contrast.webp"
import itaAccessTypo from "./assets/ita-access-typo.webp"
import itaClickComparison from "./assets/ita-click-comparison.webp"
import itaDesignSystem1 from "./assets/ita-designsystem-1.webp"
import itaDesignSystem2 from "./assets/ita-designsystem-2.webp"
import itaHeuristics from "./assets/ita-heuristics.webp"
import itaInsight1 from "./assets/ita-insight-1.webp"
import itaInsight2 from "./assets/ita-insight-2.webp"
import itaInsight3 from "./assets/ita-insight-3.webp"
import itaKayakLogo from "./assets/ita-kayak-logo.webp"
import itaPersonaEjona from "./assets/ita-persona-ejona.webp"
import itaPersonaGiovanni from "./assets/ita-persona-giovanni.webp"
import itaPersonaLucia from "./assets/ita-persona-lucia.webp"
import itaPersonaRoberto from "./assets/ita-persona-roberto.webp"
import itaPersona from "./assets/ita-persona.webp"
import itaProblem1 from "./assets/ita-probelm-1.webp"
import itaProblem2 from "./assets/ita-probelm-2.webp"
import itaProblem3 from "./assets/ita-probelm-3.webp"
import itaQatarLogo from "./assets/ita-qatar-logo.webp"
import itaResponseUserflow from "./assets/ita-response-userflow.webp"
import itaRyanairLogo from "./assets/ita-ryanair-logo.webp"
import itaSolution1 from "./assets/ita-solution-1.webp"
import itaTaskMatrix from "./assets/ita-task-matrix.webp"
import itaTimeline from "./assets/ita-timeline.webp"
import itaTrenitaliaLogo from "./assets/ita-trenitalia-logo.webp"
import itaAccessibilityVideo from "./assets/ITA_Accessibility.webm"
import itaSolutionVideo from "./assets/ita-solution.webm"
import itaResponseSearchFlight from "./assets/ita-response-search-flight.webm"
import itaResponseFilters from "./assets/ita-response-filters.webm"
import itaResponsePassengerInfo from "./assets/ita-response-passenger-info.webm"
import itaResponseBenefitsSelection from "./assets/ita-response-benfits-selection.webm"
import itaResponseOffers from "./assets/ita-response-offers.webm"
import itaResponseSeatSelection from "./assets/ita-response-seat-selection.webm"

import { Prose } from "@/components/case/layout/Prose"
import { CaseSection as Section } from "@/components/case/layout/Section"
import { CaseContainer as Container } from "@/components/case/layout/Container"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

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
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Ticket, Map, ShieldCheck, Type, Palette, LayoutGrid, Users, BarChart2, MousePointerClick, Target, AlertCircle, ArrowUpRight, Plane, PlaneTakeoff, Eye, Undo2 } from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { sp } from "@/components/case/layout/spacing"


const PersonaCard = ({ avatar, name, age, role, drive, pain }) => (
  <Card className="shadow-none">
    <CardHeader className="flex flex-row items-center gap-4">
      <img
        src={avatar ?? itaLogo}
        alt={name}
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <CardTitle>
          <Prose><h3>{name}, <span className="lining-nums tabular-nums">{age}</span></h3></Prose>
        </CardTitle>
        <Badge variant="outline" className="w-fit">{role}</Badge>
      </div>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <Target className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
        <span className="text-sm text-(--project-muted-foreground)">{drive}</span>
      </div>
      <div className="flex items-start gap-2">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
        <span className="text-sm text-(--project-muted-foreground)">{pain}</span>
      </div>
    </CardContent>
  </Card>
)

export const itaAirwaysCase = {
  slug: "ita-airways",

  caseMeta: {
    logo: { src: itaLogo, alt: "ITA Airways logo" },
    title: "ITA Airways",
    headline: "Rethinking the booking flow of Italy's national airline.",
    tags: ["UX Design", "Usability", "Design Systems", "Booking Flow", "Web"],
    cover: { src: itaCover, alt: "ITA Airways case study cover" },
    overview: [
      <Prose key="p1">
        <p>
          A semester-long usability project at{" "}
          <a href="https://www.polimi.it/en/" target="_blank" rel="noopener noreferrer">@PoliMI</a>,
          where our team of four audited, benchmarked, and redesigned the{" "}
          <a href="https://www.itaairways.com/" target="_blank" rel="noopener noreferrer">@ITA Airways</a>{" "}
          website — Italy's flagship carrier. We evaluated the site against{" "}
          Nielsen's ten heuristics and four direct competitors, then rebuilt the
          three most-used flows — <strong>flight search, benefits selection, and offers discovery</strong>{" "}
          — from the ground up around a flatter information architecture and a more predictable
          interaction model.
        </p>
      </Prose>,
      <Prose key="p2">
        <p>
          My focus was the <strong>design system</strong>: built on top of{" "}
          <a href="https://moon.io" target="_blank" rel="noopener noreferrer">Moon</a>, extended
          with ITA-specific patterns — the price-comparison calendar, the per-passenger baggage
          selector, the offers map — and tested against <strong>WCAG AA/AAA, APCA</strong>, and four
          color-blindness simulations to make the most color-critical screens accessible to
          every user.
        </p>
      </Prose>,
    ],
    links: [
      { label: "Figma Prototype", href: "https://www.figma.com/proto/CmvsoUwyNAhiEMKY578a0I/ITA-Airways-Prototype--Copy-?node-id=2-30&t=wAyfm0KQTwHuhT74-1" },
    ],
    meta: [
      {
        label: "Role",
        value: "Heuristic audits and competitor benchmarks through to a design system built on Moon and accessibility tested against WCAG, APCA, and four color blindness simulations",
      },
      { label: "Team", value: <TeamAvatars ids={["shakib", "marjan", "ilaria", "mahshad"]} size="lg" />,
      },
      {
        label: "Timeline",
        value: "Academic project · 1 semester · AY 2024/2025",
      },
      // {
      //   label: "Deliverables",
      //   value: "Heuristic audit · Competitor benchmark · Personas · Wireframes · Hi-fi prototype · Design system",
      // },
      {
        label: "Course",
        value: "Ergonomics Applied to the Design of Usable Web Pages and Apps — Politecnico di Milano",
      },
    ],
    cssVars: {
      "--project-primary": "#306fc8",
      "--project-accent": "#e6852a",
      "--project-tint": "#E6EEF8",
      "--project-background": "#F1F5FB",
      "--project-surface": "#f5f5f5",
      "--project-dark": "#292d32",
      "--project-border": "#D6E2F4",
      "--project-muted-foreground": "#57677A",
      "--project-foreground": "#292d32",
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
          <SectionHeading
            kicker="The Problem"
            title={<>The site <em>looked</em> organized. On the metrics that determined whether users could complete a task, it wasn't.</>}
            subtitle="Buying a ticket, adding baggage, browsing offers — all of it meant navigating filters that didn't match how users think and pages that dropped context with every click."
            className="mx-auto max-w-3xl"
          />
          <FigureCarousel
            className="pb-16"
            options={{ loop: true }}
            autoplay={{ delay: 4500, stopOnInteraction: false }}
            previousClassName="bottom-4 top-auto translate-y-0 left-4"
            nextClassName="bottom-4 top-auto translate-y-0 left-14 right-auto"
            dotsClassName="absolute bottom-4 right-4 mt-0 justify-end"
            dotsProgressDuration={4500}
            items={[
              { src: itaProblem1, frame: "soft", alt: "ITA Airways — original homepage with navigation and search flow.", loading: "eager" },
              { src: itaProblem2, frame: "soft", alt: "Booking flow — context lost across the multi-step checkout.", loading: "lazy" },
              { src: itaProblem3, frame: "soft", alt: "Offers page — price matrix that broke user expectations.", loading: "lazy" },
            ]}
          />
        </>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      size: "fill",
      bgStyle: { background: "var(--project-primary)" },
      render: () => (
        <>
          <div style={{ "--project-kicker": "white" }}>
            <SectionHeading
              kicker="The Solution"
              title="We rebuilt the three flows that mattered most — from a fractured booking experience to a single, guided path."
              subtitle="Simpler architecture. Persistent context. Accessibility from the first pixel."
              className="mx-auto max-w-3xl **:text-white"
            />
          </div>
          <Figure
            src={itaSolutionVideo}
            frame="none"
            mediaClassName="rounded-2xl"
            alt="Redesigned homepage, search results, and benefits flow — side by side."
            autoPlay
            loop
            controls={false}
          />
        </>
      ),
    },

    {
      size: "fill",
      bgStyle: { background: "white", "--project-muted-foreground": "var(--project-primary)", "--project-border": "var(--project-border)" },
      render: () => (
        <CaseSeparator label="↓ Dive deeper into the project ↓" />
      ),
    },

    {
      id: "research",
      label: "Research",
      size: "fill",

      render: () => (
        <>
          <SectionHeading
            kicker="01 — Research"
            title={<>The research phase was the longest stretch of the project — and the <em>most consequential.</em> Every decision downstream traces back to something we found here.</>}
            subtitle="ITA is young — founded in 2021 as Alitalia's successor — and still proving itself. Its website isn't just a booking tool. It's a credibility instrument for a brand that needs to earn trust."
            className="mx-auto max-w-3xl"
          />
          <Metrics
            className="mx-auto max-w-3xl"
            columns={4}
            variant="plain"
            align="center"
            items={[
              { icon: PlaneTakeoff, value: "124K", label: "annual flights" },
              { icon: Plane, value: "99", label: "aircraft in fleet" },
              { icon: Users, value: "15M", label: "annual passengers" },
              { icon: BarChart2, value: "€2.4B", label: "revenue in 2024" },
            ]}
          />
          <Figure
            src={itaTimeline}
            frame="soft"
            alt="ITA Airways company timeline — from Alitalia's founding in 1946 to ITA's relaunch in 2021."
          />
        </>
      ),
    },
    {
      // id: "benchmarking",
      // label: "Benchmarking",
      size: "fill",
      bgStyle: { background: "var(--project-tint)" },
      render: () => (
        <>
          <SectionHeading
            kicker="— Competitor benchmarking"
            title={<>We chose four competitors deliberately. Not for inspiration — to <em>find the gaps.</em></>}
            className="mx-auto max-w-3xl"
          />

          <div className={`mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 ${sp.sectionToContent}`}>
            {[
              {
                tag: "Low-cost benchmark",
                title: "Ryanair",
                logo: itaRyanairLogo,
                description: <><strong>Gold standard for stripping booking to its minimum viable path.</strong> Clear CTAs, no ambiguity about cost.</>,
              },
              {
                tag: "Luxury benchmark",
                title: "Qatar Airways",
                logo: itaQatarLogo,
                description: <><strong>Premium polish and visual consistency</strong> throughout. Sets the ceiling for information hierarchy and white space.</>,
              },
              {
                tag: "Domestic rival",
                title: "Trenitalia",
                logo: itaTrenitaliaLogo,
                description: <>Italy's rail operator and a <strong>direct short-haul competitor.</strong> Shared users compare the two experiences side by side.</>,
              },
              {
                tag: "Filter benchmark",
                title: "Kayak",
                logo: itaKayakLogo,
                description: <>Not a direct competitor — but the <strong>gold standard for filter design</strong> and search result density. Benchmarked specifically for its UX patterns.</>,
              },
            ].map((item) => (
              <Card key={item.title} className="shadow-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="h-12 w-12 shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <CardTitle><Prose><h3>{item.title}</h3></Prose></CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <span className="text-sm text-(--project-muted-foreground)">{item.description}</span>
                  <Badge variant="secondary" className="w-fit">{item.tag}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <ChartContainer
            className={`mx-auto max-w-3xl w-full ${sp.itemToItem}`}
            config={{
              ita: { label: "ITA Airways", color: "#306fc8" },
              ryanair: { label: "Ryanair", color: "#D97706" },
              qatar: { label: "Qatar Airways", color: "#7B2451" },
              trenitalia: { label: "Trenitalia", color: "#006A6A" },
              kayak: { label: "Kayak", color: "#FF690F" },
            }}
          >
            <RadarChart
              data={[
                { metric: "Content clarity", ita: 5, ryanair: 7, qatar: 7, trenitalia: 10, kayak: 7 },
                { metric: "Graphical coherence", ita: 6, ryanair: 8, qatar: 8, trenitalia: 6, kayak: 8 },
                { metric: "Graphical clarity", ita: 5, ryanair: 10, qatar: 8, trenitalia: 8, kayak: 10 },
                { metric: "Responsiveness", ita: 8, ryanair: 5, qatar: 10, trenitalia: 6, kayak: 6 },
                { metric: "Ease of access", ita: 8, ryanair: 8, qatar: 6, trenitalia: 6, kayak: 8 },
              ]}
            >
              <defs>
                <pattern id="dots-ita" patternUnits="userSpaceOnUse" width="8" height="8">
                  <rect width="8" height="8" fill="#306fc8" fillOpacity="0.15" />
                  <circle cx="4" cy="4" r="1.5" fill="#306fc8" fillOpacity="0.5" />
                </pattern>
              </defs>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", fill: "var(--project-muted-foreground)" }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Radar name="ita" dataKey="ita" stroke="#306fc8" fill="url(#dots-ita)" fillOpacity={1} />
              <Radar name="ryanair" dataKey="ryanair" stroke="#D97706" fill="#D97706" fillOpacity={0.1} />
              <Radar name="qatar" dataKey="qatar" stroke="#7B2451" fill="#7B2451" fillOpacity={0.1} />
              <Radar name="trenitalia" dataKey="trenitalia" stroke="#006A6A" fill="#006A6A" fillOpacity={0.1} />
              <Radar name="kayak" dataKey="kayak" stroke="#FF690F" fill="#FF690F" fillOpacity={0.1} />
              <Legend formatter={(value) => value.toUpperCase()} />
            </RadarChart>
          </ChartContainer>

          <PullQuote
            className="mx-auto max-w-3xl"
            size="md"
            quote={<>ITA Airways' website demonstrates a reasonable level of <em>graphical coherence</em>, ease of access, and responsiveness compared to competitors. However, it lags behind in <em>content and visual clarity.</em></>}
            role="Benchmarking conclusion"
          />
        </>
      ),
    },
    {
      // id: "personas",
      // label: "Personas",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="— Personas"
            // title={<>We built <em>four personas</em> reflecting the real ITA traveler mix — and every prioritization call we made traces back to one of them.</>}
            title={<>We didn't design for a <em>generic user.</em> We designed for Roberto, Lucia, Ejona, and Giovanni.</>}
            className="mx-auto max-w-3xl"
          />

          <div className={`mx-auto max-w-3xl grid grid-cols-1 gap-4 md:grid-cols-2 ${sp.sectionToContent}`}>
            <PersonaCard
              avatar={itaPersonaRoberto}
              name="Roberto"
              age={21}
              role="Spanish student in Milan"
              drive="Price-driven. Books in advance, travels home often."
              pain="Every euro counts — hidden fees and unclear pricing cause distrust."
            />
            <PersonaCard
              avatar={itaPersonaLucia}
              name="Lucia"
              age={35}
              role="Business owner"
              drive="Comfort-driven, time-pressured. Needs flights to just work."
              pain="Can't afford to lose time on a fragmented, multi-step process."
            />
            <PersonaCard
              avatar={itaPersonaEjona}
              name="Ejona"
              age={38}
              role="Solo traveler"
              drive="Experience-driven. Hunts offers, values curation."
              pain="The offers page never surfaces what she actually wants to find."
            />
            <PersonaCard
              avatar={itaPersonaGiovanni}
              name="Giovanni"
              age={49}
              role="Family father"
              drive="Logistics-driven. Books for four, carries the mental load."
              pain="Per-passenger seat and baggage selection is confusing and error-prone."
            />
          </div>
          <Figure
            src={itaPersona}
            frame="soft"
            alt="Empathy map — goals, fears, and mental context for one of the four personas."
            caption="Empathy map — goals, fears, and mental context for one of the four personas."
          />
        </>
      ),
    },
    {
      // id: "task-matrix",
      // label: "Task Matrix",
      size: "fill",
      bgStyle: { background: "var(--project-tint)" },
      render: () => (
        <>
          <SectionHeading
            kicker="— Task matrix & prioritization"
            title={<>We weighted every task by frequency and importance. <em>Three rose above everything else.</em></>}
            subtitle="Check flight, use benefits, find offers — the three tasks every persona needed, and the three we chose to redesign."
            className="mx-auto max-w-3xl"
          />
          <Figure
            src={itaTaskMatrix}
            frame="soft"
            alt="Task matrix — frequency and importance weighted across all four personas."
          />
        </>
      ),
    },
    {
      // id: "heuristics",
      // label: "Heuristic Evaluation",
      size: "fill",
      render: () => (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <div className="flex flex-col gap-4">
              <SectionHeading
                kicker="— Heuristic evaluation"
                title={<>We audited the live site against Nielsen's <span className="lining-nums tabular-nums">10</span> heuristics — and <em>documented every violation.</em></>}
                subtitle="Five stood out: the ones that broke context, dropped state, or left users with no way back."
              />
              <a
                href="https://www.figma.com/board/EfADoFaR7wE39ddqm961k0/Heuristic-Evaluation--Shared-?node-id=0-1&t=fPNen4pLZXk7Kn2S-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit"
              >
                <Button variant="outline" size="lg" className="cursor-pointer">View Figma board <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></Button>
              </a>
            </div>

            <InsightList
              items={[
                {
                  icon: Eye,
                  title: "Visibility of system status",
                  description: "No progress indicator — users never knew how many steps remained.",
                },
                {
                  icon: Users,
                  title: "Recognition rather than recall",
                  description: "Shared pages mixed passengers and flights without distinction. Users had to carry context the interface had already dropped.",
                },
                {
                  icon: LayoutGrid,
                  title: "Consistency and standards",
                  description: "The offers matrix broke the mental model users brought with them.",
                },
                {
                  icon: Undo2,
                  title: "User control and freedom",
                  description: "The pre-payment summary let users review but not edit. A dead end at the most consequential moment.",
                },
                {
                  icon: ShieldCheck,
                  title: "Error prevention",
                  description: "Date selection needed a double-click with no feedback that the first click registered. Quiet failures, repeated.",
                },
              ]}
            />
          </div>
          <Figure
            src={itaHeuristics}
            frame="soft"
            alt="Heuristic evaluation board — violations documented with screenshots across all ten Nielsen heuristics."
          />
        </>
      ),
    },
    {
      // id: "click-count",
      // label: "Click-count Analysis",
      size: "fill",
      bgStyle: { background: "var(--project-tint)" },
      render: () => (
        <>
          <SectionHeading
            kicker="— Click-count analysis"
            // title="ITA required more clicks than nearly every competitor on every task — this became the most objective argument for the redesign."
            title={<><em><span className="lining-nums tabular-nums">29</span> clicks</em> to check a flight. The data made the case for redesign better than any heuristic could.</>}
            className="mx-auto max-w-3xl"
          />

          {/* <Prose className="mx-auto max-w-3xl">
            <p>
              We counted every click required to complete each core task on ITA versus its
              competitors. ITA required more clicks than nearly every competitor on every task.
              This became the most objective argument for the redesign.
            </p>
          </Prose> */}

          {/* <ComparisonTable
            className="mx-auto max-w-3xl"
            columns={[
              { key: "task", label: "Task" },
              { key: "ita", label: "ITA Airways" },
              { key: "ryanair", label: "Ryanair" },
              { key: "qatar", label: "Qatar Airways" },
              { key: "trenitalia", label: "Trenitalia" },
            ]}
            rows={[
              {
                task: "Check flight",
                ita: "29 clicks · 3 pages",
                ryanair: "14 clicks · 5 pages",
                qatar: "20 clicks · 6 pages",
                trenitalia: "17 clicks · 3 pages",
              },
              {
                task: "Benefits (seat, luggage, lounge)",
                ita: "19 clicks · 11 pages",
                ryanair: "14 clicks · 10 pages",
                qatar: "15 clicks · 13 pages",
                trenitalia: "6 clicks · 5 pages",
              },
              {
                task: "Find offers",
                ita: "10 clicks · 4 pages",
                ryanair: "4 clicks · 2 pages",
                qatar: "17 clicks · 3 pages",
                trenitalia: "5 clicks · 5 pages",
              },
            ]}
          /> */}
          <Figure
            src={itaClickComparison}
            frame="soft"
            alt="Click-count comparison — ITA vs. competitors across all three core tasks."
          />
        </>
      ),
    },
    {
      id: "insights",
      label: "Insights",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="02 — Insights"
            // title="With the research in hand, three problems sharpened into focus — not as complaints about the site, but as design briefs."
            title={<>The research didn't give us problems. It gave us <em>briefs.</em></>}
            className="mx-auto max-w-3xl"
          />

          <ProcessStep
            justifyEnd
            number="01"
            title={<>Information lived in the <em>wrong places.</em></>}
            description="Strong visual design masked a weak IA — it looked trustworthy until you needed to do something."
            figureCols={8}
            figure={{
              src: itaInsight1,
              alt: "Spider chart — ITA's weak axes (content clarity, graphical clarity) highlighted against competitors.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
          <ProcessStep
            justifyEnd
            number="02"
            reverse
            title={<>The booking flow <em>lost context</em> every step.</>}
            description="Every benefit required a round trip. Seat, back, baggage, back. Context dropped every time."
            figureCols={8}
            figure={{
              src: itaInsight2,
              alt: "Original benefits flow — annotated to show where context is dropped across passenger and flight transitions.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
          <ProcessStep
            justifyEnd
            number="03"
            title={<>The offers page <em>broke its own promise.</em></>}
            description="The offers table packed every price and date into a single grid, leaving users to make sense of it all on their own."
            figureCols={8}
            figure={{
              src: itaInsight3,
              alt: "Original offers page — the price/date matrix circled as the primary failure point.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
        </>
      ),
    },
    {
      id: "response",
      bgStyle: { background: "var(--project-tint)" },
      label: "Response",
      size: "fill",
      render: () => (
        <>
          <div className="mx-auto  grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <SectionHeading
              kicker="03 — Response"
              // title="After analyzing the findings from the Heuristics, user tasks and competitor analysis, we prioritized 3 improvements to our redesign"
              title={<>Each insight became a brief. Each brief became a <em>goal.</em></>}
            />
            <InsightList
              items={[
                {
                  icon: Search,
                  title: "Simplify the flight purchase process",
                  description: "Flatten the IA and move filters out of modals into a persistent panel.",
                },
                {
                  icon: Ticket,
                  title: "Clarify the benefits area",
                  description: "Rebuild seat, baggage, and lounge selection as a single guided flow with persistent context.",
                },
                {
                  icon: Map,
                  title: "Make offers behave the way users expect",
                  description: "Rebuild the price/date matrix interaction and surface category filters for real traveler types.",
                },
              ]}
            />
          </div>

          <Figure
            src={itaResponseUserflow}
            frame="soft"
            alt="Redesigned user flow — end-to-end booking journey from flight search through seat selection, benefits, and passenger info."
            caption="We flattened a fragmented multi-modal experience into a single, guided journey from search to confirmation."
          />
          <Figure
            src={itaResponseSearchFlight}
            frame="soft"
            alt="Redesigned flight search — persistent filter panel on the left, results updating in real time as the user narrows their criteria."
            caption="We brought the calendar and destination picker into a single, prominent search block — users land and immediately see a clear path forward."
            autoPlay
            loop
            controls={false}
          />
          <Figure
            src={itaResponseFilters}
            frame="soft"
            alt="Redesigned filter panel — persistent sidebar with real-time result updates as users refine stops, time, and airline preferences."
            caption="We gave filters a permanent home beside the results — every adjustment lands immediately, no full-page reload, no lost context."
            autoPlay
            loop
            controls={false}
          />
          <Figure
            src={itaResponsePassengerInfo}
            frame="soft"
            alt="Flight selection leading into passenger info — users pick their flight and immediately flow into a structured form for traveler details."
            caption="We made the handoff from flight selection to passenger details seamless — users confirm their choice and move straight into a structured, clearly scoped form."
            autoPlay
            loop
            controls={false}
          />
          <Figure
            src={itaResponseSeatSelection}
            frame="soft"
            alt="Redesigned seat selection — seat map with inline pricing, passengers clearly labeled and scoped individually throughout the flow."
            caption="We rebuilt seat selection so each passenger is handled in turn — pricing visible at a glance, choices locked in before moving on."
            autoPlay
            loop
            controls={false}
          />
          <Figure
            src={itaResponseBenefitsSelection}
            frame="soft"
            alt="Redesigned benefits selection — baggage, lounge, and extras consolidated into a single guided flow with persistent passenger context."
            caption="We replaced disconnected benefit screens with a guided sequence — baggage, lounge, and extras consolidated into a single flow."
            autoPlay
            loop
            controls={false}
          />
          <Figure
            src={itaResponseOffers}
            frame="soft"
            alt="Redesigned offers page — map-first layout with traveler-type category filters and removable filter tags surfaced inline."
            caption="We made offers explorable — a map view, removable filter tags, and traveler-type categories so users find what fits them without wading through irrelevant results."
            autoPlay
            loop
            controls={false}
          />
        </>
      ),
    },
    {
      id: "accessibility",
      label: "Accessibility",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="04 — Accessibility"
            // title="A booking site serves every kind of traveler. Accessibility wasn't a final-step compliance pass — it was a design constraint we built from."
            title={<>Accessibility wasn't a checklist. It was a <em>design tool</em> — and it changed the work.</>}
            className="mx-auto max-w-3xl"
          />

          <ProcessStep
            justifyEnd
            number={<Palette className="h-8 w-8" />}
            title="Contrast testing"
            description={<>Every pairing tested against <strong>WCAG AA</strong>, <strong>AAA</strong>, and <strong>APCA</strong>. Using both frameworks caught edge cases either alone missed.</>}
            figureCols={8}
            figure={{ src: itaAccessContrast, frame: "soft", aspect: "aspect-[3/2]", alt: "Color contrast test grid — tokens against backgrounds with WCAG and APCA scores." }}
          />

          <ProcessStep
            reverse
            justifyEnd
            number={<ShieldCheck className="h-8 w-8" />}
            title="Color blindness"
            description={<>The calendar's three-tier color system is invisible to color-blind users. Four simulations, one fix: a <strong>dot pattern as a redundant signal.</strong></>}
            figureCols={8}
            figure={{ src: itaAccessibilityVideo, frame: "soft", aspect: "aspect-[3/2]", alt: "Color blindness simulations — four conditions, calendar shown in each.", controls: false, autoPlay: true, loop: true }}
          />

          <ProcessStep
            justifyEnd
            number={<Type className="h-8 w-8" />}
            title="Typography and readability"
            description={<><strong>Lato</strong>, chosen for its performance at small sizes. Scale built around tabular figures and a <strong>16px minimum.</strong></>}
            figureCols={8}
            figure={{ src: itaAccessTypo, frame: "soft", aspect: "aspect-[3/2]", alt: "Type scale with size annotations — headings, body, captions, and tabular numerals." }}
          />
        </>
      ),
    },
    {
      id: "design-system",
      bgStyle: { background: "var(--project-tint)" },
      label: "Design System",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="05 — Design System"
            title={<>Built on <em>Moon</em>, extended where the base library didn't cover our patterns.</>}
            subtitle="I adapted Moon's tokens to ITA's brand language and added bespoke components the library didn't cover — the price-comparison calendar, the passenger-scoped baggage selector, and the offers map pins. Accessibility testing ran at the token level, so every component inherits compliant contrast by default."
            className="mx-auto max-w-3xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <Figure
              className="mt-0"
              src={itaDesignSystem1}
              frame="soft"
              aspect="aspect-square"
              alt="Token system — color, spacing, and typography documented across light and dark surfaces."
            />
            <Figure
              className="mt-0"
              src={itaDesignSystem2}
              frame="soft"
              aspect="aspect-square"
              alt="Component library — buttons, inputs, cards, the price-matrix calendar, and the seat, baggage, and lounge selectors."
            />
          </div>
        </>
      ),
    },
    {
      id: "reflections",
      label: "Reflections",
      size: "small",
      render: () => (
        <>
          <SectionHeading
            kicker="Reflections"
            // title="The most useful thing this project gave me was fluency in structured diagnosis."
            title={<>This project didn't teach me to design better screens. It taught me to <em>diagnose better problems.</em></>}
            className="mx-auto max-w-3xl"
          />

          <InsightList
            className="mx-auto max-w-3xl"
            items={[
              {
                title: "Build a case before you build screens",
                description: <>Before a single wireframe was drawn, we had a click-count table, a heuristic violation log, a competitor benchmark, and a persona-driven task priority stack. <em>Every design decision had a traceable origin.</em> That discipline is what separates a <strong>redesign</strong> from a <strong>restyle</strong>.</>,
              },
              {
                title: "Accessibility testing is a design tool, not a compliance pass",
                description: <>The dot pattern on the pricing calendar came from a <em>simulation</em>, not a checklist. I'd reached for color to carry meaning; the simulation showed me the gap, and the pattern closed it. That <strong>feedback loop</strong> is now a habit.</>,
              },
              // {
              //   title: <Prose>Five colleagues is a convenience sample, not a validation</Prose>,
              //   description: <Prose><p>The research and audit phases were rigorous; the validation phase wasn't. With more time I'd have recruited outside the cohort and run moderated sessions against specific task-success criteria. Worth being honest about that gap.</p></Prose>,
              // },
            ]}
          />

          <Prose className={`mx-auto max-w-3xl ${sp.itemToItem}`}>
            <p className="text-(--project-muted-foreground,var(--muted-foreground))">
              Thanks to{" "}
              <a href="https://www.linkedin.com/in/robertodadda/" target="_blank" rel="noopener noreferrer">Prof. Roberto Dadda</a>{" "}
              and{" "}
              <a href="https://www.linkedin.com/in/paolonegri/" target="_blank" rel="noopener noreferrer">Paolo Negri</a>{" "}
              for their thorough reviews, their dedication to the course, and for teaching a
              methodology rigorous enough to actually use. And to <strong>Marjan</strong>, <strong>Ilaria</strong>, and <strong>Mahshad</strong> —
              for the late-night Figma sessions, the shared frustrations, and for making this genuinely fun to build.
            </p>
          </Prose>
        </>
      ),
    },
  ],
}
