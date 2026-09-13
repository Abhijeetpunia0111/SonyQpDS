# Title artwork

Drop image files here and they are picked up automatically — no code changes,
no imports to add. The dev server hot-reloads as soon as a file lands.

## Naming

Name each file after the title it belongs to. Matching ignores case, spaces and
punctuation, so all of these resolve for the title `Maharani 4`:

    Maharani 4.png
    maharani-4.jpg
    MAHARANI_4.webp

Anything with no matching file keeps the generated gradient placeholder, so a
partial set is fine.

## Shapes

| Where it appears | Ratio | Suggested size |
| --- | --- | --- |
| `PosterCard` — rails and search grids | 2:3 portrait | 480 × 720 |
| `LandscapeCard` — continue watching | 16:9 | 640 × 360 |
| `FeaturedCard`, detail backdrop, episode rows | 16:9 | 960 × 540 |
| Home hero | 380:487 portrait | 760 × 974 |

One file per title covers every surface; it is cropped with `object-cover`, so
keep the subject near the centre if a title appears in more than one shape.

## Titles currently referenced

Home hero: Madhuvidhu

Continue watching: Karapuu · Turbo · Tumbbad · Kanguva

Rails: Papa Buddha · Shaitaan · Article 370 · Maidaan · Laapataa Ladies

Search and results: Champions League · UFC Fight Night · Shark Tank India ·
Kaun Banega Crorepati · Scam 1992 · Rocket Boys · Gullak Season 4 ·
Maharani 4 · The Freelancer

Related videos: The Tank · Man Who Fell To Earth · Battle of the Sexes

Downloads: Taarak Mehta Ka Ooltah Chasma · Good bad Girl · Bahubali ·
Clash Of The Titans · The Super Mario Galaxy

Episodes: Daya Ke Wapas Aane Ki News · Bhide Ki Nayi Scheme ·
Jethalal Ka Naya Plan

## Profile photos

Avatars read from `src/assets/avatars/` under the same rules — `Jhon.png`,
`Christine.png`, and so on.
