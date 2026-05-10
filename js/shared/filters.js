
import {normalize} from "./normalize.js";


// 🔥 REUSABLE FILTER MODULE (UPGRADED)


// ================= 🔥 STATE =================
let selectedFilters = new Set(["all"]);

let DATA = [];

let onChange = null;

let selectedMedicalFilters = {};


function safePretty(text){

  try{

    if(
      typeof prettyKey ===
      "function"
    ){

      return prettyKey(text);

    }

  }catch(err){

    console.warn(
      "prettyKey error:",
      err
    );

  }

  return (text || "")

    .toString()

    .replace(/_/g," ")

    .replace(/-/g," ")

    .replace(
      /\b[a-z]/g,
      c => c.toUpperCase()
    )

    .trim();

}

// ================= 🔥 SAFE GROUP =================

function getGroup(item){

  // 🟢 string support
  if(typeof item?.group === "string"){
    return item.group;
  }

  // 🟢 nested object support
  return (
    item?.group?.en ||
    item?.group_bn ||
    "other"
  );
}


// ================= 🔥 INIT =================
export function initFilters(data, callback){

  DATA = Array.isArray(data)
    ? data
    : [];

  onChange = callback;

  renderFilters();

renderMedicalFilters();

updateFilterText();

updateMedicalFilterText();
}


// ================= 🔥 UPDATE DATA =================
export function setFilterData(data){

  DATA = Array.isArray(data)
    ? data
    : [];
    
    // 🔥 RESET CACHE
  window.__medicalFiltersCache =
    null;

  // 🔥 CLEAN INVALID FILTERS

  Object.keys(selectedMedicalFilters)

    .forEach(key => {

      if(
        !getMedicalFields()
          .includes(key)
      ){

        delete selectedMedicalFilters[key];

      }

    });

  renderFilters();

  renderMedicalFilters();

  updateFilterText();

  updateMedicalFilterText();

}


// ================= 🔥 GET GROUPS =================
function getGroups(){

  return [

    "all",

    ...new Set(

      DATA
        .map(getGroup)
        .filter(Boolean)
        .map(normalize)

    )

  ];
}


// ================= 🔥 RENDER =================

function renderFilters(){

  const box = document.getElementById(
    "filterOptions"
  );

  if(!box){
    return;
  }

  const cats = getGroups();


  // ✅ EMPTY
  if(!cats.length){

    box.innerHTML = `

      <div class="empty">

        No filters found

      </div>

    `;

    return;

  }


  // ✅ RENDER
  box.innerHTML = cats

    .sort((a,b)=>

      safePretty(a)

        .localeCompare(
          safePretty(b)
        )

    )

    .map((c, i) => `

      <label class="option">

        <input
          type="checkbox"

          value="${c}"

          ${selectedFilters.has(c)
            ? "checked"
            : ""
          }

          onchange="
            window.toggleFilter(
              '${c}'
            )
          "
        />

        <span>

          ${
            c === "all"

              ? "All"

              : safePretty(c)
          }

        </span>

      </label>

      ${i !== cats.length - 1

        ? `
          <div class="divider"></div>
        `

        : ""
      }

    `)

    .join("");

}


// ================= 🔥 TOGGLE =================
export function toggleFilter(c){

  c = normalize(c);

  // 🟢 ALL
  if(c === "all"){

    selectedFilters.clear();

    selectedFilters.add("all");
  }

  // 🟢 NORMAL FILTER
  else{

    selectedFilters.delete("all");

    if(selectedFilters.has(c)){

      selectedFilters.delete(c);

    }else{

      selectedFilters.add(c);
    }

    // 🟢 fallback
    if(selectedFilters.size === 0){

      selectedFilters.add("all");
    }
  }

  updateFilterText();

  if(onChange){
    onChange();
  }
}


// ================= 🔥 TEXT UPDATE =================
function updateFilterText(){

  const el =
    document.getElementById(
      "filterText"
    );

  if(!el){
    return;
  }

  // 🟢 ALL
  if(selectedFilters.has("all")){

    el.innerText = "All";

    return;

  }

  const arr =
    [...selectedFilters];


  // 🟢 MANY
  if(arr.length > 2){

    el.innerText =
      `${arr.length} selected`;

    return;

  }


  // 🟢 SMALL
  el.innerText = arr

    .map(safePretty)

    .join(", ");

}


// ================= 🔥 DROPDOWN =================
export function toggleDropdown(e){

  e?.stopPropagation();

  document
    .getElementById("filterDropdown")
    ?.classList
    .toggle("hidden");
}


