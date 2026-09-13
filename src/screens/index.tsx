import type { ComponentType } from "react"
import DetailScreen from "./DetailScreen"
import DownloadsScreen from "./DownloadsScreen"
import HomeScreen from "./HomeScreen"
import ProfileScreen from "./ProfileScreen"
import SearchResultsScreen from "./SearchResultsScreen"
import SearchScreen from "./SearchScreen"

export type ScreenEntry = {
  id: string
  name: string
  group: string
  figmaNode: string
  purpose: string
  Component: ComponentType
}

export const screens: ScreenEntry[] = [
  {
    id: "home",
    name: "Home",
    group: "Browse",
    figmaNode: "3257:24927",
    purpose:
      "Entry point. A featured carousel above rails of poster and continue-watching cards.",
    Component: HomeScreen,
  },
  {
    id: "detail",
    name: "Detail — title art",
    group: "Browse",
    figmaNode: "3257:25143",
    purpose:
      "Franchise titles with licensed lettering. The art replaces the text heading entirely.",
    Component: () => <DetailScreen titleArt />,
  },
  {
    id: "detail-plain",
    name: "Detail — text title",
    group: "Browse",
    figmaNode: "3257:26525",
    purpose:
      "The fallback when no title art exists. Identical anatomy, display-24 heading.",
    Component: () => <DetailScreen titleArt={false} />,
  },
  {
    id: "search",
    name: "Search",
    group: "Search",
    figmaNode: "3257:25868",
    purpose:
      "Resting state. Recent searches as thumbnail chips, then a filtered trending grid.",
    Component: () => <SearchScreen />,
  },
  {
    id: "search-typing",
    name: "Search — typing",
    group: "Search",
    figmaNode: "3257:26015",
    purpose:
      "Suggestions replace the recent-search chips while trending stays available below.",
    Component: () => <SearchScreen typing />,
  },
  {
    id: "search-results",
    name: "Search — results",
    group: "Search",
    figmaNode: "3257:25616",
    purpose:
      "Best match promoted to a featured card, then related videos and the full result grid.",
    Component: SearchResultsScreen,
  },
  {
    id: "downloads",
    name: "Downloads",
    group: "Library",
    figmaNode: "3257:25346",
    purpose:
      "Offline library. Rows carry stacked thumbnails for series and per-item state.",
    Component: () => <DownloadsScreen />,
  },
  {
    id: "downloads-empty",
    name: "Downloads — empty",
    group: "Library",
    figmaNode: "3257:25560",
    purpose:
      "The zero state: one illustration, one sentence of cause, one way out.",
    Component: () => <DownloadsScreen empty />,
  },
  {
    id: "profile",
    name: "Profiles & Premium",
    group: "Library",
    figmaNode: "3257:26317",
    purpose:
      "Profile switcher, subscription summary and two grouped sets of settings rows.",
    Component: ProfileScreen,
  },
]
