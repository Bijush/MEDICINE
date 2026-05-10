// ================= 🔥 IMPORT =================
import { DATA_FILES } from "./registry.js";
import { getClassDesc } from "../js/shared/classHelper.js";
import { generateComboExplain } from "../js/shared/comboExplainHelper.js";

import { normalize } from "../js/shared/normalize.js";


function normalizeArr(arr = []){

  return arr.map(x =>
    normalize(x)
  );

}
// ================= 🔥 SAFE GET =================
function get(obj, path, fallback = undefined){

  try{

    return path
      .split(".")
      .reduce((o,k) => o?.[k], obj)
      ?? fallback;

  }catch{

    return fallback;
  }
}


// ================= 🔥 ARRAY MERGE =================
function mergeArr(a = [], b = []){

  const merged = [
    ...(a || []),
    ...(b || [])
  ];

  return [
    ...new Set(
      merged
        .filter(Boolean)
        .map(x =>
          typeof x === "string"
            ? x.trim()
            : x
        )
    )
  ];
}


// ================= 🔥 SAFE ID =================
function generateId(m){

  const comp = Array.isArray(m.composition)

    ? m.composition
        .map(x => {

          if(typeof x === "string"){
            return x;
          }

          return (
            x?.ingredient?.en ||
            x?.ingredient ||
            ""
          );
        })
        .join("_")

    : (m.composition || "");


  const base = [
    m.name || "",
    comp
  ].join("_");


  return normalize(base);
}


// ================= 🔥 PRIORITY =================
function pickSeverity(a, b){

  const order = [
    "mild",
    "medium",
    "strong",
    "very-strong"
  ];

  return order[
    Math.max(
      order.indexOf(a),
      order.indexOf(b)
    )
  ] || b || a;
}


function pickGastric(a, b){

  const priority = [
    "safe",
    "mild irritation",
    "may cause acidity"
  ];

  const A = normalize(a);
  const B = normalize(b);

  return priority[
    Math.max(
      priority.indexOf(A),
      priority.indexOf(B)
    )
  ] || B || A;
}


// ================= 🔥 RX FIX =================
function fixRx(val){

  if(val === true || val === false){
    return val;
  }

  if(val === "true"){
    return true;
  }

  if(val === "false"){
    return false;
  }

  return false;
}


// ================= 🔥 NORMALIZE MEDICINE =================
function normalizeMedicine(m = {}){

  const symptoms =
    Array.isArray(m.symptoms)
      ? m.symptoms
      : get(m, "symptoms.en", []);

  const diseases =
    Array.isArray(m.diseases)
      ? m.diseases
      : get(m, "diseases.en", []);

  const composition = Array.isArray(m.composition)

    ? m.composition.map(x => {

        if(typeof x === "string"){
          return x;
        }

        return (
          x?.ingredient?.en ||
          x?.ingredient ||
          ""
        );
      })

    : m.composition;


  return {

    ...m,

    // ================= BASIC =================
    name:
      m.name ||
      get(m, "names.primary.en", ""),

    name_bn:
      m.name_bn ||
      get(m, "names.primary.bn", ""),

    generic:
      m.generic ||
      get(m, "names.generic.en", ""),

    generic_bn:
      m.generic_bn ||
      get(m, "names.generic.bn", ""),

    // ================= GROUP =================
    group:
      typeof m.group === "string"
        ? m.group
        : get(m, "group.en", ""),

    group_bn:
      m.group_bn ||
      get(m, "group.bn", ""),

    subgroup:
      typeof m.subgroup === "string"
        ? m.subgroup
        : get(m, "subgroup.en", ""),

    subgroup_bn:
      m.subgroup_bn ||
      get(m, "subgroup.bn", ""),

    // ================= CLASS =================
    class:
      typeof m.class === "string"
        ? m.class
        : get(m, "class.en", ""),

    class_bn:
      m.class_bn ||
      get(m, "class.bn", ""),

    // ================= CATEGORY =================
    category:
      typeof m.category === "string"
        ? m.category
        : get(m, "category.en", ""),

    category_bn:
      m.category_bn ||
      get(m, "category.bn", ""),

    // ================= ARRAYS =================
    symptoms,

    symptoms_bn:
      m.symptoms_bn ||
      get(m, "symptoms.bn", []),

    diseases,

    diseases_bn:
      m.diseases_bn ||
      get(m, "diseases.bn", []),

    tags:
      Array.isArray(m.tags)
        ? m.tags
        : [],

    brands:
      Array.isArray(m.brands)
        ? m.brands
        : [],

    strengths:
      Array.isArray(m.strengths)
        ? m.strengths
        : [],

    dosageForms:
      Array.isArray(m.dosageForms)
        ? m.dosageForms
        : get(m, "dosageForms.en", []),

    dosageForms_bn:
      get(m, "dosageForms.bn", []),

    // ================= COMPOSITION =================
    composition,

    // ================= SAFETY =================
    otc: m.otc === true,

    rx: fixRx(m.rx),

    antibiotic:
      m.antibiotic === true,

    emergencyUse:
      m.emergencyUse === true,

    // ================= AI =================
    severity:
      m.severity ||
      get(m, "ai.severity.en", "mild"),

    powerLevel:
      m.powerLevel ||
      get(m, "ai.powerLevel", 1),

    safetyLevel:
      m.safetyLevel ||
      get(m, "ai.safetyLevel", 5),

    score:
      m.score ||
      get(m, "ai.score", {}),

    // ================= UI =================
    gastricEffect:
      m.gastricEffect ||
      get(m, "ui.gastricEffect.en", "safe"),

    colorHint:
      m.colorHint ||
      get(m, "ui.colorHint", "blue"),

    commonUse:
      m.commonUse ??
      get(m, "ui.commonUse", false)
  };
}


