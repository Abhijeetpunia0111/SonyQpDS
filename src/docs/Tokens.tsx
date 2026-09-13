import { figmaVariables, themeCss, tokenJson } from "@/design-system/tokens"
import CopyButton from "./CopyButton"
import Section, { PageHeader } from "./Section"

const json = JSON.stringify(tokenJson, null, 2)
const figmaJson = JSON.stringify(figmaVariables, null, 2)

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="docs-scroll max-h-[520px] overflow-auto rounded-xl bg-[#08080a] p-5 ring-1 ring-border-subtle">
      <pre className="font-mono text-[12px] leading-5 text-text-secondary">
        {code}
      </pre>
    </div>
  )
}

function DownloadButton({
  data,
  filename,
}: {
  data: string
  filename: string
}) {
  return (
    <a
      href={`data:application/json;charset=utf-8,${encodeURIComponent(data)}`}
      download={filename}
      className="focus-ring inline-flex h-8 items-center gap-1.5 rounded-lg bg-action-primary px-3 text-[12px] font-semibold text-action-on-primary"
    >
      Download {filename}
    </a>
  )
}

export default function Tokens() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-16">
      <PageHeader
        eyebrow="Tokens"
        title="One source, three formats"
        description="Every block below is generated from src/design-system/tokens.ts at render time, so none of them can drift from what the components actually use. Take the CSS for the web build, the Figma Variables file to seed the design file, and the flat JSON for any other platform."
      />

      <Section
        title="Figma Variables"
        description="W3C Design Tokens (DTCG) format, which both the Figma Variables import plugins and Tokens Studio read. Download the file, then in Figma open the plugin and choose Import — collections are created for color, spacing, radius and font."
        aside={
          <div className="flex gap-2">
            <CopyButton value={figmaJson} label="Copy" />
            <DownloadButton data={figmaJson} filename="liv-tokens.json" />
          </div>
        }
      >
        <CodeBlock code={figmaJson} />
        <div className="mt-4 rounded-xl bg-surface-2 p-5 ring-1 ring-border-subtle">
          <p className="text-[13px] font-semibold text-white">
            Two things Figma Variables cannot hold
          </p>
          <ul className="mt-2.5 space-y-2">
            <li className="text-[13px] leading-5 text-text-secondary">
              <span className="text-white">Gradients.</span> Variables support
              only Color, Number, String and Boolean, so the three gradients are
              omitted from the file. Create them as Figma paint styles from the
              values on the Foundations page.
            </li>
            <li className="text-[13px] leading-5 text-text-secondary">
              <span className="text-white">Composite type styles.</span> Each
              step of the type scale is exported as separate font.size,
              font.lineHeight and font.weight numbers. Build the Figma text
              styles on top of those numbers so the two stay linked.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title="Tailwind v4 @theme"
        description="Drop this into src/index.css directly after @import 'tailwindcss'. Every token becomes a utility: bg-surface-2, text-text-secondary, rounded-2xl, text-title-16."
        aside={<CopyButton value={themeCss} label="Copy CSS" />}
      >
        <CodeBlock code={themeCss} />
      </Section>

      <Section
        title="Flat JSON"
        description="Platform-neutral export for iOS, Android, or a Style Dictionary pipeline."
        aside={<CopyButton value={json} label="Copy JSON" />}
      >
        <CodeBlock code={json} />
      </Section>
    </div>
  )
}
