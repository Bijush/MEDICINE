// ==============================
// HEMORRHOIDS DATASET
// ADVANCED UNIVERSAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const HEMORRHOIDS = [
  {
    id: "HEM001",
    disease: "Hemorrhoids",
    medical_name: "Piles",
    aliases: [
      "piles",
      "hemorrhoidal disease",
      "hemorrhoid"
    ],
    category: "stomach",
    tags: [
      "anus",
      "bleeding",
      "constipation",
      "pain"
    ],
    prevalence: "common",
    severity: "moderate",
    priority: 55,
    contagious: false,
    emergency: false,
    minimum_match: 1,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      chronic_constipation: { present: true, weight: 40 },
      straining_during_stool: { present: true, weight: 40 },
      low_fiber_diet: { present: true, weight: 20 },
      pregnancy: { present: true, weight: 15 },
      obesity: { present: true, weight: 15 }
    },

    // ==========================
    // RISK FACTORS
    // ==========================
    risk_factors: {
      sedentary_lifestyle: { present: true, weight: 15 },
      prolonged_sitting: { present: true, weight: 15 },
      chronic_cough: { present: true, weight: 10 },
      heavy_weight_lifting: { present: true, weight: 10 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      blood_in_stool: {
        category: "STOOL",
        present: true,
        weight: 45,
        aliases: [
          "rectal_bleeding"
        ]
      },

      fresh_red_bleeding: {
        category: "gastrointestinal",
        present: true,
        weight: 55,
        aliases: [
          "bright_red_bleeding",
          "fresh_blood_in_stool"
        ]
      },

      pain_during_stool: {
        category: "STOOL",
        present: true,
        weight: 40,
        followup: {
          question: "Does pain worsen while passing stool?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "painful_bowel_movement"
          },
          priority: 10
        }
      },

      itching_around_anus: {
        category: "gastrointestinal",
        present: true,
        weight: 30,
        followup: {
          question: "Is itching severe around the anus?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "severe_anal_itching"
          },
          priority: 8
        }
      },

      swelling_near_anus: {
        category: "gastrointestinal",
        present: true,
        weight: 40,
        aliases: [
          "anal_swelling",
          "anal_lump"
        ],
        followup: {
          question: "Is there visible swelling or lump near the anus?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "visible_hemorrhoid"
          },
          priority: 12
        }
      },

      constipation: {
        category: "gastrointestinal",
        present: true,
        weight: 25
      },

      straining_during_stool: {
        category: "gastrointestinal",
        present: true,
        weight: 40
      },

      anal_pain: {
        category: "PAIN",
        present: true,
        weight: 30
      },

      sitting_discomfort: {
        category: "gastrointestinal",
        present: true,
        weight: 20
      },

      mucus_discharge: {
        category: "gastrointestinal",
        present: true,
        weight: 12
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      relief_after_passing_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -20
      },
      black_stool: {
        category: "gastrointestinal",
        present: false,
        weight: -50
      },
      vomiting_blood: {
        category: "gastrointestinal",
        present: false,
        weight: -60
      },
      rapid_weight_loss: {
        category: "constitutional",
        present: false,
        weight: -40
      },
      watery_diarrhea: {
        category: "gastrointestinal",
        present: false,
        weight: -35
      },
      persistent_vomiting: {
        category: "gastrointestinal",
        present: false,
        weight: -30
      }
    },

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      hemorrhoidal_mass_visible: { present: true, weight: 70 },
      anal_swelling: { present: true, weight: 45 },
      anal_tenderness: { present: true, weight: 30 },
      prolapsed_hemorrhoid: { present: true, weight: 60 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      proctoscopy_positive: { present: true, weight: 80 },
      hemoglobin_low: { present: true, weight: 20 },
      stool_occult_blood_positive: { present: true, weight: 35 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      anemia: { present: true, weight: 45 },
      thrombosed_hemorrhoid: { present: true, weight: 70 },
      severe_bleeding: { present: true, weight: 60 },
      infection: { present: true, weight: 45 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      massive_bleeding: { present: true, weight: 90 },
      severe_pain: { present: true, weight: 60 },
      infection: { present: true, weight: 55 },
      black_stool: { present: true, weight: 80 },
      severe_weight_loss: { present: true, weight: 70 }
    },

    // ==========================
    // BONUS RULES
    // ==========================
    bonus_rules: [
      {
        symptoms: ["blood_in_stool", "pain_during_stool"],
        match: "all",
        bonus: 40
      },
      {
        symptoms: ["itching_around_anus", "swelling_near_anus"],
        match: "all",
        bonus: 35
      },
      {
        symptoms: ["fresh_red_bleeding", "straining_during_stool"],
        match: "all",
        bonus: 45
      },
      {
        symptoms: ["constipation", "pain_during_stool"],
        match: "all",
        bonus: 30
      }
    ],

    // ==========================
    // EXCLUSION RULES
    // ==========================
    exclusion_rules: [
      {
        symptoms: ["black_stool"],
        match: "all",
        penalty: 50
      },
      {
        symptoms: ["vomiting_blood"],
        match: "all",
        penalty: 60
      },
      {
        symptoms: ["rapid_weight_loss"],
        match: "all",
        penalty: 40
      },
      {
        symptoms: ["watery_diarrhea"],
        match: "all",
        penalty: 35
      },
      {
        symptoms: ["persistent_vomiting"],
        match: "all",
        penalty: 30
      }
    ],

    // ==========================
    // FOLLOWUP BOOSTS
    // ==========================
    followup_boosts: {
      blood_in_stool: 15,
      pain_during_stool: 12,
      swelling_near_anus: 12,
      fresh_red_bleeding: 18
    },

    // ==========================
    // DURATION RULES
    // ==========================
    duration_rules: [
      {
        min_days: 7,
        bonus: 10
      },
      {
        min_days: 30,
        bonus: 18
      },
      {
        min_days: 90,
        bonus: 25
      }
    ],

    // ==========================
    // AGE RULES
    // ==========================
    age_rules: [
      {
        min_age: 40,
        bonus: 10
      }
    ],

    // ==========================
    // EMERGENCY SYMPTOMS
    // ==========================
    emergency_symptoms: [
      "massive_bleeding",
      "severe_pain"
    ],

// ==========================
// MEDICINES
// ==========================

medicines: {

  first_line: [

    {
      line: "first_line",

      name: "Lidocaine / Pramoxine Ointment",

      type: "Topical Anesthetic",

      dosage: "2.5% - 5%",

      frequency: "Apply 3-4 times daily if needed",

      purpose: {
        en: "Provides quick relief from pain and discomfort",
        bn: "ব্যথা ও অস্বস্তি থেকে দ্রুত আরাম দেয়"
      }
    },

    {
      line: "first_line",

      name: "Hydrocortisone Cream",

      type: "Topical Corticosteroid",

      dosage: "1% - 2.5%",

      frequency: "Twice daily for up to 7 days",

      purpose: {
        en: "Reduces inflammation, swelling, and itching",
        bn: "প্রদাহ, ফোলা ও চুলকানি কমায়"
      }
    }

  ],

  second_line: [

    {
      line: "second_line",

      name: "Docusate Sodium",

      type: "Stool Softener",

      dosage: "100mg",

      frequency: "Once or twice daily",

      purpose: {
        en: "Softens stool and reduces straining",
        bn: "মল নরম করে এবং চাপ কমায়"
      }
    },

    {
      line: "second_line",

      name: "Polyethylene Glycol (PEG)",

      type: "Osmotic Laxative",

      dosage: "17g",

      frequency: "Once daily",

      purpose: {
        en: "Improves bowel movements and prevents constipation",
        bn: "মলত্যাগ সহজ করে এবং কোষ্ঠকাঠিন্য প্রতিরোধ করে"
      }
    }

  ],

  third_line: [

    {
      line: "third_line",

      name: "Acetaminophen",

      type: "Analgesic",

      dosage: "500mg - 1000mg",

      frequency: "Every 6 hours if needed",

      purpose: {
        en: "Provides relief from hemorrhoid-related pain",
        bn: "হেমোরয়েডজনিত ব্যথা উপশম করে"
      }
    }

  ],

  fourth_line: [

    {
      line: "fourth_line",

      name: "Warm Sitz Bath",

      type: "Supportive Care",

      dosage: "10-15 minutes",

      frequency: "2-3 times daily",

      purpose: {
        en: "Relieves pain, itching, and irritation",
        bn: "ব্যথা, চুলকানি ও জ্বালা কমাতে সাহায্য করে"
      }
    }

  ]

}
  }
];