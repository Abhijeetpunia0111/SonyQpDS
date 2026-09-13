/**
 * Two layers, the way Figma Variables wants them.
 *
 * `primitives` is the raw ramp — the only place a literal hex appears.
 * `colors` is the semantic layer: every entry points at a primitive by name,
 * so a palette change happens in exactly one place. The screens only ever
 * reference semantic tokens.
 *
 * The ramp was derived by auditing the colours the nine screens actually use,
 * not invented up front: every primitive below is referenced by at least one
 * semantic token, and every semantic token is used by at least one component.
 */
export type Primitive = {
  name: string
  value: string
}

export const primitives: Record<string, Primitive[]> = {
  neutral: [
    { name: "black", value: "#000000" },
    { name: "neutral-950", value: "#0A0A0A" },
    { name: "neutral-900", value: "#101010" },
    { name: "neutral-850", value: "#161616" },
    { name: "neutral-800", value: "#202020" },
    { name: "neutral-750", value: "#282828" },
    { name: "neutral-700", value: "#303030" },
    { name: "neutral-600", value: "#404040" },
    { name: "neutral-500", value: "#5C5C5C" },
    { name: "neutral-400", value: "#8C8E8E" },
    { name: "neutral-300", value: "#ACACAC" },
    { name: "neutral-200", value: "#CFCFCF" },
    { name: "white", value: "#FFFFFF" },
  ],
  yellow: [
    { name: "yellow-300", value: "#FFEC28" },
    { name: "yellow-500", value: "#FFD600" },
    { name: "yellow-700", value: "#C9A800" },
  ],
  violet: [
    { name: "violet-600", value: "#7818B4" },
    { name: "magenta-600", value: "#A21CAF" },
  ],
  alpha: [{ name: "chip-fill", value: "#1D1F1E90" }],
}

const P = Object.fromEntries(
  Object.values(primitives)
    .flat()
    .map((p) => [p.name, p.value]),
)

export type ColorToken = {
  name: string
  value: string
  cssVar: string
  usage: string
  /** The primitive this semantic token aliases. */
  primitive: string
}

export type ColorGroup = {
  group: string
  description: string
  tokens: ColorToken[]
}

function token(
  name: string,
  primitive: string,
  usage: string,
): ColorToken {
  return {
    name,
    primitive,
    value: P[primitive],
    cssVar: `--color-${name}`,
    usage,
  }
}

export const colors: ColorGroup[] = [
  {
    group: "Surface",
    description:
      "Sampled from the screens themselves: every value below was measured off the Figma export rather than chosen. Elevation is communicated by surface lightness, not by shadow — a card one step lighter than its parent reads as one step closer.",
    tokens: [
      token("bg", "neutral-950", "App background and video letterbox"),
      token("surface-1", "neutral-900", "Sheets and full-page panels"),
      token(
        "surface-2",
        "neutral-850",
        "Cards, list rows, search field, secondary button",
      ),
      token(
        "surface-3",
        "neutral-750",
        "Floating navigation and circular overlay buttons",
      ),
      token("surface-4", "neutral-750", "Pressed state and avatar placeholder"),
      token(
        "art-placeholder",
        "neutral-800",
        "Flat fill standing in for title art that has not been supplied",
      ),
      token(
        "chip",
        "chip-fill",
        "Chip fill — translucent, so chips read on artwork as well as on the page",
      ),
      token("border-subtle", "neutral-700", "Hairline dividers between rows"),
      token("border-strong", "neutral-600", "Selected chip outline, focus ring"),
    ],
  },
  {
    group: "Action",
    description:
      "White is the primary action colour. The highest-priority button on any screen is the white one, and there is never more than one per view.",
    tokens: [
      token(
        "action-primary",
        "white",
        "Primary button fill, active tab indicator, progress fill",
      ),
      token(
        "action-on-primary",
        "black",
        "Label and icon sitting on a white button",
      ),
      token(
        "action-secondary",
        "neutral-850",
        "Secondary button fill — same step as surface-2, named separately so intent is explicit",
      ),
      token(
        "action-muted",
        "neutral-200",
        "The soft-white play button that sits on artwork, where full white would glare",
      ),
    ],
  },
  {
    group: "Brand",
    description:
      "Yellow is the paywall. It marks the logo, the Subscribe affordance, premium content and the active navigation item — nothing else. Violet appears only inside the Upgrade badge gradient.",
    tokens: [
      token(
        "gold",
        "yellow-500",
        "Logo, Subscribe label, crown, IMDB rating, active nav icon",
      ),
      token(
        "gold-muted",
        "yellow-300",
        "The lighter yellow in the logo mark and on bright artwork",
      ),
      token("gold-dim", "yellow-700", "Pressed state of a yellow affordance"),
      token("premium-start", "violet-600", "Upgrade badge gradient, start stop"),
      token("premium-end", "magenta-600", "Upgrade badge gradient, end stop"),
    ],
  },
  {
    group: "Text",
    description:
      "Four steps. text-disabled sits below the WCAG AA threshold by design and is therefore only ever used for non-essential text that is duplicated elsewhere on the same row.",
    tokens: [
      token("text-primary", "white", "Titles, button labels, list row titles"),
      token(
        "text-secondary",
        "neutral-300",
        "Synopsis, metadata rows, inactive tab labels",
      ),
      token(
        "text-tertiary",
        "neutral-400",
        "Row subtitles, file sizes, inactive nav icons",
      ),
      token(
        "text-disabled",
        "neutral-500",
        "Unavailable download, placeholder text",
      ),
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
    css: `linear-gradient(90deg, ${P["violet-600"]} 0%, ${P["magenta-600"]} 100%)`,
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
function familyOf(primitive: string) {
  for (const [family, list] of Object.entries(primitives)) {
    if (list.some((v) => v.name === primitive)) return family
  }
  return "neutral"
}

export const figmaVariables: DtcgGroup = {
  primitive: Object.fromEntries(
    Object.entries(primitives).map(([family, list]) => [
      family,
      Object.fromEntries(
        list.map((v) => [
          v.name,
          {
            $type: "color",
            $value: v.value,
            $description: "Raw ramp value — alias this, do not use it directly",
          },
        ]),
      ),
    ]),
  ),
  semantic: Object.fromEntries(
    colors.map((g) => [
      g.group.toLowerCase(),
      Object.fromEntries(
        g.tokens.map((tk) => [
          tk.name,
          {
            $type: "color",
            $value: `{primitive.${familyOf(tk.primitive)}.${tk.primitive}}`,
            $description: tk.usage,
          },
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
      typography.map((tk) => [
        tk.name,
        { $type: "number", $value: tk.size, $description: tk.usage },
      ]),
    ),
    lineHeight: Object.fromEntries(
      typography.map((tk) => [
        tk.name,
        {
          $type: "number",
          $value: tk.lineHeight,
          $description: `Line height for ${tk.name}`,
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
