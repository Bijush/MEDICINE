// ==============================
// COMPOSITION SEARCH
// ==============================


// ==============================
// IMPORTS
// ==============================

import {
  normalize
} from "../shared/normalize.js";

import {
  getAllCompositions
} from "./compositionLoader.js";


// ==============================
// LEVENSHTEIN DISTANCE
// ==============================

function levenshtein(

  a = "",

  b = ""

) {

  const matrix = [];


  for (

    let i = 0;

    i <= b.length;

    i++

  ) {

    matrix[i] = [i];

  }


  for (

    let j = 0;

    j <= a.length;

    j++

  ) {

    matrix[0][j] = j;

  }


  for (

    let i = 1;

    i <= b.length;

    i++

  ) {

    for (

      let j = 1;

      j <= a.length;

      j++

    ) {

      if (

        b.charAt(i - 1)

        ===

        a.charAt(j - 1)

      ) {

        matrix[i][j] =

          matrix[i - 1][j - 1];

      }

      else {

        matrix[i][j] = Math.min(

          matrix[i - 1][j - 1] + 1,

          matrix[i][j - 1] + 1,

          matrix[i - 1][j] + 1

        );

      }

    }

  }


  return matrix[b.length][a.length];

}


// ==============================
// CALCULATE SCORE
// ==============================

function calculateSearchScore(

  query = "",

  target = ""

) {

  let score = 0;


  // Exact
  if (query === target) {

    score += 100;

  }


  // Starts with
  if (

    target.startsWith(query)

  ) {

    score += 50;

  }


  // Includes
  if (

    target.includes(query)

  ) {

    score += 25;

  }


  // Typo support
  const typoDistance =

    levenshtein(
      query,
      target
    );


  if (typoDistance <= 2) {

    score += 20;

  }


  return score;

}


// ==============================
// SEARCH COMPOSITIONS
// ==============================

export function searchCompositions(

  query = "",

  limit = 20

) {

  const normalizedQuery =

    normalize(query);


  // Empty query
  if (!normalizedQuery) {

    return [];

  }


  const results = [];


  getAllCompositions()

    .forEach(composition => {

      const normalizedTarget =

        normalize(composition);


      const score =

        calculateSearchScore(

          normalizedQuery,

          normalizedTarget

        );


      // Skip weak
      if (score <= 0) {
        return;
      }


      results.push({

        composition,

        score

      });

    });


  // Sort
  return results

    .sort((a, b) =>

      b.score - a.score

    )

    .slice(0, limit)

    .map(item =>

      item.composition

    );

}


// ==============================
// HAS SEARCH RESULTS
// ==============================

export function hasCompositionSearchResults(
  query = ""
) {

  return (

    searchCompositions(
      query,
      1
    ).length > 0

  );

}


// ==============================
// DEBUG
// ==============================

export function debugCompositionSearch(
  query = ""
) {

  console.log(

    searchCompositions(query)

  );

}