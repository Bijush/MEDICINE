
export const GASTRIC3 = [
// 🔥 PANTOPRAZOLE + DOMPERIDONE (ACID REDUCER + PROKINETIC)

{
  id: "pantoprazole_domperidone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pantoprazole + Domperidone",
      bn: "প্যান্টোপ্রাজল + ডমপেরিডন"
    },

    generic: {
      en: "Pantoprazole + Domperidone",
      bn: "প্যান্টোপ্রাজল + ডমপেরিডন"
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
    en: "acid reducer + prokinetic",
    bn: "অ্যাসিড কমানো ও হজমের গতি বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ"
    ]
  },

  class: {
    en: "PPI + Dopamine Antagonist",
    bn: "পিপিআই + ডোপামিন অ্যান্টাগোনিস্ট"
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
    "40mg + 30mg",
    "40mg + 10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Pantoprazole",
        bn: "প্যান্টোপ্রাজল"
      },

      strength: "40mg"
    },

    {
      ingredient: {
        en: "Domperidone",
        bn: "ডমপেরিডন"
      },

      strength: "30mg"
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
      acidity: 10,
      acid_reflux: 10,
      gerd: 9,
      bloating: 9,
      nausea: 8,
      gastric: 10
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
        en: "May cause dizziness, dry mouth and irregular heartbeat",
        bn: "মাথা ঘোরা, মুখ শুকানো ও অনিয়মিত হৃদস্পন্দন হতে পারে"
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
    "pantoprazole domperidone",
    "gastric",
    "acid reflux",
    "bloating",
    "nausea"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "bloating",
      "nausea",
      "stomach fullness"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "পেট ফাঁপা",
      "বমি ভাব",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "functional dyspepsia",
      "gastric"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া",
      "গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "acid reflux with bloating",
      "gerd",
      "gastric with nausea"
    ],

    bn: [
      "পেট ফাঁপাসহ অ্যাসিড রিফ্লাক্স",
      "জিইআরডি",
      "বমি ভাবসহ গ্যাস্ট্রিক"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dry mouth",
        "headache",
        "diarrhea"
      ],

      bn: [
        "মুখ শুকানো",
        "মাথাব্যথা",
        "ডায়রিয়া"
      ]
    },

    serious: {
      en: [
        "irregular heartbeat",
        "movement disorder"
      ],

      bn: [
        "অনিয়মিত হৃদস্পন্দন",
        "নড়াচড়ার সমস্যা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Pantoprazole reduces stomach acid while Domperidone improves stomach movement",

    bn:
      "প্যান্টোপ্রাজল অ্যাসিড কমায় এবং ডমপেরিডন পাকস্থলীর চলাচল বাড়ায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule once daily before meal",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1-2 capsules/day",
      bn: "প্রতিদিন সর্বোচ্চ ১-২টি ক্যাপসুল"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "pantoprazole domperidone",
    "acid reflux medicine",
    "gastric medicine",
    "bloating medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Pan-D",
    "Pantocid DSR",
    "Pantop D",
    "Pantosec D",
    "Pantodac DSR",
    "Pantofast D",
    "Pantocare D",
    "Panto D"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "improve digestion"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "হজম উন্নত করা"
    ]
  },

  emergencyUse: false
},

// 🔥 ESOMEPRAZOLE + LEVOSULPIRIDE (ADVANCED GERD COMBINATION)

{
  id: "esomeprazole_levosulpiride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Esomeprazole + Levosulpiride",
      bn: "ইসোমিপ্রাজল + লেভোসালপিরাইড"
    },

    generic: {
      en: "Esomeprazole + Levosulpiride",
      bn: "ইসোমিপ্রাজল + লেভোসালপিরাইড"
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
    en: "acid reducer + prokinetic",
    bn: "অ্যাসিড কমানো ও হজমের গতি বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ"
    ]
  },

  class: {
    en: "PPI + Dopamine Antagonist",
    bn: "পিপিআই + ডোপামিন অ্যান্টাগোনিস্ট"
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
    "40mg + 75mg",
    "20mg + 75mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Esomeprazole",
        bn: "ইসোমিপ্রাজল"
      },

      strength: "40mg"
    },

    {
      ingredient: {
        en: "Levosulpiride",
        bn: "লেভোসালপিরাইড"
      },

      strength: "75mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 6,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acid_reflux: 10,
      gerd: 10,
      bloating: 9,
      indigestion: 9,
      nausea: 8,
      gastric: 10
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause excessive drowsiness and movement disorder",
        bn: "অতিরিক্ত ঘুম ও নড়াচড়ার সমস্যা হতে পারে"
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
    "esomeprazole levosulpiride",
    "gerd",
    "acid reflux",
    "bloating",
    "gastric"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "bloating",
      "indigestion",
      "stomach fullness"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট ফাঁপা",
      "বদহজম",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "functional dyspepsia",
      "acid reflux",
      "gastric"
    ],

    bn: [
      "জিইআরডি",
      "ফাংশনাল ডিসপেপসিয়া",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "severe gerd",
      "reflux with bloating",
      "functional dyspepsia"
    ],

    bn: [
      "তীব্র জিইআরডি",
      "পেট ফাঁপাসহ রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dry mouth",
        "headache"
      ],

      bn: [
        "ঘুম ঘুম ভাব",
        "মুখ শুকানো",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "high prolactin"
      ],

      bn: [
        "নড়াচড়ার সমস্যা",
        "প্রোল্যাক্টিন বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Esomeprazole suppresses acid while Levosulpiride improves stomach motility",

    bn:
      "ইসোমিপ্রাজল অ্যাসিড কমায় এবং লেভোসালপিরাইড পাকস্থলীর চলাচল বাড়ায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule once daily before meals",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1 capsule/day",
      bn: "প্রতিদিন সর্বোচ্চ ১টি ক্যাপসুল"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "esomeprazole levosulpiride",
    "gerd medicine",
    "acid reflux medicine",
    "bloating medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Nexpro L",
    "Esofag L",
    "Esomac L",
    "Esogress L",
    "Esocid L",
    "Esogut L",
    "Esopra L",
    "Esorel L"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "improve gastric motility"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "পাকস্থলীর চলাচল উন্নত করা"
    ]
  },

  emergencyUse: false
},

