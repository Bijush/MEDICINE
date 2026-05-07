/*
🧠 FILE: theoryMain.js

👉 কাজ:
- theory data render
- filter + search
- expandable card UI
- disease → medicine auto link

🔥 IMPROVEMENTS:
✔ safe render (no crash)
✔ smooth toggle
✔ better search
✔ UI optimized
*/

import { THEORY_DATA } from "./theoryLoader.js";
import { ALL_DATA } from "../../RegisterAndLoader/loader.js";
import { LinkEngine } from "../shared/globalLinkEngine.js";

import {
  initFilters,
  getSelectedFilters
} from "../shared/filters.js";

let DATA = THEORY_DATA;
let openId = null;

const engine = new LinkEngine(ALL_DATA);


// ================= INIT =================
window.addEventListener("DOMContentLoaded", () => {

  initFilters(DATA, applyFilters);
  render(DATA);

});


// ================= FILTER =================
function applyFilters(){

  const selected = getSelectedFilters();

  const filtered = DATA.filter(d => 
    selected.has("all") || selected.has(d.group)
  );

  render(filtered);
}


// ================= SEARCH =================
window.searchData = function(val){

  const v = val.toLowerCase().trim();

  const filtered = DATA.filter(d => 
    d.searchText?.includes(v) ||
    d.title?.toLowerCase().includes(v) ||
    d.raw?.symptoms?.join(" ").toLowerCase().includes(v)
  );

  render(filtered);
};


// ================= TOGGLE =================
window.toggle = function(id){
  openId = openId === id ? null : id;
  applyFilters(); // ✅ FIX
};


// ================= RENDER =================
function render(list){

  const el = document.getElementById("list");
  if(!el) return;

  if(!list?.length){
    el.innerHTML = "<p>No data found 😅</p>";
    return;
  }

  el.innerHTML = list.map(d => {

    let best = null;
    let meds = [];

    // 🔥 MEDICINE ENGINE
    if(d.type === "disease"){
      const allMeds = engine.getMedicinesByDisease(d.raw);
      best = engine.getBest(allMeds);
      meds = engine.getTop(allMeds, 5);
    }

    return `
  
    <div class="card ${openId === d.id ? "open" : ""}" 
         onclick="toggle('${d.id}')">

      <div class="title">

        <div class="icon">
          ${d.type === "antibiotic" ? "💊" : "🦠"}
        </div>

        <div class="info">
          <b>${getTitle(d)}</b>
          <small>${getSubtitle(d)}</small>
        </div>

        <span class="tag">
          ${(d.group || "").replace("_"," ").toUpperCase()}
        </span>

        <span class="arrow ${openId === d.id ? "rotate" : ""}">
          ▶
        </span>

      </div>

      <div class="details">

        ${renderField("Description", getDescription(d), d.raw?.description_bn)}

        ${renderList("Symptoms", d.raw?.symptoms, d.raw?.symptoms_bn)}

        ${renderList("Treatment", d.raw?.treatment, d.raw?.treatment_bn)}

        ${d.type === "antibiotic" ? renderAntibiotic(d.raw) : ""}

        ${renderBest(best)}

        ${renderCombo(best)}

        ${renderMeds(meds)}

      </div>

    </div>
    `;
    
  }).join("");
}


// ================= HELPERS =================

function renderField(title, value, bn){
  if(!value) return "";
  return `
    <div class="field">
      <b>${title}</b>
      <div class="value">${value}</div>
      ${bn ? `<span class="bn">${bn}</span>` : ""}
    </div>
  `;
}

function renderList(title, list, bn){
  if(!list?.length) return "";
  return `
    <div class="field">
      <b>${title}</b>
      <div class="value">${list.join(", ")}</div>
      ${bn?.length ? `<span class="bn">${bn.join(", ")}</span>` : ""}
    </div>
  `;
}

function renderBest(best){
  if(!best) return "";
  return `
    <div class="field">
      <b>⭐ Best Medicine</b>
      <div class="tag-wrap">
        <span class="tag" style="background:#16a34a;color:white">
          💊 ${best.name}
        </span>
      </div>
    </div>
  `;
}

function renderCombo(best){
  if(!best?.comboExplain?.length) return "";
  return `
    <div class="field">
      <b>💊 How this combo works</b>
      <div class="tag-wrap">
        ${best.comboExplain.map(c=>`
          <span class="tag">
            ${c.en}
            ${c.bn ? `<small class="bn">${c.bn}</small>` : ""}
          </span>
        `).join("")}
      </div>
    </div>
  `;
}

function renderMeds(meds){
  if(!meds?.length) return "";
  return `
    <div class="field">
      <b>Suggested Medicines</b>
      <div class="tag-wrap">
        ${meds.map(m => `
          <span class="tag">
            💊 ${m.name}
            ${m.comboExplain?.length ? "⚡" : ""}
          </span>
        `).join("")}
      </div>
    </div>
  `;
}


// ================= ANTIBIOTIC =================
function renderAntibiotic(d){
  return d.subtypes?.map(s => `
    <div class="field">
      <b>${s.name}</b>

      ${s.mechanism ? `<div>⚙️ ${s.mechanism}</div>` : ""}

      ${s.examples?.length 
        ? `<div>💊 ${s.examples.join(", ")}</div>` 
        : ""
      }

      ${s.diseases?.length 
        ? `<div>🦠 ${s.diseases.join(", ")}</div>` 
        : ""
      }

    </div>
  `).join("") || "";
}


// ================= SAFE GETTERS =================
function getTitle(d){
  return d.title || d.name || d.heading || d.label || d.category || "No Title";
}

function getSubtitle(d){
  return d.subtitle || d.name_bn || d.subheading || "";
}

function getDescription(d){
  return d.description || d.desc || d.details || "";
}