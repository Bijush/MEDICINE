// ==============================
// LIVER ENGINE
// ==============================

import { FATTY_LIVER } from "./fattyLiver.js";
import { HEPATITIS } from "./hepatitis.js";
import { CIRRHOSIS } from "./cirrhosis.js";
import { LIVER_FAILURE } from "./liverFailure.js";
import { JAUNDICE } from "./jaundice.js";
import { LIVER_CANCER } from "./liverCancer.js";

// NEW
import { LIVER_FIBROSIS } from "./fibrosis.js";
import { ALCOHOLIC_LIVER } from "./alcoholicLiver.js";
import { CHOLESTASIS } from "./cholestasis.js";
import { LIVER_ABSCESS } from "./liverAbscess.js";
import { PORTAL_HYPERTENSION } from "./portalHypertension.js";
import { HEPATIC_ENCEPHALOPATHY } from "./hepaticEncephalopathy.js";

// ==============================
// ALL LIVER DATA
// ==============================

export const ALL_LIVER_DISEASES = [

  ...FATTY_LIVER,

  ...HEPATITIS,

  ...CIRRHOSIS,

  ...LIVER_FAILURE,

  ...JAUNDICE,

  ...LIVER_CANCER,

  // NEW
  ...LIVER_FIBROSIS,

  ...ALCOHOLIC_LIVER,

  ...CHOLESTASIS,

  ...LIVER_ABSCESS,

  ...PORTAL_HYPERTENSION,

  ...HEPATIC_ENCEPHALOPATHY
];

// ==============================
// DIAGNOSIS ENGINE
// ==============================

export function diagnoseLiverDisease(userData = {}) {

  const results = [];

  for (const disease of ALL_LIVER_DISEASES) {

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

        const rule = disease.symptoms[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedSymptoms.push(key);

        } else if (
          userData[key] === false &&
          rule.present === true
        ) {

          score -= Math.abs(rule.weight || 0) * 0.2;
        }
      }
    }

    // ==========================
    // TESTS
    // ==========================

    if (disease.tests) {

      for (const key in disease.tests) {

        const rule = disease.tests[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedTests.push(key);

        } else if (
          userData[key] === false &&
          rule.present === true
        ) {

          score -= Math.abs(rule.weight || 0) * 0.3;
        }
      }
    }

    // ==========================
    // RISK FACTORS
    // ==========================

    if (disease.risk_factors) {

      for (const key in disease.risk_factors) {

        const rule = disease.risk_factors[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedRiskFactors.push(key);
        }
      }
    }

    // ==========================
    // CAUSES
    // ==========================

    if (disease.causes) {

      for (const key in disease.causes) {

        const rule = disease.causes[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedCauses.push(key);
        }
      }
    }

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    if (disease.physical_exam) {

      for (const key in disease.physical_exam) {

        const rule = disease.physical_exam[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedPhysicalExam.push(key);
        }
      }
    }

    // ==========================
    // COMPLICATIONS
    // ==========================

    if (disease.complications) {

      for (const key in disease.complications) {

        const rule = disease.complications[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedComplications.push(key);
        }
      }
    }

    // ==========================
    // RED FLAGS
    // ==========================

    if (disease.red_flags) {

      for (const key in disease.red_flags) {

        const rule = disease.red_flags[key];

        if (userData[key] === true) {

          score += rule.weight || 0;

          matchedRedFlags.push(key);
        }
      }
    }

    // ==========================
    // BONUS LOGIC
    // ==========================

    if (
      matchedTests.length >= 2 &&
      matchedSymptoms.length >= 2
    ) {

      score += 10;
    }

    if (
      matchedRedFlags.length >= 1
    ) {

      score += 15;
    }


// ==========================
// ADVANCED LIVER LOGIC
// ==========================

// HEPATIC ENCEPHALOPATHY

if (

  disease.disease ===
  "Hepatic Encephalopathy" &&

  userData.confusion &&
  userData.ammonia_high

) {

  score += 40;
}

// LIVER FAILURE

