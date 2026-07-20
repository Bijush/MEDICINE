// ==============================
// DRY SKIN DATASET
// ==============================

export const DRY_SKIN_DATA = [

  {

    id: "SK023",

    disease: "Dry Skin",

    medical_name: "Xerosis",

    category: "skin",

    tags: [

      "dry skin",
      "xerosis",
      "itching",
      "flaky skin",
      "rough skin"

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

      cold_weather: {

        present: true,

        weight: 40

      },

      low_humidity: {

        present: true,

        weight: 35

      },

      excessive_bathing: {

        present: true,

        weight: 30

      },

      harsh_soaps: {

        present: true,

        weight: 35

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      rough_skin: {

        present: true,

        weight: 50

      },

      flaking: {

        present: true,

        weight: 45

      },

      itching: {

        present: true,

        weight: 40

      },

      tight_skin: {

        present: true,

        weight: 30

      },

      cracks: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      scaling: {

        present: true,

        weight: 45

      },

      skin_roughness: {

        present: true,

        weight: 40

      },

      fissures: {

        present: true,

        weight: 25

      },

      erythema: {

        present: true,

        weight: 20

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

      deep_cracks: {

        present: true,

        weight: 85

      },

      bleeding: {

        present: true,

        weight: 90

      },

      secondary_infection: {

        present: true,

        weight: 95

      }

    },

    required_symptoms: [

      "rough_skin"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Moisturizer",

          line: "first_line",

          type: "Emollient",

          frequency: "2-3 times daily",

          purpose: {

            en: "Restore skin moisture",

            bn: "ত্বকের আর্দ্রতা ফিরিয়ে আনা"

          }

        }

      ],

      second_line: [

        {

          name: "Petroleum Jelly",

          line: "second_line",

          type: "Occlusive Agent",

          frequency: "Twice daily",

          purpose: {

            en: "Prevent moisture loss",

            bn: "ত্বকের আর্দ্রতা ধরে রাখা"

          }

        }

      ],

      third_line: [

        {

          name: "Urea Cream",

          line: "third_line",

          type: "Humectant",

          dosage: "10%-20%",

          frequency: "Once or twice daily",

          purpose: {

            en: "Severe dry skin",

            bn: "তীব্র শুষ্ক ত্বক"

          }

        }

      ],

      emergency_line: [

        {

          name: "Topical Antibiotic",

          line: "emergency_line",

          type: "Antibiotic",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Secondary infection",

            bn: "দ্বিতীয় সংক্রমণ"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Omega-3 Fatty Acids",

        type: "Nutritional Supplement",

        purpose: {

          en: "May support skin hydration",

          bn: "ত্বকের আর্দ্রতা বজায় রাখতে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Use moisturizers regularly",

      "Avoid hot showers",

      "Use mild soaps"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Drink adequate water",

      "Use a humidifier if needed",

      "Avoid harsh detergents"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Skin cracks or bleeding develop",

        bn: "ত্বকে ফাটল বা রক্তপাত হলে"

      },

      {

        en: "Symptoms do not improve",

        bn: "উপসর্গ না কমলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Dry skin, also called xerosis, is a common condition in which the skin loses moisture and becomes rough, flaky, itchy, and sometimes cracked. It is not contagious and usually improves with proper skin care.",

        bn:
          "শুষ্ক ত্বক বা জেরোসিস (Xerosis) হলো একটি সাধারণ অবস্থা, যেখানে ত্বক আর্দ্রতা হারিয়ে রুক্ষ, খসখসে, চুলকানিযুক্ত এবং কখনও কখনও ফেটে যায়। এটি সংক্রামক নয় এবং সঠিক ত্বকের যত্নের মাধ্যমে সাধারণত ভালো হয়ে যায়।"

      }

    ]

  }

];