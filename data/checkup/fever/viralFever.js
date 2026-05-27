// ==============================
// VIRAL FEVER DATASET
// ADVANCED PROFESSIONAL VERSION
// DIFFERENTIAL + FOLLOWUP +
// PHYSICAL EXAM + TESTS +
// RED FLAGS
// ==============================

export const VIRAL_FEVER = [

  {

    id: "VF001",

    disease: "Viral Fever",

    medical_name:
      "Acute Viral Febrile Illness",

    category: "fever",

    tags: [

      "viral",
      "infection",
      "fever",
      "common"

    ],

    prevalence: "common",

    severity: "mild",

    contagious: true,

    emergency: false,

    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      viral_infection: {
        present: true,
        weight: 40
      },

      infected_person_contact: {
        present: true,
        weight: 25
      },

      seasonal_change: {
        present: true,
        weight: 15
      },

      low_immunity: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fever: {

        present: true,

        weight: 45,

        followup: {

          question:
            "How long has fever lasted?",

          options: [

            "1-3 days",

            "4-7 days",

            "More than 1 week"

          ],

          symptomMap: {

            "4-7 days":
              "prolonged_fever",

            "More than 1 week":
              "prolonged_fever"
          },

          priority: 10
        }
      },

      mild_to_moderate_fever: {

        present: true,

        weight: 30,

        followup: {

          question:
            "Is fever mild or moderate?",

          options: [

            "Mild",

            "Moderate"

          ],

          symptomMap: {

            Mild:
              "mild_fever",

            Moderate:
              "moderate_fever"
          },

          priority: 7
        }
      },

      body_ache: {

        present: true,

        weight: 32,

        followup: {

          question:
            "Is body pain severe?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "body_ache"
          },

          priority: 8
        }
      },

      muscle_pain: {

        present: true,

        weight: 25,

        followup: {

          question:
            "Do muscles feel extremely painful?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "muscle_pain"
          },

          priority: 7
        }
      },

      headache: {

        present: true,

        weight: 22,

        followup: {

          question:
            "Is headache severe?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "headache"
          },

          priority: 5
        }
      },

      fatigue: {

        present: true,

        weight: 28,

        followup: {

          question:
            "Do you feel extremely tired?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "fatigue"
          },

          priority: 8
        }
      },

      weakness: {

        present: true,

        weight: 22,

        followup: {

          question:
            "Are you unable to perform normal activities?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "weakness"
          },

          priority: 6
        }
      },

      sore_throat: {

        present: true,

        weight: 20,

        followup: {

          question:
            "Is throat pain severe?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "sore_throat"
          },

          priority: 5
        }
      },

      runny_nose: {

        present: true,

        weight: 20,

        followup: {

          question:
            "Is nose discharge continuous?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "runny_nose"
          },

          priority: 4
        }
      },

      dry_cough: {

        present: true,

        weight: 22,

        followup: {

          question:
            "Does cough worsen at night?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "dry_cough"
          },

          priority: 7
        }
      },

      sneezing: {

        present: true,

        weight: 15,

        followup: {

          question:
            "Is sneezing frequent?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "sneezing"
          },

          priority: 4
        }
      },

      chills: {

        present: true,

        weight: 15,

        followup: {

          question:
            "Do chills occur repeatedly?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "chills"
          },

          priority: 5
        }
      },

      loss_of_appetite: {

        present: true,

        weight: 12,

        followup: {

          question:
            "Has appetite reduced significantly?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "loss_of_appetite"
          },

          priority: 3
        }
      },

      mild_nausea: {

        present: true,

        weight: 10
      },

      watery_eyes: {

        present: true,

        weight: 8
      },

      // ======================
      // NEGATIVE / EXCLUSION
      // ======================

      loss_of_smell: {

        present: false,

        weight: -60,

        followup: {

          question:
            "Did smell suddenly disappear?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "loss_of_smell"
          },

          priority: 12
        }
      },

      bleeding_gums: {

        present: false,

        weight: -80,

        followup: {

          question:
            "Any bleeding from gums?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "bleeding_gums"
          },

          priority: 15
        }
      },

      vomiting_blood: {

        present: false,

        weight: -100
      },

      black_stool: {

        present: false,

        weight: -100
      },

      blood_in_sputum: {

        present: false,

        weight: -90
      },

      jaundice: {

        present: false,

        weight: -80
      },

      breathing_difficulty: {

        present: false,

        weight: -85
      },

      seizure: {

        present: false,

        weight: -100
      },

      unconsciousness: {

        present: false,

        weight: -100
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      elevated_temperature: {

        present: true,

        weight: 25
      },

      throat_redness: {

        present: true,

        weight: 15
      },

      dehydration: {

        present: true,

        weight: 10
      },

      stable_blood_pressure: {

        present: true,

        weight: 10
      },

      normal_oxygen_level: {

        present: true,

        weight: 20
      },

      breathing_difficulty: {

        present: false,

        weight: -90
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      normal_wbc: {

        present: true,

        weight: 20
      },

      dengue_negative: {

        present: true,

        weight: 35
      },

      malaria_negative: {

        present: true,

        weight: 35
      },

      typhoid_negative: {

        present: true,

        weight: 25
      },

      covid_negative: {

        present: true,

        weight: 20
      },

      chest_xray_normal: {

        present: true,

        weight: 18
      },

      platelet_severely_low: {

        present: false,

        weight: -85
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      breathing_difficulty: {

        present: true,

        weight: 90
      },

      persistent_high_fever: {

        present: true,

        weight: 70
      },

      seizure: {

        present: true,

        weight: 100
      },

      unconsciousness: {

        present: true,

        weight: 100
      },

      dehydration: {

        present: true,

        weight: 85
      }
    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================

    required_symptoms: [

      "fever",

      "fatigue"
    ],

    required_negative_symptoms: [

      "vomiting_blood",

      "black_stool",

      "seizure"

    ],

    // ==========================
    // DIFFERENTIAL DIAGNOSIS
    // ==========================

    differential_diagnosis: [

      "Dengue",

      "COVID-19",

      "Influenza",

      "Typhoid",

      "Malaria"
    ],

    // ==========================
    // SYMPTOM CLUSTERS
    // ==========================

    symptom_clusters: {

      viral_upper_respiratory_cluster: {

        symptoms: [

          "fever",

          "runny_nose",

          "sore_throat",

          "dry_cough"

        ],

        minimum_match: 3,

        bonus: 35
      },

      viral_body_pain_cluster: {

        symptoms: [

          "fever",

          "body_ache",

          "muscle_pain",

          "fatigue"

        ],

        minimum_match: 3,

        bonus: 40
      }
    },

    // ==========================
    // PROGRESSION
    // ==========================

    progression: {

      improving_after_rest: {

        present: true,

        weight: 20
      },

      worsening_after_5_days: {

        present: false,

        weight: -40
      },

      persistent_high_fever: {

        present: false,

        weight: -50
      }
    },

    // ==========================
    // EPIDEMIOLOGY
    // ==========================

    epidemiology: {

      seasonal_outbreak: {

        present: true,

        weight: 20
      },

      mosquito_exposure: {

        present: false,

        weight: -50
      },

      tuberculosis_contact: {

        present: false,

        weight: -70
      }
    },

    // ==========================
    // RECOVERY SIGNS
    // ==========================

    recovery_signs: {

      fever_reducing: {

        present: true,

        weight: 20
      },

      appetite_returning: {

        present: true,

        weight: 15
      },

      energy_improving: {

        present: true,

        weight: 15
      }
    },

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

  first_line: [

    {
      name: "Paracetamol",

      line: "first_line",

      type: "Antipyretic",

      dosage: "500mg",

      frequency:
        "Every 6 hours if needed",

      purpose:
        "Fever and body pain",

      warning:
        "Do not exceed recommended dose"
    },

    {
      name: "Cetirizine",

      line: "first_line",

      type: "Antihistamine",

      dosage: "10mg",

      frequency:
        "Once daily at night",

      purpose:
        "Runny nose and sneezing"
    },

    {
      name: "ORS",

      line: "first_line",

      type:
        "Hydration Support",

      dosage:
        "1 glass",

      frequency:
        "After dehydration or weakness",

      purpose:
        "Prevent dehydration"
    }

  ],

  gas_relief: [

    {
      name: "Pantoprazole",

      line: "gas_relief",

      type:
        "Acidity / Gas Reducer",

      dosage: "40mg",

      frequency:
        "Once daily before breakfast",

      purpose:
        "Reduce gas and stomach irritation"
    },

    {
      name: "Antacid Syrup",

      line: "gas_relief",

      type:
        "Gas Relief",

      dosage:
        "10ml",

      frequency:
        "After meals if needed",

      purpose:
        "Quick relief from bloating and acidity"
    }

  ],

  second_line: [

    {
      name: "Ibuprofen",

      line: "second_line",

      type: "NSAID",

      dosage: "400mg",

      frequency:
        "Every 8 hours after food",

      purpose:
        "Severe body pain",

      warning:
        "Avoid in gastric ulcer"
    },

    {
      name:
        "Dextromethorphan Syrup",

      line: "second_line",

      type:
        "Cough Suppressant",

      dosage:
        "5-10ml",

      frequency:
        "3 times daily",

      purpose:
        "Dry cough relief"
    }

  ],

  emergency_line: [

    {
      name:
        "IV Normal Saline",

      line: "emergency_line",

      type:
        "IV Fluid",

      purpose:
        "Severe dehydration"
    },

    {
      name:
        "Oxygen Support",

      line: "emergency_line",

      type:
        "Respiratory Support",

      purpose:
        "Breathing difficulty"
    }

  ]

},

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Adequate rest",

      "Drink plenty of fluids",

      "Steam inhalation",

      "Light nutritious food",

      "Monitor body temperature"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid cold drinks",

      "Maintain hydration",

      "Sleep properly",

      "Avoid heavy physical activity",

      "Use mask if coughing"

    ]

  }

];