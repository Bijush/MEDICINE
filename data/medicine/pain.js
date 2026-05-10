// 💊 PAIN / FEVER MEDICINES (AI READY + CLASS + BRANDS)

export const DATA = [

  // ================= PARACETAMOL =================
{
  id: "paracetamol",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Paracetamol",
      bn: "প্যারাসিটামল"
    },

    generic: {
      en: "Acetaminophen",
      bn: "অ্যাসিটামিনোফেন"
    }
  },

  group: {
    en: "fever",
    bn: "জ্বর"
  },

  subgroup: {
    en: "analgesic",
    bn: "ব্যথানাশক"
  },

  therapeuticCategory: {
    en: [
      "antipyretic",
      "analgesic"
    ],

    bn: [
      "জ্বর কমানোর ওষুধ",
      "ব্যথানাশক"
    ]
  },

  class: {
    en: "Analgesic + Antipyretic",
    bn: "ব্যথানাশক ও জ্বর কমানোর ওষুধ"
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
      "drops"
    ],

    bn: [
      "ট্যাবলেট",
      "সিরাপ",
      "ড্রপ"
    ]
  },

  strengths: [
    "120mg",
    "250mg",
    "500mg",
    "650mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Paracetamol",
        bn: "প্যারাসিটামল"
      },

      strength: "500mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 2,
    safetyLevel: 9,

    severity: {
      en: "mild",
      bn: "হালকা"
    },

    score: {
      fever: 10,
      viral_fever: 9,
      headache: 9,
      body_pain: 8,
      mild_pain: 8,
      flu: 7,
      cold: 6
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 1,
    liver: 4,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "Severe liver damage possible in overdose",
        bn: "অতিরিক্ত ডোজে মারাত্মক লিভার ক্ষতি হতে পারে"
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
    "paracetamol",
    "acetaminophen",
    "fever",
    "pain",
    "headache",
    "body pain",
    "viral fever"
  ],

  symptoms: {
    en: [
      "fever",
      "headache",
      "pain",
      "body pain"
    ],

    bn: [
      "জ্বর",
      "মাথাব্যথা",
      "ব্যথা",
      "শরীর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "fever",
      "viral fever",
      "headache",
      "cold",
      "flu"
    ],

    bn: [
      "জ্বর",
      "ভাইরাল জ্বর",
      "মাথাব্যথা",
      "সর্দি",
      "ফ্লু"
    ]
  },

  bestFor: {
    en: [
      "fever",
      "mild pain",
      "headache",
      "viral fever"
    ],

    bn: [
      "জ্বর",
      "হালকা ব্যথা",
      "মাথাব্যথা",
      "ভাইরাল জ্বর"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "nausea",
        "rare skin allergy"
      ],

      bn: [
        "বমি ভাব",
        "বিরল ত্বকের অ্যালার্জি"
      ]
    },

    serious: {
      en: [
        "severe liver damage"
      ],

      bn: [
        "মারাত্মক লিভার ক্ষতি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Reduces fever and pain by acting on the brain temperature and pain center",

    bn:
      "মস্তিষ্কের তাপমাত্রা ও ব্যথা নিয়ন্ত্রণ কেন্দ্রে কাজ করে জ্বর ও ব্যথা কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "500mg - 650mg every 4-6 hours",
      bn: "প্রতি ৪-৬ ঘণ্টা পর ৫০০-৬৫০ মিগ্রা"
    },

    child: {
      en: "Dose depends on body weight",
      bn: "ডোজ শরীরের ওজন অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "4000mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০০০ মিগ্রা"
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
    "paracetamol",
    "acetaminophen",
    "fever medicine",
    "pain killer",
    "জ্বরের ওষুধ",
    "ব্যথার ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "green",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Crocin",
    "Calpol",
    "Dolo",
    "Panadol",
    "Paracip",
    "P-650",
    "Pacimol"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "fever reduction",
      "pain relief"
    ],

    bn: [
      "জ্বর কমানো",
      "ব্যথা উপশম"
    ]
  },

  emergencyUse: false
},


  // ================= IBUPROFEN =================
{
  id: "ibuprofen",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Ibuprofen",
      bn: "আইবুপ্রোফেন"
    },

    generic: {
      en: "Ibuprofen",
      bn: "আইবুপ্রোফেন"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "pain killer",
      "anti inflammatory",
      "antipyretic"
    ],

    bn: [
      "ব্যথানাশক",
      "প্রদাহ কমানোর ওষুধ",
      "জ্বর কমানোর ওষুধ"
    ]
  },

  class: {
    en: "NSAID",
    bn: "নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
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
      "suspension"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "সিরাপ",
      "সাসপেনশন"
    ]
  },

  strengths: [
    "100mg",
    "200mg",
    "400mg",
    "600mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Ibuprofen",
        bn: "আইবুপ্রোফেন"
      },

      strength: "400mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 4,
    safetyLevel: 7,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      pain: 10,
      inflammation: 10,
      arthritis: 9,
      toothache: 9,
      muscle_pain: 8,
      joint_pain: 8,
      swelling: 8,
      fever: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 2,
    kidney: 3,
    liver: 1,

    overdose: {
      level: {
        en: "moderate",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause stomach bleeding and kidney injury",
        bn: "পেটে রক্তক্ষরণ ও কিডনির ক্ষতি হতে পারে"
      }
    }
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: true,
    elderly: false,
    pediatric: true
  },

  // ================= MATCHING =================
  tags: [
    "ibuprofen",
    "pain",
    "inflammation",
    "swelling",
    "arthritis",
    "fever",
    "toothache"
  ],

  symptoms: {
    en: [
      "pain",
      "swelling",
      "fever",
      "joint pain",
      "muscle pain"
    ],

    bn: [
      "ব্যথা",
      "ফোলা",
      "জ্বর",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা"
    ]
  },

  diseases: {
    en: [
      "pain",
      "inflammation",
      "arthritis",
      "toothache",
      "muscle pain",
      "back pain",
      "joint pain",
      "fever"
    ],

    bn: [
      "ব্যথা",
      "প্রদাহ",
      "আর্থ্রাইটিস",
      "দাঁতের ব্যথা",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "জয়েন্ট ব্যথা",
      "জ্বর"
    ]
  },

  bestFor: {
    en: [
      "inflammatory pain",
      "arthritis",
      "toothache",
      "muscle pain",
      "joint pain"
    ],

    bn: [
      "প্রদাহজনিত ব্যথা",
      "আর্থ্রাইটিস",
      "দাঁতের ব্যথা",
      "মাংসপেশির ব্যথা",
      "জয়েন্ট ব্যথা"
    ]
  },

  // ================= AVOID =================
  avoidIn: {
    en: [
      "peptic ulcer",
      "severe kidney disease",
      "NSAID allergy",
      "late pregnancy"
    ],

    bn: [
      "পেপটিক আলসার",
      "গুরুতর কিডনি রোগ",
      "NSAID অ্যালার্জি",
      "গর্ভাবস্থার শেষ সময়"
    ]
  },

  contraindications: {
    en: [
      "active peptic ulcer",
      "severe kidney failure",
      "NSAID hypersensitivity"
    ],

    bn: [
      "সক্রিয় পেপটিক আলসার",
      "গুরুতর কিডনি বিকল",
      "NSAID অতিসংবেদনশীলতা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "stomach bleeding",
        "kidney injury",
        "severe allergy"
      ],

      bn: [
        "পেটে রক্তক্ষরণ",
        "কিডনির ক্ষতি",
        "তীব্র অ্যালার্জি"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Reduces pain, fever and inflammation by blocking COX enzymes and prostaglandin synthesis",

    bn:
      "COX enzyme ব্লক করে prostaglandin কমিয়ে ব্যথা, জ্বর ও প্রদাহ কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "200mg - 400mg every 6-8 hours",
      bn: "প্রতি ৬-৮ ঘণ্টা পর ২০০-৪০০ মিগ্রা"
    },

    child: {
      en: "Dose depends on body weight",
      bn: "ডোজ শরীরের ওজন অনুযায়ী নির্ধারিত হয়"
    },

    maxDaily: {
      en: "2400mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২৪০০ মিগ্রা"
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
    "ibuprofen",
    "nsaid",
    "pain killer",
    "arthritis medicine",
    "toothache medicine",
    "anti inflammatory medicine",
    "ব্যথার ওষুধ",
    "আর্থ্রাইটিসের ওষুধ",
    "দাঁতের ব্যথার ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "orange",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Brufen",
    "Advil",
    "Ibugesic",
    "Combiflam",
    "Flexon",
    "Ibuclin",
    "Ibuflam",
    "Ibucare",
    "Ibupain",
    "Ibumax"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "pain relief",
      "fever reduction",
      "anti inflammatory"
    ],

    bn: [
      "ব্যথা উপশম",
      "জ্বর কমানো",
      "প্রদাহ কমানো"
    ]
  },

  emergencyUse: false
},

  // ================= DICLOFENAC =================
{
  id: "diclofenac",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Diclofenac",
      bn: "ডাইক্লোফেনাক"
    },

    generic: {
      en: "Diclofenac Sodium",
      bn: "ডাইক্লোফেনাক সোডিয়াম"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "pain killer",
      "anti inflammatory"
    ],

    bn: [
      "ব্যথানাশক",
      "প্রদাহ কমানোর ওষুধ"
    ]
  },

  class: {
    en: "NSAID",
    bn: "নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
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
      "injection",
      "gel",
      "suppository"
    ],

    bn: [
      "ট্যাবলেট",
      "ক্যাপসুল",
      "ইনজেকশন",
      "জেল",
      "সাপোজিটরি"
    ]
  },

  strengths: [
    "25mg",
    "50mg",
    "75mg",
    "100mg SR"
  ],

  composition: [
    {
      ingredient: {
        en: "Diclofenac Sodium",
        bn: "ডাইক্লোফেনাক সোডিয়াম"
      },

      strength: "50mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 6,
    safetyLevel: 5,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      arthritis: 10,
      joint_pain: 10,
      inflammation: 10,
      back_pain: 9,
      muscle_pain: 9,
      swelling: 8,
      toothache: 8,
      sports_injury: 8
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 4,
    kidney: 4,
    liver: 2,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause stomach bleeding, kidney injury and severe gastric problems",
        bn: "পেটে রক্তক্ষরণ, কিডনির ক্ষতি ও তীব্র গ্যাস্ট্রিক সমস্যা হতে পারে"
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
    "diclofenac",
    "pain",
    "inflammation",
    "swelling",
    "arthritis",
    "joint pain",
    "muscle pain",
    "back pain"
  ],

  symptoms: {
    en: [
      "pain",
      "swelling",
      "joint pain",
      "muscle pain",
      "back pain",
      "stiffness"
    ],

    bn: [
      "ব্যথা",
      "ফোলা",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "জড়তা"
    ]
  },

  diseases: {
    en: [
      "arthritis",
      "osteoarthritis",
      "rheumatoid arthritis",
      "joint pain",
      "muscle pain",
      "back pain",
      "toothache",
      "sports injury"
    ],

    bn: [
      "আর্থ্রাইটিস",
      "অস্টিওআর্থ্রাইটিস",
      "রিউমাটয়েড আর্থ্রাইটিস",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "দাঁতের ব্যথা",
      "খেলার আঘাত"
    ]
  },

  bestFor: {
    en: [
      "arthritis pain",
      "joint inflammation",
      "muscle pain",
      "back pain",
      "severe inflammatory pain"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা",
      "জয়েন্টের প্রদাহ",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "তীব্র প্রদাহজনিত ব্যথা"
    ]
  },

  // ================= AVOID =================
  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "heart disease",
      "NSAID allergy",
      "late pregnancy"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "হৃদরোগ",
      "NSAID অ্যালার্জি",
      "গর্ভাবস্থার শেষ সময়"
    ]
  },

  contraindications: {
    en: [
      "active peptic ulcer",
      "severe kidney disease",
      "NSAID hypersensitivity",
      "severe heart failure"
    ],

    bn: [
      "সক্রিয় পেপটিক আলসার",
      "গুরুতর কিডনি রোগ",
      "NSAID অতিসংবেদনশীলতা",
      "গুরুতর হার্ট ফেইলিউর"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea",
        "stomach discomfort"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব",
        "পেটে অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "kidney injury",
        "fluid retention",
        "stomach bleeding"
      ],

      bn: [
        "পেটের আলসার",
        "কিডনির ক্ষতি",
        "শরীরে পানি জমা",
        "পেটে রক্তক্ষরণ"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks COX enzymes and reduces prostaglandin production to relieve pain and inflammation",

    bn:
      "COX enzyme ব্লক করে prostaglandin কমিয়ে ব্যথা ও প্রদাহ কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "50mg two or three times daily",
      bn: "প্রতিদিন ২-৩ বার ৫০ মিগ্রা"
    },

    child: {
      en: "Use only if prescribed",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "150mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১৫০ মিগ্রা"
    }
  },

  onset: {
    en: "20-40 minutes",
    bn: "২০-৪০ মিনিট"
  },

  duration: {
    en: "6-8 hours",
    bn: "৬-৮ ঘণ্টা"
  },

  // ================= SEARCH =================
  searchableText: [
    "diclofenac",
    "diclofenac sodium",
    "nsaid",
    "pain killer",
    "arthritis medicine",
    "joint pain medicine",
    "back pain medicine",
    "anti inflammatory medicine",
    "ব্যথার ওষুধ",
    "আর্থ্রাইটিসের ওষুধ",
    "কোমরের ব্যথার ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "red",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Voveran",
    "Voltaren",
    "Cataflam",
    "Olfen",
    "Diclo",
    "Dicloran",
    "Diclofen",
    "Diclofast",
    "Diclopain",
    "Diclomax"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "pain relief",
      "anti inflammatory",
      "joint pain relief"
    ],

    bn: [
      "ব্যথা উপশম",
      "প্রদাহ কমানো",
      "জয়েন্ট ব্যথা উপশম"
    ]
  },

  emergencyUse: false
},

