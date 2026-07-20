// ==============================
// GASTRIC CANCER DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const GASTRIC_CANCER = [
  {
    id: "GC001",
    disease: "Gastric Cancer",
    medical_name: "Stomach Cancer",
    aliases: [
      "gastric carcinoma",
      "stomach tumor",
      "stomach malignancy"
    ],
    category: "stomach",
    tags: [
      "cancer",
      "stomach",
      "bleeding",
      "weight loss"
    ],
    prevalence: "uncommon",
    severity: "critical",
    priority: 100,
    contagious: false,
    emergency: false,
    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      h_pylori_infection: { present: true, weight: 35 },
      smoking: { present: true, weight: 20 },
      alcohol_use: { present: true, weight: 15 },
      family_history: { present: true, weight: 20 },
      chronic_gastritis: { present: true, weight: 20 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      old_age: { present: true, weight: 25 },
      processed_food_diet: { present: true, weight: 12 },
      previous_stomach_ulcer: { present: true, weight: 18 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      unexplained_weight_loss: {
        category: "constitutional",
        present: true,
        weight: 55,
        aliases: [
          "rapid_weight_loss",
          "unintentional_weight_loss"
        ],
        followup: {
          question: "Have you lost weight without trying?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "rapid_weight_loss"
          },
          priority: 18
        }
      },

      appetite_loss: {
        category: "constitutional",
        present: true,
        weight: 40,
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 12
        }
      },

      upper_abdominal_pain: {
        category: "STOMACH PAIN",
        present: true,
        weight: 35,
        followup: {
          question: "Is upper abdominal pain persistent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_upper_abdominal_pain"
          },
          priority: 10
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 15,
        followup: {
          question: "Does nausea worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_nausea"
          },
          priority: 5
        }
      },

      vomiting: {
        category: "VOMIT",
        present: true,
        weight: 22,
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 8
        }
      },

      vomiting_blood: {
        category: "VOMIT",
        present: true,
        weight: 65,
        aliases: [
          "hematemesis"
        ],
        followup: {
          question: "Is there blood in vomit?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "hematemesis"
          },
          priority: 20
        }
      },

      black_stool: {
        category: "STOOL",
        present: true,
        weight: 60,
        aliases: [
          "melena",
          "black_tarry_stool"
        ],
        followup: {
          question: "Is stool black and tarry?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "melena"
          },
          priority: 18
        }
      },

      difficulty_swallowing: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        followup: {
          question: "Is swallowing becoming progressively difficult?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "progressive_dysphagia"
          },
          priority: 8
        }
      },

      fatigue: {
        category: "constitutional",
        present: true,
        weight: 25,
        followup: {
          question: "Do you feel extreme tiredness daily?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "extreme_fatigue"
          },
          priority: 7
        }
      },

      early_satiety: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        followup: {
          question: "Do you feel full after eating small amounts?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "early_fullness"
          },
          priority: 14
        }
      },

      bloating_after_food: {
        category: "gastrointestinal",
        present: true,
        weight: 22,
        followup: {
          question: "Does bloating worsen after meals?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "post_meal_bloating"
          },
          priority: 6
        }
      },

      persistent_indigestion: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        followup: {
          question: "Has indigestion continued for weeks?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "chronic_indigestion"
          },
          priority: 10
        }
      },

      severe_weight_loss: {
        category: "constitutional",
        present: true,
        weight: 60
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      acute_short_duration: {
        category: "constitutional",
        present: false,
        weight: -30
      },
      pain_moving_to_right_side: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      },
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -30
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      pale: { present: true, weight: 25 },
      abdominal_mass: { present: true, weight: 55 },
      enlarged_lymph_nodes: { present: true, weight: 40 },
      cachexia: { present: true, weight: 45 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      endoscopy_tumor: { present: true, weight: 90 },
      biopsy_cancer_positive: { present: true, weight: 100 },
      ct_stomach_mass: { present: true, weight: 80 },
      hemoglobin_low: { present: true, weight: 25 },
      occult_blood_positive: { present: true, weight: 35 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      severe_bleeding: { present: true, weight: 75 },
      metastasis: { present: true, weight: 95 },
      gastric_obstruction: { present: true, weight: 75 },
      severe_malnutrition: { present: true, weight: 70 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      vomiting_blood: { present: true, weight: 95 },
      severe_weight_loss: { present: true, weight: 90 },
      shock: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 },
      black_stool: { present: true, weight: 85 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["unexplained_weight_loss", "appetite_loss"],
        match: "all",
        bonus: 45
      },
      {
        symptoms: ["vomiting_blood", "black_stool"],
        match: "all",
        bonus: 55
      },
      {
        symptoms: ["early_satiety", "bloating_after_food"],
        match: "all",
        bonus: 30
      },
      {
        symptoms: ["persistent_indigestion", "weight_loss"],
        match: "all",
        bonus: 35
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["acute_short_duration"],
        match: "all",
        penalty: 30
      },
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["pain_moving_to_right_side"],
        match: "all",
        penalty: 25
      },
      {
        symptoms: ["relief_after_passing_stool"],
        match: "all",
        penalty: 30
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      unexplained_weight_loss: 25,
      vomiting_blood: 30,
      early_satiety: 20,
      black_stool: 25
    },

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 50,
        bonus: 20
      },
      {
        min_age: 65,
        bonus: 30
      }
    ],

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
        bonus: 40
      },
      {
        min_days: 180,
        bonus: 50
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "vomiting_blood",
      "shock",
      "unconsciousness",
      "black_stool",
      "severe_weight_loss"
    ],

// ==========================
// MEDICINES
// ==========================

medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Morphine / Tramadol",

      type: "Pain Management",

      dosage: "As prescribed",

      frequency: "As needed or scheduled",

      purpose: {
        en: "Controls moderate to severe cancer-related pain",
        bn: "ক্যান্সারজনিত মাঝারি থেকে তীব্র ব্যথা নিয়ন্ত্রণ করে"
      }
    },

    {
      line: "first_line",

      name: "Ondansetron",

      type: "Antiemetic",

      dosage: "4mg - 8mg",

      frequency: "Every 8 hours if needed",

      purpose: {
        en: "Controls nausea and vomiting",
        bn: "বমি বমি ভাব ও বমি নিয়ন্ত্রণ করে"
      }
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Metoclopramide",

      type: "Antiemetic",

      dosage: "10mg",

      frequency: "As prescribed",

      purpose: {
        en: "Improves gastric emptying and reduces nausea",
        bn: "পাকস্থলীর খালি হওয়া উন্নত করে এবং বমি কমায়"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Nutritional Support Formula",

      type: "Nutritional Support",

      dosage: "As recommended",

      frequency: "Daily",

      purpose: {
        en: "Helps prevent weight loss and malnutrition",
        bn: "ওজন কমা ও অপুষ্টি প্রতিরোধে সহায়তা করে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "Parenteral Nutrition",

      type: "Advanced Nutritional Support",

      dosage: "As prescribed",

      frequency: "Continuous or scheduled",

      purpose: {
        en: "Provides nutrition when oral feeding is inadequate",
        bn: "মুখে পর্যাপ্ত খাবার গ্রহণ সম্ভব না হলে পুষ্টি সরবরাহ করে"
      }
    }

  ]

}

  }
];