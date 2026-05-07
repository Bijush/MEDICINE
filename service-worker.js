const CACHE = "pharma-cache-v2";

const ASSETS = [

  // ================= ROOT =================
  "./",
  "./index.html",

  // ================= PAGES =================
  "./theory.html",
  "./medicine.html",
  "./checkUp.html",
  "./harrison.html",

  // ================= CSS =================
  "./css/style.css",
  "./css/dashboard.css",
  "./css/sidebar.css",
  "./css/navbar.css",
  "./css/checkup.css",

  // ================= SHARED JS =================
  "./js/shared/sidebar.js",
  "./js/shared/navbar.js",
  "./js/shared/filters.js",
  "./js/shared/globalLinkEngine.js",

  // ================= DASHBOARD =================
  "./js/dashboard/dashboard.js",

  // ================= CHECKUP =================
  "./js/checkup/checkupMain.js",
  "./js/checkup/checkUpUiRender.js",
  "./js/checkup/dropdownRender.js",
  "./js/checkup/symptomAdapter.js",

  // ================= THEORY =================
  "./js/theory/theoryMain.js",
  "./js/theory/theoryLoader.js",

  // ================= ENGINE =================
  "./js/engine/autoDiagnose.js",

  // ================= DATA =================
  "./data/globalSymptoms.js",
  "./data/checkup/checkUpData.js",

  // ================= THEORY DATA =================
  "./data/theory/antibioticsData.js",
  "./data/theory/diseaseData.js",

  // ================= REGISTER / LOADER =================
  "./RegisterAndLoader/loader.js",
  "./RegisterAndLoader/registry.js",

  // ================= PWA =================
  "./manifest.json",
  "./service-worker.js",

  // ================= ICONS =================
  "./icons/icon-192.png",
  "./icons/icon-512.png"

];


// 🔥 INSTALL
self.addEventListener("install", event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
  );
});


// 🔥 ACTIVATE
self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))

      );

    })

  );

  self.clients.claim();
});


// 🔥 FETCH
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        return response || fetch(event.request);

      })

  );

});