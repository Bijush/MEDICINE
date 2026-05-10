
export const GASTRIC4 = [
  
// 🔥 ESOMEPRAZOLE + ITOPRIDE (GERD + FUNCTIONAL DYSPEPSIA COMBO)

{
  id: "esomeprazole_itopride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Esomeprazole + Itopride",
      bn: "ইসোমিপ্রাজল + ইটোপ্রাইড"
    },

    generic: {
      en: "Esomeprazole + Itopride",
      bn: "ইসোমিপ্রাজল + ইটোপ্রাইড"
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
    en: "PPI + Dopamine D2 Antagonist",
    bn: "পিপিআই + ডোপামিন D2 অ্যান্টাগোনিস্ট"
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
    "20mg + 150mg"
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
        en: "Itopride",
        bn: "ইটোপ্রাইড"
      },

      strength: "150mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 7,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      bloating: 10,
      indigestion: 10,
      acid_reflux: 9,
      gastric: 10
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
        en: "May cause abdominal cramps, diarrhea and headache",
        bn: "পেটে মুচড়ানো ব্যথা, ডায়রিয়া ও মাথাব্যথা হতে পারে"
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
    "esomeprazole itopride",
    "acid reflux",
    "bloating",
    "indigestion",
    "gastric"
  ],

  symptoms: {
    en: [
      "bloating",
      "fullness",
      "indigestion",
      "heartburn",
      "acid reflux"
    ],

    bn: [
      "পেট ফাঁপা",
      "পেট ভরা লাগা",
      "বদহজম",
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gerd",
      "gastric",
      "gastroparesis"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "জিইআরডি",
      "গ্যাস্ট্রিক",
      "গ্যাস্ট্রোপেরেসিস"
    ]
  },

  bestFor: {
    en: [
      "bloating with acidity",
      "slow digestion",
      "functional dyspepsia"
    ],

    bn: [
      "অ্যাসিডিটিসহ পেট ফাঁপা",
      "ধীরে হজম হওয়া",
      "ফাংশনাল ডিসপেপসিয়া"
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
      "Esomeprazole suppresses acid while Itopride improves stomach emptying",

    bn:
      "ইসোমিপ্রাজল অ্যাসিড কমায় এবং ইটোপ্রাইড পাকস্থলীর খালি হওয়া বাড়ায়"
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
    "esomeprazole itopride",
    "bloating medicine",
    "indigestion medicine",
    "acid reflux medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Nexpro IT",
    "Esomac IT",
    "Esoz IT",
    "Esocid IT",
    "Esogress IT",
    "Esopra IT",
    "Esocare IT",
    "Esorel IT"
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

// 🔥 RABEPRAZOLE + ITOPRIDE (ADVANCED ACID + MOTILITY COMBO)

{
  id: "rabeprazole_itopride",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Rabeprazole + Itopride",
      bn: "র্যাবিপ্রাজল + ইটোপ্রাইড"
    },

    generic: {
      en: "Rabeprazole + Itopride",
      bn: "র্যাবিপ্রাজল + ইটোপ্রাইড"
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
    en: "PPI + Dopamine D2 Antagonist",
    bn: "পিপিআই + ডোপামিন D2 অ্যান্টাগোনিস্ট"
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
    "20mg + 150mg"
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
        en: "Itopride",
        bn: "ইটোপ্রাইড"
      },

      strength: "150mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 7,

    severity: {
      en: "very-strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      bloating: 10,
      indigestion: 10,
      acid_reflux: 10,
      gastric: 10
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
        en: "May cause diarrhea, abdominal cramps and headache",
        bn: "ডায়রিয়া, পেটে মুচড়ানো ব্যথা ও মাথাব্যথা হতে পারে"
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
    "rabeprazole itopride",
    "acid reflux",
    "bloating",
    "indigestion",
    "gastric"
  ],

  symptoms: {
    en: [
      "bloating",
      "fullness",
      "indigestion",
      "heartburn",
      "acid reflux"
    ],

    bn: [
      "পেট ফাঁপা",
      "পেট ভরা লাগা",
      "বদহজম",
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স"
    ]
  },

  diseases: {
    en: [
      "functional dyspepsia",
      "gerd",
      "gastric",
      "gastroparesis"
    ],

    bn: [
      "ফাংশনাল ডিসপেপসিয়া",
      "জিইআরডি",
      "গ্যাস্ট্রিক",
      "গ্যাস্ট্রোপেরেসিস"
    ]
  },

  bestFor: {
    en: [
      "bloating with acidity",
      "slow digestion",
      "functional dyspepsia"
    ],

    bn: [
      "অ্যাসিডিটিসহ পেট ফাঁপা",
      "ধীরে হজম হওয়া",
      "ফাংশনাল ডিসপেপসিয়া"
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
      "Rabeprazole suppresses acid while Itopride improves stomach emptying",

    bn:
      "র্যাবিপ্রাজল অ্যাসিড কমায় এবং ইটোপ্রাইড পাকস্থলীর খালি হওয়া বাড়ায়"
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
    "rabeprazole itopride",
    "bloating medicine",
    "indigestion medicine",
    "acid reflux medicine",
    "গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Rablet IT",
    "Rabecid IT",
    "Rabez IT",
    "Rabium IT",
    "Rabonik IT",
    "Rabifast IT",
    "Rabesec IT",
    "Rabecure IT"
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

// 🔥 PANTOPRAZOLE + ALGINIC ACID (ACID + REFLUX PROTECTION)

{
  id: "pantoprazole_alginic_acid",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pantoprazole + Alginic Acid",
      bn: "প্যান্টোপ্রাজল + অ্যালজিনিক অ্যাসিড"
    },

    generic: {
      en: "Pantoprazole + Sodium Alginate",
      bn: "প্যান্টোপ্রাজল + সোডিয়াম অ্যালজিনেট"
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
    en: "acid reducer + anti-reflux",
    bn: "অ্যাসিড কমানো ও রিফ্লাক্স প্রতিরোধক"
  },

  therapeuticCategory: {
    en: [
      "proton pump inhibitor",
      "anti-reflux agent"
    ],

    bn: [
      "প্রোটন পাম্প ইনহিবিটর",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "PPI + Reflux Suppressant",
    bn: "পিপিআই + রিফ্লাক্স সাপ্রেসেন্ট"
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
      "sachet"
    ],

    bn: [
      "সাসপেনশন",
      "স্যাশে"
    ]
  },

  strengths: [
    "40mg + 500mg"
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
        en: "Sodium Alginate",
        bn: "সোডিয়াম অ্যালজিনেট"
      },

      strength: "500mg"
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
      acid_reflux: 10,
      gerd: 10,
      heartburn: 10,
      acidity: 9,
      chest_burning: 9
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
        en: "May cause bloating and abdominal discomfort",
        bn: "পেট ফাঁপা ও পেটের অস্বস্তি হতে পারে"
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
    "pantoprazole alginate",
    "acid reflux",
    "gerd",
    "heartburn",
    "gastric"
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
      "heartburn",
      "gastric"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "বুক জ্বালা",
      "গ্যাস্ট্রিক"
    ]
  },

  bestFor: {
    en: [
      "night reflux",
      "heartburn",
      "acid coming to throat"
    ],

    bn: [
      "রাতের রিফ্লাক্স",
      "বুক জ্বালা",
      "গলায় অ্যাসিড উঠে আসা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "bloating",
        "burping",
        "headache"
      ],

      bn: [
        "পেট ফাঁপা",
        "ঢেকুর",
        "মাথাব্যথা"
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
      "Pantoprazole suppresses acid while Sodium Alginate forms a protective reflux barrier",

    bn:
      "প্যান্টোপ্রাজল অ্যাসিড কমায় এবং সোডিয়াম অ্যালজিনেট রিফ্লাক্সের বিরুদ্ধে সুরক্ষামূলক স্তর তৈরি করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "1 dose after meals and before bedtime",
      bn: "খাবারের পরে ও ঘুমানোর আগে ১ ডোজ"
    },

    child: {
      en: "Only under doctor advice",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "4 doses/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪ ডোজ"
    }
  },

  onset: {
    en: "10-20 minutes",
    bn: "১০-২০ মিনিট"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "pantoprazole alginate",
    "reflux medicine",
    "heartburn medicine",
    "gerd medicine",
    "রিফ্লাক্সের ওষুধ"
  ],

  // ================= BRANDS =================
  brands: [
    "Panto Raft",
    "Pantosec RA",
    "Pantocid RA",
    "Pantogavis",
    "Panto Reflux",
    "Acidraft P",
    "Pantoshield",
    "Refluxsafe P"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "acid suppression",
      "reflux prevention"
    ],

    bn: [
      "অ্যাসিড কমানো",
      "রিফ্লাক্স প্রতিরোধ"
    ]
  },

  emergencyUse: false
},

