export const DATA = {
  topic:{
    en:"Constipation Management",
    bn:"কোষ্ঠকাঠিন্য ব্যবস্থাপনা"
  },

  sections:[

    // ================= STIMULANT =================
    {
      id:"stimulant",
      title:{en:"Stimulant Laxatives",bn:"উত্তেজক ল্যাক্সেটিভ"},

      content:{
        drugs:{
          en:["Senna","Bisacodyl"],
          bn:["সেনা","বিসাকোডিল"]
        },

        mechanism:{
          en:"Directly stimulate enteric nerves → increase peristalsis",
          bn:"আন্ত্রিক স্নায়ুকে উত্তেজিত করে → পেরিস্টালসিস বাড়ায়"
        },

        onset:{
          en:"6–12 hr (oral), 30–60 min (suppository)",
          bn:"৬–১২ ঘন্টা (মুখে), ৩০–৬০ মিনিট (সাপোজিটরি)"
        },

        use:{
          en:"Acute constipation / rapid relief",
          bn:"হঠাৎ কোষ্ঠকাঠিন্য / দ্রুত কাজের জন্য"
        },

        side_effect:{
          en:"Abdominal cramps, dependency (long-term)",
          bn:"পেট ব্যথা, দীর্ঘদিনে অভ্যাস হয়ে যায়"
        },

        exam_point:{
          en:"Not preferred for long-term use",
          bn:"দীর্ঘদিন ব্যবহার করা উচিত নয়"
        }
      }
    },

    // ================= OSMOTIC =================
    {
      id:"osmotic",
      title:{en:"Osmotic Laxatives",bn:"ওসমোটিক ল্যাক্সেটিভ"},

      content:{
        drugs:{
          en:["Lactulose","Magnesium hydroxide","Magnesium citrate"],
          bn:["ল্যাকটুলোজ","ম্যাগনেসিয়াম হাইড্রক্সাইড","ম্যাগনেসিয়াম সাইট্রেট"]
        },

        mechanism:{
          en:"Draw water into intestine → soften stool",
          bn:"পানি টেনে এনে মল নরম করে"
        },

        onset:{
          en:"6–24 hours",
          bn:"৬–২৪ ঘন্টা"
        },

        use:{
          en:"Chronic constipation / elderly",
          bn:"দীর্ঘদিনের কোষ্ঠকাঠিন্য / বয়স্কদের জন্য ভালো"
        },

        side_effect:{
          en:"Bloating, flatulence, diarrhea",
          bn:"পেট ফাঁপা, গ্যাস, ডায়রিয়া"
        },

        exam_point:{
          en:"Safest for long-term use",
          bn:"দীর্ঘদিন ব্যবহারের জন্য সবচেয়ে নিরাপদ"
        }
      }
    },

    // ================= STOOL SOFTENER =================
    {
      id:"softener",
      title:{en:"Stool Softeners",bn:"মল নরমকারী"},

      content:{
        drugs:{
          en:["Docusate sodium"],
          bn:["ডোকুসেট"]
        },

        mechanism:{
          en:"Increase water penetration into stool",
          bn:"মলের মধ্যে পানি ঢুকতে সাহায্য করে"
        },

        onset:{
          en:"1–3 days",
          bn:"১–৩ দিন"
        },

        use:{
          en:"Post-surgery / avoid straining",
          bn:"অপারেশনের পর / চাপ এড়াতে"
        },

        exam_point:{
          en:"Mild action (preventive use)",
          bn:"হালকা কাজ করে (প্রিভেনশন)"
        }
      }
    },

    // ================= RECTAL =================
    {
      id:"rectal",
      title:{en:"Rectal Agents",bn:"পায়ুপথে ব্যবহৃত"},

      content:{
        drugs:{
          en:["Bisacodyl suppository","Sodium phosphate enema"],
          bn:["বিসাকোডিল সাপোজিটরি","সোডিয়াম ফসফেট এনিমা"]
        },

        mechanism:{
          en:"Direct rectal stimulation",
          bn:"পায়ুপথে সরাসরি উদ্দীপনা দেয়"
        },

        onset:{
          en:"Minutes to 1 hour",
          bn:"কয়েক মিনিট–১ ঘন্টা"
        },

        use:{
          en:"Severe constipation / emergency",
          bn:"গুরুতর কোষ্ঠকাঠিন্য / জরুরি"
        },

        exam_point:{
          en:"Fastest acting method",
          bn:"সবচেয়ে দ্রুত কাজ করে"
        }
      }
    }
  ],

  // ================= TREATMENT =================
  treatment_sequence:{
    title:{en:"Treatment Sequence",bn:"চিকিৎসার ধাপ"},

    steps:{
      en:[
        "Fiber + Water",
        "Stool softener",
        "Osmotic laxative",
        "Stimulant laxative",
        "Enema"
      ],

      bn:[
        "ফাইবার + পানি",
        "সফটেনার",
        "ওসমোটিক",
        "স্টিমুল্যান্ট",
        "এনিমা"
      ]
    }
  },

  // ================= QUICK REVISION =================
  revision:{
    en:[
      "Lactulose → long-term safest",
      "Bisacodyl → fastest acting",
      "Docusate → mild softener",
      "Senna → dependency risk"
    ],

    bn:[
      "ল্যাকটুলোজ → দীর্ঘদিন নিরাপদ",
      "বিসাকোডিল → দ্রুত কাজ করে",
      "ডোকুসেট → হালকা",
      "সেনা → অভ্যাস তৈরি করে"
    ]
  },
  mcq:[

{
q:{
  en:"Safest laxative for long-term use?",
  bn:"দীর্ঘদিন ব্যবহারের জন্য নিরাপদ কোনটি?"
},
options:[
  {en:"Senna",bn:"সেনা"},
  {en:"Bisacodyl",bn:"বিসাকোডিল"},
  {en:"Lactulose",bn:"ল্যাকটুলোজ"},
  {en:"Enema",bn:"এনিমা"}
],
answer:"Lactulose",
explanation:{
  en:"Lactulose is osmotic and safe for long-term use.",
  bn:"ল্যাকটুলোজ ওসমোটিক এবং দীর্ঘদিন নিরাপদ।"
}
},

{
q:{
  en:"Fastest acting method?",
  bn:"সবচেয়ে দ্রুত কাজ করে কোনটি?"
},
options:[
  {en:"Lactulose",bn:"ল্যাকটুলোজ"},
  {en:"Docusate",bn:"ডোকুসেট"},
  {en:"Bisacodyl suppository",bn:"বিসাকোডিল সাপোজিটরি"},
  {en:"Senna",bn:"সেনা"}
],
answer:"Bisacodyl suppository",
explanation:{
  en:"Rectal route acts within minutes.",
  bn:"রেক্টাল রুট কয়েক মিনিটেই কাজ করে।"
}
},

{
q:{
  en:"Which causes dependency?",
  bn:"অভ্যাস তৈরি করে কোনটি?"
},
options:[
  {en:"Lactulose",bn:"ল্যাকটুলোজ"},
  {en:"Senna",bn:"সেনা"},
  {en:"Docusate",bn:"ডোকুসেট"},
  {en:"Fiber",bn:"ফাইবার"}
],
answer:"Senna",
explanation:{
  en:"Stimulant laxatives can cause dependency.",
  bn:"স্টিমুল্যান্ট ল্যাক্সেটিভ অভ্যাস তৈরি করে।"
}
},

{
q:{
  en:"Mechanism of stimulant laxatives?",
  bn:"স্টিমুল্যান্ট ল্যাক্সেটিভ কীভাবে কাজ করে?"
},
options:[
  {en:"Water retention",bn:"পানি ধরে রাখে"},
  {en:"Nerve stimulation",bn:"নার্ভ উদ্দীপনা"},
  {en:"Lubrication",bn:"লুব্রিকেশন"},
  {en:"Bulk formation",bn:"বাল্ক তৈরি"}
],
answer:"Nerve stimulation",
explanation:{
  en:"They stimulate enteric nerves to increase peristalsis.",
  bn:"এগুলো নার্ভ উদ্দীপনা দিয়ে পেরিস্টালসিস বাড়ায়।"
}
},

{
q:{
  en:"Best for chronic constipation?",
  bn:"দীর্ঘদিনের কোষ্ঠকাঠিন্যের জন্য সেরা?"
},
options:[
  {en:"Senna",bn:"সেনা"},
  {en:"Bisacodyl",bn:"বিসাকোডিল"},
  {en:"Lactulose",bn:"ল্যাকটুলোজ"},
  {en:"Enema",bn:"এনিমা"}
],
answer:"Lactulose",
explanation:{
  en:"Osmotic agents are preferred for chronic use.",
  bn:"দীর্ঘদিনে ওসমোটিক ওষুধ বেশি উপযোগী।"
}
},

{
q:{
  en:"Docusate is what type of drug?",
  bn:"ডোকুসেট কোন ধরনের ওষুধ?"
},
options:[
  {en:"Stimulant",bn:"স্টিমুল্যান্ট"},
  {en:"Osmotic",bn:"ওসমোটিক"},
  {en:"Softener",bn:"সফটেনার"},
  {en:"Enema",bn:"এনিমা"}
],
answer:"Softener",
explanation:{
  en:"It softens stool by allowing water penetration.",
  bn:"এটি মল নরম করে।"
}
},

{
q:{
  en:"Onset of stool softener?",
  bn:"স্টুল সফটেনারের কাজ শুরু হতে কত সময় লাগে?"
},
options:[
  {en:"Minutes",bn:"মিনিট"},
  {en:"1–3 days",bn:"১–৩ দিন"},
  {en:"6 hours",bn:"৬ ঘন্টা"},
  {en:"Instant",bn:"তাৎক্ষণিক"}
],
answer:"1–3 days",
explanation:{
  en:"Slow acting but safe.",
  bn:"ধীরে কাজ করে কিন্তু নিরাপদ।"
}
},

{
q:{
  en:"Which acts by retaining water?",
  bn:"কোনটি পানি ধরে রেখে কাজ করে?"
},
options:[
  {en:"Senna",bn:"সেনা"},
  {en:"Bisacodyl",bn:"বিসাকোডিল"},
  {en:"Lactulose",bn:"ল্যাকটুলোজ"},
  {en:"Docusate",bn:"ডোকুসেট"}
],
answer:"Lactulose",
explanation:{
  en:"Osmotic laxatives retain water in bowel.",
  bn:"ওসমোটিক ওষুধ পানি ধরে রাখে।"
}
},

{
q:{
  en:"Side effect of osmotic laxatives?",
  bn:"ওসমোটিক ল্যাক্সেটিভের পার্শ্বপ্রতিক্রিয়া?"
},
options:[
  {en:"Constipation",bn:"কোষ্ঠকাঠিন্য"},
  {en:"Bloating",bn:"পেট ফাঁপা"},
  {en:"Hair loss",bn:"চুল পড়া"},
  {en:"Fever",bn:"জ্বর"}
],
answer:"Bloating",
explanation:{
  en:"Gas formation causes bloating.",
  bn:"গ্যাসের কারণে পেট ফাঁপা হয়।"
}
},

{
q:{
  en:"Which is used post-surgery?",
  bn:"অপারেশনের পর কোনটি ব্যবহার করা হয়?"
},
options:[
  {en:"Senna",bn:"সেনা"},
  {en:"Bisacodyl",bn:"বিসাকোডিল"},
  {en:"Docusate",bn:"ডোকুসেট"},
  {en:"Enema",bn:"এনিমা"}
],
answer:"Docusate",
explanation:{
  en:"Avoid straining after surgery.",
  bn:"অপারেশনের পর চাপ দেওয়া এড়াতে হয়।"
}
},

{
q:{
  en:"Rectal agents act how?",
  bn:"রেক্টাল এজেন্ট কীভাবে কাজ করে?"
},
options:[
  {en:"Systemic effect",bn:"সিস্টেমিক"},
  {en:"Local stimulation",bn:"লোকাল উদ্দীপনা"},
  {en:"Hormonal",bn:"হরমোনাল"},
  {en:"Slow action",bn:"ধীরে"}
],
answer:"Local stimulation",
explanation:{
  en:"They act directly in rectum.",
  bn:"পায়ুপথে সরাসরি কাজ করে।"
}
},

{
q:{
  en:"Which is fastest route?",
  bn:"সবচেয়ে দ্রুত কাজ করে কোন route?"
},
options:[
  {en:"Oral",bn:"মুখে"},
  {en:"IV",bn:"IV"},
  {en:"Rectal",bn:"রেক্টাল"},
  {en:"IM",bn:"IM"}
],
answer:"Rectal",
explanation:{
  en:"Rectal route gives fastest relief.",
  bn:"রেক্টাল সবচেয়ে দ্রুত কাজ করে।"
}
},

{
q:{
  en:"Senna belongs to which class?",
  bn:"সেনা কোন গ্রুপে পড়ে?"
},
options:[
  {en:"Osmotic",bn:"ওসমোটিক"},
  {en:"Stimulant",bn:"স্টিমুল্যান্ট"},
  {en:"Softener",bn:"সফটেনার"},
  {en:"Bulk",bn:"বাল্ক"}
],
answer:"Stimulant",
explanation:{
  en:"Senna stimulates bowel movement.",
  bn:"সেনা আন্ত্রিক গতি বাড়ায়।"
}
},

{
q:{
  en:"Magnesium hydroxide type?",
  bn:"ম্যাগনেসিয়াম হাইড্রক্সাইড কোন ধরনের?"
},
options:[
  {en:"Stimulant",bn:"স্টিমুল্যান্ট"},
  {en:"Osmotic",bn:"ওসমোটিক"},
  {en:"Softener",bn:"সফটেনার"},
  {en:"Enema",bn:"এনিমা"}
],
answer:"Osmotic",
explanation:{
  en:"It retains water in bowel.",
  bn:"পানি ধরে রাখে।"
}
},

{
q:{
  en:"Which is emergency use?",
  bn:"জরুরি অবস্থায় কোনটি ব্যবহার হয়?"
},
options:[
  {en:"Fiber",bn:"ফাইবার"},
  {en:"Softener",bn:"সফটেনার"},
  {en:"Enema",bn:"এনিমা"},
  {en:"Osmotic",bn:"ওসমোটিক"}
],
answer:"Enema",
explanation:{
  en:"Used in severe constipation.",
  bn:"গুরুতর অবস্থায় ব্যবহৃত হয়।"
}
}

]
};