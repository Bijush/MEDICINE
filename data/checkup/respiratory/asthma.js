// ==============================
// ASTHMA DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const ASTHMA = [

  {

    id: "AST001",

    disease: "Asthma",

    aliases: [

      "bronchial asthma",

      "allergic asthma"
    ],

    category: "respiratory",

    tags: [

      "lungs",

      "allergy",

      "wheezing",

      "breathing"
    ],

    prevalence: "common",

    severity: "moderate",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      allergy_history: {
        present: true,
        weight: 35
      },

      dust_exposure: {
        present: true,
        weight: 25
      },

      smoke_exposure: {
        present: true,
        weight: 25
      },

      family_history: {
        present: true,
        weight: 25
      },

      cold_weather_trigger: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      smoking: {
        present: true,
        weight: 20
      },

      obesity: {
        present: true,
        weight: 15
      },

      pollution_exposure: {
        present: true,
        weight: 20
      },

      pet_allergy: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      wheezing: {

  present: true,

  weight: 60,

  aliases: [

    "whistling_sound",
    "breathing_sound",
    "chest_whistling"

  ]
},

      breathing_difficulty: {

  present: true,

  weight: 50,

  aliases: [

    "shortness_of_breath",
    "breathlessness",
    "difficulty_breathing"

  ]
},

      chest_tightness: {
        present: true,
        weight: 45
      },

      dry_cough: {
        present: true,
        weight: 35
      },

      night_cough: {
        present: true,
        weight: 40
      },

      recurrent_breathing_problem: {
        present: true,
        weight: 35
      },

      fatigue: {
        present: true,
        weight: 15
      },

      cough_after_exercise: {
        present: true,
        weight: 25
      },

      seasonal_worsening: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      wheeze_on_auscultation: {
        present: true,
        weight: 70
      },

      rapid_breathing: {
        present: true,
        weight: 35
      },

      prolonged_expiration: {
        present: true,
        weight: 40
      },

      low_spo2: {
        present: true,
        weight: 50
      },

      accessory_muscle_use: {
        present: true,
        weight: 45
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      spirometry_abnormal: {
        present: true,
        weight: 90
      },

      peak_flow_low: {
        present: true,
        weight: 70
      },

      eosinophils_high: {
        present: true,
        weight: 35
      },

      allergy_test_positive: {
        present: true,
        weight: 40
      },

      chest_xray_normal: {
        present: true,
        weight: 10
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      severe_asthma_attack: {
        present: true,
        weight: 90
      },

      respiratory_failure: {
        present: true,
        weight: 100
      },

      recurrent_hospitalization: {
        present: true,
        weight: 60
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

      inability_to_speak: {
        present: true,
        weight: 90
      },

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      cyanosis: {
        present: true,
        weight: 100
      },

      unconsciousness: {
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

          "wheezing",

          "night_cough"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "breathing_difficulty",

          "chest_tightness"
        ],

        match: "all",

        bonus: 30
      },

      {

        symptoms: [

          "cough_after_exercise"
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

          "blood_in_sputum"
        ],

        match: "all",

        penalty: 30
      },

      {

        symptoms: [

          "weight_loss",

          "night_sweats"
        ],

        match: "all",

        penalty: 25
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      wheezing: 20,

      night_cough: 15,

      chest_tightness: 15
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        max_age: 18,

        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "spo2_below_90",

      "cyanosis",

      "unconsciousness",

      "inability_to_speak"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Salbutamol",

      "Budesonide",

      "Montelukast",

      "Steroid"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Nebulization",

      "Inhaler Therapy",

      "Oxygen Therapy"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid dust",

      "Avoid smoking",

      "Use inhaler properly",

      "Avoid allergens"
    ]
  }
];