// ==============================
// HEPATITIS DATASET
// ==============================

export const HEPATITIS = [

  // ==========================
  // HEPATITIS A
  // ==========================

  {
    id: "HPA",

    disease: "Hepatitis A",

    category: "liver",

    severity: "moderate",

    symptoms: {

      fever: {
        present: true,
        weight: 10
      },

      nausea: {
        present: true,
        weight: 8
      },

      vomiting: {
        present: true,
        weight: 8
      },

      jaundice: {
        present: true,
        weight: 20
      },

      dark_urine: {
        present: true,
        weight: 15
      },

      fatigue: {
        present: true,
        weight: 10
      },

      appetite_loss: {
        present: true,
        weight: 10
      }
    },

    tests: {

      anti_hav_igm_positive: {
        present: true,
        weight: 60
      },

      bilirubin_high: {
        present: true,
        weight: 20
      },

      sgpt_high: {
        present: true,
        weight: 20
      }
    },

    medicines: [
      "ORS",
      "Liver Supportive Care"
    ]
  },

  // ==========================
  // HEPATITIS B
  // ==========================

  {
    id: "HPB",

    disease: "Hepatitis B",

    category: "liver",

    severity: "high",

    symptoms: {

      fatigue: {
        present: true,
        weight: 10
      },

      jaundice: {
        present: true,
        weight: 20
      },

      abdominal_pain: {
        present: true,
        weight: 10
      },

      nausea: {
        present: true,
        weight: 8
      },

      vomiting: {
        present: true,
        weight: 8
      },

      joint_pain: {
        present: true,
        weight: 5
      }
    },

    risk_factors: {

      unsafe_injection: {
        present: true,
        weight: 20
      },

      blood_transfusion: {
        present: true,
        weight: 20
      },

      unprotected_sex: {
        present: true,
        weight: 20
      }
    },

    tests: {

      hbsag_positive: {
        present: true,
        weight: 70
      },

      hbeag_positive: {
        present: true,
        weight: 40
      },

      viral_load_high: {
        present: true,
        weight: 30
      },

      sgpt_high: {
        present: true,
        weight: 20
      }
    },

    medicines: [
      "Tenofovir",
      "Entecavir"
    ]
  },

  // ==========================
  // HEPATITIS C
  // ==========================

  {
    id: "HPC",

    disease: "Hepatitis C",

    category: "liver",

    severity: "high",

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
        weight: 15
      },

      appetite_loss: {
        present: true,
        weight: 8
      },

      abdominal_pain: {
        present: true,
        weight: 8
      }
    },

    risk_factors: {

      unsafe_blood_exposure: {
        present: true,
        weight: 20
      },

      iv_drug_use: {
        present: true,
        weight: 25
      }
    },

    tests: {

      anti_hcv_positive: {
        present: true,
        weight: 70
      },

      hcv_rna_positive: {
        present: true,
        weight: 50
      },

      sgpt_high: {
        present: true,
        weight: 20
      }
    },

    medicines: [
      "Sofosbuvir",
      "Daclatasvir"
    ]
  }
];