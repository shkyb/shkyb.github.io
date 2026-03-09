import { cn } from "@/lib/utils"

export function UsageNote({ children, className }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}