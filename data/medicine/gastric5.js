
export const GASTRIC5 = [
  
  // 🔥 CLARITHROMYCIN + AMOXICILLIN + ESOMEPRAZOLE
// 🔥 MOST IMPORTANT H. PYLORI TRIPLE THERAPY

{
  id: "clarithromycin_amoxicillin_esomeprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Clarithromycin + Amoxicillin + Esomeprazole",
      bn: "ক্ল্যারিথ্রোমাইসিন + অ্যামোক্সিসিলিন + ইসোমিপ্রাজল"
    },

    generic: {
      en: "Clarithromycin + Amoxicillin + Esomeprazole",
      bn: "ক্ল্যারিথ্রোমাইসিন + অ্যামোক্সিসিলিন + ইসোমিপ্রাজল"
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
    en: "h. pylori eradication therapy",
    bn: "এইচ. পাইলোরি নির্মূল থেরাপি"
  },

  therapeuticCategory: {
    en: [
      "triple therapy",
      "anti-h. pylori",
      "anti-ulcer"
    ],

    bn: [
      "ট্রিপল থেরাপি",
      "এইচ. পাইলোরি চিকিৎসা",
      "আলসারের চিকিৎসা"
    ]
  },

  class: {
    en: "PPI + Dual Antibiotic Therapy",
    bn: "পিপিআই + ডুয়াল অ্যান্টিবায়োটিক থেরাপি"
  },

  category: {
    en: "therapy kit",
    bn: "থেরাপি কিট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "tablet",
      "capsule",
      "therapy kit"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "থেরাপি কিট"
    ]
  },

  strengths: [
    "500mg + 500mg + 40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Clarithromycin",
        bn: "ক্ল্যারিথ্রোমাইসিন"
      },

      strength: "500mg"
    },

    {
      ingredient: {
        en: "Amoxicillin",
        bn: "অ্যামোক্সিসিলিন"
      },

      strength: "500mg"
    },

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

  antibiotic: true,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 5,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      h_pylori: 10,
      ulcer: 10,
      chronic_acidity: 9,
      gastritis: 10,
      acid_reflux: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 1,
    kidney: 2,
    liver: 4,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause severe diarrhea and liver injury",
        bn: "তীব্র ডায়রিয়া ও লিভারের ক্ষতি হতে পারে"
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
    "h pylori",
    "triple therapy",
    "ulcer kit",
    "gastric infection",
    "chronic acidity"
  ],

  symptoms: {
    en: [
      "persistent acidity",
      "burning stomach pain",
      "ulcer pain",
      "bloating",
      "recurrent gastritis"
    ],

    bn: [
      "দীর্ঘস্থায়ী অ্যাসিডিটি",
      "পেট জ্বালা",
      "আলসারের ব্যথা",
      "পেট ফাঁপা",
      "বারবার গ্যাস্ট্রাইটিস"
    ]
  },

  diseases: {
    en: [
      "h pylori infection",
      "gastric ulcer",
      "duodenal ulcer",
      "chronic gastritis"
    ],

    bn: [
      "এইচ পাইলোরি সংক্রমণ",
      "গ্যাস্ট্রিক আলসার",
      "ডুওডেনাল আলসার",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস"
    ]
  },

  bestFor: {
    en: [
      "h pylori eradication",
      "ulcer cure",
      "chronic acidity treatment"
    ],

    bn: [
      "এইচ পাইলোরি নির্মূল",
      "আলসার নিরাময়",
      "দীর্ঘস্থায়ী অ্যাসিডিটির চিকিৎসা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "nausea",
        "metallic taste",
        "abdominal pain"
      ],

      bn: [
        "ডায়রিয়া",
        "বমি ভাব",
        "মুখে ধাতব স্বাদ",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "liver toxicity",
        "allergic reaction",
        "antibiotic resistance"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "অ্যালার্জি",
        "অ্যান্টিবায়োটিক রেজিস্ট্যান্স"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Suppresses acid and kills H. pylori bacteria using dual antibiotics",

    bn:
      "অ্যাসিড কমিয়ে ডুয়াল অ্যান্টিবায়োটিকের মাধ্যমে H. pylori ধ্বংস করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Usually twice daily for 10-14 days",
      bn: "সাধারণত ১০-১৪ দিন দিনে ২ বার"
    },

    child: {
      en: "Only under specialist advice",
      bn: "শুধু বিশেষজ্ঞ ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "Use exactly as prescribed",
      bn: "ডাক্তারের পরামর্শ অনুযায়ী ব্যবহার করতে হবে"
    }
  },

  onset: {
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "Depends on treatment course",
    bn: "চিকিৎসার সময় অনুযায়ী"
  },

  // ================= SEARCH =================
  searchableText: [
    "h pylori triple therapy",
    "ulcer treatment kit",
    "chronic acidity medicine",
    "gastric infection medicine",
    "আলসারের থেরাপি"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Curative Therapy",
      bn: "রোগ নির্মূল থেরাপি"
    },

    colorHint: "darkred",

    commonUse: true,

    advancedMedicine: true,

    hospitalLevel: true,

    prescriptionStrength: {
      en: "Very Strong",
      bn: "অত্যন্ত শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "HP Kit",
    "Helikit",
    "Pylo Kit",
    "Helicure",
    "Ulcernil Kit",
    "Gastro HP",
    "Eso HP Kit",
    "Pylotrip"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "h pylori eradication",
      "ulcer cure",
      "chronic gastritis treatment"
    ],

    bn: [
      "এইচ পাইলোরি নির্মূল",
      "আলসার নিরাময়",
      "দীর্ঘস্থায়ী গ্যাস্ট্রাইটিস চিকিৎসা"
    ]
  },

  emergencyUse: false
},

  // 🔥 LEVOSULPIRIDE + RABEPRAZOLE
// 🔥 VERY IMPORTANT ADVANCED REFLUX + INDIGESTION MEDICINE

{
  id: "levosulpiride_rabeprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Levosulpiride + Rabeprazole",
      bn: "লেভোসালপিরাইড + র্যাবিপ্রাজল"
    },

    generic: {
      en: "Levosulpiride + Rabeprazole",
      bn: "লেভোসালপিরাইড + র্যাবিপ্রাজল"
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
    en: "advanced reflux control",
    bn: "অ্যাডভান্সড রিফ্লাক্স নিয়ন্ত্রণ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent",
      "anti-reflux"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Prokinetic Combination",
    bn: "পিপিআই + প্রোকাইনেটিক কম্বিনেশন"
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
    powerLevel: 9,
    safetyLevel: 6,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      gerd: 10,
      acid_reflux: 10,
      bloating: 9,
      indigestion: 9,
      gastric: 9,
      nausea: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,

    overdose: {
      level: {
        en: "medium-high",
        bn: "মাঝারি-উচ্চ"
      },

      effect: {
        en: "May cause severe drowsiness, tremor and restlessness",
        bn: "তীব্র ঘুম, হাত কাঁপা ও অস্থিরতা হতে পারে"
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
    "advanced gastric",
    "acid reflux",
    "gerd",
    "bloating"
  ],

  symptoms: {
    en: [
      "acid reflux",
      "chest burning",
      "bloating",
      "fullness",
      "indigestion"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "বুকে জ্বালাপোড়া",
      "পেট ফাঁপা",
      "পেট ভরা লাগা",
      "বদহজম"
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
      "severe reflux",
      "night acidity",
      "slow digestion",
      "bloating"
    ],

    bn: [
      "তীব্র রিফ্লাক্স",
      "রাতের অ্যাসিডিটি",
      "ধীরে হজম হওয়া",
      "পেট ফাঁপা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "headache",
        "dry mouth",
        "constipation"
      ],

      bn: [
        "ঘুম ঘুম ভাব",
        "মাথাব্যথা",
        "মুখ শুকানো",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "high prolactin",
        "irregular heartbeat"
      ],

      bn: [
        "শরীর কাঁপার সমস্যা",
        "প্রোল্যাক্টিন বেড়ে যাওয়া",
        "অনিয়মিত হৃদস্পন্দন"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Rabeprazole reduces acid while Levosulpiride improves stomach movement and reflux control",

    bn:
      "র্যাবিপ্রাজল অ্যাসিড কমায় এবং লেভোসালপিরাইড পাকস্থলীর চলাচল বাড়িয়ে রিফ্লাক্স কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Usually once daily before meals",
      bn: "সাধারণত খাবারের আগে দিনে ১ বার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use only as prescribed",
      bn: "শুধু ডাক্তারের পরামর্শ অনুযায়ী"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "rabeprazole levosulpiride",
    "advanced reflux medicine",
    "gerd capsule",
    "bloating medicine",
    "রিফ্লাক্সের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Reflux Control",
      bn: "অ্যাডভান্সড রিফ্লাক্স নিয়ন্ত্রণ"
    },

    colorHint: "orange",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Rablet-L",
    "Rabium Plus",
    "Rabezole L",
    "Rabekind L",
    "Razo L",
    "Rablev",
    "Rabicip-L",
    "Rabesec-L"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "reflux control",
      "improve digestion"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্স নিয়ন্ত্রণ",
      "হজম উন্নত করা"
    ]
  },

  emergencyUse: false
},

  // 🔥 ESOMEPRAZOLE + DOMPERIDONE
