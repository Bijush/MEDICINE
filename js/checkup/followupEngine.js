// ==============================
// AUTO FOLLOWUP ENGINE
// CLEAN STRICT VERSION
// ==============================

import {
  ALL_DISEASES
}
from "./register/dataRegistry.js";

import {
  getCanonicalSymptom
}
from "./symptomIntelligence.js";

// ==============================
// ENGINE
// ==============================

export function getFollowupQuestions(
  symptoms = {},
  topDiseases = []
) {

  const questions = [];

  // ==========================
  // LOOP DISEASES
  // ==========================

  ALL_DISEASES.forEach(
    disease => {

      // ==========================
      // ONLY TOP DISEASES
      // ==========================

      if (

        topDiseases.length &&

        !topDiseases.includes(
          disease.disease
        )

      ) {

        return;
      }

      // ==========================
      // DISEASE MATCH CHECK
      // ==========================

      const diseaseSymptoms =

        Object.keys(
          disease.symptoms || {}
        );

      let matchedCount = 0;

      diseaseSymptoms.forEach(
        symptom => {

          const canonical =

            getCanonicalSymptom(
              symptom
            );

          if (

            symptoms[
              canonical
            ] === true

          ) {

            matchedCount++;
          }
        }
      );

      // ==========================
      // MATCH RATIO
      // ==========================

      const matchRatio =

        matchedCount /

        Math.max(
          diseaseSymptoms.length,
          1
        );

      // ==========================
      // IGNORE UNRELATED
      // ==========================

      if (

        matchedCount === 0 ||

        (

          matchedCount < 2 &&

          matchRatio < 0.12

        )

      ) {

        return;
      }

      // ==========================
      // SYMPTOM FOLLOWUPS
      // ==========================

      Object.entries(

        disease.symptoms || {}

      ).forEach(

        ([symptom, rule]) => {

          // ======================
          // NO FOLLOWUP
          // ======================

          if (
            !rule.followup
          ) {

            return;
          }

          // ======================
          // QUESTION TEXT
          // ======================

          const questionText =

            typeof rule.followup.question ===
            "object"

              ? (

                  rule.followup.question.bn ||

                  rule.followup.question.en ||

                  ""

                )

              : (

                  rule.followup.question ||

                  `More about ${symptom}?`

                );

          // ======================
          // ALREADY ANSWERED
          // ======================

          if (

            window.followupAnswers?.[
              questionText
            ]

          ) {

            return;
          }

          const canonicalSymptom =

            getCanonicalSymptom(
              symptom
            );

          // ======================
          // RELATED MATCH
          // ======================

          const relatedMatch =

            symptoms[
              canonicalSymptom
            ] === true;

          // ======================
          // IGNORE UNRELATED
          // ======================

          if (

            !relatedMatch &&

            matchedCount < 2

          ) {

            return;
          }

          // ======================
          // ADD QUESTION
          // ======================

          questions.push({

            question:
              questionText,

            options:

              rule.followup
                .options || [

                "Yes",
                "No"

              ],

            symptomKey:

              rule.followup
                .symptomKey ||

              canonicalSymptom,

            symptomKeyMap:

              rule.followup
                .symptomMap || {},

            priority:

              rule.followup
                .priority || 1

          });

        }

      );

      // ==========================
      // RED FLAG FOLLOWUPS
      // ==========================

      Object.entries(

        disease.red_flags || {}

      ).forEach(

        ([symptom, rule]) => {

          // ======================
          // NO FOLLOWUP
          // ======================

          if (
            !rule.followup
          ) {

            return;
          }

          // ======================
          // QUESTION TEXT
          // ======================

          const questionText =

            typeof rule.followup.question ===
            "object"

              ? (

                  rule.followup.question.bn ||

                  rule.followup.question.en ||

                  ""

                )

              : (

                  rule.followup.question ||

                  `More about ${symptom}?`

                );

          // ======================
          // ALREADY ANSWERED
          // ======================

          if (

            window.followupAnswers?.[
              questionText
            ]

          ) {

            return;
          }

          // ======================
          // ADD QUESTION
          // ======================

          questions.push({

            question:
              questionText,

            options:

              rule.followup
                .options || [

                "Yes",
                "No"

              ],

            symptomKey:

              rule.followup
                .symptomKey ||

              getCanonicalSymptom(
                symptom
              ),

            symptomKeyMap:

              rule.followup
                .symptomMap || {},

            priority: 100

          });

        }

      );

    }

  );

  // ==========================
  // REMOVE DUPLICATES
  // ==========================

  const uniqueQuestions =

    questions.filter(

      (
        item,
        index,
        self
      ) =>

        index ===

        self.findIndex(

          q =>

            q.question ===
            item.question

        )

    );

  // ==========================
  // SORT
  // ==========================

  uniqueQuestions.sort(

    (a, b) =>

      (b.priority || 0) -

      (a.priority || 0)

  );

  // ==========================
  // LIMIT
  // ==========================

  return uniqueQuestions
    .slice(0, 6);

}