// 🔥 MAGALDRATE + SIMETHICONE + OXETACAINE (TRIPLE GASTRIC RELIEF)

{
  id: "magaldrate_simethicone_oxetacaine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Magaldrate + Simethicone + Oxetacaine",
      bn: "ম্যাগালড্রেট + সিমেথিকোন + অক্সেটাকেইন"
    },

    generic: {
      en: "Magaldrate + Simethicone + Oxetacaine",
      bn: "ম্যাগালড্রেট + সিমেথিকোন + অক্সেটাকেইন"
    }
  },

  type: {
    en: "triple",
    bn: "ট্রিপল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "antacid + anti-gas + pain relief",
    bn: "অ্যান্টাসিড + গ্যাস কমানো + ব্যথা উপশম"
  },

  therapeuticCategory: {
    en: [
      "antacid",
      "anti-gas",
      "local anesthetic"
    ],

    bn: [
      "অ্যান্টাসিড",
      "গ্যাস কমানোর ওষুধ",
      "লোকাল অ্যানেস্থেটিক"
    ]
  },

  class: {
    en: "Triple Combination Antacid",
    bn: "ট্রিপল কম্বিনেশন অ্যান্টাসিড"
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
      "syrup"
    ],

    bn: [
      "সাসপেনশন",
      "সিরাপ"
    ]
  },

  strengths: [
    "400mg + 20mg + 10mg",
    "540mg + 50mg + 10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Magaldrate",
        bn: "ম্যাগালড্রেট"
      },

      strength: "540mg"
    },

    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "50mg"
    },

    {
      ingredient: {
        en: "Oxetacaine",
        bn: "অক্সেটাকেইন"
      },

      strength: "10mg"
    }
  ],

  otc: true,
  rx: false,

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
      acidity: 10,
      gas: 10,
      stomach_burning: 10,
      gastric_pain: 9,
      bloating: 9,
      heartburn: 8
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
        en: "May cause constipation, dizziness and numb feeling",
        bn: "কোষ্ঠকাঠিন্য, মাথা ঘোরা ও অসাড় ভাব হতে পারে"
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
    "magaldrate simethicone oxetacaine",
    "gastric",
    "gas",
    "burning",
    "pain"
  ],

  symptoms: {
    en: [
      "acidity",
      "gas",
      "stomach burning",
      "gastric pain",
      "bloating"
    ],

    bn: [
      "অ্যাসিডিটি",
      "গ্যাস",
      "পেট জ্বালা",
      "গ্যাস্ট্রিক ব্যথা",
      "পেট ফাঁপা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acid irritation",
      "gastritis",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিডের জ্বালা",
      "গ্যাস্ট্রাইটিস",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "burning with gas",
      "gastric pain",
      "bloating with acidity"
    ],

    bn: [
      "গ্যাসসহ জ্বালা",
      "গ্যাস্ট্রিক ব্যথা",
      "অ্যাসিডিটিসহ পেট ফাঁপা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "constipation",
        "dizziness",
        "chalky taste"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "মাথা ঘোরা",
        "চকের মতো স্বাদ"
      ]
    },

    serious: {
      en: [
        "allergic reaction",
        "electrolyte imbalance"
      ],

      bn: [
        "অ্যালার্জি",
        "ইলেক্ট্রোলাইট ভারসাম্যহীনতা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Neutralizes acid, breaks gas bubbles and relieves stomach pain",

    bn:
      "অ্যাসিড নিরপেক্ষ করে, গ্যাস ভাঙে এবং পাকস্থলীর ব্যথা কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10ml after meals and at bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ১০ মি.লি."
    },

    child: {
      en: "Only under doctor advice",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
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
    en: "3-4 hours",
    bn: "৩-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "magaldrate simethicone oxetacaine",
    "gastric syrup",
    "gas medicine",
    "burning medicine",
    "গ্যাস্ট্রিক সিরাপ"
  ],

  // ================= BRANDS =================
  brands: [
    "Digene Gel",
    "Mucaine Gel",
    "Antigel O",
    "Gasnil Plus",
    "Ulgel",
    "Oxigel MPS",
    "Magacid Plus",
    "Flatucaine"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid relief",
      "gas relief",
      "pain relief"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "গ্যাস কমানো",
      "ব্যথা কমানো"
    ]
  },

  emergencyUse: false
},


