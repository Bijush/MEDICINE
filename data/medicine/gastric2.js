
export const GASTRIC2 = [
// 🔥 MOSAPRIDE (PROKINETIC MEDICINE)

{
  id: "mosapride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Mosapride",
      bn: "মোসাপ্রাইড"
    },

    generic: {
      en: "Mosapride Citrate",
      bn: "মোসাপ্রাইড সাইট্রেট"
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
    en: "5-HT4 Receptor Agonist",
    bn: "৫-এইচটি৪ রিসেপ্টর অ্যাগোনিস্ট"
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
      "dispersible tablet"
    ],

    bn: [
      "ট্যাবলেট",
      "পানিতে গলে যায় এমন ট্যাবলেট"
    ]
  },

  strengths: [
    "2.5mg",
    "5mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Mosapride Citrate",
        bn: "মোসাপ্রাইড সাইট্রেট"
      },

      strength: "5mg"
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
      reflux: 8,
      gastric: 8,
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
        en: "May cause diarrhea and abdominal cramps",
        bn: "ডায়রিয়া ও পেটে মুচড়ানো ব্যথা হতে পারে"
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
    "mosapride",
    "indigestion",
    "bloating",
    "gastric",
    "reflux"
  ],

  symptoms: {
    en: [
      "bloating",
      "fullness",
      "indigestion",
      "acid reflux"
    ],

    bn: [
      "পেট ফাঁপা",
      "পেট ভরা লাগা",
      "বদহজম",
      "অ্যাসিড রিফ্লাক্স"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gastric",
      "gerd",
      "gastroparesis"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "গ্যাস্ট্রিক",
      "জিইআরডি",
      "গ্যাস্ট্রোপেরেসিস"
    ]
  },

  bestFor: {
    en: [
      "bloating",
      "indigestion",
      "slow digestion"
    ],

    bn: [
      "পেট ফাঁপা",
      "বদহজম",
      "ধীরে হজম হওয়া"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "headache",
        "abdominal discomfort"
      ],

      bn: [
        "ডায়রিয়া",
        "মাথাব্যথা",
        "পেটের অস্বস্তি"
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

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Enhances stomach and intestinal movement to improve digestion",

    bn:
      "পাকস্থলী ও অন্ত্রের চলাচল বাড়িয়ে হজম উন্নত করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "5mg three times daily before meals",
      bn: "খাবারের আগে দিনে ৩ বার ৫ মিগ্রা"
    },

    child: {
      en: "Not usually recommended",
      bn: "সাধারণত শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "15mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১৫ মিগ্রা"
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
    "mosapride",
    "indigestion medicine",
    "bloating medicine",
    "reflux medicine",
    "বদহজমের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Mosid",
    "Mosap",
    "Mositac",
    "Mospra",
    "Moset",
    "Mosgut",
    "Mosride",
    "Mospid"
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


// 🔥 ALGINIC ACID (ANTI-REFLUX MEDICINE)

{
  id: "alginic_acid",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Alginic Acid",
      bn: "অ্যালজিনিক অ্যাসিড"
    },

    generic: {
      en: "Sodium Alginate + Alginic Acid",
      bn: "সোডিয়াম অ্যালজিনেট + অ্যালজিনিক অ্যাসিড"
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
    en: "anti-reflux",
    bn: "রিফ্লাক্স কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "anti-reflux agent",
      "antacid"
    ],

    bn: [
      "রিফ্লাক্স কমানোর ওষুধ",
      "অ্যান্টাসিড"
    ]
  },

  class: {
    en: "Reflux Suppressant",
    bn: "রিফ্লাক্স কমানোর ওষুধ"
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
      "suspension",
      "chewable tablet"
    ],

    bn: [
      "সিরাপ",
      "সাসপেনশন",
      "চিবানোর ট্যাবলেট"
    ]
  },

  strengths: [
    "250mg",
    "500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Sodium Alginate",
        bn: "সোডিয়াম অ্যালজিনেট"
      },

      strength: "500mg"
    },

    {
      ingredient: {
        en: "Alginic Acid",
        bn: "অ্যালজিনিক অ্যাসিড"
      },

      strength: "250mg"
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
      en: "medium",
      bn: "মাঝারি"
    },

    score: {
      acid_reflux: 10,
      heartburn: 10,
      gerd: 9,
      acidity: 8,
      gastric: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 0,

    overdose: {
      level: {
        en: "low",
        bn: "কম"
      },

      effect: {
        en: "May cause bloating and nausea",
        bn: "পেট ফাঁপা ও বমি ভাব হতে পারে"
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
    "alginic acid",
    "alginate",
    "reflux",
    "heartburn",
    "gerd"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "chest burning",
      "sour taste in mouth"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "বুকে জ্বালাপোড়া",
      "মুখে টক স্বাদ"
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
      "acid reflux",
      "heartburn",
      "night reflux"
    ],

    bn: [
      "অ্যাসিড রিফ্লাক্স",
      "বুক জ্বালা",
      "রাতের রিফ্লাক্স"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "bloating",
        "nausea",
        "mild constipation"
      ],

      bn: [
        "পেট ফাঁপা",
        "বমি ভাব",
        "হালকা কোষ্ঠকাঠিন্য"
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
      "Forms a protective raft over stomach acid to prevent reflux",

    bn:
      "পাকস্থলীর অ্যাসিডের উপর সুরক্ষামূলক স্তর তৈরি করে রিফ্লাক্স কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10-20ml after meals and at bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ১০-২০ মি.লি."
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
    en: "3-4 hours",
    bn: "৩-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "alginic acid",
    "alginate",
    "reflux medicine",
    "heartburn medicine",
    "রিফ্লাক্সের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Gaviscon",
    "Algicon",
    "Algirel",
    "Refluxaid",
    "Algicare",
    "Acidraft",
    "Algigel",
    "Refluxnil"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "reflux prevention",
      "heartburn relief"
    ],

    bn: [
      "রিফ্লাক্স প্রতিরোধ",
      "বুক জ্বালা কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 OXETACAINE (GASTRIC PAIN RELIEF)

{
  id: "oxetacaine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Oxetacaine",
      bn: "অক্সেটাকেইন"
    },

    generic: {
      en: "Oxetacaine",
      bn: "অক্সেটাকেইন"
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
    en: "gastric anesthetic",
    bn: "গ্যাস্ট্রিক ব্যথা কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "local anesthetic",
      "anti-ulcer"
    ],

    bn: [
      "লোকাল অ্যানেস্থেটিক",
      "আলসারের ওষুধ"
    ]
  },

  class: {
    en: "Local Anesthetic",
    bn: "লোকাল অ্যানেস্থেটিক"
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
      "suspension"
    ],

    bn: [
      "সিরাপ",
      "সাসপেনশন"
    ]
  },

  strengths: [
    "10mg/5ml",
    "20mg/5ml"
  ],

  composition: [
    {
      ingredient: {
        en: "Oxetacaine",
        bn: "অক্সেটাকেইন"
      },

      strength: "10mg/5ml"
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
      stomach_burning: 10,
      gastric_pain: 10,
      acidity: 8,
      ulcer: 8,
      heartburn: 7
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
        en: "May cause numbness and dizziness",
        bn: "অসাড় ভাব ও মাথা ঘোরা হতে পারে"
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
    "oxetacaine",
    "gastric pain",
    "burning",
    "ulcer",
    "acidity"
  ],

  symptoms: {
    en: [
      "stomach burning",
      "gastric pain",
      "heartburn",
      "acid irritation"
    ],

    bn: [
      "পেট জ্বালা",
      "গ্যাস্ট্রিক ব্যথা",
      "বুক জ্বালা",
      "অ্যাসিডের জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "ulcer",
      "gastritis",
      "acid irritation"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "আলসার",
      "গ্যাস্ট্রাইটিস",
      "অ্যাসিডের জ্বালা"
    ]
  },

  bestFor: {
    en: [
      "gastric burning",
      "ulcer pain",
      "stomach irritation"
    ],

    bn: [
      "গ্যাস্ট্রিকের জ্বালা",
      "আলসারের ব্যথা",
      "পেটের জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "numb feeling",
        "dizziness",
        "nausea"
      ],

      bn: [
        "অসাড় অনুভূতি",
        "মাথা ঘোরা",
        "বমি ভাব"
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
      "Numbs stomach pain and burning by local anesthetic action",

    bn:
      "লোকাল অ্যানেস্থেটিক প্রভাবে পাকস্থলীর ব্যথা ও জ্বালা কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "5-10ml before meals",
      bn: "খাবারের আগে ৫-১০ মি.লি."
    },

    child: {
      en: "Only if prescribed by doctor",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "40ml/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০ মি.লি."
    }
  },

  onset: {
    en: "5-10 minutes",
    bn: "৫-১০ মিনিট"
  },

  duration: {
    en: "2-4 hours",
    bn: "২-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "oxetacaine",
    "gastric pain medicine",
    "burning medicine",
    "ulcer pain medicine",
    "গ্যাস্ট্রিক ব্যথার ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Mucaine",
    "Oxane",
    "Oxigel",
    "Oxel",
    "Oxacid",
    "Oxcare",
    "Burnnil",
    "Ultragel"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "pain relief",
      "burning relief"
    ],

    bn: [
      "ব্যথা কমানো",
      "জ্বালা কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 METOCLOPRAMIDE (ANTI-VOMITING + PROKINETIC)

{
  id: "metoclopramide",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Metoclopramide",
      bn: "মেটোক্লোপ্রামাইড"
    },

    generic: {
      en: "Metoclopramide Hydrochloride",
      bn: "মেটোক্লোপ্রামাইড হাইড্রোক্লোরাইড"
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
    bn: "বমি কমানোর ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antiemetic",
      "prokinetic agent"
    ],

    bn: [
      "বমি প্রতিরোধক",
      "প্রোকাইনেটিক ওষুধ"
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
      "injection"
    ],

    bn: [
      "ট্যাবলেট",
      "সিরাপ",
      "ইনজেকশন"
    ]
  },

  strengths: [
    "5mg",
    "10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Metoclopramide Hydrochloride",
        bn: "মেটোক্লোপ্রামাইড হাইড্রোক্লোরাইড"
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
    safetyLevel: 5,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      vomiting: 10,
      nausea: 10,
      gastric: 7,
      reflux: 7,
      bloating: 6
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
        en: "May cause severe movement disorder and drowsiness",
        bn: "তীব্র নড়াচড়ার সমস্যা ও অতিরিক্ত ঘুম হতে পারে"
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
    "metoclopramide",
    "vomiting",
    "nausea",
    "gastric",
    "reflux"
  ],

  symptoms: {
    en: [
      "vomiting",
      "nausea",
      "fullness",
      "acid reflux"
    ],

    bn: [
      "বমি",
      "বমি ভাব",
      "পেট ভরা লাগা",
      "অ্যাসিড রিফ্লাক্স"
    ]
  },

  diseases: {
    en: [
      "gastroparesis",
      "acid reflux",
      "gastric",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রোপেরেসিস",
      "অ্যাসিড রিফ্লাক্স",
      "গ্যাস্ট্রিক",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "vomiting",
      "nausea",
      "slow stomach movement"
    ],

    bn: [
      "বমি",
      "বমি ভাব",
      "ধীরে পাকস্থলী চলাচল"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "fatigue",
        "restlessness"
      ],

      bn: [
        "ঘুম ঘুম ভাব",
        "দুর্বল লাগা",
        "অস্থিরতা"
      ]
    },

    serious: {
      en: [
        "movement disorder",
        "tardive dyskinesia"
      ],

      bn: [
        "নড়াচড়ার সমস্যা",
        "টারডিভ ডিসকাইনেসিয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks dopamine receptors to reduce vomiting and improve stomach emptying",

    bn:
      "ডোপামিন রিসেপ্টর ব্লক করে বমি কমায় ও পাকস্থলীর খালি হওয়া বাড়ায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "10mg before meals 3 times daily",
      bn: "খাবারের আগে দিনে ৩ বার ১০ মিগ্রা"
    },

    child: {
      en: "Only under doctor supervision",
      bn: "শুধুমাত্র ডাক্তারের তত্ত্বাবধানে"
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
    "metoclopramide",
    "vomiting medicine",
    "nausea medicine",
    "reflux medicine",
    "বমির ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Maxolon",
    "Perinorm",
    "Metoz",
    "Metocid",
    "Vomistop",
    "Metonil",
    "Reflustop",
    "Gastromet"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "anti-vomiting",
      "improve gastric emptying"
    ],

    bn: [
      "বমি কমানো",
      "পাকস্থলীর খালি হওয়া বাড়ানো"
    ]
  },

  emergencyUse: false
},

// 🔥 CALCIUM CARBONATE (ANTACID)

{
  id: "calcium_carbonate",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Calcium Carbonate",
      bn: "ক্যালসিয়াম কার্বোনেট"
    },

    generic: {
      en: "Calcium Carbonate",
      bn: "ক্যালসিয়াম কার্বোনেট"
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
      "calcium supplement"
    ],

    bn: [
      "অ্যান্টাসিড",
      "ক্যালসিয়াম সাপ্লিমেন্ট"
    ]
  },

  class: {
    en: "Antacid",
    bn: "অ্যান্টাসিড"
  },

  category: {
    en: "chewable tablet",
    bn: "চিবানোর ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "chewable tablet",
      "tablet",
      "suspension"
    ],

    bn: [
      "চিবানোর ট্যাবলেট",
      "ট্যাবলেট",
      "সাসপেনশন"
    ]
  },

  strengths: [
    "500mg",
    "1000mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Calcium Carbonate",
        bn: "ক্যালসিয়াম কার্বোনেট"
      },

      strength: "500mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 6,
    safetyLevel: 8,

    severity: {
      en: "mild",
      bn: "হালকা"
    },

    score: {
      acidity: 9,
      heartburn: 8,
      indigestion: 7,
      gastric: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 3,
    liver: 0,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause constipation and high calcium levels",
        bn: "কোষ্ঠকাঠিন্য ও ক্যালসিয়াম বেড়ে যেতে পারে"
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
    "calcium carbonate",
    "antacid",
    "acid",
    "heartburn",
    "indigestion"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "stomach discomfort"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "পেটের অস্বস্তি"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acidity",
      "heartburn",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "quick acidity relief",
      "heartburn",
      "mild gastric irritation"
    ],

    bn: [
      "দ্রুত অ্যাসিডিটি কমানো",
      "বুক জ্বালা",
      "হালকা গ্যাস্ট্রিকের জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "constipation",
        "gas",
        "burping"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "গ্যাস",
        "ঢেকুর"
      ]
    },

    serious: {
      en: [
        "kidney stone",
        "high calcium level"
      ],

      bn: [
        "কিডনিতে পাথর",
        "রক্তে ক্যালসিয়াম বেড়ে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Neutralizes excess stomach acid for quick relief",

    bn:
      "অতিরিক্ত পাকস্থলীর অ্যাসিড নিরপেক্ষ করে দ্রুত উপশম দেয়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "500mg - 1000mg after meals as needed",
      bn: "প্রয়োজন অনুযায়ী খাবারের পরে ৫০০-১০০০ মিগ্রা"
    },

    child: {
      en: "Dose depends on age",
      bn: "ডোজ বয়স অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "7500mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৭৫০০ মিগ্রা"
    }
  },

  onset: {
    en: "5-10 minutes",
    bn: "৫-১০ মিনিট"
  },

  duration: {
    en: "1-3 hours",
    bn: "১-৩ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "calcium carbonate",
    "antacid medicine",
    "heartburn medicine",
    "acid medicine",
    "অ্যাসিডিটির ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Tums",
    "Calcid",
    "Calbo",
    "Caltab",
    "Calchew",
    "Acidcal",
    "Calgel",
    "Calcicare"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid neutralization",
      "heartburn relief"
    ],

    bn: [
      "অ্যাসিড নিরপেক্ষ করা",
      "বুক জ্বালা কমানো"
    ]
  },

  emergencyUse: false
},

