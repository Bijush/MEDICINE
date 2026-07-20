// ==============================
// ROSACEA DATASET
// ==============================

export const ROSACEA_DATA = [

  {

    id: "SK015",

    disease: "Rosacea",

    medical_name: "Rosacea",

    category: "skin",

    tags: [

      "rosacea",
      "facial redness",
      "flushing",
      "acne-like bumps",
      "burning sensation"

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

      genetic_factors: {

        present: true,

        weight: 35

      },

      sun_exposure: {

        present: true,

        weight: 25

      },

      stress: {

        present: true,

        weight: 20

      },

      hot_food_or_drinks: {

        present: true,

        weight: 15

      }

    },

    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms: {

      facial_redness: {

        present: true,

        weight: 50

      },

      flushing: {

        present: true,

        weight: 40

      },

      acne_like_bumps: {

        present: true,

        weight: 35

      },

      visible_blood_vessels: {

        present: true,

        weight: 30

      },

      burning_sensation: {

        present: true,

        weight: 20

      }

    },

    // ==========================
    // RED FLAGS
    // ==========================

    red_flags: {

      eye_involvement: {

        present: true,

        weight: 90

      },

      severe_skin_thickening: {

        present: true,

        weight: 85

      },

      vision_problems: {

        present: true,

        weight: 100

      }

    },

    required_symptoms: [

      "facial_redness"

    ],

    // ==========================
    // MEDICINES
    // ==========================

    medicines: {

      first_line: [

        {

          name: "Metronidazole",

          line: "first_line",

          type: "Topical Antibiotic",

          dosage: "0.75%-1% Gel",

          frequency: "Twice daily",

          purpose: {

            en: "Reduce inflammation and redness",

            bn: "প্রদাহ ও লালভাব কমানো"

          }

        }

      ],

      second_line: [

        {

          name: "Azelaic Acid",

          line: "second_line",

          type: "Topical Agent",

          dosage: "15%-20%",

          frequency: "Twice daily",

          purpose: {

            en: "Control rosacea symptoms",

            bn: "রোসেসিয়ার উপসর্গ নিয়ন্ত্রণ"

          }

        }

      ],

      third_line: [

        {

          name: "Doxycycline",

          line: "third_line",

          type: "Oral Antibiotic",

          dosage: "40-100mg",

          frequency: "Once daily",

          purpose: {

            en: "Moderate to severe rosacea",

            bn: "মাঝারি থেকে তীব্র রোসেসিয়া"

          }

        }

      ],

      emergency_line: [

        {

          name: "Specialist Dermatology Treatment",

          line: "emergency_line",

          type: "Advanced Therapy",

          frequency: "Doctor supervision only",

          purpose: {

            en: "Severe or ocular rosacea",

            bn: "তীব্র বা চোখে প্রভাব ফেললে"

          }

        }

      ]

    },

    // ==========================
    // SUPPLEMENTS
    // ==========================

    supplements: [

      {

        name: "Omega-3 Fatty Acids",

        type: "Nutritional Supplement",

        purpose: {

          en: "May support skin and eye health",

          bn: "ত্বক ও চোখের স্বাস্থ্যে সহায়ক হতে পারে"

        }

      }

    ],

    // ==========================
    // TREATMENTS
    // ==========================

    treatments: [

      "Avoid triggers",

      "Use sunscreen regularly",

      "Follow prescribed treatment"

    ],

    // ==========================
    // LIFESTYLE
    // ==========================

    lifestyle_changes: [

      "Avoid spicy foods",

      "Reduce stress",

      "Protect skin from sunlight"

    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================

    doctor_consultation: [

      {

        en: "Eye irritation or vision changes",

        bn: "চোখে জ্বালা বা দৃষ্টির সমস্যা হলে"

      },

      {

        en: "Symptoms worsening despite treatment",

        bn: "চিকিৎসার পরও উপসর্গ বেড়ে গেলে"

      }

    ],

    // ==========================
    // DISEASE MEANING
    // ==========================

    disease_meaning: [

      {

        en:
          "Rosacea is a chronic inflammatory skin disorder that mainly affects the face. It causes redness, flushing, visible blood vessels, and acne-like bumps. Although it is not contagious, symptoms may worsen over time without treatment.",

        bn:
          "রোসেসিয়া একটি দীর্ঘস্থায়ী প্রদাহজনিত ত্বকের রোগ যা প্রধানত মুখকে প্রভাবিত করে। এতে মুখ লাল হয়ে যাওয়া, বারবার ফ্লাশিং, দৃশ্যমান রক্তনালী এবং ব্রণের মতো ফুসকুড়ি দেখা যায়। এটি সংক্রামক নয়, তবে চিকিৎসা না করলে সময়ের সাথে উপসর্গ বাড়তে পারে।"

      }

    ]

  }

];