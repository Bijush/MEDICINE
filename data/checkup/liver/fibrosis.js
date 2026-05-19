// ==============================
// LIVER FIBROSIS DATASET
// ==============================

export const LIVER_FIBROSIS = [

  {
    id: "FIB001",

    disease: "Liver Fibrosis",

    category: "liver",

    severity: "moderate",

    causes: {

      hepatitis_b: {
        present: true,
        weight: 20
      },

      hepatitis_c: {
        present: true,
        weight: 20
      },

      fatty_liver_history: {
        present: true,
        weight: 15
      },

      alcohol_use: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      fatigue: {
        present: true,
        weight: 10
      },

      weakness: {
        present: true,
        weight: 8
      },

      mild_jaundice: {
        present: true,
        weight: 10
      },

      abdominal_discomfort: {
        present: true,
        weight: 10
      }
    },

    tests: {

      fibroscan_abnormal: {
        present: true,
        weight: 60
      },

      sgpt_high: {
        present: true,
        weight: 15
      },

      sgot_high: {
        present: true,
        weight: 15
      },

      fibrosis_marker_positive: {
        present: true,
        weight: 30
      }
    },

    medicines: [
      "Silymarin",
      "Ursodeoxycholic Acid"
    ]
  }
];