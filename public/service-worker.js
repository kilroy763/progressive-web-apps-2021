const CORE_CACHE = 1
const CORE_CACHE_NAME = `core-v${CORE_CACHE}`
const CORE_ASSETS = ["manifest.json", "/offline", "css/style.css", "img/background.jpg", "img/brbalogo.png", "img/hiding2.png"]

// installeer service worker
self.addEventListener('install', (event) => {
    console.log("Service worker is geinstalleerd")
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
})

// activeer service worker
self.addEventListener("activate", (event) => {
    console.log("Server worker is Actief")
    event.waitUntil(clients.claim())
})

// fetch pagina
self.addEventListener("fetch", (event) => {
    const req = event.request
    console.log("Fetching:" + req.url)
    
    event.respondWith(
        caches.match(req)
        .then(cachedRes => {
            if (cachedRes) {
                return cachedRes
            }
            return fetch(req)
                .then((fetchRes) => fetchRes)
                .catch((err) => {
                    return caches.open(CORE_CACHE_NAME)
                        .then(cache => cache.match('/offline'))
                })
        })
    )



})