if (

  disease.disease ===
  "Acute Liver Failure" &&

  userData.inr_high &&
  userData.altered_sensorium

) {

  score += 45;
}

// PORTAL HYPERTENSION

if (

  disease.disease ===
  "Portal Hypertension" &&

  userData.ascites &&
  userData.vomiting_blood

) {

  score += 35;
}

// LIVER CANCER

if (

  disease.disease ===
  "Liver Cancer" &&

  userData.afp_high &&
  userData.weight_loss

) {

  score += 40;
}

// HEPATITIS B

if (

  disease.disease ===
  "Hepatitis B" &&

  userData.hbsag_positive

) {

  score += 40;
}

// HEPATITIS C

if (

  disease.disease ===
  "Hepatitis C" &&

  userData.hcv_rna_positive

) {

  score += 40;
}

// LIVER ABSCESS

if (

  disease.disease ===
  "Liver Abscess" &&

  userData.high_fever &&
  userData.right_upper_abdominal_pain

) {

  score += 30;
}

// CIRRHOSIS

if (

  disease.disease ===
  "Liver Cirrhosis" &&

  userData.ascites &&
  userData.albumin_low

) {

  score += 40;
}

    // ==========================
    // NORMALIZE SCORE
    // ==========================

    score = Math.max(0, Math.min(score, 100));

    // ==========================
    // MATCH COUNT
    // ==========================

    const totalMatches =

      matchedSymptoms.length +

      matchedTests.length +

      matchedRiskFactors.length +

      matchedCauses.length +

      matchedPhysicalExam.length +

      matchedComplications.length +

      matchedRedFlags.length;

    // ==========================
    // EMERGENCY DETECTION
    // ==========================

    const emergencyDetected =

      matchedRedFlags.length >= 1 ||

      disease.severity === "critical" ||

      disease.severity === "emergency";


// ==========================
// DYNAMIC EMERGENCY
// ==========================

if (

  userData.coma ||

  userData.shock ||

  userData.massive_bleeding ||

  userData.vomiting_blood ||

  userData.unconsciousness

) {

  score += 25;
}
// ==========================
// FINAL NORMALIZE
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

      disease.severity === "critical"
        ? "red"

      : disease.severity === "emergency"
        ? "darkred"

      : disease.severity === "severe"
        ? "orange"

      : disease.severity === "moderate"
        ? "yellow"

      : "green";

    // ==========================
    // AI REASONING
    // ==========================

    const reason =

      matchedTests.length >= 2
        ? "Strong laboratory evidence detected"

      : matchedSymptoms.length >= 4
        ? "Strong symptom pattern match detected"

      : matchedRedFlags.length >= 1
        ? "Critical warning signs detected"

      : "Partial liver disease pattern detected";

    // ==========================
    // RECOMMENDATION
    // ==========================

    const recommendation =

      emergencyDetected
        ? "Immediate hospital or specialist consultation recommended"

      : disease.severity === "severe"
        ? "Consult hepatologist"

      : disease.severity === "moderate"
        ? "Medical follow-up recommended"

      : "Lifestyle modification and monitoring recommended";

    // ==========================
    // FINAL RESULT
    // ==========================

    results.push({

      disease: disease.disease,

      category: disease.category,

      severity: disease.severity,

      severityColor,

      confidence: Math.round(score),

      confidenceLabel,

      matchCount: totalMatches,

      reason,

      recommendation,

      emergency: emergencyDetected,

      matchedSymptoms,

      matchedTests,

      matchedRiskFactors,

      matchedCauses,

      matchedPhysicalExam,

      matchedComplications,

      matchedRedFlags,

      medicines: disease.medicines || [],

      treatments: disease.treatments || []
    });
  }

  // ==============================
  // SORT RESULTS
  // ==============================

  results.sort(
    (a, b) => b.confidence - a.confidence
  );

  // ==============================
  // RETURN TOP MATCHES
  // ==============================

  return results
    .filter(item => item.confidence > 0)
    .slice(0, 5);
}