export const DATA = [

// ================= 1. AMOXICILLIN =================
{
  name: "Amoxicillin",
  name_bn: "অ্যামক্সিসিলিন",

  group: "antibiotic",
  category: "capsule",
  composition: "Amoxicillin",

  class: "Penicillin antibiotic",
  class_bn: "পেনিসিলিন অ্যান্টিবায়োটিক",

  uses: [
    "Respiratory infection",
    "Ear infection",
    "Urinary tract infection",
    "Skin infection",
    "Dental infection"
  ],
  uses_bn: [
    "শ্বাসনালীর সংক্রমণ",
    "কানের সংক্রমণ",
    "মূত্রনালীর সংক্রমণ",
    "ত্বকের সংক্রমণ",
    "দাঁতের সংক্রমণ"
  ],

  dose: "250mg / 500mg / 875mg",
  adultDose: "500mg every 8 hours",

  sideEffects: ["Nausea","Diarrhea","Skin rash"],
  sideEffects_bn: ["বমি ভাব","ডায়রিয়া","ত্বকে র‍্যাশ"],

  warnings: ["Penicillin allergy","Complete full course"],
  warnings_bn: ["পেনিসিলিন অ্যালার্জি থাকলে নয়","পুরো কোর্স শেষ করুন"],

  interactions: ["Warfarin","Methotrexate"],

  food: "Can be taken with or without food",

  gastricEffect: "Mild irritation",

  pregnancy: "Safe (consult doctor)",

  brands: [
    "Amoxil","Novamox","Mox","Almox","Trimox",
    "Amoxy","Moxkid","Amoxipen","Amoxycillin Cipla","Amoxycillin Sun"
  ],

  tags: ["amoxicillin","antibiotic","infection"],
  symptoms: ["infection","fever","throat pain","cough"],

  diseases: [
    "bacterial infection",
    "respiratory infection",
    "ear infection",
    "uti",
    "skin infection",
    "dental infection"
  ],

  // 🔥 AI SCORING SYSTEM
  score: {
    // ⭐ HIGH PRIORITY (first-line use)
    respiratory_infection: 10,
    ear_infection: 9,
    dental_infection: 9,

    // ⭐ MEDIUM
    skin_infection: 7,
    uti: 6,

    // ⭐ GENERAL MATCH
    bacterial_infection: 8,

    // 🔥 SYMPTOM LEVEL BOOST
    fever: 6,
    cough: 7,
    throat_pain: 8,
    infection: 7
  },

  rx: true,
  severity: "moderate"
},

// ================= 2. AMOXICLAV =================
{
  name: "Amoxicillin + Clavulanic Acid",
  name_bn: "অ্যামক্সিসিলিন + ক্ল্যাভুলানিক অ্যাসিড",

  group: "antibiotic",
  category: "tablet",
  composition: "Amoxicillin, Clavulanic Acid",

  class: "Penicillin combination",
  class_bn: "পেনিসিলিন কম্বিনেশন",

  uses: ["Dental infection","Sinusitis","Respiratory infection"],
  uses_bn: ["দাঁতের সংক্রমণ","সাইনাস","শ্বাসনালীর সংক্রমণ"],

  dose: "625mg",
  adultDose: "625mg every 8 hours",

  sideEffects: ["Diarrhea","Nausea"],
  sideEffects_bn: ["ডায়রিয়া","বমি ভাব"],

  warnings: ["Liver caution","Complete full course"],
  warnings_bn: ["লিভার সমস্যায় সতর্কতা","পুরো কোর্স শেষ করুন"],

  food: "Take after food",

  gastricEffect: "Mild irritation",

  pregnancy: "Safe",

  brands: ["Augmentin","Clavam","Amoxyclav","Moxikind-CV"],

  tags: ["amoxyclav","antibiotic","infection"],
  symptoms: ["infection","swelling","pain"],

  diseases: [
    "bacterial infection",
    "sinusitis",
    "respiratory infection",
    "dental infection"
  ],

  rx: true,
  severity: "moderate"
},

// ================= 3. AZITHROMYCIN =================
{
  name: "Azithromycin",
  name_bn: "অ্যাজিথ্রোমাইসিন",

  group: "antibiotic",
  category: "tablet",
  composition: "Azithromycin",

  class: "Macrolide antibiotic",
  class_bn: "ম্যাক্রোলাইড অ্যান্টিবায়োটিক",

  uses: ["Throat infection","Chest infection"],
  uses_bn: ["গলার সংক্রমণ","বুকের সংক্রমণ"],

  dose: "500mg",
  adultDose: "500mg once daily",

  gastricEffect: "Mild irritation",

  sideEffects: ["Nausea","Abdominal pain"],
  sideEffects_bn: ["বমি","পেট ব্যথা"],

  food: "Take before or after food",

  brands: ["Azee","Azithral","Azicip","Azax"],

  tags: ["azithromycin","antibiotic","infection"],
  symptoms: ["infection","fever","cough","throat pain"],

  diseases: [
    "throat infection",
    "chest infection",
    "bacterial infection"
  ],

  rx: true,
  severity: "moderate"
},

// ================= 4. CEFIXIME =================
{
  name: "Cefixime",
  name_bn: "সেফিক্সিম",

  group: "antibiotic",
  category: "tablet",
  composition: "Cefixime",

  class: "Cephalosporin antibiotic",
  class_bn: "সেফালোস্পোরিন অ্যান্টিবায়োটিক",

  uses: ["Typhoid","UTI"],
  uses_bn: ["টাইফয়েড","মূত্রনালীর সংক্রমণ"],

  dose: "200mg",
  adultDose: "200mg twice daily",

  gastricEffect: "Mild irritation",

  sideEffects: ["Diarrhea","Nausea"],
  sideEffects_bn: ["ডায়রিয়া","বমি ভাব"],

  food: "With or without food",

  brands: ["Taxim-O","Zifi","Cefspan","Suprax"],

  tags: ["cefixime","antibiotic","uti"],
  symptoms: ["infection","fever","urinary pain"],

  diseases: [
    "typhoid",
    "uti",
    "bacterial infection"
  ],

  rx: true,
  severity: "moderate"
},

// ================= 5. CIPROFLOXACIN =================
{
  name: "Ciprofloxacin",
  name_bn: "সিপ্রোফ্লক্সাসিন",

  group: "antibiotic",
  category: "tablet",
  composition: "Ciprofloxacin",

  class: "Fluoroquinolone antibiotic",
  class_bn: "ফ্লুরোকুইনোলোন অ্যান্টিবায়োটিক",

  uses: ["UTI","Gastro infection","Typhoid"],
  uses_bn: ["মূত্রনালীর সংক্রমণ","পেটের সংক্রমণ","টাইফয়েড"],

  dose: "500mg",
  adultDose: "500mg twice daily",

  sideEffects: ["Nausea","Diarrhea","Dizziness"],
  sideEffects_bn: ["বমি","ডায়রিয়া","মাথা ঘোরা"],

  warnings: ["Avoid in children","Complete full course"],
  warnings_bn: ["শিশুদের ক্ষেত্রে সতর্কতা","পুরো কোর্স শেষ করুন"],

  gastricEffect: "May cause acidity",

  food: "Take after food",

  pregnancy: "Avoid",

  brands: [
    "Ciplox","Ciprobid","Cifran","Ciprocin","Ciprolet"
  ],

  tags: ["ciprofloxacin","antibiotic","uti","infection"],

  symptoms: ["infection","diarrhea","fever","urinary pain"],

  diseases: [
    "uti",
    "urinary tract infection",
    "gastro infection",
    "typhoid",
    "bacterial infection"
  ],

  rx: true,
  severity: "strong"
},


// ================= 6. DOXYCYCLINE =================
{
  name: "Doxycycline",
  name_bn: "ডক্সিসাইক্লিন",

  group: "antibiotic",
  category: "capsule",
  composition: "Doxycycline",

  class: "Tetracycline antibiotic",
  class_bn: "টেট্রাসাইক্লিন অ্যান্টিবায়োটিক",

  uses: ["Acne","Malaria","Respiratory infection"],
  uses_bn: ["ব্রণ","ম্যালেরিয়া","শ্বাসনালীর সংক্রমণ"],

  dose: "100mg",
  adultDose: "100mg once or twice daily",

  sideEffects: ["Photosensitivity","Nausea"],
  sideEffects_bn: ["সূর্যের আলোতে সমস্যা","বমি"],

  warnings: ["Avoid in pregnancy","Take with water"],
  warnings_bn: ["গর্ভাবস্থায় এড়ান","পানি দিয়ে খান"],

  gastricEffect: "May cause acidity",

  food: "Take after food",

  pregnancy: "Avoid",

  brands: [
    "Doxy-1","Doxicip","Doxylab","Doxybid"
  ],

  tags: ["doxycycline","antibiotic","acne","infection"],

  symptoms: ["infection","skin problem","fever"],

  diseases: [
    "acne",
    "malaria",
    "respiratory infection",
    "bacterial infection"
  ],

  rx: true,
  severity: "moderate"
},


// ================= 7. METRONIDAZOLE =================
{
  name: "Metronidazole",
  name_bn: "মেট্রোনিডাজল",

  group: "antibiotic",
  category: "tablet",
  composition: "Metronidazole",

  class: "Anaerobic antibiotic",
  class_bn: "অ্যানারোবিক অ্যান্টিবায়োটিক",

  uses: ["Diarrhea","Amoebiasis","Anaerobic infection"],
  uses_bn: ["ডায়রিয়া","অ্যামিবিয়াসিস","অ্যানারোবিক সংক্রমণ"],

  dose: "400mg",
  adultDose: "400–800mg 2–3 times daily",

  sideEffects: ["Metallic taste","Nausea"],
  sideEffects_bn: ["মুখে ধাতব স্বাদ","বমি"],

  warnings: ["Avoid alcohol","Complete full course"],
  warnings_bn: ["অ্যালকোহল এড়ান","পুরো কোর্স শেষ করুন"],

  gastricEffect: "Mild irritation",

  food: "Take after food",

  pregnancy: "Consult doctor",

  brands: [
    "Flagyl","Metrogyl","Metron","Metro"
  ],

  tags: ["metronidazole","antibiotic","diarrhea","infection"],

  symptoms: ["diarrhea","abdominal pain","infection"],

  diseases: [
    "amoebiasis",
    "diarrhea",
    "gastro infection",
    "anaerobic infection"
  ],

  rx: true,
  severity: "moderate"
},


// ================= 8. OFLOXACIN =================
{
  name: "Ofloxacin",
  name_bn: "অফ্লক্সাসিন",

  group: "antibiotic",
  category: "tablet",
  composition: "Ofloxacin",

  class: "Fluoroquinolone antibiotic",
  class_bn: "ফ্লুরোকুইনোলোন অ্যান্টিবায়োটিক",

  uses: ["Diarrhea","UTI","Respiratory infection"],
  uses_bn: ["ডায়রিয়া","মূত্রনালীর সংক্রমণ","শ্বাসনালীর সংক্রমণ"],

  dose: "200mg",
  adultDose: "200mg twice daily",

  sideEffects: ["Nausea","Dizziness"],
  sideEffects_bn: ["বমি","মাথা ঘোরা"],

  warnings: ["Avoid in pregnancy","Complete full course"],
  warnings_bn: ["গর্ভাবস্থায় এড়ান","পুরো কোর্স শেষ করুন"],

  gastricEffect: "May cause acidity",

  food: "Take after food",

  pregnancy: "Avoid",

  brands: ["Oflin","Oflox","Zanocin"],

  tags: ["ofloxacin","antibiotic","uti","infection"],

  symptoms: ["diarrhea","infection","fever","urinary pain"],

  diseases: [
    "uti",
    "urinary tract infection",
    "diarrhea",
    "respiratory infection",
    "bacterial infection"
  ],

  rx: true,
  severity: "strong"
},
  

// ================= 9. LEVOFLOXACIN =================
{
  name: "Levofloxacin",
  name_bn: "লেভোফ্লক্সাসিন",

  group: "antibiotic",
  category: "tablet",
  composition: "Levofloxacin",

  class: "Fluoroquinolone antibiotic",
  class_bn: "ফ্লুরোকুইনোলোন অ্যান্টিবায়োটিক",

  uses: ["Pneumonia","Sinus infection","Respiratory infection"],
  uses_bn: ["নিউমোনিয়া","সাইনাস ইনফেকশন","শ্বাসনালীর সংক্রমণ"],

  dose: "500mg",
  adultDose: "500mg once daily",

  sideEffects: ["Nausea","Dizziness","Tendon pain"],
  sideEffects_bn: ["বমি","মাথা ঘোরা","টেন্ডনে ব্যথা"],

  warnings: ["Avoid in pregnancy","Complete full course"],
  warnings_bn: ["গর্ভাবস্থায় এড়ান","পুরো কোর্স শেষ করুন"],

  gastricEffect: "May cause acidity",

  food: "Take after food",

  pregnancy: "Avoid",

  brands: ["Levoquin","Levoflox","Levoday"],

  tags: ["levofloxacin","antibiotic","pneumonia","infection"],

  symptoms: ["infection","fever","cough","chest pain"],

  diseases: [
    "pneumonia",
    "sinus infection",
    "respiratory infection",
    "bacterial infection"
  ],

  rx: true,
  severity: "strong"
},


// ================= 10. CEFTRIAXONE =================
{
  name: "Ceftriaxone",
  name_bn: "সেফট্রিয়াক্সোন",

  group: "antibiotic",
  category: "injection",
  composition: "Ceftriaxone",

  class: "Cephalosporin antibiotic",
  class_bn: "সেফালোস্পোরিন অ্যান্টিবায়োটিক",

  uses: ["Severe infection","Pneumonia","Sepsis","Meningitis"],
  uses_bn: ["তীব্র সংক্রমণ","নিউমোনিয়া","সেপসিস","মেনিনজাইটিস"],

  dose: "Injection",
  adultDose: "1–2g IV/IM daily",

  sideEffects: ["Pain at injection site","Diarrhea"],
  sideEffects_bn: ["ইনজেকশনের জায়গায় ব্যথা","ডায়রিয়া"],

  warnings: ["Hospital use","Doctor supervision required"],
  warnings_bn: ["শুধু হাসপাতালে ব্যবহার","ডাক্তারের তত্ত্বাবধান প্রয়োজন"],

  gastricEffect: "Safe",

  food: "Not applicable",

  pregnancy: "Consult doctor",

  brands: ["Rocephin","Monocef","Taxicef"],

  tags: ["ceftriaxone","antibiotic","injection","severe infection"],

  symptoms: ["infection","high fever","severe illness"],

  diseases: [
    "severe infection",
    "pneumonia",
    "sepsis",
    "meningitis",
    "bacterial infection"
  ],

  rx: true,
  severity: "very-strong",
  emergencyUse: true
}

];