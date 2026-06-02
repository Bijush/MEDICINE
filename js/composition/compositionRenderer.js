// ==============================
// BASE NAME EXTRACTOR
// ==============================

function getBaseComposition(
  name = ""
) {

  return String(name)

    .replace(
      /\b\d+(\.\d+)?\s*(mg|mcg|g|ml)\b/gi,
      ""
    )

    .replace(
      /\b(chewable|sr|cr|er|xr|ds)\b/gi,
      ""
    )

    .replace(/\s+/g, " ")

    .trim();

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

        ([base, items], index) => `

<div class="composition-group">

  <div
    class="composition-group-header"
    data-group="${index}"
  >

    <div>

      <div class="group-title">

        ${base}

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

`

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