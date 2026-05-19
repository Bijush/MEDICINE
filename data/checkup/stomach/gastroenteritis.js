// ==============================
// ACUTE GASTROENTERITIS DATASET
// ==============================

export const GASTROENTERITIS = [

  {
    id: "GE001",

    disease: "Acute Gastroenteritis",

    category: "stomach",

    severity: "moderate",

    causes: {

      viral_infection: {
        present: true,
        weight: 25
      },

      bacterial_infection: {
        present: true,
        weight: 25
      },

      contaminated_food: {
        present: true,
        weight: 20
      },

      contaminated_water: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      diarrhea: {
        present: true,
        weight: 35
      },

      vomiting: {
        present: true,
        weight: 25
      },

      nausea: {
        present: true,
        weight: 20
      },

      abdominal_cramp: {
        present: true,
        weight: 25
      },

      stomach_pain: {
        present: true,
        weight: 20
      },

      fever: {
        present: true,
        weight: 15
      },

      weakness: {
        present: true,
        weight: 15
      },

      dehydration: {
        present: true,
        weight: 30
      },

      loss_of_appetite: {
        present: true,
        weight: 10
      }
    },

    physical_exam: {

      dry_mouth: {
        present: true,
        weight: 20
      },

      sunken_eyes: {
        present: true,
        weight: 25
      },

      low_blood_pressure: {
        present: true,
        weight: 30
      }
    },

    tests: {

      stool_infection_positive: {
        present: true,
        weight: 50
      },

      electrolyte_imbalance: {
        present: true,
        weight: 35
      },

      wbc_high: {
        present: true,
        weight: 20
      }
    },

    complications: {

      severe_dehydration: {
        present: true,
        weight: 50
      },

      kidney_injury: {
        present: true,
        weight: 40
      },

      shock: {
        present: true,
        weight: 60
      }
    },

    red_flags: {

      bloody_diarrhea: {
        present: true,
        weight: 50
      },

      persistent_vomiting: {
        present: true,
        weight: 40
      },

      unconsciousness: {
        present: true,
        weight: 80
      },

      severe_dehydration: {
        present: true,
        weight: 70
      }
    },

    medicines: [
      "ORS",
      "Ondansetron",
      "Probiotic",
      "Zinc"
    ],

    lifestyle_changes: [
      "Drink safe water",
      "Maintain hygiene",
      "Avoid outside food",
      "Drink oral fluids"
    ]
  }
];