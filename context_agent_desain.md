# IELTS Student Resources — Design Context for AI Agent

## Project Overview

Static fallback archive website for IELTS learning materials (articles + audio tests). Bukan primary learning site — explicitly stated as "fallback archive" on dashboard and about page.

**Target user**: Mahasiswa Indonesia yang belajar IELTS, butuh akses cepat/offline ke materi.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Astro 5 (static site, `output: "static"`) |
| Styling | Tailwind CSS 3 + `@tailwindcss/typography` plugin |
| Markdown | `markdown-it` (html: true, linkify: true) |
| Fonts | Inter (heading/body), JetBrains Mono (mono), Special Elite (stamp) |
| Icons | Inline SVG via path strings (no icon library) |
| JS | Vanilla JS only — zero frameworks, zero React |
| Deploy | Vercel (free tier, static only) |
| Audio | Cloudflare R2 (not in Vercel deployment, local dev via symlink) |

## Design System

### Color Palette (HSL)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `40 33% 88%` | Warm paper background |
| `--foreground` | `222 47% 11%` | Navy ink text |
| `--card` | `0 0% 100%` | White card |
| `--primary` | `222 47% 20%` | Navy blue (buttons, headings) |
| `--primary-foreground` | `40 33% 88%` | Warm white on primary |
| `--secondary` | `40 34% 79%` | Slightly darker paper (sidebar) |
| `--muted` | `40 20% 92%` | Subtle background |
| `--muted-foreground` | `222 10% 40%` | Dimmed text |
| `--accent` | `35 85% 55%` | Amber accent (not widely used) |
| `--border` | `40 15% 76%` | Soft border |
| `--destructive` | `0 65% 50%` | Red for errors |
| `--radius` | `0.5rem` | Rounded corners |

### Category Badge Colors

| Category | Badge |
|----------|-------|
| Listening | `bg-blue-50 text-blue-700` |
| Reading | `bg-emerald-50 text-emerald-700` |
| Writing | `bg-orange-50 text-orange-700` |
| Speaking | `bg-cyan-50 text-cyan-700` |
| Grammar | `bg-violet-50 text-violet-700` |
| Vocabulary | `bg-pink-50 text-pink-700` |

### Question Type Colors (Reading filter)

| Type | Color |
|------|-------|
| T/F/NG | `bg-blue-50 text-blue-700` |
| Matching | `bg-purple-50 text-purple-700` |
| MCQ | `bg-amber-50 text-amber-700` |
| Completion | `bg-rose-50 text-rose-700` |
| General | `bg-muted text-muted-foreground` |

### Typography

- **Body font**: 1.0625rem (17px), line-height 1.75
- **Prose headings**: `font-heading` (Inter)
- **Mono (labels, meta)**: `font-mono` (JetBrains Mono), usually `text-xs` (12px) or `text-[11px]`
- **Stamp (decorative)**: `font-stamp` (Special Elite), used for "FALLBACK" / "STATUS" stamps

### Layout

- **Desktop sidebar**: `w-60` (240px), hidden below `lg` breakpoint
- **Content wrapper**: `max-w-5xl` (1024px), centered with auto margins
- **Main padding**: `px-4 py-6` (mobile), `sm:px-6 lg:px-8 lg:py-8`
- **Mobile header**: sticky, `h-14`, hamburger button with sliding sidebar overlay + iOS-safe scroll lock

---

## Pages / Screens

### 1. Dashboard (`/`)

**Purpose**: Landing page, overview of all sections.

**Elements**:
- `h1` heading "IELTS Student Resources"
- Amber fallback banner: "Not the main site. This is a static fallback archive..."
- Section list (6 items: Listening, Reading, Writing, Speaking, Grammar, Vocabulary) — each with name, subtitle, count, link
- Total archive count badge (FALLBACK stamp)
- Offline download card (`.zip` archive)

### 2. Hub Pages (`/reading`, `/writing`, `/speaking`, `/grammar`, `/vocabulary`, `/listening`)

**Common pattern**:
- `h1` with section title + subtitle (article count + source)
- Search bar (`#search-input`)
- Pagination buttons (`#pagination`)
- Filter buttons (varies by section):
  - **Reading**: question type filter (All, T/F/NG, Matching, MCQ, Completion, General)
  - **Writing**: Task 1 / Task 2 filter (pre-existing)
  - **Speaking**: part filter (Part 1, Part 2, Part 3, Vocabulary, General)
  - **Grammar/Vocabulary/Listening**: no filter
- Article/test list with `data-title` and `data-type` attributes
- Each item: title link, category badge, source link, "Read" button
- `#empty-result` shown when search/filter yields nothing

**JS behavior** (vanilla, inline `<script>`):
- `getFiltered()` — filters by search query + active type
- `render()` — shows/hides items, updates pagination
- Filter buttons toggle `activeType`, reset to page 1
- Search input has `input` listener, resets to page 1
- Pagination buttons navigate pages

