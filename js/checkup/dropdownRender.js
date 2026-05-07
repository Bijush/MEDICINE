/*
🧠 FILE: dropdownRender.js

👉 কাজ:
- dropdown UI দিয়ে symptom select করা
- group select / deselect support
- live diagnosis trigger

🔥 Key Features:
✔ cached symptom list
✔ safe group toggle
✔ auto close dropdown
✔ smooth UI

⚠️ NOTE:
- symptomAdapter.js এর সাথে use করতে হবে
*/

import { getUISymptoms } from "./symptomAdapter.js";

let selected = new Set();
let SYMPTOMS = [];


// ================= INIT =================
function loadSymptoms(){
  SYMPTOMS = getUISymptoms();
}


// ================= RENDER =================
export function renderDropdown(){

  const el = document.getElementById("filterOptions");
  if(!el) return;

  if(!SYMPTOMS.length){
    loadSymptoms();
  }

  const groups = [...new Set(
    SYMPTOMS.map(s => s.group).filter(Boolean)
  )];

  el.innerHTML = `

    <div class="divider"></div>
    <b style="padding:8px;display:block;">Categories</b>

    ${["all", ...groups].map(g => `
      <label class="option">
        <input 
          type="checkbox"
          ${isGroupChecked(g) ? "checked" : ""}
          onchange="window.toggleSelect('${g}', this.checked)"
        />
        ${g.toUpperCase()}
      </label>
    `).join("")}

    <div class="divider"></div>
    <b style="padding:8px;display:block;">Symptoms</b>

    ${SYMPTOMS.map(s => `
      <label class="option">
        <input 
          type="checkbox"
          ${selected.has(s.id) ? "checked" : ""}
          onchange="window.toggleSelect('${s.id}', this.checked)"
        />
        ${s.label}
      </label>
    `).join("")}

  `;
}


// ================= GROUP CHECK =================
function isGroupChecked(group){

  if(group === "all"){
    return SYMPTOMS.length &&
      SYMPTOMS.every(s => selected.has(s.id));
  }

  return SYMPTOMS
    .filter(s => s.group === group)
    .every(s => selected.has(s.id));
}


// ================= TOGGLE =================
window.toggleSelect = function(id, checked){

  // 🔥 GROUP CLICK
  if(id === "all" || SYMPTOMS.some(s => s.group === id)){

    const list = SYMPTOMS
      .filter(s => id === "all" || s.group === id);

    list.forEach(s => {
      if(checked){
        selected.add(s.id);
      }else{
        selected.delete(s.id);
      }
    });

  }else{
    // 🔥 SINGLE
    if(checked){
      selected.add(id);
    }else{
      selected.delete(id);
    }
  }

  updateText();

  // 🔥 update UI
  renderDropdown();

  // 🔥 AUTO CLOSE DROPDOWN
  document.getElementById("filterDropdown")
    ?.classList.add("hidden");

  // 🔥 LIVE RUN
  if(window.runCheckupFromUI){
    window.runCheckupFromUI(getSelected());
  }
};


// ================= TEXT =================
function updateText(){

  const el = document.getElementById("filterText");
  if(!el) return;

  const ids = getSelected();

  if(!ids.length){
    el.innerText = "Select";
    return;
  }

  const labels = ids.map(id => {
    const s = SYMPTOMS.find(x => x.id === id);
    return s?.label || id;
  });

  el.innerText =
    labels.slice(0,2).join(", ") +
    (labels.length > 2 ? "..." : "");
}


// ================= GET =================
export function getSelected(){
  return [...selected];
}


// ================= DROPDOWN OPEN =================
window.toggleDropdown = function(e){
  e?.stopPropagation();
  document.getElementById("filterDropdown")
    ?.classList.toggle("hidden");
};


// ================= CLOSE BUTTON =================
window.closeDropdown = function(){
  document.getElementById("filterDropdown")
    ?.classList.add("hidden");
};


// ================= CLOSE OUTSIDE =================
document.addEventListener("click", e=>{
  const box = document.querySelector(".filter-box");
  if(!box?.contains(e.target)){
    document.getElementById("filterDropdown")
      ?.classList.add("hidden");
  }
});