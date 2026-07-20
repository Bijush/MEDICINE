

export const IBS = [
  {
    id: "IBS001",
    disease: "Irritable Bowel Syndrome",
    medical_name: "IBS",
    aliases: [
      "spastic colon",
      "ibs",
      "irritable bowel"
    ],
    category: "stomach",
    tags: [
      "bloating",
      "constipation",
      "diarrhea",
      "stress"
    ],
    prevalence: "common",
    severity: "moderate",
    priority: 50,
    contagious: false,
    emergency: false,
    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      stress: { present: true, weight: 30 },
      anxiety: { present: true, weight: 25 },
      irregular_food_habits: { present: true, weight: 18 },
      low_fiber_diet: { present: true, weight: 12 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      depression: { present: true, weight: 15 },
      sedentary_lifestyle: { present: true, weight: 10 },
      poor_sleep: { present: true, weight: 10 },
      family_history: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {

  abdominal_pain: {
    category: "STOMACH PAIN",
    present: true,
    weight: 40,
    aliases: [
      "stomach_pain"
    ],
    followup: {
      question: "Does abdominal pain improve after passing stool?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "pain_relieved_after_stool"
      },
      priority: 15
    }
  },

  abdominal_cramp: {
    category: "gastrointestinal",
    present: true,
    weight: 30,
    followup: {
      question: "Do abdominal cramps occur repeatedly?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "recurrent_abdominal_cramps"
      },
      priority: 10
    }
  },

  bloating: {
    category: "gastrointestinal",
    present: true,
    weight: 25,
    aliases: [
      "abdominal_fullness",
      "abdominal_distension",
      "bloated_feeling",
      "gassy"
    ],
    followup: {
      question: "Do you feel your abdomen becomes swollen or bloated?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "significant_bloating"
      },
      priority: 6
    }
  },
  
  nocturnal_diarrhea: {
  category: "DASTO",
  present: false,
  weight: -50,
  aliases: [
    "night_diarrhea",
    "diarrhea_at_night"
  ],
  followup: {
    question: {
      en: "Do you wake up from sleep because of diarrhea?",
      bn: "ডায়রিয়ার কারণে কি ঘুম থেকে জেগে উঠতে হয়?"
    },
    options: ["Yes", "No"],
    symptomMap: {
      "Yes": "nocturnal_diarrhea"
    },
    priority: 15
  }
},

  constipation: {
    category: "gastrointestinal",
    present: true,
    weight: 30,
    followup: {
      question: "Do you often struggle to pass stool?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "severe_constipation"
      },
      priority: 8
    }
  },

  diarrhea: {
    category: "DASTO",
    present: true,
    weight: 30,
    followup: {
      question: "Is diarrhea frequent?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "frequent_diarrhea"
      },
      priority: 8
    }
  },

  morning_diarrhea: {
    category: "DASTO",
    present: true,
    weight: 35,
    aliases: [
      "early_morning_diarrhea",
      "morning_loose_stool"
    ],
    followup: {
      question: "Does diarrhea occur mainly in the morning after waking up?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "morning_diarrhea"
      },
      priority: 12
    }
  },

  alternating_constipation_diarrhea: {
    category: "gastrointestinal",
    present: true,
    weight: 50,
    aliases: [
      "mixed_bowel_pattern"
    ],
    followup: {
      question: "Do constipation and diarrhea alternate frequently?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "mixed_bowel_pattern"
      },
      priority: 18
    }
  },

  excessive_gas: {
    category: "gastrointestinal",
    present: true,
    weight: 25,
    aliases: [
      "gas_problem",
      "flatulence",
      "passing_gas",
      "excessive_flatulence"
    ],
    followup: {
      question: "Do you experience excessive gas daily?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "chronic_gas_problem"
      },
      priority: 6
    }
  },

  mucus_in_stool: {
    category: "STOOL",
    present: true,
    weight: 25,
    followup: {
      question: "Is mucus visible in stool frequently?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "frequent_mucus_stool"
      },
      priority: 9
    }
  },

  relief_after_passing_stool: {
    category: "STOOL",
    present: true,
    weight: 45,
    aliases: [
      "pain_relief_after_stool"
    ],
    followup: {
      question: "Does pain reduce after bowel movement?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "stool_relief_pattern"
      },
      priority: 16
    }
  },

  incomplete_bowel_feeling: {
    category: "gastrointestinal",
    present: true,
    weight: 25,
    aliases: [
      "incomplete_bowel_emptying"
    ],
    followup: {
      question: "Do you feel stool is not fully passed?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "incomplete_bowel_emptying"
      },
      priority: 8
    }
  },

  symptoms_after_food: {
    category: "gastrointestinal",
    present: true,
    weight: 25,
    followup: {
      question: "Do symptoms worsen after eating?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "food_triggered_ibs"
      },
      priority: 10
    }
  },

  stress_triggered_symptoms: {
    category: "gastrointestinal",
    present: true,
    weight: 30,
    followup: {
      question: "Do symptoms worsen during stress or anxiety?",
      options: ["Yes", "No"],
      symptomMap: {
        "Yes": "stress_related_ibs"
      },
      priority: 12
    }
  },

  // EXCLUSIONS

  black_stool: {
    category: "gastrointestinal",
    present: false,
    weight: -50
  },

  vomiting_blood: {
    category: "gastrointestinal",
    present: false,
    weight: -60
  },

  high_fever: {
    category: "fever",
    present: false,
    weight: -35
  },

  blood_in_stool: {
    category: "gastrointestinal",
    present: false,
    weight: -35
  },

  severe_weight_loss: {
    category: "constitutional",
    present: false,
    weight: -45
  }

},

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      mild_abdominal_tenderness: { present: true, weight: 12 },
      abdominal_bloating_visible: { present: true, weight: 12 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      colonoscopy_normal: { present: true, weight: 30 },
      cbc_normal: { present: true, weight: 18 },
      stool_test_normal: { present: true, weight: 25 },
      crp_normal: { present: true, weight: 12 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      dehydration: { present: true, weight: 15 },
      anxiety_disorder: { present: true, weight: 25 },
      malnutrition: { present: true, weight: 20 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      blood_in_stool: { present: true, weight: 35 },
      severe_weight_loss: { present: true, weight: 60 },
      persistent_vomiting: { present: true, weight: 30 },
      anemia: { present: true, weight: 40 },
      black_stool: { present: true, weight: 70 },
      fever: { present: true, weight: 25 },
      nocturnal_diarrhea: {
  present: true,
  weight: 50
}
      
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["abdominal_pain", "relief_after_passing_stool"],
        match: "all",
        bonus: 45
      },
      {
        symptoms: ["alternating_constipation_diarrhea"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["bloating", "excessive_gas"],
        match: "all",
        bonus: 15
      },
      {
  symptoms: [
    "morning_diarrhea",
    "abdominal_cramp"
  ],
  match: "all",
  bonus: 25
},
      {
        symptoms: ["stress_triggered_symptoms", "abdominal_cramp"],
        match: "all",
        bonus: 35
      },
      {
  symptoms: [
    "abdominal_pain",
    "bloating",
    "stress_triggered_symptoms"
  ],
  match: "all",
  bonus: 35
}
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["blood_in_stool"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["high_fever"],
        match: "all",
        penalty: 30
      },
      {
        symptoms: ["severe_weight_loss"],
        match: "all",
        penalty: 45
      },
      {
        symptoms: ["vomiting_blood"],
        match: "all",
        penalty: 60
      },
      {
        symptoms: ["black_stool"],
        match: "all",
        penalty: 60
      },
      {
  symptoms: ["nocturnal_diarrhea"],
  match: "all",
  penalty: 50
}
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
  bloating: 12,
  abdominal_pain: 15,
  relief_after_passing_stool: 20,
  alternating_constipation_diarrhea: 22,
  morning_diarrhea: 15,
  abdominal_cramp: 12,
  stress_triggered_symptoms: 15
},

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 30,
        bonus: 25
      },
      {
        min_days: 90,
        bonus: 35
      },
      {
        min_days: 180,
        bonus: 45
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 15,
        bonus: 5
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "black_stool",
      "severe_weight_loss",
      "vomiting_blood"
    ],
required_negative_symptoms: [
  "blood_in_stool",
  "black_stool",
  "high_fever",
  "vomiting_blood",
  "severe_weight_loss",
  "nocturnal_diarrhea"
],

required_symptoms: [
  "abdominal_pain"
],

differential_diagnosis: [
  "Constipation",
  "Gastroenteritis",
  "Inflammatory Bowel Disease",
  "Colon Cancer",
  "Lactose Intolerance",
  "Celiac Disease",
  "Microscopic Colitis",
  "Giardiasis"
],

symptom_clusters: {

  classic_ibs_cluster: {

    symptoms: [
      "abdominal_pain",
      "relief_after_passing_stool",
      "bloating"
    ],

    minimum_match: 2,

    bonus: 45
  },

  ibs_mixed_cluster: {

    symptoms: [
      "alternating_constipation_diarrhea",
      "abdominal_cramp"
    ],

    minimum_match: 2,

    bonus: 50
  },
  ibs_d_cluster: {
  symptoms: [
    "diarrhea",
    "morning_diarrhea",
    "abdominal_pain"
  ],
  minimum_match: 2,
  bonus: 40
},

ibs_c_cluster: {
  symptoms: [
    "constipation",
    "incomplete_bowel_feeling",
    "abdominal_pain"
  ],
  minimum_match: 2,
  bonus: 40
},

},
// ==========================
// MEDICINES
// ==========================

medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Mebeverine",

      type: "Antispasmodic",

      dosage: "135mg",

      frequency: "Three times daily before meals",

      purpose: {
        en: "Reduces abdominal cramps and bowel spasms",
        bn: "পেটের খিঁচুনি ও অন্ত্রের স্পাজম কমায়"
      }
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Loperamide",

      type: "Antidiarrheal",

      dosage: "2mg",

      frequency: "As needed after loose bowel movements",

      purpose: {
        en: "Controls diarrhea-predominant IBS symptoms",
        bn: "ডায়রিয়া-প্রধান আইবিএসের উপসর্গ নিয়ন্ত্রণ করে"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Rifaximin",

      type: "Gut-Targeted Antibiotic",

      dosage: "550mg",

      frequency: "As prescribed",

      purpose: {
        en: "May help selected IBS-D patients",
        bn: "নির্বাচিত IBS-D রোগীদের উপসর্গ কমাতে সহায়তা করতে পারে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "Probiotics + Psyllium Husk",

      type: "Supportive Therapy",

      dosage: "1 capsule / 1 tablespoon",

      frequency: "Daily",

      purpose: {
        en: "Improves gut flora and stool consistency",
        bn: "অন্ত্রের উপকারী জীবাণুর ভারসাম্য ও মলের স্বাভাবিক গঠন উন্নত করে"
      }
    }

  ]

},
prescription_medicines: [

  {
    name: "Mebeverine",

    line: "prescription",

    condition: {
      en: "Abdominal cramps and pain",
      bn: "পেটের খিঁচুনি ও ব্যথা হলে"
    },

    frequency: {
      en: "Three times daily before meals",
      bn: "খাবারের আগে দিনে ৩ বার"
    },

    purpose: {
      en: "Relieves intestinal spasm",
      bn: "অন্ত্রের খিঁচুনি কমায়"
    }
  },

  {
    name: "Dicyclomine",

    line: "prescription",

    condition: {
      en: "Moderate to severe abdominal cramps",
      bn: "মাঝারি থেকে তীব্র পেটের খিঁচুনিতে"
    },

    frequency: {
      en: "As prescribed",
      bn: "চিকিৎসকের নির্দেশ অনুযায়ী"
    },

    purpose: {
      en: "Reduces bowel spasm and pain",
      bn: "অন্ত্রের খিঁচুনি ও ব্যথা কমায়"
    }
  },

  {
    name: "Loperamide",

    line: "prescription",

    condition: {
      en: "IBS with frequent diarrhea",
      bn: "বারবার পাতলা পায়খানা হলে"
    },

    frequency: {
      en: "As needed",
      bn: "প্রয়োজন অনুযায়ী"
    },

    purpose: {
      en: "Controls diarrhea",
      bn: "ডায়রিয়া নিয়ন্ত্রণ করে"
    }
  },

  {
    name: "Rifaximin",

    line: "prescription",

    condition: {
      en: "Selected IBS-D patients with bloating",
      bn: "ফাঁপাভাবসহ নির্দিষ্ট IBS-D রোগীদের জন্য"
    },

    frequency: {
      en: "As prescribed",
      bn: "চিকিৎসকের নির্দেশ অনুযায়ী"
    },

    purpose: {
      en: "May improve bloating and bowel symptoms",
      bn: "পেট ফাঁপা ও অন্ত্রের উপসর্গ কমাতে সাহায্য করতে পারে"
    }
  }

],
supportive_medicines: [

  {
    name: "Probiotics",

    line: "supportive",

    purpose: {
      en: "Supports healthy gut flora",
      bn: "অন্ত্রের উপকারী জীবাণুর ভারসাম্য বজায় রাখতে সাহায্য করে"
    },

    condition: {
      en: "Bloating and irregular bowel habit",
      bn: "পেট ফাঁপা ও অনিয়মিত মলত্যাগে"
    },

    usageType: {
      en: "Supportive therapy",
      bn: "সহায়ক চিকিৎসা"
    }
  },

  {
    name: "Psyllium Husk (Isabgol)",

    line: "supportive",

    purpose: {
      en: "Improves stool consistency",
      bn: "মলের স্বাভাবিক গঠন বজায় রাখতে সাহায্য করে"
    },

    condition: {
      en: "Constipation-predominant IBS",
      bn: "কোষ্ঠকাঠিন্য-প্রধান আইবিএসে"
    },

    usageType: {
      en: "Fiber supplement",
      bn: "ফাইবার সাপ্লিমেন্ট"
    }
  },

  {
    name: "Peppermint Oil Capsules",

    line: "supportive",

    purpose: {
      en: "May reduce abdominal pain and bloating",
      bn: "পেটব্যথা ও ফাঁপাভাব কমাতে সাহায্য করতে পারে"
    },

    condition: {
      en: "Mild IBS symptoms",
      bn: "হালকা আইবিএস উপসর্গে"
    },

    usageType: {
      en: "Supportive care",
      bn: "সহায়ক যত্ন"
    }
  }

],
disease_meaning: [
  {
    en: "Irritable Bowel Syndrome (IBS) is a chronic functional bowel disorder causing abdominal pain, bloating, constipation, diarrhea, or alternating bowel habits without structural disease.",
    bn: "আইবিএস (Irritable Bowel Syndrome) একটি দীর্ঘমেয়াদি কার্যগত অন্ত্রের সমস্যা যেখানে পেটব্যথা, পেট ফাঁপা, কোষ্ঠকাঠিন্য, ডায়রিয়া বা উভয়ের পরিবর্তনশীল উপসর্গ দেখা যায়, কিন্তু অন্ত্রে কোনো গঠনগত রোগ থাকে না।"
  }
]
  }
];