// 🔥 BISMUTH SUBCITRATE + METRONIDAZOLE + TETRACYCLINE (H. PYLORI THERAPY)

{
  id: "bismuth_metronidazole_tetracycline",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Bismuth Subcitrate + Metronidazole + Tetracycline",
      bn: "বিসমাথ সাবসাইট্রেট + মেট্রোনিডাজল + টেট্রাসাইক্লিন"
    },

    generic: {
      en: "Bismuth Subcitrate + Metronidazole + Tetracycline",
      bn: "বিসমাথ সাবসাইট্রেট + মেট্রোনিডাজল + টেট্রাসাইক্লিন"
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
    en: "anti-ulcer + antibiotic therapy",
    bn: "আলসার ও ব্যাকটেরিয়া চিকিৎসার ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "anti-h. pylori therapy",
      "antibiotic",
      "gastroprotective"
    ],

    bn: [
      "এইচ. পাইলোরি চিকিৎসা",
      "অ্যান্টিবায়োটিক",
      "পাকস্থলী সুরক্ষা"
    ]
  },

  class: {
    en: "Triple Antibiotic Ulcer Therapy",
    bn: "ট্রিপল অ্যান্টিবায়োটিক আলসার থেরাপি"
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
      "capsule"
    ],

    bn: [
      "ক্যাপসুল"
    ]
  },

  strengths: [
    "140mg + 125mg + 125mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Bismuth Subcitrate",
        bn: "বিসমাথ সাবসাইট্রেট"
      },

      strength: "140mg"
    },

    {
      ingredient: {
        en: "Metronidazole",
        bn: "মেট্রোনিডাজল"
      },

      strength: "125mg"
    },

    {
      ingredient: {
        en: "Tetracycline",
        bn: "টেট্রাসাইক্লিন"
      },

      strength: "125mg"
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
      gastric_ulcer: 10,
      duodenal_ulcer: 10,
      gastritis: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 2,
    kidney: 2,
    liver: 3,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause neurotoxicity, liver damage and severe nausea",
        bn: "স্নায়ুর সমস্যা, লিভারের ক্ষতি ও তীব্র বমি ভাব হতে পারে"
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
    "h pylori treatment",
    "bismuth triple therapy",
    "ulcer antibiotic",
    "gastric ulcer"
  ],

  symptoms: {
    en: [
      "stomach pain",
      "burning stomach",
      "nausea",
      "ulcer pain"
    ],

    bn: [
      "পেট ব্যথা",
      "পেট জ্বালা",
      "বমি ভাব",
      "আলসারের ব্যথা"
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
      "ডিওডেনাল আলসার",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস"
    ]
  },

  bestFor: {
    en: [
      "h pylori eradication",
      "ulcer infection",
      "resistant gastritis"
    ],

    bn: [
      "এইচ পাইলোরি দূর করা",
      "আলসারের সংক্রমণ",
      "জটিল গ্যাস্ট্রাইটিস"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "nausea",
        "metallic taste",
        "dark stool"
      ],

      bn: [
        "বমি ভাব",
        "মুখে ধাতব স্বাদ",
        "কালো পায়খানা"
      ]
    },

    serious: {
      en: [
        "liver toxicity",
        "nerve damage"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "স্নায়ুর ক্ষতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Kills H. pylori bacteria while protecting the ulcer surface",

    bn:
      "এইচ পাইলোরি ব্যাকটেরিয়া ধ্বংস করে এবং আলসারের স্থান সুরক্ষা দেয়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "3-4 capsules daily with PPI for 10-14 days",
      bn: "পিপিআই এর সাথে ১০-১৪ দিন প্রতিদিন ৩-৪টি ক্যাপসুল"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "4 capsules/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪টি ক্যাপসুল"
    }
  },

  onset: {
    en: "1-2 days",
    bn: "১-২ দিন"
  },

  duration: {
    en: "Depends on therapy course",
    bn: "চিকিৎসার সময়ের উপর নির্ভরশীল"
  },

  // ================= SEARCH =================
  searchableText: [
    "h pylori therapy",
    "ulcer antibiotic",
    "bismuth metronidazole tetracycline",
    "gastric ulcer treatment",
    "আলসারের অ্যান্টিবায়োটিক"
  ],

  // ================= BRANDS =================
  brands: [
    "Pylera",
    "Helicure BT",
    "Ulcer Triple Kit",
    "Bismutrix",
    "Gastropyl Kit",
    "HPT Triple",
    "Ulcercure BT",
    "Pylorifix"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "h pylori eradication",
      "ulcer treatment"
    ],

    bn: [
      "এইচ পাইলোরি দূর করা",
      "আলসারের চিকিৎসা"
    ]
  },

  emergencyUse: false
},


// 🔥 VONOPRAZAN + CLARITHROMYCIN + AMOXICILLIN (NEXT-GEN H. PYLORI THERAPY)

