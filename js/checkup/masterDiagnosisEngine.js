// ==============================
// MASTER DIAGNOSIS ENGINE
// ==============================

import {
  diagnoseLiverDisease
} from "../../data/checkup/liver/liverEngine.js";

import {
  diagnoseFeverDisease
} from "../../data/checkup/fever/feverEngine.js";

import {
  diagnoseRespiratoryDisease
} from "../../data/checkup/respiratory/respiratoryEngine.js";

import {
  diagnoseStomachDisease
} from "../../data/checkup/stomach/stomachEngine.js";

import {
  SYMPTOM_WEIGHTS
} from "./symptomWeights.js";


// ==============================
// MASTER ENGINE
// ==============================

export function diagnosePatient(
  userData = {}
) {

  let allResults = [];

  // ==========================
  // LIVER
  // ==========================

  try {

    const liverResults =
      diagnoseLiverDisease(
        userData
      );

    allResults.push(
      ...liverResults
    );

  } catch (err) {

    console.error(
      "Liver Engine Error:",
      err
    );
  }

  // ==========================
  // FEVER
  // ==========================

  try {

    const feverResults =
      diagnoseFeverDisease(
        userData
      );

    allResults.push(
      ...feverResults
    );

  } catch (err) {

    console.error(
      "Fever Engine Error:",
      err
    );
  }

  // ==========================
  // RESPIRATORY
  // ==========================

  try {

    const respiratoryResults =
      diagnoseRespiratoryDisease(
        userData
      );

    allResults.push(
      ...respiratoryResults
    );

  } catch (err) {

    console.error(
      "Respiratory Engine Error:",
      err
    );
  }

  // ==========================
  // STOMACH
  // ==========================

  try {

    const stomachResults =
      diagnoseStomachDisease(
        userData
      );

    allResults.push(
      ...stomachResults
    );

  } catch (err) {

    console.error(
      "Stomach Engine Error:",
      err
    );
  }

  // ==========================
  // REMOVE DUPLICATES
  // ==========================

  const uniqueDiseases = {};

  allResults.forEach(item => {

    const key =
      item.disease;

    if (

      !uniqueDiseases[key] ||

      item.confidence >

      uniqueDiseases[key]
        .confidence

    ) {

      uniqueDiseases[key] =
        item;
    }
  });

  allResults =
    Object.values(
      uniqueDiseases
    );

  // ==========================
  // REMOVE LOW CONFIDENCE
  // ==========================

  allResults = allResults.filter(

    item => item.confidence >= 20
  );

  // ==========================
  // DYNAMIC EMERGENCY
  // ==========================

  if (

    userData.unconsciousness ||

    userData.shock ||

    userData.spo2_below_90 ||

    userData.cyanosis ||

    userData.vomiting_blood ||

    userData.black_stool

  ) {

    allResults = allResults.map(
  item => {

    let emergency = false;

    if (

      item.category ===
      "respiratory" &&

      (
        userData.spo2_below_90 ||
        userData.cyanosis
      )

    ) {

      emergency = true;
    }

    if (

      item.category ===
      "stomach" &&

      (
        userData.vomiting_blood ||
        userData.black_stool
      )

    ) {

      emergency = true;
    }

    if (

      userData.unconsciousness ||
      userData.shock

    ) {

      emergency = true;
    }

    return {

      ...item,

      emergency
    };
  }
);
  }

  // ==========================
  // CATEGORY BOOST
  // ==========================

  allResults = allResults.map(
    item => {

      let adjustedConfidence =
        item.confidence;
        
        // ==========================
// APPLY WEIGHTS
// ==========================

Object.keys(userData)

  .forEach(symptom => {

    if (

      userData[symptom] &&

      SYMPTOM_WEIGHTS[
        symptom
      ]

    ) {

      adjustedConfidence +=

        SYMPTOM_WEIGHTS[
          symptom
        ] * 0.3;
    }
  });
        
        
if (

  userData.duration > 14 &&

  item.category ===
  "respiratory"

) {

  adjustedConfidence += 5;
}
      // respiratory emergency

      if (

        item.category ===
        "respiratory" &&

        userData.severe_breathlessness

      ) {

        adjustedConfidence += 5;
      }

      // stomach bleeding

      if (

        item.category ===
        "stomach" &&

        (
          userData.vomiting_blood ||

          userData.black_stool
        )

      ) {

        adjustedConfidence += 7;
      }

      // liver jaundice

      if (

        item.category ===
        "liver" &&

        (
          userData.yellow_skin ||

          userData.yellow_eyes
        )

      ) {

        adjustedConfidence += 7;
      }

      // fever + chills

      if (

        item.category ===
        "fever" &&

        (
          userData.high_fever &&
          userData.chills
        )

      ) {

        adjustedConfidence += 5;
      }

      adjustedConfidence =
        Math.min(
          adjustedConfidence,
          95
        );

      return {

  ...item,

  confidence:
    adjustedConfidence,

  confidenceLabel:

    adjustedConfidence >= 85

      ? "Strong Match"

      : adjustedConfidence >= 65

        ? "Likely"

        : adjustedConfidence >= 40

          ? "Possible"

          : "Weak Match"
};
    }
  );



// ==========================
// CONTRADICTION PENALTIES
// ==========================

allResults = allResults.map(
  item => {

    let adjustedConfidence =
      item.confidence;

    // ======================
    // RESPIRATORY CONTRADICTION
    // ======================

    if (

      item.category ===
      "respiratory"

    ) {

      // no cough

      if (
        !userData.cough &&
        !userData.dry_cough &&
        !userData.wet_cough
      ) {

        adjustedConfidence -= 20;
      }

      // no breathing issue

      if (
        !userData.breathing_difficulty &&
        !userData.wheezing
      ) {

        adjustedConfidence -= 10;
      }
    }

    // ======================
    // LIVER CONTRADICTION
    // ======================

    if (

      item.category ===
      "liver"

    ) {

      if (
        !userData.yellow_skin &&
        !userData.yellow_eyes &&
        !userData.dark_urine
      ) {

        adjustedConfidence -= 25;
      }
    }

    // ======================
    // STOMACH CONTRADICTION
    // ======================

    if (

      item.category ===
      "stomach"

    ) {

      if (
        !userData.abdominal_pain &&
        !userData.vomiting &&
        !userData.diarrhea
      ) {

        adjustedConfidence -= 20;
      }
    }

    // ======================
    // FEVER CONTRADICTION
    // ======================

    if (

      item.category ===
      "fever"

    ) {

      if (
        !userData.fever &&
        !userData.high_fever
      ) {

        adjustedConfidence -= 25;
      }
    }

    // ======================
    // LIMITS
    // ======================

    adjustedConfidence =
      Math.max(
        adjustedConfidence,
        0
      );

    return {

  ...item,

  confidence:
    adjustedConfidence,

  confidenceLabel:

    adjustedConfidence >= 85

      ? "Strong Match"

      : adjustedConfidence >= 65

        ? "Likely"

        : adjustedConfidence >= 40

          ? "Possible"

          : "Weak Match"
};
  }
);

// ==========================
// DISEASE EXCLUSION RULES
// ==========================

allResults = allResults.map(
  item => {

    let adjustedConfidence =
      item.confidence;

    // ======================
    // ASTHMA
    // ======================

    if (

      item.disease ===
      "Asthma"

    ) {

      if (

        !userData.wheezing

      ) {

        adjustedConfidence -= 25;
      }

      if (

        !userData.breathing_difficulty

      ) {

        adjustedConfidence -= 20;
      }

      if (

        userData.long_term_smoking

      ) {

        adjustedConfidence -= 10;
      }
    }

    // ======================
    // COPD
    // ======================

    if (

      item.disease ===
      "Chronic Obstructive Pulmonary Disease"

    ) {

      if (

        !userData.long_term_smoking

      ) {

        adjustedConfidence -= 30;
      }

      if (

        !userData.chronic_cough

      ) {

        adjustedConfidence -= 15;
      }
    }

    // ======================
    // PNEUMONIA
    // ======================

    if (

      item.disease ===
      "Pneumonia"

    ) {

      if (

        !userData.fever &&
        !userData.high_fever

      ) {

        adjustedConfidence -= 25;
      }

      if (

        !userData.cough

      ) {

        adjustedConfidence -= 20;
      }
    }

    // ======================
    // HEPATITIS
    // ======================

    if (

      item.disease ===
      "Hepatitis"

    ) {

      if (

        !userData.yellow_skin &&
        !userData.yellow_eyes

      ) {

        adjustedConfidence -= 30;
      }

      if (

        !userData.dark_urine

      ) {

        adjustedConfidence -= 10;
      }
    }

    // ======================
    // GASTRITIS
    // ======================

    if (

      item.disease ===
      "Gastritis"

    ) {

      if (

        !userData.upper_abdominal_pain

      ) {

        adjustedConfidence -= 20;
      }

      if (

        !userData.acidity

      ) {

        adjustedConfidence -= 15;
      }
    }

    // ======================
    // LIMITS
    // ======================

    adjustedConfidence =
      Math.max(
        adjustedConfidence,
        0
      );

    return {

  ...item,

  confidence:
    adjustedConfidence,

  confidenceLabel:

    adjustedConfidence >= 85

      ? "Strong Match"

      : adjustedConfidence >= 65

        ? "Likely"

        : adjustedConfidence >= 40

          ? "Possible"

          : "Weak Match"
};
  }
);
// ==========================
// SAME CATEGORY SUPPRESSION
// ==========================

allResults = allResults.map(
  item => {

    let adjustedConfidence =
      item.confidence;

    // respiratory overlap

    if (

      item.category ===
      "respiratory"

    ) {

      // asthma-like but COPD predicted

      if (

        userData.wheezing &&

        !userData.long_term_smoking &&

        item.disease ===
        "Chronic Obstructive Pulmonary Disease"

      ) {

        adjustedConfidence -= 20;
      }

      // smoker but asthma predicted

      if (

        userData.long_term_smoking &&

        item.disease ===
        "Asthma"

      ) {

        adjustedConfidence -= 15;
      }
    }

    return {

  ...item,

  confidence:
    Math.max(
      adjustedConfidence,
      0
    ),

  confidenceLabel:

    adjustedConfidence >= 85

      ? "Strong Match"

      : adjustedConfidence >= 65

        ? "Likely"

        : adjustedConfidence >= 40

          ? "Possible"

          : "Weak Match"
};
  }
);


// ==========================
// FINAL SAFETY FILTER
// ==========================

allResults = allResults.filter(
  item => {

    // remove zero confidence

    if (
      item.confidence <= 0
    ) {

      return false;
    }

    // weak evidence remove

    if (

      item.matchCount <= 1 &&

      item.confidence < 40

    ) {

      return false;
    }

    // too many contradictions

    if (

      item.contradictions &&

      item.contradictions.length >= 5 &&

      item.confidence < 70

    ) {

      return false;
    }

    return true;
  }
);

  // ==========================
  // SORT RESULTS
  // ==========================

  allResults.sort(

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



    // confirmed confidence first

    if (

      a.confidence >= 90 &&

      b.confidence < 90

    ) return -1;

    if (

      b.confidence >= 90 &&

      a.confidence < 90

    ) return 1;

    // higher confidence

    return (
      b.confidence -
      a.confidence
    );
  }
);

  // ==========================
  // TOP MATCH
  // ==========================

  const topMatch =
    allResults[0] || null;
    
    
    
// ==========================
// OVERALL PATIENT SEVERITY
// ==========================

let overallSeverity = "mild";

if (

  allResults.some(
    x => x.emergency
  )

) {

  overallSeverity =
    "critical";

} else if (

  allResults.some(
    x =>
      x.severity ===
      "severe"
  )

) {

  overallSeverity =
    "severe";

} else if (

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
  // EMERGENCY CHECK
  // ==========================

  const emergencyDiseases =

    allResults.filter(
      item => item.emergency
    );

  // ==========================
  // FINAL RESPONSE
  // ==========================

  return {

    success: true,

    totalMatches:
      allResults.length,

    topMatch,

    emergencyDetected:
      emergencyDiseases.length > 0,

    emergencyDiseases,
    overallSeverity,

    allResults:

      allResults.slice(0, 10)
  };
}