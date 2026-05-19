// ==============================
// VIRAL FEVER DATASET
// ==============================

export const VIRAL_FEVER = [

  {
    id: "VF001",

    disease: "Viral Fever",

    category: "fever",

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

      seasonal_change: {
        present: true,
        weight: 15
      },

      low_immunity: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      fever: {
        present: true,
        weight: 40
      },

      mild_to_moderate_fever: {
        present: true,
        weight: 25
      },

      body_ache: {
        present: true,
        weight: 30
      },

      muscle_pain: {
        present: true,
        weight: 25
      },

      headache: {
        present: true,
        weight: 20
      },

      fatigue: {
        present: true,
        weight: 25
      },

      weakness: {
        present: true,
        weight: 20
      },

      sore_throat: {
        present: true,
        weight: 20
      },

      runny_nose: {
        present: true,
        weight: 20
      },

      dry_cough: {
        present: true,
        weight: 20
      },

      sneezing: {
        present: true,
        weight: 15
      },

      chills: {
        present: true,
        weight: 15
      },

     loss_of_smell: {
  present: false,
  weight: -40
},

bleeding_gums: {
  present: false,
  weight: -50
},
      loss_of_appetite: {
        present: true,
        weight: 10
      }
    },

    physical_exam: {

      throat_redness: {
        present: true,
        weight: 15
      },

      mild_dehydration: {
        present: true,
        weight: 15
      },

      fever_present: {
        present: true,
        weight: 20
      }
    },

    tests: {

      cbc_viral_pattern: {
        present: true,
        weight: 35
      },

      lymphocytes_high: {
        present: true,
        weight: 25
      },

      crp_mildly_high: {
        present: true,
        weight: 15
      },

      dengue_negative: {
        present: true,
        weight: 20
      },

      malaria_negative: {
        present: true,
        weight: 20
      },

      typhoid_negative: {
        present: true,
        weight: 20
      }
    },

    complications: {

      dehydration: {
        present: true,
        weight: 25
      },

      viral_pneumonia: {
        present: true,
        weight: 40
      },

      weakness_persistence: {
        present: true,
        weight: 20
      }
    },

    red_flags: {

      high_fever_more_than_5_days: {
        present: true,
        weight: 60
      },

      severe_breathlessness: {
        present: true,
        weight: 80
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
      "Paracetamol",
      "ORS",
      "Vitamin C",
      "Antihistamine"
    ],

    treatments: [
      "Rest",
      "Hydration",
      "Symptomatic Care"
    ],

    lifestyle_changes: [
      "Drink fluids",
      "Proper rest",
      "Light food",
      "Monitor temperature"
    ]
  }
];