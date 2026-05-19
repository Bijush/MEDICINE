// ==============================
// CONSTIPATION DATASET
// ==============================

export const CONSTIPATION = [

  {
    id: "CONS001",

    disease: "Constipation",

    category: "stomach",

    severity: "mild",

    causes: {

      low_fiber_diet: {
        present: true,
        weight: 25
      },

      dehydration: {
        present: true,
        weight: 25
      },

      sedentary_lifestyle: {
        present: true,
        weight: 15
      },

      stress: {
        present: true,
        weight: 10
      },

      painkiller_overuse: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      hard_stool: {
        present: true,
        weight: 40
      },

      difficulty_passing_stool: {
        present: true,
        weight: 45
      },

      infrequent_bowel_movement: {
        present: true,
        weight: 40
      },

      abdominal_bloating: {
        present: true,
        weight: 20
      },

      abdominal_discomfort: {
        present: true,
        weight: 20
      },

      excessive_gas: {
        present: true,
        weight: 15
      },

      nausea: {
        present: true,
        weight: 10
      },

      feeling_incomplete_evacuations: {
        present: true,
        weight: 30
      }
    },

    physical_exam: {

      abdominal_distension: {
        present: true,
        weight: 15
      },

      mild_abdominal_tenderness: {
        present: true,
        weight: 10
      }
    },

    tests: {

      xray_fecal_loading: {
        present: true,
        weight: 35
      },

      colonoscopy_normal: {
        present: true,
        weight: 15
      },

      thyroid_test_abnormal: {
        present: true,
        weight: 10
      }
    },

    complications: {

      hemorrhoids: {
        present: true,
        weight: 25
      },

      anal_fissure: {
        present: true,
        weight: 25
      },

      fecal_impaction: {
        present: true,
        weight: 40
      }
    },

    red_flags: {

      blood_in_stool: {
        present: true,
        weight: 50
      },

      severe_abdominal_pain: {
        present: true,
        weight: 60
      },

      vomiting: {
        present: true,
        weight: 40
      },

      severe_weight_loss: {
        present: true,
        weight: 50
      }
    },

    medicines: [
      "Lactulose",
      "Isabgol",
      "Polyethylene Glycol",
      "Bisacodyl"
    ],

    lifestyle_changes: [
      "Increase fiber intake",
      "Drink more water",
      "Regular exercise",
      "Avoid junk food",
      "Regular bowel habits"
    ]
  }
];