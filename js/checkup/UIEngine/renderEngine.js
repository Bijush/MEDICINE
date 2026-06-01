
import {
  renderSymptomLabel
}
from "./uiFunction.js";

import {
  updateSelectedSymptoms
  
} from "./updateSelectedSymptoms.js";

import {
  renderLiveFollowupQuestions
}
from "../renderFollowupQuestions.js";

import {
  CURRENT_LANG
}
from "../checkup.js";

// ==============================
// MAIN LAYOUT
// ==============================

export function renderMainLayout(
  uiData
) {

  return `

  <div class="symptom-ui">

    ${renderPatientInputs()}

    ${renderTabs()}

    ${renderSymptomsTab(
      uiData
    )}

    ${renderSelectedTab()}

    ${renderAdvancedTab(
      uiData
    )}

    ${renderSymptomInfoModal()}

  </div>

  `;
}

// ui Patient input

export function renderPatientInputs() {

  return `

    <div class="
      extra-inputs
    ">

      <input
        type="text"
        id="patientName"
        placeholder="Name"
      />

      <input
        type="number"
        id="userAge"
        placeholder="Age"
      />

      <select id="userGender">

        <option value="">
          Gender
        </option>

        <option value="male">
          Male
        </option>

        <option value="female">
          Female
        </option>

      </select>

      <input
        type="number"
        id="symptomDuration"
        placeholder="Days"
      />

    </div>
  `;
}

// ==============================
// TABS
// ==============================

export function renderTabs() {

  return `

  <div class="dropdown-tab-wrap">

    <select
      id="tabSelector"
      class="dropdown-tab-select"
    >

      <option value="symptomsTab">
        Symptoms
      </option>

      <option value="selectedTab">
        Selected
      </option>

      <option value="advancedTab">
        Advanced
      </option>

    </select>

  </div>

  `;
}

// ==============================
// SELECTED TAB
// ==============================

export function renderSelectedTab() {

  return `

  <div
    id="selectedTab"
    class="tab-content"
  >

    <div
      id="selectedSymptomsTab"
      class="selected-symptoms"
    ></div>

  </div>

  `;
}

// ==============================
// ADVANCED TAB
// ==============================

export function renderAdvancedTab(
  uiData
) {

  return `

  <div
    id="advancedTab"
    class="tab-content"
  >

    <div class="
      advanced-medical-wrapper
    ">

      <button
        id="toggleMedicalInputs"
        class="advanced-toggle"
        type="button"
      >

        Advanced Medical Inputs

      </button>

      <div
        id="advancedMedicalInputs"
        class="
          advanced-medical-inputs
        "
        style="display:none;"
      >

        ${renderAdvancedSection(
          "Physical Examination",
          uiData.examItems
        )}

        ${renderAdvancedSection(
          "Lab Tests",
          uiData.testItems
        )}

        ${renderAdvancedSection(
          "Emergency Signs",
          uiData.redFlagItems
        )}

      </div>

    </div>

  </div>

  `;
}

// ==============================
// RENDER CATEGORY HTML
// ==============================

