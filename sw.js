// When sw gets installed then this will run
// How to add things into a cache
const staticCache = 'SD140FinalProject-cache-1';// IMPORTANT: increment the num when you change something in the cache
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
          './img/10.jpg',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
          'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
          'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
          './restaurant.html?id=1',
          './restaurant.html?id=2',
          './restaurant.html?id=3',
          './restaurant.html?id=4',
          './restaurant.html?id=5',
          './restaurant.html?id=6',
          './restaurant.html?id=7',
          './restaurant.html?id=8',
          './restaurant.html?id=9',
          './restaurant.html?id=10',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
          './app-icons/favicon.ico',
          './app-icons/favicon-32x32.png',
          './app-icons/favicon-16x16.png',
          './app-icons/favicon-96x96.png',
          './app-icons/android-icon-144x144.png',
          './app-icons/android-icon-192x192.png'
        ]
      );
    })
    .catch((err) => console.warn('make cache ERROR:', err))
  );

});

// Might not be needed (cache pieces of the map not even all the pieces of the map for all pages)
// Just uncheck the disable cache box to have the map automatically cache it
// Links were taken from GET errors (in offline mode)
/*
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24640.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',

  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',

  'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24640.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24640.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
  'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24639.jpg70?access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw',
*/

// When the new sw gets activated this runs
// How to delete old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      console.log(cacheNames);
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('SD140FinalProject-') && cacheName !== staticCache;
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