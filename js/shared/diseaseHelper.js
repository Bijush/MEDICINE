import { getStrengthScore } from "./strengthHelper.js";

function normalize(s){
  return (s || "").toLowerCase().trim();
}

function normalizeArr(arr){
  return (arr || []).map(normalize);
}

// ================= 🔥 MAIN SCORING =================
export function getDiseaseScore(med, diseaseObj){

  let score = 0;

  const medDiseases = normalizeArr(med.diseases);
  const medSymptoms = normalizeArr(med.symptoms);

  const diseaseName = normalize(diseaseObj.name);
  const diseaseSymptoms = normalizeArr(diseaseObj.tags || []);

  // 🥇 EXACT DISEASE (strong)
  if(medDiseases.includes(diseaseName)){
    score += 80; // 🔥 improved
  }

  // 🥈 PARTIAL MATCH
  medDiseases.forEach(d => {
    if(diseaseName.includes(d) || d.includes(diseaseName)){
      score += 30;
    }
  });

  // 🥉 SYMPTOM MATCH
  diseaseSymptoms.forEach(s => {
    if(medSymptoms.includes(s)){
      score += 15;
    }
  });

  // 🔥 STRENGTH (FIXED)
  score += getStrengthScore(med);

  // ================= 🚨 SAFETY =================

  // ❌ antibiotic without infection
  if(med.group === "antibiotic" && !diseaseObj.tags?.includes("infection")){
    score -= 80;
  }

  // ❌ strong medicine without strong disease
  if(med.strength === "very-strong" && diseaseObj.severity !== "strong"){
    score -= 40;
  }

  return score;
}


// ================= 🔥 BEST PICK =================
export function getBestMedicineForDisease(list, diseaseObj){

  const scored = list
    .map(m => ({
      ...m,
      _score: getDiseaseScore(m, diseaseObj)
    }))
    .filter(m => m._score > 0)
    .sort((a,b) => b._score - a._score);

  return scored[0] || null;
}