export function renderCategoryHTML(
  categories = {}
) {

  return Object.entries(
    categories
  )

  .map(

    ([category, items]) => `

      <div class="
        symptom-category
      ">

        <div class="
          symptom-category-title
        ">

          ${category}

          (
            ${items.length}
          )

        </div>

        <div class="
          symptom-category-items
        ">

          ${items.map(

            symptom => `

              <div
                class="
                  symptom-item
                "

                data-symptom="
                  ${symptom}
                "
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

          .join("")}

        </div>

      </div>
    `
  )

  .join("");
}

// ==============================
// SYMPTOMS TAB
// ==============================

export function renderSymptomsTab(
  uiData
) {

  return `

  <div
    id="symptomsTab"
    class="tab-content active"
  >

    <!-- SEARCH -->

    <div class="
      symptom-search-wrap
    ">

      <input
        type="text"
        id="symptomSearch"
        class="symptom-search"
        placeholder="
          Search symptoms...
        "
      />

    </div>

    <!-- COUNTER -->

    <div
      id="symptomCounter"
      class="symptom-counter"
    >

      Selected: 0

    </div>

    <!-- SELECTED -->

    <div
      id="selectedSymptoms"
      class="
        selected-symptoms
      "
    ></div>

    <!-- FOLLOWUP -->

    <div
      id="
        liveFollowupQuestions
      "
      class="
        live-followup-container
      "
    ></div>

    <!-- CATEGORYS -->

    <div
      id="symptomList"
      class="symptom-list"
    >

      ${renderCategoryHTML(
        uiData.categories
      )}

    </div>

  </div>

  `;
}

// ==============================
// RENDER ADVANCED SECTION
// ==============================

export function renderAdvancedSection(

  title,
  items = []

) {

  return `

    <div class="
      symptom-category
    ">

      <div class="
        symptom-category-title
      ">

        ${title}

        (
          ${items.length}
        )

      </div>

      <div class="
        symptom-category-items
      ">

        ${items.map(

          symptom => `

            <div
              class="
                symptom-item
              "

              data-symptom="
                ${symptom}
              "
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

        .join("")}

      </div>

    </div>
  `;
}

// ==============================
// SETUP TABS
// ==============================

export function setupTabs() {

  const tabSelector =

    document.getElementById(
      "tabSelector"
    );

  const tabContents =

    document.querySelectorAll(
      ".tab-content"
    );

  function showTab(tabId) {

    tabContents.forEach(tab => {

      tab.classList.remove(
        "active"
      );
    });

    document
      .getElementById(tabId)

      ?.classList.add(
        "active"
      );
  }

  showTab("symptomsTab");

  tabSelector?.addEventListener(

    "change",

    e => {

      showTab(
        e.target.value
      );
    }
  );
}

// ==============================
// SETUP ADVANCED TOGGLE
// ==============================

export function setupAdvancedToggle() {

  const toggleMedicalBtn =

    document.getElementById(
      "toggleMedicalInputs"
    );

  const advancedMedicalInputs =

    document.getElementById(
      "advancedMedicalInputs"
    );

  if (

    !toggleMedicalBtn ||

    !advancedMedicalInputs

  ) {

    return;
  }

  toggleMedicalBtn.onclick =
    () => {

      const isHidden =

        advancedMedicalInputs
          .style.display ===
        "none";

      advancedMedicalInputs
        .style.display =

        isHidden
          ? "block"
          : "none";

      toggleMedicalBtn.textContent =

        isHidden

        ? "Hide Advanced Medical Inputs"

        : "Advanced Medical Inputs";
    };
}

// ==============================
// SETUP SEARCH
// ==============================

export function setupSearch() {

  const searchInput =

    document.getElementById(
      "symptomSearch"
    );

  const symptomList =

    document.getElementById(
      "symptomList"
    );

  if (

    !searchInput ||

    !symptomList

  ) {

    return;
  }

  searchInput.addEventListener(

    "input",

    e => {

      const value =

        e.target.value
        .toLowerCase()
        .trim();

      const items =

        symptomList.querySelectorAll(
          ".symptom-item"
        );

      items.forEach(
        item => {

          const symptom = item.dataset.symptom.toLowerCase();

          item.style.display =

            symptom.includes(
              value
            )

            ? "flex"

            : "none";
        }
      );
    }
  );
}

// ==============================
// SETUP CHECKBOX EVENTS
// ==============================

export function setupCheckboxEvents(

  container,
  selectedSymptoms,
  symptomCounter

) {

  container.addEventListener(

    "change",

    e => {

      if (

        e.target.type !==
        "checkbox"

      ) {

        return;
      }

      updateSelectedSymptoms(

        selectedSymptoms,

        symptomCounter
      );

      requestAnimationFrame(
        () => {

          renderLiveFollowupQuestions();
        }
      );
    }
  );
}

// ==============================
// SETUP LIVE INPUTS
// ==============================

export function setupLiveInputs(

  selectedSymptoms,
  symptomCounter

) {

  const liveInputs = [

    "patientName",
    "userAge",
    "userGender",
    "symptomDuration"

  ];

  const toggleMedicalBtn =

    document.getElementById(
      "toggleMedicalInputs"
    );

  const advancedMedicalInputs =

    document.getElementById(
      "advancedMedicalInputs"
    );

  liveInputs.forEach(id => {

    const element =

      document.getElementById(id);

    if (!element)
      return;

    const eventType =

      element.tagName ===
      "SELECT"

        ? "change"

        : "input";

    element.addEventListener(

      eventType,

      () => {

        // ====================
        // AUTO OPEN ADVANCED
        // ====================

        if (
          advancedMedicalInputs
        ) {

          advancedMedicalInputs
            .style.display =
            "block";
        }

        if (
          toggleMedicalBtn
        ) {

          toggleMedicalBtn.textContent =
            "Hide Advanced Medical Inputs";
        }

        // ====================
        // UPDATE UI
        // ====================

        updateSelectedSymptoms(

          selectedSymptoms,

          symptomCounter
        );

        // ====================
        // FOLLOWUP
        // ====================

        requestAnimationFrame(
          () => {

            renderLiveFollowupQuestions();
          }
        );
      }
    );
  });
}
export function renderSymptomInfoModal() {

  return `

  <div
    id="symptomInfoModal"
    class="symptom-tooltip"
  >

    <button
      id="closeSymptomModal"
      class="symptom-modal-close"
      type="button"
    >

      ✖

    </button>

    <div
      id="symptomModalContent"
    ></div>

  </div>

  `;
}

export function setupSymptomInfoModal() {

  const buttons =

    document.querySelectorAll(
      ".symptom-info-btn"
    );

  const modal =

    document.getElementById(
      "symptomInfoModal"
    );

  const content =

    document.getElementById(
      "symptomModalContent"
    );

  const closeBtn =

    document.getElementById(
      "closeSymptomModal"
    );

  if (

    !modal ||

    !content

  ) {

    console.warn(
      "Symptom modal elements not found"
    );

    return;
  }

  // ==========================
  // CLOSE BUTTON
  // ==========================

  if (closeBtn) {

    closeBtn.onclick = () => {

      modal.style.display =
        "none";
    };
  }

  buttons.forEach(btn => {

    btn.addEventListener(

      "click",

      e => {

        e.stopPropagation();

        const symptom =

          btn.dataset.symptom
            ?.trim();

        const meta =

          window
          .symptomMetadata?.[
            symptom
          ] || {};

        console.log(
          "MODAL META JSON:",
          JSON.stringify(
            meta,
            null,
            2
          )
        );

        // ======================
        // BUILD HTML
        // ======================

        let html = `

<div class="
  symptom-modal-title
">

  ${renderSymptomLabel(
    symptom
  )}

</div>

`;

        Object.entries(meta)

        .forEach(

          ([key, value]) => {

            if (

              value == null ||

              key ===
                "followup" ||

              key ===
                "present" ||

              key ===
                "weight"

            ) {

              return;
            }

            // OBJECT

            if (

              typeof value ===
                "object" &&

              !Array.isArray(
                value
              )

            ) {

              html += `

<div class="
  symptom-modal-section
">

  <b>${key}</b>

  <br>

  ${value.en || ""}

  ${
    value.bn

      ? `<br><br>
         (${value.bn})
        `

      : ""
  }

</div>

`;

              return;
            }

            // ARRAY

            if (

              Array.isArray(
                value
              )

            ) {

              html += `

<div class="
  symptom-modal-section
">

  <b>${key}</b>

  <br>

  ${value.join(
    ", "
  )}

</div>

`;

              return;
            }

            // STRING / NUMBER

            html += `

<div class="
  symptom-modal-section
">

  <b>${key}</b> :

  ${value}

</div>

`;
          }
        );

        content.innerHTML =
          html;

        // ======================
        // SHOW
        // ======================

        // ======================
// SHOW
// ======================

modal.style.display =
  "block";

modal.style.visibility =
  "hidden";

modal.style.left =
  "0px";

modal.style.top =
  "0px";

const rect =

  btn.getBoundingClientRect();

const tooltipWidth =

  modal.offsetWidth;

const tooltipHeight =

  modal.offsetHeight;

const screenWidth =

  window.innerWidth;

const screenHeight =

  window.innerHeight;

// ======================
// HORIZONTAL POSITION
// ======================

let leftPosition =

  rect.right + 10;

// RIGHT OVERFLOW

if (

  leftPosition +
  tooltipWidth >

  screenWidth - 10

) {

  leftPosition =

    rect.left -
    tooltipWidth -
    10;
}

// LEFT OVERFLOW

if (
  leftPosition < 10
) {

  leftPosition = 10;
}

// ======================
// VERTICAL POSITION
// ======================

let topPosition =

  rect.top +
  window.scrollY -

  (tooltipHeight / 2) +

  (rect.height / 2);

// TOP LIMIT

if (
  topPosition < 10
) {

  topPosition = 10;
}

// BOTTOM LIMIT

const maxTop =

  window.scrollY +

  screenHeight -

  tooltipHeight -

  10;

if (
  topPosition > maxTop
) {

  topPosition = maxTop;
}

// ======================
// APPLY
// ======================

modal.style.left =

  `${leftPosition}px`;

modal.style.top =

  `${topPosition}px`;

modal.style.visibility =
  "visible";
      }
    );
  });

  // ==========================
  // OUTSIDE CLICK CLOSE
  // ==========================

  document.addEventListener(

    "click",

    e => {

      if (

        !modal.contains(
          e.target
        ) &&

        !e.target.closest(
          ".symptom-info-btn"
        )

      ) {

        modal.style.display =
          "none";
      }
    }
  );
}