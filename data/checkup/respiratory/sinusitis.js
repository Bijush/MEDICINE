// ==============================
// SINUSITIS DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const SINUSITIS = [

  {

    id: "SIN001",

    disease: "Sinusitis",

    aliases: [

      "sinus infection"
    ],

    category: "respiratory",

    tags: [

      "sinus",

      "nose",

      "headache",

      "infection"
    ],

    prevalence: "common",

    severity: "mild",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      viral_infection: {
        present: true,
        weight: 30
      },

      allergy_history: {
        present: true,
        weight: 25
      },

      dust_exposure: {
        present: true,
        weight: 20
      },

      nasal_polyp: {
        present: true,
        weight: 15
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

      recurrent_cold: {
        present: true,
        weight: 20
      },

      smoking: {
        present: true,
        weight: 15
      },

      deviated_nasal_septum: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      facial_pain: {
        present: true,
        weight: 50
      },

      sinus_pressure: {
        present: true,
        weight: 60
      },

      headache: {
        present: true,
        weight: 35
      },

      nasal_congestion: {
        present: true,
        weight: 45
      },

      runny_nose: {

  present: true,

  weight: 35,

  aliases: [

    "nasal_discharge",
    "watery_nose"

  ]
},

      thick_nasal_mucus: {
        present: true,
        weight: 40
      },

      post_nasal_drip: {
        present: true,
        weight: 35
      },

      sore_throat: {
        present: true,
        weight: 20
      },

      fever: {
        present: true,
        weight: 15
      },

      cough: {
        present: true,
        weight: 20
      },

      bad_breath: {
        present: true,
        weight: 20
      },

      reduced_smell: {

  present: true,

  weight: 20,

  aliases: [

    "loss_of_smell",
    "decreased_smell"

  ]
}
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      sinus_tenderness: {
        present: true,
        weight: 60
      },

      nasal_swelling: {
        present: true,
        weight: 40
      },

      throat_redness: {
        present: true,
        weight: 20
      },

      nasal_discharge_visible: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      xray_sinus_opacity: {
        present: true,
        weight: 60
      },

      ct_sinus_inflammation: {
        present: true,
        weight: 80
      },

      nasal_endoscopy_positive: {
        present: true,
        weight: 70
      },

      wbc_high: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      chronic_sinusitis: {
        present: true,
        weight: 50
      },

      ear_infection: {
        present: true,
        weight: 30
      },

      orbital_infection: {
        present: true,
        weight: 80
      },

      meningitis: {
        present: true,
        weight: 60
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      swelling_around_eye: {
        present: true,
        weight: 90
      },

      severe_headache: {
        present: true,
        weight: 70
      },

      vision_problem: {
        present: true,
        weight: 90
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

          "facial_pain",

          "sinus_pressure",

          "nasal_congestion"
        ],

        match: "all",

        bonus: 40
      },

      {

        symptoms: [

          "thick_nasal_mucus",

          "post_nasal_drip"
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

          "severe_breathlessness"
        ],

        match: "all",

        penalty: 30
      },

      {

        symptoms: [

          "chest_pain"
        ],

        match: "all",

        penalty: 20
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      sinus_pressure: 15,

      facial_pain: 15,

      nasal_congestion: 10
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 10,

        bonus: 10
      },

      {

        min_days: 30,

        bonus: 20
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "swelling_around_eye",

      "vision_problem",

      "unconsciousness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Cetirizine",

      "Paracetamol",

      "Amoxicillin",

      "Nasal Spray"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Steam Inhalation",

      "Nasal Irrigation",

      "Hydration"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid dust",

      "Avoid allergens",

      "Use steam",

      "Drink warm fluids"
    ]
  }
];