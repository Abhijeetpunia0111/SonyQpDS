import { slug } from "./artwork"

/** Profile photos, dropped into src/assets/avatars/ and named after the profile. */
const files = import.meta.glob<string>(
  "../assets/avatars/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true, query: "?url", import: "default" },
)

const byName = new Map<string, string>()
for (const [path, url] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "")
  byName.set(slug(name), url)
}

export function avatarFor(name: string): string | undefined {
  return byName.get(slug(name))
}
