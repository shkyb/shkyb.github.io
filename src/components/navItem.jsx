import { NavLink } from "react-router-dom"

export default function NavItem({ text, count = null, icon = null, to = null, href = null, onClick }) {
  const baseClass =
    "inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors uppercase"

  const content = (
    <>
      <span>{text}</span>
      {count !== null && (
        <sup className="text-xs text-slate-500">{count}</sup>
      )}
      {icon && <span className="text-base">{icon}</span>}
    </>
  )

  // Internal route
  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          [
            baseClass,
            isActive ? "text-slate-950" : "",
          ].join(" ")
        }
      >
        {content}
      </NavLink>
    )
  }

  // External link fallback
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      className={baseClass}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {content}
    </a>
  )
}