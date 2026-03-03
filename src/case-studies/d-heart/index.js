import logo from "./assets/logo.png"
import cover from "./assets/cover.webp"

export const caseMeta = {
  title: "D-Heart",
  logo: { src: logo, alt: "D-Heart logo" },
  headline:
    "Designing a faster, safer way for clinicians to review cardiac events.",
  tags: ["UX", "Healthcare", "Mobile"],
  cover: { src: cover, alt: "D-Heart screens" },

  overview:
    "Short recruiter-focused summary explaining what it is, who it serves, and measurable impact.",

  links: [
    { label: "Prototype", href: "https://..." },
  ],

  meta: [
    { label: "Role", value: "UX Designer" },
    { label: "Team", value: "3 Designers" },
    { label: "Year", value: "2024" },
    { label: "Tools", value: "Figma, Miro" },
  ],
}

export const sections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "goals", label: "Goals" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
]