


// ==============================
// CHECKUP MAIN
// ==============================

import {
  renderSymptomInputUI,
  getSelectedSymptoms
} from "./symptomInputUI.js";

import {
  renderCheckupResults
} from "./checkupRender.js";

import {
  renderEmergencyBanner
} from "./emergencyBanner.js";

import {
  renderMultipleConfidenceBars
} from "./confidenceBar.js";

import {
  diagnosePatient
} from "./masterDiagnosisEngine.js";

import {
  getFollowupQuestions
} from "./followupEngine.js";

import {
  renderLiveFollowupQuestions
}
from "./renderFollowupQuestions.js";



// ==============================
// CURRENT LANGUAGE
// ==============================

export let CURRENT_LANG =
  "bn";
// ==============================
// INIT
// ==============================

function initCheckup() {

//generateSymptomIntelligence();
// ==========================
// RENDER SYMPTOM UI
// ==========================

renderSymptomInputUI();
  // ==========================
  // BUTTON
  // ==========================

  const diagnoseBtn =

    document.getElementById(
      "diagnoseBtn"
    );

  if (!diagnoseBtn) return;

  // ==========================
  // CLICK EVENT
  // ==========================

  diagnoseBtn.addEventListener(

    "click",

    () => {

      // ======================
      // BUTTON LOADING
      // ======================

      diagnoseBtn.disabled = true;

      diagnoseBtn.innerHTML =
        "Analyzing Symptoms...";

      // ======================
      // USER DATA
      // ======================

      const userData =

        getSelectedSymptoms();
        
        // ======================
// SAVE INITIAL SYMPTOMS
// ======================

window.currentUserSymptoms = {
  ...userData
};

      console.log(
        "Symptoms:",
        userData
      );

      // ======================
      // EMPTY CHECK
      // ======================

      if (

        Object.keys(userData)
          .length === 0

      ) {

        alert(
          "Please select at least one symptom"
        );

        diagnoseBtn.disabled = false;

        diagnoseBtn.innerHTML =
          " 🔍 Diagnose";

        return;
      }

// ======================
// AI DIAGNOSIS
// ======================

const result =
  diagnosePatient(
    userData
  );
window.latestDiagnosisResult =
  result;

console.log(
  "LATEST RESULT",
  result
);
// ======================
// FOLLOWUP QUESTIONS
// ======================

const followupQuestions =

  getFollowupQuestions(

    userData,

    result.allResults
      .map(
        item => item.disease
      )
  );

console.log(
  "Followup Questions:",
  followupQuestions
);
result.followupQuestions =
  followupQuestions;
window.generatedFollowups =
  followupQuestions;
renderLiveFollowupQuestions();

// temporary empty ML results

result.mlResults = [];

// emergency UI

renderEmergencyBanner(
  result
);



// diagnosis UI

renderCheckupResults(
  result
);

// confidence bars

renderMultipleConfidenceBars(
  result.allResults || []
);


setTimeout(() => {

  document
    .getElementById(
      "diagnosisResults"
    )
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

}, 200);
// button reset

diagnoseBtn.disabled = false;

diagnoseBtn.innerHTML =
  "    🔍 Diagnose";

  } // click function end

); // event listener end

} // initCheckup end
// ==============================
// START
// ==============================

// ==============================
// FOLLOWUP REDIAGNOSIS
// ==============================

document.addEventListener(

  "followupUpdated",

  event => {

    console.log(
      "Followup Event:",
      event.detail
    );

    // ==========================
    // MERGE ORIGINAL + FOLLOWUP
    // ==========================

    const updatedSymptoms = {

  ...window.currentUserSymptoms,

  ...event.detail
};

renderLiveFollowupQuestions();

    // ==========================
    // REDIAGNOSIS
    // ==========================

    const result =

      diagnosePatient(
        updatedSymptoms
      );

    // ==========================
    // FOLLOWUP QUESTIONS
    // ==========================

    const followupQuestions =

      getFollowupQuestions(

        updatedSymptoms,

        result.allResults.map(
          item => item.disease
        )
      );

    result.followupQuestions =
      followupQuestions;
    window.generatedFollowups =
  followupQuestions;
renderLiveFollowupQuestions();

    // ==========================
    // EMPTY ML
    // ==========================

    result.mlResults = [];

    // ==========================
    // SAVE GLOBAL
    // ==========================

    window.currentUserSymptoms =
      updatedSymptoms;

    // ==========================
    // RERENDER
    // ==========================

    renderEmergencyBanner(
      result
    );

    renderCheckupResults(
      result
    );

    renderMultipleConfidenceBars(
      result.allResults || []
    );
    
    
  }
);

document.addEventListener(

  "DOMContentLoaded",

  initCheckup
);
// ==============================
// BACK TO TOP
// ==============================

const backBtn =
document.getElementById(
  "backToTopBtn"
);

if (backBtn) {

  window.addEventListener(
    "scroll",
    () => {

      if (
        window.scrollY > 400
      ) {

        backBtn.classList.add(
          "show"
        );

      } else {

        backBtn.classList.remove(
          "show"
        );

      }

    }
  );

  backBtn.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );
}