// 🔥 ALUMINIUM HYDROXIDE + MAGNESIUM HYDROXIDE + SIMETHICONE + OXETACAINE

{
  id: "aluminium_magnesium_simethicone_oxetacaine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone + Oxetacaine",
      bn: "অ্যালুমিনিয়াম হাইড্রোক্সাইড + ম্যাগনেসিয়াম হাইড্রোক্সাইড + সিমেথিকোন + অক্সেটাকেইন"
    },

    generic: {
      en: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone + Oxetacaine",
      bn: "অ্যালুমিনিয়াম হাইড্রোক্সাইড + ম্যাগনেসিয়াম হাইড্রোক্সাইড + সিমেথিকোন + অক্সেটাকেইন"
    }
  },

  type: {
    en: "fourth",
    bn: "ফোর্থ"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "antacid + anti-gas + pain relief",
    bn: "অ্যান্টাসিড + গ্যাস কমানো + ব্যথা উপশম"
  },

  therapeuticCategory: {
    en: [
      "antacid",
      "anti-gas",
      "local anesthetic"
    ],

    bn: [
      "অ্যান্টাসিড",
      "গ্যাস কমানোর ওষুধ",
      "লোকাল অ্যানেস্থেটিক"
    ]
  },

  class: {
    en: "Four Drug Gastric Combination",
    bn: "চার উপাদানের গ্যাস্ট্রিক কম্বিনেশন"
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
      "syrup"
    ],

    bn: [
      "সাসপেনশন",
      "সিরাপ"
    ]
  },

  strengths: [
    "250mg + 250mg + 50mg + 10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Aluminium Hydroxide",
        bn: "অ্যালুমিনিয়াম হাইড্রোক্সাইড"
      },

      strength: "250mg"
    },

    {
      ingredient: {
        en: "Magnesium Hydroxide",
        bn: "ম্যাগনেসিয়াম হাইড্রোক্সাইড"
      },

      strength: "250mg"
    },

    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "50mg"
    },

    {
      ingredient: {
        en: "Oxetacaine",
        bn: "অক্সেটাকেইন"
      },

      strength: "10mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 6,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      stomach_burning: 10,
      gas: 10,
      gastric_pain: 10,
      bloating: 9,
      heartburn: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 3,
    liver: 1,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause electrolyte imbalance, constipation and numbness",
        bn: "ইলেক্ট্রোলাইট সমস্যা, কোষ্ঠকাঠিন্য ও অসাড় ভাব হতে পারে"
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
    "aluminium hydroxide magnesium hydroxide simethicone oxetacaine",
    "gastric",
    "burning",
    "gas",
    "pain"
  ],

  symptoms: {
    en: [
      "stomach burning",
      "gas",
      "bloating",
      "gastric pain",
      "heartburn"
    ],

    bn: [
      "পেট জ্বালা",
      "গ্যাস",
      "পেট ফাঁপা",
      "গ্যাস্ট্রিক ব্যথা",
      "বুক জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastritis",
      "acid irritation",
      "gastric",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রাইটিস",
      "অ্যাসিডের জ্বালা",
      "গ্যাস্ট্রিক",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "severe gastric burning",
      "gas with pain",
      "strong acidity relief"
    ],

    bn: [
      "তীব্র গ্যাস্ট্রিক জ্বালা",
      "ব্যথাসহ গ্যাস",
      "তীব্র অ্যাসিডিটি কমানো"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "constipation",
        "diarrhea",
        "dizziness"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "ডায়রিয়া",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "electrolyte imbalance",
        "allergic reaction"
      ],

      bn: [
        "ইলেক্ট্রোলাইট ভারসাম্যহীনতা",
        "অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Neutralizes acid, reduces gas and numbs gastric pain",

    bn:
      "অ্যাসিড নিরপেক্ষ করে, গ্যাস কমায় এবং গ্যাস্ট্রিক ব্যথা অসাড় করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10ml after meals and at bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ১০ মি.লি."
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "80ml/day",
      bn: "প্রতিদিন সর্বোচ্চ ৮০ মি.লি."
    }
  },

  onset: {
    en: "5-10 minutes",
    bn: "৫-১০ মিনিট"
  },

  duration: {
    en: "3-4 hours",
    bn: "৩-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "antacid plus oxetacaine",
    "gastric syrup",
    "burning medicine",
    "gas medicine",
    "গ্যাস্ট্রিক সিরাপ"
  ],

  // ================= BRANDS =================
  brands: [
    "Mucaine Plus",
    "Digene Ultra",
    "Antigel Plus",
    "Gasnil Ultra",
    "Oxigel MPS",
    "Gelusil Plus",
    "Ultragel",
    "Acidrelief Max"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid relief",
      "gas relief",
      "pain relief"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "গ্যাস কমানো",
      "ব্যথা কমানো"
    ]
  },

  emergencyUse: false
},


