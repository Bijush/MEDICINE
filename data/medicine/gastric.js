

import { GASTRIC2 }
from "./gastric2.js";
import { GASTRIC3 }
from "./gastric3.js";
import { GASTRIC4 }
from "./gastric4.js";
import { GASTRIC5 }
from "./gastric5.js";
import { GASTRIC6 }
from "./gastric6.js";

// 🔥 GASTRIC / ACIDITY MEDICINES (AI READY + CLASS + BRANDS)

export const DATA = [


  // ================= PANTOPRAZOLE =================
  {
    id: "pantoprazole",
    
// ================= TYPE =================
type: {
  en: "single",
  bn: "সিঙ্গেল"
},
    // ================= BASIC =================
    names: {
      primary: {
        en: "Pantoprazole",
        bn: "প্যান্টোপ্রাজল"
      },

      generic: {
        en: "Pantoprazole",
        bn: "প্যান্টোপ্রাজল"
      }
    },

    group: {
      en: "gastric",
      bn: "গ্যাস্ট্রিক"
    },

    subgroup: {
      en: "acid reducer",
      bn: "অ্যাসিড কমানোর ওষুধ"
    },

    therapeuticCategory: {
      en: [
        "proton pump inhibitor",
        "anti-ulcer"
      ],

      bn: [
        "অ্যাসিড কমানোর ওষুধ",
        "আলসারের ওষুধ"
      ]
    },

    class: {
      en: "Proton Pump Inhibitor",
      bn: "প্রোটন পাম্প ইনহিবিটর"
    },

    category: {
      en: "tablet",
      bn: "ট্যাবলেট"
    },

    route: {
      en: "oral",
      bn: "মুখে খাওয়ার"
    },

    dosageForms: {
      en: [
        "tablet",
        "capsule",
        "injection"
      ],

      bn: [
        "ট্যাবলেট",
        "ক্যাপসুল",
        "ইনজেকশন"
      ]
    },

    strengths: [
      "20mg",
      "40mg"
    ],

    composition: [
      {
        ingredient: {
          en: "Pantoprazole",
          bn: "প্যান্টোপ্রাজল"
        },

        strength: "40mg"
      }
    ],

    otc: false,
    rx: true,

    antibiotic: false,

    // ================= AI =================
    ai: {
      powerLevel: 8,
      safetyLevel: 8,

      severity: {
        en: "strong",
        bn: "শক্তিশালী"
      },

      score: {
        acidity: 10,
        gastric: 10,
        gerd: 9,
        acid_reflux: 9,
        ulcer: 8,
        heartburn: 9
      }
    },

    // ================= RISKS =================
    risks: {
      gastric: 0,
      kidney: 2,
      liver: 1,

      overdose: {
        level: {
          en: "medium",
          bn: "মাঝারি"
        },

        effect: {
          en: "May cause dizziness and stomach upset",
          bn: "মাথা ঘোরা ও পেট খারাপ হতে পারে"
        }
      }
    },

    // ================= SAFETY =================
    safety: {
      pregnancy: false,
      breastfeeding: true,
      elderly: true,
      pediatric: false
    },

    // ================= MATCHING =================
    tags: [
      "pantoprazole",
      "gastric",
      "acid",
      "gerd",
      "heartburn",
      "ulcer"
    ],

    symptoms: {
      en: [
        "acidity",
        "heartburn",
        "stomach burning",
        "gastric pain"
      ],

      bn: [
        "অ্যাসিডিটি",
        "বুক জ্বালা",
        "পেট জ্বালা",
        "গ্যাস্ট্রিক ব্যথা"
      ]
    },

    diseases: {
      en: [
        "gastric",
        "acid reflux",
        "gerd",
        "ulcer"
      ],

      bn: [
        "গ্যাস্ট্রিক",
        "অ্যাসিড রিফ্লাক্স",
        "জিইআরডি",
        "আলসার"
      ]
    },

    bestFor: {
      en: [
        "acid reflux",
        "gastric",
        "gerd",
        "ulcer"
      ],

      bn: [
        "অ্যাসিড রিফ্লাক্স",
        "গ্যাস্ট্রিক",
        "জিইআরডি",
        "আলসার"
      ]
    },

    // ================= SIDE EFFECTS =================
    sideEffects: {
      common: {
        en: [
          "headache",
          "nausea",
          "diarrhea"
        ],

        bn: [
          "মাথাব্যথা",
          "বমি ভাব",
          "ডায়রিয়া"
        ]
      },

      serious: {
        en: [
          "kidney issue",
          "vitamin B12 deficiency"
        ],

        bn: [
          "কিডনি সমস্যা",
          "ভিটামিন বি১২ ঘাটতি"
        ]
      }
    },

    // ================= MECHANISM =================
    mechanism: {
      en:
        "Blocks acid production in the stomach by inhibiting proton pumps",

      bn:
        "পাকস্থলীতে অ্যাসিড তৈরি কমাতে প্রোটন পাম্প বন্ধ করে কাজ করে"
    },

    // ================= DOSING =================
    dosing: {
      adult: {
        en: "20mg - 40mg once daily before meal",
        bn: "খাবারের আগে দিনে ২০-৪০ মিগ্রা"
      },

      child: {
        en: "Only if prescribed by doctor",
        bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
      },

      maxDaily: {
        en: "80mg/day",
        bn: "প্রতিদিন সর্বোচ্চ ৮০ মিগ্রা"
      }
    },

    onset: {
      en: "1-2 hours",
      bn: "১-২ ঘণ্টা"
    },

    duration: {
      en: "24 hours",
      bn: "২৪ ঘণ্টা"
    },

    // ================= SEARCH =================
    searchableText: [
      "pantoprazole",
      "gastric medicine",
      "acid medicine",
      "gerd medicine",
      "গ্যাস্ট্রিকের ওষুধ"
    ],

    // ================= UI =================
    ui: {
      gastricEffect: {
        en: "Very Safe",
        bn: "খুব নিরাপদ"
      },

      colorHint: "green",

      commonUse: true
    },

    // ================= BRANDS =================
    brands: [
      "Pantocid",
      "Pantop",
      "Pantodac",
      "Pantazole",
      "Pantocare",
      "Pantofast"
    ],

    // ================= USAGE =================
    usageType: {
      en: [
        "acid reduction",
        "ulcer treatment"
      ],

      bn: [
        "অ্যাসিড কমানো",
        "আলসারের চিকিৎসা"
      ]
    },

    emergencyUse: false
  },

  // ================= OMEPRAZOLE =================
{
  id: "omeprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Omeprazole",
      bn: "ওমিপ্রাজল"
    },

    generic: {
      en: "Omeprazole",
      bn: "ওমিপ্রাজল"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-ulcer"
    ],

    bn: [
      "অ্যাসিড কমানোর ওষুধ",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Proton Pump Inhibitor",
    bn: "প্রোটন পাম্প ইনহিবিটর"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "capsule",
      "tablet",
      "syrup"
    ],

    bn: [
      "ক্যাপসুল",
      "ট্যাবলেট",
      "সিরাপ"
    ]
  },

  strengths: [
    "10mg",
    "20mg",
    "40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Omeprazole",
        bn: "ওমিপ্রাজল"
      },

      strength: "20mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 8,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      acidity: 10,
      gastric: 10,
      gerd: 9,
      acid_reflux: 9,
      ulcer: 8,
      heartburn: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause stomach upset and dizziness",
        bn: "পেট খারাপ ও মাথা ঘোরা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: true,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "omeprazole",
    "acid",
    "gastric",
    "gerd",
    "ulcer",
    "heartburn"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "stomach burning"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "পেট জ্বালা"
    ]
  },

  diseases: {
    en: [
      "acidity",
      "gastric",
      "gerd",
      "ulcer"
    ],

    bn: [
      "অ্যাসিডিটি",
      "গ্যাস্ট্রিক",
      "জিইআরডি",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "gastric",
      "acid reflux",
      "heartburn",
      "ulcer"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "বুক জ্বালা",
      "আলসার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "nausea",
        "diarrhea"
      ],

      bn: [
        "মাথাব্যথা",
        "বমি ভাব",
        "ডায়রিয়া"
      ]
    },

    serious: {
      en: [
        "kidney issue",
        "vitamin B12 deficiency"
      ],

      bn: [
        "কিডনি সমস্যা",
        "ভিটামিন বি১২ ঘাটতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Reduces stomach acid by blocking proton pumps in the stomach lining",

    bn:
      "পাকস্থলীর প্রোটন পাম্প বন্ধ করে অ্যাসিড কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "20mg once daily before meal",
      bn: "খাবারের আগে দিনে ২০ মিগ্রা"
    },

    child: {
      en: "Only if prescribed by doctor",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "40mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০ মিগ্রা"
    }
  },

  onset: {
    en: "1 hour",
    bn: "১ ঘণ্টা"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "omeprazole",
    "acid medicine",
    "gastric medicine",
    "gerd medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Safe",
      bn: "নিরাপদ"
    },

    colorHint: "green",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Omez",
    "Ocid",
    "Omecip",
    "Omefast",
    "Omecare",
    "Omeplus",
    "Omepraz",
    "Omebest",
    "Omepower",
    "Omegold",
    "Omeclear",
    "Omerel",
    "Omefine",
    "Omezin",
    "Omepra",
    "Omefast Plus",
    "Ometop",
    "Omeheal",
    "Omecare Plus",
    "Omepro"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "ulcer treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "আলসারের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

  // ================= ESOMEPRAZOLE =================
{
  id: "esomeprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Esomeprazole",
      bn: "ইসোমিপ্রাজল"
    },

    generic: {
      en: "Esomeprazole",
      bn: "ইসোমিপ্রাজল"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-ulcer"
    ],

    bn: [
      "অ্যাসিড কমানোর ওষুধ",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Proton Pump Inhibitor",
    bn: "প্রোটন পাম্প ইনহিবিটর"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "capsule",
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "ইনজেকশন"
    ]
  },

  strengths: [
    "20mg",
    "40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Esomeprazole",
        bn: "ইসোমিপ্রাজল"
      },

      strength: "40mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 8,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      gastric: 10,
      gerd: 10,
      acid_reflux: 10,
      ulcer: 9,
      heartburn: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause severe stomach upset and dizziness",
        bn: "তীব্র পেট খারাপ ও মাথা ঘোরা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: true,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "esomeprazole",
    "acid",
    "gastric",
    "reflux",
    "gerd",
    "ulcer"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "acid reflux",
      "stomach burning"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট জ্বালা"
    ]
  },

  diseases: {
    en: [
      "acid reflux",
      "gerd",
      "gastric",
      "ulcer"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "গ্যাস্ট্রিক",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "acid reflux",
      "gerd",
      "gastric",
      "ulcer"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "গ্যাস্ট্রিক",
      "আলসার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "nausea",
        "constipation"
      ],

      bn: [
        "মাথাব্যথা",
        "বমি ভাব",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "kidney issue",
        "vitamin deficiency"
      ],

      bn: [
        "কিডনি সমস্যা",
        "ভিটামিনের ঘাটতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Strongly suppresses stomach acid by blocking proton pumps",

    bn:
      "প্রোটন পাম্প বন্ধ করে পাকস্থলীর অ্যাসিড শক্তভাবে কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "20mg - 40mg once daily before meal",
      bn: "খাবারের আগে দিনে ২০-৪০ মিগ্রা"
    },

    child: {
      en: "Only if prescribed by doctor",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "40mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০ মিগ্রা"
    }
  },

  onset: {
    en: "1 hour",
    bn: "১ ঘণ্টা"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "esomeprazole",
    "acid reflux medicine",
    "gerd medicine",
    "gastric medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Safe",
      bn: "নিরাপদ"
    },

    colorHint: "green",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Nexium",
    "Esofast",
    "Esocare",
    "Esoplus",
    "Esomax",
    "Esofit",
    "Esobest",
    "Esoactive",
    "Esoprime",
    "Esopower",
    "Esogold",
    "Esoclear",
    "Esorel",
    "Esofine",
    "Esozin",
    "Esopro",
    "Esoheal",
    "Esofast Plus",
    "Esotop",
    "Esocare Plus"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "reflux treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্সের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

  // ================= RABEPRAZOLE =================
{
  id: "rabeprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Rabeprazole",
      bn: "র্যাবিপ্রাজল"
    },

    generic: {
      en: "Rabeprazole",
      bn: "র্যাবিপ্রাজল"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-ulcer"
    ],

    bn: [
      "অ্যাসিড কমানোর ওষুধ",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Proton Pump Inhibitor",
    bn: "প্রোটন পাম্প ইনহিবিটর"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "capsule",
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "ইনজেকশন"
    ]
  },

  strengths: [
    "10mg",
    "20mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Rabeprazole",
        bn: "র্যাবিপ্রাজল"
      },

      strength: "20mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 8,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      gastric: 10,
      gerd: 10,
      acid_reflux: 10,
      ulcer: 9,
      heartburn: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause stomach upset, dizziness and weakness",
        bn: "পেট খারাপ, মাথা ঘোরা ও দুর্বলতা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: true,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "rabeprazole",
    "acid",
    "gastric",
    "gerd",
    "reflux",
    "ulcer"
  ],

  symptoms: {
    en: [
      "acidity",
      "burning sensation",
      "heartburn",
      "acid reflux"
    ],

    bn: [
      "অ্যাসিডিটি",
      "জ্বালাপোড়া",
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স"
    ]
  },

  diseases: {
    en: [
      "acid reflux",
      "gerd",
      "gastric",
      "ulcer"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "গ্যাস্ট্রিক",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "acid reflux",
      "gerd",
      "severe acidity",
      "ulcer"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "তীব্র অ্যাসিডিটি",
      "আলসার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "nausea",
        "abdominal pain"
      ],

      bn: [
        "মাথাব্যথা",
        "বমি ভাব",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "kidney issue",
        "low magnesium"
      ],

      bn: [
        "কিডনি সমস্যা",
        "ম্যাগনেসিয়াম কমে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Suppresses stomach acid secretion by inhibiting proton pumps",

    bn:
      "প্রোটন পাম্প বন্ধ করে পাকস্থলীর অ্যাসিড নিঃসরণ কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "20mg once daily before meal",
      bn: "খাবারের আগে দিনে ২০ মিগ্রা"
    },

    child: {
      en: "Only if prescribed by doctor",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "40mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০ মিগ্রা"
    }
  },

  onset: {
    en: "1 hour",
    bn: "১ ঘণ্টা"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "rabeprazole",
    "acid medicine",
    "gerd medicine",
    "ulcer medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Safe",
      bn: "নিরাপদ"
    },

    colorHint: "green",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Rablet",
    "Rabicip",
    "Rabemac",
    "Rabecare",
    "Rabefast",
    "Rabeplus",
    "Rabemax",
    "Rabefit",
    "Rabebest",
    "Rabeactive",
    "Rabeprime",
    "Rabepower",
    "Rabegold",
    "Rabeclear",
    "Raberel",
    "Rabefine",
    "Rabezin",
    "Rabepro",
    "Rabefast Plus",
    "Rabetop"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "reflux treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্সের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

  // ================= ANTACID (DIGENE TYPE) =================
{
  id: "antacid",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Antacid",
      bn: "অ্যান্টাসিড"
    },

    generic: {
      en: "Aluminium Hydroxide + Magnesium Hydroxide",
      bn: "অ্যালুমিনিয়াম হাইড্রোক্সাইড + ম্যাগনেসিয়াম হাইড্রোক্সাইড"
    }
  },

  type: {
    en: "double",
    bn: "ডাবল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "instant acid relief",
    bn: "তাৎক্ষণিক অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antacid",
      "anti-gas"
    ],

    bn: [
      "অ্যান্টাসিড",
      "গ্যাস কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Antacid",
    bn: "অ্যান্টাসিড"
  },

  category: {
    en: "syrup",
    bn: "সিরাপ"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "syrup",
      "tablet",
      "chewable tablet"
    ],

    bn: [
      "সিরাপ",
      "ট্যাবলেট",
      "চিবানোর ট্যাবলেট"
    ]
  },

  strengths: [
    "200mg",
    "400mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Aluminium Hydroxide",
        bn: "অ্যালুমিনিয়াম হাইড্রোক্সাইড"
      },

      strength: "200mg"
    },

    {
      ingredient: {
        en: "Magnesium Hydroxide",
        bn: "ম্যাগনেসিয়াম হাইড্রোক্সাইড"
      },

      strength: "200mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 5,
    safetyLevel: 9,

    severity: {
      en: "mild",
      bn: "হালকা"
    },

    score: {
      acidity: 9,
      gas: 8,
      bloating: 8,
      indigestion: 8,
      heartburn: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 3,
    liver: 1,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause constipation or diarrhea",
        bn: "কোষ্ঠকাঠিন্য বা ডায়রিয়া হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: true,
    breastfeeding: true,
    elderly: true,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "antacid",
    "gas",
    "acidity",
    "bloating",
    "indigestion"
  ],

  symptoms: {
    en: [
      "acidity",
      "gas",
      "bloating",
      "heartburn"
    ],

    bn: [
      "অ্যাসিডিটি",
      "গ্যাস",
      "পেট ফাঁপা",
      "বুক জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acidity",
      "gas",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিডিটি",
      "গ্যাস",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "quick acidity relief",
      "gas",
      "bloating",
      "indigestion"
    ],

    bn: [
      "দ্রুত অ্যাসিডিটি কমানো",
      "গ্যাস",
      "পেট ফাঁপা",
      "বদহজম"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "constipation",
        "diarrhea",
        "chalky taste"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "ডায়রিয়া",
        "মুখে চকজাতীয় স্বাদ"
      ]
    },

    serious: {
      en: [
        "electrolyte imbalance"
      ],

      bn: [
        "ইলেক্ট্রোলাইটের ভারসাম্যহীনতা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Neutralizes stomach acid quickly and relieves acidity symptoms",

    bn:
      "পাকস্থলীর অ্যাসিড দ্রুত নিরপেক্ষ করে অ্যাসিডিটির উপসর্গ কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10-20ml after meals and at bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ১০-২০ মি.লি."
    },

    child: {
      en: "Dose depends on age and doctor advice",
      bn: "বয়স ও ডাক্তারের পরামর্শ অনুযায়ী"
    },

    maxDaily: {
      en: "80ml/day",
      bn: "প্রতিদিন সর্বোচ্চ ৮০ মি.লি."
    }
  },

  onset: {
    en: "5-15 minutes",
    bn: "৫-১৫ মিনিট"
  },

  duration: {
    en: "2-4 hours",
    bn: "২-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "antacid",
    "gas medicine",
    "acidity syrup",
    "indigestion medicine",
    "গ্যাসের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Very Safe",
      bn: "খুব নিরাপদ"
    },

    colorHint: "green",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Digene",
    "Gelusil",
    "Mucaine",
    "Antacid Plus",
    "Acidfree",
    "Gasnil",
    "Antacare",
    "Antafast",
    "Antamax",
    "Antafit",
    "Antabest",
    "Antaactive",
    "Antaprime",
    "Antapower",
    "Antagold",
    "Antaclear",
    "Antarel",
    "Antafine",
    "Antazin",
    "Antapro"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid neutralization",
      "gas relief"
    ],

    bn: [
      "অ্যাসিড নিরপেক্ষ করা",
      "গ্যাস কমানো"
    ]
  },

  emergencyUse: false
},

  // ================= RANITIDINE =================
{
  id: "ranitidine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Ranitidine",
      bn: "রেনিটিডিন"
    },

    generic: {
      en: "Ranitidine",
      bn: "রেনিটিডিন"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "h2 blocker",
      "anti-ulcer"
    ],

    bn: [
      "এইচ২ ব্লকার",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "H2 Blocker",
    bn: "এইচ২ ব্লকার"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "syrup",
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "সিরাপ",
      "ইনজেকশন"
    ]
  },

  strengths: [
    "75mg",
    "150mg",
    "300mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Ranitidine",
        bn: "রেনিটিডিন"
      },

      strength: "150mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 6,
    safetyLevel: 6,

    severity: {
      en: "medium",
      bn: "মাঝারি"
    },

    score: {
      acidity: 8,
      gastric: 8,
      ulcer: 7,
      acid_reflux: 7,
      heartburn: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause confusion, dizziness and irregular heartbeat",
        bn: "বিভ্রান্তি, মাথা ঘোরা ও অনিয়মিত হৃদস্পন্দন হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: true,
    breastfeeding: true,
    elderly: true,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "ranitidine",
    "acid",
    "gastric",
    "heartburn",
    "ulcer"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "stomach burning"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "পেট জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acid reflux",
      "ulcer"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "acidity",
      "heartburn",
      "ulcer"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "আলসার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "constipation",
        "dizziness"
      ],

      bn: [
        "মাথাব্যথা",
        "কোষ্ঠকাঠিন্য",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "confusion",
        "liver issue"
      ],

      bn: [
        "বিভ্রান্তি",
        "লিভারের সমস্যা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Reduces stomach acid by blocking histamine H2 receptors",

    bn:
      "হিস্টামিন এইচ২ রিসেপ্টর বন্ধ করে পাকস্থলীর অ্যাসিড কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "150mg once or twice daily",
      bn: "দিনে ১-২ বার ১৫০ মিগ্রা"
    },

    child: {
      en: "Dose depends on body weight",
      bn: "ডোজ শরীরের ওজন অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "300mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৩০০ মিগ্রা"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "8-12 hours",
    bn: "৮-১২ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "ranitidine",
    "acid medicine",
    "ulcer medicine",
    "heartburn medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Safe",
      bn: "নিরাপদ"
    },

    colorHint: "yellow",

    commonUse: false
  },

  // ================= BRANDS =================
  brands: [
    "Rantac",
    "Zinetac",
    "Aciloc",
    "Ranitac",
    "Ranfast",
    "Ranplus",
    "Ranmax",
    "Ranfit",
    "Ranbest",
    "Ranactive",
    "Ranprime",
    "Ranpower",
    "Rangold",
    "Ranclear",
    "Ranrel",
    "Ranfine",
    "Ranzin",
    "Ranpro",
    "Ranfast Plus",
    "Rantop"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "ulcer treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "আলসারের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 FAMOTIDINE (H2 BLOCKER)

{
  id: "famotidine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Famotidine",
      bn: "ফ্যামোটিডিন"
    },

    generic: {
      en: "Famotidine",
      bn: "ফ্যামোটিডিন"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "h2 blocker",
      "anti-ulcer"
    ],

    bn: [
      "এইচ২ ব্লকার",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "H2 Blocker",
    bn: "এইচ২ ব্লকার"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "syrup",
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "সিরাপ",
      "ইনজেকশন"
    ]
  },

  strengths: [
    "20mg",
    "40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Famotidine",
        bn: "ফ্যামোটিডিন"
      },

      strength: "20mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 7,
    safetyLevel: 8,

    severity: {
      en: "medium",
      bn: "মাঝারি"
    },

    score: {
      acidity: 8,
      gastric: 8,
      ulcer: 8,
      acid_reflux: 7,
      heartburn: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause confusion and dizziness",
        bn: "বিভ্রান্তি ও মাথা ঘোরা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: true,
    breastfeeding: true,
    elderly: true,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "famotidine",
    "acid",
    "gastric",
    "heartburn",
    "ulcer"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "stomach burning"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "পেট জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acid reflux",
      "ulcer",
      "gerd"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "আলসার",
      "জিইআরডি"
    ]
  },

  bestFor: {
    en: [
      "heartburn",
      "night acidity",
      "ulcer"
    ],

    bn: [
      "বুক জ্বালা",
      "রাতের অ্যাসিডিটি",
      "আলসার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "dizziness",
        "constipation"
      ],

      bn: [
        "মাথাব্যথা",
        "মাথা ঘোরা",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "confusion",
        "irregular heartbeat"
      ],

      bn: [
        "বিভ্রান্তি",
        "অনিয়মিত হৃদস্পন্দন"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Reduces stomach acid by blocking histamine H2 receptors",

    bn:
      "হিস্টামিন এইচ২ রিসেপ্টর বন্ধ করে পাকস্থলীর অ্যাসিড কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "20mg once or twice daily",
      bn: "দিনে ১-২ বার ২০ মিগ্রা"
    },

    child: {
      en: "Dose depends on body weight",
      bn: "ডোজ শরীরের ওজন অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "80mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৮০ মিগ্রা"
    }
  },

  onset: {
    en: "1 hour",
    bn: "১ ঘণ্টা"
  },

  duration: {
    en: "10-12 hours",
    bn: "১০-১২ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "famotidine",
    "acid medicine",
    "heartburn medicine",
    "ulcer medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Pepcid",
    "Famocid",
    "Famodin",
    "Famotac",
    "Famorel",
    "Famocare",
    "Famoplus",
    "Famogold"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "ulcer treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "আলসারের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 LANSOPRAZOLE (PPI)

{
  id: "lansoprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Lansoprazole",
      bn: "ল্যান্সোপ্রাজল"
    },

    generic: {
      en: "Lansoprazole",
      bn: "ল্যান্সোপ্রাজল"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-ulcer"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Proton Pump Inhibitor",
    bn: "প্রোটন পাম্প ইনহিবিটর"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "capsule",
      "tablet",
      "orally disintegrating tablet"
    ],

    bn: [
      "ক্যাপসুল",
      "ট্যাবলেট",
      "মুখে গলে যায় এমন ট্যাবলেট"
    ]
  },

  strengths: [
    "15mg",
    "30mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Lansoprazole",
        bn: "ল্যান্সোপ্রাজল"
      },

      strength: "30mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 8,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      acidity: 10,
      gastric: 10,
      acid_reflux: 9,
      gerd: 9,
      ulcer: 8,
      heartburn: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause nausea, dizziness and stomach upset",
        bn: "বমি ভাব, মাথা ঘোরা ও পেট খারাপ হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: true,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "lansoprazole",
    "acid",
    "gastric",
    "gerd",
    "ulcer"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "acid reflux",
      "stomach burning"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acid reflux",
      "gerd",
      "ulcer"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "acid reflux",
      "gerd",
      "severe acidity",
      "ulcer"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "তীব্র অ্যাসিডিটি",
      "আলসার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "nausea",
        "diarrhea"
      ],

      bn: [
        "মাথাব্যথা",
        "বমি ভাব",
        "ডায়রিয়া"
      ]
    },

    serious: {
      en: [
        "kidney issue",
        "vitamin B12 deficiency"
      ],

      bn: [
        "কিডনি সমস্যা",
        "ভিটামিন বি১২ ঘাটতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks proton pumps in the stomach to reduce acid production",

    bn:
      "পাকস্থলীর প্রোটন পাম্প বন্ধ করে অ্যাসিড তৈরি কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "15mg - 30mg once daily before meal",
      bn: "খাবারের আগে দিনে ১৫-৩০ মিগ্রা"
    },

    child: {
      en: "Only if prescribed by doctor",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "60mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৬০ মিগ্রা"
    }
  },

  onset: {
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "lansoprazole",
    "acid medicine",
    "gerd medicine",
    "ulcer medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Prevacid",
    "Lanzol",
    "Lansocid",
    "Lansodin",
    "Lansofast",
    "Lansocare",
    "Lansoplus",
    "Lansogold"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "reflux treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্সের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 SUCRALFATE (ULCER PROTECTIVE MEDICINE)

{
  id: "sucralfate",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Sucralfate",
      bn: "সুক্রালফেট"
    },

    generic: {
      en: "Sucralfate",
      bn: "সুক্রালফেট"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "ulcer protector",
    bn: "আলসার সুরক্ষাকারী ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "ulcer protective agent",
      "mucosal protectant"
    ],

    bn: [
      "আলসার সুরক্ষাকারী ওষুধ",
      "মিউকোসাল প্রটেক্ট্যান্ট"
    ]
  },

  class: {
    en: "Ulcer Protective Agent",
    bn: "আলসার সুরক্ষাকারী ওষুধ"
  },

  category: {
    en: "syrup",
    bn: "সিরাপ"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "syrup",
      "suspension"
    ],

    bn: [
      "ট্যাবলেট",
      "সিরাপ",
      "সাসপেনশন"
    ]
  },

  strengths: [
    "500mg",
    "1g"
  ],

  composition: [
    {
      ingredient: {
        en: "Sucralfate",
        bn: "সুক্রালফেট"
      },

      strength: "1g"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 7,
    safetyLevel: 9,

    severity: {
      en: "medium",
      bn: "মাঝারি"
    },

    score: {
      ulcer: 10,
      gastric: 8,
      acidity: 7,
      stomach_burning: 8,
      gastritis: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 0,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause constipation and dry mouth",
        bn: "কোষ্ঠকাঠিন্য ও মুখ শুকিয়ে যেতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: true,
    breastfeeding: true,
    elderly: true,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "sucralfate",
    "ulcer",
    "gastric",
    "gastritis",
    "acidity"
  ],

  symptoms: {
    en: [
      "stomach burning",
      "acidity",
      "ulcer pain",
      "gastric pain"
    ],

    bn: [
      "পেট জ্বালা",
      "অ্যাসিডিটি",
      "আলসারের ব্যথা",
      "গ্যাস্ট্রিক ব্যথা"
    ]
  },

  diseases: {
    en: [
      "ulcer",
      "gastritis",
      "gastric",
      "acid irritation"
    ],

    bn: [
      "আলসার",
      "গ্যাস্ট্রাইটিস",
      "গ্যাস্ট্রিক",
      "অ্যাসিডের জ্বালা"
    ]
  },

  bestFor: {
    en: [
      "ulcer",
      "gastritis",
      "stomach lining protection"
    ],

    bn: [
      "আলসার",
      "গ্যাস্ট্রাইটিস",
      "পাকস্থলীর আবরণ সুরক্ষা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "constipation",
        "dry mouth",
        "nausea"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "মুখ শুকানো",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "intestinal blockage"
      ],

      bn: [
        "আন্ত্রিক বাধা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Forms a protective coating over ulcers and damaged stomach lining",

    bn:
      "আলসার ও পাকস্থলীর ক্ষতিগ্রস্ত স্থানের উপর সুরক্ষামূলক আবরণ তৈরি করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1g 2-4 times daily before meals",
      bn: "খাবারের আগে দিনে ২-৪ বার ১ গ্রাম"
    },

    child: {
      en: "Only if prescribed by doctor",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "8g/day",
      bn: "প্রতিদিন সর্বোচ্চ ৮ গ্রাম"
    }
  },

  onset: {
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "6 hours",
    bn: "৬ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "sucralfate",
    "ulcer medicine",
    "gastritis medicine",
    "stomach protection medicine",
    "আলসারের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Carafate",
    "Sucrafil",
    "Sucrate",
    "Sucrol",
    "Sucrafil",
    "Ulcrafate",
    "Sucrogel",
    "Sucracid"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "ulcer protection",
      "stomach lining protection"
    ],

    bn: [
      "আলসার সুরক্ষা",
      "পাকস্থলীর আবরণ সুরক্ষা"
    ]
  },

  emergencyUse: false
},

