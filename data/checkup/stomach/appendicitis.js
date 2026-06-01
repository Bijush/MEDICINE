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
    aliases: [
      "acute appendicitis",
      "appendix infection",
      "appendix inflammation"
    ],
    category: "stomach",
    tags: [
      "appendix",
      "abdominal pain",
      "surgery",
      "emergency"
    ],
    prevalence: "common",
    severity: "emergency",
    priority: 100,
    contagious: false,
    emergency: true,
    minimum_match: 1,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      appendix_blockage: { present: true, weight: 30 },
      bacterial_infection: { present: true, weight: 25 }
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
        category: "gastrointestinal",
        present: true,
        weight: 55,
        aliases: [
          "right_side_stomach_pain",
          "lower_right_pain",
          "appendix_pain"
        ],
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
        category: "gastrointestinal",
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
        category: "gastrointestinal",
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
        category: "gastrointestinal",
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
        category: "gastrointestinal",
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
        category: "gastrointestinal",
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
        category: "gastrointestinal",
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
      mcburney_point_tenderness: { present: true, weight: 65 },
      rebound_tenderness: { present: true, weight: 55 },
      guarding: { present: true, weight: 40 },
      rigid_abdomen: { present: true, weight: 55 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      wbc_high: { present: true, weight: 30 },
      crp_high: { present: true, weight: 20 },
      ultrasound_appendix_swollen: { present: true, weight: 65 },
      ct_appendicitis_positive: { present: true, weight: 85 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      appendix_rupture: { present: true, weight: 85 },
      abscess_formation: { present: true, weight: 60 },
      sepsis: { present: true, weight: 90 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      severe_abdominal_pain: { present: true, weight: 65 },
      high_fever: { present: true, weight: 45 },
      shock: { present: true, weight: 90 },
      unconsciousness: { present: true, weight: 100 }
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
    age_rules: [],

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

// ==========================
// TREATMENTS
// ==========================

treatments: [

  {
    en: "Appendectomy (surgical removal of the appendix)",
    bn: "অ্যাপেন্ডিক্স অপসারণের অস্ত্রোপচার (অ্যাপেন্ডেক্টমি)"
  },

  {
    en: "Intravenous fluid therapy",
    bn: "শিরার মাধ্যমে তরল (আইভি ফ্লুইড) প্রদান"
  },

  {
    en: "Antibiotic treatment and monitoring",
    bn: "অ্যান্টিবায়োটিক চিকিৎসা ও নিবিড় পর্যবেক্ষণ"
  }

],

// ==========================
// LIFESTYLE
// ==========================

lifestyle_changes: [

  {
    en: "Seek emergency medical care immediately",
    bn: "দ্রুত জরুরি চিকিৎসা গ্রহণ করুন"
  },

  {
    en: "Avoid food and drinks until evaluated",
    bn: "ডাক্তারের মূল্যায়ন না হওয়া পর্যন্ত খাবার ও পানীয় এড়িয়ে চলুন"
  },

  {
    en: "Do not use laxatives or heating pads",
    bn: "জোলাপ বা গরম সেঁক ব্যবহার করবেন না"
  },

  {
    en: "Avoid self-treatment and home remedies",
    bn: "নিজে চিকিৎসা বা ঘরোয়া প্রতিকার ব্যবহার করবেন না"
  },

  {
    en: "Follow post-surgery recovery instructions",
    bn: "অস্ত্রোপচারের পর চিকিৎসকের নির্দেশনা মেনে চলুন"
  }

],

// ==========================
// DOCTOR CONSULTATION
// ==========================

doctor_consultation: [

  {
    en: "Severe pain in the lower right abdomen",
    bn: "পেটের ডান নিচের অংশে তীব্র ব্যথা"
  },

  {
    en: "Rigid abdomen or severe tenderness",
    bn: "পেট শক্ত হয়ে যাওয়া বা তীব্র স্পর্শকাতরতা"
  },

  {
    en: "Persistent vomiting or inability to drink fluids",
    bn: "ক্রমাগত বমি বা তরল গ্রহণে অক্ষমতা"
  },

  {
    en: "High fever with worsening abdominal pain",
    bn: "উচ্চ জ্বরের সাথে বাড়তে থাকা পেটব্যথা"
  },

  {
    en: "Dizziness, rapid heartbeat, or fainting",
    bn: "মাথা ঘোরা, দ্রুত হৃদস্পন্দন বা অজ্ঞান হওয়া"
  }

],

disease_meaning:[ 
  {
  en: "Inflammation of the appendix causing severe abdominal pain and requiring urgent medical treatment.",
  bn: "অ্যাপেন্ডিক্সে প্রদাহ বা সংক্রমণ, যা সাধারণত পেটের ডান নিচের অংশে তীব্র ব্যথা সৃষ্টি করে এবং দ্রুত চিকিৎসা বা অস্ত্রোপচার প্রয়োজন হতে পারে।"
}
],

  }
];