// 🔥 VERY COMMON ADVANCED GERD + VOMITING CONTROL MEDICINE

{
  id: "esomeprazole_domperidone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Esomeprazole + Domperidone",
      bn: "ইসোমিপ্রাজল + ডমপেরিডন"
    },

    generic: {
      en: "Esomeprazole + Domperidone",
      bn: "ইসোমিপ্রাজল + ডমপেরিডন"
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
    en: "advanced reflux and nausea control",
    bn: "অ্যাডভান্সড রিফ্লাক্স ও বমি নিয়ন্ত্রণ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent",
      "anti-reflux"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Antiemetic Combination",
    bn: "পিপিআই + বমি প্রতিরোধক কম্বিনেশন"
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
    "40mg + 30mg"
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
    safetyLevel: 6,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      gerd: 10,
      acid_reflux: 10,
      nausea: 10,
      vomiting: 10,
      bloating: 8,
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
        en: "medium-high",
        bn: "মাঝারি-উচ্চ"
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
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "esomeprazole domperidone",
    "acid reflux",
    "vomiting",
    "gerd",
    "gastric"
  ],

  symptoms: {
    en: [
      "acid reflux",
      "vomiting",
      "nausea",
      "chest burning",
      "bloating"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "বমি",
      "বমি ভাব",
      "বুকে জ্বালাপোড়া",
      "পেট ফাঁপা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "gastric",
      "functional dyspepsia"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিক",
      "ফাংশনাল ডিসপেপসিয়া"
    ]
  },

  bestFor: {
    en: [
      "acid reflux with nausea",
      "vomiting with gastric",
      "night acidity",
      "bloating"
    ],

    bn: [
      "বমি সহ অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিকের সাথে বমি",
      "রাতের অ্যাসিডিটি",
      "পেট ফাঁপা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dry mouth",
        "headache",
        "constipation",
        "dizziness"
      ],

      bn: [
        "মুখ শুকানো",
        "মাথাব্যথা",
        "কোষ্ঠকাঠিন্য",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "irregular heartbeat",
        "high prolactin",
        "movement disorder"
      ],

      bn: [
        "অনিয়মিত হৃদস্পন্দন",
        "প্রোল্যাক্টিন বেড়ে যাওয়া",
        "শরীর কাঁপার সমস্যা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Esomeprazole suppresses acid while Domperidone improves stomach movement and prevents nausea",

    bn:
      "ইসোমিপ্রাজল অ্যাসিড কমায় এবং ডমপেরিডন পাকস্থলীর চলাচল বাড়িয়ে বমি কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Usually once daily before meals",
      bn: "সাধারণত খাবারের আগে দিনে ১ বার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use only as prescribed",
      bn: "শুধু ডাক্তারের পরামর্শ অনুযায়ী"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "esomeprazole domperidone",
    "vomiting gastric medicine",
    "acid reflux capsule",
    "gerd medicine",
    "বমি ও গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced GERD Control",
      bn: "অ্যাডভান্সড জিইআরডি নিয়ন্ত্রণ"
    },

    colorHint: "orange",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Nexpro RD",
    "Esoz D",
    "Esomac D",
    "Esokind D",
    "Sompraz D",
    "Esofast D",
    "Esogut D",
    "Esorid D"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "vomiting control",
      "reflux control"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "বমি নিয়ন্ত্রণ",
      "রিফ্লাক্স নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},

// 🔥 PANTOPRAZOLE + ITOPRIDE
// 🔥 VERY IMPORTANT MODERN DIGESTION + REFLUX CONTROL MEDICINE

{
  id: "pantoprazole_itopride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pantoprazole + Itopride",
      bn: "প্যান্টোপ্রাজল + ইটোপ্রাইড"
    },

    generic: {
      en: "Pantoprazole + Itopride Hydrochloride",
      bn: "প্যান্টোপ্রাজল + ইটোপ্রাইড হাইড্রোক্লোরাইড"
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
    en: "advanced gastric motility control",
    bn: "অ্যাডভান্সড গ্যাস্ট্রিক চলাচল নিয়ন্ত্রণ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic agent",
      "anti-reflux"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক ওষুধ",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Prokinetic Combination",
    bn: "পিপিআই + প্রোকাইনেটিক কম্বিনেশন"
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
    "40mg + 150mg",
    "40mg + 50mg"
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
        en: "Itopride Hydrochloride",
        bn: "ইটোপ্রাইড হাইড্রোক্লোরাইড"
      },

      strength: "150mg SR"
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
      gerd: 10,
      bloating: 10,
      indigestion: 10,
      acid_reflux: 9,
      gastric: 9,
      fullness: 9
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
        en: "May cause abdominal cramps, diarrhea and dizziness",
        bn: "পেটে মুচড়ানো ব্যথা, ডায়রিয়া ও মাথা ঘোরা হতে পারে"
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
    "pantoprazole itopride",
    "bloating",
    "acid reflux",
    "indigestion",
    "gerd"
  ],

  symptoms: {
    en: [
      "bloating",
      "fullness",
      "acid reflux",
      "indigestion",
      "gastric discomfort"
    ],

    bn: [
      "পেট ফাঁপা",
      "পেট ভরা লাগা",
      "অ্যাসিড রিফ্লাক্স",
      "বদহজম",
      "গ্যাস্ট্রিক অস্বস্তি"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gerd",
      "acid reflux",
      "gastric motility disorder"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "পাকস্থলীর চলাচল সমস্যা"
    ]
  },

  bestFor: {
    en: [
      "slow digestion",
      "bloating",
      "reflux with fullness",
      "chronic indigestion"
    ],

    bn: [
      "ধীরে হজম হওয়া",
      "পেট ফাঁপা",
      "পেট ভরা সহ রিফ্লাক্স",
      "দীর্ঘস্থায়ী বদহজম"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "headache",
        "abdominal pain",
        "dry mouth"
      ],

      bn: [
        "ডায়রিয়া",
        "মাথাব্যথা",
        "পেট ব্যথা",
        "মুখ শুকানো"
      ]
    },

    serious: {
      en: [
        "high prolactin",
        "allergic reaction",
        "movement disorder"
      ],

      bn: [
        "প্রোল্যাক্টিন বেড়ে যাওয়া",
        "অ্যালার্জি",
        "শরীর কাঁপার সমস্যা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Pantoprazole suppresses acid while Itopride improves stomach emptying and digestion",

    bn:
      "প্যান্টোপ্রাজল অ্যাসিড কমায় এবং ইটোপ্রাইড পাকস্থলীর খাবার খালি হওয়ার গতি বাড়ায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Usually once daily before meals",
      bn: "সাধারণত খাবারের আগে দিনে ১ বার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use only as prescribed",
      bn: "শুধু ডাক্তারের পরামর্শ অনুযায়ী"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "pantoprazole itopride",
    "bloating medicine",
    "indigestion capsule",
    "acid reflux medicine",
    "বদহজমের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Digestion Control",
      bn: "অ্যাডভান্সড হজম নিয়ন্ত্রণ"
    },

    colorHint: "orange",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Pan It",
    "Pantocid IT",
    "Pantosec IT",
    "Pantodac IT",
    "Pantakind IT",
    "Panto It SR",
    "Pantogut IT",
    "Pantoride IT"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reduction",
      "improve digestion",
      "reflux control"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "হজম উন্নত করা",
      "রিফ্লাক্স নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},

// 🔥 SUCRALFATE + OXETACAINE
// 🔥 VERY IMPORTANT STOMACH BURNING + ULCER PAIN RELIEF MEDICINE

{
  id: "sucralfate_oxetacaine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Sucralfate + Oxetacaine",
      bn: "সুক্রালফেট + অক্সেটাকেইন"
    },

    generic: {
      en: "Sucralfate + Oxetacaine",
      bn: "সুক্রালফেট + অক্সেটাকেইন"
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
    en: "ulcer protection and pain relief",
    bn: "আলসার সুরক্ষা ও ব্যথা কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "ulcer protective agent",
      "local anesthetic",
      "anti-ulcer"
    ],

    bn: [
      "আলসার সুরক্ষাকারী ওষুধ",
      "স্থানীয় অবশকারী ওষুধ",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Mucosal Protectant + Local Anesthetic",
    bn: "মিউকোসাল প্রটেক্ট্যান্ট + লোকাল অ্যানেস্থেটিক"
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
      "suspension",
      "syrup"
    ],

    bn: [
      "সাসপেনশন",
      "সিরাপ"
    ]
  },

  strengths: [
    "1g + 10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Sucralfate",
        bn: "সুক্রালফেট"
      },

      strength: "1g"
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
    powerLevel: 8,
    safetyLevel: 8,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      ulcer: 10,
      stomach_burning: 10,
      gastritis: 9,
      acidity: 8,
      gastric_pain: 10
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
        en: "May cause constipation and numbness sensation",
        bn: "কোষ্ঠকাঠিন্য ও অবশ ভাব হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: true,
    breastfeeding: true,
    elderly: true,
    pediatric: false
  },

  // ================= MATCHING =================
  tags: [
    "sucralfate oxetacaine",
    "ulcer pain",
    "stomach burning",
    "gastritis",
    "gastric pain"
  ],

  symptoms: {
    en: [
      "stomach burning",
      "ulcer pain",
      "gastric pain",
      "burning chest"
    ],

    bn: [
      "পেট জ্বালা",
      "আলসারের ব্যথা",
      "গ্যাস্ট্রিক ব্যথা",
      "বুকে জ্বালাপোড়া"
    ]
  },

  diseases: {
    en: [
      "gastric ulcer",
      "gastritis",
      "acid irritation",
      "duodenal ulcer"
    ],

    bn: [
      "গ্যাস্ট্রিক আলসার",
      "গ্যাস্ট্রাইটিস",
      "অ্যাসিডের জ্বালা",
      "ডুওডেনাল আলসার"
    ]
  },

  bestFor: {
    en: [
      "burning stomach pain",
      "ulcer irritation",
      "severe gastritis",
      "acid burning"
    ],

    bn: [
      "পেট জ্বালা ব্যথা",
      "আলসারের জ্বালা",
      "তীব্র গ্যাস্ট্রাইটিস",
      "অ্যাসিডের জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "constipation",
        "dry mouth",
        "mild nausea"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "মুখ শুকানো",
        "হালকা বমি ভাব"
      ]
    },

    serious: {
      en: [
        "allergic reaction",
        "intestinal blockage"
      ],

      bn: [
        "অ্যালার্জি",
        "আন্ত্রিক বাধা"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Sucralfate protects ulcer surfaces while Oxetacaine quickly relieves burning pain",

    bn:
      "সুক্রালফেট আলসারের উপর সুরক্ষামূলক আবরণ তৈরি করে এবং অক্সেটাকেইন দ্রুত জ্বালা ও ব্যথা কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10ml before meals 2-3 times daily",
      bn: "খাবারের আগে দিনে ২-৩ বার ১০ মি.লি."
    },

    child: {
      en: "Only if prescribed",
      bn: "শুধু ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "Use only as directed",
      bn: "নির্দেশনা অনুযায়ী ব্যবহার করতে হবে"
    }
  },

  onset: {
    en: "10-30 minutes",
    bn: "১০-৩০ মিনিট"
  },

  duration: {
    en: "4-6 hours",
    bn: "৪-৬ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "sucralfate oxetacaine",
    "ulcer pain syrup",
    "stomach burning medicine",
    "gastritis syrup",
    "পেট জ্বালার ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Fast Ulcer Pain Relief",
      bn: "দ্রুত আলসার ব্যথা উপশম"
    },

    colorHint: "orange",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Strong",
      bn: "শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Sucrafil O",
    "Sucramal O",
    "Ulgel A",
    "Sucraid O",
    "Sucracid O",
    "Oxysuc",
    "Sucrol O",
    "Gastrocoat O"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "ulcer protection",
      "burning pain relief",
      "gastritis treatment"
    ],

    bn: [
      "আলসার সুরক্ষা",
      "জ্বালা ব্যথা কমানো",
      "গ্যাস্ট্রাইটিস চিকিৎসা"
    ]
  },

  emergencyUse: false
},
// 🔥 BACILLUS CLAUSII
// 🔥 VERY IMPORTANT GUT FLORA + ANTIBIOTIC ASSOCIATED DIARRHEA CONTROL

