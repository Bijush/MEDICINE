// ==============================
// AUTO FOLLOWUP ENGINE
// ==============================

import {
  getSelectedSymptoms
} from "./symptomInputUI.js";


// ==============================
// SYMPTOM ALIAS
// ==============================

const SYMPTOM_ALIAS = {

  night_sweats:
    "sweating",

  smoking:
    "chronic_cough",

  dry_cough:
    "dry_cough",

  yellow_sputum:
    "yellow_sputum",

  blood_in_sputum:
    "blood_in_sputum",

  chest_tightness:
    "chest_tightness",

  wheezing:
    "wheezing",

  vomiting_blood:
    "vomiting_blood",

  body_ache:
    "body_ache",

  bloating:
    "bloating",

  diarrhea:
    "diarrhea",

  chills:
    "chills"
};


// ==============================
// QUESTION MAP
// ==============================



const FOLLOWUP_MAP = {

  fever: [

    {
      label:
        "Chills?",

      symptom:
        "chills"
    },

    {
      label:
        "Body ache?",

      symptom:
        "body_ache"
    },

    {
      label:
        "Night sweating?",

      symptom:
        "night_sweats"
    }
  ],

  cough: [

    {
      label:
        "Dry cough?",

      symptom:
        "dry_cough"
    },

    {
      label:
        "Yellow sputum?",

      symptom:
        "yellow_sputum"
    },

    {
      label:
        "Blood in sputum?",

      symptom:
        "blood_in_sputum"
    }
  ],

  breathing_difficulty: [

    {
      label:
        "Wheezing?",

      symptom:
        "wheezing"
    },

    {
      label:
        "Chest tightness?",

      symptom:
        "chest_tightness"
    },

    {
      label:
        "Smoking history?",

      symptom:
        "smoking"
    }
  ],

  abdominal_pain: [

    {
      label:
        "Diarrhea?",

      symptom:
        "diarrhea"
    },

    {
      label:
        "Vomiting blood?",

      symptom:
        "vomiting_blood"
    },

    {
      label:
        "Bloating?",

      symptom:
        "bloating"
    }
  ]
};

// ==============================
// MAIN
// ==============================

export function renderLiveFollowupQuestions() {

  const container =

    document.getElementById(
      "liveFollowupQuestions"
    );

  if (!container) return;

  const selected =
    getSelectedSymptoms();

  let html = "";

  // ==========================
  // LOOP SELECTED SYMPTOMS
  // ==========================

  Object.keys(selected)

    .forEach(symptom => {

      const questions =

        FOLLOWUP_MAP[
          symptom
        ];

      if (!questions) return;

      html += `

        <div class="
          live-followup-card
        ">

          <div class="
            live-followup-title
          ">

            ${formatText(
              symptom
            )} Questions

          </div>

          ${questions.map(
            q => `

              <button
                class="
                  live-followup-item
                "

                data-symptom="
                  ${q.symptom}
                "
              >

                • ${q.label}

              </button>
            `
          ).join("")}

        </div>
      `;
    });

  container.innerHTML = html;

  attachFollowupEvents();
}

// ==============================
// EVENTS
// ==============================

function attachFollowupEvents() {

  const buttons =

    document.querySelectorAll(
      ".live-followup-item"
    );

  buttons.forEach(btn => {

    btn.addEventListener(

      "click",

      () => {

        const rawSymptom =

  btn.dataset.symptom
    ?.trim();

const symptom =

  SYMPTOM_ALIAS[
    rawSymptom
  ] || rawSymptom;

        if (!symptom) return;

        // ==================
        // FIND CHECKBOX
        // ==================

        const checkbox =

  document.querySelector(
    `#symptomList input[value="${CSS.escape(symptom)}"]`
  );

        if (!checkbox) return;

        // ==================
        // AUTO CHECK
        // ==================

        checkbox.checked =
  !checkbox.checked;

        // ==================
        // TRIGGER UPDATE
        // ==================
btn.classList.add(
  "followup-selected"
);
        checkbox.dispatchEvent(

  new Event(
    "change",
    {
      bubbles: true
    }
  )
);
      }
    );
  });
}

// ==============================
// FORMAT
// ==============================

function formatText(text = "") {

  return text

    .replace(/_/g, " ")

    .replace(
      /\b\w/g,
      l => l.toUpperCase()
    );
}