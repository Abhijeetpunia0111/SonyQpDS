import type { ReactNode } from "react"

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="mb-14 max-w-2xl">
      <p className="text-[12px] font-semibold tracking-[0.18em] text-text-tertiary uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-[40px] leading-[1.12] font-bold text-white">
        {title}
      </h1>
      <p className="mt-5 text-[16px] leading-7 text-text-secondary">
        {description}
      </p>
    </header>
  )
}

export function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export default function Section({
  title,
  description,
  aside,
  children,
}: {
  title: string
  description?: string
  aside?: ReactNode
  children: ReactNode
}) {
  return (
    <section
      id={sectionId(title)}
      className="mb-16 scroll-mt-24 border-t border-border-subtle pt-10"
    >
      <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-[22px] leading-7 font-semibold text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-2.5 text-[15px] leading-6 text-text-secondary">
              {description}
            </p>
          )}
        </div>
        {aside}
      </div>
      {children}
    </section>
  )
}

export type PropSpec = {
  name: string
  type: string
  default?: string
  description: string
}

export function PropsTable({ rows }: { rows: PropSpec[] }) {
  return (
    <div className="docs-scroll overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border-subtle">
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="pb-2.5 text-[11px] font-semibold tracking-[0.1em] text-text-tertiary uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-border-subtle/60">
              <td className="py-3 pr-4 align-top font-mono text-[12px] text-white">
                {r.name}
              </td>
              <td className="py-3 pr-4 align-top font-mono text-[12px] text-text-tertiary">
                {r.type}
              </td>
              <td className="py-3 pr-4 align-top font-mono text-[12px] text-text-tertiary">
                {r.default ?? "—"}
              </td>
              <td className="py-3 align-top text-[13px] leading-5 text-text-secondary">
                {r.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

type GuidelineProps = {
  dos: string[]
  donts: string[]
}

export function Guidelines({ dos, donts }: GuidelineProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl bg-surface-2 p-5 ring-1 ring-border-subtle">
        <p className="mb-3 text-[12px] font-semibold tracking-[0.1em] text-white uppercase">
          Do
        </p>
        <ul className="space-y-2.5">
          {dos.map((d) => (
            <li
              key={d}
              className="flex gap-2.5 text-[13px] leading-5 text-text-secondary"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-surface-2 p-5 ring-1 ring-border-subtle">
        <p className="mb-3 text-[12px] font-semibold tracking-[0.1em] text-text-tertiary uppercase">
          Don't
        </p>
        <ul className="space-y-2.5">
          {donts.map((d) => (
            <li
              key={d}
              className="flex gap-2.5 text-[13px] leading-5 text-text-secondary"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-disabled" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
