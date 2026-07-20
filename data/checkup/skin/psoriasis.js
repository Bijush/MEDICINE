// ==============================
// PSORIASIS DATASET
// ==============================

export const PSORIASIS_DATA = [

  {

    id: "SK005",

    disease: "Psoriasis",

    medical_name: "Chronic Plaque Psoriasis",

    category: "skin",

    tags: [

      "psoriasis",
      "scaly skin",
      "red patches",
      "itching",
      "dry skin"

    ],

    prevalence: "common",

    severity: "mild_to_severe",

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

      thick_scaly_patches: {

        present: true,

        weight: 50

      },

      red_patches: {

        present: true,

        weight: 40

      },

      itching: {

        present: true,

        weight: 30

      },

      dry_skin: {

        present: true,

        weight: 25

      },

      cracked_skin: {

        present: true,

        weight: 20

      }

    },
    physical_exam: {

  thick_silvery_scales: {

    present: true,

    weight: 50

  },

  well_defined_plaques: {

    present: true,

    weight: 45

  },

  scalp_involvement: {

    present: true,

    weight: 30

  },

  nail_pitting: {

    present: true,

    weight: 25

  },

  joint_swelling: {

    present: true,

    weight: 20

  },

  skin_ulceration: {

    present: false,

    weight: -70

  }

},

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      psoriatic_arthritis: {

        present: true,

        weight: 95

      },

      severe_widespread_psoriasis: {

        present: true,

        weight: 90

      },

      secondary_infection: {

        present: true,

        weight: 85

      }

    },

    required_symptoms: [

      "thick_scaly_patches"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Calcipotriol",

          line: "first_line",

          type: "Vitamin D Analogue",

          dosage: "0.005% Ointment",

          frequency: "Twice daily",

          purpose: {

            en: "Reduce scaling and inflammation",

            bn: "খোসা ওঠা ও প্রদাহ কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Clobetasol",

          line: "second_line",

          type: "Topical Steroid",

          dosage: "0.05%",

          frequency: "Once or twice daily",

          purpose: {

            en: "Moderate psoriasis",

            bn: "মাঝারি মাত্রার সোরিয়াসিস"

          }

        }

      ],

      third_line: [

        {

          name: "Methotrexate",

          line: "third_line",

          type: "Immunosuppressant",

          dosage: "As prescribed",

          frequency: "Weekly",

          purpose: {

            en: "Severe psoriasis",

            bn: "তীব্র সোরিয়াসিস"

          }

        }

      ],

      emergency_line: [

        {

          name: "Biologic Therapy",

          line: "emergency_line",

          type: "Advanced Immunotherapy",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe or resistant psoriasis",

            bn: "জটিল বা চিকিৎসায় প্রতিরোধী সোরিয়াসিস"

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

      "Avoid skin injury",

      "Use prescribed medications"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Reduce stress",

      "Avoid smoking and alcohol",

      "Maintain healthy weight"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Joint pain or swelling",

        bn: "জয়েন্টে ব্যথা বা ফোলা হলে"

      },

      {

        en: "Widespread skin involvement",

        bn: "শরীরের বড় অংশ আক্রান্ত হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Psoriasis is a chronic autoimmune skin disease that causes thick, scaly, red patches on the skin. It is not contagious and symptoms may flare up periodically.",

        bn:
          "সোরিয়াসিস একটি দীর্ঘস্থায়ী অটোইমিউন ত্বকের রোগ, যাতে ত্বকে মোটা, খোসাযুক্ত এবং লালচে দাগ তৈরি হয়। এটি সংক্রামক নয় এবং উপসর্গ সময়ে সময়ে বেড়ে যেতে পারে।"

      }

    ]

  }

];