// 🔥 DOMPERIDONE (PROKINETIC + ANTI-NAUSEA)

{
  id: "domperidone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Domperidone",
      bn: "ডমপেরিডন"
    },

    generic: {
      en: "Domperidone",
      bn: "ডমপেরিডন"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "prokinetic",
    bn: "খাবার হজম চলাচল বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "prokinetic agent",
      "antiemetic"
    ],

    bn: [
      "প্রোকাইনেটিক ওষুধ",
      "বমি প্রতিরোধক"
    ]
  },

  class: {
    en: "Dopamine Antagonist",
    bn: "ডোপামিন অ্যান্টাগোনিস্ট"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "syrup",
      "dispersible tablet"
    ],

    bn: [
      "ট্যাবলেট",
      "সিরাপ",
      "পানিতে গলে যায় এমন ট্যাবলেট"
    ]
  },

  strengths: [
    "5mg",
    "10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Domperidone",
        bn: "ডমপেরিডন"
      },

      strength: "10mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 7,
    safetyLevel: 6,

    severity: {
      en: "medium",
      bn: "মাঝারি"
    },

    score: {
      nausea: 10,
      vomiting: 10,
      bloating: 8,
      indigestion: 8,
      gastric: 7,
      reflux: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 2,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause irregular heartbeat and severe dizziness",
        bn: "অনিয়মিত হৃদস্পন্দন ও তীব্র মাথা ঘোরা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "domperidone",
    "vomiting",
    "nausea",
    "gastric",
    "bloating"
  ],

  symptoms: {
    en: [
      "nausea",
      "vomiting",
      "bloating",
      "fullness"
    ],

    bn: [
      "বমি ভাব",
      "বমি",
      "পেট ফাঁপা",
      "পেট ভরা ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "indigestion",
      "gastric",
      "acid reflux",
      "gastroparesis"
    ],

    bn: [
      "বদহজম",
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রোপেরেসিস"
    ]
  },

  bestFor: {
    en: [
      "vomiting",
      "nausea",
      "bloating",
      "slow digestion"
    ],

    bn: [
      "বমি",
      "বমি ভাব",
      "পেট ফাঁপা",
      "ধীরে হজম হওয়া"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dry mouth",
        "headache",
        "stomach cramps"
      ],

      bn: [
        "মুখ শুকানো",
        "মাথাব্যথা",
        "পেটে মুচড়ানো ব্যথা"
      ]
    },

    serious: {
      en: [
        "irregular heartbeat",
        "high prolactin"
      ],

      bn: [
        "অনিয়মিত হৃদস্পন্দন",
        "প্রোল্যাক্টিন বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Improves stomach movement and blocks nausea signals in the brain",

    bn:
      "পাকস্থলীর চলাচল বাড়ায় এবং মস্তিষ্কের বমি সিগন্যাল বন্ধ করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10mg before meals 2-3 times daily",
      bn: "খাবারের আগে দিনে ২-৩ বার ১০ মিগ্রা"
    },

    child: {
      en: "Dose depends on body weight",
      bn: "ডোজ শরীরের ওজন অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "30mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৩০ মিগ্রা"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "6-8 hours",
    bn: "৬-৮ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "domperidone",
    "vomiting medicine",
    "nausea medicine",
    "gas medicine",
    "বমির ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Motilium",
    "Domstal",
    "Vomistop",
    "Domride",
    "Domnil",
    "Domcare",
    "Domfast",
    "Domplus"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "anti-vomiting",
      "improve digestion"
    ],

    bn: [
      "বমি কমানো",
      "হজমের গতি বাড়ানো"
    ]
  },

  emergencyUse: false
},