// ================= 🔥 SMART MERGE =================
function smartMerge(oldItem = {}, newItem = {}){

  return {

    ...oldItem,
    ...newItem,

    tags:
      mergeArr(
        oldItem.tags,
        newItem.tags
      ),

    symptoms:
      mergeArr(
        oldItem.symptoms,
        newItem.symptoms
      ),

    diseases:
      mergeArr(
        oldItem.diseases,
        newItem.diseases
      ),

    brands:
      mergeArr(
        oldItem.brands,
        newItem.brands
      ),

    strengths:
      mergeArr(
        oldItem.strengths,
        newItem.strengths
      ),

    symptoms_bn:
      mergeArr(
        oldItem.symptoms_bn,
        newItem.symptoms_bn
      ),

    diseases_bn:
      mergeArr(
        oldItem.diseases_bn,
        newItem.diseases_bn
      ),

    dosageForms:
      mergeArr(
        oldItem.dosageForms,
        newItem.dosageForms
      ),

    dosageForms_bn:
      mergeArr(
        oldItem.dosageForms_bn,
        newItem.dosageForms_bn
      ),

    class:
      newItem.class ||
      oldItem.class,

    group:
      newItem.group ||
      oldItem.group,

    category:
      newItem.category ||
      oldItem.category,

    severity:
      pickSeverity(
        oldItem.severity,
        newItem.severity
      ),

    gastricEffect:
      pickGastric(
        oldItem.gastricEffect,
        newItem.gastricEffect
      ),

    rx:
      fixRx(
        newItem.rx ??
        oldItem.rx
      )
  };
}


// ================= 🔥 ENRICH =================
function enrich(m){

  const className =
    m.class || "default";

  const desc =
    getClassDesc(className);

  const id =
    m.id || generateId(m);

  const tagsLower =
    normalizeArr(m.tags);

  const symptomsLower =
    normalizeArr(m.symptoms);

  const diseasesLower =
    normalizeArr(m.diseases);


  // 🔥 composition lower
  const compText = Array.isArray(m.composition)

    ? m.composition.join(" ")

    : (m.composition || "");


  return {

    ...m,

    id,

    class: className,

    classDesc:
      desc?.en || "",

    classDesc_bn:
      desc?.bn || "",

    comboExplain:
      m.comboExplain ||
      generateComboExplain(m),

    tags:
      m.tags || [],

    symptoms:
      m.symptoms || [],

    diseases:
      m.diseases || [],

    nameLower:
      normalize(m.name),

    genericLower:
      normalize(m.generic),

    compLower:
      normalize(compText),

    tagsLower,
    symptomsLower,
    diseasesLower,

    _tagSet:
      new Set(tagsLower),

    _symptomSet:
      new Set(symptomsLower),

    _diseaseSet:
      new Set(diseasesLower)
  };
}


// ================= 🔥 BUILD MAP =================
const map = new Map();

DATA_FILES
  .flat()
  .map(normalizeMedicine)
  .filter(i => i && i.name)
  .forEach(i => {

    const compKey = Array.isArray(i.composition)

      ? i.composition.join(",")

      : (i.composition || "");


    const key = normalize(
      i.name + "|" + compKey
    );

    const existing =
      map.get(key);

    map.set(
      key,
      smartMerge(existing, i)
    );
  });


// ================= 🔥 FINAL =================
export const ALL_DATA = Array
  .from(map.values())
  .map(enrich);


// ================= 🔥 UTILS =================
export function getGroups(){

  return [

    ...new Set(
      ALL_DATA
        .map(i => i.group)
        .filter(Boolean)
    )

  ];
}


export function getCategories(){

  return [

    ...new Set(
      ALL_DATA
        .map(i => i.category)
        .filter(Boolean)
    )

  ];
}


export function debugData(){

  console.log(
    "📦 TOTAL:",
    ALL_DATA.length
  );

  console.log(
    "📦 DATA:",
    ALL_DATA
  );
}


// 🔥 DEBUG
console.log("🔥 LOADER START");

console.log("📦 DATA_FILES =", DATA_FILES);

console.log("📦 FLAT =", DATA_FILES.flat());

console.log("📦 MAP SIZE =", map.size);

console.log("📦 ALL_DATA =", ALL_DATA);

console.log("📦 TOTAL =", ALL_DATA.length);