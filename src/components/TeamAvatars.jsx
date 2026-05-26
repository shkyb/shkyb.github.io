import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { collaborators, getInitials } from "@/data/collaborators"

/**
 * TeamAvatars
 *
 * Renders an overlapping avatar stack for a list of collaborator IDs.
 * Hover shows full name tooltip. Click opens the collaborator's link.
 *
 * Usage:
 *   <TeamAvatars ids={["beyza", "filippo", "marjan", "shakib"]} />
 */
export function TeamAvatars({ ids = [], size = "md" }) {
  const members = ids.map((id) => {
    const c = collaborators[id] ?? { id, name: id, href: null }
    return { ...c, avatar: `/collaborators/${c.id}.webp` }
  })

  if (!members.length) return null

  const sizeClass = size === "sm" ? "h-7 w-7 text-[10px]" : size === "lg" ? "h-12 w-12 text-sm" : "h-9 w-9 text-xs"

  return (
    <div className="flex items-center">
      {members.map((m, i) => (
        <a
          key={m.id}
          href={m.href ?? undefined}
          target={m.href ? "_blank" : undefined}
          rel={m.href ? "noreferrer" : undefined}
          aria-label={m.name}
          className="group relative"
          style={{ marginLeft: i === 0 ? 0 : "-0.5rem", zIndex: members.length - i }}
        >
          <Avatar className={`${sizeClass} border-2 border-background ring-0 transition-transform duration-200 ease-out group-hover:-translate-y-1`}>
            {m.avatar ? <AvatarImage src={m.avatar} alt={m.name} /> : null}
            <AvatarFallback>{getInitials(m.name)}</AvatarFallback>
          </Avatar>

          {/* Name tooltip */}
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            {m.name}
          </span>
        </a>
      ))}
    </div>
  )
}
