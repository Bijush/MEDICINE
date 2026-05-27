
import {
  t
}
from "./translations/translate.js";
// ==============================
// DIAGNOSIS RENDERER
// ==============================

export function renderCheckupResults(
  result = {},
  containerId = "diagnosisResults"
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) return;

  // ==========================
  // EMPTY
  // ==========================

  if (

  !result ||

  !Array.isArray(
    result.allResults
  ) ||

  result.allResults.length === 0

){

    container.innerHTML = `

      <div class="diag-empty">

        No disease match found

      </div>
    `;

    return;
  }

  // ==========================
  // TOP MATCH
  // ==========================

  const top =

  result.topMatch ||

  result.allResults?.[0];

if (!top) {

  container.innerHTML = `

    <div class="
      diag-empty
    ">

      No valid diagnosis found

    </div>
  `;

  return;
}

  // ==========================
  // EMERGENCY BANNER
  // ==========================

  let emergencyHTML = "";

  if (result.emergencyDetected) {

    emergencyHTML = `

      <div class="diag-emergency">

        🚨 Emergency Warning

        <div class="diag-emergency-text">

          Immediate medical attention recommended

        </div>

      </div>
    `;
  }

  // ==========================
  // TOP CARD
  // ==========================
  
   let mlHTML = "";
   if (

  result.mlResults?.length

) {

  mlHTML = `

    <div class="diag-ml-box">

      <div class="diag-ml-title">

        AI ML Prediction

      </div>

      ${result.mlResults.map(
        item => `

        <div class="diag-ml-item">

          <span>
            ${item.disease}
          </span>

          <span>
            ${Math.round(
              item.probability * 100
            )}%
          </span>

        </div>
        `
      ).join("")}

    </div>
  `;
}
   
    let html = `

    ${emergencyHTML}
    
    ${
  result.followupQuestions?.length

  ? `

  <div class="
    followup-box
  ">

    <div class="
      followup-title
    ">

      Suggested Followup Questions

    </div>

    <div class="
      followup-list
    ">

      ${result.followupQuestions.map(
        q => `

        <div class="
          followup-card
        ">

          <div class="
            followup-question
          ">

            ❓ ${q.question}

          </div>

          <div class="
            followup-options
          ">

            ${q.options.map(
              opt => `

<button
  class="
  followup-option

  ${
    window.followupAnswers?.[
      q.question.trim()
] === opt.trim()

      ? "selected-followup"

      : ""
  }
"

  data-question="
    ${q.question.trim()}
  "

  data-answer="
    ${opt.trim()}
  "

  data-symptom="
    ${q.symptomKey || ""}
  "

  data-symptom-map='${JSON.stringify(
    q.symptomKeyMap || {}
  )}'
>

  ${opt.trim()}

