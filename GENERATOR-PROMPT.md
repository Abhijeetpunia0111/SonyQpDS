# Prompt — Figma → Design System Documentation Site

Paste everything below into a fresh Claude Code session, replacing the bracketed
inputs. It assumes the Figma desktop app is open with the file as the **active
tab**, and that a Figma MCP server is connected.

---

## Role

You are building a **design system documentation website** from a Figma file.
The output is a running React application, not a static export: every screen is
rebuilt from real components so that changing one token repaints every screen.

## Inputs

- **Figma file URL:** `[PASTE URL]`
- **Screen frames to rebuild:** `[PASTE NODE URLs, one per screen, with a name for each]`
- **Icon frame / page:** `[PASTE URL, or "discover them"]`
- **Platform:** `[mobile / tablet / TV / web]` at `[412 × 917]`
- **Theme:** `[dark only / light only / both]`

Before writing any code, ask me about anything above that is missing or
ambiguous. Do not guess at a colour, size, or icon that you could read from the
file instead.

---

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 — tokens declared in `@theme`, custom utilities via `@utility`.
  No `tailwind.config.js`, no PostCSS config.
- No component library, no CSS-in-JS, no animation library. Plain CSS
  transitions.
- `@/` aliases `src/`.

## Structure

```
src/
  design-system/
    tokens.ts          primitives + semantic tokens, single source of truth
    icons.tsx          every icon, each with a drawn fallback
    components/        the product components the screens are built from
  screens/             one file per Figma frame + an index registry
  data/
    content.ts         copy and catalogue data for the screens
    artwork.ts         image drop-in glob
    icons.ts           icon SVG drop-in glob
    media.ts           gallery media glob
  docs/                the documentation site itself
  assets/
    artwork/  icons/  avatars/  video/
```

---

## The site: five pages

A persistent left sidebar at `lg` and up, listing the pages with the current
page's sections nested beneath as jump links. Below `lg`, a header with the
logo on its own line and the page tabs in a **single horizontally scrolling
row** — never a wrapping block — with the active tab scrolled into view.

1. **Interactivity** — gallery of screen recordings and exported screens.
   Video/Images tabs (Video default), platform sub-filter under Images. Cards
   have no caption below; on hover they reveal a centred play/pause control, a
   top-right expand button, and the asset name over a bottom gradient scrim.
   Expand opens a lightbox: backdrop blur, media centred and fitted with ≥30px
   top and bottom padding.
2. **Wireframes** — every rebuilt screen in a phone frame, grouped by flow,
   with a filter to isolate one. Live React, so each frame scrolls and its
   chips and tabs respond.
3. **Foundation** — colour model, palette, typography, spacing, radius,
   elevation, iconography, layout.
4. **Components** — one entry per component: live specimen, Do/Don't pair,
   props table with types and defaults, copyable usage snippet.
5. **Tokens** — the same tokens in three formats, all generated from
   `tokens.ts` at render time so none can drift: Figma Variables (DTCG JSON,
   downloadable), Tailwind `@theme` CSS, and flat JSON.

---

## Phase 1 — Read the design

Use `get_metadata` to map the node tree, `get_screenshot` to see a frame, and
`download_assets` for SVG and images. Then:

- **Colours.** Try `get_variable_defs` first. It only returns variables used by
  the layer **currently selected in Figma**, and returns `{}` when the design
  uses raw fills rather than variables. If it comes back empty, export the
  frames as PNG and sample them with PIL: count exact pixel values and take the
  flat fills that occupy a meaningful share of the area. **Check the corner
  pixels first** — the most common colour in a full-board export is usually the
  Figma canvas background, not a UI colour. Anti-aliasing invents neighbouring
  greys; a real token appears as a sharp spike, not a smear.
- **Typography.** Read sizes from the metadata, not by eye.
- **Icons.** Note each icon's layer name — it is the contract for the file
  naming below.

Tell me which values you measured versus inferred. Never present a guessed hex
as if it came from the file.

## Phase 2 — Tokens

Two layers, because this is what Figma Variables wants and what makes a
repaint a one-line change:

- `primitives` — the raw ramp. **The only place a hex literal appears.**
- `colors` — semantic tokens, each aliasing a primitive *by name*.

Rules:
- Every primitive must be referenced by at least one semantic token, and every
  semantic token used by at least one component. Audit and delete the rest.
- Screens reference semantic tokens only — never a primitive, never a literal.
- Name by role (`action-primary`, `text-tertiary`), not by appearance
  (`white`, `grey-2`).
