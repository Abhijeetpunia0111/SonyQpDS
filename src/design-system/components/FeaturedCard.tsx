import { hasArtwork } from "@/data/artwork"
import { Bolt, Crown, PlayFilled, Plus } from "@/design-system/icons"
import Artwork from "./Artwork"
import Badge from "./Badge"
import CircleButton from "./CircleButton"

/** The italic line above the metadata — "New Release" or "New Episode Available". */
export type FeaturedFlag = {
  text: string
  withBolt?: boolean
}

/**
 * The wide promo card that heads the search-results and downloads screens.
 * Identical anatomy in both places, so it lives here rather than in a screen.
 */
export default function FeaturedCard({
  title,
  banner,
  label,
  flag,
  meta,
  /** The italic line above the metadata — "New Release" or "New Episode Available". */
}: {
  title: string
  banner: string
  label: string
  flag: FeaturedFlag
  meta: string
}) {
  return (
    <div className="relative mx-4 aspect-16/9 overflow-hidden rounded-2xl">
      <Artwork
        title={title}
        className="h-full w-full"
      />
      <Crown size={19} className="absolute top-2.5 left-3 text-gold" />
      {!hasArtwork(title) && (
        <>
          <span className="absolute top-2.5 right-3 max-w-[62%] text-right text-[12px] leading-tight font-bold text-white uppercase underline decoration-1 underline-offset-2">
            {banner}
          </span>
          <p className="absolute top-[26%] left-5 border-b border-white/40 pb-0.5 text-[10px] text-white/85">
            {label}
          </p>
        </>
      )}
      <p className="absolute bottom-12 left-4 flex items-center gap-1.5 text-[15px] font-bold text-white italic">
        {flag.withBolt !== false && <Bolt size={15} className="text-gold" />}
        {flag.text}
      </p>
      <p className="absolute right-28 bottom-3 left-4 text-[13px] leading-4.5 text-text-secondary">
        {meta}
      </p>
      <div className="absolute right-16 bottom-4">
        <CircleButton size={38} label="Add to watchlist">
          <Plus size={19} />
        </CircleButton>
      </div>
      <div className="absolute right-3 bottom-2.5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-action-muted">
          <PlayFilled size={18} className="ml-0.5 text-action-on-primary" />
        </span>
      </div>
      <div className="absolute bottom-1.5 left-2 opacity-70">
        <Badge tone="certification">U/A 13+</Badge>
      </div>
    </div>
  )
}
