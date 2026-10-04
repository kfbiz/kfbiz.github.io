const CACHE_NAME = "kf-biz-pwa-v2";

const APP_SHELL = [
  "/",
  "/index.html",
  "/contact.html",
  "/about.html",
  "/thanks.html",
  "/assets/styles.css",
  "/assets/contact.css",
  "/assets/images/kf-biz-logo.png",
  "/tools/vat-calculator.html",
  "/tools/startup-cost-calculator.html",
  "/tools/break-even-calculator.html",
  "/tools/profit-calculator.html",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/manifest.webmanifest"
];

// Save the main pages and files for future visits.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Remove old KF Biz caches when this version activates.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name.startsWith("kf-biz-pwa-") && name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Serve cached pages offline, while checking the network for newer versions.
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle same-origin GET requests. Forms and other external requests
  // are left to the browser and the network.
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // For page navigation, try the network first, then use the cached page.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          return cachedPage || caches.match("/index.html");
        })
    );
    return;
  }

  // For static files, prefer the cached version and use the network if absent.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
