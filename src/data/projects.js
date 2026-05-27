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
    title: "D-Heart",
    client: "Politecnico di Milano",
    role: "UX Researcher & Design System Lead",
    context: "academic",           // "academic" | "industry" | "freelance" | "personal"
    sector: "HealthTech",
    period: { from: "Sep 2023", to: "Jan 2024" },
    type: ["ux", "research"],      // "ux" | "industrial" | "research" | "speculative"
    accent: "#E8601A",
    headline: "Redesigning *trust* into a portable ECG ecosystem",
    description:
      "Led UX research and design system for a portable ECG device and companion app — tested with 63 participants across three languages.",
    overview:
      "A full redesign of the D-Heart portable ECG device and its companion app for nurses in nursing-home settings. Owned the design system end-to-end and led multilingual usability research — card sorting, tree testing, and KPI-based testing — achieving a final SEQ of 6.25/7.",
    tags: ["UX Research", "Usability Testing", "Design System", "HealthTech"],
    team: ["shakib", "beyza", "filippo", "marjan"],
    href: "/projects/d-heart",
    status: "published",           // "published" | "coming-soon"
  },

  // {
  //   id: "nathan",
  //   title: "Nathan",
  //   client: "Politecnico di Milano",
  //   role: "AI Architecture Lead & Design System Lead",
  //   context: "academic",
  //   sector: "AI / Consumer",
  //   period: { from: "Mar 2024", to: "Jun 2024" },
  //   type: ["ux", "research"],
  //   accent: "#599A08",
  //   headline: "",
  //   description: "",
  //   overview: "",
  //   tags: [],
  //   team: ["shakib", "beyza", "filippo", "marjan", "dilara"],
  //   href: "/projects/nathan",
  //   status: "coming-soon",
  // },

  // {
  //   id: "ita-airways",
  //   title: "ITA Airways",
  //   client: "Politecnico di Milano",
  //   role: "UX Designer & Design System Lead",
  //   context: "academic",
  //   sector: "Travel / Aviation",
  //   period: { from: "Oct 2024", to: "Jan 2025" },
  //   type: ["ux", "research"],
  //   accent: "#306fc8",
  //   headline: "",
  //   description: "",
  //   overview: "",
  //   tags: [],
  //   team: ["shakib", "marjan", "ilaria", "mahshad"],
  //   href: "/projects/ita-airways",
  //   status: "coming-soon",
  // },

  // {
  //   id: "mazhan",
  //   title: "Mazhan",
  //   client: "Farassoo Tech",
  //   role: "Lead Industrial Designer",
  //   context: "industry",
  //   sector: "Consumer Electronics",
  //   period: { from: "Jan 2021", to: "Aug 2023" },
  //   type: ["industrial"],
  //   accent: null,                  // define when Mazhan color system is ready
  //   headline: "",
  //   description: "",
  //   overview: "",
  //   tags: [],
  //   team: ["shakib"],
  //   href: "/projects/mazhan",
  //   status: "coming-soon",
  // },

  // {
  //   id: "cohub",
  //   title: "CoHub",
  //   client: "Politecnico di Milano",
  //   role: "Interaction Designer",
  //   context: "academic",
  //   sector: "Speculative / Installation",
  //   period: { from: "Oct 2024", to: "Apr 2025" },
  //   type: ["research", "speculative"],
  //   accent: null,                  // define when CoHub color system is ready
  //   headline: "",
  //   description: "",
  //   overview: "",
  //   tags: [],
  //   team: ["shakib", "ilaria", "mahshad"],
  //   href: "/projects/cohub",
  //   status: "coming-soon",
  // },

  // {
  //   id: "phil",
  //   title: "Phil",
  //   client: "Rehabilia Technologies",
  //   role: "Interaction Design Intern",
  //   context: "industry",
  //   sector: "HealthTech / HRI",
  //   period: { from: "Sep 2025", to: "Oct 2025" },
  //   type: ["ux", "research"],
  //   accent: null,                  // define when Phil color system is ready
  //   headline: "",
  //   description: "",
  //   overview: "",
  //   tags: [],
  //   team: ["shakib", "marjan"],
  //   href: "/projects/phil",
  //   status: "coming-soon",
  // },
];
