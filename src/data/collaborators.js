/**
 * Collaborator registry — all people Shakib has worked with on projects.
 * Add a new entry per person; reference by id in case study meta.
 *
 * Avatar images: drop public/collaborators/<id>.webp — resolved automatically.
 * Schema: { id, name, href }
 */
export const collaborators = {
  shakib: {
    id: "shakib",
    name: "Shakib Alipour",
    href: "https://www.linkedin.com/in/shakib-alipour/",
  },
  beyza: {
    id: "beyza",
    name: "Beyza Artunc",
    href: "https://www.linkedin.com/in/beyzaartunc/",
  },
  filippo: {
    id: "filippo",
    name: "Filippo Randon",
    href: "https://www.linkedin.com/in/filippo-randon-b25466180/",
  },
  marjan: {
    id: "marjan",
    name: "Marjan Mehrabi",
    href: "https://www.linkedin.com/in/marjan-mehrabi/",
  },
  dilara: {
    id: "dilara",
    name: "Dilara Tanriöven",
    href: "https://www.linkedin.com/in/dilara-tanrioven-2b6028211/",
  },
  ilaria: {
    id: "ilaria",
    name: "Ilaria Torcolacci",
    href: "https://www.linkedin.com/in/ilaria-torcolacci-designer/",
  },
  mahshad: {
    id: "mahshad",
    name: "Mahshad Mousavinia",
    href: "https://www.linkedin.com/in/mahshad-mousavinia-3bb829199/",
  },
  erika: {
    id: "erika",
    name: "Erika Caffo",
    href: "https://drive.google.com/file/d/1mbodgFZpIu_22mVmBayxDRq9ETFdayCk/view?usp=share_link",
  },
  alice: {
    id: "alice",
    name: "Alice Gaudino",
    href: "https://www.linkedin.com/in/alice-gaudino/",
  },
  marika: {
    id: "marika",
    name: "Marika Latini",
    href: "https://www.linkedin.com/in/marika-latini-68ab17265/",
  },
}

/** Returns initials from a full name — "Shakib Alipour" → "SA" */
export function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("")
}
