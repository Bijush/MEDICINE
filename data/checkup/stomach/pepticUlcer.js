// ==============================
// PEPTIC ULCER DISEASE DATASET
// ==============================

export const PEPTIC_ULCER = [

  {
    id: "PUD001",

    disease: "Peptic Ulcer Disease",

    category: "stomach",

    severity: "savere",

    causes: {

      h_pylori_infection: {
        present: true,
        weight: 40
      },

      long_term_painkiller_use: {
        present: true,
        weight: 25
      },

      smoking: {
        present: true,
        weight: 10
      },

      alcohol_use: {
        present: true,
        weight: 10
      }
    },

    symptoms: {

      burning_stomach_pain: {
        present: true,
        weight: 35
      },

      upper_abdominal_pain: {
        present: true,
        weight: 30
      },

      pain_after_food: {
        present: true,
        weight: 25
      },

      bloating: {
        present: true,
        weight: 10
      },

      nausea: {
        present: true,
        weight: 10
      },

      vomiting: {
        present: true,
        weight: 15
      },

      appetite_loss: {
        present: true,
        weight: 15
      },

      weight_loss: {
        present: true,
        weight: 20
      },

      indigestion: {
        present: true,
        weight: 15
      }
    },

    physical_exam: {

      epigastric_tenderness: {
        present: true,
        weight: 20
      },

      pale: {
        present: true,
        weight: 10
      }
    },

    tests: {

      h_pylori_positive: {
        present: true,
        weight: 60
      },

      endoscopy_ulcer: {
        present: true,
        weight: 70
      },

      hemoglobin_low: {
        present: true,
        weight: 20
      },

      stool_occult_blood_positive: {
        present: true,
        weight: 30
      }
    },

    complications: {

      perforation: {
        present: true,
        weight: 50
      },

      gi_bleeding: {
        present: true,
        weight: 50
      },

      gastric_obstruction: {
        present: true,
        weight: 40
      }
    },

    red_flags: {

      vomiting_blood: {
        present: true,
        weight: 70
      },

      black_stool: {
        present: true,
        weight: 60
      },

      severe_abdominal_pain: {
        present: true,
        weight: 50
      },

      shock: {
        present: true,
        weight: 80
      }
    },

    medicines: [
      "Pantoprazole",
      "Omeprazole",
      "Sucralfate",
      "Amoxicillin",
      "Clarithromycin",
      "Metronidazole"
    ],

    lifestyle_changes: [
      "Avoid painkillers",
      "Stop smoking",
      "Avoid alcohol",
      "Avoid spicy food"
    ]
  }
];