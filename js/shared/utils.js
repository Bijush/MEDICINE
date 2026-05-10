
import { normalize } from "./normalize.js";



// ⚙️ GENERAL UTILITIES (REUSABLE)


function safeArray(val){

  if(Array.isArray(val)){
    return val.filter(Boolean);
  }

  return [];

}


// ================= TYPE =================

export function getType(item = {}){

  try{

    const type = item?.type;

    // ================= DIRECT TYPE =================

    if(type){

      // 🔥 string
      if(typeof type === "string"){

        const t = normalize(type);

        if(
          [
            "single",
            "double",
            "triple",
            "multi"
          ].includes(t)
        ){
          return t;
        }

      }

      // 🔥 object
      if(typeof type === "object"){

        const t = normalize(

          type?.en ||
          type?.name ||
          ""

        );

        if(
          [
            "single",
            "double",
            "triple",
            "multi"
          ].includes(t)
        ){
          return t;
        }

      }

    }


    // ================= COMPOSITION =================

    const comp = item?.composition;

    if(!comp){

      return "single";

    }


    // ================= ARRAY =================

    if(Array.isArray(comp)){

      // 🔥 object array
      if(typeof comp[0] === "object"){

        const total = comp.filter(c => {

          return (

            c &&

            (
              c?.ingredient?.en ||
              c?.ingredient ||
              c?.name
            )

          );

        }).length;

        return mapType(total);

      }

      // 🔥 string array
      const total = comp

        .map(c =>

          typeof c === "string"
            ? c.trim()
            : ""
        )

        .filter(Boolean)

        .length;

      return mapType(total);

    }


    // ================= STRING =================

    if(typeof comp === "string"){

      const text = comp
        .toLowerCase()
        .trim();

      // 🔥 multi separator detect
      const parts = text

        .split(
          /,|\+|\/|&|\band\b|\bwith\b/i
        )

        .map(x => x.trim())

        .filter(Boolean);

      if(parts.length){

        return mapType(parts.length);

      }

    }


    // ================= OBJECT =================

    if(typeof comp === "object"){

      const keys = Object.keys(comp)

        .filter(Boolean);

      if(keys.length){

        return mapType(keys.length);

      }

    }


    // ================= FALLBACK =================

    return "single";

  }catch(err){

    console.error(
      "❌ getType ERROR =",
      err
    );

    return "single";

  }

}


// ================= TYPE HELPER =================

export function mapType(n){

  // ================= SAFE NUMBER =================

  n = Number(n) || 1;


  // ================= TYPE MAP =================

  const types = {

    1: "single",
    2: "double",
    3: "triple",
    4: "fourth",
    5: "fifth",
    6: "sixth"

  };


  // ================= RETURN =================

  return types[n] || "multi";

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

export function t(en="", bn=""){

  return {
    en,
    bn
  };

}