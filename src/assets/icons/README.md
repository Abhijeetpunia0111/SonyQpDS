# Icons

Export icons from Figma as SVG and drop them here. No code changes — the drawn
fallback in `src/design-system/icons.tsx` is replaced automatically and the dev
server hot-reloads.

## Exporting from Figma

Select the icon frame, then **Export → SVG** in the right-hand panel. Turn
_Include "id" attribute_ off and leave _Outline text_ on. A 24px frame is ideal
but any square artboard works — the SVG is scaled to the requested size.

## Naming

Name the file after either the Figma layer or the component. Matching ignores
case, spaces, dashes and underscores, so `home-01.svg`, `Home 01.svg` and
`NavHome.svg` all resolve to the same icon.

| Component | Figma layer name |
| --- | --- |
| `NavHome` | `home-01` |
| `NavSearch` | `search-01` |
| `NavFlame` | `fire` |
| `NavDownloads` | `archive-arrow-down` |
| `Crown` | `crown-03` |
| `Bolt` | `zap` |
| `RatingStar` | `imdb` |
| `ThumbUp` | `thumbs-up` |
| `PlayFilled` | `play` |
| `Plus` | `plus` |
| `ChevronLeft` / `ChevronRight` / `ChevronDown` | `chevron-left` / `chevron-right` / `chevron-down` |
| `MoreVertical` | `dots-vertical` |
| `SearchGlass` | `search-lg` |
| `Mic` | `microphone-01` |
| `DownloadArrow` | `download-01` |
| `Share` | `share-01` |
| `Trash` | `trash-01` |
| `HalfCircle` | `circle-half` |
| `AlertTriangle` | `alert-triangle` |
| `Pencil` | `edit-02` |
| `GridFour` | `grid-01` |
| `Clapper` | `film-01` |
| `SportsBall` | `basketball` |
| `UserOutline` | `user-01` |
| `Receipt` | `receipt` |
| `DeviceSwap` | `monitor-04` |
| `Bubble` | `message-square` |
| `VideoCamera` | `video-recorder` |
| `Headphones` | `headphones-01` |
| `QuestionCircle` | `help-circle` |
| `StatusWifi` / `StatusSignal` / `StatusBattery` | `wifi` / `signal-01` / `battery-full` |

## How colour works

Exports are applied as a CSS mask and painted with `currentColor`, so an icon
still turns gold when the navigation item is active, or grey when it is not.
That means **the colours inside the SVG are ignored** — only its shape matters.
This is the right behaviour for every icon in this system, all of which are
monochrome.

Two icons are deliberately not swappable, because they are wordmarks rather than
icons: `LivLogo` and `DolbyMark`.
