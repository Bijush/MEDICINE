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

import {
  UI_RULES
} from "./uiRules.js";

import { normalize } from "../js/shared/normalize.js";

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


// ================= SEARCHABLE TEXT =================

function buildSearchText(item){

  return [

    item.name,
    item.name_bn,

    item.generic,
    item.generic_bn,

    getText(item.group),
    item.group_bn,

    getText(item.class),
    item.class_bn,

    getText(item.subgroup),

    ...(Array.isArray(item.tags)
      ? item.tags
      : []),

    ...(Array.isArray(item.tags_bn)
      ? item.tags_bn
      : []),

    ...(Array.isArray(item.symptoms)
      ? item.symptoms
      : item.symptoms?.en || []),

    ...(Array.isArray(item.symptoms_bn)
      ? item.symptoms_bn
      : item.symptoms?.bn || []),

    ...(Array.isArray(item.diseases)
      ? item.diseases
      : item.diseases?.en || []),

    ...(Array.isArray(item.diseases_bn)
      ? item.diseases_bn
      : item.diseases?.bn || []),

    ...(Array.isArray(item.brands)
      ? item.brands
      : []),

    ...(Array.isArray(item.searchableText)
      ? item.searchableText
      : []),

    ...(Array.isArray(item.searchableText_bn)
      ? item.searchableText_bn
      : []),

    ...(Array.isArray(item.bestFor)
      ? item.bestFor
      : item.bestFor?.en || []),

    ...(Array.isArray(item.bestFor_bn)
      ? item.bestFor_bn
      : item.bestFor?.bn || []),

    ...(Array.isArray(item.therapeuticCategory)
      ? item.therapeuticCategory
      : item.therapeuticCategory?.en || []),

    ...(Array.isArray(item.therapeuticCategory_bn)
      ? item.therapeuticCategory_bn
      : item.therapeuticCategory?.bn || [])

  ]
  .filter(Boolean)
  .join(" ")
  .toLowerCase();

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

[
  "group",
  "subgroup",
  "type",
  "category",
  "route",
  "therapeuticCategory",
  "symptoms",
  "diseases",
  "bestFor",
  "usageType",
  "rx",
  "otc",
  "antibiotic",
  "controlledDrug",
  "emergencyUse",
  "strengths",
  "brands",
  "safety",
  "mechanism"
]

.forEach(field => {

  let val = i?.[field];

  if(
    val === undefined ||
    val === null
  ){
    return;
  }

  if(Array.isArray(val)){

    medicalCache[field] = val

      .map(v =>

        typeof v === "object"

          ? (
              v?.en ||
              v?.name ||
              ""
            )

          : v

      )

      .map(normalize);

    return;

  }

  if(typeof val === "object"){

    if(Array.isArray(val?.en)){

      medicalCache[field] =
        val.en.map(normalize);

      return;

    }

    val =
      val?.en ||
      val?.name ||
      "";

  }

  if(typeof val === "boolean"){

    val =
      val ? "yes" : "no";

  }

  medicalCache[field] = [
    normalize(val)
  ];

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

      values?.size

    );

if(activeMedicalFilters.length){

  list = list.filter(item => {

    const cache =
      item.medicalCache || {};

    return activeMedicalFilters.every(

      ([field, values]) => {

        const arr =
          cache[field] || [];

        return [...values]

          .some(v =>

            arr.some(x =>

              x.includes(v)

            )

          );

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


  // ================= FILTER =================

  if(!filters.has("all")){

    list = list.filter(x =>

      filters.has(
        getText(x.group)
      )

    );

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


// prettier key label
function prettyKey(str=""){

  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

}

// ================= EXTRA FIELDS =================

function renderValue(val, depth = 0){

  // ================= SAFETY =================

  if(depth > 5){

    return `
      <div class="value">
        Too Deep...
      </div>
    `;
  }


  // ================= NULL =================

  if(
    val === null ||
    val === undefined ||
    val === ""
  ){
    return "";
  }


  // ================= STRING / NUMBER / BOOLEAN =================

  if(
    typeof val === "string" ||
    typeof val === "number" ||
    typeof val === "boolean"
  ){

    return `

      <div class="value">

        ${String(val)}

      </div>

    `;
  }


  // ================= ARRAY =================

  if(Array.isArray(val)){

    // 🔥 empty array
    if(!val.length){
      return "";
    }

    return `

      <div class="tag-wrap">

        ${val

          .filter(Boolean)

          .map(v => {

            // ================= OBJECT IN ARRAY =================

            if(typeof v === "object"){

              // 🔥 composition style
              if(
                v?.ingredient ||
                v?.strength
              ){

                return `

                  <span class="tag">

                    ${
                      v?.ingredient?.en ||
                      v?.ingredient ||
                      v?.name ||
                      ""
                    }

                    ${v?.strength
                      ? `
                        <small class="bn">
                          ${v.strength}
                        </small>
                      `
                      : ""
                    }

                  </span>

                `;
              }

              // 🔥 multilingual object
              if(
                v?.en ||
                v?.bn
              ){

                return `

                  <span class="tag">

                    ${v?.en || ""}

                    ${v?.bn
                      ? `
                        <small class="bn">
                          ${v.bn}
                        </small>
                      `
                      : ""
                    }

                  </span>

                `;
              }

              // 🔥 generic object fallback
              return `

                <span class="tag">

                  ${
                    Object.values(v)

                      .filter(x =>

                        typeof x === "string"

                      )

                      .slice(0,2)

                      .join(" • ")

                  }

                </span>

              `;
            }

            // ================= NORMAL VALUE =================

            return `

              <span class="tag">

                ${v}

              </span>

            `;

          })

          .join("")}

      </div>

    `;
  }


  // ================= OBJECT =================

  if(typeof val === "object"){

    // ================= MULTILINGUAL ARRAY =================

    if(
      Array.isArray(val?.en) ||
      Array.isArray(val?.bn)
    ){

      const enArr = val?.en || [];
      const bnArr = val?.bn || [];

      return `

        <div class="tag-wrap">

          ${enArr.map((v,i)=>`

            <span class="tag">

              ${v || ""}

              ${bnArr?.[i]
                ? `
                  <small class="bn">
                    ${bnArr[i]}
                  </small>
                `
                : ""
              }

            </span>

          `).join("")}

        </div>

      `;
    }


    // ================= MULTILINGUAL TEXT =================

    if(
      typeof val?.en === "string" ||
      typeof val?.bn === "string"
    ){

      return `

        <div class="value">

          ${val?.en || ""}

          ${val?.bn
            ? `
              <small class="bn">
                ${val.bn}
              </small>
            `
            : ""
          }

        </div>

      `;
    }


    // ================= BOOLEAN STYLE OBJECT =================

    const boolKeys =
      Object.values(val)

        .every(v =>

          typeof v === "boolean"

        );

    if(boolKeys){

      return `

        <div class="tag-wrap">

          ${Object.entries(val)

            .map(([k,v]) => `

              <span class="tag">

                ${v ? "✅" : "❌"}

                ${prettyKey(k)}

              </span>

            `)

            .join("")}

        </div>

      `;
    }


    // ================= HUGE OBJECT LIMIT =================

    const entries =

      Object.entries(val)

        .filter(([_,v]) =>

          v !== null &&
          v !== undefined &&
          v !== ""
        )

        .slice(0, 25);


    // 🔥 empty object
    if(!entries.length){
      return "";
    }


    // ================= NESTED OBJECT =================

    return `

      <div class="nested-object">

        ${entries

          .map(([k,v]) => `

            <div class="nested-item">

              <b class="nested-key">

                ${prettyKey(k)}:

              </b>

              <div class="nested-value">

                ${renderValue(
                  v,
                  depth + 1
                )}

              </div>

            </div>

          `)

          .join("")}

      </div>

    `;
  }


  // ================= FALLBACK =================

  return `

    <div class="value">

      ${String(val)}

    </div>

  `;
}

function renderExtraFields(item){

  try{

    // ================= UI CONFIG =================

    const hiddenFields = [

  // 🔥 GLOBAL HIDE
  ...UI_RULES.hiddenFields,
  
  // 🔥 HIDE DUPLICATE AI SCORE
  "score",

  // 🔥 LOCAL HIDE
  ...(item?.ui?.hiddenFields || []),

  // 🔥 EXTRA
  "name",
  "group",
  "category",
  "composition"

];


    const fieldOrder =
      item?.ui?.order || [];


    const customLabels =
      item?.ui?.labels || {};


    const badgeFields =
      item?.ui?.badges || [];


    // ================= FILTER =================

    let fields = [

  // 🔥 CONFIG FIELDS
  ...CONFIG.fields,

  // 🔥 AUTO DETECT NEW FIELDS
  ...Object.keys(item || {})

    .filter(k =>

      !CONFIG.fields.some(
        f => f.id === k
      )

    )

    .map(k => ({

      id: k,

      label: prettyKey(k)

    }))

];


// ================= REMOVE HIDDEN =================

fields = fields.filter(f =>

  !hiddenFields.includes(f.id)

);


// ================= REMOVE DUPLICATE =================

fields = fields.filter(

  (f,i,self)=>

    i === self.findIndex(
      x => x.id === f.id
    )

);


// ================= CUSTOM SORT =================

fields.sort((a,b)=>{

  const ai =
    fieldOrder.indexOf(a.id);

  const bi =
    fieldOrder.indexOf(b.id);


  // ✅ BOTH NOT IN ORDER
  if(ai === -1 && bi === -1){

    return (a.label || a.id)

      .localeCompare(
        b.label || b.id
      );

  }


  // ✅ A NOT FOUND
  if(ai === -1){
    return 1;
  }


  // ✅ B NOT FOUND
  if(bi === -1){
    return -1;
  }


  // ✅ ORDER PRIORITY
  return ai - bi;

});

const importantKeywords =

  UI_RULES.importantFields || [];


    // ================= RENDER =================

    return fields

  .map(f => {

    const val =
      item?.[f.id];

    // ================= EMPTY CHECK =================

    if(
      val === undefined ||
      val === null
    ){
      return "";
    }

    // 🔥 empty string
    if(
      typeof val === "string" &&
      !val.trim()
    ){
      return "";
    }

    // 🔥 empty array
    if(
      Array.isArray(val) &&
      !val.length
    ){
      return "";
    }

    // 🔥 empty object
    if(
      typeof val === "object" &&
      !Array.isArray(val) &&
      !Object.keys(val).length
    ){
      return "";
    }


    // ================= LABEL =================

    const label =

  customLabels[f.id]

  ||

  UI_RULES.labels?.[f.id]

  ||

  f.label

  ||

  prettyKey(f.id);


    // ================= BADGE =================

    const badge =
      badgeFields.includes(f.id);


    // ================= HIGHLIGHT =================

    const isImportant =

      importantKeywords.some(k =>

        f.id
          .toLowerCase()
          .includes(k)

      );


    // ================= RENDER =================

    return `

      <div
        data-field="${f.id}"

        class="
          field
          field-${f.id}
          ${isImportant ? "important-field" : ""}
        ">

        <div class="field-head">

          <b>
            ${label}:
          </b>

          ${badge
            ? `
              <span class="tag">
                ⭐ Important
              </span>
            `
            : ""
          }

        </div>

        <div class="field-body">

          ${renderValue(val)}

        </div>

      </div>

    `;

  })

      .join("");

  }catch(err){

    console.error(
      "❌ renderExtraFields ERROR =",
      err
    );

    return "";
  }

}


// 🚀 START

load();