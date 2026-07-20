// ==============================
// CHOLESTASIS DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const CHOLESTASIS = [

  {

    id: "CH001",

    disease:
      "Cholestasis",

    medical_name:
      "Bile Flow Obstruction Disorder",

    aliases: [

      "bile obstruction",

      "bile flow disorder",

      "obstructive cholestasis",

      "bile duct blockage"
    ],

    category: "liver",

    tags: [

      "liver",

      "bile",

      "jaundice",

      "itching",

      "cholestatic liver disease"
    ],

    prevalence: "uncommon",

    severity: "severe",

    chronic: true,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      bile_duct_obstruction: {

        present: true,

        weight: 45,

        aliases: [

          "bile_blockage",

          "blocked_bile_duct"

        ]
      },

      gallstones: {

        present: true,

        weight: 35
      },

      liver_disease: {

        present: true,

        weight: 25
      },

      drug_induced_liver_injury: {

        present: true,

        weight: 25
      },

      pregnancy_related: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      itching: {

        present: true,

        weight: 45,

        aliases: [

          "severe_itching",

          "body_itching",

          "skin_itching",

          "generalized_itching"

        ]
      },

      jaundice: {

        present: true,

        weight: 40,

        aliases: [

          "yellow_eyes",

          "yellow_skin",

          "severe_jaundice",

          "mild_jaundice",

          "jaundice_present",

          "icterus"

        ]
      },

      dark_urine: {

        present: true,

        weight: 35,

        aliases: [

          "tea_colored_urine",

          "brown_urine"

        ]
      },

      pale_stool: {

        present: true,

        weight: 35,

        aliases: [

          "clay_colored_stool",

          "white_stool",

          "light_colored_stool"

        ]
      },

      fatigue: {

        present: true,

        weight: 20,

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

          "vomiting_feeling"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 28,

        aliases: [

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "liver_pain",

          "stomach_pain",

          "belly_pain"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 18,

        aliases: [

          "loss_of_appetite"

        ]
      },

      weight_loss: {

        present: true,

        weight: 22
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      jaundice_present: {

        present: true,

        weight: 35,

        aliases: [

          "jaundice"

        ]
      },

      scratch_marks: {

        present: true,

        weight: 25,

        aliases: [

          "skin_scratches",

          "itch_marks"

        ]
      },

      enlarged_liver: {

        present: true,

        weight: 30,

        aliases: [

          "hepatomegaly"

        ]
      },

      abdominal_tenderness: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      bilirubin_high: {

        present: true,

        weight: 40
      },

      alkaline_phosphatase_high: {

        present: true,

        weight: 50
      },

      ggt_high: {

        present: true,

        weight: 40
      },

      liver_enzymes_high: {

        present: true,

        weight: 25
      },

      ultrasound_bile_duct_dilation: {

        present: true,

        weight: 55,

        aliases: [

          "dilated_bile_duct"

        ]
      },

      mrcp_abnormal: {

        present: true,

        weight: 65
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      liver_failure: {

        present: true,

        weight: 85
      },

      vitamin_deficiency: {

        present: true,

        weight: 40
      },

      severe_infection: {

        present: true,

        weight: 60
      },

      cirrhosis: {

        present: true,

        weight: 70
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_jaundice: {

        present: true,

        weight: 90,

        aliases: [

          "extreme_jaundice"

        ]
      },

      confusion: {

        present: true,

        weight: 85,

        aliases: [

          "altered_behavior",

          "drowsiness",

          "hepatic_confusion"

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

        weight: 85,

        aliases: [

          "extreme_abdominal_pain"

        ]
      },

      high_fever: {

        present: true,

        weight: 75,

        aliases: [

          "fever"

        ]
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "itching",

          "jaundice"

        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "dark_urine",

          "pale_stool"

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

          "platelet_low"

        ],

        match: "any",

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      itching: 15,

      jaundice: 12,

      dark_urine: 10
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        min_age: 40,

        bonus: 10
      }
    ],

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 14,

        bonus: 20
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "unconsciousness",

      "confusion",

      "severe_abdominal_pain"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Ursodeoxycholic Acid",

      "Cholestyramine",

      "Vitamin Supplements"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Bile Flow Management",

      "Liver Monitoring",

      "ERCP if obstruction present",

      "Hospital Observation"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid alcohol",

      "Low fat diet",

      "Regular liver tests",

      "Maintain hydration",

      "Seek urgent care if jaundice worsens"
    ]
  }
];