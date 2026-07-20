// ==============================
// BAYESIAN PROBABILITY
// ==============================

export function applyBayesianProbability({

  disease,

  matchedSymptoms = [],

  score

}) {

  // ==========================
  // PRIOR PROBABILITY
  // ==========================

  const prior =

    disease.prior_probability ||

    0.01;

  // ==========================
  // TOTAL SYMPTOMS
  // ==========================

  const totalSymptoms =

    Object.keys(

      disease.symptoms || {}

    ).length;

  if (

    totalSymptoms === 0

  ) {

    return score;

  }

  // ==========================
  // LIKELIHOOD
  // ==========================

  const likelihood =

    matchedSymptoms.length /

    totalSymptoms;

  // ==========================
  // POSTERIOR
  // ==========================

  const posterior =

    prior * likelihood;

  // ==========================
  // SCORE BOOST
  // ==========================

  score *= (

    1 +

    posterior * 5

  );

  return Number(

    score.toFixed(2)

  );

}