// ==========================================
// FILE: migraineEyePain.js
// ADVANCED MIGRAINE + EYE PAIN DATASET
// ==========================================

export const MIGRAINE_EYE_PAIN = [

  {

    id: "MEP001",

    disease:
      "Migraine Eye Pain",

    medical_name:
      "Migraine With Ocular Symptoms",

    category:
      "neurology",

    severity:
      "moderate",

    contagious: false,

    emergency: false,

    minimum_match: 3,

    // ======================================
    // SYMPTOMS
    // ======================================

    symptoms: {

      eyebrow_pain: {

        present: true,

        weight: 35,

        label_en:
          "Eyebrow pain",

        label_bn:
          "ভ্রুতে ব্যথা",

        followup: {

          question:
            "Is pain located around the eyebrow area? ( ব্যথা কি ভ্রুর আশেপাশে হয়? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "eyebrow_pain"
          },

          priority: 8
        }
      },

      supraorbital_pain: {

        present: true,

        weight: 45,

        label_en:
          "Pain above eye",

        label_bn:
          "চোখের উপরে ব্যথা",

        followup: {

          question:
            "Is pain felt above the eye? ( ব্যথা কি চোখের উপরে অনুভূত হয়? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "supraorbital_pain"
          },

          priority: 10
        }
      },

      orbital_pain: {

        present: true,

        weight: 50,

        label_en:
          "Pain behind eye",

        label_bn:
          "চোখের ভিতরে / পিছনে ব্যথা",

        followup: {

          question:
            "Is pain deep inside or behind the eye? ( ব্যথা কি চোখের ভিতরে বা পিছনে হয়? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "orbital_pain"
          },

          priority: 12
        }
      },

      red_eyes: {

        present: true,

        weight: 35,

        label_en:
          "Red eyes",

        label_bn:
          "চোখ লাল হওয়া"
      },

      watery_eyes: {

        present: true,

        weight: 20,

        label_en:
          "Watery eyes",

        label_bn:
          "চোখ দিয়ে পানি পড়া"
      },

      itching_eyes: {

        present: true,

        weight: 22,

        label_en:
          "Itching eyes",

        label_bn:
          "চোখে চুলকানি"
      },

      blurred_vision: {

        present: true,

        weight: 55,

        label_en:
          "Blurred vision",

        label_bn:
          "ঝাপসা দেখা",

        followup: {

          question:
            "Is vision becoming blurry? ( চোখে কি ঝাপসা দেখছেন? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "blurred_vision"
          },

          priority: 15
        }
      },

      photophobia: {

        present: true,

        weight: 40,

        label_en:
          "Light sensitivity",

        label_bn:
          "আলোতে সমস্যা",

        followup: {

          question:
            "Does bright light worsen symptoms? ( আলোতে কি সমস্যা বাড়ে? )",

          options: [

            "Yes ( হ্যাঁ )",

            "No ( না )"

          ],

          symptomMap: {

            "Yes ( হ্যাঁ )":
              "photophobia"
          },

          priority: 10
        }
      },

      headache: {

        present: true,

        weight: 35,

        label_en:
          "Headache",

        label_bn:
          "মাথা ব্যথা"
      },

      unilateral_headache: {

        present: true,

        weight: 45,

        label_en:
          "One-sided headache",

        label_bn:
          "মাথার এক পাশে ব্যথা"
      },

      throbbing_headache: {

        present: true,

        weight: 50,

        label_en:
          "Throbbing headache",

        label_bn:
          "ধকধক ধরনের মাথা ব্যথা"
      }

    },

    // ======================================
    // REQUIRED SYMPTOMS
    // ======================================

    required_symptoms: [

      "headache"

    ],

    // ======================================
    // SYMPTOM CLUSTERS
    // ======================================

    symptom_clusters: {

      migraine_cluster: {

        symptoms: [

          "unilateral_headache",

          "throbbing_headache",

          "photophobia",

          "nausea"

        ],

        minimum_match: 3,

        bonus: 70
      },

      ocular_pain_cluster: {

        symptoms: [

          "orbital_pain",

          "red_eyes",

          "photophobia",

          "watery_eyes"

        ],

        minimum_match: 2,

        bonus: 60
      },

      sinus_eye_cluster: {

        symptoms: [

          "eyebrow_pain",

          "supraorbital_pain",

          "headache"

        ],

        minimum_match: 2,

        bonus: 50
      }

    },

    // ======================================
    // RED FLAGS
    // ======================================

    red_flags: {

      sudden_vision_loss: {

        present: true,

        weight: 100
      },

      severe_eye_pain: {

        present: true,

        weight: 90
      },

      unconsciousness: {

        present: true,

        weight: 100
      }

    },

    // ======================================
    // MEDICINES
    // ======================================

    medicines: {

      first_line: [

        {

          name:
            "Paracetamol",

          line:
            "first_line",

          dosage:
            "500mg",

          frequency:
            "Every 6 hours if needed",

          purpose:
            "Headache relief"
        },

        {

          name:
            "Ibuprofen",

          line:
            "first_line",

          dosage:
            "400mg",

          frequency:
            "Every 8 hours after food",

          purpose:
            "Migraine pain relief"
        }

      ],

      second_line: [

        {

          name:
            "Sumatriptan",

          line:
            "second_line",

          dosage:
            "50mg",

          frequency:
            "As prescribed",

          purpose:
            "Migraine attack control"
        }

      ]

    },

    // ======================================
    // TREATMENTS
    // ======================================

    treatments: [

      "Rest in dark room",

      "Adequate hydration",

      "Avoid bright light",

      "Reduce screen exposure"

    ],

    // ======================================
    // LIFESTYLE
    // ======================================

    lifestyle_changes: [

      "Sleep properly",

      "Avoid stress",

      "Avoid dehydration",

      "Limit screen time"

    ]

  }

];


