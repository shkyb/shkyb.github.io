import { cn } from "@/lib/utils"
import { CaseContainer } from "@/components/case/layout/Container"

export function FullBleedSection({
  as: Comp = "section",
  id,
  bgClass,
  className,
  innerClassName,
  size = "text",
  navSafe = false,
  children,
}) {
  return (
    <Comp id={id} className={cn("w-full", bgClass, className)}>
      <CaseContainer size={size} navSafe={navSafe} className={innerClassName}>
        {children}
      </CaseContainer>
    </Comp>
  )
}