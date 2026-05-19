// ==============================
// FATTY LIVER DATASET
// ==============================

export const FATTY_LIVER = [

  {
    id: "FL1",

    disease: "Fatty Liver Grade 1",

    category: "liver",

    severity: "mild",

    symptoms: {

      fatigue: {
        present: true,
        weight: 5
      },

      bloating: {
        present: true,
        weight: 4
      },

      mild_right_upper_abdominal_discomfort: {
        present: true,
        weight: 5
      },

      appetite_loss: {
        present: false,
        weight: -2
      }
    },

    risk_factors: {

      obesity: {
        present: true,
        weight: 10
      },

      diabetes: {
        present: true,
        weight: 10
      },

      junk_food: {
        present: true,
        weight: 8
      }
    },

    tests: {

      ultrasound_grade_1: {
        present: true,
        weight: 50
      },

      sgpt_mild_high: {
        present: true,
        weight: 10
      }
    },

    medicines: [
      "Silymarin",
      "Vitamin E"
    ]
  },

  {
    id: "FL2",

    disease: "Fatty Liver Grade 2",

    category: "liver",

    severity: "moderate",

    symptoms: {

      fatigue: {
        present: true,
        weight: 8
      },

      persistent_abdominal_pain: {
        present: true,
        weight: 10
      },

      nausea: {
        present: true,
        weight: 5
      },

      appetite_loss: {
        present: true,
        weight: 6
      }
    },

    risk_factors: {

      obesity: {
        present: true,
        weight: 15
      },

      diabetes: {
        present: true,
        weight: 15
      },

      alcohol_use: {
        present: true,
        weight: 15
      }
    },

    tests: {

      ultrasound_grade_2: {
        present: true,
        weight: 60
      },

      sgpt_high: {
        present: true,
        weight: 15
      },

      fibroscan_abnormal: {
        present: true,
        weight: 20
      }
    },

    medicines: [
      "Ursodeoxycholic Acid",
      "Silymarin"
    ]
  },

  {
    id: "FL3",

    disease: "Fatty Liver Grade 3",

    category: "liver",

    severity: "severe",

    symptoms: {

      severe_fatigue: {
        present: true,
        weight: 15
      },

      jaundice: {
        present: true,
        weight: 20
      },

      abdominal_swelling: {
        present: true,
        weight: 20
      },

      weight_loss: {
        present: true,
        weight: 10
      }
    },

    tests: {

      ultrasound_grade_3: {
        present: true,
        weight: 70
      },

      bilirubin_high: {
        present: true,
        weight: 20
      },

      platelet_low: {
        present: true,
        weight: 15
      }
    },

    red_flags: {

      vomiting_blood: {
        present: true,
        weight: 50
      },

      ascites: {
        present: true,
        weight: 40
      }
    },

    medicines: [
      "Ursodeoxycholic Acid",
      "Silymarin"
    ]
  }
];