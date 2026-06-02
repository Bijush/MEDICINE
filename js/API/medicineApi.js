import {
  normalizeRxNormMedicine
}
from "./medicineNormalizer.js";

const RXNAV_BASE =
  "https://rxnav.nlm.nih.gov/REST";


// ==============================
// CACHE
// ==============================

const cache =
  new Map();


// ==============================
// DEFAULT SEARCH TERMS
// TOP DISEASE + MEDICINE
// ==============================

const DEFAULT_TERMS = [

  // fever / pain
  "paracetamol",
  "ibuprofen",
  "aceclofenac",
  "diclofenac",

  // antibiotic
  "amoxicillin",
  "azithromycin",
  "cefixime",
  "doxycycline",

  // gastric
  "pantoprazole",
  "omeprazole",
  "rabeprazole",

  // diabetes
  "metformin",
  "glimepiride",

  // bp
  "amlodipine",
  "telmisartan",
  "losartan",

  // allergy
  "cetirizine",
  "levocetirizine",

  // cough
  "ambroxol",
  "dextromethorphan",

  // asthma
  "salbutamol",

  // vitamins
  "vitamin",
  "multivitamin",

  // acidity
  "antacid",

  // infection
  "ciprofloxacin",
  "levofloxacin",

  // fungal
  "fluconazole",

  // skin
  "clobetasol",

  // thyroid
  "thyroxine",

  // anxiety
  "alprazolam",

  // sleep
  "melatonin",

  // nausea
  "ondansetron",

  // diarrhea
  "loperamide",

  // constipation
  "lactulose"
];


// ==============================
// SAFE FETCH
// ==============================

async function safeFetchJson(
  url = ""
){

  try{

    const response =
      await fetch(url);

    if(!response.ok){

      throw new Error(
        `HTTP ${response.status}`
      );

    }

    return await response.json();

  }

  catch(error){

    console.error(
      "Fetch Error:",
      error
    );

    return null;

  }

}


// ==============================
// EXTRACT MEDICINES
// ==============================

function extractMedicines(
  data = {}
){

  const groups =

    data?.drugGroup
      ?.conceptGroup

    ||

    [];


  const medicines = [];

  const seen =
    new Set();


  groups.forEach(group => {

    const props =

      group?.conceptProperties

      || [];


    props.forEach(item => {

      const rawName =

        String(
          item?.name || ""
        ).toLowerCase();


      if(!rawName){
        return;
      }


      // noisy skip
      if(

        rawName.length > 180 ||

        rawName.includes("pack") ||

        rawName.includes("kit") ||

        rawName.includes("injector") ||

        rawName.includes("vaccine")

      ){

        return;

      }


      const plusCount =

        (
          rawName.match(/\+/g)
          || []
        ).length;


      if(plusCount > 4){
        return;
      }


      const med =

        normalizeRxNormMedicine(
          item
        );


      if(!med?.name){
        return;
      }


      const key =

        med.name
          .toLowerCase();


      if(seen.has(key)){
        return;
      }

      seen.add(key);

      medicines.push(med);

    });

  });


  return medicines;

}


// ==============================
// FETCH SINGLE QUERY
// ==============================

async function fetchQueryMedicines(
  query = ""
){

  const url =

    `${RXNAV_BASE}/drugs.json?name=${encodeURIComponent(query)}`;


  const data =
    await safeFetchJson(url);


  return extractMedicines(
    data
  );

}


// ==============================
// SEARCH MEDICINES
// ==============================

export async function getMedicines(
  query = ""
){

  query =
    String(query || "")
      .trim();


  // ==========================
  // DEFAULT LOAD
  // ==========================

  if(!query){

    const cacheKey =
      "__default__";


    if(cache.has(cacheKey)){

      return cache.get(
        cacheKey
      );

    }


    const allMedicines = [];

    const seen =
      new Set();


    await Promise.all(

      DEFAULT_TERMS.map(
        async term => {

          const list =

            await fetchQueryMedicines(
              term
            );

          list.forEach(med => {

            const key =

              med.name
                .toLowerCase();

            if(seen.has(key)){
              return;
            }

            seen.add(key);

            allMedicines.push(
              med
            );

          });

        }
      )

    );


    // cache limit
    if(cache.size > 100){

      cache.clear();

    }


    cache.set(
      cacheKey,
      allMedicines
    );


    return allMedicines;

  }


  // ==========================
  // NORMAL SEARCH CACHE
  // ==========================

  if(cache.has(query)){

    return cache.get(query);

  }


  // ==========================
  // FETCH
  // ==========================

  const medicines =

    await fetchQueryMedicines(
      query
    );


  // ==========================
  // CACHE SAVE
  // ==========================

  if(cache.size > 100){

    cache.clear();

  }


  cache.set(
    query,
    medicines
  );


  return medicines;

}