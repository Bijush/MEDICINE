// ==============================
// DENGUE DATASET
// UPDATED POWERFUL VERSION
// ==============================

export const DENGUE = [

  {
    id: "DEN001",

    disease: "Dengue Fever",

    category: "fever",

    severity: "severe",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      mosquito_bite: {
        present: true,
        weight: 35
      },

      dengue_outbreak_area: {
        present: true,
        weight: 25
      },

      rainy_season_exposure: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      high_fever: {

  present: true,

  weight: 40,

  followup: {

    question:
      "Is fever very high?",

    options: [
      "Yes",
      "No"
    ],

    symptomMap: {

      Yes:
        "very_high_fever"
    },

    priority: 10
  }
},

      sudden_fever: {
        present: true,
        weight: 30
      },

      severe_headache: {
        present: true,
        weight: 25
      },

      pain_behind_eyes: {
        present: true,
        weight: 35
      },

      body_ache: {

  present: true,

  weight: 30,

  followup: {

    question:
      "Is body pain severe?",

    options: [
      "Yes",
      "No"
    ],

    symptomMap: {

      Yes:
        "severe_body_ache"
    },

    priority: 8
  }
},

      muscle_pain: {
        present: true,
        weight: 30
      },

      joint_pain: {
        present: true,
        weight: 30
      },

      nausea: {
        present: true,
        weight: 15
      },

      vomiting: {
        present: true,
        weight: 15
      },

     skin_rash: {

  present: true,

  weight: 25,

  followup: {

    question:
      "Did rash appear after fever?",

    options: [
      "Yes",
      "No"
    ],

    symptomMap: {

      Yes:
        "dengue_rash"
    },

    priority: 7
  }
},

      fatigue: {
        present: true,
        weight: 20
      },

      abdominal_pain: {
        present: true,
        weight: 20
      },

      bleeding_gums: {
        present: true,
        weight: 40
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      dehydration: {
        present: true,
        weight: 20
      },

      low_blood_pressure: {
        present: true,
        weight: 30
      },

      petechiae: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      dengue_nsg1_positive: {
        present: true,
        weight: 90
      },

      dengue_igg_positive: {
        present: true,
        weight: 40
      },

      dengue_igm_positive: {
        present: true,
        weight: 70
      },

      platelet_low: {
        present: true,
        weight: 60
      },

      hematocrit_high: {
        present: true,
        weight: 35
      },

      wbc_low: {
        present: true,
        weight: 30
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      dengue_hemorrhagic_fever: {
        present: true,
        weight: 80
      },

      dengue_shock_syndrome: {
        present: true,
        weight: 100
      },

      severe_bleeding: {
        present: true,
        weight: 70
      },

      liver_injury: {
        present: true,
        weight: 40
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_abdominal_pain: {
        present: true,
        weight: 70
      },

      persistent_vomiting: {
        present: true,
        weight: 60
      },

      bleeding_gums: {
        present: true,
        weight: 70
      },

      blood_in_vomit: {
        present: true,
        weight: 90
      },

      black_stool: {
        present: true,
        weight: 90
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

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {
        symptoms: [

          "pain_behind_eyes",
          "platelet_low"

        ],

        match: "all",

        bonus: 35
      },

      {
        symptoms: [

          "high_fever",
          "body_ache"

        ],

        match: "all",

        bonus: 20
      },

      {
        symptoms: [

          "bleeding_gums"

        ],

        match: "any",

        bonus: 25
      },

      {
        symptoms: [

          "skin_rash",
          "joint_pain"

        ],

        match: "all",

        bonus: 20
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {
        symptoms: [

          "loss_of_smell"

        ],

        match: "any",

        penalty: 25
      },

      {
        symptoms: [

          "chronic_cough"

        ],

        match: "any",

        penalty: 20
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {
        max_age: 12,

        bonus: 5
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      body_ache: 10,

      fatigue: 8,

      abdominal_pain: 10,

      platelet_low: 15
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {
        min_days: 2,

        bonus: 10
      },

      {
        min_days: 7,

        penalty: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "shock",

      "unconsciousness",

      "black_stool",

      "blood_in_vomit",

      "spo2_below_90"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Paracetamol",

      "ORS",

      "IV Fluids"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Platelet Monitoring",

      "Hydration Therapy",

      "Hospital Observation"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid mosquito exposure",

      "Drink plenty of fluids",

      "Avoid NSAIDs",

      "Immediate hospital visit if bleeding occurs"
    ]
  }
];