
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

export function isUserFriendlySymptom(
  symptom
) {

  // ==========================
  // INVALID
  // ==========================

  if (!symptom)
    return false;

  const lower =
    symptom.toLowerCase();

  // ==========================
  // BLOCKED PATTERNS
  // ==========================

  const blocked =
    BLOCKED_PATTERNS.some(
      pattern =>
        lower.includes(
          pattern
        )
    );

  if (blocked)
    return false;

  // ==========================
  // TOO LONG
  // ==========================

  if (
    symptom.length > 40
  ) {

    return false;
  }

  // ==========================
  // VALID FORMAT
  // ==========================

  const validFormat =

    /^[a-z0-9_]+$/.test(
      symptom
    );

  if (!validFormat)
    return false;

  // ==========================
  // DATASET CHECK
  // ==========================

  let exists = false;

  ALL_DISEASES.forEach(
    disease => {

      if (

        disease.symptoms?.[
          symptom
        ]

      ) {

        exists = true;
      }
    }
  );

  return exists;
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



