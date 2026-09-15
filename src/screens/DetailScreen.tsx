import { useState } from "react"
import Artwork from "@/design-system/components/Artwork"
import Screen from "@/design-system/components/Screen"
import { TAG_TEXT } from "@/design-system/components/cardSpec"
import {
  Bolt,
  ChevronDown,
  Close,
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

/** Transcribed from Figma node 3282:21962. */
const SUBSCRIBE_TEXT =
  "linear-gradient(90.1deg, rgb(231,216,119) 3.2273%, rgb(255,196,51) 100.28%)"

const LANGUAGES = ["English", "मराठी", "हिन्दी", "தமிழ்", "తెలుగు", "বাংলা"]

const ACTIONS = [
  { icon: <Plus size={17.359} />, label: "Watchlist" },
  { icon: <ThumbUp size={17.359} />, label: "Like" },
  { icon: <DownloadArrow size={17.36} />, label: "Download" },
  { icon: <Share size={17.359} />, label: "Share" },
]

function Rule() {
  return <span className="h-4 w-px shrink-0 bg-[#454545]" />
}

export default function DetailScreen({
  titleArt = true,
}: {
  titleArt?: boolean
}) {
  const [tab, setTab] = useState(detailTitle.tabs[0])
  const [season, setSeason] = useState(detailTitle.seasons[2])
  const [language, setLanguage] = useState(LANGUAGES[0])
  const titleArtSrc = artworkFor(`${detailTitle.name} title art`)

  return (
    <Screen>
      {/* Backdrop — 404×225, rounded 10, with the language bar over its foot. */}
      <div className="flex justify-center pt-[11px]">
        <div className="relative h-[225px] w-[404px] overflow-hidden rounded-[10px]">
          <Artwork title={detailTitle.name} className="h-full w-full" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(32,32,32,0.8) 0%, rgba(32,32,32,0) 34.052%)",
            }}
          />

          {/* Collapse control, top-right inside its own corner wash. */}
          <div
            className="absolute top-0 right-0 flex h-[89px] w-[73px] items-start justify-end p-[6.348px]"
            style={{
              backgroundImage:
                "linear-gradient(224.777deg, rgba(31,31,31,0.5) 26.149%, rgba(31,31,31,0) 70.279%)",
            }}
          >
            <button
              type="button"
              aria-label="Collapse"
              className="focus-ring flex items-center rounded-full bg-black/60 p-[4.086px]"
            >
              <ChevronDown size={23.828} className="text-white" />
            </button>
          </div>

          <div
            className="absolute inset-x-0 bottom-0 flex h-[136px] items-end gap-[10.301px] p-[12.361px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #1f1f1f 0%, rgba(10,10,10,0) 100%)",
            }}
          >
            <div className="no-scrollbar flex h-[26px] w-[300px] items-center gap-3 overflow-x-auto">
              <span className="shrink-0 text-white">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden>
                  <path
                    d="M2 6.5h3.2L9.5 3v12L5.2 11.5H2v-5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.6 6a4.2 4.2 0 0 1 0 6M15 3.6a7.6 7.6 0 0 1 0 10.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(l)}
                  className={`focus-ring shrink-0 rounded-[28px] px-3 py-1 text-[12px] text-white ${
                    l === language
                      ? "border border-white/30 bg-[rgba(74,74,74,0.2)] backdrop-blur-[2px]"
                      : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Close language picker"
              className="focus-ring shrink-0"
            >
              <Close size={26} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* DEE — the content column. */}
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-[18px] px-4 pt-2.5">
          {titleArt ? (
            <div className="flex justify-center">
              {titleArtSrc ? (
                <img
                  src={titleArtSrc}
                  alt={detailTitle.name}
                  style={{ width: 178, height: 55.996 }}
                  className="object-contain"
                />
              ) : (
                <div className="text-center">
                  <p className="text-[34px] leading-none font-black tracking-[0.02em] text-white">
                    MAHARANI
                  </p>
                  <p className="mt-1.5 text-[11px] font-bold tracking-[0.22em] text-white">
                    {detailTitle.tagline}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <h1 className="text-center text-[26px] leading-8 font-bold text-white">
              {detailTitle.name}
            </h1>
          )}

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2.5">
              <span className="flex items-center gap-[3px]">
                <Bolt size={16} className="text-gold" />
                <span
                  className="font-poppins bg-clip-text text-[10px] whitespace-nowrap text-transparent italic"
                  style={{ fontWeight: 700, backgroundImage: TAG_TEXT }}
                >
                  New Release
                </span>
              </span>
              <Rule />
              <span className="flex items-center gap-[6.329px]">
                <RatingStar size={18.667} className="text-white" />
                <span className="text-[10px] font-bold whitespace-nowrap text-white">
                  {detailTitle.rating}
                </span>
              </span>
              <Rule />
              <span className="flex items-center gap-[6.329px]">
                <ThumbUp size={18.666} className="text-white" />
                <span className="text-[10px] font-bold whitespace-nowrap text-white">
                  {detailTitle.likes}
                </span>
              </span>
            </div>
            <div className="flex items-end justify-center gap-[5px]">
              <p className="text-[12px] leading-3 font-medium whitespace-nowrap text-[#adadad]">
                {detailTitle.meta.join(" • ")} •{" "}
              </p>
              <DolbyMark height={8.358} />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              className="focus-ring flex h-12 w-full items-center justify-center gap-[4.389px] rounded-lg px-2.5 py-3.5"
              style={{
                backgroundImage: "linear-gradient(180deg, #ffffff 0%, #ababab 100%)",
              }}
            >
              <PlayFilled size={22} className="text-[#0a0a0a]" />
              <span className="text-[14px] leading-[1.6] font-semibold whitespace-nowrap text-[#0a0a0a]">
                Watch Free Episode
              </span>
            </button>
            <button
              type="button"
              className="focus-ring flex h-12 w-full items-center justify-center gap-[4.389px] rounded-lg border border-[rgba(173,173,173,0.05)] bg-[rgba(254,254,254,0.08)] px-2.5 py-3.5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <Crown size={22} className="text-gold" />
              <span
                className="bg-clip-text text-[14px] leading-[1.6] font-semibold whitespace-nowrap text-transparent"
                style={{ backgroundImage: SUBSCRIBE_TEXT }}
              >
                Subscribe Now
              </span>
            </button>
          </div>

          {/* Truncated to three lines, with the affordance inline on the last. */}
          <p className="line-clamp-3 w-[380px] text-[12px] leading-[1.6] text-[#adadad]">
            {detailTitle.synopsis}...{" "}
            <span className="inline-flex items-center gap-0.5 align-middle text-white">
              more <ChevronDown size={12} />
            </span>
          </p>

          <div className="flex items-center gap-[7.595px]">
            {ACTIONS.map(({ icon, label }) => (
              <button
                key={label}
                type="button"
                className="focus-ring flex flex-1 flex-col items-center justify-center gap-[5.425px] rounded-full text-[#cfcfcf]"
              >
                {icon}
                <span className="text-[14px] leading-[22.024px] font-medium whitespace-nowrap text-[#cfcfcf] [text-shadow:0px_1.085px_0.542px_rgba(0,0,0,0.3)]">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 px-4">
          <div className="flex h-[45px] items-center gap-2 border-b border-[rgba(69,69,69,0.8)]">
            {detailTitle.tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-current={t === tab ? "true" : undefined}
                className={`focus-ring flex h-full flex-1 items-center justify-center px-3 text-[14px] leading-[1.5] font-medium text-[#fefefe] ${
                  t === tab ? "border-b border-[#fefefe]" : "opacity-60"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
            {detailTitle.seasons.map((s) => {
              const active = s === season
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSeason(s)}
                  className={`focus-ring relative shrink-0 rounded-full px-3 py-[9px] text-[12px] font-medium whitespace-nowrap [text-shadow:0px_1.085px_0.542px_rgba(0,0,0,0.3)] ${
                    active
                      ? "border border-white/50 text-white shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.1),0px_4px_4px_0px_rgba(0,0,0,0.1)]"
                      : "bg-[rgba(29,31,30,0.9)] text-[#d9d9d9]"
                  }`}
                  style={
                    active
                      ? {
                          backgroundImage:
                            "linear-gradient(180deg, rgba(226,230,229,0.1) 0%, rgba(184,192,190,0.1) 100%)",
                        }
                      : undefined
                  }
                >
                  {s}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-6">
          {episodes.map((ep, i) => (
            <div key={ep.title} className="flex flex-col items-center gap-2 px-4">
              <div
                className={`flex w-full items-center ${i === 0 ? "gap-3" : "gap-2"}`}
              >
                <Artwork
                  title={ep.title}
                  className="h-[72px] w-[129px] shrink-0 rounded-[4px]"
                />
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
                  {ep.tag && (
                    <p className="text-[10.009px] font-semibold text-white italic">
                      {ep.tag}
                    </p>
                  )}
                  <p
                    className={`truncate leading-[18px] font-semibold text-white ${
                      i === 0 ? "text-[12px]" : "text-[14px]"
                    }`}
                  >
                    {ep.title}
                  </p>
                  <p className="truncate text-[10px] leading-3 font-medium text-[#acacac]">
                    {ep.meta}
                  </p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center">
                  <DownloadArrow size={16} className="text-white" />
                </span>
              </div>
              <p className="line-clamp-2 w-full text-[12px] leading-[18px] text-[#acacac]">
                {ep.synopsis}
                {i === 0 && (
                  <>
                    {" "}
                    <span className="inline-flex items-center gap-0.5 align-middle text-white">
                      more <ChevronDown size={12} />
                    </span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  )
}
