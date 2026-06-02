// ==============================
// NORMALIZE RXNORM MEDICINE
// SMART VERSION
// ==============================


// ==============================
// CLEAN RXNORM NAME
// ==============================

function cleanMedicineName(
  text = ""
){

  text = String(text || "");


  // REMOVE {}

  text = text.replace(
    /[{}]/g,
    ""
  );


  // REMOVE START NUMBER

  text = text.replace(
    /^\d+\s*/,
    ""
  );


  // REMOVE MULTIPLE SPACES

  text = text.replace(
    /\s+/g,
    " "
  );


  return text.trim();

}


// ==============================
// SMART PARSER
// ==============================

function parseMedicineMeta(
  text = ""
){

  const result = {

    dosageForm: "",
    route: "",
    strength: "",
    releaseType: "standard",
    ingredients: []

  };


  // ==========================
  // NORMALIZE
  // ==========================

  const clean =
    text.trim();

  const lower =
    clean.toLowerCase();


  // ==========================
  // STRENGTH
  // ==========================

  const strengthMatch = clean.match(

    /\d+(\.\d+)?\s?(MG|MCG|G|ML|IU)(\/\d+(\.\d+)?\s?(MG|ML))?/i

  );

  if(strengthMatch){

    result.strength =
      strengthMatch[0];

  }


  // ==========================
  // ROUTE + DOSAGE FORM
  // ==========================

  const routeFormPatterns = [

    {
      regex:
        /(oral)\s+(tablet|capsule|suspension|solution|syrup)/i
    },

    {
      regex:
        /(topical)\s+(cream|ointment|gel|lotion)/i
    },

    {
      regex:
        /(ophthalmic)\s+(solution|drops)/i
    },

    {
      regex:
        /(otic)\s+(solution|drops)/i
    },

    {
      regex:
        /(nasal)\s+(spray)/i
    },

    {
      regex:
        /(injectable|injection)/i
    }

  ];


  for(const item of routeFormPatterns){

    const match =
      clean.match(item.regex);

    if(match){

      result.route =
        match[1] || "";

      result.dosageForm =
        match[2] || match[1];

      break;

    }

  }


  // ==========================
  // FALLBACK DOSAGE FORM
  // ==========================

  if(!result.dosageForm){

    const formMatch = lower.match(

      /\b(tablet|capsule|syrup|suspension|solution|cream|ointment|gel|drops|spray|powder|lotion)\b/i

    );

    if(formMatch){

      result.dosageForm =
        formMatch[1];

    }

  }


  // ==========================
  // RELEASE TYPE
  // ==========================

  if(

    /extended release|xr|er/i.test(clean)

  ){

    result.releaseType =
      "extended release";

  }

  else if(

    /delayed release|dr/i.test(clean)

  ){

    result.releaseType =
      "delayed release";

  }

  else if(

    /immediate release|ir/i.test(clean)

  ){

    result.releaseType =
      "immediate release";

  }


  // ==========================
  // INGREDIENT EXTRACTION
  // ==========================

  const ingredientText = clean

    .replace(result.strength, "")

   .replace(

  /\b(tablet|capsule|syrup|suspension|solution|cream|ointment|gel|drops|spray|powder|lotion|oral|topical|ophthalmic|otic|nasal|injection|injectable|extended release|delayed release|immediate release)\b/gi,

  ""

)

    .replace(/\s+/g, " ")

    .trim();


  result.ingredients =

    ingredientText

      .split("/")

      .map(x => x.trim())

      .filter(Boolean);


  return result;

}


// ==============================
// DETECT ANTIBIOTIC
// ==============================

function detectAntibiotic(
  ingredients = []
){

  const antibioticPatterns = [

    /mycin/i,
    /cillin/i,
    /cef/i,
    /cycline/i,
    /floxacin/i,
    /penem/i,
    /sulfa/i

  ];


  return ingredients.some(ingredient =>

    antibioticPatterns.some(
      pattern =>
        pattern.test(ingredient)
    )

  );

}


// ==============================
// RXNORM NORMALIZER
// ==============================

export function normalizeRxNormMedicine(
  item = {}
){

  // ==========================
  // CLEAN DATA
  // ==========================

  const cleanName =

    cleanMedicineName(
      item.name
    );


  const cleanBrand =

    cleanMedicineName(

      item.synonym ||
      item.name

    );


  // ==========================
  // SMART META PARSE
  // ==========================

  const meta =

    parseMedicineMeta(
      cleanName
    );


  // ==========================
  // ANTIBIOTIC DETECT
  // ==========================

  const isAntibiotic =

    detectAntibiotic(
      meta.ingredients
    );


  return {

    // ==========================
    // ID
    // ==========================

    id:

      item.rxcui ||

      cleanName ||

      crypto.randomUUID(),


    // ==========================
    // SOURCE
    // ==========================

    source:

      "rxnorm",


    // ==========================
    // NAME
    // ==========================

    name:

      cleanName ||

      "",


    // ==========================
    // GENERIC
    // ==========================

    generic:

      meta.ingredients?.join(
        " + "
      ) ||

      cleanName ||

      "",


    // ==========================
    // COMPOSITION
    // ==========================

    composition:

      meta.ingredients?.length

        ? meta.ingredients

        : [cleanName],


    // ==========================
    // BRANDS
    // ==========================

    brands: [

      cleanBrand ||

      cleanName ||

      ""

    ],


    // ==========================
    // GROUP
    // ==========================

    group:

      "api medicine",


    // ==========================
    // CATEGORY
    // ==========================

    category:

      "medicine",


    // ==========================
    // DOSAGE FORM
    // ==========================

    dosageForm:

      meta.dosageForm ||

      "unknown",


    // ==========================
    // ROUTE
    // ==========================

    route:

      meta.route ||

      "unknown",


    // ==========================
    // STRENGTH
    // ==========================

    strength:

      meta.strength ||

      "",


    // ==========================
    // RELEASE TYPE
    // ==========================

    releaseType:

      meta.releaseType ||

      "standard",


    // ==========================
    // TYPE
    // ==========================

    type:

      meta.ingredients.length > 1

        ? "combo"

        : "single",


    // ==========================
    // CLASS
    // ==========================

    class:

      isAntibiotic

        ? "antibiotic"

        : "general",


    // ==========================
    // FLAGS
    // ==========================

    rx: false,

    otc: !isAntibiotic,

    antibiotic:

      isAntibiotic,


    // ==========================
    // CONFIDENCE
    // ==========================

    confidence:

      95,


    // ==========================
    // SYMPTOMS
    // ==========================

    symptoms:

      item.symptom

        ? [item.symptom]

        : [],


    // ==========================
    // RAW DATA
    // ==========================

    raw:

      item

  };

}