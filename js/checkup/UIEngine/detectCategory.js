import { ALL_DISEASES }
from "../register/dataRegistry.js";

// ==============================
// AUTO CATEGORY MAP
// ==============================

const AUTO_CATEGORY_MAP = {};

// ==============================
// BUILD CATEGORY MAP
// ==============================

ALL_DISEASES.forEach(
  disease => {

    // ==========================
    // DEFAULT DISEASE CATEGORY
    // ==========================

    const diseaseCategory =

      disease.category ||
      "Other";

    // ==========================
    // LOOP SYMPTOMS
    // ==========================

    Object.entries(

      disease.symptoms || {}

    )

    .forEach(

      ([symptom, data]) => {

        // ========================
        // ONLY POSITIVE SYMPTOMS
        // ========================

        if (
          data?.present !== true
        ) {

          return;
        }

        // ========================
        // NORMALIZE
        // ========================

        const normalizedSymptom =

          symptom
          .toLowerCase()
          .trim();

        // ========================
        // CATEGORY
        // ========================

        const finalCategory =

          data?.category ||

          diseaseCategory ||

          "Other";

        // ========================
        // CREATE SET
        // ========================

        AUTO_CATEGORY_MAP[
          normalizedSymptom
        ] ??= new Set();

        // ========================
        // STORE CATEGORY
        // ========================

        AUTO_CATEGORY_MAP[
          normalizedSymptom
        ]

        .add(
          finalCategory
        );

      }

    );

  }

);

// ==============================
// DETECT CATEGORY
// ==============================

export function detectCategory(
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

    return "Other";

  }

  // ==========================
  // NORMALIZE
  // ==========================

  const normalized =

    symptom
    .toLowerCase()
    .trim();

  // ==========================
  // LOOKUP
  // ==========================

  const categories =

    AUTO_CATEGORY_MAP[
      normalized
    ];

  // ==========================
  // NOT FOUND
  // ==========================

  if (

    !categories ||

    categories.size === 0

  ) {

    return "Other";

  }

  // ==========================
  // RETURN LAST CATEGORY
  // ==========================

  return Array.from(
    categories
  ).at(-1);

}

// ==============================
// EXPORT CATEGORY MAP
// ==============================

export function buildAutoCategoryMap() {

  return AUTO_CATEGORY_MAP;

}