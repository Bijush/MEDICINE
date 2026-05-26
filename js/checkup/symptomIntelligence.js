// ==============================
// SIMPLE CANONICAL SYSTEM
// CLEAN VERSION
// NO ALIAS SYSTEM
// ==============================

// ==============================
// NORMALIZE SYMPTOM
// ==============================

export function normalizeSymptom(
  symptom = ""
) {

  return String(symptom)

    .toLowerCase()

    .trim()

    .replaceAll("_", " ")

    .replaceAll("-", " ")

    .replace(/\s+/g, " ");
}

// ==============================
// CANONICAL SYMPTOM
// ==============================

export function getCanonicalSymptom(
  symptom = ""
) {

  return normalizeSymptom(
    symptom
  )

  .replace(/\s+/g, "_");
}