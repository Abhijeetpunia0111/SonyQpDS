import type { ReactNode } from "react"

export type CircleTone = "overlay" | "solid"

/** The circular control that sits on top of artwork: add-to-list, play, back. */
export default function CircleButton({
  children,
  size = 40,
  tone = "overlay",
  label,
}: {
  children: ReactNode
  size?: number
  tone?: CircleTone
  label: string
}) {
  return (
    <button
      type="button"
      aria-label={label}
      style={{ width: size, height: size }}
      className={`focus-ring flex items-center justify-center rounded-full transition-opacity active:opacity-70 ${
        tone === "solid"
          ? "gradient-action text-action-on-primary"
          : "bg-surface-3/85 text-text-primary"
      }`}
    >
      {children}
    </button>
  )
}
