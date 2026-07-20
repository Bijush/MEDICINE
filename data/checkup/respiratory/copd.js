// ==============================
// COPD DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const COPD = [

  {

    id: "COPD001",

    disease:
      "Chronic Obstructive Pulmonary Disease",

    short_name: "COPD",

    aliases: [

      "chronic bronchitis",

      "emphysema"
    ],

    category: "respiratory",

    tags: [

      "smoking",

      "lungs",

      "breathing",

      "copd"
    ],

    prevalence: "common",

    severity: "severe",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      long_term_smoking: {
        present: true,
        weight: 60
      },

      pollution_exposure: {
        present: true,
        weight: 25
      },

      dust_exposure: {
        present: true,
        weight: 20
      },

      old_age: {
        present: true,
        weight: 20
      },

      chronic_lung_irritation: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      smoking: {
        present: true,
        weight: 35
      },

      passive_smoking: {
        present: true,
        weight: 20
      },

      occupational_dust_exposure: {
        present: true,
        weight: 20
      },

      asthma_history: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      chronic_cough: {
        present: true,
        weight: 50
      },

      sputum: {
        present: true,
        weight: 40
      },

      breathing_difficulty: {

  present: true,

  weight: 60,

  aliases: [

    "shortness_of_breath",
    "breathlessness",
    "difficulty_breathing",
    "chronic_shortness_of_breath"

  ]
},

      wheezing: {
        present: true,
        weight: 45
      },

      chest_tightness: {
        present: true,
        weight: 30
      },

      fatigue: {
        present: true,
        weight: 25
      },

      exercise_intolerance: {
        present: true,
        weight: 40
      },

      recurrent_chest_infection: {
        present: true,
        weight: 45
      },

      weight_loss: {
        present: true,
        weight: 25
      },

     
      morning_cough: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      wheeze_on_auscultation: {
        present: true,
        weight: 60
      },

      barrel_chest: {
        present: true,
        weight: 70
      },

      low_spo2: {
        present: true,
        weight: 70
      },

      cyanosis: {
        present: true,
        weight: 80
      },

      prolonged_expiration: {
        present: true,
        weight: 45
      },

      accessory_muscle_use: {
        present: true,
        weight: 40
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      spirometry_obstructive_pattern: {
        present: true,
        weight: 100
      },

      chest_xray_hyperinflation: {
        present: true,
        weight: 70
      },

      abg_abnormal: {
        present: true,
        weight: 60
      },

      ct_emphysema: {
        present: true,
        weight: 80
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

      pulmonary_hypertension: {
        present: true,
        weight: 70
      },

      recurrent_pneumonia: {
        present: true,
        weight: 60
      },

      heart_failure: {
        present: true,
        weight: 80
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
        weight: 95
      },

      cyanosis: {
        present: true,
        weight: 100
      },

      confusion: {
        present: true,
        weight: 80
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

          "chronic_cough",

          "sputum"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "breathing_difficulty",

          "exercise_intolerance"
        ],

        match: "all",

        bonus: 30
      },

      {

        symptoms: [

          "barrel_chest"
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

          "loss_of_smell"
        ],

        match: "all",

        penalty: 20
      },

      {

        symptoms: [

          "sudden_fever"
        ],

        match: "all",

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      chronic_cough: 15,

      wheezing: 15,

      exercise_intolerance: 20
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        min_age: 45,

        bonus: 15
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

      "spo2_below_90",

      "cyanosis",

      "unconsciousness",

      "severe_breathlessness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Salbutamol",

      "Tiotropium",

      "Budesonide",

      "Oxygen"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Nebulization",

      "Pulmonary Rehabilitation",

      "Oxygen Therapy"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Stop smoking immediately",

      "Avoid pollution",

      "Breathing exercise",

      "Vaccination"
    ]
  }
];