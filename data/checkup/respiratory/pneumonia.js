// ==============================
// PNEUMONIA DATASET
// ==============================

export const PNEUMONIA = [

  {
    id: "PNE001",

    disease: "Pneumonia",

    category: "respiratory",

    severity: "critical",

    causes: {

      bacterial_infection: {
        present: true,
        weight: 40
      },

      viral_infection: {
        present: true,
        weight: 30
      },

      smoking: {
        present: true,
        weight: 20
      },

      low_immunity: {
        present: true,
        weight: 30
      },

      elderly_age: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      high_fever: {
        present: true,
        weight: 40
      },

      cough: {
        present: true,
        weight: 40
      },

      wet_cough: {
        present: true,
        weight: 45
      },

      sputum: {
        present: true,
        weight: 35
      },

      yellow_sputum: {
        present: true,
        weight: 35
      },

      blood_in_sputum: {
        present: true,
        weight: 50
      },

      chest_pain: {
        present: true,
        weight: 35
      },

      breathing_difficulty: {
        present: true,
        weight: 50
      },

      chills: {
        present: true,
        weight: 30
      },

      fatigue: {
        present: true,
        weight: 20
      },

      weakness: {
        present: true,
        weight: 20
      },
      pleuritic_chest_pain: {
  present: true,
  weight: 40
}
    },

    physical_exam: {

      lung_crackles: {
        present: true,
        weight: 60
      },

      rapid_breathing: {
        present: true,
        weight: 40
      },

      low_spo2: {
        present: true,
        weight: 70
      },

      fever_present: {
        present: true,
        weight: 20
      }
    },

    tests: {

      chest_xray_infiltrate: {
        present: true,
        weight: 90
      },

      ct_lung_infection: {
        present: true,
        weight: 85
      },

      wbc_high: {
        present: true,
        weight: 35
      },

      crp_high: {
        present: true,
        weight: 30
      },

      procalcitonin_high: {
        present: true,
        weight: 35
      }
    },

    complications: {

      respiratory_failure: {
        present: true,
        weight: 100
      },

      sepsis: {
        present: true,
        weight: 90
      },

      pleural_effusion: {
        present: true,
        weight: 60
      },

      lung_abscess: {
        present: true,
        weight: 70
      }
    },

    red_flags: {

      spo2_below_90: {
        present: true,
        weight: 100
      },

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      chest_pressure: {
        present: true,
        weight: 70
      },

      unconsciousness: {
        present: true,
        weight: 100
      },

      cyanosis: {
        present: true,
        weight: 100
      },
      
      shock: {
  present: true,
  weight: 100
}
    },

    medicines: [
      "Azithromycin",
      "Ceftriaxone",
      "Paracetamol",
      "Oxygen"
    ],

    treatments: [
      "Antibiotic Therapy",
      "Oxygen Therapy",
      "Hospital Admission"
    ],

    lifestyle_changes: [
      "Avoid smoking",
      "Hydration",
      "Rest properly",
      "Monitor SPO2"
    ]
  }
];