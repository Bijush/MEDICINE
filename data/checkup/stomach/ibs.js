// ==============================
// IRRITABLE BOWEL SYNDROME
// ==============================

export const IBS = [

  {
    id: "IBS001",

    disease: "Irritable Bowel Syndrome",

    category: "stomach",

    severity: "moderate",

    causes: {

      stress: {
        present: true,
        weight: 25
      },

      anxiety: {
        present: true,
        weight: 20
      },

      irregular_food_habits: {
        present: true,
        weight: 15
      },

      low_fiber_diet: {
        present: true,
        weight: 10
      }
    },

    symptoms: {

      abdominal_pain: {
        present: true,
        weight: 35
      },

      abdominal_cramp: {
        present: true,
        weight: 25
      },

      bloating: {
        present: true,
        weight: 30
      },

      constipation: {
        present: true,
        weight: 25
      },

      diarrhea: {
        present: true,
        weight: 25
      },

      alternating_constipation_diarrhea: {
        present: true,
        weight: 40
      },

      excessive_gas: {
        present: true,
        weight: 20
      },

      mucus_in_stool: {
        present: true,
        weight: 20
      },

      relief_after_passing_stool: {
        present: true,
        weight: 35
      }
    },

    physical_exam: {

      mild_abdominal_tenderness: {
        present: true,
        weight: 10
      }
    },

    tests: {

      colonoscopy_normal: {
        present: true,
        weight: 25
      },

      cbc_normal: {
        present: true,
        weight: 15
      },

      stool_test_normal: {
        present: true,
        weight: 20
      }
    },

    complications: {

      dehydration: {
        present: true,
        weight: 15
      },

      anxiety_disorder: {
        present: true,
        weight: 20
      }
    },

    red_flags: {

      blood_in_stool: {
        present: true,
        weight: 25
      },

      severe_weight_loss: {
        present: true,
        weight: 50
      },

      persistent_vomiting: {
        present: true,
        weight: 20
      },

      anemia: {
        present: true,
        weight: 35
      }
    },

    medicines: [
      "Dicyclomine",
      "Mebeverine",
      "Probiotic",
      "Fiber Supplement",
      "Loperamide"
    ],

    lifestyle_changes: [
      "Stress management",
      "High fiber diet",
      "Regular meals",
      "Avoid trigger foods",
      "Exercise regularly"
    ]
  }
];