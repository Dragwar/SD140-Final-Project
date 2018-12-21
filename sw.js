// When sw gets installed then this will run
// How to add things into a cache
const staticCache = 'my-cache-1';// IMPORTANT: increment the num when you change something in the cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(staticCache).then((cache) => {
      return cache.addAll(// .addAll() takes an arr of items that we want to cache
        [
          './',
          './index.html',
          './restaurant.html',
          './css/styles.css',
          './js/dbhelper.js',
          './js/main.js',
          './js/restaurant_info.js',
          './data/restaurants.json',
          './manifest.json',
          './img/1.jpg',
          './img/2.jpg',
          './img/3.jpg',
          './img/4.jpg',
          './img/5.jpg',
          './img/6.jpg',
          './img/7.jpg',
          './img/8.jpg',
          './img/9.jpg',
          './img/10.jpg'
        ]
      );
    })
    .catch((err) => console.warn('make cache ERROR:', err))
  );

});


// When the new sw gets activated this runs
// How to delete old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      console.log(cacheNames);
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('my-') && cacheName !== staticCache;
        })
        .map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
    .catch((err) => console.warn('delete cache ERROR:', err))
  );

});

// When fetches are made then this will run
// How to get things from the cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((response) => {
      return response || fetch(e.request);
    })
    .catch((err) => console.warn('retrieve from cache ERROR:', err))
  );

});