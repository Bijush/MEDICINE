// ==============================
// COMPOSITION LOADER
// ==============================


// ==============================
// IMPORTS
// ==============================

import {
  getMedicines
}
from "../API/medicineApi.js";

import {
  normalize
} from "../shared/normalize.js";


// ==============================
// COMPOSITION MAP
// ==============================

const compositionMap =

  new Map();

let ALL_DATA = [];
// ==============================
// SAFE ARRAY
// ==============================

function getCompositionArray(
  medicine = {}
) {

  const value =

    medicine.composition

    ||

    medicine.compositions

    ||

    [];


  // String support
  if (typeof value === "string") {

    return [value];

  }


  // Array support
  if (Array.isArray(value)) {

    return value;

  }


  return [];

}


// ==============================
// BUILD MAP
// ==============================

export async function loadCompositionDatabase(){

  // ==========================
  // LOAD MEDICINES
  // ==========================

  ALL_DATA = await getMedicines();


  // ==========================
  // CLEAR OLD MAP
  // ==========================

  compositionMap.clear();


  // ==========================
  // BUILD MAP
  // ==========================

  ALL_DATA.forEach(medicine => {

    const compositions =

      getCompositionArray(
        medicine
      );

    if(
      !Array.isArray(
        compositions
      )
    ){
      return;
    }

    compositions.forEach(comp => {

      if(!comp){
        return;
      }

      const key =
        normalize(comp);

      // CREATE
      if(
        !compositionMap.has(key)
      ){

        compositionMap.set(
          key,
          []
        );

      }

      const medicines =
        compositionMap.get(key);

      // DUPLICATE CHECK
      const alreadyExists =

        medicines.some(
          item =>
            item.id === medicine.id
        );

      if(!alreadyExists){

        medicines.push(
          medicine
        );

      }

    });

  });

}


// ==============================
// GET ALL COMPOSITIONS
// ==============================

export function getAllCompositions() {

  return [

    ...compositionMap.keys()

  ]

    .sort();

}


// ==============================
// GET MEDICINES
// ==============================

export function getMedicinesByComposition(
  compositionName = ""
) {

  const key =

    normalize(
      compositionName
    );


  return (

    compositionMap.get(key)

    ||

    []

  );

}


// ==============================
// HAS COMPOSITION
// ==============================

export function hasComposition(
  compositionName = ""
) {

  const key =

    normalize(
      compositionName
    );


  return compositionMap.has(
    key
  );

}


// ==============================
// GET TOTAL COUNT
// ==============================

export function getCompositionCount() {

  return compositionMap.size;

}


// ==============================
// DEBUG
// ==============================

export function debugCompositionLoader() {

  console.log({

    totalCompositions:

      compositionMap.size,

    compositionMap

  });

}