{
  id: "vonoprazan_clarithromycin_amoxicillin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Vonoprazan + Clarithromycin + Amoxicillin",
      bn: "ভোনোপ্রাজান + ক্ল্যারিথ্রোমাইসিন + অ্যামোক্সিসিলিন"
    },

    generic: {
      en: "Vonoprazan + Clarithromycin + Amoxicillin",
      bn: "ভোনোপ্রাজান + ক্ল্যারিথ্রোমাইসিন + অ্যামোক্সিসিলিন"
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
    en: "next-generation h. pylori eradication therapy",
    bn: "নেক্সট-জেনারেশন এইচ. পাইলোরি নির্মূল থেরাপি"
  },

  therapeuticCategory: {
    en: [
      "potassium competitive acid blocker",
      "antibiotic",
      "anti-h. pylori therapy"
    ],

    bn: [
      "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকার",
      "অ্যান্টিবায়োটিক",
      "এইচ. পাইলোরি চিকিৎসা"
    ]
  },

  class: {
    en: "PCAB-Based Triple Therapy",
    bn: "পিসিএবি ভিত্তিক ট্রিপল থেরাপি"
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
      "therapy kit"
    ],

    bn: [
      "ট্যাবলেট",
      "থেরাপি কিট"
    ]
  },

  strengths: [
    "20mg + 500mg + 500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Vonoprazan",
        bn: "ভোনোপ্রাজান"
      },

      strength: "20mg"
    },

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
      en: "ultra-strong",
      bn: "অতি শক্তিশালী"
    },

    score: {
      h_pylori: 10,
      resistant_h_pylori: 10,
      gastric_ulcer: 10,
      severe_gastritis: 10,
      acid_reflux: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 2,
    kidney: 2,
    liver: 4,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause severe diarrhea, liver injury and cardiac rhythm problems",
        bn: "তীব্র ডায়রিয়া, লিভারের ক্ষতি ও হৃদস্পন্দনের সমস্যা হতে পারে"
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
    "vonoprazan triple therapy",
    "advanced h pylori treatment",
    "resistant h pylori",
    "pcab therapy"
  ],

  symptoms: {
    en: [
      "persistent acidity",
      "ulcer pain",
      "burning stomach",
      "nausea"
    ],

    bn: [
      "দীর্ঘস্থায়ী অ্যাসিডিটি",
      "আলসারের ব্যথা",
      "পেট জ্বালা",
      "বমি ভাব"
    ]
  },

  diseases: {
    en: [
      "h pylori infection",
      "resistant h pylori",
      "gastric ulcer",
      "chronic gastritis"
    ],

    bn: [
      "এইচ পাইলোরি সংক্রমণ",
      "রেজিস্ট্যান্ট এইচ পাইলোরি",
      "গ্যাস্ট্রিক আলসার",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস"
    ]
  },

  bestFor: {
    en: [
      "resistant h pylori infection",
      "advanced ulcer therapy",
      "failed previous therapy"
    ],

    bn: [
      "রেজিস্ট্যান্ট এইচ পাইলোরি সংক্রমণ",
      "অ্যাডভান্সড আলসার চিকিৎসা",
      "আগের থেরাপি ব্যর্থ হলে"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "metallic taste",
        "abdominal discomfort"
      ],

      bn: [
        "ডায়রিয়া",
        "মুখে ধাতব স্বাদ",
        "পেটের অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "liver toxicity",
        "heart rhythm disorder",
        "severe allergy"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "হৃদস্পন্দনের সমস্যা",
        "তীব্র অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Vonoprazan provides rapid powerful acid suppression while antibiotics eradicate H. pylori",

    bn:
      "ভোনোপ্রাজান দ্রুত ও শক্তিশালীভাবে অ্যাসিড কমায় এবং অ্যান্টিবায়োটিক এইচ পাইলোরি ধ্বংস করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Twice daily for 7-14 days",
      bn: "৭-১৪ দিন দিনে ২ বার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "As prescribed in therapy kit",
      bn: "থেরাপি কিট অনুযায়ী"
    }
  },

  onset: {
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "Depends on therapy course",
    bn: "চিকিৎসার সময়ের উপর নির্ভরশীল"
  },

  // ================= SEARCH =================
  searchableText: [
    "vonoprazan triple therapy",
    "resistant h pylori treatment",
    "advanced ulcer kit",
    "pcab gastric therapy",
    "অ্যাডভান্সড আলসার থেরাপি"
  ],

  // ================= BRANDS =================
  brands: [
    "Voquezna Triple Pak",
    "Vonokit HP",
    "Vono HP Kit",
    "HelioVono",
    "Pylovon Kit",
    "GastroVono",
    "Ultra HP Kit",
    "Vono Cure"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "advanced h pylori eradication",
      "resistant ulcer treatment"
    ],

    bn: [
      "অ্যাডভান্সড এইচ পাইলোরি দূর করা",
      "রেজিস্ট্যান্ট আলসার চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 VONOPRAZAN + AMOXICILLIN + METRONIDAZOLE (RESISTANT H. PYLORI RESCUE THERAPY)

{
  id: "vonoprazan_amoxicillin_metronidazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Vonoprazan + Amoxicillin + Metronidazole",
      bn: "ভোনোপ্রাজান + অ্যামোক্সিসিলিন + মেট্রোনিডাজল"
    },

    generic: {
      en: "Vonoprazan + Amoxicillin + Metronidazole",
      bn: "ভোনোপ্রাজান + অ্যামোক্সিসিলিন + মেট্রোনিডাজল"
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
    en: "rescue h. pylori eradication therapy",
    bn: "রেস্কিউ এইচ. পাইলোরি নির্মূল থেরাপি"
  },

  therapeuticCategory: {
    en: [
      "potassium competitive acid blocker",
      "antibiotic",
      "anti-h. pylori therapy"
    ],

    bn: [
      "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকার",
      "অ্যান্টিবায়োটিক",
      "এইচ. পাইলোরি চিকিৎসা"
    ]
  },

  class: {
    en: "PCAB Rescue Triple Therapy",
    bn: "পিসিএবি রেস্কিউ ট্রিপল থেরাপি"
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
    "20mg + 500mg + 400mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Vonoprazan",
        bn: "ভোনোপ্রাজান"
      },

      strength: "20mg"
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
        en: "Metronidazole",
        bn: "মেট্রোনিডাজল"
      },

      strength: "400mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: true,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 4,

    severity: {
      en: "ultra-strong",
      bn: "অতি শক্তিশালী"
    },

    score: {
      resistant_h_pylori: 10,
      recurrent_ulcer: 10,
      severe_gastritis: 10,
      h_pylori: 10,
      gastric_ulcer: 9
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 2,
    kidney: 2,
    liver: 5,

    overdose: {
      level: {
        en: "very-high",
        bn: "অত্যন্ত উচ্চ"
      },

      effect: {
        en: "May cause neurotoxicity, liver injury and severe vomiting",
        bn: "স্নায়ুর ক্ষতি, লিভারের সমস্যা ও তীব্র বমি হতে পারে"
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
    "vonoprazan rescue therapy",
    "resistant h pylori",
    "advanced ulcer therapy",
    "metronidazole gastric kit"
  ],

  symptoms: {
    en: [
      "persistent ulcer pain",
      "burning stomach",
      "severe acidity",
      "nausea"
    ],

    bn: [
      "দীর্ঘস্থায়ী আলসারের ব্যথা",
      "পেট জ্বালা",
      "তীব্র অ্যাসিডিটি",
      "বমি ভাব"
    ]
  },

  diseases: {
    en: [
      "resistant h pylori infection",
      "recurrent gastric ulcer",
      "chronic gastritis",
      "duodenal ulcer"
    ],

    bn: [
      "রেজিস্ট্যান্ট এইচ পাইলোরি সংক্রমণ",
      "বারবার গ্যাস্ট্রিক আলসার",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস",
      "ডিওডেনাল আলসার"
    ]
  },

  bestFor: {
    en: [
      "failed previous h pylori therapy",
      "resistant ulcer infection",
      "advanced rescue treatment"
    ],

    bn: [
      "আগের এইচ পাইলোরি থেরাপি ব্যর্থ হলে",
      "রেজিস্ট্যান্ট আলসার সংক্রমণ",
      "অ্যাডভান্সড রেস্কিউ চিকিৎসা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "metallic taste",
        "diarrhea",
        "abdominal pain"
      ],

      bn: [
        "মুখে ধাতব স্বাদ",
        "ডায়রিয়া",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "liver toxicity",
        "neuropathy",
        "severe allergy"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "স্নায়ুর সমস্যা",
        "তীব্র অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Vonoprazan strongly suppresses acid while antibiotics eradicate resistant H. pylori bacteria",

    bn:
      "ভোনোপ্রাজান শক্তিশালীভাবে অ্যাসিড কমায় এবং অ্যান্টিবায়োটিক রেজিস্ট্যান্ট এইচ পাইলোরি ধ্বংস করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Twice daily for 10-14 days",
      bn: "১০-১৪ দিন দিনে ২ বার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "As prescribed in therapy kit",
      bn: "থেরাপি কিট অনুযায়ী"
    }
  },

  onset: {
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "Depends on therapy course",
    bn: "চিকিৎসার সময়ের উপর নির্ভরশীল"
  },

  // ================= SEARCH =================
  searchableText: [
    "vonoprazan metronidazole amoxicillin",
    "rescue h pylori therapy",
    "resistant ulcer treatment",
    "advanced gastric kit",
    "রেস্কিউ আলসার থেরাপি"
  ],

  // ================= BRANDS =================
  brands: [
    "Vono Rescue Kit",
    "Voquezna Rescue Pak",
    "PyloResist Kit",
    "Ultra HP Rescue",
    "Vono Metro HP",
    "Rescue Gastro Kit",
    "HelioRescue",
    "Vono Triple Max"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "resistant h pylori eradication",
      "advanced rescue ulcer therapy"
    ],

    bn: [
      "রেজিস্ট্যান্ট এইচ পাইলোরি দূর করা",
      "অ্যাডভান্সড রেস্কিউ আলসার চিকিৎসা"
    ]
  },

  emergencyUse: false
},



