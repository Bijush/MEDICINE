// ==============================
// PANCREATITIS DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const PANCREATITIS = [
  {
    id: "PAN001",
    disease: "Acute Pancreatitis",
    medical_name: "Pancreatitis",
    aliases: [
      "pancreas inflammation",
      "pancreatic inflammation"
    ],
    category: "stomach",
    tags: [
      "pancreas",
      "abdomen",
      "vomiting",
      "alcohol"
    ],
    prevalence: "uncommon",
    severity: "severe",
    priority: 95,
    contagious: false,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      alcohol_use: { present: true, weight: 35 },
      gallstones: { present: true, weight: 40 },
      high_triglyceride: { present: true, weight: 25 },
      pancreatic_infection: { present: true, weight: 18 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      obesity: { present: true, weight: 12 },
      smoking: { present: true, weight: 12 },
      fatty_food_intake: { present: true, weight: 15 },
      previous_pancreatitis: { present: true, weight: 25 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      severe_upper_abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 60,
        aliases: [
          "epigastric_pain",
          "upper_stomach_pain"
        ],
        followup: {
          question: "Is upper abdominal pain extremely severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "intense_upper_abdominal_pain"
          },
          priority: 18
        }
      },

      pain_radiating_to_back: {
        category: "gastrointestinal",
        present: true,
        weight: 55,
        aliases: [
          "back_radiating_pain"
        ],
        followup: {
          question: "Does pain spread to the back?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "back_radiating_pain"
          },
          priority: 16
        }
      },

      vomiting: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 10
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 22,
        followup: {
          question: "Does nausea worsen after eating?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "food_triggered_nausea"
          },
          priority: 6
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
          priority: 5
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 25,
        aliases: [
          "abdominal_bloating",
          "visible_abdominal_swelling",
          "abdominal_fullness",
          "gas",
          "gassy"
        ],
        followup: {
          question: "Is the abdomen visibly bloated?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "visible_abdominal_swelling"
          },
          priority: 7
        }
      },

      loss_of_appetite: {
        category: "general",
        present: true,
        weight: 18,
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 5
        }
      },

      pain_after_food: {
        category: "gastrointestinal",
        present: true,
        weight: 35,
        aliases: [
          "post_meal_abdominal_pain"
        ],
        followup: {
          question: "Does pain worsen after eating food?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "post_meal_abdominal_pain"
          },
          priority: 12
        }
      },

      severe_abdominal_tenderness: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Is the abdomen painful on touch?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "touch_sensitive_abdomen"
          },
          priority: 12
        }
      },

      persistent_vomiting: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Has vomiting continued repeatedly for hours?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 15
        }
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      runny_nose: {
        category: "respiratory",
        present: false,
        weight: -20
      },
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      },
      food_triggered_ibs: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      abdominal_tenderness: { present: true, weight: 35 },
      guarding: { present: true, weight: 30 },
      dehydration: { present: true, weight: 25 },
      rapid_pulse: { present: true, weight: 25 },
      abdominal_distension: { present: true, weight: 25 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      lipase_high: { present: true, weight: 85 },
      amylase_high: { present: true, weight: 75 },
      ct_pancreatitis_positive: { present: true, weight: 95 },
      ultrasound_gallstones: { present: true, weight: 30 },
      wbc_high: { present: true, weight: 25 },
      crp_high: { present: true, weight: 25 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      pancreatic_necrosis: { present: true, weight: 85 },
      sepsis: { present: true, weight: 75 },
      kidney_failure: { present: true, weight: 65 },
      respiratory_failure: { present: true, weight: 70 },
      pancreatic_pseudocyst: { present: true, weight: 60 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_abdominal_pain: { present: true, weight: 75 },
      low_blood_pressure: { present: true, weight: 60 },
      shock: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 },
      severe_dehydration: { present: true, weight: 60 },
      persistent_vomiting: { present: true, weight: 55 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["severe_upper_abdominal_pain", "pain_radiating_to_back"],
        match: "all",
        bonus: 50
      },
      {
        symptoms: ["vomiting", "abdominal_bloating"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["pain_after_food"],
        match: "all",
        bonus: 20
      },
      {
        symptoms: ["persistent_vomiting", "severe_abdominal_tenderness"],
        match: "all",
        bonus: 30
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["relief_after_passing_stool"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["runny_nose"],
        match: "all",
        penalty: 20
      },
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 25
      },
      {
        symptoms: ["food_triggered_ibs"],
        match: "all",
        penalty: 25
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      pain_radiating_to_back: 20,
      severe_upper_abdominal_pain: 20,
      vomiting: 12,
      persistent_vomiting: 18
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 1,
        bonus: 8
      },
      {
        min_days: 5,
        penalty: 15
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 35,
        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "shock",
      "unconsciousness",
      "persistent_vomiting",
      "low_blood_pressure",
      "severe_upper_abdominal_pain"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {
      first_line: [
        { name: "IV Fluids (Isotonic Crystalloids)", type: "Volume Expander", dosage: "Aggressive titration protocol", frequency: "Continuous infusion", purpose: "Maintains pancreatic perfusion and corrects severe intravascular volume deficits" },
        { name: "Intravenous Analgesics (Opioids/NSAIDs)", type: "Systemic Analgesic", dosage: "As clinically managed", frequency: "Scheduled or PCA tracking", purpose: "Controls intense, radiating epigastric pain fields during acute phase" }
      ],
      supportive: [
        { name: "Ondansetron / Metoclopramide", type: "Antiemetic Agent", dosage: "4mg - 8mg IV", frequency: "Every 8 hours as needed", purpose: "Suppresses severe persistent vomiting and associated gastric hypersensitivity" },
        { name: "Broad-Spectrum IV Antibiotics", type: "Antimicrobial Prophylaxis", dosage: "Variable", frequency: "Clinically monitored cycles", purpose: "Reserved to treat confirmed pancreatic necrosis or matching infectious complications" }
      ]
    },

    // ==========================
    // TREATMENTS
    // ==========================
    treatments: [
      "Hospital Admission",
      "Pancreatic Monitoring",
      "ICU Support"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================
    lifestyle_changes: [
      "Avoid alcohol",
      "Low-fat diet",
      "Hydration maintenance",
      "Avoid smoking",
      "Regular medical follow-up"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Sudden onset of excruciating upper abdominal pain radiating straight into the back",
      "Inability to keep liquids down accompanied by continuous or dry-heaving vomit cycles",
      "Developing a rapid heart rate alongside signs of shallow breathing or systemic cold sweats",
      "Noticing a yellowing color profile in skin tissue or eyes (jaundice) indicating structural bile complications"
    ]
  }
];