import React from "react"

import logo from "./assets/nathan_logo.webp"
import cover from "./assets/nathan_cover.webp"

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
import { ShoppingCart, Refrigerator, Leaf, ScanLine, BrainCircuit, ShieldCheck } from "lucide-react"

const PillarCard = ({ icon: Icon, title, body, bullets }) => (
  <Card>
    <CardHeader>
      {Icon && <Icon className="h-8 w-8 text-muted-foreground" />}
      <CardTitle>
        <Prose><h3>{title}</h3></Prose>
      </CardTitle>
      {body && (
        <CardDescription>
          <Prose>{body}</Prose>
        </CardDescription>
      )}
    </CardHeader>
    {bullets && (
      <CardContent>
        <Prose>
          <ul>{bullets.map((b, i) => <li key={i} className="font-medium">{b}</li>)}</ul>
        </Prose>
      </CardContent>
    )}
  </Card>
)

const ProductPillars = () => (
  <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-3">
    <PillarCard
      icon={ShoppingCart}
      title="Smart Shopping Lists"
      body="Automate manual tasks to reduce the margin of error in the whole process."
      bullets={[
        "Multiple member management",
        "Info on product quality standards",
        "List management",
      ]}
    />
    <PillarCard
      icon={Refrigerator}
      title="Inventory & Expiry Tracking"
      body="Have the management and status of your resources under control and at your fingertips."
      bullets={[
        "Receipt scanner",
        "Automatic inventory",
        "Food expiry tracking",
      ]}
    />
    <PillarCard
      icon={Leaf}
      title="Zero-Waste Journey"
      body="Clearly track and correct purchasing and consumption habits with a reward system."
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
      { label: "Role", value: "Designing the AI & data architecture — model selection, data strategy, fail-safes — and building the full design system and hi-fi prototype." },
      {
        label: "Team", value: [
          { name: "@Filippo Randon", href: "https://www.linkedin.com/in/filippo-randon-b25466180/" },
          { name: "@Marjan Mehrabi", href: "https://www.linkedin.com/in/marjan-mehrabi/" },
          { name: "@Dilara Tanriöven", href: "https://www.linkedin.com/in/dilara-tanrioven-2b6028211/" },
          { name: "@Erika Caffo", href: "#" },
          { name: "& Me" },
        ],
      },
      { label: "Timeline", value: "Academic project · 1 Semester · Mar – Jun 2024" },
      { label: "Focus", value: "AI Architecture, UX, Design Systems, Sustainability" },
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
            title="Italian households waste 65 kg of food per person every year — not from carelessness, but because planning groceries is cognitively expensive enough that most families skip it."
            subtitle=""
            className="mx-auto max-w-3xl"
          />
          <Figure src={cover} frame="soft" />
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
            title="A mobile app that scans your receipts, learns your household's waste patterns via an LSTM model, and quietly rewrites your next shopping list to match what you actually need."
            subtitle=""
            className="mx-auto max-w-3xl"
          />
          <Figure src={cover} frame="soft" />
          <Metrics
            columns={3}
            items={[
              { value: "81", label: "screens designed" },
              { value: "33", label: "design system components" },
              { value: "2", label: "AI models architected" },
            ]}
          />
        </>
      ),
    },
    {
      id: "origin",
      label: "Origin & Reframing",
      size: "small",
      render: () => (
        <>
          <SectionHeading
            kicker="How It Started"
            title="We set out to design an AI solution for Italy's waste crisis — and spent the first weeks systematically killing every idea we were excited about."
          />
          <Prose>
            <p>
              Early research mapped the full waste lifecycle — generation, collection, sorting, processing, reintegration — and produced two ideas that looked promising on paper and collapsed under scrutiny.
            </p>
          </Prose>
          <Timeline
            items={[
              {
                title: "Smart bins — killed",
                tone: "warning",
                body: (
                  <Prose>
                    <p>AI-enabled bins that sort waste and feed data to city infrastructure. <em>It worked on paper.</em> In practice it needed buy-in from municipalities, waste companies, and citizens simultaneously — a <strong>rollout problem, not a design problem.</strong> And the AI was decorative: sensors and pattern matching would do the same job.</p>
                  </Prose>
                ),
              },
              {
                title: "DIY reuse projects — killed",
                tone: "warning",
                body: (
                  <Prose>
                    <p>Composting guides, upcycling recipes, creative reuse prompts. It addressed <em>guilt</em>, not behavior. A user might feel better about last week's wasted spinach while <strong>still overbuying next week's.</strong> The intervention landed after the damage — with no mechanism to change the habit.</p>
                  </Prose>
                ),
              },
            ]}
          />
          <Prose>
            <p>
              The finding that redirected everything: <strong>people feel responsible for waste but never see the direct result of their effort.</strong> Italy's waste infrastructure is well-run. The volume is the problem — and volume is created upstream, before any bin is involved.
            </p>
          </Prose>
          <Figure
            src={cover}
            frame="soft"
            alt="Waste sector breakdown pie chart showing food at 44% of household waste"
            caption="Food was the worst-performing waste category. Households are its biggest source — ahead of restaurants, retail, and manufacturing."
          />

          <Prose>
            <p>
              So we moved upstream — from disposal all the way back to the shopping aisle.
            </p>
          </Prose>
        </>
      ),
    },
    {
      // id: "reframing",
      // label: "Reframing",
      size: "small",
      render: () => (
        <>
          <SectionHeading
            kicker="Reframing"
            title="A single chain of five whys moved the entire project upstream — from the bin to the shopping list."
          />
          <Prose>
            <p>
              We kept asking why. Five times, in sequence — and each answer dissolved one assumption and revealed a sharper one underneath.
            </p>
            <p>
              <em>Why do people waste food?</em> They overbuy. <em>Why do they overbuy?</em> No plan, no list, no sense of what's already home. <em>Why don't they make a list?</em> Because <strong>it's effortful, time-consuming, and nobody wants to do it alone.</strong>
            </p>
            <p>
              That last answer changed everything. The waste wasn't a disposal problem or even a food problem — it was a <strong>planning problem.</strong> And planning problems have friction at their root. Remove the friction, and most of the waste downstream takes care of itself.
            </p>
          </Prose>
          <Figure
            src={cover}
            frame="soft"
            alt="5-Whys reframing diagram showing the chain from food waste to shopping friction"
            caption="The pivot from waste management to shopping friction. Fix the planning step and most downstream waste triggers disappear."
          />
          <PullQuote
            size="md"
            quote="How might we help families shop without excess cognitive load — making the experience more enjoyable and nudging them toward environmentally conscious choices?"
            role="How Might We"
          />
        </>
      ),
    },
    {
      id: "research",
      label: "Research",
      size: "small",
      render: () => (
        <>
          <SectionHeading
            kicker="Research"
            title="Before designing anything, we mapped where the friction actually lived — then benchmarked every product that claimed to solve it."
          />

          <Prose>
            <h3>User Journey Mapping</h3>
            <p>
              We shadowed a shopper through every stage — <strong>Decision → Shopping → Consuming → Disposal</strong> — not to confirm what we already suspected, but to find the moments where effort quietly overwhelms intent and people just stop trying.
            </p>
          </Prose>
          <Figure
            src={cover}
            frame="soft"
            alt="User journey map across four shopping stages showing pain point clusters in Decision and Consuming"
            caption="Pain points clustered heavily in the Decision and Consuming stages — before and after the store, not inside it."
          />
          <Prose>
            <p>
              The friction wasn't in the aisle. It was in the kitchen the night before — <em>what do we already have, how much do we need, what are we actually going to cook this week?</em> And again after shopping, staring at an expiry date and trying to remember when you bought it. <strong>Those two moments are where the waste begins.</strong>
            </p>
            <h3>Benchmarking</h3>
            <p>
              We mapped five existing apps against the four things that actually matter: <strong>collaboration, AI involvement, inventory tracking, waste stats.</strong> Not to find inspiration — to find what nobody had done yet.
            </p>
          </Prose>
          <Figure
            src={cover}
            frame="soft"
            alt="Benchmarking matrix comparing five grocery apps across collaboration, AI, inventory, and stats tracking"
            caption="No existing product combined all four pillars. Nathan is the only concept with meaningful AI at its core."
          />
          <Prose>
            <p>
              Every app handled one, maybe two. Nobody had connected all four into a single experience — and nobody had made AI the thing that actually drives the list, not just a search bar with a smarter autocomplete. <strong>That gap was the brief.</strong>
            </p>
          </Prose>
        </>
      ),
    },
    {
      id: "service",
      label: "Service Idea",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="Service Idea"
            title="Nathan works in the background — learning what your household actually buys, and quietly making your next list more honest than your last one."
            className="mx-auto max-w-3xl"
          />
          <Prose className="mx-auto max-w-3xl">
            <p>Nathan is a mobile app built around one idea: that most families already know roughly what they waste, they just have no tool that does anything about it. So rather than adding another dashboard to look at, we designed something that acts on that knowledge for you — learning from what you buy, what you finish, and what ends up in the bin, and adjusting your next shopping list accordingly.</p>
          </Prose>
          <Figure
            src={cover}
            frame="soft"
            alt="Three Nathan app screens side by side showing the Home, Inventory, and Shopping List views"
            caption="Home · Inventory · Shopping List — three screens, one loop."
          />
          <Prose className="mx-auto max-w-3xl">
            <p>The app is built around three connected pillars. Each one handles a different moment in the cycle — planning before the shop, tracking after it, and learning from what actually gets used.</p>
          </Prose>
          <ProductPillars />
        </>
      ),
    },
    {
      size: "media",
      render: () => (
        <Figure
          src={cover}
          frame="soft"
          caption="New user journey map"
        />
      ),
    },
    {
      id: "ai",
      label: "AI Architecture",
      size: "fill",
      render: () => (
        <>
          <SectionHeading
            kicker="AI Architecture"
            title="Designing the AI meant designing the data first — what the models need, where it comes from, and what happens when it's missing."
            className="mx-auto max-w-3xl"
          />
          <Prose className="mx-auto max-w-3xl">
            <p>
              Two models work in sequence. The first turns a receipt photograph into structured data. The second uses that data — accumulated over weeks of shopping — to predict what the household should buy next, and gradually adjusts quantities based on what actually got consumed.
            </p>
          </Prose>

          <Figure
            src={cover}
            frame="soft"
            alt="Classification AI pipeline diagram showing the flow from receipt photo through OCR, string matching, and ChatGPT fallback to a structured purchased list"
            caption="The classification pipeline turns a receipt photo into a structured inventory update — with a ChatGPT fallback when OCR abbreviations can't be matched."
          />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <ScanLine className="h-10 w-10 text-muted-foreground" />
              <Prose>
                <h3>Classification — from receipt photo to structured data</h3>
                <p>
                  Before Nathan can predict anything, it needs to know what you actually bought. That starts with a photograph of the receipt. We chose Mindee over training our own OCR model because the cost-benefit was clear — a pre-trained, receipt-specialized service let us focus the AI work where it actually mattered: the forecasting layer.
                </p>
              </Prose>
            </div>
            <Timeline
              items={[
                { title: "📷 Capture", body: "The user photographs the receipt after shopping." },
                { title: "🔍 OCR extraction", body: "Mindee returns the market name, date, SKU abbreviations, quantities, and prices." },
                { title: "🔗 String matching", body: "Abbreviated SKUs are matched against Nathan's standardized product table using string alignment." },
                { title: "🤖 ChatGPT fallback", body: "When no confident match exists, ChatGPT resolves the abbreviation and presents a best-effort match for the user to confirm.", tone: "info" },
                { title: "✅ Output", body: "A clean, categorized list added directly to inventory. No manual entry.", tone: "success" },
              ]}
            />
          </div>


          <Figure
            src={cover}
            frame="soft"
            alt="LSTM forecasting model flow diagram showing inputs of shopping history and waste feedback producing a predicted next shopping list"
            caption="The LSTM model learns from purchase history and waste feedback, gradually nudging quantities to close the gap between what users buy and what they actually consume."
          />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <BrainCircuit className="h-10 w-10 text-muted-foreground" />
              <Prose>
                <h3>Forecasting — closing the waste gap over time</h3>
                <p>
                  The forecasting layer is where Nathan actually changes behavior. I specified an LSTM model because the task is inherently sequential — next week's shopping list depends on patterns across prior lists and the time between them, not a single snapshot. The model doesn't just predict what you'll buy; it gradually corrects for what you waste.
                </p>
              </Prose>
            </div>
            <Timeline
              items={[
                { title: "📥 Input", body: "Shopping history from the classification pipeline, plus waste feedback — the percentage of each item actually consumed." },
                { title: "📋 Output", body: "A predicted next shopping list with items, quantities, and estimated purchase timing — refreshed every time you open the app." },
                { title: "🔄 The learning loop", body: "Every waste report logs the gap between suggested and consumed. Over time, quantities nudge down to close it. The list just gets more accurate.", tone: "success" },
              ]}
            />
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            <ShieldCheck className="h-10 w-10 text-muted-foreground" />
            <Prose>
              <h3>Data fail-safes</h3>
              <p>
                Every AI dependency in the system was paired with a documented fallback. An AI feature that silently breaks on missing data is worse than no AI at all — especially on day one, before the model has learned anything about your household.
              </p>
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
              title="From a prioritized backlog to a tested hi-fi prototype in six stages."
            />
            <Prose>
              <p>
                Once the problem and solution were clear, the design process moved through six structured stages — from deciding what to build first, to validating it with real households. Each stage fed directly into the next.
              </p>
            </Prose>
          </div>
          <Timeline
            items={[
              {
                title: "⚖️ Impact / Effort Matrix",
                body: "User stories sorted by impact and effort to define v1 scope. Quick wins shipped first; major projects phased.",
                // tags: ["Prioritization"],
              },
              {
                title: "🗺️ Information Architecture",
                body: "Three-pillar IA finalized: Home, Inventory, Household — everything reachable in two taps.",
                // tags: ["UX"],
              },
              {
                title: "✏️ Sketches",
                body: "Paper sketches to explore the IA quickly, iterate without cost, and align the team before moving to digital.",
                // tags: ["Ideation"],
              },
              {
                title: "🔲 Wireframes",
                body: "Mid-fidelity screens applying Miller's Law, Hick's Law, Fitts's Law, and Selective Attention to every layout decision.",
                // tags: ["UX Psychology", "Figma"],
              },
              {
                title: "🎨 Hi-Fi Prototype",
                body: "Full prototype built on the custom design system — 81 screens, 33 components.",
                // tags: ["Design System", "Figma"],
              },
              {
                title: "🧪 User Testing",
                body: "Three methods with 4 participants across age groups. Findings drove a round of targeted redesigns before the final presentation.",
                // tags: ["5-sec test", "SEQ", "PREMO"],
                tone: "success",
              },
            ]}
          />
        </div>
      ),
    },
    {
      // id: "IA",
      // label: "IA",
      size: "fill",
      render: () => (
        <div className="flex flex-col gap-16">
          <ProcessStep
            figureCols={8}
            justifyEnd
            step="⚖️"
            title="Impact / Effort Matrix"
            description={
              <Prose>
                <p>We had more ideas than time, so before touching Figma we forced every user story onto a 2×2 — <strong>impact against effort</strong>. What landed in the top-left shipped first. What landed in the bottom-right got killed. It was uncomfortable, and it was <em>the right call</em>.</p>
              </Prose>
            }
            figure={{
              src: cover,
              alt: "Impact / Effort Matrix diagram with user stories plotted by impact and effort",
              // caption: "User stories sorted into Quick Wins, Major Projects, Fill-ins, and Hard Slogs.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
          <ProcessStep
            figureCols={8}
            justifyEnd
            reverse
            step="🗺️"
            title="Information Architecture"
            description={
              <Prose>
                <p>With scope defined, we needed a skeleton before screens. <strong>Three pillars — Home, Inventory, Household</strong> — everything reachable in two taps. <em>Locking the IA first</em> meant no screen was ever drawn without a clear place to live.</p>
              </Prose>
            }
            figure={{
              src: cover,
              alt: "Nathan information architecture diagram showing three-pillar structure",
              // caption: "Home · Inventory · Household — the three-pillar IA that shaped every screen that followed.",
              frame: "soft",
              aspect: "aspect-[3/2]",
            }}
          />
        </div>
      ),
    },
  ],
}
