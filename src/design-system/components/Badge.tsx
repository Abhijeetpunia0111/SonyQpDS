import type { ReactNode } from "react"

export type BadgeTone = "onMedia" | "premium" | "certification" | "live" | "neutral"

const TONES: Record<BadgeTone, string> = {
  onMedia: "bg-black/70 text-text-primary px-3 py-1.5 rounded-lg",
  premium: "gradient-premium text-text-primary px-3 py-1.5 rounded-full",
  certification:
    "bg-black/55 text-text-primary/90 px-1.5 py-0.5 rounded-[3px] ring-1 ring-white/30 ring-inset",
  live: "bg-black/85 text-text-primary px-2 py-1 rounded-md",
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
      {/* The live dot is part of the badge rather than a caller-supplied icon,
          so a LIVE marker can never be rendered without it. */}
      {tone === "live" ? (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-live" />
      ) : (
        icon
      )}
      {children}
    </span>
  )
}
