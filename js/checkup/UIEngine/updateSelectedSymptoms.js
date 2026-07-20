import {
  CURRENT_LANG
}
from "../checkup.js";

import {
  t
}
from "../translations/translate.js";

import {
  formatText
}
from "./uiFunction.js";

// ==============================
// UPDATE SELECTED UI
// ==============================

export function updateSelectedSymptoms(

  container,

  counter

) {

  // ==========================
  // SELECTED CHECKBOXES
  // ==========================

  const selected =

    document.querySelectorAll(
      '.symptom-ui input[type="checkbox"]:checked'
    );

  // ==========================
  // EXTRA INPUTS
  // ==========================

  const patientName =

    document.getElementById(
      "patientName"
    )?.value;

  const age =

    document.getElementById(
      "userAge"
    )?.value;

  const gender =

    document.getElementById(
      "userGender"
    )?.value;

  const duration =

    document.getElementById(
      "symptomDuration"
    )?.value;

  // ==========================
  // TOTAL COUNT
  // ==========================

  let totalCount =
    selected.length;

  if (patientName)
    totalCount++;

  if (age)
    totalCount++;

  if (gender)
    totalCount++;

  if (duration)
    totalCount++;

  // ==========================
  // COUNTER
  // ==========================

  counter.innerHTML =
    `Selected: ${totalCount}`;

  // ==========================
  // EMPTY
  // ==========================

  if (

    !selected.length &&

    !patientName &&

    !age &&

    !gender &&

    !duration

  ) {

    container.innerHTML =
      "";

    return;
  }

  // ==========================
  // SYMPTOM CHIPS
  // ==========================

  let html =

    Array.from(selected)

    .map(
      item => `

<div
  class="
    selected-chip
  "
  data-symptom="
    ${item.value}
  "
>

  ✔

  ${t(item.value, "en")}

  (

  ${t(item.value, "bn")}

  )

</div>

`
    )

    .join("");

  // ==========================
  // NAME CHIP
  // ==========================

  if (patientName) {

    html += `

<div
  class="
    selected-chip
    medical-chip
  "
>

  🧑 Patient:
  ${patientName}

</div>

`;
  }

  // ==========================
  // AGE CHIP
  // ==========================

  if (age) {

    html += `

<div
  class="
    selected-chip
    medical-chip
  "
>

  🎂 Age:
  ${age}

</div>

`;
  }

  // ==========================
  // GENDER CHIP
  // ==========================

  if (gender) {

    html += `

<div
  class="
    selected-chip
    medical-chip
  "
>

  👤 Gender:
  ${formatText(gender)}

</div>

`;
  }

  // ==========================
  // DURATION CHIP
  // ==========================

  if (duration) {

    html += `

<div
  class="
    selected-chip
    medical-chip
  "
>

  ⏳ Duration:
  ${duration} days

</div>

`;
  }

  // ==========================
  // FINAL
  // ==========================

  container.innerHTML =
    html;

  // ==========================
  // CLICK TO ORIGINAL ITEM
  // ==========================

  container
    .querySelectorAll(
      ".selected-chip[data-symptom]"
    )

    .forEach(
      chip => {

        chip.onclick = () => {

          const symptom =
            chip.dataset.symptom;

          // ====================
// FIND ORIGINAL ITEM
// ====================

let symptomItem = null;

document

  .querySelectorAll(
    ".symptom-item"
  )

  .forEach(item => {

    const value =

      item.dataset.symptom
        ?.trim()
        .toLowerCase();

    if (

      value ===

      symptom
        .trim()
        .toLowerCase()

    ) {

      symptomItem = item;

    }

  });

console.log(
  "Clicked:",
  symptom
);

console.log(
  "Found item:",
  symptomItem
);

if (!symptomItem) {

  // ====================
  // FALLBACK
  // FIND CHECKBOX
  // ====================

  const checkbox =

    document.querySelector(

      `.symptom-ui input[type="checkbox"][value="${symptom}"]`

    );

  if (checkbox) {

    symptomItem =

      checkbox.closest(
        ".symptom-item"
      );

  }

}

if (!symptomItem) {

  console.warn(
    "Unable to find symptom:",
    symptom
  );

  return;

}

          if (!symptomItem)
            return;

          // ====================
          // OPEN CATEGORY
          // ====================

          const category =

            symptomItem.closest(
              ".symptom-category"
            );

          if (category) {

            document

              .querySelectorAll(
                ".symptom-category"
              )

              .forEach(
                c => {

                  if (
                    c !== category
                  ) {

                    c.classList.remove(
                      "open"
                    );

                  }

                }
              );

            category.classList.add(
              "open"
            );
          }

          // ====================
          // SCROLL
          // ====================

          symptomItem.scrollIntoView({

            behavior:
              "smooth",

            block:
              "center"

          });

          // ====================
          // HIGHLIGHT
          // ====================

          symptomItem.classList.add(
            "selected-jump"
          );

          setTimeout(
            () => {

              symptomItem.classList.remove(
                "selected-jump"
              );

            },
            2000
          );

        };

      }
    );

}