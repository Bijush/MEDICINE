export function applyScore({

  section = {},
  userData = {},
  matchCache = {},
  getMatch,

  matchedArray = [],
  addUnique,

  score = 0,

  COMMON_SYMPTOMS = [],
  reduceCommon = false,

  sectionMultiplier = 1

}) {

  let matchedCount = 0;
  let uniqueCount = 0;
  let contradictionCount = 0;

  const safeMultiplier =

    Math.max(
      0.35,
      Math.min(
        sectionMultiplier || 1,
        3
      )
    );

  for (const key in section) {

    const rule = section[key];

    if (!rule)
      continue;

    const matchData =

      getMatch(
        key,
        rule,
        userData,
        matchCache
      );

    const userMatched =
      matchData?.matched || false;

    const strength =

      Math.max(
        0,
        Math.min(
          matchData?.strength || 1,
          1.5
        )
      );

    let weight =

      Math.max(
        1,
        Math.min(
          Math.abs(
            rule.weight || 1
          ),
          15
        )
      );

    const isCommon =

      COMMON_SYMPTOMS.includes(
        key
      );

    // ======================
    // NEGATIVE RULE
    // ======================

    if (

      rule.present === false &&

      userMatched

    ) {

      contradictionCount++;

      score -=
        weight *
        0.8 *
        safeMultiplier;

      continue;

    }

    // ======================
    // POSITIVE MATCH
    // ======================

    if (

      userMatched

    ) {

      matchedCount++;

      if (

        reduceCommon &&

        isCommon

      ) {

        weight *= 0.72;

      }

      else {

        uniqueCount++;

        if (

          weight >= 10

        ) {

          weight *= 1.35;

        }

        else if (

          weight >= 6

        ) {

          weight *= 1.18;

        }

      }

      let finalScore =

        weight *
        strength *
        safeMultiplier;

      // cluster-like boost

      if (

        matchedCount >= 4 &&

        uniqueCount >= 2

      ) {

        finalScore *= 1.08;

      }

      // supportive sections

      if (

        safeMultiplier >= 1.5

      ) {

        finalScore *= 1.12;

      }

      score += finalScore;

      addUnique(
        matchedArray,
        key
      );

    }

    // ======================
    // REQUIRED PRESENT BUT FALSE
    // ======================

    else if (

      key in userData &&

      userData[key] === false &&

      rule.present === true

    ) {

      contradictionCount++;

      score -=
        weight *
        0.12 *
        safeMultiplier;

    }

  }

  // ======================
  // SPECIFICITY
  // ======================

  const specificityRatio =

    uniqueCount /

    Math.max(
      matchedCount,
      1
    );

  // ======================
  // LOW SPECIFICITY PENALTY
  // ======================

  if (

    matchedCount >= 4 &&

    specificityRatio < 0.25

  ) {

    score *= 0.86;

  }

  // ======================
  // HIGH SPECIFICITY BONUS
  // ======================

  if (

    matchedCount >= 3 &&

    specificityRatio >= 0.55

  ) {

    score *= 1.12;

  }

  // ======================
  // CONTRADICTION PENALTY
  // ======================

  if (

    contradictionCount >= 5

  ) {

    score *= 0.72;

  }

  else if (

    contradictionCount >= 3

  ) {

    score *= 0.86;

  }

  // ======================
  // LOW MATCH
  // ======================

  if (

    matchedCount <= 1

  ) {

    score *= 0.55;

  }

  else if (

    matchedCount <= 2

  ) {

    score *= 0.8;

  }

  score = Math.max(

    0,

    Number(
      score.toFixed(2)
    )

  );

  return score;

}

// ========================================
// APPLY BONUSES
// ========================================

