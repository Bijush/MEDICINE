// 🔍 SEARCH UTILITIES (UPGRADED)


// ================= 🔥 ESCAPE REGEX =================
export function escapeRegExp(str = ""){

  return str.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}


// ================= 🔥 ESCAPE HTML =================
export function escapeHtml(str = ""){

  return str
    .toString()

    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");
}


// ================= 🔥 NORMALIZE =================
export function normalize(str){

  return (str || "")
    .toString()
    .toLowerCase()

    .replace(/[^\w\s]/g, "")

    .replace(/\s+/g, " ")

    .trim();
}


// ================= 🔥 SAFE ARRAY =================
function toArray(v){

  if(Array.isArray(v)){
    return v;
  }

  if(typeof v === "string"){

    return v
      .split(/,|\+|\/|&|\n|-/)
      .map(x => x.trim())
      .filter(Boolean);
  }

  return [];
}


// ================= 🔥 GET COMP NAME =================
function getCompName(comp){

  // 🟢 string
  if(typeof comp === "string"){
    return comp;
  }

  // 🟢 object support
  if(typeof comp === "object"){

    return (
      comp?.ingredient?.en ||
      comp?.ingredient ||
      comp?.name ||
      ""
    );
  }

  return "";
}


// ================= 🔥 HIGHLIGHT =================
export function highlight(text, search){

  if(!text){
    return "";
  }

  // 🟢 array support
  if(Array.isArray(text)){

    text = text.map(v => {

      if(typeof v === "object"){

        return getCompName(v);

      }

      return v;

    }).join(", ");
  }

  text = text.toString();

  // 🟢 safe html
  const safeText = escapeHtml(text);

  // 🟢 no search
  if(!search){

    return safeText;
  }

  // 🟢 highlight
  return safeText.replace(

    new RegExp(
      escapeRegExp(search),
      "gi"
    ),

    m => `<mark>${m}</mark>`
  );
}


// ================= 🔥 NORMALIZE COMPOSITION =================
export function normalizeComp(comp){

  return toArray(comp)

    .map(getCompName)

    .map(normalize)

    .filter(Boolean);
}


// ================= 🔥 RELATED MEDICINES =================
export function getRelated(DATA = [], comp){

  if(!comp){

    return "";
  }

  const base = normalizeComp(comp);

  if(!base.length){

    return "";
  }

  const used = new Set();

  return DATA.filter(x => {

    if(!x?.composition){

      return false;
    }

    const current = normalizeComp(x.composition);

    // 🟢 skip identical
    const same =
      current.length === base.length &&
      current.every(c => base.includes(c));

    if(same){

      return false;
    }

    // 🟢 partial match
    return current.some(c =>
      base.includes(c)
    );

  })

  // 🟢 duplicate remove
  .filter(x => {

    const key = normalize(x.name);

    if(used.has(key)){
      return false;
    }

    used.add(key);

    return true;
  })

  // 🟢 limit
  .slice(0, 3)

  // 🟢 names
  .map(x => x.name)

  .join(", ");
}