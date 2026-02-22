import { Link } from "react-router-dom"

export default function NavLogo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 uppercase text-slate-700 hover:text-slate-950 transition-colors">
      <img
        src="/favicon/favicon.svg"
        alt="Shakib logo"
        className="w-6 h-6"
      />
      <span>Shakib Alipour</span>
    </Link>
  )
}