// ==============================
// AUTO SYMPTOM INPUT UI
// ADVANCED DYNAMIC VERSION
// ACCURATE + CLEAN + SCALABLE
// ==============================

import {
  ALL_DISEASES
}
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

  t

}

from "./translations/translate.js";

import {

  CURRENT_LANG

}

from "./checkup.js";

// ==============================
// AUTO FILTER RULES
// REMOVE MEDICAL/LAB TERMS
// ==============================

const BLOCKED_PATTERNS = [

  // tests

  "positive",
  "negative",
  "high",
  "low",
  "abnormal",

  // scan / imaging

  "xray",
  "ct",
  "mri",
  "ultrasound",
  "scan",
  "biopsy",
  "endoscopy",
  "colonoscopy",
  "fibroscan",
  "ecg",
  "echo",

  // doctor-only

  "syndrome",
  "disease",
  "failure",
  "injury",
  "fibrosis",
  "necrosis",
  "obstruction",
  "encephalopathy",
  "hypertension",

  // physical exam

  "tenderness",
  "guarding",
  "distension",
  "hepatomegaly",
  "splenomegaly",
  "auscultation",
  "rebound",
  "rigid",

  // lab markers

  "bilirubin",
  "platelet",
  "enzyme",
  "protein",
  "marker",

  // complications

  "shock",
  "coma",
  "sepsis",

  // exposure/history

  "history",
  "exposure",
  "contact",

  // difficult terms

  "ascites",
  "edema",
  "varices",
  "portal_vein"
];

// ==============================
// CHECK USER-FRIENDLY SYMPTOM
// ==============================

function isUserFriendlySymptom(
  symptom
) {

  const lower =
    symptom.toLowerCase();

  // blocked patterns

  const blocked =
    BLOCKED_PATTERNS.some(
      pattern =>
        lower.includes(
          pattern
        )
    );

  if (blocked)
    return false;

  // too technical

  if (
    symptom.length > 40
  ) {

    return false;
  }

  // valid format

  return /^[a-z0-9_]+$/.test(
    symptom
  );
}

// ==============================
// GENERATE SECTION ITEMS
// ==============================

function generateSectionItems(
  sectionKey
) {

  const itemSet =
    new Set();

  ALL_DISEASES.forEach(
    disease => {

      Object.keys(

        disease[
          sectionKey
        ] || {}

      ).forEach(item => {

        // ====================
        // FILTER ONLY
        // NORMAL SYMPTOMS
        // ====================

        if (

          sectionKey ===
          "symptoms"

        ) {

          if (

            !isUserFriendlySymptom(
              item
            )

          ) {

            return;
          }
        }

        itemSet.add(item);
      });
    }
  );

  return Array.from(
    itemSet
  )

  .sort(

    (a, b) =>

      a.localeCompare(b)
  );
}

// ==============================
// AUTO CATEGORY DETECTION
// ==============================

function detectCategory(
  symptom
) {

  const lower =
    symptom.toLowerCase();

  // ==========================
  // EMERGENCY
  // MUST STAY FIRST
  // ==========================

  if (

    lower.includes("blood") ||
    lower.includes("bleeding") ||
    lower.includes("vomiting_blood") ||
    lower.includes("black_stool") ||
    lower.includes("bloody") ||
    lower.includes("severe_pain") ||
    lower.includes("chest_pain") ||
    lower.includes("collapse") ||
    lower.includes("unconscious") ||
    lower.includes("seizure")

  ) {

    return "Emergency";
  }

  // ==========================
  // RESPIRATORY
  // ==========================

  if (

    lower.includes("cough") ||
    lower.includes("sputum") ||
    lower.includes("breath") ||
    lower.includes("wheez") ||
    lower.includes("nose") ||
    lower.includes("throat") ||
    lower.includes("sinus") ||
    lower.includes("chest") ||
    lower.includes("lung") ||
    lower.includes("asthma") ||
    lower.includes("sneezing")

  ) {

    return "Respiratory";
  }

  // ==========================
  // STOMACH / DIGESTIVE
  // ==========================

  if (

    lower.includes("abdominal") ||
    lower.includes("stomach") ||
    lower.includes("vomit") ||
    lower.includes("nausea") ||
    lower.includes("diarrhea") ||
    lower.includes("constipation") ||
    lower.includes("stool") ||
    lower.includes("heartburn") ||
    lower.includes("acidity") ||
    lower.includes("bloating") ||
    lower.includes("appetite") ||
    lower.includes("gas") ||
    lower.includes("indigestion") ||
    lower.includes("reflux") ||
    lower.includes("cramp") ||
    lower.includes("bowel") ||
    lower.includes("belching")

  ) {

    return "Stomach";
  }

  // ==========================
  // LIVER
  // ==========================

  if (

    lower.includes("jaundice") ||
    lower.includes("yellow") ||
    lower.includes("urine") ||
    lower.includes("itching") ||
    lower.includes("liver")

  ) {

    return "Liver";
  }

  // ==========================
  // HEART
  // ==========================

  if (

    lower.includes("heart") ||
    lower.includes("palpitation") ||
    lower.includes("pressure") ||
    lower.includes("left_arm") ||
    lower.includes("pulse") ||
    lower.includes("pressure")

  ) {

    return "Heart";
  }

  // ==========================
  // GENERAL FEVER / INFECTION
  // ==========================

  if (

    lower.includes("fever") ||
    lower.includes("chills") ||
    lower.includes("sweating") ||
    lower.includes("fatigue") ||
    lower.includes("weakness") ||
    lower.includes("headache") ||
    lower.includes("body_ache") ||
    lower.includes("muscle_pain") ||
    lower.includes("joint_pain") ||
    lower.includes("rigor") ||
    lower.includes("infection")

  ) {

    return "General Fever";
  }

  // ==========================
  // NEUROLOGICAL
  // ==========================

  if (

    lower.includes("dizziness") ||
    lower.includes("head_spin") ||
    lower.includes("faint") ||
    lower.includes("seizure") ||
    lower.includes("confusion") ||
    lower.includes("memory") ||
    lower.includes("tingling") ||
    lower.includes("numbness")

  ) {

    return "Neurological";
  }

  // ==========================
  // SKIN
  // ==========================

  if (

    lower.includes("rash") ||
    lower.includes("skin") ||
    lower.includes("itch") ||
    lower.includes("blister") ||
    lower.includes("redness")

  ) {

    return "Skin";
  }

  // ==========================
  // URINARY
  // ==========================

  if (

    lower.includes("urine") ||
    lower.includes("urinary") ||
    lower.includes("burning_urination") ||
    lower.includes("frequent_urination")

  ) {

    return "Urinary";
  }

  // ==========================
  // DEFAULT
  // ==========================

  return "Other";
}

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

  const autoSymptoms =
  generateSectionItems(
    "symptoms"
  );