// ================= 🔥 SEARCH FILTER =================
export function filterSearchList(val = ""){

  const v = normalize(val);

  document
    .querySelectorAll("#filterOptions .option")

    .forEach(el => {

      const text = normalize(el.innerText);

      el.style.display =
        text.includes(v)
          ? ""
          : "none";
    });
}


// ================= 🔥 GET STATE =================
export function getSelectedFilters(){

  return selectedFilters;
}


// ================= 🔥 RESET =================
export function resetFilters(){

  selectedFilters.clear();

  selectedFilters.add("all");

  renderFilters();

  updateFilterText();

  if(onChange){
    onChange();
  }
}



// ================= 🔥 CLICK OUTSIDE CLOSE =================

document.addEventListener("click", e => {

  // ================= OLD FILTER =================

  const normalBox =

    document.querySelectorAll(
      ".filter-box"
    )[1];

  if(
    !normalBox?.contains(e.target)
  ){

    document
      .getElementById(
        "filterDropdown"
      )
      ?.classList
      .add("hidden");

  }


  // ================= MEDICAL FILTER =================

  const medicalBox =

    document.querySelectorAll(
      ".filter-box"
    )[0];

  if(
    !medicalBox?.contains(e.target)
  ){

    document
      .getElementById(
        "medicalFilterDropdown"
      )
      ?.classList
      .add("hidden");

  }

});


// ================= 🔥 GLOBAL BIND =================
window.toggleFilter = toggleFilter;

window.toggleDropdown = toggleDropdown;

window.filterSearchList = filterSearchList;

// new code adding here

// ================= 🔥 MEDICAL FILTER =================

function getMedicalFields(){

  return [

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

  ];

}


// ================= 🔥 AUTO FILTER DATA =================

function getDynamicFilters(){

  const result = {};

  const allowed =
    getMedicalFields();


  DATA.forEach(item => {

    // ✅ SAFE CHECK
    if(
      !item ||
      typeof item !== "object"
    ){
      return;
    }

    allowed.forEach(key => {

      let val =

  item?.medicalCache?.[
  normalize(key)
]

  ||

  item?.[key];


      // ================= EMPTY =================

      if(
        val === undefined ||
        val === null ||
        val === ""
      ){
        return;
      }


      // ================= INIT =================

      if(!result[key]){

        result[key] =
          new Set();

      }


      // ================= ARRAY =================

      if(Array.isArray(val)){

        val.forEach(v => {

          // 🔥 object support
          if(
            typeof v === "object"
          ){

            v =

  v?.en ||

  v?.bn ||

  v?.name ||

  v?.value ||

  v?.ingredient?.en ||

  v?.ingredient ||

  "";

          }

          v = normalize(v);

          // 🔥 skip empty
          if(v){

            result[key].add(v);

          }

        });

        return;

      }


      // ================= OBJECT =================

      if(
        typeof val === "object"
      ){

        // 🔥 multilingual array
        if(
  Array.isArray(val?.en)
){

  [

    ...(val?.en || []),

    ...(val?.bn || [])

  ]

  .forEach(v => {

    // 🔥 object support
    if(typeof v === "object"){

      v =

        v?.en ||

        v?.bn ||

        v?.name ||

        v?.value ||

        v?.ingredient?.en ||

        v?.ingredient ||

        "";

    }

    v = normalize(v);

    if(v){

      result[key].add(v);

    }

  });

  return;

}

        val =

  val?.en ||

  val?.bn ||

  val?.name ||

  val?.value ||

  val?.ingredient?.en ||

  val?.ingredient ||

  "";

      }


      // ================= BOOLEAN =================

      if(
        typeof val === "boolean"
      ){

        result[key].add(

          val
            ? "yes"
            : "no"

        );

        return;

      }


      // ================= NUMBER =================

      if(
        typeof val === "number"
      ){

        val =
          val.toString();

      }


      // ================= NORMAL =================

      val = normalize(val);

      if(val){

        result[key].add(val);

      }

    });

  });


  // ================= CLEAN EMPTY =================

  Object.keys(result)

    .forEach(key => {

      if(
        result[key].size === 0
      ){

        delete result[key];

      }

    });


  return result;

}


// ================= 🔥 RENDER =================

