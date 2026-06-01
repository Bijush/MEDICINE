// ==============================
// INTESTINAL OBSTRUCTION DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const INTESTINAL_OBSTRUCTION = [
  {
    id: "IO001",
    disease: "Intestinal Obstruction",
    medical_name: "Bowel Obstruction",
    aliases: [
      "bowel obstruction",
      "intestinal blockage",
      "blocked intestine"
    ],
    category: "stomach",
    tags: [
      "abdomen",
      "vomiting",
      "constipation",
      "emergency"
    ],
    prevalence: "uncommon",
    severity: "emergency",
    priority: 100,
    contagious: false,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      abdominal_surgery_history: { present: true, weight: 30 },
      hernia: { present: true, weight: 30 },
      intestinal_tumor: { present: true, weight: 35 },
      severe_constipation: { present: true, weight: 25 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      previous_bowel_obstruction: { present: true, weight: 25 },
      crohns_disease: { present: true, weight: 20 },
      abdominal_infection_history: { present: true, weight: 12 },
      old_age: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      severe_abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 60,
        aliases: [
          "intense_stomach_pain"
        ],
        followup: {
          question: "Is abdominal pain extremely severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "intense_abdominal_pain"
          },
          priority: 18
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "abdominal_bloating",
          "visible_abdominal_swelling",
          "abdominal_fullness",
          "distension"
        ],
        followup: {
          question: "Is the abdomen visibly swollen?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "visible_abdominal_swelling"
          },
          priority: 12
        }
      },

      vomiting: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 13
        }
      },

      inability_to_pass_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 55,
        aliases: [
          "no_bowel_movement"
        ],
        followup: {
          question: "Have you completely stopped passing stool?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "complete_bowel_obstruction"
          },
          priority: 20
        }
      },

      inability_to_pass_gas: {
        category: "gastrointestinal",
        present: true,
        weight: 50,
        aliases: [
          "unable_to_pass_gas"
        ],
        followup: {
          question: "Are you unable to pass gas at all?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "gas_obstruction"
          },
          priority: 18
        }
      },

      constipation: {
        category: "gastrointestinal",
        present: true,
        weight: 35,
        followup: {
          question: "Has constipation lasted several days?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_constipation"
          },
          priority: 8
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
          priority: 5
        }
      },

      colicky_abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "wave_like_abdominal_pain"
        ],
        followup: {
          question: "Does pain come in waves repeatedly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "wave_like_abdominal_pain"
          },
          priority: 14
        }
      },

      abdominal_distension: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Is the abdomen tight and enlarged?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_abdominal_distension"
          },
          priority: 12
        }
      },

      vomiting_fecal_smell: {
        category: "gastrointestinal",
        present: true,
        weight: 60,
        aliases: [
          "feculent_vomiting"
        ],
        followup: {
          question: "Does vomit smell like stool?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "feculent_vomiting"
          },
          priority: 22
        }
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      food_triggered_ibs: {
        category: "gastrointestinal",
        present: false,
        weight: -30
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      abdominal_distension: { present: true, weight: 40 },
      absent_bowel_sound: { present: true, weight: 55 },
      abdominal_tenderness: { present: true, weight: 30 },
      dehydration: { present: true, weight: 25 },
      high_pitched_bowel_sound: { present: true, weight: 45 },
      rigid_abdomen: { present: true, weight: 55 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      xray_air_fluid_level: { present: true, weight: 80 },
      ct_obstruction_positive: { present: true, weight: 95 },
      electrolyte_imbalance: { present: true, weight: 30 },
      wbc_high: { present: true, weight: 25 },
      ct_bowel_dilatation: { present: true, weight: 80 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      bowel_perforation: { present: true, weight: 100 },
      sepsis: { present: true, weight: 90 },
      shock: { present: true, weight: 100 },
      intestinal_necrosis: { present: true, weight: 95 },
      severe_dehydration: { present: true, weight: 60 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_abdominal_pain: { present: true, weight: 80 },
      persistent_vomiting: { present: true, weight: 60 },
      unconsciousness: { present: true, weight: 100 },
      shock: { present: true, weight: 100 },
      rigid_abdomen: { present: true, weight: 90 },
      severe_dehydration: { present: true, weight: 70 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["inability_to_pass_stool", "inability_to_pass_gas"],
        match: "all",
        bonus: 50
      },
      {
        symptoms: ["abdominal_bloating", "vomiting"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["colicky_abdominal_pain"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["vomiting_fecal_smell", "abdominal_distension"],
        match: "all",
        bonus: 60
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["diarrhea"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["relief_after_passing_stool"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["food_triggered_ibs"],
        match: "all",
        penalty: 30
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      severe_abdominal_pain: 20,
      abdominal_bloating: 15,
      vomiting: 15,
      inability_to_pass_stool: 25
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 1,
        bonus: 12
      },
      {
        min_days: 3,
        penalty: 20
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 60,
        bonus: 12
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "shock",
      "unconsciousness",
      "rigid_abdomen",
      "persistent_vomiting",
      "vomiting_fecal_smell"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {
      first_line: [
        { name: "IV Fluids (Isotonic Crystalloids)", type: "Volume Replacement", dosage: "Aggressive maintenance calculation", frequency: "Continuous drip monitoring", purpose: "Corrects profound dehydration and addresses systemic electrolyte imbalances caused by third-spacing" },
        { name: "Broad-Spectrum Intravenous Antibiotics", type: "Antimicrobial Prophylaxis", dosage: "Variable based on agent", frequency: "Scheduled clinical cycles", purpose: "Prevents translocation of gut bacteria and secondary sepsis in ischemia or impending perforation" }
      ],
      supportive: [
        { name: "Intravenous Analgesics / Antiemetics", type: "Symptom Management Support", dosage: "Titrated clinical limits", frequency: "As needed under observation", purpose: "Addresses severe cramping fields and controls gastric upward distress profiles with caution" }
      ]
    },

    // ==========================
    // TREATMENTS
    // ==========================
    treatments: [
      "Nasogastric Tube decompression",
      "Emergency Surgical Intervention",
      "Immediate Hospital Admission",
      "Strict NPO (Nil Per Os) Protocol"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================
    lifestyle_changes: [
      "Immediate hospital evaluation",
      "Avoid self-medication",
      "Early surgical consultation",
      "Avoid delaying treatment"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Inability to pass both gas and stool completely for an extended period, leading to a hard or swollen belly",
      "Vomiting that appears unusually green or brown, or carries a distinct fecal odor",
      "Sudden onset of severe, continuous abdominal pain that makes it painful even to touch or move",
      "Experiencing cold sweats, high fever, or lightheadedness, indicating immediate systemic complication"
    ]
  }
];