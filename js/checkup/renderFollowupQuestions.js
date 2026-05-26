

// ==============================
// MAIN
// ==============================

export function renderLiveFollowupQuestions() {

  const container =

    document.getElementById(
      "liveFollowupQuestions"
    );

  if (!container) return;

  

  let html = "";

  // ==========================
  // LOOP SELECTED SYMPTOMS
  // ==========================

  (window.generatedFollowups || [])

.forEach(q => {
  
  if (

  !q ||

  !q.question

) {

  return;
}

  html += `

    <div class="
      live-followup-card
    ">

      <div class="
        live-followup-title
      ">

        ${formatText(

  q.question
    ?.replace("?", "")
    ?.slice(0, 40)

  || "Followup"

)}

      </div>

      <div class="
        live-followup-options
      ">

        ${(q.options || ["Yes", "No"])

          .map(option => `

            <button

              class="
                live-followup-item

                ${
                  window.followupAnswers?.[
                    q.question
                  ] === option

                    ? "followup-selected"

                    : ""
                }
              "

              data-question="
                ${q.question}
              "

              data-answer="
                ${option}
              "

              data-symptom="
                ${q.symptomKey || ""}
              "

              data-symptom-map='${JSON.stringify(
                q.symptomKeyMap || {}
              )}'

            >

              ${option}

            </button>
          `)

          .join("")}

      </div>

      <div class="
        live-followup-question
      ">

        ${q.question}

      </div>

    </div>
  `;
});

  container.innerHTML = html;

  attachFollowupEvents();
}

// ==============================
// EVENTS
// ==============================

function attachFollowupEvents() {

  const buttons =

    document.querySelectorAll(
      ".live-followup-item"
    );

  buttons.forEach(btn => {
    
  btn.addEventListener(

    "click",

    () => {

      // ==================
      // DATA
      // ==================

      const question =

        btn.dataset.question
          ?.trim();

      const answer =

        btn.dataset.answer
          ?.trim();

      const rawSymptom =

        btn.dataset.symptom
          ?.trim();

      const symptom =
  rawSymptom;

      // ==================
      // OPTION MAP
      // ==================

      let symptomMap = {};

      try {

        symptomMap = JSON.parse(
          btn.dataset.symptomMap || "{}"
        );

      } catch {

        symptomMap = {};
      }

      if (!question) return;

      // ==================
      // SAVE ANSWER
      // ==================

      window.followupAnswers ||= {};

      window.followupAnswers[
        question
      ] = answer;

      // ==================
      // BUTTON UI
      // ==================

      document

        .querySelectorAll(
          `[data-question="${CSS.escape(question)}"]`
        )

        .forEach(button => {

          button.classList.remove(
            "followup-selected"
          );
        });

      btn.classList.add(
        "followup-selected"
      );

      // ==================
      // GLOBAL SYMPTOMS
      // ==================

      window.currentUserSymptoms ||= {};

      // ==================
      // DEFAULT YES/NO
      // ==================

      if (

        symptom &&

        answer === "Yes"

      ) {

        window.currentUserSymptoms[
          symptom
        ] = true;
        
        const allMatchingCheckboxes =

  document.querySelectorAll(
    `.symptom-ui input[value="${CSS.escape(symptom)}"]`
  );

allMatchingCheckboxes.forEach(
  box => {

    box.checked = true;
  }
);
      }

if (

  symptom &&

  answer === "No"

) {

  delete window.currentUserSymptoms[
    symptom
  ];

  const allMatchingCheckboxes =

    document.querySelectorAll(
      `.symptom-ui input[value="${CSS.escape(symptom)}"]`
    );

  allMatchingCheckboxes.forEach(
    box => {

      box.checked = false;
    }
  );
}

      // ==================
      // OPTION MAP SUPPORT
      // ==================

      Object.values(symptomMap)

.forEach(sym => {

  delete window.currentUserSymptoms[
    sym
  ];
});

      if (

        symptomMap[answer]

      ) {

        window.currentUserSymptoms[
          symptomMap[answer]
        ] = true;
      }

      // ==================
      // CHECKBOX SYNC
      // ==================

      const checkbox =

  document.querySelector(
    `.symptom-ui input[value="${CSS.escape(symptom)}"]`
  );

if (checkbox) {

  checkbox.checked =
    answer === "Yes";

}

      // ==================
      // REDIAGNOSIS
      // ==================

      document.dispatchEvent(

        new CustomEvent(

          "followupUpdated",

          {

            detail:
              window.currentUserSymptoms
          }
        )
      );
    }
  );
});

}
// ==============================
// FORMAT
// ==============================

function formatText(text = "") {

  return text

    .replace(/_/g, " ")

    .replace(
      /\b\w/g,
      l => l.toUpperCase()
    );
}