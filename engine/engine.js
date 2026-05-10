import { CONFIG } from "../js/medicine/config.js";
import { ALL_DATA } from "../RegisterAndLoader/loader.js";

import {
  initFilters,
  getSelectedFilters,

  renderMedicalFilters,
  getMedicalFilters

} from "../js/shared/filters.js";

import {
  highlight,
  getRelated
} from "../js/shared/search-utils.js";

import {
  getType,
  mergeBrands
} from "../js/shared/utils.js";


import { normalize } from "../js/shared/normalize.js";

import {

  renderExtraFields
} from "../js/shared/medicineExtraFieldRenderer.js";

// ================= STATE =================

let DATA = [];

let search = "";

let tab = "all";

let openId = null;
let editingId = null;
let openGroup = null;

const CAN_EDIT = false;


// ================= SAFE TEXT =================

function getText(v){

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

function getCompositionText(comp){

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


// ================= SAFE GET =================

function get(obj, path, fallback = ""){

  try{

    return path
      .split(".")
      .reduce((o,k)=>o?.[k], obj)
      ?? fallback;

  }catch{
    return fallback;
  }

}




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

DATA = DATA.map(i => {

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



const activeMedicalFilters =

  Object.entries(medicalFilters)

.filter(([_, values]) =>

  Array.isArray(values) &&
  values.length

);

if(activeMedicalFilters.length){

  list = list.filter(item => {

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


  // ================= TAB =================

  if(tab !== "all"){

    list = list.filter(x =>

      getType(x) === tab

    );

  }


  // ================= SEARCH =================

  if(search){

  // ✅ very short search
  if(search.length < 2){

    render(list.slice(0,40));

    return;

  }

  // ✅ safe search filter
  list = list.filter(x => {

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


  // ================= GAS DETECTION =================

  const GAS_REGEX =
    /gas|acidity|acid|gastric|pet|pait|stomach_burn|অ্যাসিড|গ্যাস|পেট/i;

  const isGasQuery =
    GAS_REGEX.test(search);


  if(isGasQuery){

    list = list.filter(x => {

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


  // ================= SMART SORT =================

  if(search){

    list.sort((a,b)=>{

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
  render(list);

}


// ================= RENDER =================

function render(list = DATA){

  // ✅ PERFORMANCE TIMER
  const start = performance.now();

  const el =
    document.getElementById("list");

  if(!el){

    console.error(
      "❌ #list element not found"
    );

    return;
  }

  let html = `

<div class="tabs">

  ${[
    "all",
    "single",
    "double",
    "triple",
    "fourth",
    "fifth",
    "multi"
  ]

  .map(tabBtn)

  .join("")}

</div>

    ${CAN_EDIT ? `

      <button
        onclick="openForm()"
        class="add-btn">

        ➕ Add Medicine

      </button>

    ` : ""}

  `;

  // ================= EMPTY =================

  if(
    !Array.isArray(list) ||
    !list.length
  ){

    el.innerHTML =
      html + `
        <p style="padding:20px">
          No data 😅
        </p>
      `;

    return;
  }

  // ================= STRUCTURE =================

  const structured = {};

  list.forEach(i => {

    try{

      if(
        !i ||
        typeof i !== "object"
      ){
        return;
      }

      const g =
        getText(
          i.group || "other"
        ) || "other";

      const form =
        getText(
          i.category || "other"
        ) || "other";

      const combo =
        getType(i || {});

      if(!structured[g]){
        structured[g] = {};
      }

      if(!structured[g][form]){
        structured[g][form] = {};
      }

      if(!structured[g][form][combo]){
        structured[g][form][combo] = [];
      }

      structured[g][form][combo]
        .push(i);

    }catch(err){

      console.error(
        "❌ MAP ITEM ERROR =",
        err
      );

    }

  });

  // ================= GROUP LOOP =================

  Object.keys(structured)
    .forEach(group => {
      
      const totalCount = Object.values(
  structured[group] || {}
)

.flatMap(form =>
  Object.values(form)
)

.flat()

.length;

      html += `

        <div class="section">

          <div
            class="group-header"
            onclick="toggleGroup('${group}')">
            
<span class="group-badge">
  ${totalCount}
</span>
            <div class="group-left">

              <span class="icon">
                ${getGroupIcon(group)}
              </span>

<h2>
  ${String(group).toUpperCase()}
</h2>

<span class="group-badge">
  ${totalCount}
</span>

            </div>

            <span class="group-arrow ${
              openGroup === group
                ? "rotate"
                : ""
            }">
              ▶
            </span>

          </div>

      `;

      if(openGroup === group){

  Object.keys(
    structured[group] || {}
  ).forEach(form => {

    html += `

      <div class="sub">

        <h4>
          ${String(form).toUpperCase()}
        </h4>

    `;

    Object.keys(
      structured[group][form] || {}
    ).forEach(combo => {

      html += `
        <h5>
          ${String(combo).toUpperCase()}
        </h5>
      `;

      html += (
        structured[group][form][combo] || []
      )

      .map(i => {

        try{

          // ✅ OPEN CHECK
          const isOpen =
            openId === i.id;

          return `

            <div
              class="card ${
                isOpen
                  ? "open"
                  : ""
              }"

              onclick="toggle('${i.id || ""}')">

              <div class="title">

                <span class="arrow ${
                  isOpen
                    ? "rotate"
                    : ""
                }">
                  ▶
                </span>

                <span class="icon">

                  ${getFormIcon(
                    getText(
                      i.category
                    )
                  )}

                </span>

                <div class="info">

                  <b>

                    ${highlight(
                      i.name || "",
                      search
                    )}

                    ${i.name_bn
                      ? `
                        <small>
                          (${i.name_bn})
                        </small>
                      `
                      : ""
                    }

                  </b>

                  <small>

                    ${highlight(
                      getCompositionText(
                        i.composition
                      ) || "",
                      search
                    )}

                  </small>

                </div>

                <span class="tag">
                  ${combo}
                </span>

              </div>

              ${
                isOpen
                  ? `

                  <div class="details">

                    <small>

                      Related:

                      ${
                        getRelated(
                          DATA,
                          i.composition
                        ) || "None"
                      }

                    </small>

                    ${renderExtraFields(i)}

                    ${getWarning(i)
                      ? `
                        <div
                          class="tag"
                          style="
                            background:#fee2e2;
                            color:#b91c1c
                          ">

                          ${getWarning(i)}

                        </div>
                      `
                      : ""
                    }

                    ${getRxWarning(i)
                      ? `
                        <div
                          class="tag"
                          style="
                            background:#fff3cd;
                            color:#92400e
                          ">

                          ${getRxWarning(i)}

                        </div>
                      `
                      : ""
                    }

                  </div>

                `
                  : ""
              }

            </div>

          `;

        }catch(err){

          console.error(
            "❌ CARD ERROR =",
            err
          );

          return "";

        }

      })

      .join("");

    });

    html += `</div>`;

  });

}

      html += `</div>`;

    });

  // ✅ FINAL RENDER
  el.innerHTML = html;

  // ✅ PERFORMANCE LOG
  console.log(
    "⚡ render ms =",
    Math.round(
      performance.now() - start
    )
  );

}


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

const activeMedicalFilters =

  Object.entries(medicalFilters)

.filter(([_, values]) =>

  Array.isArray(values) &&
  values.length

);

if(activeMedicalFilters.length){

  list = list.filter(item => {

    const cache =
      item.medicalCache || {};

    return activeMedicalFilters.every(

([field, values]) => {

  const arr =

  cache[
    normalize(field)
  ] || [];

  return values.some(v => {

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

  // ================= TAB =================

  if(tab !== "all"){

    list = list.filter(x =>

      getType(x) === tab

    );

  }


  // ================= SEARCH =================

if(search){

  list = list.filter(x => {

    // ✅ invalid searchText skip
    if(!x?.searchText){
      return false;
    }

    // ✅ search match
    return x.searchText.includes(search);

  });

}


  // ================= REMOVE INVALID =================

  list = list.filter(x =>

    x &&
    typeof x === "object"

  );


  // ✅ render only
  render(list.slice(0,80));

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