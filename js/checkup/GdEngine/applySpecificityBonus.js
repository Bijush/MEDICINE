import {
  buildSymptomSpecificity
}
from "./symptomSpecificityBuilder.js";

const specificityMap =

  buildSymptomSpecificity();

export function applySpecificityBonus({

  score,

  matchedSymptoms = []

}) {

  for (

    const symptom

    of matchedSymptoms

  ) {

    const specificity =

      specificityMap[symptom] || 0;

    score +=

      specificity * 10;

  }

  return score;

}