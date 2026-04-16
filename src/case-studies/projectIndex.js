// src/case-studies/projectIndex.js

import dHeartCover from "@/case-studies/d-heart/assets/cover.webp"
import futureCover from "@/case-studies/demo/assets/cover.webp"

export const projectIndex = [
  {
    slug: "d-heart",
    href: "/projects/d-heart",
    title: "D-Heart",
    description: "...",
    image: dHeartCover,
    imageAlt: "D-Heart preview",
    tags: ["UX Design", "Healthcare", "Mobile"],
    isPublished: true,
  },
  {
    slug: "demo",
    href: "/projects/demo",
    title: "Demo Case",
    description: "...",
    image: futureCover,
    imageAlt: "Future case preview",
    tags: ["UX Design"],
    isPublished: true,
  },
  {
    slug: "nathan",
    href: "/projects/nathan",
    title: "Nathan",
    description: "...",
    image: null,
    imageAlt: "Nathan preview",
    tags: [],
    isPublished: false,
  },
]