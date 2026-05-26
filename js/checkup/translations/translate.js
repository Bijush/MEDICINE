// ==============================
// AUTO TRANSLATOR
// ULTRA FIXED VERSION
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

  lang = "en"

) {

  if (!key)
    return "";

  // ==========================
  // BANGLA
  // ==========================

  if (
    lang === "bn"
  ) {

    return makeBangla(
      key
    );

  }

  // ==========================
  // ENGLISH
  // ==========================

  return makeEnglish(
    key
  );

}