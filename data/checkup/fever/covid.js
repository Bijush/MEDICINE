// ==============================
// COVID-19 DATASET
// UPDATED PRO VERSION
// ==============================

export const COVID = [

  {

    id: "COV001",

    disease: "COVID-19",

    category: "fever",

    severity: "severe",

    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      infected_person_contact: {
        present: true,
        weight: 40
      },

      crowded_area_exposure: {
        present: true,
        weight: 20
      },

      travel_history: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fever: {

        aliases: [
          "high_fever"
        ],

        present: true,

        weight: 35
      },

      dry_cough: {

        aliases: [
          "cough"
        ],

        present: true,

        weight: 40,

        followup: {

          question:
            "Has cough lasted more than 5 days?",

          options: [
            "Yes",
            "No"
          ],

          symptomMap: {

            Yes:
              "persistent_cough"
          },

          priority: 10
        }
      },

      sore_throat: {
        present: true,
        weight: 20
      },

      breathing_difficulty: {

        aliases: [
          "shortness_of_breath"
        ],

        present: true,

        weight: 45,

        followup: {

          question:
            "Does breathing worsen while walking?",

          options: [
            "Yes",
            "No"
          ],

          symptomMap: {

            Yes:
              "exercise_breathlessness"
          },

          priority: 14
        }
      },

      body_ache: {
        present: true,
        weight: 20
      },

      fatigue: {
        present: true,
        weight: 25
      },

      headache: {
        present: true,
        weight: 15
      },

      loss_of_smell: {

        present: true,

        weight: 60,

        followup: {

          question:
            "Did smell suddenly disappear?",

          options: [
            "Yes",
            "No"
          ],

          symptomMap: {

            Yes:
              "sudden_loss_of_smell"
          },

          priority: 15
        }
      },

      loss_of_taste: {

        present: true,

        weight: 60
      },

      diarrhea: {
        present: true,
        weight: 15
      },

      chest_pain: {
        present: true,
        weight: 25
      },

      chills: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      spo2_low: {
        present: true,
        weight: 60
      },

      lung_crackles: {
        present: true,
        weight: 35
      },

      rapid_breathing: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      covid_positive: {
        present: true,
        weight: 100
      },

      rt_pcr_positive: {
        present: true,
        weight: 100
      },

      crp_high: {
        present: true,
        weight: 25
      },

      d_dimer_high: {
        present: true,
        weight: 30
      },

      ct_ground_glass_opacity: {
        present: true,
        weight: 70
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      covid_pneumonia: {
        present: true,
        weight: 70
      },

      respiratory_failure: {
        present: true,
        weight: 90
      },

      blood_clot: {
        present: true,
        weight: 70
      },

      sepsis: {
        present: true,
        weight: 70
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      spo2_below_90: {
        present: true,
        weight: 100
      },

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      chest_pressure: {
        present: true,
        weight: 70
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

          "loss_of_smell"

        ],

        match: "any",

        bonus: 35
      },

      {

        symptoms: [

          "loss_of_taste"

        ],

        match: "any",

        bonus: 35
      },

      {

        symptoms: [

          "dry_cough",
          "fever"

        ],

        match: "all",

        bonus: 20
      },

      {

        symptoms: [

          "breathing_difficulty",
          "spo2_below_90"

        ],

        match: "all",

        bonus: 40
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "platelet_low"

        ],

        match: "any",

        penalty: 30
      },

      {

        symptoms: [

          "pain_behind_eyes"

        ],

        match: "any",

        penalty: 20
      },

      {

        symptoms: [

          "burning_urination"

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

        min_age: 60,

        bonus: 10
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      fatigue: 10,

      dry_cough: 12,

      breathing_difficulty: 15,

      loss_of_smell: 20,

      loss_of_taste: 20
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 3,

        bonus: 10
      },

      {

        min_days: 10,

        bonus: 15
      }
    ],

    // ==========================
    // EMERGENCY
    // ==========================

    emergency_symptoms: [

      "spo2_below_90",

      "unconsciousness",

      "severe_breathlessness",

      "chest_pressure"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Paracetamol",

      "ORS",

      "Oxygen",

      "Antiviral"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Isolation",

      "Oxygen Therapy",

      "Hospital Monitoring"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Wear mask",

      "Isolation",

      "Hydration",

      "Monitor SPO2"
    ]
  }
];