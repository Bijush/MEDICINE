// ==============================
// DENGUE DATASET
// ==============================

export const DENGUE = [

  {
    id: "DEN001",

    disease: "Dengue Fever",

    category: "fever",

    severity: "severe",

    causes: {

      mosquito_bite: {
        present: true,
        weight: 35
      },

      dengue_outbreak_area: {
        present: true,
        weight: 25
      },

      rainy_season_exposure: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      high_fever: {
        present: true,
        weight: 40
      },

      sudden_fever: {
        present: true,
        weight: 30
      },

      severe_headache: {
        present: true,
        weight: 25
      },

      pain_behind_eyes: {
        present: true,
        weight: 35
      },

      body_ache: {
        present: true,
        weight: 30
      },

      muscle_pain: {
        present: true,
        weight: 30
      },

      joint_pain: {
        present: true,
        weight: 30
      },

      nausea: {
        present: true,
        weight: 15
      },

      vomiting: {
        present: true,
        weight: 15
      },

      skin_rash: {
        present: true,
        weight: 25
      },

      fatigue: {
        present: true,
        weight: 20
      },

      abdominal_pain: {
        present: true,
        weight: 20
      }
    },

    physical_exam: {

      dehydration: {
        present: true,
        weight: 20
      },

      low_blood_pressure: {
        present: true,
        weight: 30
      },

      petechiae: {
        present: true,
        weight: 35
      }
    },

    tests: {

      dengue_nsg1_positive: {
        present: true,
        weight: 90
      },

      dengue_igg_positive: {
        present: true,
        weight: 40
      },

      dengue_igm_positive: {
        present: true,
        weight: 70
      },

      platelet_low: {
        present: true,
        weight: 60
      },

      hematocrit_high: {
        present: true,
        weight: 35
      },

      wbc_low: {
        present: true,
        weight: 30
      }
    },

    complications: {

      dengue_hemorrhagic_fever: {
        present: true,
        weight: 80
      },

      dengue_shock_syndrome: {
        present: true,
        weight: 100
      },

      severe_bleeding: {
        present: true,
        weight: 70
      },

      liver_injury: {
        present: true,
        weight: 40
      }
    },

    red_flags: {

      severe_abdominal_pain: {
        present: true,
        weight: 70
      },

      persistent_vomiting: {
        present: true,
        weight: 60
      },

      bleeding_gums: {
        present: true,
        weight: 70
      },

      blood_in_vomit: {
        present: true,
        weight: 90
      },

      black_stool: {
        present: true,
        weight: 90
      },

      shock: {
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
      "IV Fluids"
    ],

    treatments: [
      "Platelet Monitoring",
      "Hydration Therapy",
      "Hospital Observation"
    ],

    lifestyle_changes: [
      "Avoid mosquito exposure",
      "Drink plenty of fluids",
      "Avoid NSAIDs",
      "Immediate hospital visit if bleeding occurs"
    ]
  }
];