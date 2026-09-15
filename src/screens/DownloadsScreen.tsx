import Artwork from "@/design-system/components/Artwork"

import EmptyState from "@/design-system/components/EmptyState"

import Banner from "@/design-system/components/Banner"

import Screen from "@/design-system/components/Screen"

import {
  AlertTriangle,
  ChevronRight,
  Crown,
  HalfCircle,
  Trash,
} from "@/design-system/icons"

type Item = {
  name: string

  meta: string

  stack?: boolean

  premium?: boolean

  action: "chevron" | "delete" | "progress"

  unavailable?: boolean
}

const ITEMS: Item[] = [
  {
    name: "Taarak Mehta Ka Ooltah Chasma",

    meta: "5 videos • 1.20 GB",

    stack: true,

    action: "chevron",
  },

  {
    name: "Good bad Girl",

    meta: "1h30m • 1.3 GB",

    premium: true,

    action: "delete",
  },

  { name: "Bahubali", meta: "1h30m • 1.3 GB", premium: true, action: "delete" },

  {
    name: "Clash Of The Titans",

    meta: "Content is no longer available",

    action: "delete",

    unavailable: true,
  },

  {
    name: "The Super Mario Galaxy",

    meta: "1h46m • 1.25 GB",

    premium: true,

    action: "progress",
  },
]

function EmptyArt() {
  return (
    <svg width="230" height="200" viewBox="0 0 230 200" fill="none" aria-hidden>
      <circle cx="115" cy="92" r="78" fill="#141414" />
      <path
        d="M62 62h32l9 11h65a8 8 0 0 1 8 8v52a8 8 0 0 1-8 8H62a8 8 0 0 1-8-8V70a8 8 0 0 1 8-8Z"
        fill="#2E2E33"
      />
      <path
        d="M70 84h98a8 8 0 0 1 8 8v41a8 8 0 0 1-8 8H70a8 8 0 0 1-8-8V92a8 8 0 0 1 8-8Z"
        fill="#3B3B42"
      />
      <circle cx="115" cy="140" r="20" fill="#ffffff" />
      <path
        d="M115 131v16m0 0 6-6m-6 6-6-6"
        stroke="#000000"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m40 58 2.6 5.9L48.5 66l-5.9 2.6L40 74.5l-2.6-5.9L31.5 66l5.9-2.4L40 58Z"
        fill="#ffffff"
      />
      <path
        d="m168 128 2.1 4.7 4.7 2.1-4.7 2.1-2.1 4.7-2.1-4.7-4.7-2.1 4.7-2.1 2.1-4.7Z"
        fill="#ffffff"
      />
      <circle cx="84" cy="24" r="3" fill="#5C5C5C" />
      <circle cx="150" cy="36" r="2.4" fill="#5C5C5C" />
      <circle cx="188" cy="112" r="3" fill="#5C5C5C" />
    </svg>
  )
}

export default function DownloadsScreen({
  empty = false,
}: {
  empty?: boolean
}) {
  return (
    <Screen
      nav="downloads"
      statusTime="09:30 PM"
      network="5G"
      header={
        <h1 className="px-4 pt-1 pb-5 text-[24px] leading-8 font-medium text-white">
          My Download
        </h1>
      }
    >
      {empty ? (
        <div className="flex min-h-full flex-col items-center justify-center pb-28">
          <EmptyState
            illustration={<EmptyArt />}
            title="No Downloads Yet"
            description="Movies and episodes you download will appear here. Start downloading to watch offline."
            actionLabel="Browse Content"
          />
        </div>
      ) : (
        <>
          <div className="mx-4">
            <Banner
              ratio="16:9"
              title="Maharani 4"
              meta="2021 • U • Hindi + 4 Languages • 4 Seasons • Action, Adventure"
              fluid
            />
          </div>

          <ul className="mt-7 space-y-5 px-4">
            {ITEMS.map((item) => (
              <li key={item.name} className="flex items-center gap-4">
                <div className="relative h-[68px] w-[120px] shrink-0">
                  {item.stack && (
                    <>
                      <span className="absolute -top-2.5 right-2 left-2 h-3 rounded-t-md bg-surface-2" />
                      <span className="absolute -top-1 right-1 left-1 h-3 rounded-t-md bg-surface-3" />
                    </>
                  )}
                  <Artwork
                    title={item.name}
                    className={`h-full w-full rounded-md ${
                      item.unavailable ? "opacity-30" : ""
                    }`}
                  />
                  {item.unavailable && (
                    <AlertTriangle
                      size={22}
                      className="absolute inset-0 m-auto text-text-secondary"
                    />
                  )}
                  {item.premium && (
                    <Crown
                      size={15}
                      className="absolute top-1 left-1 text-gold"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[18px] leading-6 font-medium text-white">
                    {item.name}
                  </p>
                  <p
                    className={`mt-1.5 text-[14px] ${
                      item.unavailable
                        ? "text-text-disabled"
                        : "text-text-tertiary"
                    }`}
                  >
                    {item.meta}
                  </p>
                </div>
                {item.action === "chevron" && (
                  <ChevronRight
                    size={22}
                    className="shrink-0 text-text-tertiary"
                  />
                )}
                {item.action === "delete" && (
                  <Trash size={22} className="shrink-0 text-text-tertiary" />
                )}
                {item.action === "progress" && (
                  <HalfCircle size={22} className="shrink-0 text-white" />
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </Screen>
  )
}
