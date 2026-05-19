// ==============================
// HEPATIC ENCEPHALOPATHY
// ==============================

export const HEPATIC_ENCEPHALOPATHY = [

  {
    id: "HE001",

    disease: "Hepatic Encephalopathy",

    category: "liver",

    severity: "critical",

    symptoms: {

      confusion: {
        present: true,
        weight: 40
      },

      altered_behavior: {
        present: true,
        weight: 35
      },

      drowsiness: {
        present: true,
        weight: 30
      },

      coma: {
        present: true,
        weight: 80
      }
    },

    physical_exam: {

      hepatic_flap: {
        present: true,
        weight: 40
      }
    },

    tests: {

      ammonia_high: {
        present: true,
        weight: 50
      }
    },

    medicines: [
      "Lactulose",
      "Rifaximin"
    ]
  }
];