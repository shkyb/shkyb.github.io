import React from "react"

// import logo from "./assets/logo.png"
// import cover from "./assets/cover.webp"

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
  title: "",
  subtitle: "",
  tags: [],
  // logo,
  // cover,
  overview: {
    description: ``,
    meta: [
      { label: "Role", value: "" },
      { label: "Duration", value: "" },
      { label: "Team", value: "" },
      { label: "Tools", value: "" },
    ],
    cta: [],
  },
  sections: [
    {
      id: "section-1",
      label: "Section 1",
      render: () => (
        <Section id="section-1">
          <Container>
            <SectionHeading
              kicker=""
              title=""
              subtitle=""
            />
          </Container>
        </Section>
      ),
    },
  ],
}
