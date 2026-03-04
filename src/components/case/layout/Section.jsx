import { cn } from "@/lib/utils"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

export function CaseSection({
  id,
  children,
  className,
  innerClassName,
  tight = false,
  bgClass,
  size = "text",
  navSafe,
}) {
  const computedNavSafe = navSafe ?? (size === "text")

  return (
    <FullBleedSection
      id={id}
      bgClass={bgClass}
      size={size}
      navSafe={computedNavSafe}
      className={cn(
        "scroll-mt-(--case-top-offset) py-14 md:py-20",
        tight && "py-10 md:py-14",
        className
      )}
      innerClassName={innerClassName}
    >
      {children}
    </FullBleedSection>
  )
}