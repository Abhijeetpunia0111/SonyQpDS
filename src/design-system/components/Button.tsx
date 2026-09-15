import type { ReactNode } from "react"

export type ButtonVariant = "primary" | "secondary" | "subscribe" | "ghost"

export type ButtonSize = "sm" | "md" | "lg"

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "gradient-action text-action-on-primary",

  secondary: "bg-action-secondary text-text-primary",

  subscribe: "bg-action-secondary text-gold",

  ghost: "bg-transparent text-text-secondary",
}

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px] gap-1.5",

  md: "h-11 px-5 text-[15px] gap-2",

  lg: "h-12 px-6 text-[16px] gap-2.5",
}

export default function Button({
  children,

  variant = "primary",

  size = "lg",

  icon,

  block = false,

  radius = "lg",

  onClick,
}: {
  children: ReactNode

  variant?: ButtonVariant

  size?: ButtonSize

  icon?: ReactNode

  block?: boolean

  radius?: "lg" | "pill"

  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring inline-flex items-center justify-center font-semibold whitespace-nowrap transition-opacity active:opacity-70 ${
        VARIANTS[variant]
      } ${SIZES[size]} ${radius === "pill" ? "rounded-full" : "rounded-lg"} ${
        block ? "w-full" : ""
      }`}
    >
      {icon}
      {children}
    </button>
  )
}
