// ==============================
// MELASMA DATASET
// ==============================

export const MELASMA_DATA = [

  {

    id: "SK008",

    disease: "Melasma",

    medical_name: "Melasma",

    category: "skin",

    tags: [

      "melasma",
      "hyperpigmentation",
      "brown patches",
      "facial pigmentation"

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

      sun_exposure: {

        present: true,

        weight: 45

      },

      hormonal_changes: {

        present: true,

        weight: 35

      },

      pregnancy: {

        present: true,

        weight: 25

      },

      family_history: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      brown_patches: {

        present: true,

        weight: 50

      },

      facial_discoloration: {

        present: true,

        weight: 40

      },

      symmetrical_pigmentation: {

        present: true,

        weight: 35

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      rapidly_changing_pigmentation: {

        present: true,

        weight: 80

      },

      irregular_borders: {

        present: true,

        weight: 90

      }

    },

    required_symptoms: [

      "brown_patches"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Sunscreen",

          line: "first_line",

          type: "Photoprotection",

          dosage: "SPF 30 or higher",

          frequency: "Daily",

          purpose: {

            en: "Prevent worsening of pigmentation",

            bn: "ত্বকের দাগ বাড়া প্রতিরোধ"

          }

        }

      ],

      second_line: [

        {

          name: "Hydroquinone",

          line: "second_line",

          type: "Depigmenting Agent",

          dosage: "2-4% Cream",

          frequency: "Once daily",

          purpose: {

            en: "Reduce pigmentation",

            bn: "ত্বকের কালো দাগ কমানো"

          }

        }

      ],

      third_line: [

        {

          name: "Tretinoin",

          line: "third_line",

          type: "Topical Retinoid",

          dosage: "0.025%-0.05%",

          frequency: "At night",

          purpose: {

            en: "Improve skin turnover",

            bn: "ত্বকের পুনর্গঠন উন্নত করা"

          }

        }

      ],

      emergency_line: [

        {

          name: "Dermatologist Consultation",

          line: "emergency_line",

          type: "Specialist Care",

          frequency: "As advised",

          purpose: {

            en: "Persistent or severe melasma",

            bn: "দীর্ঘস্থায়ী বা তীব্র মেলাজমা"

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

        type: "Antioxidant",

        purpose: {

          en: "May support skin health",

          bn: "ত্বকের স্বাস্থ্যে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Daily sunscreen use",

      "Avoid excessive sun exposure",

      "Follow dermatologist advice"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Wear hats and protective clothing",

      "Avoid direct sunlight",

      "Use broad-spectrum sunscreen"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Pigmentation worsening despite treatment",

        bn: "চিকিৎসার পরও দাগ বাড়লে"

      },

      {

        en: "New or unusual skin changes",

        bn: "ত্বকে নতুন বা অস্বাভাবিক পরিবর্তন দেখা দিলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Melasma is a common skin condition characterized by brown or grayish patches, mainly on the face. It is often associated with sun exposure, hormonal changes, and pregnancy and is not contagious.",

        bn:
          "মেলাজমা হলো একটি সাধারণ ত্বকের সমস্যা, যেখানে মুখে বাদামী বা ধূসর রঙের দাগ দেখা যায়। এটি সাধারণত সূর্যালোক, হরমোনের পরিবর্তন এবং গর্ভাবস্থার সাথে সম্পর্কিত এবং এটি সংক্রামক নয়।"

      }

    ]

  }

];