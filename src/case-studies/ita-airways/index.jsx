import React from "react"

import { Prose } from "@/components/case/layout/Prose"

export const itaAirwaysCase = {
  slug: "ita-airways",

  caseMeta: {
    logo: null,
    title: "ITA Airways",
    headline: "Rethinking the booking flow of Italy's national airline.",
    tags: ["UX Design", "Usability", "Design Systems", "Booking Flow", "Web"],
    cover: null,
    overview: [
      <Prose key="p1">
        <p>
          A semester-long usability project at Politecnico di Milano, where our team of four
          audited, benchmarked, and redesigned the ITA Airways website — Italy's flagship carrier.
          We evaluated the site against Nielsen's ten heuristics and four direct competitors,
          then rebuilt the three most-used flows (flight search, benefits selection, and offers
          discovery) from the ground up around a flatter information architecture and a more
          predictable interaction model.
        </p>
      </Prose>,
      <Prose key="p2">
        <p>
          My focus was the design system: built on top of{" "}
          <a href="https://moon.io" target="_blank" rel="noopener noreferrer">Moon</a>, extended
          with ITA-specific patterns — the price-comparison calendar, the per-passenger baggage
          selector, the offers map — and tested against WCAG AA/AAA, APCA, and four
          color-blindness simulations to make the most color-critical screens accessible to
          every user.
        </p>
      </Prose>,
    ],
    links: [],
    meta: [
      {
        label: "Role",
        value: "UX Designer · Design System Lead",
      },
      {
        label: "Team",
        value: [
          { name: "Marjan Mehrabi", href: "https://www.linkedin.com/in/marjan-mehrabi/" },
          { name: "Ilaria Torcolacci", href: "#" },
          { name: "Mahshadossadat Mousavinia", href: "#" },
          { name: "& Me" },
        ],
      },
      {
        label: "Timeline",
        value: "Academic project · 1 semester · AY 2024/2025",
      },
      {
        label: "Deliverables",
        value:
          "Heuristic audit · Competitor benchmark · Personas · Wireframes · Hi-fi prototype · Design system",
      },
      {
        label: "Course",
        value: "Ergonomics Applied to the Design of Usable Web Pages and Apps — Politecnico di Milano",
      },
    ],
  },

  sections: [],
}
