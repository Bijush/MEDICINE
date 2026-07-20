// ==============================
// TUBERCULOSIS DATASET
// ADVANCED PROFESSIONAL VERSION
// STRUCTURALLY ALIGNED & BUG-FREE
// ==============================

export const TUBERCULOSIS = [
  {
    id: "TB001",
    disease: "Tuberculosis",
    medical_name: "Pulmonary Tuberculosis",
    category: "fever",
    tags: ["tb", "tuberculosis", "lung", "infection", "chronic"],
    prevalence: "common",
    severity: "severe",
    contagious: true,
    emergency: true,
    minimum_match: 3,

    // ==========================
    // CAUSES
    // ==========================
    causes: {
      infected_person_contact: { present: true, weight: 35 },
      poor_nutrition: { present: true, weight: 20 },
      smoking: { present: true, weight: 25 },
      hiv_positive: { present: true, weight: 45 },
      overcrowded_environment: { present: true, weight: 20 },
      low_immunity: { present: true, weight: 20 }
    },

    // ==========================
    // SYMPTOMS
    // ==========================
    symptoms: {
      prolonged_fever: {
        category: "fever",
        present: true,
        weight: 35,
        followup: {
          question: "Has fever lasted more than 1 week?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "prolonged_fever"
          },
          priority: 10
        }
      },

      evening_fever: {
        category: "fever",
        present: true,
        weight: 40,
        followup: {
          question: "Does fever worsen in the evening?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "evening_fever"
          },
          priority: 9
        }
      },

      night_sweats: {
        category: "general",
        present: true,
        weight: 45,
        followup: {
          question: "Do you sweat excessively at night?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "night_sweats"
          },
          priority: 11
        }
      },

      chronic_cough: {
        category: "respiratory",
        present: true,
        weight: 50,
        followup: {
          question: "Has cough continued for months?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "chronic_cough"
          },
          priority: 12
        }
      },

      cough_more_than_2_weeks: {
        category: "respiratory",
        present: true,
        weight: 55,
        followup: {
          question: "Has cough lasted more than 2 weeks?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "cough_more_than_2_weeks" // CRITICAL FIX: Changed from chronic_cough to match its parent structural key
          },
          priority: 15
        }
      },

      blood_in_sputum: {
        category: "respiratory",
        present: true,
        weight: 60,
        followup: {
          question: "Is there blood while coughing?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "blood_in_sputum"
          },
          priority: 20
        }
      },

      chest_pain: {
        category: "pain",
        present: true,
        weight: 25,
        followup: {
          question: "Does chest pain worsen while breathing?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "chest_pain"
          },
          priority: 8
        }
      },

      breathing_difficulty: {
        category: "respiratory",
        present: true,
        weight: 30,
        followup: {
          question: "Do you feel breathless during walking?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "breathing_difficulty"
          },
          priority: 10
        }
      },

      fatigue: {
        category: "constitutional",
        present: true,
        weight: 35,
        followup: {
          question: "Do you feel extreme tiredness daily?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "fatigue"
          },
          priority: 7
        }
      },

      weakness: {
        category: "constitutional",
        present: true,
        weight: 30,
        followup: {
          question: "Are you unable to perform normal activities?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "weakness"
          },
          priority: 7
        }
      },

      weight_loss: {
        category: "constitutional",
        present: true,
        weight: 50,
        followup: {
          question: "Have you lost weight recently without trying?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "weight_loss"
          },
          priority: 13
        }
      },

      loss_of_appetite: {
        category: "constitutional",
        present: true,
        weight: 25,
        followup: {
          question: "Has appetite decreased significantly?",
          options: ["Yes", "No"],
          symptomMap: {
            "Yes": "loss_of_appetite"
          },
          priority: 6
        }
      },

      // ======================
      // ANCHORED EXCLUSIONS
      // ======================
      runny_nose: { category: "ENT", present: false, weight: -25 },
      sneezing: { category: "ENT", present: false, weight: -20 },
      watery_eyes: { category: "ENT", present: false, weight: -15 },
      vomiting_blood: { category: "gastrointestinal", present: false, weight: -50 },
      black_stool: { category: "gastrointestinal", present: false, weight: -50 },
      jaundice: { category: "liver", present: false, weight: -40 }
    },

    // ==========================
    // REQUIRED SYMPTOMS
    // ==========================
    required_symptoms: ["chronic_cough", "prolonged_fever"],
    required_negative_symptoms: ["runny_nose", "sneezing"],

    // ==========================
    // PHYSICAL EXAM
    // ==========================
    physical_exam: {
      lung_crackles: { present: true, weight: 35 },
      enlarged_lymph_nodes: { present: true, weight: 20 },
      pale: { present: true, weight: 15 },
      low_spo2: { present: true, weight: 40 },
      breathing_difficulty: { present: true, weight: 30 }
    },

    // ==========================
    // TESTS
    // ==========================
    tests: {
      tuberculosis_positive: { present: true, weight: 100 },
      sputum_afb_positive: { present: true, weight: 100 },
      mantoux_positive: { present: true, weight: 70 },
      chest_xray_tb_pattern: { present: true, weight: 90 },
      esr_high: { present: true, weight: 25 },
      chest_xray_normal: { present: false, weight: -70 }
    },

    // ==========================
    // COMPLICATIONS
    // ==========================
    complications: {
      respiratory_failure: { present: true, weight: 100 },
      pleural_effusion: { present: true, weight: 80 },
      tb_meningitis: { present: true, weight: 95 },
      sepsis: { present: true, weight: 90 }
    },

    // ==========================
    // RED FLAGS
    // ==========================
    red_flags: {
      breathing_difficulty: { present: true, weight: 95 },
      blood_in_sputum: { present: true, weight: 100 },
      low_spo2: { present: true, weight: 100 },
      unconsciousness: { present: true, weight: 100 }
    },

    // ==========================
    // DIFFERENTIAL DIAGNOSIS
    // ==========================
    differential_diagnosis: [
      "Pneumonia",
      "Lung Cancer",
      "Influenza",
      "COVID-19",
      "Bronchitis"
    ],

    // ==========================
    // SYMPTOM CLUSTERS
    // ==========================
    symptom_clusters: {
      classic_tb_cluster: {
        symptoms: ["chronic_cough", "weight_loss", "night_sweats", "prolonged_fever"],
        minimum_match: 3,
        bonus: 80
      },
      pulmonary_tb_cluster: {
        symptoms: ["blood_in_sputum", "chest_pain", "breathing_difficulty"],
        minimum_match: 2,
        bonus: 70
      }
    },

    // ==========================
    // PROGRESSION
    // ==========================
    progression: {
      worsening_after_5_days: { present: true, weight: 40 },
      prolonged_fever: { present: true, weight: 35 },
      weight_loss: { present: true, weight: 50 }
    },

    // ==========================
    // EPIDEMIOLOGY
    // ==========================
    epidemiology: {
      tuberculosis_contact: { present: true, weight: 60 },
      overcrowded_environment: { present: true, weight: 30 },
      smoking: { present: true, weight: 25 }
    },

    // ==========================
    // RECOVERY SIGNS
    // ==========================
    recovery_signs: {
      fever_reducing: { present: true, weight: 15 },
      appetite_returning: { present: true, weight: 15 },
      energy_improving: { present: true, weight: 15 }
    },

    // ==========================
    // MEDICINES
    // ==========================
    medicines: {
      first_line: [
        { name: "Isoniazid", type: "Anti-TB Antibiotic", dosage: "As prescribed", frequency: "Daily", purpose: "Bactericidal core elimination" },
        { name: "Rifampicin", type: "Anti-TB Antibiotic", dosage: "As prescribed", frequency: "Daily", purpose: "RNA polymerase inhibition of mycobacteria" },
        { name: "Pyrazinamide", type: "Anti-TB Antibiotic", dosage: "As prescribed", frequency: "Daily", purpose: "Sterilizing action in acidic environments" },
        { name: "Ethambutol", type: "Anti-TB Antibiotic", dosage: "As prescribed", frequency: "Daily", purpose: "Prevents bacterial cell wall synthesis synthesis" }
      ]
    },

    // ==========================
    // TREATMENTS
    // ==========================
    treatments: [
      "Complete full TB treatment course",
      "Regular sputum testing",
      "Maintain nutrition",
      "Isolation during infectious stage",
      "Regular doctor follow-up"
    ],

    // ==========================
    // LIFESTYLE
    // ==========================
    lifestyle_changes: [
      "Avoid smoking",
      "Wear mask while coughing",
      "Improve room ventilation",
      "Eat protein-rich food",
      "Avoid overcrowded places"
    ],

    // ==========================
    // DOCTOR CONSULTATION
    // ==========================
    doctor_consultation: [
      "Hemoptysis (coughing up fresh blood)",
      "Progressive worsening of breathlessness at rest",
      "Sudden drop in oxygen saturation levels below 94%",
      "Unexplained rapid loss of physical mass over consecutive weeks"
    ]
  }
];