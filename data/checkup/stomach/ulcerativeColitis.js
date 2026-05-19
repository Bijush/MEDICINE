// ==============================
// ULCERATIVE COLITIS DATASET
// ==============================

export const ULCERATIVE_COLITIS = [

  {
    id: "UC001",

    disease: "Ulcerative Colitis",

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

      immune_system_overactivity: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      bloody_diarrhea: {
        present: true,
        weight: 50
      },

      abdominal_pain: {
        present: true,
        weight: 35
      },

      abdominal_cramp: {
        present: true,
        weight: 30
      },

      urgency_to_pass_stool: {
        present: true,
        weight: 30
      },

      mucus_in_stool: {
        present: true,
        weight: 25
      },

      fatigue: {
        present: true,
        weight: 20
      },

      weight_loss: {
        present: true,
        weight: 25
      },

      fever: {
        present: true,
        weight: 15
      },
tenesmus: {
  present: true,
  weight: 30
},
      appetite_loss: {
        present: true,
        weight: 15
      }
    },

    physical_exam: {

      abdominal_tenderness: {
        present: true,
        weight: 20
      },

      pale: {
        present: true,
        weight: 15
      },

      dehydration: {
        present: true,
        weight: 20
      }
    },

    tests: {

      colonoscopy_ulceration: {
        present: true,
        weight: 70
      },

      biopsy_positive: {
        present: true,
        weight: 60
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
        weight: 25
      }
    },

    complications: {

      severe_bleeding: {
        present: true,
        weight: 60
      },

      toxic_megacolon: {
        present: true,
        weight: 80
      },

      colon_perforation: {
        present: true,
        weight: 90
      },

      colon_cancer: {
        present: true,
        weight: 60
      }
    },

    red_flags: {

      massive_bleeding: {
        present: true,
        weight: 90
      },

      severe_dehydration: {
        present: true,
        weight: 60
      },

      shock: {
        present: true,
        weight: 100
      },

      unconsciousness: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "Mesalamine",
      "Sulfasalazine",
      "Steroids",
      "Azathioprine"
    ],

    treatments: [
      "Colonoscopy Monitoring",
      "Immunotherapy",
      "Surgery in severe cases"
    ],

    lifestyle_changes: [
      "Avoid trigger foods",
      "Hydration maintenance",
      "Regular follow-up",
      "Stress management"
    ]
  }
];