{
  id: "naproxen",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Naproxen",
      bn: "নাপ্রোক্সেন"
    },

    generic: {
      en: "Naproxen",
      bn: "নাপ্রোক্সেন"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "pain killer",
      "anti inflammatory"
    ],

    bn: [
      "ব্যথানাশক",
      "প্রদাহ কমানোর ওষুধ"
    ]
  },

  class: {
    en: "NSAID",
    bn: "নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
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
    "250mg",
    "375mg",
    "500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Naproxen",
        bn: "নাপ্রোক্সেন"
      },

      strength: "500mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 5,
    safetyLevel: 6,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      arthritis: 10,
      gout: 10,
      inflammation: 9,
      joint_pain: 9,
      muscle_pain: 8,
      back_pain: 8,
      swelling: 8,
      toothache: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 3,
    kidney: 3,
    liver: 1,

    overdose: {
      level: {
        en: "moderate",
        bn: "মাঝারি"
      },

      effect: {
        en: "May cause stomach bleeding and kidney problems",
        bn: "পেটে রক্তক্ষরণ ও কিডনির সমস্যা হতে পারে"
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
    "naproxen",
    "pain",
    "inflammation",
    "swelling",
    "arthritis",
    "joint pain",
    "muscle pain",
    "back pain"
  ],

  symptoms: {
    en: [
      "pain",
      "swelling",
      "joint pain",
      "muscle pain",
      "back pain",
      "stiffness"
    ],

    bn: [
      "ব্যথা",
      "ফোলা",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "জড়তা"
    ]
  },

  diseases: {
    en: [
      "arthritis",
      "osteoarthritis",
      "rheumatoid arthritis",
      "joint pain",
      "muscle pain",
      "back pain",
      "toothache",
      "gout"
    ],

    bn: [
      "আর্থ্রাইটিস",
      "অস্টিওআর্থ্রাইটিস",
      "রিউমাটয়েড আর্থ্রাইটিস",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "দাঁতের ব্যথা",
      "গাউট"
    ]
  },

  bestFor: {
    en: [
      "arthritis pain",
      "joint inflammation",
      "muscle pain",
      "back pain",
      "gout pain"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা",
      "জয়েন্টের প্রদাহ",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা",
      "গাউটের ব্যথা"
    ]
  },

  // ================= AVOID =================
  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "NSAID allergy",
      "late pregnancy"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "NSAID অ্যালার্জি",
      "গর্ভাবস্থার শেষ সময়"
    ]
  },

  contraindications: {
    en: [
      "active peptic ulcer",
      "severe kidney disease",
      "NSAID hypersensitivity"
    ],

    bn: [
      "সক্রিয় পেপটিক আলসার",
      "গুরুতর কিডনি রোগ",
      "NSAID অতিসংবেদনশীলতা"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea",
        "stomach discomfort"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব",
        "পেটে অস্বস্তি"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "kidney injury",
        "stomach bleeding"
      ],

      bn: [
        "পেটের আলসার",
        "কিডনির ক্ষতি",
        "পেটে রক্তক্ষরণ"
      ]
    }
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Blocks COX enzymes and reduces prostaglandin production to relieve pain and inflammation",

    bn:
      "COX enzyme ব্লক করে prostaglandin কমিয়ে ব্যথা ও প্রদাহ কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "250mg - 500mg twice daily",
      bn: "প্রতিদিন ২ বার ২৫০-৫০০ মিগ্রা"
    },

    child: {
      en: "Use only if prescribed",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "1000mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১০০০ মিগ্রা"
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
    "naproxen",
    "nsaid",
    "pain killer",
    "arthritis medicine",
    "joint pain medicine",
    "gout medicine",
    "anti inflammatory medicine",
    "ব্যথার ওষুধ",
    "আর্থ্রাইটিসের ওষুধ",
    "গাউটের ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "orange",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Naprosyn",
    "Aleve",
    "Napra",
    "Napron",
    "Naprozen",
    "Naprox",
    "Naprelan",
    "Naproflex",
    "Naprofast",
    "Naprokind"
  ],

  // ================= USAGE =================
  usageType: {
    en: [
      "pain relief",
      "anti inflammatory",
      "gout pain relief"
    ],

    bn: [
      "ব্যথা উপশম",
      "প্রদাহ কমানো",
      "গাউটের ব্যথা উপশম"
    ]
  },

  emergencyUse: false
},

// ================= ACECLOFENAC =================
{
  id: "aceclofenac",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Aceclofenac",
      bn: "এসিক্লোফেনাক"
    },

    generic: {
      en: "Aceclofenac",
      bn: "এসিক্লোফেনাক"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "pain killer",
      "anti inflammatory"
    ],

    bn: [
      "ব্যথানাশক",
      "প্রদাহ কমানোর ওষুধ"
    ]
  },

  class: {
    en: "NSAID",
    bn: "নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "100mg",
    "200mg SR"
  ],

  composition: [
    {
      ingredient: {
        en: "Aceclofenac",
        bn: "এসিক্লোফেনাক"
      },

      strength: "100mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  ai: {
    powerLevel: 5,
    safetyLevel: 6,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      arthritis: 10,
      joint_pain: 9,
      inflammation: 9,
      muscle_pain: 8,
      back_pain: 8,
      sports_injury: 7
    }
  },

  risks: {
    gastric: 3,
    kidney: 3,
    liver: 2
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "aceclofenac",
    "pain",
    "arthritis",
    "joint pain",
    "inflammation"
  ],

  symptoms: {
    en: [
      "pain",
      "swelling",
      "joint pain",
      "muscle pain",
      "back pain"
    ],

    bn: [
      "ব্যথা",
      "ফোলা",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা",
      "কোমরের ব্যথা"
    ]
  },

  diseases: {
    en: [
      "arthritis",
      "osteoarthritis",
      "rheumatoid arthritis",
      "joint pain",
      "back pain",
      "sports injury"
    ],

    bn: [
      "আর্থ্রাইটিস",
      "অস্টিওআর্থ্রাইটিস",
      "রিউমাটয়েড আর্থ্রাইটিস",
      "জয়েন্ট ব্যথা",
      "কোমরের ব্যথা",
      "খেলার আঘাত"
    ]
  },

  bestFor: {
    en: [
      "arthritis pain",
      "joint inflammation",
      "muscle pain",
      "moderate inflammatory pain"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা",
      "জয়েন্টের প্রদাহ",
      "মাংসপেশির ব্যথা",
      "মাঝারি প্রদাহজনিত ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "NSAID allergy",
      "severe liver disease"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "NSAID অ্যালার্জি",
      "গুরুতর লিভার রোগ"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea",
        "abdominal pain"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব",
        "পেট ব্যথা"
      ]
    },

    serious: {
      en: [
        "kidney injury",
        "stomach ulcer"
      ],

      bn: [
        "কিডনির ক্ষতি",
        "পেটের আলসার"
      ]
    }
  },

  mechanism: {
    en:
      "Blocks COX enzymes and reduces prostaglandin production to relieve pain and inflammation",

    bn:
      "COX enzyme ব্লক করে prostaglandin কমিয়ে ব্যথা ও প্রদাহ কমায়"
  },

  dosing: {
    adult: {
      en: "100mg twice daily",
      bn: "প্রতিদিন ২ বার ১০০ মিগ্রা"
    },

    maxDaily: {
      en: "200mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২০০ মিগ্রা"
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

  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "orange",

    commonUse: true
  },

  brands: [
    "Zerodol",
    "Hifenac",
    "Aceclo",
    "Movon",
    "Acefenac",
    "Aceflex",
    "Acedol",
    "Acekind"
  ],

  emergencyUse: false
},

// ================= MEFENAMIC ACID =================
{
  id: "mefenamic_acid",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Mefenamic Acid",
      bn: "মেফেনামিক অ্যাসিড"
    },

    generic: {
      en: "Mefenamic Acid",
      bn: "মেফেনামিক অ্যাসিড"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "pain killer",
      "anti inflammatory"
    ],

    bn: [
      "ব্যথানাশক",
      "প্রদাহ কমানোর ওষুধ"
    ]
  },

  class: {
    en: "NSAID",
    bn: "নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "250mg",
    "500mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Mefenamic Acid",
        bn: "মেফেনামিক অ্যাসিড"
      },

      strength: "500mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  ai: {
    powerLevel: 4,
    safetyLevel: 6,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      period_pain: 10,
      menstrual_cramp: 10,
      abdominal_pain: 8,
      toothache: 7,
      muscle_pain: 7
    }
  },

  risks: {
    gastric: 3,
    kidney: 3,
    liver: 1
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "mefenamic acid",
    "period pain",
    "menstrual pain",
    "cramp",
    "abdominal pain"
  ],

  symptoms: {
    en: [
      "pain",
      "abdominal pain",
      "cramp",
      "pelvic pain"
    ],

    bn: [
      "ব্যথা",
      "পেট ব্যথা",
      "খিঁচুনি ধরনের ব্যথা",
      "তলপেট ব্যথা"
    ]
  },

  diseases: {
    en: [
      "period pain",
      "menstrual cramp",
      "abdominal pain",
      "dysmenorrhea"
    ],

    bn: [
      "মাসিকের ব্যথা",
      "মাসিকের খিঁচুনি",
      "পেট ব্যথা",
      "ডিসমেনোরিয়া"
    ]
  },

  bestFor: {
    en: [
      "period pain",
      "menstrual cramps",
      "abdominal pain"
    ],

    bn: [
      "মাসিকের ব্যথা",
      "মাসিকের খিঁচুনি",
      "পেট ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "NSAID allergy",
      "late pregnancy"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "NSAID অ্যালার্জি",
      "গর্ভাবস্থার শেষ সময়"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea",
        "diarrhea"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব",
        "ডায়রিয়া"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "kidney injury"
      ],

      bn: [
        "পেটের আলসার",
        "কিডনির ক্ষতি"
      ]
    }
  },

  mechanism: {
    en:
      "Blocks COX enzymes and reduces prostaglandin production to relieve pain and inflammation",

    bn:
      "COX enzyme ব্লক করে prostaglandin কমিয়ে ব্যথা ও প্রদাহ কমায়"
  },

  dosing: {
    adult: {
      en: "250mg - 500mg three times daily",
      bn: "প্রতিদিন ৩ বার ২৫০-৫০০ মিগ্রা"
    },

    maxDaily: {
      en: "1500mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১৫০০ মিগ্রা"
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

  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "pink",

    commonUse: true
  },

  brands: [
    "Meftal",
    "Ponstan",
    "Meftal Forte",
    "Mefkind",
    "Mefenac",
    "Mefgesic",
    "Mefdol",
    "Mefsafe"
  ],

  emergencyUse: false
},

