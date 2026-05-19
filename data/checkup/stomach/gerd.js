// ==============================
// GERD DATASET
// ==============================

export const GERD = [

  {
    id: "GERD001",

    disease: "GERD",

    medical_name:
      "Gastroesophageal Reflux Disease",

    category: "stomach",

    severity: "moderate",

    symptoms: {

      acidity: {
        present: true,
        weight: 25
      },

      heartburn: {
        present: true,
        weight: 30
      },

      chest_burning: {
        present: true,
        weight: 25
      },

      sour_belching: {
        present: true,
        weight: 20
      },

      bloating: {
        present: true,
        weight: 10
      },

      nausea: {
        present: true,
        weight: 8
      },

      upper_abdominal_pain: {
        present: true,
        weight: 15
      },

      difficulty_swallowing: {
        present: true,
        weight: 20
      },

      chronic_cough: {
        present: true,
        weight: 10
      },

      throat_irritation: {
        present: true,
        weight: 10
      }
    },

    risk_factors: {

      obesity: {
        present: true,
        weight: 15
      },

      spicy_food: {
        present: true,
        weight: 10
      },

      smoking: {
        present: true,
        weight: 10
      },

      alcohol_use: {
        present: true,
        weight: 10
      },

      late_night_meals: {
        present: true,
        weight: 15
      }
    },

    physical_exam: {

      epigastric_tenderness: {
        present: true,
        weight: 10
      }
    },

    tests: {

      endoscopy_abnormal: {
        present: true,
        weight: 40
      },

      acid_reflux_positive: {
        present: true,
        weight: 35
      },

      h_pylori_positive: {
        present: false,
        weight: -10
      }
    },

    complications: {

      esophagitis: {
        present: true,
        weight: 20
      },

      barrett_esophagus: {
        present: true,
        weight: 25
      }
    },

    red_flags: {

      severe_chest_pain: {
        present: true,
        weight: 40
      },

      vomiting_blood: {
        present: true,
        weight: 50
      },

      black_stool: {
        present: true,
        weight: 50
      },

      severe_weight_loss: {
        present: true,
        weight: 35
      },
      unexplained_weight_loss: {
  present: false,
  weight: -40
}
    },

    medicines: [
      "Pantoprazole",
      "Omeprazole",
      "Rabeprazole",
      "Antacid",
      "Sucralfate"
    ],

    lifestyle_changes: [
      "Avoid spicy food",
      "Avoid late-night meals",
      "Weight reduction",
      "Stop smoking",
      "Avoid alcohol"
    ]
  }
];