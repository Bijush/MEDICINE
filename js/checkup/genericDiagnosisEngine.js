
console.log("GENERIC ENGINE LOADED");
// ==============================
// GENERIC DIAGNOSIS ENGINE
// POWERFUL UNIVERSAL VERSION
// ADVANCED CLINICAL VERSION
// ==============================

import {
  CONFIDENCE_RULES
}
from "./confidenceRules.js";

import {
  getMatch
}
from "./GdEngine/matcher.js";

import {
  applyScore,
  applyBonuses,
  applyFollowupBoosts,
  calculateConfidence,
  calculateTotalMatches
}
from "./GdEngine/scorer.js";

import {
  applyRules,
  detectContradictions,
  detectEmergency
}
from "./GdEngine/rulesEngine.js";

import {
  filterAndSortResults
}
from "./GdEngine/filterSortEngine.js";

import {
  buildResult
}
from "./GdEngine/resultBuilder.js";

import {
  COMMON_SYMPTOMS
}
from "./GdEngine/constants.js";

import {
  processSection
}
from "./GdEngine/processSection.js";

import {
  applySpecificityBonus
}
from "./GdEngine/applySpecificityBonus.js";

import {
  applyBayesianProbability
}
from "./GdEngine/bayesianProbability.js";

// ==============================
// UNIQUE PUSH HELPER
// ==============================

function addUnique(
  array,
  value
) {

  if (

    !array.includes(
      value
    )

  ) {

    array.push(
      value
    );
  }
}



// ==============================
// SYMPTOM CLUSTERS
// ==============================

function processClusters({

  disease,
  userData,
  score,
  getMatch,
  matchCache

}) {

  // ==========================
  // SAFE CLUSTERS
  // ==========================

  const clusters =

    disease.symptom_clusters || {};

  // ==========================
  // CLUSTER ANALYSIS
  // ==========================

  const clusterAnalysis = [];

  // ==========================
  // LOOP CLUSTERS
  // ==========================

  Object.values(clusters)

  .forEach(cluster => {

    if (!cluster)
      return;

    // ========================
    // SAFE DATA
    // ========================

    const symptoms =

      Array.isArray(
        cluster.symptoms
      )

        ? cluster.symptoms

        : [];

    const minimumMatch =

      cluster.minimum_match || 2;

    const bonus =
      cluster.bonus || 0;

    // ========================
    // MATCH COUNT
    // ========================

    let matchedCount = 0;

    const matchedSymptoms = [];

    const missingSymptoms = [];

    symptoms.forEach(symptom => {

      const isMatched =

        getMatch(
          symptom,
          {},
          userData,
          matchCache
        ).matched;

      // ======================
      // MATCHED
      // ======================

      if (isMatched) {

        matchedCount++;

        matchedSymptoms.push(
          symptom
        );

      }

      // ======================
      // MISSING
      // ======================

      else {

        missingSymptoms.push(
          symptom
        );
      }
    });

    // ========================
    // APPLY BONUS
    // ========================

    if (

      matchedCount >=
      minimumMatch

    ) {

      score += bonus;

      clusterAnalysis.push({

        cluster:

          cluster.name ||

          "Clinical Cluster",

        matchedSymptoms,

        missingSymptoms,

        matchedCount,

        totalSymptoms:
          symptoms.length,

        status:
          "strong_match"
      });
    }

    // ========================
    // PARTIAL BONUS
    // ========================

    else if (

      matchedCount > 0 &&

      matchedCount ===
      minimumMatch - 1

    ) {

      score +=
        bonus * 0.25;

      clusterAnalysis.push({

        cluster:

          cluster.name ||

          "Clinical Cluster",

        matchedSymptoms,

        missingSymptoms,

        matchedCount,

        totalSymptoms:
          symptoms.length,

        status:
          "partial_match"
      });
    }
  });

  // ==========================
  // FINAL SAFE LIMIT
  // ==========================

  return {

    score: Math.max(
      0,
      Number(
        score.toFixed(2)
      )
    ),

    clusterAnalysis
  };
}

// ==============================
// SIMPLE SECTION PROCESSOR
// ==============================

function processSimpleSection({

  disease,
  sectionKey,

  userData,
  score,

  getMatch,
  matchCache

}) {

  const section =
    disease[sectionKey];

  if (!section)
    return score;

  Object.entries(section)

  .forEach(([key, rule]) => {

    if (!rule)
      return;

    const matched =

      getMatch(
        key,
        rule,
        userData,
        matchCache
      ).matched;

    const weight =
      Math.abs(
        rule.weight || 0
      );

    // ======================
    // POSITIVE
    // ======================

    if (

      matched &&

      rule.present === true

    ) {

      score += weight;
    }

    // ======================
    // NEGATIVE
    // ======================

    if (

      matched &&

      rule.present === false

    ) {

      score -= weight;
    }
  });

  return score;
}

