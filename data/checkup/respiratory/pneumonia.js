// ==============================
// PNEUMONIA DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const PNEUMONIA = [

  {

    id: "PNE001",

    disease: "Pneumonia",

    aliases: [

      "lung infection"
    ],

    category: "respiratory",

    tags: [

      "lungs",

      "infection",

      "fever",

      "breathing"
    ],

    prevalence: "common",

    severity: "critical",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      bacterial_infection: {
        present: true,
        weight: 40
      },

      viral_infection: {
        present: true,
        weight: 30
      },

      smoking: {
        present: true,
        weight: 20
      },

      low_immunity: {
        present: true,
        weight: 30
      },

      elderly_age: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      diabetes: {
        present: true,
        weight: 20
      },

      copd_history: {
        present: true,
        weight: 25
      },

      asthma_history: {
        present: true,
        weight: 15
      },

      chronic_smoking: {
        present: true,
        weight: 25
      },

      hospitalization_recent: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      high_fever: {
        present: true,
        weight: 40
      },

      cough: {

  present: true,

  weight: 40,

  aliases: [

    "wet_cough",
    "productive_cough"

  ]
},

      sputum: {
        present: true,
        weight: 35
      },

      yellow_sputum: {
        present: true,
        weight: 35
      },

      blood_in_sputum: {
        present: true,
        weight: 50
      },

      chest_pain: {
        present: true,
        weight: 35
      },

      breathing_difficulty: {
        present: true,
        weight: 50
      },

      chills: {
        present: true,
        weight: 30
      },

      fatigue: {
        present: true,
        weight: 20
      },

      weakness: {
        present: true,
        weight: 20
      },

      pleuritic_chest_pain: {
        present: true,
        weight: 40
      },

      rapid_breathing: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      lung_crackles: {
        present: true,
        weight: 60
      },

      rapid_breathing: {
        present: true,
        weight: 40
      },

      low_spo2: {
        present: true,
        weight: 70
      },

      fever_present: {
        present: true,
        weight: 20
      },

      reduced_air_entry: {
        present: true,
        weight: 45
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      chest_xray_infiltrate: {
        present: true,
        weight: 90
      },

      ct_lung_infection: {
        present: true,
        weight: 85
      },

      wbc_high: {
        present: true,
        weight: 35
      },

      crp_high: {
        present: true,
        weight: 30
      },

      procalcitonin_high: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      respiratory_failure: {
        present: true,
        weight: 100
      },

      sepsis: {
        present: true,
        weight: 90
      },

      pleural_effusion: {
        present: true,
        weight: 60
      },

      lung_abscess: {
        present: true,
        weight: 70
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      spo2_below_90: {
        present: true,
        weight: 100
      },

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      chest_pressure: {
        present: true,
        weight: 70
      },

      unconsciousness: {
        present: true,
        weight: 100
      },

      cyanosis: {
        present: true,
        weight: 100
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

          "high_fever",

          "wet_cough",

          "breathing_difficulty"
        ],

        match: "all",

        bonus: 40
      },

      {

        symptoms: [

          "yellow_sputum",

          "lung_crackles"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "pleuritic_chest_pain"
        ],

        match: "all",

        bonus: 20
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "loss_of_smell"
        ],

        match: "all",

        penalty: 20
      },

      {

        symptoms: [

          "sneezing",

          "runny_nose"
        ],

        match: "all",

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      breathing_difficulty: 20,

      wet_cough: 15,

      chest_pain: 15
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        min_age: 60,

        bonus: 15
      }
    ],

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

      "spo2_below_90",

      "shock",

      "cyanosis",

      "unconsciousness",

      "severe_breathlessness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Azithromycin",

      "Ceftriaxone",

      "Paracetamol",

      "Oxygen"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Antibiotic Therapy",

      "Oxygen Therapy",

      "Hospital Admission"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid smoking",

      "Hydration",

      "Rest properly",

      "Monitor SPO2"
    ]
  }
];