// ==============================
// LIVER FAILURE DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const LIVER_FAILURE = [

  {

    id: "LF001",

    disease:
      "Acute Liver Failure",

    medical_name:
      "Fulminant Hepatic Failure",

    aliases: [

      "fulminant liver failure",

      "acute hepatic failure",

      "hepatic failure",

      "liver shutdown"
    ],

    category: "liver",

    tags: [

      "critical",

      "liver",

      "emergency",

      "hepatic",

      "organ failure"
    ],

    prevalence: "uncommon",

    severity: "critical",

    acute: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      hepatitis_b: {

        present: true,

        weight: 25,

        aliases: [

          "hepatitis",

          "viral_hepatitis",

          "hbsag_positive"
        ]
      },

      drug_toxicity: {

        present: true,

        weight: 35,

        aliases: [

          "drug_induced_liver_injury",

          "medicine_toxicity"
        ]
      },

      alcohol_damage: {

        present: true,

        weight: 25,

        aliases: [

          "chronic_alcohol_use",

          "heavy_alcohol_intake",

          "alcoholic_liver_disease"
        ]
      },

      mushroom_poisoning: {

        present: true,

        weight: 35
      },

      paracetamol_overdose: {

        present: true,

        weight: 40,

        aliases: [

          "acetaminophen_overdose"
        ]
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      chronic_alcohol_use: {

        present: true,

        weight: 20,

        aliases: [

          "alcohol_use"
        ]
      },

      chronic_liver_disease: {

        present: true,

        weight: 25,

        aliases: [

          "liver_disease",

          "fatty_liver",

          "cirrhosis"
        ]
      },

      hepatitis_history: {

        present: true,

        weight: 20,

        aliases: [

          "hepatitis_b",

          "hepatitis_c"
        ]
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      jaundice: {

        present: true,

        weight: 40,

        aliases: [

          "severe_jaundice",

          "yellow_eyes",

          "yellow_skin",

          "icterus"
        ]
      },

      confusion: {

        present: true,

        weight: 38,

        aliases: [

          "altered_behavior",

          "mental_confusion",

          "disorientation"
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

      vomiting: {

        present: true,

        weight: 18,

        aliases: [

          "nausea",

          "vomiting_blood"
        ]
      },

      abdominal_pain: {

        present: true,

        weight: 22,

        aliases: [

          "right_upper_abdominal_pain",

          "liver_pain",

          "upper_abdominal_pain"
        ]
      },

      drowsiness: {

        present: true,

        weight: 32,

        aliases: [

          "sleepiness",

          "reduced_alertness"
        ]
      },

      bleeding: {

        present: true,

        weight: 35,

        aliases: [

          "bleeding_tendency",

          "easy_bleeding",

          "vomiting_blood",

          "black_stool"
        ]
      },

      appetite_loss: {

        present: true,

        weight: 15,

        aliases: [

          "loss_of_appetite"
        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      altered_sensorium: {

        present: true,

        weight: 40,

        aliases: [

          "confusion",

          "disorientation"
        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 32,

        aliases: [

          "ascites",

          "fluid_in_abdomen"
        ]
      },

      hepatic_flap: {

        present: true,

        weight: 35,

        aliases: [

          "asterixis"
        ]
      },

      jaundice_visible: {

        present: true,

        weight: 25,

        aliases: [

          "yellow_eyes",

          "yellow_skin"
        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      bilirubin_high: {

        present: true,

        weight: 50,

        aliases: [

          "bilirubin_very_high"
        ]
      },

      sgpt_high: {

        present: true,

        weight: 45,

        aliases: [

          "sgpt_very_high",

          "alt_high"
        ]
      },

      sgot_high: {

        present: true,

        weight: 40,

        aliases: [

          "sgot_very_high",

          "ast_high"
        ]
      },

      inr_high: {

        present: true,

        weight: 45
      },

      ammonia_high: {

        present: true,

        weight: 40
      },

      albumin_low: {

        present: true,

        weight: 30
      },

      creatinine_high: {

        present: true,

        weight: 25
      },

      liver_function_abnormal: {

        present: true,

        weight: 40,

        aliases: [

          "lft_abnormal",

          "liver_test_abnormal"
        ]
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      hepatic_encephalopathy: {

        present: true,

        weight: 65,

        aliases: [

          "confusion",

          "coma"
        ]
      },

      kidney_failure: {

        present: true,

        weight: 55,

        aliases: [

          "renal_failure"
        ]
      },

      brain_edema: {

        present: true,

        weight: 70
      },

      sepsis: {

        present: true,

        weight: 60
      },

      respiratory_failure: {

        present: true,

        weight: 60
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      coma: {

        present: true,

        weight: 100,

        aliases: [

          "unconsciousness"
        ]
      },

      severe_bleeding: {

        present: true,

        weight: 95,

        aliases: [

          "vomiting_blood",

          "blood_vomit",

          "black_stool"
        ]
      },

      shock: {

        present: true,

        weight: 100
      },

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma"
        ]
      },

      seizure: {

        present: true,

        weight: 90
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "confusion",

          "hepatic_flap"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "bilirubin_high",

          "inr_high"
        ],

        match: "all",

        bonus: 40
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      confusion: 15,

      drowsiness: 15,

      jaundice: 15
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 2,

        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "coma",

      "shock",

      "unconsciousness",

      "severe_bleeding"
    ],

    // ==========================
    // EMERGENCY ACTIONS
    // ==========================

    emergency_actions: [

      "ICU Admission",

      "Liver Transplant Evaluation",

      "Ventilator Support",

      "Emergency Hepatology Consult"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Lactulose",

      "N-acetylcysteine",

      "Rifaximin"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "ICU Monitoring",

      "Liver Failure Management",

      "Transplant Evaluation"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol",

      "Avoid self medication",

      "Emergency hospital follow-up",

      "Regular liver monitoring"
    ]
  }
];