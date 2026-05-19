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


// ==============================
// ALL SYMPTOMS
// ==============================

export const ALL_SYMPTOMS = [

  // ==========================
  // GENERAL FEVER
  // ==========================

  "fever",
  "high_fever",
  "mild_fever",
  "prolonged_fever",
  "intermittent_fever",
  "sudden_fever",
  "evening_fever",
  "step_ladder_fever",
  "cyclical_fever",

  "chills",
  "rigor",
  "sweating",
  "night_sweats",

  "body_ache",
  "muscle_pain",
  "joint_pain",

  "fatigue",
  "weakness",

  "headache",
  "severe_headache",

  "pain_behind_eyes",

  "skin_rash",

  // ==========================
  // RESPIRATORY
  // ==========================

  "cough",
  "dry_cough",
  "wet_cough",
  "mild_cough",
  "chronic_cough",
  "night_cough",
  "cough_more_than_2_weeks",

  "sputum",
  "yellow_sputum",
  "blood_in_sputum",
  "massive_blood_in_sputum",

  "breathing_difficulty",
  "severe_breathlessness",

  "wheezing",

  "chest_pain",
  "pleuritic_chest_pain",
  "chest_tightness",
  "chest_pressure",
  "chest_discomfort",

  "runny_nose",
  "nasal_congestion",
  "sinus_pressure",

  "sneezing",
  "sore_throat",

  "loss_of_smell",
  "loss_of_taste",

  "facial_pain",
  "post_nasal_drip",
  "thick_nasal_mucus",

  "bad_breath",

  "exercise_intolerance",
  "recurrent_chest_infection",
  "recurrent_breathing_problem",

  // ==========================
  // RESPIRATORY EXAM
  // ==========================

  "lung_crackles",
  "wheeze_on_auscultation",
  "ronchi_sound",

  "rapid_breathing",
  "prolonged_expiration",

  "barrel_chest",

  "low_spo2",
  "mild_low_spo2",

  "fever_present",

  // ==========================
  // RESPIRATORY TESTS
  // ==========================

  "spirometry_abnormal",
  "spirometry_obstructive_pattern",

  "peak_flow_low",

  "eosinophils_high",

  "allergy_test_positive",

  "chest_xray_infiltrate",
  "chest_xray_hyperinflation",
  "chest_xray_bronchial_thickening",

  "ct_lung_infection",
  "ct_emphysema",

  "abg_abnormal",

  "procalcitonin_high",
  "crp_high",
  "wbc_high",

  // ==========================
  // STOMACH
  // ==========================

  "abdominal_pain",
  "severe_abdominal_pain",
  "stomach_pain",

  "upper_abdominal_pain",
  "severe_upper_abdominal_pain",

  "abdominal_cramp",

  "vomiting",
  "persistent_vomiting",

  "vomiting_blood",
  "blood_in_vomit",

  "nausea",

  "diarrhea",
  "bloody_diarrhea",

  "constipation",

  "bloating",
  "abdominal_bloating",
  "abdominal_distension",

  "acidity",
  "heartburn",
  "chest_burning",

  "burning_stomach_pain",

  "pain_after_food",
  "pain_radiating_to_back",

  "blood_in_stool",
  "black_stool",

  "loss_of_appetite",
  "appetite_loss",

  "difficulty_swallowing",

  "indigestion",
  "sour_belching",

  "mucus_in_stool",
  "relief_after_passing_stool",

  "urgency_to_pass_stool",
  "tenesmus",

  "inability_to_pass_stool",
  "inability_to_pass_gas",

  "early_satiety",

  "excessive_gas",

  // ==========================
  // STOMACH EXAM
  // ==========================

  "epigastric_tenderness",
  "abdominal_tenderness",

  "high_pitched_bowel_sound",
  "absent_bowel_sound",

  "guarding",

  "dehydration",

  "rapid_pulse",

  "dry_mouth",
  "sunken_eyes",

  "low_blood_pressure",

  "abdominal_mass",

  // ==========================
  // LIVER
  // ==========================

  "yellow_skin",
  "yellow_eyes",
  "jaundice",

  "dark_urine",

  "itching",

  "weight_loss",
  "severe_weight_loss",
  "unexplained_weight_loss",

  "abdominal_swelling",

  "enlarged_spleen",

  // ==========================
  // FEVER SPECIAL SIGNS
  // ==========================

  "platelet_low",

  "bleeding_gums",

  "rose_spots",

  "coated_tongue",

  "relative_bradycardia",

  // ==========================
  // RISK FACTORS
  // ==========================

  "smoking",
  "long_term_smoking",

  "alcohol_use",

  "dust_exposure",
  "pollution_exposure",

  "allergy_history",

  "family_history",

  "viral_infection",
  "bacterial_infection",

  "low_immunity",

  "cold_weather_exposure",
  "cold_weather_trigger",

  "infected_person_contact",

  "elderly_age",
  "old_age",

  "nasal_polyp",

  "stress",
  "anxiety",

  "spicy_food",

  "late_night_meals",

  "contaminated_food",
  "contaminated_water",

  "h_pylori_infection",

  "travel_history",

  "seasonal_outbreak",

  "mosquito_bite",

  "rainy_season_exposure",

  "stagnant_water_exposure",

  "poor_sanitation",

  // ==========================
  // COMPLICATIONS
  // ==========================

  "respiratory_failure",

  "pulmonary_hypertension",

  "pleural_effusion",

  "lung_abscess",

  "orbital_infection",

  "sepsis",

  // ==========================
  // EMERGENCY
  // ==========================

  "spo2_below_90",

  "shock",

  "unconsciousness",

  "cyanosis",

  "inability_to_speak",

  "massive_bleeding"
];

// ==============================
// INIT
// ==============================

function initCheckup() {

  // ==========================
  // RENDER SYMPTOM UI
  // ==========================

  renderSymptomInputUI(
    ALL_SYMPTOMS
  );

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
          "Start AI Diagnosis";

        return;
      }

// ======================
// AI DIAGNOSIS
// ======================

const result =
  diagnosePatient(
    userData
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

// button reset

diagnoseBtn.disabled = false;

diagnoseBtn.innerHTML =
  "Start AI Diagnosis";

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

      ...getSelectedSymptoms(),

      ...event.detail
    };

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