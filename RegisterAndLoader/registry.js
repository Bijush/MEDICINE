// ================= 🔥 IMPORT =================

import { DATA as pain } from "../data/medicine/pain.js";
import { DATA as vitamin } from "../data/medicine/vitamin.js";
import { DATA as antibiotic } from "../data/medicine/antibiotic.js";
import { DATA as gastric } from "../data/medicine/gastric.js";
import { DATA as fever } from "../data/medicine/fever.js";
import { DATA as diarrhea } from "../data/medicine/diarrhea.js";
import { DATA as dysentery } from "../data/medicine/dysentery.js";
import { DATA as tooth } from "../data/medicine/toothpain.js";
import { DATA as stomach } from "../data/medicine/stomachpain.js";
import { DATA as sexual } from "../data/medicine/sexual.js";

import { DATA as painCombo } from "../data/medicine/combinations/pain_combo.js";

import { normalize } from "../js/shared/normalize.js";
// ================= 🔥 MASTER DATA =================

export const DATA_FILES = [
  pain,
  vitamin,
  antibiotic,
  gastric,
  fever,
  diarrhea,
  dysentery,
  tooth,
  stomach,
  sexual,
  painCombo
];


// 👉 all groups
export function getGroups(){

  return [

    ...new Set(

      ALL_DATA
        .map(i => i.group)
        .filter(Boolean)

    )

  ];
}


// 👉 all categories
export function getCategories(){

  return [

    ...new Set(

      ALL_DATA
        .map(i => i.category)
        .filter(Boolean)

    )

  ];
}


// 👉 all classes
export function getClasses(){

  return [

    ...new Set(

      ALL_DATA
        .map(i => i.class)
        .filter(Boolean)

    )

  ];
}


// 👉 all brands
export function getBrands(){

  return [

    ...new Set(

      ALL_DATA
        .flatMap(i => i.brands || [])
        .filter(Boolean)

    )

  ];
}


// 👉 by group
export function getByGroup(group){

  const g = normalize(group);

  return ALL_DATA.filter(i =>

    normalize(i.group) === g

  );
}


// 👉 by class
export function getByClass(className){

  const c = normalize(className);

  return ALL_DATA.filter(i =>

    normalize(i.class) === c

  );
}


// 👉 by category
export function getByCategory(category){

  const c = normalize(category);

  return ALL_DATA.filter(i =>

    normalize(i.category) === c

  );
}


// 👉 by disease
export function getByDisease(disease){

  const d = normalize(disease);

  return ALL_DATA.filter(i =>

    (i.diseases || []).some(x =>

      normalize(x).includes(d)

    )

  );
}


// 👉 by symptom
export function getBySymptom(symptom){

  const s = normalize(symptom);

  return ALL_DATA.filter(i =>

    (i.symptoms || []).some(x =>

      normalize(x).includes(s)

    )

  );
}


// 👉 by tag
export function getByTag(tag){

  const t = normalize(tag);

  return ALL_DATA.filter(i =>

    (i.tags || []).some(x =>

      normalize(x).includes(t)

    )

  );
}


// 👉 by brand
export function getByBrand(brand){

  const b = normalize(brand);

  return ALL_DATA.filter(i =>

    (i.brands || []).some(x =>

      normalize(x).includes(b)

    )

  );
}


// 👉 search everything
export function searchMedicine(query){

  const q = normalize(query);

  return ALL_DATA.filter(i => {

    return [

      i.name,
      i.name_bn,
      i.generic,
      i.generic_bn,

      ...(i.tags || []),
      ...(i.symptoms || []),
      ...(i.diseases || []),
      ...(i.brands || []),

      ...(i.searchableText || [])

    ]

    .filter(Boolean)

    .some(text =>

      normalize(text).includes(q)

    );

  });

}


// 👉 get medicine by id
export function getMedicineById(id){

  const target = normalize(id);

  return ALL_DATA.find(i =>

    normalize(i.id) === target

  );

}


// 👉 get common medicines
export function getCommonMedicines(){

  return ALL_DATA.filter(i =>

    i.commonUse === true

  );

}


// 👉 get otc medicines
export function getOTCMedicines(){

  return ALL_DATA.filter(i =>

    i.otc === true

  );

}


// 👉 get rx medicines
export function getRXMedicines(){

  return ALL_DATA.filter(i =>

    i.rx === true

  );

}


// ================= 🔥 DEBUG =================

export function debugData(){

  console.log(
    "📦 TOTAL:",
    ALL_DATA.length
  );

  console.log(
    "📦 DATA:",
    ALL_DATA
  );

}