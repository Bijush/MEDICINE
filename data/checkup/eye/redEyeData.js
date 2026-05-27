// ==============================
// RED EYE + HEADACHE DATASET
// PROFESSIONAL VERSION
// ==============================

export const RED_EYE_HEADACHE = [

  {

    id: "REH001",

    disease:
      "Red Eye With Headache",

    medical_name:
      "Viral / Allergic Eye Irritation",

    category: "eye",

    tags: [

      "eye",
      "red eye",
      "headache",
      "viral",
      "allergy"

    ],

    prevalence: "common",

    severity: "mild",

    contagious: false,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      viral_infection: {

        present: true,

        weight: 25
      },

      allergy: {

        present: true,

        weight: 25
      },

      dust_exposure: {

        present: true,

        weight: 20
      },

      eye_strain: {

        present: true,

        weight: 18
      },

      low_sleep: {

        present: true,

        weight: 15
      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      headache: {

        present: true,

        weight: 35,

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

          priority: 8
        }
      },

      red_eyes: {

        present: true,

        weight: 40,

        followup: {

          question:
            "Are the eyes fully red?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "red_eyes"

          },

          priority: 10
        }
      },

      watery_eyes: {

        present: true,

        weight: 20
      },

      eye_irritation: {

        present: true,

        weight: 25
      },

      itching_eyes: {

        present: true,

        weight: 22
      },

      mild_fever: {

        present: true,

        weight: 18
      },

      fatigue: {

        present: true,

        weight: 15
      },

      light_sensitivity: {

        present: true,

        weight: 18
      },

      // ======================
      // NEGATIVE / EXCLUSION
      // ======================

      vision_loss: {

        present: false,

        weight: -100
      },

      eye_bleeding: {

        present: false,

        weight: -90
      },

      unconsciousness: {

        present: false,

        weight: -100
      },

      seizure: {

        present: false,

        weight: -100
      }

    },

    // ==========================
    // PHYSICAL EXAMINATION
    // ==========================

    physical_exam: {

      conjunctival_redness: {

        present: true,

        weight: 40
      },

      watery_eye_discharge: {

        present: true,

        weight: 20
      },

      mild_eye_swelling: {

        present: true,

        weight: 15
      },

      stable_blood_pressure: {

        present: true,

        weight: 10
      },

      normal_oxygen_level: {

        present: true,

        weight: 10
      },

      vision_loss: {

        present: false,

        weight: -100
      }

    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      eye_exam_normal: {

        present: true,

        weight: 20
      },

      normal_temperature: {

        present: true,

        weight: 15
      },

      vision_normal: {

        present: true,

        weight: 25
      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      vision_loss: {

        present: true,

        weight: 100
      },

      severe_eye_pain: {

        present: true,

        weight: 95
      },

      unconsciousness: {

        present: true,

        weight: 100
      },

      seizure: {

        present: true,

        weight: 100
      }

    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================

    required_symptoms: [

      "red_eyes"

    ],

    required_negative_symptoms: [

      "vision_loss",

      "seizure"

    ],

    // ==========================
    // DIFFERENTIAL DIAGNOSIS
    // ==========================

    differential_diagnosis: [

      "Viral Conjunctivitis",

      "Allergic Conjunctivitis",

      "Eye Strain",

      "Migraine",

      "Viral Fever"

    ],

    // ==========================
    // SYMPTOM CLUSTERS
    // ==========================

    symptom_clusters: {

      eye_irritation_cluster: {

        symptoms: [

          "red_eyes",

          "itching_eyes",

          "watery_eyes"

        ],

        minimum_match: 2,

        bonus: 35
      },

      viral_eye_cluster: {

        symptoms: [

          "red_eyes",

          "mild_fever",

          "fatigue"

        ],

        minimum_match: 2,

        bonus: 25
      }

    },

    // ==========================
    // PROGRESSION
    // ==========================

    progression: {

      improving_after_rest: {

        present: true,

        weight: 15
      },

      worsening_after_5_days: {

        present: false,

        weight: -35
      }

    },

    // ==========================
    // RECOVERY SIGNS
    // ==========================

    recovery_signs: {

      eye_redness_reducing: {

        present: true,

        weight: 20
      },

      headache_reducing: {

        present: true,

        weight: 15
      }

    },

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

  // ==========================
  // FIRST LINE
  // ==========================

  {

    line: "first_line",

    name:
      "Paracetamol",

    dosage:
      "500mg",

    frequency:
      "Every 6 hours if needed",

    max_daily:
      "4000mg/day",

    purpose:
      "Headache, body pain, mild fever",

    warning:
      "Avoid overdose and alcohol"
  },

  {

    line: "first_line",

    name:
      "Carboxymethylcellulose Eye Drop",

    dosage:
      "1-2 drops",

    frequency:
      "3-4 times daily",

    purpose:
      "Dryness, irritation, redness relief"
  },

  {

    line: "first_line",

    name:
      "Cetirizine",

    dosage:
      "10mg",

    frequency:
      "Once daily at night",

    purpose:
      "Allergy, itching, watery eyes"
  },

  // ==========================
  // SECOND LINE
  // IF NO IMPROVEMENT
  // ==========================

  {

    line: "second_line",

    condition:
      "Use if symptoms persist after 2-3 days",

    name:
      "Moxifloxacin Eye Drop",

    dosage:
      "1 drop",

    frequency:
      "4 times daily",

    duration:
      "5-7 days",

    purpose:
      "Possible bacterial eye infection",

    warning:
      "Avoid unnecessary antibiotic use"
  },

  {

    line: "second_line",

    condition:
      "If headache becomes stronger",

    name:
      "Ibuprofen",

    dosage:
      "400mg",

    frequency:
      "Every 8 hours after food",

    purpose:
      "Moderate headache and inflammation",

    warning:
      "Avoid in gastric ulcer or kidney disease"
  },

  // ==========================
  // THIRD LINE
  // SEVERE CASE
  // ==========================

  {

    line: "third_line",

    condition:
      "If severe redness, swelling, discharge, or pain develops",

    name:
      "Tobramycin + Dexamethasone Eye Drop",

    dosage:
      "1 drop",

    frequency:
      "4 times daily",

    duration:
      "5 days",

    purpose:
      "Severe inflammatory eye infection",

    warning:
      "Use only under doctor supervision"
  },

  {

    line: "third_line",

    condition:
      "If migraine-type severe headache develops",

    name:
      "Naproxen",

    dosage:
      "500mg",

    frequency:
      "Twice daily after food",

    purpose:
      "Severe headache and inflammation",

    warning:
      "Avoid long-term use"
  }

],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Adequate rest",

      "Avoid rubbing eyes",

      "Use clean water for eye washing",

      "Reduce mobile/screen usage",

      "Maintain hydration"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid dust exposure",

      "Sleep properly",

      "Wash hands frequently",

      "Avoid sharing towels",

      "Use sunglasses outside"

    ]

  }

];