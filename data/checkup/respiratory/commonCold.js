// ==============================
// COMMON COLD DATASET
// ==============================

export const COMMON_COLD = [

  {
    id: "CC001",

    disease: "Common Cold",

    category: "respiratory",

    severity: "mild",

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

    symptoms: {

      sneezing: {
        present: true,
        weight: 45
      },

      runny_nose: {
        present: true,
        weight: 50
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
        weight: 25
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
      }
    },

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
    // Reduced weights to avoid
    // false severe classification
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

    medicines: [
      "Paracetamol",
      "Cetirizine",
      "Cough Syrup",
      "Vitamin C"
    ],

    treatments: [
      "Steam Inhalation",
      "Rest",
      "Hydration"
    ],

    lifestyle_changes: [
      "Drink warm fluids",
      "Proper rest",
      "Avoid cold exposure",
      "Hand hygiene"
    ]
  }
];