// ==============================
// BOILS DATASET
// ==============================

export const BOILS_DATA = [

  {

    id: "SK017",

    disease: "Boils",

    medical_name: "Furuncle",

    category: "skin",

    tags: [

      "boils",
      "furuncle",
      "abscess",
      "bacterial infection",
      "pus"

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

      staphylococcus_infection: {

        present: true,

        weight: 50

      },

      poor_hygiene: {

        present: true,

        weight: 20

      },

      diabetes: {

        present: true,

        weight: 25

      },

      weak_immunity: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      painful_lump: {

        present: true,

        weight: 50

      },

      redness: {

        present: true,

        weight: 40

      },

      swelling: {

        present: true,

        weight: 40

      },

      pus_discharge: {

        present: true,

        weight: 45

      },

      fever: {

        present: true,

        weight: 25

      }

    },
    
    physical_exam: {

  tender_nodule: {

    present: true,

    weight: 50

  },

  pus_collection: {

    present: true,

    weight: 45

  },

  localized_redness: {

    present: true,

    weight: 35

  },

  warmth_over_lesion: {

    present: true,

    weight: 30

  },

  fluctuation: {

    present: true,

    weight: 25

  },

  spreading_cellulitis: {

    present: false,

    weight: -80

  }

},

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      recurrent_boils: {

        present: true,

        weight: 80

      },

      spreading_infection: {

        present: true,

        weight: 90

      },

      high_fever: {

        present: true,

        weight: 95

      }

    },

    required_symptoms: [

      "painful_lump"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Warm Compress",

          line: "first_line",

          type: "Supportive Care",

          frequency: "3-4 times daily",

          purpose: {

            en: "Promote drainage and healing",

            bn: "পুঁজ বের হতে ও নিরাময়ে সহায়তা"

          }

        }

      ],

      second_line: [

        {

          name: "Mupirocin",

          line: "second_line",

          type: "Topical Antibiotic",

          dosage: "2% Ointment",

          frequency: "Three times daily",

          purpose: {

            en: "Localized bacterial infection",

            bn: "স্থানীয় ব্যাকটেরিয়াজনিত সংক্রমণ"

          }

        }

      ],

      third_line: [

        {

          name: "Cephalexin",

          line: "third_line",

          type: "Oral Antibiotic",

          dosage: "500mg",

          frequency: "Four times daily",

          purpose: {

            en: "Moderate or recurrent boils",

            bn: "মাঝারি বা বারবার হওয়া ফোঁড়া"

          }

        }

      ],

      emergency_line: [

        {

          name: "Incision and Drainage",

          line: "emergency_line",

          type: "Minor Surgical Procedure",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Large or complicated boils",

            bn: "বড় বা জটিল ফোঁড়া"

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

          en: "May support wound healing",

          bn: "ক্ষত নিরাময়ে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Apply warm compress",

      "Maintain skin hygiene",

      "Complete antibiotic course"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid squeezing boils",

      "Maintain personal hygiene",

      "Control diabetes if present"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Boil becomes larger or more painful",

        bn: "ফোঁড়া বড় হলে বা ব্যথা বাড়লে"

      },

      {

        en: "Fever or recurrent boils",

        bn: "জ্বর বা বারবার ফোঁড়া হলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Boils, also known as furuncles, are painful pus-filled lumps caused by bacterial infection of hair follicles. They commonly appear on the face, neck, armpits, buttocks, and thighs.",

        bn:
          "ফোঁড়া বা Furuncle হলো চুলের গোড়ার ব্যাকটেরিয়াজনিত সংক্রমণের কারণে সৃষ্ট ব্যথাযুক্ত পুঁজভরা গুটি। এগুলো সাধারণত মুখ, ঘাড়, বগল, নিতম্ব এবং উরুতে দেখা যায়।"

      }

    ]

  }

];