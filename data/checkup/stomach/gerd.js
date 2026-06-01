// ==============================
// GERD DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const GERD = [
  {
    id: "GERD001",
    disease: "GERD",
    medical_name: "Gastroesophageal Reflux Disease",
    aliases: [
      "acid reflux",
      "reflux disease",
      "acid reflux disease"
    ],
    category: "stomach",
    tags: [
      "acidity",
      "heartburn",
      "reflux",
      "stomach"
    ],
    prevalence: "very_common",
    severity: "moderate",
    priority: 60,
    contagious: false,
    emergency: false,
    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      acid_reflux: { present: true, weight: 35 },
      weak_lower_esophageal_sphincter: { present: true, weight: 30 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      obesity: { present: true, weight: 15 },
      spicy_food: { present: true, weight: 12 },
      smoking: { present: true, weight: 10 },
      alcohol_use: { present: true, weight: 10 },
      late_night_meals: { present: true, weight: 18 },
      overeating: { present: true, weight: 12 },
      pregnancy: { present: true, weight: 8 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      acidity: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: [
          "acidic_feeling",
          "acid_problem"
        ],
        followup: {
          question: "Does acidity worsen after spicy food?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_acidity"
          },
          priority: 8
        }
      },

      heartburn: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "burning_chest",
          "chest_burning"
        ],
        followup: {
          question: "Do you feel burning behind the chest frequently?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_heartburn"
          },
          priority: 15
        }
      },

      chest_burning: {
        category: "gastrointestinal",
        present: true,
        weight: 35,
        followup: {
          question: "Does chest burning worsen after meals?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "post_meal_chest_burning"
          },
          priority: 12
        }
      },

      sour_belching: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: [
          "acid_burps",
          "sour_burping"
        ],
        followup: {
          question: "Do you frequently burp sour liquid?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "acid_regurgitation"
          },
          priority: 10
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 10,
        followup: {
          question: "Does bloating worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "post_meal_bloating"
          },
          priority: 4
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 8,
        followup: {
          question: "Does nausea worsen after meals?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "meal_triggered_nausea"
          },
          priority: 3
        }
      },

      upper_abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        followup: {
          question: "Is upper abdominal pain burning in nature?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "burning_upper_abdominal_pain"
          },
          priority: 7
        }
      },

      difficulty_swallowing: {
        category: "gastrointestinal",
        present: true,
        weight: 22,
        followup: {
          question: "Does swallowing feel painful or difficult?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "painful_swallowing"
          },
          priority: 9
        }
      },

      chronic_cough: {
        category: "respiratory",
        present: true,
        weight: 18,
        followup: {
          question: "Does cough worsen at night or after meals?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "reflux_related_cough"
          },
          priority: 8
        }
      },

      throat_irritation: {
        category: "respiratory",
        present: true,
        weight: 18,
        followup: {
          question: "Do you feel constant throat irritation?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_throat_irritation"
          },
          priority: 6
        }
      },

      bitter_taste_in_mouth: {
        category: "gastrointestinal",
        present: true,
        weight: 25,
        followup: {
          question: "Do you notice a bitter taste after lying down?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "night_reflux"
          },
          priority: 8
        }
      },

      regurgitation: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        aliases: [
          "acid_backflow",
          "food_coming_back"
        ],
        followup: {
          question: "Does food or acid come back into the mouth?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "acid_backflow"
          },
          priority: 14
        }
      },

      symptoms_after_meal: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        followup: {
          question: "Do symptoms worsen immediately after meals?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "post_meal_reflux"
          },
          priority: 12
        }
      },

      symptoms_while_lying_down: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        followup: {
          question: "Do symptoms worsen while lying flat?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "lying_down_reflux"
          },
          priority: 15
        }
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      bloody_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -45
      },
      high_fever: {
        category: "fever",
        present: false,
        weight: -30
      },
      pain_moving_to_right_side: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      epigastric_tenderness: { present: true, weight: 12 },
      throat_redness: { present: true, weight: 18 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      endoscopy_abnormal: { present: true, weight: 45 },
      acid_reflux_positive: { present: true, weight: 40 },
      ph_monitoring_positive: { present: true, weight: 55 },
      h_pylori_positive: { present: false, weight: -10 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      esophagitis: { present: true, weight: 25 },
      barrett_esophagus: { present: true, weight: 30 },
      esophageal_ulcer: { present: true, weight: 35 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_chest_pain: { present: true, weight: 45 },
      vomiting_blood: { present: true, weight: 60 },
      black_stool: { present: true, weight: 60 },
      severe_weight_loss: { present: true, weight: 45 },
      unexplained_weight_loss: { present: false, weight: -50 },
      persistent_vomiting: { present: true, weight: 40 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["heartburn", "sour_belching"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["symptoms_after_meal", "symptoms_while_lying_down"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["regurgitation", "heartburn"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["bitter_taste_in_mouth", "symptoms_while_lying_down"],
        match: "all",
        bonus: 30
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["bloody_diarrhea"],
        match: "all",
        penalty: 45
      },
      {
        symptoms: ["high_fever"],
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
        penalty: 35
      },
      {
        symptoms: ["relief_after_passing_stool"],
        match: "all",
        penalty: 25
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      heartburn: 15,
      sour_belching: 12,
      regurgitation: 18,
      symptoms_while_lying_down: 20
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 14,
        bonus: 12
      },
      {
        min_days: 60,
        bonus: 18
      },
      {
        min_days: 180,
        bonus: 25
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "vomiting_blood",
      "black_stool",
      "severe_chest_pain"
    ],

// ==========================
// MEDICINES
// ==========================

medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Pantoprazole",

      type: "Proton Pump Inhibitor (PPI)",

      dosage: "20mg - 40mg",

      frequency: "Once daily before breakfast",

      purpose: {
        en: "Reduces stomach acid and relieves reflux symptoms",
        bn: "পাকস্থলীর অ্যাসিড কমিয়ে এসিড রিফ্লাক্সের উপসর্গ উপশম করে"
      }
    },

    {
      line: "first_line",

      name: "Omeprazole / Rabeprazole",

      type: "Proton Pump Inhibitor (PPI)",

      dosage: "20mg",

      frequency: "Once daily",

      purpose: {
        en: "Promotes healing of the esophagus and controls heartburn",
        bn: "খাদ্যনালীর ক্ষত সারাতে ও বুক জ্বালাপোড়া নিয়ন্ত্রণে সহায়তা করে"
      }
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Magnesium Hydroxide + Aluminum Hydroxide",

      type: "Antacid",

      dosage: "10ml - 20ml",

      frequency: "After meals if needed",

      purpose: {
        en: "Provides quick relief from acidity and heartburn",
        bn: "অ্যাসিডিটি ও বুক জ্বালাপোড়া থেকে দ্রুত আরাম দেয়"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Sucralfate",

      type: "Mucosal Protective Agent",

      dosage: "1g",

      frequency: "Four times daily",

      purpose: {
        en: "Protects and heals irritated esophageal lining",
        bn: "খাদ্যনালীর ক্ষতিগ্রস্ত আবরণকে সুরক্ষা দেয় ও নিরাময়ে সহায়তা করে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "H2 Receptor Blocker",

      type: "Acid Suppressant",

      dosage: "As prescribed",

      frequency: "Usually once or twice daily",

      purpose: {
        en: "Helps control persistent acid reflux symptoms",
        bn: "দীর্ঘস্থায়ী এসিড রিফ্লাক্সের উপসর্গ নিয়ন্ত্রণে সাহায্য করে"
      }
    }

  ]

},

// ==========================
// TREATMENTS
// ==========================

treatments: [

  {
    en: "Acid suppression therapy",
    bn: "অ্যাসিড কমানোর চিকিৎসা"
  },

  {
    en: "Dietary modification",
    bn: "খাদ্যাভ্যাস পরিবর্তন"
  },

  {
    en: "Anti-reflux lifestyle management",
    bn: "এসিড রিফ্লাক্স নিয়ন্ত্রণে জীবনযাত্রার পরিবর্তন"
  },

  {
    en: "Surgical evaluation if required",
    bn: "প্রয়োজন হলে অস্ত্রোপচারের মূল্যায়ন"
  }

],

// ==========================
// LIFESTYLE
// ==========================

lifestyle_changes: [

  {
    en: "Avoid spicy foods",
    bn: "ঝাল খাবার এড়িয়ে চলুন"
  },

  {
    en: "Avoid late-night meals",
    bn: "রাতে দেরি করে খাবার খাবেন না"
  },

  {
    en: "Maintain a healthy weight",
    bn: "স্বাস্থ্যকর ওজন বজায় রাখুন"
  },

  {
    en: "Stop smoking",
    bn: "ধূমপান বন্ধ করুন"
  },

  {
    en: "Avoid alcohol",
    bn: "মদ্যপান এড়িয়ে চলুন"
  },

  {
    en: "Sleep with the head elevated",
    bn: "মাথা কিছুটা উঁচু করে ঘুমান"
  }

],

  }
];