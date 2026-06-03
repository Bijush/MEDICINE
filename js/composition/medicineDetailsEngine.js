import {
  initCompositionTabs
}
from "./compositionTabs.js";

export function openMedicineDetails(
  medicine = {},
  container
){

  const brandNames =

    medicine.brandNames ||

    medicine.brands ||

    medicine.tradeNames ||

    medicine.tradeName ||

    medicine.brandName ||

    medicine.brand ||

    [];

  const brandHtml =

    Array.isArray(brandNames)

      ? brandNames.join(", ")

      : brandNames;

  container.innerHTML = `

    <button
      id="medicineBackBtn"
      class="composition-back-btn"
    >
      ← Back
    </button>

    <div class="medicine-details">

      <h2>

        💊 ${medicine.name || "Unknown"}

      </h2>

      <p>

        <b>Generic:</b>

        ${
          medicine.generic ||
          medicine.genericName ||
          "Unknown"
        }

      </p>

      <p>

        <b>Brand:</b>

        ${
          brandHtml ||
          medicine.name ||
          "Unknown"
        }

      </p>

      <p>

        <b>Strength:</b>

        ${
          medicine.strength ||
          medicine.dose ||
          "Unknown"
        }

      </p>

      <p>

        <b>Form:</b>

        ${
          medicine.dosageForm ||
          medicine.form ||
          "Unknown"
        }

      </p>

      <p>

        <b>Route:</b>

        ${
          medicine.route ||
          "Unknown"
        }

      </p>

      <p>

        <b>Class:</b>

        ${
          medicine.class ||
          medicine.drugClass ||
          "Unknown"
        }

      </p>

      <p>

        <b>Manufacturer:</b>

        ${
          medicine.manufacturer ||
          medicine.labeler ||
          medicine.company ||
          "Unknown"
        }

      </p>

      <p>

        <b>Category:</b>

        ${
          medicine.category ||
          "Unknown"
        }

      </p>

    </div>

  `;
document
  .querySelector(
    "#medicineBackBtn"
  )
  ?.addEventListener(

    "click",

    () => {

      container.innerHTML =
        window.lastCompositionHTML ||
        "";

      initCompositionTabs();

    }

  );
}