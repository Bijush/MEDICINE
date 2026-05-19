// ==============================
// LIVER CANCER DATASET
// ==============================

export const LIVER_CANCER = [

  {
    id: "LCAN001",

    disease: "Liver Cancer",

    medical_name: "Hepatocellular Carcinoma",

    category: "liver",

    severity: "critical",

    risk_factors: {

      cirrhosis_history: {
        present: true,
        weight: 30
      },

      hepatitis_b: {
        present: true,
        weight: 25
      },

      hepatitis_c: {
        present: true,
        weight: 25
      },

      chronic_alcohol_use: {
        present: true,
        weight: 20
      },

      fatty_liver_history: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      weight_loss: {
        present: true,
        weight: 20
      },

      severe_fatigue: {
        present: true,
        weight: 15
      },

      appetite_loss: {
        present: true,
        weight: 15
      },

      right_upper_abdominal_pain: {
        present: true,
        weight: 20
      },

      abdominal_swelling: {
        present: true,
        weight: 20
      },

      jaundice: {
        present: true,
        weight: 20
      },

      nausea: {
        present: true,
        weight: 10
      },

      vomiting: {
        present: true,
        weight: 10
      }
    },

    physical_exam: {

      hepatomegaly: {
        present: true,
        weight: 25
      },

      ascites: {
        present: true,
        weight: 25
      },

      cachexia: {
        present: true,
        weight: 20
      }
    },

    tests: {

      afp_high: {
        present: true,
        weight: 50
      },

      ultrasound_mass: {
        present: true,
        weight: 40
      },

      ct_liver_tumor: {
        present: true,
        weight: 70
      },

      mri_liver_tumor: {
        present: true,
        weight: 80
      },

      bilirubin_high: {
        present: true,
        weight: 15
      },

      albumin_low: {
        present: true,
        weight: 15
      }
    },

    complications: {

      portal_hypertension: {
        present: true,
        weight: 25
      },

      liver_failure: {
        present: true,
        weight: 40
      },

      internal_bleeding: {
        present: true,
        weight: 35
      }
    },

    red_flags: {

      vomiting_blood: {
        present: true,
        weight: 60
      },

      severe_weight_loss: {
        present: true,
        weight: 40
      },

      severe_jaundice: {
        present: true,
        weight: 50
      }
    },

    treatments: [
      "Surgery",
      "Chemotherapy",
      "Targeted Therapy",
      "Liver Transplant"
    ]
  }
];