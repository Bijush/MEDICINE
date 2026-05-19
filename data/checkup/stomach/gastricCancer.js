// ==============================
// GASTRIC CANCER DATASET
// ==============================

export const GASTRIC_CANCER = [

  {
    id: "GC001",

    disease: "Gastric Cancer",

    medical_name: "Stomach Cancer",

    category: "stomach",

    severity: "critical",

    causes: {

      h_pylori_infection: {
        present: true,
        weight: 35
      },

      smoking: {
        present: true,
        weight: 20
      },

      alcohol_use: {
        present: true,
        weight: 15
      },

      family_history: {
        present: true,
        weight: 20
      },

      chronic_gastritis: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      unexplained_weight_loss: {
        present: true,
        weight: 45
      },

      appetite_loss: {
        present: true,
        weight: 35
      },

      upper_abdominal_pain: {
        present: true,
        weight: 30
      },

      nausea: {
        present: true,
        weight: 15
      },

      vomiting: {
        present: true,
        weight: 20
      },

      vomiting_blood: {
        present: true,
        weight: 50
      },

      black_stool: {
        present: true,
        weight: 45
      },

      difficulty_swallowing: {
        present: true,
        weight: 15
      },

      fatigue: {
        present: true,
        weight: 20
      },
      early_satiety: {
  present: true,
  weight: 35
},

      bloating_after_food: {
        present: true,
        weight: 20
      }
    },

    physical_exam: {

      pale: {
        present: true,
        weight: 25
      },

      abdominal_mass: {
        present: true,
        weight: 50
      },

      enlarged_lymph_nodes: {
        present: true,
        weight: 35
      }
    },

    tests: {

      endoscopy_tumor: {
        present: true,
        weight: 80
      },

      biopsy_cancer_positive: {
        present: true,
        weight: 100
      },

      ct_stomach_mass: {
        present: true,
        weight: 70
      },

      hemoglobin_low: {
        present: true,
        weight: 20
      },

      occult_blood_positive: {
        present: true,
        weight: 30
      }
    },

    complications: {

      severe_bleeding: {
        present: true,
        weight: 70
      },

      metastasis: {
        present: true,
        weight: 90
      },

      gastric_obstruction: {
        present: true,
        weight: 70
      },

      severe_malnutrition: {
        present: true,
        weight: 60
      }
    },

    red_flags: {

      vomiting_blood: {
        present: true,
        weight: 90
      },

      severe_weight_loss: {
        present: true,
        weight: 80
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
      "Pain Management",
      "Antiemetic",
      "Nutritional Support"
    ],

    treatments: [
      "Gastrectomy Surgery",
      "Chemotherapy",
      "Radiotherapy",
      "Targeted Therapy"
    ],

    lifestyle_changes: [
      "Immediate oncology consultation",
      "Avoid smoking",
      "Avoid alcohol",
      "Nutritional monitoring"
    ]
  }
];