import {
  colors,
  elevation,
  fontFamily,
  fontWeights,
  radii,
  spacing,
  typography,
} from "@/design-system/tokens"
import type { ColorToken } from "@/design-system/tokens"
import * as Icons from "@/design-system/icons"
import type { ReactElement } from "react"
import CopyButton from "./CopyButton"
import Section, { PageHeader } from "./Section"

function Swatch({ value, name, usage, cssVar, contrast }: ColorToken) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface-2 ring-1 ring-border-subtle">
      <div
        className="flex h-20 w-full items-end justify-end p-2"
        style={{ background: value }}
      >
        {contrast !== undefined && (
          <span
            className="rounded-md bg-black/55 px-1.5 py-0.5 font-mono text-[10px] text-white backdrop-blur-sm"
            title="Contrast ratio against surface-2"
          >
            {contrast.toFixed(1)}:1
          </span>
        )}
      </div>
      <div className="p-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[13px] font-semibold text-white">
            {name}
          </p>
          <CopyButton value={value} label={value} />
        </div>
        <p className="mt-1.5 font-mono text-[11px] text-text-tertiary">
          {cssVar}
        </p>
        <p className="mt-2.5 text-[12px] leading-4.5 text-text-secondary">
          {usage}
        </p>
      </div>
    </div>
  )
}

type IconEntry = {
  name: string
  label?: string
}

type IconGroup = {
  label: string
  icons: IconEntry[]
}

const ICON_GROUPS: IconGroup[] = [
  {
    label: "Navigation",
    icons: [
      { name: "NavHome" },
      { name: "NavSearch" },
      { name: "NavFlame" },
      { name: "NavDownloads" },
    ],
  },
  {
    label: "Brand and status",
    icons: [
      { name: "Crown" },
      { name: "Bolt" },
      { name: "RatingStar", label: "IMDB" },
      { name: "ThumbUp", label: "Like Rate" },
    ],
  },
  {
    label: "Controls — outline, 1.8px stroke",
    icons: [
      { name: "ChevronLeft" },
      { name: "ChevronRight" },
      { name: "ChevronDown" },
      { name: "Plus" },
      { name: "PlayFilled" },
      { name: "MoreVertical" },
      { name: "Mic" },
      { name: "Share" },
      { name: "Trash" },
      { name: "HalfCircle" },
      { name: "AlertTriangle" },
    ],
  },
  {
    label: "Filters — mixed weight",
    icons: [{ name: "GridFour" }, { name: "Clapper" }, { name: "SportsBall" }],
  },
]

type IconRenderProps = {
  size?: number
  className?: string
}

type IconComponent = (p: IconRenderProps) => ReactElement

