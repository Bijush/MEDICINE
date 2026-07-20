// ==============================
// LIVER CANCER DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const LIVER_CANCER = [

  {

    id: "LCAN001",

    disease:
      "Liver Cancer",

    medical_name:
      "Hepatocellular Carcinoma",

    aliases: [

      "hepatoma",

      "hcc",

      "hepatic cancer",

      "hepatocellular carcinoma"
    ],

    category: "liver",

    tags: [

      "cancer",

      "tumor",

      "liver",

      "oncology",

      "hepatic carcinoma"
    ],

    prevalence: "uncommon",

    severity: "critical",

    chronic: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      chronic_hepatitis_b: {

        present: true,

        weight: 30,

        aliases: [

          "hepatitis_b",

          "hbsag_positive"

        ]
      },

      chronic_hepatitis_c: {

        present: true,

        weight: 30,

        aliases: [

          "hepatitis_c",

          "anti_hcv_positive"

        ]
      },

      liver_cirrhosis: {

        present: true,

        weight: 35,

        aliases: [

          "cirrhosis",

          "cirrhosis_history"

        ]
      },

      chronic_alcohol_damage: {

        present: true,

        weight: 20,

        aliases: [

          "chronic_alcohol_use",

          "alcoholic_liver_disease"

        ]
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      cirrhosis_history: {

        present: true,

        weight: 35,

        aliases: [

          "liver_cirrhosis"

        ]
      },

      hepatitis_b: {

        present: true,

        weight: 30
      },

      hepatitis_c: {

        present: true,

        weight: 30
      },

      chronic_alcohol_use: {

        present: true,

        weight: 25,

        aliases: [

          "alcohol_use",

          "heavy_alcohol_intake"

        ]
      },

      fatty_liver_history: {

        present: true,

        weight: 20,

        aliases: [

          "fatty_liver",

          "fatty_liver_disease"

        ]
      },

      smoking: {

        present: true,

        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      weight_loss: {

        present: true,

        weight: 35,

        aliases: [

          "severe_weight_loss",

          "rapid_weight_loss"

        ]
      },

      fatigue: {

        present: true,

        weight: 28,

        aliases: [

          "severe_fatigue",

          "weakness",

          "low_energy",

          "tiredness"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 20,

        aliases: [

          "loss_of_appetite"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 32,

        aliases: [

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "liver_pain",

          "stomach_pain"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 32,

        aliases: [

          "ascites",

          "bloating",

          "abdominal_distension",

          "fluid_in_abdomen"

        ]
      },

      jaundice: {

        present: true,

        weight: 28,

        aliases: [

          "yellow_eyes",

          "yellow_skin",

          "icterus"

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

      fever: {

        present: true,

        weight: 10,

        aliases: [

          "low_grade_fever"
        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      enlarged_liver: {

        present: true,

        weight: 35,

        aliases: [

          "hepatomegaly"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 35,

        aliases: [

          "ascites"

        ]
      },

      cachexia: {

        present: true,

        weight: 30,

        aliases: [

          "muscle_wasting"

        ]
      },

      abdominal_mass: {

        present: true,

        weight: 40,

        aliases: [

          "liver_mass"

        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      afp_high: {

        present: true,

        weight: 75
      },

      ultrasound_mass: {

        present: true,

        weight: 55,

        aliases: [

          "ultrasound_liver_mass",

          "liver_mass_ultrasound"

        ]
      },

      ct_liver_tumor: {

        present: true,

        weight: 95,

        aliases: [

          "ct_liver_mass",

          "ct_tumor"

        ]
      },

      mri_liver_tumor: {

        present: true,

        weight: 100,

        aliases: [

          "mri_liver_mass"

        ]
      },

      liver_biopsy_cancer: {

        present: true,

        weight: 100
      },

      bilirubin_high: {

        present: true,

        weight: 20
      },

      albumin_low: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      portal_hypertension: {

        present: true,

        weight: 40
      },

      liver_failure: {

        present: true,

        weight: 75
      },

      bleeding: {

        present: true,

        weight: 65,

        aliases: [

          "internal_bleeding",

          "vomiting_blood",

          "black_stool"

        ]
      },

      metastasis: {

        present: true,

        weight: 90,

        aliases: [

          "cancer_spread"

        ]
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      bleeding: {

        present: true,

        weight: 90,

        aliases: [

          "vomiting_blood",

          "blood_vomit",

          "black_stool"

        ]
      },

      severe_weight_loss: {

        present: true,

        weight: 75
      },

      severe_jaundice: {

        present: true,

        weight: 85
      },

      shock: {

        present: true,

        weight: 100,

        aliases: [

          "septic_shock"

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

          "weight_loss",

          "abdominal_pain"
        ],

        match: "all",

        bonus: 30
      },

      {

        symptoms: [

          "afp_high",

          "ct_liver_tumor"
        ],

        match: "all",

        bonus: 50
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      weight_loss: 15,

      abdominal_swelling: 12,

      jaundice: 10
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 30,

        bonus: 25
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "bleeding",

      "shock",

      "unconsciousness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Sorafenib",

      "Pain Management Medicines"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Surgery",

      "Chemotherapy",

      "Targeted Therapy",

      "Liver Transplant",

      "Radiofrequency Ablation"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol",

      "Regular liver monitoring",

      "Healthy nutrition",

      "Cancer specialist follow-up"
    ]
  }
];