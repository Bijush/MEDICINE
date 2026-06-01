
import {
  ALL_DISEASES
}
from "../register/dataRegistry.js";

import {
  CURRENT_LANG
}
from "../checkup.js";

import {
  t
}
from "../translations/translate.js";



// ==============================
// EXACT BLOCKED WORDS
// ==============================

const BLOCKED_WORDS =
new Set([

  // tests

  "positive",
  "negative",
  "high",
  "low",
  "abnormal",

  // imaging

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

  // history

  "history",
  "exposure",
  "contact",

  // difficult

  "ascites",
  "edema",
  "varices",
  "portal_vein"

]);

// ==============================
// PARTIAL BLOCK PATTERNS
// ==============================

const BLOCKED_PARTIALS = [

  "_test",
  "_scan",
  "_exam",
  "_level",
  "_grade",
  "_stage"

];

// ==============================
// VALID SYMPTOM CACHE
// ==============================

const VALID_SYMPTOMS =
new Set();

ALL_DISEASES.forEach(
  disease => {

    Object.keys(

      disease.symptoms || {}

    )

    .forEach(symptom => {

      VALID_SYMPTOMS.add(
        symptom
      );
    });
  }
);

// ==============================
// USER FRIENDLY CHECK
// ==============================

export function isUserFriendlySymptom(
  symptom
) {

  // ==========================
  // INVALID
  // ==========================

  if (

    !symptom ||

    typeof symptom !==
    "string"

  ) {

    return false;
  }

  const lower =
    symptom
    .toLowerCase()
    .trim();

  // ==========================
  // LENGTH
  // ==========================

  if (
    lower.length > 40
  ) {

    return false;
  }

  // ==========================
  // FORMAT
  // ==========================

  const validFormat =

    /^[a-z0-9_]+$/.test(
      lower
    );

  if (!validFormat)
    return false;

  // ==========================
  // EXACT BLOCK
  // ==========================

  if (

    BLOCKED_WORDS.has(
      lower
    )

  ) {

    return false;
  }

  // ==========================
  // PARTIAL BLOCK
  // ==========================

  const partialBlocked =

    BLOCKED_PARTIALS.some(
      pattern =>

        lower.includes(
          pattern
        )
    );

  if (partialBlocked)
    return false;

  // ==========================
  // DATASET EXISTS
  // ==========================

  return VALID_SYMPTOMS.has(
    symptom
  );
}

// ==============================
// GENERATE SECTION ITEMS
// ==============================

export function generateSectionItems(
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
// RENDER BILINGUAL LABEL
// ==============================

export function renderSymptomLabel(
  symptom
) {

  // ==========================
  // BILINGUAL MODE
  // ==========================

  if (
    CURRENT_LANG === "bn"
  ) {

    return `

      ${t(symptom, "en")}

      (

      ${t(symptom, "bn")}

      )

    `;
  }

  // ==========================
  // ENGLISH ONLY
  // ==========================

  return t(symptom, "en");
}

// ==============================
// FORMAT TEXT
// ==============================

export function formatText(
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



