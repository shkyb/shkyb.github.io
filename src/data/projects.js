// Single source of truth for all projects.
// Consumed by: homepage WorkSection, /projects page, NextProject component.
//
// Image convention — no paths stored here, derived from id at render time:
//   Logo:     /images/logos/{id}.webp
//   Cover:    /images/cover/{id}.webp
//
// accent: primary brand color for card highlights (project title, kicker accents).
//         If null, components fall back to the global foreground token.

export const projects = [
  {
    id: "d-heart",
    title: "D-Heart Pro",
    client: "Politecnico di Milano",
    role: "UX Researcher & Design System Lead",
    context: "academic",           // "academic" | "industry" | "freelance" | "personal"
    sector: "HealthTech",
    period: { from: "Mar 2024", to: "Jun 2024" },
    type: ["ux", "research", "product"],  // "ux" | "industrial" | "product" | "research" | "speculative"
    accent: "#E8601A",
    headline: "A portable ECG redesigned around the *context* nurses actually work in",
    description:
      "Four months redesigning D-Heart's portable ECG ecosystem for nurses. From expert evaluation to in-context usability testing at a real nursing home — final SEQ 6.25/7.",
    overview:
      "A full redesign of the D-Heart portable ECG device and its companion app for nurses in nursing-home settings. Owned the design system end-to-end and conducted usability research — card sorting, tree testing, and KPI-based testing — achieving a final SEQ of 6.25/7.",
    tags: ["UX Research", "Usability Testing", "Design System", "Healthcare"],
    team: ["shakib", "beyza", "filippo", "marjan"],
    href: "/projects/d-heart",
    status: "published",           // "published" | "coming-soon"
  },

  {
    id: "nathan",
    title: "Nathan",
    client: "Politecnico di Milano",
    role: "AI/UX Designer",
    context: "academic",
    sector: "AI / Sustainability",
    period: { from: "Mar 2024", to: "Jun 2024" },
    type: ["ux", "research", "speculative"],
    accent: "#599A08",
    headline: "Food waste isn't a *behaviour* problem — so we designed the AI around the real one",
    description:
      "Italian households waste 65 kg of food per person yearly. We designed an AI grocery app — receipt-scanning + LSTM forecasting — that quietly rewrites your next list. Owned the AI architecture and design system.",
    overview:
      "Nathan is a conceptual mobile app exploring how AI could close the gap between what Italian households intend to buy and what they actually waste — pairing receipt-scanning classification with an LSTM forecasting model to progressively rewrite your shopping list.",
    tags: ["AI/UX", "AI Architecture", "Design System", "Sustainability"],
    team: ["shakib", "filippo", "marjan", "dilara", "erika"],
    href: "/projects/nathan",
    status: "published",
  },

  {
    id: "ita-airways",
    title: "ITA Airways",
    client: "Politecnico di Milano",
    role: "UX Designer · Ergonomics & Accessibility",
    context: "academic",
    sector: "Travel / Aviation",
    period: { from: "Oct 2024", to: "Jan 2025" },
    type: ["ux", "research"],
    accent: "#306fc8",
    headline: "ITA's flow treated connected booking decisions as *separate* ones — so we rebuilt it",
    description:
      "Ergonomics-driven redesign of Italy's flagship carrier. Heuristic audit, 29-click task analysis, and 4-competitor benchmark led the rebuild — accessibility tested against WCAG, APCA, and 4 color-blindness simulations.",
    overview:
      "A semester-long usability project auditing, benchmarking, and redesigning the ITA Airways website — rebuilding the three core flows (flight search, benefits, offers) around a flatter IA and a more predictable interaction model. Design system built on Moon and extended with ITA-specific patterns, tested against WCAG AA/AAA, APCA, and four color-blindness conditions.",
    tags: ["Ergonomics", "Usability Testing", "Information Architecture", "Accessibility"],
    team: ["shakib", "marjan", "ilaria", "mahshad"],
    href: "/projects/ita-airways",
    status: "published",
  },

  {
    id: "mazhan",
    title: "Mazhan LTE Modem-Router",
    client: "Faratech",
    role: "Lead Industrial Designer",
    context: "industry",
    sector: "Consumer Electronics",
    period: { from: "Oct 2020", to: "Dec 2022" },
    type: ["industrial", "product"],
    accent: "#06ae4e",
    headline: "Most routers disappear behind furniture. Mazhan was *sculpted to command* the room.",
    description:
      "End-to-end product design for Faratech — desert-wave form in dual-texture all-black, a Monolith-inspired unboxing, a companion app, and a landing page with a KeyShot video teaser. IDA Bronze in Packaging + Honorable Mention in Product Design, 2023.",
    overview:
      "Mazhan is a premium LTE modem-router designed to be seen, not hidden. Owned the full product experience — industrial form, packaging, companion app, and landing page — while collaborating closely with engineers on mass production.",
    tags: ["Industrial Design", "Packaging Design", "Mass Production", "Consumer Electronics"],
    team: ["shakib"],
    href: "/projects/mazhan",
    status: "coming-soon",
  },

  {
    id: "cohub",
    title: "CoHub",
    client: "Politecnico di Milano",
    role: "Interaction Designer",
    context: "academic",
    sector: "Speculative / Installation",
    period: { from: "Oct 2024", to: "Jan 2025" },
    type: ["research", "speculative"],
    accent: "#3E774A",
    headline: "An installation that asks what cities could look like if humans weren't the *only designers*",
    description:
      "Interactive installation exhibited at Milan Design Week 2025 — a more-than-human response to urban heat island effect. Participants insert pegs representing non-human entities, gradually transforming a desolate building into a biodiverse ecosystem. Arduino + TouchDesigner.",
    overview:
      "Co-Hub is an interactive installation exploring more-than-human city-making — exhibited at Milan Design Week 2025, Fabbrica del Vapore. Participants insert colored pegs representing non-human entities into a building structure, triggering a video transformation from a desolate overheated city to a thriving multi-species ecosystem.",
    tags: ["Speculative Design", "Interactive Installation", "More-than-Human Design", "Physical Computing"],
    team: ["shakib", "alice", "mahshad", "ilaria", "marika"],
    href: "/projects/cohub",
    status: "coming-soon",
  },

  {
    id: "phil",
    title: "Phil",
    client: "Rehabilia Technologies",
    role: "Interaction Design Intern",
    context: "industry",
    sector: "HealthTech / HRI",
    period: { from: "Sep 2025", to: "Oct 2025" },
    type: ["ux", "research"],
    accent: "#df64a5",
    headline: "Turning a rehabilitation robot into a *social companion* for autistic children",
    description:
      "PhiCube started as a pediatric rehabilitation robot. Phil prototyped its social evolution — extending habilitation into behavioral and social interaction skills for autistic children. Two Wizard-of-Oz sessions with 8 children aged 4-9 at Fabula Clinic.",
    overview:
      "Phil is the social companion evolution of PhiCube, Rehabilia's pediatric rehabilitation device. Prototyped expressive screen-based facial interactions and ran two rounds of Wizard-of-Oz testing with 8 autistic children — key insight: Phil as a mediating third presence between therapist and child, not an autonomous social agent.",
    tags: ["Human-Robot Interaction", "Interaction Design", "User Research", "HealthTech"],
    team: ["shakib", "marjan"],
    href: "/projects/phil",
    status: "coming-soon",
  },
];