**Listening hub special**:
- Has sub-navigation tabs: "Audio Tests" (`/listening`) and "Tips" (`/listening/tips`)
- Shows 55 practice tests with MP3/PDF download links
- Items have "Open" button → goes to test detail page

### 3. Article Detail Pages (`/reading/article/[slug]`, `/writing/article/[slug]`, etc.)

**Pattern** (6 routes: reading, writing, speaking, grammar, vocabulary, listening/tips):

- "Back to..." breadcrumb link
- `h1` with article title
- Category badge + source link
- Article content rendered via `markdown-it` inside `<article class="prose ...">`:
  - `font-size: 1.0625rem`, `line-height: 1.75`
  - `max-w-none` removed, `break-words` added
  - Borders: `rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8`

### 4. Listening Test Detail (`/listening/test-XX`)

- Back to tests link
- Test title + metadata ("~30 minutes · 4 sections · 40 questions")
- Audio player card: `<audio controls>` + MP3/PDF download buttons
- PDF embed card: `<embed>` for answer key
- Prev/Next navigation buttons
- JS: auto-pause other audio when one plays

### 5. About (`/about`)

- Purpose section (fallback archive bullet list)
- Archive contents table
- Technical section (framework, styling, fonts, status)
- Disclaimer
- Contact section with email + "READY TO USE" stamp

### 6. 404 (`/404`)

- "Berkas Tidak Ditemukan" heading
- "TIDAK DITEMUKAN" decorative stamp
- Back to Dashboard button

---

## Site Flow

```
Dashboard (/)
  ├── Listening (/listening)
  │   ├── Audio Tests (/listening/test-01 .. test-55)
  │   └── Tips (/listening/tips → /listening/tips/[slug])
  ├── Reading (/reading → /reading/article/[slug])
  ├── Writing (/writing → /writing/article/[slug])
  ├── Speaking (/speaking → /speaking/article/[slug])
  ├── Grammar (/grammar → /grammar/article/[slug])
  ├── Vocabulary (/vocabulary → /vocabulary/article/[slug])
  ├── About (/about)
  └── 404 (/404)
```

Semua hub pages bisa search + filter + pagination. Semua detail pages punya scroll progress bar.

---

## Key Design Decisions (for UI agent)

1. **No React/JS framework** — all interactivity is vanilla JS inline in `<script>` tags. If adding complex UI, must stay vanilla or use web components.
2. **Every page uses BaseLayout** — which provides sidebar, mobile drawer, progress bar, footer. Pages only supply `<slot />` content.
3. **Filter + search is client-side only** — all articles/tests are pre-rendered in the DOM, shown/hidden via JS. No async fetching.
4. **Audio not deployed** — audio files only work in local dev (symlink `public/audio → downloaded_resources/audio`). Production uses separate Cloudflare R2.
5. **Offline distribution** — post-build script creates `.zip` of entire `dist/` excluding audio.
6. **Contact**: `wedjaw22@gmail.com` for feedback/suggestions.
7. **Language**: UI in English, 404 page title in Indonesian ("Berkas Tidak Ditemukan").

---

## CSS/Component Patterns

### Card pattern
```html
<div class="rounded-xl border border-border bg-card shadow-sm">
  <div class="border-b border-border/50 px-5 py-3">...</div>
  <div class="divide-y divide-border/50">...</div>
</div>
```

### Filter button pattern (active/inactive)
```html
<!-- Active -->
<button style="background:#1C2B4A;color:#fff">
<!-- Inactive -->
<button style="color:#8B8060;border:1px solid #DCD2B8;background:#fff">
```

### Stamp decoration
```html
<div class="inline-flex flex-col items-center justify-center rounded-lg border-[3px] border-blue-800 px-4 py-2 font-stamp uppercase tracking-wider text-blue-800 shadow-[inset_0_0_0_1px_currentColor]"
     style="transform:rotate(-4deg)">
  <span class="text-[11px] leading-tight">STATUS</span>
  <span class="text-lg leading-tight">READY TO USE</span>
</div>
```

### Prose article container
```html
<article class="prose prose-headings:font-heading prose-headings:font-bold prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30 prose-a:underline-offset-2 hover:prose-a:decoration-foreground prose-pre:bg-secondary prose-pre:text-foreground prose-code:font-mono prose-code:text-sm prose-img:rounded-lg break-words rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
  <!-- rendered markdown -->
</article>
```

---

## Known Issues / UX Todo

- ~~Container width too narrow on desktop~~ (fixed: `max-w-5xl`)
- Audio not served on production (needs R2 setup)
- Only 30/55 tests have PDF answer keys
- Tests 43-55 don't have MP3 files yet
- Writing hub needs improved filter design
- Mobile sidebar focus management is basic
- No dark mode
- No loading states (all static)
