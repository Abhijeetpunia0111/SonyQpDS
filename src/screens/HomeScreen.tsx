import Artwork from "@/design-system/components/Artwork"
import Avatar from "@/design-system/components/Avatar"
import Badge from "@/design-system/components/Badge"
import Chip from "@/design-system/components/Chip"
import CircleButton from "@/design-system/components/CircleButton"
import LandscapeCard from "@/design-system/components/LandscapeCard"
import PosterCard from "@/design-system/components/PosterCard"
import Rail from "@/design-system/components/Rail"
import Screen from "@/design-system/components/Screen"
import SectionHeader from "@/design-system/components/SectionHeader"
import {
  Bolt,
  ChevronDown,
  Crown,
  LivLogo,
  PlayFilled,
  Plus,
} from "@/design-system/icons"
import { hasArtwork } from "@/data/artwork"
import { categories, continueWatching, mustWatch } from "@/data/content"

export default function HomeScreen() {
  return (
    <Screen
      nav="home"
      header={
        <div className="flex h-12 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <LivLogo height={28} />
            <span className="flex h-9 items-center gap-1.5 rounded-full px-4 text-[15px] font-medium text-gold ring-1 ring-gold/80 ring-inset">
              <Crown size={15} className="text-gold" />
              Subscribe
            </span>
          </div>
          <Avatar name="Satish" size={28} />
        </div>
      }
    >
      <div className="no-scrollbar flex gap-2.5 overflow-x-auto px-4 py-2.5">
        {categories.map((c) => (
          <Chip key={c} shape="rounded">
            {c}
          </Chip>
        ))}
        <Chip shape="rounded" trailing={<ChevronDown size={20} />} />
      </div>

      <div className="relative mt-1">
        <span className="absolute top-10 -left-1 h-[360px] w-3 rounded-r-lg bg-art-placeholder" />
        <span className="absolute top-10 -right-1 h-[360px] w-3 rounded-l-lg bg-art-placeholder" />
        <div className="relative mx-4 aspect-[380/487] overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Artwork
            title="Madhuvidhu"
            className="h-full w-full"
          />
          <div className="absolute top-3.5 left-3.5">
            <Badge
              tone="onMedia"
              icon={<Bolt size={14} className="text-gold" />}
            >
              New Release
            </Badge>
          </div>
          {!hasArtwork("Madhuvidhu") && (
            <p className="font-keyart absolute right-4 bottom-14 left-5 text-[46px] leading-none text-white">
              Madhuvidhu
            </p>
          )}
          <p className="absolute bottom-5 left-5 text-[13px] text-text-secondary">
            4 Languages &nbsp;•&nbsp; Comedy, Family
          </p>
          <div className="absolute right-4 bottom-14">
            <CircleButton size={40} label="Add to watchlist">
              <Plus size={20} />
            </CircleButton>
          </div>
          <div className="absolute right-4 bottom-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-action-muted">
              <PlayFilled size={18} className="ml-0.5 text-action-on-primary" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-7 space-y-3">
        <SectionHeader title="Continue Watching For Satish" />
        <Rail>
          {continueWatching.map((t) => (
            <LandscapeCard
              key={t.name}
              title={t.name}
              meta={t.meta}
              progress={t.progress}
            />
          ))}
        </Rail>
      </div>

      <div className="mt-7 space-y-3">
        <SectionHeader title="Must Watch Movies" />
        <Rail>
          {mustWatch.map((t, i) => (
            <PosterCard
              key={t.name}
              title={t.name}
              width={118}
              premium={i % 2 === 0}
            />
          ))}
        </Rail>
      </div>

      <div className="mt-7 space-y-3">
        <SectionHeader title="Trending Now" />
        <Rail>
          {[...mustWatch].reverse().map((t, i) => (
            <PosterCard key={t.name} title={t.name} width={118} rank={i + 1} />
          ))}
        </Rail>
      </div>
    </Screen>
  )
}
