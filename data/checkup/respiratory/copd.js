// ==============================
// COPD DATASET
// ==============================

export const COPD = [

  {
    id: "COPD001",

    disease: "Chronic Obstructive Pulmonary Disease",

    short_name: "COPD",

    category: "respiratory",

    severity: "severe",

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
        weight: 60
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
      }
    },

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
      }
    },

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

    medicines: [
      "Salbutamol",
      "Tiotropium",
      "Budesonide",
      "Oxygen"
    ],

    treatments: [
      "Nebulization",
      "Pulmonary Rehabilitation",
      "Oxygen Therapy"
    ],

    lifestyle_changes: [
      "Stop smoking immediately",
      "Avoid pollution",
      "Breathing exercise",
      "Vaccination"
    ]
  }
];