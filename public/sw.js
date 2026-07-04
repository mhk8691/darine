const CACHE_NAME = "app-cache-v2";

self.addEventListener("install", (event) => {
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

    // فقط GET ها Cache شوند
    if (request.method !== "GET") {
        event.respondWith(fetch(request));
        return;
    }

    const url = new URL(request.url);

    // هیچ API ای Cache نشود
    if (
        url.hostname === "api.darine.shop" ||
        url.pathname.startsWith("/accounts") ||
        url.pathname.startsWith("/gold") ||
        url.pathname.startsWith("/silver")
    ) {
        event.respondWith(fetch(request));
        return;
    }

    event.respondWith(
        caches.match(request).then(async (cached) => {

            if (cached) {
                return cached;
            }

            const response = await fetch(request);

            if (
                response.ok &&
                request.method === "GET"
            ) {
                const cache = await caches.open(CACHE_NAME);
                cache.put(request, response.clone());
            }

            return response;
        })
    );
});