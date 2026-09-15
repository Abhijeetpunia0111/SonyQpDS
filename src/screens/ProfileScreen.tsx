import Avatar from "@/design-system/components/Avatar"
import Badge from "@/design-system/components/Badge"
import ListRow from "@/design-system/components/ListRow"
import Screen from "@/design-system/components/Screen"
import {
  Bubble,
  ChevronRight,
  DeviceSwap,
  Headphones,
  Pencil,
  Plus,
  QuestionCircle,
  Receipt,
  UserOutline,
  VideoCamera,
} from "@/design-system/icons"
import { profiles } from "@/data/content"

const GROUPS = [
  [
    {
      icon: <UserOutline size={20} />,
      title: "Account",
      subtitle: "Personal details & parental controls",
    },
    {
      icon: <Plus size={20} />,
      title: "My List",
      subtitle: "View and manage your watchlist",
    },
    {
      icon: <Receipt size={20} />,
      title: "Manage Subscription",
      subtitle: "View purchase history and upgrade plans",
    },
    {
      icon: <DeviceSwap size={20} />,
      title: "Manage Device",
      subtitle: "View Change & Delete Device",
    },
    {
      icon: <Bubble size={20} />,
      title: "Activate TV",
      subtitle: "Connect and manage TV settings",
    },
  ],
  [
    {
      icon: <VideoCamera size={20} />,
      title: "Video settings",
      subtitle: "Video quality, streaming, PIP mode",
    },
    {
      icon: <Headphones size={20} />,
      title: "Audio & Subtitle settings",
      subtitle: "Audio, language and subtitle preference",
    },
    {
      icon: <QuestionCircle size={20} />,
      title: "FAQs",
      subtitle: "Answers to common questions",
    },
  ],
]

export default function ProfileScreen() {
  return (
    <Screen
      nav="profile"
      header={
        <div className="flex items-center justify-between px-4 pt-1 pb-5">
          <h1 className="text-[22px] leading-7 font-medium text-white">
            Profiles
          </h1>
          <button
            type="button"
            className="flex items-center gap-2 text-[16px] text-white"
          >
            <Pencil size={17} />
            Edit
          </button>
        </div>
      }
    >
      {/* py-1 keeps the selected avatar's offset ring clear of the scroll clip:
          overflow-x-auto also clips vertically, which was cutting the ring. */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 py-1">
        {profiles.map((p, i) => (
          <div
            key={p}
            className="flex w-[64px] shrink-0 flex-col items-center gap-2.5"
          >
            <Avatar name={p} size={64} square selected={i === 0} />
            <span className="-mx-2 w-20 truncate text-center text-[15px] text-white">
              {p}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mx-4 mt-8 flex w-[calc(100%-32px)] items-center gap-3 rounded-2xl bg-surface-2 px-5 py-5 text-left ring-1 ring-border-subtle ring-inset"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2.5">
            <span className="text-[20px] leading-7 font-bold text-gold">
              Super Premium
            </span>
            <Badge tone="premium">Upgrade</Badge>
          </div>
          <p className="mt-2 text-[16px] font-medium text-white">
            Ad Free + Liv Premium
          </p>
          <p className="mt-1.5 text-[14px] text-text-secondary">
            +91 6398926078 | Valid upto: 01 Jan 2027
          </p>
        </div>
        <ChevronRight size={22} className="shrink-0 text-text-tertiary" />
      </button>

      {GROUPS.map((group, gi) => (
        <div key={gi} className="mt-11 space-y-1.5 px-4">
          {group.map(({ icon, title, subtitle }) => (
            <ListRow
              key={title}
              icon={icon}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
      ))}
      <div className="h-6" />
    </Screen>
  )
}
