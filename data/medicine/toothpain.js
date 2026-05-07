// 🦷 TOOTH PAIN / DENTAL PAIN (AI READY + CLASS + BRANDS)

export const DATA = [

  // ================= PARACETAMOL =================
  {
    name: "Paracetamol",
    name_bn: "প্যারাসিটামল",

    group: "pain",
    category: "tablet",
    composition: "Paracetamol",

    class: "analgesic + antipyretic",
    class_bn: "ব্যথা ও জ্বর কমায়",

    brands: [
      "Crocin","Calpol","Dolo","Panadol","Paracip","P-650","Pacimol",
      "Metacin","Pyremol","T-98","Fevastin","Dolopar","Parafast",
      "Pacimol XP","Calpol Plus","Paraflam","Paranorm","Paracare",
      "Doloplus","Parafit"
    ],

    tags: ["tooth pain","pain","fever"],
    symptoms: ["toothache","mild pain"],

    diseases: [
      "tooth pain",
      "dental pain",
      "gum pain"
    ],

    gastricEffect: "Safe",
    severity: "mild"
  },

  // ================= IBUPROFEN =================
  {
    name: "Ibuprofen",
    name_bn: "আইবুপ্রোফেন",

    group: "pain",
    category: "tablet",
    composition: "Ibuprofen",

    class: "nsaid",
    class_bn: "ব্যথা ও ফোলা কমায়",

    brands: [
      "Brufen","Ibugesic","Advil","Combiflam","Flexon","Ibuclin",
      "Ibuflam","Ibugesic Plus","Ibupara","Ibucare","Ibupain",
      "Ibufast","Ibumax","Ibuheal","Ibupower","Ibuprime",
      "Ibuactive","Ibutop","Ibufit","Ibuplus"
    ],

    tags: ["tooth pain","inflammation"],
    symptoms: ["toothache","swelling"],

    diseases: [
      "tooth pain",
      "dental inflammation",
      "gum swelling"
    ],

    gastricEffect: "May cause acidity",
    severity: "medium"
  },

  // ================= DICLOFENAC =================
  {
    name: "Diclofenac",
    name_bn: "ডাইক্লোফেনাক",

    group: "pain",
    category: "tablet",
    composition: "Diclofenac",

    class: "nsaid",
    class_bn: "শক্তিশালী ব্যথানাশক",

    brands: [
      "Voveran","Dicloran","Dynapar","Diclofast","Diclocare",
      "Dicloplus","Diclomax","Diclofit","Diclobest","Dicloactive",
      "Dicloprime","Diclopower","Diclogold","Diclorel","Diclofine",
      "Diclozin","Diclopro","Diclotop","Dicloheal","Diclozone"
    ],

    tags: ["tooth pain","severe pain"],
    symptoms: ["severe tooth pain"],

    diseases: [
      "severe dental pain",
      "tooth infection pain"
    ],

    gastricEffect: "May cause acidity",
    severity: "strong"
  },

  // ================= AMOXICILLIN =================
  {
    name: "Amoxicillin",
    name_bn: "অ্যামক্সিসিলিন",

    group: "antibiotic",
    category: "capsule",
    composition: "Amoxicillin",

    class: "penicillin antibiotic",
    class_bn: "ব্যাকটেরিয়া ধ্বংস করে",

    brands: [
      "Amoxil","Novamox","Mox","Almox","Trimox",
      "Amoxy","Moxkid","Amoxipen","Amoxycillin Cipla","Amoxycillin Sun",
      "Amoxal","Amoxylin","Amoxifast","Amoxigen","Amoxibact",
      "Amoxil Forte","Amoxlin","Amoxcare","Amoxmed","Amoxheal"
    ],

    tags: ["tooth infection","antibiotic"],
    symptoms: ["infection","tooth pain"],

    diseases: [
      "dental infection",
      "tooth abscess",
      "gum infection"
    ],

    gastricEffect: "Mild irritation",
    severity: "medium",
    rx: true
  },

  // ================= AMOXICLAV =================
  {
    name: "Amoxicillin + Clavulanic Acid",
    name_bn: "অ্যামক্সিসিলিন + ক্ল্যাভুলানিক অ্যাসিড",

    group: "antibiotic",
    category: "tablet",
    composition: "Amoxicillin, Clavulanic Acid",

    class: "penicillin combination",
    class_bn: "শক্তিশালী সংক্রমণ প্রতিরোধ করে",

    brands: [
      "Augmentin","Clavam","Amoxyclav","Moxikind-CV","Moxicip-CV",
      "Zepiclav","Megamox-CV","Bi-Clav","Moxclav","Amoxylet-CV",
      "Moxenzr-CV","Clavmox","Amoclav","Amoxyclav Forte","Mox-CV",
      "Clavulin","Clavomox","Amoxyclav 625","Moxclav-DS","Amoxyclav Plus"
    ],

    tags: ["tooth infection","strong antibiotic"],
    symptoms: ["pain","infection","swelling"],

    diseases: [
      "dental infection",
      "tooth abscess",
      "gum infection"
    ],

    gastricEffect: "Mild irritation",
    severity: "strong",
    rx: true
  },

  // ================= METRONIDAZOLE =================
  {
    name: "Metronidazole",
    name_bn: "মেট্রোনিডাজল",

    group: "antibiotic",
    category: "tablet",
    composition: "Metronidazole",

    class: "anaerobic antibiotic",
    class_bn: "গভীর সংক্রমণ দূর করে",

    brands: [
      "Flagyl","Metrogyl","Metron","Metro","Metronid",
      "Metgyl","Metronex","Metrolab","Metrogut","Metronil",
      "Metromax","Metropower","Metrogold","Metrocure","Metrobest",
      "Metroplus","Metrocare","Metrofast","Metroheal","Metroprime"
    ],

    tags: ["tooth infection","anaerobic"],
    symptoms: ["infection","swelling"],

    diseases: [
      "gum infection",
      "dental abscess"
    ],

    gastricEffect: "Mild irritation",
    severity: "strong",
    rx: true
  },

  // ================= LIGNOCAINE GEL =================
  {
    name: "Lignocaine Gel",
    name_bn: "লিডোকেইন জেল",

    group: "pain",
    category: "gel",
    composition: "Lignocaine",

    class: "local anesthetic",
    class_bn: "লোকাল ব্যথা সাময়িক বন্ধ করে",

    brands: [
      "Xylocaine","Lidocaine Gel","Dentogel","Lignocare","Lignofast",
      "Lignoplus","Lignomax","Lignofit","Lignobest","Lignoactive",
      "Lignoprime","Lignopower","Lignogold","Lignoclear","Lignorel",
      "Lignofine","Lignopro","Lignozin","Lignotop","Lignoheal"
    ],

    tags: ["tooth pain","instant relief"],
    symptoms: ["toothache","gum pain"],

    diseases: [
      "tooth pain",
      "gum pain"
    ],

    gastricEffect: "Safe",
    severity: "medium"
  }

];