export function renderMedicalFilters(){

  const box =
    document.getElementById(
      "medicalFilterOptions"
    );

  if(!box) return;

  const filters =

  window.__medicalFiltersCache ||

  (
    window.__medicalFiltersCache =

      getDynamicFilters()
  );


  // ================= EMPTY =================

  if(
    !Object.keys(filters).length
  ){

    box.innerHTML = `

      <div class="empty">

        No medical filters found

      </div>

    `;

    return;
  }


  // ================= RENDER =================

  box.innerHTML =

    Object.entries(filters)

      .map(([field, values]) => `

        <div class="medical-group">

          <h4>

            ${safePretty(field)}

          </h4>

          <div class="medical-items">

            ${[...values]

.sort((a,b)=>

  safePretty(a)

    .localeCompare(

      safePretty(b)

    )

)

              .map(v => `

<label
  class="option"
  data-search="${normalize(v)}"
>

                  <input
                    type="checkbox"

                    ${selectedMedicalFilters?.[field]

                      ?.has(v)

                        ? "checked"
                        : ""
                    }

                    onchange="
                      window.toggleMedicalFilter(
                        '${field}',
                        '${v}'
                      )
                    "
                  />

                  <span>

${
  v === "yes"
    ? "Yes"
    : v === "no"
      ? "No"
      : safePretty(v)
}

                  </span>

                </label>

              `)

              .join("")}

          </div>

        </div>

      `)

      .join("");


  // ================= UPDATE TEXT =================

  updateMedicalFilterText();

}


// ================= 🔥 TOGGLE =================

export function toggleMedicalFilter(
  field,
  value
){

  // ================= SAFE =================

  field = normalize(field);
  value = normalize(value);

  if(
    !field ||
    !value
  ){
    return;
  }


  // ================= INIT =================

  if(
    !selectedMedicalFilters[field]
  ){

    selectedMedicalFilters[field] =
      new Set();

  }

  const set =
    selectedMedicalFilters[field];


  // ================= TOGGLE =================

  if(set.has(value)){

    set.delete(value);

  }else{

    set.add(value);

  }


  // ================= REMOVE EMPTY =================

  if(set.size === 0){

    delete selectedMedicalFilters[field];

  }


  // ================= UPDATE UI =================

  updateMedicalFilterText();


  // ================= CALLBACK =================

  if(
    typeof onChange ===
    "function"
  ){

    onChange();

  }


  // ================= DEBUG =================

  

}

// ================= 🔥 UPDATE TEXT =================

function updateMedicalFilterText(){

  const el =

    document.getElementById(
      "medicalFilterText"
    );

  if(!el){
    return;
  }

  const selected = [];


  Object.values(

    selectedMedicalFilters

  )

  .forEach(set => {

    [...set].forEach(v => {

      selected.push(v);

    });

  });


  // ✅ EMPTY
  if(!selected.length){

    el.innerText =
      "Select Medical Filters";

    return;

  }


  // ✅ SMALL
  if(selected.length <= 2){

    el.innerText =

      selected

        .slice(0,2)

        .map(safePretty)

        .join(", ");

    return;

  }


  // ✅ LARGE
  el.innerText =

    `${selected.length} selected`;

}

// ================= 🔥 GET =================

export function getMedicalFilters(){

  const result = {};

  Object.entries(
    selectedMedicalFilters
  )

  .forEach(([key,set]) => {

    result[key] = [...set];

  });

  return result;

}

// ================= 🔥 DROPDOWN =================

export function toggleMedicalDropdown(e){

  e?.stopPropagation();

  const dropdown =

    document.getElementById(
      "medicalFilterDropdown"
    );

  if(!dropdown){
    return;
  }


  // ✅ CLOSE NORMAL FILTER
  document

    .getElementById(
      "filterDropdown"
    )

    ?.classList

    .add("hidden");


  // ✅ TOGGLE MEDICAL
  dropdown.classList.toggle(
    "hidden"
  );

}

let medicalFilterSearchTimeout;

window.filterMedicalList =

function(val = ""){

  clearTimeout(
    medicalFilterSearchTimeout
  );

  medicalFilterSearchTimeout =

    setTimeout(() => {

      val = normalize(val);

      const options =

        document.querySelectorAll(
          "#medicalFilterOptions .option"
        );

      options.forEach(el => {

        const text =

          el.dataset.search ||

          normalize(el.innerText);

        el.dataset.search =
          text;

        el.style.display =

          text.includes(val)

            ? ""

            : "none";

      });

    }, 120);

};


// ================= 🔥 GLOBAL =================

window.toggleMedicalDropdown =
  toggleMedicalDropdown;

window.toggleMedicalFilter =
  toggleMedicalFilter;