// ==============================
// IRRITABLE BOWEL SYNDROME DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

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
        category: "gastrointestinal",
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
          "gas_problem",
          "flatulence",
          "excessive_gas",
          "gas",
          "gassy",
          "abdominal_fullness"
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
        category: "gastrointestinal",
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
  category: "gastrointestinal",
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
          "flatulence"
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
        category: "gastrointestinal",
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
        category: "gastrointestinal",
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

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
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
      fever: { present: true, weight: 25 }
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
        bonus: 30
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

// ==========================
// TREATMENTS
// ==========================

treatments: [

  {
    en: "Low-FODMAP dietary modification",
    bn: "লো-ফডম্যাপ খাদ্যাভ্যাস অনুসরণ"
  },

  {
    en: "Stress management therapy",
    bn: "মানসিক চাপ নিয়ন্ত্রণের চিকিৎসা"
  },

  {
    en: "Symptom-based medication therapy",
    bn: "উপসর্গভিত্তিক ওষুধ চিকিৎসা"
  },

  {
    en: "Cognitive Behavioral Therapy (CBT)",
    bn: "কগনিটিভ বিহেভিয়ারাল থেরাপি (CBT)"
  }

],

// ==========================
// LIFESTYLE
// ==========================

lifestyle_changes: [

  {
    en: "Manage stress effectively",
    bn: "মানসিক চাপ নিয়ন্ত্রণ করুন"
  },

  {
    en: "Maintain a fiber-rich diet",
    bn: "আঁশযুক্ত খাবার গ্রহণ করুন"
  },

  {
    en: "Eat meals regularly",
    bn: "নিয়মিত সময়ে খাবার খান"
  },

  {
    en: "Avoid trigger foods",
    bn: "উপসর্গ বাড়ায় এমন খাবার এড়িয়ে চলুন"
  },

  {
    en: "Exercise regularly",
    bn: "নিয়মিত ব্যায়াম করুন"
  }

],


  }
];