{
  id: "bacillus_clausii",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Bacillus Clausii",
      bn: "ব্যাসিলাস ক্লসিই"
    },

    generic: {
      en: "Bacillus Clausii Spores",
      bn: "ব্যাসিলাস ক্লসিই স্পোরস"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "probiotic",
    bn: "প্রোবায়োটিক"
  },

  subgroup: {
    en: "gut flora restoration",
    bn: "আন্ত্রিক উপকারী ব্যাকটেরিয়া পুনরুদ্ধার"
  },

  therapeuticCategory: {
    en: [
      "probiotic",
      "anti-diarrheal support",
      "gut microbiome therapy"
    ],

    bn: [
      "প্রোবায়োটিক",
      "ডায়রিয়া সহায়ক চিকিৎসা",
      "গাট মাইক্রোবায়োম থেরাপি"
    ]
  },

  class: {
    en: "Spore Forming Probiotic",
    bn: "স্পোর তৈরিকারী প্রোবায়োটিক"
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
      "oral suspension",
      "capsule",
      "vial"
    ],

    bn: [
      "ওরাল সাসপেনশন",
      "ক্যাপসুল",
      "ভায়াল"
    ]
  },

  strengths: [
    "2 Billion Spores",
    "4 Billion Spores"
  ],

  composition: [
    {
      ingredient: {
        en: "Bacillus Clausii Spores",
        bn: "ব্যাসিলাস ক্লসিই স্পোরস"
      },

      strength: "2 Billion Spores"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 10,

    severity: {
      en: "safe",
      bn: "নিরাপদ"
    },

    score: {
      diarrhea: 10,
      gut_flora: 10,
      antibiotic_side_effect: 10,
      indigestion: 8,
      bloating: 7
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
        en: "Usually very safe with minimal overdose effects",
        bn: "সাধারণত অতিরিক্ত খেলেও তুলনামূলক নিরাপদ"
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
    "bacillus clausii",
    "probiotic",
    "diarrhea",
    "gut flora",
    "antibiotic diarrhea"
  ],

  symptoms: {
    en: [
      "diarrhea",
      "loose stool",
      "bloating",
      "stomach upset"
    ],

    bn: [
      "ডায়রিয়া",
      "পাতলা পায়খানা",
      "পেট ফাঁপা",
      "পেট খারাপ"
    ]
  },

  diseases: {
    en: [
      "antibiotic associated diarrhea",
      "gut flora imbalance",
      "indigestion",
      "intestinal infection support"
    ],

    bn: [
      "অ্যান্টিবায়োটিকজনিত ডায়রিয়া",
      "আন্ত্রিক ব্যাকটেরিয়ার ভারসাম্যহীনতা",
      "বদহজম",
      "আন্ত্রিক সংক্রমণে সহায়ক চিকিৎসা"
    ]
  },

  bestFor: {
    en: [
      "diarrhea after antibiotics",
      "gut recovery",
      "intestinal balance",
      "digestive recovery"
    ],

    bn: [
      "অ্যান্টিবায়োটিকের পর ডায়রিয়া",
      "আন্ত্রিক পুনরুদ্ধার",
      "হজমের ভারসাম্য ফিরিয়ে আনা",
      "হজম শক্তি পুনরুদ্ধার"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "mild bloating",
        "gas",
        "mild stomach discomfort"
      ],

      bn: [
        "হালকা পেট ফাঁপা",
        "গ্যাস",
        "হালকা পেট অস্বস্তি"
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
      "Restores healthy gut bacteria and improves intestinal balance after infection or antibiotics",

    bn:
      "অ্যান্টিবায়োটিক বা সংক্রমণের পর অন্ত্রের উপকারী ব্যাকটেরিয়া পুনরুদ্ধার করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 vial or capsule 1-2 times daily",
      bn: "দিনে ১-২ বার ১ ভায়াল বা ক্যাপসুল"
    },

    child: {
      en: "Dose depends on age and doctor advice",
      bn: "বয়স ও ডাক্তারের পরামর্শ অনুযায়ী"
    },

    maxDaily: {
      en: "Use as advised",
      bn: "পরামর্শ অনুযায়ী ব্যবহার করতে হবে"
    }
  },

  onset: {
    en: "Within 1-2 days",
    bn: "১-২ দিনের মধ্যে"
  },

  duration: {
    en: "Depends on treatment duration",
    bn: "চিকিৎসার সময় অনুযায়ী"
  },

  // ================= SEARCH =================
  searchableText: [
    "bacillus clausii",
    "probiotic medicine",
    "antibiotic diarrhea medicine",
    "gut flora medicine",
    "প্রোবায়োটিক ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Gut Flora Recovery",
      bn: "আন্ত্রিক ব্যাকটেরিয়া পুনরুদ্ধার"
    },

    colorHint: "green",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Supportive Therapy",
      bn: "সহায়ক থেরাপি"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Enterogermina",
    "Bacigerm",
    "Clausibac",
    "Gutflora",
    "Bacipro",
    "FloraFix",
    "Probac",
    "Gutrestore"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "gut flora restoration",
      "diarrhea support",
      "digestive recovery"
    ],

    bn: [
      "আন্ত্রিক ব্যাকটেরিয়া পুনরুদ্ধার",
      "ডায়রিয়ায় সহায়ক চিকিৎসা",
      "হজম শক্তি পুনরুদ্ধার"
    ]
  },

  emergencyUse: false
},

