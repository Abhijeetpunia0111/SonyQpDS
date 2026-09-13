import { Bolt, Crown } from "@/design-system/icons"
import Artwork from "./Artwork"
import Badge from "./Badge"

export default function PosterCard({
  title,
  width = 112,
  fluid = false,
  premium = false,
  newRelease = false,
  rank,
  caption,
}: {
  title: string
  width?: number
  fluid?: boolean
  premium?: boolean
  newRelease?: boolean
  rank?: number
  caption?: string
}) {
  return (
    <div
      className={fluid ? "w-full" : "shrink-0"}
      style={fluid ? undefined : { width }}
    >
      <div className="relative aspect-2/3 w-full">
        <Artwork
          title={title}
          className="h-full w-full rounded-md"
        />
        {premium && (
          <Crown size={18} className="absolute top-1.5 left-1.5 text-gold" />
        )}
        {newRelease && (
          <div className="absolute bottom-2 left-2 scale-90 origin-bottom-left">
            <Badge
              tone="onMedia"
              icon={<Bolt size={12} className="text-gold" />}
            >
              New Release
            </Badge>
          </div>
        )}
        {rank !== undefined && (
          <span className="absolute -bottom-1 left-0.5 text-[32px] leading-none font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {rank}
          </span>
        )}
      </div>
      {caption && (
        <p className="mt-2 truncate text-[13px] text-text-secondary">
          {caption}
        </p>
      )}
    </div>
  )
}
