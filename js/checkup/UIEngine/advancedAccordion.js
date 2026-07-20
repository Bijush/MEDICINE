
import {
  renderSymptomLabel
}
from "./uiFunction.js";

export function renderAdvancedAccordionSection(
  title,
  content,
  count = null
) {

  return `

    <div class="
      advanced-accordion
    ">

      <button
        class="
          advanced-accordion-header
        "
        type="button"
      >

        <span>

          ${title}

          ${count !== null

            ? ` (${count})`

            : ""

          }

        </span>

        <span class="
          advanced-arrow
        ">

          ▼

        </span>

      </button>

      <div
        class="
          advanced-accordion-content
        "
      >

        ${content}

      </div>

    </div>

  `;
}

export function renderAdvancedItems(
  items = []
) {

  return items.map(

    symptom => `

      <div
        class="symptom-item"
        data-symptom="${symptom}"
      >

        <label class="
          symptom-label-wrap
        ">

          <div class="
            symptom-left
          ">

            <input
              type="checkbox"
              value="${symptom}"
            />

            <span class="
              symptom-name
            ">

              ${renderSymptomLabel(
                symptom
              )}

            </span>

          </div>

          <button

            type="button"

            class="
              symptom-info-btn
            "

            data-symptom="
              ${symptom}
            "

          >

            ℹ️

          </button>

        </label>

      </div>

    `

  )

  .join("");

}

export function setupAdvancedAccordion() {

  const headers =

    document.querySelectorAll(

      ".advanced-accordion-header"

    );

  headers.forEach(

    header => {

      header.addEventListener(

        "click",

        () => {

          const current =

            header.closest(
              ".advanced-accordion"
            );

          document

            .querySelectorAll(
              ".advanced-accordion"
            )

            .forEach(

              accordion => {

                if (
                  accordion !== current
                ) {

                  accordion.classList.remove(
                    "open"
                  );

                }

              }

            );

          current.classList.toggle(
            "open"
          );

        }

      );

    }

  );

}