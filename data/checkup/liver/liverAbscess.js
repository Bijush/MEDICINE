// ==============================
// LIVER ABSCESS DATASET
// ==============================

export const LIVER_ABSCESS = [

  {
    id: "LA001",

    disease: "Liver Abscess",

    category: "liver",

    severity: "emergency",

    symptoms: {

      high_fever: {
        present: true,
        weight: 25
      },

      chills: {
        present: true,
        weight: 20
      },

      right_upper_abdominal_pain: {
        present: true,
        weight: 25
      },

      vomiting: {
        present: true,
        weight: 10
      }
    },

    tests: {

      wbc_high: {
        present: true,
        weight: 20
      },

      ultrasound_abscess: {
        present: true,
        weight: 60
      },

      ct_abscess: {
        present: true,
        weight: 70
      }
    },

    medicines: [
      "Metronidazole",
      "Ceftriaxone"
    ]
  }
];