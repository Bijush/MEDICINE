// ==============================
// APPENDICITIS DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const APPENDICITIS = [
  {
    id: "APP001",
    disease: "Appendicitis",
    medical_name: "Acute Appendicitis",
    
    category: "stomach",
    tags: [
      "appendix",
      "abdominal pain",
      "surgery",
      "emergency"
    ],
    prevalence: "common",
    prior_probability: 0.15,
    severity: "severe",
    priority: 100,
    contagious: false,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
  appendix_blockage: { present: true, weight: 30 },
  bacterial_infection: { present: true, weight: 25 },

  fecalith_obstruction: {
    present: true,
    weight: 35
  },

  lymphoid_hyperplasia: {
    present: true,
    weight: 20
  }
},

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      low_fiber_diet: { present: true, weight: 15 },
      family_history: { present: true, weight: 5 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      right_lower_abdominal_pain: {
        category: "STOMACH PAIN",
        present: true,
        weight: 55,
        
        followup: {
          question: "Is pain severe on the lower right side?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_right_lower_pain"
          },
          priority: 15
        }
      },

      pain_starting_near_navel: {
        category: "STOMACH PAIN",
        present: true,
        weight: 35,
        followup: {
          question: "Did pain start near the navel first?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "central_to_right_pain"
          },
          priority: 10
        }
      },

      pain_moving_to_right_side: {
        category: "STOMACH PAIN",
        present: true,
        weight: 60,
        followup: {
          question: "Did pain shift to the right side later?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "migrating_abdominal_pain"
          },
          priority: 15
        }
      },

      rebound_pain: {
        category: "STOMACH PAIN",
        present: true,
        weight: 45,
        followup: {
          question: "Does pain worsen suddenly after releasing pressure from abdomen?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "positive_rebound_pain"
          },
          priority: 12
        }
      },

      fever: {
        category: "fever",
        present: true,
        weight: 20,
        followup: {
          question: "Is fever mild or high?",
          options: ["Mild", "High"],
          symptomMap: {
            "Mild": "mild_fever",
            "High": "high_fever"
          },
          priority: 5
        }
      },

      nausea: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        followup: {
          question: "Did nausea begin after abdominal pain?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "pain_followed_by_nausea"
          },
          priority: 5
        }
      },

      vomiting: {
        category: "VOMIT",
        present: true,
        weight: 20,
        followup: {
          question: "Is vomiting frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_vomiting"
          },
          priority: 7
        }
      },

      appetite_loss: {
        category: "gastrointestinal",
        present: true,
        weight: 25,
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 6
        }
      },

      constipation: {
        category: "gastrointestinal",
        present: true,
        weight: 5,
        followup: {
          question: "Has constipation lasted several days?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_constipation"
          },
          priority: 3
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 8,
        aliases: [
          "abdominal_bloating",
          "visible_abdominal_swelling",
          "abdominal_distension",
          "gas",
          "gassy"
        ],
        followup: {
          question: "Is the abdomen visibly swollen?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "visible_abdominal_swelling"
          },
          priority: 4
        }
      },

      pain_walking: {
        category: "PAIN",
        present: true,
        weight: 30,
        followup: {
          question: "Does pain worsen while walking?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "movement_triggered_pain"
          },
          priority: 8
        }
      },

      pain_on_coughing: {
        category: "PAIN",
        present: true,
        weight: 30,
        followup: {
          question: "Does coughing increase pain?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "cough_triggered_pain"
          },
          priority: 8
        }
      },
      fatigue: {
  category: "constitutional",
  present: true,
  weight: 10
},

