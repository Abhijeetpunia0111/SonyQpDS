import { useState } from "react"
import PhoneFrame from "@/design-system/components/PhoneFrame"
import { screens } from "@/screens"
import { PageHeader, sectionId } from "./Section"

export default function Gallery() {
  const [focus, setFocus] = useState<string | null>(null)
  const groups = [...new Set(screens.map((s) => s.group))]
  const shown = focus ? screens.filter((s) => s.id === focus) : screens

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
      <PageHeader
        eyebrow="Screens"
        title="Screen inventory"
        description="Nine screens across three flows, built in React from the component library rather than exported as images — every frame scrolls, and chips, tabs and seasons respond to input. Title art is picked up automatically from src/assets/artwork: drop a file named after a title and it replaces that title's placeholder everywhere it appears, including the lettering baked into the hero and backdrop."
      />

      <div className="mb-10 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFocus(null)}
          className={`h-9 rounded-full px-4 text-[13px] font-medium transition-colors ${
            focus === null
              ? "bg-action-primary text-action-on-primary"
              : "bg-surface-2 text-text-secondary hover:text-white"
          }`}
        >
          All screens
        </button>
        <span className="mx-1 h-5 w-px bg-border-subtle" />
        {screens.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFocus(focus === s.id ? null : s.id)}
            className={`h-9 rounded-full px-4 text-[13px] font-medium transition-colors ${
              focus === s.id
                ? "bg-action-primary text-action-on-primary"
                : "bg-surface-2 text-text-secondary hover:text-white"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {focus ? (
        <div className="flex justify-center">
          <ScreenFigure entry={shown[0]} scale={1} />
        </div>
      ) : (
        groups.map((g) => (
          <section
            key={g}
            id={sectionId(g)}
            className="mb-16 scroll-mt-24 border-t border-border-subtle pt-10"
          >
            <h2 className="mb-8 text-[22px] font-semibold text-white">{g}</h2>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-14 xl:justify-start">
              {screens
                .filter((s) => s.group === g)
                .map((entry) => (
                  <ScreenFigure key={entry.id} entry={entry} scale={0.82} />
                ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}

function ScreenFigure({
  entry,
  scale,
}: {
  entry: typeof screens[number]
  scale: number
}) {
  const { name, figmaNode, purpose, Component } = entry
  return (
    <div className="flex flex-col items-center gap-3">
      <PhoneFrame scale={scale}>
        <Component />
      </PhoneFrame>
      <div className="max-w-[340px] text-center">
        <p className="text-[14px] font-medium text-white">{name}</p>
        <p className="mt-1.5 text-[12px] leading-4.5 text-text-secondary">
          {purpose}
        </p>
        <p className="mt-2 font-mono text-[11px] text-text-tertiary">
          {figmaNode}
        </p>
      </div>
    </div>
  )
}
