// ==============================
// LIVER FAILURE DATASET
// ==============================

export const LIVER_FAILURE = [

  {
    id: "LF001",

    disease: "Acute Liver Failure",

    category: "liver",

    severity: "critical",

    causes: {

      hepatitis_b: {
        present: true,
        weight: 20
      },

      drug_toxicity: {
        present: true,
        weight: 25
      },

      alcohol_damage: {
        present: true,
        weight: 20
      },

      mushroom_poisoning: {
        present: true,
        weight: 25
      }
    },

    symptoms: {

      severe_jaundice: {
        present: true,
        weight: 25
      },

      confusion: {
        present: true,
        weight: 25
      },

      fatigue: {
        present: true,
        weight: 10
      },

      vomiting: {
        present: true,
        weight: 10
      },

      abdominal_pain: {
        present: true,
        weight: 10
      },

      drowsiness: {
        present: true,
        weight: 20
      },

      bleeding_tendency: {
        present: true,
        weight: 20
      }
    },

    physical_exam: {

      altered_sensorium: {
        present: true,
        weight: 30
      },

      ascites: {
        present: true,
        weight: 20
      },

      hepatic_flap: {
        present: true,
        weight: 25
      }
    },

    tests: {

      bilirubin_very_high: {
        present: true,
        weight: 30
      },

      sgpt_very_high: {
        present: true,
        weight: 30
      },

      inr_high: {
        present: true,
        weight: 30
      },

      ammonia_high: {
        present: true,
        weight: 25
      },

      albumin_low: {
        present: true,
        weight: 20
      },

      creatinine_high: {
        present: true,
        weight: 15
      }
    },

    complications: {

      hepatic_encephalopathy: {
        present: true,
        weight: 40
      },

      kidney_failure: {
        present: true,
        weight: 35
      },

      brain_edema: {
        present: true,
        weight: 40
      }
    },

    red_flags: {

      coma: {
        present: true,
        weight: 100
      },

      severe_bleeding: {
        present: true,
        weight: 70
      },

      shock: {
        present: true,
        weight: 80
      }
    },

    emergency_actions: [
      "ICU Admission",
      "Liver Transplant Evaluation",
      "Ventilator Support",
      "Emergency Hepatology Consult"
    ],

    medicines: [
      "Lactulose",
      "N-acetylcysteine",
      "Rifaximin"
    ]
  }
];