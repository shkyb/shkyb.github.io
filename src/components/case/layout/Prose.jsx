import { cn } from "@/lib/utils"

export function Prose({ children, className }) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-4xl prose-h3:text-2xl prose-p:leading-relaxed prose-a:font-medium prose-a:no-underline hover:prose-a:underline",
        className
      )}
    >
      {children}
    </div>
  )
}