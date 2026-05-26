export function processSection({

  disease,
  sectionKey,

  userData,
  matchCache,

  getMatch,
  applyScore,

  matchedArray = [],

  addUnique,

  score = 0,

  COMMON_SYMPTOMS = [],

  multiplier = 1

}) {

  // ==========================
  // SECTION
  // ==========================

  const section =
    disease?.[sectionKey];

  // ==========================
  // NO SECTION
  // ==========================

  if (

    !section ||

    typeof section !==
    "object"

  ) {

    return score;
  }

  // ==========================
  // SAFE MULTIPLIER
  // ==========================

  let safeMultiplier =

    Math.max(
      0.3,
      Math.min(
        multiplier || 1,
        3
      )
    );

  // ==========================
  // SMART SECTION WEIGHT
  // ==========================

  switch (sectionKey) {

    case "symptoms":

      safeMultiplier *= 1.15;
      break;

    case "tests":

      safeMultiplier *= 1.35;
      break;

    case "red_flags":

      safeMultiplier *= 1.4;
      break;

    case "physical_exam":

      safeMultiplier *= 1.1;
      break;

    case "causes":

      safeMultiplier *= 0.7;
      break;

    case "risk_factors":

      safeMultiplier *= 0.75;
      break;

    case "complications":

      safeMultiplier *= 0.9;
      break;
  }

  // ==========================
  // DUPLICATE FILTER
  // ==========================

  const filteredSection = {};

  Object.entries(section)

  .forEach(

    ([key, value]) => {

      if (

        !matchedArray.includes(
          key
        )

      ) {

        filteredSection[key] =
          value;
      }
    }
  );

  // ==========================
  // EMPTY FILTERED
  // ==========================

  if (

    Object.keys(
      filteredSection
    ).length === 0

  ) {

    return score;
  }

  // ==========================
  // APPLY SCORE
  // ==========================

  let updatedScore =

    applyScore({

      section:
        filteredSection,

      userData,

      matchCache,

      getMatch,

      matchedArray,

      addUnique,

      score,

      COMMON_SYMPTOMS,

      reduceCommon:
        sectionKey ===
        "symptoms",

      sectionMultiplier:
        safeMultiplier

    });

  // ==========================
  // SECTION BONUS
  // ==========================

  const matchedCount =

    matchedArray.length;

  // symptoms strong pattern

  if (

    sectionKey ===
    "symptoms" &&

    matchedCount >= 5

  ) {

    updatedScore += 8;
  }

  // tests strong evidence

  if (

    sectionKey ===
    "tests" &&

    matchedCount >= 2

  ) {

    updatedScore += 10;
  }

  // physical exam support

  if (

    sectionKey ===
    "physical_exam" &&

    matchedCount >= 2

  ) {

    updatedScore += 5;
  }

  // red flag protection

  if (

    sectionKey ===
    "red_flags" &&

    matchedCount >= 2

  ) {

    updatedScore += 6;
  }

  // ==========================
  // FINAL LIMIT
  // ==========================

  updatedScore = Math.max(
    0,
    Number(
      updatedScore.toFixed(2)
    )
  );

  return updatedScore;
}