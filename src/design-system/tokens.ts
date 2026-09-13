export type ColorToken = {
  name: string
  value: string
  cssVar: string
  usage: string
  /** Contrast ratio of this colour as text on surface-2 (#1A1A1A). Null when it is not a text colour. */
  contrast?: number
}

export type ColorGroup = {
  group: string
  description: string
  tokens: ColorToken[]
}

export const colors: ColorGroup[] = [
  {
    group: "Surface",
    description:
      "Five steps from pure black upward. Elevation on this product is communicated by surface lightness, not by shadow — a card one step lighter than its parent reads as one step closer.",
    tokens: [
      {
        name: "bg",
        value: "#0A0A0A",
        cssVar: "--color-bg",
        usage: "App background and video letterbox",
      },
      {
        name: "surface-1",
        value: "#0D0D0D",
        cssVar: "--color-surface-1",
        usage: "Sheets and full-page panels",
      },
      {
        name: "surface-2",
        value: "#1A1A1A",
        cssVar: "--color-surface-2",
        usage: "Cards, list rows, chips, search field",
      },
      {
        name: "surface-3",
        value: "#262626",
        cssVar: "--color-surface-3",
        usage: "Floating navigation, circular overlay buttons",
      },
      {
        name: "surface-4",
        value: "#333333",
        cssVar: "--color-surface-4",
        usage: "Pressed state and skeleton blocks",
      },
      {
        name: "art-placeholder",
        value: "#202020",
        cssVar: "--color-art-placeholder",
        usage:
          "Flat fill standing in for title art that has not been supplied yet",
      },
      {
        name: "chip",
        value: "#1D1F1E90",
        cssVar: "--color-chip",
        usage: "Chip fill — translucent, so chips sit on artwork as well as on the page",
      },
      {
        name: "border-subtle",
        value: "#2B2B2B",
        cssVar: "--color-border-subtle",
        usage: "Hairline dividers between list rows",
      },
      {
        name: "border-strong",
        value: "#5C5C5C",
        cssVar: "--color-border-strong",
        usage: "Selected chip outline, focus ring",
      },
    ],
  },
  {
    group: "Action",
    description:
      "White is the primary action colour. The highest-priority button on any screen is the white one, and there is never more than one per view.",
    tokens: [
      {
        name: "action-primary",
        value: "#FFFFFF",
        cssVar: "--color-action-primary",
        usage: "Primary button fill, active tab indicator, progress fill",
      },
      {
        name: "action-primary-end",
        value: "#C9C9C9",
        cssVar: "--color-action-primary-end",
        usage: "End stop of the primary button gradient",
      },
      {
        name: "action-on-primary",
        value: "#000000",
        cssVar: "--color-action-on-primary",
        usage: "Label and icon sitting on a white button",
      },
      {
        name: "action-secondary",
        value: "#1A1A1A",
        cssVar: "--color-action-secondary",
        usage:
          "Secondary button fill — same value as surface-2, named separately so intent is explicit",
      },
    ],
  },
  {
    group: "Brand",
    description:
      "Gold is the paywall. It marks the logo, the Subscribe affordance, premium content and the active navigation item — nothing else. Purple appears only inside the Upgrade badge gradient.",
    tokens: [
      {
        name: "gold",
        value: "#F5C518",
        cssVar: "--color-gold",
        usage: "Logo, Subscribe label, crown, IMDB rating, active nav icon",
        contrast: 11.0,
      },
      {
        name: "gold-dim",
        value: "#C9A014",
        cssVar: "--color-gold-dim",
        usage: "Pressed state of a gold affordance",
      },
      {
        name: "premium-start",
        value: "#7818B4",
        cssVar: "--color-premium-start",
        usage: "Upgrade badge gradient, start stop",
      },
      {
        name: "premium-end",
        value: "#A21CAF",
        cssVar: "--color-premium-end",
        usage: "Upgrade badge gradient, end stop",
      },
    ],
  },
  {
    group: "Text",
    description:
      "Four steps, each verified against surface-2. text-disabled is deliberately below the 4.5:1 threshold and is therefore only ever used for non-essential text that is duplicated elsewhere.",
    tokens: [
      {
        name: "text-primary",
        value: "#FFFFFF",
        cssVar: "--color-text-primary",
        usage: "Titles, button labels, list row titles",
        contrast: 18.9,
      },
      {
        name: "text-secondary",
        value: "#ACACAC",
        cssVar: "--color-text-secondary",
        usage: "Synopsis, metadata rows, inactive tab labels",
        contrast: 8.2,
      },
      {
        name: "text-tertiary",
        value: "#8C8E8E",
        cssVar: "--color-text-tertiary",
        usage: "Row subtitles, file sizes, inactive nav icons",
        contrast: 5.4,
      },
      {
        name: "text-disabled",
        value: "#5C5C5C",
        cssVar: "--color-text-disabled",
        usage: "Unavailable download, placeholder text",
        contrast: 2.4,
      },
    ],
  },
]