{
  id: "aspirin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Aspirin",
      bn: "অ্যাসপিরিন"
    },

    generic: {
      en: "Acetylsalicylic Acid",
      bn: "অ্যাসিটাইলস্যালিসাইলিক অ্যাসিড"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "pain killer",
      "antiplatelet",
      "fever reducer"
    ],

    bn: [
      "ব্যথানাশক",
      "রক্ত পাতলা করার ওষুধ",
      "জ্বর কমানোর ওষুধ"
    ]
  },

  class: {
    en: "NSAID + Antiplatelet",
    bn: "এনএসএআইডি ও রক্ত পাতলা করার ওষুধ"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "75mg",
    "81mg",
    "150mg",
    "300mg",
    "325mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Aspirin",
        bn: "অ্যাসপিরিন"
      },

      strength: "75mg"
    }
  ],

  otc: true,
  rx: false,

  antibiotic: false,

  // ================= AI =================
  ai: {
    powerLevel: 4,
    safetyLevel: 5,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      heart_protection: 10,
      stroke_prevention: 10,
      blood_thinner: 10,
      fever: 6,
      headache: 6,
      arthritis: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 4,
    kidney: 2,
    liver: 1,

    overdose: {
      level: {
        en: "high",
        bn: "উচ্চ"
      },

      effect: {
        en: "May cause bleeding and aspirin toxicity",
        bn: "রক্তক্ষরণ ও অ্যাসপিরিন বিষক্রিয়া হতে পারে"
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
    "aspirin",
    "blood thinner",
    "heart medicine",
    "stroke prevention",
    "pain",
    "fever"
  ],

  symptoms: {
    en: [
      "pain",
      "fever",
      "headache",
      "chest discomfort"
    ],

    bn: [
      "ব্যথা",
      "জ্বর",
      "মাথাব্যথা",
      "বুকের অস্বস্তি"
    ]
  },

  diseases: {
    en: [
      "heart protection",
      "heart attack prevention",
      "stroke prevention",
      "angina",
      "arthritis"
    ],

    bn: [
      "হৃদরোগ সুরক্ষা",
      "হার্ট অ্যাটাক প্রতিরোধ",
      "স্ট্রোক প্রতিরোধ",
      "এনজাইনা",
      "আর্থ্রাইটিস"
    ]
  },

  bestFor: {
    en: [
      "heart protection",
      "blood thinning",
      "stroke prevention",
      "mild pain"
    ],

    bn: [
      "হৃদরোগ সুরক্ষা",
      "রক্ত পাতলা করা",
      "স্ট্রোক প্রতিরোধ",
      "হালকা ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "peptic ulcer",
      "bleeding disorder",
      "NSAID allergy",
      "children with viral fever",
      "late pregnancy"
    ],

    bn: [
      "পেপটিক আলসার",
      "রক্তক্ষরণ রোগ",
      "NSAID অ্যালার্জি",
      "ভাইরাল জ্বরে আক্রান্ত শিশু",
      "গর্ভাবস্থার শেষ সময়"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea",
        "bleeding tendency"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব",
        "রক্তক্ষরণের প্রবণতা"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "major bleeding",
        "aspirin toxicity"
      ],

      bn: [
        "পেটের আলসার",
        "মারাত্মক রক্তক্ষরণ",
        "অ্যাসপিরিন বিষক্রিয়া"
      ]
    }
  },

  mechanism: {
    en:
      "Irreversibly blocks COX enzymes and reduces platelet aggregation while relieving pain and fever",

    bn:
      "COX enzyme স্থায়ীভাবে ব্লক করে platelet জমাট কমায় এবং ব্যথা ও জ্বর কমায়"
  },

  dosing: {
    adult: {
      en: "75mg - 325mg daily depending on indication",
      bn: "প্রয়োজন অনুযায়ী প্রতিদিন ৭৫-৩২৫ মিগ্রা"
    },

    child: {
      en: "Avoid unless prescribed",
      bn: "শুধুমাত্র ডাক্তারের পরামর্শে"
    },

    maxDaily: {
      en: "4000mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০০০ মিগ্রা"
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
    "aspirin",
    "acetylsalicylic acid",
    "blood thinner",
    "heart medicine",
    "stroke prevention medicine",
    "pain killer",
    "রক্ত পাতলা করার ওষুধ",
    "হার্টের ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "red",

    commonUse: true
  },

  brands: [
    "Disprin",
    "Ecosprin",
    "Aspilet",
    "Aspisol",
    "Aspicard",
    "Bayer Aspirin",
    "Lowprin",
    "Cardiprin"
  ],

  usageType: {
    en: [
      "heart protection",
      "blood thinning",
      "pain relief"
    ],

    bn: [
      "হৃদরোগ সুরক্ষা",
      "রক্ত পাতলা করা",
      "ব্যথা উপশম"
    ]
  },

  emergencyUse: false
},

// ================= KETOROLAC =================
{
  id: "ketorolac",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Ketorolac",
      bn: "কেটোরোলাক"
    },

    generic: {
      en: "Ketorolac Tromethamine",
      bn: "কেটোরোলাক ট্রোমেথামিন"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "strong pain killer",
      "acute pain management"
    ],

    bn: [
      "শক্তিশালী ব্যথানাশক",
      "তীব্র ব্যথা নিয়ন্ত্রণ"
    ]
  },

  class: {
    en: "Strong NSAID Analgesic",
    bn: "শক্তিশালী NSAID ব্যথানাশক"
  },

  category: {
    en: "injection",
    bn: "ইনজেকশন"
  },

  route: {
    en: "IV/IM",
    bn: "শিরা/মাংসপেশিতে"
  },

  strengths: [
    "10mg",
    "30mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Ketorolac",
        bn: "কেটোরোলাক"
      },

      strength: "30mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  ai: {
    powerLevel: 8,
    safetyLevel: 3,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      severe_pain: 10,
      kidney_stone_pain: 10,
      post_operative_pain: 10,
      trauma_pain: 9
    }
  },

  risks: {
    gastric: 5,
    kidney: 5,
    liver: 2
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "ketorolac",
    "strong pain killer",
    "severe pain",
    "renal colic",
    "post operative pain"
  ],

  symptoms: {
    en: [
      "severe pain",
      "acute pain",
      "colicky pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "হঠাৎ তীব্র ব্যথা",
      "খিঁচুনি ধরনের ব্যথা"
    ]
  },

  diseases: {
    en: [
      "kidney stone pain",
      "renal colic",
      "post operative pain",
      "trauma pain"
    ],

    bn: [
      "কিডনি পাথরের ব্যথা",
      "রেনাল কোলিক",
      "অপারেশনের পর ব্যথা",
      "আঘাতজনিত ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "acute severe pain",
      "kidney stone pain",
      "short term pain management"
    ],

    bn: [
      "তীব্র হঠাৎ ব্যথা",
      "কিডনি পাথরের ব্যথা",
      "স্বল্পমেয়াদি ব্যথা নিয়ন্ত্রণ"
    ]
  },

  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "bleeding disorder",
      "NSAID allergy",
      "long term use"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "রক্তক্ষরণ রোগ",
      "NSAID অ্যালার্জি",
      "দীর্ঘদিন ব্যবহার"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "nausea",
        "dizziness"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "বমি ভাব",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "renal toxicity",
        "bleeding risk"
      ],

      bn: [
        "পেটের আলসার",
        "কিডনির ক্ষতি",
        "রক্তক্ষরণের ঝুঁকি"
      ]
    }
  },

  mechanism: {
    en:
      "Strong COX inhibition reduces prostaglandin synthesis and relieves severe pain",

    bn:
      "শক্তভাবে COX ব্লক করে prostaglandin কমিয়ে তীব্র ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "10mg - 30mg every 6 hours",
      bn: "প্রতি ৬ ঘণ্টা পর ১০-৩০ মিগ্রা"
    },

    maxDaily: {
      en: "120mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১২০ মিগ্রা"
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

  searchableText: [
    "ketorolac",
    "toradol",
    "strong pain killer",
    "kidney stone pain medicine",
    "renal colic medicine",
    "তীব্র ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "High gastric risk",
      bn: "গ্যাস্ট্রিক ঝুঁকি বেশি"
    },

    colorHint: "darkred",

    commonUse: false
  },

  brands: [
    "Toradol",
    "Ketorol",
    "Ketorac",
    "Ketoflam",
    "Ketogesic",
    "Ketopain"
  ],

  usageType: {
    en: [
      "acute pain management",
      "post operative pain relief"
    ],

    bn: [
      "তীব্র ব্যথা নিয়ন্ত্রণ",
      "অপারেশনের পর ব্যথা উপশম"
    ]
  },

  emergencyUse: true
},

// ================= CELECOXIB =================
{
  id: "celecoxib",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Celecoxib",
      bn: "সেলেকক্সিব"
    },

    generic: {
      en: "Celecoxib",
      bn: "সেলেকক্সিব"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "cox2 inhibitor",
    bn: "COX-2 ইনহিবিটর"
  },

  therapeuticCategory: {
    en: [
      "anti inflammatory",
      "arthritis medicine"
    ],

    bn: [
      "প্রদাহ কমানোর ওষুধ",
      "আর্থ্রাইটিসের ওষুধ"
    ]
  },

  class: {
    en: "COX-2 Selective NSAID",
    bn: "COX-2 সিলেক্টিভ NSAID"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "100mg",
    "200mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Celecoxib",
        bn: "সেলেকক্সিব"
      },

      strength: "200mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  ai: {
    powerLevel: 6,
    safetyLevel: 6,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      arthritis: 10,
      inflammation: 9,
      joint_pain: 9,
      ankylosing_spondylitis: 8
    }
  },

  risks: {
    gastric: 1,
    kidney: 3,
    liver: 1
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "celecoxib",
    "cox2 inhibitor",
    "arthritis",
    "joint pain",
    "inflammation"
  ],

  symptoms: {
    en: [
      "joint pain",
      "swelling",
      "stiffness",
      "pain"
    ],

    bn: [
      "জয়েন্ট ব্যথা",
      "ফোলা",
      "জড়তা",
      "ব্যথা"
    ]
  },

  diseases: {
    en: [
      "arthritis",
      "osteoarthritis",
      "rheumatoid arthritis",
      "joint pain",
      "ankylosing spondylitis"
    ],

    bn: [
      "আর্থ্রাইটিস",
      "অস্টিওআর্থ্রাইটিস",
      "রিউমাটয়েড আর্থ্রাইটিস",
      "জয়েন্ট ব্যথা",
      "অ্যাঙ্কাইলোজিং স্পন্ডাইলাইটিস"
    ]
  },

  bestFor: {
    en: [
      "arthritis pain",
      "chronic inflammatory pain",
      "lower gastric irritation"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা",
      "দীর্ঘমেয়াদি প্রদাহজনিত ব্যথা",
      "কম গ্যাস্ট্রিক ঝুঁকি"
    ]
  },

  avoidIn: {
    en: [
      "heart disease",
      "stroke history",
      "sulfa allergy",
      "severe kidney disease"
    ],

    bn: [
      "হৃদরোগ",
      "স্ট্রোকের ইতিহাস",
      "সালফা অ্যালার্জি",
      "গুরুতর কিডনি রোগ"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "headache",
        "nausea",
        "edema"
      ],

      bn: [
        "মাথাব্যথা",
        "বমি ভাব",
        "শরীরে পানি জমা"
      ]
    },

    serious: {
      en: [
        "cardiovascular risk",
        "kidney injury"
      ],

      bn: [
        "হৃদরোগের ঝুঁকি",
        "কিডনির ক্ষতি"
      ]
    }
  },

  mechanism: {
    en:
      "Selectively blocks COX-2 enzymes to reduce pain and inflammation with less gastric irritation",

    bn:
      "COX-2 enzyme selectively ব্লক করে কম গ্যাস্ট্রিক ঝুঁকিতে ব্যথা ও প্রদাহ কমায়"
  },

  dosing: {
    adult: {
      en: "100mg - 200mg once or twice daily",
      bn: "প্রতিদিন ১-২ বার ১০০-২০০ মিগ্রা"
    },

    maxDaily: {
      en: "400mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০০ মিগ্রা"
    }
  },

  onset: {
    en: "1 hour",
    bn: "১ ঘণ্টা"
  },

  duration: {
    en: "12-24 hours",
    bn: "১২-২৪ ঘণ্টা"
  },

  searchableText: [
    "celecoxib",
    "celebrex",
    "cox2 inhibitor",
    "arthritis medicine",
    "joint pain medicine",
    "কম গ্যাস্ট্রিকের ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Less gastric irritation",
      bn: "গ্যাস্ট্রিক ঝুঁকি কম"
    },

    colorHint: "blue",

    commonUse: true
  },

  brands: [
    "Celebrex",
    "Celecox",
    "Cobix",
    "Celeheal",
    "Celecare",
    "Celex"
  ],

  usageType: {
    en: [
      "arthritis management",
      "anti inflammatory therapy"
    ],

    bn: [
      "আর্থ্রাইটিস নিয়ন্ত্রণ",
      "প্রদাহ কমানোর চিকিৎসা"
    ]
  },

  emergencyUse: false
},





