# Bureaucrapp — Guida alla Burocrazia Italiana

A progressive web app providing step-by-step guides for Italian bureaucratic procedures, with multi-language support.

**🌐 https://bureaucrapp.vercel.app** (production)

## Features

- **Step-by-step guides** for 44+ procedures across 8 categories (Identity, Residency, Taxes, Healthcare, Business, Vehicles, Rentals, Benefits)
- **Multi-language support** — Italian, English, Romanian, Albanian, Chinese, Arabic
- **Progress tracking** — check off steps and documents as you complete them
- **Bookmarks** — save your favorite procedures
- **Search** — find procedures instantly
- **Q&A section** — ask questions on each procedure
- **PWA ready** — installable on mobile and desktop, works offline (basic)
- **Dark theme** — modern glassmorphism design
- **Print-friendly** — clean print output for checklists
- **Latest news** — regulatory updates from official sources

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- Vanilla JavaScript (no framework)
- CSS custom properties + glassmorphism design
- Service Worker for offline caching
- LocalStorage for user data (bookmarks, progress, Q&A)

## Getting Started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Project Structure

```
src/
├── components/     # UI components (hero, cards, procedure detail, etc.)
├── data/           # Procedure content and translations
├── styles/         # CSS design system and component styles
├── main.js         # App entry, routing, state management
└── i18n.js         # Internationalization dictionary
public/
├── sw.js           # Service Worker
├── manifest.json   # PWA manifest
└── icon.svg        # App icon
```

## Adding Translations

Procedure data follows a convention: add `_en`, `_ro`, `_sq`, `_zh`, or `_ar` suffixed keys alongside Italian ones. See existing procedures for examples. The `tProp()` helper in `i18n.js` handles fallback logic.

## License

MIT
