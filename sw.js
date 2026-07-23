// Minimaler Service Worker: macht die App installierbar, cached aber nicht (immer frische Version).
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ /* default network handling */ });
