// ==============================
// RESPIRATORY ENGINE
// ==============================

import { PNEUMONIA } from "./pneumonia.js";
import { ASTHMA } from "./asthma.js";
import { BRONCHITIS } from "./bronchitis.js";
import { COPD } from "./copd.js";
import { SINUSITIS } from "./sinusitis.js";
import { COMMON_COLD } from "./commonCold.js";

// ==============================
// ALL RESPIRATORY DISEASES
// ==============================

export const ALL_RESPIRATORY_DISEASES = [

  ...PNEUMONIA,

  ...ASTHMA,

  ...BRONCHITIS,

  ...COPD,

  ...SINUSITIS,

  ...COMMON_COLD
];

// ==============================
// RESPIRATORY DIAGNOSIS ENGINE
// ==============================

export function diagnoseRespiratoryDisease(
  userData = {}
) {

  const results = [];

  for (const disease of ALL_RESPIRATORY_DISEASES) {

    let score = 0;

    const matchedSymptoms = [];
    const contradictions = [];
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

          score += rule.weight || 0;

          matchedSymptoms.push(key);

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

          score += rule.weight || 0;

          matchedTests.push(key);

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

          score += rule.weight || 0;

          matchedCauses.push(key);
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

          score += rule.weight || 0;

          matchedRiskFactors.push(key);
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

        const rule =
          disease.complications[key];

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

        const rule =
          disease.red_flags[key];

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
    // DISEASE SPECIAL LOGIC
    // ==========================

// ASTHMA

if (

  disease.disease ===
  "Asthma" &&

  userData.wheezing === true &&

  userData.night_cough === true

) {

  score += 25;
}

if (

  disease.disease ===
  "Asthma" &&

  userData.spirometry_abnormal === true

) {

  score += 20;
}


// ==========================
// CORE ASTHMA REQUIREMENTS
// ==========================

if (

  disease.disease ===
  "Asthma"

) {

  // no wheezing

  if (

    !userData.wheezing &&

    !userData.wheeze_on_auscultation

  ) {

    score -= 35;

    if (

  !contradictions.includes(
    "no_wheezing"
  )

) {

  contradictions.push(
    "no_wheezing"
  );
}
  }

  // no breathlessness

  if (

    !userData.breathing_difficulty

  ) {

    score -= 20;

    if (

  !contradictions.includes(
    "no_breathing_difficulty"
  )

) {

  contradictions.push(
    "no_breathing_difficulty"
  );
}
  }

  // asthma trigger pattern

  if (

    userData.allergy_history ||

    userData.cold_weather_trigger ||

    userData.dust_exposure

  ) {

    score += 20;
  }

  // infection pattern less likely

  if (

    userData.high_fever ||

    userData.yellow_sputum ||

    userData.wbc_high

  ) {

    score -= 25;

    if (

  !contradictions.includes(
    "infection_pattern_present"
  )

) {

  contradictions.push(
    "infection_pattern_present"
  );
}
  }

  // COPD-like smoker

  if (

    userData.long_term_smoking &&

    userData.old_age

  ) {

    score -= 30;

    if (

  !contradictions.includes(
    "copd_smoking_pattern"
  )

) {

  contradictions.push(
    "copd_smoking_pattern"
  );
}
  }

  // strong asthma confirmation

  if (

    userData.spirometry_abnormal &&

    userData.wheezing

  ) {

    score += 20;
  }

}


// PNEUMONIA

if (

  disease.disease ===
  "Pneumonia" &&

  userData.high_fever === true &&

  userData.wet_cough === true

) {

  score += 25;
}

if (

  disease.disease ===
  "Pneumonia" &&

  userData.chest_xray_infiltrate === true

) {

  score += 20;
}


// ==========================
// CORE PNEUMONIA REQUIREMENTS
// ==========================

if (

  disease.disease ===
  "Pneumonia"

) {

  // no cough

  if (

    !userData.cough &&

    !userData.wet_cough

  ) {

    score -= 35;

    if (

  !contradictions.includes(
    "no_cough"
  )

) {

  contradictions.push(
    "no_cough"
  );
}
  }

  // no fever

  if (

    !userData.high_fever &&

    !userData.fever

  ) {

    score -= 25;

    if (

  !contradictions.includes(
    "no_fever"
  )

) {

  contradictions.push(
    "no_fever"
  );
}
  }

  // no respiratory distress

  if (

    !userData.breathing_difficulty &&

    !userData.rapid_breathing

  ) {

    score -= 15;

    if (

  !contradictions.includes(
    "no_respiratory_distress"
  )

) {

  contradictions.push(
    "no_respiratory_distress"
  );
}
  }

  // strong infection evidence

  if (

    userData.high_fever &&

    userData.wbc_high &&

    userData.crp_high

  ) {

    score += 30;
  }

  // xray confirmation

  if (

    userData.chest_xray_infiltrate

  ) {

    score += 50;
    if (

  !matchedTests.includes(
    "chest_xray_infiltrate"
  )

) {

  matchedTests.push(
    "chest_xray_infiltrate"
  );
}
  }

}


// COPD

if (

  disease.disease ===
  "Chronic Obstructive Pulmonary Disease" &&

  userData.smoking === true &&

  userData.chronic_cough === true

) {

  score += 30;
}

if (

  disease.disease ===
  "Chronic Obstructive Pulmonary Disease" &&

  userData.spirometry_obstructive_pattern === true

) {

  score += 45;
}


// ==========================
// CORE COPD REQUIREMENTS
// ==========================

if (

  disease.disease ===
  "Chronic Obstructive Pulmonary Disease"

) {

  // no smoking history

  if (

    !userData.long_term_smoking

  ) {

    score -= 35;

    if (

  !contradictions.includes(
    "no_smoking_history"
  )

) {

  contradictions.push(
    "no_smoking_history"
  );
}
  }

  // no chronic symptoms

  if (

    !userData.chronic_cough &&

    !userData.exercise_intolerance

  ) {

    score -= 25;

    if (

  !contradictions.includes(
    "no_chronic_symptoms"
  )

) {

  contradictions.push(
    "no_chronic_symptoms"
  );
}
  }

  // asthma-like patient

  if (

  userData.allergy_history &&

  userData.young_age

) {

  score -= 30;

  if (

    !contradictions.includes(
      "asthma_like_pattern"
    )

  ) {

    contradictions.push(
      "asthma_like_pattern"
    );
  }
}

  // infection-only pattern

  if (

    userData.high_fever &&

    userData.wbc_high &&

    !userData.long_term_smoking

  ) {

    score -= 25;
    if (

  !contradictions.includes(
    "infection_without_smoking_history"
  )

) {

  contradictions.push(
    "infection_without_smoking_history"
  );
}
  }

  // classic COPD pattern

  if (

    userData.long_term_smoking &&

    userData.barrel_chest &&

    userData.spirometry_obstructive_pattern

  ) {

    score += 50;
  }

  // emphysema confirmation

  if (

    userData.ct_emphysema ||

    userData.chest_xray_hyperinflation

  ) {

    score += 40;
  }

}
    // ==========================
    // NORMALIZE SCORE
    // ==========================

    score = Math.max(
      0,
      Math.min(score, 100)
    );

    // ==========================
    // TOTAL MATCH COUNT
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
    // DYNAMIC EMERGENCY LOGIC
    // ==========================

    if (

      userData.spo2_below_90 === true ||

      userData.severe_breathlessness === true ||

      userData.cyanosis === true ||

      userData.unconsciousness === true

    ) {

      emergencyDetected = true;

      score += 40;
      score = Math.min(score, 100);
    }

if (

  emergencyDetected &&

  score < 70

) {

  score = 70;
}

// ==========================
    // HEAVY CONTRADICTION PENALTY
    // ==========================

    if (

      contradictions.length >= 3

    ) {

      score -= 20;
    }
    
    // ==========================
// EXTREME CONTRADICTION DECAY
// ==========================

if (

  contradictions.length >= 5

) {

  score *= 0.7;
}
    
    // ==========================
// MINIMUM EVIDENCE FILTER
// ==========================

if (

  matchedSymptoms.length === 0 &&

  matchedTests.length === 0 &&

  matchedRedFlags.length === 0

) {

  score = 0;
}
    // ==========================
// WEAK MATCH REJECTION
// ==========================

if (

  matchedSymptoms.length <= 1 &&

  matchedTests.length === 0 &&

  contradictions.length >= 2

) {

  score = 0;
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

  score >= 90
    ? "Confirmed"

  : score >= 75
    ? "Very High"

  : score >= 60
    ? "High"

  : score >= 40
    ? "Medium"

  : score >= 20
    ? "Low"

    : "Very Low";

    // ==========================
    // REASON
    // ==========================

    let reason =

      matchedTests.length >= 2

        ? "Strong respiratory laboratory evidence detected"

      : matchedSymptoms.length >= 4

        ? "Strong respiratory symptom pattern detected"

      : matchedRedFlags.length >= 1

        ? "Critical respiratory warning signs detected"

      : "Partial respiratory disease pattern detected";

    if (

      contradictions.length >= 2

    ) {

      reason +=
        " with multiple contradictory findings";
    }

// ==========================
// CONTRADICTION SEVERITY
// ==========================

let contradictionLevel =

  contradictions.length >= 5
    ? "Severe"

  : contradictions.length >= 3
    ? "Moderate"

  : contradictions.length >= 1
    ? "Mild"

    : "None";
    
    
    // ==========================
    // RECOMMENDATION
    // ==========================

    const recommendation =

      emergencyDetected

        ? "Immediate hospital consultation recommended"

      : disease.severity === "severe"

        ? "Urgent physician consultation recommended"

      : disease.severity === "moderate"

        ? "Medical follow-up recommended"

      : "Rest and supportive care recommended";


score = Math.max(
  0,
  Math.min(score, 100)
);

    // ==========================
    // FINAL RESULT
    // ==========================

    results.push({

      disease: disease.disease,

      category: disease.category,

      severity: disease.severity,

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
      contradictions,
      contradictionLevel,

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

  (a, b) => {

    // emergency first

    if (

      a.emergency &&
      !b.emergency

    ) return -1;

    if (

      !a.emergency &&
      b.emergency

    ) return 1;

    // confirmed first

    if (

      a.confidenceLabel ===
      "Confirmed" &&

      b.confidenceLabel !==
      "Confirmed"

    ) return -1;

    if (

      b.confidenceLabel ===
      "Confirmed" &&

      a.confidenceLabel !==
      "Confirmed"

    ) return 1;

    // higher confidence

    return (
      b.confidence -
      a.confidence
    );
  }
);

  // ==============================
  // RETURN TOP MATCHES
  // ==============================

// remove extremely weak predictions

const filteredResults = results.filter(
  item => {

    // remove very low confidence
    if (item.confidence < 15) {
      return false;
    }

    // remove weak evidence
    if (

      (
  item.matchCount <= 1 &&
  item.confidence < 40
) ||

(
  item.contradictionLevel ===
  "Severe" &&

  item.confidence < 60
)

    ) {

      return false;
    }

    return true;
  }
);


  return filteredResults

    .filter(
      item => item.confidence > 0
    )

    .slice(0, 5);
}