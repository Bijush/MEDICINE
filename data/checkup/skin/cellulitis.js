// ==============================
// CELLULITIS DATASET
// ==============================

export const CELLULITIS_DATA = [

  {

    id: "SK013",

    disease: "Cellulitis",

    medical_name: "Cellulitis",

    category: "skin",

    tags: [

      "cellulitis",
      "skin infection",
      "redness",
      "swelling",
      "bacterial infection"

    ],

    prevalence: "common",

    severity: "moderate_to_severe",

    contagious: false,

    emergency: true,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      bacterial_infection: {

        present: true,

        weight: 50

      },

      skin_injury: {

        present: true,

        weight: 35

      },

      diabetes: {

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

      redness: {

        present: true,

        weight: 50

      },

      swelling: {

        present: true,

        weight: 45

      },

      warmth: {

        present: true,

        weight: 40

      },

      pain: {

        present: true,

        weight: 35

      },

      fever: {

        present: true,

        weight: 30

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      high_fever: {

        present: true,

        weight: 95

      },

      rapidly_spreading_redness: {

        present: true,

        weight: 100

      },

      pus_formation: {

        present: true,

        weight: 90

      },

      sepsis: {

        present: true,

        weight: 100

      }

    },

    required_symptoms: [

      "redness"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Cephalexin",

          line: "first_line",

          type: "Antibiotic",

          dosage: "500mg",

          frequency: "Four times daily",

          purpose: {

            en: "Mild cellulitis",

            bn: "হালকা সেলুলাইটিস"

          }

        }

      ],

      second_line: [

        {

          name: "Amoxicillin + Clavulanic Acid",

          line: "second_line",

          type: "Antibiotic",

          dosage: "625mg",

          frequency: "Three times daily",

          purpose: {

            en: "Moderate cellulitis",

            bn: "মাঝারি সেলুলাইটিস"

          }

        }

      ],

      third_line: [

        {

          name: "Clindamycin",

          line: "third_line",

          type: "Antibiotic",

          dosage: "300mg",

          frequency: "Four times daily",

          purpose: {

            en: "Penicillin allergy or severe infection",

            bn: "পেনিসিলিন অ্যালার্জি বা তীব্র সংক্রমণ"

          }

        }

      ],

      emergency_line: [

        {

          name: "IV Ceftriaxone",

          line: "emergency_line",

          type: "Intravenous Antibiotic",

          frequency: "Hospital supervision only",

          purpose: {

            en: "Severe cellulitis",

            bn: "তীব্র সেলুলাইটিস"

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

          en: "May support healing",

          bn: "ক্ষত নিরাময়ে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Complete antibiotic course",

      "Elevate affected limb",

      "Maintain hydration"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Maintain good skin hygiene",

      "Treat wounds promptly",

      "Control diabetes if present"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Rapid spread of redness",

        bn: "লালভাব দ্রুত ছড়িয়ে পড়লে"

      },

      {

        en: "High fever or pus formation",

        bn: "উচ্চ জ্বর বা পুঁজ হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Cellulitis is a bacterial infection of the deeper layers of the skin and underlying tissues. It causes redness, swelling, warmth, and pain and may become serious if left untreated.",

        bn:
          "সেলুলাইটিস হলো ত্বক এবং ত্বকের নিচের টিস্যুর একটি ব্যাকটেরিয়াজনিত সংক্রমণ। এতে আক্রান্ত স্থানে লালভাব, ফোলা, গরম অনুভূতি এবং ব্যথা হয়। চিকিৎসা না করলে এটি গুরুতর হতে পারে।"

      }

    ]

  }

];