import { ALL_DISEASES }
from "../register/dataRegistry.js";

// ==============================
// AUTO CATEGORY MAP
// ==============================

const AUTO_CATEGORY_MAP = {};

// ==============================
// BUILD CATEGORY MAP
// ==============================

ALL_DISEASES.forEach(disease => {

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

  .forEach(([symptom, data]) => {

    // ========================
    // NORMALIZE
    // ========================

    const normalizedSymptom =

      symptom
      .toLowerCase()
      .trim();

    // ========================
    // PRIORITY
    // symptom.category
    // disease.category
    // Other
    // ========================

    const finalCategory =

      data?.category ||

      diseaseCategory ||

      "Other";

    // ========================
    // DIRECT OVERRIDE
    // ========================

    AUTO_CATEGORY_MAP[
      normalizedSymptom
    ] = finalCategory;

  });

});

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

  const category =

    AUTO_CATEGORY_MAP[
      normalized
    ];

  // ==========================
  // NOT FOUND
  // ==========================

  if (!category) {

    return "Other";
  }

  // ==========================
  // RETURN
  // ==========================

  return category;

}

// ==============================
// EXPORT CATEGORY MAP
// ==============================

export function buildAutoCategoryMap() {

  return AUTO_CATEGORY_MAP;

}