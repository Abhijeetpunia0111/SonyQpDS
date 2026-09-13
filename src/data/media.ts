/**
 * Everything the Interactivity gallery shows: the screen recordings plus the
 * exported Android and iOS screens. All three sets are picked up from
 * src/assets automatically, so dropping a file in adds it to the gallery.
 */
const videoFiles = import.meta.glob<string>("../assets/video/*.mp4", {
  eager: true,
  query: "?url",
  import: "default",
})

const androidFiles = import.meta.glob<string>(
  "../assets/android mobile/*.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" },
)

const iosFiles = import.meta.glob<string>(
  "../assets/ios mobile/*.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" },
)

export type Platform = "android" | "ios"

export type MediaItem = {
  id: string
  title: string
  src: string
  kind: "video" | "image"
  /** Only images belong to a platform; recordings are shown under every filter. */
  platform?: Platform
}

/** File names cannot carry casing that matters, so the exceptions live here. */
const CASING: Record<string, string> = {
  macos: "macOS",
  ios: "iOS",
  tv: "TV",
  ui: "UI",
  apple: "Apple",
}

function videoTitle(slug: string) {
  const words = slug.split("-").map((w) => CASING[w] ?? w)
  const first = words[0]
  return [first[0].toUpperCase() + first.slice(1), ...words.slice(1)].join(" ")
}

/** Keeps the author's own wording; only drops the "3) " ordering prefix. */
function imageTitle(name: string) {
  return name
    .replace(/^\d+\)\s*/, "")
    .replace(/[_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function basename(path: string) {
  return path.split("/").pop()!.replace(/\.[^.]+$/, "")
}

export const videos: MediaItem[] = Object.entries(videoFiles)
  .map(([path, src]) => {
    const slug = basename(path)
    return { id: `video-${slug}`, title: videoTitle(slug), src, kind: "video" as const }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

function imagesFrom(
  files: Record<string, string>,
  platform: Platform,
): MediaItem[] {
  return Object.entries(files)
    .map(([path, src]) => {
      const name = basename(path)
      return {
        id: `${platform}-${name}`,
        title: imageTitle(name),
        src,
        kind: "image" as const,
        platform,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export const images: MediaItem[] = [
  ...imagesFrom(androidFiles, "android"),
  ...imagesFrom(iosFiles, "ios"),
]

/**
 * Spreads the recordings evenly through the screens rather than stacking them
 * at the top, so a long scroll of stills keeps being broken up by motion.
 */
export function interleave(stills: MediaItem[], clips: MediaItem[]): MediaItem[] {
  if (clips.length === 0) return stills
  if (stills.length === 0) return clips

  const step = Math.max(1, Math.round(stills.length / clips.length))
  const out: MediaItem[] = []
  let next = 0

  stills.forEach((item, i) => {
    out.push(item)
    if ((i + 1) % step === 0 && next < clips.length) out.push(clips[next++])
  })

  return [...out, ...clips.slice(next)]
}
