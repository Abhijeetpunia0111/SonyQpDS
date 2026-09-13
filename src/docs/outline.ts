import { colors } from "@/design-system/tokens"

/**
 * The section list the sidebar renders for each page. Kept here rather than
 * derived from the DOM so the sidebar is correct on first paint.
 */
export const OUTLINE: Record<string, string[]> = {
  screens: ["Browse", "Search", "Library"],
  foundations: [
    "Colour model",
    ...colors.map((g) => g.group),
    "Typography",
    "Spacing",
    "Radius",
    "Elevation",
    "Iconography",
    "Layout",
  ],
  components: [
    "Button",
    "Chip",
    "Badge",
    "PosterCard",
    "LandscapeCard",
    "Rail + SectionHeader",
    "ListRow",
    "SearchField",
    "TabBar",
    "BottomNav + StatusBar",
    "MetaRow + ProgressBar",
    "CircleButton + Avatar",
    "EmptyState",
  ],
  interactivity: [],
  tokens: ["Figma Variables", "Tailwind v4 @theme", "Flat JSON"],
}
