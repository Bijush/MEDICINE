/*
🧠 FILE: checkUpUiRender.js

👉 কাজ:
- final diagnosis result UI তে show করে
- disease, confidence, reason, medicine সব render করে

📥 INPUT:
result = {
  disease,
  best,
  meds,
  allDiseases,
  advice,
  selectedSymptoms
}

📤 OUTPUT:
- HTML UI (Doctor Report card)

🔥 Features:
✔ selected symptoms show
✔ confidence bar (color based)
✔ reasons (why diagnosis)
✔ emergency alert
✔ best medicine highlight
✔ other medicines list
✔ alternative diseases show

⚠️ IMPORTANT:
- old SYMPTOMS dependency remove করা হয়েছে
- এখন direct id → readable text convert হয়
*/


export function renderCheckupResult(result){

  const el = document.getElementById("result");
  if(!el) return;

  if(!result || !result.disease){
    el.innerHTML = `<p>No result 😅</p>`;
    return;
  }

  const d = result.disease;
  const selected = result.selectedSymptoms || [];

  const best = result.best || null;
  const meds = result.meds || [];
  const others = result.allDiseases || [];

  // 🔥 remove duplicate best medicine safely
  const filteredMeds = meds.filter(m => m.name !== best?.name);

  // 🔥 confidence color
  const confidence = d.confidence || 0;
  const color =
    confidence > 75 ? "#16a34a" :
    confidence > 50 ? "#f59e0b" :
    "#dc2626";

  // 🔥 safe label (id → readable)
  const formatLabel = (id) =>
    (id || "")
      .replaceAll("_", " ")
      .replace(/\b\w/g, c => c.toUpperCase());

  el.innerHTML = `

    <div class="card open">

      <h3 style="margin-bottom:10px">🧠 Doctor Report</h3>

      <!-- 🧾 SELECTED -->
      ${
        selected.length ? `
        <div class="field">
          <b>🧾 Selected Symptoms</b>
          <div class="tag-wrap">
            ${
              selected.map(id => `
                <span class="tag">✔ ${formatLabel(id)}</span>
              `).join("")
            }
          </div>
        </div>` : ""
      }

      <!-- 🦠 DISEASE -->
      <div class="field">
        <b>🦠 Disease</b>
        <div class="value">
          ${d.name}
          ${d.name_bn ? `<small class="bn">${d.name_bn}</small>` : ""}
        </div>
      </div>

      <!-- 📊 CONFIDENCE -->
      <div class="field">
        <b>📊 Confidence</b>
        <div style="background:#eee;border-radius:6px;overflow:hidden">
          <div style="
            width:${confidence}%;
            background:${color};
            color:white;
            padding:4px;
            text-align:center;
          ">
            ${confidence}%
          </div>
        </div>
      </div>

      <!-- 🧠 WHY -->
      ${
        d.reasons?.length ? `
        <div class="field">
          <b>🧠 Why this diagnosis</b>
          <div class="tag-wrap">
            ${d.reasons.map(r=>`
              <span class="tag">${r.replace("=", "→")}</span>
            `).join("")}
          </div>
        </div>` : ""
      }

      <!-- ⚡ SEVERITY -->
      <div class="field">
        <b>⚡ Severity</b>
        <div class="value">${d.severity}</div>
      </div>

      <!-- 🚨 ALERT -->
      ${
        d.emergency ? `
        <div style="
          background:#fee2e2;
          color:#b91c1c;
          padding:10px;
          border-radius:6px;
          margin-top:10px;
        ">
          🚨 Emergency! Doctor needed immediately
        </div>` : ""
      }

      <!-- 💡 ADVICE -->
      ${
        result.advice ? `
        <div class="field">
          <b>💡 Advice</b>
          <div class="value">${result.advice}</div>
        </div>` : ""
      }

      <!-- ⭐ BEST MEDICINE -->
      ${
        best ? `
        <div class="field">
          <b>⭐ Best Medicine</b>
          <div style="
            background:#16a34a;
            color:white;
            padding:8px;
            border-radius:6px;
            margin-top:5px;
          ">
            💊 ${best.name}
            ${best.strength ? `<br><small>${best.strength}</small>` : ""}
          </div>
        </div>` : ""
      }

      <!-- 💊 OTHER MEDICINES -->
      ${
        filteredMeds.length ? `
        <div class="field">
          <b>💊 Other Medicines</b>
          <div class="tag-wrap">
            ${
              filteredMeds.map(m => `
                <span class="tag">
                  💊 ${m.name}
                  ${m.strength ? ` (${m.strength})` : ""}
                </span>
              `).join("")
            }
          </div>
        </div>` : ""
      }

      <!-- 🔍 OTHER DISEASES -->
      ${
        others.length > 1 ? `
        <div class="field">
          <b>🔍 Other Possibilities</b>
          <div class="tag-wrap">
            ${others.slice(1,4).map(o=>`
              <span class="tag">
                ${o.name} (${o.confidence || 0}%)
              </span>
            `).join("")}
          </div>
        </div>` : ""
      }

    </div>
  `;
}