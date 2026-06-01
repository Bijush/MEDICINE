// ==============================
// SEARCH OVERLAY
// ==============================

import {

  translateText

} from "./translateText.js";


// ==============================
// FETCH WIKIPEDIA SUMMARY
// ==============================

export async function
fetchWikipediaSummary(
  query = ""
){

  try{

    // ==========================
    // SEARCH FIRST
    // ==========================

    const searchResponse =

      await fetch(

        "https://en.wikipedia.org/w/api.php"

        +

        "?origin=*"

        +

        "&action=query"

        +

        "&list=search"

        +

        "&format=json"

        +

        "&srsearch="

        +

        encodeURIComponent(query)

      );


    const searchData =

      await searchResponse.json();


    const firstResult =

      searchData
        ?.query
        ?.search?.[0];


    if(!firstResult?.title){

      return null;

    }


    // ==========================
    // FETCH SUMMARY
    // ==========================

    const summaryResponse =

      await fetch(

        "https://en.wikipedia.org/api/rest_v1/page/summary/"

        +

        encodeURIComponent(
          firstResult.title
        )

      );


    if(!summaryResponse.ok){

      return null;

    }


    return await summaryResponse.json();

  }

  catch(err){

    console.error(

      "Wikipedia Fetch Error:",
      err

    );

    return null;

  }

}



// ==============================
// OPEN SEARCH OVERLAY
// ==============================

export async function openSearchOverlay(

  query = "",

  field = ""

){

  // Remove old
  closeSearchOverlay();


// ==========================
// DIRECT EXACT QUERY
// ==========================

const smartQuery =

  String(query || "")
    .trim();


// ==========================
// SIMPLE TYPE
// ==========================

const searchType = field || "general";

// ==========================
// ENCODED
// ==========================

const encoded =

  encodeURIComponent(
    smartQuery
  );


  const overlay =

    document.createElement("div");


  overlay.className =
    "search-overlay";


  // ==========================
  // INITIAL UI
  // ==========================

  overlay.innerHTML = `

    <div class="search-overlay-box">

      <div class="search-overlay-header">

        <button
          class="search-overlay-close"
        >

          ✕

        </button>

        <div class="search-overlay-title">

          ${query}

        </div>

      </div>


      <div class="search-overlay-content">

        <div class="search-overlay-loading">

          Loading medical information...

        </div>

      </div>

    </div>

  `;


  document.body.appendChild(
    overlay
  );


  // ==========================
  // CONTENT ELEMENT
  // ==========================

  const content =

    overlay.querySelector(
      ".search-overlay-content"
    );


  // ==========================
  // FETCH WIKIPEDIA
  // ==========================

  const wikiData =

    await fetchWikipediaSummary(
      smartQuery
    );


  // ==========================
  // SUCCESS
  // ==========================

  if(
    wikiData?.extract
  ){

    content.innerHTML = `

      <div class="wiki-result">

        ${wikiData?.thumbnail?.source
          ? `
              <img
                src="${wikiData.thumbnail.source}"
                class="wiki-image"
              >
            `
          : ""
        }

<div class="wiki-head">

  <h2 class="wiki-title">

    ${wikiData.title}

  </h2>

  <div class="search-overlay-type">

    ${searchType}

  </div>

</div>


        ${wikiData?.description
          ? `
              <p class="wiki-description">

                ${wikiData.description}

              </p>
            `
          : ""
        }


        <p class="wiki-extract">

          ${wikiData.extract}

        </p>

<button
  class="translate-btn"
>

  Translate To Bangla

</button>
        <div class="wiki-actions">

          <button
            class="search-action-btn"
            data-url="https://en.wikipedia.org/wiki/${encodeURIComponent(wikiData.title)}"
          >

            Open Wikipedia

          </button>


          <button
            class="search-action-btn"
            data-url="https://www.google.com/search?q=${encoded}"
          >

            Search Google

          </button>


          <button
            class="search-action-btn"
            data-url="https://pubchem.ncbi.nlm.nih.gov/#query=${encoded}"
          >

            Search PubChem

          </button>

        </div>

      </div>

    `;

  }


  // ==========================
  // EMPTY
  // ==========================

  else{

    content.innerHTML = `

      <div class="wiki-empty">

        No medical information found.

      </div>


      <div class="wiki-actions">

        <button
          class="search-action-btn"
          data-url="https://www.google.com/search?q=${encoded}"
        >

          Search Google

        </button>


        <button
          class="search-action-btn"
          data-url="https://en.wikipedia.org/wiki/Special:Search?search=${encoded}"
        >

          Search Wikipedia

        </button>

      </div>

    `;
  }


  // ==========================
  // CLOSE
  // ==========================

  overlay

    .querySelector(
      ".search-overlay-close"
    )

    ?.addEventListener(

      "click",

      closeSearchOverlay

    );


  // ==========================
  // ACTION BUTTON CLICK
  // ==========================

  overlay

    .querySelectorAll(
      ".search-action-btn"
    )

    .forEach(button => {

      button.addEventListener(

        "click",

        () => {

          const url =

            button.dataset.url;

          if(!url){
            return;
          }


          // External optional
          window.open(
            url,
            "_blank"
          );

        }

      );

    });
    
// ==========================
// TRANSLATE
// ==========================

overlay

  .querySelector(
    ".translate-btn"
  )

  ?.addEventListener(

    "click",

    async event => {

      const button =

        event.currentTarget;


      const extractEl =

        overlay.querySelector(
          ".wiki-extract"
        );


      const descriptionEl =

        overlay.querySelector(
          ".wiki-description"
        );


      if(
        !extractEl ||
        !wikiData?.extract
      ){
        return;
      }


      // ======================
      // PREVENT DOUBLE CLICK
      // ======================

      if(
        button.dataset.loading === "true"
      ){
        return;
      }


      button.dataset.loading =
        "true";


      const originalText =

        button.innerHTML;


      button.innerHTML =

        "Translating...";


      try{

        // ======================
        // TRANSLATE EXTRACT
        // ======================

        const translatedExtract =

          await translateText(

            wikiData.extract,

            "bn"

          );


        extractEl.innerHTML =

          translatedExtract;


        // ======================
        // TRANSLATE DESCRIPTION
        // ======================

        if(
          descriptionEl &&
          wikiData?.description
        ){

          const translatedDescription =

            await translateText(

              wikiData.description,

              "bn"

            );


          descriptionEl.innerHTML =

            translatedDescription;

        }


        // ======================
        // BUTTON UPDATE
        // ======================

        button.innerHTML =

          "Translated To Bangla ✅";


        button.disabled = true;

      }

      catch(err){

        console.error(
          err
        );

        button.innerHTML =

          "Translation Failed";

      }


      finally{

        button.dataset.loading =
          "false";

      }

    }

  );

}


// ==============================
// CLOSE OVERLAY
// ==============================

export function closeSearchOverlay(){

  document

    .querySelector(
      ".search-overlay"
    )

    ?.remove();

}