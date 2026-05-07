/*
🧠 FILE: checkup.js (MAIN CONTROLLER)

👉 কাজ:
- symptom → disease → medicine full flow control করে

🔥 Flow:
dropdown → buildAnswers → autoDiagnose → LinkEngine → UI
*/

// ================= IMPORT =================

// ✅ DATA
import { CHECKUP_DATA } from "../../data/checkup/checkUpData.js";

// ✅ ENGINE
import { autoDiagnose } from "../../engine/autoDiagnose.js";

// ✅ LINK ENGINE
import { LinkEngine } from "../shared/globalLinkEngine.js";

// ✅ LOADER
import { ALL_DATA } from "../../RegisterAndLoader/loader.js";

// ✅ UI
import { renderCheckupResult } from "./checkUpUiRender.js";

// ✅ DROPDOWN SYSTEM (🔥 NEW)
import { renderDropdown, getSelected } from "./dropdownRender.js";

// ✅ ADAPTER
import { buildAnswers } from "./symptomAdapter.js";

// ================= ENGINE =================
const engine = new LinkEngine(ALL_DATA);


// ================= SMART FILTER =================
function smartFilter(selected){

  const highPriority = [
    "breathing_difficulty",
    "chest_pain",
    "fever",
    "vomiting",
    "diarrhea"
  ];

  const important = selected.filter(s => highPriority.includes(s));

  if(important.length >= 3){
    return important.slice(0,5);
  }

  return selected.slice(0,5);
}


// ================= CONFLICT DETECT =================
function detectConflict(selected){

  const conflicts = [
    ["constipation","diarrhea"]
  ];

  for(const pair of conflicts){
    if(selected.includes(pair[0]) && selected.includes(pair[1])){
      alert("⚠️ Conflicting symptoms selected");
      return true;
    }
  }

  return false;
}


// ================= ADVICE =================
function generateAdvice(d){

  if(!d) return "";

  if(d.emergency){
    return "🚨 Immediately consult a doctor";
  }

  if(d.tags?.includes("constipation")){
    return "Drink more water and eat fiber";
  }

  if(d.tags?.includes("infection")){
    return "Maintain hygiene and take proper medication";
  }

  if(d.tags?.includes("eye")){
    return "Avoid touching eyes and keep clean";
  }

  return "Take rest and monitor symptoms";
}


// ================= MAIN =================
export function runCheckup(answers){

  // 🔥 CLEAN EMPTY
  Object.keys(answers).forEach(k => {
    if(!answers[k] || (Array.isArray(answers[k]) && !answers[k].length)){
      delete answers[k];
    }
  });

  const diseases = autoDiagnose(answers, CHECKUP_DATA);

  if(!diseases.length){
    return { disease:null, best:null, meds:[], allDiseases:[] };
  }

  const mainDisease = diseases[0];
  const secondary = diseases.slice(1,3);

  // ================= 💊 MEDICINE =================
  let allMeds = [];

  [mainDisease, ...secondary].forEach(d => {
    allMeds.push(...engine.getMedicinesByDisease(d));
  });

  // 🔥 DEDUPE (KEEP BEST SCORE)
  const map = new Map();

  allMeds.forEach(m => {
    const key = m.name?.toLowerCase();

    if(
      !map.has(key) ||
      (map.get(key)._score || 0) < (m._score || 0)
    ){
      map.set(key, m);
    }
  });

  let finalMeds = Array.from(map.values());

  // 🔥 SORT
  finalMeds.sort((a,b) => (b._score || 0) - (a._score || 0));

  // 🔥 CONFIDENCE
  finalMeds = engine.getWithConfidence(finalMeds);

  const best = finalMeds[0] || null;

  return {
    disease: mainDisease,
    best,
    meds: finalMeds.slice(0,5),
    allDiseases: diseases,
    advice: generateAdvice(mainDisease)
  };
}


// ================= START BUTTON =================
window.startDiagnosis = function(){

  const selected = getSelected();

  if(!selected.length){
    alert("⚠️ Please select at least one symptom");
    return;
  }

  // 🔥 MAX LIMIT
  if(selected.length > 8){
    alert("⚠️ Max 8 symptoms allowed");
    return;
  }

  // 🔥 CONFLICT CHECK
  if(detectConflict(selected)) return;

  // 🔥 SMART FILTER (MOST IMPORTANT)
  const filtered = smartFilter(selected);

  const answers = buildAnswers(filtered);

  const result = runCheckup(answers);

  // 🔥 show original + filtered
  result.selectedSymptoms = selected;
  result.usedSymptoms = filtered;

  renderCheckupResult(result);
};


// ================= INIT =================
window.addEventListener("DOMContentLoaded", () => {
  renderDropdown();
});


// ================= LIVE RUN =================
window.runCheckupFromUI = function(selected){

  if(!selected.length){
    document.getElementById("result").innerHTML = "<p>Select symptom 😅</p>";
    return;
  }

  // 🔥 APPLY SAME LOGIC HERE
  const filtered = smartFilter(selected);

  const answers = buildAnswers(filtered);

  const result = runCheckup(answers);

  result.selectedSymptoms = selected;
  result.usedSymptoms = filtered;

  renderCheckupResult(result);
};