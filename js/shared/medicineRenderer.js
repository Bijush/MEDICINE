import {
  highlight,
  getRelated
} from "./search-utils.js";

import {
  getType
} from "./utils.js";

import {

  renderExtraFields

} from "./medicineExtraFieldRenderer.js";

import {

  getText,
  getCompositionText

} from "./medicinePreprocessor.js";


export function renderMedicineList(
  list = [],
  options = {}
){
  const {

  DATA = [],
  search = "",
  openGroup = null,
  openId = null,

  CAN_EDIT = false,

  tabBtn,
  getGroupIcon,
  getFormIcon,

  getWarning,
  getRxWarning

} = options;

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