// 🔥 VONOPRAZAN + AMOXICILLIN + LEVOFLOXACIN (LAST-LINE H. PYLORI THERAPY)

{
  id: "vonoprazan_amoxicillin_levofloxacin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Vonoprazan + Amoxicillin + Levofloxacin",
      bn: "ভোনোপ্রাজান + অ্যামোক্সিসিলিন + লেভোফ্লক্সাসিন"
    },

    generic: {
      en: "Vonoprazan + Amoxicillin + Levofloxacin",
      bn: "ভোনোপ্রাজান + অ্যামোক্সিসিলিন + লেভোফ্লক্সাসিন"
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
    en: "last-line resistant h. pylori therapy",
    bn: "শেষ ধাপের রেজিস্ট্যান্ট এইচ. পাইলোরি থেরাপি"
  },

  therapeuticCategory: {
    en: [
      "potassium competitive acid blocker",
      "fluoroquinolone antibiotic",
      "anti-h. pylori therapy"
    ],

    bn: [
      "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকার",
      "ফ্লুরোকুইনোলোন অ্যান্টিবায়োটিক",
      "এইচ. পাইলোরি চিকিৎসা"
    ]
  },

  class: {
    en: "PCAB + Fluoroquinolone Triple Therapy",
    bn: "পিসিএবি + ফ্লুরোকুইনোলোন ট্রিপল থেরাপি"
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
    "20mg + 500mg + 500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Vonoprazan",
        bn: "ভোনোপ্রাজান"
      },

      strength: "20mg"
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
        en: "Levofloxacin",
        bn: "লেভোফ্লক্সাসিন"
      },

      strength: "500mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: true,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 3,

    severity: {
      en: "extreme",
      bn: "অত্যন্ত তীব্র"
    },

    score: {
      resistant_h_pylori: 10,
      recurrent_ulcer: 10,
      failed_h_pylori_therapy: 10,
      severe_gastritis: 10,
      gastric_ulcer: 10
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 2,
    kidney: 3,
    liver: 5,

    overdose: {
      level: {
        en: "extreme",
        bn: "অত্যন্ত উচ্চ"
      },

      effect: {
        en: "May cause tendon rupture, arrhythmia and severe liver injury",
        bn: "টেন্ডন ছিঁড়ে যাওয়া, হৃদস্পন্দনের সমস্যা ও তীব্র লিভার ক্ষতি হতে পারে"
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
    "vonoprazan levofloxacin therapy",
    "resistant h pylori",
    "last line ulcer therapy",
    "advanced gastric infection"
  ],

  symptoms: {
    en: [
      "persistent ulcer pain",
      "severe acidity",
      "burning stomach",
      "recurrent gastritis"
    ],

    bn: [
      "দীর্ঘস্থায়ী আলসারের ব্যথা",
      "তীব্র অ্যাসিডিটি",
      "পেট জ্বালা",
      "বারবার গ্যাস্ট্রাইটিস"
    ]
  },

  diseases: {
    en: [
      "resistant h pylori infection",
      "recurrent gastric ulcer",
      "chronic gastritis",
      "failed eradication therapy"
    ],

    bn: [
      "রেজিস্ট্যান্ট এইচ পাইলোরি সংক্রমণ",
      "বারবার গ্যাস্ট্রিক আলসার",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস",
      "ব্যর্থ নির্মূল থেরাপি"
    ]
  },

  bestFor: {
    en: [
      "multiple therapy failure",
      "resistant h pylori",
      "advanced rescue treatment"
    ],

    bn: [
      "একাধিক থেরাপি ব্যর্থ হলে",
      "রেজিস্ট্যান্ট এইচ পাইলোরি",
      "অ্যাডভান্সড রেস্কিউ চিকিৎসা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "nausea",
        "dizziness"
      ],

      bn: [
        "ডায়রিয়া",
        "বমি ভাব",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "tendon rupture",
        "heart rhythm disorder",
        "nerve damage"
      ],

      bn: [
        "টেন্ডন ছিঁড়ে যাওয়া",
        "হৃদস্পন্দনের সমস্যা",
        "স্নায়ুর ক্ষতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Vonoprazan powerfully suppresses acid while antibiotics target resistant H. pylori strains",

    bn:
      "ভোনোপ্রাজান শক্তিশালীভাবে অ্যাসিড কমায় এবং অ্যান্টিবায়োটিক রেজিস্ট্যান্ট এইচ পাইলোরি ধ্বংস করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Twice daily for 10-14 days",
      bn: "১০-১৪ দিন দিনে ২ বার"
    },

    child: {
      en: "Strictly not recommended",
      bn: "কঠোরভাবে পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "As prescribed in therapy kit",
      bn: "থেরাপি কিট অনুযায়ী"
    }
  },

  onset: {
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "Depends on therapy course",
    bn: "চিকিৎসার সময়ের উপর নির্ভরশীল"
  },

  // ================= SEARCH =================
  searchableText: [
    "vonoprazan levofloxacin amoxicillin",
    "last line h pylori therapy",
    "advanced ulcer rescue kit",
    "resistant gastric infection",
    "শেষ ধাপের আলসার থেরাপি"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Rescue Therapy",
      bn: "অ্যাডভান্সড রেস্কিউ থেরাপি"
    },

    colorHint: "red",

    commonUse: false,

    hospitalLevel: true,

    prescriptionStrength: {
      en: "Extreme",
      bn: "অত্যন্ত শক্তিশালী"
    },

    warningLevel: {
      en: "High Risk",
      bn: "উচ্চ ঝুঁকি"
    }
  },

  // ================= BRANDS =================
  brands: [
    "Vono Rescue LX",
    "Voquezna LX Kit",
    "Ultra HP LX",
    "PyloEnd Kit",
    "Resist HP Max",
    "LevoVono Kit",
    "HelioLast",
    "Gastro LX Rescue"
  ],


  // ================= USAGE =================
  usageType: {
    en: [
      "last-line h pylori eradication",
      "extreme resistant ulcer treatment"
    ],

    bn: [
      "শেষ ধাপের এইচ পাইলোরি দূর করা",
      "অত্যন্ত রেজিস্ট্যান্ট আলসার চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 BISMUTH + PANTOPRAZOLE + TETRACYCLINE + METRONIDAZOLE
// 🔥 ADVANCED H. PYLORI QUADRUPLE THERAPY

{
  id: "bismuth_pantoprazole_tetracycline_metronidazole",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Bismuth + Pantoprazole + Tetracycline + Metronidazole",
      bn: "বিসমাথ + প্যান্টোপ্রাজল + টেট্রাসাইক্লিন + মেট্রোনিডাজল"
    },

    generic: {
      en: "Bismuth Subcitrate + Pantoprazole + Tetracycline + Metronidazole",
      bn: "বিসমাথ সাবসিট্রেট + প্যান্টোপ্রাজল + টেট্রাসাইক্লিন + মেট্রোনিডাজল"
    }
  },

  type: {
    en: "quadruple",
    bn: "ফোরেবল"
  },

  group: {
    en: "gastric",
    bn: "গ্যাস্ট্রিক"
  },

  subgroup: {
    en: "advanced h. pylori eradication therapy",
    bn: "অ্যাডভান্সড এইচ. পাইলোরি নির্মূল থেরাপি"
  },

  therapeuticCategory: {
    en: [
      "quadruple therapy",
      "anti-h. pylori",
      "anti-ulcer"
    ],

    bn: [
      "ফোরেবল থেরাপি",
      "এইচ. পাইলোরি চিকিৎসা",
      "আলসারের চিকিৎসা"
    ]
  },

  class: {
    en: "PPI + Bismuth + Dual Antibiotic Therapy",
    bn: "পিপিআই + বিসমাথ + ডুয়াল অ্যান্টিবায়োটিক থেরাপি"
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
    "40mg + 120mg + 500mg + 400mg"
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
        en: "Bismuth Subcitrate",
        bn: "বিসমাথ সাবসিট্রেট"
      },

      strength: "120mg"
    },

    {
      ingredient: {
        en: "Tetracycline",
        bn: "টেট্রাসাইক্লিন"
      },

      strength: "500mg"
    },

    {
      ingredient: {
        en: "Metronidazole",
        bn: "মেট্রোনিডাজল"
      },

      strength: "400mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: true,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 3,

    severity: {
      en: "extreme",
      bn: "অত্যন্ত তীব্র"
    },

    score: {
      h_pylori: 10,
      resistant_ulcer: 10,
      gastric_ulcer: 10,
      chronic_gastritis: 10,
      failed_triple_therapy: 10
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 1,
    kidney: 3,
    liver: 5,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause severe liver injury, neuropathy and severe diarrhea",
        bn: "তীব্র লিভার ক্ষতি, স্নায়ুর সমস্যা ও মারাত্মক ডায়রিয়া হতে পারে"
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
    "quadruple therapy",
    "h pylori kit",
    "bismuth therapy",
    "advanced ulcer treatment",
    "resistant h pylori"
  ],

  symptoms: {
    en: [
      "burning stomach pain",
      "persistent acidity",
      "ulcer pain",
      "recurrent gastritis"
    ],

    bn: [
      "পেট জ্বালা",
      "দীর্ঘস্থায়ী অ্যাসিডিটি",
      "আলসারের ব্যথা",
      "বারবার গ্যাস্ট্রাইটিস"
    ]
  },

  diseases: {
    en: [
      "h pylori infection",
      "gastric ulcer",
      "duodenal ulcer",
      "chronic gastritis",
      "resistant h pylori"
    ],

    bn: [
      "এইচ পাইলোরি সংক্রমণ",
      "গ্যাস্ট্রিক আলসার",
      "ডুওডেনাল আলসার",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস",
      "রেজিস্ট্যান্ট এইচ পাইলোরি"
    ]
  },

  bestFor: {
    en: [
      "failed triple therapy",
      "resistant ulcer",
      "advanced h pylori eradication"
    ],

    bn: [
      "ট্রিপল থেরাপি ব্যর্থ হলে",
      "রেজিস্ট্যান্ট আলসার",
      "অ্যাডভান্সড এইচ পাইলোরি নির্মূল"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "nausea",
        "metallic taste",
        "diarrhea",
        "abdominal pain"
      ],

      bn: [
        "বমি ভাব",
        "মুখে ধাতব স্বাদ",
        "ডায়রিয়া",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "liver toxicity",
        "neuropathy",
        "severe allergic reaction"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "স্নায়ুর সমস্যা",
        "তীব্র অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Suppresses acid and destroys H. pylori bacteria using dual antibiotics and bismuth protection",

    bn:
      "অ্যাসিড কমিয়ে ডুয়াল অ্যান্টিবায়োটিক ও বিসমাথের মাধ্যমে এইচ পাইলোরি ধ্বংস করে"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "Usually 2-4 times daily for 10-14 days",
      bn: "সাধারণত ১০-১৪ দিন দিনে ২-৪ বার"
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
    en: "Within hours",
    bn: "কয়েক ঘণ্টার মধ্যে"
  },

  duration: {
    en: "Depends on treatment course",
    bn: "চিকিৎসার সময় অনুযায়ী"
  },

  // ================= SEARCH =================
  searchableText: [
    "quadruple therapy",
    "h pylori eradication kit",
    "bismuth ulcer therapy",
    "advanced gastric ulcer medicine",
    "ফোরেবল আলসার থেরাপি"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Advanced Quadruple Therapy",
      bn: "অ্যাডভান্সড ফোরেবল থেরাপি"
    },

    colorHint: "darkred",

    commonUse: false,

    hospitalLevel: true,

    prescriptionStrength: {
      en: "Extreme",
      bn: "অত্যন্ত শক্তিশালী"
    },

    warningLevel: {
      en: "Very High Risk",
      bn: "অত্যন্ত উচ্চ ঝুঁকি"
    },
    order: ["importantTerms","hPyloriSymptoms" ],
    hiddenFields: ["searchableText"]
  },

  // ================= BRANDS =================
  brands: [
    "Pylera",
    "Helicure Quad Kit",
    "Bismo HP Kit",
    "Quad HP Forte",
    "Ultra Quad HP",
    "Gastro Quadra",
    "HeliStop Q",
    "Bismuth Rescue Kit"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "advanced h pylori eradication",
      "resistant ulcer treatment"
    ],

    bn: [
      "অ্যাডভান্সড এইচ পাইলোরি নির্মূল",
      "রেজিস্ট্যান্ট আলসার চিকিৎসা"
    ]
  },
  // ================= IMPORTANT TERMS =================
importantTerms: {

  hPylori: {
    en:
      "A stomach bacteria that causes ulcer, gastritis and chronic acidity",

    bn:
      "এক ধরনের পাকস্থলীর ব্যাকটেরিয়া যা আলসার, গ্যাস্ট্রাইটিস ও দীর্ঘস্থায়ী অ্যাসিডিটি তৈরি করে"
  },

  quadrupleTherapy: {
    en:
      "Treatment using four medicines together to fully eradicate resistant H. pylori infection",

    bn:
      "রেজিস্ট্যান্ট এইচ. পাইলোরি সম্পূর্ণ ধ্বংস করতে ৪টি ওষুধ একসাথে ব্যবহার করা হয়"
  },

  bismuth: {
    en:
      "Protects stomach lining and helps kill H. pylori bacteria",

    bn:
      "পাকস্থলীর আবরণ রক্ষা করে এবং এইচ. পাইলোরি ধ্বংসে সাহায্য করে"
  },

  pantoprazole: {
    en:
      "Strong acid reducing medicine that lowers stomach acid production",

    bn:
      "শক্তিশালী অ্যাসিড কমানোর ওষুধ যা পাকস্থলীর অ্যাসিড তৈরি কমায়"
  },

  tetracycline: {
    en:
      "Broad-spectrum antibiotic used against H. pylori bacteria",

    bn:
      "এইচ. পাইলোরির বিরুদ্ধে ব্যবহৃত ব্রড-স্পেকট্রাম অ্যান্টিবায়োটিক"
  },

  metronidazole: {
    en:
      "Antibiotic effective against anaerobic bacteria and H. pylori infection",

    bn:
      "অ্যানারোবিক ব্যাকটেরিয়া ও এইচ. পাইলোরির বিরুদ্ধে কার্যকর অ্যান্টিবায়োটিক"
  },

  resistantUlcer: {
    en:
      "Ulcer that does not improve with normal gastric medicines or triple therapy",

    bn:
      "সাধারণ গ্যাস্ট্রিক ওষুধ বা ট্রিপল থেরাপিতে ভালো না হওয়া আলসার"
  },

  chronicGastritis: {
    en:
      "Long-term inflammation of the stomach lining",

    bn:
      "পাকস্থলীর আবরণের দীর্ঘমেয়াদি প্রদাহ"
  },

  neuropathy: {
    en:
      "Nerve damage causing tingling, numbness or burning sensation",

    bn:
      "স্নায়ুর ক্ষতি যার ফলে ঝিনঝিনি, অবশ ভাব বা জ্বালাপোড়া হতে পারে"
  },

  liverToxicity: {
    en:
      "Liver injury caused by strong medicines or overdose",

    bn:
      "শক্তিশালী ওষুধ বা অতিরিক্ত ডোজের কারণে লিভারের ক্ষতি"
  },

  metallicTaste: {
    en:
      "Temporary metal-like taste in the mouth caused by medicines",

    bn:
      "ওষুধের কারণে মুখে ধাতব স্বাদ অনুভব হওয়া"
  },

  gastritis: {
    en:
      "Inflammation or irritation of the stomach lining",

    bn:
      "পাকস্থলীর আবরণে প্রদাহ বা জ্বালা"
  },

  duodenalUlcer: {
    en:
      "Ulcer occurring in the first part of the small intestine",

    bn:
      "ক্ষুদ্রান্ত্রের প্রথম অংশে হওয়া আলসার"
  },

  eradication: {
    en:
      "Complete removal or destruction of infection-causing bacteria",

    bn:
      "সংক্রমণ সৃষ্টিকারী ব্যাকটেরিয়া সম্পূর্ণ ধ্বংস করা"
  }

},


hPyloriSymptoms: {

  en: [
    "burning stomach pain",
    "persistent acidity",
    "heartburn",
    "bloating",
    "gas",
    "nausea",
    "vomiting",
    "loss of appetite",
    "burping",
    "indigestion",
    "stomach heaviness",
    "ulcer pain",
    "night acidity",
    "bad breath",
    "black stool in severe ulcer",
    "weight loss in chronic infection"
  ],

  bn: [
    "পেট জ্বালা",
    "দীর্ঘস্থায়ী অ্যাসিডিটি",
    "বুক জ্বালা",
    "পেট ফাঁপা",
    "গ্যাস",
    "বমি ভাব",
    "বমি",
    "ক্ষুধামন্দা",
    "ঢেকুর",
    "বদহজম",
    "পেট ভার লাগা",
    "আলসারের ব্যথা",
    "রাতের অ্যাসিডিটি",
    "মুখে দুর্গন্ধ",
    "তীব্র আলসারে কালো পায়খানা",
    "দীর্ঘদিন সংক্রমণে ওজন কমে যাওয়া"
  ],

  explain: {

    burningPain: {
      en:
        "Pain or burning sensation in upper stomach especially when empty stomach",

      bn:
        "বিশেষ করে খালি পেটে উপরের পেটে জ্বালা বা ব্যথা হওয়া"
    },

    persistentAcidity: {
      en:
        "Acidity that repeatedly returns even after medicine",

      bn:
        "ওষুধ খেলেও বারবার ফিরে আসা অ্যাসিডিটি"
    },

    bloating: {
      en:
        "Feeling of swollen or tight stomach because of gas",

      bn:
        "গ্যাসের কারণে পেট ফুলে বা টাইট লাগা"
    },

    ulcerPain: {
      en:
        "Deep stomach pain caused by stomach ulcer",

      bn:
        "আলসারের কারণে গভীর পেট ব্যথা"
    },

    blackStool: {
      en:
        "Black stool may indicate bleeding ulcer",

      bn:
        "কালো পায়খানা হলে আলসার থেকে রক্তপাত হতে পারে"
    },

    weightLoss: {
      en:
        "Long-term infection may reduce appetite and body weight",

      bn:
        "দীর্ঘদিন সংক্রমণে ক্ষুধা ও ওজন কমে যেতে পারে"
    }

  }

},


  emergencyUse: false
},