// 🔥 OMEPRAZOLE + SODIUM BICARBONATE (FAST ACTING PPI)

{
  id: "omeprazole_sodium_bicarbonate",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Omeprazole + Sodium Bicarbonate",
      bn: "ওমিপ্রাজল + সোডিয়াম বাইকার্বোনেট"
    },

    generic: {
      en: "Omeprazole + Sodium Bicarbonate",
      bn: "ওমিপ্রাজল + সোডিয়াম বাইকার্বোনেট"
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
    en: "acid reducer + fast antacid",
    bn: "অ্যাসিড কমানো ও দ্রুত অ্যান্টাসিড"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "antacid"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "অ্যান্টাসিড"
    ]
  },

  class: {
    en: "PPI + Systemic Antacid",
    bn: "পিপিআই + সিস্টেমিক অ্যান্টাসিড"
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
      "powder for suspension"
    ],

    bn: [
      "ক্যাপসুল",
      "সাসপেনশনের জন্য পাউডার"
    ]
  },

  strengths: [
    "20mg + 1100mg",
    "40mg + 1100mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Omeprazole",
        bn: "ওমিপ্রাজল"
      },

      strength: "20mg"
    },

    {
      ingredient: {
        en: "Sodium Bicarbonate",
        bn: "সোডিয়াম বাইকার্বোনেট"
      },

      strength: "1100mg"
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
      acidity: 10,
      heartburn: 10,
      acid_reflux: 9,
      gerd: 9,
      gastric: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 3,
    liver: 1,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause electrolyte imbalance and metabolic alkalosis",
        bn: "ইলেক্ট্রোলাইট সমস্যা ও মেটাবলিক অ্যালকালোসিস হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: true,
    elderly: false,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "omeprazole sodium bicarbonate",
    "acid reflux",
    "heartburn",
    "gerd",
    "gastric"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acidity",
      "acid reflux",
      "chest burning"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিডিটি",
      "অ্যাসিড রিফ্লাক্স",
      "বুকে জ্বালাপোড়া"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "gastric",
      "heartburn"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিক",
      "বুক জ্বালা"
    ]
  },

  bestFor: {
    en: [
      "fast relief with long acid control",
      "night acidity",
      "gerd"
    ],

    bn: [
      "দ্রুত উপশম ও দীর্ঘসময় অ্যাসিড নিয়ন্ত্রণ",
      "রাতের অ্যাসিডিটি",
      "জিইআরডি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "burping",
        "bloating",
        "headache"
      ],

      bn: [
        "ঢেকুর",
        "পেট ফাঁপা",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "high sodium level",
        "kidney problem"
      ],

      bn: [
        "সোডিয়াম বেড়ে যাওয়া",
        "কিডনি সমস্যা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Sodium bicarbonate gives rapid acid neutralization while Omeprazole suppresses acid production",

    bn:
      "সোডিয়াম বাইকার্বোনেট দ্রুত অ্যাসিড নিরপেক্ষ করে এবং ওমিপ্রাজল অ্যাসিড তৈরি কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule on empty stomach before meals",
      bn: "খালি পেটে খাবারের আগে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1-2 capsules/day",
      bn: "প্রতিদিন সর্বোচ্চ ১-২টি ক্যাপসুল"
    }
  },

  onset: {
    en: "15-30 minutes",
    bn: "১৫-৩০ মিনিট"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "omeprazole sodium bicarbonate",
    "fast acid relief medicine",
    "gerd medicine",
    "heartburn medicine",
    "অ্যাসিডিটির ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Zegerid",
    "Omez SB",
    "Ocid SB",
    "Omecare SB",
    "Omepra Fast",
    "Acidnil O",
    "Omegut SB",
    "Omesafe SB"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "fast acid relief",
      "long acid suppression"
    ],

    bn: [
      "দ্রুত অ্যাসিড কমানো",
      "দীর্ঘসময় অ্যাসিড নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},

// 🔥 PANTOPRAZOLE + LEVOSULPIRIDE (ADVANCED ACID + MOTILITY COMBO)

{
  id: "pantoprazole_levosulpiride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pantoprazole + Levosulpiride",
      bn: "প্যান্টোপ্রাজল + লেভোসালপিরাইড"
    },

    generic: {
      en: "Pantoprazole + Levosulpiride",
      bn: "প্যান্টোপ্রাজল + লেভোসালপিরাইড"
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
    en: "acid reducer + prokinetic",
    bn: "অ্যাসিড কমানো ও হজমের গতি বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ"
    ]
  },

  class: {
    en: "PPI + Dopamine Antagonist",
    bn: "পিপিআই + ডোপামিন অ্যান্টাগোনিস্ট"
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
    "40mg + 75mg",
    "20mg + 75mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Pantoprazole",
        bn: "প্যান্টোপ্রাজল"
      },

      strength: "40mg"
    },

    {
      ingredient: {
        en: "Levosulpiride",
        bn: "লেভোসালপিরাইড"
      },

      strength: "75mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 6,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      gerd: 10,
      acid_reflux: 10,
      bloating: 9,
      indigestion: 9,
      gastric: 10
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause excessive drowsiness and movement disorder",
        bn: "অতিরিক্ত ঘুম ও নড়াচড়ার সমস্যা হতে পারে"
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
    "pantoprazole levosulpiride",
    "acid reflux",
    "gerd",
    "bloating",
    "gastric"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "bloating",
      "indigestion",
      "stomach fullness"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট ফাঁপা",
      "বদহজম",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "functional dyspepsia",
      "acid reflux",
      "gastric"
    ],

    bn: [
      "জিইআরডি",
      "ফাংশনাল ডিসপেপসিয়া",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "severe gerd",
      "reflux with bloating",
      "functional dyspepsia"
    ],

    bn: [
      "তীব্র জিইআরডি",
      "পেট ফাঁপাসহ রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dry mouth",
        "headache"
      ],

      bn: [
        "ঘুম ঘুম ভাব",
        "মুখ শুকানো",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "high prolactin"
      ],

      bn: [
        "নড়াচড়ার সমস্যা",
        "প্রোল্যাক্টিন বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Pantoprazole suppresses acid while Levosulpiride improves gastric motility",

    bn:
      "প্যান্টোপ্রাজল অ্যাসিড কমায় এবং লেভোসালপিরাইড পাকস্থলীর চলাচল বাড়ায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule once daily before meals",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1 capsule/day",
      bn: "প্রতিদিন সর্বোচ্চ ১টি ক্যাপসুল"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "pantoprazole levosulpiride",
    "gerd medicine",
    "acid reflux medicine",
    "bloating medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Pantosec L",
    "Pantocid L",
    "Pantodac L",
    "Panto LS",
    "Pantogut L",
    "Pantocare L",
    "Pantorid L",
    "Prazol L"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "improve gastric motility"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "পাকস্থলীর চলাচল উন্নত করা"
    ]
  },

  emergencyUse: false
},