export function applyBonuses({

  score = 0,

  matchedSymptoms = [],
  matchedTests = [],
  matchedRedFlags = [],
  matchedRiskFactors = [],
  matchedCauses = [],
  matchedPhysicalExam = [],
  matchedComplications = [],

  COMMON_SYMPTOMS = [],

  disease = {},
  totalMatches = 0

}) {

  const uniqueSymptoms =

    matchedSymptoms.filter(
      symptom =>

        !COMMON_SYMPTOMS.includes(
          symptom
        )
    );

  const uniqueCount =
    uniqueSymptoms.length;

  const commonCount =

    matchedSymptoms.filter(
      symptom =>

        COMMON_SYMPTOMS.includes(
          symptom
        )
    ).length;

  const specificityRatio =

    uniqueCount /

    Math.max(
      matchedSymptoms.length,
      1
    );

  // ======================
  // GOLD SYMPTOMS
  // ======================

  const goldSymptoms =

    disease.gold_symptoms || [];

  const goldMatchedCount =

    goldSymptoms.filter(
      symptom =>

        matchedSymptoms.includes(
          symptom
        )
    ).length;

  // ======================
  // MINIMUM PROTECTION
  // ======================

  if (

    matchedSymptoms.length < 2 &&

    matchedTests.length === 0

  ) {

    score *= 0.82;

  }

  // ======================
  // SYMPTOM BONUS
  // ======================

  if (

    matchedSymptoms.length >= 7

  ) {

    score += 18;

  }

  else if (

    matchedSymptoms.length >= 5

  ) {

    score += 12;

  }

  else if (

    matchedSymptoms.length >= 3

  ) {

    score += 7;

  }

  // ======================
  // UNIQUE BONUS
  // ======================

  if (

    uniqueCount >= 5

  ) {

    score += 12;

  }

  else if (

    uniqueCount >= 3

  ) {

    score += 7;

  }

  // ======================
  // TEST BONUS
  // ======================

  if (

    matchedTests.length >= 2

  ) {

    score += 8;

  }

  else if (

    matchedTests.length >= 1

  ) {

    score += 4;

  }

  // ======================
  // RED FLAG BONUS
  // ======================

  if (

    matchedRedFlags.length >= 2

  ) {

    score += 6;

  }

  else if (

    matchedRedFlags.length >= 1

  ) {

    score += 3;

  }

  // ======================
  // MULTI CATEGORY
  // ======================

  const categoryMatches = [

    matchedSymptoms.length,
    matchedTests.length,
    matchedRiskFactors.length,
    matchedCauses.length,
    matchedPhysicalExam.length,
    matchedComplications.length

  ]

  .filter(
    x => x > 0
  )

  .length;

  if (

    categoryMatches >= 5

  ) {

    score += 10;

  }

  else if (

    categoryMatches >= 3

  ) {

    score += 5;

  }

  // ======================
  // COMMON PENALTY
  // ======================

  if (

    matchedSymptoms.length > 0 &&

    commonCount >=
    matchedSymptoms.length

  ) {

    score *= 0.88;

  }

  // ======================
  // LOW SPECIFICITY
  // ======================

  if (

    specificityRatio < 0.18

  ) {

    score *= 0.84;

  }

  // ======================
  // PREVALENCE BONUS
  // ======================

  if (

    disease.prevalence ===
    "common"

  ) {

    score += 5;

  }

  else if (

    disease.prevalence ===
    "moderate"

  ) {

    score += 2;

  }

  else if (

    disease.prevalence ===
    "uncommon"

  ) {

    score -= 2;

  }

  else if (

    disease.prevalence ===
    "rare"

  ) {

    score -= 5;

  }

  // ======================
  // PRIORITY BONUS
  // ======================

  if (

    totalMatches >= 3

  ) {

    score += Math.min(

      (
        disease.priority || 0
      ) * 0.4,

      10

    );

  }

  // ======================
  // GOLD SYMPTOM BONUS
  // ======================

  if (

    goldMatchedCount >= 3

  ) {

    score += 18;

  }

  else if (

    goldMatchedCount >= 2

  ) {

    score += 10;

  }

  else if (

    goldMatchedCount >= 1

  ) {

    score += 5;

  }

  // ======================
  // PATHOGNOMONIC BONUS
  // ======================

  const pathognomonicSymptoms =

    disease.pathognomonic_symptoms || [];

  const pathognomonicMatched =

    pathognomonicSymptoms.some(
      symptom =>

        matchedSymptoms.includes(
          symptom
        )
    );

  if (

    pathognomonicMatched

  ) {

    score += 25;

  }

  // ======================
  // HIGH CONFIDENCE
  // ======================

  if (

    uniqueCount >= 3 &&

    specificityRatio >= 0.5

  ) {

    score += 8;

  }

  // ======================
  // VERY SPECIFIC PATTERN
  // ======================

  if (

    specificityRatio >= 0.75 &&

    uniqueCount >= 4

  ) {

    score += 10;

  }

  score = Math.max(

    0,

    Math.round(
      score
    )

  );

  return score;

}


