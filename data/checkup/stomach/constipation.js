// ==============================
// CONSTIPATION DATASET
// OPTIMIZED CANONICAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const CONSTIPATION = [
  {
    id: "CONS001",
    disease: "Constipation",
    medical_name: "Constipation",
    aliases: [
      "chronic_constipation",
      "bowel_constipation",
      "hard_stool_problem"
    ],
    category: "stomach",
    tags: [
      "bowel",
      "stool",
      "digestion",
      "gas"
    ],
    prevalence: "very_common",
    severity: "mild",
    priority: 40,
    contagious: false,
    emergency: false,
    minimum_match: 1,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      low_fiber_diet: { present: true, weight: 25 },
      dehydration: { present: true, weight: 25 },
      sedentary_lifestyle: { present: true, weight: 15 },
      stress: { present: true, weight: 10 },
      painkiller_overuse: { present: true, weight: 15 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      old_age: { present: true, weight: 10 },
      pregnancy: { present: true, weight: 15 },
      diabetes: { present: true, weight: 10 },
      hypothyroidism: { present: true, weight: 15 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      hard_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "dry_stool",
          "hard_bowel"
        ],
        followup: {
          question: "Is stool extremely hard and dry?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "hard_stool"
          },
          priority: 12
        }
      },

      difficulty_passing_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 50,
        aliases: [
          "trouble_passing_stool",
          "painful_stool_passing"
        ],
        followup: {
          question: "Do you struggle while passing stool?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "difficulty_passing_stool"
          },
          priority: 14
        }
      },

      infrequent_bowel_movement: {
        category: "gastrointestinal",
        present: true,
        weight: 45,
        aliases: [
          "chronic_constipation"
        ],
        followup: {
          question: "Do bowel movements occur less than 3 times a week?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "infrequent_bowel_movement"
          },
          priority: 12
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 15,
        aliases: [
          "gas_problem",
          "flatulence",
          "frequent_gas",
          "gas",
          "gassy",
          "excessive_gas"
        ],
        followup: {
          question: "Do you experience excessive gas frequently?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "chronic_gas_problem"
          },
          priority: 4
        }
      },

      abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        aliases: [
          "abdominal_discomfort",
          "persistent_abdominal_discomfort"
        ],
        followup: {
          question: "Does abdominal discomfort persist daily?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "abdominal_pain"
          },
          priority: 5
        }
      },

      excessive_gas: {
        category: "gastrointestinal",
        present: true,
        weight: 15,
        aliases: [
          "gas_problem",
          "flatulence",
          "frequent_gas"
        ],
        followup: {
          question: "Do you experience excessive gas frequently?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "excessive_gas"
          },
          priority: 4
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 5,
        followup: {
          question: "Does nausea occur with severe constipation?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "constipation_related_nausea"
          },
          priority: 2
        }
      },

      incomplete_bowel_feeling: {
        category: "gastrointestinal",
        present: true,
        weight: 35,
        aliases: [
          "feeling_incomplete_evacuations",
          "incomplete_bowel_emptying"
        ],
        followup: {
          question: "Do you feel stool is not fully passed?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "incomplete_bowel_feeling"
          },
          priority: 9
        }
      },

      straining_during_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        aliases: [
          "severe_straining"
        ],
        followup: {
          question: "Do you need excessive straining during stool?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "straining_during_stool"
          },
          priority: 10
        }
      },

      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: true,
        aliases: [
          "pain_relief_after_stool"
        ],
        weight: 15
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      high_fever: {
        category: "fever",
        present: false,
        weight: -25
      },
      bloody_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      vomiting_blood: {
        category: "gastrointestinal",
        present: false,
        weight: -50
      },
      pain_moving_to_right_side: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      bloating: { present: true, weight: 15 },
      abdominal_tenderness: { present: true, weight: 10 },
      hard_stool_on_exam: { present: true, weight: 30 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      xray_fecal_loading: { present: true, weight: 40 },
      colonoscopy_normal: { present: true, weight: 15 },
      thyroid_test_abnormal: { present: true, weight: 10 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      hemorrhoids: { present: true, weight: 25 },
      anal_fissure: { present: true, weight: 25 },
      fecal_impaction: { present: true, weight: 45 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      blood_in_stool: { present: true, weight: 45 },
      severe_abdominal_pain: { present: true, weight: 60 },
      vomiting: { present: true, weight: 45 },
      severe_weight_loss: { present: true, weight: 60 },
      black_stool: { present: true, weight: 70 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["hard_stool", "difficulty_passing_stool"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["infrequent_bowel_movement", "incomplete_bowel_feeling"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["straining_during_stool", "hard_stool"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["relief_after_passing_stool"],
        match: "all",
        bonus: 10
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["high_fever"],
        match: "all",
        penalty: 25
      },
      {
        symptoms: ["bloody_diarrhea"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["vomiting_blood"],
        match: "all",
        penalty: 50
      },
      {
        symptoms: ["pain_moving_to_right_side"],
        match: "all",
        penalty: 35
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      hard_stool: 15,
      difficulty_passing_stool: 18,
      straining_during_stool: 12,
      infrequent_bowel_movement: 15
    },

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
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 7,
        bonus: 10
      },
      {
        min_days: 30,
        bonus: 20
      },
      {
        min_days: 90,
        bonus: 30
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "severe_abdominal_pain",
      "vomiting",
      "blood_in_stool",
      "black_stool"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Lactulose",

      type: "Osmotic Laxative",

      dosage: "15ml - 30ml daily",

      frequency: "Once daily",

      purpose: {
        en: "Softens stool and relieves constipation",
        bn: "মল নরম করে এবং কোষ্ঠকাঠিন্য কমাতে সাহায্য করে"
      }
    },

    {
      line: "first_line",

      name: "Isabgol (Psyllium Husk)",

      type: "Bulk-Forming Laxative",

      dosage: "1 - 2 tablespoons with water",

      frequency: "Once or twice daily",

      purpose: {
        en: "Improves stool bulk and bowel regularity",
        bn: "মলের পরিমাণ বাড়ায় এবং নিয়মিত মলত্যাগে সহায়তা করে"
      }
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Polyethylene Glycol (PEG 3350)",

      type: "Osmotic Laxative",

      dosage: "17g powder",

      frequency: "Once daily",

      purpose: {
        en: "Retains water in stool and improves bowel movements",
        bn: "মলে পানি ধরে রেখে মলত্যাগ সহজ করে"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Bisacodyl",

      type: "Stimulant Laxative",

      dosage: "5mg - 10mg",

      frequency: "At bedtime if needed",

      purpose: {
        en: "Provides short-term constipation relief",
        bn: "স্বল্পমেয়াদে কোষ্ঠকাঠিন্য উপশম করে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "High-Fiber Diet",

      type: "Lifestyle Modification",

      dosage: "25g - 35g fiber daily",

      frequency: "Daily",

      purpose: {
        en: "Supports long-term bowel health",
        bn: "দীর্ঘমেয়াদে অন্ত্রের সুস্থতা বজায় রাখতে সাহায্য করে"
      }
    },

    {
      line: "fourth_line",

      name: "Adequate Water Intake",

      type: "Supportive Care",

      dosage: "2 - 3 liters daily",

      frequency: "Throughout the day",

      purpose: {
        en: "Prevents dehydration and hard stool formation",
        bn: "পানিশূন্যতা ও শক্ত মল হওয়া প্রতিরোধ করে"
      }
    }

  ]

},

// ==========================
// TREATMENTS
// ==========================

treatments: [

  {
    en: "Increase dietary fiber",
    bn: "খাদ্যে আঁশের পরিমাণ বাড়ান"
  },

  {
    en: "Drink plenty of water",
    bn: "পর্যাপ্ত পানি পান করুন"
  },

  {
    en: "Bowel retraining exercises",
    bn: "নিয়মিত মলত্যাগের অভ্যাস গড়ে তুলুন"
  }

],

// ==========================
// LIFESTYLE
// ==========================

lifestyle_changes: [

  {
    en: "Eat more fruits and vegetables",
    bn: "বেশি ফল ও শাকসবজি খান"
  },

  {
    en: "Stay well hydrated",
    bn: "শরীরে পর্যাপ্ত পানি বজায় রাখুন"
  },

  {
    en: "Exercise regularly",
    bn: "নিয়মিত ব্যায়াম করুন"
  },

  {
    en: "Avoid processed foods",
    bn: "প্রসেসড খাবার এড়িয়ে চলুন"
  },

  {
    en: "Do not ignore the urge to pass stool",
    bn: "পায়খানার চাপ এলে তা দমন করবেন না"
  }

],

// ==========================
// DOCTOR CONSULTATION
// ==========================

doctor_consultation: [

  {
    en: "Severe abdominal pain or bloating",
    bn: "তীব্র পেটব্যথা বা পেট ফোলা"
  },

  {
    en: "Blood in stool",
    bn: "পায়খানার সাথে রক্ত যাওয়া"
  },

  {
    en: "Persistent vomiting",
    bn: "ক্রমাগত বমি হওয়া"
  },

  {
    en: "Unexplained weight loss",
    bn: "কারণ ছাড়াই ওজন কমে যাওয়া"
  },

  {
    en: "Black or tarry stool",
    bn: "কালো বা টারের মতো পায়খানা"
  }

]
  }
];