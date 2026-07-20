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
     prior_probability: 0.35,
    severity: "mild",
    priority: 40,
    contagious: false,
    emergency: false,
    minimum_match: 2,

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
    category: "STOOL",
    present: true,
    weight: 55,
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
    category: "STOOL",
    present: true,
    weight: 60,
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

  excessive_gas: {
    category: "gastrointestinal",
    present: true,
    weight: 15,
    aliases: [
      "gas_problem",
      "flatulence",
      "frequent_gas",
      "gas",
      "gassy"
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

  bloating: {
    category: "gastrointestinal",
    present: true,
    weight: 15,
    aliases: [
      "abdominal_bloating",
      "stomach_bloating"
    ]
  },

  abdominal_pain: {
    category: "STOMACH PAIN",
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
    category: "STOOL",
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
    category: "STOOL",
    present: true,
    aliases: [
      "pain_relief_after_stool"
    ],
    weight: 15
  },

  // ======================
  // DIFFERENTIAL EXCLUSIONS
  // ======================

  watery_diarrhea: {
    category: "gastrointestinal",
    present: false,
    weight: -40
  },

  bloody_diarrhea: {
    category: "gastrointestinal",
    present: false,
    weight: -40
  },

  high_fever: {
    category: "fever",
    present: false,
    weight: -25
  },

  vomiting_blood: {
    category: "gastrointestinal",
    present: false,
    weight: -50
  },

  severe_vomiting: {
    category: "gastrointestinal",
    present: false,
    weight: -45
  },

  pain_moving_to_right_side: {
    category: "gastrointestinal",
    present: false,
    weight: -35
  },

  rebound_tenderness: {
    category: "gastrointestinal",
    present: false,
    weight: -50
  },

  rigid_abdomen: {
    category: "gastrointestinal",
    present: false,
    weight: -50
  },

  alternating_diarrhea_constipation: {
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
    
    required_symptoms: [
  "hard_stool"

],
required_negative_symptoms: [
  "watery_diarrhea",
  "bloody_diarrhea"
],
differential_diagnosis: [
  "Irritable Bowel Syndrome",
  "Appendicitis",
  "Intestinal Obstruction",
  "Colon Cancer",
  "Hypothyroidism",
  "Gastroenteritis"
],

mutually_exclusive_with: [

  "Appendicitis",

  "Crohn's Disease"

],


symptom_clusters: {

  classic_constipation_cluster: {

    symptoms: [
      "hard_stool",
      "difficulty_passing_stool",
      "straining_during_stool"
    ],

    minimum_match: 2,

    bonus: 40
  },

  chronic_constipation_cluster: {

    symptoms: [
      "infrequent_bowel_movement",
      "incomplete_bowel_feeling",
      "hard_stool"
    ],

    minimum_match: 2,

    bonus: 35
  }

},

progression: {

  worsening_over_weeks: {
    present: true,
    weight: 20
  },

  increasing_straining: {
    present: true,
    weight: 20
  },

  persistent_hard_stool: {
    present: true,
    weight: 25
  }

},
epidemiology: {

  low_fiber_diet: {
    present: true,
    weight: 15
  },

  sedentary_lifestyle: {
    present: true,
    weight: 15
  },

  old_age: {
    present: true,
    weight: 10
  }

},


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
prescription_medicines: [

  {
    name: "Lactulose",

    line: "prescription",

    condition: {
      en: "When stool is hard and difficult to pass",
      bn: "মল শক্ত ও বের করতে কষ্ট হলে"
    },

    frequency: {
      en: "Once daily",
      bn: "প্রতিদিন ১ বার"
    },

    purpose: {
      en: "Softens stool and relieves constipation",
      bn: "মল নরম করে এবং কোষ্ঠকাঠিন্য কমায়"
    }
  },

  {
    name: "Polyethylene Glycol (PEG 3350)",

    line: "prescription",

    condition: {
      en: "Moderate to severe constipation",
      bn: "মাঝারি থেকে তীব্র কোষ্ঠকাঠিন্যে"
    },

    frequency: {
      en: "Once daily",
      bn: "প্রতিদিন ১ বার"
    },

    purpose: {
      en: "Improves bowel movement by retaining water in stool",
      bn: "মলে পানি ধরে রেখে মলত্যাগ সহজ করে"
    }
  },

  {
    name: "Bisacodyl",

    line: "prescription",

    condition: {
      en: "Short-term severe constipation",
      bn: "স্বল্পমেয়াদী তীব্র কোষ্ঠকাঠিন্যে"
    },

    frequency: {
      en: "At bedtime if needed",
      bn: "প্রয়োজনে রাতে ঘুমানোর আগে"
    },

    purpose: {
      en: "Stimulates bowel movement",
      bn: "মলত্যাগ উদ্দীপিত করে"
    }
  }

],

supportive_medicines: [

  {
    name: "Isabgol (Psyllium Husk)",

    line: "supportive",

    purpose: {
      en: "Improves stool bulk and bowel regularity",
      bn: "মলের পরিমাণ বাড়িয়ে নিয়মিত মলত্যাগে সাহায্য করে"
    },

    condition: {
      en: "For chronic constipation",
      bn: "দীর্ঘদিনের কোষ্ঠকাঠিন্যে"
    },

    usageType: {
      en: "Dietary fiber supplement",
      bn: "খাদ্য আঁশ সম্পূরক"
    }
  },

  {
    name: "High-Fiber Diet",

    line: "supportive",

    purpose: {
      en: "Supports long-term bowel health",
      bn: "দীর্ঘমেয়াদে অন্ত্রের স্বাস্থ্য ভালো রাখে"
    },

    condition: {
      en: "Daily preventive care",
      bn: "প্রতিদিনের প্রতিরোধমূলক যত্ন"
    },

    usageType: {
      en: "Lifestyle modification",
      bn: "জীবনযাত্রার পরিবর্তন"
    }
  },

  {
    name: "Adequate Water Intake",

    line: "supportive",

    purpose: {
      en: "Prevents dehydration and hard stool formation",
      bn: "পানিশূন্যতা ও শক্ত মল হওয়া প্রতিরোধ করে"
    },

    condition: {
      en: "Throughout the day",
      bn: "সারাদিন"
    },

    usageType: {
      en: "Supportive care",
      bn: "সহায়ক যত্ন"
    }
  }

]


  }
];