import {
  CLASS_RULES
}
from "./classRules.js";


// ==============================
// DEFAULT INFO
// ==============================

export const DEFAULT_INFO = {

  class:
    "general medicine",

  category:
    "general",

  uses: [

    "General treatment"

  ],

  mechanism:
    "Works depending on medicine type.",

  warnings: []

};


// ==============================
// BUILD TEXT
// ==============================

export function buildMedicineText(
  medicine = {}
){

  return [

    ...(medicine.composition || []),

    medicine.generic || "",

    medicine.name || ""

  ]

    .join(" ")

    .toLowerCase();

}


// ==============================
// DETECT MEDICINE INFO
// ==============================

export function detectMedicineInfo(
  medicine = {}
){

  const text =

    buildMedicineText(
      medicine
    );


  const match =

    CLASS_RULES.find(rule =>

      rule.pattern.test(
        text
      )

    );


  return (

    match

    ||

    DEFAULT_INFO

  );

}