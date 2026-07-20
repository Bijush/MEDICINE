// ==============================
// LIVER ABSCESS DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const LIVER_ABSCESS = [

  {

    id: "LA001",

    disease:
      "Liver Abscess",

    medical_name:
      "Hepatic Abscess",

    aliases: [

      "hepatic abscess",

      "pus in liver",

      "amoebic liver abscess"
    ],

    category: "liver",

    tags: [

      "infection",

      "abscess",

      "liver",

      "emergency",

      "hepatic infection"
    ],

    prevalence: "uncommon",

    severity: "emergency",

    acute: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      bacterial_infection: {

        present: true,

        weight: 30
      },

      amoebic_infection: {

        present: true,

        weight: 30,

        aliases: [

          "amoebiasis",

          "amoeba_infection"

        ]
      },

      contaminated_food: {

        present: true,

        weight: 15
      },

      abdominal_infection: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      diabetes: {

        present: true,

        weight: 15
      },

      poor_hygiene: {

        present: true,

        weight: 15
      },

      alcoholism: {

        present: true,

        weight: 20,

        aliases: [

          "alcohol_use",

          "chronic_alcohol_use"

        ]
      },

      low_immunity: {

        present: true,

        weight: 20,

        aliases: [

          "immunocompromised"

        ]
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fever: {

        present: true,

        weight: 40,

        aliases: [

          "high_fever",

          "fever_present"
        ]
      },

      chills: {

        present: true,

        weight: 30,

        aliases: [

          "shivering",

          "rigor",

          "rigors"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 45,

        aliases: [

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "liver_pain",

          "stomach_pain",

          "abdominal_tenderness"

        ]
      },

      vomiting: {

        present: true,

        weight: 15,

        aliases: [

          "nausea",

          "vomit"

        ]
      },

      fatigue: {

        present: true,

        weight: 15,

        aliases: [

          "weakness",

          "tiredness",

          "low_energy"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 15,

        aliases: [

          "loss_of_appetite"

        ]
      },

      jaundice: {

        present: true,

        weight: 20,

        aliases: [

          "yellow_eyes",

          "yellow_skin"

        ]
      },

      sweating: {

        present: true,

        weight: 15,

        aliases: [

          "night_sweats"

        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      enlarged_liver: {

        present: true,

        weight: 30,

        aliases: [

          "hepatomegaly"

        ]
      },

      liver_tenderness: {

        present: true,

        weight: 35
      },

      fever_present: {

        present: true,

        weight: 20,

        aliases: [

          "high_fever"
        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      wbc_high: {

        present: true,

        weight: 30,

        aliases: [

          "leukocytosis"
        ]
      },

      ultrasound_abscess: {

        present: true,

        weight: 80,

        aliases: [

          "ultrasound_liver_abscess"

        ]
      },

      ct_abscess: {

        present: true,

        weight: 90,

        aliases: [

          "ct_liver_abscess"

        ]
      },

      esr_high: {

        present: true,

        weight: 20
      },

      crp_high: {

        present: true,

        weight: 25
      },

      liver_function_abnormal: {

        present: true,

        weight: 20,

        aliases: [

          "liver_enzymes_high",

          "abnormal_lft"

        ]
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      sepsis: {

        present: true,

        weight: 90
      },

      liver_failure: {

        present: true,

        weight: 80
      },

      abscess_rupture: {

        present: true,

        weight: 100
      },

      pleural_effusion: {

        present: true,

        weight: 60
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      septic_shock: {

        present: true,

        weight: 100
      },

      breathing_problem: {

        present: true,

        weight: 80,

        aliases: [

          "severe_breathlessness",

          "shortness_of_breath"

        ]
      },

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma"
        ]
      },

      severe_abdominal_pain: {

        present: true,

        weight: 75,

        aliases: [

          "extreme_abdominal_pain"

        ]
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "fever",

          "abdominal_pain"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "ultrasound_abscess"
        ],

        match: "all",

        bonus: 40
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "loss_of_smell"
        ],

        penalty: 10
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      chills: 10,

      abdominal_pain: 15
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 3,

        bonus: 15
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "septic_shock",

      "unconsciousness",

      "severe_abdominal_pain"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Metronidazole",

      "Ceftriaxone"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "IV Antibiotics",

      "Abscess Drainage",

      "Hospital Admission"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Maintain hygiene",

      "Drink safe water",

      "Avoid contaminated food",

      "Complete antibiotic course"
    ]
  }
];