// ==============================
// CHICKENPOX DATASET
// ==============================

export const CHICKENPOX_DATA = [

  {

    id: "SK020",

    disease: "Chickenpox",

    medical_name: "Varicella",

    category: "skin",

    tags: [

      "chickenpox",
      "varicella",
      "viral infection",
      "itching",
      "blisters"

    ],

    prevalence: "common",

    severity: "mild_to_moderate",

    contagious: true,

    emergency: false,

    minimum_match: 2,

    // ==========================
    // CAUSES
    // ==========================

    causes: {

      varicella_zoster_virus: {

        present: true,

        weight: 50

      },

      infected_person_contact: {

        present: true,

        weight: 40

      },

      airborne_transmission: {

        present: true,

        weight: 35

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

      itchy_blisters: {

        present: true,

        weight: 50

      },

      fever: {

        present: true,

        weight: 40

      },

      tiredness: {

        present: true,

        weight: 30

      },

      headache: {

        present: true,

        weight: 25

      },

      loss_of_appetite: {

        present: true,

        weight: 20

      }

    },
    
    // ==========================
// PHYSICAL EXAM
// ==========================

physical_exam: {

  vesicular_rash: {

    present: true,

    weight: 50

  },

  crusted_lesions: {

    present: true,

    weight: 35

  },

  fever_present: {

    present: true,

    weight: 30

  },

  generalized_skin_eruption: {

    present: true,

    weight: 40

  },

  lymph_node_enlargement: {

    present: true,

    weight: 20

  },

  breathing_difficulty: {

    present: false,

    weight: -90

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

      severe_dehydration: {

        present: true,

        weight: 95

      },

      confusion: {

        present: true,

        weight: 100

      },

      secondary_bacterial_infection: {

        present: true,

        weight: 90

      }

    },

    required_symptoms: [

      "itchy_blisters"

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

            en: "Reduce itching",

            bn: "চুলকানি কমানো"

          }

        },

        {

          name: "Paracetamol",

          line: "first_line",

          type: "Antipyretic",

          dosage: "500mg",

          frequency: "Every 6 hours if needed",

          purpose: {

            en: "Reduce fever and body aches",

            bn: "জ্বর ও শরীর ব্যথা কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Cetirizine",

          line: "second_line",

          type: "Antihistamine",

          dosage: "10mg",

          frequency: "Once daily",

          purpose: {

            en: "Control itching",

            bn: "চুলকানি নিয়ন্ত্রণ"

          }

        }

      ],

      third_line: [

        {

          name: "Acyclovir",

          line: "third_line",

          type: "Antiviral",

          dosage: "800mg",

          frequency: "5 times daily",

          purpose: {

            en: "Severe or high-risk cases",

            bn: "তীব্র বা উচ্চ ঝুঁকিপূর্ণ ক্ষেত্রে"

          }

        }

      ],

      emergency_line: [

        {

          name: "IV Fluids and Hospital Care",

          line: "emergency_line",

          type: "Supportive Treatment",

          frequency: "Hospital supervision only",

          purpose: {

            en: "Complicated chickenpox",

            bn: "জটিল জলবসন্ত"

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

          en: "May support recovery",

          bn: "সুস্থ হতে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Adequate rest",

      "Drink plenty of fluids",

      "Keep nails trimmed",

      "Avoid scratching"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Stay isolated until lesions crust over",

      "Maintain good hygiene",

      "Wear loose clothing"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Breathing difficulty or severe weakness",

        bn: "শ্বাসকষ্ট বা তীব্র দুর্বলতা হলে"

      },

      {

        en: "Persistent high fever",

        bn: "দীর্ঘস্থায়ী উচ্চ জ্বর থাকলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Chickenpox is a highly contagious viral disease caused by the varicella-zoster virus. It causes itchy blisters, fever, tiredness, and body aches. Most cases are mild, but complications can occur in adults, pregnant women, and immunocompromised individuals.",

        bn:
          "জলবসন্ত (Chickenpox) হলো Varicella-Zoster Virus দ্বারা সৃষ্ট একটি অত্যন্ত সংক্রামক ভাইরাসজনিত রোগ। এতে চুলকানিযুক্ত ফোসকা, জ্বর, দুর্বলতা এবং শরীর ব্যথা দেখা যায়। অধিকাংশ ক্ষেত্রে রোগটি হালকা হলেও প্রাপ্তবয়স্ক, গর্ভবতী নারী এবং দুর্বল রোগ প্রতিরোধ ক্ষমতাসম্পন্ন ব্যক্তিদের মধ্যে জটিলতা দেখা দিতে পারে।"

      }

    ]

  }

];