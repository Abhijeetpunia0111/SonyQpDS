/**
 * Measurements transcribed from the Figma dev panel for the four card
 * component sets (3279:21732, 3279:21798, 3279:21820, 3279:21845).
 *
 * The fractional values are Figma's, not rounded approximations — the overlay
 * scales were produced by scaling one master at several sizes, which is why
 * they land on numbers like 11.279 rather than 12. They are kept verbatim so
 * the rendered card matches the frame pixel for pixel.
 */

export type PremiumSpec = {
  boxW: number
  boxH: number
  pad: number
  icon: number
  gradient: string
}

/** The corner wash behind the crown. Not a bare icon — it carries its own scrim. */
export const PREMIUM: Record<string, PremiumSpec> = {
  compact: {
    boxW: 38.066,
    boxH: 43,
    pad: 3.807,
    icon: 11.279,
    gradient:
      "linear-gradient(136.96deg, rgb(31,31,31) 6.7573%, rgba(31,31,31,0) 50.921%)",
  },
  wide169: {
    boxW: 57,
    boxH: 61.275,
    pad: 5.7,
    icon: 18.136,
    gradient:
      "linear-gradient(138.374deg, rgba(31,31,31,0.4) 6.7573%, rgba(31,31,31,0) 50.921%)",
  },
  poster: {
    boxW: 53.124,
    boxH: 60.011,
    pad: 5.312,
    icon: 15.741,
    gradient:
      "linear-gradient(136.96deg, rgb(31,31,31) 6.7573%, rgba(31,31,31,0) 50.921%)",
  },
  posterLarge: {
    boxW: 67.976,
    boxH: 76.788,
    pad: 6.798,
    icon: 20.141,
    gradient:
      "linear-gradient(136.96deg, rgb(31,31,31) 6.7573%, rgba(31,31,31,0) 50.921%)",
  },
}

export type TagSpec = {
  border: number
  radius: number
  px: number
  py: number
  gap: number
  zap: number
  text: number
}

/** The New Release pill: gradient fill, hairline white border, gradient text. */
export const TAG: Record<"sm" | "lg", TagSpec> = {
  sm: {
    border: 0.703,
    radius: 5.62,
    px: 4.918,
    py: 3.279,
    gap: 2.108,
    zap: 11.241,
    text: 8.43,
  },
  lg: {
    border: 0.899,
    radius: 7.192,
    px: 6.293,
    py: 4.196,
    gap: 2.697,
    zap: 14.384,
    text: 10.79,
  },
}

/**
 * Figma's dev panel reports every one of these strokes as solid `#fefefe`,
 * because it flattens a gradient or low-opacity stroke to its base colour.
 * Sampling a 4x export of node 3279:21876 shows what they actually are: the
 * banner edge fades from 20% to 0% down the card (a solid 20% stroke would
 * read #4C at the bottom, but it measures #20), and the tag and add-button
 * borders sit near 20% and 25%.
 */
export const BANNER_STROKE =
  "linear-gradient(180deg, rgba(254,254,254,0.2) 0%, rgba(254,254,254,0) 100%)"
export const TAG_STROKE = "rgba(254,254,254,0.18)"
export const ADD_STROKE = "rgba(254,254,254,0.25)"

export const TAG_FILL = "linear-gradient(180deg, #1d1f1e 0%, #202020 100%)"
export const TAG_TEXT =
  "linear-gradient(93.202deg, rgb(254,254,254) 6.3562%, rgb(188,188,188) 97.138%)"

export type LiveSpec = {
  radius: number
  px: number
  py: number
  gap: number
  dot: number
  text: number
  lh: number
  right: number
  top: number
}

export const LIVE: Record<"sm" | "lg", LiveSpec> = {
  sm: {
    radius: 3.013,
    px: 4.52,
    py: 3.013,
    gap: 2.127,
    dot: 3.545,
    text: 7.09,
    lh: 8.507,
    right: 3.53,
    top: 3.47,
  },
  lg: {
    radius: 4,
    px: 6,
    py: 4,
    gap: 2.824,
    dot: 4.706,
    text: 9.41,
    lh: 11.294,
    right: 10.47,
    top: 10,
  },
}

/** Bottom-left wash behind the small play glyph on a browsable card. */
export const PLAY_WASH =
  "linear-gradient(40.088deg, rgba(32,32,32,0.9) 2.1465%, rgba(32,32,32,0.6) 23.658%, rgba(32,32,32,0) 44.77%)"

export type CaptionSpec = {
  heading: number
  supporting: number
}

export type CardSpec = {
  width: number
  /** Fixed height where Figma pins one; otherwise the aspect box drives it. */
  height?: number
  radius: number
  /** Gap between the artwork and the caption block. */
  gap: number
  premium: keyof typeof PREMIUM
  tag: "sm" | "lg"
  tagBottom: number
  live: "sm" | "lg"
  text?: CaptionSpec
  playIcon: number
}

export const CARD_SPEC: Record<string, Record<string, CardSpec>> = {
  "16:9": {
    xs: {
      width: 121,
      radius: 8,
      gap: 4,
      premium: "compact",
      tag: "sm",
      tagBottom: 6.33,
      live: "sm",
      text: { heading: 12, supporting: 10 },
      playIcon: 10,
    },
    sm: {
      width: 159,
      radius: 8,
      gap: 8,
      premium: "compact",
      tag: "sm",
      tagBottom: 6.33,
      live: "sm",
      text: { heading: 12, supporting: 10 },
      playIcon: 12,
    },
    md: {
      width: 186,
      height: 105,
      radius: 8,
      gap: 8,
      premium: "compact",
      tag: "sm",
      tagBottom: 3.56,
      live: "sm",
      text: { heading: 14, supporting: 12 },
      playIcon: 12,
    },
    lg: {
      width: 380,
      height: 214,
      radius: 12,
      gap: 0,
      premium: "wide169",
      tag: "lg",
      tagBottom: 6.56,
      live: "lg",
      playIcon: 12,
    },
  },
  "2:3": {
    sm: {
      width: 121.005,
      height: 182,
      radius: 8,
      gap: 0,
      premium: "poster",
      tag: "sm",
      tagBottom: 5.91,
      live: "lg",
      playIcon: 12,
    },
    md: {
      width: 186,
      height: 280,
      radius: 8,
      gap: 0,
      premium: "poster",
      tag: "sm",
      tagBottom: 5.91,
      live: "lg",
      playIcon: 12,
    },
    lg: {
      width: 251,
      height: 377,
      radius: 8,
      gap: 0,
      premium: "posterLarge",
      tag: "lg",
      tagBottom: 7.56,
      live: "lg",
      playIcon: 12,
    },
  },
  "1:1": {
    sm: {
      width: 121,
      height: 121,
      radius: 8,
      gap: 0,
      premium: "compact",
      tag: "sm",
      tagBottom: 5.91,
      live: "lg",
      playIcon: 12,
    },
    md: {
      width: 163,
      height: 163,
      radius: 8,
      gap: 0,
      premium: "compact",
      tag: "sm",
      tagBottom: 5.91,
      live: "lg",
      playIcon: 12,
    },
    lg: {
      width: 251,
      height: 251,
      radius: 8,
      gap: 0,
      premium: "compact",
      tag: "sm",
      tagBottom: 5.91,
      live: "lg",
      playIcon: 12,
    },
  },
}

/** The card surface behind artwork, per the dev panel. Darker than surface-2. */
export const CARD_SURFACE = "#111111"