// ================= GABAPENTIN =================
{
  id: "gabapentin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Gabapentin",
      bn: "গ্যাবাপেন্টিন"
    },

    generic: {
      en: "Gabapentin",
      bn: "গ্যাবাপেন্টিন"
    }
  },

  group: {
    en: "neuropathic pain",
    bn: "নার্ভের ব্যথা"
  },

  subgroup: {
    en: "gabapentinoid",
    bn: "গ্যাবাপেন্টিনয়েড"
  },

  therapeuticCategory: {
    en: [
      "neuropathic pain medicine",
      "adjuvant analgesic"
    ],

    bn: [
      "নার্ভের ব্যথার ওষুধ",
      "সহায়ক ব্যথানাশক"
    ]
  },

  class: {
    en: "Adjuvant Analgesic",
    bn: "সহায়ক ব্যথার ওষুধ"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "100mg",
    "300mg",
    "400mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Gabapentin",
        bn: "গ্যাবাপেন্টিন"
      },

      strength: "300mg"
    }
  ],

  otc: false,
  rx: true,

  antibiotic: false,

  ai: {
    powerLevel: 5,
    safetyLevel: 6,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      neuropathic_pain: 10,
      diabetic_neuropathy: 10,
      burning_pain: 9,
      fibromyalgia: 8
    }
  },

  risks: {
    gastric: 0,
    kidney: 3,
    liver: 1,
    addiction: 2
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "gabapentin",
    "nerve pain",
    "neuropathy",
    "burning pain",
    "gabapentinoid"
  ],

  symptoms: {
    en: [
      "burning pain",
      "tingling",
      "electric shock pain",
      "numbness"
    ],

    bn: [
      "জ্বালাপোড়া ব্যথা",
      "ঝিনঝিন অনুভূতি",
      "বিদ্যুৎ শকের মতো ব্যথা",
      "অবশ ভাব"
    ]
  },

  diseases: {
    en: [
      "diabetic neuropathy",
      "postherpetic neuralgia",
      "fibromyalgia",
      "chronic nerve pain"
    ],

    bn: [
      "ডায়াবেটিক নিউরোপ্যাথি",
      "হারপিসের পর ব্যথা",
      "ফাইব্রোমায়ালজিয়া",
      "দীর্ঘমেয়াদি নার্ভের ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "neuropathic pain",
      "burning nerve pain",
      "diabetic neuropathy"
    ],

    bn: [
      "নার্ভের ব্যথা",
      "জ্বালাপোড়া ধরনের ব্যথা",
      "ডায়াবেটিক নিউরোপ্যাথি"
    ]
  },

  avoidIn: {
    en: [
      "severe kidney disease without dose adjustment",
      "gabapentin allergy"
    ],

    bn: [
      "ডোজ সমন্বয় ছাড়া গুরুতর কিডনি রোগ",
      "গ্যাবাপেন্টিন অ্যালার্জি"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dizziness",
        "fatigue",
        "weight gain"
      ],

      bn: [
        "ঘুম ভাব",
        "মাথা ঘোরা",
        "দুর্বল লাগা",
        "ওজন বৃদ্ধি"
      ]
    },

    serious: {
      en: [
        "severe sedation",
        "swelling",
        "mood changes"
      ],

      bn: [
        "অতিরিক্ত ঘুম ভাব",
        "ফোলা",
        "মনের পরিবর্তন"
      ]
    }
  },

  mechanism: {
    en:
      "Modulates calcium channels in nerves and reduces abnormal nerve signal transmission",

    bn:
      "নার্ভের calcium channel এ কাজ করে অস্বাভাবিক ব্যথার সংকেত কমায়"
  },

  dosing: {
    adult: {
      en: "300mg - 900mg divided doses daily",
      bn: "প্রতিদিন ভাগ করে ৩০০-৯০০ মিগ্রা"
    },

    maxDaily: {
      en: "3600mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৩৬০০ মিগ্রা"
    }
  },

  onset: {
    en: "Few days",
    bn: "কয়েক দিন"
  },

  duration: {
    en: "8-12 hours",
    bn: "৮-১২ ঘণ্টা"
  },

  searchableText: [
    "gabapentin",
    "gabapentinoid",
    "nerve pain medicine",
    "neuropathy medicine",
    "burning pain medicine",
    "নার্ভের ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "purple",

    commonUse: true
  },

  brands: [
    "Neurontin",
    "Gabapin",
    "Gabator",
    "Gabaneuron",
    "Gabafix",
    "Gabastar"
  ],

  usageType: {
    en: [
      "neuropathic pain relief",
      "nerve pain management"
    ],

    bn: [
      "নার্ভের ব্যথা উপশম",
      "নার্ভের ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},
{
  id: "fenoprofen",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Fenoprofen",
      bn: "ফেনোপ্রোফেন"
    },

    generic: {
      en: "Fenoprofen Calcium",
      bn: "ফেনোপ্রোফেন ক্যালসিয়াম"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "nsaid",
    bn: "এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "anti inflammatory",
      "pain relief"
    ],

    bn: [
      "প্রদাহ কমানোর ওষুধ",
      "ব্যথা উপশম"
    ]
  },

  class: {
    en: "NSAID",
    bn: "নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "200mg",
    "400mg",
    "600mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Fenoprofen",
        bn: "ফেনোপ্রোফেন"
      },

      strength: "200mg"
    }
  ],

  otc: false,
  rx: true,

  ai: {
    powerLevel: 5,
    safetyLevel: 5,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      arthritis: 9,
      joint_pain: 8,
      muscle_pain: 8,
      inflammatory_pain: 8
    }
  },

  risks: {
    gastric: 3,
    kidney: 3,
    liver: 1,
    addiction: 0
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "fenoprofen",
    "arthritis",
    "joint pain",
    "muscle pain",
    "inflammation"
  ],

  symptoms: {
    en: [
      "pain",
      "swelling",
      "joint pain",
      "muscle pain"
    ],

    bn: [
      "ব্যথা",
      "ফোলা",
      "জয়েন্ট ব্যথা",
      "মাংসপেশির ব্যথা"
    ]
  },

  diseases: {
    en: [
      "arthritis",
      "osteoarthritis",
      "rheumatoid arthritis",
      "back pain"
    ],

    bn: [
      "আর্থ্রাইটিস",
      "অস্টিওআর্থ্রাইটিস",
      "রিউমাটয়েড আর্থ্রাইটিস",
      "কোমরের ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "arthritis pain",
      "joint inflammation",
      "moderate inflammatory pain"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা",
      "জয়েন্টের প্রদাহ",
      "মাঝারি প্রদাহজনিত ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "NSAID allergy",
      "late pregnancy"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "NSAID অ্যালার্জি",
      "গর্ভাবস্থার শেষ সময়"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "gastric irritation",
        "acidity",
        "nausea",
        "dizziness"
      ],

      bn: [
        "গ্যাস্ট্রিক জ্বালা",
        "অ্যাসিডিটি",
        "বমি ভাব",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "kidney injury"
      ],

      bn: [
        "পেটের আলসার",
        "কিডনির ক্ষতি"
      ]
    }
  },

  mechanism: {
    en:
      "Blocks COX enzymes and reduces prostaglandin synthesis to relieve pain and inflammation",

    bn:
      "COX enzyme ব্লক করে prostaglandin কমিয়ে ব্যথা ও প্রদাহ কমায়"
  },

  dosing: {
    adult: {
      en: "200mg - 600mg three or four times daily",
      bn: "দিনে ৩-৪ বার ২০০-৬০০ মিগ্রা"
    },

    maxDaily: {
      en: "3200mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৩২০০ মিগ্রা"
    }
  },

  searchableText: [
    "fenoprofen",
    "nalfon",
    "arthritis medicine",
    "joint pain medicine",
    "anti inflammatory medicine",
    "ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "May cause acidity",
      bn: "অ্যাসিডিটি হতে পারে"
    },

    colorHint: "orange",

    commonUse: false
  },

  brands: [
    "Nalfon",
    "Fenopain",
    "Fenocare",
    "Fenofast",
    "Fenokind"
  ],

  usageType: {
    en: [
      "pain relief",
      "anti inflammatory treatment"
    ],

    bn: [
      "ব্যথা উপশম",
      "প্রদাহ কমানো"
    ]
  },

  emergencyUse: false
},

// ================= INDOMETHACIN =================
{
  id: "indomethacin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Indomethacin",
      bn: "ইন্ডোমেথাসিন"
    },

    generic: {
      en: "Indomethacin",
      bn: "ইন্ডোমেথাসিন"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "strong nsaid",
    bn: "শক্তিশালী এনএসএআইডি"
  },

  therapeuticCategory: {
    en: [
      "anti inflammatory",
      "gout pain relief"
    ],

    bn: [
      "প্রদাহ কমানোর ওষুধ",
      "গাউটের ব্যথা উপশম"
    ]
  },

  class: {
    en: "Strong NSAID",
    bn: "শক্তিশালী নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "25mg",
    "50mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Indomethacin",
        bn: "ইন্ডোমেথাসিন"
      },

      strength: "25mg"
    }
  ],

  otc: false,
  rx: true,

  ai: {
    powerLevel: 7,
    safetyLevel: 4,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      acute_gout: 10,
      arthritis: 8,
      inflammatory_pain: 9
    }
  },

  risks: {
    gastric: 5,
    kidney: 4,
    liver: 2,
    addiction: 0
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "indomethacin",
    "gout",
    "arthritis",
    "joint pain",
    "strong nsaid"
  ],

  symptoms: {
    en: [
      "joint pain",
      "swelling",
      "stiffness",
      "acute gout pain"
    ],

    bn: [
      "জয়েন্ট ব্যথা",
      "ফোলা",
      "জড়তা",
      "হঠাৎ গাউটের ব্যথা"
    ]
  },

  diseases: {
    en: [
      "gout",
      "acute gout",
      "arthritis",
      "ankylosing spondylitis"
    ],

    bn: [
      "গাউট",
      "তীব্র গাউট",
      "আর্থ্রাইটিস",
      "অ্যাঙ্কাইলোজিং স্পন্ডাইলাইটিস"
    ]
  },

  bestFor: {
    en: [
      "acute gout pain",
      "arthritis flare",
      "severe inflammatory pain"
    ],

    bn: [
      "তীব্র গাউটের ব্যথা",
      "আর্থ্রাইটিসের তীব্র অবস্থা",
      "তীব্র প্রদাহজনিত ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "peptic ulcer",
      "kidney disease",
      "elderly patients",
      "NSAID allergy"
    ],

    bn: [
      "পেপটিক আলসার",
      "কিডনি রোগ",
      "বয়স্ক রোগী",
      "NSAID অ্যালার্জি"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "headache",
        "dizziness",
        "gastric irritation",
        "nausea"
      ],

      bn: [
        "মাথাব্যথা",
        "মাথা ঘোরা",
        "গ্যাস্ট্রিক জ্বালা",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "stomach ulcer",
        "kidney injury",
        "GI bleeding"
      ],

      bn: [
        "পেটের আলসার",
        "কিডনির ক্ষতি",
        "গ্যাস্ট্রিক রক্তক্ষরণ"
      ]
    }
  },

  mechanism: {
    en:
      "Strongly blocks COX enzymes and reduces prostaglandin synthesis to relieve severe inflammation and pain",

    bn:
      "শক্তভাবে COX enzyme ব্লক করে prostaglandin কমিয়ে তীব্র প্রদাহ ও ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "25mg - 50mg two or three times daily",
      bn: "দিনে ২-৩ বার ২৫-৫০ মিগ্রা"
    },

    maxDaily: {
      en: "200mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২০০ মিগ্রা"
    }
  },

  searchableText: [
    "indomethacin",
    "indocin",
    "gout medicine",
    "strong nsaid",
    "arthritis medicine",
    "গাউটের ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "High gastric irritation",
      bn: "গ্যাস্ট্রিক ঝুঁকি বেশি"
    },

    colorHint: "red",

    commonUse: false
  },

  brands: [
    "Indocin",
    "Indocap",
    "Indomet",
    "Indopain",
    "Indofast"
  ],

  usageType: {
    en: [
      "gout pain relief",
      "strong anti inflammatory treatment"
    ],

    bn: [
      "গাউটের ব্যথা উপশম",
      "শক্তিশালী প্রদাহ কমানো"
    ]
  },

  emergencyUse: false
},

