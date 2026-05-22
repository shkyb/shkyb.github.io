import { cn } from "@/lib/utils"
import { Prose } from "../layout/Prose"
import { sp } from "../layout/spacing"

/**
 * ComparisonTable
 *
 * columns: [
 *   { key: "before", label: "Before" },
 *   { key: "after", label: "After", emphasis?: true }
 * ]
 *
 * rows: [
 *   {
 *     before: "Dense terminology and unclear state changes.",
 *     after: "Plain language and explicit success feedback."
 *   }
 * ]
 *
 * Props:
 * - columns: Array<{ key: string, label: ReactNode, emphasis?: boolean }>
 * - rows: Array<Record<string, ReactNode>>
 * - compact?: boolean
 * - stackedOnMobile?: boolean
 * - className?: string
 */
export function ComparisonTable({
  columns = [],
  rows = [],
  compact = false,
  stackedOnMobile = true,
  className,
}) {
  if (!columns.length || !rows.length) return null

  const cellPad = compact ? "px-4 py-3" : "px-5 py-4"

  return (
    <div className={cn(sp.itemToItem, className)}>
      {/* Mobile stacked */}
      {stackedOnMobile ? (
        <div className="space-y-4 md:hidden">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="rounded-2xl border border-(--project-border,var(--border)) bg-white/80 p-4 backdrop-blur-sm"
            >
              <div className="space-y-4">
                {columns.map((col, colIdx) => (
                  <div
                    key={col.key}
                    className={cn(
                      colIdx !== 0 ? "border-t border-(--project-border,var(--border)) pt-4" : null
                    )}
                  >
                    <Prose>
                      <p className="m-0 text-xs font-medium text-(--project-muted-foreground,var(--muted-foreground))">
                        {col.label}
                      </p>
                    </Prose>
                    <div className="mt-1">
                      <Prose>
                        <p
                          className={cn(
                            "m-0 text-base",
                            col.emphasis ? "font-medium text-(--project-foreground,var(--foreground))" : "text-(--project-muted-foreground,var(--muted-foreground))"
                          )}
                        >
                          {row[col.key]}
                        </p>
                      </Prose>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* Desktop table */}
      <div className={cn(stackedOnMobile ? "hidden md:block" : "block")}>
        <div className="overflow-hidden rounded-2xl border border-(--project-border,var(--border)) bg-white/80 backdrop-blur-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-(--project-border,var(--border))">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      cellPad,
                      "align-bottom text-sm font-semibold tracking-tight text-(--project-foreground,var(--foreground))"
                    )}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={cn(
                    rowIdx !== rows.length - 1 ? "border-b border-(--project-border,var(--border))" : null
                  )}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(cellPad, "align-top")}
                      style={col.emphasis ? { background: "color-mix(in srgb, var(--project-primary, var(--project-kicker, #334155)) 6%, transparent)" } : undefined}
                    >
                      <Prose>
                        <p
                          className={cn(
                            "m-0 text-sm",
                            col.emphasis ? "font-medium text-(--project-foreground,var(--foreground))" : "text-(--project-muted-foreground,var(--muted-foreground))"
                          )}
                        >
                          {row[col.key]}
                        </p>
                      </Prose>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}