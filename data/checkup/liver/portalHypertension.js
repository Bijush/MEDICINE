// ==============================
// PORTAL HYPERTENSION
// ==============================

export const PORTAL_HYPERTENSION = [

  {
    id: "PH001",

    disease: "Portal Hypertension",

    category: "liver",

    severity: "severe",

    symptoms: {

      abdominal_swelling: {
        present: true,
        weight: 25
      },

      vomiting_blood: {
        present: true,
        weight: 40
      },

      fatigue: {
        present: true,
        weight: 10
      }
    },

    physical_exam: {

      ascites: {
        present: true,
        weight: 35
      },

      splenomegaly: {
        present: true,
        weight: 20
      }
    },

    tests: {

      portal_vein_dilated: {
        present: true,
        weight: 50
      },

      platelet_low: {
        present: true,
        weight: 15
      }
    },

    medicines: [
      "Propranolol",
      "Diuretics"
    ]
  }
];