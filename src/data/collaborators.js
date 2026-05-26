/**
 * Collaborator registry — all people Shakib has worked with on projects.
 * Add a new entry per person; reference by id in case study meta.
 *
 * Schema: { id, name, href, avatar? }
 * - avatar: path to image (public/ or imported asset). Omit or set null for initials fallback.
 */
export const collaborators = {
  shakib: {
    id: "shakib",
    name: "Shakib Alipour",
    href: "https://www.linkedin.com/in/shakib-alipour/",
    avatar: "/favicon/favicon.svg",
  },
  beyza: {
    id: "beyza",
    name: "Beyza Artunc",
    href: "https://www.linkedin.com/in/beyzaartunc/",
    avatar: null,
  },
  filippo: {
    id: "filippo",
    name: "Filippo Randon",
    href: "https://www.linkedin.com/in/filippo-randon-b25466180/",
    avatar: null,
  },
  marjan: {
    id: "marjan",
    name: "Marjan Mehrabi",
    href: "https://www.linkedin.com/in/marjan-mehrabi/",
    avatar: null,
  },
  dilara: {
    id: "dilara",
    name: "Dilara Tanriöven",
    href: "https://www.linkedin.com/in/dilara-tanrioven-2b6028211/",
    avatar: null,
  },
  ilaria: {
    id: "ilaria",
    name: "Ilaria Torcolacci",
    href: "https://www.linkedin.com/in/ilaria-torcolacci-designer/",
    avatar: null,
  },
  mahshad: {
    id: "mahshad",
    name: "Mahshad Mousavinia",
    href: "https://www.linkedin.com/in/mahshad-mousavinia-3bb829199/",
    avatar: null,
  },
  erika: {
    id: "erika",
    name: "Erika Caffo",
    href: "https://drive.google.com/file/d/1mbodgFZpIu_22mVmBayxDRq9ETFdayCk/view?usp=share_link",
    avatar: null,
  },
}

/** Returns initials from a full name — "Beyza Artunc" → "BA" */
export function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("")
}
