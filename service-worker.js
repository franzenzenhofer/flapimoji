self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('flapimoji-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        'https://flapimoji.franzai.com/show.jpeg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
