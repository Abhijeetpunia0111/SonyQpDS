import { artworkFor, hasArtwork } from "@/data/artwork"
import { Bolt, Crown, PlayFilled, Plus } from "@/design-system/icons"
import Artwork from "./Artwork"
import { ADD_STROKE, BANNER_STROKE, TAG_STROKE, TAG_TEXT } from "./cardSpec"

export type BannerRatio = "hero" | "16:9" | "1:1"

/**
 * Measurements transcribed from Figma node 3279:21845. The two short ratios
 * share one bottom bar; the hero is a separate composition with its own
 * blurred tag, title art and larger action pair.
 */
const HERO_BG =
  "linear-gradient(180deg, rgba(32,32,32,0) 55.031%, rgb(32,32,32) 93.157%), linear-gradient(90deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.2) 100%)"

const SHORT_SHADOW =
  "0px 8px 8px 0px rgba(0,0,0,0.1), 0px 0px 0px 0px rgba(0,0,0,0.1), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 4px 4px 0px rgba(0,0,0,0.1), 0px 8px 8px 0px rgba(0,0,0,0.1)"

const ADD_FILL =
  "linear-gradient(180deg, rgba(66,66,66,0.36) 0%, rgba(32,32,32,0.4) 100%)"

type ActionProps = {
  hero: boolean
  label: string
}

function AddButton({ hero, label }: ActionProps) {
  const size = hero ? 42.264 : 35.598
  return (
    <button
      type="button"
      aria-label={label}
      className="focus-ring flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: `${hero ? 0.996 : 0}px solid ${ADD_STROKE}`,
        backgroundImage: ADD_FILL,
        backdropFilter: `blur(${hero ? 2.988 : 25}px)`,
      }}
    >
      <Plus size={hero ? 16.467 : 13.869} className="text-white" />
    </button>
  )
}

function PlayButton({ hero, label }: ActionProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="focus-ring flex shrink-0 items-center rounded-full"
      style={{
        padding: hero ? 13.944 : 10.618,
        border: `${hero ? 0.996 : 0.774}px solid #ffffff`,
        backgroundImage: hero
          ? "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, #ababab 100%)"
          : "linear-gradient(180deg, #e2e6e5 0%, #ababab 100%)",
      }}
    >
      <PlayFilled
        size={hero ? 23.905 : 20.134}
        className="text-action-on-primary"
      />
    </button>
  )
}

type TagLabelProps = {
  zap: number
  text: number
  boxed: boolean
}

function TagLabel({
  zap,
  text,
  boxed,
}: TagLabelProps) {
  return (
    <div
      className={`flex shrink-0 items-center ${boxed ? "" : "py-[4.196px]"}`}
      style={
        boxed
          ? {
              gap: 2.988,
              paddingInline: 6.973,
              paddingBlock: 4.648,
              borderRadius: 7.968,
              border: `0.996px solid ${TAG_STROKE}`,
              backgroundImage:
                "linear-gradient(180deg, rgba(29,31,30,0.5) 0%, rgba(32,32,32,0.5) 100%)",
              backdropFilter: "blur(9.96px)",
            }
          : { borderRadius: 7.192 }
      }
    >
      <span
        className="flex items-center"
        style={{ gap: boxed ? 2.988 : 2.697 }}
      >
        <Bolt size={zap} className="shrink-0 text-gold" />
        <span
          className="font-poppins bg-clip-text whitespace-nowrap text-transparent italic"
          style={{ fontSize: text, fontWeight: 700, backgroundImage: TAG_TEXT }}
        >
          New Release
        </span>
      </span>
    </div>
  )
}

