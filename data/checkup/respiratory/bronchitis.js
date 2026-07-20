// ==============================
// BRONCHITIS DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const BRONCHITIS = [

  {

    id: "BRO001",

    disease: "Bronchitis",

    aliases: [

      "acute bronchitis",

      "chest infection"
    ],

    category: "respiratory",

    tags: [

      "cough",

      "sputum",

      "lungs",

      "airway"
    ],

    prevalence: "common",

    severity: "moderate",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      viral_infection: {
        present: true,
        weight: 35
      },

      smoking: {
        present: true,
        weight: 30
      },

      dust_exposure: {
        present: true,
        weight: 20
      },

      pollution_exposure: {
        present: true,
        weight: 20
      },

      cold_weather_exposure: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      chronic_smoking: {
        present: true,
        weight: 25
      },

      weak_immunity: {
        present: true,
        weight: 15
      },

      asthma_history: {
        present: true,
        weight: 20
      },

      copd_history: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      cough: {

  present: true,

  weight: 50,

  aliases: [

    "wet_cough",
    "productive_cough",
    "mucus_cough"

  ]
},
      sputum: {
        present: true,
        weight: 40
      },

      yellow_sputum: {
        present: true,
        weight: 30
      },

      mild_fever: {
        present: true,
        weight: 20
      },

      chest_discomfort: {
        present: true,
        weight: 25
      },

      wheezing: {
        present: true,
        weight: 35
      },

      sore_throat: {
        present: true,
        weight: 20
      },

      fatigue: {
        present: true,
        weight: 20
      },

      breathing_difficulty: {
        present: true,
        weight: 35
      },

      chest_congestion: {
        present: true,
        weight: 30
      },

      cough_more_than_1_week: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      wheeze_on_auscultation: {
        present: true,
        weight: 50
      },

      ronchi_sound: {
        present: true,
        weight: 60
      },

      mild_low_spo2: {
        present: true,
        weight: 30
      },

      rapid_breathing: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      chest_xray_bronchial_thickening: {
        present: true,
        weight: 60
      },

      sputum_infection_positive: {
        present: true,
        weight: 40
      },

      crp_high: {
        present: true,
        weight: 20
      },

      wbc_high: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      pneumonia: {
        present: true,
        weight: 70
      },

      chronic_bronchitis: {
        present: true,
        weight: 60
      },

      respiratory_failure: {
        present: true,
        weight: 50
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      blood_in_sputum: {
        present: true,
        weight: 70
      },

      spo2_below_90: {
        present: true,
        weight: 100
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

          "wet_cough",

          "yellow_sputum"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "wheezing",

          "chest_congestion"
        ],

        match: "all",

        bonus: 25
      },

      {

        symptoms: [

          "cough_more_than_1_week"
        ],

        match: "all",

        bonus: 15
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

          "night_sweats",

          "weight_loss"
        ],

        match: "all",

        penalty: 30
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      wet_cough: 15,

      yellow_sputum: 15,

      wheezing: 10
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 5,

        bonus: 10
      },

      {

        min_days: 21,

        penalty: 15
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

      "Azithromycin",

      "Salbutamol",

      "Cough Syrup",

      "Paracetamol"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Steam Inhalation",

      "Nebulization",

      "Hydration"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid smoking",

      "Avoid dust",

      "Drink warm fluids",

      "Proper rest"
    ]
  }
];