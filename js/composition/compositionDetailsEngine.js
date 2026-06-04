// ==============================
// INIT DETAILS ENGINE
// ULTRA FIXED VERSION
// ==============================

import {
  getMedicinesByComposition
} from "./compositionLoader.js";

import {
  generateCompositionInsights,
  generateLearningContent
} from "./compositionEngine.js";

import {
  renderInsightsUI
} from "./compositionUIEngine.js";

import {
  initCompositionTabs
} from "./compositionTabs.js";

import {
  openMedicineDetails
}
from "./medicineDetailsEngine.js";

import {
  savePosition,
  restorePosition
}
from "./navigationEngine.js";

// ==============================
// CACHE
// ==============================

const detailsCache =
  new Map();

let currentMedicines = [];
window.mainCompositionListHTML = "";
window.lastCompositionHTML = "";
window.lastCompositionName = "";
window.lastCompositionContainer = null;

// ==============================
// FORMAT NAME
// ==============================

function formatName(
  value = ""
) {

  return String(value)

    .replaceAll("_", " ")

    .replaceAll("-", " ")

    .replace(/\s+/g, " ")

    .trim()

    .split(" ")

    .map(word =>

      word.charAt(0)
      .toUpperCase()

      +

      word.slice(1)

    )

    .join(" ");

}


// ==============================
// SAFE SCROLL TOP
// ==============================

function scrollTopSmooth() {

  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      window.scrollTo({

        top: 0,

        left: 0,

        behavior: "instant"

      });

    });

  });

}


// ==============================
// LOADING UI
// ==============================

function renderLoading(
  container
) {

  container.innerHTML = `

    <div class="composition-loading">

      Loading details...

    </div>

  `;

}


// ==============================
// BACK BUTTON
// ==============================

export function initBackButton() {

  document

    .querySelector(
      "#compositionBackBtn"
    )

    ?.addEventListener(

      "click",

      () => {

        if(
  window.mainCompositionListHTML
){

  window.lastCompositionContainer
    .innerHTML =
      window.mainCompositionListHTML;
      restorePosition();

}

      }

    );

}


// ==============================
// HISTORY
// ==============================

function pushHistoryState(
  compositionName = ""
) {

  history.pushState(

    {
      composition:
        compositionName
    },

    "",

    `#${compositionName}`

  );

}


// ==============================
// POPSTATE
// ==============================

window.addEventListener(

  "popstate",

  () => {

    location.reload();

  }

);


// ==============================
// CLOSE OVERLAYS
// ==============================

function closeOverlays() {

  // ==========================
  // REMOVE BODY CLASSES
  // ==========================

  document.body.classList.remove(

    "blur",
    "modal-open",
    "dropdown-open",
    "overlay-open"

  );

  document.documentElement.classList.remove(

    "blur",
    "modal-open",
    "dropdown-open",
    "overlay-open"

  );


  // ==========================
  // HIDE DROPDOWNS
  // ==========================

  [

    "medicalFilterDropdown",
    "filterDropdown"

  ]

  .forEach(id => {

    document

      .getElementById(id)

      ?.classList

      .add("hidden");

  });


  // ==========================
  // RESTORE SCROLL
  // ==========================

  document.body.style.overflow =
    "";

  document.documentElement.style.overflow =
    "";


  // ==========================
  // FORCE REMOVE BLUR
  // ==========================

  document.body.style.filter =
    "none";

  document.body.style.backdropFilter =
    "none";

  document.documentElement.style.filter =
    "none";

  document.documentElement.style.backdropFilter =
    "none";


  // ==========================
  // RESET SCROLL
  // ==========================

  document.documentElement.scrollTop =
    0;

  document.body.scrollTop =
    0;


  // ==========================
  // CLOSE DIALOGS
  // ==========================

  document

    .querySelectorAll(
      "dialog"
    )

    .forEach(dialog => {

      try {

        dialog.close();

      }

      catch (e) {}

    });


  // ==========================
  // REMOVE OVERLAYS
  // ==========================

  document

    .querySelectorAll(`

      .overlay,
      .modal-backdrop,
      .drawer-backdrop,
      .bottom-sheet-backdrop,
      .search-overlay,
      .blur-overlay,
      .sheet-backdrop,
      .dialog-backdrop,
      .popup-backdrop

    `)

    .forEach(el => {

      el.remove();

    });


  // ==========================
  // REMOVE INLINE BLUR
  // ==========================

  document

    .querySelectorAll("*")

    .forEach(el => {

      try {

        const style =

          window.getComputedStyle(el);


        if (

          style.backdropFilter !== "none" ||

          style.filter.includes("blur")

        ) {

          el.style.backdropFilter =
            "none";

          el.style.filter =
            "none";

        }

      }

      catch (e) {}

    });

}