// ================= VALDECOXIB =================
{
  id: "valdecoxib",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Valdecoxib",
      bn: "ভ্যালডেকক্সিব"
    },

    generic: {
      en: "Valdecoxib",
      bn: "ভ্যালডেকক্সিব"
    }
  },

  group: {
    en: "pain",
    bn: "ব্যথা"
  },

  subgroup: {
    en: "cox2 inhibitor",
    bn: "COX-2 ইনহিবিটর"
  },

  therapeuticCategory: {
    en: [
      "cox2 selective nsaid",
      "anti inflammatory"
    ],

    bn: [
      "COX-2 সিলেক্টিভ এনএসএআইডি",
      "প্রদাহ কমানোর ওষুধ"
    ]
  },

  class: {
    en: "COX-2 Inhibitor",
    bn: "COX-2 সিলেক্টিভ NSAID"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "10mg",
    "20mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Valdecoxib",
        bn: "ভ্যালডেকক্সিব"
      },

      strength: "10mg"
    }
  ],

  otc: false,
  rx: true,

  ai: {
    powerLevel: 6,
    safetyLevel: 3,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      arthritis: 9,
      inflammatory_pain: 8,
      joint_pain: 8
    }
  },

  risks: {
    gastric: 1,
    kidney: 3,
    liver: 1,
    addiction: 0
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "valdecoxib",
    "cox2 inhibitor",
    "arthritis",
    "joint pain",
    "inflammation"
  ],

  symptoms: {
    en: [
      "joint pain",
      "swelling",
      "stiffness",
      "inflammation"
    ],

    bn: [
      "জয়েন্ট ব্যথা",
      "ফোলা",
      "জড়তা",
      "প্রদাহ"
    ]
  },

  diseases: {
    en: [
      "arthritis",
      "osteoarthritis",
      "rheumatoid arthritis",
      "joint pain"
    ],

    bn: [
      "আর্থ্রাইটিস",
      "অস্টিওআর্থ্রাইটিস",
      "রিউমাটয়েড আর্থ্রাইটিস",
      "জয়েন্ট ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "arthritis pain",
      "joint inflammation",
      "patients with gastric sensitivity"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা",
      "জয়েন্টের প্রদাহ",
      "গ্যাস্ট্রিক সংবেদনশীল রোগী"
    ]
  },

  avoidIn: {
    en: [
      "heart disease",
      "stroke history",
      "sulfa allergy",
      "kidney disease"
    ],

    bn: [
      "হৃদরোগ",
      "স্ট্রোকের ইতিহাস",
      "সালফা অ্যালার্জি",
      "কিডনি রোগ"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "headache",
        "nausea",
        "edema"
      ],

      bn: [
        "মাথাব্যথা",
        "বমি ভাব",
        "শরীরে পানি জমা"
      ]
    },

    serious: {
      en: [
        "cardiovascular risk",
        "kidney injury"
      ],

      bn: [
        "হৃদরোগের ঝুঁকি",
        "কিডনির ক্ষতি"
      ]
    }
  },

  mechanism: {
    en:
      "Selectively inhibits COX-2 enzyme to reduce pain and inflammation with less gastric irritation",

    bn:
      "COX-2 enzyme selectively ব্লক করে কম গ্যাস্ট্রিক ঝুঁকিতে ব্যথা ও প্রদাহ কমায়"
  },

  dosing: {
    adult: {
      en: "10mg - 20mg once or twice daily",
      bn: "দিনে ১-২ বার ১০-২০ মিগ্রা"
    },

    maxDaily: {
      en: "40mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০ মিগ্রা"
    }
  },

  searchableText: [
    "valdecoxib",
    "bextra",
    "cox2 inhibitor",
    "arthritis medicine",
    "joint pain medicine",
    "কম গ্যাস্ট্রিকের ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Less gastric irritation",
      bn: "গ্যাস্ট্রিক ঝুঁকি কম"
    },

    colorHint: "green",

    commonUse: false
  },

  brands: [
    "Bextra",
    "Valcox",
    "Valcib",
    "Valdox",
    "Valeflam"
  ],

  usageType: {
    en: [
      "arthritis pain relief",
      "anti inflammatory treatment"
    ],

    bn: [
      "আর্থ্রাইটিসের ব্যথা উপশম",
      "প্রদাহ কমানো"
    ]
  },

  emergencyUse: false
},

{
  id: "codeine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Codeine",
      bn: "কোডিন"
    },

    generic: {
      en: "Codeine Phosphate",
      bn: "কোডিন ফসফেট"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "weak opioid",
    bn: "দুর্বল ওপিওয়েড"
  },

  therapeuticCategory: {
    en: [
      "opioid analgesic",
      "cough suppressant"
    ],

    bn: [
      "ওপিওয়েড ব্যথানাশক",
      "কাশি কমানোর ওষুধ"
    ]
  },

  class: {
    en: "Weak Opioid Analgesic",
    bn: "দুর্বল ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "15mg",
    "30mg",
    "60mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Codeine",
        bn: "কোডিন"
      },

      strength: "30mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 5,
    safetyLevel: 4,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      dry_cough: 9,
      moderate_pain: 8,
      post_operative_pain: 7
    }
  },

  risks: {
    gastric: 1,
    kidney: 2,
    liver: 2,
    addiction: 6
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "codeine",
    "opioid",
    "dry cough",
    "pain",
    "cough suppressant"
  ],

  symptoms: {
    en: [
      "moderate pain",
      "dry cough",
      "persistent cough"
    ],

    bn: [
      "মাঝারি ব্যথা",
      "শুকনো কাশি",
      "দীর্ঘস্থায়ী কাশি"
    ]
  },

  diseases: {
    en: [
      "dry cough",
      "post operative pain",
      "musculoskeletal pain"
    ],

    bn: [
      "শুকনো কাশি",
      "অপারেশনের পর ব্যথা",
      "মাংসপেশি ও হাড়ের ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "dry cough suppression",
      "moderate pain",
      "short term pain relief"
    ],

    bn: [
      "শুকনো কাশি কমানো",
      "মাঝারি ব্যথা",
      "স্বল্পমেয়াদি ব্যথা উপশম"
    ]
  },

  avoidIn: {
    en: [
      "severe respiratory disease",
      "opioid addiction",
      "alcohol intoxication",
      "severe asthma"
    ],

    bn: [
      "গুরুতর শ্বাসকষ্ট",
      "ওপিওয়েড আসক্তি",
      "অ্যালকোহল নেশা",
      "গুরুতর হাঁপানি"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "constipation",
        "nausea"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Acts on opioid receptors in the brain to reduce pain perception and suppress cough",

    bn:
      "মস্তিষ্কের opioid receptor এ কাজ করে ব্যথা ও কাশি কমায়"
  },

  dosing: {
    adult: {
      en: "15mg - 60mg every 4-6 hours",
      bn: "প্রতি ৪-৬ ঘণ্টা পর ১৫-৬০ মিগ্রা"
    },

    maxDaily: {
      en: "240mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২৪০ মিগ্রা"
    }
  },

  searchableText: [
    "codeine",
    "codeine phosphate",
    "dry cough medicine",
    "opioid pain killer",
    "কাশির ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "orange",

    commonUse: false
  },

  brands: [
    "Codistar",
    "Codipront",
    "Codepect",
    "Codex",
    "Codecare"
  ],

  usageType: {
    en: [
      "pain relief",
      "dry cough suppression"
    ],

    bn: [
      "ব্যথা উপশম",
      "শুকনো কাশি কমানো"
    ]
  },

  emergencyUse: false
},

// ================= TRAMADOL =================
{
  id: "tramadol",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Tramadol",
      bn: "ট্রামাডল"
    },

    generic: {
      en: "Tramadol Hydrochloride",
      bn: "ট্রামাডল হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "weak opioid",
    bn: "দুর্বল ওপিওয়েড"
  },

  therapeuticCategory: {
    en: [
      "opioid analgesic",
      "moderate to severe pain relief"
    ],

    bn: [
      "ওপিওয়েড ব্যথানাশক",
      "মাঝারি থেকে তীব্র ব্যথা উপশম"
    ]
  },

  class: {
    en: "Weak Opioid Analgesic",
    bn: "দুর্বল ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "50mg",
    "100mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Tramadol",
        bn: "ট্রামাডল"
      },

      strength: "50mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 7,
    safetyLevel: 4,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      severe_pain: 9,
      chronic_pain: 8,
      post_operative_pain: 8
    }
  },

  risks: {
    gastric: 1,
    kidney: 2,
    liver: 2,
    addiction: 6
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "tramadol",
    "opioid",
    "severe pain",
    "chronic pain",
    "post operative pain"
  ],

  symptoms: {
    en: [
      "moderate pain",
      "severe pain",
      "chronic pain"
    ],

    bn: [
      "মাঝারি ব্যথা",
      "তীব্র ব্যথা",
      "দীর্ঘমেয়াদি ব্যথা"
    ]
  },

  diseases: {
    en: [
      "chronic pain",
      "post operative pain",
      "neuropathic pain",
      "cancer pain"
    ],

    bn: [
      "দীর্ঘমেয়াদি ব্যথা",
      "অপারেশনের পর ব্যথা",
      "নার্ভের ব্যথা",
      "ক্যান্সারের ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "moderate to severe pain",
      "post operative pain",
      "short term severe pain"
    ],

    bn: [
      "মাঝারি থেকে তীব্র ব্যথা",
      "অপারেশনের পর ব্যথা",
      "স্বল্পমেয়াদি তীব্র ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "seizure disorder",
      "opioid addiction",
      "alcohol intoxication",
      "severe respiratory disease"
    ],

    bn: [
      "খিঁচুনি রোগ",
      "ওপিওয়েড আসক্তি",
      "অ্যালকোহল নেশা",
      "গুরুতর শ্বাসকষ্ট"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "nausea",
        "dizziness",
        "sedation",
        "constipation"
      ],

      bn: [
        "বমি ভাব",
        "মাথা ঘোরা",
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "seizure risk",
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "খিঁচুনির ঝুঁকি",
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Acts on μ-opioid receptors and inhibits serotonin/norepinephrine reuptake to reduce pain",

    bn:
      "μ-opioid receptor এ কাজ করে এবং serotonin/norepinephrine reuptake কমিয়ে ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "50mg - 100mg every 4-6 hours",
      bn: "প্রতি ৪-৬ ঘণ্টা পর ৫০-১০০ মিগ্রা"
    },

    maxDaily: {
      en: "400mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৪০০ মিগ্রা"
    }
  },

  searchableText: [
    "tramadol",
    "strong pain medicine",
    "opioid pain killer",
    "post operative pain medicine",
    "ব্যথার শক্ত ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Low gastric irritation",
      bn: "গ্যাস্ট্রিক ঝুঁকি কম"
    },

    colorHint: "red",

    commonUse: false
  },

  brands: [
    "Tramazac",
    "Ultracet",
    "Tramal",
    "Contramal",
    "Tramacet"
  ],

  usageType: {
    en: [
      "moderate pain relief",
      "severe pain relief"
    ],

    bn: [
      "মাঝারি ব্যথা উপশম",
      "তীব্র ব্যথা উপশম"
    ]
  },

  emergencyUse: false
},

