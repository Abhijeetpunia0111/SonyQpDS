export type Title = {
  /** Swap in a real image URL here when artwork is available. */
  poster?: string
  name: string
  meta?: string
  progress?: number
}

export const categories = ["Originals", "TV Shows", "Sports", "Movies"]

export const continueWatching: Title[] = [
  { name: "Karapuu", meta: "2H 9m left", progress: 32 },
  { name: "Turbo", meta: "2H 9m left", progress: 55 },
  { name: "Tumbbad", meta: "2H 9m left", progress: 18 },
  { name: "Kanguva", meta: "1H 12m left", progress: 74 },
]

export const mustWatch: Title[] = [
  { name: "Papa Buddha" },
  { name: "Shaitaan" },
  { name: "Article 370" },
  { name: "Maidaan" },
  { name: "Laapataa Ladies" },
]

export const trendingSearches: Title[] = [
  { name: "Champions League" },
  { name: "UFC Fight Night" },
  { name: "Shark Tank India" },
  { name: "Kaun Banega Crorepati" },
  { name: "Scam 1992" },
  { name: "Rocket Boys" },
  { name: "Gullak Season 4" },
  { name: "Maharani 4" },
  { name: "The Freelancer" },
]

export const recentSearches = [
  "Action Sports",
  "Tamil Movies",
  "Tv Shows",
  "Bollywood Movies",
]

export const searchFilters = ["All", "Movies", "Originals", "Sports"]

export const suggestions = [
  "Tamil Movies",
  "Tamil Movies 2024",
  "Tamil Movies Dubbed",
  "Tamil Movie Songs",
  "Tamil Movies Action",
]

export const relatedVideos: Title[] = [
  { name: "The Tank", meta: "Movie • 2H 10m" },
  { name: "Man Who Fell To Earth", meta: "Movie • 1H 48m" },
  { name: "Battle of the Sexes", meta: "Movie • 2H 2m" },
]

export const profiles = ["Jhon", "Christine", "Karan", "Pradeep p...", "Akashi"]

export const episodes = [
  {
    tag: "New Episode",
    title: "Daya Ke Wapas Aane Ki News",
    meta: "E3934 • 16 Jan 2024 • 31m",
    synopsis:
      "Gokuldham men enjoy a soda session, but Popatlal feels left out of the celebration and plots a way in.",
  },
  {
    title: "Bhide Ki Nayi Scheme",
    meta: "E3935 • 17 Jan 2024 • 29m",
    synopsis:
      "Bhide announces a new society rule that nobody agrees with, and the men look for a loophole.",
  },
  {
    title: "Jethalal Ka Naya Plan",
    meta: "E3936 • 18 Jan 2024 • 33m",
    synopsis:
      "Jethalal tries to impress a client with a scheme that quickly spirals out of his control.",
  },
]

export const detailTitle = {
  name: "Maharani 4",
  tagline: "RISE • RULE • REVENGE",
  banner: "INDIA'S BIGGEST POLITICAL THRILLER",
  label: "Sony LIV Originals",
  meta: ["2021", "U/A 7+", "Comedy", "4 Seasons"],
  rating: "IMDB 8.2",
  likes: "75%",
  synopsis:
    "Four misfits suddenly pulled through a mysterious find themselves struggling with ordinary problems when they are bizarre",
  seasons: ["Season 1", "Season 2", "Season 3", "Season 4"],
  tabs: ["Episodes", "Story Tracks", "More like this"],
}
