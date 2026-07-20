import {
  t
} from "./translations/translate.js";
import {
  renderMedicineValue
} from "./medPageLoader/medicineRenderHelper.js";

const AUTO_RENDER_FIELDS = {
  disease_meaning: {
    title: "Meaning Of Diseases"
  },
  matchedSymptoms: {
    title: "Symptoms"
  },
  matchedTests: {
    title: "Lab Tests"
  },
  matchedRedFlags: {
    title: "Red Flags",
    className: "diag-red-flag"
  },
  contradictions: {
    title: "Contradictions",
    className: "diag-contradiction"
  },
  treatments: {
    title: "Treatments"
  },
  lifestyle_changes: {
    title: "Lifestyle Advice"
  },
  supplements: {
    title: "Supplements"
  },
  diet: {
    title: "Diet"
  },
  prevention: {
    title: "Prevention"
  },
  home_remedies: {
    title: "Home Remedies"
  },
  recovery_signs: {
    title: "Recovery Signs"
  },
};

// ==============================
// DIAGNOSIS RENDERER
// ==============================

export function renderCheckupResults(
  result = {},
  containerId = "diagnosisResults"
) {

  const container = document.getElementById(containerId);

  if (!container) return;

  // ==========================
  // EMPTY
  // ==========================

  if (
    !result ||
    !Array.isArray(result.allResults) ||
    result.allResults.length === 0
  ) {
    container.innerHTML = `
      <div class="diag-empty" style="padding: 15px; text-align: center;">
        No disease match found
      </div>
    `;
    return;
  }

  // ==========================
  // TOP MATCH
  // ==========================

  const top = result.topMatch || result.allResults?.[0];

  if (!top) {
    container.innerHTML = `
      <div class="diag-empty" style="padding: 15px; text-align: center;">
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
      <div class="diag-emergency" style="padding: 6px 10px; margin-bottom: 6px; width: 100%; box-sizing: border-box;">
        🚨 Emergency Warning
        <div class="diag-emergency-text" style="font-size: 12px;">
          Immediate medical attention recommended
        </div>
      </div>
    `;
  }

  // ==========================
  // TOP CARD
  // ==========================
  
  let mlHTML = "";
  if (result.mlResults?.length) {
    mlHTML = `
      <div class="diag-ml-box" style="padding: 6px; margin-bottom: 6px; width: 100%; box-sizing: border-box;">
        <div class="diag-ml-title" style="font-size: 12px; font-weight: bold; margin-bottom: 2px;">
          AI ML Prediction
        </div>
        ${result.mlResults.map(item => `
          <div class="diag-ml-item" style="font-size: 12px; display: flex; justify-content: space-between;">
            <span>${item.disease}</span>
            <span>${Math.round(item.probability * 100)}%</span>
          </div>
        `).join("")}
      </div>
    `;
  }
   
  let html = `
    <!-- ডানে ও বামের ফালতু স্পেস রিমুভ করার জন্য ফুল-উইথ স্টাইল ওভাররাইড -->
    <style>
      #${containerId} { 
        padding: 4px !important; 
        margin: 0 !important; 
        width: 100% !important; 
        max-width: 100% !important; 
        box-sizing: border-box !important;
      }
      .diag-card { 
        padding: 8px !important; 
        margin-bottom: 8px !important; 
        margin-left: 0 !important;
        margin-right: 0 !important;
        border-radius: 6px !important; 
        width: 100% !important; 
        max-width: 100% !important;
        box-sizing: border-box !important; 
      }
      .diag-top-card { 
        padding: 8px !important; 
        margin-bottom: 8px !important; 
        margin-left: 0 !important;
        margin-right: 0 !important;
        border-radius: 6px !important; 
        width: 100% !important; 
        max-width: 100% !important;
        box-sizing: border-box !important; 
      }
      .diag-list {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box !important;
      }
      .diag-section { margin-top: 4px !important; margin-bottom: 4px !important; padding: 0 !important; }
      .diag-label { margin-bottom: 2px !important; font-size: 13px !important; font-weight: bold; color: #374151; }
      .diag-tags span { padding: 2px 6px !important; margin: 2px 2px 0 0 !important; font-size: 12px !important; display: inline-block; }
      .diag-cluster-box { padding: 6px !important; margin-top: 4px !important; border-radius: 4px !important; }
      .diag-info-row { margin-bottom: 4px !important; }
      .diag-reason { margin-top: 4px !important; margin-bottom: 4px !important; font-size: 12px !important; line-height: 1.4; }
      .followup-box { padding: 6px !important; margin-bottom: 6px !important; width: 100% !important; box-sizing: border-box !important; }
      .followup-card { margin-bottom: 4px !important; padding-bottom: 4px !important; }
      .followup-question { font-size: 12px !important; }
      .followup-option { padding: 2px 6px !important; font-size: 11px !important; margin: 2px 2px 0 0 !important; }
    </style>

    ${emergencyHTML}
    
    ${
      result.followupQuestions?.length
        ? `
        <div class="followup-box">
          <div class="followup-title" style="font-weight: bold; font-size: 13px; margin-bottom: 4px;">
            Suggested Followup Questions
          </div>
          <div class="followup-list">
            ${result.followupQuestions.map(q => `
              <div class="followup-card" style="border-bottom: 1px dashed #eee;">
                <div class="followup-question" style="font-weight: 500;">
                  ❓ ${q.question}
                </div>
                <div class="followup-options" style="margin-top: 2px;">
                  ${q.options.map(opt => `
                    <button
                      class="followup-option ${window.followupAnswers?.[q.question.trim()] === opt.trim() ? "selected-followup" : ""}"
                      data-question="${q.question.trim()}"
                      data-answer="${opt.trim()}"
                      data-symptom="${q.symptomKey || ""}"
                      data-symptom-map='${JSON.stringify(q.symptomKeyMap || {})}'
                      style="cursor: pointer; border: 1px solid #ccc; background: #fff; border-radius: 3px;"
                    >
                      ${opt.trim()}
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
        `
        : ""
    }
    ${mlHTML}
    <div class="diag-overall-severity severity-${result.overallSeverity}" style="padding: 3px 6px; font-size: 12px; font-weight: bold; margin-bottom: 4px; display: inline-block; border-radius: 3px;">
      Overall Severity: ${result.overallSeverity}
    </div>
    <div class="diag-top-card severity-${top.severity}">
      <div class="diag-top-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div class="diag-top-title" style="font-size: 16px; font-weight: bold;">
            ${formatText(top.disease)}
          </div>
          <div style="display: flex; gap: 4px; align-items: center; margin-top: 2px;">
            <div class="diag-top-badge" style="font-size: 10px; padding: 1px 4px; background: #2563eb; color: #fff; border-radius: 3px; font-weight: bold;">
              BEST MATCH
            </div>
            <div class="diag-category" style="font-size: 11px; color: #6b7280;">
              ${formatText(top.category || "")}
            </div>
          </div>
        </div>
      </div>

      <div class="diag-top-confidence" style="font-size: 12px; margin-top: 4px;">
        Confidence: ${top.confidence}%
        <span class="diag-confidence-label" style="font-size: 11px; color: #6b7280;">
          (${top.confidenceLabel})
        </span>
      </div>

      <div class="diag-top-bar-wrap" style="height: 4px; background: #e5e7eb; border-radius: 2px; margin: 3px 0 4px 0; overflow: hidden;">
        <div class="diag-top-bar" style="width:${top.confidence}%; height: 100%;"></div>
      </div>

      <div class="diag-top-severity severity-${top.severity}" style="font-size: 11px; font-weight: bold; display: inline-block; padding: 1px 4px; border-radius: 3px;">
        ${top.severity}
      </div>

      <div class="diag-top-reason">
        ${top.reason || ""}
      </div>

      <div class="diag-match-count" style="font-size: 11px; color: #4b5563; margin-top: 2px;">
        ${t("match_count")}: ${top.matchCount || 0}
      </div>
    </div>

    <div class="diag-list">
  `;

  // ==========================
  // ALL RESULTS
  // ==========================

  result.allResults.forEach(disease => {
    html += `
      <div class="diag-card severity-${disease.severity} ${disease.confidence >= 85 ? "diag-high-confidence" : ""}" data-disease="${disease.disease}">
        <!-- HEADER -->
        <div class="diag-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div class="diag-disease" style="font-size: 14px; font-weight: bold;">
              ${formatText(disease.disease)}
            </div>
            <div class="diag-category" style="font-size: 11px; color: #6b7280;">
              ${formatText(disease.category || "")}
            </div>
          </div>
          <div class="diag-confidence-wrap" style="text-align: right;">
            <div class="diag-confidence" style="font-size: 13px; font-weight: bold;">
              ${disease.confidence}%
            </div>
            <div class="diag-confidence-label" style="font-size: 10px; color: #6b7280;">
              ${disease.confidenceLabel}
            </div>
          </div>
        </div>

        <!-- BAR -->
        <div class="diag-bar-wrap" style="height: 3px; background: #e5e7eb; border-radius: 2px; margin: 2px 0 4px 0; overflow: hidden;">
          <div class="diag-bar" style="width:${disease.confidence}%; height: 100%;"></div>
        </div>

        <!-- INFO -->
        <div class="diag-info-row" style="display: flex; gap: 8px; align-items: center; font-size: 11px;">
          <div class="diag-severity severity-${disease.severity}" style="padding: 1px 4px; border-radius: 3px; font-weight: bold;">
            ${disease.severity}
          </div>
          <div class="diag-match-count" style="color: #4b5563;">
            Matches: ${disease.matchCount || 0}
          </div>
        </div>

        <!-- EMERGENCY -->
        ${disease.emergency ? `<div class="diag-emergency-mini" style="font-size: 11px; color: #dc2626; font-weight: bold; margin-top: 2px;">🚨 Emergency Case</div>` : ""}

        <!-- REASON -->
        <div class="diag-reason">
          ${disease.reason || ""}
        </div>

        <!-- MEDICINES -->
        ${(() => {
          const allMedicines = [...Object.values(disease.medicines || {}).flat()];
          const loaderMedicines = disease.intelligentMedicines || [];
          const finalMedicines = [...allMedicines, ...loaderMedicines];

          const otherMeds = finalMedicines.filter(
            med => typeof med !== "object" || (med.line !== "prescription" && med.line !== "supportive")
          );

          if (!allMedicines.length && !loaderMedicines.length) {
            return `
              <div class="diag-no-medicine" style="font-size: 12px; color: #6b7280; padding: 4px 0;">
                No medicine recommendation available
              </div>
            `;
          }

          return `
            <div class="diag-section">
              <button 
                type="button" 
                class="diag-med-toggle-btn" 
                style="padding: 3px 8px; margin-bottom: 4px; border-radius: 4px; border: 1px solid #ccc; background: #f3f4f6; cursor: pointer; font-weight: bold; font-size: 11px;"
                onclick="const wrapper = this.nextElementSibling; if(wrapper.style.display === 'none' || wrapper.style.display === '') { wrapper.style.display = 'block'; this.innerHTML = '❌ Hide Medicines'; } else { wrapper.style.display = 'none'; this.innerHTML = '💊 Show Medicines'; }"
              >
                💊 Show Medicines
              </button>

              <div class="diag-medicines-toggle-wrapper" style="display: none; padding-top: 4px;">
                <div class="diag-label">Medicines</div>
                <div class="diag-medicines">
                  ${otherMeds.map(med => renderSingleMedicine(med)).join("")}
                  
                  ${disease.prescription_medicines?.length ? `
                    <div class="diag-section">
                      <div class="diag-label">Prescription Medicines</div>
                      <div class="diag-medicines">
                        ${disease.prescription_medicines.map(med => renderSingleMedicine(med)).join("")}
                      </div>
                    </div>
                  ` : ""}

                  ${disease.supportive_medicines?.length ? `
                    <div class="diag-section">
                      <div class="diag-label">Supportive Medicines</div>
                      <div class="diag-medicines">
                        ${disease.supportive_medicines.map(med => renderSingleMedicine(med)).join("")}
                      </div>
                    </div>
                  ` : ""}

                  ${disease.homeopathic_medicines?.length ? `
                    <div class="diag-section">
                      <div class="diag-label">Homeopathic Medicines</div>
                      <div class="diag-medicines">
                        ${disease.homeopathic_medicines.map(med => renderSingleMedicine(med)).join("")}
                      </div>
                    </div>
                  ` : ""}

                  ${Object.keys(disease.ayurvedic_medicines || {}).length ? `
                    <div class="diag-section">
                      <div class="diag-label">Ayurvedic Medicines</div>
                      <div class="diag-medicines">
                        ${
                          Object.values(disease.ayurvedic_medicines)
                            .flat()
                            .map(med => renderSingleMedicine(med))
                            .join("")
                        }
                      </div>
                    </div>
                  ` : ""}
                </div>
              </div>
            </div>
          `;
        })()}

        ${renderAutoSections(disease)}
        
        <!-- CLUSTER ANALYSIS -->
        ${
          disease.clusterAnalysis?.length
            ? `
            <div class="diag-section">
              <div class="diag-label">Pattern Analysis</div>
              ${disease.clusterAnalysis.map(cluster => `
                <div class="diag-cluster-box" style="border: 1px solid #e5e7eb; margin-bottom: 4px; width: 100%; box-sizing: border-box;">
                  <div class="diag-cluster-title" style="font-size: 12px; font-weight: bold;">
                    🧠 ${formatText(cluster.cluster)}
                  </div>
                  <div class="diag-cluster-score" style="font-size: 11px; color: #4b5563;">
                    Match: ${cluster.matchedCount} / ${cluster.totalSymptoms}
                  </div>
                  <div class="diag-cluster-status ${cluster.status}" style="font-size: 10px; font-weight: 500; display: inline-block; padding: 1px 4px; border-radius: 3px; margin: 2px 0;">
                    ${cluster.status === "strong_match" ? "Strong Clinical Pattern" : "Partial Clinical Pattern"}
                  </div>
                  ${cluster.matchedSymptoms?.length ? `
                    <div class="diag-sub-label" style="font-size: 11px; font-weight: 500; margin-top: 2px;">✅ Matched Symptoms</div>
                    <div class="diag-tags">
                      ${cluster.matchedSymptoms.map(item => `<span>${formatText(item)}</span>`).join("")}
                    </div>
                  ` : ""}
                  ${cluster.missingSymptoms?.length ? `
                    <div class="diag-sub-label" style="font-size: 11px; font-weight: 500; margin-top: 2px;">❌ Missing Symptoms</div>
                    <div class="diag-tags">
                      ${cluster.missingSymptoms.map(item => `<span class="diag-contradiction">${formatText(item)}</span>`).join("")}
                    </div>
                  ` : ""}
                </div>
              `).join("")}
            </div>
            `
            : ""
        }

        <!-- RECOMMENDATION -->
        <div class="diag-recommendation" style="font-size: 12px; margin-top: 4px; font-style: italic; color: #4b5563;">
          ${disease.recommendation || ""}
        </div>
      </div>
    `;
  });

  if (!result.emergencyDetected && top.confidence < 60) {
    html += `
      <div class="diag-safe-note" style="padding: 6px 10px; font-size: 11px; color: #b45309; background: #fffbeb; border-radius: 4px; margin-bottom: 6px; width: 100%; box-sizing: border-box;">
        Mild or uncertain disease pattern detected.
        Clinical consultation recommended for accurate diagnosis.
      </div>
    `;
  }

  // ==========================
  // FINAL REPORT BUTTON
  // ==========================

  html += `
    <div class="diag-report-wrap" style="margin-top: 6px; text-align: center; width: 100%;">
      <button id="downloadReportBtn" class="diag-report-btn" style="padding: 6px 14px; font-size: 12px; font-weight: bold; border-radius: 4px; cursor: pointer;">
        📄 Generate Final Report
      </button>
    </div>
  `;
  html += `</div>`;

  container.innerHTML = html;
  
  if (!document.getElementById("medicineGalleryModal")) {

document.body.insertAdjacentHTML("beforeend",`

<div id="medicineGalleryModal"
style="
display:none;
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
z-index:999999;
justify-content:center;
align-items:center;">

<button id="galleryPrev"
style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:35px;background:none;border:none;color:white;">❮</button>

<img id="galleryImage"
style="max-width:95%;max-height:90%;border-radius:10px;">
<div id="galleryCounter"
style="
position:absolute;
bottom:20px;
left:50%;
transform:translateX(-50%);
color:white;
background:rgba(0,0,0,.5);
padding:5px 12px;
border-radius:20px;
font-size:15px;
font-weight:bold;">
1 / 1
</div>

<button id="galleryNext"
style="position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:35px;background:none;border:none;color:white;">❯</button>

<button
onclick="closeMedicineGallery()"
style="position:absolute;top:15px;right:20px;font-size:32px;background:none;border:none;color:white;">✕</button>

</div>

`);

}
  
  // ==========================
  // REPORT MODAL
  // ==========================

  if (!document.getElementById("finalReportModal")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div id="finalReportModal" class="final-report-modal" style="display:none;">
        <div class="final-report-box">
          <button id="closeFinalReport" class="close-report-btn">✖</button>
          <div id="finalReportContent"></div>
        </div>
      </div>
      `
    );
  }
  
  // ==========================
  // REPORT BUTTON
  // ==========================

  const reportBtn = document.getElementById("downloadReportBtn");
  if (reportBtn) {
    reportBtn.onclick = () => {
      generateFinalReport(result);
    };
  }

  const clearBtn = document.getElementById("clearFollowupBtn");
  if (clearBtn) {
    clearBtn.onclick = () => {
      // Followup buttons reset
      document.querySelectorAll(".followup-option").forEach(btn => {
        btn.classList.remove("selected-followup");
      });

      // Dropdowns reset
      document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });

      // Checkboxes reset
      document.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.checked = false;
        cb.dispatchEvent(new Event("change", { bubbles: true }));
        cb.dispatchEvent(new Event("input", { bubbles: true }));
      });

      // Radio buttons reset
      document.querySelectorAll("input[type='radio']").forEach(r => {
        r.checked = false;
        r.dispatchEvent(new Event("change", { bubbles: true }));
      });

      // Text fields reset
      document.querySelectorAll("input[type='text'], input[type='number'], textarea").forEach(input => {
        input.value = "";
      });

      // Global context resets
      window.followupAnswers = {};
      window.currentUserSymptoms = {};
      window.confidenceBoosts = {};
      window.latestFollowupAnswer = null;
      window.selectedSymptoms = [];

      const resultBox = document.getElementById("diagnosisResults");
      if (resultBox) {
        resultBox.innerHTML = `
          <div class="diag-empty">
            All selections cleared
          </div>
        `;
      }

      document.dispatchEvent(
        new CustomEvent("followupUpdated", { detail: {} })
      );

      console.log("All selections cleared");
    };
  }

  // ==========================
  // FOLLOWUP BUTTON EVENTS
  // ==========================

  const followupButtons = document.querySelectorAll(".followup-option");
  followupButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const question = btn.dataset.question?.trim();
      document.querySelectorAll(".followup-option").forEach(b => {
        if (b.dataset.question?.trim() === question) {
          b.classList.remove("selected-followup");
        }
      });
  
      btn.classList.add("selected-followup");

      const answer = btn.dataset.answer?.trim();
      console.log("Question:", question);
      console.log("Answer:", answer);

      window.latestFollowupAnswer = { question, answer };
      window.followupAnswers ||= {};
      window.followupAnswers[question.trim()] = answer;
        
      window.currentUserSymptoms ||= {};
      window.confidenceBoosts ||= {};

      const symptomKey = btn.dataset.symptom?.trim();
      let symptomMap = {};

      try {
        symptomMap = JSON.parse(btn.dataset.symptomMap || "{}");
      } catch {
        symptomMap = {};
      }

      if (symptomKey && answer === "Yes") {
        window.currentUserSymptoms[symptomKey] = true;
        window.confidenceBoosts[symptomKey] = true;
      }

      if (symptomKey && answer === "No") {
        window.currentUserSymptoms[symptomKey] = false;
        delete window.confidenceBoosts[symptomKey];
      }

      Object.values(symptomMap).forEach(sym => {
        delete window.currentUserSymptoms[sym];
        delete window.confidenceBoosts[sym];
      });

      if (symptomMap[answer]) {
        const mappedSymptom = symptomMap[answer];
        window.currentUserSymptoms[mappedSymptom] = true;
        window.confidenceBoosts[mappedSymptom] = true;
      }

      Object.values(symptomMap).forEach(sym => {
        if (sym !== symptomMap[answer]) {
          delete window.currentUserSymptoms[sym];
          delete window.confidenceBoosts[sym];
        }
      });

      document.dispatchEvent(
        new CustomEvent("followupUpdated", { detail: window.currentUserSymptoms })
      );
    });
  });
}

// ==============================
// AUTO RENDER HELPER
// ==============================

function renderAutoSections(disease = {}) {
  return Object.entries(AUTO_RENDER_FIELDS)
    .map(([field, config]) => {
      const data = disease[field];
      if (!Array.isArray(data) || !data.length) {
        return "";
      }

      return `
        <div class="diag-section">
          <div class="diag-label">${config.title}</div>
          <div class="diag-tags">
            ${data.map(item => {
              if (typeof item === "string") {
                return `<span class="${config.className || ""}">${formatText(item)}</span>`;
              }

              if (typeof item === "object") {
                const en = item.en || item.label?.en || item.name?.en || item.title?.en || "";
                const bn = item.bn || item.label?.bn || item.name?.bn || item.title?.bn || "";

                if (en || bn) {
                  return `
                    <span class="${config.className || ""}" style="text-align: left; padding: 2px 6px;">
                      <div style="font-weight: 500;">${en}</div>
                      ${bn ? `<small style="font-size: 10px; color: #4b5563; display: block; margin-top: 1px;">${bn}</small>` : ""}
                    </span>
                  `;
                }
              }

              if (item.name) {
                return `<span class="${config.className || ""}">${item.name}</span>`;
              }

              if (item.title) {
                return `<span class="${config.className || ""}">${item.title}</span>`;
              }

              return `<span class="${config.className || ""}">Unknown</span>`;
            }).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

// ==============================
// FORMAT TEXT
// ==============================

function formatText(text = "") {

  if (text == null) return "";

  // যদি object আসে
  if (typeof text === "object") {
    text =
      text.disease ||
      text.name ||
      text.en ||
      text.bn ||
      "";
  }

  text = String(text);

  return text
    .replace(/_/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase());
}

// ===================================================
// FIXED SINGLE MEDICINE WITH FULL WIDTH STYLES
// ===================================================
function renderSingleMedicine(med) {
  if (typeof med === "string") {
    return `
      <div class="diag-med-item" style="margin-bottom: 4px; padding: 4px 6px; width: 100%; box-sizing: border-box;">
        <div class="diag-med-name" style="font-size: 13px;">💊 ${med}</div>
      </div>
    `;
  }

  const showLineBadge = [
    "first_line",
    "second_line",
    "third_line",
    "fourth_line",
    "emergency_line"
  ].includes(med.line);

  const defaultIcon = "images/pill-icon.png"; 

  const imagesHTML = (Array.isArray(med.images) && med.images.length)
    ? `
    <div class="med-image-gallery" style="margin-top: 4px; margin-bottom: 2px;">
      <img
        src="${med.images[0]}"
        onerror="this.onerror=null;this.src='${defaultIcon}'"
        onclick="openMedicineGallery(${JSON.stringify(med.images).replace(/"/g,'&quot;')},0)"
        style="
          width:55px;
          height:55px;
          object-fit:cover;
          border-radius:4px;
          border:1px solid #ddd;
          cursor:pointer;
        ">
    </div>
    `
    : `
    <div class="med-image-gallery" style="margin-top: 2px; margin-bottom: 2px;">
      <img src="${defaultIcon}" style="width:30px;height:30px;opacity:.4;">
    </div>
    `;

  const detailsId = 'med-details-' + Math.random().toString(36).substring(2, 9);

  return `
    <div class="diag-med-item ${med.line || ""}" style="margin-bottom: 5px; padding: 6px 8px; border-radius: 5px; width: 100%; box-sizing: border-box;">
      <div class="diag-med-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 4px; width: 100%;">
        <div style="display: flex; align-items: center; gap: 4px;">
          ${showLineBadge ? `
            <div class="diag-med-line ${med.line}" style="font-size: 9px; padding: 1px 3px; border-radius: 2px;">
              ${{
                first_line: "1ST LINE",
                second_line: "2ND LINE",
                third_line: "3RD LINE",
                fourth_line: "4TH LINE",
                emergency_line: "EMERGENCY"
              }[med.line]}
            </div>
          ` : ""}
          <div class="diag-med-name" style="font-weight: bold; font-size: 13px;">
            💊 ${med.name || med.names?.primary?.en || med.names?.generic?.en || "Unknown Medicine"}
          </div>
        </div>
        
        <button 
          type="button" 
          class="diag-med-details-toggle-btn"
          style="padding: 2px 6px; font-size: 11px; border: 1px solid #d1d5db; background: #fff; border-radius: 4px; cursor: pointer; color: #4b5563;"
          onclick="const target = document.getElementById('${detailsId}'); if(target.style.display === 'none' || target.style.display === '') { target.style.display = 'block'; this.innerHTML = '➖ Hide Details'; } else { target.style.display = 'none'; this.innerHTML = '➕ Show Details'; }"
        >
          ➕ Show Details
        </button>
      </div>

      ${imagesHTML}

      <div id="${detailsId}" class="diag-med-details-collapsible" style="display: none; margin-top: 4px; border-top: 1px dashed #e5e7eb; padding-top: 4px; font-size: 12px; width: 100%; box-sizing: border-box;">
        ${med.condition ? `<div class="diag-med-condition" style="margin-bottom: 2px; line-height: 1.3;">📌 ${renderMedicineValue(med.condition)}</div>` : ""}
        ${med.dosage ? `<div class="diag-med-dose" style="margin-bottom: 2px; line-height: 1.3;"><strong>Dosage:</strong> ${renderMedicineValue(med.dosage)}</div>` : ""}
        ${med.frequency ? `<div class="diag-med-frequency" style="margin-bottom: 2px; line-height: 1.3;"><strong>Frequency:</strong> ${renderMedicineValue(med.frequency)}</div>` : ""}
        ${med.duration ? `<div class="diag-med-duration" style="margin-bottom: 2px; line-height: 1.3;"><strong>Duration:</strong> ${renderMedicineValue(med.duration)}</div>` : ""}
        ${med.purpose ? `<div class="diag-med-purpose" style="margin-bottom: 2px; line-height: 1.3;"><strong>Purpose:</strong> ${renderMedicineValue(med.purpose)}</div>` : ""}
        ${med.warning ? `<div class="diag-med-warning" style="margin-bottom: 2px; line-height: 1.3; color: #dc2626;">⚠️ <strong>Warning:</strong> ${renderMedicineValue(med.warning)}</div>` : ""}
        ${med.brands?.length ? `<div class="diag-med-brand" style="margin-bottom: 2px; line-height: 1.3;"><strong>Brand:</strong> ${med.brands.slice(0, 5).join(", ")}</div>` : ""}
        ${med.sideEffects ? `<div class="diag-med-sideeffects" style="margin-bottom: 2px; line-height: 1.3;"><strong>Side Effects:</strong> ${renderMedicineValue(med.sideEffects)}</div>` : ""}
      </div>
    </div>
  `;
}

// ==============================
// FINAL REPORT GENERATOR
// ==============================

function generateFinalReport(result = {}) {
  const top = result.topMatch || result.allResults?.[0];
  if (!top) return;

  const patientName = document.getElementById("patientName")?.value || "Unknown";
  const age = document.getElementById("userAge")?.value || "Unknown";
  const gender = document.getElementById("userGender")?.value || "Unknown";
  const duration = document.getElementById("symptomDuration")?.value || "Unknown";

  const allMedicines = [
    ...Object.values(top.medicines || {}).flat(),
    ...(top.prescription_medicines || []),
    ...(top.supportive_medicines || []),
    ...(top.homeopathic_medicines || []),
    ...Object.values(top.ayurvedic_medicines || {}).flat(),
    ...(top.intelligentMedicines || [])
  ];

  const reportHTML = `
    <h2>Medical Report Card</h2>
    <hr>
    <p><b>Patient:</b> ${patientName}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Duration:</b> ${duration} days</p>
    <hr>
    <h3>Primary Diagnosis</h3>
    <p><b>Disease:</b> ${top.disease}</p>
    <p><b>${t("confidence")}:</b> ${top.confidence}%</p>
    <p><b>Severity:</b> ${top.severity}</p>
    
    <h3>Matched Symptoms</h3>
    <ul>
      ${top.matchedSymptoms?.map(s => `<li>${formatText(s)}</li>`).join("") || ""}
    </ul>

    <h3>Medicines</h3>
    <ul>
      ${allMedicines.map(med => {
        if (typeof med === "string") {
          return `<li>💊 ${med}</li>`;
        }
        const medicineName = med.name || med.medicine || med.title || "Unknown Medicine";
        const dose = med.dosage ? ` - ${med.dosage}` : "";
        const frequency = med.frequency ? ` (${med.frequency})` : "";
        const purpose = med.purpose ? ` - ${typeof med.purpose === "object" ? (med.purpose.bn || med.purpose.en || "") : med.purpose}` : "";

        return `<li>💊 ${medicineName}${dose}${frequency}${purpose}</li>`;
      }).join("")}
    </ul>

    <h3>Recommendations</h3>
    <p>${top.recommendation || ""}</p>
  `;

  const modal = document.getElementById("finalReportModal");
  const content = document.getElementById("finalReportContent");

  content.innerHTML = reportHTML;
  modal.style.display = "flex";

  document.getElementById("closeFinalReport").onclick = () => {
    modal.style.display = "none";
  };
}

// ==============================
// MEDICINE IMAGE GALLERY
// ==============================

let galleryImages = [];
let galleryIndex = 0;
let swipeBound = false;

window.openMedicineGallery = function (images, index = 0) {
    galleryImages = Array.isArray(images) ? images : [];
    galleryIndex = index;

    const modal = document.getElementById("medicineGalleryModal");
    const image = document.getElementById("galleryImage");

    if (!modal || !image || !galleryImages.length) return;

    modal.style.display = "flex";
    window.updateMedicineGallery();

    if (!swipeBound) {
        let startX = 0;
        let startY = 0;

        image.addEventListener("touchstart", function (e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        image.addEventListener("touchend", function (e) {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = Math.abs(startY - endY);

            if (diffY > 80) return;

            if (diffX > 50) {
                galleryIndex++;
                if (galleryIndex >= galleryImages.length) galleryIndex = 0;
                window.updateMedicineGallery();
            } else if (diffX < -50) {
                galleryIndex--;
                if (galleryIndex < 0) galleryIndex = galleryImages.length - 1;
                window.updateMedicineGallery();
            }
        });
        swipeBound = true;
    }
};

window.updateMedicineGallery = function () {
    const image = document.getElementById("galleryImage");
    const counter = document.getElementById("galleryCounter");
    if (!image || !galleryImages.length) return;

    image.src = galleryImages[galleryIndex];
    if (counter) {
        counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    }
};

window.closeMedicineGallery = function () {
    const modal = document.getElementById("medicineGalleryModal");
    if (modal) modal.style.display = "none";
};

document.addEventListener("click", function (e) {
    if (e.target.id === "galleryPrev") {
        e.stopPropagation();
        if (!galleryImages.length) return;
        galleryIndex--;
        if (galleryIndex < 0) galleryIndex = galleryImages.length - 1;
        window.updateMedicineGallery();
    }
    if (e.target.id === "galleryNext") {
        e.stopPropagation();
        if (!galleryImages.length) return;
        galleryIndex++;
        if (galleryIndex >= galleryImages.length) galleryIndex = 0;
        window.updateMedicineGallery();
    }
});

document.addEventListener("click", function (e) {
    const modal = document.getElementById("medicineGalleryModal");
    if (e.target === modal) {
        window.closeMedicineGallery();
    }
});