export const gradients = [
  {
    name: "gradient-action",
    css: "linear-gradient(180deg, #DEDEDE 0%, #FFFFFF 45%, #C2C2C2 100%)",
    usage:
      "The primary button. Its slight vertical fall-off is what separates it from a flat white surface.",
  },
  {
    name: "gradient-premium",
    css: "linear-gradient(90deg, #7818B4 0%, #A21CAF 100%)",
    usage:
      "The Upgrade badge on the subscription card. Not available for any other element.",
  },
  {
    name: "gradient-scrim",
    css: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.88) 100%)",
    usage:
      "Applied to every piece of artwork that carries text. Load-bearing, not decorative.",
  },
]

export type TypeToken = {
  name: string
  size: number
  lineHeight: number
  weight: number
  usage: string
}

export const typography: TypeToken[] = [
  {
    name: "display-24",
    size: 24,
    lineHeight: 32,
    weight: 700,
    usage: "Detail title without title art, empty-state headline",
  },
  {
    name: "title-20",
    size: 20,
    lineHeight: 28,
    weight: 600,
    usage: "Screen title — Profiles, My Download",
  },
  {
    name: "title-18",
    size: 18,
    lineHeight: 24,
    weight: 500,
    usage: "Settings row title, premium plan name",
  },
  {
    name: "title-16",
    size: 16,
    lineHeight: 24,
    weight: 600,
    usage: "Section header, primary button label, episode title",
  },
  {
    name: "label-14",
    size: 14,
    lineHeight: 20,
    weight: 500,
    usage: "Chip label, tab label, card title, status-bar clock",
  },
  {
    name: "body-14",
    size: 14,
    lineHeight: 20,
    weight: 400,
    usage: "Synopsis and descriptive paragraphs",
  },
  {
    name: "body-12",
    size: 12,
    lineHeight: 16,
    weight: 400,
    usage: "Metadata row, row subtitle, episode numbering",
  },
  {
    name: "caption-10",
    size: 10,
    lineHeight: 16,
    weight: 600,
    usage: "Badge text, certification tag",
  },
]

export const fontFamily = "Inter"

export const fontWeights = [
  { name: "Regular", value: 400, usage: "Body copy and metadata" },
  { name: "Medium", value: 500, usage: "Chips, tabs, settings titles" },
  { name: "SemiBold", value: 600, usage: "Section headers and buttons" },
  {
    name: "Bold",
    value: 700,
    usage: "Screen titles and empty-state headlines",
  },
]

export type SpaceToken = {
  name: string
  value: number
  usage: string
}

export const spacing: SpaceToken[] = [
  { name: "space-0", value: 0, usage: "Flush edges and full-bleed media" },
  {
    name: "space-1",
    value: 2,
    usage: "Optical icon nudge — the single sub-4 exception",
  },
  { name: "space-2", value: 4, usage: "Icon to label inside a chip or badge" },
  {
    name: "space-3",
    value: 8,
    usage: "Gap between cards in a horizontal rail",
  },
  {
    name: "space-4",
    value: 12,
    usage: "List row inner padding, chip horizontal padding",
  },
  {
    name: "space-5",
    value: 16,
    usage: "Screen gutter — the default on every screen",
  },
  { name: "space-6", value: 20, usage: "Section header to its content" },
  { name: "space-7", value: 24, usage: "Between stacked cards" },
  { name: "space-8", value: 32, usage: "Between content sections" },
  { name: "space-10", value: 40, usage: "Above a primary call to action" },
  { name: "space-12", value: 48, usage: "Empty-state vertical rhythm" },
  {
    name: "space-16",
    value: 64,
    usage: "Reserved area beneath the floating navigation",
  },
]

export type RadiusToken = {
  name: string
  value: number
  usage: string
}

export const radii: RadiusToken[] = [
  { name: "radius-none", value: 0, usage: "Full-bleed video surface" },
  { name: "radius-sm", value: 4, usage: "Progress track" },
  {
    name: "radius-md",
    value: 8,
    usage: "Poster card, episode thumbnail, backdrop",
  },
  {
    name: "radius-lg",
    value: 12,
    usage: "Primary and secondary buttons, download thumbnail",
  },
  {
    name: "radius-xl",
    value: 16,
    usage: "Category chip, settings row, hero card",
  },
  { name: "radius-2xl", value: 20, usage: "Featured hero, subscription card" },
  { name: "radius-3xl", value: 28, usage: "Floating bottom navigation" },
  {
    name: "radius-pill",
    value: 999,
    usage: "Filter chip, search field, avatar, circular button",
  },
]

