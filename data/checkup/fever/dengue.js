// ==============================
// DENGUE DATASET
// ADVANCED PROFESSIONAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const DENGUE = [
  {
    id: "DEN001",
    disease: "Dengue Fever",
    medical_name: "Dengue Viral Fever",
    category: "fever",
    tags: ["dengue", "mosquito", "viral", "fever", "tropical", "breakbone"],
    prevalence: "common",
    severity: "severe",
    contagious: false,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      mosquito_bite: { present: true, weight: 35 },
      dengue_outbreak_area: { present: true, weight: 25 },
      rainy_season_exposure: { present: true, weight: 15 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      high_fever: {
        category: "fever",
        present: true,
        weight: 40,
        followup: {
          question: "Is fever very high?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "very_high_fever"
          },
          priority: 10
        }
      },

      sudden_fever: {
        category: "fever",
        present: true,
        weight: 30
      },

      severe_headache: {
        category: "neurological",
        present: true,
        weight: 25
      },

      pain_behind_eyes: {
        category: "ENT",
        present: true,
        weight: 35
      },

      body_ache: {
        category: "pain",
        present: true,
        weight: 30,
        followup: {
          question: "Is body pain severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_body_ache"
          },
          priority: 8
        }
      },

      muscle_pain: {
        category: "pain",
        present: true,
        weight: 30
      },

      joint_pain: {
        category: "pain",
        present: true,
        weight: 30
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 15
      },

      vomiting: {
        category: "gastrointestinal",
        present: true,
        weight: 15
      },

      skin_rash: {
        category: "dermatological",
        present: true,
        weight: 25,
        followup: {
          question: "Did rash appear after fever?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "dengue_rash"
          },
          priority: 7
        }
      },

      fatigue: {
        category: "general",
        present: true,
        weight: 20
      },

      abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 20
      },

      bleeding_gums: {
        category: "hematological",
        present: true,
        weight: 40
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      loss_of_smell: {
        category: "neurological",
        present: false,
        weight: -25
      },
      chronic_cough: {
        category: "respiratory",
        present: false,
        weight: -20
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      dehydration: { present: true, weight: 20 },
      low_blood_pressure: { present: true, weight: 30 },
      petechiae: { present: true, weight: 35 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      dengue_nsg1_positive: { present: true, weight: 90 },
      dengue_igg_positive: { present: true, weight: 40 },
      dengue_igm_positive: { present: true, weight: 70 },
      platelet_low: { present: true, weight: 60 },
      hematocrit_high: { present: true, weight: 35 },
      wbc_low: { present: true, weight: 30 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      dengue_hemorrhagic_fever: { present: true, weight: 80 },
      dengue_shock_syndrome: { present: true, weight: 100 },
      severe_bleeding: { present: true, weight: 70 },
      liver_injury: { present: true, weight: 40 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_abdominal_pain: { present: true, weight: 70 },
      persistent_vomiting: { present: true, weight: 60 },
      bleeding_gums: { present: true, weight: 70 },
      blood_in_vomit: { present: true, weight: 90 },
      black_stool: { present: true, weight: 90 },
      shock: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["pain_behind_eyes", "platelet_low"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["high_fever", "body_ache"],
        match: "all",
        bonus: 20
      },
      {
        symptoms: ["bleeding_gums"],
        match: "any",
        bonus: 25
      },
      {
        symptoms: ["skin_rash", "joint_pain"],
        match: "all",
        bonus: 20
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["loss_of_smell"],
        match: "any",
        penalty: 25
      },
      {
        symptoms: ["chronic_cough"],
        match: "any",
        penalty: 20
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
      body_ache: 10,
      fatigue: 8,
      abdominal_pain: 10,
      platelet_low: 15
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
        min_days: 7,
        penalty: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "shock",
      "unconsciousness",
      "black_stool",
      "blood_in_vomit",
      "spo2_below_90"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {
      first_line: [
        { name: "Paracetamol", type: "Antipyretic / Analgesic", dosage: "500mg", frequency: "Every 6 hours PRN", purpose: "Manages high fever and bone pain while remaining safe for platelets" }
      ],
      supportive: [
        { name: "ORS (Oral Rehydration Salts)", type: "Electrolyte Replenisher", dosage: "1 packet", frequency: "Freely as tolerated", purpose: "Combats critical fluid loss and prevents dehydration" },
        { name: "IV Fluids", type: "Intravenous Hydration", dosage: "As clinically guided", frequency: "Continuous monitoring", purpose: "Maintains intravascular volume in case of plasma leakage" }
      ]
    },

    // ==========================
    // TREATMENTS
    // ==========================
    treatments: [
      "Platelet Monitoring",
      "Hydration Therapy",
      "Hospital Observation"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================
    lifestyle_changes: [
      "Avoid mosquito exposure",
      "Drink plenty of fluids",
      "Strictly avoid NSAIDs (Ibuprofen, Aspirin) due to bleeding risks",
      "Immediate hospital visit if warning signs or bleeding occurs"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Persistent vomiting or inability to keep fluids down",
      "Severe or progressive abdominal tenderness",
      "Spontaneous mucosal bleeding from nose, gums, or skin bruises",
      "Lethargy, sudden dizziness, cold extremities, or altered alertness"
    ]
  }
];