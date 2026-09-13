import { useState } from "react"
import type { ReactNode } from "react"
import Avatar from "@/design-system/components/Avatar"
import Badge from "@/design-system/components/Badge"
import BottomNav from "@/design-system/components/BottomNav"
import Button from "@/design-system/components/Button"
import Chip from "@/design-system/components/Chip"
import CircleButton from "@/design-system/components/CircleButton"
import EmptyState from "@/design-system/components/EmptyState"
import LandscapeCard from "@/design-system/components/LandscapeCard"
import ListRow from "@/design-system/components/ListRow"
import MetaRow from "@/design-system/components/MetaRow"
import PosterCard from "@/design-system/components/PosterCard"
import ProgressBar from "@/design-system/components/ProgressBar"
import Rail from "@/design-system/components/Rail"
import SearchField from "@/design-system/components/SearchField"
import SectionHeader from "@/design-system/components/SectionHeader"
import StatusBar from "@/design-system/components/StatusBar"
import TabBar from "@/design-system/components/TabBar"
import {
  Bolt,
  ChevronDown,
  Clapper,
  Crown,
  DownloadArrow,
  GridFour,
  PlayFilled,
  Plus,
  RatingStar,
  ThumbUp,
  UserOutline,
} from "@/design-system/icons"
import CopyButton from "./CopyButton"
import { Guidelines, PageHeader, PropsTable } from "./Section"
import type { PropSpec } from "./Section"

export function anchorFor(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function Specimen({
  name,
  purpose,
  props,
  code,
  dos,
  donts,
  children,
}: {
  name: string
  purpose: string
  props: PropSpec[]
  code: string
  dos: string[]
  donts: string[]
  children: ReactNode
}) {
  const [tab, setTab] = useState<"api" | "code">("api")

  return (
    <section
      id={anchorFor(name)}
      className="mb-10 scroll-mt-28 overflow-hidden rounded-2xl bg-surface-1 ring-1 ring-border-subtle"
    >
      <div className="border-b border-border-subtle p-6">
        <h3 className="text-[19px] font-semibold text-white">{name}</h3>
        <p className="mt-2 max-w-2xl text-[14px] leading-6 text-text-secondary">
          {purpose}
        </p>
      </div>

      <div className="bg-bg p-8">{children}</div>

      <div className="border-t border-border-subtle p-6">
        <Guidelines dos={dos} donts={donts} />
      </div>

      <div className="border-t border-border-subtle">
        <div className="flex items-center justify-between gap-4 px-6 pt-4">
          <div className="flex gap-1">
            {(["api", "code"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`h-8 rounded-lg px-3 text-[12px] font-medium transition-colors ${
                  tab === t
                    ? "bg-surface-3 text-white"
                    : "text-text-tertiary hover:text-white"
                }`}
              >
                {t === "api" ? "API" : "Usage"}
              </button>
            ))}
          </div>
          {tab === "code" && <CopyButton value={code} />}
        </div>
        <div className="p-6">
          {tab === "api" ? (
            <PropsTable rows={props} />
          ) : (
            <pre className="docs-scroll overflow-x-auto rounded-xl bg-[#08080a] p-5 font-mono text-[12px] leading-5 text-text-secondary ring-1 ring-border-subtle">
              {code}
            </pre>
          )}
        </div>
      </div>
    </section>
  )
}

const TITLES = ["Maharani 4", "Shaitaan", "Scam 1992", "Rocket Boys"]

