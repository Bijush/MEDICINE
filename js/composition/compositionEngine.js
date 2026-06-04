// ==============================
// COMPOSITION ENGINE
// ALL-IN-ONE MEDICAL ENGINE
// ==============================


// ==============================
// IMPORTS
// ==============================

import {
  getMedicinesByComposition
} from "./compositionLoader.js";

import {

  getCompositionHistory

}

from "./compositionDataLoader.js";

import {
  detectMedicineInfo
}
from "./classDetector.js";
// ==============================
// UNIQUE ARRAY
// ==============================

function unique(values = []) {

  return [

    ...new Set(

      values.filter(Boolean)

    )

  ];

}


// ==============================
// CLEAN TEXT
// ==============================

function cleanText(value = "") {

  return String(value)

    .replaceAll("_", " ")

    .replaceAll("-", " ")

    .trim();

}


// ==============================
// FORMAT NAME
// ==============================

function formatName(
  value = ""
) {

  return String(value)

    .replaceAll("_", " ")

    .replaceAll("-", " ")

    .replace(/\s+/g, " ")

    .trim()

    .split(" ")

    .map(word =>

      word.charAt(0)

        .toUpperCase()

      +

      word.slice(1)

    )

    .join(" ");

}


// ==============================
// SAFE ARRAY
// ==============================

function getArray(data) {

  if (!data) {

    return [];

  }


  // Direct array
  if (Array.isArray(data)) {

    return data;

  }


  // Object bilingual support
  if (

    typeof data === "object"

  ) {

    const english =

      Array.isArray(data.en)

        ?

        data.en

        :

        data.en

          ?

          [data.en]

          :

          [];


    const bengali =

      Array.isArray(data.bn)

        ?

        data.bn

        :

        data.bn

          ?

          [data.bn]

          :

          [];


    // Merge English + Bengali
    return english.map(

      (item, index) => {

        const bn =

          bengali[index];


        return bn

          ?

          `${item}
${bn}`

          :

          item;

      }

    );

  }


  // Direct string
  if (

    typeof data === "string"

  ) {

    return [data];

  }


  return [];

}


// ==============================
// GENERATE INSIGHTS
// ==============================

export function generateCompositionInsights({

  compositionName = "",

  medicines = []

}) {

  // ==========================
  // AUTO LOAD
  // ==========================

  if (!medicines.length) {

    medicines =

      getMedicinesByComposition(
        compositionName
      );

  }


  // ==========================
  // COLLECTIONS
  // ==========================

  const diseases = [];

  const symptoms = [];

  const mechanisms = [];

  const brands = [];

  const classes = [];

  const categories = [];

  const sideEffects = [];

  const bestFor = [];

  const usageTypes = [];


  // ==========================
  // LOOP
  // ==========================

  medicines.forEach(medicine => {

  const aiInfo =

    detectMedicineInfo(
      medicine
    );

  // ==========================
  // REAL DATA FIRST
  // ==========================

  diseases.push(

    ...(medicine.diseases || [])

  );

  symptoms.push(

    ...(medicine.symptoms || [])

  );

  brands.push(

    ...(medicine.brands || [])

  );

  // ==========================
  // AI FALLBACK
  // ==========================

  if(

    !medicine.diseases?.length

  ){

    diseases.push(

      ...(aiInfo.uses || [])

    );

  }

  // ==========================
  // CATEGORY
  // ==========================

  if(

    medicine.category

  ){

    categories.push(
      medicine.category
    );

  }

  else if(

    aiInfo.category

  ){

    categories.push(
      aiInfo.category
    );

  }

  // ==========================
  // CLASS
  // ==========================

  if(

    medicine.class

  ){

    classes.push(
      medicine.class
    );

  }

  else if(

    aiInfo.class

  ){

    classes.push(
      aiInfo.class
    );

  }

  // ==========================
  // MECHANISM
  // ==========================

  if(

    aiInfo.mechanism

  ){

    mechanisms.push(
      aiInfo.mechanism
    );

  }

  // ==========================
  // WARNINGS
  // ==========================

  sideEffects.push(

    ...(aiInfo.warnings || [])

  );

});


  // ==========================
  // HISTORY
  // ==========================

  const history =

    getCompositionHistory(
      compositionName
    );


  // ==========================
  // AUTO INTERACTIONS
  // ==========================

  const interactions = [];


  if (

    classes.some(

      item =>

        item.toLowerCase()
        ===
        "nsaid"

    )

    &&

    medicines.length > 1

  ) {

    interactions.push({

      severity: "moderate",

      warning:
        "Multiple NSAID medicines detected."

    });

  }


  // ==========================
  // FINAL
  // ==========================

  return {

    compositionName:


      formatName(
        compositionName
      ),


    diseases:

      unique([

        ...diseases,

        ...bestFor

      ])

        .map(cleanText)

        .slice(0, 10),


    symptoms:

      unique(symptoms)

        .map(cleanText)

        .slice(0, 10),


    bestFor:

      unique(bestFor)

        .map(cleanText)

        .slice(0, 10),


    usageTypes:

      unique(usageTypes)

        .map(cleanText)

        .slice(0, 10),


    brands:

      unique(brands)

        .slice(0, 20),


    classes:

      unique(classes)

        .map(cleanText),


    categories:

      unique(categories)

        .map(cleanText),


    sideEffects:

      unique(sideEffects)

        .map(cleanText)

        .slice(0, 10),


    mechanism:

      unique(mechanisms)[0]

      ||

      "Mechanism information unavailable.",


    explanation:

      `${formatName(
        compositionName
      )} is commonly used for treating ${unique([
        ...diseases,
        ...bestFor
      ])

        .slice(0, 3)

        .map(cleanText)

        .join(", ")}.`,


    history,


    interactions,


    medicineCount:
      medicines.length

  };

}


// ==============================
// LEARNING CONTENT
// ==============================

export function generateLearningContent({

  compositionName = "",

  insights = {}

}) {

  const diseases =

    insights.diseases || [];


  const formattedName =

    formatName(
      compositionName
    );


  return {

    // ========================
    // SHORT SUMMARY
    // ========================

    shortSummary: `

${formattedName} is commonly used for:

${diseases.slice(0, 3).join(", ")}.

`.trim(),


    // ========================
    // BEGINNER
    // ========================

    beginnerExplanation: `

${formattedName} helps treat:

${diseases.slice(0, 5).join(", ")}.

Mechanism:

${insights.mechanism}

`.trim(),


    // ========================
    // ADVANCED
    // ========================

    advancedExplanation: `

${insights.explanation}

Mechanism:

${insights.mechanism}

Common Uses:

${diseases.join(", ")}

`.trim(),


    // ========================
    // CHILD FRIENDLY
    // ========================

    childFriendlyExplanation: `

${formattedName} helps people feel better when they have problems like:

${diseases.slice(0, 3).join(", ")}.

`.trim()

  };

}