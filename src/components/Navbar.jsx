import { useState } from "react";
import NavItem from "./navItem";
import NavLogo from "./navLogo";
import { HiBars3, HiXMark, HiMiniArrowUpRight } from "react-icons/hi2";
import { RiBehanceFill, RiLinkedinFill, RiGithubFill, RiCompasses2Line } from "react-icons/ri";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-3 bg-stone-50 border-b border-stone-200 fixed top-0 left-0 z-999">
      <div className="max-w-screen-2xl px-6 md:px-12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="md:w-4/12"> <NavLogo text="Shakib Alipour" icon={<RiCompasses2Line size={20} />} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-4/12 justify-between ">
          <NavItem text="Projects" count={6} href="#projects" />
          <NavItem text="About" href="#about" />
          <NavItem text="Résumé" icon={<HiMiniArrowUpRight />} href="https://docs.google.com/document/d/1o0fNXL66ROGPvPpEJDpwa3XDLUZQflqOfrZEOSSTsmI/edit?usp=sharing" />
        </ul>

        {/* Socials */}
        <ul className="hidden md:flex w-4/12 justify-end space-x-3">
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
        <div className="md:hidden bg-stone-50 flex flex-col w-full justify-between pt-24 pb-14 h-screen">
          <div>
            <ul className="space-y-8 text-2xl px-6">
              <NavItem text="Projects" count={6} href="./projects" />
              <NavItem text="About" href="./about" />
              <NavItem text="Résumé" icon={<HiMiniArrowUpRight />} href="https://docs.google.com/document/d/1o0fNXL66ROGPvPpEJDpwa3XDLUZQflqOfrZEOSSTsmI/edit?usp=sharing" />
            </ul>
          </div>
          <div className="w-full px-6 border-t align-middle border-stone-200">
            <ul className="align-middle mt-4 flex gap-8">
              <NavItem icon={<RiGithubFill size={24} />} href="https://github.com/shkyb" />
              <NavItem icon={<RiBehanceFill size={24} />} href="https://behance.net/shakib-alipour" />
              <NavItem icon={<RiLinkedinFill size={24} />} href="https://linkedin.com/in/shakib-alipour" />
            </ul>
          </div>
        </div>

      )}
    </nav>
  );
}
