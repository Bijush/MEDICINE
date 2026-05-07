// 🌍 GLOBAL LINK ENGINE (UPDATED)

// 🔥 NORMALIZE
function normalize(str){
  return (str || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_")
    .trim();
}

// 🔥 ARRAY NORMALIZE
function normalizeArr(arr){
  return (arr || []).map(normalize);
}

export class LinkEngine {

  constructor(allMedicines = []){

    this.medicines = allMedicines.map(m => {

      const normalized = {
        ...m,
        _name: normalize(m.name),
        _tags: normalizeArr(m.tags),
        _symptoms: normalizeArr(m.symptoms),
        _diseases: normalizeArr(m.diseases)
      };

      normalized._tagSet = new Set(normalized._tags);
      normalized._symptomSet = new Set(normalized._symptoms);
      normalized._diseaseSet = new Set(normalized._diseases);

      return normalized;
    });
  }

  // 🔥 CONTEXT
  prepareContext(context = {}){
    return {
      refs: normalizeArr(context.treatmentRefs),
      symptoms: normalizeArr(context.symptoms),
      disease: normalize(context.disease),
      hasFever: context.hasFever === true, // 🔥 FIX (strict)
      severity: context.severity || ""
    };
  }

  // 🔥 SCORE ENGINE
  calculateScore(med, ctx){

    let score = 0;

    const disease = ctx.disease || "";
    const group = med.group || "";

    // 🥇 DIRECT MATCH
    if(ctx.refs.length && ctx.refs.includes(med._name)){
      score += 120;
    }

    // 🥈 EXACT DISEASE
    if(disease && med._diseaseSet.has(disease)){
      score += 60;
    }

    // 🥉 PARTIAL DISEASE
    med._diseases.forEach(d => {
      if(disease.includes(d) || d.includes(disease)){
        score += 25;
      }
    });

    // 🔹 SYMPTOM MATCH
    ctx.symptoms.forEach(s => {
      if(med._symptomSet.has(s)){
        score += 12;
      } 
      else if(med._tagSet.has(s)){
        score += 6;
      }
    });

    // ================= 🚨 SAFETY =================

    // ❌ antibiotic without fever → heavy penalty (NOT full block)
    if(group === "antibiotic" && !ctx.hasFever){
      score -= 80; // 🔥 FIX
    }

    // ❌ very strong without severity
    if(med.strength === "very-strong" && ctx.severity !== "high"){
      score -= 40;
    }

    // ❌ gastric unsafe
    if(med.gastricEffect === "increase" && ctx.symptoms.includes("gas")){
      score -= 30;
    }

    // ================= 🧠 BOOST =================

    // 🔥 infection + fever
    if(disease.includes("infection") && ctx.hasFever){
      if(group === "antibiotic") score += 50;
    }

    // 🔥 EYE BOOST (STRONG FIX)
    if(disease.includes("eye") || disease.includes("conjunctivitis")){
      if(group === "eye_drop") score += 90; // 🔥 stronger
    }

    // 🔥 fever medicine
    if(disease.includes("fever")){
      if(group === "fever" || group === "pain"){
        score += 30;
      }
    }

    // 🔥 allergy
    if(disease.includes("allergy")){
      if(group === "antiallergic") score += 60;
    }

    return score;
  }

  // 🔥 DISEASE → MEDICINE
  getMedicinesByDisease(diseaseObj){

    if(!diseaseObj) return [];

    const ctx = this.prepareContext({
      disease: diseaseObj.name,
      symptoms: diseaseObj.tags || [],
      treatmentRefs: diseaseObj.treatmentRefs || [],
      hasFever: diseaseObj.tags?.includes("fever"), // 🔥 FIX
      severity: diseaseObj.severity
    });

    const results = this.medicines
      .map(m => ({
        ...m,
        _score: this.calculateScore(m, ctx)
      }))
      .filter(m => m._score > 0)
      .sort((a,b) => b._score - a._score);

    return results.length ? results : this.medicines.slice(0,3);
  }

  // 🔥 SYMPTOMS → MEDICINE
  getMedicinesBySymptoms(symptoms = []){

    if(!symptoms.length) return [];

    const ctx = this.prepareContext({ symptoms });

    const results = this.medicines
      .map(m => ({
        ...m,
        _score: this.calculateScore(m, ctx)
      }))
      .filter(m => m._score > 0)
      .sort((a,b) => b._score - a._score);

    return results.length ? results : this.medicines.slice(0,3);
  }

  // 🔥 TOP
  getTop(list, limit = 5){
    return (list || []).slice(0, limit);
  }

  // 🔥 GROUP
  groupByGroup(list){
    const map = {};
    (list || []).forEach(m => {
      const g = m.group || "other";
      if(!map[g]) map[g] = [];
      map[g].push(m);
    });
    return map;
  }

  // 🔥 BEST
  getBest(list){
    return list?.[0] || null;
  }

  // 🔥 CONFIDENCE
  getWithConfidence(list){

    if(!list.length) return [];

    const max = list[0]._score || 1;

    return list.map(m => ({
      ...m,
      confidence: Math.round((m._score / max) * 100)
    }));
  }

}