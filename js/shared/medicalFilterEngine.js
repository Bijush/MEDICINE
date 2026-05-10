import { normalize } from "./normalize.js";

export function applyMedicalFilters(

  list,
  medicalFilters

){
  
  const activeMedicalFilters =

  Object.entries(medicalFilters)

.filter(([_, values]) =>

  Array.isArray(values) &&
  values.length

);

if(activeMedicalFilters.length){

  return list.filter(item => {

    const cache =
      item.medicalCache || {};

    return activeMedicalFilters.every(

([field, values]) => {

  const arr =

  cache[
    normalize(field)
  ] || [];

  return values

    .some(v => {

      v = normalize(v);

      return arr.some(x => {

        x = normalize(x);

        return x === v;

      });

    });

}

    );

  });

}

  
  return list;
}