</button>

              `
            ).join("")}

          </div>

        </div>

        `
      ).join("")}

    </div>

  </div>

  `

  : ""
}
    ${mlHTML}
<div class="
  diag-overall-severity
  severity-${result.overallSeverity}
">

  Overall Severity:
  ${result.overallSeverity}

</div>
    <div class="
      diag-top-card
      severity-${top.severity}
    ">

<div class="
  diag-top-header
">

  <div>

    <div class="
      diag-top-title
    ">

      ${formatText(top.disease)}

    </div>

    <div class="
      diag-top-badge
    ">

      BEST MATCH

    </div>

    <div class="
      diag-category
    ">

      ${formatText(
        top.category || ""
      )}

    </div>

  </div>

</div>

<div class="
  diag-top-confidence
">

  Confidence:
  ${top.confidence}%

  <span class="
    diag-confidence-label
  ">

    (${top.confidenceLabel})

  </span>

</div>

<div class="
  diag-top-bar-wrap
">

  <div
    class="
      diag-top-bar
    "

    style="
      width:${top.confidence}%
    "
  ></div>

</div>

      <div class="
        diag-top-severity
        severity-${top.severity}
      ">

        ${top.severity}

      </div>

      <div class="
        diag-top-reason
      ">

        ${top.reason || ""}

      </div>

      <div class="
        diag-match-count
      ">

        ${t("match_count")}:
        ${top.matchCount || 0}

      </div>

    </div>

    <div class="diag-list">
  `;

  // ==========================
  // ALL RESULTS
  // ==========================

  result.allResults.forEach(
    disease => {

      html += `

<div class="
  diag-card
  severity-${disease.severity}
  ${
    disease.confidence >= 85
      ? "diag-high-confidence"
      : ""
  }
">

        <!-- HEADER -->

        <div class="
          diag-header
        ">

          <div>

            <div class="
              diag-disease
            ">

              ${formatText(disease.disease)}

            </div>

            <div class="
              diag-category
            ">

              ${formatText(
                disease.category || ""
              )}

            </div>

          </div>

          <div class="
            diag-confidence-wrap
          ">

            <div class="
              diag-confidence
            ">

              ${disease.confidence}%

            </div>

            <div class="
              diag-confidence-label
            ">

              ${disease.confidenceLabel}

            </div>

          </div>

        </div>

        <!-- BAR -->

        <div class="
          diag-bar-wrap
        ">

          <div
            class="
              diag-bar
            "

            style="
              width:${disease.confidence}%
            "
          ></div>

        </div>

        <!-- INFO -->

        <div class="
          diag-info-row
        ">

          <div class="
            diag-severity
            severity-${disease.severity}
          ">

            ${disease.severity}

          </div>

          <div class="
            diag-match-count
          ">

            Matches:
            ${disease.matchCount || 0}

          </div>

        </div>

        <!-- EMERGENCY -->

        ${
          disease.emergency

          ? `

          <div class="
            diag-emergency-mini
          ">

            🚨 Emergency Case

          </div>
          `

          : ""
        }

        <!-- REASON -->

        <div class="
          diag-reason
        ">

          ${disease.reason || ""}

        </div>

        <!-- MATCHED SYMPTOMS -->

        ${
          disease.matchedSymptoms?.length

          ? `

          <div class="
            diag-section
          ">

            <div class="
              diag-label
            ">

              Symptoms

            </div>

            <div class="
              diag-tags
            ">

              ${disease
                .matchedSymptoms
                .map(
                  item => `
                  <span>
                    ${formatText(item)}
                  </span>
                `
                )
                .join("")}

            </div>

          </div>
          `

          : ""
        }

        <!-- TESTS -->

        ${
          disease.matchedTests?.length

          ? `

          <div class="
            diag-section
          ">

            <div class="
              diag-label
            ">

              Lab Tests

            </div>

            <div class="
              diag-tags
            ">

              ${disease
                .matchedTests
                .map(
                  item => `
                  <span>
                    ${formatText(item)}
                  </span>
                `
                )
                .join("")}

            </div>

          </div>
          `

          : ""
        }

        <!-- RED FLAGS -->

        ${
          disease.matchedRedFlags?.length

          ? `

          <div class="
            diag-section
          ">

            <div class="
              diag-label
            ">

              Red Flags

            </div>

            <div class="
              diag-tags
            ">

              ${disease
                .matchedRedFlags
                .map(
                  item => `
                  <span class="
                    diag-red-flag
                  ">
                    ${formatText(item)}
                  </span>
                `
                )
                .join("")}

            </div>

          </div>
          `

          : ""
        }

        <!-- MEDICINES -->
${(() => {

  const allMedicines = Object.values(
    disease.medicines || {}
  ).flat();

  return !allMedicines.length

    ? `

    <div class="
      diag-no-medicine
    ">

      No medicine recommendation available

    </div>

    `

    : `

    <div class="
      diag-section
    ">

      <div class="
        diag-label
      ">

        Medicines

      </div>

      <div class="
        diag-medicines
      ">

        ${allMedicines
          .map(
            med => `

<div class="
  diag-med-item
  ${med.line || ""}
">

<div class="
  diag-med-header
">

${
  med.line

  ? `

  <div class="
    diag-med-line
    ${med.line}
  ">

    ${med.line
      .replaceAll("_", " ")
      .toUpperCase()}

  </div>

  `

  : ""
}

<div class="
  diag-med-name
">

💊 ${
  typeof med === "string"

    ? med

    : med.name || "Unknown Medicine"
}

</div>

</div>

${
  med.condition

  ? `

  <div class="
    diag-med-condition
  ">

    📌 ${med.condition}

  </div>

  `

  : ""
}

${
  med.dosage

  ? `

  <div class="
    diag-med-dose
  ">

    Dosage:
    ${med.dosage}

  </div>

  `

  : ""
}

${
  med.frequency

  ? `

  <div class="
    diag-med-frequency
  ">

    Frequency:
    ${med.frequency}

  </div>

  `

  : ""
}

${
  med.duration

  ? `

  <div class="
    diag-med-duration
  ">

    Duration:
    ${med.duration}

  </div>

  `

  : ""
}

${
  med.max_daily

  ? `

  <div class="
    diag-med-max
  ">

    Max:
    ${med.max_daily}

  </div>

  `

  : ""
}

${
  med.purpose

  ? `

  <div class="
    diag-med-purpose
  ">

    Purpose:
    ${med.purpose}

  </div>

  `

  : ""
}

${
  med.warning

  ? `

  <div class="
    diag-med-warning
  ">

    ⚠️ ${med.warning}

  </div>

  `

  : ""
}

</div>
`
          )
          .join("")}

      </div>

    </div>
`;
})()}

        <!-- TREATMENTS -->

        ${
          disease.treatments?.length

          ? `

          <div class="
            diag-section
          ">

            <div class="
              diag-label
            ">

              Treatments

            </div>

            <div class="
              diag-tags
            ">

              ${disease
                .treatments
                .map(
                  item => `
                  <span>
                    ${item}
                  </span>
                `
                )
                .join("")}

            </div>

          </div>
          `

          : ""
        }

        <!-- LIFESTYLE -->

        ${
          disease
            .lifestyle_changes
            ?.length

          ? `

          <div class="
            diag-section
          ">

            <div class="
              diag-label
            ">

              Lifestyle Advice

            </div>

            <div class="
              diag-tags
            ">

              ${disease
                .lifestyle_changes
                .map(
                  item => `
                  <span>
                    ${item}
                  </span>
                `
                )
                .join("")}

            </div>

          </div>
          `

          : ""
        }
        
        
<!-- CLUSTER ANALYSIS -->

${
  disease.clusterAnalysis?.length

  ? `

  <div class="
    diag-section
  ">

    <div class="
      diag-label
    ">

      Pattern Analysis

    </div>

    ${disease.clusterAnalysis
      .map(
        cluster => `

        <div class="
          diag-cluster-box
        ">

          <div class="
            diag-cluster-title
          ">

            🧠
            ${formatText(
              cluster.cluster
            )}

          </div>

          <div class="
            diag-cluster-score
          ">

            Match:
            ${cluster.matchedCount}
            /
            ${cluster.totalSymptoms}

          </div>

          <div class="
            diag-cluster-status
            ${cluster.status}
          ">

            ${
              cluster.status ===
              "strong_match"

              ? "Strong Clinical Pattern"

              : "Partial Clinical Pattern"
            }

          </div>

          ${
            cluster.matchedSymptoms
              ?.length

            ? `

            <div class="
              diag-sub-label
            ">

              ✅ Matched Symptoms

            </div>

            <div class="
              diag-tags
            ">

              ${cluster
                .matchedSymptoms
                .map(
                  item => `
                  <span>
                    ${formatText(item)}
                  </span>
                `
                )
                .join("")}

            </div>

            `

            : ""
          }

          ${
            cluster.missingSymptoms
              ?.length

            ? `

            <div class="
              diag-sub-label
            ">

              ❌ Missing Symptoms

            </div>

            <div class="
              diag-tags
            ">

              ${cluster
                .missingSymptoms
                .map(
                  item => `
                  <span class="
                    diag-contradiction
                  ">
                    ${formatText(item)}
                  </span>
                `
                )
                .join("")}

            </div>

            `

            : ""
          }

        </div>
      `
      )
      .join("")}

  </div>

  `

  : ""
}
<!-- CONTRADICTIONS -->

${
  disease.contradictionLevel

  ? `

  <div class="
    diag-contradiction-level
    contradiction-${disease.contradictionLevel}
  ">

    Contradiction Level:
    ${disease.contradictionLevel}

  </div>

  `

  : ""
}

${
  disease.contradictions?.length

  ? `

  <div class="
    diag-section
  ">

    <div class="
      diag-label
    ">

      Contradictions

    </div>

    <div class="
      diag-tags
    ">

      ${disease
        .contradictions
        .map(
          item => `
          <span class="
            diag-contradiction
          ">
            ❌ ${formatText(item)}
          </span>
        `
        )
        .join("")}

    </div>

  </div>
  `

  : ""
}
        <!-- RECOMMENDATION -->

        <div class="
          diag-recommendation
        ">

          ${disease.recommendation || ""}

        </div>

      </div>
      `;
    }
  );