- Two roles may alias the same primitive. That is information, not duplication.
- The Figma export emits `primitive` and `semantic` collections with DTCG alias
  references (`{primitive.neutral.neutral-850}`).
- Figma Variables hold only Color, Number, String and Boolean. Decompose type
  styles into `font.size` / `font.lineHeight` / `font.weight` numbers, and omit
  gradients — say so on the page rather than silently dropping them.

Also tokenise anything you catch hardcoded: overlay scrims, glows, placeholder
fills. Grep for `#` and `rgba(` in components when you think you are done.

## Phase 3 — Components, then screens

Build the component library first, then assemble screens from it. A screen file
should contain layout and data — if it contains a colour or a magic radius,
that belongs in a component or a token.

Every component: typed props with defaults, no `any`, and a one-line comment
only where the *why* is non-obvious.

## Phase 4 — Asset drop-in pipelines

For artwork, icons, avatars and video, use `import.meta.glob` with
`{ eager: true, query: "?url", import: "default" }` and match files by a
slugified name, so dropping a file into the folder replaces the placeholder
with **no code change**. Always keep a graceful fallback — a generated
placeholder or a drawn icon — so a missing file never breaks the build. Write a
README in each folder with the naming table.

When real artwork arrives, suppress any stand-in lettering the component was
drawing, since a real asset has that typography baked in.

---

## Gotchas — read before you start

These cost real time. Do not rediscover them.

**Figma export**
- `download_assets` returns both `export` and `svgAssets`. Use **`svgAssets`**.
  The `export` URL renders the node *in page context* — it contains a full-bleed
  background rect and every ancestor fill clipped to the icon's box, which under
  a CSS mask is a solid square.
- Some exports arrive with drop-shadow filters and an inflated viewBox
  (37×37 for a 24px icon). Strip the `filter` and defs, then reframe the
  viewBox around the glyph's real bounds.
- Strip `preserveAspectRatio="none"` from every exported SVG.
- `get_design_context` may hang to the 300s timeout and drop the MCP transport.
  `get_metadata`, `get_screenshot` and `download_assets` are reliable.

**Icons**
- Render icons as `mask-image` + `background-color: currentColor`, not `<img>`.
  A masked icon still inherits colour, which is what lets a nav icon turn gold
  by being active. The colours inside the SVG are then irrelevant — only shape
  matters.

**Tailwind v4**
- Custom utilities need `@utility`, not `@layer utilities`.
- For focus rings use `outline`, not `ring`: cards and rails set
  `overflow-hidden`, which clips a ring but not an outline.

**Verifying in a browser**
- `backdrop-filter` breaks screenshot capture in preview panes — the element
  renders as an opaque block. Read computed styles before believing a
  screenshot.
- A backgrounded preview pane reports `document.hidden === true`, and the
  browser then pauses video about a second after it starts. Front the tab
  before concluding autoplay is broken.
- Stale HMR state can produce `X is not defined` for code that compiles. If
  `tsc` and `vite build` are clean, restart the dev server before debugging.

**Video**
- Autoplay requires `muted` + `playsInline`.
- With IntersectionObserver: before metadata loads a `<video>` has zero height,
  so the first entry reports it off-screen and pauses it — and resizing does not
  re-fire the observer. Measure with `getBoundingClientRect` inside the callback
  and also sync on `loadedmetadata` and `canplay`.
- Pause off-screen clips; a gallery decoding twenty videos at once stutters.

**Modals**
- Animate the **exit**, not just the entrance, or closing snaps. Keep the node
  mounted for the exit duration, then unmount. Guard against double-fire.
- Transform should run longer than opacity, so the panel is visible while it
  settles rather than fading in after it lands. `cubic-bezier(0.16, 1, 0.3, 1)`
  out, a quicker ease-in back. Honour `prefers-reduced-motion`.

**Routing**
- A hash router plus in-page `#anchor` links collide — the anchor is read as an
  unknown route. Use scroll handlers for in-page jumps.

**Formatters**
- `oxfmt` collapses single-line TypeScript type literals and drops the
  separators, producing code that will not compile. Extract inline literals to
  named types before running it, or skip it.

---

## Working agreement

- Verify in the browser before reporting done. Read computed styles and
  measured geometry, not just screenshots.
- Run `tsc --noEmit` and `vite build` after each phase.
- When you cannot read something from Figma, say so and ask — do not
  substitute a plausible value.
- Flag anything you changed beyond what I asked for, and why.
