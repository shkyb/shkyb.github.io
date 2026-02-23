import { cn } from "@/lib/utils"

export function Prose({ children, className }) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none prose-p:leading-relaxed prose-a:font-medium prose-a:no-underline hover:prose-a:underline",
        className
      )}
    >
      {children}
    </div>
  )
}