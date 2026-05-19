// ==============================
// ASTHMA DATASET
// ==============================

export const ASTHMA = [

  {
    id: "AST001",

    disease: "Asthma",

    category: "respiratory",

    severity: "moderate",

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

    symptoms: {

      wheezing: {
        present: true,
        weight: 60
      },

      breathing_difficulty: {
        present: true,
        weight: 50
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
      }
    },

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
      }
    },

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

    medicines: [
      "Salbutamol",
      "Budesonide",
      "Montelukast",
      "Steroid"
    ],

    treatments: [
      "Nebulization",
      "Inhaler Therapy",
      "Oxygen Therapy"
    ],

    lifestyle_changes: [
      "Avoid dust",
      "Avoid smoking",
      "Use inhaler properly",
      "Avoid allergens"
    ]
  }
];