if (

  !result.emergencyDetected &&

  top.confidence < 60

) {

  html += `

  <div class="
    diag-safe-note
  ">

    Mild or uncertain disease pattern detected.
    Clinical consultation recommended
    for accurate diagnosis.

  </div>
  `;
}

// ==========================
// FINAL REPORT BUTTON
// ==========================

html += `

<div class="
  diag-report-wrap
">

<button
  id="downloadReportBtn"
  class="
    diag-report-btn
  "
>

  📄 Generate Final Report

</button>

</div>

`;
  html += `</div>`;

  container.innerHTML = html;
  
  // ==========================
// REPORT MODAL
// ==========================

if (

  !document.getElementById(
    "finalReportModal"
  )

) {

  document.body.insertAdjacentHTML(

    "beforeend",

    `

<div
  id="finalReportModal"

  class="
    final-report-modal
  "

  style="
    display:none;
  "
>

<div class="
  final-report-box
">

<button
  id="closeFinalReport"
  class="
    close-report-btn
  "
>

  ✖

</button>

<div
  id="finalReportContent"
>

</div>

</div>

</div>

`
  );
}
  
  // ==========================
// REPORT BUTTON
// ==========================

const reportBtn =

  document.getElementById(
    "downloadReportBtn"
  );

if (reportBtn) {

  reportBtn.onclick = () => {

  generateFinalReport(
    result
  );
};
}

  // ==========================
