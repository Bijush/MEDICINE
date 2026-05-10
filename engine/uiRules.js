export const UI_RULES = {

  // ================= HIDDEN =================

  hiddenFields: [

  "ui",
  "id",

  "searchText",
  "searchableText",

  "nameLower",
  "genericLower",
  "compLower",

  "groupLower",
  "categoryLower",
  "typeLower",

  "tags",
  "tagsLower",

  "symptomsLower",
  "diseasesLower",
  "bestForLower",

  "isCombo",
  "hasComposition",

  "colorHint",

  "commonUse",
  "fastRelief",

  "hospitalLevel",

  "bowelSoftener",

  "powerLevel",
  "safetyLevel",

  "score"

],


  // ================= HIDDEN SECTIONS =================

  hiddenSections: [

    "ai"

  ],


  // ================= IMPORTANT =================

  importantFields: [

    "warning",
    "warnings",

    "risk",
    "risks",

    "side",
    "sideEffects",

    "interaction",
    "interactions",

    "contra",
    "contraindications",

    "dose",
    "dosage",
    "dosing",

    "overdose",

    "safety"

  ],


  // ================= BADGES =================

  badgeFields: [

    "rx",

    "otc",

    "antibiotic",

    "controlledDrug",

    "emergencyUse"

  ],


  // ================= LABELS =================

  labels: {

    otc:
      "OTC",

    rx:
      "Prescription",

    sideEffects:
      "Side Effects",

    bestFor:
      "Best For",

    therapeuticCategory:
      "Therapeutic Category",

    dosageForms:
      "Dosage Forms",

    diseases:
      "Diseases",

    symptoms:
      "Symptoms",

    mechanism:
      "Mechanism",

    strengths:
      "Strengths",

    usageType:
      "Usage Type"

  },


  // ================= BOOLEAN LABELS =================

  booleanLabels: {

    true: "Yes",

    false: "No"

  },


  // ================= FIELD COLORS =================

  dynamicColors: {

    warning:
      "#f59e0b",

    sideEffects:
      "#ef4444",

    dosing:
      "#10b981",

    interaction:
      "#8b5cf6",

    contraindications:
      "#dc2626",

    safety:
      "#06b6d4",

    mechanism:
      "#6366f1"

  },


  // ================= SEARCH HIDE =================

  searchableHidden: [

    "searchText",

    "nameLower",

    "compLower"

  ],


  // ================= EMPTY TEXT =================

  emptyValue:
    "No data available",


  // ================= MAX ITEMS =================

  maxArrayPreview: 8,


  // ================= UI =================

  ui: {

    showIcons: true,

    animated: true,

    compactMode: false

  }

};