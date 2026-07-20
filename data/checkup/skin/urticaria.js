// ==============================
// URTICARIA DATASET
// ==============================

export const URTICARIA_DATA = [

  {

    id: "SK006",

    disease: "Urticaria",

    medical_name: "Chronic Spontaneous Urticaria",

    category: "skin",

    tags: [

      "urticaria",
      "hives",
      "allergy",
      "itching",
      "welts"

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

        weight: 40

      },

      food_trigger: {

        present: true,

        weight: 30

      },

      medication_trigger: {

        present: true,

        weight: 25

      },

      stress: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      itchy_welts: {

        present: true,

        weight: 50

      },

      red_patches: {

        present: true,

        weight: 35

      },

      burning_sensation: {

        present: true,

        weight: 20

      },

      swelling: {

        present: true,

        weight: 30

      },

      recurrent_rash: {

        present: true,

        weight: 25

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      breathing_difficulty: {

        present: true,

        weight: 100

      },

      lip_swelling: {

        present: true,

        weight: 95

      },

      tongue_swelling: {

        present: true,

        weight: 100

      }

    },

    required_symptoms: [

      "itchy_welts"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Cetirizine",

          line: "first_line",

          type: "Antihistamine",

          dosage: "10mg",

          frequency: "Once daily",

          purpose: {

            en: "Relieve itching and rash",

            bn: "চুলকানি ও ফুসকুড়ি কমানো"

          }

        },

        {

          name: "Levocetirizine",

          line: "first_line",

          type: "Antihistamine",

          dosage: "5mg",

          frequency: "Once daily",

          purpose: {

            en: "Control allergic symptoms",

            bn: "অ্যালার্জির উপসর্গ নিয়ন্ত্রণ"

          }

        }

      ],

      second_line: [

        {

          name: "Fexofenadine",

          line: "second_line",

          type: "Antihistamine",

          dosage: "120mg",

          frequency: "Once daily",

          purpose: {

            en: "Persistent urticaria",

            bn: "দীর্ঘস্থায়ী আর্টিকারিয়া"

          }

        }

      ],

      third_line: [

        {

          name: "Montelukast",

          line: "third_line",

          type: "Leukotriene Receptor Antagonist",

          dosage: "10mg",

          frequency: "Once daily",

          purpose: {

            en: "Chronic allergic urticaria",

            bn: "দীর্ঘস্থায়ী অ্যালার্জিজনিত আর্টিকারিয়া"

          }

        }

      ],

      emergency_line: [

        {

          name: "Prednisolone",

          line: "emergency_line",

          type: "Corticosteroid",

          dosage: "As prescribed",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe urticaria or angioedema",

            bn: "তীব্র আর্টিকারিয়া বা অ্যাঞ্জিওএডিমা"

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

          en: "May support immune health",

          bn: "রোগ প্রতিরোধ ক্ষমতা বজায় রাখতে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Avoid known allergens",

      "Apply cool compress",

      "Take prescribed medicines"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid trigger foods",

      "Reduce stress",

      "Wear loose clothing"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Difficulty breathing",

        bn: "শ্বাসকষ্ট হলে"

      },

      {

        en: "Swelling of lips or tongue",

        bn: "ঠোঁট বা জিহ্বা ফুলে গেলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Urticaria, also known as hives, is a skin condition characterized by itchy, raised welts or rashes caused by allergic reactions or other triggers. Symptoms may appear suddenly and usually resolve within hours or days.",

        bn:
          "আর্টিকারিয়া বা হাইভস হলো একটি ত্বকের রোগ, যাতে অ্যালার্জি বা অন্যান্য কারণের ফলে চুলকানিযুক্ত উঁচু ফুসকুড়ি বা দাগ দেখা যায়। উপসর্গ হঠাৎ শুরু হতে পারে এবং সাধারণত কয়েক ঘণ্টা বা দিনের মধ্যে কমে যায়।"

      }

    ]

  }

];