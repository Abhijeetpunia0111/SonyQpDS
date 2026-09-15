import Artwork from "@/design-system/components/Artwork"

import Avatar from "@/design-system/components/Avatar"

import Badge from "@/design-system/components/Badge"

import Chip from "@/design-system/components/Chip"

import CircleButton from "@/design-system/components/CircleButton"

import Banner from "@/design-system/components/Banner"

import Card from "@/design-system/components/Card"

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
        <div className="relative mx-4">
          <Banner
            ratio="hero"
            title="Madhuvidhu"
            keyArt="Madhuvidhu"
            languages="4 Languages"
            genres="Comedy, Family"
            fluid
          />
        </div>
      </div>

      <div className="mt-7 space-y-3">
        <SectionHeader title="Continue Watching For Satish" />
        <Rail>
          {continueWatching.map((t) => (
            <Card
              key={t.name}
              ratio="16:9"
              size="md"
              title={t.name}
              progress={t.progress}
              heading={t.name}
              supporting={t.meta}
              premium={false}
            />
          ))}
        </Rail>
      </div>

      <div className="mt-7 space-y-3">
        <SectionHeader title="Must Watch Movies" />
        <Rail>
          {mustWatch.map((t, i) => (
            <Card
              key={t.name}
              ratio="2:3"
              size="sm"
              title={t.name}
              premium={i % 2 === 0}
              tags={false}
            />
          ))}
        </Rail>
      </div>

      <div className="mt-7 space-y-3">
        <SectionHeader title="Trending Now" />
        <Rail>
          {[...mustWatch].reverse().map((t, i) => (
            <Card
              key={t.name}
              ratio="2:3"
              size="sm"
              title={t.name}
              premium={i === 0}
              tags={i === 1}
            />
          ))}
        </Rail>
      </div>
    </Screen>
  )
}
