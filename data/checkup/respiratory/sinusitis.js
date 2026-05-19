// ==============================
// SINUSITIS DATASET
// ==============================

export const SINUSITIS = [

  {
    id: "SIN001",

    disease: "Sinusitis",

    category: "respiratory",

    severity: "mild",

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
        weight: 35
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
      }
    },

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
      }
    },

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

    medicines: [
      "Cetirizine",
      "Paracetamol",
      "Amoxicillin",
      "Nasal Spray"
    ],

    treatments: [
      "Steam Inhalation",
      "Nasal Irrigation",
      "Hydration"
    ],

    lifestyle_changes: [
      "Avoid dust",
      "Avoid allergens",
      "Use steam",
      "Drink warm fluids"
    ]
  }
];