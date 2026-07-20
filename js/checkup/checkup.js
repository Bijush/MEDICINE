import { ALL_DISEASES } from "./register/dataRegistry.js";
import { renderSymptomInputUI, getSelectedSymptoms } from "./symptomInputUI.js";
import { renderCheckupResults } from "./checkupRender.js";
import { renderEmergencyBanner } from "./emergencyBanner.js";
import { renderMultipleConfidenceBars } from "./confidenceBar.js";
import { diagnosePatient } from "./masterDiagnosisEngine.js";
import { getFollowupQuestions } from "./followupEngine.js";
import { renderLiveFollowupQuestions } from "./renderFollowupQuestions.js";

export let CURRENT_LANG = "bn";

// ==========================================================================
// INIT FUNCTION
// ==========================================================================
function initCheckup() {
  
  
  
  // 1. Render Dynamic Symptoms & setup tabs automatically
  renderSymptomInputUI();

  // 2. Setup Core Diagnose Button
  const diagnoseBtn = document.getElementById("diagnoseBtn");
  if (!diagnoseBtn) return;

  diagnoseBtn.addEventListener("click", () => {
  diagnoseBtn.disabled = true;
  diagnoseBtn.innerHTML = "Analyzing...";

  const dropdown = document.getElementById("diseaseDropdown");
  const selectedIndex = dropdown ? dropdown.value : "";

  // ===================================================
  // DISEASE MODE
  // ===================================================
  if (selectedIndex !== "") {

    const disease = ALL_DISEASES[selectedIndex];

    const matchedSymptoms = Object.keys(disease.symptoms || {})
  .filter(key => disease.symptoms[key]?.present);

const matchedTests = Object.keys(disease.tests || {})
  .filter(key => disease.tests[key]?.present);

const matchedRedFlags = Object.keys(disease.red_flags || {})
  .filter(key => disease.red_flags[key]?.present);

const diseaseResult = {
  ...disease,

  disease: disease.disease,
  category: disease.category,

  confidence: 100,
  confidenceLabel: "Confirmed",

  severity: disease.severity || "moderate",

  matchCount: matchedSymptoms.length,

  matchedSymptoms,
  matchedTests,
  matchedRedFlags,

  reason: "Disease selected manually.",

  medicines: disease.medicines || {},
  homeopathic_medicines: disease.homeopathic_medicines || [],
  ayurvedic_medicines: disease.ayurvedic_medicines || {},

  emergency: disease.emergency || false
};

const result = {
  topMatch: diseaseResult,
  allResults: [diseaseResult],
  overallSeverity: diseaseResult.severity,
  emergencyDetected: diseaseResult.emergency,
  followupQuestions: [],
  mlResults: []
};

    renderEmergencyBanner(result);
    renderCheckupResults(result);
    renderMultipleConfidenceBars(result.allResults);
    setTimeout(() => {
  document.getElementById("diagnosisResults")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}, 100);

    diagnoseBtn.disabled = false;
    diagnoseBtn.innerHTML = "🔍 Diagnose";
    return;
  }

  // ===================================================
  // SYMPTOM MODE
  // ===================================================
  const userData = getSelectedSymptoms();
  window.currentUserSymptoms = { ...userData };

  if (Object.keys(userData).length === 0) {
    alert("Please select at least one symptom.");
    diagnoseBtn.disabled = false;
    diagnoseBtn.innerHTML = "🔍 Diagnose";
    return;
  }

  const result = diagnosePatient(userData);

  window.latestDiagnosisResult = result;

  const followupQuestions = getFollowupQuestions(
    userData,
    result.allResults.map(x => x.disease)
  );

  result.followupQuestions = followupQuestions;
  window.generatedFollowups = followupQuestions;

  renderLiveFollowupQuestions();

  result.mlResults = [];

  renderEmergencyBanner(result);
  renderCheckupResults(result);
  renderMultipleConfidenceBars(result.allResults);
setTimeout(() => {
  document.getElementById("diagnosisResults")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}, 100);

  diagnoseBtn.disabled = false;
  diagnoseBtn.innerHTML = "🔍 Diagnose";
});
  
  

function loadDiseaseDropdown() {
  const dropdown = document.getElementById("diseaseDropdown");
  if (!dropdown) return;

  dropdown.innerHTML =
    `<option value="">-- Choose a Disease --</option>`;

  ALL_DISEASES.forEach((disease, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = disease.disease;
    dropdown.appendChild(option);
  });

  dropdown.addEventListener("change", e => {
    const disease = ALL_DISEASES[e.target.value];
    if (!disease) return;

    console.log(disease);
    // এখানে আপনার render function কল করবেন
    // renderDiseaseDetails(disease);
  });
}

loadDiseaseDropdown();
  
}

// ==========================================================================
// FOLLOWUP REDIAGNOSIS EVENT
// ==========================================================================
document.addEventListener("followupUpdated", event => {
  const updatedSymptoms = {
    ...window.currentUserSymptoms,
    ...event.detail
  };

  renderLiveFollowupQuestions();
  const result = diagnosePatient(updatedSymptoms);
  const followupQuestions = getFollowupQuestions(
    updatedSymptoms,
    result.allResults.map(item => item.disease)
  );

  result.followupQuestions = followupQuestions;
  window.generatedFollowups = followupQuestions;
  renderLiveFollowupQuestions();

  result.mlResults = [];
  window.currentUserSymptoms = updatedSymptoms;

  renderEmergencyBanner(result);
  renderCheckupResults(result);
  renderMultipleConfidenceBars(result.allResults || []);
});

document.addEventListener("DOMContentLoaded", initCheckup);

// ==========================================================================
// BACK TO TOP CONTROLLER
// ==========================================================================
const backBtn = document.getElementById("backToTopBtn");
if (backBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) backBtn.classList.add("show");
    else backBtn.classList.remove("show");
  });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