// 🔥 TEGOPRAZAN (NEW GENERATION PCAB)

{
  id: "tegoprazan",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Tegoprazan",
      bn: "টেগোপ্রাজান"
    },

    generic: {
      en: "Tegoprazan",
      bn: "টেগোপ্রাজান"
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
      "pcab",
      "anti-reflux"
    ],

    bn: [
      "পিক্যাব",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Potassium Competitive Acid Blocker",
    bn: "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকার"
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
    "25mg",
    "50mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Tegoprazan",
        bn: "টেগোপ্রাজান"
      },

      strength: "50mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 8,

    severity: {
      en: "extreme",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      gerd: 10,
      acid_reflux: 10,
      heartburn: 10,
      ulcer: 9
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
        en: "May cause diarrhea, nausea and abdominal discomfort",
        bn: "ডায়রিয়া, বমি ভাব ও পেটের অস্বস্তি হতে পারে"
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
    "tegoprazan",
    "pcab",
    "gerd",
    "acid reflux",
    "heartburn"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "stomach burning",
      "night acidity"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "পেট জ্বালা",
      "রাতের অ্যাসিডিটি"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "erosive gastritis",
      "ulcer"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "ইরোসিভ গ্যাস্ট্রাইটিস",
      "আলসার"
    ]
  },

  bestFor: {
    en: [
      "severe reflux",
      "night acidity",
      "advanced gerd"
    ],

    bn: [
      "তীব্র রিফ্লাক্স",
      "রাতের অ্যাসিডিটি",
      "অ্যাডভান্সড জিইআরডি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "diarrhea",
        "nausea",
        "headache"
      ],

      bn: [
        "ডায়রিয়া",
        "বমি ভাব",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "gut infection",
        "low magnesium"
      ],

      bn: [
        "অন্ত্রের সংক্রমণ",
        "ম্যাগনেসিয়াম কমে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Rapidly suppresses stomach acid using potassium competitive acid blocking action",

    bn:
      "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকিং পদ্ধতিতে দ্রুত অ্যাসিড কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "50mg once daily",
      bn: "দিনে ৫০ মিগ্রা একবার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "100mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১০০ মিগ্রা"
    }
  },

  onset: {
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "24 hours+",
    bn: "২৪ ঘণ্টার বেশি"
  },

  // ================= SEARCH =================
  searchableText: [
    "tegoprazan",
    "advanced acidity medicine",
    "gerd medicine",
    "acid reflux treatment",
    "অ্যাডভান্সড গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Ultra Strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    colorHint: "darkred",

    commonUse: false,

    advancedMedicine: true
  },

  // ================= BRANDS =================
  brands: [
    "K-Cab",
    "Tegopra",
    "Tegacid",
    "Tegogut",
    "Tegocid",
    "Tegozan"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "advanced acid suppression",
      "severe reflux treatment"
    ],

    bn: [
      "অ্যাডভান্সড অ্যাসিড কমানো",
      "তীব্র রিফ্লাক্স চিকিৎসা"
    ]
  },

  emergencyUse: false
},
// 🔥 FEXUPRAZAN (ULTRA MODERN PCAB)