export function applyFollowupBoosts({

  disease,
  userData,
  score

}) {

  if (

    !disease.followup_boosts

  ) {

    return score;

  }

  // ======================
  // FOLLOWUP BOOSTS
  // ======================

  Object.keys(

    disease.followup_boosts

  )

  .forEach(

    symptom => {

      const matchedFollowup =

        Object.keys(
          userData
        )

        .some(

          key =>

            userData[key] === true &&

            (

              key === symptom ||

              key.startsWith(
                `${symptom}_`
              )

            )

        );

      if (

        matchedFollowup

      ) {

        score +=

          disease
            .followup_boosts[
              symptom
            ];

      }

    }

  );

  // ======================
  // GOLD FOLLOWUPS
  // ======================

  if (

    Array.isArray(
      disease.gold_symptoms
    )

  ) {

    const goldMatchedCount =

      disease.gold_symptoms.filter(

        symptom =>

          Object.keys(
            userData
          )

          .some(

            key =>

              userData[key] === true &&

              (

                key === symptom ||

                key.startsWith(
                  `${symptom}_`
                )

              )

          )

      ).length;

    if (

      goldMatchedCount >= 3

    ) {

      score += 20;

    }

    else if (

      goldMatchedCount >= 2

    ) {

      score += 12;

    }

    else if (

      goldMatchedCount >= 1

    ) {

      score += 6;

    }

  }

  // ======================
  // PATHOGNOMONIC FOLLOWUPS
  // ======================

  if (

    Array.isArray(
      disease.pathognomonic_symptoms
    )

  ) {

    const pathognomonicMatched =

      disease.pathognomonic_symptoms.some(

        symptom =>

          Object.keys(
            userData
          )

          .some(

            key =>

              userData[key] === true &&

              (

                key === symptom ||

                key.startsWith(
                  `${symptom}_`
                )

              )

          )

      );

    if (

      pathognomonicMatched

    ) {

      score += 25;

    }

  }

  return score;

}



export function calculateConfidence({

  score,
  disease,

  matchedSymptoms = [],
  matchedTests = [],
  matchedRedFlags = [],

  totalMatches = 0,

  CONFIDENCE_RULES = []

}) {

  // ==========================
  // SAFE SCORE
  // ==========================

  score = Number(
    score || 0
  );

  // ==========================
  // MATCH BONUS
  // ==========================

  score +=

    matchedSymptoms.length * 5 +

    matchedTests.length * 4 +

    matchedRedFlags.length * 8;

  // ==========================
  // TOTAL MATCH BONUS
  // ==========================

  if (

    totalMatches >= 10

  ) {

    score += 12;

  }

  else if (

    totalMatches >= 7

  ) {

    score += 8;

  }

  else if (

    totalMatches >= 4

  ) {

    score += 5;

  }

  // ==========================
  // SOFT NORMALIZATION
  // ==========================

  const maxPossibleScore =

    [

      disease.symptoms,

      disease.tests,

      disease.red_flags,

      disease.physical_exam,

      disease.complications

    ]

    .reduce(

      (
        total,
        section
      ) => {

        if (
          !section
        ) {

          return total;

        }

        return (

          total +

          Object.values(
            section
          )

          .reduce(

            (
              sum,
              item
            ) => {

              if (

                item.present === true

              ) {

                return (

                  sum +

                  Math.min(

                    Math.abs(

                      item.weight || 0

                    ),

                    10

                  )

                );

              }

              return sum;

            },

            0

          )

        );

      },

      0

    );

  // ==========================
  // NORMALIZE
  // ==========================

  if (

    maxPossibleScore > 0

  ) {

    score =

      (

        score /

        (

          maxPossibleScore +

          20

        )

      ) * 100;

  }

  // ==========================
  // SAFE LIMIT
  // ==========================

  score = Math.max(

    1,

    Math.min(

      Math.round(
        score
      ),

      100

    )

  );

  // ==========================
  // MINIMUM PROTECTION
  // ==========================

  if (

    matchedSymptoms.length >= 3 &&

    score < 15

  ) {

    score = 15;

  }

  // ==========================
  // STRONG PATTERN BONUS
  // ==========================

  if (

    matchedSymptoms.length >= 7

  ) {

    score += 15;

  }

  else if (

    matchedSymptoms.length >= 5

  ) {

    score += 10;

  }

  else if (

    matchedSymptoms.length >= 3

  ) {

    score += 5;

  }

  // ==========================
  // TEST BONUS
  // ==========================

  if (

    matchedTests.length >= 2

  ) {

    score += 8;

  }

  else if (

    matchedTests.length >= 1

  ) {

    score += 4;

  }

  // ==========================
  // PATHOGNOMONIC BONUS
  // ==========================

  const pathognomonicMatched =

    (

      disease
        .pathognomonic_symptoms || []

    )

    .some(

      symptom =>

        matchedSymptoms.includes(
          symptom
        )

    );

  if (

    pathognomonicMatched

  ) {

    score += 20;

  }

  // ==========================
  // GOLD SYMPTOMS BONUS
  // ==========================

  const goldSymptoms =

    disease.gold_symptoms || [];

  const goldMatchedCount =

    goldSymptoms.filter(

      symptom =>

        matchedSymptoms.includes(
          symptom
        )

    ).length;

  if (

    goldMatchedCount >= 3

  ) {

    score += 18;

  }

  else if (

    goldMatchedCount >= 2

  ) {

    score += 10;

  }

  else if (

    goldMatchedCount >= 1

  ) {

    score += 5;

  }

  // ==========================
  // RED FLAG BONUS
  // ==========================

  if (

    matchedRedFlags.length >= 2

  ) {

    score += 10;

  }

  else if (

    matchedRedFlags.length >= 1

  ) {

    score += 5;

  }

  // ==========================
  // ORGAN SYSTEM BONUS
  // ==========================

  if (

    disease.organ_system

  ) {

    score += 3;

  }

  // ==========================
  // FINAL LIMIT
  // ==========================

  score = Math.max(

    1,

    Math.min(

      Math.round(
        score
      ),

      100

    )

  );

  // ==========================
  // LABEL
  // ==========================

  const confidenceLabel =

    CONFIDENCE_RULES.find(

      rule =>

        score >= rule.min

    )?.label ||

    "Weak Match";

  return {

    score,

    confidenceLabel

  };

}