// 🔥 LACTOBACILLUS + SACCHAROMYCES BOULARDII
// 🔥 VERY IMPORTANT ADVANCED PROBIOTIC FOR GUT + DIGESTION

{
  id: "lactobacillus_saccharomyces_boulardii",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Lactobacillus + Saccharomyces Boulardii",
      bn: "ল্যাকটোব্যাসিলাস + স্যাকারোমাইসেস বুলার্ডি"
    },

    generic: {
      en: "Lactobacillus Spores + Saccharomyces Boulardii",
      bn: "ল্যাকটোব্যাসিলাস স্পোরস + স্যাকারোমাইসেস বুলার্ডি"
    }
  },

  type: {
    en: "double",
    bn: "ডাবল"
  },

  group: {
    en: "probiotic",
    bn: "প্রোবায়োটিক"
  },

  subgroup: {
    en: "advanced gut flora support",
    bn: "অ্যাডভান্সড আন্ত্রিক ব্যাকটেরিয়া সাপোর্ট"
  },

  therapeuticCategory: {
    en: [
      "probiotic",
      "anti-diarrheal support",
      "gut microbiome therapy"
    ],

    bn: [
      "প্রোবায়োটিক",
      "ডায়রিয়া সহায়ক চিকিৎসা",
      "গাট মাইক্রোবায়োম থেরাপি"
    ]
  },

  class: {
    en: "Multi-Strain Probiotic",
    bn: "মাল্টি-স্ট্রেইন প্রোবায়োটিক"
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
      "sachet",
      "powder"
    ],

    bn: [
      "ক্যাপসুল",
      "স্যাশে",
      "পাউডার"
    ]
  },

  strengths: [
    "5 Billion CFU",
    "10 Billion CFU"
  ],

  composition: [
    {
      ingredient: {
        en: "Lactobacillus",
        bn: "ল্যাকটোব্যাসিলাস"
      },

      strength: "5 Billion CFU"
    },

    {
      ingredient: {
        en: "Saccharomyces Boulardii",
        bn: "স্যাকারোমাইসেস বুলার্ডি"
      },

      strength: "250mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 10,

    severity: {
      en: "safe",
      bn: "নিরাপদ"
    },

    score: {
      diarrhea: 10,
      gut_flora: 10,
      indigestion: 9,
      bloating: 8,
      antibiotic_side_effect: 10
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
        en: "Usually causes only mild gas or bloating",
        bn: "সাধারণত হালকা গ্যাস বা পেট ফাঁপা হতে পারে"
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
    "lactobacillus",
    "saccharomyces boulardii",
    "probiotic",
    "gut flora",
    "diarrhea"
  ],

  symptoms: {
    en: [
      "diarrhea",
      "bloating",
      "stomach upset",
      "indigestion"
    ],

    bn: [
      "ডায়রিয়া",
      "পেট ফাঁপা",
      "পেট খারাপ",
      "বদহজম"
    ]
  },

  diseases: {
    en: [
      "gut flora imbalance",
      "antibiotic associated diarrhea",
      "indigestion",
      "traveler diarrhea"
    ],

    bn: [
      "আন্ত্রিক ব্যাকটেরিয়ার ভারসাম্যহীনতা",
      "অ্যান্টিবায়োটিকজনিত ডায়রিয়া",
      "বদহজম",
      "ট্রাভেলার ডায়রিয়া"
    ]
  },

  bestFor: {
    en: [
      "gut recovery after antibiotics",
      "digestive balance",
      "chronic loose stool",
      "improve digestion"
    ],

    bn: [
      "অ্যান্টিবায়োটিকের পর অন্ত্র পুনরুদ্ধার",
      "হজমের ভারসাম্য",
      "দীর্ঘদিন পাতলা পায়খানা",
      "হজম উন্নত করা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "mild gas",
        "bloating",
        "stomach discomfort"
      ],

      bn: [
        "হালকা গ্যাস",
        "পেট ফাঁপা",
        "পেট অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "rare fungal infection in weak immunity"
      ],

      bn: [
        "দুর্বল রোগ প্রতিরোধ ক্ষমতায় বিরল ফাঙ্গাল সংক্রমণ"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Restores healthy intestinal bacteria and improves digestion by balancing gut microbiome",

    bn:
      "অন্ত্রের উপকারী ব্যাকটেরিয়ার ভারসাম্য ফিরিয়ে এনে হজম উন্নত করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule or sachet 1-2 times daily",
      bn: "দিনে ১-২ বার ১ ক্যাপসুল বা স্যাশে"
    },

    child: {
      en: "Dose depends on age",
      bn: "ডোজ বয়স অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "Use as advised",
      bn: "পরামর্শ অনুযায়ী ব্যবহার করতে হবে"
    }
  },

  onset: {
    en: "1-3 days",
    bn: "১-৩ দিনের মধ্যে"
  },

  duration: {
    en: "Depends on gut recovery",
    bn: "আন্ত্রিক পুনরুদ্ধারের উপর নির্ভর করে"
  },

  // ================= SEARCH =================
  searchableText: [
    "lactobacillus probiotic",
    "saccharomyces boulardii",
    "gut flora medicine",
    "probiotic capsule",
    "প্রোবায়োটিক ক্যাপসুল"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Gut Recovery",
      bn: "অ্যাডভান্সড অন্ত্র পুনরুদ্ধার"
    },

    colorHint: "green",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Supportive Therapy",
      bn: "সহায়ক থেরাপি"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Econorm",
    "Darolac",
    "Sporlac",
    "Bifilac",
    "Vizylac",
    "Florabact",
    "Gutwin",
    "Probiofit"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "gut flora restoration",
      "digestive balance",
      "diarrhea support"
    ],

    bn: [
      "আন্ত্রিক ব্যাকটেরিয়া পুনরুদ্ধার",
      "হজমের ভারসাম্য",
      "ডায়রিয়ায় সহায়ক চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 PANCREATIN + FUNGAL DIASTASE + PEPSIN
// 🔥 VERY IMPORTANT DIGESTIVE ENZYME MEDICINE

{
  id: "pancreatin_fungal_diastase_pepsin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pancreatin + Fungal Diastase + Pepsin",
      bn: "প্যানক্রিয়াটিন + ফাঙ্গাল ডায়াস্টেজ + পেপসিন"
    },

    generic: {
      en: "Pancreatin + Fungal Diastase + Pepsin",
      bn: "প্যানক্রিয়াটিন + ফাঙ্গাল ডায়াস্টেজ + পেপসিন"
    }
  },

  type: {
    en: "triple",
    bn: "ট্রিপল"
  },

  group: {
    en: "digestive enzyme",
    bn: "হজম এনজাইম"
  },

  subgroup: {
    en: "enzyme replacement therapy",
    bn: "হজম এনজাইম সাপোর্ট থেরাপি"
  },

  therapeuticCategory: {
    en: [
      "digestive enzyme",
      "enzyme supplement",
      "anti-indigestion"
    ],

    bn: [
      "হজম এনজাইম",
      "এনজাইম সাপ্লিমেন্ট",
      "বদহজম কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Digestive Enzyme Combination",
    bn: "হজম এনজাইম কম্বিনেশন"
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
      "syrup"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "সিরাপ"
    ]
  },

  strengths: [
    "Digestive Enzyme Combination"
  ],

  composition: [
    {
      ingredient: {
        en: "Pancreatin",
        bn: "প্যানক্রিয়াটিন"
      },

      strength: "170mg"
    },

    {
      ingredient: {
        en: "Fungal Diastase",
        bn: "ফাঙ্গাল ডায়াস্টেজ"
      },

      strength: "50mg"
    },

    {
      ingredient: {
        en: "Pepsin",
        bn: "পেপসিন"
      },

      strength: "10mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 8,
    safetyLevel: 9,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      indigestion: 10,
      fullness: 10,
      bloating: 9,
      poor_digestion: 10,
      appetite_loss: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 0,
    liver: 0,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause mild stomach irritation or diarrhea",
        bn: "হালকা পেট জ্বালা বা ডায়রিয়া হতে পারে"
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
    "digestive enzyme",
    "pancreatin",
    "fungal diastase",
    "pepsin",
    "indigestion"
  ],

  symptoms: {
    en: [
      "indigestion",
      "fullness after meals",
      "bloating",
      "heavy stomach"
    ],

    bn: [
      "বদহজম",
      "খাওয়ার পর পেট ভরা লাগা",
      "পেট ফাঁপা",
      "পেট ভারী লাগা"
    ]
  },

  diseases: {
    en: [
      "poor digestion",
      "enzyme deficiency",
      "functional dyspepsia",
      "loss of appetite"
    ],

    bn: [
      "দুর্বল হজম",
      "এনজাইমের ঘাটতি",
      "ফাংশনাল ডিসপেপসিয়া",
      "ক্ষুধামন্দা"
    ]
  },

  bestFor: {
    en: [
      "heavy meal digestion",
      "chronic indigestion",
      "gas after meals",
      "slow digestion"
    ],

    bn: [
      "ভারী খাবার হজম",
      "দীর্ঘদিন বদহজম",
      "খাওয়ার পর গ্যাস",
      "ধীরে হজম হওয়া"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "mild nausea",
        "stomach irritation",
        "loose stool"
      ],

      bn: [
        "হালকা বমি ভাব",
        "পেট জ্বালা",
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
      "Supplies digestive enzymes that help break down proteins, fats and carbohydrates",

    bn:
      "হজম এনজাইম সরবরাহ করে যা প্রোটিন, চর্বি ও শর্করা ভাঙতে সাহায্য করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 tablet after meals 2-3 times daily",
      bn: "খাবারের পরে দিনে ২-৩ বার ১ ট্যাবলেট"
    },

    child: {
      en: "Dose depends on age",
      bn: "ডোজ বয়স অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "Use as advised",
      bn: "পরামর্শ অনুযায়ী ব্যবহার করতে হবে"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "4-6 hours",
    bn: "৪-৬ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "digestive enzyme medicine",
    "pancreatin tablet",
    "fungal diastase pepsin",
    "indigestion enzyme medicine",
    "হজমের এনজাইম ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Digestive Enzyme Support",
      bn: "হজম এনজাইম সাপোর্ট"
    },

    colorHint: "green",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Supportive Therapy",
      bn: "সহায়ক থেরাপি"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Aristozyme",
    "Unienzyme",
    "Digipen",
    "Enzar Forte",
    "Enzycare",
    "Digeset",
    "Peptizyme",
    "Panzyme"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "improve digestion",
      "enzyme replacement",
      "reduce bloating"
    ],

    bn: [
      "হজম উন্নত করা",
      "এনজাইম সাপোর্ট",
      "পেট ফাঁপা কমানো"
    ]
  },

  emergencyUse: false
},
// 🔥 LEVOSULPIRIDE + ESOMEPRAZOLE
// 🔥 VERY IMPORTANT ADVANCED GERD + REFLUX MEDICINE