// FOLLOWUP BUTTON EVENTS
// ==========================

const followupButtons =

  document.querySelectorAll(
    ".followup-option"
  );

followupButtons.forEach(
  btn => {

    btn.addEventListener(

      "click",

      () => {




const question =

  btn.dataset.question
    ?.trim();

document
  .querySelectorAll(
    ".followup-option"
  )

  .forEach(b => {

    if (

      b.dataset.question
        ?.trim() === question

    ) {

      b.classList.remove(
        "selected-followup"
      );
    }
  });
  
        // ==================
        // ADD NEW SELECT
        // ==================

        btn.classList.add(
          "selected-followup"
        );

        // ==================
        // DATA
        // ==================

        

        const answer =

  btn.dataset.answer
    ?.trim();

        console.log(
          "Question:",
          question
        );

        console.log(
          "Answer:",
          answer
        );


        // ==================
        // SAVE GLOBAL
        // ==================

        window.latestFollowupAnswer = {

          question,
          answer
        };
        
        // ==================
// SAVE SELECTED ANSWERS
// ==================

window.followupAnswers ||= {};

window.followupAnswers[
  question.trim()
] = answer;
        
        // ==================
// AUTO SYMPTOM UPDATE
// ==================

window.currentUserSymptoms ||= {};

window.confidenceBoosts ||= {};


const symptomKey =

  btn.dataset.symptom
    ?.trim();
    
    

let symptomMap = {};


// ==================
// CONFIDENCE BOOST
// ==================



try {

  symptomMap = JSON.parse(
    btn.dataset.symptomMap || "{}"
  );

} catch {

  symptomMap = {};
}

// ==================
// YES/NO SYMPTOM
// ==================

if (

  symptomKey &&

  answer === "Yes"

) {

  window.currentUserSymptoms[
    symptomKey
  ] = true;

  window.confidenceBoosts[
    symptomKey
  ] = true;
}

// ==================
// REMOVE ON NO
// ==================

if (

  symptomKey &&

  answer === "No"

) {

  window.currentUserSymptoms[
    symptomKey
  ] = false;

  delete window.confidenceBoosts[
    symptomKey
  ];
}

// ==================
// OPTION MAPPED
// ==================

Object.values(symptomMap)

.forEach(sym => {

  delete window.currentUserSymptoms[
    sym
  ];

  delete window.confidenceBoosts[
    sym
  ];
});

if (

  symptomMap[answer]

) {

  const mappedSymptom =

    symptomMap[answer];

  window.currentUserSymptoms[
    mappedSymptom
  ] = true;

  window.confidenceBoosts[
    mappedSymptom
  ] = true;
}



// ==================
// CLEAR OTHER MAPS
// ==================

Object.values(symptomMap)

  .forEach(sym => {

    if (

      sym !== symptomMap[answer]

    ) {

      delete window.currentUserSymptoms[
        sym
      ];

      delete window.confidenceBoosts[
        sym
      ];
    }
  });

// ==================
// DEBUG
// ==================

console.log(

  "Updated Symptoms:",

  window.currentUserSymptoms
);

// ==================
// REDIAGNOSIS EVENT
// ==================

document.dispatchEvent(

  new CustomEvent(

    "followupUpdated",

    {

      detail:
        window.currentUserSymptoms
    }
  )
);
        
        
        
      }
    );
  }
);
  
  
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