export function calculateTotalMatches({

  matchedSymptoms = [],
  matchedTests = [],
  matchedRedFlags = [],
  matchedRiskFactors = [],
  matchedComplications = [],
  matchedPhysicalExam = []

}) {

  // ==========================
  // UNIQUE MATCHES
  // ==========================

  const uniqueMatches = new Set([

    ...matchedSymptoms,

    ...matchedTests,

    ...matchedRedFlags,

    ...matchedRiskFactors,

    ...matchedComplications,

    ...matchedPhysicalExam

  ]);

  // ==========================
  // WEIGHTED TOTAL
  // ==========================

  let total =

    // Symptoms are most important
    (matchedSymptoms.length * 4) +

    // Red flags are highly important
    (matchedRedFlags.length * 3) +

    // Physical findings
    (matchedPhysicalExam.length * 2.5) +

    // Complications
    (matchedComplications.length * 2) +

    // Risk factors
    (matchedRiskFactors.length * 1.5) +

    // Tests are supportive, not dominant
    (matchedTests.length * 1);

  // ==========================
  // MULTI-SYSTEM BONUS
  // ==========================

  const categoryCount = [

    matchedSymptoms.length,

    matchedTests.length,

    matchedRedFlags.length,

    matchedRiskFactors.length,

    matchedComplications.length,

    matchedPhysicalExam.length

  ]

  .filter(

    count => count > 0

  )

  .length;

  if (

    categoryCount >= 5

  ) {

    total += 10;

  }

  else if (

    categoryCount >= 4

  ) {

    total += 7;

  }

  else if (

    categoryCount >= 3

  ) {

    total += 4;

  }

  // ==========================
  // UNIQUE FINDINGS BONUS
  // ==========================

  total +=

    Math.min(

      uniqueMatches.size,

      12

    );

  // ==========================
  // STRONG SYMPTOM PATTERN BONUS
  // ==========================

  if (

    matchedSymptoms.length >= 7

  ) {

    total += 10;

  }

  else if (

    matchedSymptoms.length >= 5

  ) {

    total += 6;

  }

  else if (

    matchedSymptoms.length >= 3

  ) {

    total += 3;

  }

  // ==========================
  // ROUND
  // ==========================

  total =

    Math.round(

      total

    );

  // ==========================
  // RETURN
  // ==========================

  return total;

}
