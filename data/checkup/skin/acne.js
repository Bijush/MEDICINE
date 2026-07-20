// ==============================
// ACNE DATASET
// ==============================

export const ACNE_DATA = [

  {

    id: "SK001",

    disease: "Acne",

    medical_name: "Acne Vulgaris",

    category: "skin",

    tags: [

      "acne",
      "pimples",
      "blackheads",
      "whiteheads",
      "oily skin"

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

      hormonal_changes: {

        present: true,

        weight: 35

      },

      excess_oil_production: {

        present: true,

        weight: 30

      },

      blocked_pores: {

        present: true,

        weight: 25

      },

      family_history: {

        present: true,

        weight: 15

      }

    },
disease_meaning: [

  {

    en:
      "Acne, also known as acne vulgaris, is a common inflammatory skin condition that occurs when hair follicles become blocked with oil and dead skin cells. It causes pimples, blackheads, whiteheads, and sometimes painful cysts. Acne is not contagious and commonly affects teenagers and young adults.",

    bn:
      "ব্রণ বা অ্যাকনে ভালগারিস একটি সাধারণ প্রদাহজনিত ত্বকের রোগ, যা রোমকূপ তেল এবং মৃত কোষ দ্বারা বন্ধ হয়ে গেলে হয়। এর ফলে ব্রণ, ব্ল্যাকহেডস, হোয়াইটহেডস এবং কখনও কখনও ব্যথাযুক্ত সিস্ট তৈরি হয়। এটি সংক্রামক নয় এবং সাধারণত কিশোর-কিশোরী ও তরুণদের মধ্যে বেশি দেখা যায়।"

  }

],
    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      pimples: {

        present: true,

        weight: 45

      },

      blackheads: {

        present: true,

        weight: 35

      },

      whiteheads: {

        present: true,

        weight: 35

      },

      oily_skin: {

        present: true,

        weight: 25

      },

      painful_nodules: {

        present: true,

        weight: 30

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      severe_pain: {

        present: true,

        weight: 90

      },

      widespread_infection: {

        present: true,

        weight: 95

      },

      facial_scarring: {

        present: true,

        weight: 80

      }

    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================

    required_symptoms: [

      "pimples"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Benzoyl Peroxide",

          line: "first_line",

          type: "Topical Anti-acne",

          dosage: "2.5-5%",

          frequency: "Once daily",

          purpose: {

            en: "Mild acne",

            bn: "হালকা ব্রণ"

          }

        },

        {

          name: "Adapalene",

          line: "first_line",

          type: "Retinoid",

          dosage: "0.1%",

          frequency: "At night",

          purpose: {

            en: "Prevent blocked pores",

            bn: "রোমকূপ বন্ধ হওয়া প্রতিরোধ"

          }

        }

      ],

      second_line: [

        {

          name: "Clindamycin",

          line: "second_line",

          type: "Topical Antibiotic",

          dosage: "1%",

          frequency: "Twice daily",

          purpose: {

            en: "Inflammatory acne",

            bn: "প্রদাহযুক্ত ব্রণ"

          }

        }

      ],

      third_line: [

        {

          name: "Doxycycline",

          line: "third_line",

          type: "Oral Antibiotic",

          dosage: "100mg",

          frequency: "Once or twice daily",

          purpose: {

            en: "Moderate to severe acne",

            bn: "মাঝারি থেকে তীব্র ব্রণ"

          }

        }

      ],

      emergency_line: [

        {

          name: "Isotretinoin",

          line: "emergency_line",

          type: "Oral Retinoid",

          dosage: "As prescribed",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe nodulocystic acne",

            bn: "তীব্র নোডিউলোসিস্টিক ব্রণ"

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

          en: "May help reduce acne",

          bn: "ব্রণ কমাতে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Gentle face wash",

      "Avoid squeezing pimples",

      "Use non-comedogenic products"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Wash face twice daily",

      "Avoid oily cosmetics",

      "Maintain healthy diet"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Severe painful acne",

        bn: "অত্যন্ত ব্যথাযুক্ত ব্রণ"

      },

      {

        en: "Permanent scarring",

        bn: "স্থায়ী দাগ পড়লে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en: "Acne is a common inflammatory skin condition affecting hair follicles and oil glands.",

        bn: "ব্রণ হলো একটি সাধারণ প্রদাহজনিত ত্বকের রোগ যা রোমকূপ এবং তেল গ্রন্থিকে প্রভাবিত করে।"

      }

    ]

  }

];