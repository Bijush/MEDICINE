import { THEORY_FILES } from "./theoryRegistry.js";

// 🔥 normalize function
function normalize(str){
  return (str || "").toLowerCase().trim();
}

// 🔥 MAIN BUILD
export const THEORY_DATA = THEORY_FILES
  .flatMap(source =>
    source.data.map(item => ({

      id: item.id,
      type: source.type,

      // ✅ universal fields
      title: item.name || item.title,
      subtitle: item.name_bn || "",
      description: item.description || "",

      group: item.group || source.type,
      category: item.category || "",

      // 🔥 search support
      searchText: normalize(
        (item.name || "") + " " +
        (item.title || "") + " " +
        (item.description || "")
      ),

      // 🔥 original data
      raw: item

    }))
  );

// 🔍 SEARCH
export function searchTheory(val){
  const v = normalize(val);

  return THEORY_DATA.filter(i =>
    i.searchText.includes(v)
  );
}

// 📂 FILTER
export function filterTheory(group){
  return THEORY_DATA.filter(i =>
    group === "all" || i.group === group
  );
}