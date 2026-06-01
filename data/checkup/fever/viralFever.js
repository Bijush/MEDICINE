// ==============================
// VIRAL FEVER DATASET
// ADVANCED PROFESSIONAL VERSION
// DIFFERENTIAL + FOLLOWUP +
// PHYSICAL EXAM + TESTS +
// RED FLAGS
// ==============================

export const VIRAL_FEVER = [

  {

    id: "VF001",

    disease: "Viral Fever",

    medical_name:
      "Acute Viral Febrile Illness",

    category: "fever",

    tags: [

      "viral",
      "infection",
      "fever",
      "common"

    ],

    prevalence: "common",

    severity: "mild",

    contagious: true,

    emergency: false,

    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      viral_infection: {
        present: true,
        weight: 40
      },

      infected_person_contact: {
        present: true,
        weight: 25
      },

      seasonal_change: {
        present: true,
        weight: 15
      },

      low_immunity: {
        present: true,
        weight: 20
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      fever: {

        present: true,

        weight: 45,

        followup: {

          question:
            "How long has fever lasted?",

          options: [

            "1-3 days",

            "4-7 days",

            "More than 1 week"

          ],

          symptomMap: {

            "4-7 days":
              "prolonged_fever",

            "More than 1 week":
              "prolonged_fever"
          },

          priority: 10
        }
      },

      mild_to_moderate_fever: {

        present: true,

        weight: 30,

        followup: {

          question:
            "Is fever mild or moderate?",

          options: [

            "Mild",

            "Moderate"

          ],

          symptomMap: {

            Mild:
              "mild_fever",

            Moderate:
              "moderate_fever"
          },

          priority: 7
        }
      },

      body_ache: {

  category: "pain",

  present: true,

  weight: 32,

  followup: {

    question:
      "Is body pain severe?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "body_ache"
    },

    priority: 8
  }
},

muscle_pain: {

  category: "pain",

  present: true,

  weight: 25,

  followup: {

    question:
      "Do muscles feel extremely painful?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "muscle_pain"
    },

    priority: 7
  }
},

headache: {

  category: "neurology",

  present: true,

  weight: 22,

  followup: {

    question:
      "Is headache severe?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "headache"
    },

    priority: 5
  }
},

fatigue: {

  category: "general",

  label: {

    en: "Fatigue",

    bn: "ক্লান্তি"
  },

  description: {

    en:
      "Extreme tiredness, low energy, or lack of physical and mental strength.",

    bn:
      "অতিরিক্ত ক্লান্তি, শক্তি কমে যাওয়া বা শারীরিক ও মানসিক দুর্বলতা অনুভব করা।"
  },

  severity:
    "moderate",

  icon:
    "😴",

  causes: {

    en:
      "Can occur due to viral infections, lack of sleep, dehydration, anemia, stress, or chronic illness.",

    bn:
      "ভাইরাল সংক্রমণ, ঘুমের অভাব, পানিশূন্যতা, রক্তস্বল্পতা, মানসিক চাপ বা দীর্ঘস্থায়ী রোগের কারণে হতে পারে।"
  },

  warning: {

    en:
      "Seek medical attention if fatigue is severe, persistent, or associated with breathing difficulty, chest pain, or unconsciousness.",

    bn:
      "ক্লান্তি খুব বেশি হলে, দীর্ঘদিন স্থায়ী হলে, অথবা শ্বাসকষ্ট, বুকব্যথা বা অচেতনতার সাথে থাকলে দ্রুত চিকিৎসা নিন।"
  },

  tips: {

    en:
      "Drink enough water, get adequate rest, eat nutritious food, and avoid excessive physical exertion.",

    bn:
      "পর্যাপ্ত পানি পান করুন, বিশ্রাম নিন, পুষ্টিকর খাবার খান এবং অতিরিক্ত পরিশ্রম এড়িয়ে চলুন।"
  },

  severity_scale: {

    en:
      "Mild, Moderate, Severe",

    bn:
      "হালকা, মাঝারি, তীব্র"
  },

  present: true,

  weight: 28,

  followup: {

    question:
      "Do you feel extremely tired?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "fatigue"
    },

    priority: 8
  }
},

