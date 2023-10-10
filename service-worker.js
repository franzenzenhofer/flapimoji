// Service Worker Installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('flapimoji-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        'https://flapimoji.franzai.com/show.jpeg',
      ]);
    })
  );
});

// Service Worker Fetch Event
self.addEventListener('fetch', (event) => {
  if (navigator.onLine) { // Check if online
    event.respondWith(fetch(event.request)); // Fetch latest version
    return;
  }
  
  // If offline, use cache
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

//serviceworker 10 10 2023 
//v 1