
import { ALL_DISEASES }
from "./register/dataRegistry.js";

import {
  renderLiveFollowupQuestions
}
from "./renderFollowupQuestions.js";

import {
  getCanonicalSymptom
}
from "./symptomIntelligence.js";

import {t} from "./translations/translate.js";

import { CURRENT_LANG } from "./checkup.js";

import {
  isUserFriendlySymptom ,
  generateSectionItems,
  renderSymptomLabel,
  formatText
  
} from "./UIEngine/uiFunction.js";

import {
 renderMainLayout,
 renderPatientInputs,
 renderTabs,
 renderSelectedTab,
 renderAdvancedTab,
 renderCategoryHTML,
 renderSymptomsTab,
 renderAdvancedSection,
 setupTabs,
 setupAdvancedToggle,
 setupSearch,
 setupCheckboxEvents,
 setupLiveInputs
 
} from "./UIEngine/renderEngine.js";
// ==============================

import {
  detectCategory
  
} from "./UIEngine/detectCategory.js";

// ==============================
// GENERATE CLEAN SYMPTOMS
// ==============================

function generateSymptoms() {

  const symptomSet =
    new Set();

  ALL_DISEASES.forEach(
    disease => {

      Object.keys(
        disease.symptoms || {}
      ).forEach(symptom => {

        if (
          isUserFriendlySymptom(
            symptom
          )
        ) {

          symptomSet.add(
            symptom
          );
        }
      });
    }
  );

  return Array.from(
    symptomSet
  )

  .sort(

    (a, b) =>

      a.localeCompare(b)
  );
}

// ==============================
// BUILD CATEGORY MAP
// ==============================

function buildCategoryMap(
  symptoms
) {

  const grouped = {};

  symptoms.forEach(
    symptom => {

      const category =
        detectCategory(
          symptom
        );

      if (
        !grouped[category]
      ) {

        grouped[
          category
        ] = [];
      }

      grouped[
        category
      ].push(symptom);
    }
  );

  return grouped;
}


// ==============================
// INITIALIZE UI
// ==============================

function initializeUI(

  selectedSymptoms,
  symptomCounter

) {

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


// ==============================
// RENDER UI
// ==============================

export function renderSymptomInputUI(

  containerId =
    "symptomInput"

) {

  // ==========================
  // WAIT FOR DOM
  // ==========================

  if (
    document.readyState ===
    "loading"
  ) {

    window.addEventListener(

      "DOMContentLoaded",

      () => {

        renderSymptomInputUI(
          containerId
        );
      }
    );

    return;
  }

  // ==========================
  // CONTAINER
  // ==========================

  const container =

    document.getElementById(
      containerId
    );

  if (!container) {

    console.error(
      `Container '${containerId}' not found`
    );

    return;
  }

  // ==========================
  // AUTO GENERATE
  // ==========================

  const uiData =
  generateUIData();

  // ==========================
  // HTML
  // ==========================

  container.innerHTML =
  renderMainLayout(
    uiData
  );

  // ==========================
  // ELEMENTS
  // ==========================

  
  const selectedSymptoms =

  document.getElementById(
    "selectedSymptoms"
  );

const selectedSymptomsTab =

  document.getElementById(
    "selectedSymptomsTab"
  );

  const symptomCounter =

    document.getElementById(
      "symptomCounter"
    );
// ==========================
// DROPDOWN TABS
// ==========================

setupTabs();

  // ==========================
// ADVANCED TOGGLE
// ==========================

setupAdvancedToggle();

  // ==========================
  // SEARCH
  // ==========================

  setupSearch();
  
  // ==========================
  // CHECKBOX
  // ==========================

  setupCheckboxEvents(

  container,
  selectedSymptoms,
  symptomCounter

);


// ==========================
// LIVE EXTRA INPUT UPDATE
// ==========================

setupLiveInputs(

  selectedSymptoms,
  symptomCounter

);

  // INIT

  initializeUI(

  selectedSymptoms,
  symptomCounter

);

}

// ==============================
// GENERATE UI DATA
// ==============================

function generateUIData() {

  const autoSymptoms =
    generateSectionItems(
      "symptoms"
    );

  return {

    examItems:
      generateSectionItems(
        "physical_exam"
      ),

    testItems:
      generateSectionItems(
        "tests"
      ),

    redFlagItems:
      generateSectionItems(
        "red_flags"
      ),

    categories:
      buildCategoryMap(
        autoSymptoms
      )

  };
}

// ==============================
// GET SELECTED SYMPTOMS
// ==============================

export function getSelectedSymptoms() {

  const data = {};

  const checkboxes =

  document.querySelectorAll(
    '.symptom-ui input[type="checkbox"]'
  );

  checkboxes.forEach(box => {

    if (box.checked) {

      const symptom =

  box.value.trim();

// ==========================
// ORIGINAL
// ==========================

data[symptom] = true;

// ==========================
// CANONICAL
// ==========================

const canonical =

  getCanonicalSymptom(
    symptom
  );

data[
  canonical
] = true;
    }
  });

  // AGE

  const ageValue =

    document.getElementById(
      "userAge"
    )?.value;

  if (ageValue) {

    data.age =
      Number(ageValue);
  }

  // GENDER

  const gender =

    document.getElementById(
      "userGender"
    )?.value;

  if (gender) {

    data.gender =
      gender;
  }

  // DURATION

  const durationValue =

    document.getElementById(
      "symptomDuration"
    )?.value;

  if (durationValue) {

    data.duration =
      Number(durationValue);
  }

  console.log(
    "FINAL USER DATA:",
    data
  );

  return data;
}



// ==============================
// UPDATE SELECTED UI
// ==============================

function updateSelectedSymptoms(

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

      <div class="
        selected-chip
      ">

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

    <div class="
      selected-chip
      medical-chip
    ">

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

      <div class="
        selected-chip
        medical-chip
      ">

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

      <div class="
        selected-chip
        medical-chip
      ">

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

      <div class="
        selected-chip
        medical-chip
      ">

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
}


