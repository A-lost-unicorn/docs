/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "264700c3873b90d48685b7e7fec32653"
  },
  {
    "url": "about.html",
    "revision": "70a42fa154843b6a2c6ea3b57dbc5ca8"
  },
  {
    "url": "about1.html",
    "revision": "9cf98ca2d7b8ebb3ca6134ecae7de559"
  },
  {
    "url": "assets/css/0.styles.7dd766ca.css",
    "revision": "11be3a7ae87224e4296e538699574b89"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "87b63b3a63b66555bd2eb5bd7c2b9eb1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.de518f37.js",
    "revision": "95d6133537a087c6b2e465e88fe5caf9"
  },
  {
    "url": "assets/js/11.5d09e33a.js",
    "revision": "5c7c112bd40ea248decd87754fd497db"
  },
  {
    "url": "assets/js/12.a913f3c7.js",
    "revision": "8420a019a56babcd5999fd2cf9a2dd21"
  },
  {
    "url": "assets/js/13.27992a98.js",
    "revision": "beb8ef5fee17b39819363df9c2b0e664"
  },
  {
    "url": "assets/js/14.d2242bee.js",
    "revision": "2ffe4179d8bae26c34bd917de3c954f8"
  },
  {
    "url": "assets/js/2.12a54c9e.js",
    "revision": "73c11621e592b4d041a7c6dc213539cf"
  },
  {
    "url": "assets/js/3.e7a649c1.js",
    "revision": "bbf3f999c68f36ed7815056ae84ded25"
  },
  {
    "url": "assets/js/4.b72d2a6f.js",
    "revision": "d7767273162222655ead75b6ecf17b30"
  },
  {
    "url": "assets/js/5.1f65bdc0.js",
    "revision": "f2d36b114284fde61f9be5b379c28f55"
  },
  {
    "url": "assets/js/6.cc355a25.js",
    "revision": "91d0cf4c5778cf5f4d1e059df03280f4"
  },
  {
    "url": "assets/js/7.1a873f8c.js",
    "revision": "495dd47d2220cc9b3ff11728b3a70c30"
  },
  {
    "url": "assets/js/8.a649f2b2.js",
    "revision": "1eb1161d5cee09a2f799739c3354aa17"
  },
  {
    "url": "assets/js/9.3950be32.js",
    "revision": "fb9998bd733b570b6e76c18c51f7964a"
  },
  {
    "url": "assets/js/app.20980c0f.js",
    "revision": "5a29053da757f55f86cc6af392e59cc0"
  },
  {
    "url": "data_structure/1.html",
    "revision": "993989b595647cc2cd086d61dfb1a2e0"
  },
  {
    "url": "data_structure/index.html",
    "revision": "02e73da3ef84d98f5ae3d54f8121c661"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7004be2d6a0788d97c0de43fdbe2929a"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "54741cac4af837e30f0b19a3af83f664"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "20584297220f5f8769ecfe7517fd946d"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "3065db3ae6616a2cdb2dfcccd5428ecb"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "879598c61b0c4b05cd48d2c9e5d4c29e"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "15d1d9582c69f4dbabc3bb6acbbfc8bf"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "24326e228bd930bee480331472fa8e08"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "f5891f4a5dfbec12a825563b77fe3c86"
  },
  {
    "url": "imgs/directInsertionSort.gif",
    "revision": "91b76e8e4dab9b0cad9a017d7dd431e2"
  },
  {
    "url": "index.html",
    "revision": "89b2a93d79c4578d7faee2959153b8af"
  },
  {
    "url": "quan.html",
    "revision": "9b5e396c7fa650786fb0752af86d1137"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
