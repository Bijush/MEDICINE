// ==============================
// ULCERATIVE COLITIS DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const ULCERATIVE_COLITIS = [
  {
    id: "UC001",
    disease: "Ulcerative Colitis",
    medical_name: "Ulcerative Colitis",
    aliases: [
      "UC",
      "Inflammatory Bowel Disease",
      "ulcerative colitis disease"
    ],
    category: "stomach",
    tags: [
      "ibd",
      "bloody diarrhea",
      "colon inflammation",
      "autoimmune"
    ],
    prevalence: "moderate",
    severity: "severe",
    priority: 92,
    contagious: false,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      autoimmune_disorder: { present: true, weight: 40 },
      family_history: { present: true, weight: 25 },
      immune_system_overactivity: { present: true, weight: 25 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      stress: { present: true, weight: 12 },
      previous_ibd_history: { present: true, weight: 25 },
      smoking_quit_recently: { present: true, weight: 10 },
      processed_food_diet: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      bloody_diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 60,
        aliases: [
          "blood_in_diarrhea",
          "bloody_stool"
        ],
        followup: {
          question: "Is blood visible in stool frequently?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "frequent_bloody_stool"
          },
          priority: 20
        }
      },

      abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Is abdominal pain severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_abdominal_pain"
          },
          priority: 12
        }
      },

      abdominal_cramp: {
        category: "gastrointestinal",
        present: true,
        weight: 35,
        followup: {
          question: "Do abdominal cramps occur repeatedly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "recurrent_abdominal_cramps"
          },
          priority: 10
        }
      },

      urgency_to_pass_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 35,
        aliases: [
          "bowel_urgency"
        ],
        followup: {
          question: "Do you suddenly need to rush to the toilet?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "bowel_urgency"
          },
          priority: 13
        }
      },

      mucus_in_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        followup: {
          question: "Is mucus visible in stool frequently?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "frequent_mucus_stool"
          },
          priority: 8
        }
      },

      fatigue: {
        category: "general",
        present: true,
        weight: 25,
        followup: {
          question: "Do you feel extreme tiredness daily?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "extreme_fatigue"
          },
          priority: 7
        }
      },

      weight_loss: {
        category: "general",
        present: true,
        weight: 30,
        followup: {
          question: "Have you lost weight unintentionally?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "unintentional_weight_loss"
          },
          priority: 11
        }
      },

      fever: {
        category: "fever",
        present: true,
        weight: 18,
        followup: {
          question: "Is fever continuous?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "continuous_fever"
          },
          priority: 6
        }
      },

      tenesmus: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Do you feel constant urge even after passing stool?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_tenesmus"
          },
          priority: 15
        }
      },

      appetite_loss: {
        category: "general",
        present: true,
        weight: 18,
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 6
        }
      },

      chronic_diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "long_term_diarrhea"
        ],
        followup: {
          question: "Has diarrhea continued for weeks?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "long_term_diarrhea"
          },
          priority: 15
        }
      },

      nighttime_diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 25,
        followup: {
          question: "Does diarrhea wake you up at night?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "night_bowel_urgency"
          },
          priority: 10
        }
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      constipation: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      },
      dry_cough: {
        category: "respiratory",
        present: false,
        weight: -15
      },
      runny_nose: {
        category: "respiratory",
        present: false,
        weight: -15
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      abdominal_tenderness: { present: true, weight: 25 },
      pale: { present: true, weight: 20 },
      dehydration: { present: true, weight: 25 },
      abdominal_distension: { present: true, weight: 18 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      colonoscopy_ulceration: { present: true, weight: 85 },
      biopsy_positive: { present: true, weight: 75 },
      esr_high: { present: true, weight: 25 },
      crp_high: { present: true, weight: 25 },
      hemoglobin_low: { present: true, weight: 30 },
      fecal_calprotectin_high: { present: true, weight: 50 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      severe_bleeding: { present: true, weight: 70 },
      toxic_megacolon: { present: true, weight: 90 },
      colon_perforation: { present: true, weight: 100 },
      colon_cancer: { present: true, weight: 70 },
      severe_anemia: { present: true, weight: 50 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      massive_bleeding: { present: true, weight: 100 },
      severe_dehydration: { present: true, weight: 70 },
      shock: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 },
      severe_abdominal_distension: { present: true, weight: 90 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["bloody_diarrhea", "tenesmus"],
        match: "all",
        bonus: 50
      },
      {
        symptoms: ["urgency_to_pass_stool", "mucus_in_stool"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["chronic_diarrhea"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["bloody_diarrhea", "chronic_diarrhea", "abdominal_cramp"],
        match: "all",
        bonus: 45
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["constipation"],
        match: "all",
        penalty: 30
      },
      {
        symptoms: ["dry_cough"],
        match: "all",
        penalty: 15
      },
      {
        symptoms: ["runny_nose"],
        match: "all",
        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      bloody_diarrhea: 20,
      abdominal_cramp: 12,
      tenesmus: 15,
      chronic_diarrhea: 18
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 14,
        bonus: 25
      },
      {
        min_days: 30,
        bonus: 35
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 15,
        max_age: 40,
        bonus: 12
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "massive_bleeding",
      "shock",
      "unconsciousness",
      "severe_abdominal_distension"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {
      first_line: [
        { name: "Mesalamine", type: "5-ASA Aminosalicylate", dosage: "Variable", frequency: "Daily as protocol maintenance", purpose: "Reduces structural lining inflammation within the colon walls" },
        { name: "Sulfasalazine", type: "Aminosalicylate Variant", dosage: "Variable", frequency: "Daily", purpose: "Suppresses lower GI inflammation during chronic active phases" }
      ],
      supportive: [
        { name: "Corticosteroids (Prednisone)", type: "Systemic Steroid", dosage: "Tapered tracking", frequency: "Short term burst guidance", purpose: "Rapidly handles acute flare-ups and intense inflammatory spikes" },
        { name: "Azathioprine", type: "Immunomodulator / Biologic Support", dosage: "As clinically prescribed", frequency: "Daily protocol", purpose: "Sustains long-term clinical remission patterns in severe instances" }
      ]
    },

    // ==========================
    // TREATMENTS
    // ==========================
    treatments: [
      "Colonoscopy Monitoring",
      "Immunotherapy",
      "Biologic Therapy",
      "Surgery in severe cases"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================
    lifestyle_changes: [
      "Avoid trigger foods",
      "Hydration maintenance",
      "Regular follow-up",
      "Stress management",
      "Balanced nutrition"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Passing high volume or frequent bloody bowel movements",
      "Unexplained spike in body temperature combined with extreme localized pain",
      "Development of rigid or visibly swollen, hard abdominal profile",
      "Dizziness or lightheadedness when changing positions indicating systematic blood loss"
    ]
  }
];