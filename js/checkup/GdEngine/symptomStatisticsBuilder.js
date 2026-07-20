// ==============================
// SYMPTOM STATISTICS BUILDER
// ==============================

import {
  ALL_DISEASES
}
from "../register/dataRegistry.js";

export function buildSymptomStatistics() {

  const statistics = {};

  for (

    const disease

    of ALL_DISEASES

  ) {

    for (

      const symptom

      of Object.keys(

        disease.symptoms || {}

      )

    ) {

      statistics[symptom] ??= 0;

      statistics[symptom]++;

    }

  }

  return statistics;

}