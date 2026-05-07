export const CONFIG = {

  collection: "medicines",

  fields: [

    // =====================================================
    // 🔹 BASIC
    // =====================================================

    {
      id: "name",
      label: "Medicine Name",
      type: "text",
      required: true
    },

    {
      id: "generic",
      label: "Generic Name",
      type: "text"
    },

    {
      id: "group",
      label: "Group",
      type: "select",

      options: [

        "pain",
        "antibiotic",
        "vitamin",
        "fever",
        "gastric",
        "allergy",
        "opioid",
        "sexual",
        "tooth",
        "stomach"

      ]
    },

    {
      id: "subgroup",
      label: "Sub Group",
      type: "text"
    },

    {
      id: "class",
      label: "Class",
      type: "text"
    },

    {
      id: "category",
      label: "Form",
      type: "select",

      options: [

        "tablet",
        "capsule",
        "syrup",
        "drops",
        "injection",
        "ointment",
        "cream",
        "gel"

      ]
    },

    {
      id: "route",
      label: "Route",
      type: "text"
    },

    // =====================================================
    // 🔹 COMPOSITION
    // =====================================================

    {
      id: "composition",
      label: "Composition",
      type: "array"
    },

    {
      id: "strengths",
      label: "Strengths",
      type: "array"
    },

    {
      id: "dosageForms",
      label: "Dosage Forms",
      type: "array"
    },

    // =====================================================
    // 🔹 SEARCH / TAGS
    // =====================================================

    {
      id: "tags",
      label: "Tags",
      type: "array"
    },

    {
      id: "brands",
      label: "Brands",
      type: "array"
    },

    {
      id: "searchableText",
      label: "Search Keywords",
      type: "array"
    },

    // =====================================================
    // 🔹 THERAPEUTIC
    // =====================================================

    {
      id: "therapeuticCategory",
      label: "Therapeutic Category",
      type: "objectArray"
    },

    {
      id: "symptoms",
      label: "Symptoms",
      type: "objectArray"
    },

    {
      id: "diseases",
      label: "Diseases",
      type: "objectArray"
    },

    {
      id: "bestFor",
      label: "Best For",
      type: "objectArray"
    },

    // =====================================================
    // 🔹 DOSING
    // =====================================================

    {
      id: "dosing",
      label: "Dosing",
      type: "object"
    },

    {
      id: "onset",
      label: "Onset",
      type: "object"
    },

    {
      id: "duration",
      label: "Duration",
      type: "object"
    },

    // =====================================================
    // 🔹 SIDE EFFECTS
    // =====================================================

    {
      id: "sideEffects",
      label: "Side Effects",
      type: "object"
    },

    // =====================================================
    // 🔹 RISKS
    // =====================================================

    {
      id: "risks",
      label: "Risks",
      type: "object"
    },

    // =====================================================
    // 🔹 SAFETY
    // =====================================================

    {
      id: "safety",
      label: "Safety",
      type: "object"
    },

    // =====================================================
    // 🔹 AI
    // =====================================================

    {
      id: "ai",
      label: "AI Data",
      type: "object"
    },

    // =====================================================
    // 🔹 UI
    // =====================================================

    {
      id: "ui",
      label: "UI",
      type: "object"
    },

    // =====================================================
    // 🔹 MECHANISM
    // =====================================================

    {
      id: "mechanism",
      label: "Mechanism",
      type: "object"
    },

    // =====================================================
    // 🔹 COMBO
    // =====================================================

    {
      id: "comboExplain",
      label: "Combo Explain",
      type: "array"
    },

    // =====================================================
    // 🔹 FLAGS
    // =====================================================

    {
      id: "rx",
      label: "Prescription Required",
      type: "boolean"
    },

    {
      id: "otc",
      label: "OTC",
      type: "boolean"
    },

    {
      id: "antibiotic",
      label: "Antibiotic",
      type: "boolean"
    },

    {
      id: "controlledDrug",
      label: "Controlled Drug",
      type: "boolean"
    },

    {
      id: "emergencyUse",
      label: "Emergency Use",
      type: "boolean"
    }

  ]

};