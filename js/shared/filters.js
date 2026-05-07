// 🔥 REUSABLE FILTER MODULE (UPGRADED)


// ================= 🔥 STATE =================
let selectedFilters = new Set(["all"]);

let DATA = [];

let onChange = null;


// ================= 🔥 NORMALIZE =================
function normalize(str){

  return (str || "")
    .toString()
    .toLowerCase()
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

  updateFilterText();
}


// ================= 🔥 UPDATE DATA =================
export function setFilterData(data){

  DATA = Array.isArray(data)
    ? data
    : [];

  renderFilters();
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

  const box = document.getElementById("filterOptions");

  if(!box) return;

  const cats = getGroups();

  box.innerHTML = cats.map((c, i) => `

    <label class="option">

      <input
        type="checkbox"
        value="${c}"

        ${selectedFilters.has(c)
          ? "checked"
          : ""
        }

        onchange="window.toggleFilter('${c}')"
      />

      <span>
        ${c.toUpperCase()}
      </span>

    </label>

    ${i !== cats.length - 1
      ? `<div class="divider"></div>`
      : ""
    }

  `).join("");
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

  const el = document.getElementById("filterText");

  if(!el) return;

  // 🟢 ALL
  if(selectedFilters.has("all")){

    el.innerText = "All";

    return;
  }

  const arr = [...selectedFilters];

  // 🟢 MANY
  if(arr.length > 2){

    el.innerText = `${arr.length} selected`;

    return;
  }

  // 🟢 SMALL
  el.innerText = arr
    .map(x => x.toUpperCase())
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

  const box = document.querySelector(".filter-box");

  if(!box?.contains(e.target)){

    document
      .getElementById("filterDropdown")
      ?.classList
      .add("hidden");
  }
});


// ================= 🔥 GLOBAL BIND =================
window.toggleFilter = toggleFilter;

window.toggleDropdown = toggleDropdown;

window.filterSearchList = filterSearchList;