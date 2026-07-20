// ==============================
// HEPATIC ENCEPHALOPATHY
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const HEPATIC_ENCEPHALOPATHY = [

  {

    id: "HE001",

    disease:
      "Hepatic Encephalopathy",

    medical_name:
      "Liver Failure Related Brain Dysfunction",

    aliases: [

      "hepatic coma",

      "liver brain dysfunction",

      "hepatic brain disorder"
    ],

    category: "liver",

    tags: [

      "liver failure",

      "brain",

      "neurological",

      "critical",

      "hepatic coma"
    ],

    prevalence: "common",

    severity: "critical",

    chronic: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      liver_cirrhosis: {

        present: true,

        weight: 40,

        aliases: [

          "cirrhosis"

        ]
      },

      chronic_liver_failure: {

        present: true,

        weight: 45,

        aliases: [

          "liver_failure"

        ]
      },

      bleeding: {

        present: true,

        weight: 25,

        aliases: [

          "gastrointestinal_bleeding",

          "vomiting_blood",

          "blood_vomit",

          "black_stool"

        ]
      },

      severe_infection: {

        present: true,

        weight: 20
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

          "hepatitis_b"

        ]
      },

      hepatitis_c_history: {

        present: true,

        weight: 20,

        aliases: [

          "hepatitis_c"

        ]
      },

      cirrhosis_history: {

        present: true,

        weight: 35,

        aliases: [

          "liver_cirrhosis"

        ]
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      confusion: {

        present: true,

        weight: 50,

        aliases: [

          "altered_behavior",

          "memory_loss",

          "irritability",

          "drowsiness",

          "poor_concentration",

          "sleep_disturbance",

          "slow_response",

          "mental_confusion",

          "hepatic_confusion"

        ]
      },

      slurred_speech: {

        present: true,

        weight: 30,

        aliases: [

          "speech_problem",

          "speech_difficulty"

        ]
      },

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma",

          "loss_of_consciousness"

        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      hepatic_flap: {

        present: true,

        weight: 50,

        aliases: [

          "asterixis"

        ]
      },

      jaundice: {

        present: true,

        weight: 25,

        aliases: [

          "yellow_eyes",

          "yellow_skin",

          "icterus"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 25,

        aliases: [

          "ascites",

          "bloating",

          "fluid_in_abdomen"

        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ammonia_high: {

        present: true,

        weight: 75
      },

      bilirubin_high: {

        present: true,

        weight: 25
      },

      inr_high: {

        present: true,

        weight: 20
      },

      albumin_low: {

        present: true,

        weight: 20
      },

      liver_function_abnormal: {

        present: true,

        weight: 35,

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

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma"

        ]
      },

      respiratory_failure: {

        present: true,

        weight: 80
      },

      aspiration_pneumonia: {

        present: true,

        weight: 70
      },

      multi_organ_failure: {

        present: true,

        weight: 90
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      unconsciousness: {

        present: true,

        weight: 100,

        aliases: [

          "coma"

        ]
      },

      severe_confusion: {

        present: true,

        weight: 85,

        aliases: [

          "extreme_confusion",

          "severe_disorientation"

        ]
      },

      seizure: {

        present: true,

        weight: 80,

        aliases: [

          "convulsion",

          "fits"

        ]
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

          "ammonia_high"
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

        penalty: 10
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      confusion: 15,

      unconsciousness: 25
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 3,

        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "unconsciousness",

      "severe_confusion",

      "seizure"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Lactulose",

      "Rifaximin"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "ICU Monitoring",

      "Ammonia Reduction Therapy",

      "Liver Failure Management"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol",

      "Regular liver follow-up",

      "Monitor mental status",

      "Protein controlled diet"
    ]
  }
];