// bump the version cached *assets* change
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

self.addEventListener('install', event => {
  // cache selected requests
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      cache.addAll([
        BASE,
        BASE + 'index.html',
        BASE + 'main.bundle.js',
        BASE + 'manifest.json',
        BASE + 'page1.html',
        BASE + 'page2.html',
      ])
    })
  )
})

self.addEventListener('activate', event => {
  // clear unused caches
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => {
      if (![STATIC_CACHE, DYNAMIC_CACHE].includes(key)) {
        return caches.delete(key)
      }
    })))
  )

  return self.clients.claim()
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // return cached response if possible
      if (response != null) {
        return response
      }

      // cache newly fetched response
      return fetch(event.request).then(res =>
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request.url, res.clone())
            return res
          })
        )
    })
  )
})
