// ==========================================
// FILE: allergicRhinitisSinus.js
// ADVANCED ALLERGIC RHINITIS + SINUS DATASET
// ==========================================

export const ALLERGIC_RHINITIS_SINUS = [

  {

    id: "ARS001",

    disease:
      "Allergic Rhinitis With Sinus Symptoms",

    medical_name:
      "Allergic Rhinitis / Sinusitis",

    category:
      "ent",

    severity:
      "mild_to_moderate",

    contagious: false,

    emergency: false,

    minimum_match: 3,

    // ======================================
    // SYMPTOMS
    // ======================================

    symptoms: {

      sneezing: {

        present: true,

        weight: 55,

        label_en:
          "Sneezing",

        label_bn:
          "হাঁচি",

        followup: {

          question:
            "Are you sneezing repeatedly? ( বারবার হাঁচি হচ্ছে কি? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "sneezing"
          },

          priority: 15
        }
      },

      runny_nose: {

        present: true,

        weight: 45,

        label_en:
          "Runny nose",

        label_bn:
          "নাক দিয়ে পানি পড়া"
      },

      nasal_blockage: {

        present: true,

        weight: 50,

        label_en:
          "Blocked nose",

        label_bn:
          "নাক বন্ধ",

        followup: {

          question:
            "Is your nose blocked? ( নাক কি বন্ধ লাগে? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "nasal_blockage"
          },

          priority: 12
        }
      },

      itchy_nose: {

        present: true,

        weight: 40,

        label_en:
          "Itchy nose",

        label_bn:
          "নাকে চুলকানি"
      },

      itchy_eyes: {

        present: true,

        weight: 35,

        label_en:
          "Itchy eyes",

        label_bn:
          "চোখে চুলকানি"
      },

      watery_eyes: {

        present: true,

        weight: 30,

        label_en:
          "Watery eyes",

        label_bn:
          "চোখ দিয়ে পানি পড়া"
      },

      post_nasal_drip: {

        present: true,

        weight: 35,

        label_en:
          "Post nasal drip",

        label_bn:
          "গলার পিছনে নাকের পানি যাওয়া"
      },

      sinus_pressure: {

        present: true,

        weight: 55,

        label_en:
          "Sinus pressure",

        label_bn:
          "সাইনাসে চাপ লাগা",

        followup: {

          question:
            "Do you feel pressure around forehead or cheeks? ( কপাল বা গালের পাশে চাপ লাগে কি? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "sinus_pressure"
          },

          priority: 14
        }
      },

      forehead_pain: {

        present: true,

        weight: 45,

        label_en:
          "Forehead pain",

        label_bn:
          "কপালে ব্যথা"
      },

      facial_pain: {

        present: true,

        weight: 50,

        label_en:
          "Facial pain",

        label_bn:
          "মুখে ব্যথা"
      },

      headache: {

        present: true,

        weight: 35,

        label_en:
          "Headache",

        label_bn:
          "মাথা ব্যথা"
      },

      sore_throat: {

        present: true,

        weight: 20,

        label_en:
          "Sore throat",

        label_bn:
          "গলা ব্যথা"
      },

      cough: {

        present: true,

        weight: 18,

        label_en:
          "Cough",

        label_bn:
          "কাশি"
      },

      loss_of_smell: {

        present: true,

        weight: 60,

        label_en:
          "Loss of smell",

        label_bn:
          "গন্ধ কম পাওয়া"
      }

    },

    // ======================================
    // REQUIRED SYMPTOMS
    // ======================================

    required_symptoms: [

      "sneezing"

    ],

    // ======================================
    // SYMPTOM CLUSTERS
    // ======================================

    symptom_clusters: {

      allergy_cluster: {

        symptoms: [

          "sneezing",

          "itchy_nose",

          "itchy_eyes",

          "watery_eyes"

        ],

        minimum_match: 3,

        bonus: 70
      },

      sinus_cluster: {

        symptoms: [

          "nasal_blockage",

          "sinus_pressure",

          "forehead_pain",

          "facial_pain"

        ],

        minimum_match: 2,

        bonus: 75
      },

      post_nasal_cluster: {

        symptoms: [

          "post_nasal_drip",

          "sore_throat",

          "cough"

        ],

        minimum_match: 2,

        bonus: 45
      }

    },

    // ======================================
    // RED FLAGS
    // ======================================

    red_flags: {

      breathing_difficulty: {

        present: true,

        weight: 100
      },

      high_fever: {

        present: true,

        weight: 90
      },

      severe_facial_swelling: {

        present: true,

        weight: 95
      }

    },

    // ======================================
    // MEDICINES
    // ======================================

    medicines: {

      first_line: [

        {

          name:
            "Levocetirizine",

          line:
            "first_line",

          dosage:
            "5mg",

          frequency:
            "Once daily at night",

          purpose:
            "Allergy symptom control"
        },

        {

          name:
            "Montelukast + Levocetirizine",

          line:
            "first_line",

          dosage:
            "10mg + 5mg",

          frequency:
            "Once daily at night",

          purpose:
            "Allergic rhinitis relief"
        }

      ],

      second_line: [

        {

          name:
            "Fexofenadine",

          line:
            "second_line",

          dosage:
            "120mg",

          frequency:
            "Once daily",

          purpose:
            "Severe allergy control"
        },

        {

          name:
            "Fluticasone Nasal Spray",

          line:
            "second_line",

          dosage:
            "1-2 sprays",

          frequency:
            "Once daily",

          purpose:
            "Reduce nasal inflammation"
        }

      ]

    },

    // ======================================
    // TREATMENTS
    // ======================================

    treatments: [

      "Steam inhalation",

      "Saline nasal rinse",

      "Avoid dust exposure",

      "Use mask outside"

    ],

    // ======================================
    // LIFESTYLE
    // ======================================

    lifestyle_changes: [

      "Clean pillow covers regularly",

      "Avoid smoke and perfume",

      "Drink enough water",

      "Keep room dust-free",

      "Reduce cold exposure"

    ]

  }

];
