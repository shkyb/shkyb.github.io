import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"

const TONES = {
  info: "border-slate-200 bg-slate-50",
  success: "border-emerald-200 bg-emerald-50",
  warning: "border-amber-200 bg-amber-50",
  danger: "border-rose-200 bg-rose-50",
  neutral: "border-border bg-muted/40",
}

export function Callout({
  title,
  children,
  icon: Icon,
  tone = "info",
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5",
        TONES[tone] ?? TONES.info,
        className
      )}
    >
      <div className="flex gap-3">
        {Icon ? (
          <Icon
            className="mt-1 h-5 w-5 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
        ) : null}

        <div className="min-w-0">
          {title ? (
            <p className="text-sm font-semibold tracking-tight mb-1">
              {title}
            </p>
          ) : null}

          <Prose>
            <p className="m-0 text-sm text-muted-foreground">
              {children}
            </p>
          </Prose>
        </div>
      </div>
    </div>
  )
}