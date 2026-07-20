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
    !Array.isArray(
      symptoms
    )
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

  symptoms.forEach(
    symptom => {

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
      // NORMALIZE
      // ======================

      const normalized =

        symptom
        .toLowerCase()
        .trim();

      // ======================
      // CATEGORY DETECTION
      // ======================

      const category = (
  detectCategory(
    normalized,
    autoMap
  ) || "Other"
).toUpperCase();

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
        ]

        .includes(
          normalized
        )

      ) {

        grouped[
          category
        ]

        .push(
          normalized
        );

      }

    }
  );

  // ==========================
  // SORT ITEMS
  // ==========================

  Object.values(
    grouped
  )

  .forEach(
    items => {

      items.sort(

        (a, b) =>

          a.localeCompare(
            b
          )

      );

    }
  );

  // ==========================
  // REMOVE EMPTY CATEGORIES
  // ==========================

  const nonEmptyCategories =

    Object.entries(
      grouped
    )

    .filter(

      ([, items]) =>

        items.length > 0

    );

  // ==========================
  // SORT CATEGORY NAMES
  // ==========================

  const sortedGrouped =

    Object.fromEntries(

      nonEmptyCategories

      .sort(

        ([a], [b]) =>

          a.localeCompare(
            b
          )

      )

    );

  // ==========================
  // FINAL
  // ==========================

  return sortedGrouped;

}