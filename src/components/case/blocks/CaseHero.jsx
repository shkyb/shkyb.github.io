import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { FullBleedSection } from "@/components/case/layout/FullBleedSection"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
})

export function CaseHero({
  className,
  logo,
  projectName,
  headline,
  tags = [],
  cover,
  bgClass,
  centered = false,
}) {
  return (
    <section className={cn("w-full", bgClass, className)}>

      {/* Text area */}
      <FullBleedSection bgClass={bgClass} size="fill" className="pt-16 pb-10 md:pt-24 md:pb-12">
        <div className={cn("flex flex-col", centered && "items-center text-center")}>

          {/* Logo + project name */}
          {centered ? (
            <>
              <motion.div {...fadeUp(0)}>
                {logo?.src ? (
                  <img src={logo.src} alt={logo.alt ?? ""} className="h-14 w-14 shrink-0 rounded-md object-contain" loading="eager" />
                ) : (
                  <div className="h-14 w-14 shrink-0 rounded-md bg-muted" />
                )}
              </motion.div>
              {projectName ? (
                <motion.span {...fadeUp(0.08)} className="mt-3 text-xs font-medium uppercase tracking-widest text-(--project-muted-foreground,var(--muted-foreground))">
                  {projectName}
                </motion.span>
              ) : null}
            </>
          ) : (
            <motion.div {...fadeUp(0)} className="flex items-center gap-2.5">
              {logo?.src ? (
                <img src={logo.src} alt={logo.alt ?? ""} className="h-7 w-7 shrink-0 rounded-sm object-contain" loading="eager" />
              ) : (
                <div className="h-7 w-7 shrink-0 rounded-sm bg-muted" />
              )}
              {projectName ? (
                <span className="text-xs font-medium uppercase tracking-widest text-(--project-muted-foreground,var(--muted-foreground))">
                  {projectName}
                </span>
              ) : null}
            </motion.div>
          )}

          {/* Headline */}
          {/* font-serif is currently Inter — if swapped back to Cormorant (font-brand), restore sizes to text-3xl md:text-5xl lg:text-[3.75rem] */}
          {headline ? (
            <motion.h1
              {...fadeUp(centered ? 0.16 : 0.12)}
              className={cn(
                "mt-6 font-serif text-2xl font-semibold leading-snug tracking-tight text-balance text-(--project-foreground,var(--foreground)) [&_em]:italic [&_em]:text-(--project-kicker,var(--project-primary,currentColor)) md:text-4xl lg:text-5xl",
                centered && "max-w-4xl"
              )}
            >
              {headline}
            </motion.h1>
          ) : null}

          {/* Tags */}
          {tags?.length ? (
            <motion.div
              {...fadeUp(centered ? 0.24 : 0.22)}
              className={cn("mt-6 flex flex-wrap gap-2", centered && "justify-center")}
            >
              {tags.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </motion.div>
          ) : null}

        </div>
      </FullBleedSection>

      {/* Cover */}
      {cover?.src ? (
        <FullBleedSection bgClass={bgClass} size="page" className="pb-10 md:pb-14">
          <motion.div {...fadeUp(0.3)} className="overflow-hidden rounded-2xl">
            <img
              src={cover.src}
              alt={cover.alt ?? ""}
              className={cn("w-full object-cover", cover.aspect ?? "aspect-video")}
              loading="eager"
            />
          </motion.div>
        </FullBleedSection>
      ) : null}

    </section>
  )
}
