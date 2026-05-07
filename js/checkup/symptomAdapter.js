/*
🧠 FILE: symptomAdapter.js

👉 কাজ:
- GLOBAL_SYMPTOMS → UI format বানায়
- selected symptoms → diagnosis answers এ convert করে

🔥 Key Features:
✔ auto group detect
✔ safe mapping (fields + values)
✔ multiple symptom merge support
✔ no overwrite bug

📥 INPUT:
- GLOBAL_SYMPTOMS
- selected symptom ids

📤 OUTPUT:
- answers object (autoDiagnose এর জন্য)
*/

import { GLOBAL_SYMPTOMS } from "../../data/globalSymptoms.js";


// ================= 🔥 UI LIST =================
export function getUISymptoms(){

  return GLOBAL_SYMPTOMS.map(s => ({
    id: s.id,
    label: s.label || s.id,
    group: s.group || getGroup(s.id)
  }));

}


// ================= 🔥 GROUP DETECT =================
function getGroup(id){

  const key = id.toLowerCase();

  if(key.includes("pain")) return "pain";
  if(key.includes("eye")) return "eye";
  if(key.includes("cough") || key.includes("breathing")) return "respiratory";
  if(key.includes("rash") || key.includes("itch")) return "skin";
  if(key.includes("stomach") || key.includes("constipation") || key.includes("diarrhea")) return "stomach";

  return "general";
}


// ================= 🔥 BUILD ANSWERS =================
export function buildAnswers(selected = []){

  const answers = {};

  selected.forEach(id => {

    const s = GLOBAL_SYMPTOMS.find(x => x.id === id);
    if(!s) return;

    const fields = s.fields || [];

    fields.forEach(f => {

      // 🔥 VALUE BASED
      if(s.values && s.values.length){

        // ❗ overwrite protection (stronger value wins)
        if(!answers[f]){
          answers[f] = s.values[0];
        }

      } else {

        // 🔥 default yes
        answers[f] = "yes";

      }

    });

  });

  return answers;
}