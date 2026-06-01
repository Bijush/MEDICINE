// ==============================
// COVID-19 DATASET
// ADVANCED PROFESSIONAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const COVID = [
  {
    id: "COV001",
    disease: "COVID-19",
    medical_name: "Coronavirus Disease 2019",
    category: "fever",
    tags: ["covid", "covid-19", "coronavirus", "viral", "respiratory", "pandemic"],
    prevalence: "common",
    severity: "severe",
    contagious: true,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      infected_person_contact: { present: true, weight: 40 },
      crowded_area_exposure: { present: true, weight: 20 },
      travel_history: { present: true, weight: 15 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      fever: {
        category: "fever",
        aliases: ["high_fever"],
        present: true,
        weight: 35
      },

      dry_cough: {
        category: "respiratory",
        aliases: ["cough"],
        present: true,
        weight: 40,
        followup: {
          question: "Has cough lasted more than 5 days?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_cough"
          },
          priority: 10
        }
      },

      sore_throat: {
        category: "ENT",
        present: true,
        weight: 20
      },

      breathing_difficulty: {
        category: "respiratory",
        aliases: ["shortness_of_breath"],
        present: true,
        weight: 45,
        followup: {
          question: "Does breathing worsen while walking?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "exercise_breathlessness"
          },
          priority: 14
        }
      },

      body_ache: {
        category: "pain",
        present: true,
        weight: 20
      },

      fatigue: {
        category: "general",
        present: true,
        weight: 25
      },

      headache: {
        category: "neurological",
        present: true,
        weight: 15
      },

      loss_of_smell: {
        category: "neurological",
        present: true,
        weight: 60,
        followup: {
          question: "Did smell suddenly disappear?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "sudden_loss_of_smell"
          },
          priority: 15
        }
      },

      loss_of_taste: {
        category: "neurological",
        present: true,
        weight: 60
      },

      diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 15
      },

      chest_pain: {
        category: "cardiovascular",
        present: true,
        weight: 25
      },

      chills: {
        category: "fever",
        present: true,
        weight: 15
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      platelet_low: {
        category: "hematological",
        present: false,
        weight: -30
      },
      pain_behind_eyes: {
        category: "ENT",
        present: false,
        weight: -20
      },
      burning_urination: {
        category: "urinary",
        present: false,
        weight: -20
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      spo2_low: { present: true, weight: 60 },
      lung_crackles: { present: true, weight: 35 },
      rapid_breathing: { present: true, weight: 35 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      covid_positive: { present: true, weight: 100 },
      rt_pcr_positive: { present: true, weight: 100 },
      crp_high: { present: true, weight: 25 },
      d_dimer_high: { present: true, weight: 30 },
      ct_ground_glass_opacity: { present: true, weight: 70 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      covid_pneumonia: { present: true, weight: 70 },
      respiratory_failure: { present: true, weight: 90 },
      blood_clot: { present: true, weight: 70 },
      sepsis: { present: true, weight: 70 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      spo2_below_90: { present: true, weight: 100 },
      severe_breathlessness: { present: true, weight: 90 },
      chest_pressure: { present: true, weight: 70 },
      unconsciousness: { present: true, weight: 100 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["loss_of_smell"],
        match: "any",
        bonus: 35
      },
      {
        symptoms: ["loss_of_taste"],
        match: "any",
        bonus: 35
      },
      {
        symptoms: ["dry_cough", "fever"],
        match: "all",
        bonus: 20
      },
      {
        symptoms: ["breathing_difficulty", "spo2_below_90"],
        match: "all",
        bonus: 40
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["platelet_low"],
        match: "any",
        penalty: 30
      },
      {
        symptoms: ["pain_behind_eyes"],
        match: "any",
        penalty: 20
      },
      {
        symptoms: ["burning_urination"],
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
    // EMERGENCY SYMPTOMS
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
    medicines: {
      first_line: [
        { name: "Remdesivir / Paxlovid", type: "Antiviral Treatment", dosage: "As clinically prescribed", frequency: "Guided by specialist protocol", purpose: "Inhibits viral replication cycle during early stages" }
      ],
      supportive: [
        { name: "Paracetamol", type: "Antipyretic / Analgesic", dosage: "500mg", frequency: "Every 6 hours PRN", purpose: "Manages viral pyrexia, continuous headaches, and body aches" },
        { name: "ORS (Oral Rehydration Salts)", type: "Electrolyte Support", dosage: "1 packet", frequency: "As required", purpose: "Maintains systematic fluid balance in case of secondary diarrhea" },
        { name: "Medical Oxygen", type: "Respiratory Therapy", dosage: "Titrated to effect", frequency: "Continuous titration", purpose: "Corrects acute hypoxemia and low SpO2 thresholds" }
      ]
    },

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
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Oxygen saturation levels dropping consistently below 94% at rest",
      "Inability to hold conversation without experiencing respiratory distress",
      "New or worsening confusion, extreme drowsiness, or blue lips/face",
      "Persistent pain, pressure, or tightness across the thoracic region"
    ]
  }
];