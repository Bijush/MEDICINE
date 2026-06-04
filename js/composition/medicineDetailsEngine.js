import {
  initCompositionTabs
}
from "./compositionTabs.js";

import {
  initBackButton
}
from "./compositionDetailsEngine.js";

import {
  getCompositionHistory
}
from "./compositionDataLoader.js";

import {
  restorePosition
}
from "./navigationEngine.js";


export function openMedicineDetails(
  medicine = {},
  container
){

  console.log(
    "Medicine Object:",
    medicine
  );

  const brandNames =

    medicine.brandNames ||

    medicine.brands ||

    medicine.tradeNames ||

    medicine.tradeName ||

    medicine.brandName ||

    medicine.brand ||

    [];

  const brandHtml =

    Array.isArray(
      brandNames
    )

      ? brandNames.join(", ")

      : String(
          brandNames || ""
        );

  const history =

    getCompositionHistory(

      medicine.composition?.[0] ||

      medicine.generic ||

      medicine.genericName ||

      medicine.name

    );

  container.innerHTML = `

    <button
      id="medicineBackBtn"
      class="composition-back-btn"
    >
      ← Back
    </button>

    <div class="medicine-details">

      <h2>

        💊 ${
          medicine.name ||
          "Unknown"
        }

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

          medicine.manufacturerName ||

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

      <hr>

      <h3>

        📖 Medical History

      </h3>

      <p>

        <b>Invented Year:</b>

        ${
          history?.inventedYear ||

          "Unknown"
        }

      </p>

      <p>

        <b>First Medical Use:</b>

        ${
          history?.firstMedicalUse ||

          "Unknown"
        }

      </p>

      <p>

        <b>Country:</b>

        ${
          history?.country ||

          "Unknown"
        }

      </p>

      <p>

        <b>Discovered By:</b>

        ${
          history?.discoveredBy ||

          "Unknown"
        }

      </p>

      <p>

        <b>Chemical Formula:</b>

        ${
          history?.chemicalFormula ||

          "Unknown"
        }

      </p>

      <p>

        <b>Medicine Class:</b>

        ${
          history?.medicineClass?.en ||

          "Unknown"
        }

      </p>

      <p>

        <b>Mechanism:</b>

        ${
          history?.mechanism?.en ||

          "Unknown"
        }

      </p>

      <p>

        <b>How It Works:</b>

        ${
          history?.howItWorks?.en ||

          "Unknown"
        }

      </p>

      ${
        history?.medicineClass?.bn

          ?

          `

          <p>

            <b>বাংলা Class:</b>

            ${history.medicineClass.bn}

          </p>

          `

          : ""

      }

      ${
        history?.howItWorks?.bn

          ?

          `

          <div
            class="medicine-history-bn"
          >

            <b>বাংলা ব্যাখ্যা:</b>

            <br><br>

            ${history.howItWorks.bn}

          </div>

          `

          : ""

      }

    </div>

  `;

  container
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

        initBackButton();
        restorePosition();

      }

    );

}