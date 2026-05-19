// ==============================
// FEVER ENGINE
// ==============================

import { DENGUE } from "./dengue.js";
import { MALARIA } from "./malaria.js";
import { TYPHOID } from "./typhoid.js";
import { COVID } from "./covid.js";
import { INFLUENZA } from "./influenza.js";
import { TUBERCULOSIS } from "./tuberculosis.js";
import { VIRAL_FEVER } from "./viralFever.js";

// ==============================
// ALL FEVER DISEASES
// ==============================

export const ALL_FEVER_DISEASES = [

  ...DENGUE,

  ...MALARIA,

  ...TYPHOID,

  ...COVID,

  ...INFLUENZA,

  ...TUBERCULOSIS,

  ...VIRAL_FEVER
];

// ==============================
// FEVER DIAGNOSIS ENGINE
// ==============================

export function diagnoseFeverDisease(
  userData = {}
) {

  const results = [];

  for (const disease of ALL_FEVER_DISEASES) {

    let score = 0;

    const matchedSymptoms = [];
    const matchedTests = [];
    const matchedRiskFactors = [];
    const matchedCauses = [];
    const matchedComplications = [];
    const matchedRedFlags = [];
    const matchedPhysicalExam = [];

    // ==========================
    // SYMPTOMS
    // ==========================

    if (disease.symptoms) {

      for (const key in disease.symptoms) {

        const rule =
          disease.symptoms[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedSymptoms.push(
            key
          );

        } else if (

          userData[key] === false &&

          rule.present === true

        ) {

          score -=
            Math.abs(
              rule.weight || 0
            ) * 0.5;
        }
      }
    }

    // ==========================
    // TESTS
    // ==========================

    if (disease.tests) {

      for (const key in disease.tests) {

        const rule =
          disease.tests[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedTests.push(
            key
          );

        } else if (

          userData[key] === false &&

          rule.present === true

        ) {

          score -=
            Math.abs(
              rule.weight || 0
            ) * 0.3;
        }
      }
    }

    // ==========================
    // CAUSES
    // ==========================

    if (disease.causes) {

      for (const key in disease.causes) {

        const rule =
          disease.causes[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedCauses.push(
            key
          );
        }
      }
    }

    // ==========================
    // RISK FACTORS
    // ==========================

    if (disease.risk_factors) {

      for (const key in disease.risk_factors) {

        const rule =
          disease.risk_factors[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedRiskFactors.push(
            key
          );
        }
      }
    }

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    if (disease.physical_exam) {

      for (const key in disease.physical_exam) {

        const rule =
          disease.physical_exam[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedPhysicalExam.push(
            key
          );
        }
      }
    }

    // ==========================
    // COMPLICATIONS
    // ==========================

    if (disease.complications) {

      for (const key in disease.complications) {

        const rule =
          disease.complications[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedComplications.push(
            key
          );
        }
      }
    }

    // ==========================
    // RED FLAGS
    // ==========================

    if (disease.red_flags) {

      for (const key in disease.red_flags) {

        const rule =
          disease.red_flags[key];

        if (userData[key] === true) {

          score +=
            rule.weight || 0;

          matchedRedFlags.push(
            key
          );
        }
      }
    }


// ==========================
// FOLLOWUP CONFIDENCE BOOST
// ==========================

const boosts = {

  ...(window.currentUserSymptoms || {}),

  ...(window.confidenceBoosts || {})
};
// MALARIA

if (

  disease.disease ===
  "Malaria"

) {

  if (boosts.chills)
    score += 15;

  if (boosts.sweating)
    score += 10;

  if (boosts.rigor)
    score += 20;
}

// VIRAL FEVER

if (

  disease.disease ===
  "Viral Fever"

) {

  if (boosts.body_ache)
    score += 12;

  if (boosts.fatigue)
    score += 8;
}

// TB

if (

  disease.disease ===
  "Tuberculosis"

) {

  if (boosts.night_sweats)
    score += 20;

  if (boosts.weight_loss)
    score += 15;
}

// COVID

if (

  disease.disease ===
  "COVID-19"

) {

  if (boosts.loss_of_smell)
    score += 25;

  if (boosts.dry_cough)
    score += 10;
}



// ==========================
// AGE LOGIC
// ==========================

// ELDERLY

if (

  userData.age >= 60

) {

  if (

    disease.disease ===
    "COVID-19"

  ) {

    score += 10;
  }

  if (

    disease.disease ===
    "Tuberculosis"

  ) {

    score += 8;
  }
}

// CHILD

if (

  userData.age <= 12

) {

  if (

    disease.disease ===
    "Dengue Fever"

  ) {

    score += 5;
  }
}

// ==========================
// DURATION LOGIC
// ==========================

if (

  userData.duration >= 7

) {

  // TB

  if (

    disease.disease ===
    "Tuberculosis"

  ) {

    score += 25;
  }

  // TYPHOID

  if (

    disease.disease ===
    "Typhoid Fever"

  ) {

    score += 15;
  }

  // VIRAL FEVER LESS LIKELY

  if (

    disease.disease ===
    "Viral Fever"

  ) {

    score -= 15;
  }
}

    // ==========================
    // BONUS LOGIC
    // ==========================

    if (
      matchedSymptoms.length >= 4
    ) {

      score += 10;
    }

    if (
      matchedTests.length >= 2
    ) {

      score += 20;
    }

    if (
      matchedRedFlags.length >= 1
    ) {

      score += 25;
    }

    // ==========================
    // FEVER PATTERN BONUS
    // ==========================

    if (

      disease.disease ===
      "Malaria" &&

      userData.chills === true &&

      userData.rigor === true

    ) {

      score += 25;
    }

    if (

      disease.disease ===
      "Dengue Fever" &&

      userData.platelet_low === true

    ) {

      score += 30;
    }

    if (

      disease.disease ===
      "Typhoid Fever" &&

      userData.step_ladder_fever === true

    ) {

      score += 30;
    }

    if (

      disease.disease ===
      "COVID-19" &&

      userData.loss_of_smell === true

    ) {

      score += 35;
    }

    // ==========================
    // ADVANCED DIFFERENTIAL LOGIC
    // ==========================

    // DENGUE

    if (

      disease.disease ===
      "Dengue Fever" &&

      userData.pain_behind_eyes &&

      userData.platelet_low

    ) {

      score += 35;
    }

    // MALARIA

    if (

      disease.disease ===
      "Malaria" &&

      userData.chills &&

      userData.rigor &&

      userData.sweating

    ) {

      score += 35;
    }

    // COVID

    if (

      disease.disease ===
      "COVID-19" &&

      (
        userData.loss_of_smell ||

        userData.loss_of_taste
      )

    ) {

      score += 40;
    }

    // TB

    if (

      disease.disease ===
      "Tuberculosis" &&

      userData.chronic_cough &&

      userData.weight_loss

    ) {

      score += 40;
    }

    // INFLUENZA

    if (

      disease.disease ===
      "Influenza" &&

      userData.sudden_fever &&

      userData.body_ache

    ) {

      score += 25;
    }

    // TYPHOID

    if (

      disease.disease ===
      "Typhoid Fever" &&

      userData.step_ladder_fever &&

      userData.abdominal_pain

    ) {

      score += 35;
    }

    // ==========================
    // EXCLUSION LOGIC
    // ==========================

    // VIRAL FEVER vs COVID

    if (

      disease.disease ===
      "Viral Fever" &&

      (
        userData.loss_of_smell ||

        userData.loss_of_taste
      )

    ) {

      score -= 35;
    }

    // VIRAL FEVER vs DENGUE

    if (

      disease.disease ===
      "Viral Fever" &&

      (
        userData.bleeding_gums ||

        userData.platelet_low
      )

    ) {

      score -= 40;
    }

    // INFLUENZA vs COVID

    if (

      disease.disease ===
      "Influenza" &&

      userData.loss_of_smell

    ) {

      score -= 25;
    }

    // TYPHOID vs MALARIA

    if (

      disease.disease ===
      "Typhoid Fever" &&

      userData.cyclical_fever

    ) {

      score -= 20;
    }

    // ==========================
    // NORMALIZE SCORE
    // ==========================

    score = Math.max(
      0,
      Math.min(score, 100)
    );

    // ==========================
    // MATCH COUNT
    // ==========================

    const totalMatches =

      matchedSymptoms.length +

      matchedTests.length +

      matchedRiskFactors.length +

      matchedCauses.length +

      matchedComplications.length +

      matchedRedFlags.length +

      matchedPhysicalExam.length;

    // ==========================
    // EMERGENCY DETECTION
    // ==========================

    let emergencyDetected =

      matchedRedFlags.length >= 1 ||

      disease.severity ===
      "critical" ||

      disease.severity ===
      "emergency";

    // ==========================
    // DYNAMIC EMERGENCY
    // ==========================

    if (

      userData.shock ||

      userData.unconsciousness ||

      userData.spo2_below_90 ||

      userData.massive_blood_in_sputum ||

      userData.black_stool

    ) {

      emergencyDetected = true;

      score += 25;
    }

    // ==========================
    // FINAL NORMALIZATION
    // ==========================

    score = Math.max(
      0,
      Math.min(score, 100)
    );

    // ==========================
    // CONFIDENCE LABEL
    // ==========================

    const confidenceLabel =

      score >= 80
        ? "Very High"

      : score >= 60
        ? "High"

      : score >= 40
        ? "Medium"

      : "Low";

    // ==========================
    // REASONING
    // ==========================

    const reason =

      matchedTests.length >= 2

        ? "Strong laboratory evidence detected"

      : matchedSymptoms.length >= 4

        ? "Strong fever symptom pattern detected"

      : matchedRedFlags.length >= 1

        ? "Critical fever warning signs detected"

      : "Partial fever disease pattern detected";

    // ==========================
    // RECOMMENDATION
    // ==========================

    const recommendation =

      emergencyDetected

        ? "Immediate hospital consultation recommended"

      : disease.severity ===
        "severe"

        ? "Urgent physician consultation recommended"

      : disease.severity ===
        "moderate"

        ? "Medical follow-up recommended"

      : "Rest and supportive care recommended";

    // ==========================
    // FINAL RESULT
    // ==========================

    results.push({

      disease:
        disease.disease,

      category:
        disease.category,

      severity:
        disease.severity,

      confidence:
        Math.round(score),

      confidenceLabel,

      matchCount:
        totalMatches,

      reason,

      recommendation,

      emergency:
        emergencyDetected,

      matchedSymptoms,

      matchedTests,

      matchedRiskFactors,

      matchedCauses,

      matchedPhysicalExam,

      matchedComplications,

      matchedRedFlags,

      medicines:
        disease.medicines || [],

      treatments:
        disease.treatments || [],

      lifestyle_changes:
        disease.lifestyle_changes || []
    });
  }

  // ==============================
  // SORT RESULTS
  // ==============================

  results.sort(

    (a, b) =>
      b.confidence - a.confidence
  );

  // ==============================
  // RETURN TOP MATCHES
  // ==============================

  return results

    .filter(
      item => item.confidence > 0
    )

    .slice(0, 5);
}