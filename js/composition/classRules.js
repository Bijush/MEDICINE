// ==============================
// MEDICINE CLASS RULES
// ADVANCED VERSION
// ==============================

export const CLASS_RULES = [

  // ==========================
  // ANTIBIOTIC
  // ==========================

  {
    pattern:
      /cillin|cef|mycin|cycline|floxacin|penem|clavulanate/i,

    class:
      "antibiotic",

    category:
      "infection",

    uses: [

      "Bacterial infection",

      "Throat infection",

      "Chest infection",

      "Urinary tract infection",

      "Skin infection",

      "Ear infection"

    ],

    mechanism:
      "Stops bacterial growth or kills bacteria.",

    warnings: [

      "Should not be overused",

      "May cause antibiotic resistance",

      "Complete full antibiotic course"

    ]

  },


  // ==========================
  // ACID REDUCER
  // ==========================

  {
    pattern:
      /prazole|ranitidine|famotidine/i,

    class:
      "acid reducer",

    category:
      "gastric",

    uses: [

      "Acidity",

      "GERD",

      "Heartburn",

      "Stomach ulcer",

      "Acid reflux"

    ],

    mechanism:
      "Reduces stomach acid production.",

    warnings: [

      "Long-term use may reduce vitamin absorption",

      "Use carefully in liver disease"

    ]

  },


  // ==========================
  // PAIN / FEVER
  // ==========================

  {
    pattern:
      /acetamol|ibuprofen|diclofenac|aceclofenac|ketorolac|naproxen/i,

    class:
      "analgesic",

    category:
      "pain relief",

    uses: [

      "Fever",

      "Body pain",

      "Headache",

      "Joint pain",

      "Inflammation",

      "Muscle pain"

    ],

    mechanism:
      "Blocks pain and inflammation signals.",

    warnings: [

      "Overdose may damage liver or kidney",

      "May irritate stomach"

    ]

  },


  // ==========================
  // DIABETES
  // ==========================

  {
    pattern:
      /metformin|glimepiride|gliptin|dapagliflozin|voglibose/i,

    class:
      "antidiabetic",

    category:
      "diabetes",

    uses: [

      "Type 2 diabetes",

      "High blood sugar",

      "Diabetes management"

    ],

    mechanism:
      "Helps control blood glucose level.",

    warnings: [

      "Monitor blood sugar regularly",

      "May cause low sugar level"

    ]

  },


  // ==========================
  // BLOOD PRESSURE
  // ==========================

  {
    pattern:
      /sartan|dipine|pril|atenolol|metoprolol/i,

    class:
      "antihypertensive",

    category:
      "blood pressure",

    uses: [

      "High blood pressure",

      "Heart protection",

      "Heart failure",

      "Stroke prevention"

    ],

    mechanism:
      "Relaxes blood vessels and lowers pressure.",

    warnings: [

      "May cause dizziness",

      "Monitor blood pressure regularly"

    ]

  },


  // ==========================
  // ALLERGY
  // ==========================

  {
    pattern:
      /cetirizine|levocetirizine|loratadine|fexofenadine/i,

    class:
      "antihistamine",

    category:
      "allergy",

    uses: [

      "Allergy",

      "Sneezing",

      "Runny nose",

      "Skin itching",

      "Dust allergy"

    ],

    mechanism:
      "Blocks histamine allergy response.",

    warnings: [

      "May cause drowsiness"

    ]

  },


  // ==========================
  // COUGH
  // ==========================

  {
    pattern:
      /ambroxol|bromhexine|dextromethorphan|guaifenesin/i,

    class:
      "cough medicine",

    category:
      "respiratory",

    uses: [

      "Cough",

      "Chest congestion",

      "Mucus problem"

    ],

    mechanism:
      "Suppresses cough or loosens mucus.",

    warnings: [

      "Drink enough water"

    ]

  },


  // ==========================
  // ASTHMA
  // ==========================

  {
    pattern:
      /salbutamol|montelukast|budesonide|formoterol/i,

    class:
      "asthma medicine",

    category:
      "respiratory",

    uses: [

      "Asthma",

      "Breathing difficulty",

      "Wheezing"

    ],

    mechanism:
      "Opens airways and improves breathing.",

    warnings: [

      "Overuse may increase heart rate"

    ]

  },


  // ==========================
  // ANTIFUNGAL
  // ==========================

  {
    pattern:
      /fluconazole|itraconazole|terbinafine|clotrimazole/i,

    class:
      "antifungal",

    category:
      "fungal infection",

    uses: [

      "Fungal infection",

      "Skin fungus",

      "Oral fungal infection"

    ],

    mechanism:
      "Stops fungal growth.",

    warnings: [

      "Use full treatment duration"

    ]

  },


  // ==========================
  // VITAMINS
  // ==========================

  {
    pattern:
      /multivitamin|methylcobalamin|vitamin|folic acid|iron/i,

    class:
      "supplement",

    category:
      "nutrition",

    uses: [

      "Vitamin deficiency",

      "Weakness",

      "Nerve support",

      "Low immunity"

    ],

    mechanism:
      "Provides nutritional support.",

    warnings: [

      "Do not exceed recommended dose"

    ]

  },


  // ==========================
  // THYROID
  // ==========================

  {
    pattern:
      /thyroxine|levothyroxine/i,

    class:
      "thyroid medicine",

    category:
      "hormonal",

    uses: [

      "Hypothyroidism",

      "Low thyroid hormone"

    ],

    mechanism:
      "Replaces thyroid hormone.",

    warnings: [

      "Take on empty stomach"

    ]

  },


  // ==========================
  // ANXIETY / SLEEP
  // ==========================

  {
    pattern:
      /alprazolam|clonazepam|diazepam|melatonin/i,

    class:
      "anxiolytic",

    category:
      "mental health",

    uses: [

      "Anxiety",

      "Stress",

      "Sleep problem",

      "Panic disorder"

    ],

    mechanism:
      "Calms brain activity.",

    warnings: [

      "May cause dependence",

      "Avoid alcohol"

    ]

  },


  // ==========================
  // NAUSEA / VOMITING
  // ==========================

  {
    pattern:
      /ondansetron|domperidone|metoclopramide/i,

    class:
      "antiemetic",

    category:
      "digestive",

    uses: [

      "Nausea",

      "Vomiting",

      "Motion sickness"

    ],

    mechanism:
      "Blocks vomiting signals in brain.",

    warnings: [

      "May cause dizziness"

    ]

  }

];