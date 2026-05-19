// ==============================
// PANCREATITIS DATASET
// ==============================

export const PANCREATITIS = [

  {
    id: "PAN001",

    disease: "Acute Pancreatitis",

    category: "stomach",

    severity: "severe",

    causes: {

      alcohol_use: {
        present: true,
        weight: 30
      },

      gallstones: {
        present: true,
        weight: 35
      },

      high_triglyceride: {
        present: true,
        weight: 20
      },

      pancreatic_infection: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      severe_upper_abdominal_pain: {
        present: true,
        weight: 50
      },

      pain_radiating_to_back: {
        present: true,
        weight: 45
      },

      vomiting: {
        present: true,
        weight: 25
      },

      nausea: {
        present: true,
        weight: 20
      },

      fever: {
        present: true,
        weight: 15
      },

      abdominal_bloating: {
        present: true,
        weight: 20
      },

      loss_of_appetite: {
        present: true,
        weight: 15
      },
      pain_after_food: {
  present: true,
  weight: 25
}
    },

    physical_exam: {

      abdominal_tenderness: {
        present: true,
        weight: 30
      },

      guarding: {
        present: true,
        weight: 25
      },

      dehydration: {
        present: true,
        weight: 20
      },

      rapid_pulse: {
        present: true,
        weight: 20
      }
    },

    tests: {

      lipase_high: {
        present: true,
        weight: 70
      },

      amylase_high: {
        present: true,
        weight: 60
      },

      ct_pancreatitis_positive: {
        present: true,
        weight: 80
      },

      ultrasound_gallstones: {
        present: true,
        weight: 25
      },

      wbc_high: {
        present: true,
        weight: 20
      }
    },

    complications: {

      pancreatic_necrosis: {
        present: true,
        weight: 70
      },

      sepsis: {
        present: true,
        weight: 60
      },

      kidney_failure: {
        present: true,
        weight: 50
      },

      respiratory_failure: {
        present: true,
        weight: 60
      }
    },

    red_flags: {

      severe_abdominal_pain: {
        present: true,
        weight: 60
      },

      low_blood_pressure: {
        present: true,
        weight: 50
      },

      shock: {
        present: true,
        weight: 90
      },

      unconsciousness: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "IV Fluids",
      "Painkiller",
      "Ondansetron",
      "Antibiotics"
    ],

    treatments: [
      "Hospital Admission",
      "Pancreatic Monitoring",
      "ICU Support"
    ],

    lifestyle_changes: [
      "Avoid alcohol",
      "Low-fat diet",
      "Hydration maintenance"
    ]
  }
];