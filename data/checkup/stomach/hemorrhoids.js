// ==============================
// HEMORRHOIDS DATASET
// ==============================

export const HEMORRHOIDS = [

  {
    id: "HEM001",

    disease: "Hemorrhoids",

    medical_name: "Piles",

    category: "stomach",

    severity: "moderate",

    causes: {

      chronic_constipation: {
        present: true,
        weight: 35
      },

      straining_during_stool: {
        present: true,
        weight: 35
      },

      low_fiber_diet: {
        present: true,
        weight: 20
      },

      pregnancy: {
        present: true,
        weight: 15
      },

      obesity: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      blood_in_stool: {
        present: true,
        weight: 50
      },

      pain_during_stool: {
        present: true,
        weight: 35
      },

      itching_around_anus: {
        present: true,
        weight: 30
      },

      swelling_near_anus: {
        present: true,
        weight: 30
      },

      discomfort_sitting: {
        present: true,
        weight: 20
      },

      mucus_discharge: {
        present: true,
        weight: 15
      },

      incomplete_bowel_feeling: {
        present: true,
        weight: 20
      }
    },

    physical_exam: {

      hemorrhoidal_mass_visible: {
        present: true,
        weight: 60
      },

      anal_swelling: {
        present: true,
        weight: 40
      },

      anal_tenderness: {
        present: true,
        weight: 25
      }
    },

    tests: {

      proctoscopy_positive: {
        present: true,
        weight: 70
      },

      hemoglobin_low: {
        present: true,
        weight: 20
      },

      stool_occult_blood_positive: {
        present: true,
        weight: 30
      }
    },

    complications: {

      anemia: {
        present: true,
        weight: 40
      },

      thrombosed_hemorrhoid: {
        present: true,
        weight: 60
      },

      severe_bleeding: {
        present: true,
        weight: 50
      }
    },

    red_flags: {

      massive_bleeding: {
        present: true,
        weight: 80
      },

      severe_pain: {
        present: true,
        weight: 50
      },

      infection: {
        present: true,
        weight: 50
      }
    },

    medicines: [
      "Lidocaine Ointment",
      "Hydrocortisone Cream",
      "Laxative",
      "Painkiller"
    ],

    treatments: [
      "Band Ligation",
      "Laser Therapy",
      "Hemorrhoid Surgery"
    ],

    lifestyle_changes: [
      "High fiber diet",
      "Drink more water",
      "Avoid straining",
      "Regular bowel habits",
      "Exercise regularly"
    ]
  }
];