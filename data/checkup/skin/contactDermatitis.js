// ==============================
// CONTACT DERMATITIS DATASET
// ==============================

export const CONTACT_DERMATITIS_DATA = [

  {

    id: "SK011",

    disease: "Contact Dermatitis",

    medical_name: "Contact Dermatitis",

    category: "skin",

    tags: [

      "contact dermatitis",
      "allergy",
      "skin rash",
      "itching",
      "irritation"

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

      allergic_reaction: {

        present: true,

        weight: 45

      },

      irritant_exposure: {

        present: true,

        weight: 40

      },

      cosmetic_products: {

        present: true,

        weight: 25

      },

      chemical_exposure: {

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

        weight: 50

      },

      redness: {

        present: true,

        weight: 45

      },

      rash: {

        present: true,

        weight: 40

      },

      swelling: {

        present: true,

        weight: 30

      },

      burning_sensation: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_swelling: {

        present: true,

        weight: 90

      },

      blistering: {

        present: true,

        weight: 85

      },

      secondary_infection: {

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

          name: "Calamine Lotion",

          line: "first_line",

          type: "Skin Protectant",

          frequency: "2-3 times daily",

          purpose: {

            en: "Relieve itching and irritation",

            bn: "চুলকানি ও জ্বালাপোড়া কমানো"

          }

        },

        {

          name: "Hydrocortisone",

          line: "first_line",

          type: "Topical Corticosteroid",

          dosage: "1% Cream",

          frequency: "Twice daily",

          purpose: {

            en: "Reduce inflammation",

            bn: "প্রদাহ কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Mometasone",

          line: "second_line",

          type: "Topical Corticosteroid",

          dosage: "0.1% Cream",

          frequency: "Once daily",

          purpose: {

            en: "Moderate dermatitis",

            bn: "মাঝারি মাত্রার ডার্মাটাইটিস"

          }

        }

      ],

      third_line: [

        {

          name: "Cetirizine",

          line: "third_line",

          type: "Antihistamine",

          dosage: "10mg",

          frequency: "Once daily",

          purpose: {

            en: "Relieve allergic itching",

            bn: "অ্যালার্জিজনিত চুলকানি কমানো"

          }

        }

      ],

      emergency_line: [

        {

          name: "Prednisolone",

          line: "emergency_line",

          type: "Oral Corticosteroid",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe allergic reaction",

            bn: "তীব্র অ্যালার্জিজনিত প্রতিক্রিয়া"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Vitamin E",

        type: "Vitamin",

        purpose: {

          en: "May support skin repair",

          bn: "ত্বক পুনরুদ্ধারে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Avoid triggering substances",

      "Use prescribed creams",

      "Keep skin moisturized"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid harsh soaps",

      "Wear protective gloves",

      "Use hypoallergenic products"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Symptoms worsening despite treatment",

        bn: "চিকিৎসার পরও উপসর্গ বাড়লে"

      },

      {

        en: "Blisters or skin infection",

        bn: "ফোসকা বা ত্বকের সংক্রমণ হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Contact dermatitis is an inflammatory skin condition caused by direct contact with allergens or irritants. It leads to redness, itching, rash, and sometimes swelling or blistering. The condition is not contagious.",

        bn:
          "কন্টাক্ট ডার্মাটাইটিস হলো অ্যালার্জি সৃষ্টিকারী পদার্থ বা উত্তেজক রাসায়নিকের সংস্পর্শে এসে হওয়া একটি প্রদাহজনিত ত্বকের রোগ। এতে লালভাব, চুলকানি, র‍্যাশ এবং কখনও কখনও ফোলা বা ফোসকা দেখা দিতে পারে। এটি সংক্রামক নয়।"

      }

    ]

  }

];