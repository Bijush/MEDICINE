// ==============================
// CHOLESTASIS DATASET
// ==============================

export const CHOLESTASIS = [

  {
    id: "CH001",

    disease: "Cholestasis",

    category: "liver",

    severity: "severe",

    symptoms: {

      severe_itching: {
        present: true,
        weight: 25
      },

      jaundice: {
        present: true,
        weight: 20
      },

      dark_urine: {
        present: true,
        weight: 15
      },

      pale_stool: {
        present: true,
        weight: 15
      }
    },

    tests: {

      bilirubin_high: {
        present: true,
        weight: 30
      },

      alkaline_phosphatase_high: {
        present: true,
        weight: 40
      },

      ggt_high: {
        present: true,
        weight: 30
      }
    },

    medicines: [
      "Ursodeoxycholic Acid"
    ]
  }
];