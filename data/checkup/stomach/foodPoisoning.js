// ==============================
// FOOD POISONING DATASET
// PROFESSIONAL CANONICAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const FOOD_POISONING = [
  {
    id: "FP001",
    disease: "Food_Poisoning",
    medical_name: "Foodborne Illness",
    aliases: [
      "food_infection",
      "stomach_infection",
      "foodborne_illness"
    ],
    category: "stomach",
    tags: [
      "food",
      "vomiting",
      "diarrhea",
      "infection"
    ],
    prevalence: "very_common",
    severity: "moderate",
    priority: 65,
    contagious: false,
    emergency: false,
    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      contaminated_food: { present: true, weight: 40 },
      stale_food: { present: true, weight: 35 },
      unhygienic_food_handling: { present: true, weight: 30 },
      outside_food_recently: { present: true, weight: 25 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      unsafe_drinking_water: { present: true, weight: 25 },
      weak_immunity: { present: true, weight: 15 },
      recent_travel: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      vomiting: {
        category: "VOMIT",
        present: true,
        weight: 40,
        aliases: [
          "throwing_up"
        ],
        followup: {
          question: "Is vomiting frequent after eating suspicious food?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 14
        }
      },

      diarrhea: {
        category: "DASTO",
        present: true,
        weight: 40,
        aliases: [
          "loose_motion",
          "loose_stool"
        ],
        followup: {
          question: "Is diarrhea frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "frequent_diarrhea"
          },
          priority: 14
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 25,
        followup: {
          question: "Did nausea begin after eating outside or suspicious food?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_nausea"
          },
          priority: 8
        }
      },

      abdominal_pain: {
        category: "STOMACH PAIN",
        present: true,
        weight: 30,
        followup: {
          question: "Is abdominal pain severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_abdominal_pain"
          },
          priority: 10
        }
      },

      abdominal_cramp: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: [
          "stomach_cramp"
        ],
        followup: {
          question: "Do stomach cramps occur repeatedly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "recurrent_stomach_cramps"
          },
          priority: 9
        }
      },

      fever: {
        category: "fever",
        present: true,
        weight: 18,
        followup: {
          question: "Did fever start after eating suspicious food?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_related_fever"
          },
          priority: 6
        }
      },

      weakness: {
        category: "constitutional",
        present: true,
        weight: 18,
        followup: {
          question: "Do you feel extreme weakness?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "extreme_weakness"
          },
          priority: 5
        }
      },

      dehydration: {
        category: "constitutional",
        present: true,
        weight: 35,
        followup: {
          question: "Are you feeling very thirsty or dizzy?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_dehydration"
          },
          priority: 15
        }
      },

      appetite_loss: {
        category: "FOOD",
        present: true,
        weight: 15,
        aliases: [
          "loss_of_appetite"
        ],
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 4
        }
      },

      watery_diarrhea: {
        category: "DASTO",
        present: true,
        weight: 35
      },

      relief_after_vomiting: {
        category: "VOMIT",
        present: true,
        weight: 12
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      chronic_constipation: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      weight_loss: {
        category: "constitutional",
        present: false,
        weight: -20
      },
      pain_moving_to_right_side: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      black_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -45
      },
      long_term_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      dry_mouth: { present: true, weight: 25 },
      low_blood_pressure: { present: true, weight: 35 },
      rapid_pulse: { present: true, weight: 25 },
      abdominal_tenderness: { present: true, weight: 18 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      stool_culture_positive: { present: true, weight: 55 },
      electrolyte_imbalance: { present: true, weight: 35 },
      wbc_high: { present: true, weight: 20 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      severe_dehydration: { present: true, weight: 55 },
      kidney_injury: { present: true, weight: 45 },
      septicemia: { present: true, weight: 65 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      bloody_diarrhea: { present: true, weight: 60 },
      persistent_vomiting: { present: true, weight: 50 },
      unconsciousness: { present: true, weight: 90 },
      shock: { present: true, weight: 100 },
      severe_dehydration: { present: true, weight: 70 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["vomiting", "diarrhea"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["abdominal_pain", "abdominal_cramp"],
        match: "all",
        bonus: 30
      },
      {
        symptoms: ["dehydration", "watery_diarrhea"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["vomiting", "diarrhea", "fever"],
        match: "all",
        bonus: 30
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["chronic_constipation"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["weight_loss"],
        match: "all",
        penalty: 20
      },
      {
        symptoms: ["pain_moving_to_right_side"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["black_stool"],
        match: "all",
        penalty: 45
      },
      {
        symptoms: ["long_term_diarrhea"],
        match: "all",
        penalty: 35
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      vomiting: 12,
      diarrhea: 12,
      dehydration: 18,
      watery_diarrhea: 15
    },

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        max_age: 10,
        bonus: 12
      },
      {
        min_age: 60,
        bonus: 12
      }
    ],

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 1,
        bonus: 12
      },
      {
        min_days: 7,
        penalty: 25
      },
      {
        min_days: 14,
        penalty: 40
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "shock",
      "unconsciousness",
      "bloody_diarrhea",
      "persistent_vomiting",
      "severe_dehydration"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Oral Rehydration Salts (ORS)",

      type: "Rehydration Therapy",

      dosage: "1 sachet in 1L water",

      frequency: "After each loose stool",

      purpose: {
        en: "Prevents dehydration and electrolyte loss",
        bn: "পানিশূন্যতা ও শরীরের লবণের ঘাটতি প্রতিরোধ করে"
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

      name: "Probiotics (Lactobacillus)",

      type: "Probiotic Supplement",

      dosage: "1 capsule / sachet",

      frequency: "Once or twice daily",

      purpose: {
        en: "Restores healthy gut bacteria",
        bn: "অন্ত্রের উপকারী ব্যাকটেরিয়ার ভারসাম্য পুনরুদ্ধার করে"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Metronidazole",

      type: "Antibiotic / Antiprotozoal",

      dosage: "400mg - 500mg",

      frequency: "Every 8 hours",

      purpose: {
        en: "Treats specific bacterial or protozoal infections",
        bn: "নির্দিষ্ট ব্যাকটেরিয়া বা প্রোটোজোয়া সংক্রমণের চিকিৎসা করে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "IV Normal Saline",

      type: "Intravenous Fluid",

      dosage: "As prescribed",

      frequency: "Continuous if required",

      purpose: {
        en: "Treats severe dehydration",
        bn: "তীব্র পানিশূন্যতার চিকিৎসায় ব্যবহৃত হয়"
      }
    },

    {
      line: "fourth_line",

      name: "Hospital Observation",

      type: "Supportive Care",

      dosage: "As needed",

      frequency: "Continuous monitoring",

      purpose: {
        en: "For severe vomiting, dehydration, or complications",
        bn: "তীব্র বমি, পানিশূন্যতা বা জটিলতার ক্ষেত্রে পর্যবেক্ষণের জন্য"
      }
    }

  ]

}
  }
];