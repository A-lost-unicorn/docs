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
    "revision": "bc270821f6ebfd3c6ab182bf899d346d"
  },
  {
    "url": "about.html",
    "revision": "9bfa67e8b48da0bc8970201d3b8bf4ee"
  },
  {
    "url": "about1.html",
    "revision": "c064636eb4403c242f4bb87a80f86d14"
  },
  {
    "url": "assets/css/0.styles.cae07892.css",
    "revision": "15043302d423c3eae5cd893794847d4a"
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
    "url": "assets/js/1.c10d0628.js",
    "revision": "04c725894e359289dd76f5f229ffddd1"
  },
  {
    "url": "assets/js/11.8552af59.js",
    "revision": "b5b24e41181776d0ba361316799fdd48"
  },
  {
    "url": "assets/js/12.3cd620ea.js",
    "revision": "1f14cc48a8444cbb3aedcc7f72ebebc8"
  },
  {
    "url": "assets/js/13.d44a57a4.js",
    "revision": "1046e85ac20c7a141d56147792988f75"
  },
  {
    "url": "assets/js/14.a1ace47f.js",
    "revision": "acf67290d75fe2ed184423c3e415509a"
  },
  {
    "url": "assets/js/15.8059fa9c.js",
    "revision": "2d5ae7f2b8a720853ce949b25fd58270"
  },
  {
    "url": "assets/js/16.b8ae1f98.js",
    "revision": "a9f43b02126bfc1af9f1477d69563d88"
  },
  {
    "url": "assets/js/17.ffd4b03e.js",
    "revision": "e12f61291c042a16c790f59131b27944"
  },
  {
    "url": "assets/js/18.0f64170d.js",
    "revision": "b5395b0ee7181e7b7fb3da0adaef2cb1"
  },
  {
    "url": "assets/js/19.4df57941.js",
    "revision": "22e7a3c10f26f52999852d94afc3eacc"
  },
  {
    "url": "assets/js/2.a76de42b.js",
    "revision": "f9bee881407b83a4af5426a04bd1dc97"
  },
  {
    "url": "assets/js/20.93067e10.js",
    "revision": "a97388dd779c73e0183e3686f7439561"
  },
  {
    "url": "assets/js/21.45d22dd9.js",
    "revision": "4b442dd3d297b9ec7fc6f74d50661e6b"
  },
  {
    "url": "assets/js/22.04ead04f.js",
    "revision": "f6ec767dcfa92cad0d73ffea55a9f03a"
  },
  {
    "url": "assets/js/23.d6ace69b.js",
    "revision": "7c05c7199090866734d205c26d0f1dd8"
  },
  {
    "url": "assets/js/24.30db2b3c.js",
    "revision": "a688d8138c922e3f02ff7d19c35ed260"
  },
  {
    "url": "assets/js/25.0769b4da.js",
    "revision": "e94d017e3b38442ee75a994ce4b000e2"
  },
  {
    "url": "assets/js/26.5d9a714a.js",
    "revision": "5d9f1e4d3497df8114c4d1d0b0865104"
  },
  {
    "url": "assets/js/27.f6b336b6.js",
    "revision": "d3a490004f5bd5e617667389892ee6b1"
  },
  {
    "url": "assets/js/28.3a1402db.js",
    "revision": "58214dcae1d14eab1fbbe29cdb8deb77"
  },
  {
    "url": "assets/js/29.5e5fa6cf.js",
    "revision": "0be4610c42fb626112ad79c536c39a1e"
  },
  {
    "url": "assets/js/3.ed3ad42c.js",
    "revision": "1b10322763a15d6df0ed18e6cc90b9de"
  },
  {
    "url": "assets/js/30.3b556f90.js",
    "revision": "45359b1571915b78ae85891efb0347e6"
  },
  {
    "url": "assets/js/31.f07688d0.js",
    "revision": "ce16f3499abc66b9b79387f1d0b648df"
  },
  {
    "url": "assets/js/32.238107e5.js",
    "revision": "6026799ff0ff01d8e2a8bdce7ee96c47"
  },
  {
    "url": "assets/js/33.f8ad9173.js",
    "revision": "6d96c794868a8a00b3718a4bd244511a"
  },
  {
    "url": "assets/js/34.0be72901.js",
    "revision": "e0169cc554e6f5d6b648c9345e7eb53b"
  },
  {
    "url": "assets/js/35.2ebf1b68.js",
    "revision": "fea25d032e1d85ed79a5922e2431178a"
  },
  {
    "url": "assets/js/36.7fdb6091.js",
    "revision": "8e9137827043010e49a9071a6cf12eed"
  },
  {
    "url": "assets/js/37.7c5f5c03.js",
    "revision": "69663b216d95e8cae2e3b90edd63b737"
  },
  {
    "url": "assets/js/38.9e18a3c8.js",
    "revision": "9fddb0ae3b68a3a90bc7eb0f1a6effdc"
  },
  {
    "url": "assets/js/39.cffe6e64.js",
    "revision": "eb4311ec34d16b23ef4fa51b348d44bc"
  },
  {
    "url": "assets/js/4.462add4e.js",
    "revision": "d357da6781980f25ceb235acf1c39fe0"
  },
  {
    "url": "assets/js/5.b09e5601.js",
    "revision": "6c8900312c54d2c2b708540b78691902"
  },
  {
    "url": "assets/js/6.8248afdd.js",
    "revision": "2af0dd8d5db3c4c775229d890cec99c3"
  },
  {
    "url": "assets/js/7.137899a7.js",
    "revision": "32cb44a3fb38614eb7c4bfc2956fc76e"
  },
  {
    "url": "assets/js/8.e4d202f8.js",
    "revision": "1d71fe409b735941c550e89880d6ada1"
  },
  {
    "url": "assets/js/app.2c4c621d.js",
    "revision": "d4adcc107bac8da0834ee0351ba388fa"
  },
  {
    "url": "assets/js/vendors~docsearch.fc35a942.js",
    "revision": "eb144e865f56a72a506a840e2dcac144"
  },
  {
    "url": "data_structure/Array/binarySearch.html",
    "revision": "8264d0325e68f3734ed3bcde784b3782"
  },
  {
    "url": "data_structure/Array/index.html",
    "revision": "0f40645ebbcddb4bdc4d7f27a44b9d4b"
  },
  {
    "url": "data_structure/Array/removeElements.html",
    "revision": "e894e96bdb2aa0b128b7f5e78ba8373f"
  },
  {
    "url": "data_structure/Array/spiralMatrix2.html",
    "revision": "ab3de533f4333133e29903f595a75a34"
  },
  {
    "url": "data_structure/Array/squareOfOrderedArray.html",
    "revision": "c62d4d097a43b259cc1765fb51125a86"
  },
  {
    "url": "data_structure/Array/theSmallestSubarray.html",
    "revision": "15daea649ef383b07ec4c7aa306704ea"
  },
  {
    "url": "data_structure/index.html",
    "revision": "3d105a89ed9d904bf276eb7e9c06358c"
  },
  {
    "url": "data_structure/linkedList/designList.html",
    "revision": "f682c736a29de1847909bc40427f94f9"
  },
  {
    "url": "data_structure/linkedList/removeListElement.html",
    "revision": "6a5e31e33824fd79654a61794f9bffdc"
  },
  {
    "url": "ddj.html",
    "revision": "5f00340bdd36951e619a731d3626a369"
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
    "revision": "641ed05627b25753f0b64f23ce7476ce"
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
