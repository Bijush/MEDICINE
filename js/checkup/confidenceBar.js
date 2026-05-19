// ==============================
// CONFIDENCE BAR
// ==============================

export function renderConfidenceBar(

  confidence = 0,

  containerId = "confidenceBar"

) {

  const container =

    document.getElementById(
      containerId
    );

  if (!container) return;

  // ==========================
  // NORMALIZE
  // ==========================

  confidence = Math.max(
    0,
    Math.min(confidence, 100)
  );

  // ==========================
  // LABEL
  // ==========================

  const label =

    confidence >= 80
      ? "Very High"

    : confidence >= 60
      ? "High"

    : confidence >= 40
      ? "Medium"

    : "Low";

  // ==========================
  // COLOR CLASS
  // ==========================

  const colorClass =

    confidence >= 80
      ? "confidence-green"

    : confidence >= 60
      ? "confidence-blue"

    : confidence >= 40
      ? "confidence-orange"

    : "confidence-red";

  // ==========================
  // HTML
  // ==========================

  container.innerHTML = `

    <div class="confidence-wrap">

      <!-- TOP -->

      <div class="confidence-top">

        <div class="confidence-title">

          Confidence

        </div>

        <div class="confidence-percent">

          ${confidence}%

        </div>

      </div>

      <!-- BAR -->

      <div class="confidence-track">

        <div

          class="
            confidence-fill
            ${colorClass}
          "

          style="
            width:${confidence}%
          "
        ></div>

      </div>

      <!-- LABEL -->

      <div class="confidence-label">

        ${label}

      </div>

    </div>
  `;
}

// ==============================
// MULTIPLE BARS
// ==============================

export function renderMultipleConfidenceBars(

  results = [],

  containerId = "allConfidenceBars"

) {

  const container =

    document.getElementById(
      containerId
    );

  if (!container) return;

  if (!results.length) {

    container.innerHTML = "";

    return;
  }

  container.innerHTML =

    results.map(
      item => `

      <div class="multi-confidence-card">

        <!-- HEADER -->

        <div class="multi-confidence-top">

          <div class="multi-confidence-name">

            ${item.disease}

          </div>

          <div class="multi-confidence-percent">

            ${item.confidence}%

          </div>

        </div>

        <!-- TRACK -->

        <div class="multi-confidence-track">

          <div

            class="
              multi-confidence-fill
              ${getColorClass(
                item.confidence
              )}
            "

            style="
              width:${item.confidence}%
            "
          ></div>

        </div>

      </div>
      `
    ).join("");
}

// ==============================
// GET COLOR CLASS
// ==============================

function getColorClass(
  confidence
) {

  return confidence >= 80

    ? "confidence-green"

    : confidence >= 60

      ? "confidence-blue"

      : confidence >= 40

        ? "confidence-orange"

        : "confidence-red";
}