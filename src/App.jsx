import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import CaseStudyPage from "./pages/Projects/CaseStudyPage"
import CaseStudyBlocksPage from "@/pages/Projects/CaseStudyBlocksPage"
import CaseStudyBlocksDescribedPage from "./pages/Projects/CaseStudyBlocksDescribedPage"


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/projects/blocks" element={<CaseStudyBlocksPage />} />
        <Route path="/projects/blocks-described" element={<CaseStudyBlocksDescribedPage />} />
      </Routes>
    </>
  )
}