weakness: {

  category: "general",

  label: {

    en: "Weakness",

    bn: "দুর্বলতা"
  },

  description: {

    en:
      "A feeling of reduced physical strength, low stamina, or difficulty performing normal daily activities.",

    bn:
      "শারীরিক শক্তি কমে যাওয়া, সহনশক্তি হ্রাস পাওয়া বা দৈনন্দিন কাজ করতে কষ্ট হওয়ার অনুভূতি।"
  },

  severity:
    "moderate",

  icon:
    "💪",

  causes: {

    en:
      "May occur due to infections, dehydration, anemia, malnutrition, stress, lack of sleep, or chronic illnesses.",

    bn:
      "সংক্রমণ, পানিশূন্যতা, রক্তস্বল্পতা, অপুষ্টি, মানসিক চাপ, ঘুমের অভাব বা দীর্ঘস্থায়ী রোগের কারণে হতে পারে।"
  },

  warning: {

    en:
      "Seek medical attention if weakness is severe, sudden, worsening, or associated with breathing difficulty, chest pain, paralysis, or unconsciousness.",

    bn:
      "দুর্বলতা খুব বেশি হলে, হঠাৎ শুরু হলে, ক্রমশ বাড়লে অথবা শ্বাসকষ্ট, বুকব্যথা, পক্ষাঘাত বা অচেতনতার সাথে থাকলে দ্রুত চিকিৎসা নিন।"
  },

  tips: {

    en:
      "Stay hydrated, get enough rest, eat balanced nutritious meals, and avoid excessive physical exertion.",

    bn:
      "পর্যাপ্ত পানি পান করুন, বিশ্রাম নিন, সুষম পুষ্টিকর খাবার খান এবং অতিরিক্ত পরিশ্রম এড়িয়ে চলুন।"
  },

  severity_scale: {

    en:
      "Mild, Moderate, Severe",

    bn:
      "হালকা, মাঝারি, তীব্র"
  },

  present: true,

  weight: 22,

  followup: {

    question: {

      en:
        "Are you unable to perform normal activities?",

      bn:
        "আপনি কি স্বাভাবিক দৈনন্দিন কাজ করতে পারছেন না?"
    },

    options: [

      {
        en: "Yes",
        bn: "হ্যাঁ"
      },

      {
        en: "No",
        bn: "না"
      }

    ],

    symptomMap: {

      Yes:
        "weakness"
    },

    priority: 6
  }
},

sore_throat: {

  category: "ENT",

  present: true,

  weight: 20,

  followup: {

    question:
      "Is throat pain severe?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "sore_throat"
    },

    priority: 5
  }
},

      runny_nose: {

        present: true,

        weight: 20,
        category: "ENT",

        followup: {

          question:
            "Is nose discharge continuous?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "runny_nose"
          },

          priority: 4
        }
      },

      dry_cough: {

  category: "respiratory",

  present: true,

  weight: 22,

  followup: {

    question:
      "Does cough worsen at night?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "dry_cough"
    },

    priority: 7
  }
},

      sneezing: {

        present: true,

        weight: 15,
        category: "ENT",

        followup: {

          question:
            "Is sneezing frequent?",

          options: [

            "Yes",

            "No"

          ],

          symptomMap: {

            Yes:
              "sneezing"
          },

          priority: 4
        }
      },

      chills: {

  category: "general",

  present: true,

  weight: 15,

  followup: {

    question:
      "Do chills occur repeatedly?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "chills"
    },

    priority: 5
  }
},

loss_of_appetite: {

  category: "gastrointestinal",

  present: true,

  weight: 12,

  followup: {

    question:
      "Has appetite reduced significantly?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "loss_of_appetite"
    },

    priority: 3
  }
},

mild_nausea: {

  category: "gastrointestinal",

  present: true,

  weight: 10
},

      watery_eyes: {

        present: true,

        weight: 8,
       category: "ENT"
      },

      // ======================
      // NEGATIVE / EXCLUSION
      // ======================

      loss_of_smell: {

  category: "ENT",

  present: false,

  weight: -60,

  followup: {

    question:
      "Did smell suddenly disappear?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "loss_of_smell"
    },

    priority: 12
  }
},

      bleeding_gums: {

  category: "Tooth",

  present: false,

  weight: -80,

  followup: {

    question:
      "Any bleeding from gums?",

    options: [

      "Yes",

      "No"

    ],

    symptomMap: {

      Yes:
        "bleeding_gums"
    },

    priority: 15
  }
},

