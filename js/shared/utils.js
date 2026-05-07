// ⚙️ GENERAL UTILITIES (REUSABLE)


// ================= NORMALIZE =================

function normalize(str){

  return (str || "")
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_")
    .trim();

}


// ================= SAFE ARRAY =================

function safeArray(val){

  if(Array.isArray(val)){
    return val.filter(Boolean);
  }

  return [];

}


// ================= TYPE =================

export function getType(item){

  if(item?.type){

    return item.type
      .toLowerCase();

  }

  const comp =
    item?.composition;

  if(!comp)
    return "single";


  // 🔥 ARRAY COMPOSITION
  if(Array.isArray(comp)){

    return mapType(

      comp
        .filter(Boolean)
        .length

    );

  }


  // 🔥 OBJECT COMPOSITION
  if(

    Array.isArray(comp) &&
    typeof comp[0] === "object"

  ){

    return mapType(

      comp.filter(i =>

        i?.ingredient

      ).length

    );

  }


  // 🔥 STRING COMPOSITION
  const text =
    comp
      .toString()
      .toLowerCase();

  if(/[+,/&]/.test(text)){

    const parts = text

      .split(/,|\+|\/|&/)

      .map(x => x.trim())

      .filter(Boolean);

    return mapType(parts.length);

  }

  return "single";
}


// ================= TYPE HELPER =================

export function mapType(n){

  if(n <= 1)
    return "single";

  if(n === 2)
    return "double";

  if(n === 3)
    return "triple";

  return "multi";
}


// ================= MERGE ARRAY =================

function mergeArray(a = [], b = []){

  const map = new Map();

  [...safeArray(a), ...safeArray(b)]

    .forEach(v => {

      if(!v)
        return;

      const key =
        normalize(v);

      if(!map.has(key)){

        map.set(
          key,
          v.toString().trim()
        );

      }

    });

  return Array.from(
    map.values()
  );

}


// ================= SCORE =================

function score(obj = {}){

  let s = 0;

  if(obj.brands?.length)
    s += 2;

  if(obj.uses?.length)
    s += 2;

  if(obj.symptoms?.length)
    s += 2;

  if(obj.diseases?.length)
    s += 2;

  if(obj.sideEffects)
    s += 1;

  if(obj.warnings)
    s += 1;

  if(obj.composition)
    s += 2;

  if(obj.generic)
    s += 1;

  if(obj.mechanism)
    s += 1;

  return s;
}


// ================= NORMALIZE NAME =================

function normalizeName(name){

  return normalize(name)

    .replace(
      /tablet|capsule|syrup|injection|drops|cream|ointment/g,
      ""
    )

    .replace(/\s+/g, "");

}


// ================= COMPOSITION KEY =================

function getCompositionKey(comp){

  if(!comp)
    return "";

  // 🔥 STRING
  if(typeof comp === "string"){

    return normalize(comp);

  }

  // 🔥 ARRAY STRING
  if(
    Array.isArray(comp) &&
    typeof comp[0] === "string"
  ){

    return normalize(
      comp.join(",")
    );

  }

  // 🔥 ARRAY OBJECT
  if(
    Array.isArray(comp) &&
    typeof comp[0] === "object"
  ){

    return normalize(

      comp.map(c => {

        if(typeof c === "string")
          return c;

        return (
          c?.ingredient?.en ||
          c?.ingredient ||
          ""
        );

      }).join(",")

    );

  }

  return normalize(
    JSON.stringify(comp)
  );

}


// ================= MERGE BRANDS =================

export function mergeBrands(data = []){

  const map = new Map();

  data.forEach(item => {

    if(!item?.name)
      return;

    const compKey =
      getCompositionKey(
        item.composition
      );

    const key =

      normalizeName(item.name)

      + "|"

      + compKey;


    // 🔥 FIRST INSERT
    if(!map.has(key)){

      map.set(key, {
        ...item
      });

      return;
    }


    // 🔥 EXISTING
    const old =
      map.get(key);

    const base =

      score(item) > score(old)

        ? item

        : old;


    // 🔥 MERGED OBJECT
    map.set(key, {

      ...old,
      ...item,
      ...base,

      // ================= ARRAYS =================

      brands:
        mergeArray(
          old.brands,
          item.brands
        ),

      tags:
        mergeArray(
          old.tags,
          item.tags
        ),

      tags_bn:
        mergeArray(
          old.tags_bn,
          item.tags_bn
        ),

      uses:
        mergeArray(
          old.uses,
          item.uses
        ),

      uses_bn:
        mergeArray(
          old.uses_bn,
          item.uses_bn
        ),

      symptoms:
        mergeArray(
          old.symptoms,
          item.symptoms
        ),

      symptoms_bn:
        mergeArray(
          old.symptoms_bn,
          item.symptoms_bn
        ),

      diseases:
        mergeArray(
          old.diseases,
          item.diseases
        ),

      diseases_bn:
        mergeArray(
          old.diseases_bn,
          item.diseases_bn
        ),

      sideEffects:
        mergeArray(
          old.sideEffects,
          item.sideEffects
        ),

      sideEffects_bn:
        mergeArray(
          old.sideEffects_bn,
          item.sideEffects_bn
        ),

      warnings:
        mergeArray(
          old.warnings,
          item.warnings
        ),

      warnings_bn:
        mergeArray(
          old.warnings_bn,
          item.warnings_bn
        ),

      interactions:
        mergeArray(
          old.interactions,
          item.interactions
        ),

      searchableText:
        mergeArray(
          old.searchableText,
          item.searchableText
        ),

      // ================= BASIC =================

      dose:
        base.dose ||
        old.dose,

      dose_bn:
        base.dose_bn ||
        old.dose_bn,

      class:
        base.class ||
        old.class,

      class_bn:
        base.class_bn ||
        old.class_bn,

      group:
        base.group ||
        old.group,

      group_bn:
        base.group_bn ||
        old.group_bn,

      category:
        base.category ||
        old.category,

      generic:
        base.generic ||
        old.generic,

      generic_bn:
        base.generic_bn ||
        old.generic_bn,

      mechanism:
        base.mechanism ||
        old.mechanism,

      food:
        base.food ||
        old.food,

      pregnancy:
        base.pregnancy ??
        old.pregnancy,

      breastfeeding:
        base.breastfeeding ??
        old.breastfeeding,

      rx:
        base.rx ??
        old.rx,

      otc:
        base.otc ??
        old.otc

    });

  });

  return Array.from(
    map.values()
  );

}