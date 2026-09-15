import { hasArtwork } from "@/data/artwork"

import { Bolt, Crown, MoreVertical, PlayFilled } from "@/design-system/icons"

import Artwork from "./Artwork"

import {
  CARD_SPEC,
  CARD_SURFACE,
  LIVE,
  PLAY_WASH,
  PREMIUM,
  TAG,
  TAG_FILL,
  TAG_STROKE,
  TAG_TEXT,
} from "./cardSpec"

export type CardRatio = "16:9" | "2:3" | "1:1"

export type CardSize = "xs" | "sm" | "md" | "lg"

export type CardShape = "square" | "circle"

/** The gradient corner wash the crown sits inside. */

function PremiumCorner({ preset }: { preset: keyof typeof PREMIUM }) {
  const p = PREMIUM[preset]

  return (
    <div
      className="absolute top-0 left-0 flex items-start"
      style={{
        width: p.boxW,

        height: p.boxH,

        padding: p.pad,

        backgroundImage: p.gradient,
      }}
    >
      <Crown size={p.icon} className="text-gold" />
    </div>
  )
}

type TagProps = {
  size: "sm" | "lg"
  bottom: number
}

function NewReleaseTag({ size, bottom }: TagProps) {
  const t = TAG[size]

  return (
    <div
      className="absolute left-1/2 flex -translate-x-1/2 items-center"
      style={{
        bottom,

        gap: t.gap,

        paddingInline: t.px,

        paddingBlock: t.py,

        borderRadius: t.radius,

        border: `${t.border}px solid ${TAG_STROKE}`,

        backgroundImage: TAG_FILL,
      }}
    >
      <Bolt size={t.zap} className="shrink-0 text-gold" />
      {/* Figma fills the label with a gradient rather than a flat colour. */}
      <span
        className="font-poppins bg-clip-text whitespace-nowrap text-transparent italic"
        style={{ fontSize: t.text, fontWeight: 700, backgroundImage: TAG_TEXT }}
      >
        New Release
      </span>
    </div>
  )
}

function LiveBadge({ size }: { size: "sm" | "lg" }) {
  const l = LIVE[size]

  return (
    <div
      className="absolute flex items-center justify-end bg-black/70"
      style={{
        top: l.top,

        right: l.right,

        gap: l.gap,

        paddingInline: l.px,

        paddingBlock: l.py,

        borderRadius: l.radius,
      }}
    >
      <span
        className="shrink-0 rounded-full bg-live"
        style={{ width: l.dot, height: l.dot }}
      />
      <span
        className="font-bold text-white uppercase"
        style={{ fontSize: l.text, lineHeight: `${l.lh}px` }}
      >
        live
      </span>
    </div>
  )
}

export default function Card({
  title,

  ratio = "16:9",

  size = "md",

  shape = "square",

  premium = true,

  live = false,

  tags = true,

  play = false,

  belowText = true,

  progress,

  heading = "Heading text",

  supporting = "Supporting text",

  fluid = false,

}: {
  /** Seeds the placeholder artwork and names the card for assistive tech. */
  title: string

  ratio?: CardRatio

  size?: CardSize

  /** Circle applies at 1:1 only; Figma gates every overlay behind shape=square. */
  shape?: CardShape

  premium?: boolean

  live?: boolean

  /** The New Release pill. Named `tags` to match the Figma property. */
  tags?: boolean

  /** Bottom-left play wash on a browsable card. */
  play?: boolean

  belowText?: boolean

  /** 0–100. Selects the Figma `continue` variant: centre play and a track. */
  progress?: number

  heading?: string

  supporting?: string

  fluid?: boolean
}) {
  const spec = CARD_SPEC[ratio][size] ?? CARD_SPEC[ratio].md

  const circle = ratio === "1:1" && shape === "circle"

  const isContinue = progress !== undefined && ratio === "16:9"

  // Only 16:9 xs/sm/md/continue carry a caption; every other card is bare art.

  const caption = spec.text && belowText && !isContinue

  const continueCaption = spec.text && belowText && isContinue

  return (
    <div
      className={`flex flex-col items-start ${fluid ? "w-full" : "shrink-0"}`}
      style={{ gap: spec.gap, width: fluid ? undefined : spec.width }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: fluid ? undefined : spec.height,

          // A fluid card takes its height from the ratio rather than the ramp.

          aspectRatio:
            fluid || !spec.height
              ? { "16:9": "160 / 90", "2:3": "2 / 3", "1:1": "1 / 1" }[ratio]
              : undefined,

          borderRadius: circle ? 1000 : spec.radius,

          background: CARD_SURFACE,
        }}
      >
        {hasArtwork(title) && (
          <Artwork title={title} className="h-full w-full" />
        )}

        {!circle && (
          <>
            {premium && <PremiumCorner preset={spec.premium} />}
            {live && <LiveBadge size={spec.live} />}
            {tags && !isContinue && (
              <NewReleaseTag size={spec.tag} bottom={spec.tagBottom} />
            )}

            {play && !isContinue && (
              <div
                className="absolute bottom-0 left-0 flex items-end"
                style={{
                  width: 50,

                  height: 50,

                  padding: "34px 35px 4px 4px",

                  backgroundImage: PLAY_WASH,
                }}
              >
                <PlayFilled size={spec.playIcon} className="text-white" />
              </div>
            )}

            {isContinue && (
              <>
                <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-black/20 p-1">
                  <PlayFilled size={12} className="text-white" />
                </span>
                <div
                  className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-2.5 py-2"
                  style={{
                    height: 26.845,

                    backgroundImage:
                      "linear-gradient(0deg, #202020 0%, rgba(32,32,32,0) 100%)",
                  }}
                >
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-r-full bg-white"
                      style={{
                        width: `${Math.min(100, Math.max(0, progress))}%`,
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {(caption || continueCaption) && spec.text && (
        <div
          className={`flex h-8 w-full items-start ${
            continueCaption ? "justify-between pl-1" : "justify-center px-1"
          }`}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
            <p
              className="truncate font-medium text-[#fefefe]"
              style={{ fontSize: spec.text.heading }}
            >
              {heading}
            </p>
            <p
              className="truncate text-[#acacac]"
              style={{
                fontSize: spec.text.supporting,

                lineHeight: "11.872px",
              }}
            >
              {supporting}
            </p>
          </div>
          {continueCaption && (
            <MoreVertical size={24} className="shrink-0 text-[#fefefe]" />
          )}
        </div>
      )}
    </div>
  )
}
