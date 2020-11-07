self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./",
            "./src/",
            "./src/index.js",
            "./src/style.css",
            "./images/",
            "./images/logo192.png",
            "./images/logo512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
    )
    console.log(`fetch request is: ${e.request.url}`);
});