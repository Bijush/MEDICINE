
import { BASE_GASTRIC }

from "../../js/shared/baseMedicines.js";

import { t }

from "../../js/shared/utils.js";


export const GASTRIC6 = [
  // 🔥 SIMETHICONE
// 🔥 VERY COMMON ANTI-GAS MEDICINE

{
  ...BASE_GASTRIC,
     id: "simethicone",

  // ================= BASIC =================
  names: {
    primary: t(
      "Simethicone",
      "সিমেথিকোন"
      ),
    generic: t(
     "Simethicone",
      "সিমেথিকোন"
    )
    
  },
  
  subgroup: {
    en: "anti-gas medicine",
    bn: "গ্যাস কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antiflatulent",
      "anti-gas"
    ],

    bn: [
      "গ্যাস কমানোর ওষুধ",
      "অ্যান্টিফ্ল্যাটুলেন্ট"
    ]
  },

  class: {
    en: "Antiflatulent",
    bn: "অ্যান্টিফ্ল্যাটুলেন্ট"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },
  
  dosageForms: {
    en: [
      "tablet",
      "chewable tablet",
      "drops",
      "syrup"
    ],

    bn: [
      "ট্যাবলেট",
      "চিবানোর ট্যাবলেট",
      "ড্রপ",
      "সিরাপ"
    ]
  },

  strengths: [
    "40mg",
    "80mg",
    "125mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "80mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 6,
    safetyLevel: 10,

    severity: {
      en: "mild",
      bn: "হালকা"
    },

    score: {
      gas: 10,
      bloating: 10,
      abdominal_pressure: 9,
      indigestion: 8,
      burping: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 0,
    liver: 0,

    overdose: {
      level: {
        en: "very-low",
        bn: "খুব কম"
      },

      effect: {
        en: "Usually very safe even in higher doses",
        bn: "সাধারণত বেশি খেলেও তুলনামূলক নিরাপদ"
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
    "simethicone",
    "gas",
    "bloating",
    "flatulence",
    "burping"
  ],

  symptoms: {
    en: [
      "gas",
      "bloating",
      "burping",
      "abdominal pressure",
      "stomach fullness"
    ],

    bn: [
      "গ্যাস",
      "পেট ফাঁপা",
      "ঢেকুর",
      "পেটে চাপ লাগা",
      "পেট ভরা ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gastric gas",
      "flatulence",
      "indigestion",
      "bloating"
    ],

    bn: [
      "গ্যাস্ট্রিক গ্যাস",
      "অতিরিক্ত গ্যাস",
      "বদহজম",
      "পেট ফাঁপা"
    ]
  },

  bestFor: {
    en: [
      "gas relief",
      "bloating",
      "burping",
      "abdominal discomfort"
    ],

    bn: [
      "গ্যাস কমানো",
      "পেট ফাঁপা কমানো",
      "ঢেকুর কমানো",
      "পেটের অস্বস্তি কমানো"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "mild nausea",
        "loose stool"
      ],

      bn: [
        "হালকা বমি ভাব",
        "পাতলা পায়খানা"
      ]
    },

    serious: {
      en: [
        "rare allergic reaction"
      ],

      bn: [
        "বিরল অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Breaks down gas bubbles in the stomach and intestine for easier gas release",

    bn:
      "পাকস্থলী ও অন্ত্রের গ্যাসের বুদবুদ ভেঙে সহজে গ্যাস বের হতে সাহায্য করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "40mg-125mg after meals and at bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ৪০-১২৫ মি.গ্রা."
    },

    child: {
      en: "Dose depends on age",
      bn: "ডোজ বয়স অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "500mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৫০০ মি.গ্রা."
    }
  },

  onset: {
    en: "15-30 minutes",
    bn: "১৫-৩০ মিনিট"
  },

  duration: {
    en: "3-4 hours",
    bn: "৩-৪ ঘণ্টা"
  },

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    bloating: {
      en:
        "Feeling of abdominal fullness or swelling due to trapped gas",

      bn:
        "গ্যাস জমে পেট ফুলে বা ভারী লাগা"
    },

    flatulence: {
      en:
        "Excess gas formation inside the intestine",

      bn:
        "অন্ত্রে অতিরিক্ত গ্যাস তৈরি হওয়া"
    },

    burping: {
      en:
        "Release of gas through the mouth",

      bn:
        "মুখ দিয়ে গ্যাস বের হওয়া বা ঢেকুর"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "simethicone",
    "gas medicine",
    "bloating medicine",
    "anti gas tablet",
    "গ্যাসের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Fast Gas Relief",
      bn: "দ্রুত গ্যাস উপশম"
    },

    colorHint: "green",

    commonUse: true,

    fastRelief: true,

    prescriptionStrength: {
      en: "Mild",
      bn: "হালকা"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Gas-X",
    "Flatuna",
    "Disflatyl",
    "Antigas",
    "Gasnil",
    "Flatucare",
    "Gasfree",
    "Mylanta Gas"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "gas relief",
      "bloating reduction"
    ],

    bn: [
      "গ্যাস কমানো",
      "পেট ফাঁপা কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 LACTULOSE
// 🔥 VERY IMPORTANT CONSTIPATION RELIEF MEDICINE

{
  id: "lactulose",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Lactulose",
      bn: "ল্যাকটুলোজ"
    },

    generic: {
      en: "Lactulose",
      bn: "ল্যাকটুলোজ"
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
    en: "osmotic laxative",
    bn: "পায়খানা নরম করার ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "laxative",
      "constipation medicine"
    ],

    bn: [
      "ল্যাক্সেটিভ",
      "কোষ্ঠকাঠিন্যের ওষুধ"
    ]
  },

  class: {
    en: "Osmotic Laxative",
    bn: "অস্মোটিক ল্যাক্সেটিভ"
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
      "solution"
    ],

    bn: [
      "সিরাপ",
      "সলিউশন"
    ]
  },

  strengths: [
    "10gm/15ml"
  ],

  composition: [
    {
      ingredient: {
        en: "Lactulose",
        bn: "ল্যাকটুলোজ"
      },

      strength: "10gm/15ml"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 7,
    safetyLevel: 9,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      constipation: 10,
      hard_stool: 10,
      bowel_movement: 9,
      hemorrhoid_constipation: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 1,
    kidney: 0,
    liver: 0,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause diarrhea, dehydration and abdominal cramps",
        bn: "ডায়রিয়া, পানিশূন্যতা ও পেটে মোচড় হতে পারে"
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
    "lactulose",
    "constipation",
    "hard stool",
    "bowel movement",
    "laxative"
  ],

  symptoms: {
    en: [
      "hard stool",
      "difficulty passing stool",
      "constipation",
      "straining during stool"
    ],

    bn: [
      "শক্ত পায়খানা",
      "পায়খানা করতে কষ্ট হওয়া",
      "কোষ্ঠকাঠিন্য",
      "জোর দিয়ে পায়খানা করা"
    ]
  },

  diseases: {
    en: [
      "constipation",
      "chronic constipation",
      "hemorrhoids",
      "hepatic encephalopathy"
    ],

    bn: [
      "কোষ্ঠকাঠিন্য",
      "দীর্ঘমেয়াদি কোষ্ঠকাঠিন্য",
      "পাইলস",
      "হেপাটিক এনসেফালোপ্যাথি"
    ]
  },

  bestFor: {
    en: [
      "hard stool",
      "chronic constipation",
      "safe bowel softening"
    ],

    bn: [
      "শক্ত পায়খানা",
      "দীর্ঘমেয়াদি কোষ্ঠকাঠিন্য",
      "নিরাপদে পায়খানা নরম করা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "gas",
        "bloating",
        "diarrhea",
        "abdominal cramps"
      ],

      bn: [
        "গ্যাস",
        "পেট ফাঁপা",
        "ডায়রিয়া",
        "পেটে মোচড়"
      ]
    },

    serious: {
      en: [
        "dehydration",
        "electrolyte imbalance"
      ],

      bn: [
        "পানিশূন্যতা",
        "ইলেক্ট্রোলাইটের ভারসাম্যহীনতা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Draws water into the intestine and softens stool for easier bowel movement",

    bn:
      "অন্ত্রে পানি টেনে এনে পায়খানা নরম করে সহজে বের হতে সাহায্য করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "15-30ml daily or as prescribed",
      bn: "প্রতিদিন ১৫-৩০ মি.লি. বা ডাক্তারের পরামর্শ অনুযায়ী"
    },

    child: {
      en: "Dose depends on age and doctor advice",
      bn: "বয়স ও ডাক্তারের পরামর্শ অনুযায়ী"
    },

    maxDaily: {
      en: "Use only as needed",
      bn: "প্রয়োজন অনুযায়ী ব্যবহার করুন"
    }
  },

  onset: {
    en: "24-48 hours",
    bn: "২৪-৪৮ ঘণ্টা"
  },

  duration: {
    en: "Depends on dose",
    bn: "ডোজ অনুযায়ী"
  },

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    constipation: {
      en:
        "Difficulty passing stool or infrequent bowel movement",

      bn:
        "পায়খানা করতে কষ্ট হওয়া বা কম হওয়া"
    },

    hardStool: {
      en:
        "Dry and hard stool that is painful to pass",

      bn:
        "শুকনো ও শক্ত পায়খানা যা বের করতে কষ্ট হয়"
    },

    dehydration: {
      en:
        "Loss of excess water from the body",

      bn:
        "শরীর থেকে অতিরিক্ত পানি কমে যাওয়া"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "lactulose",
    "constipation syrup",
    "hard stool medicine",
    "laxative syrup",
    "কোষ্ঠকাঠিন্যের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Safe Constipation Relief",
      bn: "নিরাপদ কোষ্ঠকাঠিন্য উপশম"
    },

    colorHint: "orange",

    commonUse: true,

    bowelSoftener: true,

    prescriptionStrength: {
      en: "Moderate",
      bn: "মাঝারি"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Duphalac",
    "Lacitol",
    "Laxitol",
    "Lactu",
    "Softlac",
    "Lactufree",
    "Constilac",
    "Lactolax"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "constipation relief",
      "bowel softening"
    ],

    bn: [
      "কোষ্ঠকাঠিন্য কমানো",
      "পায়খানা নরম করা"
    ]
  },

  emergencyUse: false
},

// 🔥 ONDANSETRON
// 🔥 STRONG ANTI-VOMITING MEDICINE

{
  id: "ondansetron",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Ondansetron",
      bn: "অন্ডানসেট্রন"
    },

    generic: {
      en: "Ondansetron Hydrochloride",
      bn: "অন্ডানসেট্রন হাইড্রোক্লোরাইড"
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
    en: "antiemetic",
    bn: "বমি প্রতিরোধক ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antiemetic",
      "anti-nausea"
    ],

    bn: [
      "বমি প্রতিরোধক",
      "বমি ভাব কমানোর ওষুধ"
    ]
  },

  class: {
    en: "5-HT3 Receptor Antagonist",
    bn: "৫-এইচটি৩ রিসেপ্টর অ্যান্টাগোনিস্ট"
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
      "orally disintegrating tablet",
      "syrup",
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "মুখে গলে যায় এমন ট্যাবলেট",
      "সিরাপ",
      "ইনজেকশন"
    ]
  },

  strengths: [
    "4mg",
    "8mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Ondansetron",
        bn: "অন্ডানসেট্রন"
      },

      strength: "4mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 7,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      vomiting: 10,
      nausea: 10,
      gastric_upset: 8,
      motion_sickness: 6
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 2,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause irregular heartbeat, dizziness and severe constipation",
        bn: "অনিয়মিত হৃদস্পন্দন, মাথা ঘোরা ও তীব্র কোষ্ঠকাঠিন্য হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "ondansetron",
    "vomiting",
    "nausea",
    "antiemetic",
    "gastric upset"
  ],

  symptoms: {
    en: [
      "vomiting",
      "nausea",
      "stomach upset",
      "feeling sick"
    ],

    bn: [
      "বমি",
      "বমি ভাব",
      "পেট খারাপ",
      "অসুস্থ লাগা"
    ]
  },

  diseases: {
    en: [
      "gastroenteritis",
      "food poisoning",
      "drug induced vomiting",
      "motion sickness"
    ],

    bn: [
      "গ্যাস্ট্রোএন্টারাইটিস",
      "ফুড পয়জনিং",
      "ওষুধজনিত বমি",
      "মোশন সিকনেস"
    ]
  },

  bestFor: {
    en: [
      "severe vomiting",
      "persistent nausea",
      "gastric vomiting"
    ],

    bn: [
      "তীব্র বমি",
      "বারবার বমি ভাব",
      "গ্যাস্ট্রিকের বমি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "constipation",
        "dizziness",
        "fatigue"
      ],

      bn: [
        "মাথাব্যথা",
        "কোষ্ঠকাঠিন্য",
        "মাথা ঘোরা",
        "দুর্বলতা"
      ]
    },

    serious: {
      en: [
        "arrhythmia",
        "serotonin syndrome",
        "allergic reaction"
      ],

      bn: [
        "হৃদস্পন্দনের সমস্যা",
        "সেরোটোনিন সিনড্রোম",
        "অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks serotonin signals in the brain that trigger nausea and vomiting",

    bn:
      "মস্তিষ্কের বমি সিগন্যাল বন্ধ করে বমি ও বমি ভাব কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "4mg-8mg as prescribed",
      bn: "৪-৮ মি.গ্রা. ডাক্তারের পরামর্শ অনুযায়ী"
    },

    child: {
      en: "Dose depends on body weight",
      bn: "ডোজ ওজন অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "24mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২৪ মি.গ্রা."
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

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    nausea: {
      en:
        "Feeling like vomiting or sickness in the stomach",

      bn:
        "বমি আসার মতো অনুভূতি"
    },

    antiemetic: {
      en:
        "Medicine used to prevent vomiting",

      bn:
        "বমি প্রতিরোধে ব্যবহৃত ওষুধ"
    },

    arrhythmia: {
      en:
        "Abnormal or irregular heartbeat",

      bn:
        "অনিয়মিত হৃদস্পন্দন"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "ondansetron",
    "vomiting medicine",
    "nausea medicine",
    "anti vomiting tablet",
    "বমির ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Strong Vomiting Control",
      bn: "তীব্র বমি নিয়ন্ত্রণ"
    },

    colorHint: "purple",

    commonUse: true,

    fastRelief: true,

    hospitalLevel: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Emeset",
    "Ondem",
    "Vomiset",
    "Zofer",
    "Onset",
    "Emistat",
    "Nauset",
    "Vomfree"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "vomiting control",
      "nausea relief"
    ],

    bn: [
      "বমি নিয়ন্ত্রণ",
      "বমি ভাব কমানো"
    ]
  },

  emergencyUse: true
},