export type ElevationToken = {
  name: string
  value: string
  usage: string
}

export const elevation: ElevationToken[] = [
  {
    name: "shadow-e1",
    value: "0 1px 2px rgb(0 0 0 / 0.6)",
    usage: "Badge or chip resting on artwork",
  },
  {
    name: "shadow-e2",
    value: "0 4px 12px rgb(0 0 0 / 0.5)",
    usage: "Card lifted off the page canvas",
  },
  {
    name: "shadow-e3",
    value: "0 12px 32px rgb(0 0 0 / 0.55)",
    usage: "Sheets and modals",
  },
  {
    name: "shadow-nav",
    value: "0 8px 28px rgb(0 0 0 / 0.7)",
    usage: "The floating bottom navigation, and nothing else",
  },
]

export const tokenJson = {
  color: Object.fromEntries(
    colors.flatMap((g) => g.tokens.map((t) => [t.name, t.value])),
  ),
  gradient: Object.fromEntries(gradients.map((g) => [g.name, g.css])),
  typography: Object.fromEntries(
    typography.map((t) => [
      t.name,
      {
        fontFamily,
        fontSize: t.size,
        lineHeight: t.lineHeight,
        fontWeight: t.weight,
      },
    ]),
  ),
  spacing: Object.fromEntries(spacing.map((s) => [s.name, s.value])),
  radius: Object.fromEntries(radii.map((r) => [r.name, r.value])),
  elevation: Object.fromEntries(elevation.map((e) => [e.name, e.value])),
}

type DtcgToken = { $type: string; $value: string | number; $description: string }
type DtcgGroup = { [key: string]: DtcgToken | DtcgGroup }

/**
 * W3C Design Tokens (DTCG) format, which the Figma Variables import plugins and
 * Tokens Studio both read.
 *
 * Figma Variables only support Color, Number, String and Boolean, so the
 * composite type styles are decomposed into font.size / font.lineHeight /
 * font.weight number variables rather than exported as text styles. Gradients
 * cannot be expressed as variables at all and are therefore omitted — create
 * them as Figma styles from the three entries on the Foundations page.
 */
export const figmaVariables: DtcgGroup = {
  color: Object.fromEntries(
    colors.map((g) => [
      g.group.toLowerCase(),
      Object.fromEntries(
        g.tokens.map((t) => [
          t.name,
          { $type: "color", $value: t.value, $description: t.usage },
        ]),
      ),
    ]),
  ),
  spacing: Object.fromEntries(
    spacing.map((s) => [
      s.name.replace(/^space-/, ""),
      { $type: "number", $value: s.value, $description: s.usage },
    ]),
  ),
  radius: Object.fromEntries(
    radii.map((r) => [
      r.name.replace(/^radius-/, ""),
      { $type: "number", $value: r.value, $description: r.usage },
    ]),
  ),
  font: {
    family: {
      sans: {
        $type: "string",
        $value: fontFamily,
        $description: "The only family in the system",
      },
    },
    size: Object.fromEntries(
      typography.map((t) => [
        t.name,
        { $type: "number", $value: t.size, $description: t.usage },
      ]),
    ),
    lineHeight: Object.fromEntries(
      typography.map((t) => [
        t.name,
        {
          $type: "number",
          $value: t.lineHeight,
          $description: `Line height for ${t.name}`,
        },
      ]),
    ),
    weight: Object.fromEntries(
      fontWeights.map((w) => [
        w.name.toLowerCase(),
        { $type: "number", $value: w.value, $description: w.usage },
      ]),
    ),
  },
}

export const themeCss = [
  "@theme {",
  `  --font-sans: '${fontFamily}', system-ui, sans-serif;`,
  "",
  ...colors.flatMap((g) => [
    `  /* ${g.group} */`,
    ...g.tokens.map((t) => `  ${t.cssVar}: ${t.value};`),
    "",
  ]),
  "  /* Radius */",
  ...radii.map(
    (r) => `  --${r.name}: ${r.value === 999 ? "999px" : `${r.value}px`};`,
  ),
  "",
  "  /* Type scale */",
  ...typography.flatMap((t) => [
    `  --text-${t.name}: ${t.size}px;`,
    `  --text-${t.name}--line-height: ${t.lineHeight}px;`,
    `  --text-${t.name}--font-weight: ${t.weight};`,
  ]),
  "",
  "  /* Elevation */",
  ...elevation.map((e) => `  --${e.name}: ${e.value};`),
  "}",
].join("\n")
