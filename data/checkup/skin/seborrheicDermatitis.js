// ==============================
// SEBORRHEIC DERMATITIS DATASET
// ==============================

export const SEBORRHEIC_DERMATITIS_DATA = [

  {

    id: "SK012",

    disease: "Seborrheic Dermatitis",

    medical_name: "Seborrheic Dermatitis",

    category: "skin",

    tags: [

      "seborrheic dermatitis",
      "dandruff",
      "scalp",
      "itching",
      "red patches"

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

      malassezia_fungus: {

        present: true,

        weight: 40

      },

      oily_skin: {

        present: true,

        weight: 35

      },

      stress: {

        present: true,

        weight: 20

      },

      weak_immunity: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      scalp_flaking: {

        present: true,

        weight: 50

      },

      itchy_scalp: {

        present: true,

        weight: 40

      },

      greasy_scales: {

        present: true,

        weight: 35

      },

      redness: {

        present: true,

        weight: 30

      },

      burning_sensation: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_inflammation: {

        present: true,

        weight: 90

      },

      secondary_infection: {

        present: true,

        weight: 85

      },

      hair_loss: {

        present: true,

        weight: 80

      }

    },

    required_symptoms: [

      "scalp_flaking"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Ketoconazole Shampoo",

          line: "first_line",

          type: "Antifungal Shampoo",

          dosage: "2%",

          frequency: "2-3 times weekly",

          purpose: {

            en: "Control scalp fungus and scaling",

            bn: "মাথার ত্বকের ছত্রাক ও খোসা নিয়ন্ত্রণ"

          }

        }

      ],

      second_line: [

        {

          name: "Selenium Sulfide Shampoo",

          line: "second_line",

          type: "Medicated Shampoo",

          frequency: "Twice weekly",

          purpose: {

            en: "Persistent seborrheic dermatitis",

            bn: "দীর্ঘস্থায়ী সেবোরিক ডার্মাটাইটিস"

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

            en: "Reduce inflammation and itching",

            bn: "প্রদাহ ও চুলকানি কমানো"

          }

        }

      ],

      emergency_line: [

        {

          name: "Dermatologist Consultation",

          line: "emergency_line",

          type: "Specialist Care",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe or resistant disease",

            bn: "তীব্র বা জটিল রোগ"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Biotin",

        type: "Vitamin",

        purpose: {

          en: "May support scalp health",

          bn: "মাথার ত্বকের স্বাস্থ্যে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Use medicated shampoos",

      "Maintain scalp hygiene",

      "Avoid harsh hair products"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Reduce stress",

      "Wash scalp regularly",

      "Maintain a healthy diet"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Persistent symptoms despite treatment",

        bn: "চিকিৎসার পরও উপসর্গ না কমলে"

      },

      {

        en: "Hair loss or severe redness",

        bn: "চুল পড়া বা তীব্র লালভাব দেখা দিলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Seborrheic dermatitis is a chronic inflammatory skin condition affecting areas rich in oil glands, especially the scalp, face, and chest. It causes dandruff, redness, greasy scales, and itching and is not contagious.",

        bn:
          "সেবোরিক ডার্মাটাইটিস হলো একটি দীর্ঘস্থায়ী প্রদাহজনিত ত্বকের রোগ, যা প্রধানত মাথার ত্বক, মুখ এবং বুকের মতো তেল গ্রন্থি সমৃদ্ধ অংশকে প্রভাবিত করে। এতে খুশকি, লালভাব, তৈলাক্ত খোসা এবং চুলকানি দেখা যায়। এটি সংক্রামক নয়।"

      }

    ]

  }

];