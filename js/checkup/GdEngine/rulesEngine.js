export function applyRules({

  disease,
  userData,
  score,
  getMatch,
  matchCache

}) {

  // ==========================
  // AGE RULES
  // ==========================

  if (
    Array.isArray(
      disease.age_rules
    )
  ) {

    disease.age_rules
      .forEach(rule => {

        if (

          rule.min_age !==
          undefined &&

          typeof userData.age ===
          "number" &&

          userData.age >=
          rule.min_age

        ) {

          score +=
            rule.bonus || 0;
        }

        if (

          rule.max_age !==
          undefined &&

          typeof userData.age ===
          "number" &&

          userData.age <=
          rule.max_age

        ) {

          score +=
            rule.bonus || 0;
        }
      });
  }

  // ==========================
  // DURATION RULES
  // ==========================

  if (
    Array.isArray(
      disease.duration_rules
    )
  ) {

    disease.duration_rules
      .forEach(rule => {

        if (

          rule.min_days !==
          undefined &&

          typeof userData.duration ===
          "number" &&

          userData.duration >=
          rule.min_days

        ) {

          if (rule.bonus) {

            score +=
              rule.bonus;
          }

          if (rule.penalty) {

            score -=
              Math.abs(
                rule.penalty
              );
          }
        }

        if (

          rule.max_days !==
          undefined &&

          typeof userData.duration ===
          "number" &&

          userData.duration <=
          rule.max_days

        ) {

          score +=
            rule.bonus || 0;

          score -=
            Math.abs(
              rule.penalty || 0
            );
        }
      });
  }

  // ==========================
  // TYPICAL DURATION
  // ==========================

  if (
    disease.typical_duration
  ) {

    const duration =
      userData.duration;

    if (
      typeof duration ===
      "number"
    ) {

      if (

        duration <
        disease.typical_duration
          .min_days

      ) {

        score -= 10;
      }

      if (

        duration >
        disease.typical_duration
          .max_days

      ) {

        score -= 15;
      }
    }
  }

  // ==========================
  // REQUIRED SYMPTOMS
  // ==========================

  if (
    Array.isArray(
      disease.required_symptoms
    )
  ) {

    const requiredMatched =

      disease.required_symptoms
      .filter(symptom =>

        getMatch(
          symptom,
          {},
          userData,
          matchCache
        ).matched
      );

    // ======================
    // NO REQUIRED MATCH
    // ======================

    if (

      requiredMatched.length === 0

    ) {

      score *= 0.3;
    }

    // ======================
    // PARTIAL MATCH
    // ======================

    else if (

      requiredMatched.length <
      disease.required_symptoms.length

    ) {

      score *= 0.7;
    }

    // ======================
    // FULL MATCH
    // ======================

    else {

      score += 12;
    }
  }

  // ==========================
  // REQUIRED NEGATIVE SYMPTOMS
  // ==========================

  if (
    Array.isArray(
      disease.required_negative_symptoms
    )
  ) {

    disease
      .required_negative_symptoms

      .forEach(symptom => {

        const matched =

          getMatch(
            symptom,
            {},
            userData,
            matchCache
          ).matched;

        if (
          matched
        ) {

          score -= 40;
        }
      });
  }

  // ==========================
  // BONUS RULES
  // ==========================

  if (
    Array.isArray(
      disease.bonus_rules
    )
  ) {

    disease.bonus_rules
      .forEach(rule => {

        const symptoms =

          Array.isArray(
            rule.symptoms
          )

            ? rule.symptoms

            : [];

        const matched =

          rule.match === "any"

            ? symptoms.some(
                symptom =>

                  getMatch(
                    symptom,
                    {},
                    userData,
                    matchCache
                  ).matched
              )

            : symptoms.every(
                symptom =>

                  getMatch(
                    symptom,
                    {},
                    userData,
                    matchCache
                  ).matched
              );

        if (
          matched
        ) {

          score +=
            Math.abs(
              rule.bonus || 0
            );
        }
      });
  }

  // ==========================
  // EXCLUSION RULES
  // ==========================

  if (
    Array.isArray(
      disease.exclusion_rules
    )
  ) {

    disease.exclusion_rules
      .forEach(rule => {

        const symptoms =

          Array.isArray(
            rule.symptoms
          )

            ? rule.symptoms

            : [];

        const matched =

          rule.match === "all"

            ? symptoms.every(
                symptom =>

                  getMatch(
                    symptom,
                    {},
                    userData,
                    matchCache
                  ).matched
              )

            : symptoms.some(
                symptom =>

                  getMatch(
                    symptom,
                    {},
                    userData,
                    matchCache
                  ).matched
              );

        if (
          matched
        ) {

          score -=
            Math.abs(
              rule.penalty || 0
            );
        }
      });
  }

  // ==========================
  // SYMPTOM CLUSTERS
  // ==========================

  if (
    disease.symptom_clusters
  ) {

    Object.values(
      disease.symptom_clusters
    )

    .forEach(cluster => {

      const symptoms =

        cluster.symptoms || [];

      const matchedCount =

        symptoms.filter(symptom =>

          getMatch(
            symptom,
            {},
            userData,
            matchCache
          ).matched
        ).length;

      if (

        matchedCount >=
        (
          cluster.minimum_match || 2
        )

      ) {

        score +=
          cluster.bonus || 0;
      }
    });
  }

  // ==========================
  // PROGRESSION RULES
  // ==========================

  if (
    disease.progression
  ) {

    Object.entries(
      disease.progression
    )

    .forEach(

      ([key, rule]) => {

        const matched =

          getMatch(
            key,
            rule,
            userData,
            matchCache
          ).matched;

        if (

          matched &&

          rule.present === true

        ) {

          score +=
            Math.abs(
              rule.weight || 0
            );
        }

        if (

          matched &&

          rule.present === false

        ) {

          score -=
            Math.abs(
              rule.weight || 0
            );
        }
      }
    );
  }

  // ==========================
  // EPIDEMIOLOGY
  // ==========================

  if (
    disease.epidemiology
  ) {

    Object.entries(
      disease.epidemiology
    )

    .forEach(

      ([key, rule]) => {

        const matched =

          getMatch(
            key,
            rule,
            userData,
            matchCache
          ).matched;

        if (

          matched &&

          rule.present === true

        ) {

          score +=
            Math.abs(
              rule.weight || 0
            );
        }

        if (

          matched &&

          rule.present === false

        ) {

          score -=
            Math.abs(
              rule.weight || 0
            );
        }
      }
    );
  }

  // ==========================
  // RECOVERY SIGNS
  // ==========================

  if (
    disease.recovery_signs
  ) {

    Object.entries(
      disease.recovery_signs
    )

    .forEach(

      ([key, rule]) => {

        const matched =

          getMatch(
            key,
            rule,
            userData,
            matchCache
          ).matched;

        if (
          matched
        ) {

          score +=
            Math.abs(
              rule.weight || 0
            );
        }
      }
    );
  }

  // ==========================
  // TRIAGE BONUS
  // ==========================

  if (
    disease.triage
  ) {

    if (

      disease.triage.level ===
      "red"

    ) {

      score += 15;
    }

    else if (

      disease.triage.level ===
      "yellow"

    ) {

      score += 8;
    }
  }

  // ==========================
  // FINAL SAFETY
  // ==========================

  score = Math.max(
    0,
    Number(
      score.toFixed(2)
    )
  );

  return score;
}