// 🔥 SODIUM BICARBONATE (FAST ACTING ANTACID)

{
  id: "sodium_bicarbonate",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Sodium Bicarbonate",
      bn: "সোডিয়াম বাইকার্বোনেট"
    },

    generic: {
      en: "Sodium Bicarbonate",
      bn: "সোডিয়াম বাইকার্বোনেট"
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
    en: "fast acting antacid",
    bn: "দ্রুত কাজ করা অ্যান্টাসিড"
  },

  therapeuticCategory: {
    en: [
      "antacid",
      "alkalinizing agent"
    ],

    bn: [
      "অ্যান্টাসিড",
      "ক্ষারীয় পদার্থ"
    ]
  },

  class: {
    en: "Systemic Antacid",
    bn: "সিস্টেমিক অ্যান্টাসিড"
  },

  category: {
    en: "powder",
    bn: "পাউডার"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  dosageForms: {
    en: [
      "powder",
      "tablet",
      "effervescent tablet"
    ],

    bn: [
      "পাউডার",
      "ট্যাবলেট",
      "ফিজ ট্যাবলেট"
    ]
  },

  strengths: [
    "325mg",
    "500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Sodium Bicarbonate",
        bn: "সোডিয়াম বাইকার্বোনেট"
      },

      strength: "500mg"
    }
  ],

  otc: true,
  rx: false,

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
      acidity: 10,
      heartburn: 9,
      indigestion: 8,
      gastric: 7
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
        en: "May cause metabolic alkalosis and high sodium levels",
        bn: "মেটাবলিক অ্যালকালোসিস ও সোডিয়াম বেড়ে যেতে পারে"
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
    "sodium bicarbonate",
    "antacid",
    "acid",
    "heartburn",
    "indigestion"
  ],

  symptoms: {
    en: [
      "acidity",
      "heartburn",
      "stomach irritation"
    ],

    bn: [
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "পেটের জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric",
      "acidity",
      "heartburn",
      "indigestion"
    ],

    bn: [
      "গ্যাস্ট্রিক",
      "অ্যাসিডিটি",
      "বুক জ্বালা",
      "বদহজম"
    ]
  },

  bestFor: {
    en: [
      "instant acidity relief",
      "heartburn",
      "acid irritation"
    ],

    bn: [
      "তাৎক্ষণিক অ্যাসিডিটি কমানো",
      "বুক জ্বালা",
      "অ্যাসিডের জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "burping",
        "gas",
        "stomach bloating"
      ],

      bn: [
        "ঢেকুর",
        "গ্যাস",
        "পেট ফাঁপা"
      ]
    },

    serious: {
      en: [
        "high sodium level",
        "metabolic alkalosis"
      ],

      bn: [
        "সোডিয়াম বেড়ে যাওয়া",
        "মেটাবলিক অ্যালকালোসিস"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Quickly neutralizes stomach acid by alkaline action",

    bn:
      "ক্ষারীয় প্রভাবে দ্রুত পাকস্থলীর অ্যাসিড নিরপেক্ষ করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "325mg - 500mg dissolved in water as needed",
      bn: "প্রয়োজন অনুযায়ী পানিতে গুলে ৩২৫-৫০০ মিগ্রা"
    },

    child: {
      en: "Only under doctor advice",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "4000mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০০০ মিগ্রা"
    }
  },

  onset: {
    en: "1-5 minutes",
    bn: "১-৫ মিনিট"
  },

  duration: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  // ================= SEARCH =================
  searchableText: [
    "sodium bicarbonate",
    "fast antacid",
    "heartburn medicine",
    "acid medicine",
    "অ্যাসিডিটির ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "ENO",
    "Bicarb",
    "Sodamint",
    "Acidfast",
    "Bicarbo",
    "Quickrelief",
    "Alkacid",
    "Gasoff"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "instant acid relief",
      "acid neutralization"
    ],

    bn: [
      "তাৎক্ষণিক অ্যাসিড কমানো",
      "অ্যাসিড নিরপেক্ষ করা"
    ]
  },

  emergencyUse: false
},

