// ==============================
// MALARIA DATASET
// ==============================

export const MALARIA = [

  {
    id: "MAL001",

    disease: "Malaria",

    category: "fever",

    severity: "severe",

    causes: {

      mosquito_bite: {
        present: true,
        weight: 35
      },

      malaria_endemic_area: {
        present: true,
        weight: 25
      },

      stagnant_water_exposure: {
        present: true,
        weight: 15
      }
    },

    symptoms: {

      high_fever: {
        present: true,
        weight: 40
      },

      intermittent_fever: {
        present: true,
        weight: 35
      },

      chills: {
        present: true,
        weight: 40
      },

      rigor: {
        present: true,
        weight: 35
      },

      sweating: {
        present: true,
        weight: 30
      },

      headache: {
        present: true,
        weight: 20
      },

      body_ache: {
        present: true,
        weight: 20
      },

      muscle_pain: {
        present: true,
        weight: 20
      },

      nausea: {
        present: true,
        weight: 15
      },

      vomiting: {
        present: true,
        weight: 15
      },

      fatigue: {
        present: true,
        weight: 20
      },
     
     cyclical_fever: {
  present: true,
  weight: 45
},
      abdominal_pain: {
        present: true,
        weight: 15
      }
    },

    physical_exam: {

      pale: {
        present: true,
        weight: 25
      },

      enlarged_spleen: {
        present: true,
        weight: 40
      },

      jaundice: {
        present: true,
        weight: 25
      },

      dehydration: {
        present: true,
        weight: 20
      }
    },

    tests: {

      malaria_positive: {
        present: true,
        weight: 100
      },

      peripheral_smear_positive: {
        present: true,
        weight: 90
      },

      platelet_low: {
        present: true,
        weight: 40
      },

      hemoglobin_low: {
        present: true,
        weight: 30
      },

      bilirubin_high: {
        present: true,
        weight: 25
      }
    },

    complications: {

      cerebral_malaria: {
        present: true,
        weight: 100
      },

      severe_anemia: {
        present: true,
        weight: 60
      },

      kidney_failure: {
        present: true,
        weight: 70
      },

      liver_failure: {
        present: true,
        weight: 60
      },

      respiratory_failure: {
        present: true,
        weight: 70
      }
    },

    red_flags: {

      unconsciousness: {
        present: true,
        weight: 100
      },

      seizure: {
        present: true,
        weight: 90
      },

      severe_breathlessness: {
        present: true,
        weight: 70
      },

      shock: {
        present: true,
        weight: 100
      },

      severe_jaundice: {
        present: true,
        weight: 70
      }
    },

    medicines: [
      "Artemether",
      "Lumefantrine",
      "Primaquine",
      "Paracetamol",
      "IV Fluids"
    ],

    treatments: [
      "Hospital Observation",
      "Antimalarial Therapy",
      "Hydration Support"
    ],

    lifestyle_changes: [
      "Use mosquito net",
      "Avoid mosquito exposure",
      "Remove stagnant water",
      "Early treatment completion"
    ]
  }
];