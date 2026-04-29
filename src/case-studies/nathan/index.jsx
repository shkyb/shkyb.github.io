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
      id: "research",
      label: "Research",
      size: "small",
      render: () => (
        <>
          <SectionHeading
            kicker="Research"
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
  ],
}