{
  id: "levosulpiride_esomeprazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Levosulpiride + Esomeprazole",
      bn: "লেভোসালপিরাইড + ইসোমিপ্রাজল"
    },

    generic: {
      en: "Levosulpiride + Esomeprazole",
      bn: "লেভোসালপিরাইড + ইসোমিপ্রাজল"
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
    en: "advanced reflux control",
    bn: "অ্যাডভান্সড রিফ্লাক্স নিয়ন্ত্রণ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic",
      "anti-reflux"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Prokinetic Combination",
    bn: "পিপিআই + প্রোকাইনেটিক কম্বিনেশন"
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
    "75mg + 40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Levosulpiride",
        bn: "লেভোসালপিরাইড"
      },

      strength: "75mg"
    },

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
    safetyLevel: 6,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      gerd: 10,
      acid_reflux: 10,
      acidity: 9,
      bloating: 9,
      indigestion: 9,
      heartburn: 10
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
        en: "May cause drowsiness, tremor and severe dizziness",
        bn: "ঘুমভাব, হাত কাঁপা ও তীব্র মাথা ঘোরা হতে পারে"
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
    "esomeprazole",
    "acid reflux",
    "gerd",
    "gastric"
  ],

  symptoms: {
    en: [
      "acid reflux",
      "heartburn",
      "bloating",
      "food coming back to throat"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "বুক জ্বালা",
      "পেট ফাঁপা",
      "খাবার গলায় উঠে আসা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "functional dyspepsia",
      "chronic gastritis"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস"
    ]
  },

  bestFor: {
    en: [
      "severe reflux",
      "night acidity",
      "food regurgitation",
      "chronic gastric"
    ],

    bn: [
      "তীব্র রিফ্লাক্স",
      "রাতের অ্যাসিডিটি",
      "খাবার উঠে আসা",
      "দীর্ঘদিনের গ্যাস্ট্রিক"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "sleepiness",
        "dizziness",
        "constipation"
      ],

      bn: [
        "ঘুমভাব",
        "মাথা ঘোরা",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "high prolactin"
      ],

      bn: [
        "শরীর কাঁপা বা নড়াচড়ার সমস্যা",
        "প্রোল্যাক্টিন বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Reduces stomach acid and improves stomach movement to prevent reflux",

    bn:
      "অ্যাসিড কমায় এবং পাকস্থলীর চলাচল বাড়িয়ে রিফ্লাক্স কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule daily before meals",
      bn: "খাবারের আগে দিনে ১ ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use only as prescribed",
      bn: "শুধু ডাক্তারের পরামর্শ অনুযায়ী"
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
    "levosulpiride esomeprazole",
    "advanced reflux medicine",
    "gerd capsule",
    "acid reflux medicine",
    "রিফ্লাক্সের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced GERD Control",
      bn: "অ্যাডভান্সড জিইআরডি নিয়ন্ত্রণ"
    },

    colorHint: "darkorange",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Very Strong",
      bn: "খুব শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Nexpro RD",
    "Esomac L",
    "Esoz L",
    "Rablet LS",
    "Lesuride",
    "Protera L",
    "Esofag L",
    "Levomac"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid reflux control",
      "GERD treatment",
      "reduce bloating"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স নিয়ন্ত্রণ",
      "জিইআরডি চিকিৎসা",
      "পেট ফাঁপা কমানো"
    ]
  },

  emergencyUse: false
},
// 🔥 RABEPRAZOLE + DOMPERIDONE
// 🔥 VERY IMPORTANT GERD + GAS + NAUSEA MEDICINE