// 🔥 RABEPRAZOLE + LEVOSULPIRIDE (ADVANCED GERD + DYSPEPSIA COMBO)

{
  id: "rabeprazole_levosulpiride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Rabeprazole + Levosulpiride",
      bn: "র্যাবিপ্রাজল + লেভোসালপিরাইড"
    },

    generic: {
      en: "Rabeprazole + Levosulpiride",
      bn: "র্যাবিপ্রাজল + লেভোসালপিরাইড"
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
    en: "acid reducer + prokinetic",
    bn: "অ্যাসিড কমানো ও হজমের গতি বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ"
    ]
  },

  class: {
    en: "PPI + Dopamine Antagonist",
    bn: "পিপিআই + ডোপামিন অ্যান্টাগোনিস্ট"
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
    "20mg + 75mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Rabeprazole",
        bn: "র্যাবিপ্রাজল"
      },

      strength: "20mg"
    },

    {
      ingredient: {
        en: "Levosulpiride",
        bn: "লেভোসালপিরাইড"
      },

      strength: "75mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 6,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      gerd: 10,
      acid_reflux: 10,
      acidity: 10,
      bloating: 9,
      indigestion: 9,
      gastric: 10
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause severe drowsiness and movement disorder",
        bn: "তীব্র ঘুম ঘুম ভাব ও নড়াচড়ার সমস্যা হতে পারে"
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
    "rabeprazole levosulpiride",
    "gerd",
    "acid reflux",
    "bloating",
    "gastric"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "bloating",
      "indigestion",
      "stomach fullness"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট ফাঁপা",
      "বদহজম",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "functional dyspepsia",
      "acid reflux",
      "gastric"
    ],

    bn: [
      "জিইআরডি",
      "ফাংশনাল ডিসপেপসিয়া",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "severe gerd",
      "reflux with bloating",
      "functional dyspepsia"
    ],

    bn: [
      "তীব্র জিইআরডি",
      "পেট ফাঁপাসহ রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dry mouth",
        "headache"
      ],

      bn: [
        "ঘুম ঘুম ভাব",
        "মুখ শুকানো",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "high prolactin"
      ],

      bn: [
        "নড়াচড়ার সমস্যা",
        "প্রোল্যাক্টিন বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Rabeprazole suppresses acid while Levosulpiride improves stomach motility",

    bn:
      "র্যাবিপ্রাজল অ্যাসিড কমায় এবং লেভোসালপিরাইড পাকস্থলীর চলাচল বাড়ায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule once daily before meals",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1 capsule/day",
      bn: "প্রতিদিন সর্বোচ্চ ১টি ক্যাপসুল"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "24 hours",
    bn: "২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "rabeprazole levosulpiride",
    "gerd medicine",
    "acid reflux medicine",
    "bloating medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Rablet L",
    "Rabecid L",
    "Rabez L",
    "Rabium L",
    "Rabonik L",
    "Rabifast L",
    "Rabesec L",
    "Rabecure L"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "improve gastric motility"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "পাকস্থলীর চলাচল উন্নত করা"
    ]
  },

  emergencyUse: false
},

