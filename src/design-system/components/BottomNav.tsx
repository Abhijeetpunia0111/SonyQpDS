import {
  NavDownloads,
  NavFlame,
  NavHome,
  NavSearch,
} from "@/design-system/icons"
import Avatar from "./Avatar"

export type NavKey = "home" | "search" | "premium" | "downloads" | "profile"

type NavItem = {
  key: NavKey
  label: string
}

const ITEMS: NavItem[] = [
  { key: "home", label: "Home" },
  { key: "search", label: "Search" },
  { key: "premium", label: "Premium" },
  { key: "downloads", label: "Downloads" },
  { key: "profile", label: "Profile" },
]

export default function BottomNav({ active }: { active: NavKey }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-[28px] bg-surface-3/92 px-3 py-2.5 shadow-nav backdrop-blur-xl">
        {ITEMS.map((item) => {
          const isActive = item.key === active
          const tint = isActive ? "text-gold" : "text-text-tertiary"
          return (
            <button
              key={item.key}
              type="button"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className="focus-ring relative flex h-10 w-14 items-center justify-center rounded-full"
            >
              {isActive && (
                <span
                  aria-hidden
                  className="absolute -bottom-2.5 h-8 w-10 rounded-full opacity-70 blur-md"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-gold) 55%, transparent), transparent 70%)",
                  }}
                />
              )}
              <span className="relative">
                {item.key === "home" && <NavHome size={26} className={tint} />}
                {item.key === "search" && (
                  <NavSearch size={24} className={tint} />
                )}
                {item.key === "premium" && (
                  <NavFlame size={25} className={tint} />
                )}
                {item.key === "downloads" && (
                  <NavDownloads size={26} className={tint} />
                )}
                {item.key === "profile" && (
                  <Avatar
                    name="Satish"
                    size={28}
                    className={isActive ? "ring-2 ring-gold" : ""}
                  />
                )}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
