// ==============================
// CROHN'S DISEASE DATASET
// PROFESSIONAL CANONICAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const CROHNS_DISEASE = [
  {
    id: "CD001",
    disease: "Crohn's Disease",
    medical_name: "Crohn's Disease",
    aliases: [
      "crohns",
      "crohn_disease",
      "crohn_disease_ibd"
    ],
    category: "stomach",
    tags: [
      "ibd",
      "autoimmune",
      "diarrhea",
      "intestinal"
    ],
    prevalence: "uncommon",
    severity: "severe",
    priority: 85,
    contagious: false,
    emergency: true,
    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      autoimmune_disorder: { present: true, weight: 35 },
      family_history: { present: true, weight: 20 },
      smoking: { present: true, weight: 15 },
      immune_system_overactivity: { present: true, weight: 20 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      previous_ibd_history: { present: true, weight: 25 },
      chronic_stress: { present: true, weight: 10 },
      unhealthy_diet: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      chronic_diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 50,
        aliases: [
          "long_term_diarrhea",
          "persistent_diarrhea"
        ],
        followup: {
          question: "Has diarrhea continued for weeks?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "persistent_diarrhea"
          },
          priority: 14
        }
      },

      abdominal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        followup: {
          question: "Is abdominal pain severe or recurring?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_abdominal_pain"
          },
          priority: 11
        }
      },

      abdominal_cramp: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        aliases: [
          "stomach_cramp"
        ],
        followup: {
          question: "Do cramps occur repeatedly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "recurrent_abdominal_cramps"
          },
          priority: 9
        }
      },

      weight_loss: {
        category: "constitutional",
        present: true,
        weight: 40,
        aliases: [
          "unintentional_weight_loss"
        ],
        followup: {
          question: "Have you lost weight unintentionally?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "unintentional_weight_loss"
          },
          priority: 12
        }
      },

      fatigue: {
        category: "constitutional",
        present: true,
        weight: 30,
        followup: {
          question: "Do you feel extreme tiredness daily?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "extreme_fatigue"
          },
          priority: 8
        }
      },

      fever: {
        category: "fever",
        present: true,
        weight: 15,
        followup: {
          question: "Is fever continuous?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "continuous_fever"
          },
          priority: 5
        }
      },

      appetite_loss: {
        category: "constitutional",
        present: true,
        weight: 25,
        aliases: [
          "loss_of_appetite"
        ],
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
          },
          priority: 7
        }
      },

      blood_in_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        aliases: [
          "bloody_stool",
          "rectal_bleeding"
        ],
        followup: {
          question: "Is blood visible in stool frequently?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "frequent_bloody_stool"
          },
          priority: 16
        }
      },

      mouth_ulcers: {
        category: "ent",
        present: true,
        weight: 30,
        followup: {
          question: "Do mouth ulcers occur repeatedly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "recurrent_mouth_ulcers"
          },
          priority: 8
        }
      },

      anal_pain: {
        category: "gastrointestinal",
        present: true,
        weight: 18,
        followup: {
          question: "Does pain worsen during stool passing?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "painful_bowel_movement"
          },
          priority: 5
        }
      },

      bloating: {
        category: "gastrointestinal",
        present: true,
        weight: 12,
        aliases: [
          "abdominal_bloating",
          "gas",
          "gassy",
          "abdominal_fullness",
          "distension"
        ],
        followup: {
          question: "Is abdominal bloating severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_bloating"
          },
          priority: 4
        }
      },

      watery_diarrhea: {
        category: "gastrointestinal",
        present: true,
        weight: 25
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -30
      },
      hard_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -30
      },
      short_duration_symptoms: {
        category: "constitutional",
        present: false,
        weight: -20
      },
      pain_moving_to_right_side: {
        category: "gastrointestinal",
        present: false,
        weight: -25
      },
      vomiting_blood: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      abdominal_tenderness: { present: true, weight: 25 },
      dehydration: { present: true, weight: 20 },
      pale: { present: true, weight: 15 },
      visible_weight_loss: { present: true, weight: 20 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      colonoscopy_inflammation: { present: true, weight: 80 },
      biopsy_positive: { present: true, weight: 70 },
      ct_bowel_thickening: { present: true, weight: 60 },
      esr_high: { present: true, weight: 25 },
      crp_high: { present: true, weight: 25 },
      hemoglobin_low: { present: true, weight: 20 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      intestinal_obstruction: { present: true, weight: 75 },
      fistula: { present: true, weight: 65 },
      abscess: { present: true, weight: 55 },
      severe_malnutrition: { present: true, weight: 55 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_bleeding: { present: true, weight: 85 },
      severe_dehydration: { present: true, weight: 70 },
      bowel_perforation: { present: true, weight: 100 },
      shock: { present: true, weight: 100 },
      severe_weight_loss: { present: true, weight: 70 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["chronic_diarrhea", "abdominal_pain"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["weight_loss", "fatigue"],
        match: "all",
        bonus: 30
      },
      {
        symptoms: ["blood_in_stool", "mouth_ulcers"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["chronic_diarrhea", "weight_loss", "fatigue"],
        match: "all",
        bonus: 45
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["hard_stool"],
        match: "all",
        penalty: 30
      },
      {
        symptoms: ["short_duration_symptoms"],
        match: "all",
        penalty: 20
      },
      {
        symptoms: ["pain_moving_to_right_side"],
        match: "all",
        penalty: 25
      },
      {
        symptoms: ["vomiting_blood"],
        match: "all",
        penalty: 35
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      chronic_diarrhea: 20,
      blood_in_stool: 18,
      abdominal_pain: 12,
      weight_loss: 15
    },

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 15,
        bonus: 5
      },
      {
        max_age: 40,
        bonus: 12
      }
    ],

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 14,
        bonus: 20
      },
      {
        min_days: 60,
        bonus: 30
      },
      {
        min_days: 180,
        bonus: 40
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "shock",
      "bowel_perforation",
      "severe_bleeding",
      "severe_dehydration"
    ],

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Mesalamine (5-ASA)",

      type: "Aminosalicylate",

      dosage: "2g - 4.8g daily",

      frequency: "Divided doses daily",

      purpose: "Reduces intestinal inflammation"
    },

    {
      line: "first_line",

      name: "Budesonide",

      type: "Corticosteroid",

      dosage: "As prescribed",

      frequency: "Once daily",

      purpose: "Controls mild to moderate disease flares"
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Prednisolone",

      type: "Corticosteroid",

      dosage: "As prescribed",

      frequency: "Once daily",

      purpose: "Induces remission during moderate to severe flares"
    },

    {
      line: "second_line",

      name: "Azathioprine",

      type: "Immunomodulator",

      dosage: "Weight-based",

      frequency: "Once daily",

      purpose: "Maintains long-term remission"
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Infliximab",

      type: "Biologic (Anti-TNF)",

      dosage: "Weight-based",

      frequency: "Every 6-8 weeks",

      purpose: "Treats severe Crohn's disease and fistulas"
    },

    {
      line: "third_line",

      name: "Adalimumab",

      type: "Biologic (Anti-TNF)",

      dosage: "As prescribed",

      frequency: "Every 2 weeks",

      purpose: "Controls moderate to severe disease activity"
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "Metronidazole",

      type: "Antibiotic",

      dosage: "As prescribed",

      frequency: "Every 12 hours",

      purpose: "Treats perianal disease and infections"
    },

    {
      line: "fourth_line",

      name: "Ciprofloxacin",

      type: "Antibiotic",

      dosage: "As prescribed",

      frequency: "Every 12 hours",

      purpose: "Manages bacterial complications"
    }

  ]

},

