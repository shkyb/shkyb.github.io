import { useState } from "react";
import NavItem from "./NavItem";
import { HiBars3, HiXMark, HiMiniArrowUpRight, HiOutlineBriefcase } from "react-icons/hi2";
import { RiBehanceFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full  py-3 bg-stone-50 border-b border-stone-200 fixed top-0 left-0 z-50">
      <div className="max-w-screen-2xl px-6 md:px-12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-normal uppercase text-stone-900  hover:text-blue-600">
            <a href="./" className="inline-flex gap-2">
              <div className="h-6 w-6 p-0.5">{<HiOutlineBriefcase size={20}/>}
              </div>Shakib Alipour
            </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 ">
          <NavItem text="Projects" count={6} href="#projects" />
          <NavItem text="About" href="#about" />
          <NavItem text="Résumé" icon={<HiMiniArrowUpRight />} href="#resume" />
        </ul>

        {/* Socials */}
        <ul  className="hidden md:flex space-x-6">
            <NavItem icon={<RiGithubFill size={20} />} href="https://github.com/shkyb" />                     
            <NavItem icon={<RiBehanceFill size={20} />} href="https://behance.net/shakib-alipour" />
            <NavItem icon={<RiLinkedinFill size={20} />} href="https://linkedin.com/in/shakib-alipour" />
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-stone-900 font-medium px-4">
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
