import { Link } from "react-router-dom"

export default function NavLogo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 uppercase text-(--project-muted-foreground,var(--color-slate-700)) hover:text-(--project-foreground,var(--color-slate-950)) transition-colors duration-200 ease-out">
      <span className="relative inline-block w-6 h-6 rounded-full overflow-hidden">
        <img src="/favicon.svg" alt="Shakib logo" className="w-6 h-6 rounded-full" />
        {/* <span
          className="absolute inset-0"
          style={{ background: "var(--project-primary)", mixBlendMode: "lighten" }}
          aria-hidden="true"
        /> */}
      </span>
      <span>Shakib Alipour</span>
    </Link>
  )
}