vomiting_blood: {

  category: "gastrointestinal",

  present: false,

  weight: -100
},

black_stool: {

  category: "gastrointestinal",

  present: false,

  weight: -100
},

blood_in_sputum: {

  category: "respiratory",

  present: false,

  weight: -90
},

      jaundice: {

  category: "liver",

  present: false,

  weight: -80
},

breathing_difficulty: {

  category: "respiratory",

  present: false,

  weight: -85
},

seizure: {

  category: "neurology",

  present: false,

  weight: -100
},

unconsciousness: {

  category: "neurology",

  present: false,

  weight: -100
},
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      elevated_temperature: {

        present: true,

        weight: 25
      },

      throat_redness: {

        present: true,

        weight: 15
      },

      dehydration: {

        present: true,

        weight: 10
      },

      stable_blood_pressure: {

        present: true,

        weight: 10
      },

      normal_oxygen_level: {

        present: true,

        weight: 20
      },

      breathing_difficulty: {

        present: false,

        weight: -90
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      normal_wbc: {

        present: true,

        weight: 20
      },

      dengue_negative: {

        present: true,

        weight: 35
      },

      malaria_negative: {

        present: true,

        weight: 35
      },

      typhoid_negative: {

        present: true,

        weight: 25
      },

      covid_negative: {

        present: true,

        weight: 20
      },

      chest_xray_normal: {

        present: true,

        weight: 18
      },

      platelet_severely_low: {

        present: false,

        weight: -85
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      breathing_difficulty: {

        present: true,

        weight: 90
      },

      persistent_high_fever: {

        present: true,

        weight: 70
      },

      seizure: {

        present: true,

        weight: 100
      },

      unconsciousness: {

        present: true,

        weight: 100
      },

      dehydration: {

        present: true,

        weight: 85
      }
    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================

    required_symptoms: [

      "fever",

      "fatigue"
    ],

    required_negative_symptoms: [

      "vomiting_blood",

      "black_stool",

      "seizure"

    ],

    // ==========================
    // DIFFERENTIAL DIAGNOSIS
    // ==========================

    differential_diagnosis: [

      "Dengue",

      "COVID-19",

      "Influenza",

      "Typhoid",

      "Malaria"
    ],

    // ==========================
    // SYMPTOM CLUSTERS
    // ==========================

    symptom_clusters: {

      viral_upper_respiratory_cluster: {

        symptoms: [

          "fever",

          "runny_nose",

          "sore_throat",

          "dry_cough"

        ],

        minimum_match: 3,

        bonus: 35
      },

      viral_body_pain_cluster: {

        symptoms: [

          "fever",

          "body_ache",

          "muscle_pain",

          "fatigue"

        ],

        minimum_match: 3,

        bonus: 40
      }
    },

    // ==========================
    // PROGRESSION
    // ==========================

    progression: {

      improving_after_rest: {

        present: true,

        weight: 20
      },

      worsening_after_5_days: {

        present: false,

        weight: -40
      },

      persistent_high_fever: {

        present: false,

        weight: -50
      }
    },

    // ==========================
    // EPIDEMIOLOGY
    // ==========================

    epidemiology: {

      seasonal_outbreak: {

        present: true,

        weight: 20
      },

      mosquito_exposure: {

        present: false,

        weight: -50
      },

      tuberculosis_contact: {

        present: false,

        weight: -70
      }
    },

    // ==========================
    // RECOVERY SIGNS
    // ==========================

    recovery_signs: {

      fever_reducing: {

        present: true,

        weight: 20
      },

      appetite_returning: {

        present: true,

        weight: 15
      },

      energy_improving: {

        present: true,

        weight: 15
      }
    },

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

  first_line: [

    {
      name: "Paracetamol",

      line: "first_line",

      type: "Antipyretic",

      dosage: "500mg",

      frequency:
        "Every 6 hours if needed",

      purpose:
        "Fever and body pain",

      warning:
        "Do not exceed recommended dose"
    },

    {
      name: "Cetirizine",

      line: "first_line",

      type: "Antihistamine",

      dosage: "10mg",

      frequency:
        "Once daily at night",

      purpose:
        "Runny nose and sneezing"
    },

    {
      name: "ORS",

      line: "first_line",

      type:
        "Hydration Support",

      dosage:
        "1 glass",

      frequency:
        "After dehydration or weakness",

      purpose:
        "Prevent dehydration"
    }

  ],

  gas_relief: [

    {
      name: "Pantoprazole",

      line: "gas_relief",

      type:
        "Acidity / Gas Reducer",

      dosage: "40mg",

      frequency:
        "Once daily before breakfast",

      purpose:
        "Reduce gas and stomach irritation"
    },

    {
      name: "Antacid Syrup",

      line: "gas_relief",

      type:
        "Gas Relief",

      dosage:
        "10ml",

      frequency:
        "After meals if needed",

      purpose:
        "Quick relief from bloating and acidity"
    }

  ],

  second_line: [

    {
      name: "Ibuprofen",

      line: "second_line",

      type: "NSAID",

      dosage: "400mg",

      frequency:
        "Every 8 hours after food",

      purpose:
        "Severe body pain",

      warning:
        "Avoid in gastric ulcer"
    },

    {
      name:
        "Dextromethorphan Syrup",

      line: "second_line",

      type:
        "Cough Suppressant",

      dosage:
        "5-10ml",

      frequency:
        "3 times daily",

      purpose:
        "Dry cough relief"
    }

  ],

  emergency_line: [

    {
      name:
        "IV Normal Saline",

      line: "emergency_line",

      type:
        "IV Fluid",

      purpose:
        "Severe dehydration"
    },

    {
      name:
        "Oxygen Support",

      line: "emergency_line",

      type:
        "Respiratory Support",

      purpose:
        "Breathing difficulty"
    }

  ]

},

supplements: [

  {

    name:
      "Vitamin B Complex",

    type:
      "Vitamin Supplement",

    purpose: {

      en:
        "May help improve fatigue and weakness.",

      bn:
        "ক্লান্তি ও দুর্বলতা কমাতে সহায়তা করতে পারে।"
    }
  },

  {

    name:
      "Vitamin C",

    type:
      "Immune Support",

    purpose: {

      en:
        "May support immune function.",

      bn:
        "রোগ প্রতিরোধ ক্ষমতাকে সমর্থন করতে পারে।"
    }
  },

  {

    name:
      "Vitamin D3",

    type:
      "Vitamin Supplement",

    purpose: {

      en:
        "May help maintain muscle strength.",

      bn:
        "পেশীর শক্তি বজায় রাখতে সহায়তা করতে পারে।"
    }
  },

  {

    name:
      "Zinc",

    type:
      "Mineral Supplement",

    purpose: {

      en:
        "May support recovery and immunity.",

      bn:
        "সুস্থতা ও রোগ প্রতিরোধে সহায়তা করতে পারে।"
    }
  }

],
    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Adequate rest",

      "Drink plenty of fluids",

      "Steam inhalation",

      "Light nutritious food",

      "Monitor body temperature"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid cold drinks",

      "Maintain hydration",

      "Sleep properly",

      "Avoid heavy physical activity",

      "Use mask if coughing"

    ],
    
    doctor_consultation: [

  {
    en: "Fever for more than 5 days",
    bn: "৫ দিনের বেশি জ্বর থাকলে"
  },

  {
    en: "Breathing difficulty",
    bn: "শ্বাসকষ্ট হলে"
  },

  {
    en: "Chest pain",
    bn: "বুকে ব্যথা হলে"
  },

  {
    en: "Severe dehydration",
    bn: "তীব্র পানিশূন্যতা হলে"
  }

],
disease_meaning: [
  {
    en: "A viral infection that causes fever, body aches, weakness, headache, and other flu-like symptoms. Most cases improve with rest, hydration, and supportive care.",
    
    bn: "ভাইরাসজনিত সংক্রমণের কারণে হওয়া জ্বর, যা শরীর ব্যথা, দুর্বলতা, মাথাব্যথা এবং ফ্লু-এর মতো অন্যান্য উপসর্গ সৃষ্টি করে। অধিকাংশ ক্ষেত্রে বিশ্রাম, পর্যাপ্ত পানি পান এবং সহায়ক চিকিৎসার মাধ্যমে সুস্থ হয়ে যায়।"
  }
],

  }

];