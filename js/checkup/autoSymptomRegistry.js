// ==============================
// AUTO SYMPTOM REGISTRY
// ADVANCED AUTO VERSION
// ONLY REAL USER SYMPTOMS
// ==============================

import {
  ALL_DISEASES
} from "./register/dataRegistry.js";

// ==============================
// REGISTRY
// ==============================

export const AUTO_SYMPTOM_REGISTRY =
  {};

// ==============================
// EMERGENCY PATTERNS
// ==============================

const EMERGENCY_PATTERNS = [

  "blood",
  "bleeding",
  "collapse",
  "unconscious",
  "seizure",
  "vomiting_blood",
  "black_stool",
  "chest_pain",
  "breathing_failure"

];

// ==============================
// EXTRACT FUNCTION
// ==============================

function extractSymptoms(
  section = {},
  category = "general"
) {

  Object.entries(section)

    .forEach(

      ([symptom, rule = {}]) => {

        // ======================
        // ALREADY EXISTS
        // ======================

        if (

          AUTO_SYMPTOM_REGISTRY[
            symptom
          ]

        ) {

          // frequency increase

          AUTO_SYMPTOM_REGISTRY[
            symptom
          ].frequency++;

          return;
        }

        // ======================
        // WEIGHT
        // ======================

        const weight =
          rule.weight || 1;

        // ======================
        // LOWER
        // ======================

        const lower =
          symptom.toLowerCase();

        // ======================
        // EMERGENCY
        // ======================

        const emergency =

          weight >= 70 ||

          EMERGENCY_PATTERNS.some(
            pattern =>

              lower.includes(
                pattern
              )
          );

        // ======================
        // REGISTRY
        // ======================

        AUTO_SYMPTOM_REGISTRY[
          symptom
        ] = {

          // ====================
          // LABEL
          // ====================

          label:

            symptom

              .replaceAll(
                "_",
                " "
              )

              .replace(
                /\b\w/g,

                l =>
                  l.toUpperCase()
              ),

          // ====================
          // CATEGORY
          // ====================

          category,

          // ====================
          // WEIGHT
          // ====================

          weight,

          // ====================
          // OLD SUPPORT
          // ====================

          severity:
            weight,

          // ====================
          // EMERGENCY
          // ====================

          emergency,

          // ====================
          // CORE SYMPTOM
          // ====================

          core:
            weight >= 7,

          // ====================
          // SUPPORTING
          // ====================

          supporting:
            weight < 7,

          // ====================
          // IMPORTANCE
          // ====================

          importance:

            weight >= 9

              ? "critical"

            : weight >= 7

              ? "high"

            : weight >= 4

              ? "medium"

              : "low",

          // ====================
          // ALIASES
          // ====================

          aliases:

            Array.isArray(
              rule.aliases
            )

              ? rule.aliases

              : [],

          // ====================
          // CONTRADICTION
          // ====================

          contradiction:

            rule.present === false,

          // ====================
          // FOLLOWUP
          // ====================

          followup:
            !!rule.followup,

          // ====================
          // FREQUENCY
          // ====================

          frequency: 1
        };
      }
    );
}

// ==============================
// LOOP DISEASES
// ==============================

ALL_DISEASES.forEach(
  disease => {

    // ==========================
    // ONLY USER SYMPTOMS
    // ==========================

    extractSymptoms(
      disease.symptoms,
      disease.category
    );

    // ==========================
    // SAFE RED FLAGS ONLY
    // ==========================

    if (disease.red_flags) {

      const safeRedFlags = {};

      Object.entries(
        disease.red_flags
      )

      .forEach(

        ([key, value]) => {

          if (

            value.userSelectable !== false

          ) {

            safeRedFlags[key] =
              value;
          }
        }
      );

      extractSymptoms(
        safeRedFlags,
        disease.category
      );
    }
  }
);