// 🔥 DICYCLOMINE
// 🔥 IMPORTANT IBS & ABDOMINAL CRAMP MEDICINE

{
  id: "dicyclomine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Dicyclomine",
      bn: "ডাইসাইক্লোমিন"
    },

    generic: {
      en: "Dicyclomine Hydrochloride",
      bn: "ডাইসাইক্লোমিন হাইড্রোক্লোরাইড"
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
    en: "antispasmodic",
    bn: "খিঁচুনি কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antispasmodic",
      "ibs medicine"
    ],

    bn: [
      "অ্যান্টিস্পাজমোডিক",
      "আইবিএসের ওষুধ"
    ]
  },

  class: {
    en: "Anticholinergic Antispasmodic",
    bn: "অ্যান্টিকোলিনার্জিক অ্যান্টিস্পাজমোডিক"
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
      "syrup",
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "সিরাপ",
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
        en: "Dicyclomine Hydrochloride",
        bn: "ডাইসাইক্লোমিন হাইড্রোক্লোরাইড"
      },

      strength: "10mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 6,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      abdominal_cramp: 10,
      intestinal_spasm: 10,
      ibs: 9,
      stomach_pain: 8,
      colic_pain: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 1,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause confusion, blurred vision and rapid heartbeat",
        bn: "বিভ্রান্তি, ঝাপসা দেখা ও দ্রুত হৃদস্পন্দন হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "dicyclomine",
    "ibs",
    "abdominal cramp",
    "intestinal spasm",
    "colic pain"
  ],

  symptoms: {
    en: [
      "abdominal cramp",
      "stomach spasm",
      "colicky pain",
      "intestinal pain",
      "ibs pain"
    ],

    bn: [
      "পেট মোচড়",
      "পেটের খিঁচুনি",
      "কলিক ব্যথা",
      "আন্ত্রিক ব্যথা",
      "আইবিএসের ব্যথা"
    ]
  },

  diseases: {
    en: [
      "ibs",
      "intestinal spasm",
      "abdominal colic",
      "functional bowel disorder"
    ],

    bn: [
      "আইবিএস",
      "আন্ত্রিক খিঁচুনি",
      "পেটের কলিক",
      "ফাংশনাল বাওয়েল ডিজঅর্ডার"
    ]
  },

  bestFor: {
    en: [
      "ibs pain",
      "abdominal spasm",
      "colicky pain"
    ],

    bn: [
      "আইবিএসের ব্যথা",
      "পেটের খিঁচুনি",
      "কলিক ব্যথা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dry mouth",
        "dizziness",
        "blurred vision",
        "drowsiness"
      ],

      bn: [
        "মুখ শুকানো",
        "মাথা ঘোরা",
        "ঝাপসা দেখা",
        "ঘুম ঘুম ভাব"
      ]
    },

    serious: {
      en: [
        "rapid heartbeat",
        "urinary retention",
        "confusion"
      ],

      bn: [
        "দ্রুত হৃদস্পন্দন",
        "প্রস্রাব আটকে যাওয়া",
        "বিভ্রান্তি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Relaxes intestinal smooth muscles and reduces painful spasms",

    bn:
      "অন্ত্রের মাংসপেশী শিথিল করে ব্যথাযুক্ত খিঁচুনি কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10mg-20mg 3-4 times daily",
      bn: "দিনে ৩-৪ বার ১০-২০ মি.গ্রা."
    },

    child: {
      en: "Not recommended without doctor advice",
      bn: "ডাক্তারের পরামর্শ ছাড়া দেওয়া হয় না"
    },

    maxDaily: {
      en: "80mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৮০ মি.গ্রা."
    }
  },

  onset: {
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "4-6 hours",
    bn: "৪-৬ ঘণ্টা"
  },

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    ibs: {
      en:
        "A bowel disorder causing abdominal pain, bloating and irregular stool",

      bn:
        "একটি অন্ত্রের সমস্যা যেখানে পেট ব্যথা, গ্যাস ও অনিয়মিত পায়খানা হয়"
    },

    intestinalSpasm: {
      en:
        "Painful tightening or cramping of intestinal muscles",

      bn:
        "অন্ত্রের মাংসপেশীর ব্যথাযুক্ত খিঁচুনি"
    },

    colicPain: {
      en:
        "Severe cramp-like abdominal pain occurring in waves",

      bn:
        "তীব্র ঢেউয়ের মতো পেট মোচড়ানো ব্যথা"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "dicyclomine",
    "ibs medicine",
    "abdominal cramp medicine",
    "intestinal spasm tablet",
    "পেট মোচড়ের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Strong Cramp Relief",
      bn: "তীব্র খিঁচুনি উপশম"
    },

    colorHint: "red",

    commonUse: true,

    fastRelief: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Bentyl",
    "Cyclopam",
    "Dicylo",
    "Spasmonil",
    "Colicon",
    "Spasmocid",
    "Dicyl",
    "Abdospas"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "ibs treatment",
      "abdominal cramp relief"
    ],

    bn: [
      "আইবিএসের চিকিৎসা",
      "পেট মোচড় কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 LEVOSULPIRIDE
// 🔥 ADVANCED FUNCTIONAL DYSPEPSIA & REFLUX MEDICINE

{
  id: "levosulpiride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Levosulpiride",
      bn: "লেভোসালপিরাইড"
    },

    generic: {
      en: "Levosulpiride",
      bn: "লেভোসালপিরাইড"
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
      "anti-dyspeptic",
      "anti-reflux"
    ],

    bn: [
      "প্রোকাইনেটিক ওষুধ",
      "বদহজম কমানোর ওষুধ",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Dopamine D2 Receptor Antagonist",
    bn: "ডোপামিন D2 রিসেপ্টর অ্যান্টাগোনিস্ট"
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
    "25mg",
    "75mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Levosulpiride",
        bn: "লেভোসালপিরাইড"
      },

      strength: "25mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 6,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      indigestion: 10,
      bloating: 10,
      reflux: 9,
      nausea: 8,
      functional_dyspepsia: 10,
      gastric: 9
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
        en: "May cause excessive sleepiness, tremor and restlessness",
        bn: "অতিরিক্ত ঘুম, হাত কাঁপা ও অস্থিরতা হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "levosulpiride",
    "functional dyspepsia",
    "reflux",
    "bloating",
    "indigestion"
  ],

  symptoms: {
    en: [
      "bloating",
      "early fullness",
      "acid reflux",
      "nausea",
      "slow digestion"
    ],

    bn: [
      "পেট ফাঁপা",
      "অল্প খেলেই পেট ভরা লাগা",
      "অ্যাসিড রিফ্লাক্স",
      "বমি ভাব",
      "ধীরে হজম হওয়া"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gerd",
      "acid reflux",
      "gastroparesis"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রোপেরেসিস"
    ]
  },

  bestFor: {
    en: [
      "functional dyspepsia",
      "severe bloating",
      "slow gastric movement"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "তীব্র পেট ফাঁপা",
      "ধীরে পাকস্থলী চলাচল"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "sleepiness",
        "dizziness",
        "restlessness",
        "headache"
      ],

      bn: [
        "ঘুম ঘুম ভাব",
        "মাথা ঘোরা",
        "অস্থিরতা",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "high prolactin",
        "hormonal imbalance"
      ],

      bn: [
        "শরীর কাঁপা বা নড়াচড়ার সমস্যা",
        "প্রোল্যাক্টিন বেড়ে যাওয়া",
        "হরমোনের ভারসাম্য নষ্ট হওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Improves stomach movement and reduces reflux by blocking dopamine receptors",

    bn:
      "ডোপামিন রিসেপ্টর ব্লক করে পাকস্থলীর চলাচল বাড়ায় ও রিফ্লাক্স কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "25mg before meals 2-3 times daily",
      bn: "খাবারের আগে দিনে ২-৩ বার ২৫ মি.গ্রা."
    },

    child: {
      en: "Not usually recommended",
      bn: "সাধারণত শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "75mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৭৫ মি.গ্রা."
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

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    functionalDyspepsia: {
      en:
        "Long-term indigestion without visible stomach ulcer or major disease",

      bn:
        "আলসার ছাড়াই দীর্ঘদিন বদহজম ও পেটের অস্বস্তি হওয়া"
    },

    gastroparesis: {
      en:
        "Slow stomach emptying causing bloating and fullness",

      bn:
        "পাকস্থলী ধীরে খালি হওয়ায় পেট ফাঁপা ও ভরা লাগা"
    },

    reflux: {
      en:
        "Backward flow of stomach acid into the food pipe",

      bn:
        "পাকস্থলীর অ্যাসিড উপরের খাদ্যনালীতে উঠে আসা"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "levosulpiride",
    "functional dyspepsia medicine",
    "reflux medicine",
    "bloating tablet",
    "বদহজমের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Digestion Support",
      bn: "অ্যাডভান্সড হজম সহায়তা"
    },

    colorHint: "purple",

    commonUse: true,

    fastRelief: true,

    prescriptionStrength: {
      en: "Advanced",
      bn: "অ্যাডভান্সড"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Lesuride",
    "Levosul",
    "Levofix",
    "Sulpitac",
    "Levomac",
    "Levodom",
    "Levoset",
    "Gutride"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "improve digestion",
      "reduce reflux",
      "reduce bloating"
    ],

    bn: [
      "হজম উন্নত করা",
      "রিফ্লাক্স কমানো",
      "পেট ফাঁপা কমানো"
    ]
  },

  emergencyUse: false
},


