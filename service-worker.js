const CACHE_VERSION = "2026-03-19-aus-trip-v1";
const APP_CACHE = `aus-trip-app-${CACHE_VERSION}`;
const RUNTIME_CACHE = `aus-trip-runtime-${CACHE_VERSION}`;
const TILE_CACHE = `aus-trip-tiles-${CACHE_VERSION}`;

const APP_SHELL_URLS = [
  "./",
  "./index.html",
  "./australia-trip-map.html",
  "./app.css",
  "./app.js",
  "./manifest.webmanifest",
  "./offline.html",
  "./register-sw.js",
  "./favicon.svg",
  "./icon.svg",
  "./maskable-icon.svg",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
];

const CACHEABLE_HOSTS = new Set(["unpkg.com", "basemaps.cartocdn.com"]);

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isNavigationRequest(request) {
  return request.mode === "navigate" || request.destination === "document";
}

function isMapTileRequest(url, request) {
  return request.destination === "image" && url.hostname.endsWith("basemaps.cartocdn.com");
}

function isLeafletAsset(url) {
  return url.hostname === "unpkg.com" && url.pathname.startsWith("/leaflet@1.9.4/dist/");
}

async function cacheUrl(cacheName, url, mode = "cors") {
  try {
    const request = new Request(url, { mode, credentials: "omit" });
    const response = await fetch(request);
    if (response && (response.ok || response.type === "opaque")) {
      const cache = await caches.open(cacheName);
      await cache.put(url, response.clone());
    }
  } catch (_error) {
    // Best effort only. Missing tiles or CDN resources should not break the app.
  }
}

async function seedAppShell() {
  await Promise.all(
    APP_SHELL_URLS.map((url) => {
      if (isSameOrigin(new URL(url, self.location.href))) {
        return cacheUrl(APP_CACHE, url, "same-origin");
      }

      return cacheUrl(APP_CACHE, url, "no-cors");
    })
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      await seedAppShell();
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== APP_CACHE &&
            cacheName !== RUNTIME_CACHE &&
            cacheName !== TILE_CACHE
          ) {
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );
      await self.clients.claim();
    })()
  );
});

async function cacheFirst(request, cacheName, fetchMode = "same-origin") {
  const cached = await caches.match(request, { ignoreSearch: false });
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(
      fetchMode === "same-origin" ? request : new Request(request.url, { mode: fetchMode })
    );
    if (response && (response.ok || response.type === "opaque")) {
      const cache = await caches.open(cacheName);
      await cache.put(request, response.clone());
    }
    return response;
  } catch (_error) {
    return null;
  }
}

async function networkFirst(request, fallbackUrls = []) {
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === "opaque")) {
      const cache = await caches.open(RUNTIME_CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  } catch (_error) {
    for (const fallbackUrl of fallbackUrls) {
      const cached = await caches.match(fallbackUrl);
      if (cached) {
        return cached;
      }
    }
    return null;
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET") {
    return;
  }

  if (isNavigationRequest(request)) {
    event.respondWith(
      (async () => {
        const response = await networkFirst(request, ["./index.html", "./offline.html"]);
        if (response) {
          return response;
        }

        const offline = await caches.match("./offline.html");
        if (offline) {
          return offline;
        }

        const cachedIndex = await caches.match("./index.html");
        if (cachedIndex) {
          return cachedIndex;
        }

        return new Response("Offline", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      })()
    );
    return;
  }

  if (isSameOrigin(url)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) {
          return cached;
        }

        try {
          const response = await fetch(request);
          if (response && response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            await cache.put(request, response.clone());
          }
          return response;
        } catch (_error) {
          if (isNavigationRequest(request)) {
            return (
              (await caches.match("./offline.html")) ||
              (await caches.match("./index.html")) ||
              new Response("Offline", {
                status: 503,
                headers: { "Content-Type": "text/plain; charset=utf-8" }
              })
            );
          }

          return new Response("", {
            status: 503,
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          });
        }
      })()
    );
    return;
  }

  if (CACHEABLE_HOSTS.has(url.hostname)) {
    event.respondWith(
      (async () => {
        const cacheName = isMapTileRequest(url, request) ? TILE_CACHE : APP_CACHE;
        const cached = await caches.match(request);
        if (cached) {
          event.waitUntil(
            cacheUrl(cacheName, request.url, request.destination === "image" ? "no-cors" : "cors")
          );
          return cached;
        }

        try {
          const response = await fetch(request);
          if (response && (response.ok || response.type === "opaque")) {
            const cache = await caches.open(cacheName);
            await cache.put(request, response.clone());
          }
          return response;
        } catch (_error) {
          return cached || null;
        }
      })()
    );
  }
});
