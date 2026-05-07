export const CHECKUP_DATA = [

  // ================= 🟢 STOMACH =================
  {
    id: "constipation",
    name: "Constipation",
    rules: [
      { field: "stool", value: "constipation", weight: 6 },
      { field: "duration", value: "1_week", weight: 2 }
    ],
    severity: "mild",
    priority: 6,
    tags: ["stomach"],
    advice: "Drink more water and eat fiber"
  },

  {
    id: "ibs",
    name: "IBS",
    must: ["duration","stool"],
    rules: [
      { field: "stool", value: "constipation", weight: 3 },
      { field: "duration", value: "long", weight: 5 }
    ],
    severity: "medium",
    priority: 7,
    tags: ["stomach"],
    advice: "Avoid stress and maintain diet"
  },

  {
    id: "food_poisoning",
    name: "Food Poisoning",
    rules: [
      { field: "vomiting", value: "yes", weight: 5 },
      { field: "diarrhea", value: "yes", weight: 5 }
    ],
    severity: "medium",
    priority: 8,
    tags: ["infection","stomach"],
    advice: "Drink ORS and stay hydrated"
  },

  {
    id: "gastritis",
    name: "Gastritis",
    rules: [
      { field: "abdominal_pain", value: "yes", weight: 4 }
    ],
    severity: "mild",
    priority: 6,
    tags: ["stomach"],
    advice: "Avoid spicy food"
  },

  // ================= 🔴 RESPIRATORY =================
  {
    id: "common_cold",
    name: "Common Cold",
    rules: [
      { field: "cough", value: "yes", weight: 3 },
      { field: "fever", value: "yes", weight: 2 }
    ],
    severity: "mild",
    priority: 6,
    tags: ["respiratory"],
    advice: "Rest and fluids"
  },

  {
    id: "respiratory_infection",
    name: "Respiratory Infection",
    rules: [
      { field: "cough", value: "yes", weight: 4 },
      { field: "breathing", value: "difficulty", weight: 5 }
    ],
    severity: "medium",
    priority: 8,
    tags: ["infection","respiratory"],
    advice: "Steam inhalation"
  },

  {
    id: "pneumonia",
    name: "Pneumonia",
    must: ["fever","breathing"],
    rules: [
      { field: "fever", value: "yes", weight: 5 },
      { field: "cough", value: "yes", weight: 4 },
      { field: "breathing", value: "difficulty", weight: 6 }
    ],
    severity: "strong",
    priority: 10,
    emergency: true,
    tags: ["infection","respiratory"],
    advice: "Urgent doctor consultation"
  },

  {
    id: "asthma",
    name: "Asthma",
    must: ["breathing"],
    rules: [
      { field: "breathing", value: "difficulty", weight: 6 }
    ],
    severity: "medium",
    priority: 9,
    tags: ["respiratory"],
    advice: "Use inhaler if prescribed"
  },

  // ================= 🟡 FEVER =================
  {
    id: "viral_fever",
    name: "Viral Fever",
    rules: [
      { field: "fever", value: "yes", weight: 6 },
      { field: "fatigue", value: "yes", weight: 2 }
    ],
    severity: "mild",
    priority: 7,
    tags: ["fever"],
    advice: "Rest and fluids"
  },

  {
    id: "dengue",
    name: "Dengue",
    must: ["fever"],
    rules: [
      { field: "fever", value: "yes", weight: 6 },
      { field: "headache", value: "yes", weight: 3 }
    ],
    severity: "strong",
    priority: 10,
    emergency: true,
    tags: ["infection","fever"],
    advice: "Immediate doctor consultation"
  },

  // ================= 🟣 SKIN =================
  {
    id: "allergy",
    name: "Allergy",
    rules: [
      { field: "itching", value: "yes", weight: 4 },
      { field: "rash", value: "yes", weight: 4 }
    ],
    severity: "mild",
    priority: 6,
    tags: ["skin"],
    advice: "Avoid allergens"
  },

  // ================= 🔵 EYE =================
  {
    id: "conjunctivitis",
    name: "Conjunctivitis",
    rules: [
      { field: "redness", value: "yes", weight: 5 },
      { field: "discharge", value: "yes", weight: 5 }
    ],
    severity: "mild",
    priority: 6,
    tags: ["eye"],
    advice: "Keep eyes clean"
  },

  // ================= 🚨 HEART =================
  {
    id: "heart_issue",
    name: "Possible Heart Issue",
    must: ["chest_pain"],
    rules: [
      { field: "chest_pain", value: "yes", weight: 6 },
      { field: "breathing", value: "difficulty", weight: 4 }
    ],
    severity: "strong",
    priority: 10,
    emergency: true,
    tags: ["cardiac"],
    advice: "Emergency medical help required"
  },

  // ================= 🔵 GENERAL =================
  {
    id: "fatigue",
    name: "Fatigue",
    rules: [
      { field: "fatigue", value: "yes", weight: 5 }
    ],
    severity: "mild",
    priority: 4,
    tags: ["general"],
    advice: "Take rest"
  },

  // ================= FALLBACK =================
  {
    id: "fallback",
    name: "General condition",
    rules: [],
    severity: "mild",
    priority: 1,
    tags: [],
    advice: "Monitor symptoms"
  }

];