const CACHE_NAME = "app-cache-v2";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(fetch(request));
    return;
  }

  const url = new URL(request.url);

  if (
    url.hostname === "api.darine.shop" ||
    url.pathname.startsWith("/accounts") ||
    url.pathname.startsWith("/gold") ||
    url.pathname.startsWith("/silver")
  ) {
    event.respondWith(fetch(request));
    return;
  }

  const cacheableDestinations = [
    "script",
    "style",
    "image",
    "font",
    "manifest",
  ];

  if (!cacheableDestinations.includes(request.destination)) {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    (async () => {
      const cached = await caches.match(request);

      if (cached) {
        return cached;
      }

      const response = await fetch(request);

      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    })()
  );
});