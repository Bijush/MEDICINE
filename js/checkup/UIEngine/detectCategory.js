import { ALL_DISEASES }
from "../register/dataRegistry.js";

// AUTO CATEGORY DETECTION
// ==============================

export function detectCategory(
  symptom
) {

  // ==========================
  // DATASET DRIVEN CATEGORY
  // ==========================

  for (const disease of ALL_DISEASES) {

    const symptomData =

      disease.symptoms?.[
        symptom
      ];

    if (

      symptomData?.category

    ) {

      return (
        symptomData.category
      );
    }
  }

  const lower =
    symptom.toLowerCase();

  // ==========================
  // EMERGENCY
  // MUST STAY FIRST
  // ==========================

  if (

    lower.includes("blood") ||
    lower.includes("bleeding") ||
    lower.includes("vomiting_blood") ||
    lower.includes("black_stool") ||
    lower.includes("bloody") ||
    lower.includes("severe_pain") ||
    lower.includes("chest_pain") ||
    lower.includes("collapse") ||
    lower.includes("unconscious") ||
    lower.includes("seizure")

  ) {

    return "Emergency";
  }

  // ==========================
  // EYE
  // ==========================

  if (

    lower.includes("eye") ||
    lower.includes("eyes") ||
    lower.includes("vision") ||
    lower.includes("red_eyes") ||
    lower.includes("watery_eyes") ||
    lower.includes("itching_eyes") ||
    lower.includes("light_sensitivity")

  ) {

    return "Eye";
  }

  // ==========================
  // RESPIRATORY
  // ==========================

  if (

    lower.includes("cough") ||
    lower.includes("sputum") ||
    lower.includes("breath") ||
    lower.includes("wheez") ||
    lower.includes("nose") ||
    lower.includes("throat") ||
    lower.includes("sinus") ||
    lower.includes("chest") ||
    lower.includes("lung") ||
    lower.includes("asthma") ||
    lower.includes("sneezing")

  ) {

    return "Respiratory";
  }

  // ==========================
  // STOMACH / DIGESTIVE
  // ==========================

  if (

    lower.includes("abdominal") ||
    lower.includes("stomach") ||
    lower.includes("vomit") ||
    lower.includes("nausea") ||
    lower.includes("diarrhea") ||
    lower.includes("constipation") ||
    lower.includes("stool") ||
    lower.includes("heartburn") ||
    lower.includes("acidity") ||
    lower.includes("bloating") ||
    lower.includes("appetite") ||
    lower.includes("gas") ||
    lower.includes("indigestion") ||
    lower.includes("reflux") ||
    lower.includes("cramp") ||
    lower.includes("bowel") ||
    lower.includes("belching")

  ) {

    return "Stomach";
  }

  // ==========================
  // LIVER
  // ==========================

  if (

    lower.includes("jaundice") ||
    lower.includes("yellow") ||
    lower.includes("urine") ||
    lower.includes("liver")

  ) {

    return "Liver";
  }

  // ==========================
  // HEART
  // ==========================

  if (

    lower.includes("heart") ||
    lower.includes("palpitation") ||
    lower.includes("pressure") ||
    lower.includes("left_arm") ||
    lower.includes("pulse")

  ) {

    return "Heart";
  }

  // ==========================
  // GENERAL FEVER
  // ==========================

  if (

    lower.includes("fever") ||
    lower.includes("chills") ||
    lower.includes("sweating") ||
    lower.includes("fatigue") ||
    lower.includes("weakness") ||
    lower.includes("headache") ||
    lower.includes("body_ache") ||
    lower.includes("muscle_pain") ||
    lower.includes("joint_pain") ||
    lower.includes("rigor") ||
    lower.includes("infection")

  ) {

    return "General Fever";
  }

  // ==========================
  // NEUROLOGICAL
  // ==========================

  if (

    lower.includes("dizziness") ||
    lower.includes("head_spin") ||
    lower.includes("faint") ||
    lower.includes("confusion") ||
    lower.includes("memory") ||
    lower.includes("tingling") ||
    lower.includes("numbness")

  ) {

    return "Neurological";
  }

  // ==========================
  // SKIN
  // ==========================

  if (

    lower.includes("rash") ||
    lower.includes("skin") ||
    lower.includes("itch") ||
    lower.includes("blister") ||
    lower.includes("redness")

  ) {

    return "Skin";
  }

  // ==========================
  // URINARY
  // ==========================

  if (

    lower.includes("urine") ||
    lower.includes("urinary") ||
    lower.includes("burning_urination") ||
    lower.includes("frequent_urination")

  ) {

    return "Urinary";
  }

  // ==========================
  // DEFAULT
  // ==========================

  return "Other";
}