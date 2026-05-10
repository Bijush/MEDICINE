import { CONFIG } from "../js/medicine/config.js";
import { ALL_DATA } from "../RegisterAndLoader/loader.js";

import {
  initFilters,
  getSelectedFilters,

  renderMedicalFilters,
  getMedicalFilters

} from "../js/shared/filters.js";

import {
  getType,
  mergeBrands
} from "../js/shared/utils.js";


import { normalize } from "../js/shared/normalize.js";

import {

  preprocessMedicineData,
  getText,
  getCompositionText

} from "../js/shared/medicinePreprocessor.js";

import {

  applyMedicalFilters

} from "../js/shared/medicalFilterEngine.js";

import {

  renderMedicineList

} from "../js/shared/medicineRenderer.js";

import {

  applySearch,
  applyGasProtection,
  smartSearchSort

} from "../js/shared/searchEngine.js";

// ================= STATE =================

let DATA = [];

let search = "";

let tab = "all";

let openId = null;
let editingId = null;
let openGroup = null;

const CAN_EDIT = false;



// ================= LOAD =================

async function load(){

  let local = [...ALL_DATA];

  try{

    const snap = await db
      .collection(CONFIG.collection)
      .get();

    const firebaseData = snap.docs

      .map(d => ({

        id: d.id,
        ...d.data()

      }))

      // 🔥 REMOVE INVALID DOCS
      .filter(i =>

        i &&
        typeof i === "object" &&
        i.name

      );

    const map = new Map();

    [...local, ...firebaseData]

      .forEach(i => {

        const compKey =
          getCompositionText(
            i?.composition
          );

        const key = normalize(
          (i?.name || "")
          + "|" +
          compKey
        );

        map.set(key, {

          ...map.get(key),
          ...i

        });

      });

    DATA = mergeBrands(
      Array.from(map.values())
    );

  }catch(e){

    console.error(
      "❌ FIREBASE ERROR =",
      e
    );

    DATA = local;
  }


  // ================= REMOVE INVALID =================

  DATA = DATA.filter(i =>

    i &&
    typeof i === "object" &&
    i.name

  );


  // ================= PREPROCESS =================

DATA =  preprocessMedicineData(DATA);


  // ================= SORT DEFAULT =================

  DATA.sort((a,b)=>

    (a?.name || "")
      .localeCompare(
        b?.name || ""
      )

  );


  // ================= INIT =================

  initFilters(DATA, update);
  
  renderMedicalFilters();

  update();
}


// ================= SEARCH =================

let searchTimer;

document.addEventListener("input", e => {

  if(e.target.id === "search"){

    clearTimeout(searchTimer);

    searchTimer = setTimeout(()=>{

      search = normalize(
        e.target.value
      );

      update();

    }, 180);

  }

});


// ================= TABS =================

window.setTab = function(t){

  tab = t;

  update();
};


function tabBtn(t){

  return `
    <button
      onclick="setTab('${t}')"
      class="${tab === t ? 'active' : ''}">

      ${t.toUpperCase()}

    </button>
  `;
}


// ================= UPDATE =================

