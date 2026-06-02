// ==============================
// COMPOSITION RENDERER
// ==============================

import {
  renderCompositionCard
} from "./compositionCardRenderer.js";


// ==============================
// BASE NAME EXTRACTOR
// ==============================

function getBaseComposition(
  name = ""
) {

  return String(name)

    .toLowerCase()

    .replace(
      /\b\d+(\.\d+)?\s*(mg|mcg|g|gm|ml)\b/gi,
      ""
    )

    .replace(
      /\b(tablet|capsule|syrup|drop|drops|injection|chewable|sr|cr|er|xr|ds)\b/gi,
      ""
    )

    .replace(/[()[\]-]/g, " ")

    .replace(/\s+/g, " ")

    .trim();

}


// ==============================
// CAPITALIZE
// ==============================

function capitalizeWords(
  text = ""
) {

  return text

    .split(" ")

    .map(
      word =>

        word.charAt(0)
          .toUpperCase()

        +

        word.slice(1)
    )

    .join(" ");

}


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

  if (!list.length) {

    renderEmpty(
      container
    );

    return;

  }

  const groups = {};

  list.forEach(item => {

    const base =

      getBaseComposition(
        item
      );

    if (!groups[base]) {

      groups[base] = [];

    }

    groups[base].push(item);

  });

  container.innerHTML =

    Object.entries(groups)

      .map(

        ([base, items], index) => {

          // Single item
          if (
            items.length === 1
          ) {

            return renderCompositionCard(
              items[0]
            );

          }

          // Grouped items
          return `

<div class="composition-group">

  <div
    class="composition-group-header"
    data-group="${index}"
  >

    <div>

      <div class="group-title">

        ${capitalizeWords(base)}

      </div>

      <div class="group-count">

        ${items.length}
        strengths

      </div>

    </div>

    <div
      class="group-arrow"
      id="arrow-${index}"
    >

      ▼

    </div>

  </div>

  <div
    class="composition-group-body"
    id="group-${index}"
    style="display:none;"
  >

    ${items

      .map(item =>

        renderCompositionCard(
          item
        )

      )

      .join("")}

  </div>

</div>

          `;

        }

      )

      .join("");


  container

    .querySelectorAll(
      ".composition-group-header"
    )

    .forEach(header => {

      header.onclick = () => {

        const id =

          header.dataset.group;

        const body =

          document.getElementById(
            `group-${id}`
          );

        const arrow =

          document.getElementById(
            `arrow-${id}`
          );

        const isOpen =

          body.style.display ===
          "block";

        body.style.display =

          isOpen

            ? "none"

            : "block";

        arrow.textContent =

          isOpen

            ? "▼"

            : "▲";

      };

    });

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