// 🔥 ALVERINE + SIMETHICONE
// 🔥 ADVANCED GAS & BLOATING RELIEF MEDICINE

{
  id: "alverine_simethicone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Alverine + Simethicone",
      bn: "অ্যালভেরিন + সিমেথিকোন"
    },

    generic: {
      en: "Alverine Citrate + Simethicone",
      bn: "অ্যালভেরিন সাইট্রেট + সিমেথিকোন"
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
    en: "anti-gas + antispasmodic",
    bn: "গ্যাস ও পেট মোচড় কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "anti-gas",
      "antispasmodic",
      "anti-bloating"
    ],

    bn: [
      "গ্যাস কমানোর ওষুধ",
      "খিঁচুনি কমানোর ওষুধ",
      "পেট ফাঁপা কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Antiflatulent + Smooth Muscle Relaxant",
    bn: "অ্যান্টিফ্ল্যাটুলেন্ট + মাংসপেশী শিথিলকারী"
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
      "tablet"
    ],

    bn: [
      "ক্যাপসুল",
      "ট্যাবলেট"
    ]
  },

  strengths: [
    "60mg + 300mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Alverine Citrate",
        bn: "অ্যালভেরিন সাইট্রেট"
      },

      strength: "60mg"
    },

    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "300mg"
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
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      gas: 10,
      bloating: 10,
      abdominal_pressure: 9,
      stomach_cramp: 9,
      indigestion: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 0,
    liver: 1,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause nausea, dizziness and mild diarrhea",
        bn: "বমি ভাব, মাথা ঘোরা ও হালকা ডায়রিয়া হতে পারে"
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
    "alverine",
    "simethicone",
    "gas",
    "bloating",
    "abdominal pressure"
  ],

  symptoms: {
    en: [
      "gas",
      "bloating",
      "abdominal tightness",
      "stomach pressure",
      "trapped gas"
    ],

    bn: [
      "গ্যাস",
      "পেট ফাঁপা",
      "পেট টাইট লাগা",
      "পেটে চাপ",
      "আটকে থাকা গ্যাস"
    ]
  },

  diseases: {
    en: [
      "gastric bloating",
      "ibs",
      "functional bowel disorder",
      "indigestion"
    ],

    bn: [
      "গ্যাসের কারণে পেট ফাঁপা",
      "আইবিএস",
      "অন্ত্রের কার্যকারিতা সমস্যা",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "severe bloating",
      "trapped gas",
      "gas with cramp"
    ],

    bn: [
      "তীব্র পেট ফাঁপা",
      "আটকে থাকা গ্যাস",
      "গ্যাসের সাথে পেট মোচড়"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "nausea",
        "dizziness",
        "mild diarrhea"
      ],

      bn: [
        "বমি ভাব",
        "মাথা ঘোরা",
        "হালকা ডায়রিয়া"
      ]
    },

    serious: {
      en: [
        "allergic reaction"
      ],

      bn: [
        "অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Breaks gas bubbles and relaxes intestinal muscles to relieve bloating and pressure",

    bn:
      "গ্যাসের বুদবুদ ভেঙে ও অন্ত্রের মাংসপেশী শিথিল করে পেট ফাঁপা ও চাপ কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule 2-3 times daily after meals",
      bn: "খাবারের পরে দিনে ২-৩ বার ১ ক্যাপসুল"
    },

    child: {
      en: "Not usually recommended",
      bn: "সাধারণত শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use as prescribed",
      bn: "ডাক্তারের পরামর্শ অনুযায়ী"
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

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    trappedGas: {
      en:
        "Gas stuck inside the intestine causing pressure and discomfort",

      bn:
        "অন্ত্রে গ্যাস আটকে গিয়ে চাপ ও অস্বস্তি তৈরি হওয়া"
    },

    bloating: {
      en:
        "Feeling of fullness and swelling in the abdomen due to gas",

      bn:
        "গ্যাসের কারণে পেট ফুলে ভরা ভরা লাগা"
    },

    abdominalPressure: {
      en:
        "Pressure or tightness felt inside the stomach area",

      bn:
        "পেটের ভিতরে চাপ বা টাইট লাগা অনুভব হওয়া"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "alverine simethicone",
    "gas medicine",
    "bloating capsule",
    "trapped gas medicine",
    "গ্যাসের ক্যাপসুল"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Gas Relief",
      bn: "অ্যাডভান্সড গ্যাস উপশম"
    },

    colorHint: "cyan",

    commonUse: true,

    fastRelief: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Meteospasmyl",
    "Gasrid",
    "Spasmogas",
    "Flatuline",
    "Gasmover",
    "Bloatnil",
    "Spasfree",
    "Gutcalm"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "gas relief",
      "reduce bloating",
      "relieve stomach pressure"
    ],

    bn: [
      "গ্যাস কমানো",
      "পেট ফাঁপা কমানো",
      "পেটের চাপ কমানো"
    ]
  },

  emergencyUse: false
},
// 🔥 ACOTIAMIDE
// 🔥 ADVANCED LOW-SIDE-EFFECT GAS & BLOATING MEDICINE

