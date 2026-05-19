
import {
  renderLiveFollowupQuestions
} from "./renderFollowupQuestions.js";

// ==============================
// SYMPTOM INPUT UI
// ==============================

export function renderSymptomInputUI(

  symptoms = [],

  containerId = "symptomInput"

) {

  const container =

    document.getElementById(
      containerId
    );

  if (!container) return;

  // ==========================
  // CATEGORY GROUPING
  // ==========================

  const categories = {

    "General Fever": [
      "fever",
      "high_fever",
      "mild_fever",
      "prolonged_fever",
      "intermittent_fever",
      "sudden_fever",
      "evening_fever",
      "chills",
      "rigor",
      "sweating",
      "body_ache",
      "muscle_pain",
      "fatigue",
      "weakness",
      "headache"
    ],

    "Respiratory": [
      "cough",
      "dry_cough",
      "wet_cough",
      "mild_cough",
      "chronic_cough",
      "night_cough",
      "sputum",
      "yellow_sputum",
      "blood_in_sputum",
      "breathing_difficulty",
      "severe_breathlessness",
      "wheezing",
      "chest_pain",
      "chest_tightness",
      "chest_pressure",
      "runny_nose",
      "nasal_congestion",
      "sinus_pressure",
      "sneezing",
      "sore_throat",
      "facial_pain",
      "post_nasal_drip"
    ],

    "Stomach": [
      "abdominal_pain",
      "severe_abdominal_pain",
      "stomach_pain",
      "upper_abdominal_pain",
      "vomiting",
      "persistent_vomiting",
      "vomiting_blood",
      "nausea",
      "diarrhea",
      "bloody_diarrhea",
      "constipation",
      "bloating",
      "acidity",
      "heartburn",
      "burning_stomach_pain",
      "black_stool",
      "blood_in_stool",
      "loss_of_appetite",
      "difficulty_swallowing"
    ],

    "Liver": [
      "yellow_skin",
      "yellow_eyes",
      "jaundice",
      "dark_urine",
      "itching",
      "weight_loss",
      "severe_weight_loss",
      "abdominal_swelling"
    ],

    "Emergency": [
      "spo2_below_90",
      "shock",
      "unconsciousness",
      "cyanosis"
    ]
  };

  // ==========================
  // HTML
  // ==========================

  container.innerHTML = `

    <div class="symptom-ui">

      <!-- SEARCH -->

      <div class="symptom-search-wrap">

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

        Selected:
        0

      </div>

      <!-- SELECTED -->

      <div
        id="selectedSymptoms"
        class="selected-symptoms"
      ></div>
      <!-- LIVE FOLLOWUP -->

<div
  id="liveFollowupQuestions"
  class="
    live-followup-container
  "
></div>

      <!-- CATEGORY LIST -->

      <div
        id="symptomList"
        class="symptom-list"
      >

        ${Object.entries(categories)

          .map(

            ([category, items]) => `

            <div class="symptom-category">

              <div class="
                symptom-category-title
              ">

                ${category}

              </div>

              <div class="
                symptom-category-items
              ">

                ${items

                  .filter(
                    item =>
                      symptoms.includes(
                        item
                      )
                  )

                  .map(
                    symptom => `

                    <div
                      class="
                        symptom-item
                      "

                      data-symptom="
                        ${symptom}
                      "
                    >

                      <label>

                        <input
                          type="checkbox"
                          value="${symptom}"
                        />

                        <span>

                          ${formatText(
                            symptom
                          )}

                        </span>

                      </label>

                    </div>
                    `
                  )

                  .join("")}

              </div>

            </div>
            `
          )

          .join("")}

      </div>

    </div>
    
    <div class="extra-inputs">

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

  // ==========================
  // ELEMENTS
  // ==========================

  const searchInput =

    document.getElementById(
      "symptomSearch"
    );

  const symptomList =

    document.getElementById(
      "symptomList"
    );

  const selectedSymptoms =

    document.getElementById(
      "selectedSymptoms"
    );

  const symptomCounter =

    document.getElementById(
      "symptomCounter"
    );

  // ==========================
  // SEARCH
  // ==========================

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

      items.forEach(item => {

        const symptom =

          item.dataset.symptom
          .toLowerCase();

        item.style.display =

          symptom.includes(value)

            ? "flex"

            : "none";
      });
    }
  );

  // ==========================
  // CHECKBOX EVENT
  // ==========================

  symptomList.addEventListener(

    "change",

    () => {

      updateSelectedSymptoms(
        selectedSymptoms,
        symptomCounter
      );
      renderLiveFollowupQuestions();
    }
  );

  // ==========================
  // INIT
  // ==========================

updateSelectedSymptoms(
  selectedSymptoms,
  symptomCounter
);

renderLiveFollowupQuestions();
}

// ==============================
// GET SELECTED SYMPTOMS
// ==============================

export function getSelectedSymptoms() {

  const checkboxes =

    document.querySelectorAll(
      "#symptomList input:checked"
    );

  const data = {};

  checkboxes.forEach(box => {

    data[box.value] = true;
  });
  
  const ageValue =

  document.getElementById(
    "userAge"
  )?.value;

if (ageValue) {

  data.age =
    Number(ageValue);
}

data.gender =
  document.getElementById(
    "userGender"
  )?.value || "";
  
  const durationValue =

  document.getElementById(
    "symptomDuration"
  )?.value;

if (durationValue) {

  data.duration =
    Number(durationValue);
}

  return data;
}

// ==============================
// UPDATE SELECTED UI
// ==============================

function updateSelectedSymptoms(

  container,

  counter
) {

  const selected =

    document.querySelectorAll(
      "#symptomList input:checked"
    );

  // ==========================
  // COUNTER
  // ==========================

  if (counter) {

    counter.innerHTML = `

      Selected:
      ${selected.length}
    `;
  }

  // ==========================
  // EMPTY
  // ==========================

  if (!selected.length) {

    container.innerHTML = "";

    return;
  }

  // ==========================
  // CHIPS
  // ==========================

  container.innerHTML =

    Array.from(selected)

      .map(
        item => `

        <div class="
          selected-chip
        ">

          ✔
          ${formatText(
            item.value
          )}

        </div>
        `
      )

      .join("");
}



// ==============================
// FORMAT TEXT
// ==============================

function formatText(text = "") {

  return text

    .replace(/_/g, " ")

    .replace(
      /\b\w/g,
      l => l.toUpperCase()
    );
}