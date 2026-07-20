// ==============================
// WARTS DATASET
// ==============================

export const WARTS_DATA = [

  {

    id: "SK016",

    disease: "Warts",

    medical_name: "Verruca Vulgaris",

    category: "skin",

    tags: [

      "warts",
      "hpv",
      "skin growth",
      "viral infection",
      "rough bumps"

    ],

    prevalence: "common",

    severity: "mild",

    contagious: true,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      human_papillomavirus: {

        present: true,

        weight: 50

      },

      direct_contact: {

        present: true,

        weight: 35

      },

      weak_immunity: {

        present: true,

        weight: 20

      },

      skin_injury: {

        present: true,

        weight: 15

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      rough_skin_growth: {

        present: true,

        weight: 50

      },

      small_bumps: {

        present: true,

        weight: 40

      },

      black_dots_inside_wart: {

        present: true,

        weight: 30

      },

      pain_while_walking: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      rapid_growth: {

        present: true,

        weight: 80

      },

      bleeding: {

        present: true,

        weight: 90

      },

      infection: {

        present: true,

        weight: 85

      }

    },

    required_symptoms: [

      "rough_skin_growth"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Salicylic Acid",

          line: "first_line",

          type: "Keratolytic Agent",

          dosage: "17%-40%",

          frequency: "Once daily",

          purpose: {

            en: "Remove common warts",

            bn: "সাধারণ আঁচিল দূর করা"

          }

        }

      ],

      second_line: [

        {

          name: "Cryotherapy",

          line: "second_line",

          type: "Freezing Therapy",

          frequency: "As advised",

          purpose: {

            en: "Persistent warts",

            bn: "দীর্ঘস্থায়ী আঁচিল"

          }

        }

      ],

      third_line: [

        {

          name: "Imiquimod",

          line: "third_line",

          type: "Immune Response Modifier",

          frequency: "As prescribed",

          purpose: {

            en: "Resistant warts",

            bn: "চিকিৎসায় প্রতিরোধী আঁচিল"

          }

        }

      ],

      emergency_line: [

        {

          name: "Surgical Removal",

          line: "emergency_line",

          type: "Minor Procedure",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Large or painful warts",

            bn: "বড় বা ব্যথাযুক্ত আঁচিল"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Zinc",

        type: "Mineral",

        purpose: {

          en: "May support immunity",

          bn: "রোগ প্রতিরোধ ক্ষমতাকে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Keep affected area clean",

      "Avoid picking warts",

      "Follow prescribed treatment"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid sharing towels",

      "Wear slippers in public showers",

      "Maintain personal hygiene"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Rapid increase in size",

        bn: "আঁচিল দ্রুত বড় হলে"

      },

      {

        en: "Pain, bleeding, or infection",

        bn: "ব্যথা, রক্তপাত বা সংক্রমণ হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Warts are small, rough skin growths caused by the human papillomavirus (HPV). They are contagious and may spread through direct contact or contaminated surfaces.",

        bn:
          "আঁচিল (Warts) হলো Human Papillomavirus (HPV) দ্বারা সৃষ্ট ছোট, শক্ত ও খসখসে ত্বকের বৃদ্ধি। এটি সংক্রামক এবং সরাসরি সংস্পর্শ বা দূষিত পৃষ্ঠের মাধ্যমে ছড়াতে পারে।"

      }

    ]

  }

];