// ==============================
// STOMACH ENGINE
// ==============================

import { GERD } from "./gerd.js";
import { PEPTIC_ULCER } from "./pepticUlcer.js";
import { GASTROENTERITIS } from "./gastroenteritis.js";
import { FOOD_POISONING } from "./foodPoisoning.js";
import { APPENDICITIS } from "./appendicitis.js";
import { PANCREATITIS } from "./pancreatitis.js";
import { IBS } from "./ibs.js";
import { ULCERATIVE_COLITIS } from "./ulcerativeColitis.js";
import { CROHNS_DISEASE } from "./crohnsDisease.js";
import { CONSTIPATION } from "./constipation.js";
import { HEMORRHOIDS } from "./hemorrhoids.js";
import { INTESTINAL_OBSTRUCTION } from "./intestinalObstruction.js";
import { GASTRIC_CANCER } from "./gastricCancer.js";

// ==============================
// ALL STOMACH DISEASES
// ==============================

export const ALL_STOMACH_DISEASES = [

  ...GERD,

  ...PEPTIC_ULCER,

  ...GASTROENTERITIS,

  ...FOOD_POISONING,

  ...APPENDICITIS,

  ...PANCREATITIS,

  ...IBS,

  ...ULCERATIVE_COLITIS,

  ...CROHNS_DISEASE,

  ...CONSTIPATION,

  ...HEMORRHOIDS,

  ...INTESTINAL_OBSTRUCTION,

  ...GASTRIC_CANCER
];

// ==============================
// STOMACH DIAGNOSIS ENGINE
// ==============================

export function diagnoseStomachDisease(
  userData = {}
) {

  const results = [];

  for (const disease of ALL_STOMACH_DISEASES) {

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
            ) * 0.2;
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

      score += 15;
    }

    if (
      matchedRedFlags.length >= 1
    ) {

      score += 20;
    }

    // ==========================
    // SPECIAL LOGIC
    // ==========================

    // PANCREATITIS

    if (

      disease.disease ===
      "Acute Pancreatitis" &&

      userData
        .severe_upper_abdominal_pain &&

      userData
        .pain_radiating_to_back

    ) {

      score += 35;
    }

    // PEPTIC ULCER

    if (

      disease.disease ===
      "Peptic Ulcer Disease" &&

      userData
        .burning_stomach_pain &&

      userData
        .pain_after_food

    ) {

      score += 25;
    }

    // GERD

    if (

      disease.disease ===
      "GERD" &&

      userData.heartburn &&

      userData.acidity

    ) {

      score += 25;
    }

    // INTESTINAL OBSTRUCTION

    if (

      disease.disease ===
      "Intestinal Obstruction" &&

      userData
        .inability_to_pass_stool &&

      userData
        .abdominal_bloating

    ) {

      score += 40;
    }

    // GASTRIC CANCER

    if (

      disease.disease ===
      "Gastric Cancer" &&

      userData
        .unexplained_weight_loss &&

      userData.black_stool

    ) {

      score += 40;
    }

    // IBS

    if (

      disease.disease ===
      "Irritable Bowel Syndrome" &&

      userData
        .relief_after_passing_stool

    ) {

      score += 25;
    }

    // ULCERATIVE COLITIS

    if (

      disease.disease ===
      "Ulcerative Colitis" &&

      userData
        .bloody_diarrhea &&

      userData.tenesmus

    ) {

      score += 35;
    }

    // ==========================
    // EXCLUSION LOGIC
    // ==========================

    // GERD vs CANCER

    if (

      disease.disease ===
      "GERD" &&

      userData
        .unexplained_weight_loss

    ) {

      score -= 30;
    }

    // IBS vs IBD

    if (

      disease.disease ===
      "Irritable Bowel Syndrome" &&

      (
        userData
          .bloody_diarrhea ||

        userData
          .massive_bleeding
      )

    ) {

      score -= 35;
    }

    // PEPTIC ULCER

    if (

      disease.disease ===
      "Peptic Ulcer Disease" &&

      userData
        .pain_radiating_to_back

    ) {

      score -= 15;
    }

    // ==========================
    // NORMALIZE SCORE
    // ==========================

    score = Math.max(
      0,
      Math.min(score, 100)
    );

    // ==========================
    // TOTAL MATCHES
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

      userData.massive_bleeding ||

      userData.black_stool ||

      userData.vomiting_blood

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
    // SEVERITY COLOR
    // ==========================

    const severityColor =

      disease.severity ===
      "critical"
        ? "red"

      : disease.severity ===
        "emergency"
        ? "darkred"

      : disease.severity ===
        "severe"
        ? "orange"

      : disease.severity ===
        "moderate"
        ? "yellow"

      : "green";

    // ==========================
    // AI REASONING
    // ==========================

    const reason =

      matchedTests.length >= 2

        ? "Strong laboratory evidence detected"

      : matchedSymptoms.length >= 4

        ? "Strong stomach symptom pattern detected"

      : matchedRedFlags.length >= 1

        ? "Critical gastrointestinal warning signs detected"

      : "Partial stomach disease pattern detected";

    // ==========================
    // RECOMMENDATION
    // ==========================

    const recommendation =

      emergencyDetected

        ? "Immediate hospital consultation recommended"

      : disease.severity ===
        "severe"

        ? "Consult gastroenterologist"

      : disease.severity ===
        "moderate"

        ? "Medical follow-up recommended"

      : "Lifestyle and diet modification recommended";

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

      severityColor,

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

        disease
          .lifestyle_changes || []
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