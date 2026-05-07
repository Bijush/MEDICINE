export const DATA = {

  topic:{
    en:"Pain Management (Harrison Level)",
    bn:"ব্যথা ব্যবস্থাপনা (Harrison লেভেল)"
  },

  sections:[

    // ================= NSAIDs =================
{
  id:"nsaids",
  title:{
    en:"Non-Opioid Analgesics (NSAIDs)",
    bn:"নন-ওপিওয়েড ব্যথার ওষুধ"
  },

  content:{

    drugs:{
      en:[
        "Acetaminophen (Paracetamol)",
        "Ibuprofen",
        "Naproxen",
        "Fenoprofen",
        "Indomethacin",
        "Ketorolac",
        "Celecoxib",
        "Valdecoxib"
      ],

      bn:[
        "অ্যাসিটামিনোফেন (প্যারাসিটামল)",
        "আইবুপ্রোফেন",
        "ন্যাপ্রক্সেন",
        "ফেনোপ্রোফেন",
        "ইন্ডোমেথাসিন",
        "কেটোরোলাক",
        "সেলেকক্সিব",
        "ভ্যালডেকক্সিব"
      ]
    },

    mechanism:{
      en:"COX inhibition → ↓ prostaglandin synthesis → ↓ pain, fever & inflammation",
      bn:"COX ব্লক করে → প্রোস্টাগ্ল্যান্ডিন কমায় → ব্যথা, জ্বর ও প্রদাহ কমে"
    },

    dose:{
      en:[
        "Paracetamol: 650 mg PO q4h",
        "Ibuprofen: 400 mg PO q4–6h",
        "Naproxen: 250–500 mg PO q12h",
        "Fenoprofen: 200 mg PO q4–6h",
        "Indomethacin: 25–50 mg PO q8h",
        "Ketorolac: 15–60 mg IM/IV q4–6h",
        "Celecoxib: 100–200 mg PO q12–24h",
        "Valdecoxib: 10–20 mg PO q12–24h"
      ],

      bn:[
        "প্যারাসিটামল: ৬৫০ মিগ্রা প্রতি ৪ ঘন্টা",
        "আইবুপ্রোফেন: ৪০০ মিগ্রা প্রতি ৪–৬ ঘন্টা",
        "ন্যাপ্রক্সেন: ২৫০–৫০০ মিগ্রা প্রতি ১২ ঘন্টা",
        "ফেনোপ্রোফেন: ২০০ মিগ্রা প্রতি ৪–৬ ঘন্টা",
        "ইন্ডোমেথাসিন: ২৫–৫০ মিগ্রা প্রতি ৮ ঘন্টা",
        "কেটোরোলাক: ১৫–৬০ মিগ্রা IM/IV",
        "সেলেকক্সিব: ১০০–২০০ মিগ্রা",
        "ভ্যালডেকক্সিব: ১০–২০ মিগ্রা"
      ]
    },

    use:{
      en:[
        "Mild to moderate pain",
        "Musculoskeletal pain",
        "Fever",
        "Inflammatory conditions",
        "Arthritis"
      ],

      bn:[
        "হালকা–মাঝারি ব্যথা",
        "মাংসপেশির ব্যথা",
        "জ্বর",
        "প্রদাহজনিত রোগ",
        "আর্থ্রাইটিস"
      ]
    },

    side_effect:{
      en:[
        "Paracetamol → hepatotoxicity in overdose",
        "Ibuprofen → gastritis, GI bleeding",
        "Naproxen → gastrointestinal bleeding risk",
        "Fenoprofen → contraindicated in renal disease",
        "Indomethacin → severe gastric irritation, headache",
        "Ketorolac → renal toxicity, bleeding risk",
        "Celecoxib → cardiovascular risk",
        "Valdecoxib → removed from market due to cardiovascular toxicity"
      ],

      bn:[
        "প্যারাসিটামল → বেশি হলে লিভার নষ্ট",
        "আইবুপ্রোফেন → গ্যাস্ট্রিক ও রক্তক্ষরণ",
        "ন্যাপ্রক্সেন → পেটে রক্তক্ষরণের ঝুঁকি",
        "ফেনোপ্রোফেন → কিডনি রোগে ক্ষতিকর",
        "ইন্ডোমেথাসিন → তীব্র গ্যাস্ট্রিক ও মাথাব্যথা",
        "কেটোরোলাক → কিডনি ক্ষতি ও রক্তক্ষরণ",
        "সেলেকক্সিব → হৃদরোগের ঝুঁকি",
        "ভ্যালডেকক্সিব → হৃদরোগ ঝুঁকির কারণে বাজার থেকে সরানো হয়েছে"
      ]
    },
    comments:{
  en:[
    "Naproxen has lower cardiovascular risk",
    "Ketorolac mainly used parenterally",
    "Celecoxib useful in arthritis",
    "Valdecoxib removed from market in 2005"
  ],

  bn:[
    "ন্যাপ্রক্সেনে হৃদরোগের ঝুঁকি কম",
    "কেটোরোলাক মূলত ইনজেকশনে ব্যবহৃত হয়",
    "সেলেকক্সিব আর্থ্রাইটিসে ভালো",
    "ভ্যালডেকক্সিব ২০০৫ সালে বাজার থেকে সরানো হয়"
  ]
},

    contraindication:{
      en:[
        "Renal failure",
        "Peptic ulcer disease",
        "Bleeding disorders",
        "Severe liver disease",
        "NSAID allergy"
      ],

      bn:[
        "কিডনি বিকল",
        "পেপটিক আলসার",
        "রক্তক্ষরণ রোগ",
        "গুরুতর লিভার রোগ",
        "NSAID allergy"
      ]
    },

    comparison:{
      en:[
        "Ketorolac → strongest injectable NSAID",
        "Celecoxib → less gastric toxicity",
        "Naproxen → lower cardiovascular risk",
        "Paracetamol → safest for stomach"
      ],

      bn:[
        "কেটোরোলাক → সবচেয়ে শক্তিশালী ইনজেকশন NSAID",
        "সেলেকক্সিব → কম গ্যাস্ট্রিক সমস্যা",
        "ন্যাপ্রক্সেন → কম হৃদরোগ ঝুঁকি",
        "প্যারাসিটামল → পাকস্থলীর জন্য সবচেয়ে নিরাপদ"
      ]
    },

    exam_point:{
      en:[
        "Paracetamol overdose → liver failure",
        "Ketorolac should not be used long-term",
        "Celecoxib is COX-2 selective",
        "NSAIDs may cause GI bleeding"
      ],

      bn:[
        "প্যারাসিটামল বেশি হলে লিভার ফেইলিওর",
        "কেটোরোলাক দীর্ঘদিন ব্যবহার করা যায় না",
        "সেলেকক্সিব COX-2 selective",
        "NSAID → GI bleeding করতে পারে"
      ]
    }

  }
},

    // ================= WEAK OPIOID =================
{
  id:"weak_opioid",

  title:{
    en:"Weak Opioids",
    bn:"দুর্বল ওপিওয়েড"
  },

  content:{

    // ================= DRUGS =================
    drugs:{
      en:[
        "Codeine",
        "Tramadol",
        "Hydrocodone",
        "Dihydrocodeine",
        "Low-dose Oxycodone combinations"
      ],

      bn:[
        "কোডিন",
        "ট্রামাডল",
        "হাইড্রোকোডোন",
        "ডাইহাইড্রোকোডিন",
        "লো-ডোজ অক্সিকোডোন কম্বিনেশন"
      ]
    },

    // ================= CLASSIFICATION =================
    classification:{
      en:[
        "Codeine → natural opioid",
        "Tramadol → synthetic dual-action opioid",
        "Hydrocodone → semi-synthetic opioid"
      ],

      bn:[
        "কোডিন → প্রাকৃতিক ওপিওয়েড",
        "ট্রামাডল → synthetic dual-action opioid",
        "হাইড্রোকোডোন → semi-synthetic opioid"
      ]
    },

    // ================= MECHANISM =================
    mechanism:{
      en:"μ-opioid receptor activation + central pain suppression. Tramadol also inhibits serotonin and norepinephrine reuptake.",
      bn:"μ-opioid রিসেপ্টরে কাজ করে ব্যথা কমায়। ট্রামাডল serotonin ও norepinephrine reuptake কমায়।"
    },

    // ================= DOSE =================
    dose:{
      en:[
        "Codeine: 30–60 mg PO q4h",
        "Tramadol: 50–100 mg PO q4–6h",
        "Hydrocodone: 5 mg PO q4h",
        "Dihydrocodeine: 30 mg q4–6h"
      ],

      bn:[
        "কোডিন: ৩০–৬০ মিগ্রা প্রতি ৪ ঘন্টা",
        "ট্রামাডল: ৫০–১০০ মিগ্রা প্রতি ৪–৬ ঘন্টা",
        "হাইড্রোকোডোন: ৫ মিগ্রা প্রতি ৪ ঘন্টা",
        "ডাইহাইড্রোকোডিন: ৩০ মিগ্রা"
      ]
    },

    // ================= USE =================
    use:{
      en:[
        "Moderate pain",
        "Cancer pain (WHO step 2)",
        "Pain not controlled by NSAIDs",
        "Postoperative pain"
      ],

      bn:[
        "মাঝারি ব্যথা",
        "ক্যান্সারের ব্যথা",
        "NSAID এ না কমা ব্যথা",
        "অপারেশনের পর ব্যথা"
      ]
    },

    // ================= SIDE EFFECT =================
    side_effect:{
      en:[
        "Nausea",
        "Vomiting",
        "Constipation",
        "Sedation",
        "Dizziness",
        "Respiratory depression",
        "Dependence with long use",
        "Tramadol may cause seizures"
      ],

      bn:[
        "বমি ভাব",
        "বমি",
        "কোষ্ঠকাঠিন্য",
        "ঘুম ভাব",
        "মাথা ঘোরা",
        "শ্বাস কমে যাওয়া",
        "দীর্ঘদিনে আসক্তি",
        "ট্রামাডলে খিঁচুনি হতে পারে"
      ]
    },

    // ================= CONTRAINDICATION =================
    contraindication:{
      en:[
        "Severe respiratory disease",
        "Head injury",
        "Seizure disorder",
        "Severe liver failure",
        "Alcohol intoxication"
      ],

      bn:[
        "গুরুতর শ্বাসকষ্ট রোগ",
        "মাথায় আঘাত",
        "খিঁচুনি রোগ",
        "গুরুতর লিভার রোগ",
        "অ্যালকোহল নেশা"
      ]
    },

    // ================= DRUG INTERACTION =================
    drug_interaction:{
      en:[
        "Tramadol + SSRI → serotonin syndrome risk",
        "Alcohol increases sedation",
        "Benzodiazepines increase respiratory depression"
      ],

      bn:[
        "ট্রামাডল + SSRI → serotonin syndrome",
        "অ্যালকোহল ঘুম বাড়ায়",
        "benzodiazepine শ্বাস কমাতে পারে"
      ]
    },

    // ================= COMPARISON =================
    comparison:{
      en:[
        "Codeine = classic weak opioid",
        "Tramadol = dual mechanism drug",
        "Hydrocodone stronger than codeine",
        "Tramadol causes less respiratory depression"
      ],

      bn:[
        "কোডিন = ক্লাসিক দুর্বল ওপিওয়েড",
        "ট্রামাডল = dual mechanism",
        "হাইড্রোকোডোন কোডিনের চেয়ে শক্তিশালী",
        "ট্রামাডলে শ্বাস কমার ঝুঁকি কম"
      ]
    },

    // ================= MONITORING =================
    monitoring:{
      en:[
        "Monitor respiratory rate",
        "Check sedation",
        "Watch constipation",
        "Assess pain relief"
      ],

      bn:[
        "শ্বাস পর্যবেক্ষণ",
        "ঘুম ভাব দেখা",
        "কোষ্ঠকাঠিন্য দেখা",
        "ব্যথা কমছে কিনা দেখা"
      ]
    },

    // ================= CLINICAL PEARL =================
    clinical_pearl:{
      en:[
        "Always prescribe laxative with opioids",
        "Start with lowest dose",
        "Avoid sudden withdrawal",
        "Tramadol useful when NSAIDs fail"
      ],

      bn:[
        "ওপিওয়েডের সাথে laxative ভালো",
        "কম ডোজ থেকে শুরু",
        "হঠাৎ বন্ধ করা যাবে না",
        "NSAID এ কাজ না করলে ট্রামাডল উপকারী"
      ]
    },

    // ================= EXAM POINT =================
    exam_point:{
      en:[
        "Tramadol has dual mechanism",
        "Codeine commonly causes constipation",
        "Weak opioids = WHO step 2",
        "Tramadol may cause serotonin syndrome"
      ],

      bn:[
        "ট্রামাডলের dual action আছে",
        "কোডিনে কোষ্ঠকাঠিন্য হয়",
        "Weak opioid = WHO step 2",
        "ট্রামাডলে serotonin syndrome হতে পারে"
      ]
    },
    // ================= PHARMACOKINETICS =================
pharmacokinetics:{
  en:[
    "Codeine is converted to morphine in liver (CYP2D6)",
    "Tramadol has active metabolite",
    "Renal impairment increases toxicity risk",
    "Elderly patients clear opioids slowly"
  ],

  bn:[
    "কোডিন লিভারে morphine এ রূপান্তরিত হয়",
    "ট্রামাডলের active metabolite আছে",
    "কিডনি রোগে toxicity বাড়ে",
    "বয়স্ক রোগীতে opioid ধীরে বের হয়"
  ]
},


// ================= TOXICITY =================
toxicity:{
  en:[
    "Pinpoint pupil",
    "Respiratory depression",
    "Severe sedation",
    "Hypotension",
    "Coma in overdose"
  ],

  bn:[
    "চোখের মণি ছোট হয়ে যায়",
    "শ্বাস কমে যায়",
    "অতিরিক্ত ঘুম",
    "লো BP",
    "বেশি ডোজে কোমা"
  ]
},


// ================= ANTIDOTE =================
antidote:{
  en:[
    "Naloxone reverses opioid overdose",
    "Repeated doses may be needed",
    "Monitor respiration after reversal"
  ],

  bn:[
    "Naloxone opioid overdose কমায়",
    "বারবার ডোজ লাগতে পারে",
    "শ্বাস পর্যবেক্ষণ জরুরি"
  ]
},


// ================= WITHDRAWAL =================
withdrawal:{
  en:[
    "Sweating",
    "Anxiety",
    "Muscle pain",
    "Diarrhea",
    "Insomnia"
  ],

  bn:[
    "ঘাম",
    "উদ্বেগ",
    "মাংসপেশির ব্যথা",
    "ডায়রিয়া",
    "ঘুম না হওয়া"
  ]
},


// ================= SPECIAL POPULATION =================
special_population:{
  en:[
    "Use cautiously in elderly",
    "Avoid in severe COPD",
    "Pregnancy use requires caution",
    "Lower dose in renal disease"
  ],

  bn:[
    "বয়স্কদের সতর্কভাবে ব্যবহার",
    "গুরুতর COPD তে এড়িয়ে চলা",
    "গর্ভাবস্থায় সতর্কতা দরকার",
    "কিডনি রোগে কম ডোজ"
  ]
},


// ================= PEARLS =================
pearls:{
  en:[
    "Constipation prophylaxis is important",
    "Pain should be reassessed regularly",
    "Oral route preferred if possible",
    "WHO ladder guides escalation"
  ],

  bn:[
    "কোষ্ঠকাঠিন্য প্রতিরোধ জরুরি",
    "ব্যথা নিয়মিত মূল্যায়ন করা উচিত",
    "সম্ভব হলে oral route ভালো",
    "WHO ladder অনুযায়ী চিকিৎসা বাড়ানো হয়"
  ]
}
}
},

    // ================= STRONG OPIOID =================
    {
      id:"strong_opioid",
      title:{en:"Strong Opioids",bn:"শক্তিশালী ওপিওয়েড"},

      content:{
        drugs:{
          en:["Morphine","Fentanyl","Methadone","Hydromorphone","Oxycodone","Meperidine"],
          bn:["মরফিন","ফেন্টানিল","মেথাডোন","হাইড্রোমরফোন","অক্সিকোডোন","মেপেরিডিন"]
        },

        mechanism:{
          en:"Strong μ-receptor agonist → powerful analgesia",
          bn:"μ-receptor শক্তভাবে সক্রিয় করে"
        },

        dose:{
          en:[
            "Morphine: 5–10 mg PO q4h",
            "Hydromorphone: 1–2 mg q4h",
            "Methadone: 5–10 mg q6–8h",
            "Fentanyl: 25–100 µg/h patch (72h)"
          ],
          bn:[
            "মরফিন: ৫–১০ মিগ্রা",
            "হাইড্রোমরফোন: ১–২ মিগ্রা",
            "মেথাডোন: ৫–১০ মিগ্রা",
            "ফেন্টানিল: প্যাচ (৭২ ঘন্টা)"
          ]
        },

        use:{
          en:"Severe pain (cancer, trauma)",
          bn:"তীব্র ব্যথা"
        },

        side_effect:{
          en:"Respiratory depression, addiction, constipation",
          bn:"শ্বাস কমে যাওয়া, আসক্তি"
        },

        warning:{
          en:[
            "Methadone → long half-life (accumulation risk ⚠️)",
            "Meperidine → neurotoxicity (avoid ❌)"
          ],
          bn:[
            "মেথাডোন → শরীরে জমে যায় ⚠️",
            "মেপেরিডিন → বিষাক্ত ❌"
          ]
        },

        exam_point:{
          en:"Morphine = gold standard analgesic",
          bn:"মরফিন = সবচেয়ে গুরুত্বপূর্ণ"
        }
      }
    },

    // ================= ADJUVANT =================
    {
      id:"adjuvant",
      title:{en:"Adjuvant Analgesics",bn:"সহায়ক ওষুধ"},

      content:{
        drugs:{
          en:["Amitriptyline","Duloxetine","Gabapentin","Pregabalin"],
          bn:["অ্যামিট্রিপটাইলিন","ডুলোক্সেটিন","গ্যাবাপেন্টিন","প্রেগাবালিন"]
        },

        mechanism:{
          en:"Modulate nerve pain pathways",
          bn:"নার্ভের ব্যথা কমায়"
        },

        dose:{
          en:[
            "Amitriptyline: 25–150 mg/day",
            "Gabapentin: 300–1800 mg/day"
          ],
          bn:[
            "অ্যামিট্রিপটাইলিন: ২৫–১৫০ মিগ্রা",
            "গ্যাবাপেন্টিন: ৩০০–১৮০০ মিগ্রা"
          ]
        },

        use:{
          en:"Neuropathic pain",
          bn:"নার্ভের ব্যথা"
        },

        exam_point:{
          en:"Gabapentin = best for neuropathic pain",
          bn:"গ্যাবাপেন্টিন সবচেয়ে গুরুত্বপূর্ণ"
        }
      }
    }

  ],

  // ================= TREATMENT =================
  treatment_sequence:{
    title:{en:"WHO Pain Ladder",bn:"WHO ব্যথার ধাপ"},

    steps:{
      en:[
        "Step 1: NSAIDs / Paracetamol",
        "Step 2: Add weak opioid",
        "Step 3: Strong opioid",
        "Add adjuvant anytime"
      ],
      bn:[
        "ধাপ ১: NSAIDs",
        "ধাপ ২: দুর্বল ওপিওয়েড",
        "ধাপ ৩: শক্তিশালী ওপিওয়েড",
        "যেকোনো সময় সহায়ক"
      ]
    }
  },

  // ================= REVISION =================
  revision:{
    en:[
      "Morphine = gold standard",
      "Fentanyl patch = long acting",
      "Methadone → dangerous accumulation",
      "Meperidine → avoid",
      "Gabapentin → neuropathic pain"
    ],
    bn:[
      "মরফিন সবচেয়ে গুরুত্বপূর্ণ",
      "ফেন্টানিল প্যাচ দীর্ঘসময় কাজ করে",
      "মেথাডোন জমে যায়",
      "মেপেরিডিন ব্যবহার করা উচিত না",
      "গ্যাবাপেন্টিন নার্ভ ব্যথায়"
    ]
  },

  // ================= MCQ =================
  mcq:[

    {
      q:{en:"Gold standard analgesic?",bn:"সবচেয়ে গুরুত্বপূর্ণ ব্যথার ওষুধ?"},
      options:[
        {en:"Ibuprofen",bn:"আইবুপ্রোফেন"},
        {en:"Morphine",bn:"মরফিন"},
        {en:"Codeine",bn:"কোডিন"},
        {en:"Paracetamol",bn:"প্যারাসিটামল"}
      ],
      answer:"Morphine"
    },

    {
      q:{en:"Which opioid is avoided?",bn:"কোন ওপিওয়েড এড়িয়ে চলা উচিত?"},
      options:[
        {en:"Morphine",bn:"মরফিন"},
        {en:"Fentanyl",bn:"ফেন্টানিল"},
        {en:"Meperidine",bn:"মেপেরিডিন"},
        {en:"Codeine",bn:"কোডিন"}
      ],
      answer:"Meperidine"
    },

    {
      q:{en:"Best drug for neuropathic pain?",bn:"নার্ভের ব্যথায় সেরা?"},
      options:[
        {en:"Morphine",bn:"মরফিন"},
        {en:"Gabapentin",bn:"গ্যাবাপেন্টিন"},
        {en:"Ibuprofen",bn:"আইবুপ্রোফেন"},
        {en:"Codeine",bn:"কোডিন"}
      ],
      answer:"Gabapentin"
    }

  ]

};