{
  id: "acotiamide",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Acotiamide",
      bn: "অ্যাকোটিয়ামাইড"
    },

    generic: {
      en: "Acotiamide Hydrochloride",
      bn: "অ্যাকোটিয়ামাইড হাইড্রোক্লোরাইড"
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
      "anti-bloating",
      "functional dyspepsia medicine"
    ],

    bn: [
      "প্রোকাইনেটিক ওষুধ",
      "পেট ফাঁপা কমানোর ওষুধ",
      "ফাংশনাল ডিসপেপসিয়ার ওষুধ"
    ]
  },

  class: {
    en: "Acetylcholinesterase Inhibitor",
    bn: "অ্যাসিটাইলকোলিনেস্টারেজ ইনহিবিটর"
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
      "tablet"
    ],

    bn: [
      "ট্যাবলেট"
    ]
  },

  strengths: [
    "100mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Acotiamide Hydrochloride",
        bn: "অ্যাকোটিয়ামাইড হাইড্রোক্লোরাইড"
      },

      strength: "100mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 9,

    severity: {
      en: "advanced",
      bn: "অ্যাডভান্সড"
    },

    score: {
      bloating: 10,
      indigestion: 10,
      fullness: 10,
      gastric: 9,
      reflux: 8,
      gas: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 1,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause mild diarrhea and headache",
        bn: "হালকা ডায়রিয়া ও মাথাব্যথা হতে পারে"
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
    "acotiamide",
    "gas",
    "bloating",
    "functional dyspepsia",
    "fullness"
  ],

  symptoms: {
    en: [
      "bloating",
      "gas",
      "early fullness",
      "heavy stomach",
      "indigestion"
    ],

    bn: [
      "পেট ফাঁপা",
      "গ্যাস",
      "অল্প খেলেই পেট ভরা লাগা",
      "পেট ভারী লাগা",
      "বদহজম"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gastric bloating",
      "slow digestion",
      "post meal fullness"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "গ্যাসের কারণে পেট ফাঁপা",
      "ধীরে হজম হওয়া",
      "খাওয়ার পরে পেট ভরা লাগা"
    ]
  },

  bestFor: {
    en: [
      "gas with fullness",
      "chronic bloating",
      "heavy stomach after meals"
    ],

    bn: [
      "গ্যাসের সাথে পেট ভরা লাগা",
      "দীর্ঘদিনের পেট ফাঁপা",
      "খাওয়ার পরে পেট ভারী লাগা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "mild diarrhea",
        "headache",
        "nausea"
      ],

      bn: [
        "হালকা ডায়রিয়া",
        "মাথাব্যথা",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "rare allergic reaction"
      ],

      bn: [
        "বিরল অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Improves stomach emptying and digestion with minimal nervous system effects",

    bn:
      "স্নায়ুর উপর কম প্রভাব ফেলে পাকস্থলীর চলাচল ও হজম উন্নত করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "100mg three times daily before meals",
      bn: "খাবারের আগে দিনে ৩ বার ১০০ মি.গ্রা."
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "300mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৩০০ মি.গ্রা."
    }
  },

  onset: {
    en: "1 hour",
    bn: "১ ঘণ্টা"
  },

  duration: {
    en: "8-12 hours",
    bn: "৮-১২ ঘণ্টা"
  },

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    functionalDyspepsia: {
      en:
        "Long-term indigestion with bloating and fullness without ulcer",

      bn:
        "আলসার ছাড়াই দীর্ঘদিন বদহজম, পেট ফাঁপা ও ভরা লাগা"
    },

    stomachEmptying: {
      en:
        "Movement of food from the stomach into the intestine",

      bn:
        "পাকস্থলী থেকে খাবার অন্ত্রে যাওয়ার প্রক্রিয়া"
    },

    chronicBloating: {
      en:
        "Repeated or long-term abdominal gas and fullness",

      bn:
        "বারবার বা দীর্ঘদিন পেট ফাঁপা ও গ্যাস হওয়া"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "acotiamide",
    "gas medicine",
    "bloating medicine",
    "fullness medicine",
    "পেট ফাঁপার ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Powerful With Low Side Effects",
      bn: "শক্তিশালী কিন্তু কম পার্শ্বপ্রতিক্রিয়া"
    },

    colorHint: "teal",

    commonUse: false,

    fastRelief: true,

    prescriptionStrength: {
      en: "Advanced",
      bn: "অ্যাডভান্সড"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Acofide",
    "Acotide",
    "Acogut",
    "Acoplex",
    "Acorid",
    "Acoliv",
    "Acozen",
    "Acopra"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "reduce bloating",
      "improve digestion",
      "reduce fullness"
    ],

    bn: [
      "পেট ফাঁপা কমানো",
      "হজম উন্নত করা",
      "পেট ভরা ভাব কমানো"
    ]
  },

  emergencyUse: false
},
// 🔥 VONOPRAZAN
// 🔥 ULTRA POWERFUL LOW-SIDE-EFFECT ACIDITY MEDICINE

