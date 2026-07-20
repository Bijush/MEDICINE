// ==============================
// FUNGAL INFECTION DATASET
// ==============================

export const FUNGAL_INFECTION_DATA = [

  {

    id: "SK003",

    disease: "Fungal Infection",

    medical_name: "Superficial Mycosis",

    category: "skin",

    tags: [

      "fungal infection",
      "ringworm",
      "itching",
      "red rash",
      "scaling"

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

      fungi: {

        present: true,

        weight: 40

      },

      excessive_sweating: {

        present: true,

        weight: 30

      },

      poor_hygiene: {

        present: true,

        weight: 20

      },

      infected_contact: {

        present: true,

        weight: 30

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      itching: {

        present: true,

        weight: 45

      },

      red_rash: {

        present: true,

        weight: 40

      },

      scaling: {

        present: true,

        weight: 35

      },

      circular_patch: {

        present: true,

        weight: 35

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

        weight: 95

      },

      fever: {

        present: true,

        weight: 80

      }

    },

    required_symptoms: [

      "itching"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Clotrimazole",

          line: "first_line",

          type: "Antifungal",

          dosage: "1% Cream",

          frequency: "Twice daily",

          purpose: {

            en: "Mild fungal infection",

            bn: "হালকা ফাঙ্গাল সংক্রমণ"

          }

        }

      ],

      second_line: [

        {

          name: "Ketoconazole",

          line: "second_line",

          type: "Antifungal",

          dosage: "2% Cream",

          frequency: "Once or twice daily",

          purpose: {

            en: "Persistent fungal infection",

            bn: "দীর্ঘস্থায়ী ফাঙ্গাল সংক্রমণ"

          }

        }

      ],

      third_line: [

        {

          name: "Terbinafine",

          line: "third_line",

          type: "Antifungal",

          dosage: "250mg",

          frequency: "Once daily",

          purpose: {

            en: "Moderate to severe fungal infection",

            bn: "মাঝারি থেকে তীব্র ফাঙ্গাল সংক্রমণ"

          }

        }

      ],

      emergency_line: [

        {

          name: "Itraconazole",

          line: "emergency_line",

          type: "Systemic Antifungal",

          dosage: "As prescribed",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Extensive fungal infection",

            bn: "বিস্তৃত ফাঙ্গাল সংক্রমণ"

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

      "Keep affected area dry",

      "Maintain hygiene",

      "Avoid sharing towels or clothes"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Wear loose cotton clothes",

      "Avoid excessive sweating",

      "Keep skin clean and dry"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Symptoms not improving after treatment",

        bn: "চিকিৎসার পরও উপসর্গ না কমলে"

      },

      {

        en: "Infection spreading rapidly",

        bn: "সংক্রমণ দ্রুত ছড়িয়ে পড়লে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Fungal infection is a common contagious skin disease caused by fungi. It commonly produces itching, redness, scaling, and circular rashes and may spread through direct contact or contaminated objects.",

        bn:
          "ফাঙ্গাল ইনফেকশন হলো ছত্রাকের কারণে হওয়া একটি সাধারণ সংক্রামক ত্বকের রোগ। এতে সাধারণত চুলকানি, লালভাব, ত্বক ওঠা এবং গোলাকার দাগ দেখা যায় এবং এটি সরাসরি সংস্পর্শ বা দূষিত জিনিসের মাধ্যমে ছড়াতে পারে।"

      }

    ]

  }

];