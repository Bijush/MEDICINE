
import {
  applyDifferentialCompetition
}
from "./differentialCompetition.js";


export function filterAndSortResults(
  results = []
) {

  // ==========================
  // EMPTY SAFETY
  // ==========================

  if (
    !Array.isArray(results)
  ) {

    return [];
  }

  // ==========================
  // NORMALIZE
  // ==========================

  const normalizedResults =

    results

      .filter(Boolean)

      .map(item => {

        return {

          ...item,

          confidence:

            Number(
              item.confidence ??
              item.score ??
              0
            ),

          matchCount:

            Number(
              item.matchCount ??
              item.totalMatches ??
              0
            ),

          matchedSymptoms:

            Array.isArray(
              item.matchedSymptoms
            )

              ? item.matchedSymptoms

              : [],

          matchedTests:

            Array.isArray(
              item.matchedTests
            )

              ? item.matchedTests

              : [],

          matchedRedFlags:

            Array.isArray(
              item.matchedRedFlags
            )

              ? item.matchedRedFlags

              : [],

          matchedClusters:

            Array.isArray(
              item.matchedClusters
            )

              ? item.matchedClusters

              : [],

          contradictions:

            Array.isArray(
              item.contradictions
            )

              ? item.contradictions

              : [],

          emergency:

            Boolean(
              item.emergency
            )
        };
      });

  // ==========================
  // ADVANCED FILTER
  // ==========================

  let filteredResults =

    normalizedResults.filter(
      item => {

        // ======================
        // REMOVE INVALID
        // ======================

        if (
          item.confidence <= 0
        ) {

          return false;
        }

        // ======================
        // EMERGENCY ALWAYS KEEP
        // ======================

        if (
          item.emergency
        ) {

          return true;
        }

        // ======================
        // VERY WEAK RESULT
        // ======================

        if (

          item.confidence < 10 &&

          item.matchedSymptoms
            .length === 0 &&

          item.matchedTests
            .length === 0

        ) {

          return false;
        }

        // ======================
        // CONTRADICTION FILTER
        // ======================

        if (

          item.contradictionLevel ===
          "high" &&

          item.confidence < 50

        ) {

          return false;
        }

        // ======================
        // LOW MATCH FILTER
        // ======================

        if (

          item.matchCount <= 0 &&

          item.confidence < 15

        ) {

          return false;
        }

        return true;
      }
    );

  // ==========================
  // NO RESULT
  // ==========================

  if (
    filteredResults.length === 0
  ) {

    return [];
  }

  // ==========================
  // SMART SORT
  // ==========================

  filteredResults.sort(

    (a, b) => {

      // ======================
      // EMERGENCY FIRST
      // ======================

      if (
        a.emergency &&
        !b.emergency
      ) {

        return -1;
      }

      if (
        b.emergency &&
        !a.emergency
      ) {

        return 1;
      }

      // ======================
      // RED FLAG PRIORITY
      // ======================

      if (

        b.matchedRedFlags.length !==

        a.matchedRedFlags.length

      ) {

        return (

          b.matchedRedFlags.length -

          a.matchedRedFlags.length
        );
      }

      // ======================
      // CONFIDENCE
      // ======================

      if (

        b.confidence !==
        a.confidence

      ) {

        return (

          b.confidence -

          a.confidence
        );
      }

      // ======================
      // CLUSTER PRIORITY
      // ======================

      if (

        b.matchedClusters.length !==

        a.matchedClusters.length

      ) {

        return (

          b.matchedClusters.length -

          a.matchedClusters.length
        );
      }

      // ======================
      // TEST SUPPORT
      // ======================

      if (

        b.matchedTests.length !==

        a.matchedTests.length

      ) {

        return (

          b.matchedTests.length -

          a.matchedTests.length
        );
      }

      // ======================
      // MATCH COUNT
      // ======================

      return (

        b.matchCount -

        a.matchCount
      );
    }
  );



// ==========================
// DIFFERENTIAL COMPETITION
// ==========================

filteredResults =
  applyDifferentialCompetition(
    filteredResults
  );
  
  // ==========================
  // REMOVE DUPLICATES
  // ==========================

  const uniqueResults = [];
  const seen = new Set();

  for (const item of filteredResults) {

    const diseaseName =

      (
        item.disease ||

        item.name ||

        item.id ||

        ""
      )

      .toLowerCase()

      .trim();

    if (
      !seen.has(
        diseaseName
      )
    ) {

      seen.add(
        diseaseName
      );

      uniqueResults.push(
        item
      );
    }
  }

  // ==========================
  // FINAL BALANCING
  // ==========================

  const finalResults =

    uniqueResults.filter(
      item => {

        // ======================
        // KEEP STRONG RESULTS
        // ======================

        if (
          item.confidence >= 70
        ) {

          return true;
        }

        // ======================
        // KEEP CLUSTER RESULTS
        // ======================

        if (

          item.matchedClusters
            .length >= 1

        ) {

          return true;
        }

        // ======================
        // KEEP TEST RESULTS
        // ======================

        if (

          item.matchedTests
            .length >= 1

        ) {

          return true;
        }

        // ======================
        // KEEP RED FLAGS
        // ======================

        if (

          item.matchedRedFlags
            .length >= 1

        ) {

          return true;
        }

        // ======================
        // KEEP NORMAL RESULTS
        // ======================

        if (

          item.matchedSymptoms
            .length >= 1

        ) {

          return true;
        }

        // ======================
        // OTHERWISE
        // ======================

        return (
          item.confidence >= 15
        );
      }
    );

  // ==========================
  // FINAL LIMIT
  // ==========================

  return finalResults.slice(
    0,
    5
  );
}