weakness: {
  category: "constitutional",
  present: true,
  weight: 10
},

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      chronic_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -20
      },
      burning_urination: {
        category: "urinary",
        present: false,
        weight: -15
      },
      bloody_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -40
      },
      black_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -45
      },
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -30
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {

  mcburney_point_tenderness: {
    present: true,
    weight: 70
  },

  rebound_tenderness: {
    present: true,
    weight: 60
  },

  guarding: {
    present: true,
    weight: 45
  },

  rigid_abdomen: {
    present: true,
    weight: 70
  },

  rovsing_sign_positive: {
    present: true,
    weight: 55
  },

  psoas_sign_positive: {
    present: true,
    weight: 50
  },

  obturator_sign_positive: {
    present: true,
    weight: 45
  },

  right_lower_quadrant_tenderness: {
    present: true,
    weight: 65
  },

  localized_abdominal_tenderness: {
    present: true,
    weight: 40
  },

  pain_on_percussion: {
    present: true,
    weight: 45
  },

  abdominal_distension: {
    present: true,
    weight: 20
  }

},

triage: {

  level: "red"

},

organ_system: "gastrointestinal",
    // ==========================
    // TESTS
    // ==========================
    tests: {
  wbc_high: { present: true, weight: 30 },
  crp_high: { present: true, weight: 20 },

  ultrasound_appendix_swollen: {
    present: true,
    weight: 65
  },

  ct_appendicitis_positive: {
    present: true,
    weight: 90
  },

  appendix_diameter_gt_6mm: {
    present: true,
    weight: 75
  },

  fecalith_seen_on_ct: {
    present: true,
    weight: 60
  },

  free_fluid_rlq: {
    present: true,
    weight: 45
  },

  normal_ct_scan: {
    present: false,
    weight: -80
  }
},

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
  appendix_rupture: { present: true, weight: 95 },
  abscess_formation: { present: true, weight: 70 },
  sepsis: { present: true, weight: 100 },

  generalized_peritonitis: {
    present: true,
    weight: 100
  }
},

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
  severe_abdominal_pain: {
    present: true,
    weight: 80
  },

  rigid_abdomen: {
    present: true,
    weight: 95
  },

  high_fever: {
    present: true,
    weight: 70
  },

  persistent_vomiting: {
    present: true,
    weight: 75
  },

  shock: {
    present: true,
    weight: 100
  },

  unconsciousness: {
    present: true,
    weight: 100
  }
},
    
    // ==========================
// REQUIRED SYMPTOMS
// ==========================

required_symptoms:[
"right_lower_abdominal_pain",
"pain_moving_to_right_side"
],

required_negative_symptoms: [
  "relief_after_passing_stool",
  "watery_diarrhea"
],

gold_symptoms: [
  "right_lower_abdominal_pain",
  "pain_moving_to_right_side",
  "rebound_pain",
  "pain_walking"
],

pathognomonic_symptoms: [
  "pain_moving_to_right_side",
  "mcburney_point_tenderness"
],

// ==========================
// mutually_exclusive_with
// ==========================

mutually_exclusive_with:[

"Constipation",

"Crohn's Disease",

"Gastroenteritis",

"Kidney Stone",

"Urinary Tract Infection"

],
likelihood_ratio_positive: 12,

likelihood_ratio_negative: 0.15,
// ==========================
// SYMPTOM CLUSTERS
// ==========================

symptom_clusters: {

  classic_appendicitis_cluster: {

    symptoms: [
      "right_lower_abdominal_pain",
      "pain_moving_to_right_side",
      "nausea",
      "appetite_loss"
    ],

    minimum_match: 3,

    bonus: 80
  },

  peritoneal_irritation_cluster: {

    symptoms: [
      "rebound_pain",
      "pain_walking",
      "pain_on_coughing"
    ],

    minimum_match: 2,

    bonus: 70
  },

  severe_appendicitis_cluster: {

    symptoms: [
      "high_fever",
      "persistent_vomiting",
      "rigid_abdomen"
    ],

    minimum_match: 2,

    bonus: 60
  }

},

// ==========================
// PROGRESSION
// ==========================

progression: {

  worsening_after_24_hours: {
    present: true,
    weight: 40
  },

  migrating_abdominal_pain: {
    present: true,
    weight: 55
  },

  persistent_vomiting: {
    present: true,
    weight: 35
  },

  increasing_tenderness: {
    present: true,
    weight: 45
  }

},

