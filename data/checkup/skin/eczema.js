// ==============================
// ECZEMA DATASET
// ==============================

export const ECZEMA_DATA = [

  {

    id: "SK002",

    disease: "Eczema",

    medical_name: "Atopic Dermatitis",

    category: "skin",

    tags: [

      "eczema",
      "itching",
      "dry skin",
      "rash"

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

      allergy: {

        present: true,

        weight: 35

      },

      dry_skin: {

        present: true,

        weight: 30

      },

      family_history: {

        present: true,

        weight: 20

      },

      irritants: {

        present: true,

        weight: 25

      }

    },
disease_meaning: [

  {

    en:
      "Eczema, also known as atopic dermatitis, is a chronic inflammatory skin disorder that causes dry, itchy, red, and irritated skin. It is not contagious and often occurs in people with allergies or a family history of eczema.",

    bn:
      "একজিমা বা অ্যাটোপিক ডার্মাটাইটিস একটি দীর্ঘস্থায়ী প্রদাহজনিত ত্বকের রোগ, যা ত্বকে শুষ্কতা, চুলকানি, লালভাব এবং জ্বালাপোড়া সৃষ্টি করে। এটি সংক্রামক নয় এবং যাদের অ্যালার্জি বা পারিবারিকভাবে একজিমার ইতিহাস রয়েছে তাদের মধ্যে বেশি দেখা যায়।"

  }

],
    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      itching: {

        present: true,

        weight: 45

      },

      dry_skin: {

        present: true,

        weight: 40

      },

      red_patches: {

        present: true,

        weight: 35

      },

      skin_cracking: {

        present: true,

        weight: 25

      },

      scaling: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      infected_skin: {

        present: true,

        weight: 90

      },

      fever: {

        present: true,

        weight: 80

      },

      widespread_rash: {

        present: true,

        weight: 85

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

          name: "Moisturizer",

          line: "first_line",

          type: "Skin Protectant",

          frequency: "2-3 times daily",

          purpose: {

            en: "Keep skin hydrated",

            bn: "ত্বক আর্দ্র রাখা"

          }

        },

        {

          name: "Hydrocortisone",

          line: "first_line",

          type: "Topical Steroid",

          dosage: "1%",

          frequency: "Twice daily",

          purpose: {

            en: "Reduce inflammation and itching",

            bn: "প্রদাহ ও চুলকানি কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Mometasone",

          line: "second_line",

          type: "Topical Steroid",

          dosage: "0.1%",

          frequency: "Once daily",

          purpose: {

            en: "Moderate eczema",

            bn: "মাঝারি মাত্রার একজিমা"

          }

        }

      ],

      third_line: [

        {

          name: "Tacrolimus",

          line: "third_line",

          type: "Calcineurin Inhibitor",

          frequency: "Twice daily",

          purpose: {

            en: "Steroid-sparing treatment",

            bn: "স্টেরয়েড ছাড়াই চিকিৎসা"

          }

        }

      ],

      emergency_line: [

        {

          name: "Prednisolone",

          line: "emergency_line",

          type: "Oral Steroid",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe eczema flare",

            bn: "তীব্র একজিমা"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Vitamin D",

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

      "Regular moisturizing",

      "Avoid harsh soaps",

      "Use lukewarm water"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid allergens",

      "Wear soft cotton clothes",

      "Keep skin moisturized"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Severe itching",

        bn: "তীব্র চুলকানি"

      },

      {

        en: "Signs of infection",

        bn: "সংক্রমণের লক্ষণ দেখা দিলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en: "Eczema is a chronic inflammatory skin condition causing itching, dryness and rash.",

        bn: "একজিমা একটি দীর্ঘস্থায়ী প্রদাহজনিত ত্বকের রোগ, যা চুলকানি, শুষ্কতা এবং র‍্যাশ সৃষ্টি করে।"

      }

    ]

  }

];