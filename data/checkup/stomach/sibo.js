
export const SIBO = [
{
  id: "SIBO001",

  disease: "Small Intestinal Bacterial Overgrowth",

  medical_name: "SIBO",

  aliases: [
    "small bowel bacterial overgrowth",
    "intestinal bacterial overgrowth"
  ],

  category: "stomach",

  tags: [
    "bloating",
    "gas",
    "diarrhea",
    "malabsorption"
  ],

  prevalence: "moderate",

  severity: "moderate",

  priority: 75,

  contagious: false,

  emergency: false,

  minimum_match: 2,

  causes: {

    intestinal_motility_disorder: {
      present: true,
      weight: 25
    },

    diabetes: {
      present: true,
      weight: 15
    },

    previous_abdominal_surgery: {
      present: true,
      weight: 20
    },

    chronic_ppi_use: {
      present: true,
      weight: 15
    }

  },

  risk_factors: {

    ibs_history: {
      present: true,
      weight: 20
    },

    celiac_disease: {
      present: true,
      weight: 15
    },

    crohns_disease: {
      present: true,
      weight: 15
    }

  },

  symptoms: {

    bloating: {
      category: "gastrointestinal",
      present: true,
      weight: 45,

      aliases: [
        "abdominal_bloating",
        "distension",
        "abdominal_fullness"
      ]
    },

    excessive_gas: {
      category: "gastrointestinal",
      present: true,
      weight: 40,

      aliases: [
        "flatulence",
        "gas_problem"
      ]
    },

    abdominal_pain: {
      category: "STOMACH PAIN",
      present: true,
      weight: 30
    },

    abdominal_cramp: {
      category: "gastrointestinal",
      present: true,
      weight: 25
    },

    diarrhea: {
      category: "DASTO",
      present: true,
      weight: 35
    },

    constipation: {
      category: "gastrointestinal",
      present: true,
      weight: 20
    },

    nausea: {
      category: "gastrointestinal",
      present: true,
      weight: 15
    },

    early_satiety: {
      category: "Food",
      present: true,
      weight: 15
    },

    weight_loss: {
      category: "constitutional",
      present: true,
      weight: 30
    },

    fatigue: {
      category: "constitutional",
      present: true,
      weight: 20
    },

    foul_smelling_stool: {
      category: "STOOL",
      present: true,
      weight: 25
    },

    relief_after_passing_stool: {
      category: "STOOL",
      present: false,
      weight: -25
    },

    blood_in_stool: {
      category: "STOOL",
      present: false,
      weight: -40
    },

    nocturnal_diarrhea: {
      category: "DASTO",
      present: false,
      weight: -30
    }

  },

  physical_exam: {

    abdominal_distension: {
      present: true,
      weight: 20
    },

    weight_loss_visible: {
      present: true,
      weight: 15
    }

  },

  tests: {

    hydrogen_breath_test_positive: {
      present: true,
      weight: 80
    },

    methane_breath_test_positive: {
      present: true,
      weight: 70
    },

    jejunal_aspirate_positive: {
      present: true,
      weight: 90
    },

    vitamin_b12_low: {
      present: true,
      weight: 25
    }

  },

  complications: {

    malnutrition: {
      present: true,
      weight: 35
    },

    vitamin_b12_deficiency: {
      present: true,
      weight: 30
    },

    weight_loss: {
      present: true,
      weight: 25
    }

  },

  red_flags: {

    severe_weight_loss: {
      present: true,
      weight: 50
    },

    dehydration: {
      present: true,
      weight: 40
    }

  },

  bonus_rules: [

    {
      symptoms: [
        "bloating",
        "excessive_gas"
      ],
      match: "all",
      bonus: 35
    },

    {
      symptoms: [
        "bloating",
        "diarrhea",
        "abdominal_pain"
      ],
      match: "all",
      bonus: 40
    },

    {
      symptoms: [
        "weight_loss",
        "fatigue"
      ],
      match: "all",
      bonus: 25
    }

  ],

  exclusion_rules: [

    {
      symptoms: [
        "blood_in_stool"
      ],
      match: "all",
      penalty: 40
    },

    {
      symptoms: [
        "nocturnal_diarrhea"
      ],
      match: "all",
      penalty: 30
    }

  ],

  followup_boosts: {

    bloating: 15,

    excessive_gas: 15,

    diarrhea: 12,

    weight_loss: 10

  },

  duration_rules: [

    {
      min_days: 30,
      bonus: 20
    },

    {
      min_days: 90,
      bonus: 30
    }

  ],

  required_negative_symptoms: [
    "blood_in_stool",
    "nocturnal_diarrhea"
  ],

  differential_diagnosis: [
    "IBS",
    "Celiac Disease",
    "Giardiasis",
    "Crohn's Disease",
    "Microscopic Colitis"
  ],
  symptom_clusters: {

    gas_bloating_cluster: {

      symptoms: [
        "bloating",
        "excessive_gas",
        "abdominal_pain"
      ],

      minimum_match: 2,

      bonus: 40

    },

    diarrhea_cluster: {

      symptoms: [
        "diarrhea",
        "abdominal_cramp",
        "bloating"
      ],

      minimum_match: 2,

      bonus: 35

    },

    malabsorption_cluster: {

      symptoms: [
        "weight_loss",
        "fatigue",
        "foul_smelling_stool"
      ],

      minimum_match: 2,

      bonus: 40

    }

  },

  medicines: {

    first_line: [

      {

        line: "first_line",

        name: "Rifaximin",

        type: "Antibiotic",

        dosage: "550mg",

        frequency: "Three times daily for 14 days",

        purpose: {
          en: "Reduces bacterial overgrowth in the small intestine",
          bn: "ক্ষুদ্রান্ত্রে অতিরিক্ত ব্যাকটেরিয়া কমায়"
        }

      }

    ],

    second_line: [

      {

        line: "second_line",

        name: "Metronidazole",

        type: "Antibiotic",

        dosage: "400mg",

        frequency: "Three times daily",

        purpose: {
          en: "Alternative treatment for bacterial overgrowth",
          bn: "ব্যাকটেরিয়ার অতিবৃদ্ধির বিকল্প চিকিৎসা"
        }

      },

      {

        line: "second_line",

        name: "Ciprofloxacin",

        type: "Antibiotic",

        dosage: "500mg",

        frequency: "Twice daily",

        purpose: {
          en: "May help selected patients",
          bn: "নির্বাচিত রোগীদের ক্ষেত্রে উপকারী হতে পারে"
        }

      }

    ],

    third_line: [

      {

        line: "third_line",

        name: "Probiotics",

        type: "Supportive Therapy",

        dosage: "1 capsule",

        frequency: "Daily",

        purpose: {
          en: "Supports healthy gut flora",
          bn: "অন্ত্রের উপকারী জীবাণুর ভারসাম্য বজায় রাখতে সাহায্য করে"
        }

      }

    ]

  },

  prescription_medicines: [

    {

      name: "Rifaximin",

      line: "prescription",

      condition: {
        en: "Confirmed or suspected SIBO",
        bn: "নিশ্চিত বা সন্দেহজনক SIBO"
      },

      frequency: {
        en: "Three times daily",
        bn: "দিনে ৩ বার"
      },

      purpose: {
        en: "Eliminates excessive intestinal bacteria",
        bn: "অতিরিক্ত অন্ত্রের ব্যাকটেরিয়া দূর করে"
      }

    },

    {

      name: "Metronidazole",

      line: "prescription",

      condition: {
        en: "Alternative treatment",
        bn: "বিকল্প চিকিৎসা"
      },

      frequency: {
        en: "As prescribed",
        bn: "চিকিৎসকের নির্দেশ অনুযায়ী"
      },

      purpose: {
        en: "Reduces bacterial overgrowth",
        bn: "ব্যাকটেরিয়ার অতিবৃদ্ধি কমায়"
      }

    }

  ],

  supportive_medicines: [

    {

      name: "Probiotics",

      line: "supportive",

      purpose: {
        en: "Restores healthy intestinal bacteria",
        bn: "অন্ত্রের উপকারী ব্যাকটেরিয়ার ভারসাম্য পুনঃস্থাপনে সাহায্য করে"
      },

      condition: {
        en: "Persistent bloating and gas",
        bn: "দীর্ঘস্থায়ী পেট ফাঁপা ও গ্যাসে"
      },

      usageType: {
        en: "Supportive therapy",
        bn: "সহায়ক চিকিৎসা"
      }

    }

  ]

}
];