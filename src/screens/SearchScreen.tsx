import { useState } from "react"

import Artwork from "@/design-system/components/Artwork"

import Chip from "@/design-system/components/Chip"

import Card from "@/design-system/components/Card"

import Screen from "@/design-system/components/Screen"

import SearchField from "@/design-system/components/SearchField"

import {
  Clapper,
  GridFour,
  LivLogo,
  SearchGlass,
  SportsBall,
} from "@/design-system/icons"

import {
  recentSearches,
  searchFilters,
  suggestions,
  trendingSearches,
} from "@/data/content"

const FILTER_ICONS = [
  <GridFour key="all" size={17} />,

  <Clapper key="movies" size={17} />,

  <LivLogo key="originals" height={15} />,

  <SportsBall key="sports" size={17} />,
]

export function FilterChips({
  active,

  onChange,
}: {
  active: string

  onChange: (f: string) => void
}) {
  return (
    <div className="no-scrollbar flex gap-2.5 overflow-x-auto px-4">
      {searchFilters.map((f, i) => (
        <Chip
          key={f}
          selected={f === active}
          onClick={() => onChange(f)}
          icon={FILTER_ICONS[i]}
        >
          {f}
        </Chip>
      ))}
    </div>
  )
}

export function PosterGrid({ titles }: { titles: { name: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-2 px-4">
      {titles.map((t, i) => (
        <Card
          key={t.name}
          ratio="2:3"
          size="sm"
          title={t.name}
          fluid
          premium={i % 4 === 0}
          tags={i === 1}
        />
      ))}
    </div>
  )
}

/** The three overlapping mini-posters that sit inside a recent-search chip. */

function ThumbCluster({ label }: { label: string }) {
  return (
    <span className="flex shrink-0 items-center">
      {[0, 1, 2].map((i) => (
        <Artwork
          key={i}
          title={`${label}-${i}`}
          className="h-9 w-5 rounded-[3px] ring-1 ring-black/50"
        />
      ))}
    </span>
  )
}

export default function SearchScreen({ typing = false }: { typing?: boolean }) {
  const [filter, setFilter] = useState(searchFilters[0])

  return (
    <Screen
      nav="search"
      statusTime="09:30 PM"
      network="5G"
      header={
        <div className="px-4 pt-2 pb-4">
          <SearchField
            value={typing ? "Tamil Movies" : undefined}
            placeholder="Search"
            hint={"“Tarak Mehta”"}
            caret={typing}
          />
        </div>
      }
    >
      {typing ? (
        <>
          <div className="px-4">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="flex w-full items-center gap-3 border-b border-border-subtle py-3.5 text-left"
              >
                <SearchGlass
                  size={19}
                  className="shrink-0 text-text-tertiary"
                />
                <span className="flex-1 truncate text-[15px] text-white">
                  {s}
                </span>
              </button>
            ))}
          </div>
          <h2 className="mt-7 mb-4 px-4 text-[19px] font-medium text-white">
            Trending Searches
          </h2>
          <FilterChips active={filter} onChange={setFilter} />
          <div className="mt-4">
            <PosterGrid titles={trendingSearches} />
          </div>
        </>
      ) : (
        <>
          <h2 className="px-4 text-[15px] font-medium text-white">
            You Might Search
          </h2>
          <div className="mt-3.5 flex flex-wrap gap-2.5 px-4">
            {recentSearches.map((r) => (
              <span
                key={r}
                className="flex h-12 items-center gap-2.5 rounded-full bg-chip pr-5 pl-1.5"
              >
                <ThumbCluster label={r} />
                <span className="text-[16px] font-normal text-white">{r}</span>
              </span>
            ))}
          </div>

          <h2 className="mt-7 mb-4 px-4 text-[19px] font-medium text-white">
            Trending Searches
          </h2>
          <FilterChips active={filter} onChange={setFilter} />
          <div className="mt-4">
            <PosterGrid titles={trendingSearches} />
          </div>
        </>
      )}
    </Screen>
  )
}
