// ==============================
// COMPOSITION APP
// PRO VERSION
// ==============================

import {

  searchCompositions

} from "./compositionSearch.js";

import {

  renderCompositionList,

  renderEmpty,

  renderLoading

} from "./compositionRenderer.js";

import {

  initCompositionDetails

} from "./compositionDetailsEngine.js";

import {

  initFilters,

  renderMedicalFilters,

  getMedicalFilters

} from "../shared/filters.js";

import {
  applyMedicalFilters
} from "../shared/medicalFilterEngine.js";

import {
  preprocessMedicineData
} from "../shared/medicinePreprocessor.js";

import {

  getAllCompositions,

  getMedicinesByComposition

} from "./compositionLoader.js";

import {

  openSearchOverlay

} from "./googleSearchOverlay.js";


// ==============================
// ELEMENTS
// ==============================

const input =

  document.querySelector(
    "#compositionSearchInput"
  );

const results =

  document.querySelector(
    "#compositionResults"
  );


// ==============================
// STATE
// ==============================

const state = {

  query: "",

  allCompositions:

    getAllCompositions(),

  filtered: []

};


// ==============================
// INIT DETAILS
// ==============================

initCompositionDetails(
  results
);


// ==============================
// ENABLE FILTER MODE
// ==============================

window.__compositionMode = true;


// ==============================
// BUILD FILTER DATA
// ==============================

const filterData =

  preprocessMedicineData(

    state.allCompositions

      .flatMap(comp =>

        getMedicinesByComposition(
          comp
        )

      )

  );


// ==============================
// INIT FILTERS
// ==============================

initFilters(filterData);

renderMedicalFilters();


// ==============================
// RENDER
// ==============================

function renderApp() {

  renderLoading(
    results
  );


  requestAnimationFrame(() => {

    let list =

      state.query

        ?

        searchCompositions(
          state.query
        )

        :

        state.allCompositions;


    // ==========================
    // APPLY FILTERS
    // ==========================

    const filters =
      getMedicalFilters();


    if(
      Object.keys(filters)
        .length
    ){

      list = list.filter(
        compositionName => {

          const medicines =

            getMedicinesByComposition(
              compositionName
            );

          // ✅ preprocess
          const prepared =

            preprocessMedicineData(
              medicines
            );

          return applyMedicalFilters(
            prepared,
            filters
          ).length > 0;

        }
      );

    }


    // ==========================
    // EMPTY
    // ==========================

    if (!list.length) {

      renderEmpty(

        results,

        "No composition found."

      );

      return;

    }


    // ==========================
    // SAVE STATE
    // ==========================

    state.filtered = list;


    // ==========================
    // RENDER
    // ==========================

    renderCompositionList(

      results,

      list

    );

  });

}


// ==============================
// DEFAULT RENDER
// ==============================

renderApp();


// ==============================
// SEARCH INPUT
// ==============================

input?.addEventListener(

  "input",

  () => {

    state.query =

      input.value.trim();

    renderApp();

  }

);


// ==============================
// FILTER WATCHER
// ==============================

document.addEventListener(

  "change",

  event => {

    if (

      event.target.closest(
        ".medical-filter-box"
      )

    ) {

      renderApp();

    }

  }

);


// ==============================
// GOOGLE SEARCH CLICK
// ==============================

document.addEventListener(

  "click",

  event => {

    const target =

      event.target.closest(
        ".google-search-link"
      );


    if(!target){
      return;
    }


    openSearchOverlay(

      target.dataset.search ||

      target.dataset.query ||

      target.textContent,

      target.dataset.field || ""

    );

  }

);