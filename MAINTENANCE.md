# Bureaucrapp — Maintenance & Agent Tasks

**Version**: 1.0.0 · **Stack**: Vite + Vanilla JS + PWA · **Host**: Vercel

---

## Architecture Overview

```
bureaucrapp/
├── .github/workflows/ci.yml    # CI: npm ci → npm run build on push/PR
├── public/                      # Static assets (SW, manifest, icons, OG, RSS, sitemap)
│   ├── sw.js                    # Service Worker (stale-while-revalidate + cache-first for hashed assets)
│   ├── manifest.json            # PWA manifest (11 icon sizes, standalone display)
│   └── icon-*.png               # 48–1024px + maskable variants + OG image
├── src/
│   ├── components/              # 17 self-contained UI modules
│   │   ├── hero.js              # Hero search + pills + wizard CTA
│   │   ├── categoryGrid.js      # Category grid + category detail pages
│   │   ├── procedureDetail.js   # Full procedure view (steps, docs, sidebar, related)
│   │   ├── wizard.js            # 3-step onboarding wizard
│   │   ├── footer.js            # Footer with telemetry, contrast, simplified toggles
│   │   ├── favorites.js         # localStorage bookmarks display
│   │   ├── newsBar.js           # Regulatory updates section
│   │   ├── dashboard.js         # Stats dashboard
│   │   ├── documentVault.js     # File upload vault (base64 localStorage)
│   │   ├── costCalculator.js    # Interactive cost breakdown
│   │   ├── videoTutorial.js     # YouTube/Vimeo embed
│   │   ├── waitTimes.js         # Crowdsourced wait times
│   │   ├── regionalSettings.js  # Regione/Comune selector
│   │   ├── gdprBanner.js        # GDPR consent banner
│   │   └── privacyPage.js       # Privacy policy page
│   ├── data/                    # Content & translations
│   │   ├── procedures.js        # Lazy-load orchestrator + search index
│   │   ├── proc-*.js            # 8 category-specific procedure files (47 procedures total)
│   │   ├── categories.js        # Category metadata
│   │   ├── news.js              # News/regulatory updates
│   │   └── procedure-translations.js  # Auto-generated RO/SQ/ZH/AR dictionary (1340 strings)
│   ├── styles/                  # CSS (design system in index.css, component styles in 5 files)
│   ├── i18n.js                  # 6-language dictionary (IT/EN/RO/SQ/ZH/AR), t(), tProp(), getLanguage()
│   ├── analytics.js             # GA4 + Vercel Analytics integration (consent-gated)
│   └── main.js                  # SPA router (hash-based), header, news ticker, state management
├── scripts/
│   ├── verify-links.js          # Link checker (HEAD requests, reports 404s/timeouts)
│   └── translate-procedures.js  # Word-map translation generator for RO/SQ/ZH/AR
├── index.html                   # Entry point (SEO meta, OG, hreflang, JSON-LD, CSP)
├── vercel.json                  # CSP headers, SPA rewrites
├── vite.config.js               # Vite config (base: './', minify: esbuild)
└── package.json                 # Scripts: dev, build, preview, verify-links
```

---

## Recurring Agent Tasks

### Daily (Automated / CI)

| Time | Task | Tool / Action |
|------|------|---------------|
| 06:00 UTC | **Link verification** | `npm run verify-links` — scan all 120+ `url:` fields in proc-*.js, report broken links |
| 06:30 UTC | **Build check** | CI runs `npm ci → npm run build` on latest `main` (`.github/workflows/ci.yml`) |
| On push | **Deploy** | Vercel auto-deploys from `main` branch (connected via GitHub) |

### Weekly

| Day | Task | Details |
|-----|------|---------|
| Monday | **Review link report** | Check verify-links output; fix/replace broken official links in proc-*.js files |
| Monday | **Update news content** | Add/remove news items in `src/data/news.js` (check gazzettaufficiale.it, agenziaentrate.gov.it) |
| Monday | **Update RSS feed** | Match `public/rss.xml` items to `news.js`; bump `<lastBuildDate>` |
| Wednesday | **Review sitemap** | Ensure `public/sitemap.xml` includes all 47 procedures + 8 categories |
| Friday | **Check PWA installability** | Lighthouse PWA audit — verify manifest, SW, offline functionality |
| Friday | **Update ticker items** | Refresh `newsTickerItems` array in `src/main.js` with current deadlines/events |

### Monthly

