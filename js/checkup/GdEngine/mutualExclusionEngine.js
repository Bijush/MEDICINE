// ==============================
// MUTUAL EXCLUSION ENGINE
// ==============================

export function applyMutualExclusion(
  results = []
) {

  for (

    const current

    of results

  ) {

    if (
      !current
    ) {

      continue;

    }

    const exclusions =

      current
      .mutually_exclusive_with || [];

    for (

      const other

      of results

    ) {

      if (

        current === other

      ) {

        continue;

      }

      if (

        exclusions.includes(
          other.disease
        )

      ) {

        other.rawScore ??=

          other.confidence || 0;

        other.rawScore *= 0.85;

      }

    }

  }

  return results;

}