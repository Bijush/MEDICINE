// ==============================
// PORTAL HYPERTENSION
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const PORTAL_HYPERTENSION = [

  {

    id: "PH001",

    disease:
      "Portal Hypertension",

    medical_name:
      "Increased Portal Venous Pressure",

    aliases: [

      "portal vein hypertension",

      "portal venous hypertension"
    ],

    category: "liver",

    tags: [

      "portal",

      "cirrhosis",

      "bleeding",

      "ascites",

      "liver"
    ],

    prevalence: "common",

    severity: "severe",

    chronic: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      cirrhosis: {

        present: true,

        weight: 40,

        aliases: [

          "liver_cirrhosis",

          "advanced_liver_disease"
        ]
      },

      liver_fibrosis: {

        present: true,

        weight: 28,

        aliases: [

          "hepatic_fibrosis",

          "fibroscan_severe_fibrosis"
        ]
      },

      portal_vein_thrombosis: {

        present: true,

        weight: 35,

        aliases: [

          "portal_vein_blockage"
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

          "alcohol_use",

          "heavy_alcohol_intake"
        ]
      },

      hepatitis_b_history: {

        present: true,

        weight: 20,

        aliases: [

          "hepatitis_b",

          "hbsag_positive"
        ]
      },

      hepatitis_c_history: {

        present: true,

        weight: 20,

        aliases: [

          "hepatitis_c",

          "anti_hcv_positive"
        ]
      },

      chronic_liver_disease: {

        present: true,

        weight: 25,

        aliases: [

          "fatty_liver",

          "cirrhosis",

          "liver_failure"
        ]
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      abdominal_swelling: {

        present: true,

        weight: 35,

        aliases: [

          "ascites",

          "fluid_in_abdomen",

          "swollen_abdomen"
        ]
      },

      vomiting_blood: {

        present: true,

        weight: 55,

        aliases: [

          "blood_vomit",

          "hematemesis"
        ]
      },

      fatigue: {

        present: true,

        weight: 15,

        aliases: [

          "weakness",

          "tiredness"
        ]
      },

      black_stool: {

        present: true,

        weight: 42,

        aliases: [

          "melena",

          "dark_stool"
        ]
      },

      abdominal_discomfort: {

        present: true,

        weight: 15,

        aliases: [

          "abdominal_pain",

          "bloating"
        ]
      },

      shortness_of_breath: {

        present: true,

        weight: 12,

        aliases: [

          "breathlessness"
        ]
      },

      appetite_loss: {

        present: true,

        weight: 12,

        aliases: [

          "loss_of_appetite"
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

      splenomegaly: {

        present: true,

        weight: 32,

        aliases: [

          "enlarged_spleen"
        ]
      },

      pedal_edema: {

        present: true,

        weight: 22,

        aliases: [

          "leg_swelling",

          "foot_swelling"
        ]
      },

      dilated_abdominal_veins: {

        present: true,

        weight: 35,

        aliases: [

          "visible_abdominal_veins"
        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      portal_vein_dilated: {

        present: true,

        weight: 70,

        aliases: [

          "portal_vein_enlarged"
        ]
      },

      platelet_low: {

        present: true,

        weight: 25,

        aliases: [

          "low_platelet"
        ]
      },

      endoscopy_varices: {

        present: true,

        weight: 65,

        aliases: [

          "esophageal_varices"
        ]
      },

      ultrasound_portal_hypertension: {

        present: true,

        weight: 60,

        aliases: [

          "portal_hypertension_ultrasound"
        ]
      },

      fibroscan_severe_fibrosis: {

        present: true,

        weight: 35,

        aliases: [

          "severe_fibrosis"
        ]
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      variceal_bleeding: {

        present: true,

        weight: 75,

        aliases: [

          "vomiting_blood",

          "black_stool"
        ]
      },

      hepatic_encephalopathy: {

        present: true,

        weight: 55,

        aliases: [

          "confusion",

          "drowsiness"
        ]
      },

      severe_ascites: {

        present: true,

        weight: 50,

        aliases: [

          "massive_abdominal_swelling"
        ]
      },

      spontaneous_bacterial_peritonitis: {

        present: true,

        weight: 65,

        aliases: [

          "infected_ascites"
        ]
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      vomiting_blood: {

        present: true,

        weight: 100,

        aliases: [

          "hematemesis"
        ]
      },

      black_stool: {

        present: true,

        weight: 85,

        aliases: [

          "melena"
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
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "ascites",

          "splenomegaly"
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
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      ascites: 15,

      vomiting_blood: 20,

      black_stool: 15
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 7,

        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "vomiting_blood",

      "shock",

      "unconsciousness"
    ],

    // ==========================
    // EMERGENCY ACTIONS
    // ==========================

    emergency_actions: [

      "Emergency Endoscopy",

      "Hospital Admission",

      "IV Fluid Support",

      "Blood Transfusion if needed"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Propranolol",

      "Diuretics",

      "Lactulose"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Endoscopic Band Ligation",

      "Ascites Management",

      "Portal Pressure Reduction",

      "Liver Disease Treatment"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Low salt diet",

      "Avoid alcohol",

      "Regular liver monitoring",

      "Immediate care for bleeding"
    ]
  }
];