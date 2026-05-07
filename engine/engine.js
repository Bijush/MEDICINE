import { CONFIG } from "../js/medicine/config.js";
import { ALL_DATA } from "../RegisterAndLoader/loader.js";

import {
  initFilters,
  getSelectedFilters
} from "../js/shared/filters.js";

import {
  highlight,
  getRelated
} from "../js/shared/search-utils.js";

import {
  getType,
  mergeBrands
} from "../js/shared/utils.js";


// ================= STATE =================

let DATA = [];

let search = "";

let tab = "all";

let openId = null;
let editingId = null;
let openGroup = null;

const CAN_EDIT = false;


// ================= NORMALIZE =================

function normalize(str){

  return (str || "")
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_")
    .trim();
}


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

      const compText =
        getCompositionText(
          i?.composition
        );

      return {

        ...i,

        // ✅ ALWAYS UNIQUE ID
        id:

          i?.id ||

          normalize(

            (i?.name || "")
            + "_"
            + compText

          ),

        // ✅ SEARCH
        searchText:
          buildSearchText(i),

        // ✅ FAST SEARCH
        nameLower:
          normalize(
            i?.name || ""
          ),

        compLower:
          normalize(
            compText
          ),

        // ✅ SAFE DEFAULTS
        group:
          i?.group || "other",

        category:
          i?.category || "tablet"

      };

    }catch{

      return {

        ...i,

        id:
          crypto.randomUUID
            ? crypto.randomUUID()
            : Date.now().toString(),

        searchText: "",

        nameLower: "",

        compLower: "",

        group: "other",

        category: "tablet"

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

  update();
}


// ================= SEARCH =================

document.addEventListener("input", e => {

  if(e.target.id === "search"){

    search = normalize(
      e.target.value
    );

    update();
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

    list = list.filter(x =>

      x?.searchText?.includes(search)

    );

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

  render(list);

}


// ================= RENDER =================

function render(list = DATA){

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

      ${tabBtn("all")}
      ${tabBtn("single")}
      ${tabBtn("double")}
      ${tabBtn("triple")}

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

  Object.keys(structured || {})
    .forEach(group => {

      html += `

        <div class="section">

          <div
            class="group-header"
            onclick="toggleGroup('${group}')">

            <div class="group-left">

              <span class="icon">
                ${getGroupIcon(group)}
              </span>

              <h2>
                ${String(group).toUpperCase()}
              </h2>

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

                return `

                  <div
                    class="card ${
                      openId === i.id
                        ? "open"
                        : ""
                    }"

                    onclick="toggle('${i.id || ""}')">

                    <div class="title">

                      <span class="arrow ${
                        openId === i.id
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

                    <div class="details">

                      <small>

                        Related:

                        ${getRelated(
                          DATA,
                          i.composition
                        ) || "None"}

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

  el.innerHTML = html;
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

    list = list.filter(x =>

      x?.searchText?.includes(search)

    );

  }


  // ================= REMOVE INVALID =================

  list = list.filter(x =>

    x &&
    typeof x === "object"

  );


  // ✅ render only
  render(list);

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

function renderValue(val){

  // ================= NULL =================

  if(
    val === null ||
    val === undefined
  ){
    return "";
  }

  // ================= STRING / NUMBER =================

  if(
    typeof val === "string" ||
    typeof val === "number" ||
    typeof val === "boolean"
  ){

    return `
      <div class="value">
        ${val}
      </div>
    `;
  }

  // ================= ARRAY =================

  if(Array.isArray(val)){

    return `

      <div class="tag-wrap">

        ${val.map(v => {

          // 🔥 object inside array
          if(typeof v === "object"){

            return `

              <span class="tag">

                ${
                  v?.en ||
                  v?.name ||
                  v?.ingredient?.en ||
                  ""
                }

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

          // 🔥 normal string
          return `

            <span class="tag">
              ${v}
            </span>

          `;

        }).join("")}

      </div>

    `;
  }

  // ================= OBJECT =================

  if(typeof val === "object"){

    // 🔥 multilingual array
    if(
      Array.isArray(val.en) ||
      Array.isArray(val.bn)
    ){

      return `

        <div class="tag-wrap">

          ${(val.en || []).map((v,i)=>`

            <span class="tag">

              ${v || ""}

              ${val.bn?.[i]
                ? `
                  <small class="bn">
                    ${val.bn[i]}
                  </small>
                `
                : ""
              }

            </span>

          `).join("")}

        </div>

      `;
    }

    // 🔥 multilingual text
    if(
      typeof val.en === "string" ||
      typeof val.bn === "string"
    ){

      return `

        <div class="value">

          ${val.en || ""}

          ${val.bn
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

    // 🔥 nested object auto render
    return `

      <div class="nested-object">

        ${Object.entries(val)

          .map(([k,v]) => `

            <div class="nested-item">

              <b>
                ${prettyKey(k)}:
              </b>

              ${renderValue(v)}

            </div>

          `)

          .join("")}

      </div>

    `;
  }

  return "";
}

function renderExtraFields(item){

  try{

    return CONFIG.fields

      .filter(f =>

        ![
          "name",
          "group",
          "category",
          "composition",
          "searchText",
          "nameLower",
          "compLower"
        ].includes(f.id)

      )

      .map(f => {

        const val = item?.[f.id];

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

        // ================= RENDER =================

        return `

          <div class="field">

            <b>
              ${f.label}:
            </b>

            ${renderValue(val)}

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