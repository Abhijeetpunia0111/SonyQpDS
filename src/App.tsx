import { useEffect, useRef, useState } from "react"
import { LivLogo } from "@/design-system/icons"
import Components from "./docs/Components"
import Foundations from "./docs/Foundations"
import Gallery from "./docs/Gallery"
import Interactivity from "./docs/Interactivity"
import { OUTLINE } from "./docs/outline"
import { sectionId } from "./docs/Section"
import Tokens from "./docs/Tokens"

const PAGES = [
  { id: "interactivity", label: "Interactivity", Component: Interactivity },
  { id: "screens", label: "Wireframes", Component: Gallery },
  { id: "foundations", label: "Foundation", Component: Foundations },
  { id: "components", label: "Components", Component: Components },
  { id: "tokens", label: "Tokens", Component: Tokens },
] as const

type PageId = (typeof PAGES)[number]["id"]

function readHash(): PageId {
  const id = window.location.hash.replace("#", "")
  return PAGES.some((p) => p.id === id) ? (id as PageId) : PAGES[0].id
}

export default function App() {
  const [page, setPage] = useState<PageId>(readHash)

  useEffect(() => {
    const onHash = () => {
      setPage(readHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  // Keeps the current tab visible in the mobile row, which scrolls sideways.
  const tabRow = useRef<HTMLElement>(null)
  useEffect(() => {
    tabRow.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ block: "nearest", inline: "center" })
  }, [page])

  const Active = PAGES.find((p) => p.id === page)!.Component

  return (
    <div className="min-h-full bg-surface-1">
      <div className="mx-auto flex max-w-[1440px]">
        <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 flex-col border-r border-border-subtle px-6 py-7 lg:flex">
          <a href={`#${PAGES[0].id}`} className="focus-ring flex items-center gap-2.5">
            <LivLogo height={24} />
            <span className="text-[15px] font-semibold text-white">
              Design System
            </span>
          </a>

          <nav className="docs-scroll mt-9 flex-1 overflow-y-auto pb-8">
            {PAGES.map(({ id, label }) => {
              const isActive = page === id
              return (
                <div key={id} className="mb-1.5">
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`focus-ring flex h-9 items-center rounded-lg px-3 text-[14px] font-medium transition-colors ${
                      isActive
                        ? "bg-surface-3 text-white"
                        : "text-text-secondary hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                  {isActive && (
                    <ul className="mt-1.5 mb-4 ml-3 border-l border-border-subtle">
                      {OUTLINE[id].map((s) => (
                        <li key={s}>
                          <button
                            type="button"
                            onClick={() =>
                              document
                                .getElementById(sectionId(s))
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="focus-ring -ml-px block w-full border-l border-transparent py-1.5 pl-4 text-left text-[13px] text-text-tertiary transition-colors hover:border-border-strong hover:text-white"
                          >
                            {s}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>

          <p className="border-t border-border-subtle pt-5 text-[12px] leading-5 text-text-tertiary">
            Inter · 4px grid · dark only
            <br />
            Figma: Mobile | Sony LIV
          </p>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-1/90 backdrop-blur-md lg:hidden">
            <a
              href={`#${PAGES[0].id}`}
              className="focus-ring flex items-center gap-2.5 px-5 pt-4 pb-3"
            >
              <LivLogo height={22} />
              <span className="text-[14px] font-semibold text-white">
                Design System
              </span>
            </a>
            {/* One scrolling row rather than a wrapping block: five labels never
                fit a phone, and wrapping leaves a ragged two-line stack. */}
            <nav
              ref={tabRow}
              className="no-scrollbar flex gap-1 overflow-x-auto px-5 pb-3"
            >
              {PAGES.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={page === id ? "page" : undefined}
                  className={`focus-ring flex h-9 shrink-0 items-center rounded-full px-4 text-[13px] font-medium transition-colors ${
                    page === id
                      ? "bg-surface-3 text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </header>

          <main>
            <Active />
          </main>
        </div>
      </div>
    </div>
  )
}
