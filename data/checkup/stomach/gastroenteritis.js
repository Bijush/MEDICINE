// ==============================
// ACUTE GASTROENTERITIS DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const GASTROENTERITIS = [
  {
    id: "GE001",
    disease: "Acute Gastroenteritis",
    medical_name: "Acute Gastroenteritis",
    aliases: [
      "stomach infection",
      "stomach flu",
      "gastro infection"
    ],
    category: "stomach",
    tags: [
      "diarrhea",
      "vomiting",
      "infection",
      "dehydration"
    ],
    prevalence: "common",
    severity: "moderate",
    priority: 70,
    contagious: true,
    emergency: false,
    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      viral_infection: { present: true, weight: 25 },
      bacterial_infection: { present: true, weight: 25 },
      contaminated_food: { present: true, weight: 25 },
      contaminated_water: { present: true, weight: 25 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      outside_food_recently: { present: true, weight: 20 },
      poor_hygiene: { present: true, weight: 15 },
      low_immunity: { present: true, weight: 15 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
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

      vomiting: {
        category: "VOMIT",
        present: true,
        weight: 30,
        aliases: [
          "throwing_up"
        ],
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 12
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 20,
        followup: {
          question: "Does nausea worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_nausea"
          },
          priority: 6
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
          priority: 9
        }
      },

      stomach_pain: {
        category: "STOMACH PAIN",
        present: true,
        weight: 20,
        followup: {
          question: "Is stomach pain severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_stomach_pain"
          },
          priority: 7
        }
      },

      fever: {
        category: "fever",
        present: true,
        weight: 18,
        followup: {
          question: "Is fever continuous?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "continuous_fever"
          },
          priority: 6
        }
      },

      weakness: {
        category: "constitutional",
        present: true,
        weight: 15,
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

      loss_of_appetite: {
        category: "constitutional",
        present: true,
        weight: 10,
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
        weight: 45,
        followup: {
          question: "Is diarrhea completely watery?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_watery_diarrhea"
          },
          priority: 15
        }
      },

      relief_after_vomiting: {
        category: "VOMIT",
        present: true,
        weight: 10
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      chronic_constipation: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      vomiting_blood: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      black_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      rapid_weight_loss: {
        category: "constitutional",
        present: false,
        weight: -30
      },
      pain_moving_to_right_side: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      chronic_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      dry_mouth: { present: true, weight: 25 },
      sunken_eyes: { present: true, weight: 30 },
      low_blood_pressure: { present: true, weight: 35 },
      rapid_pulse: { present: true, weight: 25 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      stool_infection_positive: { present: true, weight: 55 },
      electrolyte_imbalance: { present: true, weight: 40 },
      wbc_high: { present: true, weight: 20 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      severe_dehydration: { present: true, weight: 60 },
      kidney_injury: { present: true, weight: 45 },
      shock: { present: true, weight: 70 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      bloody_diarrhea: { present: true, weight: 60 },
      persistent_vomiting: { present: true, weight: 50 },
      unconsciousness: { present: true, weight: 90 },
      severe_dehydration: { present: true, weight: 80 },
      shock: { present: true, weight: 100 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["diarrhea", "vomiting"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["watery_diarrhea", "dehydration"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["abdominal_cramp", "diarrhea"],
        match: "all",
        bonus: 20
      },
      {
        symptoms: ["vomiting", "watery_diarrhea", "dehydration"],
        match: "all",
        bonus: 45
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["vomiting_blood"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["black_stool"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["rapid_weight_loss"],
        match: "all",
        penalty: 30
      },
      {
        symptoms: ["pain_moving_to_right_side"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["chronic_diarrhea"],
        match: "all",
        penalty: 25
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      diarrhea: 12,
      vomiting: 12,
      dehydration: 18,
      watery_diarrhea: 20
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 1,
        bonus: 10
      },
      {
        min_days: 7,
        penalty: 20
      },
      {
        min_days: 14,
        penalty: 40
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        max_age: 5,
        bonus: 15
      },
      {
        min_age: 65,
        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "unconsciousness",
      "severe_dehydration",
      "shock",
      "persistent_vomiting",
      "bloody_diarrhea"
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
        en: "Replaces lost fluids and electrolytes",
        bn: "শরীরের হারানো পানি ও লবণ পূরণ করে"
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

      name: "Lactobacillus / Bifidobacterium Probiotics",

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

      name: "Zinc Sulfate",

      type: "Mineral Supplement",

      dosage: "20mg",

      frequency: "Once daily for 10-14 days",

      purpose: {
        en: "Reduces the severity and duration of diarrhea",
        bn: "ডায়রিয়ার তীব্রতা ও স্থায়িত্ব কমাতে সাহায্য করে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "IV Fluids",

      type: "Supportive Care",

      dosage: "As prescribed",

      frequency: "Continuous if required",

      purpose: {
        en: "Treats severe dehydration",
        bn: "তীব্র পানিশূন্যতার চিকিৎসায় ব্যবহৃত হয়"
      }
    }

  ]

}

  }
];