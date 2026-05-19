// ==============================
// TYPHOID DATASET
// ==============================

export const TYPHOID = [

  {
    id: "TYP001",

    disease: "Typhoid Fever",

    category: "fever",

    severity: "severe",

    causes: {

      contaminated_water: {
        present: true,
        weight: 35
      },

      contaminated_food: {
        present: true,
        weight: 30
      },

      poor_sanitation: {
        present: true,
        weight: 25
      },

      typhoid_contact_history: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      prolonged_fever: {
        present: true,
        weight: 45
      },

      step_ladder_fever: {
        present: true,
        weight: 50
      },

      weakness: {
        present: true,
        weight: 20
      },

      headache: {
        present: true,
        weight: 20
      },

      abdominal_pain: {
        present: true,
        weight: 30
      },

      constipation: {
        present: true,
        weight: 20
      },

      diarrhea: {
        present: true,
        weight: 20
      },

      loss_of_appetite: {
        present: true,
        weight: 25
      },

      nausea: {
        present: true,
        weight: 15
      },

      vomiting: {
        present: true,
        weight: 15
      },

      dry_cough: {
        present: true,
        weight: 10
      },

      rose_spots: {
        present: true,
        weight: 40
      }
    },

    physical_exam: {

      coated_tongue: {
        present: true,
        weight: 25
      },

      abdominal_tenderness: {
        present: true,
        weight: 20
      },

      enlarged_spleen: {
        present: true,
        weight: 25
      },
      
      relative_bradycardia: {
  present: true,
  weight: 30
},
      dehydration: {
        present: true,
        weight: 20
      }
    },

    tests: {

      typhoid_igm_positive: {
        present: true,
        weight: 80
      },

      typhoid_igg_positive: {
        present: true,
        weight: 50
      },

      widal_positive: {
        present: true,
        weight: 70
      },

      blood_culture_positive: {
        present: true,
        weight: 90
      },

      wbc_low: {
        present: true,
        weight: 20
      }
    },

    complications: {

      intestinal_bleeding: {
        present: true,
        weight: 80
      },

      intestinal_perforation: {
        present: true,
        weight: 100
      },

      sepsis: {
        present: true,
        weight: 90
      },

      encephalopathy: {
        present: true,
        weight: 70
      }
    },

    red_flags: {

      severe_abdominal_pain: {
        present: true,
        weight: 70
      },

      black_stool: {
        present: true,
        weight: 80
      },

      shock: {
        present: true,
        weight: 100
      },

      unconsciousness: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "Azithromycin",
      "Cefixime",
      "Ceftriaxone",
      "Paracetamol",
      "ORS"
    ],

    treatments: [
      "Antibiotic Therapy",
      "Hydration Support",
      "Hospital Monitoring"
    ],

    lifestyle_changes: [
      "Drink clean water",
      "Maintain hand hygiene",
      "Avoid contaminated food",
      "Complete antibiotic course"
    ]
  }
];