{
  id: "rabeprazole_domperidone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Rabeprazole + Domperidone",
      bn: "র্যাবিপ্রাজল + ডমপেরিডন"
    },

    generic: {
      en: "Rabeprazole Sodium + Domperidone",
      bn: "র্যাবিপ্রাজল সোডিয়াম + ডমপেরিডন"
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
    en: "acid reducer with prokinetic",
    bn: "অ্যাসিড কমানো ও হজম গতি বাড়ানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "prokinetic",
      "anti-reflux"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "প্রোকাইনেটিক",
      "রিফ্লাক্স কমানোর ওষুধ"
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
    "20mg + 30mg"
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
        en: "Domperidone",
        bn: "ডমপেরিডন"
      },

      strength: "30mg SR"
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
      reflux: 10,
      gerd: 10,
      nausea: 9,
      bloating: 9,
      heartburn: 10
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
        en: "May cause irregular heartbeat, dizziness and dry mouth",
        bn: "অনিয়মিত হৃদস্পন্দন, মাথা ঘোরা ও মুখ শুকানো হতে পারে"
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
    "rabeprazole",
    "domperidone",
    "happy d",
    "razocide hd",
    "acid reflux"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "nausea",
      "bloating",
      "food reflux"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "বমি ভাব",
      "পেট ফাঁপা",
      "খাবার উঠে আসা"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "functional dyspepsia",
      "chronic gastric"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "ফাংশনাল ডিসপেপসিয়া",
      "দীর্ঘদিনের গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "acid reflux",
      "gastric with nausea",
      "night acidity",
      "food regurgitation"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "বমি ভাবসহ গ্যাস্ট্রিক",
      "রাতের অ্যাসিডিটি",
      "খাবার উঠে আসা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "dry mouth",
        "dizziness",
        "constipation"
      ],

      bn: [
        "মুখ শুকানো",
        "মাথা ঘোরা",
        "কোষ্ঠকাঠিন্য"
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
      "Reduces acid production and improves stomach emptying to reduce reflux and nausea",

    bn:
      "অ্যাসিড কমায় এবং পাকস্থলীর খাবার নিচে নামাতে সাহায্য করে রিফ্লাক্স ও বমি ভাব কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 capsule before breakfast daily",
      bn: "সকালের খাবারের আগে দিনে ১ ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use only as prescribed",
      bn: "শুধু ডাক্তারের পরামর্শ অনুযায়ী"
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
    "happy d",
    "razocide hd",
    "rabeprazole domperidone",
    "acid reflux capsule",
    "গ্যাস্ট্রিক ক্যাপসুল"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Reflux Relief",
      bn: "অ্যাডভান্সড রিফ্লাক্স উপশম"
    },

    colorHint: "orange",

    commonUse: true,

    advancedMedicine: true,

    prescriptionStrength: {
      en: "Very Strong",
      bn: "খুব শক্তিশালী"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Happy D",
    "Razocide HD",
    "Rablet D",
    "Rabonik D",
    "Razo D",
    "Rabecid D",
    "Rabez D",
    "Rabitop D"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "GERD treatment",
      "acid reflux control",
      "nausea reduction"
    ],

    bn: [
      "জিইআরডি চিকিৎসা",
      "অ্যাসিড রিফ্লাক্স নিয়ন্ত্রণ",
      "বমি ভাব কমানো"
    ]
  },

  emergencyUse: false
},


// 🔥 RIFAXIMIN
// 🔥 GUT-SPECIFIC ANTIBIOTIC FOR IBS-D & INTESTINAL INFECTION

