export const DATA = {

  topic:{
    en:"Delirium Management",
    bn:"ডেলিরিয়াম ব্যবস্থাপনা"
  },

  sections:[

    // ================= NEUROLEPTICS =================
    {
      id:"neuroleptics",
      title:{en:"Typical Neuroleptics",bn:"টিপিক্যাল নিউরোলেপ্টিক"},

      content:{
        drugs:{
          en:["Haloperidol","Thioridazine","Chlorpromazine"],
          bn:["হ্যালোপেরিডল","থিওরিডাজিন","ক্লোরপ্রোমাজিন"]
        },

        mechanism:{
          en:"D2 receptor blockade → reduces agitation, hallucination, delirium symptoms",
          bn:"D2 রিসেপ্টর ব্লক করে → উত্তেজনা, হ্যালুসিনেশন ও ডেলিরিয়াম কমায়"
        },

        dose:{
          en:"Haloperidol: 0.5–5 mg PO/IV/IM q2–12h (elderly: start low dose)",
          bn:"হ্যালোপেরিডল: ০.৫–৫ মিগ্রা PO/IV/IM প্রতি ২–১২ ঘন্টা (বয়স্কদের কম ডোজ)"
        },

        onset:{
          en:"Rapid onset (especially IV/IM)",
          bn:"দ্রুত কাজ শুরু করে (বিশেষ করে IV/IM)"
        },

        use:{
          en:"First-line drug for acute delirium with agitation",
          bn:"উত্তেজনাযুক্ত ডেলিরিয়ামে প্রথম পছন্দ"
        },

        side_effect:{
          en:"Extrapyramidal symptoms (rigidity, tremor), QT prolongation, torsades risk",
          bn:"মুভমেন্ট সমস্যা, QT prolongation, হৃদরোগ ঝুঁকি"
        },

        contraindication:{
          en:"Parkinson disease, prolonged QT interval",
          bn:"পার্কিনসন রোগ, QT বেশি থাকলে ব্যবহার নিষেধ"
        },

        exam_point:{
          en:"Haloperidol = gold standard for delirium",
          bn:"হ্যালোপেরিডল = ডেলিরিয়ামের সবচেয়ে গুরুত্বপূর্ণ ওষুধ"
        }
      }
    },

    // ================= ATYPICAL =================
    {
      id:"atypical",
      title:{en:"Atypical Neuroleptics",bn:"এটাইপিক্যাল নিউরোলেপ্টিক"},

      content:{
        drugs:{
          en:["Olanzapine","Risperidone","Quetiapine"],
          bn:["ওলানজাপিন","রিসপেরিডন","কুয়েটিয়াপিন"]
        },

        mechanism:{
          en:"Block serotonin (5-HT2) + dopamine → fewer motor side effects",
          bn:"সেরোটোনিন + ডোপামিন ব্লক করে → কম পার্শ্বপ্রতিক্রিয়া"
        },

        dose:{
          en:"Risperidone: 1–3 mg PO q12h",
          bn:"রিসপেরিডন: ১–৩ মিগ্রা প্রতি ১২ ঘন্টা"
        },

        onset:{
          en:"Moderate onset",
          bn:"মাঝারি গতিতে কাজ করে"
        },

        use:{
          en:"Alternative when haloperidol not tolerated",
          bn:"হ্যালোপেরিডল সহ্য না হলে ব্যবহার"
        },

        advantage:{
          en:"Less extrapyramidal symptoms",
          bn:"কম মুভমেন্ট সমস্যা"
        },

        side_effect:{
          en:"Sedation, metabolic syndrome (weight gain, diabetes)",
          bn:"ঘুম ভাব, ওজন বাড়া, ডায়াবেটিস ঝুঁকি"
        },

        exam_point:{
          en:"Preferred in elderly / Parkinson patients",
          bn:"বয়স্ক বা পার্কিনসনে বেশি নিরাপদ"
        }
      }
    },

    // ================= ANXIOLYTICS =================
    {
      id:"anxiolytics",
      title:{en:"Benzodiazepines (Anxiolytics)",bn:"বেনজোডায়াজেপিন"},

      content:{
        drugs:{
          en:["Lorazepam","Midazolam","Diazepam"],
          bn:["লোরাজেপাম","মিডাজোলাম","ডায়াজেপাম"]
        },

        mechanism:{
          en:"Enhance GABA → sedation, anxiolysis",
          bn:"GABA বাড়িয়ে সেডেশন ও উদ্বেগ কমায়"
        },

        dose:{
          en:"Lorazepam: 0.5–2 mg PO/IV/SL q1–4h",
          bn:"লোরাজেপাম: ০.৫–২ মিগ্রা"
        },

        onset:{
          en:"Fast (IV fastest)",
          bn:"দ্রুত কাজ করে"
        },

        use:{
          en:"ONLY for alcohol withdrawal delirium (delirium tremens)",
          bn:"শুধু অ্যালকোহল উইথড্রয়াল ডেলিরিয়ামে ব্যবহার"
        },

        danger:{
          en:"May worsen confusion in non-withdrawal delirium",
          bn:"সাধারণ ডেলিরিয়ামে বিভ্রান্তি বাড়াতে পারে"
        },

        exam_point:{
          en:"Benzodiazepines NOT first-line (except withdrawal)",
          bn:"সাধারণ ডেলিরিয়ামে প্রথম পছন্দ নয়"
        }
      }
    },

    // ================= SEDATION =================
    {
      id:"sedation",
      title:{en:"Sedation / ICU Drugs",bn:"সেডেশন / ICU ওষুধ"},

      content:{
        drugs:{
          en:["Propofol","Midazolam infusion"],
          bn:["প্রপোফল","মিডাজোলাম ইনফিউশন"]
        },

        mechanism:{
          en:"CNS depression → deep sedation",
          bn:"CNS কমিয়ে গভীর সেডেশন দেয়"
        },

        dose:{
          en:"Propofol: 0.3–2 mg/kg/h IV infusion",
          bn:"প্রপোফল: ০.৩–২ mg/kg/h"
        },

        use:{
          en:"Severe refractory delirium (ICU patients)",
          bn:"গুরুতর নিয়ন্ত্রণহীন ডেলিরিয়াম"
        },

        risk:{
          en:"Respiratory depression, hypotension",
          bn:"শ্বাস কমে যাওয়া, BP কমে যাওয়া"
        },

        exam_point:{
          en:"Used only in ICU with monitoring",
          bn:"শুধু ICU তে ব্যবহার করা হয়"
        }
      }
    }

  ],

  // ================= TREATMENT =================
  treatment_sequence:{
    title:{en:"Treatment Approach",bn:"চিকিৎসার ধাপ"},

    steps:{
      en:[
        "Identify & treat underlying cause (infection, drugs, metabolic)",
        "Start Haloperidol (low dose)",
        "Use atypical if EPS risk",
        "Use benzodiazepine ONLY in alcohol withdrawal",
        "Use ICU sedation if refractory"
      ],

      bn:[
        "কারণ নির্ণয় ও চিকিৎসা (সংক্রমণ, ওষুধ, মেটাবলিক)",
        "হ্যালোপেরিডল শুরু",
        "প্রয়োজনে এটিপিক্যাল",
        "শুধু উইথড্রয়ালে benzodiazepine",
        "গুরুতর হলে ICU সেডেশন"
      ]
    }
  },

  // ================= REVISION =================
  revision:{
    en:[
      "Haloperidol = first-line drug",
      "Atypical = safer alternative",
      "Benzodiazepine → only withdrawal",
      "Propofol → ICU severe cases",
      "Always treat underlying cause"
    ],

    bn:[
      "হ্যালোপেরিডল = প্রথম পছন্দ",
      "এটাইপিক্যাল = নিরাপদ বিকল্প",
      "benzodiazepine → শুধু withdrawal",
      "প্রপোফল → ICU তে গুরুতর ক্ষেত্রে",
      "মূল কারণ চিকিৎসা করা জরুরি"
    ]
  },

  // ================= MCQ =================
  mcq:[

    {
      q:{
        en:"First-line drug for delirium?",
        bn:"ডেলিরিয়ামের প্রথম পছন্দের ওষুধ?"
      },
      options:[
        {en:"Lorazepam",bn:"লোরাজেপাম"},
        {en:"Haloperidol",bn:"হ্যালোপেরিডল"},
        {en:"Propofol",bn:"প্রপোফল"},
        {en:"Morphine",bn:"মরফিন"}
      ],
      answer:"Haloperidol"
    },

    {
      q:{
        en:"When are benzodiazepines used?",
        bn:"benzodiazepine কখন ব্যবহার হয়?"
      },
      options:[
        {en:"Routine delirium",bn:"সাধারণ ডেলিরিয়াম"},
        {en:"Alcohol withdrawal",bn:"অ্যালকোহল উইথড্রয়াল"},
        {en:"Pain",bn:"ব্যথা"},
        {en:"Fever",bn:"জ্বর"}
      ],
      answer:"Alcohol withdrawal"
    },

    {
      q:{
        en:"Atypical antipsychotic example?",
        bn:"এটাইপিক্যাল ওষুধ উদাহরণ?"
      },
      options:[
        {en:"Haloperidol",bn:"হ্যালোপেরিডল"},
        {en:"Olanzapine",bn:"ওলানজাপিন"},
        {en:"Morphine",bn:"মরফিন"},
        {en:"Codeine",bn:"কোডিন"}
      ],
      answer:"Olanzapine"
    }

  ]

};