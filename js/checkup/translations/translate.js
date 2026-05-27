// ==============================
// AUTO TRANSLATOR
// ULTRA FIXED VERSION
// BILINGUAL SUPPORT VERSION
// ==============================

import { BN_MAP }
from "./bnMap.js";


// ==============================
// NORMALIZER
// ==============================

function normalize(
  text = ""
) {

  return text

    .toString()

    .toLowerCase()

    .trim()

    // Relief After Stool
    // -> relief_after_stool

    .replace(/[\s\-]+/g, "_")

    // remove duplicate __

    .replace(/_+/g, "_");

}


// ==============================
// ENGLISH FORMATTER
// ==============================

function makeEnglish(
  key
) {

  return normalize(key)

    .replaceAll(
      "_",
      " "
    )

    .replace(

      /\b\w/g,

      c => c.toUpperCase()

    );

}


// ==============================
// BANGLA FORMATTER
// ==============================

function makeBangla(
  key
) {

  if (!key)
    return "";

  // ==========================
  // NORMALIZED KEY
  // ==========================

  const normalized =
    normalize(key);

  // ==========================
  // EXACT FULL MATCH
  // ==========================

  if (
    BN_MAP[normalized]
  ) {

    return BN_MAP[
      normalized
    ];

  }

  // ==========================
  // WORD BY WORD
  // ==========================

  return normalized

    .split("_")

    .map(word =>

      BN_MAP[word] ||

      word

    )

    .join(" ");

}


// ==============================
// MAIN TRANSLATOR
// ==============================

export function t(

  key,

  lang = "both"

) {

  if (!key)
    return "";

  // ==========================
  // BOTH LANGUAGE
  // ==========================

  if (
    lang === "both"
  ) {

    const en =

      makeEnglish(
        key
      );

    const bn =

      makeBangla(
        key
      );

    // ========================
    // AVOID DUPLICATE
    // ========================

    if (

      en.toLowerCase() ===

      bn.toLowerCase()

    ) {

      return en;
    }

    // ========================
    // FINAL BILINGUAL
    // ========================

    return `${en}

(${bn})`;
  }

  // ==========================
  // BANGLA ONLY
  // ==========================

  if (
    lang === "bn"
  ) {

    return makeBangla(
      key
    );

  }

  // ==========================
  // ENGLISH ONLY
  // ==========================

  return makeEnglish(
    key
  );

}