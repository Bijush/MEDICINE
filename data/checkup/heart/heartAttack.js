// ==============================
// HEART ATTACK DATASET
// ADVANCED UNIVERSAL VERSION
// ==============================

export const HEART_ATTACK = [

  {

    id: "MI001",

    disease: "Heart Attack",

    medical_name:
      "Myocardial Infarction",

    aliases: [

      "MI",

      "Cardiac Arrest Attack",

      "Acute Coronary Syndrome"
    ],

    category: "heart",

    tags: [

      "heart",

      "chest pain",

      "cardiac",

      "emergency",

      "coronary artery disease"
    ],

    prevalence: "very_common",

    severity: "critical",

    mortality_risk: "high",

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      coronary_artery_blockage: {
        present: true,
        weight: 50
      },

      plaque_rupture: {
        present: true,
        weight: 40
      },

      blood_clot: {
        present: true,
        weight: 35
      }
    },

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      smoking: {
        present: true,
        weight: 25
      },

      diabetes: {
        present: true,
        weight: 20
      },

      hypertension: {
        present: true,
        weight: 20
      },

      obesity: {
        present: true,
        weight: 15
      },

      high_cholesterol: {
        present: true,
        weight: 25
      },

      family_history_heart_disease: {
        present: true,
        weight: 20
      },

      sedentary_lifestyle: {
        present: true,
        weight: 10
      },

      stress: {
        present: true,
        weight: 10
      },

      old_age: {
        present: true,
        weight: 15
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      severe_chest_pain: {
        present: true,
        weight: 70
      },

      chest_pressure: {
        present: true,
        weight: 65
      },

      chest_tightness: {
        present: true,
        weight: 50
      },

      pain_radiating_left_arm: {
        present: true,
        weight: 60
      },

      jaw_pain: {
        present: true,
        weight: 35
      },

      neck_pain: {
        present: true,
        weight: 20
      },

      back_pain: {
        present: true,
        weight: 20
      },

      sweating: {
        present: true,
        weight: 45
      },

      nausea: {
        present: true,
        weight: 20
      },

      vomiting: {
        present: true,
        weight: 15
      },

      breathing_difficulty: {
        present: true,
        weight: 50
      },

      dizziness: {
        present: true,
        weight: 30
      },

      fainting: {
        present: true,
        weight: 45
      },

      fatigue: {
        present: true,
        weight: 20
      },

      anxiety: {
        present: true,
        weight: 15
      },

      palpitations: {
        present: true,
        weight: 25
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      low_blood_pressure: {
        present: true,
        weight: 35
      },

      rapid_pulse: {
        present: true,
        weight: 25
      },

      irregular_pulse: {
        present: true,
        weight: 35
      },

      cold_sweaty_skin: {
        present: true,
        weight: 40
      },

      cyanosis: {
        present: true,
        weight: 50
      },

      low_spo2: {
        present: true,
        weight: 40
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ecg_st_elevation: {
        present: true,
        weight: 100
      },

      troponin_high: {
        present: true,
        weight: 100
      },

      ckmb_high: {
        present: true,
        weight: 80
      },

      echo_wall_motion_abnormality: {
        present: true,
        weight: 70
      },

      coronary_angiography_blockage: {
        present: true,
        weight: 95
      },

      bnp_high: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      cardiac_arrest: {
        present: true,
        weight: 100
      },

      heart_failure: {
        present: true,
        weight: 80
      },

      cardiogenic_shock: {
        present: true,
        weight: 90
      },

      arrhythmia: {
        present: true,
        weight: 70
      },

      pulmonary_edema: {
        present: true,
        weight: 70
      },

      sudden_cardiac_death: {
        present: true,
        weight: 100
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_chest_pain: {
        present: true,
        weight: 100
      },

      unconsciousness: {
        present: true,
        weight: 100
      },

      shock: {
        present: true,
        weight: 100
      },

      severe_breathlessness: {
        present: true,
        weight: 90
      },

      cyanosis: {
        present: true,
        weight: 100
      },

      cardiac_arrest: {
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

          "severe_chest_pain",

          "pain_radiating_left_arm"
        ],

        match: "all",

        bonus: 50
      },

      {

        symptoms: [

          "sweating",

          "breathing_difficulty"
        ],

        match: "all",

        bonus: 30
      },

      {

        symptoms: [

          "troponin_high"
        ],

        match: "all",

        bonus: 60
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "runny_nose",

          "sneezing"
        ],

        match: "all",

        penalty: 25
      },

      {

        symptoms: [

          "abdominal_cramp"
        ],

        match: "all",

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      severe_chest_pain: 20,

      sweating: 10,

      pain_radiating_left_arm: 20,

      breathing_difficulty: 15
    },

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_minutes: 20,

        bonus: 35
      },

      {

        min_hours: 1,

        bonus: 50
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        min_age: 40,

        bonus: 15
      },

      {

        min_age: 60,

        bonus: 25
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "severe_chest_pain",

      "shock",

      "unconsciousness",

      "cardiac_arrest",

      "cyanosis"
    ],

    // ==========================
    // EMERGENCY ACTIONS
    // ==========================

    emergency_actions: [

      "Call Emergency Ambulance",

      "Immediate ECG",

      "Emergency Cardiology Consult",

      "ICU Admission",

      "Continuous Cardiac Monitoring"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      "Aspirin",

      "Nitroglycerin",

      "Clopidogrel",

      "Atorvastatin",

      "Heparin",

      "Morphine"
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Emergency PCI",

      "Coronary Angioplasty",

      "Thrombolysis",

      "ICU Admission",

      "Oxygen Therapy"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Stop smoking",

      "Low fat diet",

      "Exercise regularly",

      "Control blood pressure",

      "Control diabetes",

      "Reduce stress",

      "Regular heart checkup"
    ]
  }
];