# Where the content comes from

Each Purana's page is a pravachan-style prose overview — an introduction
to the text's structure, its core narratives and its central teachings —
NOT a verse-by-verse translation and not a claim of completeness. These
are vast classical texts (from a few thousand to over 100,000 verses);
each page here is written as a faithful, accurate introduction to what the
text actually contains, for someone who wants to understand a Purana
before (or instead of) reading a full scholarly edition.

Source files live in `../Mahapuran/audio/puran/puranaN.txt` (outside this
repo, mirroring exactly how `../BhagwadGita/audio/gita/chapterN.txt`
works for the sibling Gita site — same reason: keeping the content source
reusable for a future TTS/audio pass, the same way the Gita chapters'
source files already are).

`src/content/puranas.ts` holds the metadata (number, title, one-line
description, availability) for all 18 traditional Mahapuranas, in the
commonly published canonical order (Brahma through Brahmanda).
`scripts/generate-purana-content.js` reads whichever `puranaN.txt` files
currently exist and writes `src/content/data/N.json` (just the body — the
title is already in puranas.ts, taken from the file's own first line). It
runs automatically before `dev`/`build`.

Shreemad Bhagwat Puran (id 5) is a special case: it already has its own
complete, independent site (shreemadbhagwat.com) — it is NOT written here
at all. `puranas.ts` gives it an `externalUrl` instead of relying on a
local `puranaN.txt`/JSON pair, and both the home-page bubble and the
`/purana/[id]` route treat that field as authoritative (no local page is
ever generated for id 5, even if a `purana5.txt` happened to exist).

## Adding a new Purana

1. Write `../Mahapuran/audio/puran/puranaN.txt` (first line = title, rest
   = body).
2. In `src/content/puranas.ts`, set that Purana's `available: true`.
3. Run `npm run build` (or `npm run dev`) — the content script picks it up
   automatically.

## Audio

Not wired in — same status and same reasoning as the sibling Gita site
(see that site's own CONTENT.md): `puranaN.mp3` may exist per Purana once
a TTS pass is done, but bundling audio at this scale directly into the
repo ships a very heavy site. Revisit as either local files or YouTube
embeds once there's a clearer plan for hosting it.
