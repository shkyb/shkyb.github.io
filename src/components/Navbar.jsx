import { useState } from "react"
import NavItem from "./navItem"
import NavLogo from "./navLogo"

import { HiBars3, HiXMark, HiMiniArrowUpRight } from "react-icons/hi2"
import { RiBehanceFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-50 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto w-full max-w-screen-2xl px-6 md:px-12 h-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLogo text="Shakib Alipour" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavItem text="Home" to="/" />
          <NavItem text="About" to="/about" />
          <NavItem text="Projects" to="/projects" count={7} />
          <NavItem
            text="Résumé"
            href="https://docs.google.com/document/d/1o0fNXL66ROGPvPpEJDpwa3XDLUZQflqOfrZEOSSTsmI/edit?usp=sharing"
            icon={<HiMiniArrowUpRight />}
          />
        </div>
        {/* Socials */}
        <div className="hidden md:flex items-center gap-3 pl-2 border-l border-slate-200">
          <NavItem href="https://github.com/shkyb" icon={<RiGithubFill size={20} />} />
          <NavItem href="https://behance.net/shakib-alipour" icon={<RiBehanceFill size={20} />} />
          <NavItem href="https://linkedin.com/in/shakib-alipour" icon={<RiLinkedinFill size={20} />} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-screen-2xl px-6 py-4 flex flex-col gap-4">
            <NavItem text="Home" to="/" onClick={closeMenu} />
            <NavItem text="About" to="/about" onClick={closeMenu} />
            <NavItem text="Projects" to="/projects" onClick={closeMenu} />

            <NavItem
              text="CV"
              href="https://docs.google.com/document/d/1o0fNXL66ROGPvPpEJDpwa3XDLUZQflqOfrZEOSSTsmI/edit?usp=sharing"
              icon={<HiMiniArrowUpRight />}
              onClick={closeMenu}
            />

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <NavItem href="https://github.com/shkyb" text="GitHub" icon={<RiGithubFill />} />
              <NavItem href="https://behance.net/shakib-alipour" text="Behance" icon={<RiBehanceFill />} />
              <NavItem href="https://linkedin.com/in/shakib-alipour" text="LinkedIn" icon={<RiLinkedinFill />} />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}