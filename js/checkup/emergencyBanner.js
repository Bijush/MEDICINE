// ==============================
// EMERGENCY BANNER
// ==============================

export function renderEmergencyBanner(

  result = {},

  containerId = "emergencyBanner"

) {

  const container =

    document.getElementById(
      containerId
    );

  if (!container) return;

  // ==========================
  // NO EMERGENCY
  // ==========================

  if (!result.emergencyDetected) {

    container.innerHTML = "";

    return;
  }

  // ==========================
  // EMERGENCY DISEASES
  // ==========================

  const diseases =

    result.emergencyDiseases || [];

  // ==========================
  // UNIQUE RED FLAGS
  // ==========================

  const redFlags = [];

  diseases.forEach(disease => {

    if (
      disease.matchedRedFlags
    ) {

      disease.matchedRedFlags
        .forEach(flag => {

          if (
            !redFlags.includes(flag)
          ) {

            redFlags.push(flag);
          }
        });
    }
  });

  // ==========================
  // HTML
  // ==========================

  container.innerHTML = `

    <div class="emergency-box">

      <!-- HEADER -->

      <div class="emergency-header">

        🚨 Emergency Detected

      </div>

      <!-- WARNING -->

      <div class="emergency-warning">

        Immediate medical attention
        may be required

      </div>

      <!-- DISEASES -->

      <div class="emergency-section">

        <div class="emergency-title">

          Possible Critical Diseases

        </div>

        <div class="emergency-disease-list">

          ${diseases.map(
            disease => `

            <div class="emergency-disease">

              <span>

                ${disease.disease}

              </span>

              <span>

                ${disease.confidence}%

              </span>

            </div>
            `
          ).join("")}

        </div>

      </div>

      <!-- RED FLAGS -->

      ${
        redFlags.length

        ? `

        <div class="emergency-section">

          <div class="emergency-title">

            Critical Signs

          </div>

          <div class="emergency-redflags">

            ${redFlags.map(
              flag => `

              <div
                class="emergency-flag"
              >

                ⚠
                ${formatText(flag)}

              </div>
              `
            ).join("")}

          </div>

        </div>
        `

        : ""
      }

      <!-- ACTION -->

      <div class="emergency-action">

        Please contact emergency
        medical services or visit
        nearest hospital immediately.

      </div>

    </div>
  `;
}

// ==============================
// FORMAT TEXT
// ==============================

function formatText(text = "") {

  return text

    .replace(/_/g, " ")

    .replace(
      /\b\w/g,
      l => l.toUpperCase()
    );
}