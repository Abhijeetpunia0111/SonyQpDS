import type { ReactNode } from "react"

export default function Rail({
  children,
  gap = 8,
}: {
  children: ReactNode
  gap?: number
}) {
  return (
    <div className="no-scrollbar flex overflow-x-auto px-4" style={{ gap }}>
      {children}
    </div>
  )
}
