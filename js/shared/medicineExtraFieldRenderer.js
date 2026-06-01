
import { CONFIG }
from "../medicine/config.js";

import { UI_RULES }
from "../../engine/uiRules.js";

import {

  autoGoogleSearchValue

}

from "../composition/googleSearchLink.js";

// prettier key label
export function prettyKey(str=""){

  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

}

// ================= EXTRA FIELDS =================

export function renderValue(

  val,

  depth = 0,

  fieldKey = ""

){

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

        ${autoGoogleSearchValue(

          fieldKey,

          String(val)

        )}

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
                      autoGoogleSearchValue(

                        fieldKey,

                        v?.ingredient?.en ||
                        v?.ingredient ||
                        v?.name ||
                        ""

                      )
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

                    ${
                      autoGoogleSearchValue(

                        fieldKey,

                        v?.en || ""

                      )
                    }

                    ${v?.bn
                      ? `
                        <small class="bn">

                          ${autoGoogleSearchValue(

                            fieldKey,

                            v.bn

                          )}

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

                      .map(x =>

                        autoGoogleSearchValue(

                          fieldKey,

                          x

                        )

                      )

                      .join(" • ")

                  }

                </span>

              `;
            }

            // ================= NORMAL VALUE =================

            return `

              <span class="tag">

                ${autoGoogleSearchValue(

                  fieldKey,

                  v

                )}

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

              ${autoGoogleSearchValue(

                fieldKey,

                v || ""

              )}

              ${bnArr?.[i]
                ? `
                  <small class="bn">

                    ${autoGoogleSearchValue(

                      fieldKey,

                      bnArr[i]

                    )}

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

    <div class="bilingual-text">

      ${Object.entries(val)

        .map(([k,v]) => {

          // =================
          // STRING
          // =================

          if(
            typeof v === "string"
          ){

            return `

              <div class="bilingual-${k}">

                ${autoGoogleSearchValue(

                  fieldKey,

                  v

                )}

              </div>

            `;

          }


          // =================
          // OBJECT
          // =================

          if(
            typeof v === "object"
            &&
            v
          ){

            return `

              <div class="nested-auto-group">

                <div class="nested-auto-title">

                  ${prettyKey(k)}

                </div>

                ${renderValue(

                  v,

                  depth + 1,

                  fieldKey

                )}

              </div>

            `;

          }

          return "";

        })

        .join("")}

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

    // ================= NESTED OBJECT =================

return `

  <div class="nested-object">

    ${entries

      .map(([k,v]) => {

        // =====================
        // AUTO FLATTEN OBJECT
        // =====================

        if(

          typeof v === "object" &&

          !Array.isArray(v) &&

          v !== null

        ){

          return `

            <div class="nested-group">

              <div class="nested-group-title">

                ${prettyKey(k)}

              </div>

              ${renderValue(

                v,

                depth + 1,

                k

              )}

            </div>

          `;

        }


        // =====================
        // NORMAL FIELD
        // =====================

        return `

          <div class="nested-item">

            <b class="nested-key">

              ${prettyKey(k)}:

            </b>

            <div class="nested-value">

              ${renderValue(

                v,

                depth + 1,

                k

              )}

            </div>

          </div>

        `;

      })

      .join("")}

  </div>

`;
  }


  // ================= FALLBACK =================

  return `

    <div class="value">

      ${autoGoogleSearchValue(

        fieldKey,

        String(val)

      )}

    </div>

  `;
}

export function renderExtraFields(item){

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
"medicalCache"

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

          ${renderValue(

  val,

  0,

  f.id

)}

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