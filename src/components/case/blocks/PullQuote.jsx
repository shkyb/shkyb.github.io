import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

/**
 * PullQuote
 *
 * Props:
 * - quote: ReactNode
 * - author?: ReactNode
 * - role?: ReactNode
 * - align?: "left" | "center"          // default "left"
 * - size?: "md" | "lg"                 // default "lg"
 * - tone?: "default" | "muted"         // default "default"
 * - showMark?: boolean                 // default true
 * - className?: string
 */
export function PullQuote({
  quote,
  author,
  role,
  align = "left",
  size = "lg",
  tone = "default",
  showMark = true,
  className,
}) {
  if (!quote) return null

  const isCenter = align === "center"

  return (
    <figure
      className={cn(
        sp.itemToItem, "py-6 md:py-10",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto",
          isCenter ? "max-w-4xl" : "max-w-3xl",
          !isCenter && "border-l-2 pl-10"
        )}
        style={!isCenter ? { borderColor: "color-mix(in srgb, var(--project-kicker, var(--project-primary, var(--border))) 40%, transparent)" } : undefined}
      >
        {showMark ? (
          <div
            className={cn(
              "mb-3 font-serif text-6xl leading-none opacity-40",
              isCenter ? "text-center" : "text-left"
            )}
            style={{ color: "var(--project-kicker, var(--project-primary, var(--muted-foreground)))" }}
            aria-hidden="true"
          >
            "
          </div>
        ) : null}

        <Prose>
          <blockquote
            className={cn(
              "m-0 border-l-0 pl-0 font-brand italic font-medium tracking-normal [&_em]:not-italic [&_em]:font-semibold [&_em]:text-(--project-primary,var(--project-kicker,currentColor))",
              size === "md"
                ? "text-xl leading-snug md:text-2xl"
                : "text-2xl leading-snug md:text-4xl",
              tone === "muted"
                ? "text-(--project-muted-foreground,var(--muted-foreground))"
                : "text-(--project-foreground,var(--foreground))"
            )}
          >
            {quote}
          </blockquote>
        </Prose>

        {(author || role) ? (
          <figcaption className="mt-4">
            {author ? (
              <Prose>
                <p className="m-0 text-sm font-medium text-(--project-foreground,var(--foreground))">
                  {"— "}{author}
                </p>
              </Prose>
            ) : null}

            {role ? (
              <Prose>
                <p className="m-0 pl-5 text-sm text-(--project-muted-foreground,var(--muted-foreground))">
                  {role}
                </p>
              </Prose>
            ) : null}
          </figcaption>
        ) : null}
      </div>
    </figure>
  )
}