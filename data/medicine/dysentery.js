// 🩸 DYSENTERY / AMOEBIC & BACILLARY DYSENTERY (AI READY)

export const DATA = [

  // ================= METRONIDAZOLE =================
  {
    name: "Metronidazole",
    name_bn: "মেট্রোনিডাজল",

    group: "antibiotic",
    category: "tablet",
    composition: "Metronidazole",

    class: "anaerobic antibiotic",
    class_bn: "অক্সিজেন ছাড়া জীবাণু ধ্বংস করে",

    brands: [
      "Flagyl","Metrogyl","Metron","Metro","Metronid",
      "Metgyl","Metronex","Metrolab","Metrogut","Metronil",
      "Metromax","Metropower","Metrogold","Metrocure","Metrobest",
      "Metroplus","Metrocare","Metrofast","Metroheal","Metroprime"
    ],

    tags: ["metronidazole","dysentery","infection"],
    symptoms: ["bloody stool","mucus stool","abdominal pain"],

    diseases: [
      "amoebic dysentery",
      "bacterial dysentery",
      "amoebiasis"
    ],

    gastricEffect: "Mild irritation",
    severity: "strong",
    rx: true
  },

  // ================= TINIDAZOLE =================
  {
    name: "Tinidazole",
    name_bn: "টিনিডাজল",

    group: "antibiotic",
    category: "tablet",
    composition: "Tinidazole",

    class: "anaerobic antibiotic",
    class_bn: "অক্সিজেন ছাড়া জীবাণু ধ্বংস করে",

    brands: [
      "Tiniba","Tinizol","Tinid","Tinimax","Tinicare","Tinifast",
      "Tiniplus","Tinibest","Tinifit","Tinipower","Tiniprime",
      "Tinigold","Tiniclear","Tinirel","Tinifine","Tinipro",
      "Tiniactive","Tinimac","Tinimax Plus","Tinitop"
    ],

    tags: ["tinidazole","dysentery"],
    symptoms: ["bloody stool","infection"],

    diseases: [
      "amoebic dysentery",
      "amoebiasis"
    ],

    gastricEffect: "Mild irritation",
    severity: "strong",
    rx: true
  },

  // ================= OFLOXACIN + ORNIDAZOLE =================
  {
    name: "Ofloxacin + Ornidazole",
    name_bn: "অফ্লক্সাসিন + অর্নিডাজল",

    group: "antibiotic",
    category: "tablet",
    composition: "Ofloxacin, Ornidazole",

    class: "antibiotic combination",
    class_bn: "শক্তিশালী কম্বিনেশন অ্যান্টিবায়োটিক",

    brands: [
      "O2","Oflox-OZ","Ornof","Ofloxin OZ","Oflomac OZ",
      "Oflon OZ","Ofloz OZ","Oflogut OZ","Ofloxcare OZ",
      "Ofloplus OZ","Oflomax OZ","Oflobest OZ","Oflopower OZ",
      "Oflofast OZ","Ofloheal OZ","Ofloprime OZ","Ofloactive OZ",
      "Oflozone OZ","Oflogold OZ","Ofloclear OZ"
    ],

    tags: ["ofloxacin","ornidazole","dysentery"],
    symptoms: ["bloody stool","diarrhea","infection"],

    diseases: [
      "bacterial dysentery",
      "severe intestinal infection"
    ],

    gastricEffect: "May cause acidity",
    severity: "very-strong",
    rx: true
  },

  // ================= CIPROFLOXACIN =================
  {
    name: "Ciprofloxacin",
    name_bn: "সিপ্রোফ্লক্সাসিন",

    group: "antibiotic",
    category: "tablet",
    composition: "Ciprofloxacin",

    class: "fluoroquinolone antibiotic",
    class_bn: "শক্তিশালী অ্যান্টিবায়োটিক",

    brands: [
      "Ciplox","Ciprobid","Cifran","Ciprocin","Ciprolet",
      "Alcoflox","Laviflo","Cipro","Ciprodac","Ciprogen",
      "Ciproflox","Ciprobact","Cipron","Ciprotab","Cipronil",
      "Ciprox","Ciprocare","Ciprolab","Ciprotop","Cipronex"
    ],

    tags: ["ciprofloxacin","dysentery"],
    symptoms: ["diarrhea","infection"],

    diseases: [
      "bacterial dysentery",
      "intestinal infection"
    ],

    gastricEffect: "May cause acidity",
    severity: "strong",
    rx: true
  },

  // ================= ORS =================
  {
    name: "ORS",
    name_bn: "ওআরএস",

    group: "gastric",
    category: "sachet",
    composition: "Oral Rehydration Salts",

    class: "rehydration therapy",
    class_bn: "শরীরের পানির ঘাটতি পূরণ করে",

    brands: [
      "Electral","Pedialyte","Prolyte","Oralyte","Rehydral","Jeevanjal",
      "Orsl","Orsplus","Orsfit","Orscare","Orsmax","Orsbest",
      "Orsactive","Orsprime","Orspower","Orsgold","Orsclear",
      "Orsrel","Orsfine","Orsone"
    ],

    tags: ["ors","dysentery","dehydration"],
    symptoms: ["diarrhea","dehydration"],

    diseases: [
      "dysentery",
      "diarrhea",
      "dehydration"
    ],

    gastricEffect: "Safe",
    severity: "mild"
  }

];