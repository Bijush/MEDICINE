// ==============================
// ALCOHOLIC LIVER DISEASE
// ==============================

export const ALCOHOLIC_LIVER = [

  {
    id: "ALD001",

    disease: "Alcoholic Liver Disease",

    category: "liver",

    severity: "severe",

    risk_factors: {

      chronic_alcohol_use: {
        present: true,
        weight: 40
      }
    },

    symptoms: {

      jaundice: {
        present: true,
        weight: 20
      },

      abdominal_pain: {
        present: true,
        weight: 10
      },

      fatigue: {
        present: true,
        weight: 10
      },

      vomiting: {
        present: true,
        weight: 8
      }
    },

    tests: {

      ast_alt_ratio_high: {
        present: true,
        weight: 40
      },

      bilirubin_high: {
        present: true,
        weight: 20
      },

      ultrasound_fatty_changes: {
        present: true,
        weight: 20
      }
    },

    medicines: [
      "Thiamine",
      "Liver Supportive Care"
    ]
  }
];