// 🔥 ITOPRIDE (PROKINETIC MEDICINE)

{
  id: "itopride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Itopride",
      bn: "ইটোপ্রাইড"
    },

    generic: {
      en: "Itopride Hydrochloride",
      bn: "ইটোপ্রাইড হাইড্রোক্লোরাইড"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "prokinetic",
    bn: "হজমের গতি বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "prokinetic agent",
      "anti-dyspeptic"
    ],

    bn: [
      "প্রোকাইনেটিক ওষুধ",
      "বদহজম কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Dopamine D2 Antagonist",
    bn: "ডোপামিন D2 অ্যান্টাগোনিস্ট"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "capsule"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল"
    ]
  },

  strengths: [
    "50mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Itopride Hydrochloride",
        bn: "ইটোপ্রাইড হাইড্রোক্লোরাইড"
      },

      strength: "50mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 7,
    safetyLevel: 7,

    severity: {
      en: "medium",
      bn: "মাঝারি"
    },

    score: {
      indigestion: 10,
      bloating: 9,
      gastric: 8,
      reflux: 8,
      nausea: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 2,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause abdominal cramps and dizziness",
        bn: "পেটে মুচড়ানো ব্যথা ও মাথা ঘোরা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "itopride",
    "gastric",
    "indigestion",
    "bloating",
    "reflux"
  ],

  symptoms: {
    en: [
      "bloating",
      "fullness",
      "indigestion",
      "nausea"
    ],

    bn: [
      "পেট ফাঁপা",
      "পেট ভরা লাগা",
      "বদহজম",
      "বমি ভাব"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gastric",
      "acid reflux",
      "gastroparesis"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রোপেরেসিস"
    ]
  },

  bestFor: {
    en: [
      "indigestion",
      "bloating",
      "slow stomach movement"
    ],

    bn: [
      "বদহজম",
      "পেট ফাঁপা",
      "ধীরে পাকস্থলী চলাচল"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "headache",
        "abdominal pain"
      ],

      bn: [
        "ডায়রিয়া",
        "মাথাব্যথা",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "high prolactin",
        "allergic reaction"
      ],

      bn: [
        "প্রোল্যাক্টিন বেড়ে যাওয়া",
        "অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Improves stomach and intestinal movement to aid digestion",

    bn:
      "পাকস্থলী ও অন্ত্রের চলাচল বাড়িয়ে হজমে সাহায্য করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "50mg three times daily before meals",
      bn: "খাবারের আগে দিনে ৩ বার ৫০ মিগ্রা"
    },

    child: {
      en: "Not usually recommended",
      bn: "সাধারণত শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "150mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১৫০ মিগ্রা"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "6-8 hours",
    bn: "৬-৮ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "itopride",
    "indigestion medicine",
    "bloating medicine",
    "gastric medicine",
    "বদহজমের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Ganaton",
    "Itopra",
    "Itoride",
    "Itomed",
    "Itocid",
    "Itogut",
    "Itomac",
    "Itosped"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "improve digestion",
      "reduce bloating"
    ],

    bn: [
      "হজম উন্নত করা",
      "পেট ফাঁপা কমানো"
    ]
  },

  emergencyUse: false
},
// 🔥 DEXLANSOPRAZOLE (ADVANCED PPI)