// 🔥 BISMUTH SUBSALICYLATE (ANTI-DIARRHEAL + GASTRIC PROTECTIVE)

{
  id: "bismuth_subsalicylate",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Bismuth Subsalicylate",
      bn: "বিসমাথ সাবসালিসাইলেট"
    },

    generic: {
      en: "Bismuth Subsalicylate",
      bn: "বিসমাথ সাবসালিসাইলেট"
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
    en: "gastric protective",
    bn: "গ্যাস্ট্রিক সুরক্ষাকারী ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "anti-diarrheal",
      "antacid",
      "gastric protective"
    ],

    bn: [
      "ডায়রিয়া কমানোর ওষুধ",
      "অ্যান্টাসিড",
      "গ্যাস্ট্রিক সুরক্ষাকারী ওষুধ"
    ]
  },

  class: {
    en: "Salicylate Compound",
    bn: "স্যালিসাইলেট যৌগ"
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
    "262mg",
    "525mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Bismuth Subsalicylate",
        bn: "বিসমাথ সাবসালিসাইলেট"
      },

      strength: "262mg"
    }
  ],

  otc: true,
  rx: false,

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
      diarrhea: 10,
      indigestion: 8,
      nausea: 8,
      gastric: 7,
      acidity: 6
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 1,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "medium",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause salicylate toxicity and ringing in ears",
        bn: "স্যালিসাইলেট বিষক্রিয়া ও কানে শব্দ হতে পারে"
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
    "bismuth subsalicylate",
    "diarrhea",
    "indigestion",
    "nausea",
    "gastric"
  ],

  symptoms: {
    en: [
      "diarrhea",
      "nausea",
      "indigestion",
      "stomach upset"
    ],

    bn: [
      "ডায়রিয়া",
      "বমি ভাব",
      "বদহজম",
      "পেট খারাপ"
    ]
  },

  diseases: {
    en: [
      "travelers diarrhea",
      "gastric irritation",
      "indigestion",
      "food poisoning"
    ],

    bn: [
      "ট্রাভেলার্স ডায়রিয়া",
      "গ্যাস্ট্রিকের জ্বালা",
      "বদহজম",
      "ফুড পয়জনিং"
    ]
  },

  bestFor: {
    en: [
      "diarrhea",
      "stomach upset",
      "nausea"
    ],

    bn: [
      "ডায়রিয়া",
      "পেট খারাপ",
      "বমি ভাব"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "black stool",
        "black tongue",
        "constipation"
      ],

      bn: [
        "কালো পায়খানা",
        "জিভ কালো হওয়া",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "salicylate toxicity",
        "allergic reaction"
      ],

      bn: [
        "স্যালিসাইলেট বিষক্রিয়া",
        "অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Protects stomach lining and reduces diarrhea by anti-secretory action",

    bn:
      "পাকস্থলীর আবরণ সুরক্ষা দেয় এবং তরল নিঃসরণ কমিয়ে ডায়রিয়া কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "262mg every 30-60 minutes as needed",
      bn: "প্রয়োজন অনুযায়ী প্রতি ৩০-৬০ মিনিটে ২৬২ মিগ্রা"
    },

    child: {
      en: "Not recommended in children",
      bn: "শিশুদের জন্য পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "4200mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪২০০ মিগ্রা"
    }
  },

  onset: {
    en: "30-60 minutes",
    bn: "৩০-৬০ মিনিট"
  },

  duration: {
    en: "3-6 hours",
    bn: "৩-৬ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "bismuth subsalicylate",
    "diarrhea medicine",
    "stomach upset medicine",
    "indigestion medicine",
    "ডায়রিয়ার ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Pepto-Bismol",
    "Bismol",
    "PinkBismuth",
    "Stomacare",
    "Bismuthol",
    "Peptaid",
    "Digecare",
    "Gutshield"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "diarrhea relief",
      "stomach protection"
    ],

    bn: [
      "ডায়রিয়া কমানো",
      "পাকস্থলী সুরক্ষা"
    ]
  },

  emergencyUse: false
}

];