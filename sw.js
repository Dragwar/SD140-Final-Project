const __My_Map_Box_Key = 'access_token=pk.eyJ1IjoiZXZlcmV0dGciLCJhIjoiY2pwd3lzdDU2MGs1MDQ4bHNldThrcnZ3YiJ9.aUrRJi0nahDPriMou3M6iw';


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

          // Credit to Jerry for this tedious work 
          // (caches all relevant maps for all restaurant pages)
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1539.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1540.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1539.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1540.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24639.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24639.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24646.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24647.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24646.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24647.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24630.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24631.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24632.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24633.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24630.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24631.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24632.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24633.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24642.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24643.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24642.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24643.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19293/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19293/24649.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19293/24650.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19294/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19294/24649.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19294/24650.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24635.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24636.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24635.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24636.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24635.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24636.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24635.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24636.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24631.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24632.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24633.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19306/24631.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19306/24632.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19306/24633.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24631.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24632.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24633.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24634.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24634.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24639.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24639.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24646.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24647.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24646.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24647.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24630.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24633.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24636.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24636.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24649.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24643.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24642.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24643.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19292/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19292/24650.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24648.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24649.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24650.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24635.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24635.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24637.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24638.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24632.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24631.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24630.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24640.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24641.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24642.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19292/24649.jpg70?${__My_Map_Box_Key}`,
          `https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24636.jpg70?${__My_Map_Box_Key}`,

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
