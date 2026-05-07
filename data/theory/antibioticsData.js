// 📦 Antibiotics Data (EXAM READY + SMART)

export const DATA = [

  // ===============================
  // 🧱 CELL WALL
  // ===============================
  {
    id: "cell_wall",
    name: "Cell Wall Inhibitors",
    group: "antibiotic",
    category: "mechanism",

    title: "Cell Wall Inhibitors",
    description: "Bacteria er cell wall banano bondho kore, tai bacteria phate mara jay.",

    mnemonic: "WALL = PEN + CEF + MEM",

    tags: ["cell wall", "beta lactam"],
    diseases: ["Pneumonia","UTI","Sepsis","Meningitis"],

    subtypes: [
      {
        name: "Beta-Lactams",
        mechanism: "Cell wall synthesis block kore",
        examples: [
          "Penicillin","Amoxicillin","Ampicillin",
          "Cefixime","Ceftriaxone","Cefuroxime",
          "Meropenem","Imipenem"
        ]
      },
      {
        name: "Non-Lactams",
        mechanism: "Cell wall weak kore",
        examples: [
          "Vancomycin","Teicoplanin","Bacitracin","Fosfomycin"
        ]
      }
    ],

    // 🎯 EXAM MAP
    examMap: [
      {
        disease: "Pneumonia",
        firstLine: ["Amoxicillin"],
        alternative: ["Azithromycin"],
        severe: ["Ceftriaxone"]
      },
      {
        disease: "Meningitis",
        firstLine: ["Ceftriaxone"],
        severe: ["Meropenem"]
      },
      {
        disease: "MRSA",
        firstLine: ["Vancomycin"]
      }
    ]
  },

  // ===============================
  // 🧬 PROTEIN
  // ===============================
  {
    id: "protein",
    name: "Protein Synthesis Inhibitors",
    group: "antibiotic",
    category: "mechanism",

    title: "Protein Inhibitors",
    description: "Protein synthesis bondho kore bacteria growth thamay.",

    mnemonic: {
      "30S": "Tetra + Amino",
      "50S": "Macro + Clinda"
    },

    tags: ["ribosome","30S","50S"],
    diseases: ["TB","Typhoid","Pneumonia"],

    subtypes: [
      {
        name: "30S Ribosome",
        mechanism: "mRNA misreading / tRNA block",
        examples: [
          "Streptomycin","Gentamicin","Amikacin",
          "Tetracycline","Doxycycline"
        ]
      },
      {
        name: "50S Ribosome",
        mechanism: "Protein elongation stop",
        examples: [
          "Azithromycin","Erythromycin",
          "Chloramphenicol","Clindamycin","Linezolid"
        ]
      }
    ],

    examMap: [
      {
        disease: "Typhoid",
        firstLine: ["Azithromycin"],
        alternative: ["Cefixime"]
      },
      {
        disease: "TB",
        firstLine: ["Streptomycin"]
      },
      {
        disease: "Atypical Pneumonia",
        firstLine: ["Azithromycin"]
      }
    ]
  },

  // ===============================
  // 🧬 DNA
  // ===============================
  {
    id: "dna",
    name: "DNA / Nucleic Acid Inhibitors",
    group: "antibiotic",
    category: "mechanism",

    title: "DNA Inhibitors",
    description: "DNA replication ba folic acid block kore bacteria destroy kore.",

    mnemonic: "DNA = FQ + Sulfa",

    tags: ["dna","replication"],
    diseases: ["UTI","GI infection","Typhoid"],

    subtypes: [
      {
        name: "Fluoroquinolones",
        mechanism: "DNA replication block",
        examples: [
          "Ciprofloxacin","Levofloxacin","Ofloxacin"
        ]
      },
      {
        name: "Folic Acid Inhibitors",
        mechanism: "Folic acid synthesis block",
        examples: [
          "Sulfamethoxazole","Trimethoprim","Co-trimoxazole"
        ]
      }
    ],

    examMap: [
      {
        disease: "UTI",
        firstLine: ["Nitrofurantoin"],
        alternative: ["Ciprofloxacin"]
      },
      {
        disease: "Traveler's diarrhea",
        firstLine: ["Ciprofloxacin"]
      }
    ]
  }
];