{
  id: "vonoprazan",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Vonoprazan",
      bn: "ভোনোপ্রাজান"
    },

    generic: {
      en: "Vonoprazan Fumarate",
      bn: "ভোনোপ্রাজান ফিউমারেট"
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
    en: "advanced acid blocker",
    bn: "অ্যাডভান্সড অ্যাসিড ব্লকার"
  },

  therapeuticCategory: {
    en: [
      "potassium competitive acid blocker",
      "anti-ulcer",
      "anti-reflux"
    ],

    bn: [
      "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকার",
      "আলসারের ওষুধ",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "P-CAB",
    bn: "পি-ক্যাব"
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
      "tablet"
    ],

    bn: [
      "ট্যাবলেট"
    ]
  },

  strengths: [
    "10mg",
    "20mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Vonoprazan Fumarate",
        bn: "ভোনোপ্রাজান ফিউমারেট"
      },

      strength: "20mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 9,

    severity: {
      en: "ultra-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      gerd: 10,
      acid_reflux: 10,
      ulcer: 9,
      heartburn: 10,
      night_acidity: 10
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 1,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause mild stomach discomfort and headache",
        bn: "হালকা পেটের অস্বস্তি ও মাথাব্যথা হতে পারে"
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
    "vonoprazan",
    "acidity",
    "gerd",
    "acid reflux",
    "heartburn"
  ],

  symptoms: {
    en: [
      "severe acidity",
      "heartburn",
      "acid reflux",
      "chest burning",
      "night acidity"
    ],

    bn: [
      "তীব্র অ্যাসিডিটি",
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "বুকে জ্বালাপোড়া",
      "রাতের অ্যাসিডিটি"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "erosive gastritis",
      "gastric ulcer",
      "duodenal ulcer"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "ইরোসিভ গ্যাস্ট্রাইটিস",
      "গ্যাস্ট্রিক আলসার",
      "ডুওডেনাল আলসার"
    ]
  },

  bestFor: {
    en: [
      "severe acidity",
      "night reflux",
      "resistant acidity"
    ],

    bn: [
      "তীব্র অ্যাসিডিটি",
      "রাতের রিফ্লাক্স",
      "সাধারণ ওষুধে না কমা অ্যাসিডিটি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "mild headache",
        "nausea",
        "abdominal discomfort"
      ],

      bn: [
        "হালকা মাথাব্যথা",
        "বমি ভাব",
        "পেটের অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "rare liver enzyme elevation"
      ],

      bn: [
        "বিরল ক্ষেত্রে লিভার এনজাইম বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks stomach acid production rapidly and more powerfully than traditional PPIs",

    bn:
      "সাধারণ PPI এর তুলনায় দ্রুত ও বেশি শক্তভাবে পাকস্থলীর অ্যাসিড কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10mg-20mg once daily",
      bn: "দিনে ১ বার ১০-২০ মি.গ্রা."
    },

    child: {
      en: "Not usually recommended",
      bn: "সাধারণত শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "20mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২০ মি.গ্রা."
    }
  },

  onset: {
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= IMPORTANT TERMS =================
  importantTerms: {

    pCab: {
      en:
        "A newer acid blocking medicine class stronger than traditional PPIs",

      bn:
        "সাধারণ PPI এর চেয়ে নতুন ও বেশি শক্তিশালী অ্যাসিড ব্লকার"
    },

    resistantAcidity: {
      en:
        "Acidity not improving with common gastric medicines",

      bn:
        "সাধারণ গ্যাস্ট্রিক ওষুধে না কমা অ্যাসিডিটি"
    },

    nightAcidity: {
      en:
        "Acid reflux or heartburn worsening during night",

      bn:
        "রাতে বুক জ্বালা বা অ্যাসিড রিফ্লাক্স বেড়ে যাওয়া"
    }
  },

  // ================= SEARCH =================
  searchableText: [
    "vonoprazan",
    "powerful acidity medicine",
    "advanced reflux medicine",
    "gerd tablet",
    "তীব্র অ্যাসিডিটির ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Ultra Powerful Acid Control",
      bn: "অত্যন্ত শক্তিশালী অ্যাসিড নিয়ন্ত্রণ"
    },

    colorHint: "darkblue",

    commonUse: false,

    fastRelief: true,

    prescriptionStrength: {
      en: "Ultra Strong",
      bn: "অত্যন্ত শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Voquezna",
    "Vono",
    "Vonozan",
    "Vonacid",
    "Vonogut",
    "Vonpra",
    "Vongerd",
    "Vonrelief"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid suppression",
      "reflux treatment",
      "ulcer treatment"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্সের চিকিৎসা",
      "আলসারের চিকিৎসা"
    ]
  },

  emergencyUse: false
}
  ];