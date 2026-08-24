/* Tanmay-Somani.github.io â€” minimal offline support.
 * HTML is network-first (content changes often); static assets are
 * cache-first with a background fill. Analytics/third-party traffic
 * passes through untouched. */
const VERSION = 'v3';
const CACHE = 'portfolio-' + VERSION;

const PRECACHE = [
    '/assets/fonts/inter-400.woff2',
    '/assets/fonts/space-grotesk-700.woff2',
    '/assets/fonts/fonts.css',
    '/assets/vendor/fontawesome/css/all.min.css',
    '/assets/vendor/fontawesome/webfonts/fa-solid-900.subset.woff2',
    '/assets/vendor/fontawesome/webfonts/fa-brands-400.subset.woff2',
    '/assets/images/avatar.webp',
    '/assets/images/favicon.ico',
    '/assets/images/apple-touch-icon.png',
    '/manifest.webmanifest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(PRECACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET') return;
    if (new URL(req.url).origin !== location.origin) return;

    // Navigations: network first, fall back to the last cached copy.
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req)
                .then(res => {
                    const copy = res.clone();
                    caches.open(CACHE).then(c => c.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req).then(hit => hit || caches.match('/index.html')))
        );
        return;
    }

    // Static assets: cache first, fill on miss.
    event.respondWith(
        caches.match(req).then(hit => {
            if (hit) return hit;
            return fetch(req).then(res => {
                if (res.ok) {
                    const copy = res.clone();
                    caches.open(CACHE).then(c => c.put(req, copy));
                }
                return res;
            });
        })
    );
});
