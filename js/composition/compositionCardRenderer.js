// ==============================
// COMPOSITION CARD RENDERER
// ==============================

import {
  getMedicinesByComposition
} from "./compositionLoader.js";

import {
  generateCompositionInsights
} from "./compositionEngine.js";


// ==============================
// FORMAT NAME
// ==============================

function formatName(
  text = ""
) {

  return String(text)

    .replaceAll("_", " ")

    .replaceAll("-", " ")

    .replace(/\s+/g, " ")

    .trim();

}


// ==============================
// CAPITALIZE
// ==============================

function capitalize(
  text = ""
) {

  return text

    .split(" ")

    .map(word =>

      word.charAt(0)

        .toUpperCase()

      +

      word.slice(1)

    )

    .join(" ");

}


// ==============================
// RENDER COMPOSITION CARD
// ==============================

export function renderCompositionCard(
  compositionName = ""
) {

  // Medicines
  const medicines =

    getMedicinesByComposition(
      compositionName
    );


  // Insights
  const insights =

    generateCompositionInsights({

      compositionName,

      medicines

    });


  // Top diseases
  const topDiseases =

    (insights.diseases || [])

      .slice(0, 2)

      .map(formatName)

      .join(" • ");


  // Clean name
  const cleanName =

    capitalize(

      formatName(
        compositionName
      )

    );


  return `

    <div
      class="composition-card"
      data-name="${compositionName}"
    >

      <!-- NAME -->

      <div class="composition-name">

        ${cleanName}

      </div>


      <!-- COUNT -->

      <div class="composition-card-count">

        ${insights.medicineCount}

        medicines

      </div>


      <!-- USES -->

      <div class="composition-card-uses">

        ${topDiseases || "General medicine"}

      </div>

    </div>

  `;

}