{
  id: "rifaximin",

  names: {
    primary: {
      en: "Rifaximin",
      bn: "রিফাক্সিমিন"
    },

    generic: {
      en: "Rifaximin",
      bn: "রিফাক্সিমিন"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastrointestinal",
    bn: "গ্যাস্ট্রোইনটেস্টাইনাল"
  },

  subgroup: {
    en: "gut antibiotic",
    bn: "আন্ত্রিক অ্যান্টিবায়োটিক"
  },

  therapeuticCategory: {
    en: [
      "intestinal antibiotic",
      "ibs-d treatment",
      "anti-diarrheal"
    ],

    bn: [
      "আন্ত্রিক অ্যান্টিবায়োটিক",
      "আইবিএস-ডি চিকিৎসা",
      "ডায়রিয়া চিকিৎসা"
    ]
  },

  class: {
    en: "Rifamycin Antibiotic",
    bn: "রিফামাইসিন অ্যান্টিবায়োটিক"
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
    "200mg",
    "400mg",
    "550mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Rifaximin",
        bn: "রিফাক্সিমিন"
      },

      strength: "550mg"
    }
  ],

  otc: false,
  rx: true,
  antibiotic: true,

  ai: {
    powerLevel: 9,
    safetyLevel: 8,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      ibs_d: 10,
      diarrhea: 10,
      bloating: 9,
      intestinal_infection: 10
    }
  },

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
        en: "May cause severe diarrhea and nausea",
        bn: "তীব্র ডায়রিয়া ও বমি ভাব হতে পারে"
      }
    }
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: false
  },

  tags: [
    "rifaximin",
    "ibs d",
    "intestinal infection",
    "traveler diarrhea",
    "gut antibiotic"
  ],

  symptoms: {
    en: [
      "loose stool",
      "bloating",
      "abdominal discomfort",
      "frequent diarrhea"
    ],

    bn: [
      "পাতলা পায়খানা",
      "পেট ফাঁপা",
      "পেটের অস্বস্তি",
      "বারবার ডায়রিয়া"
    ]
  },

  diseases: {
    en: [
      "ibs-d",
      "traveler diarrhea",
      "intestinal bacterial overgrowth"
    ],

    bn: [
      "আইবিএস-ডি",
      "ভ্রমণজনিত ডায়রিয়া",
      "আন্ত্রিক ব্যাকটেরিয়া অতিবৃদ্ধি"
    ]
  },

  bestFor: {
    en: [
      "ibs with diarrhea",
      "gut infection",
      "bloating with loose stool"
    ],

    bn: [
      "ডায়রিয়াসহ আইবিএস",
      "আন্ত্রিক সংক্রমণ",
      "পাতলা পায়খানার সাথে পেট ফাঁপা"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "nausea",
        "headache",
        "abdominal pain"
      ],

      bn: [
        "বমি ভাব",
        "মাথাব্যথা",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "severe allergic reaction",
        "persistent diarrhea"
      ],

      bn: [
        "তীব্র অ্যালার্জি",
        "দীর্ঘস্থায়ী ডায়রিয়া"
      ]
    }
  },

  mechanism: {
    en:
      "Acts inside the intestine to stop harmful bacterial growth",

    bn:
      "অন্ত্রের ভিতরে ক্ষতিকর ব্যাকটেরিয়ার বৃদ্ধি বন্ধ করে কাজ করে"
  },

  dosing: {
    adult: {
      en: "Usually 200mg-550mg 2-3 times daily",
      bn: "সাধারণত দিনে ২-৩ বার ২০০-৫৫০ মি.গ্রা."
    },

    child: {
      en: "Only under specialist advice",
      bn: "বিশেষজ্ঞের পরামর্শে"
    },

    maxDaily: {
      en: "1650mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১৬৫০ মি.গ্রা."
    }
  },

  onset: {
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "Depends on treatment course",
    bn: "চিকিৎসার সময়ের উপর নির্ভরশীল"
  },

  searchableText: [
    "rifaximin",
    "ibs d medicine",
    "gut antibiotic",
    "intestinal infection medicine",
    "ডায়রিয়ার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Advanced GI Antibiotic",
      bn: "অ্যাডভান্সড জিআই অ্যান্টিবায়োটিক"
    },

    colorHint: "orange",

    commonUse: false,

    hospitalLevel: true
  },

  brands: [
    "Xifaxan",
    "Rifax",
    "Rixmin",
    "Rifagut",
    "Gutfix"
  ],

  usageType: {
    en: [
      "intestinal infection treatment",
      "ibs-d control"
    ],

    bn: [
      "আন্ত্রিক সংক্রমণ চিকিৎসা",
      "আইবিএস-ডি নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},
// 🔥 PINAVERIUM
// 🔥 IBS + INTESTINAL SPASM CONTROL MEDICINE

{
  id: "pinaverium",

  names: {
    primary: {
      en: "Pinaverium",
      bn: "পিনাভেরিয়াম"
    },

    generic: {
      en: "Pinaverium Bromide",
      bn: "পিনাভেরিয়াম ব্রোমাইড"
    }
  },

  type: {
    en: "single",
    bn: "সিঙ্গেল"
  },

  group: {
    en: "gastrointestinal",
    bn: "গ্যাস্ট্রোইনটেস্টাইনাল"
  },

  subgroup: {
    en: "antispasmodic",
    bn: "খিঁচুনি কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "ibs treatment",
      "intestinal antispasmodic"
    ],

    bn: [
      "আইবিএস চিকিৎসা",
      "আন্ত্রিক খিঁচুনি কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Calcium Channel Antispasmodic",
    bn: "ক্যালসিয়াম চ্যানেল অ্যান্টিস্পাজমোডিক"
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
    "50mg",
    "100mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Pinaverium Bromide",
        bn: "পিনাভেরিয়াম ব্রোমাইড"
      },

      strength: "50mg"
    }
  ],

  otc: false,
  rx: true,
  antibiotic: false,

  ai: {
    powerLevel: 8,
    safetyLevel: 8,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      ibs: 10,
      abdominal_cramp: 10,
      intestinal_spasm: 10,
      bloating: 8
    }
  },

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
        en: "May cause dizziness and nausea",
        bn: "মাথা ঘোরা ও বমি ভাব হতে পারে"
      }
    }
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: false
  },

  tags: [
    "pinaverium",
    "ibs",
    "intestinal spasm",
    "abdominal cramp",
    "bloating"
  ],

  symptoms: {
    en: [
      "abdominal cramp",
      "bloating",
      "intestinal pain",
      "spasm"
    ],

    bn: [
      "পেট মোচড়",
      "পেট ফাঁপা",
      "আন্ত্রিক ব্যথা",
      "খিঁচুনি"
    ]
  },

  diseases: {
    en: [
      "ibs",
      "intestinal spasm",
      "functional bowel disorder"
    ],

    bn: [
      "আইবিএস",
      "আন্ত্রিক খিঁচুনি",
      "আন্ত্রিক কার্যকারিতা সমস্যা"
    ]
  },

  bestFor: {
    en: [
      "ibs pain",
      "intestinal spasm",
      "abdominal cramp"
    ],

    bn: [
      "আইবিএসের ব্যথা",
      "আন্ত্রিক খিঁচুনি",
      "পেট মোচড়"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "nausea",
        "constipation",
        "dry mouth"
      ],

      bn: [
        "বমি ভাব",
        "কোষ্ঠকাঠিন্য",
        "মুখ শুকানো"
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

  mechanism: {
    en:
      "Relaxes intestinal smooth muscles and reduces bowel spasm",

    bn:
      "আন্ত্রিক মাংসপেশী শিথিল করে খিঁচুনি কমায়"
  },

  dosing: {
    adult: {
      en: "50mg-100mg two or three times daily with meals",
      bn: "খাবারের সাথে দিনে ২-৩ বার ৫০-১০০ মি.গ্রা."
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
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "6-8 hours",
    bn: "৬-৮ ঘণ্টা"
  },

  searchableText: [
    "pinaverium",
    "ibs medicine",
    "intestinal spasm medicine",
    "abdominal cramp medicine",
    "আইবিএসের ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Advanced IBS Control",
      bn: "অ্যাডভান্সড আইবিএস নিয়ন্ত্রণ"
    },

    colorHint: "purple",

    commonUse: false,

    specialistMedicine: true
  },

  brands: [
    "Dicetel",
    "Pinac",
    "Pinaspas",
    "Pinabid",
    "Spasmopin"
  ],

  usageType: {
    en: [
      "ibs control",
      "intestinal spasm relief"
    ],

    bn: [
      "আইবিএস নিয়ন্ত্রণ",
      "আন্ত্রিক খিঁচুনি কমানো"
    ]
  },

  emergencyUse: false
},


// 🔥 LAFUTIDINE
// 🔥 ADVANCED H2 BLOCKER FOR ACIDITY & ULCER

{
  id: "lafutidine",

  names: {
    primary: {
      en: "Lafutidine",
      bn: "লাফুটিডিন"
    },

    generic: {
      en: "Lafutidine",
      bn: "লাফুটিডিন"
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
    en: "advanced h2 blocker",
    bn: "অ্যাডভান্সড এইচ২ ব্লকার"
  },

  therapeuticCategory: {
    en: [
      "acid reducer",
      "anti-ulcer",
      "h2 blocker"
    ],

    bn: [
      "অ্যাসিড কমানোর ওষুধ",
      "আলসারের ওষুধ",
      "এইচ২ ব্লকার"
    ]
  },

  class: {
    en: "Histamine H2 Receptor Blocker",
    bn: "হিস্টামিন এইচ২ রিসেপ্টর ব্লকার"
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
    "5mg",
    "10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Lafutidine",
        bn: "লাফুটিডিন"
      },

      strength: "10mg"
    }
  ],

  otc: false,
  rx: true,
  antibiotic: false,

  ai: {
    powerLevel: 8,
    safetyLevel: 8,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      acidity: 10,
      heartburn: 10,
      gastric: 9,
      ulcer: 9,
      gerd: 8
    }
  },

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
        en: "May cause dizziness and constipation",
        bn: "মাথা ঘোরা ও কোষ্ঠকাঠিন্য হতে পারে"
      }
    }
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: false
  },

  tags: [
    "lafutidine",
    "acid reducer",
    "heartburn",
    "ulcer",
    "gerd"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acidity",
      "stomach burning",
      "night acidity"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিডিটি",
      "পেট জ্বালা",
      "রাতের অ্যাসিডিটি"
    ]
  },

  diseases: {
    en: [
      "gastric ulcer",
      "gerd",
      "acid reflux",
      "chronic acidity"
    ],

    bn: [
      "গ্যাস্ট্রিক আলসার",
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "দীর্ঘস্থায়ী অ্যাসিডিটি"
    ]
  },

  bestFor: {
    en: [
      "night acidity",
      "heartburn",
      "ulcer pain"
    ],

    bn: [
      "রাতের অ্যাসিডিটি",
      "বুক জ্বালা",
      "আলসারের ব্যথা"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "constipation",
        "headache",
        "dizziness"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "মাথাব্যথা",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "allergic reaction",
        "liver enzyme elevation"
      ],

      bn: [
        "অ্যালার্জি",
        "লিভার এনজাইম বেড়ে যাওয়া"
      ]
    }
  },

  mechanism: {
    en:
      "Blocks histamine H2 receptors and reduces stomach acid secretion",

    bn:
      "হিস্টামিন এইচ২ রিসেপ্টর ব্লক করে পাকস্থলীর অ্যাসিড নিঃসরণ কমায়"
  },

  dosing: {
    adult: {
      en: "10mg once or twice daily",
      bn: "দিনে ১-২ বার ১০ মি.গ্রা."
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "20mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২০ মি.গ্রা."
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "10-12 hours",
    bn: "১০-১২ ঘণ্টা"
  },

  searchableText: [
    "lafutidine",
    "advanced acidity medicine",
    "heartburn medicine",
    "ulcer medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Advanced Acid Control",
      bn: "অ্যাডভান্সড অ্যাসিড নিয়ন্ত্রণ"
    },

    colorHint: "blue",

    commonUse: false,

    specialistMedicine: true
  },

  brands: [
    "Lafaxid",
    "Lafutin",
    "Lafurex",
    "Lafcid",
    "Lafugel"
  ],

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
// 🔥 CAMELOFIN + PARACETAMOL
// 🔥 SEVERE ABDOMINAL CRAMP & COLICKY PAIN RELIEF

