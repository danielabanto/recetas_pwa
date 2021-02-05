/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

 self.__precacheManifest = [].concat(self.__precacheManifest || [])
 workbox.precaching.suppressWarnings()
 workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

 workbox.routing.registerNavigationRoute('index.html')
//  No importa en que parte dela ruta esta, que funcione

workbox.googleAnalytics.initialize()
//Inicializando Google Analitics para offline

 workbox.routing.registerRoute(/^https?.*/,
  workbox.strategies.networkFirst(), 'GET')

// workbox.routing.registerRoute(/^https:\/\/www.themealdb.com\/api\/.*/,
//   workbox.strategies.stateWhileRevalidate(), 'GET')
// Esta estrategia es buena cuando no se require la mas actualizado al 
// instante, por ejemplo optimo para recetas, 
// pide al cache y al network a la vez

//  workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/), workbox.strategies.cacheFirst({
//   cacheName: 'google-fonts-cache',
//   plugins: [
//     new workbox.expiration.Plugin({
//       maxAgeSeconds: 24*60*60
//     })
//   ]
// }), 'GET')
// Cache primero, ideal para fotos o fuentes
// Vencimiento del cache, 1 dia segun configuracion

