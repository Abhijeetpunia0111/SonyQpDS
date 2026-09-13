/**
 * Real title art, dropped in by file name.
 *
 * Put images in `src/assets/artwork/` and name each file after the title it
 * belongs to — spaces, case and punctuation are ignored, so
 * `Maharani 4.png`, `maharani-4.jpg` and `MAHARANI_4.webp` all resolve for
 * the title "Maharani 4". Anything without a matching file falls back to the
 * generated gradient, so the build never breaks on a missing asset.
 */
const files = import.meta.glob<string>(
  "../assets/artwork/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true, query: "?url", import: "default" },
)

export function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "")
}

const byName = new Map<string, string>()
for (const [path, url] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "")
  byName.set(slug(name), url)
}

export function artworkFor(title: string): string | undefined {
  return byName.get(slug(title))
}

/**
 * True once real art is supplied for a title. Screens use this to drop the
 * stand-in lettering — banner, studio label, key-art title — because a real
 * asset already has that typography baked into the image.
 */
export function hasArtwork(title: string): boolean {
  return byName.has(slug(title))
}

export const artworkCount = byName.size