{
  id: "fexuprazan",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Fexuprazan",
      bn: "ফেক্সুপ্রাজান"
    },

    generic: {
      en: "Fexuprazan Hydrochloride",
      bn: "ফেক্সুপ্রাজান হাইড্রোক্লোরাইড"
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
      "pcab",
      "anti-reflux"
    ],

    bn: [
      "পিক্যাব",
      "রিফ্লাক্স কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Potassium Competitive Acid Blocker",
    bn: "পটাশিয়াম কম্পিটিটিভ অ্যাসিড ব্লকার"
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
    "40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Fexuprazan Hydrochloride",
        bn: "ফেক্সুপ্রাজান হাইড্রোক্লোরাইড"
      },

      strength: "40mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 10,
    safetyLevel: 8,

    severity: {
      en: "extreme",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      acidity: 10,
      gerd: 10,
      acid_reflux: 10,
      heartburn: 10,
      ulcer: 9
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
        en: "May cause nausea, bloating and diarrhea",
        bn: "বমি ভাব, পেট ফাঁপা ও ডায়রিয়া হতে পারে"
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
    "fexuprazan",
    "pcab",
    "acid reflux",
    "gerd",
    "heartburn"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "night acidity",
      "stomach burning"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "রাতের অ্যাসিডিটি",
      "পেট জ্বালা"
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
      "advanced gerd",
      "night reflux",
      "severe acidity"
    ],

    bn: [
      "অ্যাডভান্সড জিইআরডি",
      "রাতের রিফ্লাক্স",
      "তীব্র অ্যাসিডিটি"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "bloating",
        "diarrhea",
        "headache"
      ],

      bn: [
        "পেট ফাঁপা",
        "ডায়রিয়া",
        "মাথাব্যথা"
      ]
    },

    serious: {
      en: [
        "gut infection",
        "low magnesium"
      ],

      bn: [
        "অন্ত্রের সংক্রমণ",
        "ম্যাগনেসিয়াম কমে যাওয়া"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks stomach acid secretion rapidly using advanced potassium competitive mechanism",

    bn:
      "অ্যাডভান্সড পটাশিয়াম কম্পিটিটিভ পদ্ধতিতে দ্রুত পাকস্থলীর অ্যাসিড কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "40mg once daily",
      bn: "দিনে ৪০ মিগ্রা একবার"
    },

    child: {
      en: "Not recommended",
      bn: "পরামর্শ দেওয়া হয় না"
    },

    maxDaily: {
      en: "40mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০ মিগ্রা"
    }
  },

  onset: {
    en: "1-2 hours",
    bn: "১-২ ঘণ্টা"
  },

  duration: {
    en: "24 hours+",
    bn: "২৪ ঘণ্টার বেশি"
  },

  // ================= SEARCH =================
  searchableText: [
    "fexuprazan",
    "advanced reflux medicine",
    "pcab medicine",
    "acid blocker",
    "শক্তিশালী গ্যাস্ট্রিকের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Ultra Strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    colorHint: "darkred",

    commonUse: false,

    advancedMedicine: true
  },

  // ================= BRANDS =================
  brands: [
    "Fexuclue",
    "Fexupra",
    "Fexogut",
    "Fexacid",
    "Fexoride",
    "Fexocid"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "advanced acid suppression",
      "severe reflux treatment"
    ],

    bn: [
      "অ্যাডভান্সড অ্যাসিড কমানো",
      "তীব্র রিফ্লাক্স চিকিৎসা"
    ]
  },

  emergencyUse: false
},


