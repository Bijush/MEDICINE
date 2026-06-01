// ==============================
// GOOGLE SEARCH LINK FIELDS
// ==============================

const GOOGLE_SEARCH_FIELDS = new Set([

  // ==========================
  // DISCOVERY
  // ==========================

  "discoveredBy",

  "inventedBy",


  // ==========================
  // SCIENCE
  // ==========================

  "chemicalFormula",

  "mechanism",

  "howItWorks",
  "details",


  // ==========================
  // MEDICAL
  // ==========================

  "medicineClass",

  "drugClass",

  "therapeuticClass",

  "composition",

  "generic",

  "ingredient",

  "activeIngredient",

  "name",


  // ==========================
  // GEOGRAPHY
  // ==========================

  "country",

  "originCountry",


  // ==========================
  // CLINICAL
  // ==========================

  "diseases",

  "symptoms",

  "sideEffects",

  "bestFor",


  // ==========================
  // COMMERCIAL
  // ==========================

  "brands",

  "manufacturer"

]);


// ==============================
// SAFE STRING
// ==============================

function safeString(
  value = ""
){

  return String(
    value ?? ""
  ).trim();

}


// ==============================
// CREATE GOOGLE SEARCH URL
// ==============================

export function createGoogleSearchUrl(
  text = ""
){

  const cleanText =

    safeString(text);


  if(!cleanText){

    return "";

  }


  return (

    "https://www.google.com/search?q="

    +

    encodeURIComponent(
      cleanText
    )

  );

}


// ==============================
// CREATE GOOGLE SEARCH LINK
// ==============================

export function createGoogleSearchLink(

  text = "",

  options = {}

){

  const cleanText =

    safeString(text);


  if(!cleanText){

    return "";

  }


  const {

    className =
      "google-search-link",

    searchQuery =
      cleanText,

    fieldKey = ""

  } = options;


  return `

    <span
      class="${className}"

      data-query="${cleanText}"

      data-search="${searchQuery}"

      data-field="${fieldKey}"
    >

      ${cleanText}

      <span class="search-icon">
        🔍
      </span>

    </span>

  `;

}


// ==============================
// SHOULD ENABLE GOOGLE SEARCH
// ==============================

export function shouldEnableGoogleSearch(
  key = ""
){

  return GOOGLE_SEARCH_FIELDS.has(

    safeString(key)

  );

}


// ==============================
// AUTO GOOGLE SEARCH VALUE
// ==============================

export function autoGoogleSearchValue(

  key = "",

  value = "",

  options = {}

){

  // ==========================
  // DISABLED FIELD
  // ==========================

  if(

    !shouldEnableGoogleSearch(
      key
    )

  ){

    return value;

  }


  // ==========================
  // ARRAY SUPPORT
  // ==========================

  if(Array.isArray(value)){

    return value.map(item =>

      createGoogleSearchLink(

        item,

        {

          ...options,

          fieldKey: key

        }

      )

    ).join("");

  }


  // ==========================
  // STRING SUPPORT
  // ==========================

  return createGoogleSearchLink(

    value,

    {

      ...options,

      fieldKey: key

    }

  );

}