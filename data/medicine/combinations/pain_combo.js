// 🔥 ALL COMBINATION DATA (BILINGUAL PRO)
export const DATA = [

  // ================= DOUBLE =================
  {
    id: "pcm_ibu",
    name: "Paracetamol + Ibuprofen",
    name_bn: "প্যারাসিটামল + আইবুপ্রোফেন",

    type: "double",

    composition: ["Paracetamol", "Ibuprofen"],
    composition_bn: ["প্যারাসিটামল", "আইবুপ্রোফেন"],

    group: "pain",
    category: "tablet",

    symptoms: ["fever", "body pain", "inflammation"],
    symptoms_bn: ["জ্বর", "শরীর ব্যথা", "প্রদাহ"],

    diseases: ["viral fever", "muscle pain", "toothache"],
    diseases_bn: ["ভাইরাল জ্বর", "পেশী ব্যথা", "দাঁতের ব্যথা"],

    uses: [
      "Moderate pain",
      "Inflammation",
      "Fever with body ache"
    ],
    uses_bn: [
      "মাঝারি ব্যথা",
      "প্রদাহ",
      "জ্বর ও শরীর ব্যথা"
    ],

    brands: [
      "Combiflam",
      "Maxigesic",
      "Flexon",
      "Ibugesic Plus",
      "Brufen Plus",
      "Advil Dual Action"
    ],

    gastricEffect: "increase",
    gastricEffect_bn: "গ্যাস্ট্রিক বাড়াতে পারে",

    strength: "medium",

    notes: "Stronger than Paracetamol alone",
    notes_bn: "শুধু প্যারাসিটামলের চেয়ে বেশি কার্যকর"
  },


  {
    id: "pcm_diclo",
    name: "Paracetamol + Diclofenac",
    name_bn: "প্যারাসিটামল + ডাইক্লোফেনাক",

    type: "double",

    composition: ["Paracetamol", "Diclofenac"],
    composition_bn: ["প্যারাসিটামল", "ডাইক্লোফেনাক"],

    group: "pain",
    category: "tablet",

    symptoms: ["joint pain", "swelling", "inflammation"],
    symptoms_bn: ["জয়েন্ট ব্যথা", "ফোলা", "প্রদাহ"],

    diseases: ["arthritis", "back pain", "injury"],
    diseases_bn: ["আর্থ্রাইটিস", "পিঠের ব্যথা", "চোট"],

    uses: [
      "Severe pain",
      "Joint pain",
      "Inflammation"
    ],
    uses_bn: [
      "তীব্র ব্যথা",
      "জয়েন্ট ব্যথা",
      "প্রদাহ"
    ],

    brands: [
      "Voveran Plus",
      "Diclo-P",
      "Dynapar Plus",
      "Olfen Plus",
      "Dicloran Plus"
    ],

    gastricEffect: "increase",
    gastricEffect_bn: "গ্যাস্ট্রিক বাড়াতে পারে",

    strength: "strong"
  },


  {
    id: "pcm_tramadol",
    name: "Paracetamol + Tramadol",
    name_bn: "প্যারাসিটামল + ট্রামাডল",

    type: "double",

    composition: ["Paracetamol", "Tramadol"],
    composition_bn: ["প্যারাসিটামল", "ট্রামাডল"],

    group: "pain",
    category: "tablet",

    symptoms: ["severe pain"],
    symptoms_bn: ["তীব্র ব্যথা"],

    diseases: ["post-surgery pain", "trauma"],
    diseases_bn: ["অপারেশনের পর ব্যথা", "আঘাত"],

    uses: [
      "Moderate to severe pain",
      "Post-surgery pain"
    ],
    uses_bn: [
      "মাঝারি থেকে তীব্র ব্যথা",
      "অপারেশনের পর ব্যথা"
    ],

    brands: [
      "Ultracet",
      "Tramazac-P",
      "Zydol-P",
      "Topdol Plus"
    ],

    gastricEffect: "neutral",
    gastricEffect_bn: "গ্যাস্ট্রিকে প্রভাব কম",

    strength: "very-strong",

    warnings: ["Prescription only", "Addiction risk"],
    warnings_bn: ["ডাক্তারের পরামর্শ প্রয়োজন", "নেশার ঝুঁকি আছে"]
  },


  // ================= TRIPLE =================
  {
    id: "cold_combo_1",
    name: "Paracetamol + Caffeine + Phenylephrine",
    name_bn: "প্যারাসিটামল + ক্যাফেইন + ফেনাইলএফ্রিন",

    type: "triple",

    composition: ["Paracetamol", "Caffeine", "Phenylephrine"],

    group: "cold",
    category: "tablet",

    symptoms: ["headache", "nasal congestion", "cold"],
    symptoms_bn: ["মাথাব্যথা", "নাক বন্ধ", "সর্দি"],

    diseases: ["sinusitis", "common cold"],
    diseases_bn: ["সাইনাস", "সাধারণ সর্দি"],

    uses: [
      "Cold",
      "Headache",
      "Nasal congestion"
    ],
    uses_bn: [
      "সর্দি",
      "মাথাব্যথা",
      "নাক বন্ধ"
    ],

    brands: [
      "Saridon Cold",
      "Vicks Action 500",
      "D-Cold Total",
      "Coldact Plus"
    ],

    gastricEffect: "mild",
    gastricEffect_bn: "হালকা প্রভাব",

    strength: "medium"
  },


  {
    id: "cold_combo_2",
    name: "Paracetamol + Chlorpheniramine + Phenylephrine",
    name_bn: "প্যারাসিটামল + ক্লোরফেনিরামিন + ফেনাইলএফ্রিন",

    type: "triple",

    composition: [
      "Paracetamol",
      "Chlorpheniramine",
      "Phenylephrine"
    ],

    group: "cold",
    category: "tablet",

    symptoms: ["runny nose", "sneezing", "allergy"],
    symptoms_bn: ["নাক দিয়ে পানি", "হাঁচি", "অ্যালার্জি"],

    diseases: ["allergic rhinitis", "cold"],
    diseases_bn: ["অ্যালার্জিক রাইনাইটিস", "সর্দি"],

    uses: [
      "Allergy",
      "Cold",
      "Runny nose"
    ],
    uses_bn: [
      "অ্যালার্জি",
      "সর্দি",
      "নাক দিয়ে পানি"
    ],

    brands: [
      "Sinarest",
      "Okacet Cold",
      "Histafree Cold",
      "T-Minic"
    ],

    gastricEffect: "mild",
    gastricEffect_bn: "হালকা প্রভাব",

    strength: "medium",

    warnings: ["May cause drowsiness"],
    warnings_bn: ["ঘুম আসতে পারে"]
  },


  // ================= STRONG =================
  {
    id: "pain_combo_multi",
    name: "Paracetamol + Aceclofenac + Serratiopeptidase",
    name_bn: "প্যারাসিটামল + এসিক্লোফেনাক + সেরাটিওপেপটিডেজ",

    type: "triple",

    composition: [
      "Paracetamol",
      "Aceclofenac",
      "Serratiopeptidase"
    ],

    group: "pain",
    category: "tablet",

    symptoms: ["severe inflammation", "swelling", "muscle pain"],
    symptoms_bn: ["তীব্র প্রদাহ", "ফোলা", "পেশী ব্যথা"],

    diseases: ["injury", "post-surgery swelling"],
    diseases_bn: ["চোট", "অপারেশনের পর ফোলা"],

    uses: [
      "Severe inflammation",
      "Muscle pain",
      "Post-surgery swelling"
    ],
    uses_bn: [
      "তীব্র প্রদাহ",
      "পেশী ব্যথা",
      "অপারেশনের পর ফোলা"
    ],

    brands: [
      "Zerodol-SP",
      "Aceclo Plus",
      "Hifenac-SP",
      "Movexx-SP"
    ],

    gastricEffect: "increase",
    gastricEffect_bn: "গ্যাস্ট্রিক বাড়াতে পারে",

    strength: "very-strong"
  }

];