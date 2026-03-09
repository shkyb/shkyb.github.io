import { cn } from "@/lib/utils"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"
import { SectionHeading } from "@/components/case/blocks/SectionHeading"

export function DocSection({
  id,
  title,
  description,
  bgClass = "bg-background",
  size = "fill",
  children,
  className,
}) {
  return (
    <FullBleedSection
      as="section"
      id={id}
      bgClass={bgClass}
      size={size}
      className={cn("scroll-mt-(--case-top-offset) py-16 md:py-20", className)}
    >
      <div className="space-y-8">
        <SectionHeading title={title} subtitle={description} />
        {children}
      </div>
    </FullBleedSection>
  )
}