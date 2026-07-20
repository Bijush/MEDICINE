// ==============================
// SYMPTOM SPECIFICITY
// ==============================

import {
  buildSymptomStatistics
}
from "./symptomStatisticsBuilder.js";

export function buildSymptomSpecificity() {

  const statistics =

    buildSymptomStatistics();

  const specificity = {};

  for (

    const symptom

    in statistics

  ) {

    specificity[symptom] =

      1 /

      statistics[symptom];

  }

  return specificity;

}