// 🔥 GAVISCON TYPE (SODIUM ALGINATE + SODIUM BICARBONATE + CALCIUM CARBONATE)

{
  id: "ssbc",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate",
      bn: "সোডিয়াম অ্যালজিনেট + সোডিয়াম বাইকার্বোনেট + ক্যালসিয়াম কার্বোনেট"
    },

    generic: {
      en: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate",
      bn: "সোডিয়াম অ্যালজিনেট + সোডিয়াম বাইকার্বোনেট + ক্যালসিয়াম কার্বোনেট"
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
    en: "reflux barrier medicine",
    bn: "রিফ্লাক্স প্রতিরোধক ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "antacid",
      "anti-reflux",
      "alginate therapy"
    ],

    bn: [
      "অ্যান্টাসিড",
      "রিফ্লাক্স কমানোর ওষুধ",
      "অ্যালজিনেট থেরাপি"
    ]
  },

  class: {
    en: "Alginate Reflux Suppressant",
    bn: "অ্যালজিনেট রিফ্লাক্স সাপ্রেসেন্ট"
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
      "sachet",
      "chewable tablet"
    ],

    bn: [
      "সিরাপ",
      "স্যাশে",
      "চিবানোর ট্যাবলেট"
    ]
  },

  strengths: [
    "500mg + 267mg + 160mg"
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
        en: "Sodium Bicarbonate",
        bn: "সোডিয়াম বাইকার্বোনেট"
      },

      strength: "267mg"
    },

    {
      ingredient: {
        en: "Calcium Carbonate",
        bn: "ক্যালসিয়াম কার্বোনেট"
      },

      strength: "160mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 9,
    safetyLevel: 9,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      acid_reflux: 10,
      heartburn: 10,
      gerd: 9,
      acidity: 9,
      night_reflux: 10
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
        en: "May cause bloating and excess gas",
        bn: "পেট ফাঁপা ও অতিরিক্ত গ্যাস হতে পারে"
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
    "gaviscon",
    "alginate",
    "acid reflux",
    "heartburn",
    "night reflux"
  ],

  symptoms: {
    en: [
      "heartburn",
      "acid reflux",
      "sour taste in mouth",
      "chest burning",
      "night acidity"
    ],

    bn: [
      "বুক জ্বালা",
      "অ্যাসিড রিফ্লাক্স",
      "মুখে টক পানি আসা",
      "বুকে জ্বালাপোড়া",
      "রাতের অ্যাসিডিটি"
    ]
  },

  diseases: {
    en: [
      "gerd",
      "acid reflux",
      "heartburn",
      "pregnancy acidity"
    ],

    bn: [
      "জিইআরডি",
      "অ্যাসিড রিফ্লাক্স",
      "বুক জ্বালা",
      "গর্ভাবস্থার অ্যাসিডিটি"
    ]
  },

  bestFor: {
    en: [
      "night reflux",
      "acid coming to throat",
      "heartburn after meal"
    ],

    bn: [
      "রাতের রিফ্লাক্স",
      "গলা পর্যন্ত অ্যাসিড উঠে আসা",
      "খাওয়ার পরে বুক জ্বালা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "bloating",
        "burping",
        "gas"
      ],

      bn: [
        "পেট ফাঁপা",
        "ঢেকুর",
        "গ্যাস"
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
      "Forms a protective foam barrier over stomach acid to stop reflux",

    bn:
      "পাকস্থলীর অ্যাসিডের উপর ফোমের আবরণ তৈরি করে রিফ্লাক্স বন্ধ করে"
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
    en: "Within minutes",
    bn: "কয়েক মিনিটের মধ্যে"
  },

  duration: {
    en: "3-4 hours",
    bn: "৩-৪ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "gaviscon",
    "acid reflux syrup",
    "heartburn medicine",
    "alginate medicine",
    "রিফ্লাক্সের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Fast Reflux Relief",
      bn: "দ্রুত রিফ্লাক্স উপশম"
    },

    colorHint: "blue",

    commonUse: true,

    advancedMedicine: true,

    refluxShield: true
  },

  // ================= BRANDS =================
  brands: [
    "Gaviscon",
    "Algicon",
    "Refluxin",
    "Algicare",
    "Algirel",
    "Refluxnil",
    "AcidShield",
    "Gastrofoam"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "reflux suppression",
      "heartburn relief",
      "acid barrier formation"
    ],

    bn: [
      "রিফ্লাক্স কমানো",
      "বুক জ্বালা কমানো",
      "অ্যাসিডের বাধা তৈরি"
    ]
  },

  emergencyUse: false
},

