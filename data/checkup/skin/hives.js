// ==============================
// HIVES DATASET
// ==============================

export const HIVES_DATA = [

  {

    id: "SK024",

    disease: "Hives",

    medical_name: "Acute Urticaria",

    category: "skin",

    tags: [

      "hives",
      "urticaria",
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

        weight: 50

      },

      food_trigger: {

        present: true,

        weight: 35

      },

      medication_trigger: {

        present: true,

        weight: 30

      },

      infection: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      raised_welts: {

        present: true,

        weight: 50

      },

      itching: {

        present: true,

        weight: 45

      },

      redness: {

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

      }

    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      erythematous_wheals: {

        present: true,

        weight: 50

      },

      transient_skin_lesions: {

        present: true,

        weight: 40

      },

      angioedema: {

        present: true,

        weight: 35

      },

      generalized_rash: {

        present: true,

        weight: 30

      },

      skin_scaling: {

        present: false,

        weight: -40

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

      tongue_swelling: {

        present: true,

        weight: 100

      },

      lip_swelling: {

        present: true,

        weight: 95

      },

      anaphylaxis: {

        present: true,

        weight: 100

      }

    },

    required_symptoms: [

      "raised_welts"

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

            en: "Relieve itching and hives",

            bn: "চুলকানি ও হাইভস কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Levocetirizine",

          line: "second_line",

          type: "Antihistamine",

          dosage: "5mg",

          frequency: "Once daily",

          purpose: {

            en: "Persistent allergic symptoms",

            bn: "দীর্ঘস্থায়ী অ্যালার্জির উপসর্গ"

          }

        }

      ],

      third_line: [

        {

          name: "Fexofenadine",

          line: "third_line",

          type: "Antihistamine",

          dosage: "120mg",

          frequency: "Once daily",

          purpose: {

            en: "Moderate to severe hives",

            bn: "মাঝারি থেকে তীব্র হাইভস"

          }

        }

      ],

      emergency_line: [

        {

          name: "Epinephrine",

          line: "emergency_line",

          type: "Emergency Treatment",

          frequency: "Hospital supervision only",

          purpose: {

            en: "Anaphylaxis or severe allergic reaction",

            bn: "অ্যানাফাইল্যাক্সিস বা তীব্র অ্যালার্জি"

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

      "Take prescribed antihistamines"

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

        en: "Breathing difficulty or facial swelling",

        bn: "শ্বাসকষ্ট বা মুখ ফুলে গেলে"

      },

      {

        en: "Symptoms persist despite treatment",

        bn: "চিকিৎসার পরও উপসর্গ থাকলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Hives, also called acute urticaria, is an allergic skin reaction characterized by itchy, raised welts that may appear suddenly and disappear within hours or days. Severe cases may lead to angioedema or anaphylaxis.",

        bn:
          "হাইভস বা তীব্র আর্টিকারিয়া হলো একটি অ্যালার্জিজনিত ত্বকের প্রতিক্রিয়া, যেখানে হঠাৎ চুলকানিযুক্ত উঁচু ফুসকুড়ি দেখা দেয় এবং কয়েক ঘণ্টা বা দিনের মধ্যে মিলিয়ে যেতে পারে। গুরুতর ক্ষেত্রে অ্যাঞ্জিওএডিমা বা অ্যানাফাইল্যাক্সিস হতে পারে।"

      }

    ]

  }

];