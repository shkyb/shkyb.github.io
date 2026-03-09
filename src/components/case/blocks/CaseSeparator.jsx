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
  return (
    <div className={cn("flex items-center gap-4 py-10", className)}>
      <Separator className="flex-1" />

      {label ? (
        <span
          className={cn(
            "text-xs font-medium text-muted-foreground",
            align === "center" && "text-center"
          )}
        >
          {label}
        </span>
      ) : null}

      <Separator className="flex-1" />
    </div>
  )
}