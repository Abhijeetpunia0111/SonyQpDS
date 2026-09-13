import type { ReactNode } from "react"

export type BadgeTone = "onMedia" | "premium" | "certification" | "neutral"

const TONES: Record<BadgeTone, string> = {
  onMedia: "bg-black/70 text-text-primary px-3 py-1.5 rounded-lg",
  premium: "gradient-premium text-text-primary px-3 py-1.5 rounded-full",
  certification:
    "bg-black/55 text-text-primary/90 px-1.5 py-0.5 rounded-[3px] ring-1 ring-white/30 ring-inset",
  neutral: "bg-surface-3 text-text-secondary px-2.5 py-1 rounded-md",
}

export default function Badge({
  children,
  tone = "neutral",
  icon,
}: {
  children: ReactNode
  tone?: BadgeTone
  icon?: ReactNode
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[12px] leading-4 font-semibold whitespace-nowrap ${
        tone === "onMedia" ? "italic" : ""
      } ${TONES[tone]}`}
    >
      {icon}
      {children}
    </span>
  )
}
