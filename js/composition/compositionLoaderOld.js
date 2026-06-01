// ==============================
// COMPOSITION LOADER
// ==============================


// ==============================
// IMPORTS
// ==============================

import {
  ALL_DATA
} from "../../RegisterAndLoader/loader.js";

import {
  normalize
} from "../shared/normalize.js";


// ==============================
// COMPOSITION MAP
// ==============================

const compositionMap =

  new Map();


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

ALL_DATA.forEach(medicine => {

  const compositions =

    getCompositionArray(
      medicine
    );


  // Invalid
  if (

    !Array.isArray(
      compositions
    )

  ) {

    return;

  }


  // Loop
  compositions.forEach(comp => {

    if (!comp) {
      return;
    }


    const key =

      normalize(comp);


    // Create
    if (

      !compositionMap.has(key)

    ) {

      compositionMap.set(

        key,

        []

      );

    }


    const medicines =

      compositionMap.get(key);


    // Duplicate check
    const alreadyExists =

      medicines.some(item =>

        item.id === medicine.id

      );


    // Store
    if (!alreadyExists) {

      medicines.push(
        medicine
      );

    }

  });

});


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