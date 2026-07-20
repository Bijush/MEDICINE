import { ALL_DISEASES } from "./register/dataRegistry.js";
import { renderLiveFollowupQuestions } from "./renderFollowupQuestions.js";
import { getCanonicalSymptom } from "./symptomIntelligence.js";
import { isUserFriendlySymptom, generateSectionItems } from "./UIEngine/uiFunction.js";
import {
  renderMainLayout,
  setupTabs,
  setupAdvancedToggle,
  setupSearch,
  setupCheckboxEvents,
  setupLiveInputs,
  setupSymptomInfoModal,
  setupAccordion
} from "./UIEngine/renderEngine.js";
import { updateSelectedSymptoms } from "./UIEngine/updateSelectedSymptoms.js";
import { buildCategoryMap } from "./UIEngine/buildCategoryMap.js";
import { setupAdvancedAccordion } from "./UIEngine/advancedAccordion.js";

// ==========================================================================
// GLOBAL SYMPTOM METADATA
// ==========================================================================
window.symptomMetadata = {};

// ==========================================================================
// GENERATE CLEAN SYMPTOMS
// ==========================================================================
function generateSymptoms() {
  window.symptomMetadata = {};
  const symptomSet = new Set();

  ALL_DISEASES.forEach(disease => {
    Object.entries(disease.symptoms || {}).forEach(([symptom, data]) => {
      const oldMeta = window.symptomMetadata?.[symptom] || {};

      window.symptomMetadata[symptom] = {
        ...data,
        ...oldMeta,
        label: oldMeta.label || data.label,
        description: oldMeta.description || data.description,
        warning: oldMeta.warning || data.warning,
        tips: oldMeta.tips || data.tips,
        icon: oldMeta.icon || data.icon
      };

      if (isUserFriendlySymptom(symptom)) {
        symptomSet.add(symptom);
      }
    });
  });

  return Array.from(symptomSet).sort((a, b) => a.localeCompare(b));
}

// ==========================================================================
// INITIALIZE UI HELPERS
// ==========================================================================
function initializeUI(selectedSymptoms, symptomCounter) {
  updateSelectedSymptoms(selectedSymptoms, symptomCounter);
  requestAnimationFrame(() => {
    renderLiveFollowupQuestions();
  });
}

// ==========================================================================
// RENDER UI INPUT CORE
// ==========================================================================
export function renderSymptomInputUI(containerId = "symptomInput") {
  // Wait for DOM to load fully if state is loading
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => {
      renderSymptomInputUI(containerId);
    });
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container '${containerId}' not found`);
    return;
  }

  // 1. Refresh Dynamic Metadata Map
  generateSymptoms();

  // 2. Build Structural UI Object Dataset
  const uiData = generateUIData();

  // 3. Inject Layout Base Shell into Container
  container.innerHTML = renderMainLayout(uiData);

  // 4. Capture Necessary Core Form Context Elements
  const selectedSymptoms = document.getElementById("selectedSymptoms");
  const symptomCounter = document.getElementById("symptomCounter");

  // 5. Initialize Core Interactivity Controllers
  setupTabs();
  setupAccordion();
  setupAdvancedAccordion();
  setupAdvancedToggle();
  setupSearch();
  
  // 6. Bind Global Form States and Events
  setupCheckboxEvents(container, selectedSymptoms, symptomCounter);

  requestAnimationFrame(() => {
    setupSymptomInfoModal();
  });

  setupLiveInputs(selectedSymptoms, symptomCounter);

  // 7. Fire Up First UI Paint Engine
  initializeUI(selectedSymptoms, symptomCounter);
}

// ==========================================================================
// GENERATE UI DATA OBJECT DISTRIBUTOR
// ==========================================================================
function generateUIData() {
  generateSymptoms();
  const autoSymptoms = generateSectionItems("symptoms");

  return {
    examItems: generateSectionItems("physical_exam"),
    testItems: generateSectionItems("tests"),
    redFlagItems: generateSectionItems("red_flags"),
    categories: buildCategoryMap(autoSymptoms)
  };
}

// ==========================================================================
// GET SELECTED SYMPTOMS DATA FROM CHECKBOXES & INPUTS
// ==========================================================================
export function getSelectedSymptoms() {
  const data = {};
  const checkboxes = document.querySelectorAll('.symptom-ui input[type="checkbox"]');

  checkboxes.forEach(box => {
    if (box.checked) {
      const symptom = box.value.trim();
      
      // Map direct absolute key state
      data[symptom] = true;

      // Extract and map corresponding canonical key form
      const canonical = getCanonicalSymptom(symptom);
      data[canonical] = true;
    }
  });

  // Extract Age Property Context
  const ageValue = document.getElementById("userAge")?.value;
  if (ageValue) {
    data.age = Number(ageValue);
  }

  // Extract Gender Property Context
  const gender = document.getElementById("userGender")?.value;
  if (gender) {
    data.gender = gender;
  }

  // Extract Duration Context Value
  const durationValue = document.getElementById("symptomDuration")?.value;
  if (durationValue) {
    data.duration = Number(durationValue);
  }

  console.log("FINAL GENERATED USER DATA:", data);
  return data;
}