// ==============================
// ENGINE
// ==============================

export function runDiagnosisEngine(

  diseases = [],

  userData = {}

) {

  const results = [];

  for (const disease of diseases) {

    const matchCache = {};

    let score = 0;

    // ==========================
    // MATCH ARRAYS
    // ==========================

    const matchedSymptoms = [];

    const matchedTests = [];

    const matchedRiskFactors = [];

    const matchedCauses = [];

    const matchedComplications = [];

    const matchedRedFlags = [];

    const matchedPhysicalExam = [];

    // ==========================
    // MAIN SECTIONS
    // ==========================

    const sections = [

      {
        key: "symptoms",
        array: matchedSymptoms,
        multiplier: 1
      },

      {
        key: "tests",
        array: matchedTests,
        multiplier: 0.45
      },

      {
        key: "causes",
        array: matchedCauses,
        multiplier: 0.35
      },

      {
        key: "risk_factors",
        array: matchedRiskFactors,
        multiplier: 0.35
      },

      {
        key: "physical_exam",
        array: matchedPhysicalExam,
        multiplier: 0.5
      },

      {
        key: "complications",
        array: matchedComplications,
        multiplier: 0.4
      },

      {
        key: "red_flags",
        array: matchedRedFlags,
        multiplier: 0.6
      }
    ];

    // ==========================
    // PROCESS MAIN SECTIONS
    // ==========================

    for (

      const section of sections

    ) {

      score = processSection({

        disease,

        sectionKey:
          section.key,

        userData,

        matchCache,

        getMatch,

        applyScore,

        matchedArray:
          section.array,

        addUnique,

        score,

        COMMON_SYMPTOMS,

        multiplier:
          section.multiplier || 1
      });
    }


    // ==========================
    // CLUSTERS
    // ==========================

    const clusterData =

processClusters({

  disease,
  userData,
  score,
  getMatch,
  matchCache

});

score =
  clusterData.score;

const clusterAnalysis =
  clusterData.clusterAnalysis;

    // ==========================
    // PROGRESSION
    // ==========================

    score =
  processSimpleSection({

    disease,

    sectionKey:
      "progression",

    userData,

    score,

    getMatch,
    matchCache

  });

    // ==========================
    // EPIDEMIOLOGY
    // ==========================

    score =
  processSimpleSection({

    disease,

    sectionKey:
      "epidemiology",

    userData,

    score,

    getMatch,
    matchCache

  });

    // ==========================
    // RECOVERY SIGNS
    // ==========================

    score =
  processSimpleSection({

    disease,

    sectionKey:
      "recovery_signs",

    userData,

    score,

    getMatch,
    matchCache

  });

    // ==========================
    // RULES
    // ==========================

    score = applyRules({

      disease,
      userData,
      score,
      getMatch,
      matchCache
    });

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    score = applyFollowupBoosts({

      disease,
      userData,
      score
    });

// ==========================
// REQUIRED SYMPTOM STRICT FILTER
// ==========================

if (
  Array.isArray(
    disease.required_symptoms
  )
) {

  const requiredMatchedCount =

    disease.required_symptoms

    .filter(symptom =>

      getMatch(
        symptom,
        {},
        userData,
        matchCache
      ).matched
    )

    .length;

  // ======================
  // NO REQUIRED MATCH
  // ======================

  if (
  requiredMatchedCount === 0
) {

  // ======================
  // RED FLAG PRESENT
  // ======================

  if (
    matchedRedFlags.length >= 1
  ) {

    // ====================
    // DISEASE SUPPORTS
    // EMERGENCY
    // ====================

    const emergencyCompatible =

      disease.emergency === true ||

      (
        disease.red_flags &&

        Object.keys(
          disease.red_flags
        )

        .some(flag =>

          matchedRedFlags.includes(
            flag
          )
        )
      );

    // ====================
    // KEEP LOW CONFIDENCE
    // ====================

    if (
      emergencyCompatible
    ) {

      score *= 0.45;
    }

    // ====================
    // REMOVE FALSE RESULT
    // ====================

    else {

      continue;
    }
  }

  // ======================
  // NORMAL CASE
  // ======================

  else {

    continue;
  }
}
}
// ==========================
// MINIMUM CLINICAL MATCH
// ==========================

const clinicalMatchCount =

  matchedSymptoms.length +

  matchedTests.length +

  matchedRedFlags.length;

// ==========================
// VERY WEAK MATCH
// ==========================

if (

  clinicalMatchCount <= 0

) {

  continue;
}

// ==========================
// ONLY RED FLAG CASE
// ==========================

if (

  matchedRedFlags.length >= 1 &&

  matchedSymptoms.length === 0 &&

  matchedTests.length === 0

) {

  // ======================
  // STRICT EMERGENCY ONLY
  // ======================

  const supportsEmergency =

  disease.emergency === true ||

  matchedRedFlags.some(flag =>

    Object.keys(
      disease.red_flags || {}
    ).includes(flag)
  );

if (
  !supportsEmergency
) {

  continue;
}

  // ======================
  // LOW CONFIDENCE FORCE
  // ======================

  score *= 0.4;
}
    // ==========================
    // MATCH COUNT
    // ==========================

    const totalMatches =

      calculateTotalMatches({

        matchedSymptoms,
        matchedTests,
        matchedRedFlags,
        matchedRiskFactors,
        matchedCauses,
        matchedComplications,
        matchedPhysicalExam

      });

    // ==========================
    // BONUSES
    // ==========================

    score = applyBonuses({

      score,

      matchedSymptoms,
      matchedTests,
      matchedRedFlags,
      matchedRiskFactors,
      matchedCauses,
      matchedPhysicalExam,
      matchedComplications,

      COMMON_SYMPTOMS,

      disease,
      totalMatches
    });
    
     score = applySpecificityBonus({

  score,

  matchedSymptoms

});


    // ==========================
    // EMERGENCY
    // ==========================

    const emergencyData =

      detectEmergency({

        matchedRedFlags,
        disease,
        userData,
        getMatch,
        matchCache,
        score
      });

    const emergencyDetected =

      emergencyData
        .emergencyDetected;

    score =
      emergencyData.score;

    // ==========================
    // CONTRADICTIONS
    // ==========================

    const contradictionData =

  detectContradictions({

    disease,
    userData,
    getMatch,
    score,
    matchCache,

    matchedSymptoms,
    matchedTests,
    matchedRedFlags,

    COMMON_SYMPTOMS

  });

    const contradictions =

      contradictionData
        .contradictions;

    const contradictionLevel =

      contradictionData
        .contradictionLevel;
        const totalContradictions =

contradictionData.totalContradictions;

    score =
      contradictionData.score;

    // ==========================
    // CONFIDENCE
    // ==========================

    const confidenceData =

      calculateConfidence({

        score,
        disease,

        matchedSymptoms,
        matchedTests,
        matchedRedFlags,

        totalMatches,

        CONFIDENCE_RULES
      });

    score =
      confidenceData.score;

    const confidenceLabel =

      confidenceData
        .confidenceLabel;

    // ==========================
    // STRICT MATCH FILTER
    // ==========================

    const actualMatches = [

  ...new Set([

    ...matchedSymptoms,
    ...matchedTests,
    ...matchedRiskFactors,
    ...matchedCauses,
    ...matchedPhysicalExam,
    ...matchedComplications,
    ...matchedRedFlags

  ])
];

    // ==========================
    // NO MATCH
    // ==========================

    const effectiveMatchCount =

matchedSymptoms.length * 1.5 +

matchedTests.length * 2 +

matchedRedFlags.length * 2 +

matchedPhysicalExam.length;


if (

effectiveMatchCount <

(disease.minimum_match || 1)

) {

continue;

}
    
// ==========================
// GLOBAL MINIMUM MATCH
// ==========================

if (

  actualMatches.length <

  (disease.minimum_match || 1)

) {

  continue;
}
    // ==========================
    // LOW SCORE
    // ==========================

    if (
      score <= 0
    ) {

      continue;
    }

    // ==========================
    // BUILD RESULT
    // ==========================

    const finalResult =

      buildResult({

        disease,

        score,
        confidenceLabel,

        totalMatches,

        emergencyDetected,

        matchedSymptoms,
        matchedTests,
        matchedRiskFactors,
        matchedCauses,
        matchedPhysicalExam,
        matchedComplications,
        matchedRedFlags,
        contradictions,
        contradictionLevel,
        totalContradictions,
         clusterAnalysis
      });

    // ==========================
    // FINAL SAFETY
    // ==========================

    if (

      finalResult &&
      finalResult.confidence > 0

    ) {

      results.push(
        finalResult
      );
    }
  }

  // ==========================
  // FILTER + SORT
  // ==========================

  return filterAndSortResults(
    results
  );
}