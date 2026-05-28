const CACHE = 'bureaucrapp-v3';
const STATIC_CACHE = 'bureaucrapp-static-v3';

// App shell — only truly static files that exist at known URLs.
// Built JS/CSS bundles (with hashes in filenames) are handled dynamically below.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './favicon.ico'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (e) => {
  // Clean up old cache versions
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE && k !== STATIC_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);

  // Same-origin only — don't intercept cross-origin requests (fonts, analytics, etc.)
  if (url.origin !== location.origin) return;

  // Navigation requests (index.html / app shell) — stale-while-revalidate
  // Serve cached immediately, but fetch fresh copy in the background for next load
  if (request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html') {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(request).then(cached => {
          const fetchPromise = fetch(request).then(res => {
            if (res.ok) cache.put(request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // Hashed static assets (JS, CSS) — cache-first with background update
  // Vite generates filenames like index-DnK3mF2x.js — the hash ensures uniqueness,
  // so cached versions are safe to serve immediately.
  if (/\.(js|css|svg|ico|png|woff2?|webp|avif|jpg|jpeg|gif)$/.test(url.pathname)) {
    e.respondWith(
      caches.open(STATIC_CACHE).then(cache =>
        cache.match(request).then(cached => {
          const fetchPromise = fetch(request).then(res => {
            if (res.ok) cache.put(request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // Everything else — network-first with cache fallback
  e.respondWith(
    fetch(request)
      .then(res => {
        // Cache successful responses for offline fallback
        if (res.ok) {
          const resClone = res.clone();
          caches.open(CACHE).then(cache => cache.put(request, resClone));
        }
        return res;
      })
      .catch(() =>
        caches.match(request).then(cached => cached || caches.match('./index.html'))
      )
  );
});
