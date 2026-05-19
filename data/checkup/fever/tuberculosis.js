// ==============================
// TUBERCULOSIS DATASET
// ==============================

export const TUBERCULOSIS = [

  {
    id: "TB001",

    disease: "Tuberculosis",

    medical_name: "Pulmonary Tuberculosis",

    category: "fever",

    severity: "severe",

    causes: {

      infected_person_contact: {
        present: true,
        weight: 40
      },

      poor_nutrition: {
        present: true,
        weight: 15
      },

      smoking: {
        present: true,
        weight: 20
      },

      hiv_positive: {
        present: true,
        weight: 35
      },

      overcrowded_environment: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      prolonged_fever: {
        present: true,
        weight: 35
      },

      evening_fever: {
        present: true,
        weight: 40
      },

      night_sweats: {
        present: true,
        weight: 45
      },

      chronic_cough: {
        present: true,
        weight: 50
      },

      cough_more_than_2_weeks: {
        present: true,
        weight: 60
      },

      blood_in_sputum: {
        present: true,
        weight: 60
      },

      chest_pain: {
        present: true,
        weight: 25
      },

      breathing_difficulty: {
        present: true,
        weight: 25
      },

      fatigue: {
        present: true,
        weight: 25
      },

      weakness: {
        present: true,
        weight: 20
      },

      weight_loss: {
        present: true,
        weight: 45
      },

      appetite_loss: {
        present: true,
        weight: 25
      }
    },

    physical_exam: {

      lung_crackles: {
        present: true,
        weight: 35
      },

      enlarged_lymph_nodes: {
        present: true,
        weight: 25
      },

      pale: {
        present: true,
        weight: 20
      },

      low_spo2: {
        present: true,
        weight: 35
      }
    },

    tests: {

      tuberculosis_positive: {
        present: true,
        weight: 100
      },

      sputum_afb_positive: {
        present: true,
        weight: 100
      },

      mantoux_positive: {
        present: true,
        weight: 50
      },

      chest_xray_tb_pattern: {
        present: true,
        weight: 80
      },

      esr_high: {
        present: true,
        weight: 25
      }
    },

    complications: {

      respiratory_failure: {
        present: true,
        weight: 90
      },

      severe_weight_loss: {
        present: true,
        weight: 60
      },

      pleural_effusion: {
        present: true,
        weight: 60
      },

      tb_meningitis: {
        present: true,
        weight: 90
      },

      sepsis: {
        present: true,
        weight: 80
      }
    },

    red_flags: {

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      massive_blood_in_sputum: {
        present: true,
        weight: 100
      },

      spo2_below_90: {
        present: true,
        weight: 100
      },

      unconsciousness: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "Isoniazid",
      "Rifampicin",
      "Pyrazinamide",
      "Ethambutol"
    ],

    treatments: [
      "DOTS Therapy",
      "Long-term Antibiotic Treatment",
      "Respiratory Monitoring"
    ],

    lifestyle_changes: [
      "Complete full TB treatment",
      "Wear mask",
      "Avoid smoking",
      "Proper nutrition",
      "Isolation during infectious phase"
    ]
  }
];