// 🔥 PANTOPRAZOLE + SIMETHICONE (ACID + GAS RELIEF)

{
  id: "pantoprazole_simethicone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pantoprazole + Simethicone",
      bn: "প্যান্টোপ্রাজল + সিমেথিকোন"
    },

    generic: {
      en: "Pantoprazole + Simethicone",
      bn: "প্যান্টোপ্রাজল + সিমেথিকোন"
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
    en: "acid reducer + anti-gas",
    bn: "অ্যাসিড কমানো ও গ্যাস কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-gas agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "গ্যাস কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Anti-Foaming Agent",
    bn: "পিপিআই + অ্যান্টি-ফোমিং এজেন্ট"
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
    "40mg + 80mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Pantoprazole",
        bn: "প্যান্টোপ্রাজল"
      },

      strength: "40mg"
    },

    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "80mg"
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
      gas: 10,
      bloating: 10,
      heartburn: 8,
      gastric: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause bloating, diarrhea and headache",
        bn: "পেট ফাঁপা, ডায়রিয়া ও মাথাব্যথা হতে পারে"
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
    "pantoprazole simethicone",
    "gas",
    "bloating",
    "acidity",
    "gastric"
  ],

  symptoms: {
    en: [
      "gas",
      "bloating",
      "acidity",
      "stomach fullness"
    ],

    bn: [
      "গ্যাস",
      "পেট ফাঁপা",
      "অ্যাসিডিটি",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acid reflux",
      "functional dyspepsia",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "gas with acidity",
      "bloating",
      "acid irritation"
    ],

    bn: [
      "অ্যাসিডিটিসহ গ্যাস",
      "পেট ফাঁপা",
      "অ্যাসিডের জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "diarrhea",
        "abdominal discomfort"
      ],

      bn: [
        "মাথাব্যথা",
        "ডায়রিয়া",
        "পেটের অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "allergic reaction",
        "electrolyte imbalance"
      ],

      bn: [
        "অ্যালার্জি",
        "ইলেক্ট্রোলাইট ভারসাম্যহীনতা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Pantoprazole reduces acid while Simethicone breaks gas bubbles",

    bn:
      "প্যান্টোপ্রাজল অ্যাসিড কমায় এবং সিমেথিকোন গ্যাসের বুদবুদ ভেঙে দেয়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule before meals once daily",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1-2 capsules/day",
      bn: "প্রতিদিন সর্বোচ্চ ১-২টি ক্যাপসুল"
    }
  },

  onset: {
    en: "20-40 minutes",
    bn: "২০-৪০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "pantoprazole simethicone",
    "gas medicine",
    "bloating medicine",
    "acidity medicine",
    "গ্যাসের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Panto Gas",
    "Pantosec SG",
    "Pantocid SG",
    "Pantodac SG",
    "Pantoflat",
    "Pantogut SG",
    "Gasfree P",
    "Prazo Gas"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "gas relief"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "গ্যাস কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 DOMPERIDONE + SIMETHICONE (NAUSEA + GAS RELIEF)

{
  id: "domperidone_simethicone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Domperidone + Simethicone",
      bn: "ডমপেরিডন + সিমেথিকোন"
    },

    generic: {
      en: "Domperidone + Simethicone",
      bn: "ডমপেরিডন + সিমেথিকোন"
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
    en: "prokinetic + anti-gas",
    bn: "হজমের গতি বাড়ানো ও গ্যাস কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "prokinetic agent",
      "anti-gas agent"
    ],

    bn: [
      "প্রোকাইনেটিক ওষুধ",
      "গ্যাস কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Dopamine Antagonist + Anti-Foaming Agent",
    bn: "ডোপামিন অ্যান্টাগোনিস্ট + অ্যান্টি-ফোমিং এজেন্ট"
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
      "suspension"
    ],

    bn: [
      "ট্যাবলেট",
      "সাসপেনশন"
    ]
  },

  strengths: [
    "10mg + 80mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Domperidone",
        bn: "ডমপেরিডন"
      },

      strength: "10mg"
    },

    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "80mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 7,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      bloating: 10,
      gas: 10,
      nausea: 9,
      fullness: 9,
      indigestion: 8
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
        en: "May cause dry mouth, dizziness and irregular heartbeat",
        bn: "মুখ শুকানো, মাথা ঘোরা ও অনিয়মিত হৃদস্পন্দন হতে পারে"
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
    "domperidone simethicone",
    "gas",
    "bloating",
    "nausea",
    "indigestion"
  ],

  symptoms: {
    en: [
      "gas",
      "bloating",
      "nausea",
      "stomach fullness"
    ],

    bn: [
      "গ্যাস",
      "পেট ফাঁপা",
      "বমি ভাব",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gastric",
      "indigestion",
      "gas buildup"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "গ্যাস্ট্রিক",
      "বদহজম",
      "গ্যাস জমা"
    ]
  },

  bestFor: {
    en: [
      "gas with nausea",
      "bloating",
      "stomach fullness"
    ],

    bn: [
      "বমি ভাবসহ গ্যাস",
      "পেট ফাঁপা",
      "পেট ভরা লাগা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dry mouth",
        "headache",
        "abdominal cramps"
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
        "allergic reaction"
      ],

      bn: [
        "অনিয়মিত হৃদস্পন্দন",
        "অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Domperidone improves stomach movement while Simethicone breaks gas bubbles",

    bn:
      "ডমপেরিডন পাকস্থলীর চলাচল বাড়ায় এবং সিমেথিকোন গ্যাসের বুদবুদ ভেঙে দেয়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 tablet before meals 2-3 times daily",
      bn: "খাবারের আগে দিনে ২-৩ বার ১টি ট্যাবলেট"
    },

    child: {
      en: "Only under doctor advice",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "3 tablets/day",
      bn: "প্রতিদিন সর্বোচ্চ ৩টি ট্যাবলেট"
    }
  },

  onset: {
    en: "20-30 minutes",
    bn: "২০-৩০ মিনিট"
  },

  duration: {
    en: "6-8 hours",
    bn: "৬-৮ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "domperidone simethicone",
    "gas medicine",
    "bloating medicine",
    "nausea medicine",
    "গ্যাসের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Domstal Gas",
    "Domnil Plus",
    "Vomifree SG",
    "Gasrid D",
    "Domflat",
    "Gascare D",
    "Flatnil D",
    "Domgas"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "gas relief",
      "improve digestion"
    ],

    bn: [
      "গ্যাস কমানো",
      "হজম উন্নত করা"
    ]
  },

  emergencyUse: false
},

