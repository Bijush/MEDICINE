const CACHE = "pharma-cache-v9";

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
   "./css/harrison.css",
    "./css/module.css",

  // ================= SHARED JS =================
  "./js/shared/sidebar.js",
  "./js/shared/navbar.js",
  "./js/shared/filters.js",
  "./js/shared/globalLinkEngine.js",
   "./js/shared/classHelper.js",
   "./js/shared/comboExplainHelper.js",
  "./js/shared/diseaseHelper.js",
   "./js/shared/search-utils.js",
   "./js/shared/strenghtHelper.js",
   "./js/shared/utils.js",
   
  // ================= DASHBOARD =================
  "./js/dashboard/dashboard.js",

  // ================= CHECKUP =================

  "./js/checkup/checkUpUiRender.js",
  "./js/checkup/dropdownRender.js",
  "./js/checkup/symptomAdapter.js",
  "./js/checkup/checkup.js",

  // ================= THEORY =================

  "./js/theory/theoryLoader.js",
   "./js/theory/theory.js",
   "./js/theory/theoryRegistry.js",
   
     // ================= HARRISON =================
     "./js/HARRISON/loader.js",
     "./js/HARRISON/fieldConfig.js",
     
     // ================= firebase =================
     "./js/firebase/auth.js",
     "./js/firebase/firebase.js",

     // ================= medicine =================
     "./js/medicine/config.js",
      "./js/medicine/medicine.js",
      
      
  // ================= ENGINE =================
  "./engine/autoDiagnose.js",
   "./engine/engine.js",

  // ================= DATA =================
  "./data/globalSymptoms.js",
  "./data/checkup/checkUpData.js",
  
   // ================= DATA/Medicine =================
"./data/medicine/allergy.js",
"./data/medicine/antibiotic.js",
"./data/medicine/diarrhea.js",
"./data/medicine/dysentery.js",
"./data/medicine/fever.js",
"./data/medicine/gastric.js",
"./data/medicine/pain.js",
"./data/medicine/sexual.js",
"./data/medicine/stomachpain.js",
"./data/medicine/toothpain.js",
"./data/medicine/vitamin.js",
"./data/medicine/combinations/pain_combo.js",

   // ================= DATA/HARRISON =================
   "./js/HARRISON/data/pain.js",
   "./js/HARRISON/data/nausea.js",
   "./js/HARRISON/data/dyspnea.js",
   "./js/HARRISON/data/delirium.js",
   "./js/HARRISON/data/constipation.js",

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

    caches.open(CACHE).then(async cache => {

      for(const asset of ASSETS){

        try{

          await cache.add(asset);

          console.log("✅ Cached:", asset);

        }catch(err){

          console.error("❌ Failed:", asset);

          console.error(err);

        }

      }

    })

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

  // only GET requests
  if(event.request.method !== "GET"){
    return;
  }

  event.respondWith(

    caches.match(event.request)

      .then(cached => {

        if(cached){
          return cached;
        }

        return fetch(event.request)

          .then(response => {

            // invalid response skip
            if(
              !response ||
              response.status !== 200 ||
              response.type !== "basic"
            ){
              return response;
            }

            const clone = response.clone();

            caches.open(CACHE)
              .then(cache => {

                cache.put(event.request, clone);

              });

            return response;

          });

      })

  );

});