// ==============================
// LIVER CIRRHOSIS DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const CIRRHOSIS = [

  {

    id: "CIR001",

    disease:
      "Liver Cirrhosis",

    disease_bn:
      "লিভার সিরোসিস",

    medical_name:
      "Hepatic Cirrhosis",

    medical_name_bn:
      "হেপাটিক সিরোসিস",

    aliases: [

      "cirrhosis",

      "hepatic cirrhosis",

      "chronic liver cirrhosis",

      "advanced liver scarring"
    ],

    category: "liver",

    tags: [

      "cirrhosis",

      "liver",

      "fibrosis",

      "portal hypertension",

      "chronic liver disease"
    ],

    prevalence: "common",

    severity: "critical",

    chronic: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      chronic_alcohol_use: {

        present: true,

        weight: 35,

        aliases: [

          "heavy_alcohol_intake",

          "alcohol_use",

          "long_term_drinking"
        ]
      },

      hepatitis_b: {

        present: true,

        weight: 30,

        aliases: [

          "hbsag_positive",

          "chronic_hepatitis_b"
        ]
      },

      hepatitis_c: {

        present: true,

        weight: 30,

        aliases: [

          "anti_hcv_positive",

          "chronic_hepatitis_c"
        ]
      },

      fatty_liver_history: {

        present: true,

        weight: 25,

        aliases: [

          "fatty_liver",

          "fatty_liver_grade_3"
        ]
      },

      liver_fibrosis: {

        present: true,

        weight: 35,

        aliases: [

          "hepatic_fibrosis",

          "fibroscan_severe_fibrosis"
        ]
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

      chronic_liver_disease: {

        present: true,

        weight: 25,

        aliases: [

          "liver_failure",

          "hepatitis",

          "fatty_liver"
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

          "low_energy"
        ]
      },

      jaundice: {

        present: true,

        weight: 35,

        aliases: [

          "yellow_eyes",

          "yellow_skin",

          "icterus"
        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 40,

        aliases: [

          "ascites",

          "swollen_abdomen"
        ]
      },

      leg_swelling: {

        present: true,

        weight: 28,

        aliases: [

          "pedal_edema",

          "foot_swelling"
        ]
      },

      abdominal_pain: {

        present: true,

        weight: 20,

        aliases: [

          "right_upper_abdominal_pain",

          "liver_pain"
        ]
      },

      appetite_loss: {

        present: true,

        weight: 18,

        aliases: [

          "loss_of_appetite"
        ]
      },

      nausea: {

        present: true,

        weight: 12
      },

      vomiting: {

        present: true,

        weight: 12
      },

      weight_loss: {

        present: true,

        weight: 20
      },

      itching: {

        present: true,

        weight: 15
      },

      confusion: {

        present: true,

        weight: 35,

        aliases: [

          "drowsiness",

          "altered_behavior"
        ]
      },

      black_stool: {

        present: true,

        weight: 35,

        aliases: [

          "melena"
        ]
      },

      vomiting_blood: {

        present: true,

        weight: 50,

        aliases: [

          "hematemesis",

          "blood_vomit"
        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      ascites: {

        present: true,

        weight: 45,

        aliases: [

          "abdominal_swelling"
        ]
      },

      enlarged_liver: {

        present: true,

        weight: 30,

        aliases: [

          "hepatomegaly"
        ]
      },

      splenomegaly: {

        present: true,

        weight: 30,

        aliases: [

          "enlarged_spleen"
        ]
      },

      pedal_edema: {

        present: true,

        weight: 25,

        aliases: [

          "leg_swelling"
        ]
      },

      spider_angioma: {

        present: true,

        weight: 20
      },

      palmar_erythema: {

        present: true,

        weight: 18
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ultrasound_cirrhosis: {

        present: true,

        weight: 80
      },

      fibroscan_severe_fibrosis: {

        present: true,

        weight: 60,

        aliases: [

          "advanced_fibrosis"
        ]
      },

      bilirubin_high: {

        present: true,

        weight: 30
      },

      albumin_low: {

        present: true,

        weight: 35
      },

      platelet_low: {

        present: true,

        weight: 30
      },

      inr_high: {

        present: true,

        weight: 35
      },

      liver_enzymes_high: {

        present: true,

        weight: 20
      },

      portal_vein_dilated: {

        present: true,

        weight: 40
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      portal_hypertension: {

        present: true,

        weight: 70
      },

      hepatic_encephalopathy: {

        present: true,

        weight: 75,

        aliases: [

          "confusion",

          "coma"
        ]
      },

      liver_failure: {

        present: true,

        weight: 85
      },

      variceal_bleeding: {

        present: true,

        weight: 80,

        aliases: [

          "vomiting_blood",

          "black_stool"
        ]
      },

      liver_cancer: {

        present: true,

        weight: 85
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      vomiting_blood: {

        present: true,

        weight: 100
      },

      black_stool: {

        present: true,

        weight: 85
      },

      severe_confusion: {

        present: true,

        weight: 85
      },

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma"
        ]
      },

      shock: {

        present: true,

        weight: 100
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "ascites",

          "jaundice"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "vomiting_blood",

          "black_stool"
        ],

        match: "any",

        bonus: 30
      },

      {

        symptoms: [

          "albumin_low",

          "inr_high"
        ],

        match: "all",

        bonus: 25
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

        match: "any",

        penalty: 10
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      abdominal_swelling: 15,

      jaundice: 12,

      confusion: 15,

      vomiting_blood: 20
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        min_age: 35,

        bonus: 10
      }
    ],

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

      "vomiting_blood",

      "shock",

      "unconsciousness",

      "severe_confusion"
    ],

    // ==========================
    // EMERGENCY ACTIONS
    // ==========================

    emergency_actions: [

      "Immediate Hospital Admission",

      "Emergency Endoscopy",

      "Liver Specialist Consultation",

      "Bleeding Control"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Lactulose",

      "Diuretics",

      "Propranolol",

      "Rifaximin"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Ascites Management",

      "Portal Pressure Reduction",

      "Endoscopic Band Ligation",

      "Liver Monitoring",

      "Transplant Evaluation"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol completely",

      "Low salt diet",

      "Regular liver monitoring",

      "Healthy nutrition",

      "Immediate care for bleeding"
    ]
  }
];