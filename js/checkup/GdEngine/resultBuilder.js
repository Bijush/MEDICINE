
import {
  medicineFromMloader
}
from "../medPageLoader/medicineFromMloader.js";

export function buildResult({

  disease,

  score,
  confidenceLabel,

  totalMatches,

  emergencyDetected,

  matchedSymptoms = [],
  matchedTests = [],
  matchedRiskFactors = [],
  matchedCauses = [],
  matchedPhysicalExam = [],
  matchedComplications = [],
  matchedRedFlags = [],

  contradictions = [],
contradictionLevel = null,

clusterAnalysis = []

}) {

  // ==========================
  // TOP SYMPTOMS
  // ==========================

  const topSymptoms =

    [

      ...matchedSymptoms,

      ...matchedRedFlags

    ]

    .filter(Boolean)

    .slice(0, 5)

    .map(symptom =>

      symptom.replace(
        /_/g,
        " "
      )
    )

    .join(", ");

  // ==========================
  // DIFFERENTIAL
  // ==========================

  const differentialDiagnosis =

    disease
      .differential_diagnosis || [];

  // ==========================
  // REQUIRED SYMPTOMS
  // ==========================

  const requiredSymptoms =

    disease
      .required_symptoms || [];

  const matchedRequiredSymptoms =

    requiredSymptoms.filter(
      symptom =>

        matchedSymptoms.includes(
          symptom
        )
    );

  // ==========================
  // CLUSTERS
  // ==========================

  const matchedClusters = [];

  Object.entries(

    disease
      .symptom_clusters || {}

  )

  .forEach(

    ([clusterName, cluster]) => {

      const clusterMatches =

        (cluster.symptoms || [])

        .filter(
          symptom =>

            matchedSymptoms.includes(
              symptom
            )
        ).length;

      if (

        clusterMatches >=
        (
          cluster.minimum_match ||
          2
        )

      ) {

        matchedClusters.push(
          clusterName
        );
      }
    }
  );

  // ==========================
  // REASON
  // ==========================

  let reason =

    topSymptoms

      ? `Partial disease pattern detected (${topSymptoms})`

      : "Partial disease pattern detected";

  // ==========================
  // STRONG LAB EVIDENCE
  // ==========================

  if (

    matchedTests.length >= 2

  ) {

    reason =

      topSymptoms

        ? `Strong laboratory evidence detected (${topSymptoms})`

        : "Strong laboratory evidence detected";
  }

  // ==========================
  // STRONG SYMPTOM PATTERN
  // ==========================

  else if (

    matchedSymptoms.length >= 5 &&

    matchedTests.length >= 1

  ) {

    reason =

      topSymptoms

        ? `Strong symptom pattern detected (${topSymptoms})`

        : "Strong symptom pattern detected";
  }

  // ==========================
  // RED FLAGS
  // ==========================

  else if (

    matchedRedFlags.length >= 1 &&

    emergencyDetected

  ) {

    reason =

      topSymptoms

        ? `Critical warning signs detected (${topSymptoms})`

        : "Critical warning signs detected";
  }

  // ==========================
  // CLINICAL INTERPRETATION
  // ==========================

  let clinicalInterpretation =

    "Limited clinical evidence available";

  // ==========================
  // MULTIPLE CLUSTERS
  // ==========================

  if (

    matchedClusters.length >= 2 &&

    matchedSymptoms.length >= 4

  ) {

    clinicalInterpretation =

      "Multiple symptom clusters support this diagnosis";
  }

  // ==========================
  // REQUIRED SYMPTOMS
  // ==========================

  else if (

    matchedRequiredSymptoms.length >= 2

  ) {

    clinicalInterpretation =

      "Core disease-defining symptoms are present";
  }

  // ==========================
  // MODERATE PATTERN
  // ==========================

  else if (

    matchedSymptoms.length >= 4 &&

    totalMatches >= 5

  ) {

    clinicalInterpretation =

      "Symptom combination is clinically compatible";
  }

  // ==========================
  // RECOMMENDATION
  // ==========================

  let recommendation =

    "Rest and supportive care recommended";

  // ==========================
  // EMERGENCY
  // ==========================

  if (

    emergencyDetected

  ) {

    recommendation =

      matchedRedFlags.length >= 1

        ? "Immediate hospital consultation recommended"

        : "Urgent medical evaluation recommended";
  }

  // ==========================
  // SEVERE
  // ==========================

  else if (

    disease.severity ===
    "severe"

  ) {

    recommendation =

      "Urgent physician consultation recommended";
  }

  // ==========================
  // MODERATE
  // ==========================

  else if (

    disease.severity ===
    "moderate"

  ) {

    recommendation =

      "Medical follow-up recommended";
  }

  // ==========================
  // EMERGENCY REASON
  // ==========================

  let emergencyReason = "";

  if (

    matchedRedFlags.length >= 1

  ) {

    emergencyReason =

      `Emergency indicators detected: ${matchedRedFlags

        .map(flag =>

          flag.replace(
            /_/g,
            " "
          )
        )

        .join(", ")}`;
  }

  // ==========================
  // RECOVERY ASSESSMENT
  // ==========================

  let recoveryAssessment =

    "Recovery status unclear";

  if (

    disease.recovery_signs

  ) {

    const recoveryMatches =

      Object.keys(
        disease.recovery_signs
      )

      .filter(key =>

        matchedSymptoms.includes(
          key
        )
      );

    if (

      recoveryMatches.length >= 2

    ) {

      recoveryAssessment =

        "Signs of gradual recovery detected";
    }
  }

  // ==========================
  // TEST RECOMMENDATIONS
  // ==========================

  const recommendedTests =

    Object.keys(
      disease.tests || {}
    )

    .slice(0, 5);

  // ==========================
  // CONFIDENCE EXPLANATION
  // ==========================

  let confidenceExplanation =

    "Limited evidence";

  // ==========================
  // VERY STRONG
  // ==========================

  if (

    score >= 85 &&

    matchedSymptoms.length >= 5

  ) {

    confidenceExplanation =

      "Very strong clinical correlation";
  }

  // ==========================
  // STRONG
  // ==========================

  else if (

    score >= 70 &&

    matchedSymptoms.length >= 4

  ) {

    confidenceExplanation =

      "Strong diagnostic correlation";
  }

  // ==========================
  // MODERATE
  // ==========================

  else if (

    score >= 50

  ) {

    confidenceExplanation =

      "Moderate diagnostic correlation";
  }

  // ==========================
  // WEAK
  // ==========================

  else if (

    score >= 30

  ) {

    confidenceExplanation =

      "Weak but possible correlation";
  }

  // ==========================
  // CONTRADICTION EXPLANATION
  // ==========================

  let contradictionExplanation = "";

  if (

    contradictionLevel ===
    "high"

  ) {

    contradictionExplanation =

      "Several findings contradict this diagnosis";
  }

  else if (

    contradictionLevel ===
    "medium"

  ) {

    contradictionExplanation =

      "Some findings partially contradict this diagnosis";
  }

  // ==========================
  // FINAL RESULT
  // ==========================

  const {
  symptoms,
  tests,
  causes,
  risk_factors,
  physical_exam,
  red_flags,
  symptom_clusters,
  required_symptoms,
  required_negative_symptoms,
  ...autoFields
} = disease;
// medicine loader confidence

const intelligentMedicines =

  medicineFromMloader([
    disease.disease,
    ...matchedSymptoms
  ]);

console.log(
  "Disease Name:",
  disease.disease
);

console.log(
  "Disease:",
  disease.disease
);

console.log(
  "Loader Medicines Length:",
  intelligentMedicines?.length
);

console.log(
  "First Medicine:",
  intelligentMedicines?.[0]
);

console.log(
  "Full Medicines:",
  JSON.stringify(
    intelligentMedicines,
    null,
    2
  )
);
  
return {

  // ======================
  // AUTO DISEASE FIELDS
  // ======================

  ...autoFields,
intelligentMedicines,
  // ======================
  // CORE RESULT DATA
  // ======================

  confidence:
    Math.round(score),

  confidenceLabel,

  confidenceExplanation,

  matchCount:
    totalMatches,

  reason,

  clinicalInterpretation,

  recommendation,

  emergency:
    emergencyDetected,

  emergencyReason,

  recoveryAssessment,

  differentialDiagnosis,

  recommendedTests,

  matchedClusters,

  clusterAnalysis,

  matchedRequiredSymptoms,

  matchedSymptoms,

  matchedTests,

  matchedRiskFactors,

  matchedCauses,

  matchedPhysicalExam,

  matchedComplications,

  matchedRedFlags,

  contradictions,

  contradictionLevel,

  contradictionExplanation

};
}