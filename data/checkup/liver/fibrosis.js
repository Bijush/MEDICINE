// ==============================
// LIVER FIBROSIS DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const LIVER_FIBROSIS = [

  {

    id: "FIB001",

    disease:
      "Liver Fibrosis",

    medical_name:
      "Hepatic Fibrosis",

    aliases: [

      "hepatic fibrosis",

      "fibrotic liver disease",

      "liver scarring"
    ],

    category: "liver",

    tags: [

      "fibrosis",

      "liver damage",

      "chronic liver disease",

      "hepatic fibrosis"
    ],

    prevalence: "common",

    severity: "moderate",

    chronic: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      hepatitis_b: {

        present: true,

        weight: 25
      },

      hepatitis_c: {

        present: true,

        weight: 25
      },

      fatty_liver_history: {

        present: true,

        weight: 20,

        aliases: [

          "fatty_liver",

          "fatty_liver_disease"

        ]
      },

      alcohol_use: {

        present: true,

        weight: 25,

        aliases: [

          "chronic_alcohol_use",

          "heavy_alcohol_intake"

        ]
      },

      chronic_liver_inflammation: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      obesity: {

        present: true,

        weight: 15
      },

      diabetes: {

        present: true,

        weight: 15
      },

      smoking: {

        present: true,

        weight: 10
      },

      chronic_alcohol_use: {

        present: true,

        weight: 20,

        aliases: [

          "alcohol_use",

          "long_term_drinking"

        ]
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fatigue: {

        present: true,

        weight: 18,

        aliases: [

          "weakness",

          "tiredness",

          "low_energy",

          "severe_fatigue"

        ]
      },

      jaundice: {

        present: true,

        weight: 18,

        aliases: [

          "mild_jaundice",

          "yellow_eyes",

          "yellow_skin",

          "icterus"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 18,

        aliases: [

          "abdominal_discomfort",

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "liver_pain",

          "stomach_pain",

          "belly_pain"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 12,

        aliases: [

          "loss_of_appetite"

        ]
      },

      vomiting: {

        present: true,

        weight: 12,

        aliases: [

          "nausea"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 12,

        aliases: [

          "bloating",

          "gas",

          "abdominal_bloating",

          "abdominal_distension",

          "stomach_fullness"

        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      enlarged_liver: {

        present: true,

        weight: 25,

        aliases: [

          "mild_hepatomegaly",

          "hepatomegaly"

        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      fibroscan_abnormal: {

        present: true,

        weight: 70
      },

      fibrosis_marker_positive: {

        present: true,

        weight: 40
      },

      liver_enzymes_high: {

        present: true,

        weight: 25,

        aliases: [

          "sgpt_high",

          "sgot_high",

          "alt_high",

          "ast_high"

        ]
      },

      bilirubin_high: {

        present: true,

        weight: 18
      },

      liver_biopsy_fibrosis: {

        present: true,

        weight: 90
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      cirrhosis: {

        present: true,

        weight: 70
      },

      portal_hypertension: {

        present: true,

        weight: 50
      },

      liver_failure: {

        present: true,

        weight: 80
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_jaundice: {

        present: true,

        weight: 70,

        aliases: [

          "extreme_jaundice"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 70,

        aliases: [

          "ascites",

          "fluid_in_abdomen"

        ]
      },

      bleeding: {

        present: true,

        weight: 90,

        aliases: [

          "vomiting_blood",

          "blood_vomit",

          "black_stool",

          "gastrointestinal_bleeding"

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

          "fibroscan_abnormal",

          "fatty_liver_history"
        ],

        match: "all",

        bonus: 30
      },

      {

        symptoms: [

          "fatigue",

          "abdominal_pain"
        ],

        match: "all",

        bonus: 15
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "acute_viral_fever"
        ],

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      fatigue: 8,

      abdominal_pain: 8,

      abdominal_swelling: 6
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 30,

        bonus: 20
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "bleeding",

      "unconsciousness",

      "abdominal_swelling"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Silymarin",

      "Ursodeoxycholic Acid"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Liver Monitoring",

      "Fibrosis Management",

      "Lifestyle Modification"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol",

      "Healthy liver diet",

      "Regular exercise",

      "Regular liver checkup",

      "Weight management"
    ]
  }
];