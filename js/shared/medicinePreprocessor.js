import { normalize } from "./normalize.js";

import {
  getType
} from "./utils.js";




export function getText(v){

  if(typeof v === "string"){
    return v;
  }

  if(typeof v === "object"){

    return (
      v?.en ||
      v?.name ||
      ""
    );
  }

  return "";
}

// ================= COMPOSITION TEXT =================

export function getCompositionText(comp){

  if(Array.isArray(comp)){

    return comp.map(x => {

      if(typeof x === "string"){
        return x;
      }

      return (
        x?.ingredient?.en ||
        x?.ingredient ||
        ""
      );

    }).join(", ");
  }

  return comp || "";
}

export function preprocessMedicineData(DATA){
  
  return DATA.map(i => {

  try{

    // ================= SAFE COMPOSITION =================

    const compText =
      getCompositionText(
        i?.composition
      );

    // ================= SAFE NAME =================

    const safeName =

      getText(
        i?.names?.primary
      ) ||

      i?.name ||

      "";

    // ================= SAFE GENERIC =================

    const safeGeneric =

      getText(
        i?.names?.generic
      ) ||

      i?.generic ||

      "";

    // ================= SAFE GROUP =================

    const safeGroup =

      getText(i?.group) ||

      "other";

    // ================= SAFE CATEGORY =================

    const safeCategory =

      getText(i?.category) ||

      "tablet";

    // ================= SAFE TYPE =================

    const safeType =

      getText(i?.type) ||

      getType(i);

    // ================= SAFE CLASS =================

    const safeClass =

      getText(i?.class);

    // ================= SEARCH TEXT =================

    const searchText = normalize([

      safeName,

      safeGeneric,

      safeGroup,

      safeCategory,

      safeClass,

      compText,

      ...(Array.isArray(i?.tags)
        ? i.tags
        : []),

      ...(Array.isArray(i?.brands)
        ? i.brands
        : []),

      ...(Array.isArray(
        i?.searchableText
      )
        ? i.searchableText
        : []),

      ...(i?.symptoms?.en || []),

      ...(i?.diseases?.en || []),

      ...(i?.bestFor?.en || []),

      ...(i?.therapeuticCategory?.en || [])

    ].join(" "));
    
    const medicalCache = {};

Object.entries(i || {})

.forEach(([field, val]) => {

  // ================= EMPTY =================

  if(
    val === undefined ||
    val === null ||
    val === ""
  ){
    return;
  }

  // ================= SKIP =================

  if(
    [
      "id",
      "ui",
      "medicalCache",
      "searchText",

      "nameLower",
      "genericLower",
      "compLower",

      "groupLower",
      "categoryLower",
      "typeLower"
    ]

    .includes(field)
  ){
    return;
  }

  // ================= ARRAY =================

  if(Array.isArray(val)){

    const arr = val

      .map(v => {

        if(typeof v === "object"){

          return (

  v?.en ||

  v?.bn ||

  v?.name ||

  v?.value ||

  v?.ingredient?.en ||

  v?.ingredient ||

  ""

);

        }

        return v;

      })

      .map(normalize)

      .filter(Boolean);

    if(arr.length){

      medicalCache[
  normalize(field)
] = arr;

    }

    return;

  }

  // ================= OBJECT =================

  if(typeof val === "object"){

  // 🔥 multilingual array
  if(Array.isArray(val?.en)){

  const arr = [

    ...(val?.en || []),

    ...(val?.bn || [])

  ]

  .map(v => {

    // 🔥 object support
    if(typeof v === "object"){

      return (

        v?.en ||

        v?.bn ||

        v?.name ||

        v?.value ||

        v?.ingredient?.en ||

        v?.ingredient ||

        ""

      );

    }

    return v;

  })

  .map(normalize)

  .filter(Boolean);

  if(arr.length){

    medicalCache[
      normalize(field)
    ] = arr;

  }

  return;

}

  // 🔥 nested object extract
  const objArr = Object.values(val)

    .flatMap(v => {

      if(Array.isArray(v)){
        return v;
      }

      return [v];

    })

    .map(v => {

      if(typeof v === "object"){

        return (

          v?.en ||

          v?.bn ||

          v?.name ||

          v?.ingredient?.en ||

          v?.ingredient ||

          ""

        );

      }

      return v;

    })

    .map(normalize)

    .filter(Boolean);

  if(objArr.length){

    medicalCache[
  normalize(field)
] = objArr;

    return;

  }

  val =

  val?.en ||

  val?.bn ||

  val?.name ||

  val?.value ||

  "";

}

  // ================= BOOLEAN =================

  if(typeof val === "boolean"){

    val =
      val ? "yes" : "no";

  }

  // ================= NUMBER =================

  if(typeof val === "number"){

    val = val.toString();

  }

  // ================= FINAL =================

  val = normalize(val);

  if(val){

    medicalCache[
  normalize(field)
] = [val];

  }

});
    

    // ================= FINAL =================

    return {

      ...i,

      // 🔥 normalized names
      name: safeName,

      generic: safeGeneric,

      group: safeGroup,

      category: safeCategory,

      type: safeType,

      class: safeClass,

      // ================= UNIQUE ID =================

      id:

        i?.id ||

        normalize(

          safeName +
          "_" +
          compText

        ) ||

        (
          crypto.randomUUID
            ? crypto.randomUUID()
            : Date.now().toString()
        ),

      // ================= SEARCH =================

      searchText,
       medicalCache,
      searchableText: [

        ...(Array.isArray(
          i?.searchableText
        )
          ? i.searchableText
          : []),

        safeName,
        safeGeneric,
        compText

      ],

      // ================= FAST SEARCH =================

      nameLower:
        normalize(safeName),

      genericLower:
        normalize(safeGeneric),

      compLower:
        normalize(compText),

      groupLower:
        normalize(safeGroup),

      categoryLower:
        normalize(safeCategory),

      typeLower:
        normalize(safeType),

      // ================= FLAGS =================

      hasComposition:
        !!compText,

      isCombo:
        getType(i) !== "single",

      // ================= SAFE DEFAULTS =================

      rx:
        i?.rx === true,

      otc:
        i?.otc === true,

      antibiotic:
        i?.antibiotic === true

    };

  }catch(err){

    console.error(
      "❌ DATA MAP ERROR =",
      err,
      i
    );

    return {

      ...i,

      id:

        crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now().toString(),

      name:
        i?.name || "Unknown",

      generic:
        i?.generic || "",

      searchText: "",

      searchableText: [],

      nameLower: "",

      genericLower: "",

      compLower: "",

      groupLower: "",

      categoryLower: "",

      typeLower: "",

      group: "other",

      category: "tablet",

      type: "single",

      hasComposition: false,

      isCombo: false,

      rx: false,

      otc: false,

      antibiotic: false

    };

  }

});
  
}
