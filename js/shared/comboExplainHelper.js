// 💊 COMBO EXPLAIN HELPER (AI READY)

// ================= 🔥 NORMALIZE =================
function normalize(str){

  return (str || "")
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}


// ================= 🔥 SAFE ARRAY =================
function toArray(v){

  if(Array.isArray(v)) return v;

  if(typeof v === "string"){
    return v
      .split(/,|\+|\/|&/)
      .map(x => x.trim())
      .filter(Boolean);
  }

  return [];
}


// ================= 🔥 COMPOSITION NAME =================
function getCompName(comp){

  // 🟢 string
  if(typeof comp === "string"){
    return comp;
  }

  // 🟢 object structure
  if(typeof comp === "object"){

    return (
      comp?.ingredient?.en ||
      comp?.ingredient ||
      comp?.name ||
      ""
    );
  }

  return "";
}


// ================= 🔥 DRUG → EXPLANATION MAP =================
const DRUG_MAP = {

  // 🟢 FEVER / PAIN
  "paracetamol": {
    en: "Reduces fever and pain",
    bn: "জ্বর ও ব্যথা কমায়"
  },

  "acetaminophen": {
    en: "Reduces fever and pain",
    bn: "জ্বর ও ব্যথা কমায়"
  },

  "ibuprofen": {
    en: "Reduces pain and inflammation",
    bn: "ব্যথা ও ফোলা কমায়"
  },

  "diclofenac": {
    en: "Strong pain relief",
    bn: "শক্তিশালী ব্যথানাশক"
  },

  "caffeine": {
    en: "Boosts pain relief and reduces headache",
    bn: "মাথাব্যথা দ্রুত কমায়"
  },

  // 🟢 COLD / ALLERGY
  "phenylephrine": {
    en: "Relieves nasal congestion",
    bn: "নাক বন্ধ কমায়"
  },

  "chlorpheniramine": {
    en: "Reduces allergy and runny nose",
    bn: "অ্যালার্জি ও নাক দিয়ে পানি পড়া কমায়"
  },

  "cetirizine": {
    en: "Reduces allergy symptoms",
    bn: "অ্যালার্জির উপসর্গ কমায়"
  },

  "levocetirizine": {
    en: "Reduces allergy (less drowsy)",
    bn: "অ্যালার্জি কমায় (কম ঘুম পায়)"
  },

  // 🟢 COUGH
  "dextromethorphan": {
    en: "Suppresses cough",
    bn: "কাশি কমায়"
  },

  "ambroxol": {
    en: "Loosens mucus",
    bn: "কফ পাতলা করে"
  },

  // 🟢 GASTRIC
  "pantoprazole": {
    en: "Reduces stomach acid",
    bn: "পেটের অ্যাসিড কমায়"
  },

  "omeprazole": {
    en: "Reduces stomach acid",
    bn: "পেটের অ্যাসিড কমায়"
  },

  // 🟢 ANTIBIOTIC
  "amoxicillin": {
    en: "Kills bacteria",
    bn: "ব্যাকটেরিয়া ধ্বংস করে"
  },

  "clavulanic acid": {
    en: "Prevents antibiotic resistance",
    bn: "অ্যান্টিবায়োটিককে আরও শক্তিশালী করে"
  },

  "azithromycin": {
    en: "Stops bacterial growth",
    bn: "ব্যাকটেরিয়ার বৃদ্ধি থামায়"
  }
};


// ================= 🔥 FIND EXPLAIN =================
function findExplain(name){

  const key = normalize(name);

  // 🥇 exact
  if(DRUG_MAP[key]){
    return DRUG_MAP[key];
  }

  // 🥈 partial
  for(const k in DRUG_MAP){

    if(
      key.includes(k) ||
      k.includes(key)
    ){
      return DRUG_MAP[k];
    }
  }

  return null;
}


// ================= 🔥 MAIN FUNCTION =================
export function generateComboExplain(m){

  if(!m?.composition){
    return [];
  }

  const comps = toArray(m.composition);

  return comps.map(comp => {

    const rawName = getCompName(comp);

    const explain = findExplain(rawName);

    // 🟢 strength
    const strength =
      typeof comp === "object"
        ? comp?.strength || ""
        : "";

    // 🟢 display
    const display = [
      rawName,
      strength
    ]
    .filter(Boolean)
    .join(" ");

    // 🥇 found
    if(explain){

      return {

        en: `${display} → ${explain.en}`,

        bn: `${explain.bn}${
          strength ? ` (${strength})` : ""
        }`
      };
    }

    // 🥉 fallback
    return {

      en: display,

      bn: ""
    };

  });

}