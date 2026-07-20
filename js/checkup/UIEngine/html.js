import { renderSymptomLabel } from "./uiFunction.js";

export function renderCategoryHTML(categories = {}) {
  // ডানে-বামে ফালতু স্পেস রিমুভ করার জন্য ফুল-উইথ স্টাইল ওভাররাইড
  const styleOverride = `
    <style>
      #symptomInput {
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
      .symptom-category {
        margin-left: 0 !important;
        margin-right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
      .symptom-category-header {
        width: 100% !important;
        box-sizing: border-box !important;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
      }
      .symptom-category-items {
        padding-left: 8px !important;
        padding-right: 8px !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .symptom-item {
        margin-left: 0 !important;
        margin-right: 0 !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .symptom-label-wrap {
        width: 100% !important;
        box-sizing: border-box !important;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
      }
    </style>
  `;

  const htmlContent = Object.entries(categories)
    .map(([category, items], index) => {
      // ক্যাটাগরি আইডি জেনারেট করা হচ্ছে ফিল্টারিংয়ের জন্য
      const safeId = category.toLowerCase().replace(/[^a-z0-9]/g, "");

      return `
      <div class="symptom-category ${index === 0 ? "open" : ""}" data-cat-id="${safeId}" style="width: 100%; box-sizing: border-box;">
        <button class="symptom-category-header" type="button" style="width: 100%; box-sizing: border-box;">
          <span>${category} (${items.length})</span>
          <span class="category-arrow">▼</span>
        </button>

        <div class="symptom-category-items" style="width: 100%; box-sizing: border-box;">
          ${items.map(symptom => `
            <div class="symptom-item" data-symptom="${symptom}" style="width: 100%; box-sizing: border-box;">
              <label class="symptom-label-wrap">
                <div class="symptom-left" style="display: flex; align-items: center; gap: 6px;">
                  <input type="checkbox" value="${symptom}" />
                  <span class="symptom-name">${renderSymptomLabel(symptom)}</span>
                </div>
                <button type="button" class="symptom-info-btn" data-symptom="${symptom}">ℹ️</button>
              </label>
            </div>
          `).join("")}
        </div>
      </div>
      `;
    })
    .join("");

  return styleOverride + htmlContent;
}
