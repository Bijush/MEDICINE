// ==============================
// MASTER DIAGNOSIS ENGINE
// ADVANCED UNIVERSAL VERSION
// ==============================

import {
  ALL_DISEASES
}
from "./register/dataRegistry.js";

import {
  runDiagnosisEngine
}
from "./genericDiagnosisEngine.js";

// ==============================
// DEBUG
// ==============================

console.log(
  "ALL DISEASES:",
  ALL_DISEASES
);

console.log(
  "TOTAL DISEASES:",
  ALL_DISEASES?.length
);

// ==============================
// MASTER ENGINE
// ==============================

export function diagnosePatient(
  userData = {}
) {

  // ==========================
  // SAFETY
  // ==========================

  if (

    !ALL_DISEASES ||

    !Array.isArray(
      ALL_DISEASES
    )

  ) {

    console.error(
      "ALL_DISEASES missing"
    );

    return {

      success: false,

      error:
        "Disease registry missing",

      allResults: []
    };
  }

  // ==========================
  // EMPTY USER DATA
  // ==========================

  if (

    !userData ||

    Object.keys(
      userData
    ).length === 0

  ) {

    return {

      success: false,

      error:
        "No symptoms selected",

      allResults: []
    };
  }

  // ==========================
  // RUN ENGINE
  // ==========================

  const allResults =

    runDiagnosisEngine(

      ALL_DISEASES,

      userData
    );

  console.log(
    "RESULTS:",
    allResults
  );

  // ==========================
  // NO MATCH
  // ==========================

  if (

    !allResults ||

    allResults.length === 0

  ) {

    return {

      success: true,

      noMatch: true,

      message:
        "No strong disease match found",

      totalMatches: 0,

      topMatch: null,

      emergencyDetected: false,

      emergencyDiseases: [],

      overallSeverity:
        "unknown",

      allResults: []
    };
  }

  // ==========================
  // TOP MATCH
  // ==========================

  const topMatch =

    allResults[0] || null;

  // ==========================
  // EMERGENCY
  // ==========================

  const emergencyDiseases =

    allResults.filter(
      item => item.emergency
    );

  // ==========================
  // OVERALL SEVERITY
  // ==========================

  let overallSeverity =
    "mild";

  if (

    emergencyDiseases.length > 0

  ) {

    overallSeverity =
      "critical";
  }

  else if (

    allResults.some(
      x =>
        x.severity ===
        "severe"
    )

  ) {

    overallSeverity =
      "severe";
  }

  else if (

    allResults.some(
      x =>
        x.severity ===
        "moderate"
    )

  ) {

    overallSeverity =
      "moderate";
  }

  // ==========================
  // CATEGORY SUMMARY
  // ==========================

  const categorySummary = {};

  allResults.forEach(
    item => {

      if (
        !categorySummary[
          item.category
        ]
      ) {

        categorySummary[
          item.category
        ] = 0;
      }

      categorySummary[
        item.category
      ]++;
    }
  );

  // ==========================
  // TOP CONFIDENCE
  // ==========================

  const highestConfidence =

    topMatch?.confidence || 0;

  // ==========================
  // MULTIPLE POSSIBLE
  // ==========================

  const multiplePossibleDiseases =

    allResults.filter(
      item =>

        item.confidence >=
        highestConfidence - 10
    );

  // ==========================
  // RETURN
  // ==========================

  return {

    success: true,

    totalMatches:
      allResults.length,

    topMatch,

    topConfidence:
      highestConfidence,

    multiplePossibleDiseases,

    emergencyDetected:

      emergencyDiseases
        .length > 0,

    emergencyDiseases,

    overallSeverity,

    categorySummary,

    noMatch: false,

    allResults:
      allResults.slice(0, 10)
  };
}