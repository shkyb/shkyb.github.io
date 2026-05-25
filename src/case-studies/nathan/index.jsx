import React from "react"

import logo from "./assets/nathan_logo.webp"
import cover from "./assets/nathan_cover.webp"

import ntnIntroProblem from "./assets/ntn-intro-problem.webp"
import ntnIntroSolution from "./assets/ntn-intro-solution.webp"
import ntnOriginChart from "./assets/ntn-origin-chart.webp"
import ntnOriginReframing from "./assets/ntn-origin-reframing.webp"
import ntnResearchUjm from "./assets/ntn-research-ujm.webp"
import ntnResearchBenchmark from "./assets/ntn-research-benchmark.webp"
import ntnService from "./assets/ntn-service.webp"
import ntnServiceUjm from "./assets/ntn-service-ujm.webp"
import ntnAiClassification from "./assets/ntn-ai-classification.webp"
import ntnAiForecasting from "./assets/ntn-ai-forecasting.webp"
import ntnAppMatrix from "./assets/ntn-app-matrix.webp"
import ntnAppIa from "./assets/ntn-app-ia.webp"
import ntnWireframe1 from "./assets/ntn-wireframe-1.webp"
import ntnWireframe2 from "./assets/ntn-wireframe-2.webp"
import ntnDesignSystem01 from "./assets/ntn-design-system-01.webp"
import ntnDesignSystem02 from "./assets/ntn-design-system-02.webp"
import ntnDesignSystem03 from "./assets/ntn-design-system-03.webp"
import ntnDesignSystem04 from "./assets/ntn-design-system-04.webp"
import ntnTesting01 from "./assets/ntn-testing-01.webp"
import ntnTesting02 from "./assets/ntn-testing-02.webp"
import ntnTesting03 from "./assets/ntn-testing-03.webp"
import ntnFinal1 from "./assets/ntn-final-1.webp"
import ntnFinal2 from "./assets/ntn-final-2.webp"
import ntnFinal3 from "./assets/ntn-final-3.webp"
import ntnFinal4 from "./assets/ntn-final-4.webp"
import ntnFinal5 from "./assets/ntn-final-5.webp"
import ntnFinal6 from "./assets/ntn-final-6.webp"

import { Prose } from "@/components/case/layout/Prose"
import { sp } from "@/components/case/layout/spacing"
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
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ImageGrid } from "@/components/case/blocks/ImageGrid"
import { BeforeAfter } from "@/components/case/blocks/BeforeAfter"
import { Callout } from "@/components/case/blocks/Callout"
import { PullQuote } from "@/components/case/blocks/PullQuote"
import { Timeline } from "@/components/case/blocks/Timeline"
import { ProcessStep } from "@/components/case/blocks/ProcessStep"
import { CaseSeparator } from "@/components/case/blocks/CaseSeparator"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ShoppingCart, Refrigerator, Leaf, ScanLine, BrainCircuit, ShieldCheck, LayoutGrid, SlidersHorizontal, Hand, Eye, Smartphone, Layers, Camera, FileSearch, Link2, Bot, CheckCheck, Inbox, ClipboardList, RefreshCw, Scale, Map, PenLine, LayoutTemplate, Figma, FlaskConical } from "lucide-react"

const PillarCard = ({ icon: Icon, title, body, bullets }) => (
  <Card className="border border-(--project-border,var(--border)) shadow-none" style={{ background: "var(--project-background)" }}>
    <CardHeader className="gap-4">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--project-primary)" }}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      )}
      <CardTitle style={{ color: "var(--project-foreground)" }}>{title}</CardTitle>
      {body && (
        <CardDescription style={{ color: "var(--project-muted-foreground)" }}>{body}</CardDescription>
      )}
    </CardHeader>
    {bullets && (
      <CardContent>
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm font-medium" style={{ color: "var(--project-muted-foreground)" }}>{b}</li>
          ))}
        </ul>
      </CardContent>
    )}
  </Card>
)

