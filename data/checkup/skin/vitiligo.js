// ==============================
// VITILIGO DATASET
// ==============================

export const VITILIGO_DATA = [

  {

    id: "SK007",

    disease: "Vitiligo",

    medical_name: "Vitiligo",

    category: "skin",

    tags: [

      "vitiligo",
      "white patches",
      "depigmentation",
      "autoimmune"

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

      autoimmune_disorder: {

        present: true,

        weight: 45

      },

      family_history: {

        present: true,

        weight: 30

      },

      stress: {

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

      white_patches: {

        present: true,

        weight: 50

      },

      symmetrical_patches: {

        present: true,

        weight: 35

      },

      premature_hair_graying: {

        present: true,

        weight: 20

      },

      loss_of_skin_color: {

        present: true,

        weight: 45

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      rapid_spread: {

        present: true,

        weight: 85

      },

      eye_involvement: {

        present: true,

        weight: 90

      },

      hearing_problems: {

        present: true,

        weight: 80

      }

    },

    required_symptoms: [

      "white_patches"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Tacrolimus",

          line: "first_line",

          type: "Topical Immunomodulator",

          dosage: "0.03%-0.1% Ointment",

          frequency: "Twice daily",

          purpose: {

            en: "Promote repigmentation",

            bn: "ত্বকের রঙ ফিরিয়ে আনতে সাহায্য করা"

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

            en: "Control progression",

            bn: "রোগের অগ্রগতি কমানো"

          }

        }

      ],

      third_line: [

        {

          name: "Phototherapy",

          line: "third_line",

          type: "UV Therapy",

          frequency: "As advised",

          purpose: {

            en: "Extensive vitiligo",

            bn: "বিস্তৃত ভিটিলিগো"

          }

        }

      ],

      emergency_line: [

        {

          name: "Specialist Treatment",

          line: "emergency_line",

          type: "Dermatology Care",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Rapidly progressive vitiligo",

            bn: "দ্রুত ছড়িয়ে পড়া ভিটিলিগো"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Vitamin B12",

        type: "Vitamin",

        purpose: {

          en: "May support pigmentation",

          bn: "ত্বকের রঞ্জকতা বজায় রাখতে সহায়ক হতে পারে"

        }

      },

      {

        name: "Folic Acid",

        type: "Vitamin",

        purpose: {

          en: "May support skin health",

          bn: "ত্বকের স্বাস্থ্যে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Sun protection",

      "Phototherapy",

      "Regular follow-up"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Use sunscreen regularly",

      "Reduce stress",

      "Maintain healthy diet"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Rapid spread of white patches",

        bn: "সাদা দাগ দ্রুত ছড়িয়ে পড়লে"

      },

      {

        en: "Eye symptoms develop",

        bn: "চোখের সমস্যা দেখা দিলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Vitiligo is a chronic autoimmune skin disorder in which melanocytes are destroyed, causing white patches on the skin. It is not contagious and can affect people of all ages.",

        bn:
          "ভিটিলিগো একটি দীর্ঘস্থায়ী অটোইমিউন ত্বকের রোগ, যেখানে মেলানোসাইট কোষ নষ্ট হয়ে ত্বকে সাদা দাগ সৃষ্টি হয়। এটি সংক্রামক নয় এবং সব বয়সের মানুষের হতে পারে।"

      }

    ]

  }

];