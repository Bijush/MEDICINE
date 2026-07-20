// ==============================
// SCABIES DATASET
// ==============================

export const SCABIES_DATA = [

  {

    id: "SK004",

    disease: "Scabies",

    medical_name: "Sarcoptes scabiei Infestation",

    category: "skin",

    tags: [

      "scabies",
      "itching",
      "rash",
      "mites",
      "skin infestation"

    ],

    prevalence: "common",

    severity: "mild_to_moderate",

    contagious: true,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      mite_infestation: {

        present: true,

        weight: 45

      },

      infected_contact: {

        present: true,

        weight: 35

      },

      overcrowding: {

        present: true,

        weight: 20

      },

      sharing_clothes_or_bedding: {

        present: true,

        weight: 30

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      severe_itching: {

        present: true,

        weight: 50

      },

      night_time_itching: {

        present: true,

        weight: 45

      },

      rash: {

        present: true,

        weight: 40

      },

      small_bumps: {

        present: true,

        weight: 35

      },

      burrow_marks: {

        present: true,

        weight: 30

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      secondary_infection: {

        present: true,

        weight: 90

      },

      crusted_scabies: {

        present: true,

        weight: 95

      },

      fever: {

        present: true,

        weight: 80

      }

    },

    required_symptoms: [

      "severe_itching"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Permethrin",

          line: "first_line",

          type: "Topical Scabicide",

          dosage: "5% Cream",

          frequency: "Single application, repeat after 7 days if needed",

          purpose: {

            en: "Kill mites causing scabies",

            bn: "খোসপাঁচড়ার জীবাণু ধ্বংস করা"

          }

        }

      ],

      second_line: [

        {

          name: "Benzyl Benzoate",

          line: "second_line",

          type: "Topical Scabicide",

          dosage: "25% Lotion",

          frequency: "As directed",

          purpose: {

            en: "Alternative treatment for scabies",

            bn: "খোসপাঁচড়ার বিকল্প চিকিৎসা"

          }

        }

      ],

      third_line: [

        {

          name: "Ivermectin",

          line: "third_line",

          type: "Oral Antiparasitic",

          dosage: "200 mcg/kg",

          frequency: "As prescribed",

          purpose: {

            en: "Severe or widespread scabies",

            bn: "তীব্র বা বিস্তৃত খোসপাঁচড়া"

          }

        }

      ],

      emergency_line: [

        {

          name: "Combination Therapy",

          line: "emergency_line",

          type: "Specialist Treatment",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Crusted scabies or resistant cases",

            bn: "ক্রাস্টেড বা জটিল খোসপাঁচড়া"

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

      "Wash clothes and bedding in hot water",

      "Treat all household contacts",

      "Maintain personal hygiene"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid sharing clothes and towels",

      "Wash bedding regularly",

      "Keep fingernails short"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Symptoms persist after treatment",

        bn: "চিকিৎসার পরও উপসর্গ থাকলে"

      },

      {

        en: "Signs of skin infection",

        bn: "ত্বকের সংক্রমণের লক্ষণ দেখা দিলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Scabies is a contagious skin infestation caused by tiny mites called Sarcoptes scabiei. It leads to intense itching, especially at night, along with rashes and small bumps on the skin.",

        bn:
          "খোসপাঁচড়া বা স্ক্যাবিস হলো Sarcoptes scabiei নামক ক্ষুদ্র মাইটের কারণে হওয়া একটি সংক্রামক ত্বকের রোগ। এতে বিশেষ করে রাতে তীব্র চুলকানি, র‍্যাশ এবং ছোট ছোট ফুসকুড়ি দেখা যায়।"

      }

    ]

  }

];