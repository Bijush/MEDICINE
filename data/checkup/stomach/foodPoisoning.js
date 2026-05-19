// ==============================
// FOOD POISONING DATASET
// ==============================

export const FOOD_POISONING = [

  {
    id: "FP001",

    disease: "Food Poisoning",

    category: "stomach",

    severity: "moderate",

    causes: {

      contaminated_food: {
        present: true,
        weight: 40
      },

      stale_food: {
        present: true,
        weight: 30
      },

      unhygienic_food_handling: {
        present: true,
        weight: 25
      },

      outside_food_recently: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      vomiting: {
        present: true,
        weight: 35
      },

      diarrhea: {
        present: true,
        weight: 35
      },

      nausea: {
        present: true,
        weight: 25
      },

      abdominal_pain: {
        present: true,
        weight: 25
      },

      stomach_cramp: {
        present: true,
        weight: 25
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
      }
    },

    physical_exam: {

      dry_mouth: {
        present: true,
        weight: 20
      },

      low_blood_pressure: {
        present: true,
        weight: 30
      },

      rapid_pulse: {
        present: true,
        weight: 20
      }
    },

    tests: {

      stool_culture_positive: {
        present: true,
        weight: 50
      },

      electrolyte_imbalance: {
        present: true,
        weight: 30
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

      septicemia: {
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
        weight: 45
      },

      unconsciousness: {
        present: true,
        weight: 80
      },

      shock: {
        present: true,
        weight: 90
      }
    },

    medicines: [
      "ORS",
      "Ondansetron",
      "Metronidazole",
      "Probiotic"
    ],

    lifestyle_changes: [
      "Avoid stale food",
      "Drink clean water",
      "Maintain food hygiene",
      "Avoid contaminated food"
    ]
  }
];