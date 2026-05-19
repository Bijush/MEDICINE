// ==============================
// INTESTINAL OBSTRUCTION DATASET
// ==============================

export const INTESTINAL_OBSTRUCTION = [

  {
    id: "IO001",

    disease: "Intestinal Obstruction",

    category: "stomach",

    severity: "emergency",

    causes: {

      abdominal_surgery_history: {
        present: true,
        weight: 25
      },

      hernia: {
        present: true,
        weight: 25
      },

      intestinal_tumor: {
        present: true,
        weight: 30
      },

      severe_constipation: {
        present: true,
        weight: 20
      }
    },

    symptoms: {

      severe_abdominal_pain: {
        present: true,
        weight: 50
      },

      abdominal_bloating: {
        present: true,
        weight: 40
      },

      vomiting: {
        present: true,
        weight: 35
      },

      inability_to_pass_stool: {
        present: true,
        weight: 45
      },

      inability_to_pass_gas: {
        present: true,
        weight: 40
      },

      constipation: {
        present: true,
        weight: 30
      },

      nausea: {
        present: true,
        weight: 20
      }
    },

    physical_exam: {

      abdominal_distension: {
        present: true,
        weight: 35
      },

      absent_bowel_sound: {
        present: true,
        weight: 45
      },

      abdominal_tenderness: {
        present: true,
        weight: 25
      },

      dehydration: {
        present: true,
        weight: 20
      },
      
      high_pitched_bowel_sound: {
  present: true,
  weight: 35
}
    },

    tests: {

      xray_air_fluid_level: {
        present: true,
        weight: 70
      },

      ct_obstruction_positive: {
        present: true,
        weight: 85
      },

      electrolyte_imbalance: {
        present: true,
        weight: 25
      },

      wbc_high: {
        present: true,
        weight: 20
      }
    },

    complications: {

      bowel_perforation: {
        present: true,
        weight: 90
      },

      sepsis: {
        present: true,
        weight: 80
      },

      shock: {
        present: true,
        weight: 90
      },

      intestinal_necrosis: {
        present: true,
        weight: 90
      }
    },

    red_flags: {

      severe_abdominal_pain: {
        present: true,
        weight: 70
      },

      persistent_vomiting: {
        present: true,
        weight: 50
      },

      unconsciousness: {
        present: true,
        weight: 100
      },

      shock: {
        present: true,
        weight: 100
      }
    },

    medicines: [
      "IV Fluids",
      "Antibiotics",
      "Painkiller"
    ],

    treatments: [
      "Nasogastric Tube",
      "Emergency Surgery",
      "Hospital Admission"
    ],

    lifestyle_changes: [
      "Immediate hospital evaluation",
      "Avoid self-medication"
    ]
  }
];