// 🔥 REBAMIPIDE
// 🔥 GASTRIC MUCOSAL PROTECTIVE MEDICINE

{
  id: "rebamipide",

  names: {
    primary: {
      en: "Rebamipide",
      bn: "রেবামিপাইড"
    },

    generic: {
      en: "Rebamipide",
      bn: "রেবামিপাইড"
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
    en: "mucosal protective agent",
    bn: "পাকস্থলীর আবরণ সুরক্ষাকারী ওষুধ"
  },

  therapeuticCategory: {
    en: [
      "anti-ulcer",
      "mucosal protective agent"
    ],

    bn: [
      "আলসারের ওষুধ",
      "মিউকোসাল প্রটেক্টিভ ওষুধ"
    ]
  },

  class: {
    en: "Gastric Mucosal Protectant",
    bn: "গ্যাস্ট্রিক মিউকোসাল প্রটেক্ট্যান্ট"
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
    en: ["tablet"],
    bn: ["ট্যাবলেট"]
  },

  strengths: [
    "100mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Rebamipide",
        bn: "রেবামিপাইড"
      },

      strength: "100mg"
    }
  ],

  otc: false,
  rx: true,
  antibiotic: false,

  ai: {
    powerLevel: 8,
    safetyLevel: 9,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      ulcer: 10,
      gastritis: 10,
      stomach_burning: 8,
      gastric: 9
    }
  },

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
        en: "May cause nausea and diarrhea",
        bn: "বমি ভাব ও ডায়রিয়া হতে পারে"
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
    "rebamipide",
    "ulcer protection",
    "gastritis",
    "stomach lining"
  ],

  symptoms: {
    en: [
      "stomach burning",
      "gastric pain",
      "gastritis",
      "ulcer irritation"
    ],

    bn: [
      "পেট জ্বালা",
      "গ্যাস্ট্রিক ব্যথা",
      "গ্যাস্ট্রাইটিস",
      "আলসারের জ্বালা"
    ]
  },

  diseases: {
    en: [
      "gastric ulcer",
      "gastritis",
      "stomach erosion"
    ],

    bn: [
      "গ্যাস্ট্রিক আলসার",
      "গ্যাস্ট্রাইটিস",
      "পাকস্থলীর ক্ষয়"
    ]
  },

  bestFor: {
    en: [
      "gastric lining protection",
      "chronic gastritis",
      "ulcer healing"
    ],

    bn: [
      "পাকস্থলীর আবরণ সুরক্ষা",
      "দীর্ঘমেয়াদি গ্যাস্ট্রাইটিস",
      "আলসার ভালো হওয়া"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "nausea",
        "constipation",
        "bloating"
      ],

      bn: [
        "বমি ভাব",
        "কোষ্ঠকাঠিন্য",
        "পেট ফাঁপা"
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
      "Protects and repairs stomach lining by increasing protective mucus production",

    bn:
      "সুরক্ষামূলক মিউকাস বাড়িয়ে পাকস্থলীর আবরণ রক্ষা ও মেরামত করে"
  },

  dosing: {
    adult: {
      en: "Usually 100mg three times daily",
      bn: "সাধারণত দিনে ৩ বার ১০০ মি.গ্রা."
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
    en: "Within days",
    bn: "কয়েক দিনের মধ্যে"
  },

  duration: {
    en: "Depends on treatment",
    bn: "চিকিৎসার উপর নির্ভরশীল"
  },

  searchableText: [
    "rebamipide",
    "gastritis medicine",
    "ulcer protection medicine",
    "stomach lining medicine",
    "গ্যাস্ট্রাইটিসের ওষুধ"
  ],

  brands: [
    "Mucosta",
    "Rebagen",
    "Rebam",
    "Gastroreb",
    "Rebapro"
  ],

  usageType: {
    en: [
      "ulcer protection",
      "gastritis treatment"
    ],

    bn: [
      "আলসার সুরক্ষা",
      "গ্যাস্ট্রাইটিস চিকিৎসা"
    ]
  },

  emergencyUse: false
},

// 🔥 TRIMEBUTINE
// 🔥 IBS + GUT MOTILITY CONTROL MEDICINE

{
  id: "trimebutine",

  names: {
    primary: {
      en: "Trimebutine",
      bn: "ট্রাইমেবিউটিন"
    },

    generic: {
      en: "Trimebutine Maleate",
      bn: "ট্রাইমেবিউটিন ম্যালিয়েট"
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
    en: "gut motility regulator",
    bn: "আন্ত্রিক চলাচল নিয়ন্ত্রণকারী"
  },

  therapeuticCategory: {
    en: [
      "antispasmodic",
      "ibs treatment"
    ],

    bn: [
      "অ্যান্টিস্পাজমোডিক",
      "আইবিএস চিকিৎসা"
    ]
  },

  class: {
    en: "GI Motility Modulator",
    bn: "জিআই মোটিলিটি মডুলেটর"
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
    en: ["tablet"],
    bn: ["ট্যাবলেট"]
  },

  strengths: [
    "100mg",
    "200mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Trimebutine",
        bn: "ট্রাইমেবিউটিন"
      },

      strength: "200mg"
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
      bloating: 9,
      indigestion: 8
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
        en: "May cause drowsiness and dizziness",
        bn: "ঘুম ও মাথা ঘোরা হতে পারে"
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
    "trimebutine",
    "ibs",
    "abdominal cramp",
    "bloating"
  ],

  symptoms: {
    en: [
      "abdominal pain",
      "cramp",
      "bloating",
      "irregular bowel movement"
    ],

    bn: [
      "পেট ব্যথা",
      "পেট মোচড়",
      "পেট ফাঁপা",
      "অনিয়মিত পায়খানা"
    ]
  },

  diseases: {
    en: [
      "ibs",
      "functional bowel disorder",
      "intestinal spasm"
    ],

    bn: [
      "আইবিএস",
      "আন্ত্রিক কার্যকারিতা সমস্যা",
      "আন্ত্রিক খিঁচুনি"
    ]
  },

  bestFor: {
    en: [
      "ibs pain",
      "abdominal cramp",
      "gut spasm"
    ],

    bn: [
      "আইবিএসের ব্যথা",
      "পেট মোচড়",
      "আন্ত্রিক খিঁচুনি"
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
        "allergic reaction"
      ],

      bn: [
        "অ্যালার্জি"
      ]
    }
  },

  mechanism: {
    en:
      "Regulates abnormal intestinal movement and reduces bowel spasm",

    bn:
      "আন্ত্রিক অস্বাভাবিক চলাচল নিয়ন্ত্রণ করে ও খিঁচুনি কমায়"
  },

  dosing: {
    adult: {
      en: "100-200mg three times daily",
      bn: "দিনে ৩ বার ১০০-২০০ মি.গ্রা."
    },

    child: {
      en: "Only under specialist advice",
      bn: "বিশেষজ্ঞের পরামর্শে"
    },

    maxDaily: {
      en: "600mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৬০০ মি.গ্রা."
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
    "trimebutine",
    "ibs medicine",
    "abdominal cramp medicine",
    "gut spasm medicine",
    "আইবিএসের ওষুধ"
  ],

  brands: [
    "Debridat",
    "Tribudat",
    "Trimed",
    "Gutril",
    "Spasmotrim"
  ],

  usageType: {
    en: [
      "ibs control",
      "gut spasm relief"
    ],

    bn: [
      "আইবিএস নিয়ন্ত্রণ",
      "আন্ত্রিক খিঁচুনি কমানো"
    ]
  },

  emergencyUse: false
}
];