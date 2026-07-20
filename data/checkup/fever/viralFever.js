// ==============================
// VIRAL FEVER DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const VIRAL_FEVER = [
  {
    id: "VF001",
    disease: "Viral Fever",
    medical_name: "Acute Viral Febrile Illness",
    category: "fever",
    tags: [
      "viral",
      "infection",
      "fever",
      "common"
    ],
    prevalence: "very_common",
    prior_probability: 0.40,
    severity: "mild",
    priority: 50,
    contagious: true,
    emergency: false,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      viral_infection: { present: true, weight: 40 },
      infected_person_contact: { present: true, weight: 25 },
      seasonal_change: { present: true, weight: 15 },
      low_immunity: { present: true, weight: 20 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      crowded_places: { present: true, weight: 15 },
      poor_hand_hygiene: { present: true, weight: 20 },
      seasonal_transition: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      fever: {
        category: "fever",
        present: true,
        weight: 45,
        followup: {
          question: "How long has fever lasted?",
          options: ["1-3 days", "4-7 days", "More than 1 week"],
          symptomMap: {
            "4-7 days": "prolonged_fever",
            "More than 1 week": "prolonged_fever"
          },
          priority: 10
        }
      },

      mild_to_moderate_fever: {
        category: "fever",
        present: true,
        weight: 30,
        followup: {
          question: "Is fever mild or moderate?",
          options: ["Mild", "Moderate"],
          symptomMap: {
            "Mild": "mild_fever",
            "Moderate": "moderate_fever"
          },
          priority: 7
        }
      },

      body_ache: {
        category: "PAIN",
        present: true,
        weight: 32,
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
        category: "PAIN",
        present: true,
        weight: 25,
        followup: {
          question: "Do muscles feel extremely painful?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_muscle_pain"
          },
          priority: 7
        }
      },

      headache: {
        category: "neurology",
        present: true,
        weight: 22,
        followup: {
          question: "Is headache severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_headache"
          },
          priority: 5
        }
      },

      fatigue: {
        category: "constitutional",
        label: {
          en: "Fatigue",
          bn: "ক্লান্তি"
        },
        description: {
          en: "Extreme tiredness, low energy, or lack of physical and mental strength.",
          bn: "অতিরিক্ত ক্লান্তি, শক্তি কমে যাওয়া বা শারীরিক ও মানসিক দুর্বলতা অনুভব করা।"
        },
        severity: "moderate",
        icon: "😴",
        causes: {
          en: "Can occur due to viral infections, lack of sleep, dehydration, anemia, stress, or chronic illness.",
          bn: "ভাইরাল সংক্রমণ, ঘুমের অভাব, পানিশূন্যতা, রক্তস্বল্পতা, মানসিক চাপ বা দীর্ঘস্থায়ী রোগের কারণে হতে পারে।"
        },
        warning: {
          en: "Seek medical attention if fatigue is severe, persistent, or associated with breathing difficulty, chest pain, or unconsciousness.",
          bn: "ক্লান্তি খুব বেশি হলে, দীর্ঘদিন স্থায়ী হলে, অথবা শ্বাসকষ্ট, বুকেব্যথা বা অচেতনতার সাথে থাকলে দ্রুত চিকিৎসা নিন।"
        },
        tips: {
          en: "Drink enough water, get adequate rest, eat nutritious food, and avoid excessive physical exertion.",
          bn: "পর্যাপ্ত পানি পান করুন, বিশ্রাম নিন, পুষ্টিকর খাবার খান এবং অতিরিক্ত পরিশ্রম এড়িয়ে চলুন।"
        },
        severity_scale: {
          en: "Mild, Moderate, Severe",
          bn: "হালকা, মাঝারি, তীব্র"
        },
        present: true,
        weight: 28,
        followup: {
          question: "Do you feel extremely tired?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_fatigue"
          },
          priority: 8
        }
      },

      weakness: {
        category: "constitutional",
        label: {
          en: "Weakness",
          bn: "দুর্বলতা"
        },
        description: {
          en: "A feeling of reduced physical strength, low stamina, or difficulty performing normal daily activities.",
          bn: "শারীরিক শক্তি কমে যাওয়া, সহনশক্তি হ্রাস পাওয়া বা দৈনন্দিন কাজ করতে কষ্ট হওয়ার অনুভূতি।"
        },
        severity: "moderate",
        icon: "💪",
        causes: {
          en: "May occur due to infections, dehydration, anemia, malnutrition, stress, lack of sleep, or chronic illnesses.",
          bn: "সংক্রমণ, পানিশূন্যতা, রক্তস্বল্পতা, অপুষ্টি, মানসিক চাপ, ঘুমের অভাব বা দীর্ঘস্থায়ী রোগের কারণে হতে পারে।"
        },
        warning: {
          en: "Seek medical attention if weakness is severe, sudden, worsening, or associated with breathing difficulty, chest pain, paralysis, or unconsciousness.",
          bn: "দুর্বলতা খুব বেশি হলে, হঠাৎ শুরু হলে, ক্রমশ বাড়লে অথবা শ্বাসকষ্ট, বুকব্যথা, পক্ষাঘাত বা অচেতনতার সাথে থাকলে দ্রুত চিকিৎসা নিন।"
        },
        tips: {
          en: "Stay hydrated, get enough rest, eat balanced nutritious meals, and avoid excessive physical exertion.",
          bn: "পর্যাপ্ত পানি পান করুন, বিশ্রাম নিন, সুষম পুষ্টিকর খাবার খান এবং অতিরিক্ত পরিশ্রম এড়িয়ে চলুন।"
        },
        severity_scale: {
          en: "Mild, Moderate, Severe",
          bn: "হালকা, মাঝারি, তীব্র"
        },
        present: true,
        weight: 22,
        followup: {
          question: {
            en: "Are you unable to perform normal activities?",
            bn: "আপনি কি স্বাভাবিক দৈনন্দিন কাজ করতে পারছেন না?"
          },
          options: [
            { en: "Yes", bn: "হ্যাঁ" },
            { en: "No", bn: "না" }
          ],
          symptomMap: {
            "Yes": "severe_weakness"
          },
          priority: 6
        }
      },

      sore_throat: {
        category: "ENT",
        present: true,
        weight: 20,
        followup: {
          question: "Is throat pain severe?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_sore_throat"
          },
          priority: 5
        }
      },

      runny_nose: {
        category: "ENT",
        present: true,
        weight: 20,
        followup: {
          question: "Is nose discharge continuous?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "continuous_runny_nose"
          },
          priority: 4
        }
      },

      dry_cough: {
        category: "respiratory",
        present: true,
        weight: 22,
        followup: {
          question: "Does cough worsen at night?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "nocturnal_dry_cough"
          },
          priority: 7
        }
      },

      sneezing: {
        category: "ENT",
        present: true,
        weight: 15,
        followup: {
          question: "Is sneezing frequent?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "frequent_sneezing"
          },
          priority: 4
        }
      },

      chills: {
        category: "general",
        present: true,
        weight: 15,
        followup: {
          question: "Do chills occur repeatedly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "recurrent_chills"
          },
          priority: 5
        }
      },

      loss_of_appetite: {
        category: "constitutional",
        present: true,
        weight: 12,
        followup: {
          question: "Has appetite reduced significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_appetite_loss"
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
        category: "ENT",
        present: true,
        weight: 8
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      loss_of_smell: {
        category: "ENT",
        present: false,
        weight: -60
      },
      bleeding_gums: {
        category: "Tooth",
        present: false,
        weight: -80
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
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      elevated_temperature: { present: true, weight: 25 },
      throat_redness: { present: true, weight: 15 },
      dehydration: { present: true, weight: 10 },
      stable_blood_pressure: { present: true, weight: 10 },
      normal_oxygen_level: { present: true, weight: 20 },
      breathing_difficulty: { present: false, weight: -90 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      normal_wbc: { present: true, weight: 20 },
      dengue_negative: { present: true, weight: 35 },
      malaria_negative: { present: true, weight: 35 },
      typhoid_negative: { present: true, weight: 25 },
      covid_negative: { present: true, weight: 20 },
      chest_xray_normal: { present: true, weight: 18 },
      platelet_severely_low: { present: false, weight: -85 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      severe_dehydration: { present: true, weight: 75 },
      secondary_bacterial_infection: { present: true, weight: 65 },
      febrile_seizures_infants: { present: true, weight: 80 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      breathing_difficulty: { present: true, weight: 90 },
      persistent_high_fever: { present: true, weight: 70 },
      seizure: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 },
      dehydration: { present: true, weight: 85 }
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

    gold_symptoms: [
      "fever",
      "body_ache",
      "fatigue",
      "headache"
    ],

    pathognomonic_symptoms: [
      "mild_to_moderate_fever",
      "body_ache"
    ],

    // ==========================
    // MUTUALLY EXCLUSIVE WITH
    // ==========================
    mutually_exclusive_with: [
      "Appendicitis",
      "Constipation",
      "Chronic Obstructive Pulmonary Disease"
    ],

    triage: {
      level: "green"
    },

    organ_system: "constitutional",
    likelihood_ratio_positive: 4.5,
    likelihood_ratio_negative: 0.22,

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
      improving_after_rest: { present: true, weight: 20 },
      worsening_after_5_days: { present: false, weight: -40 },
      persistent_high_fever: { present: false, weight: -50 }
    },

    // ==========================
    // EPIDEMIOLOGY
    // ==========================
    epidemiology: {
      seasonal_outbreak: { present: true, weight: 20 },
      mosquito_exposure: { present: false, weight: -50 },
      tuberculosis_contact: { present: false, weight: -70 }
    },

    // ==========================
    // RECOVERY SIGNS
    // ==========================
    recovery_signs: {
      fever_reducing: { present: true, weight: 20 },
      appetite_returning: { present: true, weight: 15 },
      energy_improving: { present: true, weight: 15 }
    },

    typical_duration: {
      min_days: 3,
      max_days: 7
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["fever", "body_ache"],
        match: "all",
        bonus: 30
      },
      {
        symptoms: ["runny_nose", "sneezing", "watery_eyes"],
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
        match: "all",
        penalty: 60
      },
      {
        symptoms: ["bleeding_gums"],
        match: "all",
        penalty: 80
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      fever: 15,
      body_ache: 15,
      fatigue: 10
    },

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 0,
        max_age: 100,
        bonus: 5
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
        min_days: 7,
        penalty: 25
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "seizure",
      "unconsciousness",
      "breathing_difficulty"
    ],

    // ==========================
    // MEDICINES (LINE-BASED)
    // ==========================
    medicines: {
      first_line: [
        {
          name: "Paracetamol",
          line: "first_line",
          type: "Antipyretic",
          dosage: "500mg",
          frequency: "Every 6 hours if needed",
          purpose: "Fever and body pain",
          warning: "Do not exceed recommended dose"
        },
        {
          name: "Cetirizine",
          line: "first_line",
          type: "Antihistamine",
          dosage: "10mg",
          frequency: "Once daily at night",
          purpose: "Runny nose and sneezing"
        },
        {
          name: "ORS",
          line: "first_line",
          type: "Hydration Support",
          dosage: "1 glass",
          frequency: "After dehydration or weakness",
          purpose: "Prevent dehydration"
        }
      ],
      gas_relief: [
        {
          name: "Pantoprazole",
          line: "gas_relief",
          type: "Acidity / Gas Reducer",
          dosage: "40mg",
          frequency: "Once daily before breakfast",
          purpose: "Reduce gas and stomach irritation"
        },
        {
          name: "Antacid Syrup",
          line: "gas_relief",
          type: "Gas Relief",
          dosage: "10ml",
          frequency: "After meals if needed",
          purpose: "Quick relief from bloating and acidity"
        }
      ],
      second_line: [
        {
          name: "Ibuprofen",
          line: "second_line",
          type: "NSAID",
          dosage: "400mg",
          frequency: "Every 8 hours after food",
          purpose: "Severe body pain",
          warning: "Avoid in gastric ulcer"
        },
        {
          name: "Dextromethorphan Syrup",
          line: "second_line",
          type: "Cough Suppressant",
          dosage: "5-10ml",
          frequency: "3 times daily",
          purpose: "Dry cough relief"
        }
      ],
      emergency_line: [
        {
          name: "IV Normal Saline",
          line: "emergency_line",
          type: "IV Fluid",
          purpose: "Severe dehydration"
        },
        {
          name: "Oxygen Support",
          line: "emergency_line",
          type: "Respiratory Support",
          purpose: "Breathing difficulty"
        }
      ]
    },

    // ==========================
    // AYURVEDIC MEDICINES
    // ==========================
    ayurvedic_medicines: {
      first_line: [
        {
          name: "Guduchi (Giloy) Tablet",
          line: "first_line",
          type: "Ayurvedic",
          dosage: "500 mg",
          frequency: "Twice daily after meals",
          purpose: "Viral fever and immunity support"
        },
        {
          name: "Sudarshan Ghanvati",
          line: "first_line",
          type: "Ayurvedic",
          dosage: "2 tablets",
          frequency: "Twice daily after meals",
          purpose: "Fever and body pain relief"
        },
        {
          name: "Tulsi Tablet",
          line: "first_line",
          type: "Ayurvedic",
          dosage: "1 tablet",
          frequency: "Twice daily",
          purpose: "Cold, cough and immunity support"
        }
      ],
      second_line: [
        {
          name: "Mahasudarshan Ghan Vati",
          line: "second_line",
          type: "Ayurvedic",
          dosage: "2 tablets",
          frequency: "Twice daily after meals",
          purpose: "Persistent viral fever",
          warning: "Use under Ayurvedic physician guidance"
        },
        {
          name: "Amritarishta",
          line: "second_line",
          type: "Ayurvedic",
          dosage: "15–30 ml",
          frequency: "Twice daily after meals",
          purpose: "Recovery and weakness"
        }
      ],
      third_line: [
        {
          name: "Sanjeevani Vati",
          line: "third_line",
          type: "Ayurvedic",
          dosage: "1–2 tablets",
          frequency: "Twice daily",
          purpose: "Persistent fever with digestive weakness",
          warning: "Use under Ayurvedic physician guidance"
        },
        {
          name: "Tribhuvan Kirti Ras",
          line: "third_line",
          type: "Ayurvedic",
          dosage: "1 tablet",
          frequency: "Twice daily",
          purpose: "Supportive treatment for fever",
          warning: "Use only under Ayurvedic physician guidance"
        }
      ],
      gas_relief: [
        {
          name: "Avipattikar Churna",
          line: "gas_relief",
          type: "Ayurvedic",
          dosage: "3–5 g",
          frequency: "Twice daily after meals",
          purpose: "Acidity and gas relief"
        },
        {
          name: "Hingvashtak Churna",
          line: "gas_relief",
          type: "Ayurvedic",
          dosage: "2–3 g",
          frequency: "After meals",
          purpose: "Gas and indigestion"
        }
      ],
      emergency_line: [
        {
          name: "Immediate Hospital Referral",
          line: "emergency_line",
          type: "Emergency",
          purpose: "High fever, unconsciousness, severe dehydration or breathing difficulty"
        }
      ]
    },

    // ==========================
    // PRESCRIPTION MEDICINES
    // ==========================
    prescription_medicines: [
      {
        name: "Paracetamol",
        line: "prescription",
        condition: {
          en: "When fever or body pain is present",
          bn: "জ্বর বা শরীর ব্যথা থাকলে"
        },
        frequency: {
          en: "Every 6 hours as needed",
          bn: "প্রয়োজন অনুযায়ী প্রতি ৬ ঘণ্টা"
        },
        purpose: {
          en: "Reduces fever and body aches",
          bn: "জ্বর এবং শরীর ব্যথা কমায়"
        }
      },
      {
        name: "Cetirizine",
        line: "prescription",
        condition: {
          en: "When runny nose or frequent sneezing persists",
          bn: "নাক দিয়ে পানি পড়া বা ঘন ঘন হাঁচি থাকলে"
        },
        frequency: {
          en: "Once daily at bedtime",
          bn: "প্রতিদিন রাতে ঘুমানোর আগে ১ বার"
        },
        purpose: {
          en: "Controls cold and allergic respiratory symptoms",
          bn: "সর্দি এবং অ্যালার্জির শ্বাসকষ্টজনিত লক্ষণ নিয়ন্ত্রণ করে"
        }
      },
      {
        name: "Sudarshan Ghanvati",
        line: "prescription",
        condition: {
          en: "For natural relief from viral fever and body pain",
          bn: "ভাইরাল জ্বর এবং শরীরের ব্যথা থেকে প্রাকৃতিক উপশমের জন্য"
        },
        frequency: {
          en: "2 tablets twice daily after meals",
          bn: "২টি ট্যাবলেট দিনে দুইবার খাবারের পর"
        },
        purpose: {
          en: "Ayurvedic management of acute fever",
          bn: "তীব্র জ্বরের আয়ুর্বেদিক ব্যবস্থাপনা"
        }
      },
      {
        name: "Mahasudarshan Ghan Vati",
        line: "prescription",
        condition: {
          en: "If viral fever is persistent or chronic",
          bn: "যদি ভাইরাল জ্বর দীর্ঘস্থায়ী বা জেদি হয়"
        },
        frequency: {
          en: "2 tablets twice daily under guidance",
          bn: "পরামর্শ অনুযায়ী ২টি ট্যাবলেট দিনে দুইবার"
        },
        purpose: {
          en: "Advanced Ayurvedic fever relief",
          bn: "উন্নত আয়ুর্বেদিক জ্বর উপশমকারী"
        }
      }
    ],

    // ==========================
    // SUPPORTIVE MEDICINES
    // ==========================
    supportive_medicines: [
      {
        name: "ORS (Oral Rehydration Salts)",
        line: "supportive",
        purpose: {
          en: "Prevents dehydration and restores electrolytes",
          bn: "পানিশূন্যতা প্রতিরোধ করে এবং ইলেকট্রোলাইট ভারসাম্য বজায় রাখে"
        },
        condition: {
          en: "For fatigue, excessive sweating, or weakness",
          bn: "ক্লান্তি, অতিরিক্ত ঘাম বা দুর্বলতার জন্য"
        },
        usageType: {
          en: "Hydration support",
          bn: "হাইড্রেশন সহায়তা"
        }
      },
      {
        name: "Guduchi (Giloy) Tablet",
        line: "supportive",
        purpose: {
          en: "Boosts immunity and helps fight viral infections",
          bn: "রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং ভাইরাল সংক্রমণের বিরুদ্ধে লড়তে সাহায্য করে"
        },
        condition: {
          en: "To support immune recovery during and after fever",
          bn: "জ্বরের সময় এবং পরে রোগ প্রতিরোধ ক্ষমতা পুনরুদ্ধারে"
        },
        usageType: {
          en: "Ayurvedic Immune Support",
          bn: "আয়ুর্বেদিক ইমিউন সাপোর্ট"
        }
      },
      {
        name: "Tulsi Tablet",
        line: "supportive",
        purpose: {
          en: "Relieves cough, cold, and respiratory discomfort",
          bn: "কাশি, সর্দি এবং শ্বাসকষ্টজনিত অস্বস্তি উপশম করে"
        },
        condition: {
          en: "If associated with dry cough or sore throat",
          bn: "শুকনো কাশি বা গলা ব্যথার উপসর্গ থাকলে"
        },
        usageType: {
          en: "Ayurvedic Respiratory Care",
          bn: "আয়ুর্বেদিক শ্বাসযন্ত্রের যত্ন"
        }
      }
    ],

    // ==========================
    // SUPPLEMENTS
    // ==========================
    supplements: [
      {
        name: "Vitamin B Complex",
        type: "Vitamin Supplement",
        purpose: {
          en: "May help improve fatigue and weakness.",
          bn: "ক্লান্তি ও দুর্বলতা কমাতে সহায়তা করতে পারে।"
        }
      },
      {
        name: "Vitamin C",
        type: "Immune Support",
        purpose: {
          en: "May support immune function.",
          bn: "রোগ প্রতিরোধ ক্ষমতাকে সমর্থন করতে পারে।"
        }
      },
      {
        name: "Vitamin D3",
        type: "Vitamin Supplement",
        purpose: {
          en: "May help maintain muscle strength.",
          bn: "পেশীর শক্তি বজায় রাখতে সহায়তা করতে পারে।"
        }
      },
      {
        name: "Zinc",
        type: "Mineral Supplement",
        purpose: {
          en: "May support recovery and immunity.",
          bn: "সুস্থতা ও রোগ প্রতিরোধে সহায়তা করতে পারে।"
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
        bn: "ভাইরাসজনিত সংক্রমণের কারণে হওয়া জ্বর, যা শরীর ব্যথা, দুর্বলতা, মাথায়েথা এবং ফ্লু-এর মতো অন্যান্য উপসর্গ সৃষ্টি করে। অধিকাংশ ক্ষেত্রে বিশ্রাম, পর্যাপ্ত পানি পান এবং সহায়ক চিকিৎসার মাধ্যমে সুস্থ হয়ে যায়।"
      }
    ]
  }
];
