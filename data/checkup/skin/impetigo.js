// ==============================
// IMPETIGO DATASET
// ==============================

export const IMPETIGO_DATA = [

  {

    id: "SK014",

    disease: "Impetigo",

    medical_name: "Impetigo",

    category: "skin",

    tags: [

      "impetigo",
      "skin infection",
      "honey crust",
      "bacterial infection",
      "rash"

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

      staphylococcus_infection: {

        present: true,

        weight: 45

      },

      streptococcus_infection: {

        present: true,

        weight: 40

      },

      poor_hygiene: {

        present: true,

        weight: 20

      },

      skin_injury: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      honey_colored_crust: {

        present: true,

        weight: 55

      },

      red_sores: {

        present: true,

        weight: 45

      },

      itching: {

        present: true,

        weight: 30

      },

      fluid_filled_blisters: {

        present: true,

        weight: 35

      },

      rash: {

        present: true,

        weight: 25

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

      rapidly_spreading_infection: {

        present: true,

        weight: 95

      },

      cellulitis: {

        present: true,

        weight: 100

      }

    },

    required_symptoms: [

      "honey_colored_crust"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Mupirocin",

          line: "first_line",

          type: "Topical Antibiotic",

          dosage: "2% Ointment",

          frequency: "Three times daily",

          purpose: {

            en: "Localized impetigo infection",

            bn: "স্থানীয় ইমপেটিগো সংক্রমণ"

          }

        }

      ],

      second_line: [

        {

          name: "Fusidic Acid",

          line: "second_line",

          type: "Topical Antibiotic",

          dosage: "2% Cream",

          frequency: "Three times daily",

          purpose: {

            en: "Mild bacterial skin infection",

            bn: "হালকা ব্যাকটেরিয়াজনিত ত্বকের সংক্রমণ"

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

            en: "Extensive impetigo",

            bn: "বিস্তৃত ইমপেটিগো"

          }

        }

      ],

      emergency_line: [

        {

          name: "IV Antibiotics",

          line: "emergency_line",

          type: "Hospital Treatment",

          frequency: "Hospital supervision only",

          purpose: {

            en: "Severe infection with complications",

            bn: "জটিলতা সহ গুরুতর সংক্রমণ"

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

          en: "May support wound healing",

          bn: "ক্ষত নিরাময়ে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Keep lesions clean",

      "Wash hands frequently",

      "Avoid scratching"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Do not share towels",

      "Maintain personal hygiene",

      "Keep fingernails short"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Infection spreading rapidly",

        bn: "সংক্রমণ দ্রুত ছড়িয়ে পড়লে"

      },

      {

        en: "Fever or worsening symptoms",

        bn: "জ্বর বা উপসর্গ বেড়ে গেলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Impetigo is a highly contagious bacterial skin infection that commonly affects children. It causes red sores and characteristic honey-colored crusts and spreads through direct contact.",

        bn:
          "ইমপেটিগো একটি অত্যন্ত সংক্রামক ব্যাকটেরিয়াজনিত ত্বকের সংক্রমণ, যা সাধারণত শিশুদের মধ্যে বেশি দেখা যায়। এতে লাল ঘা এবং মধুর মতো হলুদাভ খোসা তৈরি হয় এবং এটি সরাসরি সংস্পর্শের মাধ্যমে ছড়ায়।"

      }

    ]

  }

];