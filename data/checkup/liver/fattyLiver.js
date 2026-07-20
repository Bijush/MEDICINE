// ==============================
// FATTY LIVER DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const FATTY_LIVER = [

  // ==============================
  // GRADE 1
  // ==============================

  {

    id: "FL1",

    disease:
      "Fatty Liver Grade 1",

    medical_name:
      "Mild Hepatic Steatosis",

    aliases: [

      "grade 1 fatty liver",

      "mild fatty liver",

      "early fatty liver"
    ],

    category: "liver",

    tags: [

      "fatty liver",

      "obesity",

      "metabolic",

      "liver"
    ],

    prevalence: "common",

    severity: "mild",

    chronic: true,

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      obesity: {

        present: true,

        weight: 18
      },

      diabetes: {

        present: true,

        weight: 18
      },

      junk_food: {

        present: true,

        weight: 12,

        aliases: [

          "oily_food",

          "fast_food"

        ]
      },

      high_cholesterol: {

        present: true,

        weight: 12
      },

      sedentary_lifestyle: {

        present: true,

        weight: 10
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fatigue: {

        present: true,

        weight: 12,

        aliases: [

          "weakness",

          "tiredness",

          "low_energy"

        ]
      },

      abdominal_swelling: {

        present: true,

        weight: 10,

        aliases: [

          "bloating",

          "gas",

          "abdominal_bloating",

          "stomach_fullness"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 15,

        aliases: [

          "mild_right_upper_abdominal_discomfort",

          "mild_abdominal_pain",

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "liver_discomfort"

        ]
      },

      appetite_loss: {

        present: false,

        weight: -5
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ultrasound_grade_1: {

        present: true,

        weight: 60
      },

      sgpt_mild_high: {

        present: true,

        weight: 15
      },

      fatty_liver_ultrasound: {

        present: true,

        weight: 40
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "obesity",

          "fatigue"

        ],

        match: "all",

        bonus: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      fatigue: 5,

      abdominal_swelling: 5
    },

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Silymarin",

      "Vitamin E"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Weight Reduction",

      "Diet Control",

      "Exercise"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid oily food",

      "Daily exercise",

      "Weight loss",

      "Avoid alcohol"
    ]
  },

  // ==============================
  // GRADE 2
  // ==============================

  {

    id: "FL2",

    disease:
      "Fatty Liver Grade 2",

    medical_name:
      "Moderate Hepatic Steatosis",

    aliases: [

      "grade 2 fatty liver",

      "moderate fatty liver"
    ],

    category: "liver",

    tags: [

      "fatty liver",

      "metabolic syndrome",

      "liver"
    ],

    prevalence: "common",

    severity: "moderate",

    chronic: true,

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      obesity: {

        present: true,

        weight: 20
      },

      diabetes: {

        present: true,

        weight: 20
      },

      alcohol_use: {

        present: true,

        weight: 20
      },

      high_cholesterol: {

        present: true,

        weight: 15
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

      abdominal_pain: {

        present: true,

        weight: 22,

        aliases: [

          "persistent_abdominal_pain",

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "stomach_pain",

          "liver_pain"

        ]
      },

      vomiting: {

        present: true,

        weight: 12,

        aliases: [

          "nausea"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 15
      },

      abdominal_swelling: {

        present: true,

        weight: 12,

        aliases: [

          "bloating",

          "gas",

          "abdominal_bloating"

        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      enlarged_liver: {

        present: true,

        weight: 20,

        aliases: [

          "hepatomegaly"

        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ultrasound_grade_2: {

        present: true,

        weight: 70
      },

      sgpt_high: {

        present: true,

        weight: 20
      },

      fibroscan_abnormal: {

        present: true,

        weight: 25
      },

      liver_enzymes_high: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "abdominal_pain",

          "obesity"

        ],

        match: "all",

        bonus: 20
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      fatigue: 8,

      appetite_loss: 6,

      abdominal_swelling: 6
    },

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Ursodeoxycholic Acid",

      "Silymarin"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Liver Monitoring",

      "Diet Management",

      "Exercise Therapy"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Reduce sugar intake",

      "Avoid alcohol",

      "Weight management",

      "Regular liver tests"
    ]
  },

  // ==============================
  // GRADE 3
  // ==============================

  {

    id: "FL3",

    disease:
      "Fatty Liver Grade 3",

    medical_name:
      "Severe Hepatic Steatosis",

    aliases: [

      "grade 3 fatty liver",

      "severe fatty liver",

      "advanced fatty liver"
    ],

    category: "liver",

    tags: [

      "fatty liver",

      "advanced liver disease",

      "cirrhosis risk"
    ],

    prevalence: "uncommon",

    severity: "severe",

    chronic: true,

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      obesity: {

        present: true,

        weight: 25
      },

      diabetes: {

        present: true,

        weight: 25
      },

      alcohol_use: {

        present: true,

        weight: 25
      },

      chronic_liver_disease: {

        present: true,

        weight: 30
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

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

          "bloating",

          "abdominal_bloating",

          "fluid_in_abdomen",

          "stomach_swelling"

        ]
      },

      weight_loss: {

        present: true,

        weight: 20
      },

      appetite_loss: {

        present: true,

        weight: 20
      },

      vomiting: {

        present: true,

        weight: 15,

        aliases: [

          "nausea"

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

      leg_swelling: {

        present: true,

        weight: 25,

        aliases: [

          "pedal_edema",

          "foot_swelling"

        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ultrasound_grade_3: {

        present: true,

        weight: 80
      },

      bilirubin_high: {

        present: true,

        weight: 30
      },

      platelet_low: {

        present: true,

        weight: 25
      },

      albumin_low: {

        present: true,

        weight: 25
      },

      fibroscan_severe_fibrosis: {

        present: true,

        weight: 40
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

      liver_failure: {

        present: true,

        weight: 80
      },

      portal_hypertension: {

        present: true,

        weight: 60
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      bleeding: {

        present: true,

        weight: 75,

        aliases: [

          "vomiting_blood",

          "blood_vomit",

          "black_stool"

        ]
      },

      ascites: {

        present: true,

        weight: 60
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

          "abdominal_swelling"

        ],

        match: "all",

        bonus: 30
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "bleeding",

      "unconsciousness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Ursodeoxycholic Acid",

      "Silymarin"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Hospital Monitoring",

      "Liver Protection",

      "Ascites Management"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Strict diet control",

      "Avoid alcohol completely",

      "Regular liver monitoring",

      "Weight management"
    ]
  }
];