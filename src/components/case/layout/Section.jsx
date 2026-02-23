import { cn } from "@/lib/utils"

export function CaseSection({ id, children, className, tight = false }) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-14 md:py-20",
        tight && "py-10 md:py-14",
        className
      )}
    >
      {children}
    </section>
  )
}