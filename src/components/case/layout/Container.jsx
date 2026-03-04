import { cn } from "@/lib/utils"

const SIZE_TO_MAX_W = {
  text: "max-w-5xl",
  media: "max-w-7xl",
  page: "max-w-screen-2xl",
}

export function CaseContainer({
  children,
  className,
  size = "text",
  navSafe = false,
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        SIZE_TO_MAX_W[size] ?? SIZE_TO_MAX_W.text,
        // Only apply the "safe zone" on lg screens (1024–1279). Remove it on xl+.
        // navSafe && "lg:pl-[calc(var(--case-nav-w,16rem)+1.5rem)] xl:pl-8", 
        className
      )}
    >
      {children}
    </div>
  )
}