function update(){

  let list = [...DATA];

  const filters = getSelectedFilters();
  const medicalFilters =
  getMedicalFilters();


  // ================= REMOVE INVALID =================

  list = list.filter(x =>

    x &&
    typeof x === "object" &&
    x.id

  );


  // ================= FILTER =================

  if(!filters.has("all")){

    list = list.filter(x =>

      filters.has(
  normalize(
    getText(x.group)
  )
)

    );

  }
  
  // ================= MEDICAL FILTER =================


list = applyMedicalFilters(
  list,
  medicalFilters
);


  // ================= TAB =================

  if(tab !== "all"){

    list = list.filter(x =>

      getType(x) === tab

    );

  }


  // ================= SEARCH =================

  list = applySearch(
  list,
  search
);


  // ================= GAS DETECTION =================

  list = applyGasProtection(
  list,
  search
);


  // ================= SMART SORT =================

  
list = smartSearchSort(
  list,
  search
);

  // ================= AUTO OPEN GROUP =================

  if(search && list.length){

    const firstGroup =
      getText(list[0]?.group);

    const hasOpenGroup =
      list.some(
        x =>
          getText(x.group)
          === openGroup
      );

    // ✅ ONLY AUTO OPEN
    // IF CURRENT GROUP INVALID
    if(!hasOpenGroup){

      openGroup = firstGroup;

    }

  }


  // ================= RESET =================

  if(!search){

    openId = null;

  }


  // ================= KEEP OPEN ID VALID =================

  const hasOpenCard =
    list.some(
      x => x.id === openId
    );

  if(!hasOpenCard){

    openId = null;

  }


  // ================= RENDER =================
list = list.slice(
  0,
  search ? 40 : 80
);
  renderMedicineList(
  list,
  {
    DATA,
    search,
    openGroup,
    openId,
    CAN_EDIT,

    tabBtn,
    getGroupIcon,
    getFormIcon,

    getWarning,
    getRxWarning
  }
);

}


// ================= RENDER =================




// ================= TOGGLE =================

window.toggle = function(id){

  if(!id) return;

  // ✅ toggle open/close
  openId =
    openId === id
      ? null
      : id;

  // ✅ render current view only
  renderCurrent();

  // ✅ smooth scroll
  setTimeout(()=>{

    const el =
      document.querySelector(".card.open");

    if(el){

      el.scrollIntoView({

        behavior: "smooth",
        block: "start"

      });

    }

  }, 100);

};


window.toggleGroup = function(group){

  openGroup =
    openGroup === group
      ? null
      : group;

  // ✅ full update needed
  update();

};


function renderCurrent(){

  let list = [...DATA];

  const filters = getSelectedFilters();
  
const medicalFilters = getMedicalFilters();

  // ================= FILTER =================

  if(!filters.has("all")){

    list = list.filter(x =>

      filters.has(
        getText(x.group)
      )

    );

  }


// ================= MEDICAL FILTER =================

list = applyMedicalFilters(
  list,
  medicalFilters
);

  // ================= TAB =================

  if(tab !== "all"){

    list = list.filter(x =>

      getType(x) === tab

    );

  }


// ================= SEARCH =================

list = applySearch(
  list,
  search
);

list = applyGasProtection(
  list,
  search
);

list = smartSearchSort(
  list,
  search
);


  // ================= REMOVE INVALID =================

  list = list.filter(x =>

    x &&
    typeof x === "object"

  );


  // ✅ render only
  renderMedicineList(
  list,
  {
    DATA,
    search,
    openGroup,
    openId,
    CAN_EDIT,

    tabBtn,
    getGroupIcon,
    getFormIcon,

    getWarning,
    getRxWarning
  }
);

}

// ================= ICONS =================

function getFormIcon(form = ""){

  form = form.toLowerCase();

  if(form.includes("tablet")) return "💊";
  if(form.includes("capsule")) return "🟡";
  if(form.includes("syrup")) return "🧴";
  if(form.includes("injection")) return "💉";
  if(form.includes("ointment")) return "🧴";

  return "💊";
}


function getGroupIcon(group = ""){

  group = group.toLowerCase();

  if(group.includes("vitamin")) return "🍊";
  if(group.includes("antibiotic")) return "🧫";
  if(group.includes("pain")) return "🩹";
  if(group.includes("fever")) return "🌡️";

  return "💊";
}


// ================= WARNINGS =================

function getWarning(item){

  if(!item.gastricEffect)
    return "";

  const g =
    item.gastricEffect
      .toLowerCase();

  if(g.includes("increase")){
    return "❌ Not safe for gas";
  }

  if(g.includes("mild")){
    return "⚠️ Mild gastric issue";
  }

  if(g.includes("safe")){
    return "✅ Safe for gas";
  }

  return "";
}


function getRxWarning(item){

  if(item.rx === true){

    return "⚠️ Doctor Prescription Required";

  }

  return "";
}


// 🚀 START

load();