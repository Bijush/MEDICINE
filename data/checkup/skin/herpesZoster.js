// ==============================
// HERPES ZOSTER DATASET
// ==============================

export const HERPES_ZOSTER_DATA = [

  {

    id: "SK021",

    disease: "Herpes Zoster",

    medical_name: "Herpes Zoster (Shingles)",

    category: "skin",

    tags: [

      "herpes zoster",
      "shingles",
      "varicella zoster virus",
      "painful rash",
      "blisters"

    ],

    prevalence: "common",

    severity: "moderate_to_severe",

    contagious: true,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      varicella_zoster_reactivation: {

        present: true,

        weight: 50

      },

      aging: {

        present: true,

        weight: 25

      },

      weak_immunity: {

        present: true,

        weight: 35

      },

      stress: {

        present: true,

        weight: 15

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      painful_rash: {

        present: true,

        weight: 50

      },

      blisters: {

        present: true,

        weight: 45

      },

      burning_sensation: {

        present: true,

        weight: 40

      },

      itching: {

        present: true,

        weight: 25

      },

      fever: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================

    physical_exam: {

      unilateral_rash: {

        present: true,

        weight: 50

      },

      grouped_vesicles: {

        present: true,

        weight: 45

      },

      dermatomal_distribution: {

        present: true,

        weight: 40

      },

      crusted_lesions: {

        present: true,

        weight: 30

      },

      facial_involvement: {

        present: true,

        weight: 20

      },

      generalized_rash: {

        present: false,

        weight: -50

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      eye_involvement: {

        present: true,

        weight: 100

      },

      facial_paralysis: {

        present: true,

        weight: 95

      },

      severe_neuralgia: {

        present: true,

        weight: 90

      },

      disseminated_infection: {

        present: true,

        weight: 95

      }

    },

    required_symptoms: [

      "painful_rash"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Acyclovir",

          line: "first_line",

          type: "Antiviral",

          dosage: "800mg",

          frequency: "5 times daily",

          purpose: {

            en: "Reduce viral replication",

            bn: "ভাইরাসের বৃদ্ধি কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Valacyclovir",

          line: "second_line",

          type: "Antiviral",

          dosage: "1g",

          frequency: "Three times daily",

          purpose: {

            en: "Alternative antiviral therapy",

            bn: "বিকল্প অ্যান্টিভাইরাল চিকিৎসা"

          }

        }

      ],

      third_line: [

        {

          name: "Gabapentin",

          line: "third_line",

          type: "Neuropathic Pain Reliever",

          dosage: "As prescribed",

          frequency: "Doctor advice",

          purpose: {

            en: "Post-herpetic neuralgia",

            bn: "হারপিস-পরবর্তী স্নায়বিক ব্যথা"

          }

        }

      ],

      emergency_line: [

        {

          name: "IV Acyclovir",

          line: "emergency_line",

          type: "Intravenous Antiviral",

          frequency: "Hospital supervision only",

          purpose: {

            en: "Severe or disseminated herpes zoster",

            bn: "তীব্র বা সারা শরীরে ছড়িয়ে পড়া হারপিস জোস্টার"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Vitamin B Complex",

        type: "Vitamin",

        purpose: {

          en: "May support nerve health",

          bn: "স্নায়ুর স্বাস্থ্যে সহায়তা করতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Keep lesions clean",

      "Apply cool compress",

      "Take medicines early"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid scratching blisters",

      "Maintain hygiene",

      "Get adequate rest"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Eye involvement or severe pain",

        bn: "চোখ আক্রান্ত হলে বা তীব্র ব্যথা হলে"

      },

      {

        en: "Widespread rash or facial weakness",

        bn: "র‍্যাশ ছড়িয়ে পড়লে বা মুখ দুর্বল হয়ে গেলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Herpes zoster, also known as shingles, is caused by reactivation of the varicella-zoster virus. It produces painful blisters and rash, usually affecting one side of the body.",

        bn:
          "হারপিস জোস্টার বা শিংগলস হলো ভ্যারিসেলা-জোস্টার ভাইরাস পুনরায় সক্রিয় হওয়ার ফলে সৃষ্ট একটি রোগ। এতে সাধারণত শরীরের এক পাশে ব্যথাযুক্ত ফুসকুড়ি ও ফোসকা দেখা যায়।"

      }

    ]

  }

];