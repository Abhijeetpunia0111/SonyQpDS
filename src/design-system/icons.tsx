import type { ReactElement } from "react"
import { iconUrl } from "@/data/icons"

type IconProps = {
  size?: number
  className?: string
}

/**
 * Wraps a drawn icon so an SVG exported from Figma takes precedence. The export
 * is applied as a CSS mask rather than an <img>, so it still inherits
 * currentColor — which is what lets a nav icon turn gold simply by being active.
 */
function withFigma(
  figmaName: string,
  componentName: string,
  Drawn: (p: IconProps) => ReactElement,
) {
  return function Icon({ size = 24, className = "" }: IconProps) {
    const url = iconUrl(figmaName, componentName)
    if (!url) return <Drawn size={size} className={className} />
    return (
      <span
        aria-hidden
        className={`inline-block shrink-0 ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: "currentColor",
          maskImage: `url("${url}")`,
          WebkitMaskImage: `url("${url}")`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    )
  }
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
})

/* ---------------------------------------------------------------- brand */

/** The liv wordmark: "li" set solid, with the v drawn as a check. */
export function LivLogo({ height = 26 }: { height?: number }) {
  return (
    <span
      className="inline-flex items-center text-gold"
      style={{ height, lineHeight: 1 }}
      aria-label="liv"
    >
      <span
        className="font-black tracking-[-0.04em]"
        style={{ fontSize: height, lineHeight: 0.92 }}
      >
        li
      </span>
      <svg
        width={height * 0.78}
        height={height}
        viewBox="0 0 20 26"
        fill="none"
        aria-hidden
      >
        <path
          d="M2 12.5 L7.4 22.5 L18.5 2.2"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

/** Outline crown, three peaks with concave shoulders and a flat base. */
function Raw_Crown({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M2.9 7.6 7.4 11.6a.9.9 0 0 0 1.4-.24l2.4-4.6a.9.9 0 0 1 1.6 0l2.4 4.6a.9.9 0 0 0 1.4.24l4.5-4a.6.6 0 0 1 .99.56l-1.6 9.3a1.6 1.6 0 0 1-1.58 1.34H5.1a1.6 1.6 0 0 1-1.58-1.34L1.91 8.16a.6.6 0 0 1 .99-.56Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_Bolt({ size = 14, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M13.6 2 5.2 13.1a.6.6 0 0 0 .5 1h4.2l-1.4 7.5a.6.6 0 0 0 1.1.4l8.4-11.1a.6.6 0 0 0-.5-1h-4.2l1.4-7.5a.6.6 0 0 0-1.1-.4Z" />
    </svg>
  )
}

/**
 * The IMDB rating mark: a filled rounded square with the star knocked out, so
 * the star reads in the page colour behind it.
 */
function Raw_RatingStar({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4 2.6h11.2a3.8 3.8 0 0 1 3.8 3.8v11.2a3.8 3.8 0 0 1-3.8 3.8H6.4a3.8 3.8 0 0 1-3.8-3.8V6.4a3.8 3.8 0 0 1 3.8-3.8Zm5.6 3.9 1.7 3.45 3.81.55-2.76 2.69.65 3.79L12 14.99l-3.4 1.79.65-3.79-2.76-2.69 3.81-.55L12 6.5Z"
      />
    </svg>
  )
}

function Raw_ThumbUp({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M7 10.5 10.6 3a2 2 0 0 1 2.8 1.8V9h4.4a2 2 0 0 1 2 2.5l-1.6 6.3a2.4 2.4 0 0 1-2.3 1.7H7m0-9v9m0-9H4.6A1.6 1.6 0 0 0 3 12.1v5.8c0 .9.7 1.6 1.6 1.6H7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DolbyMark({ height = 11 }: { height?: number }) {
  return (
    <svg
      width={height * 2.2}
      height={height}
      viewBox="0 0 26 12"
      fill="currentColor"
      aria-label="Dolby"
    >
      <path d="M0 0h11.4v12H0V0Zm2.2 2.2v7.6c2.1 0 3.8-1.7 3.8-3.8S4.3 2.2 2.2 2.2Zm12.4 0v7.6c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8ZM14.6 0H26v12H14.6V0Z" />
    </svg>
  )
}

/* ------------------------------------------------------- bottom navigation */

/** Solid house: pitched roof, walls, and an arched doorway knocked out. */
function Raw_NavHome({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M10.86 2.62a1.8 1.8 0 0 1 2.28 0l8 6.55c.48.4.76.98.76 1.6v8.43a2.6 2.6 0 0 1-2.6 2.6h-3.72v-5.36a3.58 3.58 0 0 0-7.16 0V21.8H4.7a2.6 2.6 0 0 1-2.6-2.6v-8.43c0-.62.28-1.2.76-1.6l8-6.55Z" />
    </svg>
  )
}

function Raw_NavSearch({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M10.8 2.4a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm6.5 14.1 4.4 4.4a1.2 1.2 0 0 1-1.7 1.7l-4.4-4.4a10 10 0 0 0 1.7-1.7Z" />
    </svg>
  )
}

function Raw_NavFlame({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M12.6 1.6c.3 3 .6 5 2.9 7 2.5 2.2 3.9 4.2 3.9 7.1a7.4 7.4 0 0 1-14.8 0c0-2.3 1-4.2 2.6-5.6.2 1 .7 1.9 1.5 2.5.1-2.3.7-5.6 2.4-8.1.4-.6.9-1.2 1.5-1.9Zm.2 12.1c1.1 1 1.8 2 1.8 3.2a2.6 2.6 0 0 1-5.2 0c0-1 .5-1.9 1.3-2.7.1.5.4 1 .8 1.3.1-.6.5-1.3 1.3-1.8Z" />
    </svg>
  )
}

function Raw_NavDownloads({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M3.2 13.4 5 6.6A3 3 0 0 1 7.9 4.4h8.2A3 3 0 0 1 19 6.6l1.8 6.8H16a1 1 0 0 0-1 .8 3 3 0 0 1-6 0 1 1 0 0 0-1-.8H3.2Zm0 2h4.1a5 5 0 0 0 9.4 0h4.1v1.7a3 3 0 0 1-3 3H6.2a3 3 0 0 1-3-3v-1.7Z" />
      <path
        d="M12 6.8v4.4m0 0 1.8-1.8M12 11.2l-1.8-1.8"
        stroke="var(--color-bg)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ utility */

function Raw_ChevronRight({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_ChevronLeft({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="m15 5-7 7 7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_ChevronDown({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="m5 9 7 7 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_PlayFilled({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M7.5 4.8c0-.9 1-1.5 1.8-1L19 10.9c.7.5.7 1.6 0 2.1L9.3 20.2c-.8.5-1.8-.1-1.8-1V4.8Z" />
    </svg>
  )
}

function Raw_Plus({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M12 4.5v15M4.5 12h15"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Raw_MoreVertical({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <circle cx="12" cy="5" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="12" cy="19" r="1.7" />
    </svg>
  )
}

function Raw_SearchGlass({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.8" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="m16.2 16.2 4.3 4.3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Raw_Mic({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.2a3.4 3.4 0 0 0-3.4 3.4v6a3.4 3.4 0 0 0 6.8 0v-6A3.4 3.4 0 0 0 12 2.2Z" />
      <path d="M5.6 10.9a.9.9 0 0 1 1.8 0 4.6 4.6 0 0 0 9.2 0 .9.9 0 0 1 1.8 0 6.4 6.4 0 0 1-5.5 6.34v2.56h2.3a.9.9 0 0 1 0 1.8H8.8a.9.9 0 0 1 0-1.8h2.3v-2.56A6.4 6.4 0 0 1 5.6 10.9Z" />
    </svg>
  )
}

function Raw_DownloadArrow({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M12 3.4v11m0 0 4-4m-4 4-4-4M3.8 17.2v1.4a2 2 0 0 0 2 2h12.4a2 2 0 0 0 2-2v-1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_Share({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M18 2.4a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6ZM6 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm12 6.3a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Z" />
      <path d="m15.35 6.5-6.9 3.75.86 1.58 6.9-3.75-.86-1.58ZM8.45 13.75l-.86 1.58 6.9 3.75.86-1.58-6.9-3.75Z" />
    </svg>
  )
}

function Raw_Trash({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M4.5 6.5h15M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v1.5M6.5 6.5l.8 12a2 2 0 0 0 2 1.9h5.4a2 2 0 0 0 2-1.9l.8-12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_HalfCircle({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 3a9 9 0 0 1 0 18V3Z" fill="currentColor" />
    </svg>
  )
}

function Raw_AlertTriangle({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7 3.9 2.5 18.2a1.5 1.5 0 0 0 1.3 2.3h16.4a1.5 1.5 0 0 0 1.3-2.3L13.3 3.9a1.5 1.5 0 0 0-2.6 0Zm2.05 4.85a.75.75 0 0 0-1.5 0v4.6a.75.75 0 0 0 1.5 0v-4.6ZM12 15.75a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z"
      />
    </svg>
  )
}

function Raw_Pencil({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M16.6 3.8a2.1 2.1 0 0 1 3 3L9 17.4l-4 1 1-4L16.6 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ---------------------------------------------------------- filter chips */

function Raw_GridFour({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <rect x="3" y="3" width="7.6" height="7.6" rx="2" />
      <rect x="13.4" y="3" width="7.6" height="7.6" rx="2" />
      <rect x="3" y="13.4" width="7.6" height="7.6" rx="2" />
      <rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2" />
    </svg>
  )
}

function Raw_Clapper({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" aria-hidden>
      <path d="M8.3 5.1a2.5 2.5 0 0 1 4.7-1.35 2.4 2.4 0 0 1 3.5 1.2 2.3 2.3 0 0 1 2.6 3.35H4.9A2.3 2.3 0 0 1 7.4 5a2.5 2.5 0 0 1 .9.1Z" />
      <path d="M4.6 9.8h14.8l-1.2 10.1a2 2 0 0 1-2 1.75H7.8a2 2 0 0 1-2-1.75L4.6 9.8Zm4.3 2.1-.5 7.6h1.8l.3-7.6H8.9Zm4.2 0 .3 7.6h1.8l-.5-7.6h-1.6Z" />
    </svg>
  )
}

function Raw_SportsBall({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.4 9.6c4.6.3 8.3 2.9 10 7.2M20.6 9.6c-4.6.3-8.3 2.9-10 7.2M12 3c2.4 2.6 3.6 5.6 3.6 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ---------------------------------------------------------- settings rows */

function Raw_UserOutline({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <circle
        cx="12"
        cy="7.8"
        r="3.8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Raw_Receipt({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M5.4 3.4h13.2v17.2l-2.6-1.6-2.2 1.6L12 19l-1.8 1.6-2.2-1.6-2.6 1.6V3.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.6h6M9 12.4h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Raw_DeviceSwap({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <rect
        x="2.6"
        y="5"
        width="12.6"
        height="9.4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="16.4"
        y="10.6"
        width="5"
        height="8.8"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.4 18.4h5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Raw_Bubble({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M3.4 6.6a2.6 2.6 0 0 1 2.6-2.6h12a2.6 2.6 0 0 1 2.6 2.6v7.2a2.6 2.6 0 0 1-2.6 2.6H9.2L4.6 20V6.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_VideoCamera({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <rect
        x="2.6"
        y="6.4"
        width="12.6"
        height="11.2"
        rx="2.6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m15.2 11.4 4.4-2.6a.9.9 0 0 1 1.4.8v4.8a.9.9 0 0 1-1.4.8l-4.4-2.6v-1.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Raw_Headphones({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <path
        d="M3.8 15.4v-3a8.2 8.2 0 0 1 16.4 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="2.6"
        y="14"
        width="4.6"
        height="6.4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="16.8"
        y="14"
        width="4.6"
        height="6.4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function Raw_QuestionCircle({ size = 22, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.6 9.4a2.4 2.4 0 1 1 3.3 2.2c-.6.3-.9.8-.9 1.4v.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.6" r="1" fill="currentColor" />
    </svg>
  )
}

/* ------------------------------------------------------------- status bar */

function Raw_StatusWifi({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="0 0 18 14"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M9 13.4 6.2 10a3.6 3.6 0 0 1 5.6 0L9 13.4ZM4.5 8.3 3 6.5a9.2 9.2 0 0 1 12 0l-1.5 1.8a6.9 6.9 0 0 0-9 0ZM1.4 4.6 0 2.9a13.9 13.9 0 0 1 18 0l-1.4 1.7a11.7 11.7 0 0 0-15.2 0Z" />
    </svg>
  )
}

function Raw_StatusSignal({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="0 0 18 14"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <rect x="0" y="9.6" width="3.2" height="4.4" rx="0.8" />
      <rect x="4.9" y="6.8" width="3.2" height="7.2" rx="0.8" />
      <rect x="9.8" y="3.8" width="3.2" height="10.2" rx="0.8" />
      <rect
        x="14.7"
        y="0.6"
        width="3.2"
        height="13.4"
        rx="0.8"
        opacity="0.45"
      />
    </svg>
  )
}

function Raw_StatusBattery({ size = 22, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 24 12"
      className={className}
      fill="none"
      aria-hidden
    >
      <rect
        x="0.8"
        y="0.8"
        width="20"
        height="10.4"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="2.8"
        y="2.8"
        width="16"
        height="6.4"
        rx="1.6"
        fill="currentColor"
      />
      <path
        d="M22.6 4.4v3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* Figma exports take precedence over the drawings above. */
export const NavHome = withFigma("home-01", "NavHome", Raw_NavHome)
export const NavSearch = withFigma("search-01", "NavSearch", Raw_NavSearch)
export const NavFlame = withFigma("fire", "NavFlame", Raw_NavFlame)
export const NavDownloads = withFigma("archive-arrow-down", "NavDownloads", Raw_NavDownloads)
export const Crown = withFigma("crown-03", "Crown", Raw_Crown)
export const Bolt = withFigma("zap", "Bolt", Raw_Bolt)
export const RatingStar = withFigma("ticket-star", "RatingStar", Raw_RatingStar)
export const ThumbUp = withFigma("thumbs-up", "ThumbUp", Raw_ThumbUp)
export const ChevronRight = withFigma("chevron-right", "ChevronRight", Raw_ChevronRight)
export const ChevronLeft = withFigma("chevron-left", "ChevronLeft", Raw_ChevronLeft)
export const ChevronDown = withFigma("chevron-down", "ChevronDown", Raw_ChevronDown)
export const PlayFilled = withFigma("play", "PlayFilled", Raw_PlayFilled)
export const Plus = withFigma("plus", "Plus", Raw_Plus)
export const MoreVertical = withFigma("dots-vertical", "MoreVertical", Raw_MoreVertical)
export const SearchGlass = withFigma("search-lg", "SearchGlass", Raw_SearchGlass)
export const Mic = withFigma("mic-02", "Mic", Raw_Mic)
export const DownloadArrow = withFigma("download-01", "DownloadArrow", Raw_DownloadArrow)
export const Share = withFigma("share-08", "Share", Raw_Share)
export const Trash = withFigma("trash-01", "Trash", Raw_Trash)
export const HalfCircle = withFigma("circle-half", "HalfCircle", Raw_HalfCircle)
export const AlertTriangle = withFigma("alert-triangle", "AlertTriangle", Raw_AlertTriangle)
export const Pencil = withFigma("edit-02", "Pencil", Raw_Pencil)
export const GridFour = withFigma("grid-01", "GridFour", Raw_GridFour)
export const Clapper = withFigma("popcorn", "Clapper", Raw_Clapper)
export const SportsBall = withFigma("dribbble", "SportsBall", Raw_SportsBall)
export const UserOutline = withFigma("user-01", "UserOutline", Raw_UserOutline)
export const Receipt = withFigma("receipt", "Receipt", Raw_Receipt)
export const DeviceSwap = withFigma("monitor-04", "DeviceSwap", Raw_DeviceSwap)
export const Bubble = withFigma("message-square", "Bubble", Raw_Bubble)
export const VideoCamera = withFigma("video-recorder", "VideoCamera", Raw_VideoCamera)
export const Headphones = withFigma("headphones-01", "Headphones", Raw_Headphones)
export const QuestionCircle = withFigma("help-circle", "QuestionCircle", Raw_QuestionCircle)
export const StatusWifi = withFigma("wifi", "StatusWifi", Raw_StatusWifi)
export const StatusSignal = withFigma("signal-01", "StatusSignal", Raw_StatusSignal)
export const StatusBattery = withFigma("battery-full", "StatusBattery", Raw_StatusBattery)
