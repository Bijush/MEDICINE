// ==============================
// PEPTIC ULCER DISEASE DATASET
// ADVANCED CANONICAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const PEPTIC_ULCER = [
  {
    id: "PUD001",
    disease: "Peptic Ulcer Disease",
    medical_name: "Peptic Ulcer Disease",
    aliases: [
      "stomach_ulcer",
      "gastric_ulcer",
      "duodenal_ulcer"
    ],
    category: "stomach",
    tags: [
      "ulcer",
      "acidity",
      "stomach_pain",
      "bleeding"
    ],
    prevalence: "common",
    severity: "severe",
    priority: 88,
    contagious: false,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      h_pylori_infection: { present: true, weight: 45 },
      long_term_painkiller_use: { present: true, weight: 30 },
      smoking: { present: true, weight: 12 },
      alcohol_use: { present: true, weight: 12 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      spicy_food: { present: true, weight: 10 },
      stress: { present: true, weight: 12 },
      irregular_meals: { present: true, weight: 15 },
      previous_ulcer_history: { present: true, weight: 25 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        aliases: [
          "burning_abdominal_pain",
          "burning_stomach_pain",
          "upper_abdominal_pain",
          "epigastric_pain",
          "epigastric_burning"
        ],
        followup: {
          question: "Is the stomach pain burning in nature?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_abdominal_pain"
          },
          priority: 14
        }
      },

      pain_after_food: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: [
          "post_meal_abdominal_pain"
        ],
        followup: {
          question: "Does pain worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "pain_after_food"
          },
          priority: 11
        }
      },

      acidity: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: [
          "acid_problem",
          "acidic_feeling"
        ],
        followup: {
          question: "Does acidity worsen after spicy food?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_acidity"
          },
          priority: 8
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 12,
        followup: {
          question: "Does bloating worsen after meals?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "post_meal_bloating"
          },
          priority: 5
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 12,
        followup: {
          question: "Does nausea worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_nausea"
          },
          priority: 5
        }
      },

      vomiting: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        aliases: [
          "throwing_up"
        ],
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 8
        }
      },

      appetite_loss: {
        category: "general",
        present: true,
        weight: 18,
        aliases: [
          "loss_of_appetite"
        ],
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 6
        }
      },

      weight_loss: {
        category: "general",
        present: true,
        weight: 22,
        aliases: [
          "unintentional_weight_loss",
          "rapid_weight_loss"
        ],
        followup: {
          question: "Have you lost weight unintentionally?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "weight_loss"
          },
          priority: 10
        }
      },

      indigestion: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        aliases: [
          "dyspepsia",
          "chronic_indigestion"
        ],
        followup: {
          question: "Has indigestion continued for weeks?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "indigestion"
          },
          priority: 7
        }
      },

      black_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "melena",
          "black_tarry_stool"
        ],
        followup: {
          question: "Is stool black and tarry?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "black_stool"
          },
          priority: 20
        }
      },

      vomiting_blood: {
        category: "gastrointestinal",
        present: true,
        weight: 50,
        aliases: [
          "hematemesis"
        ],
        followup: {
          question: "Is there blood in vomit?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "vomiting_blood"
          },
          priority: 22
        }
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      runny_nose: {
        category: "respiratory",
        present: false,
        weight: -20
      },
      wheezing: {
        category: "respiratory",
        present: false,
        weight: -20
      },
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      abdominal_tenderness: { present: true, weight: 25 },
      pale: { present: true, weight: 15 },
      abdominal_guarding: { present: true, weight: 25 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      h_pylori_positive: { present: true, weight: 75 },
      endoscopy_ulcer: { present: true, weight: 85 },
      hemoglobin_low: { present: true, weight: 25 },
      stool_occult_blood_positive: { present: true, weight: 35 },
      biopsy_ulcer_positive: { present: true, weight: 50 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      perforation: { present: true, weight: 70 },
      gi_bleeding: { present: true, weight: 65 },
      gastric_obstruction: { present: true, weight: 50 },
      severe_anemia: { present: true, weight: 45 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      vomiting_blood: { present: true, weight: 90 },
      black_stool: { present: true, weight: 80 },
      severe_abdominal_pain: { present: true, weight: 65 },
      shock: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["abdominal_pain", "acidity"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["pain_after_food", "abdominal_pain"],
        match: "all",
        bonus: 30
      },
      {
        symptoms: ["black_stool"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["vomiting_blood", "black_stool"],
        match: "all",
        bonus: 45
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["runny_nose"],
        match: "all",
        penalty: 20
      },
      {
        symptoms: ["wheezing"],
        match: "all",
        penalty: 20
      },
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 25
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      abdominal_pain: 15,
      acidity: 12,
      pain_after_food: 12,
      black_stool: 18
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 7,
        bonus: 12
      },
      {
        min_days: 30,
        bonus: 25
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 40,
        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "vomiting_blood",
      "shock",
      "black_stool",
      "unconsciousness",
      "severe_abdominal_pain"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {
      first_line: [
        { name: "Pantoprazole / Omeprazole", type: "Proton Pump Inhibitor (PPI)", dosage: "40mg / 20mg", frequency: "Daily before breakfast", purpose: "Suppresses gastric acid production to allow mucosal lesions to heal" },
        { name: "Sucralfate", type: "Mucosal Protective Agent", dosage: "1g", frequency: "Four times daily on empty stomach", purpose: "Forms a physical barrier complex directly over the ulcerated surface" }
      ],
      supportive: [
        { name: "Amoxicillin", type: "Antibiotic (H. Pylori Pack)", dosage: "1g", frequency: "Twice daily for 14 days", purpose: "Works synergistically with auxiliary antimicrobials to eliminate H. pylori bacteria" },
        { name: "Clarithromycin", type: "Macrolide Antibiotic", dosage: "500mg", frequency: "Twice daily for 14 days", purpose: "Inhibits bacterial protein synthesis to eradicate target colonizations" },
        { name: "Metronidazole", type: "Nitroimidazole Antibiotic", dosage: "400mg - 500mg", frequency: "Three times daily", purpose: "Alternative or adjunctive antimicrobial agent to overcome resistant strains" }
      ]
    },

    // ==========================
    // TREATMENTS
    // ==========================
    treatments: [
      "H. pylori Eradication Therapy",
      "Endoscopy Monitoring",
      "Acid Suppression Therapy"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================
    lifestyle_changes: [
      "Avoid painkillers",
      "Stop smoking",
      "Avoid alcohol",
      "Avoid spicy food",
      "Eat regular meals",
      "Reduce stress"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Vomiting material that looks like dark coffee grounds or bright red blood",
      "Sudden, sharp, severe abdominal pain that doesn't go away or gets worse when moving",
      "Fainting, feeling dizzy, cold sweats, or extreme weakness when standing up",
      "Persistent dark tarry stools or unexplained difficulty swallowing food"
    ]
  }
];