// ==============================
// INIT DETAILS ENGINE
// ==============================

export function initCompositionDetails(
  container
) {

  document.addEventListener(

    "click",

    event => {

      // ======================
      // IGNORE FILTER AREA
      // ======================

      if (

        event.target.closest(
          ".medical-filter-box"
        )

      ) {

        return;

      }

const medicineCard =

  event.target.closest(
    ".composition-medicine-card"
  );

if(medicineCard){

  const index =

    Number(
      medicineCard.dataset.index
    );

  const medicine =

    currentMedicines[index];

  if(medicine){

    openMedicineDetails(
      medicine,
      container
    );

  }

  return;
}
      // ======================
      // CARD
      // ======================

      const card =

        event.target.closest(
          ".composition-card"
        );


      if (!card) {
        return;
      }


      // ======================
      // NAME
      // ======================

      const compositionName =

        card.dataset.name;
        savePosition();

      if (!compositionName) {
        return;
      }


      // ======================
      // CLEAN UI
      // ======================

      closeOverlays();


      // ======================
      // OPEN DETAILS
      // ======================

      openCompositionDetails(

        compositionName,

        container

      );

    }

  );

}


// ==============================
// OPEN DETAILS
// ==============================

async function openCompositionDetails(

  compositionName,

  container

) {

  // ==========================
  // CLEAN UI
  // ==========================

  closeOverlays();


  // ==========================
  // FORCE REMOVE BLUR
  // ==========================

  container.style.filter =
    "none";

  container.style.backdropFilter =
    "none";


  // ==========================
  // SAFE TOP RESET
  // ==========================

  scrollTopSmooth();


  // ==========================
  // CACHE HIT
  // ==========================

  if (

    detailsCache.has(
      compositionName
    )

  ) {

    container.innerHTML =

      detailsCache.get(
        compositionName
      );

window.lastCompositionContainer =
  container;
    initCompositionTabs();

    initBackButton();

    return;

  }


  // ==========================
  // LOADING
  // ==========================
window.mainCompositionListHTML =
  container.innerHTML;
  
  renderLoading(
    container
  );


  requestAnimationFrame(() => {

    // ========================
    // GET MEDICINES
    // ========================

    const medicines =

      getMedicinesByComposition(
        compositionName
      );
      
currentMedicines =
  medicines;

    // ========================
    // INSIGHTS
    // ========================

    const insights =

      generateCompositionInsights({

        compositionName,

        medicines

      });


    // ========================
    // LEARNING
    // ========================

    const learning =

      generateLearningContent({

        compositionName,

        insights

      });


    // ========================
    // FORMAT NAME
    // ========================

    const formattedName =

      formatName(
        compositionName
      );


    // ========================
    // HTML
    // ========================

    const html = `

      <button
        class="composition-back-btn"
        id="compositionBackBtn"
      >

        ← Back

      </button>

      ${renderInsightsUI({

        compositionName:
          formattedName,

        insights,

        learning,
        medicines

      })}

    `;


    // ========================
    // CACHE
    // ========================

    detailsCache.set(

      compositionName,

      html

    );


    // ========================
    // RENDER
    // ========================

    container.innerHTML =
      html;

window.lastCompositionHTML =
  html;
  window.lastCompositionName =
  compositionName;

window.lastCompositionContainer =
  container;
    // ========================
    // REMOVE BLUR AGAIN
    // ========================

    container.style.filter =
      "none";

    container.style.backdropFilter =
      "none";


    // ========================
    // INIT
    // ========================

    initCompositionTabs();

    initBackButton();


    // ========================
    // HISTORY
    // ========================

    pushHistoryState(
      compositionName
    );

  });

}