// ================= HYDROCODONE =================
{
  id: "hydrocodone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Hydrocodone",
      bn: "হাইড্রোকোডোন"
    },

    generic: {
      en: "Hydrocodone",
      bn: "হাইড্রোকোডোন"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "semi synthetic opioid",
    bn: "সেমি-সিনথেটিক ওপিওয়েড"
  },

  therapeuticCategory: {
    en: [
      "opioid analgesic",
      "severe pain relief"
    ],

    bn: [
      "ওপিওয়েড ব্যথানাশক",
      "তীব্র ব্যথা উপশম"
    ]
  },

  class: {
    en: "Opioid Analgesic",
    bn: "ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "5mg",
    "7.5mg",
    "10mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Hydrocodone",
        bn: "হাইড্রোকোডোন"
      },

      strength: "5mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 8,
    safetyLevel: 3,

    severity: {
      en: "very strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      severe_pain: 10,
      injury_pain: 8,
      post_operative_pain: 9
    }
  },

  risks: {
    gastric: 1,
    kidney: 2,
    liver: 2,
    addiction: 8
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "hydrocodone",
    "opioid",
    "strong pain",
    "severe pain",
    "post operative pain"
  ],

  symptoms: {
    en: [
      "moderate pain",
      "severe pain",
      "body pain"
    ],

    bn: [
      "মাঝারি ব্যথা",
      "তীব্র ব্যথা",
      "শরীর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "severe pain",
      "injury pain",
      "post operative pain",
      "chronic pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "আঘাতজনিত ব্যথা",
      "অপারেশনের পর ব্যথা",
      "দীর্ঘমেয়াদি ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "moderate to severe pain",
      "injury related pain",
      "post operative pain"
    ],

    bn: [
      "মাঝারি থেকে তীব্র ব্যথা",
      "আঘাতজনিত ব্যথা",
      "অপারেশনের পর ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "respiratory depression",
      "opioid addiction",
      "head injury",
      "severe asthma"
    ],

    bn: [
      "শ্বাস দমন",
      "ওপিওয়েড আসক্তি",
      "মাথায় আঘাত",
      "গুরুতর হাঁপানি"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "constipation",
        "nausea",
        "dizziness"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "বমি ভাব",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Activates opioid receptors in the central nervous system to reduce pain perception",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে opioid receptor সক্রিয় করে ব্যথার অনুভূতি কমায়"
  },

  dosing: {
    adult: {
      en: "5mg - 10mg every 4-6 hours",
      bn: "প্রতি ৪-৬ ঘণ্টা পর ৫-১০ মিগ্রা"
    },

    maxDaily: {
      en: "Depends on formulation",
      bn: "ফর্মুলেশন অনুযায়ী পরিবর্তিত হয়"
    }
  },

  searchableText: [
    "hydrocodone",
    "vicodin",
    "lortab",
    "strong opioid",
    "তীব্র ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "darkred",

    commonUse: false
  },

  brands: [
    "Vicodin",
    "Lortab",
    "Norco",
    "Hycodan",
    "Zohydro ER"
  ],

  usageType: {
    en: [
      "severe pain relief",
      "post operative pain management"
    ],

    bn: [
      "তীব্র ব্যথা উপশম",
      "অপারেশনের পর ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},

{
  id: "dihydrocodeine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Dihydrocodeine",
      bn: "ডাইহাইড্রোকোডিন"
    },

    generic: {
      en: "Dihydrocodeine",
      bn: "ডাইহাইড্রোকোডিন"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "weak opioid",
    bn: "দুর্বল ওপিওয়েড"
  },

  class: {
    en: "Opioid Analgesic",
    bn: "ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "30mg",
    "60mg",
    "90mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Dihydrocodeine",
        bn: "ডাইহাইড্রোকোডিন"
      },

      strength: "30mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 6,
    safetyLevel: 4,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      moderate_pain: 8,
      chronic_pain: 7,
      post_operative_pain: 7
    }
  },

  risks: {
    gastric: 1,
    kidney: 2,
    liver: 2,
    addiction: 7
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "dihydrocodeine",
    "opioid",
    "moderate pain",
    "chronic pain",
    "post operative pain"
  ],

  symptoms: {
    en: [
      "moderate pain",
      "severe pain",
      "body pain"
    ],

    bn: [
      "মাঝারি ব্যথা",
      "তীব্র ব্যথা",
      "শরীর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "post operative pain",
      "chronic pain",
      "musculoskeletal pain"
    ],

    bn: [
      "অপারেশনের পর ব্যথা",
      "দীর্ঘমেয়াদি ব্যথা",
      "মাংসপেশি ও হাড়ের ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "moderate pain",
      "post operative pain",
      "short term pain relief"
    ],

    bn: [
      "মাঝারি ব্যথা",
      "অপারেশনের পর ব্যথা",
      "স্বল্পমেয়াদি ব্যথা উপশম"
    ]
  },

  avoidIn: {
    en: [
      "respiratory depression",
      "opioid addiction",
      "head injury",
      "severe asthma"
    ],

    bn: [
      "শ্বাস দমন",
      "ওপিওয়েড আসক্তি",
      "মাথায় আঘাত",
      "গুরুতর হাঁপানি"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "constipation",
        "nausea",
        "dizziness"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "বমি ভাব",
        "মাথা ঘোরা"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Acts on opioid receptors in the central nervous system to reduce pain perception",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে opioid receptor এ কাজ করে ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "30mg every 4-6 hours",
      bn: "প্রতি ৪-৬ ঘণ্টা পর ৩০ মিগ্রা"
    },

    maxDaily: {
      en: "240mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ২৪০ মিগ্রা"
    }
  },

  searchableText: [
    "dihydrocodeine",
    "df118",
    "opioid pain killer",
    "moderate pain medicine",
    "মাঝারি ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "orange",

    commonUse: false
  },

  brands: [
    "DF118",
    "DHC Continus",
    "Paramol",
    "Co-dydramol",
    "Remedeine"
  ],

  usageType: {
    en: [
      "pain relief",
      "post operative pain management"
    ],

    bn: [
      "ব্যথা উপশম",
      "অপারেশনের পর ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},

// ================= MORPHINE =================
{
  id: "morphine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Morphine",
      bn: "মরফিন"
    },

    generic: {
      en: "Morphine Sulfate",
      bn: "মরফিন সালফেট"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "strong opioid",
    bn: "শক্তিশালী ওপিওয়েড"
  },

  class: {
    en: "Strong Opioid Analgesic",
    bn: "শক্তিশালী ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "injection",
    bn: "ইনজেকশন"
  },

  route: {
    en: "iv/im/sc/oral",
    bn: "শিরা/পেশি/ত্বকের নিচে/মুখে"
  },

  strengths: [
    "5mg",
    "10mg",
    "15mg",
    "30mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Morphine",
        bn: "মরফিন"
      },

      strength: "10mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 9,
    safetyLevel: 2,

    severity: {
      en: "very strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      cancer_pain: 10,
      terminal_pain: 10,
      trauma_pain: 9
    }
  },

  risks: {
    gastric: 0,
    kidney: 3,
    liver: 2,
    addiction: 9
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "morphine",
    "opioid",
    "cancer pain",
    "terminal pain",
    "severe pain"
  ],

  symptoms: {
    en: [
      "severe pain",
      "cancer pain",
      "terminal pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "ক্যান্সারের ব্যথা",
      "শেষ পর্যায়ের ব্যথা"
    ]
  },

  diseases: {
    en: [
      "cancer pain",
      "trauma pain",
      "palliative care pain"
    ],

    bn: [
      "ক্যান্সারের ব্যথা",
      "আঘাতজনিত ব্যথা",
      "প্যালিয়েটিভ কেয়ার ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "severe cancer pain",
      "terminal pain",
      "ICU pain management"
    ],

    bn: [
      "তীব্র ক্যান্সারের ব্যথা",
      "শেষ পর্যায়ের ব্যথা",
      "ICU ব্যথা নিয়ন্ত্রণ"
    ]
  },

  avoidIn: {
    en: [
      "severe respiratory disease",
      "head injury",
      "opioid addiction",
      "acute asthma"
    ],

    bn: [
      "গুরুতর শ্বাসকষ্ট",
      "মাথায় আঘাত",
      "ওপিওয়েড আসক্তি",
      "তীব্র হাঁপানি"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "constipation",
        "sedation",
        "nausea",
        "low blood pressure"
      ],

      bn: [
        "কোষ্ঠকাঠিন্য",
        "ঘুম ভাব",
        "বমি ভাব",
        "রক্তচাপ কমে যাওয়া"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Strongly activates μ-opioid receptors in the central nervous system to block severe pain signals",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে μ-opioid receptor শক্তভাবে সক্রিয় করে তীব্র ব্যথার সংকেত কমায়"
  },

  dosing: {
    adult: {
      en: "2mg - 10mg depending on route and condition",
      bn: "রোগ ও ব্যবহারের পথে অনুযায়ী ২-১০ মিগ্রা"
    },

    maxDaily: {
      en: "Varies clinically",
      bn: "রোগের অবস্থার উপর নির্ভর করে"
    }
  },

  searchableText: [
    "morphine",
    "strong opioid",
    "cancer pain medicine",
    "severe pain injection",
    "তীব্র ব্যথার ইনজেকশন"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "darkred",

    commonUse: false
  },

  brands: [
    "MS Contin",
    "Kadian",
    "Oramorph",
    "Roxanol",
    "MST Continus"
  ],

  usageType: {
    en: [
      "severe pain relief",
      "palliative pain management"
    ],

    bn: [
      "তীব্র ব্যথা উপশম",
      "প্যালিয়েটিভ ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: true
},

// ================= FENTANYL =================
{
  id: "fentanyl",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Fentanyl",
      bn: "ফেন্টানিল"
    },

    generic: {
      en: "Fentanyl",
      bn: "ফেন্টানিল"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "strong synthetic opioid",
    bn: "শক্তিশালী সিনথেটিক ওপিওয়েড"
  },

  class: {
    en: "Strong Opioid Analgesic",
    bn: "শক্তিশালী ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "patch",
    bn: "প্যাচ"
  },

  route: {
    en: "transdermal/iv",
    bn: "ত্বকের মাধ্যমে/শিরায়"
  },

  strengths: [
    "12mcg/hr",
    "25mcg/hr",
    "50mcg/hr",
    "100mcg/hr"
  ],

  composition: [
    {
      ingredient: {
        en: "Fentanyl",
        bn: "ফেন্টানিল"
      },

      strength: "25mcg/hr"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 10,
    safetyLevel: 1,

    severity: {
      en: "extremely strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      cancer_pain: 10,
      terminal_pain: 10,
      anesthesia_support: 10
    }
  },

  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,
    addiction: 10
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "fentanyl",
    "opioid",
    "cancer pain",
    "terminal pain",
    "anesthesia"
  ],

  symptoms: {
    en: [
      "severe pain",
      "terminal pain",
      "cancer pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "শেষ পর্যায়ের ব্যথা",
      "ক্যান্সারের ব্যথা"
    ]
  },

  diseases: {
    en: [
      "cancer pain",
      "chronic severe pain",
      "palliative care pain"
    ],

    bn: [
      "ক্যান্সারের ব্যথা",
      "দীর্ঘমেয়াদি তীব্র ব্যথা",
      "প্যালিয়েটিভ কেয়ার ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "severe cancer pain",
      "opioid tolerant patients",
      "ICU pain management"
    ],

    bn: [
      "তীব্র ক্যান্সারের ব্যথা",
      "ওপিওয়েড সহনশীল রোগী",
      "ICU ব্যথা নিয়ন্ত্রণ"
    ]
  },

  avoidIn: {
    en: [
      "opioid naive patients",
      "severe respiratory disease",
      "acute asthma",
      "head injury"
    ],

    bn: [
      "যারা আগে ওপিওয়েড নেয়নি",
      "গুরুতর শ্বাসকষ্ট",
      "তীব্র হাঁপানি",
      "মাথায় আঘাত"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "sedation",
        "constipation",
        "nausea"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence",
        "overdose risk"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি",
        "ওভারডোজ ঝুঁকি"
      ]
    }
  },

  mechanism: {
    en:
      "Strongly activates μ-opioid receptors in the central nervous system to block severe pain signals",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে μ-opioid receptor শক্তভাবে সক্রিয় করে তীব্র ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "Dose varies by formulation and opioid tolerance",
      bn: "ডোজ ফর্মুলেশন ও ওপিওয়েড সহনশীলতার উপর নির্ভর করে"
    },

    maxDaily: {
      en: "Varies clinically",
      bn: "রোগীর অবস্থার উপর নির্ভর করে"
    }
  },

  searchableText: [
    "fentanyl",
    "duragesic",
    "cancer pain patch",
    "strong opioid",
    "তীব্র ব্যথার প্যাচ"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "black",

    commonUse: false
  },

  brands: [
    "Duragesic",
    "Actiq",
    "Fentora",
    "Sublimaze",
    "Durogesic"
  ],

  usageType: {
    en: [
      "severe pain relief",
      "palliative care pain management"
    ],

    bn: [
      "তীব্র ব্যথা উপশম",
      "প্যালিয়েটিভ কেয়ার ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: true
},
{
  id: "methadone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Methadone",
      bn: "মেথাডোন"
    },

    generic: {
      en: "Methadone Hydrochloride",
      bn: "মেথাডোন হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "strong synthetic opioid",
    bn: "শক্তিশালী সিনথেটিক ওপিওয়েড"
  },

  class: {
    en: "Strong Opioid Analgesic",
    bn: "শক্তিশালী ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "5mg",
    "10mg",
    "40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Methadone",
        bn: "মেথাডোন"
      },

      strength: "10mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 9,
    safetyLevel: 2,

    severity: {
      en: "very strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      opioid_dependence: 10,
      chronic_pain: 9,
      cancer_pain: 8
    }
  },

  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,
    addiction: 9
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "methadone",
    "opioid",
    "opioid dependence",
    "withdrawal",
    "chronic pain"
  ],

  symptoms: {
    en: [
      "severe pain",
      "withdrawal symptoms",
      "body pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "withdrawal উপসর্গ",
      "শরীর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "opioid dependence",
      "opioid withdrawal",
      "cancer pain",
      "neuropathic pain"
    ],

    bn: [
      "ওপিওয়েড আসক্তি",
      "ওপিওয়েড ছাড়ার সমস্যা",
      "ক্যান্সারের ব্যথা",
      "নার্ভের ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "opioid dependence treatment",
      "long acting pain control",
      "chronic severe pain"
    ],

    bn: [
      "ওপিওয়েড আসক্তির চিকিৎসা",
      "দীর্ঘসময় ব্যথা নিয়ন্ত্রণ",
      "দীর্ঘমেয়াদি তীব্র ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "QT prolongation",
      "severe respiratory disease",
      "head injury",
      "opioid overdose"
    ],

    bn: [
      "QT interval বৃদ্ধি",
      "গুরুতর শ্বাসকষ্ট",
      "মাথায় আঘাত",
      "ওপিওয়েড ওভারডোজ"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "sedation",
        "constipation",
        "nausea"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "QT prolongation",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "হার্টের রিদম সমস্যা",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Activates μ-opioid receptors and suppresses opioid withdrawal while reducing severe pain",

    bn:
      "μ-opioid receptor সক্রিয় করে তীব্র ব্যথা কমায় এবং ওপিওয়েড withdrawal কমায়"
  },

  dosing: {
    adult: {
      en: "Dose varies depending on opioid tolerance and indication",
      bn: "রোগ ও ওপিওয়েড সহনশীলতার উপর ডোজ নির্ভর করে"
    },

    maxDaily: {
      en: "Varies clinically",
      bn: "রোগীর অবস্থার উপর নির্ভর করে"
    }
  },

  searchableText: [
    "methadone",
    "dolophine",
    "opioid withdrawal medicine",
    "opioid dependence treatment",
    "তীব্র ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "darkorange",

    commonUse: false
  },

  brands: [
    "Dolophine",
    "Methadose",
    "Physeptone",
    "Amidone",
    "Heptadon"
  ],

  usageType: {
    en: [
      "opioid dependence therapy",
      "long acting pain management"
    ],

    bn: [
      "ওপিওয়েড আসক্তির চিকিৎসা",
      "দীর্ঘসময় ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},

// ================= HYDROMORPHONE =================
{
  id: "hydromorphone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Hydromorphone",
      bn: "হাইড্রোমরফোন"
    },

    generic: {
      en: "Hydromorphone Hydrochloride",
      bn: "হাইড্রোমরফোন হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "strong opioid",
    bn: "শক্তিশালী ওপিওয়েড"
  },

  class: {
    en: "Strong Opioid Analgesic",
    bn: "শক্তিশালী ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "injection",
    bn: "ইনজেকশন"
  },

  route: {
    en: "iv/im/sc/oral",
    bn: "শিরা/পেশি/ত্বকের নিচে/মুখে"
  },

  strengths: [
    "1mg",
    "2mg",
    "4mg",
    "8mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Hydromorphone",
        bn: "হাইড্রোমরফোন"
      },

      strength: "2mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 9,
    safetyLevel: 2,

    severity: {
      en: "very strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      cancer_pain: 10,
      trauma_pain: 9,
      post_operative_pain: 9
    }
  },

  risks: {
    gastric: 0,
    kidney: 3,
    liver: 2,
    addiction: 9
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "hydromorphone",
    "opioid",
    "severe pain",
    "cancer pain",
    "palliative care"
  ],

  symptoms: {
    en: [
      "severe pain",
      "trauma pain",
      "post operative pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "আঘাতজনিত ব্যথা",
      "অপারেশনের পর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "cancer pain",
      "terminal pain",
      "severe trauma pain"
    ],

    bn: [
      "ক্যান্সারের ব্যথা",
      "শেষ পর্যায়ের ব্যথা",
      "তীব্র আঘাতজনিত ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "severe pain",
      "palliative care",
      "opioid tolerant patients"
    ],

    bn: [
      "তীব্র ব্যথা",
      "প্যালিয়েটিভ কেয়ার",
      "ওপিওয়েড সহনশীল রোগী"
    ]
  },

  avoidIn: {
    en: [
      "acute asthma",
      "head injury",
      "severe respiratory disease"
    ],

    bn: [
      "তীব্র হাঁপানি",
      "মাথায় আঘাত",
      "গুরুতর শ্বাসকষ্ট"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "sedation",
        "constipation",
        "nausea"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Strongly activates μ-opioid receptors in the central nervous system to reduce severe pain",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে μ-opioid receptor শক্তভাবে সক্রিয় করে তীব্র ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "1mg - 4mg depending on route and condition",
      bn: "রোগ ও ব্যবহারের পথে অনুযায়ী ১-৪ মিগ্রা"
    },

    maxDaily: {
      en: "Varies clinically",
      bn: "রোগীর অবস্থার উপর নির্ভর করে"
    }
  },

  searchableText: [
    "hydromorphone",
    "dilaudid",
    "strong opioid",
    "cancer pain medicine",
    "তীব্র ব্যথার ইনজেকশন"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "crimson",

    commonUse: false
  },

  brands: [
    "Dilaudid",
    "Exalgo",
    "Palladone",
    "Jurnista",
    "Hydromorph Contin"
  ],

  usageType: {
    en: [
      "severe pain relief",
      "palliative pain management"
    ],

    bn: [
      "তীব্র ব্যথা উপশম",
      "প্যালিয়েটিভ ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: true
},

// ================= OXYCODONE =================
{
  id: "oxycodone",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Oxycodone",
      bn: "অক্সিকোডোন"
    },

    generic: {
      en: "Oxycodone Hydrochloride",
      bn: "অক্সিকোডোন হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "strong opioid",
    bn: "শক্তিশালী ওপিওয়েড"
  },

  class: {
    en: "Strong Opioid Analgesic",
    bn: "শক্তিশালী ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "5mg",
    "10mg",
    "20mg",
    "40mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Oxycodone",
        bn: "অক্সিকোডোন"
      },

      strength: "5mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 9,
    safetyLevel: 2,

    severity: {
      en: "very strong",
      bn: "অত্যন্ত শক্তিশালী"
    },

    score: {
      cancer_pain: 10,
      chronic_pain: 9,
      post_operative_pain: 9
    }
  },

  risks: {
    gastric: 0,
    kidney: 2,
    liver: 2,
    addiction: 9
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "oxycodone",
    "opioid",
    "severe pain",
    "cancer pain",
    "chronic pain"
  ],

  symptoms: {
    en: [
      "severe pain",
      "post operative pain",
      "body pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "অপারেশনের পর ব্যথা",
      "শরীর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "cancer pain",
      "chronic severe pain",
      "trauma pain"
    ],

    bn: [
      "ক্যান্সারের ব্যথা",
      "দীর্ঘমেয়াদি তীব্র ব্যথা",
      "আঘাতজনিত ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "severe pain",
      "post operative pain",
      "opioid tolerant patients"
    ],

    bn: [
      "তীব্র ব্যথা",
      "অপারেশনের পর ব্যথা",
      "ওপিওয়েড সহনশীল রোগী"
    ]
  },

  avoidIn: {
    en: [
      "acute asthma",
      "head injury",
      "opioid addiction",
      "severe respiratory disease"
    ],

    bn: [
      "তীব্র হাঁপানি",
      "মাথায় আঘাত",
      "ওপিওয়েড আসক্তি",
      "গুরুতর শ্বাসকষ্ট"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "sedation",
        "constipation",
        "dizziness",
        "nausea"
      ],

      bn: [
        "ঘুম ভাব",
        "কোষ্ঠকাঠিন্য",
        "মাথা ঘোরা",
        "বমি ভাব"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "dependence"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "আসক্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Activates μ-opioid receptors in the central nervous system to block severe pain signals",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে μ-opioid receptor সক্রিয় করে তীব্র ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "5mg - 15mg every 4-6 hours depending on condition",
      bn: "রোগ অনুযায়ী প্রতি ৪-৬ ঘণ্টা পর ৫-১৫ মিগ্রা"
    },

    maxDaily: {
      en: "Varies clinically",
      bn: "রোগীর অবস্থার উপর নির্ভর করে"
    }
  },

  searchableText: [
    "oxycodone",
    "oxycontin",
    "strong opioid",
    "cancer pain medicine",
    "তীব্র ব্যথার ওষুধ"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "purple",

    commonUse: false
  },

  brands: [
    "OxyContin",
    "Percocet",
    "Roxicodone",
    "OxyNorm",
    "Xtampza ER"
  ],

  usageType: {
    en: [
      "severe pain relief",
      "long acting pain management"
    ],

    bn: [
      "তীব্র ব্যথা উপশম",
      "দীর্ঘসময় ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: true
},

{
  id: "meperidine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Meperidine",
      bn: "মেপেরিডিন"
    },

    generic: {
      en: "Meperidine Hydrochloride",
      bn: "মেপেরিডিন হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "opioid",
    bn: "ওপিওয়েড"
  },

  subgroup: {
    en: "strong opioid",
    bn: "শক্তিশালী ওপিওয়েড"
  },

  class: {
    en: "Opioid Analgesic",
    bn: "ওপিওয়েড ব্যথানাশক"
  },

  category: {
    en: "injection",
    bn: "ইনজেকশন"
  },

  route: {
    en: "iv/im/oral",
    bn: "শিরা/পেশি/মুখে"
  },

  strengths: [
    "25mg",
    "50mg",
    "100mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Meperidine",
        bn: "মেপেরিডিন"
      },

      strength: "50mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: true,

  ai: {
    powerLevel: 8,
    safetyLevel: 2,

    severity: {
      en: "strong",
      bn: "শক্তিশালী"
    },

    score: {
      acute_pain: 9,
      post_operative_pain: 8,
      labor_pain: 8
    }
  },

  risks: {
    gastric: 0,
    kidney: 4,
    liver: 2,
    addiction: 8
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "meperidine",
    "pethidine",
    "opioid",
    "acute pain",
    "labor pain"
  ],

  symptoms: {
    en: [
      "severe pain",
      "acute pain",
      "post operative pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "হঠাৎ তীব্র ব্যথা",
      "অপারেশনের পর ব্যথা"
    ]
  },

  diseases: {
    en: [
      "acute pain",
      "labor pain",
      "trauma pain"
    ],

    bn: [
      "তীব্র ব্যথা",
      "প্রসব ব্যথা",
      "আঘাতজনিত ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "acute severe pain",
      "short term pain relief",
      "post operative pain"
    ],

    bn: [
      "তীব্র হঠাৎ ব্যথা",
      "স্বল্পমেয়াদি ব্যথা উপশম",
      "অপারেশনের পর ব্যথা"
    ]
  },

  avoidIn: {
    en: [
      "seizure disorder",
      "MAOI use",
      "severe kidney disease"
    ],

    bn: [
      "খিঁচুনি রোগ",
      "MAOI ওষুধ ব্যবহার",
      "গুরুতর কিডনি রোগ"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "sedation",
        "nausea",
        "constipation"
      ],

      bn: [
        "ঘুম ভাব",
        "বমি ভাব",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "respiratory depression",
        "confusion",
        "seizure risk"
      ],

      bn: [
        "শ্বাস কমে যাওয়া",
        "বিভ্রান্তি",
        "খিঁচুনির ঝুঁকি"
      ]
    }
  },

  mechanism: {
    en:
      "Activates opioid receptors in the central nervous system to reduce severe pain perception",

    bn:
      "সেন্ট্রাল নার্ভাস সিস্টেমে opioid receptor সক্রিয় করে তীব্র ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "25mg - 100mg every 3-4 hours depending on route",
      bn: "ব্যবহারের পথ অনুযায়ী প্রতি ৩-৪ ঘণ্টা পর ২৫-১০০ মিগ্রা"
    },

    maxDaily: {
      en: "600mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৬০০ মিগ্রা"
    }
  },

  searchableText: [
    "meperidine",
    "pethidine",
    "demerol",
    "acute pain injection",
    "তীব্র ব্যথার ইনজেকশন"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "red",

    commonUse: false
  },

  brands: [
    "Demerol",
    "Pethidine",
    "Dolantin",
    "Mepergan",
    "Pethin"
  ],

  usageType: {
    en: [
      "acute pain relief",
      "short term opioid analgesia"
    ],

    bn: [
      "তীব্র ব্যথা উপশম",
      "স্বল্পমেয়াদি ওপিওয়েড ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: true
},

// ================= AMITRIPTYLINE =================
{
  id: "amitriptyline",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Amitriptyline",
      bn: "অ্যামিট্রিপটাইলিন"
    },

    generic: {
      en: "Amitriptyline Hydrochloride",
      bn: "অ্যামিট্রিপটাইলিন হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "neuropathic pain",
    bn: "নার্ভের ব্যথা"
  },

  subgroup: {
    en: "tricyclic antidepressant",
    bn: "ট্রাইসাইক্লিক অ্যান্টিডিপ্রেসেন্ট"
  },

  class: {
    en: "Adjuvant Analgesic",
    bn: "সহায়ক ব্যথার ওষুধ"
  },

  category: {
    en: "tablet",
    bn: "ট্যাবলেট"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "10mg",
    "25mg",
    "50mg",
    "75mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Amitriptyline",
        bn: "অ্যামিট্রিপটাইলিন"
      },

      strength: "25mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: false,

  ai: {
    powerLevel: 5,
    safetyLevel: 5,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      neuropathic_pain: 9,
      fibromyalgia: 8,
      migraine_prevention: 7
    }
  },

  risks: {
    gastric: 0,
    kidney: 1,
    liver: 2,
    addiction: 1
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "amitriptyline",
    "nerve pain",
    "fibromyalgia",
    "migraine prevention"
  ],

  symptoms: {
    en: [
      "burning pain",
      "tingling",
      "sleep disturbance"
    ],

    bn: [
      "জ্বালাপোড়া ব্যথা",
      "ঝিনঝিন অনুভূতি",
      "ঘুমের সমস্যা"
    ]
  },

  diseases: {
    en: [
      "diabetic neuropathy",
      "fibromyalgia",
      "migraine"
    ],

    bn: [
      "ডায়াবেটিক নিউরোপ্যাথি",
      "ফাইব্রোমায়ালজিয়া",
      "মাইগ্রেন"
    ]
  },

  bestFor: {
    en: [
      "neuropathic pain",
      "night pain",
      "migraine prevention"
    ],

    bn: [
      "নার্ভের ব্যথা",
      "রাতের ব্যথা",
      "মাইগ্রেন প্রতিরোধ"
    ]
  },

  avoidIn: {
    en: [
      "heart rhythm disorder",
      "glaucoma",
      "recent heart attack"
    ],

    bn: [
      "হার্টের রিদম সমস্যা",
      "গ্লুকোমা",
      "সাম্প্রতিক হার্ট অ্যাটাক"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dry mouth",
        "constipation"
      ],

      bn: [
        "ঘুম ভাব",
        "মুখ শুকিয়ে যাওয়া",
        "কোষ্ঠকাঠিন্য"
      ]
    },

    serious: {
      en: [
        "arrhythmia",
        "confusion"
      ],

      bn: [
        "হার্টের রিদম সমস্যা",
        "বিভ্রান্তি"
      ]
    }
  },

  mechanism: {
    en:
      "Blocks serotonin and norepinephrine reuptake to reduce abnormal nerve pain signals",

    bn:
      "serotonin ও norepinephrine reuptake কমিয়ে অস্বাভাবিক নার্ভের ব্যথা কমায়"
  },

  dosing: {
    adult: {
      en: "10mg - 75mg daily, usually at night",
      bn: "সাধারণত রাতে ১০-৭৫ মিগ্রা"
    },

    maxDaily: {
      en: "150mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১৫০ মিগ্রা"
    }
  },

  searchableText: [
    "amitriptyline",
    "tryptomer",
    "nerve pain medicine",
    "migraine prevention medicine"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "violet",

    commonUse: true
  },

  brands: [
    "Tryptomer",
    "Elavil",
    "Amitone",
    "Amitrip"
  ],

  usageType: {
    en: [
      "neuropathic pain control",
      "migraine prevention"
    ],

    bn: [
      "নার্ভের ব্যথা নিয়ন্ত্রণ",
      "মাইগ্রেন প্রতিরোধ"
    ]
  },

  emergencyUse: false
},