// 🔥 PANTOPRAZOLE + OXETACAINE (ACID + BURNING PAIN RELIEF)

{
  id: "pantoprazole_oxetacaine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pantoprazole + Oxetacaine",
      bn: "প্যান্টোপ্রাজল + অক্সেটাকেইন"
    },

    generic: {
      en: "Pantoprazole + Oxetacaine",
      bn: "প্যান্টোপ্রাজল + অক্সেটাকেইন"
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
    en: "acid reducer + gastric pain relief",
    bn: "অ্যাসিড কমানো ও গ্যাস্ট্রিক ব্যথা কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "local anesthetic"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "লোকাল অ্যানেস্থেটিক"
    ]
  },

  class: {
    en: "PPI + Local Anesthetic",
    bn: "পিপিআই + লোকাল অ্যানেস্থেটিক"
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
      "suspension"
    ],

    bn: [
      "ক্যাপসুল",
      "সাসপেনশন"
    ]
  },

  strengths: [
    "40mg + 10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Pantoprazole",
        bn: "প্যান্টোপ্রাজল"
      },

      strength: "40mg"
    },

    {
      ingredient: {
        en: "Oxetacaine",
        bn: "অক্সেটাকেইন"
      },

      strength: "10mg"
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
      acidity: 10,
      stomach_burning: 10,
      gastric_pain: 10,
      heartburn: 9,
      ulcer: 8
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
        en: "May cause dizziness and numbness",
        bn: "মাথা ঘোরা ও অসাড় ভাব হতে পারে"
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
    "pantoprazole oxetacaine",
    "gastric pain",
    "burning",
    "acidity",
    "heartburn"
  ],

  symptoms: {
    en: [
      "stomach burning",
      "heartburn",
      "gastric pain",
      "acid irritation"
    ],

    bn: [
      "পেট জ্বালা",
      "বুক জ্বালা",
      "গ্যাস্ট্রিক ব্যথা",
      "অ্যাসিডের জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastritis",
      "acid reflux",
      "ulcer",
      "gastric"
    ],

    bn: [
      "গ্যাস্ট্রাইটিস",
      "অ্যাসিড রিফ্লাক্স",
      "আলসার",
      "গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "burning with pain",
      "ulcer irritation",
      "severe acidity"
    ],

    bn: [
      "ব্যথাসহ জ্বালা",
      "আলসারের জ্বালা",
      "তীব্র অ্যাসিডিটি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dizziness",
        "dry mouth",
        "headache"
      ],

      bn: [
        "মাথা ঘোরা",
        "মুখ শুকানো",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "allergic reaction",
        "breathing difficulty"
      ],

      bn: [
        "অ্যালার্জি",
        "শ্বাসকষ্ট"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Pantoprazole suppresses acid while Oxetacaine numbs gastric pain and burning",

    bn:
      "প্যান্টোপ্রাজল অ্যাসিড কমায় এবং অক্সেটাকেইন গ্যাস্ট্রিকের ব্যথা ও জ্বালা অসাড় করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule before meals once daily",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1-2 capsules/day",
      bn: "প্রতিদিন সর্বোচ্চ ১-২টি ক্যাপসুল"
    }
  },

  onset: {
    en: "15-30 minutes",
    bn: "১৫-৩০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "pantoprazole oxetacaine",
    "burning medicine",
    "gastric pain medicine",
    "acid medicine",
    "গ্যাস্ট্রিক ব্যথার ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Panto OX",
    "Pantocid O",
    "Pantosec OX",
    "Pantodac O",
    "Prazogesic",
    "Burnnil P",
    "Pantogel O",
    "Acidpain P"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "pain relief"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "ব্যথা কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 RABEPRAZOLE + SIMETHICONE (ACID + GAS RELIEF)

{
  id: "rabeprazole_simethicone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Rabeprazole + Simethicone",
      bn: "র্যাবিপ্রাজল + সিমেথিকোন"
    },

    generic: {
      en: "Rabeprazole + Simethicone",
      bn: "র্যাবিপ্রাজল + সিমেথিকোন"
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
    en: "acid reducer + anti-gas",
    bn: "অ্যাসিড কমানো ও গ্যাস কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-gas agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "গ্যাস কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Anti-Foaming Agent",
    bn: "পিপিআই + অ্যান্টি-ফোমিং এজেন্ট"
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
    "20mg + 80mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Rabeprazole",
        bn: "র্যাবিপ্রাজল"
      },

      strength: "20mg"
    },

    {
      ingredient: {
        en: "Simethicone",
        bn: "সিমেথিকোন"
      },

      strength: "80mg"
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
      acidity: 10,
      gas: 10,
      bloating: 10,
      acid_reflux: 9,
      gastric: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause bloating, diarrhea and headache",
        bn: "পেট ফাঁপা, ডায়রিয়া ও মাথাব্যথা হতে পারে"
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
    "rabeprazole simethicone",
    "gas",
    "bloating",
    "acidity",
    "gastric"
  ],

  symptoms: {
    en: [
      "gas",
      "bloating",
      "acidity",
      "stomach fullness"
    ],

    bn: [
      "গ্যাস",
      "পেট ফাঁপা",
      "অ্যাসিডিটি",
      "পেট ভরা লাগা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acid reflux",
      "functional dyspepsia",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিড রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "gas with acidity",
      "bloating",
      "acid irritation"
    ],

    bn: [
      "অ্যাসিডিটিসহ গ্যাস",
      "পেট ফাঁপা",
      "অ্যাসিডের জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "headache",
        "diarrhea",
        "abdominal discomfort"
      ],

      bn: [
        "মাথাব্যথা",
        "ডায়রিয়া",
        "পেটের অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "allergic reaction",
        "electrolyte imbalance"
      ],

      bn: [
        "অ্যালার্জি",
        "ইলেক্ট্রোলাইট ভারসাম্যহীনতা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Rabeprazole reduces acid while Simethicone breaks gas bubbles",

    bn:
      "র্যাবিপ্রাজল অ্যাসিড কমায় এবং সিমেথিকোন গ্যাসের বুদবুদ ভেঙে দেয়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule before meals once daily",
      bn: "খাবারের আগে দিনে ১টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "1-2 capsules/day",
      bn: "প্রতিদিন সর্বোচ্চ ১-২টি ক্যাপসুল"
    }
  },

  onset: {
    en: "20-40 minutes",
    bn: "২০-৪০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "rabeprazole simethicone",
    "gas medicine",
    "bloating medicine",
    "acidity medicine",
    "গ্যাসের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Rabez SG",
    "Rablet SG",
    "Rabecid SG",
    "Rabium SG",
    "Rabiflat",
    "Rabonik SG",
    "Gasfree R",
    "Rabecure SG"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "gas relief"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "গ্যাস কমানো"
    ]
  },

  emergencyUse: false
}

];