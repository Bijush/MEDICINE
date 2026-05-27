// ==============================
// INFLUENZA DATASET
// ADVANCED PROFESSIONAL VERSION
// DIFFERENTIAL + FOLLOWUP +
// PHYSICAL EXAM + TESTS +
// RED FLAGS
// ==============================

export const INFLUENZA = [

  {

    id: "INF001",

    disease: "Influenza",

    medical_name: "Flu",

    category: "fever",

    tags: [

      "influenza",
      "flu",
      "viral",
      "respiratory",
      "seasonal"

    ],

    prevalence: "common",

    severity: "moderate",

    contagious: true,

    emergency: false,

    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      infected_person_contact: {
        present: true,
        weight: 35
      },

      seasonal_outbreak: {
        present: true,
        weight: 30
      },

      crowded_area_exposure: {
        present: true,
        weight: 25
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

      sudden_fever: {

        present: true,

        weight: 50,

        followup: {

          question:
            "Did fever start suddenly?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "sudden_fever"
          },

          priority: 10
        }
      },

      chills: {

        present: true,

        weight: 35,

        followup: {

          question:
            "Do chills occur frequently?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "chills"
          },

          priority: 7
        }
      },

      dry_cough: {

        present: true,

        weight: 45,

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

          priority: 9
        }
      },

      sore_throat: {

        present: true,

        weight: 35,

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

          priority: 7
        }
      },

      runny_nose: {

        present: true,

        weight: 30,

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

          priority: 5
        }
      },

      nasal_congestion: {

        present: true,

        weight: 28,

        followup: {

          question:
            "Is nose completely blocked?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "nasal_congestion"
          },

          priority: 5
        }
      },

      headache: {

        present: true,

        weight: 30,

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

          priority: 6
        }
      },

      body_ache: {

        present: true,

        weight: 45,

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

        weight: 40,

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

          priority: 6
        }
      },

      fatigue: {

        present: true,

        weight: 40,

        followup: {

          question:
            "Do you feel extreme tiredness?",

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

        weight: 30,

        followup: {

          question:
            "Are you unable to do normal activities?",

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

      watery_eyes: {

        present: true,

        weight: 15,

        followup: {

          question:
            "Are eyes continuously watery?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "watery_eyes"
          },

          priority: 3
        }
      },

      sneezing: {

        present: true,

        weight: 20,

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

      // ======================
      // NEGATIVE / EXCLUSION
      // ======================

      blood_in_sputum: {

        present: false,

        weight: -60
      },

      vomiting_blood: {

        present: false,

        weight: -70
      },

      black_stool: {

        present: false,

        weight: -70
      },

      jaundice: {

        present: false,

        weight: -50
      },

      prolonged_fever: {

        present: false,

        weight: -40
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      throat_redness: {

        present: true,

        weight: 20
      },

      elevated_temperature: {

        present: true,

        weight: 25
      },

      rapid_pulse: {

        present: true,

        weight: 15
      },

      dehydration: {

        present: true,

        weight: 10
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      influenza_positive: {

        present: true,

        weight: 100
      },

      rapid_flu_test_positive: {

        present: true,

        weight: 90
      },

      cbc_viral_pattern: {

        present: true,

        weight: 30
      },

      chest_xray_normal: {

        present: true,

        weight: 20
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

      chest_pain: {

        present: true,

        weight: 70
      },

      low_spo2: {

        present: true,

        weight: 100
      },

      unconsciousness: {

        present: true,

        weight: 100
      }
    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================

    required_symptoms: [

      "sudden_fever",

      "dry_cough"
    ],

    required_negative_symptoms: [

      "vomiting_blood",

      "black_stool"

    ],

    // ==========================
    // DIFFERENTIAL DIAGNOSIS
    // ==========================

    differential_diagnosis: [

      "COVID-19",

      "Viral Fever",

      "Pneumonia",

      "Bronchitis",

      "Common Cold"
    ],

    // ==========================
    // SYMPTOM CLUSTERS
    // ==========================

    symptom_clusters: {

      influenza_core_cluster: {

        symptoms: [

          "sudden_fever",

          "body_ache",

          "muscle_pain",

          "fatigue"

        ],

        minimum_match: 3,

        bonus: 70
      },

      influenza_respiratory_cluster: {

        symptoms: [

          "dry_cough",

          "sore_throat",

          "runny_nose",

          "nasal_congestion"

        ],

        minimum_match: 3,

        bonus: 60
      }
    },

    // ==========================
    // PROGRESSION
    // ==========================

    progression: {

      improving_after_rest: {

        present: true,

        weight: 25
      },

      worsening_after_5_days: {

        present: true,

        weight: 30
      },

      persistent_high_fever: {

        present: true,

        weight: 40
      }
    },

    // ==========================
    // EPIDEMIOLOGY
    // ==========================

    epidemiology: {

      seasonal_outbreak: {

        present: true,

        weight: 50
      },

      infected_person_contact: {

        present: true,

        weight: 35
      },

      crowded_area_exposure: {

        present: true,

        weight: 30
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

        weight: 20
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      influenza_pneumonia: {

        present: true,

        weight: 80
      },

      sinus_infection: {

        present: true,

        weight: 40
      },

      dehydration: {

        present: true,

        weight: 40
      },

      respiratory_failure: {

        present: true,

        weight: 100
      }
    },

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      {
        name: "Paracetamol",
        dosage: "500mg",
        frequency: "Every 6 hours if needed",
        purpose: "Fever and body pain"
      },

      {
        name: "Oseltamivir",
        dosage: "As prescribed",
        frequency: "Twice daily",
        purpose: "Antiviral treatment"
      },

      {
        name: "Cetirizine",
        dosage: "10mg",
        frequency: "Once daily",
        purpose: "Sneezing and runny nose"
      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Adequate rest",

      "Drink warm fluids",

      "Steam inhalation",

      "Monitor fever",

      "Maintain hydration"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Wear mask",

      "Avoid crowded places",

      "Wash hands regularly",

      "Sleep properly",

      "Avoid cold drinks"

    ]

  }

];