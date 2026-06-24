# IELTS Student Resources

Static archive of IELTS learning materials.

Built with **Astro** + Tailwind CSS.

## Contents

| Category | Files | Source |
|---|---|---|
| Listening Practice Tests | 55 MP3 + 30 PDF | IELTS Fever |
| Listening Tips | 22 articles | ieltsonlinetests.com |
| Reading Tips | 41 articles | ieltsonlinetests.com |
| Speaking Tips | 36 articles | ieltsonlinetests.com |
| Grammar Guides | 30 articles | ieltsonlinetests.com |
| Vocabulary Guides | 20 articles | ieltsonlinetests.com |

## Stack

- **Framework**: Astro 5 (static site)
- **Styling**: Tailwind CSS
- **Fonts**: Inter, JetBrains Mono, Special Elite
- **Audio**: HTML5 `<audio>` with auto-pause
- **Search + Filter**: Client-side JS

## Commands

```bash
npm run dev      # Start dev server (port 4321)
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Project Structure

```
downloaded_resources/
  audio/ielts-fever/      # MP3 + PDF (gitignored)
  ielts/
    listening-tips/       # 22 .md article files
    reading-tips/         # 41 .md article files
    writing-tips/         # 64 .md article files
    speaking-tips/        # 36 .md article files
    ielts-grammar/        # 30 .md article files
    ielts-vocabulary/     # 20 .md article files
src/
  pages/
    index.astro           # Dashboard
    about.astro           # About + disclaimer
    404.astro             # Custom 404
    listening/
      index.astro         # Listening hub (pagination + search)
      [slug].astro        # Test detail (player)
      tips.astro          # Tips article cards
    reading/
      index.astro         # Reading hub (filter + pagination + search)
      article/[slug].astro # Article detail page
    writing/
      index.astro         # Writing hub (Task 1/2 filter + pagination + search)
      article/[slug].astro # Article detail page
    speaking/
      index.astro         # Speaking hub (filter + pagination + search)
      article/[slug].astro # Article detail page
    grammar/
      index.astro         # Grammar hub (pagination + search)
      article/[slug].astro # Article detail page
    vocabulary/
      index.astro         # Vocabulary hub (pagination + search)
      article/[slug].astro # Article detail page
  layouts/
    BaseLayout.astro      # Main layout + sidebar + mobile
```

## Build

```bash
npm run build    # Output: dist/
```
