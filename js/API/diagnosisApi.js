import {
  normalizeRxNormMedicine
}
from "./diagnosisNormalizer.js";

const RXNAV_BASE =
  "https://rxnav.nlm.nih.gov/REST";


// ==============================
// CACHE
// ==============================

const cache =
  new Map();


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
// SEARCH MEDICINES
// ==============================

export async function getMedicines(
  query = ""
){

  query =
    String(query || "")
      .trim();

  if(!query){

    return [];

  }


  // ==========================
  // CACHE
  // ==========================

  if(cache.has(query)){

    return cache.get(query);

  }


  // ==========================
  // FETCH RXNORM
  // ==========================

  const url =

    `${RXNAV_BASE}/drugs.json?name=${encodeURIComponent(query)}`;


  const data =
    await safeFetchJson(url);


  // ==========================
  // SAFE GROUPS
  // ==========================

  const groups =

    data?.drugGroup
      ?.conceptGroup

    ||

    [];


  const medicines = [];

  const seen =
    new Set();


  // ==========================
  // EXTRACT
  // ==========================

  groups.forEach(group => {

    const props =

      group?.conceptProperties

      || [];


    props.forEach(item => {

      // ======================
      // RAW NAME
      // ======================

      const rawName =

        String(
          item?.name || ""
        ).toLowerCase();


      // ======================
      // EMPTY
      // ======================

      if(!rawName){
        return;
      }


      // ======================
      // FILTER NOISY
      // ======================

      if(

        rawName.length > 120 ||

        rawName.includes("pack") ||

        rawName.includes("kit") ||

        rawName.includes("vaccine") ||

        rawName.includes("injector")

      ){

        return;

      }


      // ======================
      // HUGE COMBO SKIP
      // ======================

      const plusCount =

        (
          rawName.match(/\+/g)
          || []
        ).length;


      if(plusCount > 2){

        return;

      }


      // ======================
      // NORMALIZE
      // ======================

      const med =

        normalizeRxNormMedicine(
          item
        );


      // ======================
      // EMPTY NAME
      // ======================

      if(!med?.name){
        return;
      }


      // ======================
      // DUPLICATE
      // ======================

      const key =

        med.name
          .toLowerCase();


      if(seen.has(key)){
        return;
      }

      seen.add(key);


      // ======================
      // PUSH
      // ======================

      medicines.push(med);

    });

  });


  // ==========================
  // CACHE SAVE
  // ==========================

  cache.set(
    query,
    medicines
  );


  return medicines;

}