// ==============================
// APPENDICITIS DATASET
// ==============================

export const APPENDICITIS = [

  {
    id: "APP001",

    disease: "Appendicitis",

    category: "stomach",

    severity: "emergency",

    causes: {

      appendix_blockage: {
        present: true,
        weight: 30
      },

      bacterial_infection: {
        present: true,
        weight: 25
      }
    },

    symptoms: {

      right_lower_abdominal_pain: {
        present: true,
        weight: 50
      },

      pain_starting_near_navel: {
        present: true,
        weight: 35
      },

      pain_moving_to_right_side: {
        present: true,
        weight: 40
      },

      fever: {
        present: true,
        weight: 20
      },

      nausea: {
        present: true,
        weight: 20
      },

      vomiting: {
        present: true,
        weight: 20
      },

      appetite_loss: {
        present: true,
        weight: 25
      },

      constipation: {
        present: true,
        weight: 10
      },

      abdominal_bloating: {
        present: true,
        weight: 15
      },

      pain_walking: {
        present: true,
        weight: 25
      }
    },

    physical_exam: {

      mcburney_point_tenderness: {
        present: true,
        weight: 60
      },

      rebound_tenderness: {
        present: true,
        weight: 50
      },

      guarding: {
        present: true,
        weight: 40
      },

      rigid_abdomen: {
        present: true,
        weight: 50
      }
    },

    tests: {

      wbc_high: {
        present: true,
        weight: 30
      },

      crp_high: {
        present: true,
        weight: 20
      },

      ultrasound_appendix_swollen: {
        present: true,
        weight: 60
      },

      ct_appendicitis_positive: {
        present: true,
        weight: 80
      }
    },

    complications: {

      appendix_rupture: {
        present: true,
        weight: 80
      },

      abscess_formation: {
        present: true,
        weight: 60
      },

      sepsis: {
        present: true,
        weight: 90
      }
    },

    red_flags: {

      severe_abdominal_pain: {
        present: true,
        weight: 60
      },

      high_fever: {
        present: true,
        weight: 40
      },

      shock: {
        present: true,
        weight: 90
      },

      unconsciousness: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "Ceftriaxone",
      "Metronidazole",
      "Painkiller"
    ],

    treatments: [
      "Appendectomy Surgery"
    ],

    lifestyle_changes: [
      "Immediate surgical consultation",
      "Avoid self-medication"
    ]
  }
];