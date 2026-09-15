import type { ReactNode } from "react"

export type ChipShape = "pill" | "rounded"

export type ChipSize = "sm" | "md"

const SIZES: Record<ChipSize, string> = {
  sm: "h-9 px-4 text-[13px] gap-1.5",

  md: "h-11 px-4 text-[15px] gap-2",
}

export default function Chip({
  children,

  selected = false,

  shape = "pill",

  size = "md",

  icon,

  trailing,

  onClick,
}: {
  children?: ReactNode

  selected?: boolean

  shape?: ChipShape

  size?: ChipSize

  icon?: ReactNode

  trailing?: ReactNode

  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-colors ${
        SIZES[size]
      } ${shape === "pill" ? "rounded-full" : "rounded-xl"} ${
        selected
          ? "bg-chip text-text-primary ring-1 ring-border-strong ring-inset"
          : "bg-chip text-text-secondary"
      }`}
    >
      {icon}
      {children}
      {trailing}
    </button>
  )
}
