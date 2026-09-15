import { useState } from "react"

import Artwork from "@/design-system/components/Artwork"

import Banner from "@/design-system/components/Banner"

import Rail from "@/design-system/components/Rail"

import Screen from "@/design-system/components/Screen"

import SearchField from "@/design-system/components/SearchField"

import { Crown } from "@/design-system/icons"

import { relatedVideos, searchFilters, trendingSearches } from "@/data/content"

import { FilterChips, PosterGrid } from "./SearchScreen"

export default function SearchResultsScreen() {
  const [filter, setFilter] = useState(searchFilters[0])

  return (
    <Screen
      nav="search"
      statusTime="09:30 PM"
      network="5G"
      header={
        <div className="px-4 pt-2 pb-4">
          <SearchField value={"“Tamil Movies”"} />
        </div>
      }
    >
      <div className="mx-4">
        <Banner
          ratio="16:9"
          title="Maharani 4"
          meta="2021 • U • Hindi + 4 Languages • 4 Seasons • Action, Adventure"
          fluid
        />
      </div>

      <h2 className="mt-6 px-4 text-[19px] font-medium text-white">
        Related Videos
      </h2>
      <div className="mt-3.5">
        <Rail gap={10}>
          {relatedVideos.map((v, i) => (
            <div key={v.name} className="w-[130px] shrink-0">
              <div className="relative aspect-16/9 w-full">
                <Artwork title={v.name} className="h-full w-full rounded-md" />
                {i === 2 && (
                  <Crown
                    size={15}
                    className="absolute top-1 left-1 text-gold"
                  />
                )}
              </div>
              <p className="mt-2.5 line-clamp-2 text-[14px] leading-5 font-medium text-white">
                {v.name}
              </p>
              <p className="mt-1 text-[12px] text-text-tertiary">{v.meta}</p>
            </div>
          ))}
        </Rail>
      </div>

      <h2 className="mt-7 mb-4 px-4 text-[19px] font-medium text-white">
        Results for “Tamil Movies”
      </h2>
      <FilterChips active={filter} onChange={setFilter} />
      <div className="mt-4">
        <PosterGrid titles={trendingSearches} />
      </div>
    </Screen>
  )
}