| Task | Details |
|------|---------|
| **Content audit** | Review all 47 procedures for accuracy (verify lastVerified dates, update if needed) |
| **Translation review** | Spot-check procedure-translations.js (30+ entries picked at random) for RO/SQ/ZH/AR accuracy |
| **Dependency updates** | `npm outdated` → update Vite, sharp; test build after each update |
| **SEO audit** | Check Google Search Console for crawl errors, index coverage; update sitemap if new pages added |
| **Analytics review** | Check GA4/Vercel Analytics for top searches, popular procedures, drop-off pages |
| **Backup localStorage schema** | Verify all `bureaucrapp_*` keys in use are documented; no stale keys from old versions |
| **Redirect check** | Ensure `vercel.json` rewrites still cover all app routes |
| **CSP review** | Verify Content-Security-Policy headers block unwanted resources but allow current integrations |

### Quarterly

| Task | Details |
|------|---------|
| **Full procedure refresh** | Check every official link across all 47 procedures; update content for new laws (e.g., tax brackets, bonus changes, expiration dates) |
| **Major dependency upgrade** | Test Vite major version upgrades; check for breaking changes in build output |
| **Accessibility audit** | Run axe DevTools or WAVE on all 3 view types (home, category, procedure); fix issues |
| **Performance budget** | Check bundle size (target: JS < 200 KB gzip, CSS < 50 KB gzip); optimize if needed |
| **Translation refresh** | Re-run `scripts/translate-procedures.js` if new procedures or fields added; manually review output |
| **SW cache strategy review** | Ensure `public/sw.js` version (`CACHE` constant) is bumped if asset patterns changed |
| **PWA icon audit** | Verify all icons render correctly on Chrome, Safari, Firefox, Edge |

### As Needed

| Task | Trigger | Details |
|------|---------|---------|
| **New procedure** | User request / law change | Add file in `src/data/proc-*.js`, register in `procedureIndex` and `moduleLoaders`, add sitemap entry, add translations via script, add to `procedure-translations.js` |
| **New language** | Community contribution | Add language to `i18n.js` dictionary, update manifest.json `lang`, add hreflang to index.html, update OG locale alternates, add to `SUPPORTED_LANGS`, create translation mapping in procedure-translations.js |
| **CSP bypass report** | User report / console error | Add required domains to CSP in both `index.html` `<meta>` tag and `vercel.json` header |
| **Broken link report** | User report / weekly check | Update `url:` in relevant proc-*.js file → rebuild → deploy |
| **Emergency: site down** | Monitoring alert | Check Vercel dashboard → verify SSL cert → check CSP → check SW registration errors |
| **GDPR / privacy update** | Regulatory change | Update `privacyPage.js` content + GDPR banner text in i18n.js |

---

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_GA_ID` | No | Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX) |
| `VITE_VERCEL_ANALYTICS_ID` | No | Vercel Analytics ID (auto-detected on vercel.app subdomain) |

All vars are optional — the app works fully without a `.env` file.

---

## Command Reference

```bash
npm run dev          # Dev server at localhost:5173
npm run build        # Production build → dist/
npm run preview      # Preview production build
npm run verify-links # Check all officialLinks URLs (HEAD requests, 10s timeout)
```

---

## Release Checklist

Before tagging `v1.x.x`:
- [ ] `npm run build` passes with no errors
- [ ] `npm run verify-links` reports 0 broken links (or known/accepted)
- [ ] Lighthouse: Performance ≥90, Accessibility ≥90, SEO ≥90, PWA ✓
- [ ] Tested on Chrome + Firefox + Safari + Edge (latest)
- [ ] Tested on mobile (iOS Safari + Android Chrome)
- [ ] Offline mode: open app → airplane mode → navigate pages → works
- [ ] All 47 procedures render without JS errors
- [ ] All 6 languages switch correctly (IT/EN/RO/SQ/ZH/AR)
- [ ] Search works in all 6 languages
- [ ] PWA install prompt fires on Chrome Android
- [ ] OG tags render correctly on social share debuggers
- [ ] Sitemap submitted to Google Search Console
- [ ] RSS feed valid (validator.w3.org/feed)

---

## Key Contact / Escalation

| Issue | Contact |
|-------|---------|
| Deploy failure / Vercel | Vercel dashboard → Deployments → inspect failed build log |
| Domain / DNS | Domain registrar (Namecheap, Aruba, etc.) |
| Security issue | GitHub Issues (private vulnerability report) |
| Content error | Edit proc-*.js file directly → PR → merge → auto-deploy |