// ==============================
// FINAL REPORT GENERATOR
// ==============================

function generateFinalReport(
  result = {}
) {

  const top =

    result.topMatch ||

    result.allResults?.[0];

  if (!top)
    return;

  const patientName =

    document.getElementById(
      "patientName"
    )?.value || "Unknown";

  const age =

    document.getElementById(
      "userAge"
    )?.value || "Unknown";

  const gender =

    document.getElementById(
      "userGender"
    )?.value || "Unknown";

  const duration =

    document.getElementById(
      "symptomDuration"
    )?.value || "Unknown";

  // ======================
  // FLATTEN MEDICINES
  // ======================

  const allMedicines =

    Object.values(
      top.medicines || {}
    ).flat();

  const reportHTML = `

<h2>
  Medical Report Card
</h2>

<hr>

<p>

<b>Patient:</b>

${patientName}

</p>

<p>

<b>Age:</b>

${age}

</p>

<p>

<b>Gender:</b>

${gender}

</p>

<p>

<b>Duration:</b>

${duration} days

</p>

<hr>

<h3>
Primary Diagnosis
</h3>

<p>

<b>Disease:</b>

${top.disease}

</p>

<p>

<b>${t("confidence")}:</b>

${top.confidence}%

</p>

<p>

<b>Severity:</b>

${top.severity}

</p>

<h3>
Matched Symptoms
</h3>

<ul>

${
  top.matchedSymptoms
    ?.map(
      s => `
<li>
${formatText(s)}
</li>
`
    )
    .join("") || ""
}

</ul>

<h3>
Medicines
</h3>

<ul>

${
  allMedicines
    .map(
      med => {

        // ====================
        // STRING MEDICINE
        // ====================

        if (
          typeof med === "string"
        ) {

          return `

<li>

💊 ${med}

</li>
`;
        }

        // ====================
        // OBJECT MEDICINE
        // ====================

        const medicineName =

          med.name ||
          med.medicine ||
          med.title ||
          "Unknown Medicine";

        const dose =

          med.dosage
            ? ` - ${med.dosage}`
            : "";

        const frequency =

          med.frequency
            ? ` (${med.frequency})`
            : "";

        const purpose =

          med.purpose
            ? ` - ${med.purpose}`
            : "";

        return `

<li>

💊

${medicineName}

${dose}

${frequency}

${purpose}

</li>
`;
      }
    )

    .join("")
}

</ul>

<h3>
Recommendations
</h3>

<p>

${top.recommendation || ""}

</p>

`;

  // ======================
  // SHOW MODAL
  // ======================

  const modal =

    document.getElementById(
      "finalReportModal"
    );

  const content =

    document.getElementById(
      "finalReportContent"
    );

  content.innerHTML =
    reportHTML;

  modal.style.display =
    "flex";

  // ======================
  // CLOSE
  // ======================

  document.getElementById(
    "closeFinalReport"
  ).onclick = () => {

    modal.style.display =
      "none";
  };
}