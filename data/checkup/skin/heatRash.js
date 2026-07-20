// ==============================
// HEAT RASH DATASET
// ==============================

export const HEAT_RASH_DATA = [

  {

    id: "SK022",

    disease: "Heat Rash",

    medical_name: "Miliaria",

    category: "skin",

    tags: [

      "heat rash",
      "miliaria",
      "prickly heat",
      "itching",
      "small bumps"

    ],

    prevalence: "very_common",

    severity: "mild",

    contagious: false,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      excessive_sweating: {

        present: true,

        weight: 50

      },

      hot_humid_weather: {

        present: true,

        weight: 45

      },

      blocked_sweat_glands: {

        present: true,

        weight: 40

      },

      tight_clothing: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      small_red_bumps: {

        present: true,

        weight: 50

      },

      itching: {

        present: true,

        weight: 40

      },

      prickling_sensation: {

        present: true,

        weight: 35

      },

      redness: {

        present: true,

        weight: 30

      },

      mild_burning: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      papular_rash: {

        present: true,

        weight: 50

      },

      erythema: {

        present: true,

        weight: 35

      },

      sweat_retention: {

        present: true,

        weight: 30

      },

      neck_or_chest_involvement: {

        present: true,

        weight: 25

      },

      pus_formation: {

        present: false,

        weight: -50

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      fever: {

        present: true,

        weight: 85

      },

      secondary_infection: {

        present: true,

        weight: 90

      },

      pus_discharge: {

        present: true,

        weight: 95

      }

    },

    required_symptoms: [

      "small_red_bumps"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Calamine Lotion",

          line: "first_line",

          type: "Skin Protectant",

          frequency: "2-3 times daily",

          purpose: {

            en: "Relieve itching and irritation",

            bn: "চুলকানি ও জ্বালাপোড়া কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Aloe Vera Gel",

          line: "second_line",

          type: "Skin Soothing Agent",

          frequency: "3 times daily",

          purpose: {

            en: "Cool and soothe skin",

            bn: "ত্বক ঠান্ডা ও আরামদায়ক রাখা"

          }

        }

      ],

      third_line: [

        {

          name: "Hydrocortisone",

          line: "third_line",

          type: "Topical Corticosteroid",

          dosage: "1% Cream",

          frequency: "Twice daily",

          purpose: {

            en: "Severe itching or inflammation",

            bn: "তীব্র চুলকানি বা প্রদাহ"

          }

        }

      ],

      emergency_line: [

        {

          name: "Oral Antibiotics",

          line: "emergency_line",

          type: "Antibiotic",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Secondary bacterial infection",

            bn: "দ্বিতীয় ব্যাকটেরিয়াজনিত সংক্রমণ"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Vitamin C",

        type: "Vitamin",

        purpose: {

          en: "May support skin healing",

          bn: "ত্বক সুস্থ হতে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Stay in a cool environment",

      "Avoid excessive sweating",

      "Wear loose cotton clothing"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid hot and humid conditions",

      "Keep skin dry",

      "Take cool showers"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Rash persists for several days",

        bn: "র‍্যাশ কয়েক দিনেও না কমলে"

      },

      {

        en: "Pus, fever, or worsening symptoms",

        bn: "পুঁজ, জ্বর বা উপসর্গ বেড়ে গেলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Heat rash, also called prickly heat or miliaria, occurs when sweat ducts become blocked, causing small itchy red bumps. It is common in hot and humid climates and is not contagious.",

        bn:
          "হিট র‍্যাশ বা ঘামাচি (Miliaria) হলো ঘর্মগ্রন্থির নালী বন্ধ হয়ে যাওয়ার কারণে সৃষ্ট ছোট ছোট লাল ও চুলকানিযুক্ত ফুসকুড়ি। এটি গরম ও আর্দ্র আবহাওয়ায় বেশি দেখা যায় এবং সংক্রামক নয়।"

      }

    ]

  }

];