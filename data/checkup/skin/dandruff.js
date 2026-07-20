// ==============================
// DANDRUFF DATASET
// ==============================

export const DANDRUFF_DATA = [

  {

    id: "SK009",

    disease: "Dandruff",

    medical_name: "Pityriasis Capitis",

    category: "skin",

    tags: [

      "dandruff",
      "scalp",
      "itching",
      "flakes",
      "seborrheic dermatitis"

    ],

    prevalence: "very_common",

    severity: "mild_to_moderate",

    contagious: false,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      oily_scalp: {

        present: true,

        weight: 35

      },

      fungal_overgrowth: {

        present: true,

        weight: 40

      },

      dry_skin: {

        present: true,

        weight: 25

      },

      stress: {

        present: true,

        weight: 15

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      white_flakes: {

        present: true,

        weight: 50

      },

      itchy_scalp: {

        present: true,

        weight: 40

      },

      dry_scalp: {

        present: true,

        weight: 30

      },

      oily_scalp: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      hair_loss: {

        present: true,

        weight: 80

      },

      bleeding_scalp: {

        present: true,

        weight: 90

      },

      severe_inflammation: {

        present: true,

        weight: 85

      }

    },

    required_symptoms: [

      "white_flakes"

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

            en: "Control dandruff and scalp fungus",

            bn: "খুশকি ও মাথার ত্বকের ছত্রাক নিয়ন্ত্রণ"

          }

        }

      ],

      second_line: [

        {

          name: "Zinc Pyrithione Shampoo",

          line: "second_line",

          type: "Anti-dandruff Shampoo",

          frequency: "2-3 times weekly",

          purpose: {

            en: "Reduce scaling and itching",

            bn: "খোসা ওঠা ও চুলকানি কমানো"

          }

        }

      ],

      third_line: [

        {

          name: "Selenium Sulfide Shampoo",

          line: "third_line",

          type: "Antifungal Shampoo",

          frequency: "Twice weekly",

          purpose: {

            en: "Persistent dandruff",

            bn: "দীর্ঘস্থায়ী খুশকি"

          }

        }

      ],

      emergency_line: [

        {

          name: "Topical Corticosteroid Lotion",

          line: "emergency_line",

          type: "Anti-inflammatory",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe scalp inflammation",

            bn: "তীব্র মাথার ত্বকের প্রদাহ"

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

          en: "May support scalp and hair health",

          bn: "মাথার ত্বক ও চুলের স্বাস্থ্যে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Regular shampooing",

      "Keep scalp clean",

      "Use medicated shampoos"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Reduce stress",

      "Avoid harsh hair products",

      "Maintain scalp hygiene"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Severe itching or redness",

        bn: "তীব্র চুলকানি বা লালভাব হলে"

      },

      {

        en: "Hair loss or persistent dandruff",

        bn: "চুল পড়া বা দীর্ঘস্থায়ী খুশকি থাকলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Dandruff is a common scalp condition characterized by white flakes and itching. It is often associated with excess oil, dry skin, or overgrowth of Malassezia fungus and is not contagious.",

        bn:
          "খুশকি হলো মাথার ত্বকের একটি সাধারণ সমস্যা, যেখানে সাদা খোসা এবং চুলকানি দেখা যায়। এটি অতিরিক্ত তেল, শুষ্ক ত্বক বা Malassezia ছত্রাকের অতিবৃদ্ধির সাথে সম্পর্কিত এবং এটি সংক্রামক নয়।"

      }

    ]

  }

];