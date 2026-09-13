import { slug } from "./artwork"

/**
 * SVGs exported from Figma, dropped into src/assets/icons/.
 *
 * A file whose name matches either the Figma layer name (home-01.svg) or the
 * component name (NavHome.svg) replaces the drawn fallback everywhere that icon
 * is used. Matching ignores case, spaces, dashes and underscores.
 */
const files = import.meta.glob<string>("../assets/icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
})

const byName = new Map<string, string>()
for (const [path, url] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(/\.svg$/i, "")
  byName.set(slug(name), url)
}

export function iconUrl(...names: string[]): string | undefined {
  for (const n of names) {
    const hit = byName.get(slug(n))
    if (hit) return hit
  }
  return undefined
}

export const iconCount = byName.size
