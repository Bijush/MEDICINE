// ==============================
// HEPATITIS DATASET
// ADVANCED SAFE CANONICAL VERSION
// ==============================

export const HEPATITIS = [

  // ==========================
  // HEPATITIS A
  // ==========================

  {

    id: "HPA",

    disease:
      "Hepatitis A",

    medical_name:
      "Acute Viral Hepatitis A",

    aliases: [

      "hep a",

      "viral hepatitis a"
    ],

    category: "liver",

    tags: [

      "viral",

      "liver",

      "infection",

      "hepatitis"
    ],

    prevalence: "common",

    severity: "moderate",

    chronic: false,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      contaminated_food: {

        present: true,

        weight: 25
      },

      contaminated_water: {

        present: true,

        weight: 30
      },

      poor_sanitation: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fever: {

        present: true,

        weight: 12,

        aliases: [

          "high_fever"
        ]
      },

      vomiting: {

        present: true,

        weight: 12,

        aliases: [

          "nausea",

          "vomiting",

          "vomit"
        ]
      },

      jaundice: {

        present: true,

        weight: 35,

        aliases: [

          "yellow_skin",

          "yellow_eyes",

          "icterus"
        ]
      },

      dark_urine: {

        present: true,

        weight: 25
      },

      fatigue: {

        present: true,

        weight: 15,

        aliases: [

          "weakness",

          "tiredness"
        ]
      },

      appetite_loss: {

        present: true,

        weight: 15
      },

      abdominal_pain: {

        present: true,

        weight: 15,

        aliases: [

          "stomach_pain",

          "right_upper_abdominal_pain",

          "abdominal_discomfort"
        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      enlarged_liver: {

        present: true,

        weight: 20
      },

      jaundice_visible: {

        present: true,

        weight: 25,

        aliases: [

          "jaundice_present"
        ]
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      anti_hav_igm_positive: {

        present: true,

        weight: 95
      },

      bilirubin_high: {

        present: true,

        weight: 30
      },

      liver_enzymes_high: {

        present: true,

        weight: 30,

        aliases: [

          "sgpt_high",

          "sgot_high",

          "ast_alt_high"
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

        bonus: 25
      }
    ],

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 5,

        bonus: 10
      }
    ],

    medicines: [

      "ORS",

      "Liver Supportive Care"
    ],

    treatments: [

      "Hydration",

      "Rest",

      "Liver Monitoring"
    ],

    lifestyle_changes: [

      "Avoid oily food",

      "Drink clean water",

      "Maintain hygiene"
    ]
  },

  // ==========================
  // HEPATITIS B
  // ==========================

  {

    id: "HPB",

    disease:
      "Hepatitis B",

    medical_name:
      "Chronic Viral Hepatitis B",

    aliases: [

      "hep b",

      "viral hepatitis b"
    ],

    category: "liver",

    tags: [

      "viral",

      "chronic",

      "liver",

      "hepatitis"
    ],

    prevalence: "common",

    severity: "severe",

    chronic: true,

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fatigue: {

        present: true,

        weight: 18,

        aliases: [

          "weakness",

          "tiredness"
        ]
      },

      jaundice: {

        present: true,

        weight: 35,

        aliases: [

          "yellow_skin",

          "yellow_eyes"
        ]
      },

      abdominal_pain: {

        present: true,

        weight: 18,

        aliases: [

          "right_upper_abdominal_pain",

          "stomach_pain"
        ]
      },

      vomiting: {

        present: true,

        weight: 12,

        aliases: [

          "nausea",

          "vomiting"
        ]
      },

      joint_pain: {

        present: true,

        weight: 10
      },

      dark_urine: {

        present: true,

        weight: 22
      },

      appetite_loss: {

        present: true,

        weight: 15
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      unsafe_injection: {

        present: true,

        weight: 25
      },

      blood_transfusion: {

        present: true,

        weight: 25
      },

      unprotected_sex: {

        present: true,

        weight: 25
      },

      infected_family_member: {

        present: true,

        weight: 15
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      hbsag_positive: {

        present: true,

        weight: 100
      },

      hbeag_positive: {

        present: true,

        weight: 50
      },

      viral_load_high: {

        present: true,

        weight: 40
      },

      liver_enzymes_high: {

        present: true,

        weight: 30,

        aliases: [

          "sgpt_high",

          "sgot_high"
        ]
      },

      bilirubin_high: {

        present: true,

        weight: 25
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      cirrhosis: {

        present: true,

        weight: 70,

        aliases: [

          "liver_cirrhosis"
        ]
      },

      liver_failure: {

        present: true,

        weight: 80
      },

      liver_cancer: {

        present: true,

        weight: 90
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_jaundice: {

        present: true,

        weight: 70
      },

      vomiting_blood: {

        present: true,

        weight: 90,

        aliases: [

          "blood_vomit"
        ]
      },

      unconsciousness: {

        present: true,

        weight: 100
      }
    },

    followup_boosts: {

      jaundice: 10,

      fatigue: 8
    },

    emergency_symptoms: [

      "vomiting_blood",

      "unconsciousness"
    ],

    medicines: [

      "Tenofovir",

      "Entecavir"
    ],

    treatments: [

      "Antiviral Therapy",

      "Liver Monitoring"
    ],

    lifestyle_changes: [

      "Avoid alcohol",

      "Safe sex practice",

      "Vaccinate family members"
    ]
  },

  // ==========================
  // HEPATITIS C
  // ==========================

  {

    id: "HPC",

    disease:
      "Hepatitis C",

    medical_name:
      "Chronic Viral Hepatitis C",

    aliases: [

      "hep c",

      "viral hepatitis c"
    ],

    category: "liver",

    tags: [

      "viral",

      "chronic",

      "liver",

      "hepatitis"
    ],

    prevalence: "common",

    severity: "severe",

    chronic: true,

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fatigue: {

        present: true,

        weight: 18,

        aliases: [

          "weakness",

          "tiredness"
        ]
      },

      jaundice: {

        present: true,

        weight: 22,

        aliases: [

          "yellow_skin",

          "yellow_eyes"
        ]
      },

      appetite_loss: {

        present: true,

        weight: 15
      },

      abdominal_pain: {

        present: true,

        weight: 15,

        aliases: [

          "stomach_pain",

          "right_upper_abdominal_pain"
        ]
      },

      dark_urine: {

        present: true,

        weight: 18
      },

      vomiting: {

        present: true,

        weight: 12,

        aliases: [

          "nausea",

          "vomiting"
        ]
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      unsafe_blood_exposure: {

        present: true,

        weight: 25
      },

      iv_drug_use: {

        present: true,

        weight: 35
      },

      blood_transfusion_history: {

        present: true,

        weight: 20
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      anti_hcv_positive: {

        present: true,

        weight: 100
      },

      hcv_rna_positive: {

        present: true,

        weight: 80
      },

      liver_enzymes_high: {

        present: true,

        weight: 30,

        aliases: [

          "sgpt_high",

          "sgot_high"
        ]
      },

      liver_fibrosis_present: {

        present: true,

        weight: 35,

        aliases: [

          "fibrosis",

          "fibroscan_abnormal"
        ]
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      cirrhosis: {

        present: true,

        weight: 80,

        aliases: [

          "liver_cirrhosis"
        ]
      },

      liver_failure: {

        present: true,

        weight: 80
      },

      liver_cancer: {

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

          "anti_hcv_positive",

          "fatigue"
        ],

        match: "all",

        bonus: 20
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

    medicines: [

      "Sofosbuvir",

      "Daclatasvir"
    ],

    treatments: [

      "Antiviral Therapy",

      "Liver Monitoring"
    ],

    lifestyle_changes: [

      "Avoid alcohol",

      "Safe injection practices",

      "Regular liver checkup"
    ]
  }
];