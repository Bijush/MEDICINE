// ==============================
// TYPHOID DATASET
// UPDATED POWERFUL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const TYPHOID = [
  {
    id: "TYP001",
    disease: "Typhoid Fever",
    medical_name: "Enteric Fever", // Added for structural parity with viralFever.js
    category: "fever",
    tags: ["typhoid", "enteric", "bacterial", "salmonella"], // Added structural tags
    prevalence: "common", // Standardized fields
    severity: "severe",
    contagious: true,
    emergency: false,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      contaminated_water: { present: true, weight: 35 },
      contaminated_food: { present: true, weight: 30 },
      poor_sanitation: { present: true, weight: 25 },
      typhoid_contact_history: { present: true, weight: 20 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      prolonged_fever: {
        category: "fever",
        present: true,
        weight: 45,
        followup: {
          question: "Has fever lasted more than 1 week?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "prolonged_fever" // CRITICAL FIX: Aligned to map back to its parent key instead of unmapped string
          },
          priority: 11
        }
      },

      step_ladder_fever: {
        category: "fever",
        present: true,
        weight: 50,
        followup: {
          question: "Does fever gradually increase daily?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "step_ladder_fever" // CRITICAL FIX: Evaluates back to matching key for internal bonus logic loops
          },
          priority: 14
        }
      },

      weakness: {
        category: "general",
        present: true,
        weight: 20,
        followup: {
          question: "Do you feel severe weakness?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "weakness"
          },
          priority: 6
        }
      },

      headache: {
        category: "neurology",
        present: true,
        weight: 20,
        followup: {
          question: "Is headache severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "headache"
          },
          priority: 5
        }
      },

      abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: ["stomach_pain"],
        followup: {
          question: "Is abdominal pain severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "abdominal_pain"
          },
          priority: 10
        }
      },

      constipation: {
        category: "gastrointestinal",
        present: true,
        weight: 20,
        followup: {
          question: "Have you had constipation for several days?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "constipation"
          },
          priority: 5
        }
      },

      diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 20,
        followup: {
          question: "Is diarrhea frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "diarrhea"
          },
          priority: 6
        }
      },

      loss_of_appetite: {
        category: "gastrointestinal",
        present: true,
        weight: 25,
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "loss_of_appetite"
          },
          priority: 7
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 15,
        followup: {
          question: "Does nausea worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "nausea"
          },
          priority: 4
        }
      },

      vomiting: {
        category: "gastrointestinal",
        present: true,
        weight: 15,
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "vomiting"
          },
          priority: 8
        }
      },

      dry_cough: {
        category: "respiratory",
        present: true,
        weight: 10,
        followup: {
          question: "Does cough worsen at night?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "dry_cough"
          },
          priority: 4
        }
      },

      rose_spots: {
        category: "dermatology",
        present: true,
        weight: 40,
        followup: {
          question: "Are there pink rash spots on skin?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "rose_spots"
          },
          priority: 12
        }
      },

      // ======================
      // EXCLUSION ANCHORS
      // ======================
      cyclical_fever: { category: "fever", present: false, weight: -50 },
      loss_of_smell: { category: "ENT", present: false, weight: -60 }
    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================
    required_symptoms: ["prolonged_fever", "weakness"], // Synced architecture with other datasets
    required_negative_symptoms: ["loss_of_smell"],

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      coated_tongue: { present: true, weight: 25 },
      abdominal_tenderness: { present: true, weight: 20 },
      enlarged_spleen: { present: true, weight: 25 },
      relative_bradycardia: { present: true, weight: 30 },
      dehydration: { present: true, weight: 20 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      typhoid_igm_positive: { present: true, weight: 80 },
      typhoid_igg_positive: { present: true, weight: 50 },
      widal_positive: { present: true, weight: 70 },
      blood_culture_positive: { present: true, weight: 90 },
      wbc_low: { present: true, weight: 20 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      intestinal_bleeding: { present: true, weight: 80 },
      intestinal_perforation: { present: true, weight: 100 },
      sepsis: { present: true, weight: 90 },
      encephalopathy: { present: true, weight: 70 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_abdominal_pain: { present: true, weight: 70 },
      black_stool: { present: true, weight: 80 },
      shock: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 }
    },

    // ==========================
    // SYMPTOM CLUSTERS
    // ==========================
    symptom_clusters: {
      classic_typhoid_gi_cluster: {
        symptoms: ["step_ladder_fever", "abdominal_pain", "loss_of_appetite"],
        minimum_match: 2,
        bonus: 40
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["step_ladder_fever"],
        match: "any",
        bonus: 30
      },
      {
        symptoms: ["step_ladder_fever", "abdominal_pain"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["rose_spots", "prolonged_fever"],
        match: "all",
        bonus: 25
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["cyclical_fever"],
        match: "any",
        penalty: 20
      },
      {
        symptoms: ["loss_of_smell"],
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
    // PROGRESSION
    // ==========================
    progression: {
      worsening_after_5_days: { present: true, weight: 30 },
      persistent_high_fever: { present: true, weight: 40 }
    },

    // ==========================
    // EPIDEMIOLOGY
    // ==========================
    epidemiology: {
      poor_sanitation: { present: true, weight: 25 },
      contaminated_water_exposure: { present: true, weight: 35 }
    },

    // ==========================
    // RECOVERY SIGNS
    // ==========================
    recovery_signs: {
      fever_reducing: { present: true, weight: 20 },
      appetite_returning: { present: true, weight: 15 }
    },

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
    medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Azithromycin",

      type: "Antibiotic",

      dosage: "As prescribed",

      frequency: "Once daily",

      purpose: "Bacterial clearance"
    },

    {
      line: "first_line",

      name: "Paracetamol",

      type: "Antipyretic",

      dosage: "500mg",

      frequency: "Every 6 hours if needed",

      purpose: "Fever and headache control"
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Cefixime",

      type: "Antibiotic",

      dosage: "As prescribed",

      frequency: "Twice daily",

      purpose: "Systemic infection control"
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Ceftriaxone",

      type: "Intravenous Antibiotic",

      dosage: "As prescribed",

      frequency: "As directed",

      purpose: "Severe or resistant enteric infection cases"
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "IV Fluids",

      type: "Supportive Therapy",

      dosage: "As prescribed",

      frequency: "Hospital based",

      purpose: "Severe dehydration and supportive care"
    }

  ]

},

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
      "Drink clean boiled water",
      "Maintain hand hygiene",
      "Avoid contaminated or raw food",
      "Complete the entire antibiotic course strictly"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Fever unresolved after 3 days of antibiotics",
      "Inability to retain oral fluids due to vomiting",
      "Severe abdominal localization of pain",
      "Presence of dark or black tarry stools"
    ]
  }
];