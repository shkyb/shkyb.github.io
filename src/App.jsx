import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import PageTransition from "./components/PageTransition"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import CaseStudyPage from "./pages/Projects/CaseStudyPage"
import CaseStudyBlocksDescribedPage from "./pages/Projects/CaseStudyBlocksDescribedPage"
import NotFoundPage from "./pages/NotFoundPage"


export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if (window.lenis) window.lenis.scrollTo(0, { immediate: true })
          else window.scrollTo(0, 0)
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/projects/blocks-described" element={<PageTransition><CaseStudyBlocksDescribedPage /></PageTransition>} />
          <Route path="/projects/:slug" element={<PageTransition><CaseStudyPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
