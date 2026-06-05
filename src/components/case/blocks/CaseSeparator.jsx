import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const DEFAULT_LABEL = "Here's how we got there ↓"

const SEPARATOR_BG_STYLE = {
  background: "var(--project-primary)",
  "--project-muted-foreground": "rgba(255,255,255,0.85)",
  "--project-border": "rgba(255,255,255,0.35)",
}

export function CaseSeparator({
  label = DEFAULT_LABEL,
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

// Factory — returns a complete section config for use in case study sections arrays.
// Usage: separatorSection() or separatorSection("Custom text")
export function separatorSection(label) {
  return {
    size: "fill",
    bgStyle: SEPARATOR_BG_STYLE,
    render: () => <CaseSeparator label={label} />,
  }
}
