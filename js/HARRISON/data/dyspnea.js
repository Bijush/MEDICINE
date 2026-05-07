export const DATA = {

  topic:{
    en:"Dyspnea Management",
    bn:"শ্বাসকষ্টের চিকিৎসা"
  },

  sections:[

    // ================= WEAK OPIOIDS =================
    {
      id:"weak_opioids",
      title:{en:"Weak Opioids",bn:"দুর্বল ওপিওয়েড"},

      content:{
        drugs:{
          en:["Codeine","Hydrocodone"],
          bn:["কোডিন","হাইড্রোকোডোন"]
        },

        mechanism:{
          en:"Reduce perception of dyspnea via CNS",
          bn:"CNS এর মাধ্যমে শ্বাসকষ্টের অনুভূতি কমায়"
        },

        dose:{
          en:"Codeine: 30 mg PO q4h",
          bn:"কোডিন: ৩০ মিগ্রা প্রতি ৪ ঘন্টায়"
        },

        use:{
          en:"Mild dyspnea (opioid-naive)",
          bn:"হালকা শ্বাসকষ্ট (নতুন রোগী)"
        },

        exam_point:{
          en:"Start low dose in opioid-naive patients",
          bn:"নতুন রোগীতে কম ডোজ থেকে শুরু"
        }
      }
    },

    // ================= STRONG OPIOIDS =================
    {
      id:"strong_opioids",
      title:{en:"Strong Opioids",bn:"শক্তিশালী ওপিওয়েড"},

      content:{
        drugs:{
          en:["Morphine","Oxycodone","Hydromorphone"],
          bn:["মরফিন","অক্সিকোডোন","হাইড্রোমরফোন"]
        },

        mechanism:{
          en:"Reduce dyspnea perception and respiratory drive",
          bn:"শ্বাসকষ্টের অনুভূতি ও শ্বাসপ্রশ্বাস কমায়"
        },

        dose:{
          en:"Morphine: 5–10 mg PO q4h",
          bn:"মরফিন: ৫–১০ মিগ্রা প্রতি ৪ ঘন্টায়"
        },

        use:{
          en:"Moderate–severe dyspnea",
          bn:"মাঝারি–তীব্র শ্বাসকষ্ট"
        },

        side_effect:{
          en:"Respiratory depression, sedation",
          bn:"শ্বাস কমে যাওয়া, ঘুম ভাব"
        },

        exam_point:{
          en:"First-line for severe dyspnea",
          bn:"তীব্র শ্বাসকষ্টে প্রথম পছন্দ"
        }
      }
    },

    // ================= ANXIOLYTICS =================
    {
      id:"anxiolytics",
      title:{en:"Anxiolytics",bn:"উদ্বেগ কমানোর ওষুধ"},

      content:{
        drugs:{
          en:["Lorazepam","Clonazepam","Midazolam"],
          bn:["লোরাজেপাম","ক্লোনাজেপাম","মিডাজোলাম"]
        },

        mechanism:{
          en:"Reduce anxiety associated with dyspnea",
          bn:"শ্বাসকষ্টজনিত উদ্বেগ কমায়"
        },

        dose:{
          en:"Lorazepam: 0.5–2 mg PO/SL/IV",
          bn:"লোরাজেপাম: ০.৫–২ মিগ্রা"
        },

        use:{
          en:"Dyspnea with anxiety",
          bn:"উদ্বেগ সহ শ্বাসকষ্ট"
        },

        exam_point:{
          en:"Adjunct therapy, not primary",
          bn:"সহায়ক চিকিৎসা, প্রধান নয়"
        }
      }
    }

  ],

  // ================= TREATMENT =================
  treatment_sequence:{
    title:{en:"Treatment Approach",bn:"চিকিৎসার ধাপ"},

    steps:{
      en:[
        "Assess severity",
        "Start weak opioid",
        "Escalate to strong opioid",
        "Add anxiolytic if needed"
      ],

      bn:[
        "তীব্রতা নির্ণয়",
        "দুর্বল ওপিওয়েড শুরু",
        "শক্তিশালী ওপিওয়েড",
        "প্রয়োজনে anxiolytic"
      ]
    }
  },

  // ================= REVISION =================
  revision:{
    en:[
      "Morphine → best for severe dyspnea",
      "Codeine → mild cases",
      "Anxiolytics → anxiety control",
      "Opioids reduce dyspnea perception"
    ],

    bn:[
      "মরফিন → তীব্র শ্বাসকষ্টে সেরা",
      "কোডিন → হালকা ক্ষেত্রে",
      "Anxiolytic → উদ্বেগ কমায়",
      "ওপিওয়েড → শ্বাসকষ্ট অনুভূতি কমায়"
    ]
  },

  // ================= MCQ =================
  mcq:[

// 1
{
q:{
  en:"Best drug for severe dyspnea?",
  bn:"তীব্র শ্বাসকষ্টে সেরা ওষুধ?"
},
options:[
  {en:"Codeine",bn:"কোডিন"},
  {en:"Morphine",bn:"মরফিন"},
  {en:"Lorazepam",bn:"লোরাজেপাম"},
  {en:"Docusate",bn:"ডোকুসেট"}
],
answer:"Morphine",
explanation:{
  en:"Morphine is first-line for severe dyspnea.",
  bn:"তীব্র শ্বাসকষ্টে মরফিন প্রথম পছন্দ।"
}
},

// 2
{
q:{
  en:"Weak opioid example?",
  bn:"দুর্বল ওপিওয়েড উদাহরণ?"
},
options:[
  {en:"Morphine",bn:"মরফিন"},
  {en:"Codeine",bn:"কোডিন"},
  {en:"Midazolam",bn:"মিডাজোলাম"},
  {en:"Enema",bn:"এনিমা"}
],
answer:"Codeine"
},

// 3
{
q:{
  en:"Anxiolytics role?",
  bn:"Anxiolytics এর কাজ কী?"
},
options:[
  {en:"Increase breathing",bn:"শ্বাস বাড়ায়"},
  {en:"Reduce anxiety",bn:"উদ্বেগ কমায়"},
  {en:"Increase oxygen",bn:"অক্সিজেন বাড়ায়"},
  {en:"Cure disease",bn:"রোগ সারায়"}
],
answer:"Reduce anxiety"
},

// 4
{
q:{
  en:"Strong opioid example?",
  bn:"শক্তিশালী ওপিওয়েড উদাহরণ?"
},
options:[
  {en:"Codeine",bn:"কোডিন"},
  {en:"Morphine",bn:"মরফিন"},
  {en:"Docusate",bn:"ডোকুসেট"},
  {en:"Lactulose",bn:"ল্যাকটুলোজ"}
],
answer:"Morphine"
},

// 5
{
q:{
  en:"Main mechanism of opioids in dyspnea?",
  bn:"ডাইস্পনিয়ায় ওপিওয়েড কীভাবে কাজ করে?"
},
options:[
  {en:"Increase oxygen",bn:"অক্সিজেন বাড়ায়"},
  {en:"Reduce perception",bn:"অনুভূতি কমায়"},
  {en:"Kill bacteria",bn:"ব্যাকটেরিয়া মারে"},
  {en:"Increase BP",bn:"BP বাড়ায়"}
],
answer:"Reduce perception"
},

// 6
{
q:{
  en:"Codeine dose for dyspnea?",
  bn:"ডাইস্পনিয়ায় কোডিনের ডোজ কত?"
},
options:[
  {en:"5 mg",bn:"৫ মিগ্রা"},
  {en:"30 mg",bn:"৩০ মিগ্রা"},
  {en:"100 mg",bn:"১০০ মিগ্রা"},
  {en:"1 mg",bn:"১ মিগ্রা"}
],
answer:"30 mg"
},

// 7
{
q:{
  en:"Morphine dosing interval?",
  bn:"মরফিন কত সময় পর পর দেওয়া হয়?"
},
options:[
  {en:"q1h",bn:"প্রতি ১ ঘন্টা"},
  {en:"q4h",bn:"প্রতি ৪ ঘন্টা"},
  {en:"q12h",bn:"প্রতি ১২ ঘন্টা"},
  {en:"q24h",bn:"প্রতি ২৪ ঘন্টা"}
],
answer:"q4h"
},

// 8
{
q:{
  en:"Which reduces anxiety in dyspnea?",
  bn:"ডাইস্পনিয়ায় উদ্বেগ কমায় কোনটি?"
},
options:[
  {en:"Morphine",bn:"মরফিন"},
  {en:"Lorazepam",bn:"লোরাজেপাম"},
  {en:"Codeine",bn:"কোডিন"},
  {en:"Oxygen",bn:"অক্সিজেন"}
],
answer:"Lorazepam"
},

// 9
{
q:{
  en:"Hydromorphone belongs to?",
  bn:"হাইড্রোমরফোন কোন গ্রুপে পড়ে?"
},
options:[
  {en:"Weak opioid",bn:"দুর্বল ওপিওয়েড"},
  {en:"Strong opioid",bn:"শক্তিশালী ওপিওয়েড"},
  {en:"Anxiolytic",bn:"অ্যানজিওলাইটিক"},
  {en:"Antibiotic",bn:"অ্যান্টিবায়োটিক"}
],
answer:"Strong opioid"
},

// 10
{
q:{
  en:"Which is NOT opioid?",
  bn:"নিচের কোনটি ওপিওয়েড নয়?"
},
options:[
  {en:"Morphine",bn:"মরফিন"},
  {en:"Codeine",bn:"কোডিন"},
  {en:"Lorazepam",bn:"লোরাজেপাম"},
  {en:"Hydrocodone",bn:"হাইড্রোকোডোন"}
],
answer:"Lorazepam"
},

// 11
{
q:{
  en:"Primary drug class for dyspnea?",
  bn:"ডাইস্পনিয়ায় প্রধান ওষুধ কোনটি?"
},
options:[
  {en:"Antibiotics",bn:"অ্যান্টিবায়োটিক"},
  {en:"Opioids",bn:"ওপিওয়েড"},
  {en:"Steroids",bn:"স্টেরয়েড"},
  {en:"Diuretics",bn:"ডাইউরেটিক"}
],
answer:"Opioids"
},

// 12
{
q:{
  en:"Lorazepam belongs to?",
  bn:"লোরাজেপাম কোন গ্রুপে পড়ে?"
},
options:[
  {en:"Opioid",bn:"ওপিওয়েড"},
  {en:"Anxiolytic",bn:"অ্যানজিওলাইটিক"},
  {en:"Antibiotic",bn:"অ্যান্টিবায়োটিক"},
  {en:"Steroid",bn:"স্টেরয়েড"}
],
answer:"Anxiolytic"
},

// 13
{
q:{
  en:"Which opioid is strongest?",
  bn:"সবচেয়ে শক্তিশালী ওপিওয়েড কোনটি?"
},
options:[
  {en:"Codeine",bn:"কোডিন"},
  {en:"Morphine",bn:"মরফিন"},
  {en:"Docusate",bn:"ডোকুসেট"},
  {en:"Lactulose",bn:"ল্যাকটুলোজ"}
],
answer:"Morphine"
},

// 14
{
q:{
  en:"Anxiolytics are used when?",
  bn:"Anxiolytics কখন ব্যবহার হয়?"
},
options:[
  {en:"Infection",bn:"সংক্রমণ"},
  {en:"Anxiety present",bn:"উদ্বেগ থাকলে"},
  {en:"Pain only",bn:"শুধু ব্যথা"},
  {en:"Fever",bn:"জ্বর"}
],
answer:"Anxiety present"
},

// 15
{
q:{
  en:"Opioids reduce what?",
  bn:"ওপিওয়েড কী কমায়?"
},
options:[
  {en:"Blood sugar",bn:"রক্তে সুগার"},
  {en:"Dyspnea perception",bn:"শ্বাসকষ্টের অনুভূতি"},
  {en:"Temperature",bn:"তাপমাত্রা"},
  {en:"Weight",bn:"ওজন"}
],
answer:"Dyspnea perception"
},

// 16
{
q:{
  en:"Hydrocodone is?",
  bn:"হাইড্রোকোডোন কী?"
},
options:[
  {en:"Weak opioid",bn:"দুর্বল ওপিওয়েড"},
  {en:"Strong opioid",bn:"শক্তিশালী ওপিওয়েড"},
  {en:"Anxiolytic",bn:"অ্যানজিওলাইটিক"},
  {en:"Antacid",bn:"অ্যান্টাসিড"}
],
answer:"Weak opioid"
},

// 17
{
q:{
  en:"Clonazepam is used for?",
  bn:"ক্লোনাজেপাম কী জন্য ব্যবহার হয়?"
},
options:[
  {en:"Pain",bn:"ব্যথা"},
  {en:"Anxiety",bn:"উদ্বেগ"},
  {en:"Infection",bn:"সংক্রমণ"},
  {en:"Constipation",bn:"কোষ্ঠকাঠিন্য"}
],
answer:"Anxiety"
},

// 18
{
q:{
  en:"Midazolam route?",
  bn:"মিডাজোলাম কোন রুটে দেওয়া হয়?"
},
options:[
  {en:"Oral",bn:"মুখে"},
  {en:"IV",bn:"IV"},
  {en:"Topical",bn:"বাহ্যিক"},
  {en:"Inhalation",bn:"শ্বাসের মাধ্যমে"}
],
answer:"IV"
},

// 19
{
q:{
  en:"Opioid side effect?",
  bn:"ওপিওয়েডের পার্শ্বপ্রতিক্রিয়া?"
},
options:[
  {en:"Hair growth",bn:"চুল বাড়া"},
  {en:"Respiratory depression",bn:"শ্বাস কমে যাওয়া"},
  {en:"Vision improvement",bn:"দৃষ্টি ভালো"},
  {en:"Weight gain",bn:"ওজন বাড়া"}
],
answer:"Respiratory depression"
},

// 20
{
q:{
  en:"Treatment sequence starts with?",
  bn:"চিকিৎসা শুরু হয় কোনটি দিয়ে?"
},
options:[
  {en:"Strong opioid",bn:"শক্তিশালী ওপিওয়েড"},
  {en:"Weak opioid",bn:"দুর্বল ওপিওয়েড"},
  {en:"Anxiolytic",bn:"অ্যানজিওলাইটিক"},
  {en:"Surgery",bn:"অপারেশন"}
],
answer:"Weak opioid"
}

]

};