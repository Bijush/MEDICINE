// ==============================
// COMMON COLD DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const COMMON_COLD = [

  {

    id: "CC001",

    disease: "Common Cold",

    aliases: [

      "cold",

      "viral cold"
    ],

    category: "respiratory",

    tags: [

      "cold",

      "viral",

      "sneezing",

      "runny nose"
    ],

    prevalence: "very_common",

    severity: "mild",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      viral_infection: {
        present: true,
        weight: 40
      },

      infected_person_contact: {
        present: true,
        weight: 25
      },

      cold_weather_exposure: {
        present: true,
        weight: 15
      },

      low_immunity: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      seasonal_change: {
        present: true,
        weight: 15
      },

      school_exposure: {
        present: true,
        weight: 15
      },

      crowded_area_exposure: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      sneezing: {
        present: true,
        weight: 45
      },

      runny_nose: {

  present: true,

  weight: 50,

  aliases: [

    "nasal_discharge",
    "watery_nose"

  ]
},

      nasal_congestion: {
        present: true,
        weight: 40
      },

      sore_throat: {
        present: true,
        weight: 35
      },

      mild_cough: {

  present: true,

  weight: 25,

  aliases: [

    "cough"
  ]
},

      mild_fever: {
        present: true,
        weight: 20
      },

      headache: {
        present: true,
        weight: 20
      },

      watery_eyes: {
        present: true,
        weight: 20
      },

      fatigue: {
        present: true,
        weight: 15
      },

      body_ache: {
        present: true,
        weight: 15
      },

      post_nasal_drip: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      throat_redness: {
        present: true,
        weight: 20
      },

      nasal_swelling: {
        present: true,
        weight: 20
      },

      mild_fever_present: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      cbc_viral_pattern: {
        present: true,
        weight: 25
      },

      covid_negative: {
        present: true,
        weight: 25
      },

      influenza_negative: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      sinusitis: {
        present: true,
        weight: 30
      },

      ear_infection: {
        present: true,
        weight: 25
      },

      bronchitis: {
        present: true,
        weight: 40
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      high_fever: {
        present: true,
        weight: 20
      },

      severe_breathlessness: {
        present: false,
        weight: -40
      },

      chest_pain: {
        present: true,
        weight: 15
      },

      spo2_below_90: {
        present: true,
        weight: 5
      },

      unconsciousness: {
        present: true,
        weight: 5
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "sneezing",

          "runny_nose"
        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "nasal_congestion",

          "sore_throat"
        ],

        match: "all",

        bonus: 25
      },

      {

        symptoms: [

          "watery_eyes"
        ],

        match: "all",

        bonus: 10
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

        penalty: 25
      },

      {

        symptoms: [

          "blood_in_sputum"
        ],

        match: "all",

        penalty: 30
      },

      {

        symptoms: [

          "severe_breathlessness"
        ],

        match: "all",

        penalty: 40
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      sneezing: 15,

      runny_nose: 15,

      nasal_congestion: 10
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 10,

        penalty: 15
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "spo2_below_90",

      "unconsciousness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Paracetamol",

      "Cetirizine",

      "Cough Syrup",

      "Vitamin C"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Steam Inhalation",

      "Rest",

      "Hydration"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Drink warm fluids",

      "Proper rest",

      "Avoid cold exposure",

      "Hand hygiene"
    ]
  }
];