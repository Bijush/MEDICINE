// ==============================
// JAUNDICE DATASET
// ==============================

export const JAUNDICE = [

  {
    id: "JD001",

    disease: "Jaundice",

    category: "liver",

    severity: "moderate",

    causes: {

      hepatitis: {
        present: true,
        weight: 20
      },

      fatty_liver: {
        present: true,
        weight: 10
      },

      bile_duct_obstruction: {
        present: true,
        weight: 25
      },

      alcohol_liver_damage: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      yellow_skin: {
        present: true,
        weight: 40
      },

      yellow_eyes: {
        present: true,
        weight: 40
      },

      dark_urine: {
        present: true,
        weight: 20
      },

      pale_stool: {
        present: true,
        weight: 15
      },

      fatigue: {
        present: true,
        weight: 10
      },

      nausea: {
        present: true,
        weight: 8
      },

      vomiting: {
        present: true,
        weight: 8
      },

      itching: {
        present: true,
        weight: 15
      },

      appetite_loss: {
        present: true,
        weight: 10
      },

      fever: {
        present: false,
        weight: -5
      }
    },

    physical_exam: {

      icterus: {
        present: true,
        weight: 50
      },

      hepatomegaly: {
        present: true,
        weight: 15
      },

      abdominal_tenderness: {
        present: true,
        weight: 10
      }
    },

    tests: {

      bilirubin_high: {
        present: true,
        weight: 60
      },

      sgpt_high: {
        present: true,
        weight: 20
      },

      sgot_high: {
        present: true,
        weight: 20
      },

      alkaline_phosphatase_high: {
        present: true,
        weight: 25
      },

      ultrasound_abnormal: {
        present: true,
        weight: 30
      }
    },

    red_flags: {

      confusion: {
        present: true,
        weight: 40
      },

      bleeding: {
        present: true,
        weight: 40
      },

      severe_abdominal_swelling: {
        present: true,
        weight: 40
      }
    },

    medicines: [
      "Ursodeoxycholic Acid",
      "Liver Supportive Care"
    ]
  }
];