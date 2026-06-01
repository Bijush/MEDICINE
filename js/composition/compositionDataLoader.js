// ==============================
// COMPOSITION DATA LOADER
// ==============================


import {
  normalize
} from "../shared/normalize.js";

import {

  compositionHistoryDatabase

}

from "../../data/composition/compositionHistoryData.js";


// ==============================
// CACHE
// ==============================

const historyCache =

  new Map();


// ==============================
// SAFE KEY
// ==============================

function safeKey(value = "") {

  return normalize(

    String(value)
      .trim()

  );

}


// ==============================
// GET HISTORY
// ==============================

export function getCompositionHistory(
  compositionName = ""
) {

  const key =

    safeKey(
      compositionName
    );


  // Cached
  if (

    historyCache.has(key)

  ) {

    return historyCache.get(
      key
    );

  }


  // Database
  const result =

    compositionHistoryDatabase[
      key
    ]

    || null;


  // Save cache
  historyCache.set(

    key,

    result

  );


  return result;

}


// ==============================
// HAS HISTORY
// ==============================

export function hasCompositionHistory(
  compositionName = ""
) {

  return !!getCompositionHistory(
    compositionName
  );

}


// ==============================
// GET ALL HISTORY KEYS
// ==============================

export function getAllHistoryKeys() {

  return Object.keys(

    compositionHistoryDatabase

  );

}


// ==============================
// DEBUG
// ==============================

export function debugCompositionData() {

  console.log({

    history:
      compositionHistoryDatabase

  });

}