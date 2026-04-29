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
              { value: "2",  label: "AI models architected" },
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
  ],
}