{
  id: "dexlansoprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Dexlansoprazole",
      bn: "ডেক্সল্যান্সোপ্রাজল"
    },

    generic: {
      en: "Dexlansoprazole",
      bn: "ডেক্সল্যান্সোপ্রাজল"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "acid reducer",
    bn: "অ্যাসিড কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-ulcer"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Proton Pump Inhibitor",
    bn: "প্রোটন পাম্প ইনহিবিটর"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "capsule",
      "delayed release capsule"
    ],

    bn: [
      "ক্যাপসুল",
      "ডিলেইড রিলিজ ক্যাপসুল"
    ]
  },

  strengths: [
    "30mg",
    "60mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Dexlansoprazole",
        bn: "ডেক্সল্যান্সোপ্রাজল"
      },

      strength: "60mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 8,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      acid_reflux: 10,
      gerd: 10,
      heartburn: 10,
      ulcer: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause stomach upset, headache and dizziness",
        bn: "পেট খারাপ, মাথাব্যথা ও মাথা ঘোরা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "dexlansoprazole",
    "acid",
    "gerd",
    "reflux",
    "heartburn"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "stomach burning",
      "chest burning"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট জ্বালা",
      "বুকে জ্বালাপোড়া"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "erosive esophagitis",
      "ulcer"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "ইরোসিভ ইসোফেজাইটিস",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "severe acid reflux",
      "night heartburn",
      "gerd"
    ],

    bn: [
      "তীব্র অ্যাসিড রিফ্লাক্স",
      "রাতের বুক জ্বালা",
      "জিইআরডি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "headache",
        "abdominal pain"
      ],

      bn: [
        "ডায়রিয়া",
        "মাথাব্যথা",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "kidney issue",
        "vitamin deficiency"
      ],

      bn: [
        "কিডনি সমস্যা",
        "ভিটামিনের ঘাটতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Strongly suppresses stomach acid with dual delayed-release action",

    bn:
      "ডুয়াল ডিলেইড রিলিজ পদ্ধতিতে পাকস্থলীর অ্যাসিড শক্তভাবে কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "30mg - 60mg once daily",
      bn: "দিনে ৩০-৬০ মিগ্রা একবার"
    },

    child: {
      en: "Not usually recommended",
      bn: "সাধারণত শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "60mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৬০ মিগ্রা"
    }
  },

  onset: {
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "dexlansoprazole",
    "acid reflux medicine",
    "gerd medicine",
    "heartburn medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Dexilant",
    "Dexlan",
    "Dexpro",
    "Dexcare",
    "Dexcid",
    "Dexium",
    "Dexogut",
    "Dexopra"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "reflux treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্সের চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 MAGALDRATE (ANTACID + ANTI-GAS)

{
  id: "magaldrate",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Magaldrate",
      bn: "ম্যাগালড্রেট"
    },

    generic: {
      en: "Magaldrate",
      bn: "ম্যাগালড্রেট"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "antacid",
    bn: "অ্যান্টাসিড"
  },

  therapeuticCategory: {
    en: [
      "antacid",
      "acid neutralizer"
    ],

    bn: [
      "অ্যান্টাসিড",
      "অ্যাসিড নিরপেক্ষকারী ওষুধ"
    ]
  },

  class: {
    en: "Antacid",
    bn: "অ্যান্টাসিড"
  },

  category: {
    en: "suspension",
    bn: "সাসপেনশন"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "suspension",
      "tablet",
      "chewable tablet"
    ],

    bn: [
      "সাসপেনশন",
      "ট্যাবলেট",
      "চিবানোর ট্যাবলেট"
    ]
  },

  strengths: [
    "400mg",
    "540mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Magaldrate",
        bn: "ম্যাগালড্রেট"
      },

      strength: "540mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 6,
    safetyLevel: 9,

    severity: {
      en: "mild",
      bn: "হালকা"
    },

    score: {
      acidity: 10,
      heartburn: 9,
      gas: 8,
      indigestion: 8,
      bloating: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 0,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause diarrhea or constipation",
        bn: "ডায়রিয়া বা কোষ্ঠকাঠিন্য হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: true,
    breastfeeding: true,
    elderly: true,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "magaldrate",
    "antacid",
    "acid",
    "gas",
    "heartburn"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "gas",
      "stomach discomfort"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "গ্যাস",
      "পেটের অস্বস্তি"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acidity",
      "indigestion",
      "acid irritation"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিডিটি",
      "বদহজম",
      "অ্যাসিডের জ্বালা"
    ]
  },

  bestFor: {
    en: [
      "quick acidity relief",
      "heartburn",
      "indigestion"
    ],

    bn: [
      "দ্রুত অ্যাসিডিটি কমানো",
      "বুক জ্বালা",
      "বদহজম"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "constipation",
        "chalky taste"
      ],

      bn: [
        "ডায়রিয়া",
        "কোষ্ঠকাঠিন্য",
        "চকের মতো স্বাদ"
      ]
    },

    serious: {
      en: [
        "electrolyte imbalance"
      ],

      bn: [
        "ইলেক্ট্রোলাইটের ভারসাম্যহীনতা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Neutralizes excess stomach acid and relieves gastric irritation",

    bn:
      "অতিরিক্ত পাকস্থলীর অ্যাসিড নিরপেক্ষ করে গ্যাস্ট্রিকের জ্বালা কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10ml or 1 tablet after meals and bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ১০ মি.লি. বা ১ ট্যাবলেট"
    },

    child: {
      en: "Dose depends on age",
      bn: "ডোজ বয়স অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "80ml/day",
      bn: "প্রতিদিন সর্বোচ্চ ৮০ মি.লি."
    }
  },

  onset: {
    en: "5-15 minutes",
    bn: "৫-১৫ মিনিট"
  },

  duration: {
    en: "2-4 hours",
    bn: "২-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "magaldrate",
    "antacid medicine",
    "acid medicine",
    "gas medicine",
    "গ্যাসের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Riopan",
    "Magacid",
    "Maganta",
    "Magwell",
    "Maggel",
    "Magcare",
    "Magrel",
    "Magfree"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid neutralization",
      "gastric relief"
    ],

    bn: [
      "অ্যাসিড নিরপেক্ষ করা",
      "গ্যাস্ট্রিকের উপশম"
    ]
  },

  emergencyUse: false
},



// ADD OTHER FILE HERE
   
   ...GASTRIC2,
   ...GASTRIC3,
   ...GASTRIC4,
   ...GASTRIC5,
   ...GASTRIC6
   
];