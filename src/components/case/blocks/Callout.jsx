import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

const TONES = {
  info: "border-(--project-border,var(--border)) bg-white/80 backdrop-blur-sm",
  success: "border-emerald-200 bg-emerald-50",
  warning: "border-amber-200 bg-amber-50",
  danger: "border-rose-200 bg-rose-50",
  neutral: "border-(--project-border,var(--border)) bg-white/60 backdrop-blur-sm",
}

const isSemanticTone = (tone) => ["success", "warning", "danger"].includes(tone)

const TONE_ICON_CLASS = {
  success: "text-emerald-600",
  warning: "text-amber-600",
  danger: "text-rose-600",
}

export function Callout({
  title,
  children,
  icon: Icon,
  tone = "info",
  className,
}) {
  const semantic = isSemanticTone(tone)

  return (
    <div
      className={cn(
        sp.itemToItem, "rounded-2xl border p-5",
        TONES[tone] ?? TONES.info,
        className
      )}
    >
      <div className="min-w-0">
        {(Icon || title) ? (
          <div className="mb-1 flex items-center gap-2">
            {Icon ? (
              <Icon
                className={cn("h-4 w-4 shrink-0", semantic && TONE_ICON_CLASS[tone])}
                style={semantic ? undefined : { color: "var(--project-kicker, var(--project-primary, var(--muted-foreground)))" }}
                aria-hidden="true"
              />
            ) : null}
            {title ? (
              <p
                className="text-sm font-semibold tracking-tight"
                style={semantic ? undefined : { color: "var(--project-foreground, var(--foreground))" }}
              >
                {title}
              </p>
            ) : null}
          </div>
        ) : null}

        <Prose>
          <p className={cn("m-0", Icon && "pl-6", semantic ? "text-muted-foreground" : "text-(--project-muted-foreground,var(--muted-foreground))")}>
            {children}
          </p>
        </Prose>
      </div>
    </div>
  )
}