const CACHE_NAME = 'mark-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/books/',
  '/books/index.html',
  '/movies/',
  '/movies/index.html',
  '/news/',
  '/news/index.html',
  '/tools/',
  '/tools/index.html',
  '/social/',
  '/social/index.html',
  '/games/',
  '/games/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
