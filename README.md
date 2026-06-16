# shukhrat.dev

Personal portfolio — a fast, glassmorphism-styled single-page site built with **Nuxt 3**, **Vue 3** and **Tailwind CSS**.

## Features

- 🎨 Glassmorphism + gradient design with a deep-red (`#c8011a`) brand palette
- 🌙 Dark / light mode with a persisted toggle
- ✨ Scroll-reveal animations, animated stat counters and a testimonials carousel
- 📱 Fully responsive with an animated mobile menu and scroll-spy navigation
- ♿ Accessible markup (labels, ARIA, skip link, reduced-motion support)
- 🔍 SEO-ready (Open Graph + Twitter meta)
- 🧩 Icons via [`@nuxt/icon`](https://github.com/nuxt/icon) (Lucide + Simple Icons)

## Tech stack

| | |
|---|---|
| Framework | Nuxt 3 |
| Styling | Tailwind CSS |
| State | Pinia |
| Validation | Zod |
| Icons | @nuxt/icon (Iconify) |

## Setup

```bash
# install dependencies
npm install

# start the dev server on http://localhost:3000
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Deployment

Deployed on [Vercel](https://vercel.com) — Nuxt is auto-detected, no extra config needed. Every push to `main` triggers a new deployment.