export default function Banner({
  title,
  ratio = "hero",
  premium = true,
  tags = true,
  meta = "2021 • U • Hindi + 4 Languages • 4 Seasons • Action, Adventure",
  languages = "4 Languages",
  genres = "Comedy, Family",
  keyArt,
  fluid = false,
  /** The New Release label. Named `tags` to match the Figma property. */
  /** Single metadata line on the 16:9 and 1:1 ratios. */
  /** The two dot-separated facts under the hero's title art. */
  /** Stand-in lettering, used only until `<title> title art` exists in assets. */
}: {
  title: string
  ratio?: BannerRatio
  premium?: boolean
  tags?: boolean
  meta?: string
  languages?: string
  genres?: string
  keyArt?: string
  fluid?: boolean
}) {
  const hero = ratio === "hero"
  const titleArt = artworkFor(`${title} title art`)

  return (
    <div
      className="relative flex shrink-0 flex-col items-center overflow-hidden"
      style={{
        width: fluid ? "100%" : 380,
        height: hero ? 487 : ratio === "1:1" ? 380 : 213.75,
        borderRadius: hero ? 20 : 12,
        boxShadow: hero ? undefined : SHORT_SHADOW,
        justifyContent: hero ? "center" : "flex-end",
      }}
    >
      {hasArtwork(title) && (
        <Artwork title={title} className="absolute inset-0 h-full w-full" />
      )}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: hero ? HERO_BG : undefined }}
      />
      {/* A gradient ring: a plain border cannot carry a gradient and keep the
          radius, so the stroke is painted and then masked to its own edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: "inherit",
          padding: 2,
          background: BANNER_STROKE,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {!hero && premium && (
        <div
          className="absolute left-0 flex items-start"
          style={{
            top: -0.25,
            width: 58,
            height: 62.35,
            padding: 5.8,
            backgroundImage:
              "linear-gradient(138.374deg, rgba(31,31,31,0.4) 6.7573%, rgba(31,31,31,0) 50.921%)",
          }}
        >
          <Crown size={18.455} className="text-gold" />
        </div>
      )}

      {hero ? (
        <div
          className="relative flex flex-col items-start justify-between"
          style={{ height: 443, width: 346.618 }}
        >
          {tags && <TagLabel zap={15.936} text={11.95} boxed />}

          <div className="flex w-full items-end justify-between">
            <div
              className="flex flex-col items-start"
              style={{ width: 231.079, gap: 8.547 }}
            >
              {titleArt ? (
                <img
                  src={titleArt}
                  alt={title}
                  style={{ width: 182.273, height: 79.377 }}
                  className="object-contain object-bottom"
                />
              ) : (
                <p
                  className="font-keyart text-white"
                  style={{ fontSize: 46, lineHeight: 1 }}
                >
                  {keyArt ?? title}
                </p>
              )}
              <div className="flex w-full items-center" style={{ gap: 8.547 }}>
                {premium && <Crown size={18.455} className="text-gold" />}
                <span
                  className="font-medium whitespace-nowrap text-[#848484] capitalize"
                  style={{ fontSize: 11.952, lineHeight: "21.369px" }}
                >
                  {languages}
                </span>
                <span
                  className="shrink-0 rounded-full bg-[#848484]"
                  style={{ width: 4.274, height: 4.274 }}
                />
                <span
                  className="font-medium whitespace-nowrap text-[#848484] capitalize"
                  style={{ fontSize: 11.952, lineHeight: "21.369px" }}
                >
                  {genres}
                </span>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center"
              style={{ gap: 19.921 }}
            >
              <AddButton hero label={`Add ${title} to watchlist`} />
              <PlayButton hero label={`Play ${title}`} />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex w-full items-end gap-2.5 p-3">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #202020 0%, rgba(32,32,32,0) 100%)",
            }}
          />
          <div className="relative flex min-w-0 flex-1 flex-col items-start gap-1">
            {tags && <TagLabel zap={14.384} text={10.79} boxed={false} />}
            <p
              className="font-medium text-[#adadad]"
              style={{ fontSize: 10, lineHeight: "12px", width: 235 }}
            >
              {meta}
            </p>
          </div>
          <div
            className={`relative flex shrink-0 items-center justify-center ${
              ratio === "1:1" ? "flex-col" : ""
            }`}
            style={{ gap: 9.708 }}
          >
            <AddButton hero={false} label={`Add ${title} to watchlist`} />
            <PlayButton hero={false} label={`Play ${title}`} />
          </div>
        </div>
      )}
    </div>
  )
}
