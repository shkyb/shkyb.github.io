import React from "react"

import itaLogo from "./assets/ita-logo.webp"
import itaCover from "./assets/ita-cover.webp"

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
import { Timeline } from "@/components/case/blocks/Timeline"
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Ticket, Map, ShieldCheck, Type, Palette, LayoutGrid, Users, BarChart2, MousePointerClick, Target, AlertCircle } from "lucide-react"

const PersonaCard = ({ avatar, name, age, role, drive, pain }) => (
  <Card className="shadow-none">
    <CardHeader className="flex flex-row items-center gap-4">
      <img
        src={avatar ?? itaLogo}
        alt={name}
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />
      <div>
        <CardTitle>
          <Prose><h3>{name}, {age}</h3></Prose>
        </CardTitle>
        <CardDescription>
          <Prose><p>{role}</p></Prose>
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <Target className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
        <Prose><p>{drive}</p></Prose>
      </div>
      <div className="flex items-start gap-2">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
        <Prose><p>{pain}</p></Prose>
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
    links: [],
    meta: [
      {
        label: "Role",
        value: "Led the Design System & Hi-fi prototype",
      },
      {
        label: "Team",
        value: [
          { name: "@Marjan Mehrabi", href: "https://www.linkedin.com/in/marjan-mehrabi/" },
          { name: "@Ilaria Torcolacci", href: "https://www.linkedin.com/in/ilaria-torcolacci-designer/" },
          { name: "@Mahshad Mousavinia", href: "https://www.linkedin.com/in/mahshad-mousavinia-3bb829199/" },
          { name: "& Me" },
        ],
      },
      {
        label: "Timeline",
        value: "Academic project · 1 semester · AY 2024/2025",
      },
      {
        label: "Deliverables",
        value: "Heuristic audit · Competitor benchmark · Personas · Wireframes · Hi-fi prototype · Design system",
      },
      // {
      //   label: "Course",
      //   value: "Ergonomics Applied to the Design of Usable Web Pages and Apps — Politecnico di Milano",
      // },
    ],
  },

  sections: [
    {
      id: "problem",
      label: "Problem",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="The Problem"
            title="Buying a ticket, adding baggage, or browsing offers on ITA Airways meant navigating filters that didn't match how users think and pages that dropped context with every click."
            className="mx-auto max-w-3xl"
          />
          {/* <Prose className="mx-auto max-w-3xl">
            <p>
              Buying a ticket, adding baggage, browsing offers — all of it meant navigating
              filters that didn't match how users think and pages that dropped context with every
              click. The site was coherent on the surface. Underneath, it was fractured.
            </p>
          </Prose> */}
          <Figure
            src={itaCover}
            frame="soft"
            caption="Original ITA Airways site — annotated pain points across the three core flows."
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
            title="We rebuilt the three most painful flows around a simpler information architecture, a linear booking path with persistent context, and a custom design system tested for accessibility from the first pixel."
            className="mx-auto max-w-3xl"
          />
          <Metrics
            className="mx-auto max-w-3xl"
            columns={3}
            items={[
              { value: "99", label: "aircraft in fleet" },
              { value: "15M", label: "passengers annually" },
              { value: "€2.4B", label: "revenue in 2024" },
            ]}
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="Redesigned homepage, search results, and benefits flow — side by side."
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="Design system overview — tokens, components, and documentation."
          />
        </>
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
            title="The research phase was the longest stretch of the project — and the most consequential. Every decision downstream traces back to something we learned here."
            className="mx-auto max-w-3xl"
          />

          <Prose className="mx-auto max-w-3xl">
            <p>
              ITA Airways is young — founded in 2021 as the successor to Alitalia — state-owned,
              and positioned around sustainability and Italian hospitality. It carries the
              reputational weight of Alitalia's long decline, which means its website isn't just
              a booking tool. It's a credibility instrument for a brand still proving itself.
            </p>
          </Prose>
          <Figure
            src={itaCover}
            frame="soft"
            caption="ITA Airways company timeline — from Alitalia's founding in 1946 to ITA's relaunch in 2021."
          />
        </>
      ),
    },
    {
      // id: "benchmarking",
      // label: "Benchmarking",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Competitor benchmarking"
            title="We chose four competitors deliberately — not for inspiration, but to expose exactly where ITA fell short on the dimensions users care about most."
            className="mx-auto max-w-3xl"
          />

          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                tag: "Low-cost benchmark",
                title: "Ryanair",
                description: <Prose><p>The <strong>gold standard for stripping booking to its minimum viable path</strong>. Clear CTAs, no ambiguity about cost.</p></Prose>,
              },
              {
                tag: "Luxury benchmark",
                title: "Qatar Airways",
                description: <Prose><p><strong>Premium polish and visual consistency</strong> throughout. Sets the ceiling for information hierarchy and white space.</p></Prose>,
              },
              {
                tag: "Domestic rival",
                title: "Trenitalia",
                description: <Prose><p>Italy's rail operator and a <strong>direct short-haul competitor</strong>. Relevant because shared users compare the two experiences side by side.</p></Prose>,
              },
              {
                tag: "Filter benchmark",
                title: "Kayak",
                description: <Prose><p>Not a direct competitor — but the <strong>gold standard for filter design</strong> and search result density. Benchmarked specifically for its UX patterns.</p></Prose>,
              },
            ].map((item) => (
              <Card key={item.title} className="shadow-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={itaLogo}
                    alt={item.title}
                    className="h-12 w-12 shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <Badge variant="secondary" className="mb-1">{item.tag}</Badge>
                    <CardTitle><Prose><h3>{item.title}</h3></Prose></CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>

          <Prose className="mx-auto max-w-3xl">
            <p>
              We scored all five sites — ITA included — against five parameters:{" "}
              <em>clarity of content, graphical coherence, graphical clarity, responsiveness, ease of access.</em>{" "}
              Spider charts annotated page by page. ITA's strongest score was graphical coherence.
              Its weakest: content clarity and graphical clarity — exactly the dimensions that
              determine whether someone can finish a task.
            </p>
          </Prose>
          <Figure
            src={itaCover}
            frame="soft"
            caption="Competitor spider charts — ITA vs. Ryanair, Qatar Airways, Trenitalia, and Kayak across five UX dimensions."
          />

          <PullQuote
            className="mx-auto max-w-3xl"
            size="md"
            quote="ITA Airways' website demonstrates a reasonable level of graphical coherence, ease of access, and responsiveness compared to competitors. However, it lags behind in content and visual clarity."
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
            kicker="Personas"
            title="We built four personas reflecting the real ITA traveler mix — and every prioritization call we made traces back to one of them."
            className="mx-auto max-w-3xl"
          />

          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 md:grid-cols-2">
            <PersonaCard
              name="Roberto"
              age={21}
              role="Spanish student in Milan"
              drive="Price-driven. Books in advance, travels home often."
              pain="Every euro counts — hidden fees and unclear pricing cause distrust."
            />
            <PersonaCard
              name="Lucia"
              age={35}
              role="Business owner"
              drive="Comfort-driven, time-pressured. Needs flights to just work."
              pain="Can't afford to lose time on a fragmented, multi-step process."
            />
            <PersonaCard
              name="Ejona"
              age={38}
              role="Solo traveler"
              drive="Experience-driven. Hunts offers, values curation."
              pain="The offers page never surfaces what she actually wants to find."
            />
            <PersonaCard
              name="Giovanni"
              age={49}
              role="Family father"
              drive="Logistics-driven. Books for four, carries the mental load."
              pain="Per-passenger seat and baggage selection is confusing and error-prone."
            />
          </div>
          <Figure
            src={itaCover}
            frame="soft"
            caption="Empathy map — goals, fears, and mental context for one of the four personas."
          />
        </>
      ),
    },
    {
      // id: "task-matrix",
      // label: "Task Matrix",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Task matrix & prioritization"
            title="We mapped every major task to every persona, then weighted by frequency and importance. "
            className="mx-auto max-w-3xl"
          />
          <Prose className="mx-auto max-w-3xl">
            <p>
              Three tasks rose to the top — the ones every persona hits, and the ones. ITA was weakest at: <strong>check flight, use benefits, find offers.</strong>
            </p>
          </Prose>
          <Figure
            src={itaCover}
            frame="soft"
            caption="Task matrix — frequency and importance weighted across all four personas."
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
            <SectionHeading
              kicker="Heuristic evaluation"
              title="We evaluated the live site against Nielsen's 10 heuristics — the worst offenders were the ones that hit users hardest mid-task."
            />

            <Timeline
              // variant="cards"
              items={[
              {
                title: "👁️ Visibility of system status",
                tone: "warning",
                body: (
                  <Prose>
                    <p>No progress indicator during booking. Users couldn't tell how many steps remained or where they were in the flow.</p>
                  </Prose>
                ),
              },
              {
                title: "🧠 Recognition rather than recall",
                tone: "warning",
                body: (
                  <Prose>
                    <p>Passengers and flights were hard to distinguish on shared pages. Users had to remember context the interface had already discarded.</p>
                  </Prose>
                ),
              },
              {
                title: "🔀 Consistency and standards",
                tone: "warning",
                body: (
                  <Prose>
                    <p>The offers matrix behaved differently from how users expected such tables to work — breaking a well-established mental model.</p>
                  </Prose>
                ),
              },
              {
                title: "🚪 User control and freedom",
                tone: "warning",
                body: (
                  <Prose>
                    <p>On the summary page before payment, users could review their booking but couldn't modify or remove any selected services. A dead end at the most consequential moment.</p>
                  </Prose>
                ),
              },
              {
                title: "🛡️ Error prevention",
                tone: "warning",
                body: (
                  <Prose>
                    <p>Date selection required a double-click to confirm the departure date before moving to return, with no feedback that the first click had registered. Quiet failures, repeated.</p>
                  </Prose>
                ),
              },
              ]}
            />
          </div>
          <Figure
            src={itaCover}
            frame="soft"
            caption="Heuristic evaluation board — violations documented with screenshots across all ten Nielsen heuristics."
          />
        </>
      ),
    },
    {
      // id: "click-count",
      // label: "Click-count Analysis",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Click-count analysis"
            title="ITA required more clicks than nearly every competitor on every task — this became the most objective argument for the redesign."
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
            src={itaCover}
            frame="soft"
            caption="Click-count comparison — ITA vs. competitors across all three core tasks."
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
            title="With the research in hand, three problems sharpened into focus — not as complaints about the site, but as design briefs."
            className="mx-auto max-w-3xl"
          />

          <ProcessStep
            className="mx-auto max-w-3xl"
            justifyEnd
            step="Insight 01"
            title="Information lived in the wrong places"
            description={
              <Prose>
                <p>
                  The site looked organized but wasn't. Managing bookings, finding offers,
                  and navigating the frequent flyer program all demanded effort the user
                  shouldn't have had to spend. Strong graphical coherence masked weak content
                  and visual clarity — the exact dimensions that determine whether someone
                  finishes a task.
                </p>
              </Prose>
            }
            figure={{
              src: itaCover,
              caption: "Spider chart — ITA's weak axes (content clarity, graphical clarity) highlighted against competitors.",
              frame: "soft",
              aspect: "aspect-square",
            }}
          />
          <ProcessStep
            className="mx-auto max-w-3xl"
            justifyEnd
            step="Insight 02"
            reverse
            title="The booking flow lost context every step"
            description={
              <Prose>
                <p>
                  Selecting seats, luggage, and lounge access pushed users back and forth
                  between parent and child pages, dropping context at each transition. The
                  seat selector didn't say <em>whose</em> seat. The baggage page didn't say{" "}
                  <em>which flight.</em> The system was treating these as separate decisions.
                  Users were treating them as one connected booking.
                </p>
              </Prose>
            }
            figure={{
              src: itaCover,
              caption: "Original benefits flow — annotated to show where context is dropped across passenger and flight transitions.",
              frame: "soft",
              aspect: "aspect-square",
            }}
          />
          <ProcessStep
            className="mx-auto max-w-3xl"
            justifyEnd
            step="Insight 03"
            title="The offers page broke its own promise"
            description={
              <Prose>
                <p>
                  Offers are where airlines convert browsers into buyers. ITA's price/date
                  matrix surfaced deals — but behaved differently from how users expected
                  such tables to work. Users read the data, then second-guessed it.{" "}
                  <strong>That moment of doubt is the moment the booking dies.</strong>
                </p>
              </Prose>
            }
            figure={{
              src: itaCover,
              caption: "Original offers page — the price/date matrix circled as the primary failure point.",
              frame: "soft",
              aspect: "aspect-square",
            }}
          />
        </>
      ),
    },
    {
      id: "response",
      label: "Response",
      size: "fill",
      render: () => (
        <>
          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            <SectionHeading
              kicker="03 — Response"
              title="After analyzing the findings from the Heuristics, user tasks and competitor analysis, we prioritized 3 improvements to our redesign"
            />
            <Timeline
              items={[
                {
                  title: <Prose>Simplify the flight purchase process</Prose>,
                  body: <Prose><p>Flatten the IA and move filters out of modals into a persistent panel.</p></Prose>,
                  tone: "info",
                },
                {
                  title: <Prose>Clarify the benefits area</Prose>,
                  body: <Prose><p>Rebuild seat, baggage, and lounge selection as a single guided flow with persistent context.</p></Prose>,
                  tone: "info",
                },
                {
                  title: <Prose>Make offers behave the way users expect</Prose>,
                  body: <Prose><p>Rebuild the price/date matrix interaction and surface category filters for real traveler types.</p></Prose>,
                  tone: "info",
                },
              ]}
            />
          </div>

          <Figure
            src={itaCover}
            frame="soft"
            caption="Information architecture — before and after. Nested tree collapsed into a flat, task-oriented structure."
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="Filter panel — persistent left-side layout ordered to match the user's natural decision sequence."
          />

          <Figure
            src={itaCover}
            frame="soft"
            caption="Redesigned seat selection — pricing surfaced inline, passengers clearly labeled throughout."
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="Redesigned baggage page — scoped per passenger, with a dedicated extra-equipment section."
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="Redesigned lounge selection — departure flight pinned at top, return handled in the same guided flow."
          />

          <Figure
            src={itaCover}
            frame="soft"
            caption="Redesigned offers page — map-first layout with traveler-type category filters and removable filter tags."
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="Redesigned price/date matrix — rebuilt interaction model that behaves the way users expect a table to work."
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
            title="A booking site serves every kind of traveler. Accessibility wasn't a final-step compliance pass — it was a design constraint we built from."
            className="mx-auto max-w-3xl"
          />

          <ProcessStep
            justifyEnd
            step={<Palette className="h-8 w-8 text-muted-foreground" />}
            title="Contrast testing"
            description={
              <Prose>
                <p>
                  Every pairing was tested against <strong>WCAG AA</strong> (4.5:1),{" "}
                  <strong>AAA</strong> (7:1) where possible, and <strong>APCA</strong> (79 Lc
                  for small text, 60 Lc for large). Using both frameworks caught edge cases
                  either alone would have missed.
                </p>
              </Prose>
            }
            figureCols={8}
            figure={{ src: itaCover, frame: "soft", aspect: "aspect-[3/2]", caption: "Color contrast test grid — tokens against backgrounds with WCAG and APCA scores." }}
          />

          <ProcessStep
            reverse
            justifyEnd
            step={<ShieldCheck className="h-8 w-8 text-muted-foreground" />}
            title="Color blindness"
            description={
              <Prose>
                <p>
                  The <strong>price-comparison calendar</strong>'s three-tier color system is
                  invisible to users with color vision deficiencies. After verifying against four
                  simulations — tritanopia, deuteranopia, achromatopsia, tritanomaly — I added a{" "}
                  <strong>dot pattern as a redundant signal</strong>. The calendar works
                  regardless of how the user sees color.
                </p>
              </Prose>
            }
            figureCols={8}
            figure={{ src: itaCover, frame: "soft", aspect: "aspect-[3/2]", caption: "Color blindness simulations — four conditions, calendar shown in each." }}
          />

          <ProcessStep
            justifyEnd
            step={<Type className="h-8 w-8 text-muted-foreground" />}
            title="Typography and readability"
            description={
              <Prose>
                <p>
                  <strong>Lato</strong> was chosen for its performance at small sizes — critical
                  on a site dense with pricing, flight times, and passenger details. The type
                  scale was built around tabular figures, consistent cap-height, and a 16px
                  minimum body size.
                </p>
              </Prose>
            }
            figureCols={8}
            figure={{ src: itaCover, frame: "soft", aspect: "aspect-[3/2]", caption: "Type scale with size annotations — headings, body, captions, and tabular numerals." }}
          />
        </>
      ),
    },
    {
      id: "validation",
      label: "Validation",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="05 — Validation"
            title="We tested with 5 users from our course cohort. Five pieces of feedback came up consistently enough that we treated them as requirements, not suggestions."
            className="mx-auto max-w-3xl"
          />

          <Prose className="mx-auto max-w-3xl">
            <p>
              Each user completed the three core tasks — search a flight, customize the booking,
              find an offer — while we observed silently and logged hesitations, misclicks, and
              verbal comments. After each task we ran an SEQ (Single Ease Question) on a 1–7
              scale.
            </p>
          </Prose>
          <Figure
            src={itaCover}
            frame="soft"
            caption="User testing session — observation setup and task prompt materials."
          />
          <Figure
            src={itaCover}
            frame="soft"
            caption="SEQ (Single Ease Question) form — administered after each completed task on a 1–7 scale."
          />

          <Timeline
            className="mx-auto max-w-3xl"
            items={[
              {
                title: "Passenger-seat mapping needed clearer labeling",
                body: (
                  <Prose>
                    <p>Users couldn't tell at a glance whose seat was being selected. We added persistent passenger labels throughout the flow.</p>
                  </Prose>
                ),
              },
              {
                title: "Tickets needed an in-session download option",
                body: (
                  <Prose>
                    <p>Users feared losing access if the confirmation email didn't arrive. We added a direct download to the confirmation screen.</p>
                  </Prose>
                ),
              },
              {
                title: "Seat prices needed to move up in the visual hierarchy",
                body: (
                  <Prose>
                    <p>Pricing was buried below the seat map. We surfaced it inline alongside each selectable seat.</p>
                  </Prose>
                ),
              },
              {
                title: "Offers needed more detail and richer filters",
                body: (
                  <Prose>
                    <p>Category browsing alone wasn't enough. We added traveler-type filters and richer offer cards with more upfront information.</p>
                  </Prose>
                ),
              },
              {
                title: "A pre-payment summary screen was missing",
                body: (
                  <Prose>
                    <p>Users wanted one last review before committing. We added a dedicated summary step before the payment screen.</p>
                  </Prose>
                ),
              },
            ]}
          />
        </>
      ),
    },
    {
      id: "reflections",
      label: "Reflections",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Reflections"
            title="The research was thorough enough that no design decision felt arbitrary — every choice traces back to a persona, a heuristic violation, or a click count."
            className="mx-auto max-w-3xl"
          />

          <Prose className="mx-auto max-w-3xl">
            <p>
              The design system held up under pressure: when we added the offers map late in the
              project, the tokens and components already in place made it a matter of composition,
              not invention.
            </p>
            <p>
              Five testers is the floor, not the ceiling. With more time I'd push for
              quantitative baselines — rigorous before/after click counts, time-on-task data —
              to make the redesign's impact measurable rather than just argued.
            </p>
          </Prose>

          <PullQuote
            className="mx-auto max-w-3xl"
            size="md"
            quote="Design systems only earn their cost if they're built from the problems, not imposed on them. Every token and component was traceable to something specific we found in research — that discipline is what made the system usable for the rest of the team."
            role="Takeaway"
          />
        </>
      ),
    },
  ],
}
