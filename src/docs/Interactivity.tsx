import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  Close,
  Expand,
  PauseFilled,
  PlayFilled,
} from "@/design-system/icons"
import { images, videos } from "@/data/media"
import type { MediaItem, Platform } from "@/data/media"
import { PageHeader } from "./Section"

function onScreen(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  return r.bottom > 0 && r.top < window.innerHeight
}

/**
 * Autoplays while on screen and pauses when scrolled away, so a long gallery
 * never has more than a few clips decoding at once. `autoPlay` is off inside
 * the lightbox, where the single clip should simply run.
 */
function useAutoPlay(
  ref: React.RefObject<HTMLVideoElement | null>,
  onUserPause?: (paused: boolean) => void,
) {
  const pausedByUser = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // The position is measured directly rather than read off the observer
    // entry: before metadata loads the element still has zero height, and an
    // entry captured at that point reports it as off-screen.
    const sync = () => {
      if (!pausedByUser.current && onScreen(el)) void el.play().catch(() => {})
      else el.pause()
    }

    const io = new IntersectionObserver(sync, { threshold: 0.25 })
    io.observe(el)
    el.addEventListener("loadedmetadata", sync)
    el.addEventListener("canplay", sync)
    return () => {
      io.disconnect()
      el.removeEventListener("loadedmetadata", sync)
      el.removeEventListener("canplay", sync)
    }
  }, [ref])

  return function toggle() {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      pausedByUser.current = false
      void el.play().catch(() => {})
    } else {
      pausedByUser.current = true
      el.pause()
    }
    onUserPause?.(pausedByUser.current)
  }
}

function Card({
  item,
  onExpand,
}: {
  item: MediaItem
  onExpand: (item: MediaItem) => void
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const toggle = useAutoPlay(ref, setUserPaused)
  const isVideo = item.kind === "video"

  return (
    <figure className="group relative mb-8 break-inside-avoid overflow-hidden rounded-xl bg-art-placeholder ring-1 ring-border-subtle">
      {isVideo ? (
        <video
          ref={ref}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="block h-auto w-full"
        />
      ) : (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="block h-auto w-full"
        />
      )}

      {/* Fills the card so a click anywhere toggles a clip, or opens a still. */}
      <button
        type="button"
        onClick={() => (isVideo ? toggle() : onExpand(item))}
        aria-label={
          isVideo ? `${playing ? "Pause" : "Play"} ${item.title}` : `Expand ${item.title}`
        }
        className="focus-ring absolute inset-0 flex items-center justify-center"
      >
        {isVideo && (
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-action-muted transition-opacity duration-200 ${
              userPaused ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            {playing ? (
              <PauseFilled size={22} className="text-action-on-primary" />
            ) : (
              <PlayFilled size={22} className="ml-0.5 text-action-on-primary" />
            )}
          </span>
        )}
      </button>

      <button
        type="button"
        onClick={() => onExpand(item)}
        aria-label={`Expand ${item.title}`}
        className="focus-ring absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
      >
        <Expand size={17} />
      </button>

      <figcaption
        className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pt-10 pb-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      >
        <span className="line-clamp-2 text-[13px] font-medium text-white">
          {item.title}
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * Decelerating curve — fast off the mark, long settle. The opening reads as
 * the panel arriving rather than a linear fade, which is what makes it feel
 * smooth rather than merely quick.
 */
const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)"
const EASE_IN = "cubic-bezier(0.4, 0, 1, 1)"
const EXIT_MS = 220

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function Lightbox({
  item,
  onClose,
}: {
  item: MediaItem
  onClose: () => void
}) {
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const reduce = useRef(false)

  /** Plays the exit first, then unmounts — without this, closing snaps. */
  const close = useCallback(() => {
    if (timer.current !== undefined) return
    setShown(false)
    timer.current = window.setTimeout(onClose, reduce.current ? 0 : EXIT_MS)
  }, [onClose])

  useEffect(() => {
    reduce.current = prefersReducedMotion()
    // One frame before the transition so the entry animation actually runs.
    const raf = requestAnimationFrame(() => setShown(true))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(timer.current)
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
    }
  }, [close])

  const still = reduce.current

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-xl"
      style={{
        paddingTop: 30,
        paddingBottom: 30,
        opacity: shown ? 1 : 0,
        transition: `opacity ${shown ? 260 : 180}ms ${shown ? EASE_OUT : EASE_IN}`,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full flex-col items-center"
        style={{
          opacity: shown ? 1 : 0,
          transform: still
            ? undefined
            : shown
              ? "translateY(0) scale(1)"
              : "translateY(14px) scale(0.94)",
          // Transform runs longer than opacity so the panel is fully visible
          // while it is still settling, rather than fading in after it lands.
          transition: still
            ? `opacity 160ms linear`
            : `opacity ${shown ? 200 : 140}ms ease-out, transform ${
                shown ? 420 : EXIT_MS
              }ms ${shown ? EASE_OUT : EASE_IN}`,
          willChange: "transform, opacity",
        }}
      >
        {item.kind === "video" ? (
          <video
            ref={ref}
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            onClick={() => {
              const el = ref.current
              if (el) el.paused ? void el.play() : el.pause()
            }}
            className="max-h-[calc(100vh-60px)] w-auto max-w-full rounded-xl"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[calc(100vh-60px)] w-auto max-w-full rounded-xl"
          />
        )}
      </div>

      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="focus-ring fixed top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface-2/90 text-white"
      >
        <Close size={18} />
      </button>
    </div>
  )
}

type Tab = "video" | "images"
type Filter = "all" | Platform

const PLATFORMS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "android", label: "Android" },
  { id: "ios", label: "iOS" },
]

function Pill({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  count?: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`focus-ring flex h-9 items-center gap-2 rounded-full px-4 text-[13px] font-medium transition-colors ${
        active
          ? "bg-action-primary text-action-on-primary"
          : "bg-surface-2 text-text-secondary hover:text-white"
      }`}
    >
      {children}
      {count !== undefined && (
        <span className={active ? "text-action-on-primary/60" : "text-text-tertiary"}>
          {count}
        </span>
      )}
    </button>
  )
}

