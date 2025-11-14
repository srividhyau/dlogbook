self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  // basic offline fallback can be added here
});
