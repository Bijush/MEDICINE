// ==============================
// INFLUENZA DATASET
// ==============================

export const INFLUENZA = [

  {
    id: "INF001",

    disease: "Influenza",

    medical_name: "Flu",

    category: "fever",

    severity: "moderate",

    causes: {

      infected_person_contact: {
        present: true,
        weight: 35
      },

      seasonal_outbreak: {
        present: true,
        weight: 25
      },

      crowded_area_exposure: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      sudden_fever: {
        present: true,
        weight: 40
      },

      chills: {
        present: true,
        weight: 30
      },

      dry_cough: {
        present: true,
        weight: 35
      },

      sore_throat: {
        present: true,
        weight: 30
      },

      runny_nose: {
        present: true,
        weight: 25
      },

      nasal_congestion: {
        present: true,
        weight: 20
      },

      headache: {
        present: true,
        weight: 25
      },

      body_ache: {
        present: true,
        weight: 35
      },

      muscle_pain: {
        present: true,
        weight: 30
      },

      fatigue: {
        present: true,
        weight: 30
      },

      weakness: {
        present: true,
        weight: 20
      },

      watery_eyes: {
        present: true,
        weight: 10
      }
    },

    physical_exam: {

      throat_redness: {
        present: true,
        weight: 20
      },

      fever_present: {
        present: true,
        weight: 20
      },

      rapid_pulse: {
        present: true,
        weight: 15
      }
    },

    tests: {

      influenza_positive: {
        present: true,
        weight: 100
      },

      rapid_flu_test_positive: {
        present: true,
        weight: 90
      },

      cbc_viral_pattern: {
        present: true,
        weight: 20
      }
    },

    complications: {

      influenza_pneumonia: {
        present: true,
        weight: 70
      },

      sinus_infection: {
        present: true,
        weight: 30
      },

      dehydration: {
        present: true,
        weight: 30
      },

      respiratory_failure: {
        present: true,
        weight: 50
      }
    },

    red_flags: {

      severe_breathlessness: {
        present: true,
        weight: 80
      },

      chest_pain: {
        present: true,
        weight: 60
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
      "Oseltamivir",
      "Paracetamol",
      "ORS",
      "Cough Syrup"
    ],

    treatments: [
      "Rest",
      "Hydration",
      "Symptomatic Treatment"
    ],

    lifestyle_changes: [
      "Wear mask",
      "Drink fluids",
      "Rest properly",
      "Avoid crowded places"
    ]
  }
];