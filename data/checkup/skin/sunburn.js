// ==============================
// SUNBURN DATASET
// ==============================

export const SUNBURN_DATA = [

  {

    id: "SK019",

    disease: "Sunburn",

    medical_name: "Solar Erythema",

    category: "skin",

    tags: [

      "sunburn",
      "sun exposure",
      "red skin",
      "burning sensation",
      "uv radiation"

    ],

    prevalence: "common",

    severity: "mild_to_moderate",

    contagious: false,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      ultraviolet_radiation: {

        present: true,

        weight: 50

      },

      prolonged_sun_exposure: {

        present: true,

        weight: 45

      },

      lack_of_sunscreen: {

        present: true,

        weight: 30

      },

      fair_skin: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      red_skin: {

        present: true,

        weight: 50

      },

      burning_sensation: {

        present: true,

        weight: 45

      },

      pain: {

        present: true,

        weight: 40

      },

      swelling: {

        present: true,

        weight: 25

      },

      blisters: {

        present: true,

        weight: 35

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_blistering: {

        present: true,

        weight: 90

      },

      dehydration: {

        present: true,

        weight: 95

      },

      heat_stroke: {

        present: true,

        weight: 100

      }

    },

    required_symptoms: [

      "red_skin"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Aloe Vera Gel",

          line: "first_line",

          type: "Skin Soothing Agent",

          frequency: "3-4 times daily",

          purpose: {

            en: "Relieve pain and redness",

            bn: "ব্যথা ও লালভাব কমানো"

          }

        },

        {

          name: "Calamine Lotion",

          line: "first_line",

          type: "Skin Protectant",

          frequency: "2-3 times daily",

          purpose: {

            en: "Reduce irritation and itching",

            bn: "জ্বালাপোড়া ও চুলকানি কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Ibuprofen",

          line: "second_line",

          type: "NSAID",

          dosage: "400mg",

          frequency: "Every 8 hours after food",

          purpose: {

            en: "Reduce pain and inflammation",

            bn: "ব্যথা ও প্রদাহ কমানো"

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

            en: "Severe redness and inflammation",

            bn: "তীব্র লালভাব ও প্রদাহ"

          }

        }

      ],

      emergency_line: [

        {

          name: "IV Fluids",

          line: "emergency_line",

          type: "Hospital Treatment",

          frequency: "Hospital supervision only",

          purpose: {

            en: "Severe dehydration or heat stroke",

            bn: "তীব্র পানিশূন্যতা বা হিট স্ট্রোক"

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

          en: "May support skin repair",

          bn: "ত্বক পুনর্গঠনে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Apply cool compress",

      "Drink plenty of fluids",

      "Stay out of direct sunlight"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Use sunscreen regularly",

      "Wear protective clothing",

      "Avoid excessive sun exposure"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Severe blistering or dehydration",

        bn: "তীব্র ফোসকা বা পানিশূন্যতা হলে"

      },

      {

        en: "Fever, dizziness, or confusion",

        bn: "জ্বর, মাথা ঘোরা বা বিভ্রান্তি হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Sunburn is a skin injury caused by excessive exposure to ultraviolet (UV) radiation from the sun. It leads to redness, pain, burning, and sometimes blistering. Severe cases may result in dehydration or heat-related illness.",

        bn:
          "সানবার্ন হলো সূর্যের অতিবেগুনি (UV) রশ্মির অতিরিক্ত সংস্পর্শে ত্বকের ক্ষতি। এতে ত্বক লাল হয়ে যায়, ব্যথা ও জ্বালাপোড়া হয় এবং কখনও কখনও ফোসকা পড়ে। গুরুতর ক্ষেত্রে পানিশূন্যতা বা তাপজনিত অসুস্থতা দেখা দিতে পারে।"

      }

    ]

  }

];