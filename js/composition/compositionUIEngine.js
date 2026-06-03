// ==============================
// COMPOSITION UI ENGINE
// ==============================

import {

  renderExtraFields

}

from "../shared/medicineExtraFieldRenderer.js";

import {

  autoGoogleSearchValue

} from "../composition/googleSearchLink.js";


// ==============================
// SIMPLE TEXT EXTRACTOR
// ==============================

function getSimpleText(
  value = ""
){

  // ==========================
  // STRING
  // ==========================

  if(
    typeof value === "string"
  ){

    return value;

  }


  // ==========================
  // ARRAY
  // ==========================

  if(
    Array.isArray(value)
  ){

    return value.join("<br>");
  }


  // ==========================
  // OBJECT
  // ==========================

  if(
    typeof value === "object"
    &&
    value
  ){

    let html = "";


    // ======================
    // ENGLISH
    // ======================

    if(value.en){

      html += `

        <div class="field-en">

          ${value.en}

        </div>

      `;

    }


    // ======================
    // BANGLA
    // ======================

    if(value.bn){

      html += `

        <div class="field-bn">

          ${value.bn}

        </div>

      `;

    }


    // ======================
    // DETAILS
    // ======================

    if(value.details){

      if(value.details.en){

        html += `

          <div class="field-details-en">

            ${value.details.en}

          </div>

        `;

      }

      if(value.details.bn){

        html += `

          <div class="field-details-bn">

            ${value.details.bn}

          </div>

        `;

      }

    }


    return html;

  }

  return "";

}

// ==============================
// BADGE HTML
// ==============================

function badge(text = "") {

  const cleanText =

    String(text)

      .replaceAll("_", " ")

      .replaceAll("-", " ");


  return `

    <div class="composition-badge">

      ${cleanText}

    </div>

  `;

}


// ==============================
// SECTION HTML
// ==============================

function section(

  title = "",

  content = ""

) {

  return `

    <div class="composition-section">

      <div class="composition-section-title">

        ${title}

      </div>

      ${content}

    </div>

  `;

}


// ==============================
// EMPTY MESSAGE
// ==============================

function emptyMessage(
  text = "No information available."
) {

  return `

    <p class="composition-empty">

      ${text}

    </p>

  `;

}
// medicines list 
function renderMedicineList(
  medicines = []
){

  if(!medicines.length){

    return emptyMessage(
      "No medicines found."
    );

  }

  return medicines.map((med,index) => `

    <div
  class="composition-medicine-card"
  data-index="${index}"
>

      <div class="medicine-name">

        ${med.name || "Unknown"}

      </div>

      <div class="medicine-meta">

        ${med.strength || ""}

        ${med.dosageForm || ""}

      </div>

    </div>

  `).join("");

}
// ==============================
// RENDER INSIGHTS UI
// ==============================

export function renderInsightsUI({

  compositionName = "",

  insights = {},

  learning = {},
  medicines = []

}) {

  return `

    <div class="composition-details">


      <!-- TABS -->

      <div class="composition-tabs">

        <button
          class="composition-tab active"
          data-tab="overview"
        >
          Overview
        </button>
 <button
    class="composition-tab"
    data-tab="medicines"
  >
    Medicines (${medicines.length})
  </button>

        <button
          class="composition-tab"
          data-tab="history"
        >
          History
        </button>

        <button
          class="composition-tab"
          data-tab="brands"
        >
          Brands
        </button>

      </div>


<!-- TITLE -->

<div class="composition-name">

  ${autoGoogleSearchValue(

    "composition",

    compositionName

  )}

</div>


      <!-- OVERVIEW -->

      <div
        class="composition-tab-content active"
        data-content="overview"
      >

        ${section(

  "Quick Summary",

  `

  <div class="overview-text">

    ${learning.shortSummary || ""}

  </div>

  `

)}


${section(

  "Easy Explanation",

  `

  <div class="overview-text">

    ${learning.beginnerExplanation || ""}

  </div>

  `

)}


${section(

  "How It Works",

  `

  <div class="overview-text">

    ${getSimpleText(
      insights.mechanism
    )}

  </div>

  `

)}


${section(

  "Common Uses",

  insights.diseases?.length

    ?

    `

    <div class="composition-badge-wrap">

      ${insights.diseases

        .map(badge)

        .join("")}

    </div>

    `

    :

    emptyMessage()

)}

      </div>


      <!-- HISTORY -->

      <div
        class="composition-tab-content"
        data-content="history"
      >

        ${section(

  "Medical History",

  insights.history

    ?

    renderExtraFields({

      ...insights.history,

      ui: {

        order: [

          "inventedYear",

          "firstMedicalUse",

          "country",

          "discoveredBy",

          "chemicalFormula",

          "medicineClass",

          "mechanism",

          "howItWorks"

        ],

        labels: {

          inventedYear:
            "Invented Year",

          firstMedicalUse:
            "First Medical Use",

          discoveredBy:
            "Discovered By",

          chemicalFormula:
            "Chemical Formula",

          medicineClass:
            "Medicine Class",

          mechanism:
            "Mechanism",

          howItWorks:
            "How It Works"

        }

      }

    })

    :

    emptyMessage(
      "No historical data available."
    )

)}

      </div>

<div
  class="composition-tab-content"
  data-content="medicines"
>

  ${section(

    `Medicines (${medicines.length})`,

    renderMedicineList(
      medicines
    )

  )}

</div>
      <!-- BRANDS -->

      <div
        class="composition-tab-content"
        data-content="brands"
      >

        ${section(

          "Popular Brands",

          insights.brands?.length

            ?

            `

            <div class="composition-badge-wrap">

              ${insights.brands

                .map(badge)

                .join("")}

            </div>

            `

            :

            emptyMessage()

        )}


        ${section(

          "Common Categories",

          insights.categories?.length

            ?

            `

            <div class="composition-badge-wrap">

              ${insights.categories

                .map(badge)

                .join("")}

            </div>

            `

            :

            emptyMessage()

        )}


        ${section(

          "Side Effects",

          insights.sideEffects?.length

            ?

            `

            <div class="composition-badge-wrap">

              ${insights.sideEffects

                .map(badge)

                .join("")}

            </div>

            `

            :

            emptyMessage()

        )}

      </div>


      <!-- WARNINGS -->

      ${insights.interactions?.length

        ?

        section(

          "Warnings",

          insights.interactions

            .map(item => `

              <p>

                • ${item.warning}

              </p>

            `)

            .join("")

        )

        :

        ""

      }

    </div>

  `;

}