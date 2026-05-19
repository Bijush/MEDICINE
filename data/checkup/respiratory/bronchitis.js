// ==============================
// BRONCHITIS DATASET
// ==============================

export const BRONCHITIS = [

  {
    id: "BRO001",

    disease: "Bronchitis",

    category: "respiratory",

    severity: "moderate",

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

    symptoms: {

      cough: {
        present: true,
        weight: 50
      },

      wet_cough: {
        present: true,
        weight: 45
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
      }
    },

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
      }
    },

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

    medicines: [
      "Azithromycin",
      "Salbutamol",
      "Cough Syrup",
      "Paracetamol"
    ],

    treatments: [
      "Steam Inhalation",
      "Nebulization",
      "Hydration"
    ],

    lifestyle_changes: [
      "Avoid smoking",
      "Avoid dust",
      "Drink warm fluids",
      "Proper rest"
    ]
  }
];