{
  id: "camylofin_paracetamol",

  names: {
    primary: {
      en: "Camylofin + Paracetamol",
      bn: "ক্যামাইলোফিন + প্যারাসিটামল"
    },

    generic: {
      en: "Camylofin Dihydrochloride + Paracetamol",
      bn: "ক্যামাইলোফিন ডাইহাইড্রোক্লোরাইড + প্যারাসিটামল"
    }
  },

  type: {
    en: "double",
    bn: "ডাবল"
  },

  group: {
    en: "gastrointestinal",
    bn: "গ্যাস্ট্রোইনটেস্টাইনাল"
  },

  subgroup: {
    en: "antispasmodic analgesic",
    bn: "খিঁচুনি ও ব্যথা কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antispasmodic",
      "pain reliever"
    ],

    bn: [
      "অ্যান্টিস্পাজমোডিক",
      "ব্যথা কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Smooth Muscle Relaxant + Analgesic",
    bn: "স্মুথ মাসল রিল্যাক্স্যান্ট + ব্যথানাশক"
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
    "25mg + 325mg",
    "50mg + 500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Camylofin Dihydrochloride",
        bn: "ক্যামাইলোফিন ডাইহাইড্রোক্লোরাইড"
      },

      strength: "50mg"
    },

    {
      ingredient: {
        en: "Paracetamol",
        bn: "প্যারাসিটামল"
      },

      strength: "500mg"
    }
  ],

  otc: false,
  rx: true,
  antibiotic: false,

  ai: {
    powerLevel: 8,
    safetyLevel: 7,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      abdominal_cramp: 10,
      colicky_pain: 10,
      stomach_spasm: 9,
      ibs_pain: 8
    }
  },

  risks: {
    gastric: 1,
    kidney: 1,
    liver: 3,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause severe liver damage and excessive drowsiness",
        bn: "তীব্র লিভার ক্ষতি ও অতিরিক্ত ঘুম হতে পারে"
      }
    }
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: true,
    pediatric: false
  },

  tags: [
    "camylofin",
    "abdominal cramp",
    "colic pain",
    "stomach spasm",
    "ibs pain"
  ],

  symptoms: {
    en: [
      "abdominal cramp",
      "spasm pain",
      "stomach tightening",
      "colicky pain"
    ],

    bn: [
      "পেট মোচড়",
      "খিঁচুনিজনিত ব্যথা",
      "পেট শক্ত হয়ে যাওয়া",
      "কলিক ব্যথা"
    ]
  },

  diseases: {
    en: [
      "intestinal spasm",
      "ibs",
      "abdominal colic"
    ],

    bn: [
      "আন্ত্রিক খিঁচুনি",
      "আইবিএস",
      "পেটের কলিক"
    ]
  },

  bestFor: {
    en: [
      "severe abdominal cramp",
      "intestinal spasm",
      "colicky pain"
    ],

    bn: [
      "তীব্র পেট মোচড়",
      "আন্ত্রিক খিঁচুনি",
      "কলিক ব্যথা"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dry mouth",
        "dizziness"
      ],

      bn: [
        "ঘুম",
        "মুখ শুকানো",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "liver toxicity",
        "allergic reaction"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "অ্যালার্জি"
      ]
    }
  },

  mechanism: {
    en:
      "Relaxes intestinal muscles and reduces abdominal pain",

    bn:
      "আন্ত্রিক মাংসপেশী শিথিল করে পেটের ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "Usually 1 tablet 2-3 times daily",
      bn: "সাধারণত দিনে ২-৩ বার ১ ট্যাবলেট"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "Use only as prescribed",
      bn: "শুধু ডাক্তারের পরামর্শ অনুযায়ী"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "4-6 hours",
    bn: "৪-৬ ঘণ্টা"
  },

  searchableText: [
    "camylofin",
    "abdominal cramp medicine",
    "colic pain medicine",
    "ibs pain medicine",
    "পেট মোচড়ের ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Strong Cramp Relief",
      bn: "তীব্র খিঁচুনি উপশম"
    },

    colorHint: "red",

    commonUse: false,

    specialistMedicine: true
  },

  brands: [
    "Anafortan",
    "Camylox",
    "Spasmofree",
    "Colispas",
    "Camyspa"
  ],

  usageType: {
    en: [
      "cramp relief",
      "intestinal spasm control"
    ],

    bn: [
      "খিঁচুনি কমানো",
      "আন্ত্রিক স্পাজম নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
}
  ];