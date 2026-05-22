import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

/**
 * CaseSeparator
 *
 * Props
 * - label?: ReactNode
 * - align?: "left" | "center" | "right"
 * - className?: string
 *
 * Use this to visually divide narrative sections.
 */

export function CaseSeparator({
  label,
  align = "center",
  className,
}) {
  const lineStyle = { background: "var(--project-border, var(--border))" }
  const textStyle = { color: "var(--project-muted-foreground, var(--muted-foreground))" }

  return (
    <div className={cn("flex items-center gap-4 py-20", className)}>
      <Separator className="flex-1" style={lineStyle} />

      {label ? (
        <span
          className={cn(
            "text-base font-normal",
            align === "center" && "text-center"
          )}
          style={textStyle}
        >
          {label}
        </span>
      ) : null}

      <Separator className="flex-1" style={lineStyle} />
    </div>
  )
}