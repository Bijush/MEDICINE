import { ALL_DATA }
from "../../../RegisterAndLoader/loader.js";

const normalizeKey = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

export function medicineFromMloader(
  input = []
) {

  const diseaseKey =
    typeof input === "string"
      ? normalizeKey(input)
      : "";

  const symptoms =
    Array.isArray(input)
      ? input
      : [];

  const symptomKeys =
    [...new Set(
      symptoms.map(
        normalizeKey
      )
    )];

  const medicines =
    ALL_DATA

      .map(m => {

        let totalScore = 0;

        let matchedSymptoms = 0;

        const medicineSymptoms =
          m?._symptomSet ||
          new Set();

        const medicineDiseases =
          m?._diseaseSet ||
          new Set();

        // =====================
        // DISEASE MATCH
        // =====================

        const diseaseMatched =
          diseaseKey &&
          medicineDiseases.has(
            diseaseKey
          );

        if (
          diseaseMatched
        ) {

          totalScore += 2000;

        } else if (
          diseaseKey
        ) {

          totalScore -= 500;

        }

        // =====================
        // GROUP MATCH
        // =====================

        if (
          diseaseKey &&
          m.group
        ) {

          const groupKey =
            normalizeKey(
              typeof m.group ===
                "string"

                ? m.group

                : (
                    m.group?.en ||
                    m.group?.bn ||
                    ""
                  )
            );

          if (
            groupKey ===
            diseaseKey
          ) {

            totalScore += 3000;

          }

        }

        // =====================
        // DISEASE SCORE
        // =====================

        if (
          diseaseKey
        ) {

          totalScore += Number(
            m?.score?.[
              diseaseKey
            ] || 0
          );

        }

        // =====================
        // SYMPTOM MATCH
        // =====================

        symptomKeys.forEach(
          key => {

            if (
              medicineSymptoms.has(
                key
              )
            ) {

              matchedSymptoms++;

              totalScore += 25;

            }

            totalScore += Number(
              m?.score?.[
                key
              ] || 0
            );

          }
        );

        // =====================
        // COVERAGE BONUS
        // =====================

        const coverage =
          symptomKeys.length
            ? matchedSymptoms /
              symptomKeys.length
            : 0;

        totalScore +=
          coverage * 500;

        // =====================
        // HIGH COVERAGE BONUS
        // =====================

        if (
          coverage >= 0.8
        ) {

          totalScore += 200;

        } else if (
          coverage >= 0.6
        ) {

          totalScore += 120;

        } else if (
          coverage >= 0.4
        ) {

          totalScore += 60;

        }

        // =====================
        // MATCH COUNT BONUS
        // =====================

        if (
          matchedSymptoms >= 3
        ) {

          totalScore += 50;

        }

        if (
          matchedSymptoms >= 5
        ) {

          totalScore += 100;

        }

        if (
          matchedSymptoms >= 8
        ) {

          totalScore += 150;

        }

        // =====================
        // PERFECT MATCH BONUS
        // =====================

        if (
          symptomKeys.length >
            0 &&
          matchedSymptoms ===
            symptomKeys.length
        ) {

          totalScore += 300;

        }

        // =====================
        // NO MATCH PENALTY
        // =====================

        if (
          symptomKeys.length >=
            3 &&
          matchedSymptoms === 0
        ) {

          totalScore -= 300;

        }

        // =====================
        // COMMON USE BONUS
        // =====================

        if (
          m.commonUse
        ) {

          totalScore += 10;

        }

        // =====================
        // OTC BONUS
        // =====================

        if (
          m.otc
        ) {

          totalScore += 5;

        }

        // =====================
        // FIRST/SECOND LINE BONUS
        // =====================

        switch (
          m.line
        ) {

          case "first_line":

            totalScore += 500;
            break;

          case "second_line":

            totalScore += 250;
            break;

          case "third_line":

            totalScore += 100;
            break;

          case "fourth_line":

            totalScore += 50;
            break;

        }

        return {

          ...m,

          _matchScore:
            Math.round(
              totalScore
            ),

          _matchedSymptoms:
            matchedSymptoms,

          _coverage:
            Number(
              (
                coverage *
                100
              ).toFixed(
                1
              )
            )

        };

      })

      .filter(m => {

        if (
          diseaseKey &&
          m?._diseaseSet
            ?.size
        ) {

          return (
            m._diseaseSet.has(
              diseaseKey
            )
          );

        }

        return (
          m._matchScore > 0
        );

      })

      .sort(
        (a, b) => {

          if (
            b._matchScore !==
            a._matchScore
          ) {

            return (
              b._matchScore -
              a._matchScore
            );

          }

          if (
            b._matchedSymptoms !==
            a._matchedSymptoms
          ) {

            return (
              b._matchedSymptoms -
              a._matchedSymptoms
            );

          }

          return (
            b._coverage -
            a._coverage
          );

        }
      )

      .slice(
        0,
        15
      );

  return medicines;

}