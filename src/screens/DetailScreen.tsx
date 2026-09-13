import { useState } from "react"
import Artwork from "@/design-system/components/Artwork"
import Button from "@/design-system/components/Button"
import Chip from "@/design-system/components/Chip"
import CircleButton from "@/design-system/components/CircleButton"
import MetaRow from "@/design-system/components/MetaRow"
import Screen from "@/design-system/components/Screen"
import TabBar from "@/design-system/components/TabBar"
import {
  Bolt,
  ChevronDown,
  ChevronLeft,
  Crown,
  DolbyMark,
  DownloadArrow,
  PlayFilled,
  Plus,
  RatingStar,
  Share,
  ThumbUp,
} from "@/design-system/icons"
import { artworkFor } from "@/data/artwork"
import { detailTitle, episodes } from "@/data/content"

const ACTIONS = [
  { icon: <Plus size={24} />, label: "Watchlist" },
  { icon: <ThumbUp size={24} />, label: "Like" },
  { icon: <DownloadArrow size={24} />, label: "Download" },
  { icon: <Share size={24} />, label: "Share" },
]

export default function DetailScreen({
  titleArt = true,
}: {
  titleArt?: boolean
}) {
  const [tab, setTab] = useState(detailTitle.tabs[0])
  const [season, setSeason] = useState(detailTitle.seasons[2])
  const titleArtSrc = artworkFor(`${detailTitle.name} title art`)

  return (
    <Screen>
      <div className="relative mx-2 aspect-16/9 overflow-hidden rounded-lg">
        <Artwork
          title={detailTitle.name}
          className="h-full w-full"
        />
        <div className="absolute top-3 left-3">
          <CircleButton size={34} label="Back">
            <ChevronLeft size={19} />
          </CircleButton>
        </div>
      </div>

      <div className="px-4">
        {titleArt ? (
          <div className="mt-7 text-center">
            {titleArtSrc ? (
              <img
                src={titleArtSrc}
                alt={detailTitle.name}
                className="mx-auto max-h-24 w-auto"
              />
            ) : (
              <>
                <p className="text-[38px] leading-none font-black tracking-[0.02em] text-white">
                  MAHARANI
                </p>
                <p className="mt-2 text-[13px] font-bold tracking-[0.22em] text-white">
                  {detailTitle.tagline}
                </p>
              </>
            )}
          </div>
        ) : (
          <h1 className="mt-7 text-center text-[26px] leading-8 font-bold text-white">
            {detailTitle.name}
          </h1>
        )}

        <div className="mt-5">
          <MetaRow
            separator="rule"
            items={[
              <span
                key="new"
                className="flex items-center gap-1.5 text-[15px] font-bold text-white italic"
              >
                <Bolt size={16} className="text-gold" />
                New Release
              </span>,
              <span
                key="imdb"
                className="flex items-center gap-1.5 text-[15px] font-medium text-white"
              >
                <RatingStar size={16} className="text-white" />
                {detailTitle.rating}
              </span>,
              <span
                key="like"
                className="flex items-center gap-1.5 text-[15px] font-medium text-white"
              >
                <ThumbUp size={16} className="text-white" />
                {detailTitle.likes}
              </span>,
            ]}
          />
          <MetaRow
            className="mt-2.5"
            items={[
              ...detailTitle.meta.map((m) => <span key={m}>{m}</span>),
              <span key="dolby" className="flex items-center gap-1 text-white">
                <DolbyMark height={11} />
                <span className="text-text-secondary">Audio</span>
              </span>,
            ]}
          />
        </div>

        <div className="mt-6 space-y-3">
          <Button
            variant="primary"
            block
            icon={<PlayFilled size={17} className="text-black" />}
          >
            Watch Free Episode
          </Button>
          <Button
            variant="subscribe"
            block
            icon={<Crown size={19} className="text-gold" />}
          >
            Subscribe Now
          </Button>
        </div>

        <p className="mt-6 text-[15px] leading-6 text-text-secondary">
          {detailTitle.synopsis}...{" "}
          <button
            type="button"
            className="inline-flex items-center gap-0.5 align-middle text-white"
          >
            more <ChevronDown size={16} />
          </button>
        </p>

        <div className="mt-7 flex justify-between px-1">
          {ACTIONS.map(({ icon, label }) => (
            <button
              key={label}
              type="button"
              className="flex w-20 flex-col items-center gap-2 text-white"
            >
              {icon}
              <span className="text-[15px] text-white">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <TabBar tabs={detailTitle.tabs} active={tab} onChange={setTab} />
      </div>

      <div className="no-scrollbar mt-5 flex gap-2.5 overflow-x-auto px-4">
        {detailTitle.seasons.map((s) => (
          <Chip
            key={s}
            size="sm"
            selected={s === season}
            onClick={() => setSeason(s)}
          >
            {s}
          </Chip>
        ))}
      </div>

      <div className="mt-5 space-y-6 px-4 pb-10">
        {episodes.map((ep) => (
          <div key={ep.title}>
            <div className="flex gap-3">
              <Artwork
                title={ep.title}
                className="h-[62px] w-[110px] shrink-0 rounded-md"
              />
              <div className="min-w-0 flex-1">
                {ep.tag && (
                  <p className="text-[13px] font-medium text-text-secondary italic">
                    {ep.tag}
                  </p>
                )}
                <p className="truncate text-[16px] leading-6 font-medium text-white">
                  {ep.title}
                </p>
                <p className="mt-0.5 text-[12px] text-text-tertiary">
                  {ep.meta}
                </p>
              </div>
              <DownloadArrow size={20} className="mt-1 shrink-0 text-white" />
            </div>
            <p className="mt-2.5 text-[13px] leading-5 text-text-secondary">
              {ep.synopsis.slice(0, 52)}...{" "}
              <span className="inline-flex items-center gap-0.5 align-middle text-white">
                more <ChevronDown size={14} />
              </span>
            </p>
          </div>
        ))}
      </div>
    </Screen>
  )
}