export default function Foundations() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-16">
      <PageHeader
        eyebrow="Foundations"
        title="Foundations"
        description="Five surface steps, white as the action colour, gold as the paywall, one type family and a 4px grid. Everything downstream inherits from this page — if a value is not defined here, it does not exist in the product."
      />

      <Section
        title="Colour model"
        description="This is a dark-only system. Depth is expressed by lightening the surface rather than by casting shadows, and hue is rationed: white does all the work of an action colour, and gold is the only saturated accent a viewer sees on a normal browse session."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "White carries priority",
              d: "The single most important control on any screen is the white one. Because the canvas is black, white has the highest possible contrast and needs no supporting treatment.",
            },
            {
              t: "Gold means money",
              d: "Logo, Subscribe, crown, premium content, active navigation. If an element is gold, it is either the brand or something behind the paywall.",
            },
            {
              t: "Surface means depth",
              d: "Each step from bg to surface-4 reads as one level closer to the viewer. Shadows are a supporting cue on this canvas, never the primary one.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl bg-surface-2 p-5 ring-1 ring-border-subtle"
            >
              <p className="text-[15px] font-semibold text-white">{c.t}</p>
              <p className="mt-2.5 text-[13px] leading-5 text-text-secondary">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {colors.map((group) => (
        <Section
          key={group.group}
          title={group.group}
          description={group.description}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {group.tokens.map((t) => (
              <Swatch key={t.name} {...t} />
            ))}
          </div>
          {group.group === "Text" && (
            <p className="mt-4 text-[13px] leading-5 text-text-tertiary">
              Ratios are measured against surface-2 (#1A1A1A), the most common
              text background in the product. text-primary through text-tertiary
              clear WCAG AA for body text; text-disabled does not, and is
              therefore limited to labels whose meaning is available elsewhere
              on the same row.
            </p>
          )}
        </Section>
      ))}


      <Section
        title="Typography"
        description={`${fontFamily} at eight sizes. Every line height is a multiple of 4, so a paragraph and a stack of cards land on the same grid.`}
      >
        <div className="divide-y divide-border-subtle overflow-hidden rounded-xl bg-surface-2 ring-1 ring-border-subtle">
          {typography.map((t) => (
            <div
              key={t.name}
              className="flex flex-wrap items-baseline gap-x-6 gap-y-2 p-5"
            >
              <div className="w-32 shrink-0">
                <p className="text-[13px] font-semibold text-white">{t.name}</p>
                <p className="mt-1 font-mono text-[11px] text-text-tertiary">
                  {t.size}/{t.lineHeight} · {t.weight}
                </p>
              </div>
              <p
                className="min-w-0 flex-1 text-white"
                style={{
                  fontSize: t.size,
                  lineHeight: `${t.lineHeight}px`,
                  fontWeight: t.weight,
                }}
              >
                Maharani 4 — Rise, Rule, Revenge
              </p>
              <p className="w-56 shrink-0 text-[12px] leading-4.5 text-text-secondary">
                {t.usage}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {fontWeights.map((w) => (
            <div
              key={w.name}
              className="rounded-xl bg-surface-2 p-4 ring-1 ring-border-subtle"
            >
              <p
                className="text-[18px] text-white"
                style={{ fontWeight: w.value }}
              >
                {w.name} {w.value}
              </p>
              <p className="mt-1.5 text-[12px] leading-4 text-text-secondary">
                {w.usage}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Spacing"
        description="A 4px base with a 16px screen gutter. space-1 (2px) is the single exception to the scale and exists only for optical icon alignment — it never appears in layout."
      >
        <div className="divide-y divide-border-subtle overflow-hidden rounded-xl bg-surface-2 ring-1 ring-border-subtle">
          {spacing.map((s) => (
            <div key={s.name} className="flex items-center gap-4 p-4">
              <span className="w-24 shrink-0 text-[13px] font-semibold text-white">
                {s.name}
              </span>
              <span className="w-12 shrink-0 font-mono text-[12px] text-text-tertiary">
                {s.value}px
              </span>
              <span className="w-16 shrink-0">
                <span
                  className="block h-4 rounded-sm bg-white"
                  style={{ width: Math.max(s.value, 1) }}
                />
              </span>
              <span className="min-w-0 flex-1 text-right text-[12px] text-text-secondary">
                {s.usage}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Radius"
        description="Radius encodes distance from the page. Flat media is square, cards round gently, and anything that floats free of the layout is a pill."
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {radii.map((r) => (
            <div
              key={r.name}
              className="rounded-xl bg-surface-2 p-4 ring-1 ring-border-subtle"
            >
              <div
                className="h-16 w-full bg-surface-4 ring-1 ring-border-strong ring-inset"
                style={{ borderRadius: r.value }}
              />
              <p className="mt-3 text-[13px] font-semibold text-white">
                {r.name}
              </p>
              <p className="mt-1 font-mono text-[11px] text-text-tertiary">
                {r.value === 999 ? "999px" : `${r.value}px`}
              </p>
              <p className="mt-2 text-[12px] leading-4.5 text-text-secondary">
                {r.usage}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Elevation"
        description="On a black canvas a shadow only reads when the surface above it is lighter, so every elevation is paired with a surface step. Most of the product uses none at all."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {elevation.map((e) => (
            <div
              key={e.name}
              className="rounded-xl bg-surface-1 p-6 ring-1 ring-border-subtle"
            >
              <div
                className="mb-4 h-16 w-full rounded-lg bg-surface-3"
                style={{ boxShadow: e.value }}
              />
              <p className="text-[13px] font-semibold text-white">{e.name}</p>
              <p className="mt-2 text-[12px] leading-4.5 text-text-secondary">
                {e.usage}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Iconography"
        description="Drawn on a 24px grid. Navigation and brand glyphs are solid so they hold their shape at small sizes against artwork; controls are outlined at 1.8px. Icons inherit colour from their parent, so a nav icon becomes gold simply by being active."
      >
        <div className="space-y-5">
          {ICON_GROUPS.map((g) => (
            <div
              key={g.label}
              className="rounded-xl bg-surface-2 p-5 ring-1 ring-border-subtle"
            >
              <p className="mb-4 text-[12px] font-semibold tracking-[0.1em] text-text-tertiary uppercase">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {g.icons.map(({ name, label }) => {
                  const Icon = (
                    Icons as unknown as Record<string, IconComponent>
                  )[name]
                  return (
                    <div
                      key={name}
                      className="flex w-[104px] flex-col items-center gap-2.5 rounded-lg bg-surface-1 py-3.5"
                    >
                      <Icon size={24} className="text-white" />
                      <span className="truncate px-1 font-mono text-[10px] text-text-tertiary">
                        {label ?? name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Layout"
        description="Every screen is designed at 412 × 917. Content sits inside a 16px gutter; horizontal rails deliberately break it so a clipped card signals that the row scrolls."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { k: "Frame", v: "412 × 917", d: "Design and hand-off size" },
            { k: "Gutter", v: "16px", d: "Left and right on all content" },
            { k: "Nav reserve", v: "96px", d: "Scroll padding below content" },
            { k: "Rail gap", v: "8–10px", d: "Between cards in a row" },
            { k: "Section gap", v: "28px", d: "Between two rails" },
            { k: "Touch target", v: "44px", d: "Minimum for every control" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-xl bg-surface-2 p-5 ring-1 ring-border-subtle"
            >
              <p className="font-mono text-[20px] font-semibold text-white">
                {m.v}
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-white">{m.k}</p>
              <p className="mt-1 text-[12px] text-text-secondary">{m.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
