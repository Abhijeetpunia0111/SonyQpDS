import type { ReactNode } from "react"

export const PHONE_WIDTH = 412
export const PHONE_HEIGHT = 917

export default function PhoneFrame({
  children,
  label,
  scale = 1,
}: {
  children: ReactNode
  label?: string
  scale?: number
}) {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div
        style={{
          width: (PHONE_WIDTH + 16) * scale,
          height: (PHONE_HEIGHT + 16) * scale,
        }}
      >
        <div
          className="rounded-[44px] bg-[#111] p-2 shadow-e3 ring-1 ring-white/10"
          style={{
            width: PHONE_WIDTH + 16,
            height: PHONE_HEIGHT + 16,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[36px] bg-bg"
            style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}
          >
            {children}
          </div>
        </div>
      </div>
      {label && (
        <figcaption className="text-[13px] font-medium text-text-secondary">
          {label}
        </figcaption>
      )}
    </figure>
  )
}
