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
      "ENT",

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
      name: "Fluticasone Nasal Spray",

      line: "first_line",

      brands: [
        "Flomist",
        "Flixonase",
        "Nazoflo"
      ],

      dosage: "1-2 sprays per nostril",

      frequency: "Once daily",

      purpose: {
        en: "Allergic rhinitis and nasal inflammation",
        bn: "অ্যালার্জিজনিত নাকের সমস্যা ও নাকের প্রদাহ কমানো"
      }
    },

    {
      name: "Mometasone Nasal Spray",

      line: "first_line",

      brands: [
        "Metaspray",
        "Momate"
      ],

      dosage: "1-2 sprays per nostril",

      frequency: "Once daily",

      purpose: {
        en: "Moderate to severe allergic rhinitis",
        bn: "মাঝারি থেকে গুরুতর অ্যালার্জিক রাইনাইটিস নিয়ন্ত্রণ"
      }
    }

  ],

  second_line: [

    {
      name: "Levocetirizine",

      line: "second_line",

      brands: [
        "LCZ",
        "Levocet",
        "Xyzal"
      ],

      dosage: "5mg",

      frequency: "Once daily at night",

      purpose: {
        en: "Sneezing and runny nose",
        bn: "হাঁচি ও নাক দিয়ে পানি পড়া কমানো"
      }
    },

    {
      name: "Fexofenadine",

      line: "second_line",

      brands: [
        "Allegra",
        "Fexova",
        "Histakind",
        "Fexodil"
      ],

      dosage: "120mg / 180mg",

      frequency: "Once daily",

      purpose: {
        en: "Non-drowsy allergy control",
        bn: "ঘুম কম এনে অ্যালার্জির উপসর্গ নিয়ন্ত্রণ"
      }
    }

  ],

  third_line: [

    {
      name: "Montelukast + Levocetirizine",

      line: "third_line",

      brands: [
        "Montair-LC",
        "Montek-LC",
        "Telekast-L"
      ],

      dosage: "10mg + 5mg",

      frequency: "Once daily at night",

      purpose: {
        en: "Persistent allergic rhinitis",
        bn: "দীর্ঘস্থায়ী অ্যালার্জিক রাইনাইটিস নিয়ন্ত্রণ"
      }
    },

{
  name: "Fexofenadine + Montelukast",

  line: "third_line",

  brands: [
    "Montair-FX",
    "Montek-FX",
    "Allegra-M",
    "Telekast-F"
  ],

  dosage: "120mg + 10mg",

  frequency: "Once daily",

  purpose: {
    en: "Used for severe allergy symptoms such as sneezing, runny nose, watery eyes and allergic rhinitis. Montelukast is a leukotriene antagonist that blocks leukotrienes, reducing inflammation and swelling in the airways and nose. Fexofenadine is an antihistamine that blocks histamine, helping relieve runny nose, watery eyes and sneezing.",

    bn: "তীব্র অ্যালার্জির উপসর্গ যেমন হাঁচি, নাক দিয়ে পানি পড়া, চোখ দিয়ে পানি পড়া এবং অ্যালার্জিক রাইনাইটিস নিয়ন্ত্রণে ব্যবহৃত হয়। Montelukast একটি leukotriene antagonist, যা leukotriene নামক রাসায়নিকের কার্যকারিতা বাধা দিয়ে শ্বাসনালী ও নাকের প্রদাহ ও ফোলাভাব কমায়। Fexofenadine একটি antihistamine, যা histamine-এর কার্যকারিতা বাধা দিয়ে নাক দিয়ে পানি পড়া, চোখ দিয়ে পানি পড়া এবং হাঁচির উপসর্গ উপশম করে।"
  }
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