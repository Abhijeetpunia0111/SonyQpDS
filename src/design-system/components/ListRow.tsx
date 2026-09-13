import { ChevronRight } from "@/design-system/icons"
import type { ReactNode } from "react"

export default function ListRow({
  icon,
  title,
  subtitle,
  trailing,
  chevron = true,
  bare = false,
}: {
  icon?: ReactNode
  title: string
  subtitle?: string
  trailing?: ReactNode
  chevron?: boolean
  bare?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2.5 px-3.5 py-2.5 ${
        bare ? "" : "rounded-xl bg-surface-2"
      }`}
    >
      {icon && <span className="shrink-0 text-text-tertiary">{icon}</span>}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[18px] leading-6 font-normal text-text-primary">
          {title}
        </p>
        {subtitle && (
          <p className="mt-0.5 truncate text-[13px] leading-4 text-text-tertiary">
            {subtitle}
          </p>
        )}
      </div>
      {trailing}
      {chevron && (
        <ChevronRight size={20} className="shrink-0 text-text-secondary" />
      )}
    </div>
  )
}
