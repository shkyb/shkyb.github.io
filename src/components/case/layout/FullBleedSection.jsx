import { cn } from "@/lib/utils"
import { CaseContainer } from "@/components/case/layout/Container"

/**
 * FullBleedSection
 * - bgClass: Tailwind class for background (e.g. "bg-muted/30")
 * - bgStyle: inline style object for dynamic/branded backgrounds (e.g. { background: "var(--project-background)" })
 */
export function FullBleedSection({
  as: Comp = "section",
  id,
  bgClass,
  bgStyle,
  className,
  innerClassName,
  size = "text",
  navSafe = false,
  children,
}) {
  return (
    <Comp id={id} className={cn("w-full", bgClass, className)} style={bgStyle}>
      <CaseContainer size={size} navSafe={navSafe} className={innerClassName}>
        {children}
      </CaseContainer>
    </Comp>
  )
}