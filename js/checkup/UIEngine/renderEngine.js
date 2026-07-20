import { renderSymptomLabel } from "./uiFunction.js";
import { updateSelectedSymptoms } from "./updateSelectedSymptoms.js";
import { renderLiveFollowupQuestions } from "../renderFollowupQuestions.js";
import { CURRENT_LANG } from "../checkup.js";
import { renderCategoryHTML } from "./html.js";
import {
  renderAdvancedAccordionSection,
  renderAdvancedItems,
  setupAdvancedAccordion
} from "./advancedAccordion.js";

// ==============================
// MAIN LAYOUT
// ==============================
export function renderMainLayout(uiData) {
  // ডাটা আসার পর HTML-এর ট্যাবস কন্টেইনারে ডাইনামিক বাটন ইনজেক্ট করা হচ্ছে
  setTimeout(() => {
    const container = document.getElementById("dynamicTabsContainer");
    if (container) {
      container.innerHTML = renderTabs(uiData.categories);
      setupTabs(); // ট্যাব ক্লিক লিসেনার একটিভ করা
    }
  }, 0);

  return `
  <div class="symptom-ui">
    ${renderSymptomsTab(uiData)}
    ${renderSelectedTab()}
    ${renderAdvancedTab(uiData)}
    ${renderSymptomInfoModal()}
  </div>
  `;
}

export function renderPatientInputs() {
  return `
    <div class="extra-inputs">
      <input type="text" id="patientName" placeholder="Name" />
      <input type="number" id="userAge" placeholder="Age" />
      <select id="userGender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="number" id="symptomDuration" placeholder="Days" />
    </div>
  `;
}

// ==============================
// DYNAMIC TABS GENERATION
// ==============================
export function renderTabs(categories = {}) {
  // ডাটা ফাইলের ক্যাটাগরিগুলো থেকে অটোমেটিক হরিজন্টাল বাটন তৈরি
  const dynamicButtons = Object.keys(categories)
    .map((category, index) => {
      const safeId = category.toLowerCase().replace(/[^a-z0-9]/g, "");
      // প্রথম বাটনটিকে ডিফল্টভাবে একটিভ ক্লাস দেওয়া হলো
      return `<button class="tab-btn ${index === 0 ? 'active' : ''}" data-tab="cat-${safeId}">${category}</button>`;
    })
    .join("");

  return `
    ${dynamicButtons}
    <button class="tab-btn" data-tab="selectedTab">Selected</button>
    <button class="tab-btn" data-tab="advancedTab">Advanced</button>
  `;
}

export function renderSelectedTab() {
  return `
  <div id="selectedTab" class="tab-content">
    <div id="selectedSymptomsTab" class="selected-symptoms"></div>
  </div>
  `;
}

export function renderAdvancedTab(uiData) {
  return `
  <div id="advancedTab" class="tab-content">
    <div class="advanced-medical-wrapper">
      <button id="toggleMedicalInputs" class="advanced-toggle" type="button">
        Advanced Medical Inputs
      </button>
      <div id="advancedMedicalInputs" class="advanced-medical-inputs" style="display:none;">
        ${renderAdvancedAccordionSection("Patient Information", renderPatientInputs())}
        ${renderAdvancedAccordionSection("Physical Examination", renderAdvancedItems(uiData.examItems), uiData.examItems.length)}
        ${renderAdvancedAccordionSection("Lab Tests", renderAdvancedItems(uiData.testItems), uiData.testItems.length)}
        ${renderAdvancedAccordionSection("Emergency Signs", renderAdvancedItems(uiData.redFlagItems), uiData.redFlagItems.length)}
      </div>
    </div>
  </div>
  `;
}

// ==============================
// SYMPTOMS TAB (MAIN WRAPPER)
// ==============================
export function renderSymptomsTab(uiData) {
  return `
  <div id="symptomsTab" class="tab-content active">
    <div class="symptom-search-wrap">
      <input type="text" id="symptomSearch" class="symptom-search" placeholder="Search symptoms..." />
    </div>
    <div id="symptomCounter" class="symptom-counter">Selected: 0</div>
    <div id="selectedSymptoms" class="selected-symptoms"></div>
    <div id="liveFollowupQuestions" class="live-followup-container"></div>
    <div id="symptomList" class="symptom-list">
      ${renderCategoryHTML(uiData.categories)}
    </div>
  </div>
  `;
}

// ==============================
// SETUP TABS CONTROLLER
// ==============================
export function setupTabs() {
  const container = document.getElementById("dynamicTabsContainer");
  if (!container) return;

  const coreTabs = ["selectedTab", "advancedTab"];
  const symptomsTab = document.getElementById("symptomsTab");
  const selectedTab = document.getElementById("selectedTab");
  const advancedTab = document.getElementById("advancedTab");

  container.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    // সব বাটন থেকে active ক্লাস সরিয়ে কারেন্ট বাটনে অ্যাড করা
    container.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // ==========================================
    // AUTOMATIC SCROLL/FOCUS TO ACTIVE TAB
    // ==========================================
    // এই কোডটুকু সিলেক্টেড বাটনটিকে স্ক্রিনের মাঝখানে অটোমেটিক টেনে নিয়ে আসবে
    btn.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });

    const val = btn.getAttribute("data-tab");
    const categories = document.querySelectorAll(".symptom-category");

    // ১. কোর ট্যাব হাইড/শো লজিক
    if (coreTabs.includes(val)) {
      symptomsTab?.classList.remove("active");
      selectedTab?.classList.toggle("active", val === "selectedTab");
      advancedTab?.classList.toggle("active", val === "advancedTab");
    } else {
      // সাধারণ লক্ষণ ট্যাবে ব্যাক করা
      symptomsTab?.classList.add("active");
      selectedTab?.remove("active");
      advancedTab?.classList.remove("active");

      // ২. ডাইনামিক ক্যাটাগরি ফিল্টারিং লজিক
      categories.forEach(cat => {
        const catId = cat.getAttribute("data-cat-id");
        if (val === `cat-${catId}`) {
          cat.style.display = "block";
          cat.classList.add("open"); 
        } else {
          cat.style.display = "none";
          cat.classList.remove("open");
        }
      });
    }
  });

  // পেজ ইনিশিয়াল লোড হওয়ার সময় ফার্স্ট ক্যাটাগরি ফিল্টার ট্রিগার করা
  const firstBtn = container.querySelector(".tab-btn");
  if (firstBtn) firstBtn.click();
}


