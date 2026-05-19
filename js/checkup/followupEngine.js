// ==============================
// DYNAMIC FOLLOWUP ENGINE
// ==============================

export function getFollowupQuestions(
  symptoms = {},
  topDiseases = []
) {

  const questions = [];

  // ==========================
  // COUGH
  // ==========================

  if (

    symptoms.cough ||

    symptoms.dry_cough ||

    symptoms.wet_cough

  ) {

    questions.push({

      question:
        "Is the cough dry?",

      symptomKey:
        "dry_cough",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Is there yellow sputum?",

      symptomKey:
        "yellow_sputum",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any blood in sputum?",

      symptomKey:
        "blood_in_sputum",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "How long has the cough lasted?",

      symptomKeyMap: {

        "< 3 days":
          "mild_cough",

        "1 week":
          "chronic_cough",

        "2+ weeks":
          "cough_more_than_2_weeks"
      },

      options: [
        "< 3 days",
        "1 week",
        "2+ weeks"
      ]
    });

    questions.push({

      question:
        "Does cough worsen at night?",

      symptomKey:
        "night_cough",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // BREATHING
  // ==========================

  if (

    symptoms.breathing_difficulty ||

    symptoms.wheezing

  ) {

    questions.push({

      question:
        "Do you hear wheezing sounds?",

      symptomKey:
        "wheezing",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Does breathing worsen at night?",

      symptomKey:
        "night_breathing_problem",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Do you smoke long-term?",

      symptomKey:
        "long_term_smoking",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Does cold weather trigger symptoms?",

      symptomKey:
        "cold_weather_trigger",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // FEVER
  // ==========================

  if (

    symptoms.fever ||

    symptoms.high_fever

  ) {

    questions.push({

      question:
        "Do you have chills?",

      symptomKey:
        "chills",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Is fever very high?",

      symptomKeyMap: {

        "Mild":
          "mild_fever",

        "Moderate":
          "fever",

        "Very High":
          "high_fever"
      },

      options: [
        "Mild",
        "Moderate",
        "Very High"
      ]
    });

    questions.push({

      question:
        "How many days has fever lasted?",

      symptomKeyMap: {

        "1-2 days":
          "sudden_fever",

        "3-5 days":
          "prolonged_fever",

        "1+ week":
          "intermittent_fever"
      },

      options: [
        "1-2 days",
        "3-5 days",
        "1+ week"
      ]
    });

    questions.push({

      question:
        "Any body ache?",

      symptomKey:
        "body_ache",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // STOMACH
  // ==========================

  if (

    symptoms.abdominal_pain ||

    symptoms.vomiting

  ) {

    questions.push({

      question:
        "Where is the abdominal pain located?",

      symptomKeyMap: {

        "Upper Abdomen":
          "upper_abdominal_pain",

        "Lower Abdomen":
          "abdominal_pain",

        "Whole Abdomen":
          "severe_abdominal_pain"
      },

      options: [
        "Upper Abdomen",
        "Lower Abdomen",
        "Whole Abdomen"
      ]
    });

    questions.push({

      question:
        "Any diarrhea?",

      symptomKey:
        "diarrhea",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any blood in vomit?",

      symptomKey:
        "vomiting_blood",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Pain after food?",

      symptomKey:
        "pain_after_food",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // LIVER
  // ==========================

  if (

    symptoms.yellow_skin ||

    symptoms.jaundice

  ) {

    questions.push({

      question:
        "Is urine dark yellow?",

      symptomKey:
        "dark_urine",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any itching?",

      symptomKey:
        "itching",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any abdominal swelling?",

      symptomKey:
        "abdominal_swelling",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // ASTHMA TARGETING
  // ==========================

  if (

    topDiseases.includes(
      "Asthma"
    )

  ) {

    questions.push({

      question:
        "Any allergy history?",

      symptomKey:
        "allergy_history",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Do symptoms worsen with dust?",

      symptomKey:
        "dust_exposure",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any recurrent breathing attacks?",

      symptomKey:
        "recurrent_breathing_problem",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // COPD TARGETING
  // ==========================

  if (

    topDiseases.includes(
      "Chronic Obstructive Pulmonary Disease"
    )

  ) {

    questions.push({

      question:
        "How many years have you smoked?",

      symptomKeyMap: {

        "< 5 years":
          "smoking",

        "5-10 years":
          "long_term_smoking",

        "10+ years":
          "long_term_smoking"
      },

      options: [
        "< 5 years",
        "5-10 years",
        "10+ years"
      ]
    });

    questions.push({

      question:
        "Do you get breathless while walking?",

      symptomKey:
        "exercise_intolerance",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any chronic cough for months?",

      symptomKey:
        "chronic_cough",

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // PNEUMONIA TARGETING
  // ==========================

  if (

    topDiseases.includes(
      "Pneumonia"
    )

  ) {

    questions.push({

      question:
        "Any chest pain during breathing?",

      symptomKey:
        "pleuritic_chest_pain",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any yellow sputum?",

      symptomKey:
        "yellow_sputum",

      options: [
        "Yes",
        "No"
      ]
    });

    questions.push({

      question:
        "Any high fever with chills?",

      symptomKeyMap: {

        "Yes":
          "high_fever",

        "No":
          ""
      },

      options: [
        "Yes",
        "No"
      ]
    });
  }

  // ==========================
  // REMOVE DUPLICATES
  // ==========================

  return questions

    .filter(
      (
        item,
        index,
        self
      ) =>

        index ===

        self.findIndex(
          q =>

            q.question ===
            item.question
        )
    )

    .slice(0, 12);
}