import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import CaseStudyPage from "./pages/Projects/CaseStudyPage"
import CaseStudyBlocksDescribedPage from "./pages/Projects/CaseStudyBlocksDescribedPage"
import NotFoundPage from "./pages/NotFoundPage"


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/blocks-described" element={<CaseStudyBlocksDescribedPage />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}