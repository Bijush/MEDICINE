// ==============================
// DIFFERENTIAL COMPETITION
// ==============================

export function applyDifferentialCompetition(
  results = []
) {

  if (
    !Array.isArray(results)
  ) {

    return results;

  }

  for (

    let i = 0;

    i < results.length;

    i++

  ) {

    const current =
      results[i];

    if (
      !current
    ) {

      continue;

    }

    for (

      let j = i + 1;

      j < results.length;

      j++

    ) {

      const other =
        results[j];

      if (
        !other
      ) {

        continue;

      }

      const currentDifferentials =

        current
        .differentialDiagnosis || [];

      const otherDifferentials =

        other
        .differentialDiagnosis || [];

      const competingDiseases =

        currentDifferentials.includes(
          other.disease
        )

        ||

        otherDifferentials.includes(
          current.disease
        );

      if (
        !competingDiseases
      ) {

        continue;

      }

      const currentTests =

        current.matchedTests?.length || 0;

      const otherTests =

        other.matchedTests?.length || 0;

      const currentRedFlags =

        current.matchedRedFlags?.length || 0;

      const otherRedFlags =

        other.matchedRedFlags?.length || 0;

      const currentClusters =

        current.matchedClusters?.length || 0;

      const otherClusters =

        other.matchedClusters?.length || 0;
        
      const currentClusterStrength =

current.clusterStrength || 0;

      const otherClusterStrength =

other.clusterStrength || 0;
      const currentMatches =

        current.matchCount || 0;

      const otherMatches =

        other.matchCount || 0;
        
        const currentRequired =

current.requiredMatchCount || 0;

const otherRequired =

other.requiredMatchCount || 0;
const currentRequiredPercent =

current.requiredMatchPercent || 0;

const otherRequiredPercent =

other.requiredMatchPercent || 0;

const currentContradictions =

current.totalContradictions || 0;

const otherContradictions =

other.totalContradictions || 0;

const currentNegativeSymptoms =

current.negativeSymptomCount || 0;

const otherNegativeSymptoms =

other.negativeSymptomCount || 0;

const currentSpecificSymptoms =

current.specificSymptomCount || 0;

const otherSpecificSymptoms =

other.specificSymptomCount || 0;


const contradictionRank = {

critical: 4,

high: 3,

medium: 2,

low: 1,
none: 0,
null: 0

};

const currentContradiction =

contradictionRank[
current.contradictionLevel
] || 0;

const otherContradiction =

contradictionRank[
other.contradictionLevel
] || 0;

      current.rawScore ??=

        current.confidence || 0;

      other.rawScore ??=

        other.confidence || 0;


      // ======================
      // TESTS WIN
      // ======================

      if (

        currentTests >

        otherTests

      ) {

        other.rawScore *= 0.90;

      }

      else if (

        otherTests >

        currentTests

      ) {

        current.rawScore *= 0.90;

      }


      // ======================
      // RED FLAGS WIN
      // ======================

      else if (

        currentRedFlags >

        otherRedFlags

      ) {

        other.rawScore *= 0.92;

      }

      else if (

        otherRedFlags >

        currentRedFlags

      ) {

        current.rawScore *= 0.92;

      }


      // ======================
      // CLUSTERS WIN
      // ======================

      else if (

        currentClusters >

        otherClusters

      ) {

        other.rawScore *= 0.95;

      }

      else if (

        otherClusters >

        currentClusters

      ) {

        current.rawScore *= 0.95;

      }

// ======================
// CLUSTER STRENGTH WIN
// ======================

else if (

currentClusterStrength >

otherClusterStrength

) {

other.rawScore *= 0.90;

}

else if (

otherClusterStrength >

currentClusterStrength

) {

current.rawScore *= 0.90;

}
      // ======================
      // SYMPTOM COUNT WIN
      // ======================

      else if (

        currentMatches >

        otherMatches

      ) {

        other.rawScore *= 0.97;

      }

      else if (

        otherMatches >

        currentMatches

      ) {

        current.rawScore *= 0.97;

      }

// ======================
// REQUIRED SYMPTOMS WIN
// ======================

else if (

currentRequired >

otherRequired

) {

other.rawScore *= 0.92;

}

else if (

otherRequired >

currentRequired

) {

current.rawScore *= 0.92;

}
// ======================
// REQUIRED PERCENT WIN
// ======================

else if (

currentRequiredPercent >

otherRequiredPercent

) {

other.rawScore *= 0.88;

}

else if (

otherRequiredPercent >

currentRequiredPercent

) {

current.rawScore *= 0.88;

}

// ======================
// TOTAL CONTRADICTIONS WIN
// ======================

else if (

currentContradictions <

otherContradictions

) {

other.rawScore *= 0.92;

}

else if (

otherContradictions <

currentContradictions

) {

current.rawScore *= 0.92;

}

// ======================
// NEGATIVE SYMPTOMS WIN
// ======================

else if (

currentNegativeSymptoms <

otherNegativeSymptoms

) {

other.rawScore *= 0.85;

}

else if (

otherNegativeSymptoms <

currentNegativeSymptoms

) {

current.rawScore *= 0.85;

}

// ======================
// SPECIFIC SYMPTOMS WIN
// ======================

else if (

currentSpecificSymptoms >

otherSpecificSymptoms

) {

other.rawScore *= 0.87;

}

else if (

otherSpecificSymptoms >

currentSpecificSymptoms

) {

current.rawScore *= 0.87;

}
// ======================
// CONTRADICTION WIN
// ======================

else if (

currentContradiction <

otherContradiction

) {

other.rawScore *= 0.90;

}

else if (

otherContradiction <

currentContradiction

) {

current.rawScore *= 0.90;

}




// ======================
// MINIMUM MATCH WIN
// ======================

else if (

(current.minimum_match || 0)

>

(other.minimum_match || 0)

) {

other.rawScore *= 0.98;

}

else if (

(other.minimum_match || 0)

>

(current.minimum_match || 0)

) {

current.rawScore *= 0.98;

}

      // ======================
      // PRIORITY WIN
      // ======================

      else if (

        (current.priority || 0)

        >

        (other.priority || 0)

      ) {

        other.rawScore *= 0.98;

      }

      else if (

        (other.priority || 0)

        >

        (current.priority || 0)

      ) {

        current.rawScore *= 0.98;

      }

    }

  }


  // ==========================
  // UPDATE CONFIDENCE
  // ==========================

  for (

    const result

    of results

  ) {

    result.confidence =

      Math.round(

        result.rawScore ||

        result.confidence ||

        0

      );

  }

  return results;

}