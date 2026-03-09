import { projectIndex } from "./projectIndex"

export function getNextProject(currentSlug) {
  const currentIndex = projectIndex.findIndex((project) => project.slug === currentSlug)

  if (currentIndex === -1 || projectIndex.length < 2) return null

  const nextIndex = (currentIndex + 1) % projectIndex.length
  return projectIndex[nextIndex]

//   disable the wrap-around next project
//   if (currentIndex === -1 || currentIndex === projectIndex.length - 1) return null
//   return projectIndex[currentIndex + 1]

}