export default function Components() {
  const [tab, setTab] = useState("Episodes")
  const [season, setSeason] = useState("Season 3")
  const [filter, setFilter] = useState("All")

  return (
    <div className="mx-auto max-w-5xl px-8 py-16">
      <PageHeader
        eyebrow="Components"
        title="Component library"
        description="Every screen in this system is assembled from the components below and nothing else. Each reads its colour, spacing and radius from the token layer, so a change to a token propagates to all nine screens without touching a component file."
      />


      <Specimen
        name="Button"
        purpose="Four variants covering the full hierarchy of a screen. primary is the white gradient and is the single highest-priority action in a view; subscribe carries the gold paywall label; secondary is the neutral alternative; ghost is for low-stakes dismissal."
        props={[
          {
            name: "variant",
            type: '"primary" | "secondary" | "subscribe" | "ghost"',
            default: '"primary"',
            description: "Visual weight. Only one primary per screen.",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            default: '"lg"',
            description:
              "36 / 44 / 48px tall. lg is the default for a full-width CTA.",
          },
          {
            name: "block",
            type: "boolean",
            default: "false",
            description: "Stretch to the width of the container.",
          },
          {
            name: "radius",
            type: '"lg" | "pill"',
            default: '"lg"',
            description: "Full-width CTAs use lg; inline actions use pill.",
          },
          {
            name: "icon",
            type: "ReactNode",
            description: "Leading icon. Sized 17–19px to match the label.",
          },
          {
            name: "onClick",
            type: "() => void",
            description: "Press handler.",
          },
        ]}
        dos={[
          "Keep exactly one primary button per screen — it is the anchor the eye lands on first.",
          "Pair Watch Free Episode (primary) with Subscribe Now (subscribe) in that order.",
          "Give full-width CTAs radius lg so they sit in the same family as the cards above them.",
        ]}
        donts={[
          "Don't use gold as a button fill — gold is a label colour on a dark fill, never a background.",
          "Don't place two primary buttons side by side; demote one to secondary.",
          "Don't shrink a full-width CTA below size lg — it stops reading as the main action.",
        ]}
        code={`<Button
  variant="primary"
  block
  icon={<PlayFilled size={17} className="text-black" />}
>
  Watch Free Episode
</Button>

<Button
  variant="subscribe"
  block
  icon={<Crown size={19} className="text-gold" />}
>
  Subscribe Now
</Button>`}
      >
        <div className="mx-auto max-w-sm space-y-3">
          <Button
            variant="primary"
            block
            icon={<PlayFilled size={17} className="text-black" />}
          >
            Watch Free Episode
          </Button>
          <Button
            variant="subscribe"
            block
            icon={<Crown size={19} className="text-gold" />}
          >
            Subscribe Now
          </Button>
          <Button variant="secondary" block>
            Secondary
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="sm" radius="pill">
            Small pill
          </Button>
          <Button size="md" variant="secondary" radius="pill">
            Medium pill
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
        </div>
      </Specimen>

      <Specimen
        name="Chip"
        purpose="One component covers category chips on Home, filter chips on Search and season chips on Detail. Shape carries the meaning: rounded chips navigate to a catalogue, pill chips filter the view you are already in."
        props={[
          {
            name: "shape",
            type: '"pill" | "rounded"',
            default: '"pill"',
            description: "rounded (16px) for navigation, pill for filtering.",
          },
          {
            name: "size",
            type: '"sm" | "md"',
            default: '"md"',
            description:
              "36px for season chips, 44px for category and filter chips.",
          },
          {
            name: "selected",
            type: "boolean",
            default: "false",
            description:
              "Adds the inset border-strong ring. Fill does not change.",
          },
          {
            name: "icon",
            type: "ReactNode",
            description: "Leading icon, 17px.",
          },
          {
            name: "trailing",
            type: "ReactNode",
            description: "Trailing icon, e.g. a chevron.",
          },
          {
            name: "onClick",
            type: "() => void",
            description: "Selection handler.",
          },
        ]}
        dos={[
          "Show selection with the inset ring so the row keeps an even rhythm of fills.",
          "Keep the first filter chip as the unfiltered default and select it on entry.",
          "Let chip rows bleed past the screen gutter so a clipped chip signals more to scroll.",
        ]}
        donts={[
          "Don't fill a selected chip with white — that weight belongs to the primary button.",
          "Don't mix pill and rounded chips in the same row.",
          "Don't wrap chips onto a second line in a scrolling rail.",
        ]}
        code={`<Chip shape="rounded">Originals</Chip>

<Chip
  selected={filter === "All"}
  icon={<GridFour size={17} />}
  onClick={() => setFilter("All")}
>
  All
</Chip>

<Chip size="sm" selected={season === "Season 3"}>Season 3</Chip>`}
      >
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2.5">
            {["Originals", "TV Shows", "Sports", "Movies"].map((c) => (
              <Chip key={c} shape="rounded">
                {c}
              </Chip>
            ))}
            <Chip shape="rounded" trailing={<ChevronDown size={20} />} />
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Chip
              selected={filter === "All"}
              icon={<GridFour size={17} />}
              onClick={() => setFilter("All")}
            >
              All
            </Chip>
            <Chip
              selected={filter === "Movies"}
              icon={<Clapper size={17} />}
              onClick={() => setFilter("Movies")}
            >
              Movies
            </Chip>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["Season 1", "Season 2", "Season 3", "Season 4"].map((s) => (
              <Chip
                key={s}
                size="sm"
                selected={s === season}
                onClick={() => setSeason(s)}
              >
                {s}
              </Chip>
            ))}
          </div>
        </div>
      </Specimen>

      <Specimen
        name="Badge"
        purpose="Small status markers with fixed meanings. onMedia sits on artwork and carries its own scrim; premium is the only place the purple gradient appears; certification is the regulatory tag in the corner of a backdrop."
        props={[
          {
            name: "tone",
            type: '"onMedia" | "premium" | "certification" | "neutral"',
            default: '"neutral"',
            description:
              "Determines fill, radius and whether the label is italic.",
          },
          {
            name: "icon",
            type: "ReactNode",
            description: "Leading icon, 12–15px.",
          },
        ]}
        dos={[
          "Use onMedia for any badge that overlaps artwork so it stays legible on unpredictable images.",
          "Reserve premium for the Upgrade affordance on the subscription card.",
          "Keep certification badges bottom-left, where regional regulators expect them.",
        ]}
        donts={[
          "Don't invent new tones — a new meaning needs a new token, not an ad-hoc colour.",
          "Don't stack more than one badge in the same corner of a card.",
          "Don't use premium to mean 'new' — gold and purple are not interchangeable.",
        ]}
        code={`<Badge tone="onMedia" icon={<Bolt size={14} className="text-gold" />}>
  New Release
</Badge>

<Badge tone="premium">Upgrade</Badge>
<Badge tone="certification">U/A 13+</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Badge tone="onMedia" icon={<Bolt size={14} className="text-gold" />}>
            New Release
          </Badge>
          <Badge tone="premium">Upgrade</Badge>
          <Badge tone="certification">U/A 13+</Badge>
          <Badge tone="neutral">4 Seasons</Badge>
        </div>
      </Specimen>

      <Specimen
        name="PosterCard"
        purpose="The 2:3 portrait card used by every rail and search grid. fluid drops the fixed width so it can fill a three-column grid; rank renders the oversized numeral used on Trending rows."
        props={[
          {
            name: "title",
            type: "string",
            description: "Title, also seeds the placeholder artwork.",
          },
          {
            name: "width",
            type: "number",
            default: "112",
            description: "Fixed width in a rail.",
          },
          {
            name: "fluid",
            type: "boolean",
            default: "false",
            description: "Fill the grid cell instead of using a fixed width.",
          },
          {
            name: "premium",
            type: "boolean",
            default: "false",
            description: "Gold crown, top-left.",
          },
          {
            name: "newRelease",
            type: "boolean",
            default: "false",
            description: "onMedia badge, bottom-left.",
          },
          {
            name: "rank",
            type: "number",
            description: "Oversized numeral for Trending.",
          },
          {
            name: "caption",
            type: "string",
            description: "Optional single-line caption below the poster.",
          },
        ]}
        dos={[
          "Keep the 2:3 ratio fixed — the grid depends on every poster being the same shape.",
          "Use the crown for entitlement and the badge for recency; they answer different questions.",
          "Let the rank numeral overhang the bottom edge so it reads as a treatment, not a label.",
        ]}
        donts={[
          "Don't add a title below a poster inside a grid; the key art carries the name.",
          "Don't combine rank with newRelease — two attention marks cancel each other out.",
          "Don't set a poster narrower than 96px; the badge stops fitting.",
        ]}
        code={`<PosterCard title="Maharani 4" width={118} premium />
<PosterCard title="Shaitaan" fluid newRelease />
<PosterCard title="Scam 1992" width={118} rank={1} />`}
      >
        <div className="flex flex-wrap gap-3">
          <PosterCard title="Maharani 4" width={118} premium />
          <PosterCard title="Shaitaan" width={118} newRelease />
          <PosterCard title="Scam 1992" width={118} rank={1} />
          <PosterCard title="Rocket Boys" width={118} caption="Rocket Boys" />
        </div>
      </Specimen>

      <Specimen
        name="LandscapeCard"
        purpose="The 16:9 continue-watching card. The progress track is the reason this shape exists — a title with no resume point belongs in a PosterCard instead."
        props={[
          {
            name: "title",
            type: "string",
            description:
              "Shown below the thumbnail and used for the artwork seed.",
          },
          {
            name: "meta",
            type: "string",
            description: "Remaining time, e.g. '2H 9m left'.",
          },
          {
            name: "progress",
            type: "number",
            description: "0–100. Omit to hide the track.",
          },
          {
            name: "width",
            type: "number",
            default: "186",
            description: "Card width inside a rail.",
          },
        ]}
        dos={[
          "Always pass progress — the card is meaningless without a resume point.",
          "Keep the overflow menu on the card, not on a long-press, so it is discoverable.",
          "Use remaining time rather than percentage; it is what viewers actually decide on.",
        ]}
        donts={[
          "Don't use this card for titles the viewer has not started.",
          "Don't hide the play affordance — it is the target most people aim for.",
          "Don't let the title wrap to two lines; truncate instead.",
        ]}
        code={`<LandscapeCard title="Karapuu" meta="2H 9m left" progress={32} />`}
      >
        <div className="flex gap-3">
          <LandscapeCard title="Karapuu" meta="2H 9m left" progress={32} />
          <LandscapeCard title="Turbo" meta="2H 9m left" progress={72} />
        </div>
      </Specimen>

      <Specimen
        name="Rail + SectionHeader"
        purpose="The pairing that builds the browse experience. The rail intentionally bleeds past the 16px screen gutter so a partially visible card signals that the row scrolls."
        props={[
          {
            name: "Rail · gap",
            type: "number",
            default: "8",
            description: "Gap between cards in pixels.",
          },
          {
            name: "SectionHeader · title",
            type: "string",
            description: "Row title, title-16.",
          },
          {
            name: "SectionHeader · action",
            type: "boolean",
            default: "true",
            description: "Trailing chevron linking to the full collection.",
          },
        ]}
        dos={[
          "Give every rail a header — an unlabelled row of posters has no meaning.",
          "Keep 16px between the header and the rail, and 28px between rails.",
          "Use the chevron only when there is a full collection page to open.",
        ]}
        donts={[
          "Don't clip the rail to the gutter; the overflow is what communicates scrollability.",
          "Don't mix poster and landscape cards inside one rail.",
          "Don't nest a rail inside another horizontally scrolling container.",
        ]}
        code={`<SectionHeader title="Continue Watching For Satish" />
<Rail>
  {items.map((t) => (
    <LandscapeCard key={t.name} title={t.name} meta={t.meta} progress={t.progress} />
  ))}
</Rail>`}
      >
        <div className="-mx-8 space-y-3">
          <SectionHeader title="Must Watch Movies" />
          <Rail>
            {TITLES.map((t) => (
              <PosterCard key={t} title={t} width={112} />
            ))}
          </Rail>
        </div>
      </Specimen>

      <Specimen
        name="ListRow"
        purpose="One row covering settings, account and any icon-title-subtitle list. bare removes the card fill for lists that are separated by dividers rather than gaps."
        props={[
          {
            name: "icon",
            type: "ReactNode",
            description: "Leading icon, 22px, text-tertiary.",
          },
          {
            name: "title",
            type: "string",
            description: "title-18, regular weight.",
          },
          {
            name: "subtitle",
            type: "string",
            description: "body-12, text-tertiary.",
          },
          {
            name: "trailing",
            type: "ReactNode",
            description: "Control shown before the chevron.",
          },
          {
            name: "chevron",
            type: "boolean",
            default: "true",
            description: "Trailing disclosure arrow.",
          },
          {
            name: "bare",
            type: "boolean",
            default: "false",
            description: "Drop the surface-2 fill.",
          },
        ]}
        dos={[
          "Write subtitles that say what the row contains, not what it is called again.",
          "Group rows into sets of three to five with 32px between groups.",
          "Keep the chevron whenever the row opens another screen.",
        ]}
        donts={[
          "Don't put a switch and a chevron on the same row — pick one interaction.",
          "Don't let a title wrap; shorten the label instead.",
          "Don't mix bare and filled rows within a single group.",
        ]}
        code={`<ListRow
  icon={<UserOutline size={22} />}
  title="Account"
  subtitle="Personal details & parental controls"
/>`}
      >
        <div className="mx-auto max-w-md space-y-2">
          <ListRow
            icon={<UserOutline size={22} />}
            title="Account"
            subtitle="Personal details & parental controls"
          />
          <ListRow
            icon={<DownloadArrow size={22} />}
            title="Manage Device"
            subtitle="View Change & Delete Device"
          />
        </div>
      </Specimen>

      <Specimen
        name="SearchField"
        purpose="A single pill covering the empty, focused and submitted states of search. The quoted hint is an example query, not a label, and disappears the moment the viewer types."
        props={[
          {
            name: "value",
            type: "string",
            description:
              "Submitted or in-progress query. Renders italic white.",
          },
          {
            name: "placeholder",
            type: "string",
            default: '"Search"',
            description: "Resting label.",
          },
          {
            name: "hint",
            type: "string",
            description: "Quoted example query shown beside the placeholder.",
          },
          {
            name: "caret",
            type: "boolean",
            default: "false",
            description: "Renders a static caret for mockups.",
          },
        ]}
        dos={[
          "Keep the microphone visible in every state — voice is a primary entry path on mobile.",
          "Show the submitted query in quotes so results clearly belong to it.",
          "Keep the field pinned above the results while they scroll.",
        ]}
        donts={[
          "Don't replace the placeholder with a long instruction.",
          "Don't remove the leading magnifier when the field has focus.",
          "Don't animate the field into the header; it stays a consistent target.",
        ]}
        code={`<SearchField placeholder="Search" hint={'“Tarak Mehta”'} />
<SearchField value="Tamil Movies" caret />`}
      >
        <div className="mx-auto max-w-md space-y-3">
          <SearchField placeholder="Search" hint={"“Tarak Mehta”"} />
          <SearchField value="Tamil Movies" caret />
        </div>
      </Specimen>

      <Specimen
        name="TabBar"
        purpose="Evenly divided underline tabs used on the detail screen. The indicator is white, not gold — gold is reserved for the paywall, and position is not a paid feature."
        props={[
          {
            name: "tabs",
            type: "string[]",
            description:
              "Two to four labels. More than four needs a scrolling rail.",
          },
          {
            name: "active",
            type: "string",
            description: "Currently selected label.",
          },
          {
            name: "onChange",
            type: "(tab: string) => void",
            description: "Selection handler.",
          },
        ]}
        dos={[
          "Divide the available width evenly so the tab row reads as one control.",
          "Keep Episodes first — it is what most viewers came for.",
          "Change only the content below the rule when a tab changes.",
        ]}
        donts={[
          "Don't colour the active indicator gold.",
          "Don't use tabs for filtering; that is what chips are for.",
          "Don't exceed four tabs at 412px — labels start truncating.",
        ]}
        code={`<TabBar
  tabs={["Episodes", "Story Tracks", "More like this"]}
  active={tab}
  onChange={setTab}
/>`}
      >
        <div className="-mx-8">
          <TabBar
            tabs={["Episodes", "Story Tracks", "More like this"]}
            active={tab}
            onChange={setTab}
          />
        </div>
      </Specimen>

      <Specimen
        name="BottomNav + StatusBar"
        purpose="The navigation floats over content instead of docking to the edge, so artwork continues to the bottom of the display. It is absolutely positioned and expects a relative parent; screens reserve 96px beneath their content for it."
        props={[
          {
            name: "BottomNav · active",
            type: '"home" | "search" | "premium" | "downloads" | "profile"',
            description:
              "Current destination. Tints the icon gold and adds the glow.",
          },
          {
            name: "StatusBar · time",
            type: "string",
            default: '"9:30"',
            description: "Clock label.",
          },
          {
            name: "StatusBar · network",
            type: "string",
            description: "Carrier badge, e.g. 5G.",
          },
        ]}
        dos={[
          "Reserve 96px of scroll padding beneath page content so the last row clears the bar.",
          "Keep all five destinations visible at all times.",
          "Mark the active item with gold plus the glow — colour alone is not enough at this size.",
        ]}
        donts={[
          "Don't add labels under the icons; the pill is sized for glyphs only.",
          "Don't hide the navigation on scroll — it is the only way back out of a screen.",
          "Don't reorder the destinations between screens.",
        ]}
        code={`<div className="relative h-[220px]">
  <StatusBar time="09:30 PM" network="5G" />
  <BottomNav active="home" />
</div>`}
      >
        <div className="relative mx-auto h-52 max-w-[412px] overflow-hidden rounded-2xl bg-surface-1">
          <StatusBar time="09:30 PM" network="5G" />
          <BottomNav active="home" />
        </div>
      </Specimen>

      <Specimen
        name="MetaRow + ProgressBar"
        purpose="MetaRow lays out the two metadata lines on a detail screen: ratings separated by vertical rules, catalogue facts separated by dots. ProgressBar is the 4px resume track."
        props={[
          {
            name: "MetaRow · items",
            type: "ReactNode[]",
            description:
              "Facts to lay out; separators are inserted between them.",
          },
          {
            name: "MetaRow · separator",
            type: '"dot" | "rule"',
            default: '"dot"',
            description: "rule for the ratings line, dot for catalogue facts.",
          },
          {
            name: "ProgressBar · value",
            type: "number",
            description: "0–100.",
          },
          {
            name: "ProgressBar · tone",
            type: '"primary" | "gold"',
            default: '"primary"',
            description: "gold only for premium download progress.",
          },
        ]}
        dos={[
          "Put ratings on the first line and catalogue facts on the second.",
          "Keep the track at 30% white so it stays visible over any artwork.",
          "Centre both metadata lines under the title art.",
        ]}
        donts={[
          "Don't mix rules and dots in one line.",
          "Don't exceed six facts on the catalogue line.",
          "Don't animate the progress track on first paint.",
        ]}
        code={`<MetaRow
  separator="rule"
  items={[newReleaseFlag, imdbRating, likePercentage]}
/>
<MetaRow items={["2021", "U/A 7+", "Comedy", "4 Seasons"]} />

<ProgressBar value={64} />`}
      >
        <MetaRow
          separator="rule"
          items={[
            <span
              key="a"
              className="flex items-center gap-1.5 text-[15px] font-bold text-white italic"
            >
              <Bolt size={15} className="text-gold" />
              New Release
            </span>,
            <span
              key="b"
              className="flex items-center gap-1.5 text-[15px] text-white"
            >
              <RatingStar size={19} className="text-white" />
              IMDB 8.2
            </span>,
            <span
              key="c"
              className="flex items-center gap-1.5 text-[15px] text-white"
            >
              <ThumbUp size={17} className="text-white" />
              75%
            </span>,
          ]}
        />
        <MetaRow
          className="mt-3"
          items={["2021", "U/A 7+", "Comedy", "4 Seasons"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        />
        <div className="mx-auto mt-8 max-w-xs space-y-3">
          <ProgressBar value={64} />
          <ProgressBar value={32} tone="gold" />
        </div>
      </Specimen>

      <Specimen
        name="CircleButton + Avatar"
        purpose="CircleButton is the round control that sits on artwork — back, add-to-list, play. Avatar is square-rounded on the profile picker and circular everywhere else."
        props={[
          {
            name: "CircleButton · tone",
            type: '"overlay" | "solid"',
            default: '"overlay"',
            description:
              "overlay is a blurred dark disc; solid is the white gradient.",
          },
          {
            name: "CircleButton · size",
            type: "number",
            default: "40",
            description: "Diameter in pixels.",
          },
          {
            name: "CircleButton · label",
            type: "string",
            description: "Required accessible name.",
          },
          {
            name: "Avatar · size",
            type: "number",
            default: "56",
            description: "Diameter in pixels.",
          },
          {
            name: "Avatar · square",
            type: "boolean",
            default: "false",
            description: "Rounded square for the profile picker.",
          },
          {
            name: "Avatar · selected",
            type: "boolean",
            default: "false",
            description: "White ring marking the active profile.",
          },
        ]}
        dos={[
          "Always pass a label to CircleButton — the icon alone gives screen readers nothing.",
          "Keep overlay buttons at 34–40px so they clear the 44px touch target with their padding.",
          "Mark the active profile with the white ring, not by scaling the avatar.",
        ]}
        donts={[
          "Don't put a solid CircleButton on a light area of artwork.",
          "Don't use square avatars outside the profile picker.",
          "Don't tint the avatar ring gold; that reads as a paid state.",
        ]}
        code={`<CircleButton size={40} label="Add to watchlist">
  <Plus size={20} />
</CircleButton>

<Avatar name="Jhon" size={72} square selected />`}
      >
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            <CircleButton size={34} label="Back">
              <ChevronDown size={19} />
            </CircleButton>
            <CircleButton size={40} label="Add to watchlist">
              <Plus size={20} />
            </CircleButton>
            <CircleButton size={48} tone="solid" label="Play">
              <PlayFilled size={18} />
            </CircleButton>
          </div>
          <div className="flex items-end gap-4">
            {["Jhon", "Christine", "Karan"].map((p, i) => (
              <div
                key={p}
                className="flex w-[72px] flex-col items-center gap-2"
              >
                <Avatar name={p} size={72} square selected={i === 0} />
                <span className="truncate text-[14px] text-white">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </Specimen>

      <Specimen
        name="EmptyState"
        purpose="One illustration, one sentence of cause, one way out. Used on Downloads today and available to any screen that can legitimately hold nothing."
        props={[
          {
            name: "illustration",
            type: "ReactNode",
            description: "Inline SVG, roughly 230×200.",
          },
          {
            name: "title",
            type: "string",
            description: "display-24. States the situation, not an apology.",
          },
          {
            name: "description",
            type: "string",
            description:
              "body-14, max two lines, explains what fills this screen.",
          },
          {
            name: "actionLabel",
            type: "string",
            description: "Primary button label. Omit when there is no action.",
          },
        ]}
        dos={[
          "Explain what will appear here once the viewer acts.",
          "Give exactly one action, styled as the primary button.",
          "Centre the block vertically in the available space.",
        ]}
        donts={[
          "Don't apologise or blame the viewer for the empty screen.",
          "Don't offer two competing actions.",
          "Don't reuse a content illustration; empty states have their own greyscale set.",
        ]}
        code={`<EmptyState
  illustration={<EmptyArt />}
  title="No Downloads Yet"
  description="Movies and episodes you download will appear here. Start downloading to watch offline."
  actionLabel="Browse Content"
/>`}
      >
        <div className="mx-auto max-w-sm">
          <EmptyState
            illustration={
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-surface-2">
                <DownloadArrow size={44} className="text-text-tertiary" />
              </div>
            }
            title="No Downloads Yet"
            description="Movies and episodes you download will appear here."
            actionLabel="Browse Content"
          />
        </div>
      </Specimen>
    </div>
  )
}