export function detectContradictions({

  disease,
  userData,
  getMatch,
  score,
  matchCache,

  matchedSymptoms = [],
  matchedTests = [],
  matchedRedFlags = [],

  COMMON_SYMPTOMS = []

}) {

  // ==========================
  // STORAGE
  // ==========================

  const contradictions = [];

  const contradictionSet =
    new Set();

  let hardContradictions = 0;
  let softContradictions = 0;

  // ==========================
  // HELPER
  // ==========================

  function addContradiction(

    text,
    severity = "soft",
    penalty = 1

  ) {

    // ======================
    // DUPLICATE PROTECTION
    // ======================

    if (
      contradictionSet.has(text)
    ) {

      return;
    }

    contradictionSet.add(text);

    contradictions.push(text);

    // ======================
    // COUNTERS
    // ======================

    if (
      severity === "hard"
    ) {

      hardContradictions += penalty;

    }

    else {

      softContradictions += penalty;
    }
  }

  // ==========================
  // UNIQUE ANALYSIS
  // ==========================

  const uniqueSymptoms =

    matchedSymptoms.filter(
      symptom =>

        !COMMON_SYMPTOMS.includes(
          symptom
        )
    );

  const uniqueCount =
    uniqueSymptoms.length;

  const specificityRatio =

    uniqueCount /

    Math.max(
      matchedSymptoms.length,
      1
    );

  // ==========================
  // SYMPTOM CONTRADICTIONS
  // ==========================

  if (
    disease.symptoms
  ) {

    Object.entries(
      disease.symptoms
    )

    .forEach(

      ([key, rule]) => {

        const matchData =

          getMatch(
            key,
            rule,
            userData,
            matchCache
          );

        const userMatched =
          matchData?.matched || false;

        const weight =
          Math.min(
            Math.abs(
              rule.weight || 0
            ),
            10
          );

        // ======================
        // EXCLUDED SYMPTOM
        // ======================

        if (

          rule.present === false &&

          userMatched

        ) {

          if (
            weight >= 8
          ) {

            addContradiction(

              `Major contradiction: ${key}`,

              "hard",

              3
            );
          }

          else if (
            weight >= 5
          ) {

            addContradiction(

              `Strong contradiction: ${key}`,

              "hard",

              2
            );
          }

          else {

            addContradiction(

              `Contradiction: ${key}`,

              "soft",

              1
            );
          }
        }

        // ======================
        // REQUIRED SYMPTOM
        // ======================

        if (

          rule.present === true &&

          rule.required === true &&

          !userMatched

        ) {

          addContradiction(

            `Missing required symptom: ${key}`,

            matchedSymptoms.length >= 3
              ? "soft"
              : "hard",

            matchedSymptoms.length >= 3
              ? 1
              : 2
          );
        }
      }
    );
  }

  // ==========================
  // REQUIRED SYMPTOMS
  // ==========================

  if (
    Array.isArray(
      disease.required_symptoms
    )
  ) {

    disease.required_symptoms
    .forEach(symptom => {

      const matched =

        getMatch(
          symptom,
          {},
          userData,
          matchCache
        ).matched;

      if (!matched) {

        addContradiction(

          `Required symptom missing: ${symptom}`,

          matchedSymptoms.length >= 3
            ? "soft"
            : "hard",

          matchedSymptoms.length >= 3
            ? 1
            : 2
        );
      }
    });
  }

  // ==========================
  // TEST CONTRADICTIONS
  // ==========================

  if (
    disease.tests
  ) {

    Object.entries(
      disease.tests
    )

    .forEach(

      ([key, rule]) => {

        const matchData =

          getMatch(
            key,
            rule,
            userData,
            matchCache
          );

        const userMatched =
          matchData?.matched || false;

        // ======================
        // NEGATIVE TEST
        // ======================

        if (

          rule.present === false &&

          userMatched

        ) {

          addContradiction(

            `Test contradiction: ${key}`,

            "hard",

            2
          );
        }
      }
    );
  }

  // ==========================
  // RED FLAG CONTRADICTIONS
  // ==========================

  if (
    disease.red_flags
  ) {

    Object.entries(
      disease.red_flags
    )

    .forEach(

      ([key, rule]) => {

        const matchData =

          getMatch(
            key,
            rule,
            userData,
            matchCache
          );

        const userMatched =
          matchData?.matched || false;

        // ======================
        // IMPOSSIBLE RED FLAG
        // ======================

        if (

          rule.present === false &&

          userMatched

        ) {

          addContradiction(

            `Red flag contradiction: ${key}`,

            "hard",

            3
          );
        }
      }
    );
  }

  // ==========================
  // CLUSTER VALIDATION
  // ==========================

  if (
    disease.symptom_clusters
  ) {

    Object.entries(
      disease.symptom_clusters
    )

    .forEach(

      ([clusterName, cluster]) => {

        const symptoms =

          cluster.symptoms || [];

        const matchedCount =

          symptoms.filter(symptom =>

            getMatch(
              symptom,
              {},
              userData,
              matchCache
            ).matched
          ).length;

        // ======================
        // WEAK CLUSTER
        // ======================

      
      }
    );
  }

  // ==========================
  // AGE VALIDATION
  // ==========================

  if (

    disease.min_age != null &&

    userData.age != null &&

    userData.age < disease.min_age

  ) {

    addContradiction(

      `Age below minimum`,

      "hard",

      3
    );
  }

  if (

    disease.max_age != null &&

    userData.age != null &&

    userData.age > disease.max_age

  ) {

    addContradiction(

      `Age above maximum`,

      "hard",

      3
    );
  }

  // ==========================
  // GENDER VALIDATION
  // ==========================

  if (

    disease.gender &&

    userData.gender &&

    disease.gender !== "all"

  ) {

    if (
      disease.gender !==
      userData.gender
    ) {

      addContradiction(

        `Gender mismatch`,

        "hard",

        4
      );
    }
  }

  // ==========================
  // LOW SPECIFICITY
  // ==========================

  if (

    matchedSymptoms.length >= 4 &&

    specificityRatio < 0.15

  ) {

    addContradiction(

      `Low specificity pattern`,

      "soft",

      1
    );
  }

  // ==========================
  // ONLY COMMON SYMPTOMS
  // ==========================

  if (

    matchedSymptoms.length >= 5 &&

    uniqueCount === 0

  ) {

    addContradiction(

      `Only common symptoms detected`,

      "soft",

      2
    );
  }

  // ==========================
  // TOTAL
  // ==========================

  const totalContradictions =

    hardContradictions +
    softContradictions;

  // ==========================
  // LEVEL
  // ==========================

  let contradictionLevel =
    null;

  if (

    hardContradictions >= 10 ||

    totalContradictions >= 14

  ) {

    contradictionLevel =
      "critical";
  }

  else if (

    hardContradictions >= 6 ||

    totalContradictions >= 9

  ) {

    contradictionLevel =
      "high";
  }

  else if (

    hardContradictions >= 3 ||

    totalContradictions >= 5

  ) {

    contradictionLevel =
      "medium";
  }

  else if (
    totalContradictions >= 1
  ) {

    contradictionLevel =
      "low";
  }

  // ==========================
  // SCORE PENALTY
  // ==========================

  if (
    contradictionLevel ===
    "critical"
  ) {

    score *= 0.55;
  }

  else if (
    contradictionLevel ===
    "high"
  ) {

    score *= 0.72;
  }

  else if (
    contradictionLevel ===
    "medium"
  ) {

    score *= 0.86;
  }

  else if (
    contradictionLevel ===
    "low"
  ) {

    score *= 0.95;
  }

  // ==========================
  // EXTRA HARD PENALTY
  // ==========================

  if (
    hardContradictions >= 12
  ) {

    score *= 0.65;
  }

  // ==========================
  // FINAL LIMIT
  // ==========================

  score = Math.max(
    0,
    Math.round(score)
  );

  return {

    contradictions,

    contradictionLevel,

    hardContradictions,

    softContradictions,

    totalContradictions,

    specificityRatio,

    uniqueCount,

    score

  };
}

