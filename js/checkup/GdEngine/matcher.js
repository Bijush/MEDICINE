import {
  getCanonicalSymptom
}
from "../symptomIntelligence.js";

// ==============================
// NORMALIZE
// ==============================

function normalize(
  text = ""
) {

  return String(text)

    .trim()

    .toLowerCase()

    .replace(/\s+/g, "_");
}

// ==============================
// USER HAS SYMPTOM
// ==============================

function userHasSymptom(

  symptom,
  userData = {}

) {

  const normalized =

    normalize(symptom);

  const canonical =

    getCanonicalSymptom(
      normalized
    );

  return (

    userData[
      normalized
    ] === true ||

    userData[
      canonical
    ] === true
  );
}

// ==============================
// STRICT MATCH
// ==============================

export function isMatched(

  key,
  rule = {},
  userData = {}

) {

  const normalizedKey =

    normalize(key);

  const canonicalKey =

    getCanonicalSymptom(
      normalizedKey
    );

  // ==========================
  // DIRECT MATCH
  // ==========================

  const directMatch =

    userHasSymptom(

      canonicalKey,
      userData

    );

  // ==========================
  // FOLLOWUP MATCH
  // ==========================

  const followupMatch =

    Object.keys(userData)

    .some(userKey => {

      if (
        userData[userKey] !== true
      ) {

        return false;
      }

      const normalizedUserKey =

        normalize(userKey);

      return (

        normalizedUserKey.startsWith(
          `${canonicalKey}_`
        ) ||

        normalizedUserKey.includes(
          canonicalKey
        )
      );
    });

  return (

    directMatch ||

    followupMatch
  );
}

// ==============================
// STRENGTH
// ==============================

function calculateStrength(

  key,
  userData = {}

) {

  const normalizedKey =

    normalize(key);

  const canonicalKey =

    getCanonicalSymptom(
      normalizedKey
    );

  // ==========================
  // EXACT MATCH
  // ==========================

  if (

    userData[
      canonicalKey
    ] === true

  ) {

    return 1.15;
  }

  // ==========================
  // FOLLOWUP MATCH
  // ==========================

  const followupMatch =

    Object.keys(userData)

    .some(userKey => {

      if (
        userData[userKey] !== true
      ) {

        return false;
      }

      return normalize(userKey)

        .startsWith(
          `${canonicalKey}_`
        );
    });

  if (
    followupMatch
  ) {

    return 1.05;
  }

  return 1;
}

// ==============================
// GET MATCH
// ==============================

export function getMatch(

  key,
  rule = {},
  userData = {},
  matchCache = {}

) {

  const canonicalKey =

    getCanonicalSymptom(

      normalize(key)

    );

  // ==========================
  // CACHE
  // ==========================

  if (

    matchCache[
      canonicalKey
    ]

  ) {

    return matchCache[
      canonicalKey
    ];
  }

  // ==========================
  // MATCH
  // ==========================

  const matched =

    isMatched(

      canonicalKey,
      rule,
      userData

    );

  // ==========================
  // STRENGTH
  // ==========================

  const strength =

    matched

      ? calculateStrength(
          canonicalKey,
          userData
        )

      : 0;

  // ==========================
  // RESULT
  // ==========================

  const result = {

    matched,

    strength,

    canonicalKey

  };

  // ==========================
  // SAVE CACHE
  // ==========================

  matchCache[
    canonicalKey
  ] = result;

  return result;
}