// ==========================
// TREATMENTS
// ==========================

treatments: [

  {
    en: "Colonoscopy monitoring",
    bn: "কোলোনোস্কোপি পর্যবেক্ষণ"
  },

  {
    en: "Biologic and immune-modulating therapy",
    bn: "বায়োলজিক ও ইমিউন-মডুলেটিং চিকিৎসা"
  },

  {
    en: "Surgery for complications if needed",
    bn: "জটিলতা হলে প্রয়োজনে অস্ত্রোপচার"
  }

],

// ==========================
// LIFESTYLE
// ==========================

lifestyle_changes: [

  {
    en: "Stop smoking completely",
    bn: "ধূমপান সম্পূর্ণভাবে বন্ধ করুন"
  },

  {
    en: "Maintain adequate hydration",
    bn: "পর্যাপ্ত পানি পান করুন"
  },

  {
    en: "Prevent nutritional deficiencies",
    bn: "পুষ্টিহীনতা প্রতিরোধ করুন"
  },

  {
    en: "Avoid trigger foods",
    bn: "উপসর্গ বাড়ায় এমন খাবার এড়িয়ে চলুন"
  },

  {
    en: "Regular follow-up with a gastroenterologist",
    bn: "নিয়মিত গ্যাস্ট্রোএন্টেরোলজিস্টের ফলো-আপ করুন"
  }

],

// ==========================
// DOCTOR CONSULTATION
// ==========================

doctor_consultation: [

  {
    en: "Severe abdominal pain or bowel obstruction symptoms",
    bn: "তীব্র পেটব্যথা বা অন্ত্র বন্ধ হওয়ার লক্ষণ"
  },

  {
    en: "Heavy blood in stool",
    bn: "পায়খানার সাথে প্রচুর রক্ত যাওয়া"
  },

  {
    en: "High fever, chills, or rapid heartbeat",
    bn: "উচ্চ জ্বর, কাঁপুনি বা দ্রুত হৃদস্পন্দন"
  },

  {
    en: "Unexplained weight loss",
    bn: "কারণ ছাড়াই ওজন কমে যাওয়া"
  },

  {
    en: "Painful swelling or drainage around the anus",
    bn: "মলদ্বারের চারপাশে ব্যথাযুক্ত ফোলা বা পুঁজ বের হওয়া"
  }

]
  }
];