const ProductPillars = () => (
  <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-3">
    <PillarCard
      icon={ShoppingCart}
      title="Smart Shopping Lists"
      body="Your next list, built from what you actually bought last time. Editable by every household member, in real time."
      bullets={[
        "Multiple member management",
        "Info on product quality standards",
        "List management",
      ]}
    />
    <PillarCard
      icon={Refrigerator}
      title="Inventory & Expiry Tracking"
      body="Scan a receipt after shopping. Items sort into Fridge, Freezer, and Pantry — with estimated expiry dates already filled in."
      bullets={[
        "Receipt scanner",
        "Automatic inventory",
        "Food expiry tracking",
      ]}
    />
    <PillarCard
      icon={Leaf}
      title="Zero-Waste Journey"
      body="Log what you wasted, see your impact, earn rewards. Every report makes the next list more accurate."
      bullets={[
        "Data visualization on consumption",
        "User's trend",
        "Gamified reward system",
      ]}
    />
  </div>
)

export const nathanCase = {
  slug: "nathan",

  caseMeta: {
    logo: { src: logo, alt: "Nathan logo" },
    title: "Nathan",
    headline: "An AI grocery companion that turns shopping lists into waste prevention.",
    tags: ["AI/UX", "Service Design", "Design Systems", "Mobile", "Sustainability"],
    cover: {
      src: cover,
      alt: "Nathan case study cover",
    },
    overview: [
      <Prose>
        <p>Nathan is a conceptual mobile app — a speculative design project exploring how AI could close the gap between what Italian households intend to buy and what they actually waste. Developed during a <a href="https://www.polimi.it/en/" target="_blank" rel="noopener noreferrer">@PoliMI</a> studio on <em>Envisioning AI Through Design</em>, the concept pairs receipt-scanning classification with an LSTM forecasting model to progressively rewrite your shopping list — quietly reducing overbuying without adding friction to the experience.</p>
        <p>The project moved from root-cause research (the food waste crisis is really a planning-friction problem) through a fully specified AI and data architecture, a custom design system built around calm, butler-like helpfulness, and iterative usability testing of a hi-fi prototype with real households across age groups.</p>
      </Prose>
    ],
    links: [
      { label: "Figma Prototype", href: "https://www.figma.com/proto/lH24vf0assp2xi3x0IwqsB/Envisioning-AI-%7C-Group-6-%7C-Waste-Management--Copy-?node-id=4-2&t=ibXN7YOBiGPDMVzS-1", icon: "" },
      // { label: "Design Report", href: "", icon: "", variant: "secondary" },
    ],
    meta: [
      { label: "Role", value: "Designing the AI & data architecture — model selection, data strategy, fail-safes — and building the design system and hi-fi prototype." },
      {
        label: "Team", value: [
          { name: "@Filippo Randon", href: "https://www.linkedin.com/in/filippo-randon-b25466180/" },
          { name: "@Marjan Mehrabi", href: "https://www.linkedin.com/in/marjan-mehrabi/" },
          { name: "@Dilara Tanriöven", href: "https://www.linkedin.com/in/dilara-tanrioven-2b6028211/" },
          { name: "@Erika Caffo", href: "https://drive.google.com/file/d/1mbodgFZpIu_22mVmBayxDRq9ETFdayCk/view?usp=share_link" },
          { name: "& Me" },
        ],
      },
      { label: "Timeline", value: "Academic project · 1 Semester · Mar – Jun 2024" },
      { label: "Focus", value: "AI Architecture, UX, Design Systems, Sustainability" },
    ],
    cssVars: {
      "--project-kicker": "#599A08",
      "--project-primary": "#599A08",
      "--project-dark": "#1A4A1A",
      "--project-surface": "#F5F5F5",
      "--project-background": "#FFFFFF",
      "--project-tint": "#F5F5F5",
      "--project-dark-text": "#1F1F1F",
      "--project-foreground": "#1F1F1F",
      "--project-muted-foreground": "#4B4B4B",
      "--project-border": "#E2E2E2",
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
            // title="Italian households waste 65 kg of food per person every year — not from carelessness, but because planning groceries is cognitively expensive enough that most families skip it."
            title={<>Italian households throw away 65 kg of food per person every year. Not from carelessness — from <em>planning friction</em>.</>}
            subtitle=""
            className="mx-auto max-w-3xl"
          />
          <Figure src={ntnIntroProblem} frame="soft" />
        </>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      size: "fill",
      // bgStyle: {
      //   background: "var(--project-primary)",
      //   "--project-kicker": "#ffffff",
      //   "--project-foreground": "#ffffff",
      //   "--project-muted-foreground": "rgba(255,255,255,0.75)",
      // },
      render: () => (
        <>
          <SectionHeading
            kicker="The Solution"
            // title="A mobile app that scans your receipts, learns your household's waste patterns via an LSTM model, and quietly rewrites your next shopping list to match what you actually need."
            title={<>An app that learns what your household actually wastes — then <em>quietly rewrites your next list to match</em>.</>}
            subtitle="Two AI models in sequence: receipt-scanning OCR captures what you buy, an LSTM adjusts quantities based on what you actually consumed."
            className="mx-auto max-w-3xl"
          />
          <Figure src={ntnIntroSolution} frame="soft" />
          <Metrics
            columns={3}
            variant="plain"
            align="center"
            className={`mx-auto max-w-3xl ${sp.itemToItem}`}
            items={[
              { value: "81", label: "screens designed", icon: Smartphone },
              { value: "33", label: "design system components", icon: Layers },
              { value: "2", label: "AI models architected", icon: BrainCircuit },
            ]}
          />
        </>
      ),
    },

    {
      size: "fill",
      bgStyle: { background: "var(--project-primary)", "--project-muted-foreground": "white", "--project-border": "var(--project-border)" },
      render: () => (
        <CaseSeparator label="↓ Dive deeper into the project ↓" />
      ),
    },

    {
      id: "origin",
      label: "Origin & Reframing",
      size: "fill",
      render: () => (
        <>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              kicker="Origin & Reframing"
              // title="We set out to design an AI solution for Italy's waste crisis — and spent the first weeks systematically killing every idea we were excited about."
              title={<>We set out to fix Italy's waste crisis. The research told us <em>we were solving the wrong problem</em>.</>}
              subtitle="The course required AI to be central, not decorative. That constraint ruled out our first two ideas — and pushed us toward the right problem."
            />
            <Timeline
              items={[
                {
                  title: "Smart bins — killed",
                  tone: "warning",
                  body: <><em>Worked on paper.</em> Needed city-scale buy-in from municipalities and waste companies — a <strong>rollout problem, not a design problem.</strong> And the AI was decorative: sensors would do the same job.</>,
                },
                {
                  title: "DIY reuse projects — killed",
                  tone: "warning",
                  body: <>Composting guides, upcycling prompts. Addressed <em>guilt</em>, not behavior — the intervention <strong>landed after the damage, not before it.</strong></>,
                },
              ]}
            />
          </div>
          <Figure
            src={ntnOriginChart}
            frame="soft"
            alt="Waste sector breakdown pie chart showing food at 44% of household waste"
            // caption="Food was the worst-performing waste category. Households are its biggest source — ahead of restaurants, retail, and manufacturing."
          />
          <Figure
            src={ntnOriginReframing}
            frame="soft"
            alt="5-Whys reframing diagram showing the chain from food waste to shopping friction"
            // caption="The pivot from waste management to shopping friction. Fix the planning step and most downstream waste triggers disappear."
          />
          <PullQuote
            // size="md"
            quote={<>How might we help families shop without <em>excess cognitive load</em> — making the experience more enjoyable and nudging them toward <em>environmentally conscious choices</em>?</>}
            // role="How Might We"
          />
        </>
      ),
    },
    {
      id: "research",
      label: "Research",
      size: "small",
      bgStyle: { background: "var(--project-tint)" },
      render: () => (
        <>
          <SectionHeading
            kicker="Research"
            // title="Before designing anything, we mapped where the friction actually lived — then benchmarked every product that claimed to solve it."
            title={<>We mapped the friction. Then we <em>benchmarked who else had tried to solve it.</em></>}
            subtitle="Decision → Shopping → Consuming → Disposal. Pain clustered at the start and end — not in the store."
          />

          <Prose className={sp.itemToItem}>
            <h3>User Journey Mapping</h3>
          </Prose>
          <Figure
            src={ntnResearchUjm}
            frame="soft"
            alt="User journey map across four shopping stages showing pain point clusters in Decision and Consuming"
            caption="Pain points clustered heavily in the Decision and Consuming stages — before and after the store, not inside it."
          />
          <Prose className={sp.itemToItem}>
            <h3>Benchmarking</h3>
          </Prose>
          <Figure
            src={ntnResearchBenchmark}
            frame="soft"
            alt="Benchmarking matrix comparing five grocery apps across collaboration, AI, inventory, and stats tracking"
            caption="No existing product combined all four pillars. Nathan is the only concept with meaningful AI at its core."
          />
        </>
      ),
    },
    {
      id: "service",
      label: "Service Idea",
      size: "fill",
      bgStyle: { background: "var(--project-background)" },
      render: () => (
        <>
          <SectionHeading
            kicker="Service Idea"
            // title="Nathan works in the background — learning what your household actually buys, and quietly making your next list more honest than your last one."
            title={<>Nathan acts like a household butler — <em>learning what you waste before you even notice it.</em></>}
            subtitle="Three connected pillars: planning before the shop, tracking after it, learning from what actually gets used."
            className="mx-auto max-w-3xl"
          />
          <ProductPillars />
          <Figure
            src={ntnServiceUjm}
            frame="soft"
            caption="New user journey map"
          />
        </>
      ),
    },
    {
      id: "ai",
      label: "AI Architecture",
      size: "fill",
      bgStyle: { background: "var(--project-tint)" },
      render: () => (
        <>
          <SectionHeading
            kicker="AI Architecture"
            // title="Designing the AI meant designing the data first — what the models need, where it comes from, and what happens when it's missing."
            title={<>Most apps add AI as a feature. <em>We designed the data architecture first.</em></>}
            subtitle="Two models, each with documented fail-safes — so the app is useful on day one, before the model has learned anything about your household."
            className="mx-auto max-w-3xl"
          />
          <Figure
            src={ntnAiClassification}
            frame="soft"
            alt="Classification AI pipeline diagram showing the flow from receipt photo through OCR, string matching, and ChatGPT fallback to a structured purchased list"
            caption="The classification pipeline turns a receipt photo into a structured inventory update — with a ChatGPT fallback when OCR abbreviations can't be matched."
          />
          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className={`flex flex-col gap-3 ${sp.itemToItem}`}>
              <ScanLine className="h-5 w-5" style={{ color: "var(--project-primary)" }} />
              <Prose>
                <h3>Classification — from receipt photo to structured data</h3>
                <p className="text-(--project-muted-foreground,var(--muted-foreground))">We chose Mindee over training our own OCR model — a pre-trained, receipt-specialized service let us focus the AI work where it actually mattered: the forecasting layer.</p>
              </Prose>
            </div>
            <InsightList
              items={[
                { icon: Camera, title: "Capture", description: "User photographs the receipt." },
                { icon: FileSearch, title: "OCR extraction", description: "Mindee returns market name, date, SKUs, quantities, prices." },
                { icon: Link2, title: "String matching", description: "Abbreviated SKUs matched against Nathan's standardized product table." },
                { icon: Bot, title: "ChatGPT fallback", description: "Unmatched abbreviations resolved by GPT — user confirms the result." },
                { icon: CheckCheck, title: "Output", description: "Clean, categorized list added to inventory automatically." },
              ]}
            />
          </div>


          <Figure
            src={ntnAiForecasting}
            frame="soft"
            alt="LSTM forecasting model flow diagram showing inputs of shopping history and waste feedback producing a predicted next shopping list"
            caption="The LSTM model learns from purchase history and waste feedback, gradually nudging quantities to close the gap between what users buy and what they actually consume."
          />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className={`flex flex-col gap-3 ${sp.itemToItem}`}>
              <Eye className="h-5 w-5" style={{ color: "var(--project-primary)" }} />
              <Prose>
                <h3>Forecasting — closing the waste gap over time</h3>
                <p className="text-(--project-muted-foreground,var(--muted-foreground))">I specified an LSTM model because the task is inherently sequential — next week's list depends on patterns across prior lists and the time between them, not a single snapshot.</p>
              </Prose>
            </div>
            <InsightList
              items={[
                { icon: Inbox, title: "Input", description: "Shopping history + waste feedback — what percentage of each item was actually consumed." },
                { icon: ClipboardList, title: "Output", description: "A predicted shopping list with items, quantities, and estimated timing." },
                { icon: RefreshCw, title: "The learning loop", description: "Every waste report closes the gap between suggested and consumed quantities." },
              ]}
            />
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            <ShieldCheck className="h-5 w-5" style={{ color: "var(--project-primary)" }} />
            <Prose>
              <h3>Data fail-safes</h3>
            </Prose>
          </div>
          {/* <Figure
            src={cover}
            frame="soft"
            alt="Data fail-safes table showing each required data source paired with its fallback mechanism"
            caption="Every required data source paired with a fail-safe — designed so the app is still useful on day one, before the model has learned anything."
          /> */}
          <ComparisonTable
            className="mx-auto max-w-3xl"
            columns={[
              { key: "data", label: "Data needed" },
              { key: "source", label: "Primary source" },
              { key: "failsafe", label: "Fail-safe", emphasis: true },
            ]}
            rows={[
              { data: "🛒 What the user buys", source: "Scanned receipts", failsafe: "Manual list entry" },
              { data: "🕐 Purchase timing", source: "Receipt timestamps", failsafe: "Manual entry timestamps" },
              { data: "🗑️ Waste behavior", source: "In-app feedback prompts", failsafe: "Gamified nudges + rewards" },
              { data: "🏪 Store product catalogs", source: "Web scraping (Esselunga, Tigros…)", failsafe: "ChatGPT fallback" },
              { data: "📅 Product lifespans", source: "data.gov · fooddocs.com", failsafe: "User manual override" },
            ]}
          />
        </>
      ),
    },
    {
      id: "app",
      label: "App Development",
      size: "fill",
      render: () => (
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHeading
              kicker="App Development"
              // title="We had three weeks to go from blank canvas to a tested prototype. So before touching Figma, we ran an agile sprint and decided what actually mattered."
              title={<>We had three weeks. So before opening Figma, <em>we decided what to cut.</em></>}
              subtitle="Structured like a design sprint — prioritize, prototype, test, iterate."
            />
          </div>
          <Timeline
            items={[
              { title: <span className="inline-flex items-center gap-2"><Scale className="h-4 w-4 shrink-0" style={{ color: "var(--project-primary)" }} />Impact / Effort Matrix</span> },
              { title: <span className="inline-flex items-center gap-2"><Map className="h-4 w-4 shrink-0" style={{ color: "var(--project-primary)" }} />Information Architecture</span> },
              { title: <span className="inline-flex items-center gap-2"><PenLine className="h-4 w-4 shrink-0" style={{ color: "var(--project-primary)" }} />Sketches</span> },
              { title: <span className="inline-flex items-center gap-2"><LayoutTemplate className="h-4 w-4 shrink-0" style={{ color: "var(--project-primary)" }} />Wireframes</span> },
              { title: <span className="inline-flex items-center gap-2"><Figma className="h-4 w-4 shrink-0" style={{ color: "var(--project-primary)" }} />Hi-Fi Prototype</span> },
              { title: <span className="inline-flex items-center gap-2"><FlaskConical className="h-4 w-4 shrink-0" style={{ color: "var(--project-primary)" }} />User Testing</span> },
            ]}
          />
        </div>
      ),
    },
    {
      // id: "IA",
      // label: "IA",
      size: "fill",
      bgStyle: { background: "var(--project-tint)" },
      render: () => (
        <div className="flex mt-0 md:mt-0 flex-col gap-16">
          <ProcessStep
            className="mt-0 md:mt-0"
            figureCols={8}
            justifyEnd
            number={<Scale className="h-10 w-10" />}
            title="Impact / Effort Matrix"
            description={<>Every user story forced onto a 2×2 — <strong>impact against effort</strong>. Top-left shipped first. Bottom-right got killed. <em>Uncomfortable, and the right call.</em></>}
            figure={{
              src: ntnAppMatrix,
              alt: "Impact / Effort Matrix diagram with user stories plotted by impact and effort",
              className: "mt-0",
              // caption: "User stories sorted into Quick Wins, Major Projects, Fill-ins, and Hard Slogs.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
          <ProcessStep
            figureCols={8}
            justifyEnd
            reverse
            number={<Map className="h-10 w-10" />}
            title="Information Architecture"
            description={<><strong>Three pillars — Home, Inventory, Household</strong> — everything reachable in two taps. <em>Locking the IA first</em> meant no screen was drawn without a clear place to live.</>}
            figure={{
              src: ntnAppIa,
              alt: "Nathan information architecture diagram showing three-pillar structure",
              // caption: "Home · Inventory · Household — the three-pillar IA that shaped every screen that followed.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
        </div>
      ),
    },
    {
      // id: "wireframe",
      // label: "— Wireframes",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="— Wireframes"
            // title="Wireframes weren't drawn freely — every layout decision was anchored to a principle from cognitive psychology."
            title={<>Every layout decision had a reason. <em>Four principles from cognitive psychology.</em></>}
            className="mx-auto max-w-3xl"
          />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
            <Callout className="mt-0 md:mt-0" tone="neutral" title="Miller's Law" icon={LayoutGrid}>
              Inventory screens cap at 7±2 visible items before scrolling — preventing overload when scanning a full pantry grid.
            </Callout>
            <Callout className="mt-0 md:mt-0" tone="neutral" title="Hick's Law" icon={SlidersHorizontal}>
              Minimal filter options on the shopping list. Fewer decisions per interaction means less friction per shop.
            </Callout>
            <Callout className="mt-0 md:mt-0" tone="neutral" title="Fitts's Law" icon={Hand}>
              Primary actions are generously sized and thumb-reachable. The most common interactions never require a stretch.
            </Callout>
            <Callout className="mt-0 md:mt-0" tone="neutral" title="Selective Attention" icon={Eye}>
              Card-based layout uses proximity and common-region grouping to surface what's relevant and suppress what isn't.
            </Callout>
          </div>
          <Carousel
            className="mx-auto max-w-5xl"
            options={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {[
                { src: ntnWireframe1, alt: "Wireframe placeholder 1" },
                { src: ntnWireframe2, alt: "Wireframe placeholder 2" },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <Figure src={item.src} alt={item.alt} aspect="aspect-video" frame="soft" loading="eager" fetchPriority="high" decoding="sync" />
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
        </>
      ),
    },
    {
      // id: "design-system",
      // label: "— Design System",
      size: "fill",
      bgStyle: { background: "var(--project-background-alt)" },
      render: () => (
        <>
          <SectionHeading
            kicker="— Design System"
            title="Every color, typeface, and component was chosen to get out of the user's way — clean, readable, and nothing more than necessary."
            className="mx-auto max-w-3xl"
          />
          <Prose className="mx-auto max-w-3xl">
            <p>Nathan's design system is a customization of the <strong>Moon Design System</strong> — 33 components adapted to the specific needs of a household grocery app.</p>
          </Prose>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4">
            <Figure src={ntnDesignSystem01} alt="Design system foundations" aspect="aspect-square" frame="soft" />
            <Figure src={ntnDesignSystem02} alt="Design system components" aspect="aspect-square" frame="soft" />
            <Figure src={ntnDesignSystem03} alt="Design system typography and color" aspect="aspect-square" frame="soft" />
            <Figure src={ntnDesignSystem04} alt="Design system patterns" aspect="aspect-square" frame="soft" />
          </div>
        </>
      ),
    },
    {
      // id: "testing",
      // label: "— Testing",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="— Testing & Iteration"
            title="We tested with real households — then rebuilt the parts that quietly confused them."
            className="mx-auto max-w-3xl"
          />
          <Prose className="mx-auto max-w-3xl">
            <p>Two individuals, two households, ages 26–49. Each session fed directly into a redesign round before the final prototype was locked.</p>
          </Prose>
          <Metrics
            columns={3}
            size="sm"
            className="mx-auto max-w-3xl"

            items={[
              {
                label: "5-Second Test",
                value: "Dense",
                note: "Home was eye-catching but information-heavy. Rebuilt with stronger whitespace and clearer hierarchy.",
              },
              {
                label: "SEQ · 7 Tasks",
                value: "Mostly easy",
                note: "Onboarding and waste feedback scored lowest — both were redesigned before the final build.",
              },
              {
                label: "PREMO",
                value: "Joy & Hope",
                note: "Dominant emotions across users. Honest negative: boredom — groceries aren't inherently exciting.",
              },
            ]}
          />
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4">
            <Figure
              src={ntnTesting01}
              alt="Home screen rebuilt with stronger whitespace and clearer visual hierarchy"
              // caption="Home rebuilt — the original was eye-catching but dense. Whitespace and hierarchy fixed it."
              aspect="aspect-[4/5]"
              frame="none"
            />
            <Figure
              src={ntnTesting02}
              alt="Join button changed to Join a Household"
              // caption='"Join" → "Join a Household" — a single copy change that eliminated a recurring confusion point.'
              aspect="aspect-[4/5]"
              frame="none"
            />


          </div>
          <Figure
            src={ntnTesting03}
            alt="End-of-shopping tooltip added to signal session completion"
            // caption="End-of-shopping tooltip added — users had no signal that the process was complete."
            aspect="aspect-[video]"
            frame="none"
          />

          <PullQuote
            quote="My 9-year-old daughter enjoys collaborating in shopping by adding her favorite items on post-its on the fridge. I will install Nathan on her phone to substitute post-its."
            author="0Farnaz"
            role="38, participant"
          />
        </>
      ),
    },
    {
      id: "final-design",
      label: "Final Design",
      size: "fill",
      bgStyle: { background: "var(--project-background)" },
      render: () => (
        <>
          <SectionHeading
            kicker="Final Design"
            title="The MVP includes 80+ screens which covered one complete loop: from building the list, to scanning the receipt, to tracking what was left."
            className="mx-auto max-w-3xl"
          />
          {/* <Prose className="mx-auto max-w-3xl">
            <p>The final prototype brought together every decision made across the project — from the IA skeleton to the 33-component design system to the iterations driven by testing. This is what Nathan looks like when it's working.</p>
          </Prose> */}
          <div className="grid grid-cols-1 gap-4">
            <Figure src={ntnFinal1} alt="Final design screens" aspect="aspect-video" frame="soft" />
            <Figure src={ntnFinal2} alt="Final design screens" aspect="aspect-video" frame="soft" />
            <Figure src={ntnFinal3} alt="Final design screens" aspect="aspect-video" frame="soft" />
            <Figure src={ntnFinal4} alt="Final design screens" aspect="aspect-video" frame="soft" />
            <Figure src={ntnFinal5} alt="Final design screens" aspect="aspect-video" frame="soft" />
            <Figure src={ntnFinal6} alt="Final design screens" aspect="aspect-video" frame="soft" />
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
            title="AI is a design material — it has constraints, fail-safes, and responsibilities that have to be designed for, not assumed."
          />
          <InsightList
            items={[
              {
                title: "Reframing is the actual work.",
                description: <>Our first ideas would have produced <em>beautiful deliverables and useless products.</em> The pivot from waste management to shopping friction is the decision that made Nathan worth building. Getting comfortable <strong>killing good ideas early</strong> is a professional skill, not just a design principle.</>,
              },
              {
                title: "AI is a material, not a feature.",
                description: <>Designing with AI means working backwards from <strong>data availability</strong> — what does the model need, what's the fail-safe when that data is missing, and what does the UI communicate when a prediction is uncertain? I now approach AI products as <em>data architecture problems</em> before they become interface problems.</>,
              },
              // {
              //   title: "A design system is how uncertainty becomes calm.",
              //   description: <Prose><p>The AI suggests quantities — that's inherently probabilistic. The design system is the <strong>translation layer</strong> that makes it feel trustworthy rather than presumptuous. Those 33 components aren't cosmetic — <em>they're the product's argument that the AI can be trusted.</em></p></Prose>,
              // },
            ]}
          />
          <Prose>
            <p>A big thank you to <a href="https://www.linkedin.com/in/marzia-mortati-19a0898/" target="_blank" rel="noreferrer">Marzia Mortati</a>, <a href="https://www.linkedin.com/in/andreabonarini/" target="_blank" rel="noreferrer">Andrea Bonarini</a>, <a href="https://www.linkedin.com/in/enrico-priora/" target="_blank" rel="noreferrer">Enrico Priora</a>, <a href="https://dipartimentodesign.polimi.it/it/personale/federico.espositi#" target="_blank" rel="noreferrer">Federico Espositi</a>, and <a href="https://www.linkedin.com/in/giulia-daleo/" target="_blank" rel="noreferrer">Giulia D'Aleo</a> for the care and patience they put into every review session. And to Filippo, Marjan, Dilara, and Erika — it was a pleasure to figure this out together.</p>
          </Prose>
        </>
      ),
    },
  ],
}
