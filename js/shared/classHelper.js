// 🔥 CLASS DESCRIPTION GENERATOR (PRO VERSION)

export const CLASS_MAP = {

  // ================= 🟢 PENICILLIN =================
  "penicillin antibiotic": {
    en: "Antibiotic that kills bacteria by breaking their cell wall",
    bn: "এটি ব্যাকটেরিয়ার সেল ওয়াল ভেঙে ব্যাকটেরিয়া মেরে ফেলে",
    keywords: ["penicillin","amoxicillin","ampicillin"]
  },

  "penicillin combination": {
    en: "Combination antibiotic that kills bacteria and overcomes resistance",
    bn: "এটি একটি কম্বিনেশন অ্যান্টিবায়োটিক যা ব্যাকটেরিয়া মারে এবং রেজিস্ট্যান্স ভেঙে কাজ করে",
    keywords: ["clavulanic","amoxyclav","augmentin"]
  },

  // ================= 🟢 MACROLIDE =================
  "macrolide antibiotic": {
    en: "Stops bacterial growth by blocking protein synthesis",
    bn: "এটি ব্যাকটেরিয়ার প্রোটিন তৈরি বন্ধ করে সংক্রমণ থামায়",
    keywords: ["azithromycin","clarithromycin"]
  },

  // ================= 🟢 CEPHALOSPORIN =================
  "cephalosporin antibiotic": {
    en: "Broad-spectrum antibiotic that kills bacteria by damaging cell wall",
    bn: "এটি বিস্তৃত কার্যকারী অ্যান্টিবায়োটিক যা ব্যাকটেরিয়ার সেল ওয়াল নষ্ট করে",
    keywords: ["cefixime","ceftriaxone","cefuroxime"]
  },

  // ================= 🟢 FLUOROQUINOLONE =================
  "fluoroquinolone antibiotic": {
    en: "Powerful antibiotic that stops bacterial DNA replication",
    bn: "এটি শক্তিশালী অ্যান্টিবায়োটিক যা ব্যাকটেরিয়ার DNA তৈরি বন্ধ করে",
    keywords: ["ciprofloxacin","levofloxacin","ofloxacin"]
  },

  // ================= 🟢 TETRACYCLINE =================
  "tetracycline antibiotic": {
    en: "Stops bacteria from growing by blocking protein synthesis",
    bn: "এটি ব্যাকটেরিয়ার বৃদ্ধি থামায় প্রোটিন তৈরি বন্ধ করে",
    keywords: ["doxycycline","tetracycline"]
  },

  // ================= 🟢 ANAEROBIC =================
  "anaerobic antibiotic": {
    en: "Kills bacteria that survive without oxygen",
    bn: "এটি অক্সিজেন ছাড়া বেঁচে থাকা ব্যাকটেরিয়াকে মেরে ফেলে",
    keywords: ["metronidazole","tinidazole"]
  },

  // ================= 🟢 NSAID =================
  "nsaid": {
    en: "Reduces pain, inflammation and fever",
    bn: "এটি ব্যথা, প্রদাহ এবং জ্বর কমায়",
    keywords: ["ibuprofen","diclofenac","naproxen","aceclofenac"]
  },

  // ================= 🟢 ANALGESIC =================
  "analgesic + antipyretic": {
    en: "Relieves pain and reduces fever",
    bn: "এটি ব্যথা কমায় এবং জ্বর কমায়",
    keywords: ["paracetamol","acetaminophen"]
  },

  // ================= 🟢 ANTIHISTAMINE =================
  "antihistamine": {
    en: "Blocks allergic reaction by reducing histamine effect",
    bn: "এটি হিস্টামিন ব্লক করে অ্যালার্জির উপসর্গ কমায়",
    keywords: ["cetirizine","loratadine","levocetirizine"]
  },

  // ================= 🟢 GASTRIC =================
  "proton pump inhibitor": {
    en: "Reduces stomach acid production",
    bn: "পেটের অ্যাসিড কমায়",
    keywords: ["pantoprazole","omeprazole","rabeprazole","esomeprazole"]
  },

  "antacid": {
    en: "Neutralizes stomach acid quickly",
    bn: "দ্রুত অ্যাসিড কমায়",
    keywords: ["antacid","digene","gelusil"]
  },

  "h2 blocker": {
    en: "Reduces acid production in stomach",
    bn: "পেটে অ্যাসিড কমায়",
    keywords: ["ranitidine","famotidine"]
  },

  "antispasmodic": {
    en: "Relieves stomach cramps and spasms",
    bn: "পেটের খিঁচুনি কমায়",
    keywords: ["dicycloverine","hyoscine"]
  },

  // ================= 🟢 DIARRHEA =================
  "antidiarrheal": {
    en: "Controls diarrhea and reduces stool frequency",
    bn: "ডায়রিয়া কমায়",
    keywords: ["loperamide","racecadotril"]
  },

  "rehydration therapy": {
    en: "Restores body fluids and electrolytes",
    bn: "শরীরের পানির ঘাটতি পূরণ করে",
    keywords: ["ors","electral"]
  },

  // ================= 🟢 SEXUAL =================
  "pde5 inhibitor": {
    en: "Improves blood flow for erection",
    bn: "ইরেকশন উন্নত করে",
    keywords: ["sildenafil","tadalafil"]
  },

  "ssri": {
    en: "Delays ejaculation by acting on brain chemicals",
    bn: "দ্রুত বীর্যপাত কমায়",
    keywords: ["dapoxetine"]
  },

  // ================= 🟢 VITAMIN =================
  "vitamin": {
    en: "Provides essential nutrients for body",
    bn: "শরীরের জন্য প্রয়োজনীয় ভিটামিন দেয়",
    keywords: ["vitamin","ascorbic","cholecalciferol"]
  },

  "multivitamin": {
    en: "Combination of multiple vitamins for overall health",
    bn: "একাধিক ভিটামিনের সমন্বয়",
    keywords: ["multivitamin","zincovit"]
  },

  "vitamin + mineral": {
    en: "Combination of vitamins and minerals",
    bn: "ভিটামিন ও মিনারেল",
    keywords: ["calcium","iron","folic"]
  },

  // ================= 🔴 DEFAULT =================
  "default": {
    en: "Used to treat specific medical conditions",
    bn: "নির্দিষ্ট রোগের চিকিৎসায় ব্যবহৃত হয়",
    keywords: []
  }
};


// 🔥 NORMALIZE (ULTRA SAFE)
function normalize(str){
  return (str || "")
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}


// 🔥 MAIN FUNCTION (ULTRA SMART)
export function getClassDesc(className){

  const key = normalize(className);

  if(!key){
    return CLASS_MAP["default"];
  }

  // 🥇 DIRECT MATCH
  if(CLASS_MAP[key]){
    return CLASS_MAP[key];
  }

  // 🥈 PARTIAL MATCH
  for(const k in CLASS_MAP){
    if(key.includes(k)){
      return CLASS_MAP[k];
    }
  }

  // 🥉 KEYWORD MATCH (VERY POWERFUL)
  for(const k in CLASS_MAP){

    const item = CLASS_MAP[k];

    if(item.keywords?.length){

      if(item.keywords.some(word =>
        key.includes(normalize(word))
      )){
        return item;
      }
    }
  }

  // 🧠 TOKEN SMART MATCH
  const tokens = key.split(" ");

  for(const k in CLASS_MAP){

    const classTokens = k.split(" ");

    if(classTokens.every(t =>
      tokens.some(w => w.includes(t) || t.includes(w))
    )){
      return CLASS_MAP[k];
    }
  }

  // 🔴 FALLBACK
  return CLASS_MAP["default"];
}