const examItems =
  generateSectionItems(
    "physical_exam"
  );

const testItems =
  generateSectionItems(
    "tests"
  );

const redFlagItems =
  generateSectionItems(
    "red_flags"
  );

const categories =
  buildCategoryMap(
    autoSymptoms
  );
  

  // ==========================
  // HTML
  // ==========================

  container.innerHTML = `

    <div class="symptom-ui">

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

        ${Object.entries(
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

                  <label>

                    <input
                      type="checkbox"
                      value="${symptom}"
                    />

<span>

  ${t(symptom, "en")}

(

${t(symptom, "bn")}

)

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

<!-- ADVANCED MEDICAL -->

<div class="advanced-medical-wrapper">

<button
  id="toggleMedicalInputs"
  class="advanced-toggle"
  type="button"
>

  Advanced Medical Inputs

</button>

<div
  id="advancedMedicalInputs"
  class="advanced-medical-inputs"
  style="display:none;"
>



<!-- ADVANCED EXAM -->

<div class="
  symptom-category
">

<div class="
  symptom-category-title
">

Physical Examination

(
  ${examItems.length}
)

</div>

<div class="
  symptom-category-items
">

${examItems.map(

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

        ${t(symptom, "en")}

        (

        ${t(symptom, "bn")}

        )

      </span>

    </label>

  </div>
  `
)

.join("")}

</div>

</div>

<!-- TESTS -->

<div class="
  symptom-category
">

<div class="
  symptom-category-title
">

Lab Tests

(
  ${testItems.length}
)

</div>

<div class="
  symptom-category-items
">

${testItems.map(

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

        ${t(symptom, "en")}

        (

        ${t(symptom, "bn")}

        )

      </span>

    </label>

  </div>
  `
)

.join("")}

</div>

</div>

<!-- RED FLAGS -->

<div class="
  symptom-category
">

<div class="
  symptom-category-title
">

Emergency Signs

(
  ${redFlagItems.length}
)

</div>

<div class="
  symptom-category-items
">

${redFlagItems.map(

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

        ${t(symptom, "en")}

        (

        ${t(symptom, "bn")}

        )

      </span>

    </label>

  </div>
  `
)

.join("")}

</div>

</div>

</div>

</div>
</div>
<!-- EXTRA INPUTS -->

    <div class="
      extra-inputs
    ">
   <input
    type="text"
    id="patientName"
    placeholder="Patient Name"
  />
      <input
        type="number"
        id="userAge"
        placeholder="Age"
      />

      <select
        id="userGender"
      >

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
// ADVANCED TOGGLE
// ==========================

const toggleMedicalBtn =

  document.getElementById(
    "toggleMedicalInputs"
  );

const advancedMedicalInputs =

  document.getElementById(
    "advancedMedicalInputs"
  );

if (

  toggleMedicalBtn &&

  advancedMedicalInputs

) {

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

      items.forEach(
        item => {

          const symptom =

            item.dataset.symptom
            .toLowerCase();

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

  // ==========================
  // CHECKBOX
  // ==========================

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



// ==========================
// LIVE EXTRA INPUT UPDATE
// ==========================

const liveInputs = [

  "userAge",
  "userGender",
  "symptomDuration"

];

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

      advancedMedicalInputs.style.display =
        "block";

      toggleMedicalBtn.textContent =
        "Hide Advanced Medical Inputs";

      // ====================
      // UPDATE SELECTED UI
      // ====================

      updateSelectedSymptoms(

        selectedSymptoms,

        symptomCounter
      );

      // ====================
      // LIVE FOLLOWUP
      // ====================

      requestAnimationFrame(
        () => {

          renderLiveFollowupQuestions();
        }
      );
    }
  );
});

  // INIT

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

// ==============================
// FORMAT TEXT
// ==============================

function formatText(
  text = ""
) {

  return text

    .replace(
      /_/g,
      " "
    )

    .replace(
      /\b\w/g,
      l => l.toUpperCase()
    );
}