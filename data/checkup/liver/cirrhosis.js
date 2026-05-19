// ==============================
// LIVER CIRRHOSIS DATASET
// ==============================

export const CIRRHOSIS = [

  {
    id: "LC001",

    disease: "Liver Cirrhosis",

    category: "liver",

    severity: "severe",

    symptoms: {

      fatigue: {
        present: true,
        weight: 10
      },

      weakness: {
        present: true,
        weight: 8
      },

      jaundice: {
        present: true,
        weight: 25
      },

      abdominal_swelling: {
        present: true,
        weight: 25
      },

      leg_swelling: {
        present: true,
        weight: 15
      },

      appetite_loss: {
        present: true,
        weight: 10
      },

      weight_loss: {
        present: true,
        weight: 10
      },

      itching: {
        present: true,
        weight: 5
      },

      vomiting_blood: {
        present: true,
        weight: 40
      },

      black_stool: {
        present: true,
        weight: 35
      },

      confusion: {
        present: true,
        weight: 30
      }
    },

    risk_factors: {

      chronic_alcohol_use: {
        present: true,
        weight: 25
      },

      hepatitis_b_history: {
        present: true,
        weight: 20
      },

      hepatitis_c_history: {
        present: true,
        weight: 20
      },

      fatty_liver_history: {
        present: true,
        weight: 15
      }
    },

    physical_exam: {

      ascites: {
        present: true,
        weight: 40
      },

      hepatomegaly: {
        present: true,
        weight: 15
      },

      splenomegaly: {
        present: true,
        weight: 15
      },

      spider_angioma: {
        present: true,
        weight: 10
      },

      pedal_edema: {
        present: true,
        weight: 15
      }
    },

    tests: {

      ultrasound_cirrhosis: {
        present: true,
        weight: 60
      },

      fibroscan_severe_fibrosis: {
        present: true,
        weight: 50
      },

      bilirubin_high: {
        present: true,
        weight: 20
      },

      albumin_low: {
        present: true,
        weight: 25
      },

      inr_high: {
        present: true,
        weight: 20
      },

      platelet_low: {
        present: true,
        weight: 20
      },

      sgpt_high: {
        present: true,
        weight: 10
      },

      sgot_high: {
        present: true,
        weight: 10
      }
    },

    complications: {

      portal_hypertension: {
        present: true,
        weight: 40
      },

      hepatic_encephalopathy: {
        present: true,
        weight: 50
      },

      variceal_bleeding: {
        present: true,
        weight: 50
      }
    },
    red_flags: {

  coma: {
    present: true,
    weight: 100
  },

  shock: {
    present: true,
    weight: 80
  },

  severe_bleeding: {
    present: true,
    weight: 70
  }
},

    medicines: [
      "Lactulose",
      "Rifaximin",
      "Spironolactone",
      "Furosemide",
      "Diuretics",
      "Ursodeoxycholic Acid"
    ]
  }
];