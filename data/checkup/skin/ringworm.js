// ==============================
// RINGWORM DATASET
// ==============================

export const RINGWORM_DATA = [

  {

    id: "SK010",

    disease: "Ringworm",

    medical_name: "Tinea Corporis",

    category: "skin",

    tags: [

      "ringworm",
      "tinea",
      "fungal infection",
      "itching",
      "circular rash"

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

      dermatophyte_fungi: {

        present: true,

        weight: 45

      },

      infected_person_contact: {

        present: true,

        weight: 35

      },

      infected_animals: {

        present: true,

        weight: 25

      },

      humid_environment: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      circular_rash: {

        present: true,

        weight: 50

      },

      itching: {

        present: true,

        weight: 45

      },

      red_border: {

        present: true,

        weight: 35

      },

      scaling: {

        present: true,

        weight: 30

      },

      skin_peeling: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      widespread_infection: {

        present: true,

        weight: 90

      },

      secondary_bacterial_infection: {

        present: true,

        weight: 85

      },

      fever: {

        present: true,

        weight: 80

      }

    },

    required_symptoms: [

      "circular_rash"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Clotrimazole",

          line: "first_line",

          type: "Topical Antifungal",

          dosage: "1% Cream",

          frequency: "Twice daily",

          purpose: {

            en: "Treat mild ringworm infection",

            bn: "হালকা দাদের সংক্রমণ চিকিৎসা"

          }

        }

      ],

      second_line: [

        {

          name: "Ketoconazole",

          line: "second_line",

          type: "Topical Antifungal",

          dosage: "2% Cream",

          frequency: "Once or twice daily",

          purpose: {

            en: "Persistent ringworm",

            bn: "দীর্ঘস্থায়ী দাদ"

          }

        }

      ],

      third_line: [

        {

          name: "Terbinafine",

          line: "third_line",

          type: "Oral Antifungal",

          dosage: "250mg",

          frequency: "Once daily",

          purpose: {

            en: "Moderate to severe infection",

            bn: "মাঝারি থেকে তীব্র সংক্রমণ"

          }

        }

      ],

      emergency_line: [

        {

          name: "Itraconazole",

          line: "emergency_line",

          type: "Systemic Antifungal",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Extensive or resistant infection",

            bn: "বিস্তৃত বা জটিল সংক্রমণ"

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

          en: "May support skin healing",

          bn: "ত্বক সুস্থ হতে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Keep affected area clean and dry",

      "Use antifungal medications regularly",

      "Avoid scratching"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Do not share towels or clothes",

      "Wear loose cotton clothing",

      "Maintain personal hygiene"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Infection spreading despite treatment",

        bn: "চিকিৎসার পরও সংক্রমণ ছড়ালে"

      },

      {

        en: "Signs of secondary infection",

        bn: "দ্বিতীয় সংক্রমণের লক্ষণ দেখা দিলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Ringworm is a contagious fungal infection of the skin caused by dermatophytes. It typically appears as a circular, red, itchy rash with a clearer center and may spread through direct contact with infected people, animals, or contaminated objects.",

        bn:
          "দাদ বা Ringworm হলো dermatophyte ছত্রাক দ্বারা সৃষ্ট একটি সংক্রামক ত্বকের রোগ। এটি সাধারণত গোলাকার, লাল ও চুলকানিযুক্ত দাগ হিসেবে দেখা যায় এবং আক্রান্ত ব্যক্তি, প্রাণী বা দূষিত বস্তু থেকে ছড়াতে পারে।"

      }

    ]

  }

];