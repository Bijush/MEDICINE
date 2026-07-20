// ==============================
// JAUNDICE DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const JAUNDICE = [

  {

    id: "JD001",

    disease:
      "Jaundice",

    medical_name:
      "Hyperbilirubinemia",

    aliases: [

      "yellow eyes disease",

      "yellow skin disorder",

      "icterus"
    ],

    category: "liver",

    tags: [

      "bilirubin",

      "liver",

      "yellow eyes",

      "hepatobiliary",

      "jaundice"
    ],

    prevalence: "common",

    severity: "moderate",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      hepatitis: {

        present: true,

        weight: 25,

        aliases: [

          "viral_hepatitis",

          "hepatitis_a",

          "hepatitis_b",

          "hepatitis_c"

        ]
      },

      fatty_liver: {

        present: true,

        weight: 12,

        aliases: [

          "fatty_liver_disease"

        ]
      },

      bile_duct_obstruction: {

        present: true,

        weight: 30
      },

      alcohol_liver_damage: {

        present: true,

        weight: 20,

        aliases: [

          "alcoholic_liver_disease",

          "chronic_alcohol_use"

        ]
      },

      gallstones: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      alcohol_use: {

        present: true,

        weight: 15,

        aliases: [

          "chronic_alcohol_use",

          "heavy_alcohol_intake"

        ]
      },

      hepatitis_history: {

        present: true,

        weight: 20
      },

      obesity: {

        present: true,

        weight: 10
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      jaundice: {

        present: true,

        weight: 60,

        aliases: [

          "yellow_skin",

          "yellow_eyes",

          "icterus",

          "yellow_face",

          "yellow_discoloration"

        ]
      },

      dark_urine: {

        present: true,

        weight: 25
      },

      pale_stool: {

        present: true,

        weight: 20,

        aliases: [

          "clay_colored_stool",

          "light_colored_stool"

        ]
      },

      fatigue: {

        present: true,

        weight: 12,

        aliases: [

          "weakness",

          "tiredness",

          "low_energy"

        ]
      },

      vomiting: {

        present: true,

        weight: 12,

        aliases: [

          "nausea",

          "vomit"

        ]
      },

      itching: {

        present: true,

        weight: 20,

        aliases: [

          "pruritus",

          "severe_itching"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 15,

        aliases: [

          "loss_of_appetite"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 18,

        aliases: [

          "stomach_pain",

          "right_upper_abdominal_pain",

          "abdominal_discomfort",

          "upper_abdominal_pain"

        ]
      },

      fever: {

        present: false,

        weight: -8,

        aliases: [

          "high_fever"
        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      jaundice_present: {

        present: true,

        weight: 60,

        aliases: [

          "icterus",

          "yellow_eyes",

          "yellow_skin"

        ]
      },

      enlarged_liver: {

        present: true,

        weight: 20,

        aliases: [

          "hepatomegaly"

        ]
      },

      abdominal_tenderness: {

        present: true,

        weight: 15
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      bilirubin_high: {

        present: true,

        weight: 85
      },

      liver_enzymes_high: {

        present: true,

        weight: 30,

        aliases: [

          "sgpt_high",

          "sgot_high",

          "ast_high",

          "alt_high"

        ]
      },

      alkaline_phosphatase_high: {

        present: true,

        weight: 35
      },

      ultrasound_abnormal: {

        present: true,

        weight: 35,

        aliases: [

          "ultrasound_liver_abnormal"

        ]
      },

      ggt_high: {

        present: true,

        weight: 25
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      liver_failure: {

        present: true,

        weight: 80
      },

      hepatic_encephalopathy: {

        present: true,

        weight: 80
      },

      sepsis: {

        present: true,

        weight: 70
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      confusion: {

        present: true,

        weight: 70,

        aliases: [

          "mental_confusion",

          "severe_confusion"

        ]
      },

      bleeding: {

        present: true,

        weight: 75,

        aliases: [

          "vomiting_blood",

          "blood_vomit",

          "black_stool",

          "gastrointestinal_bleeding"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 70,

        aliases: [

          "severe_abdominal_swelling",

          "ascites",

          "fluid_in_abdomen"

        ]
      },

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma"
        ]
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "jaundice",

          "dark_urine"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "bilirubin_high"
        ],

        match: "all",

        bonus: 30
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "high_fever"
        ],

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      jaundice: 15,

      dark_urine: 10,

      itching: 8
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 5,

        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "unconsciousness",

      "confusion",

      "bleeding"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Ursodeoxycholic Acid",

      "Liver Supportive Care"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Liver Monitoring",

      "Hydration Support",

      "Treat Underlying Cause"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol",

      "Drink clean water",

      "Low fat diet",

      "Regular liver tests"
    ]
  }
];