// ================= DULOXETINE =================
{
  id: "duloxetine",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Duloxetine",
      bn: "ডুলোক্সেটিন"
    },

    generic: {
      en: "Duloxetine Hydrochloride",
      bn: "ডুলোক্সেটিন হাইড্রোক্লোরাইড"
    }
  },

  group: {
    en: "neuropathic pain",
    bn: "নার্ভের ব্যথা"
  },

  subgroup: {
    en: "snri",
    bn: "SNRI"
  },

  class: {
    en: "SNRI Analgesic",
    bn: "SNRI ব্যথার ওষুধ"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "20mg",
    "30mg",
    "60mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Duloxetine",
        bn: "ডুলোক্সেটিন"
      },

      strength: "30mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: false,

  ai: {
    powerLevel: 6,
    safetyLevel: 5,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      diabetic_neuropathy: 9,
      fibromyalgia: 8,
      chronic_pain: 8
    }
  },

  risks: {
    gastric: 1,
    kidney: 2,
    liver: 3,
    addiction: 1
  },

  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  tags: [
    "duloxetine",
    "neuropathic pain",
    "fibromyalgia",
    "diabetic neuropathy"
  ],

  symptoms: {
    en: [
      "burning pain",
      "tingling",
      "chronic pain"
    ],

    bn: [
      "জ্বালাপোড়া ব্যথা",
      "ঝিনঝিন অনুভূতি",
      "দীর্ঘমেয়াদি ব্যথা"
    ]
  },

  diseases: {
    en: [
      "diabetic neuropathy",
      "fibromyalgia",
      "chronic musculoskeletal pain"
    ],

    bn: [
      "ডায়াবেটিক নিউরোপ্যাথি",
      "ফাইব্রোমায়ালজিয়া",
      "দীর্ঘমেয়াদি মাংসপেশির ব্যথা"
    ]
  },

  bestFor: {
    en: [
      "diabetic neuropathy",
      "fibromyalgia",
      "pain with depression"
    ],

    bn: [
      "ডায়াবেটিক নিউরোপ্যাথি",
      "ফাইব্রোমায়ালজিয়া",
      "ব্যথাসহ বিষণ্নতা"
    ]
  },

  avoidIn: {
    en: [
      "severe liver disease",
      "MAOI use",
      "heavy alcohol use"
    ],

    bn: [
      "গুরুতর লিভার রোগ",
      "MAOI ওষুধ ব্যবহার",
      "অতিরিক্ত অ্যালকোহল সেবন"
    ]
  },

  sideEffects: {
    common: {
      en: [
        "nausea",
        "dry mouth",
        "sleepiness"
      ],

      bn: [
        "বমি ভাব",
        "মুখ শুকিয়ে যাওয়া",
        "ঘুম ভাব"
      ]
    },

    serious: {
      en: [
        "liver injury",
        "serotonin syndrome"
      ],

      bn: [
        "লিভারের ক্ষতি",
        "সেরোটোনিন সিনড্রোম"
      ]
    }
  },

  mechanism: {
    en:
      "Blocks serotonin and norepinephrine reuptake to reduce abnormal pain signaling in nerves",

    bn:
      "serotonin ও norepinephrine reuptake কমিয়ে নার্ভের অস্বাভাবিক ব্যথার সংকেত কমায়"
  },

  dosing: {
    adult: {
      en: "30mg - 60mg once daily",
      bn: "প্রতিদিন ৩০-৬০ মিগ্রা"
    },

    maxDaily: {
      en: "120mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ১২০ মিগ্রা"
    }
  },

  searchableText: [
    "duloxetine",
    "cymbalta",
    "fibromyalgia medicine",
    "diabetic neuropathy medicine"
  ],

  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "blue",

    commonUse: true
  },

  brands: [
    "Cymbalta",
    "Duzela",
    "Dulane",
    "Dulox"
  ],

  usageType: {
    en: [
      "neuropathic pain control",
      "chronic pain management"
    ],

    bn: [
      "নার্ভের ব্যথা নিয়ন্ত্রণ",
      "দীর্ঘমেয়াদি ব্যথা নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
},



// ================= PREGABALIN =================
{
  id: "pregabalin",

  // ================= BASIC =================
  names: {
    primary: {
      en: "Pregabalin",
      bn: "প্রেগাবালিন"
    },

    generic: {
      en: "Pregabalin",
      bn: "প্রেগাবালিন"
    }
  },

  group: {
    en: "neuropathic pain",
    bn: "নার্ভের ব্যথা"
  },

  subgroup: {
    en: "gabapentinoid",
    bn: "গ্যাবাপেন্টিনয়েড"
  },

  class: {
    en: "Adjuvant Analgesic",
    bn: "সহায়ক ব্যথার ওষুধ"
  },

  category: {
    en: "capsule",
    bn: "ক্যাপসুল"
  },

  route: {
    en: "oral",
    bn: "মুখে খাওয়ার"
  },

  strengths: [
    "25mg",
    "50mg",
    "75mg",
    "150mg",
    "300mg"
  ],

  composition: [
    {
      ingredient: {
        en: "Pregabalin",
        bn: "প্রেগাবালিন"
      },

      strength: "75mg"
    }
  ],

  otc: false,
  rx: true,
  controlledDrug: false,

  // ================= AI =================
  ai: {
    powerLevel: 6,
    safetyLevel: 5,

    severity: {
      en: "moderate",
      bn: "মাঝারি"
    },

    score: {
      neuropathic_pain: 9,
      fibromyalgia: 8,
      diabetic_neuropathy: 8,
      anxiety: 7
    }
  },

  // ================= RISKS =================
  risks: {
    gastric: 0,
    kidney: 3,
    liver: 1,
    addiction: 3
  },

  // ================= SAFETY =================
  safety: {
    pregnancy: false,
    breastfeeding: false,
    elderly: false,
    pediatric: false
  },

  // ================= TAGS =================
  tags: [
    "pregabalin",
    "gabapentinoid",
    "nerve pain",
    "fibromyalgia",
    "burning pain",
    "diabetic neuropathy"
  ],

  // ================= SYMPTOMS =================
  symptoms: {
    en: [
      "burning pain",
      "tingling",
      "nerve pain",
      "electric shock pain"
    ],

    bn: [
      "জ্বালাপোড়া ব্যথা",
      "ঝিনঝিন অনুভূতি",
      "নার্ভের ব্যথা",
      "বিদ্যুৎ শকের মতো ব্যথা"
    ]
  },

  // ================= DISEASES =================
  diseases: {
    en: [
      "neuropathy",
      "diabetic neuropathy",
      "fibromyalgia",
      "postherpetic neuralgia",
      "partial seizures"
    ],

    bn: [
      "নার্ভের ব্যথা",
      "ডায়াবেটিক নিউরোপ্যাথি",
      "ফাইব্রোমায়ালজিয়া",
      "হারপিসের পর ব্যথা",
      "আংশিক খিঁচুনি"
    ]
  },

  // ================= BEST FOR =================
  bestFor: {
    en: [
      "neuropathic pain",
      "fibromyalgia",
      "burning nerve pain",
      "postherpetic neuralgia"
    ],

    bn: [
      "নার্ভের ব্যথা",
      "ফাইব্রোমায়ালজিয়া",
      "জ্বালাপোড়া ধরনের ব্যথা",
      "হারপিসের পর ব্যথা"
    ]
  },

  // ================= AVOID =================
  avoidIn: {
    en: [
      "severe kidney disease without dose adjustment",
      "pregabalin allergy",
      "history of substance abuse"
    ],

    bn: [
      "ডোজ সমন্বয় ছাড়া গুরুতর কিডনি রোগ",
      "প্রেগাবালিন অ্যালার্জি",
      "মাদকাসক্তির ইতিহাস"
    ]
  },

  // ================= SIDE EFFECTS =================
  sideEffects: {
    common: {
      en: [
        "drowsiness",
        "dizziness",
        "blurred vision",
        "weight gain"
      ],

      bn: [
        "ঘুম ভাব",
        "মাথা ঘোরা",
        "ঝাপসা দেখা",
        "ওজন বৃদ্ধি"
      ]
    },

    serious: {
      en: [
        "severe sedation",
        "breathing difficulty",
        "swelling"
      ],

      bn: [
        "অতিরিক্ত ঘুম ভাব",
        "শ্বাসকষ্ট",
        "ফোলা"
      ]
    }
  },

  // ================= CONTRAINDICATIONS =================
  contraindications: {
    en: [
      "pregabalin hypersensitivity",
      "dose adjustment needed in renal disease"
    ],

    bn: [
      "প্রেগাবালিন অতিসংবেদনশীলতা",
      "কিডনি রোগে ডোজ সমন্বয় প্রয়োজন"
    ]
  },

  // ================= MECHANISM =================
  mechanism: {
    en:
      "Modulates calcium channels in nerves and decreases abnormal pain signal transmission",

    bn:
      "নার্ভের calcium channel এ কাজ করে অস্বাভাবিক ব্যথার সংকেত কমায়"
  },

  // ================= DOSING =================
  dosing: {
    adult: {
      en: "75mg - 150mg twice daily",
      bn: "দিনে ২ বার ৭৫-১৫০ মিগ্রা"
    },

    maxDaily: {
      en: "600mg/day",
      bn: "প্রতিদিন সর্বোচ্চ ৬০০ মিগ্রা"
    }
  },

  doseNote: {
    en: "Dose should be reduced gradually before stopping",

    bn: "হঠাৎ বন্ধ না করে ধীরে ধীরে ডোজ কমানো উচিত"
  },

  // ================= SEARCH =================
  searchableText: [
    "pregabalin",
    "lyrica",
    "gabapentinoid",
    "nerve pain medicine",
    "fibromyalgia medicine",
    "burning pain medicine",
    "নার্ভের ব্যথার ওষুধ"
  ],

  // ================= UI =================
  ui: {
    gastricEffect: {
      en: "Usually safe",
      bn: "সাধারণত নিরাপদ"
    },

    colorHint: "indigo",

    commonUse: true
  },

  // ================= BRANDS =================
  brands: [
    "Lyrica",
    "Pregaba",
    "Pregalin",
    "Pregakind",
    "Pregacare",
    "Pregafast"
  ],

  usageType: {
    en: [
      "neuropathic pain control",
      "fibromyalgia management"
    ],

    bn: [
      "নার্ভের ব্যথা নিয়ন্ত্রণ",
      "ফাইব্রোমায়ালজিয়া নিয়ন্ত্রণ"
    ]
  },

  emergencyUse: false
}
];