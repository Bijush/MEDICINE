// ==============================
// BUILD CATEGORY MAP
// PROFESSIONAL VERSION
// ==============================

import {
  detectCategory,
  buildAutoCategoryMap
}
from "./detectCategory.js";

import {
  ALL_DISEASES
}
from "../register/dataRegistry.js";

// ==============================
// BUILD CATEGORY MAP
// ==============================

export function buildCategoryMap(
  symptoms = []
) {

  // ==========================
  // VALIDATION
  // ==========================

  if (
    !Array.isArray(symptoms)
  ) {

    console.warn(
      "buildCategoryMap: symptoms must be an array"
    );

    return {};
  }

  // ==========================
  // AUTO CATEGORY MAP
  // ==========================

  const autoMap =

    buildAutoCategoryMap(
      ALL_DISEASES
    );

  // ==========================
  // GROUPED RESULT
  // ==========================

  const grouped = {};

  // ==========================
  // PROCESS SYMPTOMS
  // ==========================

  symptoms.forEach(symptom => {

    // ======================
    // INVALID
    // ======================

    if (

      !symptom ||

      typeof symptom !==
      "string"

    ) {

      return;
    }

    // ======================
    // CATEGORY DETECTION
    // ======================

    const category =

      detectCategory(
        symptom,
        autoMap
      ) || "Other";

    // ======================
    // CREATE CATEGORY
    // ======================

    grouped[
      category
    ] ??= [];

    // ======================
    // AVOID DUPLICATES
    // ======================

    if (

      !grouped[
        category
      ].includes(symptom)

    ) {

      grouped[
        category
      ].push(symptom);
    }
  });

  // ==========================
  // SORT ITEMS
  // ==========================

  Object.values(grouped)

  .forEach(items => {

    items.sort(
      (a, b) =>

        a.localeCompare(b)
    );
  });

  // ==========================
  // SORT CATEGORY NAMES
  // ==========================

  const sortedGrouped =

    Object.fromEntries(

      Object.entries(grouped)

      .sort(

        ([a], [b]) =>

          a.localeCompare(b)
      )
    );

  // ==========================
  // FINAL
  // ==========================

  return sortedGrouped;
}