export default function Interactivity() {
  const [tab, setTab] = useState<Tab>("video")
  const [platform, setPlatform] = useState<Filter>("all")
  const [expanded, setExpanded] = useState<MediaItem | null>(null)

  const counts = useMemo(
    () => ({
      all: images.length,
      android: images.filter((i) => i.platform === "android").length,
      ios: images.filter((i) => i.platform === "ios").length,
    }),
    [],
  )

  const items = useMemo(() => {
    if (tab === "video") return videos
    return platform === "all"
      ? images
      : images.filter((i) => i.platform === platform)
  }, [tab, platform])

  return (
    <div className="mx-auto max-w-6xl px-8 py-16">
      <PageHeader
        eyebrow="Interactivity"
        title="Motion and screens"
        description="Screen recordings of the prototype in use, and the exported Android and iOS screens behind them. Clips loop and play on their own — click one to pause it, or expand anything to view it full size."
      />

      <div className="mb-10 border-y border-border-subtle py-5">
        <div className="flex flex-wrap items-center gap-2">
          <Pill
            active={tab === "video"}
            onClick={() => setTab("video")}
            count={videos.length}
          >
            Video
          </Pill>
          <Pill
            active={tab === "images"}
            onClick={() => setTab("images")}
            count={images.length}
          >
            Images
          </Pill>
        </div>

        {tab === "images" && (
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border-subtle pt-4">
            {PLATFORMS.map(({ id, label }) => (
              <Pill
                key={id}
                active={platform === id}
                onClick={() => setPlatform(id)}
                count={counts[id]}
              >
                {label}
              </Pill>
            ))}
          </div>
        )}
      </div>

      <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
        {items.map((item) => (
          <Card key={item.id} item={item} onExpand={setExpanded} />
        ))}
      </div>

      {expanded && (
        <Lightbox item={expanded} onClose={() => setExpanded(null)} />
      )}
    </div>
  )
}