// ==========================
// EPIDEMIOLOGY
// ==========================

epidemiology: {

  age_10_to_30: {
    present: true,
    weight: 20
  },

  family_history: {
    present: true,
    weight: 15
  },

  low_fiber_diet: {
    present: true,
    weight: 15
  }

},

typical_duration: {

  min_days: 1,

  max_days: 5

},

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["right_lower_abdominal_pain", "pain_moving_to_right_side"],
        match: "all",
        bonus: 45
      },
      {
        symptoms: ["nausea", "vomiting", "appetite_loss"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["pain_walking", "right_lower_abdominal_pain"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["pain_on_coughing", "right_lower_abdominal_pain"],
        match: "all",
        bonus: 25
      },
      {
        symptoms: ["rebound_pain", "pain_moving_to_right_side"],
        match: "all",
        bonus: 35
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["chronic_diarrhea"],
        match: "all",
        penalty: 20
      },
      {
        symptoms: ["burning_urination"],
        match: "all",
        penalty: 15
      },
      {
        symptoms: ["relief_after_passing_stool"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["bloody_diarrhea"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["black_stool"],
        match: "all",
        penalty: 45
      },
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 30
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      right_lower_abdominal_pain: 20,
      rebound_tenderness: 20,
      pain_walking: 10,
      pain_moving_to_right_side: 25
    },

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [

{
  min_age:10,
  max_age:30,
  bonus:20
}

],

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 1,
        bonus: 10
      },
      {
        min_days: 5,
        penalty: 20
      },
      {
        min_days: 14,
        penalty: 40
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "shock",
      "unconsciousness",
      "rigid_abdomen",
      "severe_abdominal_pain",
      "persistent_vomiting",
      "high_fever"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Ceftriaxone",

      type: "Intravenous Broad-Spectrum Antibiotic",

      dosage: "1g - 2g IV",

      frequency: "Every 12-24 hours",

      purpose: {
        en: "Empiric treatment of suspected appendiceal infection",
        bn: "সন্দেহজনক অ্যাপেন্ডিক্স সংক্রমণের প্রাথমিক চিকিৎসা"
      }
    },

    {
      line: "first_line",

      name: "Metronidazole",

      type: "Intravenous Anti-infective",

      dosage: "500mg IV",

      frequency: "Every 8 hours",

      purpose: {
        en: "Anaerobic bacterial coverage",
        bn: "অ্যানেরোবিক ব্যাকটেরিয়ার বিরুদ্ধে কার্যকর"
      }
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Piperacillin + Tazobactam",

      type: "Broad-Spectrum Antibiotic",

      dosage: "As prescribed",

      frequency: "Every 6-8 hours",

      purpose: {
        en: "Complicated or severe intra-abdominal infection",
        bn: "জটিল বা তীব্র পেটের অভ্যন্তরীণ সংক্রমণের চিকিৎসা"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Meropenem",

      type: "Carbapenem Antibiotic",

      dosage: "As prescribed",

      frequency: "Every 8 hours",

      purpose: {
        en: "Resistant or perforated appendicitis cases",
        bn: "রেজিস্ট্যান্ট বা ছিদ্রযুক্ত অ্যাপেন্ডিসাইটিসের ক্ষেত্রে ব্যবহৃত"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "Acetaminophen (IV)",

      type: "Analgesic / Antipyretic",

      dosage: "500mg - 1000mg",

      frequency: "As needed under supervision",

      purpose: {
        en: "Pain and fever control",
        bn: "ব্যথা ও জ্বর নিয়ন্ত্রণ"
      }
    },

    {
      line: "fourth_line",

      name: "IV Fluids",

      type: "Supportive Care",

      dosage: "As prescribed",

      frequency: "Continuous",

      purpose: {
        en: "Hydration and stabilization before surgery",
        bn: "অস্ত্রোপচারের আগে শরীরের তরল ও স্থিতিশীলতা বজায় রাখা"
      }
    }

  ]

},

    prescription_medicines: [

  {
    name: "Ceftriaxone",

    line: "prescription",

    condition: {
      en: "Before surgery or during hospitalization",
      bn: "হাসপাতালে ভর্তি অবস্থায় বা অস্ত্রোপচারের আগে"
    },

    frequency: {
      en: "Every 12-24 hours",
      bn: "প্রতি ১২-২৪ ঘণ্টা"
    },

    purpose: {
      en: "Antibiotic used for appendicitis-related infection",
      bn: "অ্যাপেন্ডিসাইটিসজনিত সংক্রমণের জন্য অ্যান্টিবায়োটিক"
    }
  },

  {
    name: "Metronidazole",

    line: "prescription",

    condition: {
      en: "Along with Ceftriaxone for abdominal infection",
      bn: "পেটের সংক্রমণে Ceftriaxone-এর সাথে"
    },

    frequency: {
      en: "Every 8 hours",
      bn: "প্রতি ৮ ঘণ্টা"
    },

    purpose: {
      en: "Covers anaerobic bacterial infection",
      bn: "অ্যানারোবিক ব্যাকটেরিয়াল সংক্রমণ নিয়ন্ত্রণে"
    }
  },

  {
    name: "Piperacillin + Tazobactam",

    line: "prescription",

    condition: {
      en: "Severe or complicated appendicitis",
      bn: "তীব্র বা জটিল অ্যাপেন্ডিসাইটিসে"
    },

    frequency: {
      en: "Every 6-8 hours",
      bn: "প্রতি ৬-৮ ঘণ্টা"
    },

    purpose: {
      en: "Broad-spectrum antibiotic for severe infection",
      bn: "তীব্র সংক্রমণের জন্য ব্রড-স্পেকট্রাম অ্যান্টিবায়োটিক"
    }
  },

  {
    name: "Meropenem",

    line: "prescription",

    condition: {
      en: "Perforation, abscess, or sepsis",
      bn: "অ্যাপেন্ডিক্স ফেটে গেলে, অ্যাবসেস বা সেপসিস হলে"
    },

    frequency: {
      en: "Every 8 hours",
      bn: "প্রতি ৮ ঘণ্টা"
    },

    purpose: {
      en: "Advanced antibiotic for life-threatening infection",
      bn: "জীবন-ঝুঁকিপূর্ণ সংক্রমণের জন্য উন্নত অ্যান্টিবায়োটিক"
    }
  },

  {
    name: "Ondansetron",

    line: "prescription",

    condition: {
      en: "When nausea or vomiting is present",
      bn: "বমি বমি ভাব বা বমি হলে"
    },

    frequency: {
      en: "Every 8-12 hours as prescribed",
      bn: "চিকিৎসকের নির্দেশ অনুযায়ী প্রতি ৮-১২ ঘণ্টা"
    },

    purpose: {
      en: "Relieves nausea and vomiting",
      bn: "বমি বমি ভাব ও বমি কমাতে"
    }
  }

],

    supportive_medicines: [

  {
    name: "Paracetamol",

    line: "supportive",

    purpose: {
      en: "Pain and fever control",
      bn: "ব্যথা ও জ্বর নিয়ন্ত্রণ"
    },

    condition: {
      en: "When pain or fever is present",
      bn: "ব্যথা বা জ্বর থাকলে"
    },

    usageType: {
      en: "Supportive care",
      bn: "সহায়ক চিকিৎসা"
    }
  },

  {
    name: "IV Fluids",

    line: "supportive",

    purpose: {
      en: "Hydration and stabilization",
      bn: "শরীরের তরল ও স্থিতিশীলতা বজায় রাখা"
    },

    condition: {
      en: "Dehydration, vomiting, or pre-surgical support",
      bn: "পানিশূন্যতা, বমি বা অস্ত্রোপচারের পূর্ব প্রস্তুতিতে"
    },

    usageType: {
      en: "Hospital supportive care",
      bn: "হাসপাতালভিত্তিক সহায়ক চিকিৎসা"
    }
  }

]

  }
];