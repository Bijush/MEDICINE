// ==============================
// COVID-19 DATASET
// ==============================

export const COVID = [

  {
    id: "COV001",

    disease: "COVID-19",

    category: "fever",

    severity: "severe",

    causes: {

      infected_person_contact: {
        present: true,
        weight: 40
      },

      crowded_area_exposure: {
        present: true,
        weight: 20
      },

      travel_history: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      fever: {
        present: true,
        weight: 35
      },

      dry_cough: {
        present: true,
        weight: 40
      },

      sore_throat: {
        present: true,
        weight: 20
      },

      breathing_difficulty: {
        present: true,
        weight: 45
      },

      body_ache: {
        present: true,
        weight: 20
      },

      fatigue: {
        present: true,
        weight: 25
      },

      headache: {
        present: true,
        weight: 15
      },

      loss_of_smell: {
        present: true,
        weight: 60
      },

      loss_of_taste: {
        present: true,
        weight: 60
      },

      diarrhea: {
        present: true,
        weight: 15
      },

      chest_pain: {
        present: true,
        weight: 25
      }
    },

    physical_exam: {

      spo2_low: {
        present: true,
        weight: 60
      },

      lung_crackles: {
        present: true,
        weight: 35
      },

      rapid_breathing: {
        present: true,
        weight: 35
      }
    },

    tests: {

      covid_positive: {
        present: true,
        weight: 100
      },

      rt_pcr_positive: {
        present: true,
        weight: 100
      },

      crp_high: {
        present: true,
        weight: 25
      },

      d_dimer_high: {
        present: true,
        weight: 30
      },

      ct_ground_glass_opacity: {
        present: true,
        weight: 70
      }
    },

    complications: {

      covid_pneumonia: {
        present: true,
        weight: 70
      },

      respiratory_failure: {
        present: true,
        weight: 90
      },

      blood_clot: {
        present: true,
        weight: 70
      },

      sepsis: {
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
      }
    },

    medicines: [
      "Paracetamol",
      "ORS",
      "Oxygen",
      "Antiviral"
    ],

    treatments: [
      "Isolation",
      "Oxygen Therapy",
      "Hospital Monitoring"
    ],

    lifestyle_changes: [
      "Wear mask",
      "Isolation",
      "Hydration",
      "Monitor SPO2"
    ]
  }
];