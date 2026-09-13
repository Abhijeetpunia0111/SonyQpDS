import type { ReactNode } from "react"

export default function MetaRow({
  items,
  separator = "dot",
  className = "",
  /** Detail screens use a rule between rating facts and a dot between catalogue facts. */
}: {
  items: ReactNode[]
  separator?: "dot" | "rule"
  className?: string
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[14px] text-text-secondary ${className}`}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 &&
            (separator === "rule" ? (
              <span className="h-3.5 w-px bg-border-strong" />
            ) : (
              <span className="text-text-secondary">•</span>
            ))}
          {item}
        </span>
      ))}
    </div>
  )
}
