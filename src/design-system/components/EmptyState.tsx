import type { ReactNode } from "react"
import Button from "./Button"

export default function EmptyState({
  illustration,
  title,
  description,
  actionLabel,
}: {
  illustration: ReactNode
  title: string
  description: string
  actionLabel?: string
}) {
  return (
    <div className="flex w-full flex-col items-center px-8 text-center">
      <div className="mb-10">{illustration}</div>
      <h2 className="text-[24px] leading-8 font-bold text-text-primary">
        {title}
      </h2>
      <p className="mt-3 max-w-[300px] text-[14px] leading-5 text-text-secondary">
        {description}
      </p>
      {actionLabel && (
        <div className="mt-10 w-full">
          <Button variant="primary" size="lg" block>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
