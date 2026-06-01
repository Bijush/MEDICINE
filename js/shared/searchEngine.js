import { normalize } from "./normalize.js";

export function applySearch(
  list,
  search
){
  if(search){

  // ✅ very short search
  if(search.length < 2){

    return list.slice(0,40);
  }

  // ✅ safe search filter
  return list.filter(x => {

    // ❌ invalid item
    if(
      !x ||
      typeof x !== "object"
    ){
      return false;
    }

    // ❌ missing searchText
    if(!x?.searchText){
      return false;
    }

    // ✅ match
    return x.searchText.includes(search);

  });

}
return list;

}


export function applyGasProtection(
  list,
  search
){
  const GAS_REGEX =
    /gas|acidity|acid|gastric|pet|pait|stomach_burn|অ্যাসিড|গ্যাস|পেট/i;

  const isGasQuery =
    GAS_REGEX.test(search);


  if(isGasQuery){

    return list.filter(x => {

      const g = normalize(
        x?.gastricEffect || ""
      );

      // ❌ BAD
      if(
        g.includes("increase") ||
        g.includes("worsen") ||
        g.includes("acidity")
      ){
        return false;
      }

      // ✅ SAFE + MILD
      return true;

    });

  }
  return list;

}

export function smartSearchSort(
  list,
  search
){
  if(search){

    return list.sort((a,b)=>{

      const aName =
        a?.nameLower || "";

      const bName =
        b?.nameLower || "";


      // ✅ EXACT MATCH
      if(aName === search) return -1;
      if(bName === search) return 1;


      // ✅ STARTS WITH
      if(aName.startsWith(search))
        return -1;

      if(bName.startsWith(search))
        return 1;


      // ✅ COMPOSITION PRIORITY
      if(
        a?.compLower?.includes(search)
      ){
        return -1;
      }

      if(
        b?.compLower?.includes(search)
      ){
        return 1;
      }


      // ✅ ALPHABETICAL
      return aName.localeCompare(bName);

    });

  }
  return list;

}