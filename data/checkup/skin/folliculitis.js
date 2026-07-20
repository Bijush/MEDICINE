// ==============================
// FOLLICULITIS DATASET
// ==============================

export const FOLLICULITIS_DATA = [

  {

    id: "SK018",

    disease: "Folliculitis",

    medical_name: "Folliculitis",

    category: "skin",

    tags: [

      "folliculitis",
      "hair follicle infection",
      "pimples",
      "itching",
      "red bumps"

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

      bacterial_infection: {

        present: true,

        weight: 50

      },

      fungal_infection: {

        present: true,

        weight: 25

      },

      friction_from_clothing: {

        present: true,

        weight: 20

      },

      shaving: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      red_bumps: {

        present: true,

        weight: 50

      },

      pus_filled_pimples: {

        present: true,

        weight: 45

      },

      itching: {

        present: true,

        weight: 35

      },

      tenderness: {

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

      fever: {

        present: true,

        weight: 85

      },

      spreading_infection: {

        present: true,

        weight: 90

      },

      abscess_formation: {

        present: true,

        weight: 95

      }

    },

    required_symptoms: [

      "red_bumps"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Warm Compress",

          line: "first_line",

          type: "Supportive Care",

          frequency: "3-4 times daily",

          purpose: {

            en: "Reduce inflammation and promote healing",

            bn: "প্রদাহ কমানো এবং নিরাময়ে সহায়তা করা"

          }

        },

        {

          name: "Mupirocin",

          line: "first_line",

          type: "Topical Antibiotic",

          dosage: "2% Ointment",

          frequency: "Three times daily",

          purpose: {

            en: "Localized bacterial folliculitis",

            bn: "স্থানীয় ব্যাকটেরিয়াজনিত ফলিকুলাইটিস"

          }

        }

      ],

      second_line: [

        {

          name: "Clindamycin",

          line: "second_line",

          type: "Topical Antibiotic",

          dosage: "1% Gel",

          frequency: "Twice daily",

          purpose: {

            en: "Persistent folliculitis",

            bn: "দীর্ঘস্থায়ী ফলিকুলাইটিস"

          }

        }

      ],

      third_line: [

        {

          name: "Cephalexin",

          line: "third_line",

          type: "Oral Antibiotic",

          dosage: "500mg",

          frequency: "Four times daily",

          purpose: {

            en: "Moderate to severe folliculitis",

            bn: "মাঝারি থেকে তীব্র ফলিকুলাইটিস"

          }

        }

      ],

      emergency_line: [

        {

          name: "Incision and Drainage",

          line: "emergency_line",

          type: "Minor Surgical Procedure",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Abscess or severe infection",

            bn: "অ্যাবসেস বা তীব্র সংক্রমণ"

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

          bn: "ত্বক নিরাময়ে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Keep affected area clean",

      "Apply warm compress",

      "Avoid shaving temporarily"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Maintain personal hygiene",

      "Avoid tight clothing",

      "Use clean razors"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Symptoms worsen or spread",

        bn: "উপসর্গ বেড়ে গেলে বা ছড়িয়ে পড়লে"

      },

      {

        en: "Fever or abscess develops",

        bn: "জ্বর বা অ্যাবসেস হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Folliculitis is an inflammation or infection of hair follicles, usually caused by bacteria or fungi. It produces small red bumps, pus-filled pimples, itching, and tenderness.",

        bn:
          "ফলিকুলাইটিস হলো চুলের গোড়ার প্রদাহ বা সংক্রমণ, যা সাধারণত ব্যাকটেরিয়া বা ছত্রাকের কারণে হয়। এতে ছোট লাল ফুসকুড়ি, পুঁজভরা দানা, চুলকানি এবং ব্যথা দেখা যায়।"

      }

    ]

  }

];