export function detectEmergency({

  matchedRedFlags = [],
  disease = {},
  userData = {},
  getMatch,
  matchCache = {},
  score = 0

}) {

  // ==========================
  // CRITICAL RED FLAGS
  // ==========================

  const CRITICAL_RED_FLAGS = [

    "vomiting_blood",

    "seizure",

    "collapse",

    "unconscious",

    "breathing_failure",

    "black_stool",

    "blood_in_sputum",

    "chest_pain",

    "severe_shortness_of_breath",

    "bloody_diarrhea",

    "severe_dehydration",

    "shock"

  ];

  // ==========================
  // SINGLE CRITICAL
  // ==========================

  const SINGLE_CRITICAL_SYMPTOMS = [

    "vomiting_blood",

    "black_stool",

    "blood_in_sputum",

    "severe_shortness_of_breath",

    "collapse",

    "unconscious",

    "seizure",

    "chest_pain"

  ];

  // ==========================
  // HARD EMERGENCY
  // ==========================

  const HARD_EMERGENCY_SYMPTOMS = [

    "vomiting_blood",

    "unconscious",

    "collapse",

    "seizure",

    "shock",

    "breathing_failure"

  ];

  // ==========================
  // UNIQUE RED FLAGS
  // ==========================

  const uniqueRedFlags = [

    ...new Set(
      matchedRedFlags
    )

  ];

  // ==========================
  // BASE DETECTION
  // ==========================

  let emergencyDetected =

    uniqueRedFlags.length >= 2 ||

    uniqueRedFlags.some(
      flag =>

        CRITICAL_RED_FLAGS.includes(
          flag
        )
    );

  // ==========================
  // SINGLE CRITICAL CHECK
  // ==========================

  const singleCriticalDetected =

    SINGLE_CRITICAL_SYMPTOMS
    .some(symptom =>

      getMatch(
        symptom,
        {},
        userData,
        matchCache
      ).matched
    );

  if (
    singleCriticalDetected
  ) {

    emergencyDetected = true;

    score += 15;
  }

  // ==========================
  // HARD EMERGENCY CHECK
  // ==========================

  const hardEmergencyDetected =

    HARD_EMERGENCY_SYMPTOMS
    .some(symptom =>

      getMatch(
        symptom,
        {},
        userData,
        matchCache
      ).matched
    );

  if (
    hardEmergencyDetected
  ) {

    emergencyDetected = true;

    score += 20;
  }

  // ==========================
  // GENERIC EMERGENCY RULES
  // ==========================

  if (
    Array.isArray(
      disease.emergency_symptoms
    )
  ) {

    const emergencyMatched =

      disease
        .emergency_symptoms

        .some(symptom =>

          getMatch(
            symptom,
            {},
            userData,
            matchCache
          ).matched
        );

    if (
      emergencyMatched
    ) {

      emergencyDetected =
        true;

      score += 12;
    }
  }

  // ==========================
  // RED FLAG BONUS
  // ==========================

  if (
    uniqueRedFlags.length >= 4
  ) {

    score += 20;
  }

  else if (
    uniqueRedFlags.length >= 3
  ) {

    score += 15;
  }

  else if (
    uniqueRedFlags.length >= 2
  ) {

    score += 10;
  }

  else if (
    uniqueRedFlags.length >= 1
  ) {

    score += 5;
  }

  // ==========================
  // DISEASE EMERGENCY BONUS
  // ==========================

  if (
    disease.emergency === true
  ) {

    score += 10;
  }

  // ==========================
  // EMERGENCY CATEGORY BONUS
  // ==========================

  if (

    disease.severity ===
    "severe"

  ) {

    score += 8;
  }

  // ==========================
  // MINIMUM EMERGENCY SCORE
  // ==========================

  if (

    emergencyDetected &&

    uniqueRedFlags.length >= 2 &&

    score < 35

  ) {

    score = 35;
  }

  // ==========================
  // SINGLE CRITICAL MINIMUM
  // ==========================

  if (

    singleCriticalDetected &&

    score < 45

  ) {

    score = 45;
  }

  // ==========================
  // HARD EMERGENCY MINIMUM
  // ==========================

  if (

    hardEmergencyDetected &&

    score < 60

  ) {

    score = 60;
  }

  // ==========================
  // MULTIPLE CRITICAL FLAGS
  // ==========================

  const criticalRedFlagCount =

    uniqueRedFlags.filter(
      flag =>

        CRITICAL_RED_FLAGS.includes(
          flag
        )
    ).length;

  if (

    criticalRedFlagCount >= 2 &&

    score < 75

  ) {

    score = 75;
  }

  // ==========================
  // FALSE EMERGENCY PROTECTION
  // ==========================

  if (

    uniqueRedFlags.length === 0 &&

    !singleCriticalDetected &&

    !hardEmergencyDetected

  ) {

    emergencyDetected = false;
  }

  // ==========================
  // FINAL LIMIT
  // ==========================

  score = Math.max(
    0,
    Math.min(
      100,
      Math.round(score)
    )
  );

  return {

    emergencyDetected,

    singleCriticalDetected,

    hardEmergencyDetected,

    criticalRedFlagCount,

    matchedEmergencyFlags:
      uniqueRedFlags,

    score

  };
}