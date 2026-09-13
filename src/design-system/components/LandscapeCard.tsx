import { MoreVertical, PlayFilled } from "@/design-system/icons"
import Artwork from "./Artwork"
import ProgressBar from "./ProgressBar"

export default function LandscapeCard({
  title,
  meta,
  progress,
  width = 186,
}: {
  title: string
  meta?: string
  progress?: number
  width?: number
}) {
  return (
    <div className="shrink-0" style={{ width }}>
      <div className="relative aspect-16/9 w-full">
        <Artwork title={title} className="h-full w-full rounded-md" />
        <span className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/45">
          <PlayFilled size={15} className="ml-0.5 text-white" />
        </span>
        {progress !== undefined && (
          <div className="absolute right-2 bottom-2 left-2">
            <ProgressBar value={progress} />
          </div>
        )}
      </div>
      <div className="mt-2.5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[15px] leading-5 font-normal text-text-primary">
            {title}
          </p>
          {meta && (
            <p className="mt-1 text-[13px] text-text-tertiary">{meta}</p>
          )}
        </div>
        <MoreVertical
          size={17}
          className="mt-0.5 shrink-0 text-text-secondary"
        />
      </div>
    </div>
  )
}