// ==============================
// OTHER INTERACTION SETUPS
// ==============================
export function setupAccordion() {
  const headers = document.querySelectorAll(".symptom-category-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const current = header.closest(".symptom-category");
      document.querySelectorAll(".symptom-category").forEach(category => {
        if (category !== current) category.classList.remove("open");
      });
      current.classList.toggle("open");
    });
  });
}

export function setupAdvancedToggle() {
  const toggleMedicalBtn = document.getElementById("toggleMedicalInputs");
  const advancedMedicalInputs = document.getElementById("advancedMedicalInputs");
  if (!toggleMedicalBtn || !advancedMedicalInputs) return;

  toggleMedicalBtn.onclick = () => {
    const isHidden = advancedMedicalInputs.style.display === "none";
    advancedMedicalInputs.style.display = isHidden ? "block" : "none";
    toggleMedicalBtn.textContent = isHidden ? "Hide Advanced Medical Inputs" : "Advanced Medical Inputs";
  };
}

export function setupSearch() {
  const searchInput = document.getElementById("symptomSearch");
  const symptomList = document.getElementById("symptomList");
  if (!searchInput || !symptomList) return;

  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase().trim();
    const items = symptomList.querySelectorAll(".symptom-item");

    items.forEach(item => {
      const symptom = item.dataset.symptom.toLowerCase();
      item.style.display = symptom.includes(value) ? "flex" : "none";
    });
  });
}

export function setupCheckboxEvents(container, selectedSymptoms, symptomCounter) {
  container.addEventListener("change", e => {
    if (e.target.type !== "checkbox") return;
    updateSelectedSymptoms(selectedSymptoms, symptomCounter);
    requestAnimationFrame(() => { renderLiveFollowupQuestions(); });
  });
}

export function setupLiveInputs(selectedSymptoms, symptomCounter) {
  const liveInputs = ["patientName", "userAge", "userGender", "symptomDuration"];
  const toggleMedicalBtn = document.getElementById("toggleMedicalInputs");
  const advancedMedicalInputs = document.getElementById("advancedMedicalInputs");

  liveInputs.forEach(id => {
    const element = document.getElementById(id);
    if (!element) return;

    const eventType = element.tagName === "SELECT" ? "change" : "input";
    element.addEventListener(eventType, () => {
      if (advancedMedicalInputs) advancedMedicalInputs.style.display = "block";
      if (toggleMedicalBtn) toggleMedicalBtn.textContent = "Hide Advanced Medical Inputs";
      updateSelectedSymptoms(selectedSymptoms, symptomCounter);
      requestAnimationFrame(() => { renderLiveFollowupQuestions(); });
    });
  });
}

export function renderSymptomInfoModal() {
  return `
  <div id="symptomInfoModal" class="symptom-tooltip">
    <button id="closeSymptomModal" class="symptom-modal-close" type="button">✖</button>
    <div id="symptomModalContent"></div>
  </div>
  `;
}

export function setupSymptomInfoModal() {
  const buttons = document.querySelectorAll(".symptom-info-btn");
  const modal = document.getElementById("symptomInfoModal");
  const content = document.getElementById("symptomModalContent");
  const closeBtn = document.getElementById("closeSymptomModal");

  if (!modal || !content) return;
  if (closeBtn) closeBtn.onclick = () => { modal.style.display = "none"; };

  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const symptom = btn.dataset.symptom?.trim();
      const meta = window.symptomMetadata?.[symptom] || {};

      let html = `<div class="symptom-modal-title">${renderSymptomLabel(symptom)}</div>`;

      Object.entries(meta).forEach(([key, value]) => {
        if (value == null || ["followup", "present", "weight"].includes(key)) return;
        if (typeof value === "object" && !Array.isArray(value)) {
          html += `<div class="symptom-modal-section"><b>${key}</b><br>${value.en || ""}${value.bn ? `<br><br>(${value.bn})` : ""}</div>`;
          return;
        }
        if (Array.isArray(value)) {
          html += `<div class="symptom-modal-section"><b>${key}</b><br>${value.join(", ")}</div>`;
          return;
        }
        html += `<div class="symptom-modal-section"><b>${key}</b> : ${value}</div>`;
      });

      content.innerHTML = html;
      modal.style.display = "block";
      modal.style.visibility = "hidden";

      const rect = btn.getBoundingClientRect();
      let leftPosition = rect.right + 10;
      if (leftPosition + modal.offsetWidth > window.innerWidth - 10) {
        leftPosition = rect.left - modal.offsetWidth - 10;
      }
      let topPosition = rect.top + window.scrollY - (modal.offsetHeight / 2) + (rect.height / 2);
      
      modal.style.left = `${Math.max(10, leftPosition)}px`;
      modal.style.top = `${Math.max(10, topPosition)}px`;
      modal.style.visibility = "visible";
    });
  });

  document.addEventListener("click", e => {
    if (!modal.contains(e.target) && !e.target.closest(".symptom-info-btn")) {
      modal.style.display = "none";
    }
  });
}
