// ==============================
// COMPOSITION RENDERER
// ==============================


import {
  renderCompositionCard
} from "./compositionCardRenderer.js";


// ==============================
// RENDER EMPTY
// ==============================

export function renderEmpty(

  container,

  text = "No data found."

) {

  container.innerHTML = `

    <div class="composition-empty">

      ${text}

    </div>

  `;

}


// ==============================
// RENDER LOADING
// ==============================

export function renderLoading(
  container
) {

  container.innerHTML = `

    <div class="composition-loading">

      Loading...

    </div>

  `;

}


// ==============================
// RENDER COMPOSITION LIST
// ==============================

export function renderCompositionList(

  container,

  list = []

) {

  // Empty
  if (!list.length) {

    renderEmpty(
      container
    );

    return;

  }


  // Render
  container.innerHTML =

    list

      .map(item =>

        renderCompositionCard(
          item
        )

      )

      .join("");

}


// ==============================
// APPEND COMPOSITION LIST
// ==============================

export function appendCompositionList(

  container,

  list = []

) {

  if (!list.length) {
    return;
  }


  container.innerHTML +=

    list

      .map(item =>

        renderCompositionCard(
          item
        )

      )

      .join("");

}