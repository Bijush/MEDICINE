// ==============================
// CROHN'S DISEASE DATASET
// ==============================

export const CROHNS_DISEASE = [

  {
    id: "CD001",

    disease: "Crohn's Disease",

    category: "stomach",

    severity: "severe",

    causes: {

      autoimmune_disorder: {
        present: true,
        weight: 35
      },

      family_history: {
        present: true,
        weight: 20
      },

      smoking: {
        present: true,
        weight: 15
      },

      immune_system_overactivity: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      chronic_diarrhea: {
        present: true,
        weight: 40
      },

      abdominal_pain: {
        present: true,
        weight: 35
      },

      abdominal_cramp: {
        present: true,
        weight: 25
      },

      weight_loss: {
        present: true,
        weight: 30
      },

      fatigue: {
        present: true,
        weight: 25
      },

      fever: {
        present: true,
        weight: 15
      },

      loss_of_appetite: {
        present: true,
        weight: 20
      },

      blood_in_stool: {
        present: true,
        weight: 30
      },

      mouth_ulcers: {
        present: true,
        weight: 20
      },

      anal_pain: {
        present: true,
        weight: 15
      }
    },

    physical_exam: {

      abdominal_tenderness: {
        present: true,
        weight: 20
      },

      dehydration: {
        present: true,
        weight: 20
      },

      pale: {
        present: true,
        weight: 15
      }
    },

    tests: {

      colonoscopy_inflammation: {
        present: true,
        weight: 70
      },

      biopsy_positive: {
        present: true,
        weight: 60
      },

      ct_bowel_thickening: {
        present: true,
        weight: 50
      },

      esr_high: {
        present: true,
        weight: 20
      },

      crp_high: {
        present: true,
        weight: 20
      },

      hemoglobin_low: {
        present: true,
        weight: 20
      }
    },

    complications: {

      intestinal_obstruction: {
        present: true,
        weight: 70
      },

      fistula: {
        present: true,
        weight: 60
      },

      abscess: {
        present: true,
        weight: 50
      },

      severe_malnutrition: {
        present: true,
        weight: 50
      }
    },

    red_flags: {

      severe_bleeding: {
        present: true,
        weight: 80
      },

      severe_dehydration: {
        present: true,
        weight: 60
      },

      bowel_perforation: {
        present: true,
        weight: 100
      },

      shock: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "Mesalamine",
      "Steroids",
      "Azathioprine",
      "Infliximab",
      "Antibiotics"
    ],

    treatments: [
      "Colonoscopy Monitoring",
      "Immunotherapy",
      "Surgery if needed"
    ],

    lifestyle_changes: [
      "Stop smoking",
      "Hydration maintenance",
      "Nutritional support",
      "Avoid trigger foods",
      "Regular follow-up"
    ]
  }
];