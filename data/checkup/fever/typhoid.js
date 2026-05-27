// ==============================
// TYPHOID DATASET
// UPDATED POWERFUL VERSION
// ==============================

export const TYPHOID = [

  {
    id: "TYP001",

    disease: "Typhoid Fever",

    category: "fever",

    severity: "severe",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      contaminated_water: {
        present: true,
        weight: 35
      },

      contaminated_food: {
        present: true,
        weight: 30
      },

      poor_sanitation: {
        present: true,
        weight: 25
      },

      typhoid_contact_history: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

  prolonged_fever: {

    present: true,

    weight: 45,

    followup: {

      question:
        "Has fever lasted more than 1 week?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "long_duration_fever"
      },

      priority: 11
    }
  },

  step_ladder_fever: {

    present: true,

    weight: 50,

    followup: {

      question:
        "Does fever gradually increase daily?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "gradually_rising_fever"
      },

      priority: 14
    }
  },

  weakness: {

    present: true,

    weight: 20,

    followup: {

      question:
        "Do you feel severe weakness?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "extreme_weakness"
      },

      priority: 6
    }
  },

  headache: {

    present: true,

    weight: 20,

    followup: {

      question:
        "Is headache severe?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "severe_headache"
      },

      priority: 5
    }
  },

  abdominal_pain: {

    present: true,

    weight: 30,
    
aliases: [
    "stomach_pain"
  ],
    followup: {

      question:
        "Is abdominal pain severe?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "severe_abdominal_pain"
      },

      priority: 10
    }
  },

  constipation: {

    present: true,

    weight: 20,

    followup: {

      question:
        "Have you had constipation for several days?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "persistent_constipation"
      },

      priority: 5
    }
  },

  diarrhea: {

    present: true,

    weight: 20,

    followup: {

      question:
        "Is diarrhea frequent?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "frequent_diarrhea"
      },

      priority: 6
    }
  },

  loss_of_appetite: {

    present: true,

    weight: 25,

    followup: {

      question:
        "Has appetite reduced significantly?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "severe_appetite_loss"
      },

      priority: 7
    }
  },

  nausea: {

    present: true,

    weight: 15,

    followup: {

      question:
        "Does nausea worsen after eating?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "food_triggered_nausea"
      },

      priority: 4
    }
  },

  vomiting: {

    present: true,

    weight: 15,

    followup: {

      question:
        "Is vomiting frequent?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "persistent_vomiting"
      },

      priority: 8
    }
  },

  dry_cough: {

    present: true,

    weight: 10,

    followup: {

      question:
        "Does cough worsen at night?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "night_cough"
      },

      priority: 4
    }
  },

  rose_spots: {

    present: true,

    weight: 40,

    followup: {

      question:
        "Are there pink rash spots on skin?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "visible_rose_spots"
      },

      priority: 12
    }
  }
},

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      coated_tongue: {
        present: true,
        weight: 25
      },

      abdominal_tenderness: {
        present: true,
        weight: 20
      },

      enlarged_spleen: {
        present: true,
        weight: 25
      },

      relative_bradycardia: {
        present: true,
        weight: 30
      },

      dehydration: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      typhoid_igm_positive: {
        present: true,
        weight: 80
      },

      typhoid_igg_positive: {
        present: true,
        weight: 50
      },

      widal_positive: {
        present: true,
        weight: 70
      },

      blood_culture_positive: {
        present: true,
        weight: 90
      },

      wbc_low: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      intestinal_bleeding: {
        present: true,
        weight: 80
      },

      intestinal_perforation: {
        present: true,
        weight: 100
      },

      sepsis: {
        present: true,
        weight: 90
      },

      encephalopathy: {
        present: true,
        weight: 70
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

      black_stool: {
        present: true,
        weight: 80
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

          "step_ladder_fever"

        ],

        match: "any",

        bonus: 30
      },

      {

        symptoms: [

          "step_ladder_fever",
          "abdominal_pain"

        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "rose_spots",
          "prolonged_fever"

        ],

        match: "all",

        bonus: 25
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "cyclical_fever"

        ],

        match: "any",

        penalty: 20
      },

      {

        symptoms: [

          "loss_of_smell"

        ],

        match: "any",

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      step_ladder_fever: 20,

      abdominal_pain: 10,

      prolonged_fever: 15,

      weakness: 8
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        max_age: 15,

        bonus: 5
      }
    ],

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 7,

        bonus: 15
      },

      {

        min_days: 14,

        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "shock",

      "unconsciousness",

      "black_stool",

      "severe_abdominal_pain"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Azithromycin",

      "Cefixime",

      "Ceftriaxone",

      "Paracetamol",

      "ORS"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Antibiotic Therapy",

      "Hydration Support",

      "Hospital Monitoring"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Drink clean water",

      "Maintain hand hygiene",

      "Avoid contaminated food",

      "Complete antibiotic course"
    ]
  }
];