import { NavLink } from "react-router-dom"

export default function NavItem({ text, count = null, icon = null, to = null, href = null, onClick }) {
  const baseClass =
    "inline-flex items-center gap-2 text-(--project-muted-foreground,var(--color-slate-700)) hover:text-(--project-foreground,var(--color-slate-950)) transition-colors duration-200 ease-out uppercase"

  const content = (
    <>
      <span>{text}</span>
      {count !== null && (
        <sup className="text-xs font-mono text-(--project-muted-foreground,var(--color-slate-500))">{count}</sup>
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
          [baseClass, isActive ? "font-medium" : ""].join(" ")
        }
        style={({ isActive }) =>
          isActive
            ? { color: "var(--project-kicker, var(--project-primary, var(--color-slate-950)))" }
            : undefined
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