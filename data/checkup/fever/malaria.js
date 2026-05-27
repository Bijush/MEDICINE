// ==============================
// MALARIA DATASET
// UPDATED POWERFUL VERSION
// ==============================

export const MALARIA = [

  {
    id: "MAL001",

    disease: "Malaria",

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

      malaria_endemic_area: {
        present: true,
        weight: 25
      },

      stagnant_water_exposure: {
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
        "Is fever extremely high?",

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

  intermittent_fever: {

    present: true,

    weight: 35,

    followup: {

      question:
        "Does fever come and go repeatedly?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "recurrent_fever"
      },

      priority: 9
    }
  },

  chills: {

    present: true,

    weight: 40,

    followup: {

      question:
        "Do chills occur before fever?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "pre_fever_chills"
      },

      priority: 9
    }
  },

  rigor: {

    present: true,

    weight: 35,

    followup: {

      question:
        "Do you experience severe shivering?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "severe_shivering"
      },

      priority: 8
    }
  },

  sweating: {

    present: true,

    weight: 30,

    followup: {

      question:
        "Do you sweat heavily after fever?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "post_fever_sweating"
      },

      priority: 8
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

  body_ache: {

    present: true,

    weight: 20,

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

      priority: 6
    }
  },

  muscle_pain: {

    present: true,

    weight: 20,

    followup: {

      question:
        "Do muscles feel extremely painful?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "severe_muscle_pain"
      },

      priority: 5
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

      priority: 7
    }
  },

  fatigue: {

    present: true,

    weight: 20,

    followup: {

      question:
        "Do you feel extreme weakness?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "extreme_fatigue"
      },

      priority: 5
    }
  },

  cyclical_fever: {

    present: true,

    weight: 45,

    followup: {

      question:
        "Does fever return at fixed intervals?",

      options: [
        "Yes",
        "No"
      ],

      symptomMap: {

        Yes:
          "periodic_fever"
      },

      priority: 12
    }
  },

  abdominal_pain: {

    present: true,

    weight: 15,

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

      priority: 6
    }
  }
},

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      pale: {
        present: true,
        weight: 25
      },

      enlarged_spleen: {
        present: true,
        weight: 40
      },

      jaundice: {
        present: true,
        weight: 25
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

      malaria_positive: {
        present: true,
        weight: 100
      },

      peripheral_smear_positive: {
        present: true,
        weight: 90
      },

      platelet_low: {
        present: true,
        weight: 40
      },

      hemoglobin_low: {
        present: true,
        weight: 30
      },

      bilirubin_high: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      cerebral_malaria: {
        present: true,
        weight: 100
      },

      severe_anemia: {
        present: true,
        weight: 60
      },

      kidney_failure: {
        present: true,
        weight: 70
      },

      liver_failure: {
        present: true,
        weight: 60
      },

      respiratory_failure: {
        present: true,
        weight: 70
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      unconsciousness: {
        present: true,
        weight: 100
      },

      seizure: {
        present: true,
        weight: 90
      },

      severe_breathlessness: {
        present: true,
        weight: 70
      },

      shock: {
        present: true,
        weight: 100
      },

      severe_jaundice: {
        present: true,
        weight: 70
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {
        symptoms: [

          "chills",
          "rigor",
          "sweating"

        ],

        match: "all",

        bonus: 35
      },

      {
        symptoms: [

          "cyclical_fever"

        ],

        match: "any",

        bonus: 25
      },

      {
        symptoms: [

          "high_fever",
          "headache"

        ],

        match: "all",

        bonus: 15
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

        penalty: 20
      },

      {
        symptoms: [

          "sore_throat"

        ],

        match: "any",

        penalty: 15
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

      chills: 15,

      sweating: 10,

      rigor: 20,

      cyclical_fever: 20
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
        min_days: 10,

        penalty: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "shock",

      "unconsciousness",

      "seizure",

      "severe_breathlessness"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Artemether",

      "Lumefantrine",

      "Primaquine",

      "Paracetamol",

      "IV Fluids"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Hospital Observation",

      "Antimalarial Therapy",

      "Hydration Support"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Use mosquito net",

      "Avoid mosquito exposure",

      "Remove stagnant water",

      "Early treatment completion"
    ]
  }
];