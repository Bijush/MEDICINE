
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

import {
  isUserFriendlySymptom,
  generateSectionItems
}
from "./UIEngine/uiFunction.js";

import {
  renderMainLayout,
  setupTabs,
  setupAdvancedToggle,
  setupSearch,
  setupCheckboxEvents,
  setupLiveInputs,
  setupSymptomInfoModal
}
from "./UIEngine/renderEngine.js";

import {
  updateSelectedSymptoms
}
from "./UIEngine/updateSelectedSymptoms.js";

import {
  buildCategoryMap
}
from "./UIEngine/buildCategoryMap.js";


// ==============================
// GLOBAL SYMPTOM METADATA
// ==============================

window.symptomMetadata = {};

// ==============================
// GENERATE CLEAN SYMPTOMS
// ==============================
function generateSymptoms() {
  window.symptomMetadata = {};

  const symptomSet =
    new Set();

  ALL_DISEASES.forEach(
    disease => {

      Object.entries(
  disease.symptoms || {}
)

.forEach(

  ([symptom, data]) => {

    // ======================
    // SAVE METADATA
    // ======================

    const oldMeta =

  window
  .symptomMetadata?.[
    symptom
  ] || {};

window.symptomMetadata[
  symptom
] = {

  ...data,

  ...oldMeta,

  // ======================
  // KEEP RICH DATA
  // ======================

  label:
    oldMeta.label ||
    data.label,

  description:
    oldMeta.description ||
    data.description,

  warning:
    oldMeta.warning ||
    data.warning,

  tips:
    oldMeta.tips ||
    data.tips,

  icon:
    oldMeta.icon ||
    data.icon
};

    // ======================
    // UI FILTER
    // ======================

    if (

      isUserFriendlySymptom(
        symptom
      )

    ) {

      symptomSet.add(
        symptom
      );
    }
  }
);
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


generateSymptoms();

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

requestAnimationFrame(() => {

  setupSymptomInfoModal();

});
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
  
generateSymptoms();

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





