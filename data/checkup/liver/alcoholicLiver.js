// ==============================
// ALCOHOLIC LIVER DISEASE
// ADVANCED UNIVERSAL VERSION
// SAFE CANONICAL BILINGUAL VERSION
// ==============================

export const ALCOHOLIC_LIVER = [

  {

    id: "ALD001",

    disease:
      "Alcoholic Liver Disease",

    disease_bn:
      "অ্যালকোহলজনিত লিভারের রোগ",

    medical_name:
      "Alcohol Related Liver Disease",

    medical_name_bn:
      "অ্যালকোহল সম্পর্কিত লিভারের রোগ",

    aliases: [

      "alcoholic hepatitis",

      "alcohol liver damage",

      "alcohol liver disease",

      "alcoholic cirrhosis",

      "alcoholic fatty liver"
    ],

    category: "liver",

    tags: [

      "liver",

      "alcohol",

      "hepatitis",

      "cirrhosis",

      "fatty liver"
    ],

    prevalence: "common",

    severity: "severe",

    chronic: true,

    // ==========================
    // RISK FACTORS
    // ==========================

    risk_factors: {

      chronic_alcohol_use: {

        present: true,

        weight: 45,

        label:
          "Chronic alcohol use",

        label_bn:
          "দীর্ঘদিন অ্যালকোহল সেবন",

        aliases: [

          "heavy_alcohol_intake",

          "long_term_drinking",

          "alcohol_addiction",

          "daily_alcohol_use",

          "alcohol_use"

        ]
      },

      malnutrition: {

        present: true,

        weight: 15,

        label:
          "Malnutrition",

        label_bn:
          "অপুষ্টি"
      },

      smoking: {

        present: true,

        weight: 10,

        label:
          "Smoking",

        label_bn:
          "ধূমপান"
      }
    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      jaundice: {

        present: true,

        weight: 35,

        label:
          "Jaundice",

        label_bn:
          "জন্ডিস",

        aliases: [

          "yellow_eyes",

          "yellow_skin",

          "severe_jaundice",

          "mild_jaundice",

          "icterus",

          "jaundice_present"

        ]
      },

      abdominal_pain: {

        present: true,

        weight: 25,

        label:
          "Abdominal pain",

        label_bn:
          "পেট ব্যথা",

        aliases: [

          "right_upper_abdominal_pain",

          "upper_abdominal_pain",

          "liver_pain",

          "stomach_pain",

          "belly_pain"

        ]
      },

      fatigue: {

        present: true,

        weight: 22,

        label:
          "Fatigue",

        label_bn:
          "অতিরিক্ত ক্লান্তি",

        aliases: [

          "weakness",

          "tiredness",

          "low_energy",

          "severe_fatigue"

        ]
      },

      vomiting: {

        present: true,

        weight: 15,

        label:
          "Vomiting",

        label_bn:
          "বমি",

        aliases: [

          "nausea",

          "vomiting_feeling"

        ]
      },

      appetite_loss: {

        present: true,

        weight: 20,

        label:
          "Loss of appetite",

        label_bn:
          "ক্ষুধামন্দা",

        aliases: [

          "loss_of_appetite"

        ]
      },

      weight_loss: {

        present: true,

        weight: 20,

        label:
          "Weight loss",

        label_bn:
          "ওজন কমে যাওয়া"
      },

      abdominal_swelling: {

        present: true,

        weight: 40,

        label:
          "Abdominal swelling",

        label_bn:
          "পেট ফোলা",

        aliases: [

          "bloating",

          "ascites",

          "abdominal_bloating",

          "stomach_swelling",

          "fluid_in_abdomen"

        ]
      },

      leg_swelling: {

        present: true,

        weight: 30,

        label:
          "Leg swelling",

        label_bn:
          "পা ফোলা",

        aliases: [

          "pedal_edema",

          "foot_swelling"

        ]
      },

      itching: {

        present: true,

        weight: 15,

        label:
          "Itching",

        label_bn:
          "চুলকানি"
      },

      confusion: {

        present: true,

        weight: 40,

        label:
          "Confusion",

        label_bn:
          "বিভ্রান্তি",

        aliases: [

          "altered_behavior",

          "drowsiness",

          "poor_concentration",

          "memory_loss",

          "hepatic_confusion",

          "slow_response",

          "sleep_disturbance"

        ]
      },

      bleeding: {

        present: true,

        weight: 45,

        label:
          "Bleeding",

        label_bn:
          "রক্তক্ষরণ",

        aliases: [

          "vomiting_blood",

          "black_stool",

          "blood_vomit",

          "blood_in_vomit",

          "gastrointestinal_bleeding"

        ]
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      enlarged_liver: {

        present: true,

        weight: 35,

        label:
          "Enlarged liver",

        label_bn:
          "লিভার বড় হয়ে যাওয়া",

        aliases: [

          "hepatomegaly"

        ]
      },

      ascites: {

        present: true,

        weight: 45,

        label:
          "Ascites",

        label_bn:
          "পেটে পানি জমা",

        aliases: [

          "abdominal_swelling"

        ]
      },

      liver_tenderness: {

        present: true,

        weight: 25,

        label:
          "Liver tenderness",

        label_bn:
          "লিভারে চাপ দিলে ব্যথা"
      },

      hand_tremor: {

        present: true,

        weight: 20,

        label:
          "Hand tremor",

        label_bn:
          "হাত কাঁপা"
      }
    },

    // ==========================
    // TESTS
    // ==========================

    tests: {

      ast_alt_ratio_high: {

        present: true,

        weight: 45,

        label:
          "High AST/ALT ratio",

        label_bn:
          "AST/ALT অনুপাত বেশি"
      },

      bilirubin_high: {

        present: true,

        weight: 35,

        label:
          "High bilirubin",

        label_bn:
          "বিলিরুবিন বেশি"
      },

      ggt_high: {

        present: true,

        weight: 35,

        label:
          "High GGT",

        label_bn:
          "GGT বেশি"
      },

      liver_enzymes_high: {

        present: true,

        weight: 30,

        label:
          "High liver enzymes",

        label_bn:
          "লিভার এনজাইম বেশি"
      },

      albumin_low: {

        present: true,

        weight: 35,

        label:
          "Low albumin",

        label_bn:
          "অ্যালবুমিন কম"
      },

      inr_high: {

        present: true,

        weight: 35,

        label:
          "High INR",

        label_bn:
          "INR বেশি"
      },

      ultrasound_fatty_changes: {

        present: true,

        weight: 30,

        label:
          "Fatty liver changes on ultrasound",

        label_bn:
          "আল্ট্রাসাউন্ডে ফ্যাটি লিভার",

        aliases: [

          "fatty_liver_ultrasound"

        ]
      },

      ultrasound_cirrhosis: {

        present: true,

        weight: 55,

        label:
          "Cirrhosis on ultrasound",

        label_bn:
          "আল্ট্রাসাউন্ডে সিরোসিস"
      }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================

    complications: {

      liver_failure: {

        present: true,

        weight: 85,

        label:
          "Liver failure",

        label_bn:
          "লিভার বিকল হওয়া"
      },

      cirrhosis: {

        present: true,

        weight: 75,

        label:
          "Cirrhosis",

        label_bn:
          "লিভার সিরোসিস"
      },

      portal_hypertension: {

        present: true,

        weight: 65,

        label:
          "Portal hypertension",

        label_bn:
          "পোর্টাল হাইপারটেনশন"
      },

      hepatic_encephalopathy: {

        present: true,

        weight: 80,

        label:
          "Hepatic encephalopathy",

        label_bn:
          "হেপাটিক এনসেফালোপ্যাথি"
      },

      gastrointestinal_bleeding: {

        present: true,

        weight: 70,

        label:
          "Gastrointestinal bleeding",

        label_bn:
          "পাকস্থলী বা অন্ত্রে রক্তক্ষরণ"
      }
    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      bleeding: {

        present: true,

        weight: 100,

        label:
          "Bleeding",

        label_bn:
          "রক্তক্ষরণ",

        aliases: [

          "vomiting_blood",

          "black_stool",

          "blood_vomit"

        ]
      },

      unconsciousness: {

        present: true,

        weight: 100,

        label:
          "Unconsciousness",

        label_bn:
          "অচেতন হওয়া"
      },

      severe_confusion: {

        present: true,

        weight: 90,

        label:
          "Severe confusion",

        label_bn:
          "তীব্র বিভ্রান্তি",

        aliases: [

          "coma"

        ]
      },

      severe_jaundice: {

        present: true,

        weight: 85,

        label:
          "Severe jaundice",

        label_bn:
          "তীব্র জন্ডিস"
      }
    },

    // ==========================
    // BONUS RULES
    // ==========================

    bonus_rules: [

      {

        symptoms: [

          "chronic_alcohol_use",

          "jaundice"

        ],

        match: "all",

        bonus: 35
      },

      {

        symptoms: [

          "abdominal_swelling",

          "leg_swelling"

        ],

        match: "all",

        bonus: 30
      },

      {

        symptoms: [

          "confusion"

        ],

        match: "any",

        bonus: 20
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================

    exclusion_rules: [

      {

        symptoms: [

          "viral_hepatitis_positive"

        ],

        match: "any",

        penalty: 15
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================

    followup_boosts: {

      jaundice: 12,

      abdominal_swelling: 15,

      confusion: 20,

      bleeding: 25
    },

    // ==========================
    // AGE RULES
    // ==========================

    age_rules: [

      {

        min_age: 35,

        bonus: 10
      }
    ],

    // ==========================
    // DURATION RULES
    // ==========================

    duration_rules: [

      {

        min_days: 30,

        bonus: 20
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================

    emergency_symptoms: [

      "bleeding",

      "unconsciousness",

      "severe_confusion"
    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: [

      {
        en: "Thiamine",
        bn: "থায়ামিন"
      },

      {
        en: "Vitamin B Complex",
        bn: "ভিটামিন বি কমপ্লেক্স"
      },

      {
        en: "Lactulose",
        bn: "ল্যাকটুলোজ"
      },

      {
        en: "Diuretics",
        bn: "ডাইইউরেটিক ওষুধ"
      },

      {
        en: "Liver Supportive Care",
        bn: "লিভারের সহায়ক চিকিৎসা"
      }
    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      {
        en: "Alcohol cessation",
        bn: "অ্যালকোহল সম্পূর্ণ বন্ধ করা"
      },

      {
        en: "Liver monitoring",
        bn: "লিভার নিয়মিত পর্যবেক্ষণ"
      },

      {
        en: "Nutritional support",
        bn: "পুষ্টিকর খাবার ও সাপোর্ট"
      },

      {
        en: "Hospital observation",
        bn: "হাসপাতালে পর্যবেক্ষণ"
      }
    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      {
        en: "Stop alcohol completely",
        bn: "সম্পূর্ণ অ্যালকোহল বন্ধ করুন"
      },

      {
        en: "Healthy liver diet",
        bn: "স্বাস্থ্যকর লিভার ডায়েট"
      },

      {
        en: "Avoid smoking",
        bn: "ধূমপান এড়িয়ে চলুন"
      },

      {
        en: "Regular liver checkup",
        bn: "নিয়মিত লিভার পরীক্ষা করুন"
      },

      {
        en: "Maintain hydration",
        bn: "পর্যাপ্ত পানি পান করুন"
      }
    ]
  }
];