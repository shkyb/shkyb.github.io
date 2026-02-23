import { cn } from "@/lib/utils"

export function CaseContainer({ children, className }) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-6 md:px-12", className)}>
      {children}
    </div>
  )
}