
import { FIELD_CONFIG } from "./fieldConfig.js";

// ================= SAFE ARRAY =================
function safeArray(data){

  if(Array.isArray(data)){
    return data;
  }

  if(data === undefined || data === null){
    return [];
  }

  return [data];
}

// ================= BACK =================
window.goBack = function(){
  document.getElementById("theoryBox").innerHTML = "";
  document.getElementById("tabBar").innerHTML = "";
  document.getElementById("title").innerText = "Harrison Notes";
};


// ================= CREATE TABS =================
function createTabs(tabs){

  const tabBar = document.getElementById("tabBar");
  const box = document.getElementById("theoryBox");
  const title = document.getElementById("title");

  tabBar.innerHTML = "";

  tabs.forEach((tab,index)=>{

    const btn = document.createElement("button");
    btn.className = "btab";

    btn.innerHTML = `
  <span>${tab.icon || "📘"}</span>
  <small>${tab.label || "Tab"}</small>
`;

    btn.onclick = ()=>{

      document.querySelectorAll(".btab")
        .forEach(b=>b.classList.remove("active"));

      btn.classList.add("active");

      box.innerHTML = window.theoryContent[tab.id] || "No Data";
      title.innerText = tab.label;

      box.scrollTop = 0;

      // 🔥 auto scroll tab
      btn.scrollIntoView({
        behavior:"smooth",
        inline:"center",
        block:"nearest"
      });
      addRipple(btn);
    };

    tabBar.appendChild(btn);

    if(index===0){
      setTimeout(()=>btn.click(),50);
    }
  });
}


// ================= RIPPLE EFFECT =================
function addRipple(button){

  const ripple = document.createElement("span");

  ripple.className = "ripple";

  const rect = button.getBoundingClientRect();

  ripple.style.left = `${rect.width / 2 - 10}px`;
ripple.style.top = `${rect.height / 2 - 10}px`;

  button.querySelectorAll(".ripple")
  .forEach(r=>r.remove());

button.appendChild(ripple);

  setTimeout(()=>{
    ripple.remove();
  },600);
}

// ================= GENERATE HTML =================
function generateHTML(section){

  const c = section.content;
  
  if(!c){

  return `
    <div class="card">
      ❌ No Content
    </div>
  `;
}
  

  let html = `
  <div class="card">
    <h3>
  ${section.title?.en || "Untitled"}
  (${section.title?.bn || "শিরোনাম নেই"})
</h3>
  `;

  const formatData = (data)=>{

  const arr = safeArray(data);

  if(arr.length > 1){

    return `
      <ul class="feature-list">
        ${arr.map(i=>`<li>${i}</li>`).join("")}
      </ul>
    `;
  }

  return arr[0] || "";
};

const add = (icon,title,en,bn)=>{

  html += `
  <div class="feature-card">

    <div class="feature-title">
      ${icon} ${title}
    </div>

    <div class="feature-en">
      ${formatData(en)}
    </div>

    <div class="feature-bn">
      ${formatData(bn)}
    </div>

  </div>`;
};


Object.entries(FIELD_CONFIG).forEach(([key,val])=>{

  if(!c[key]) return;

  const icon = val?.[0] || "📌";
const title = val?.[1] || key;

  add(
    icon,
    title,
    c[key]?.en,
    c[key]?.bn
  );

});

  html += `</div>`;
  return html;
}


// ================= MCQ GENERATOR (SAFE) =================
function generateMCQ(mcqs){

  let html = `<div class="card"><h3>📝 MCQ Practice</h3>`;

  mcqs.forEach((m,i)=>{

    const qEn = m.q?.en || m.q_en;
    const qBn = m.q?.bn || m.q_bn;

    html += `
    <div class="mcq-box">

      <div class="mcq-q">
        ${i+1}. ${qEn}<br>
        <span class="feature-bn">${qBn}</span>
      </div>

      ${safeArray(m.options || []).map(opt=>{
        const textEn = opt.en || opt;
        const textBn = opt.bn || "";
        const isCorrect = textEn === m.answer;

        return `
        <div class="mcq-opt ${isCorrect?"correct":""}">
          ${textEn}
          <div class="feature-bn">${textBn}</div>
        </div>`;
      }).join("")}

<div class="mcq-answer">
  ✔ ${m.answer}

  ${
    m.explanation ? `
    <div style="margin-top:8px;">
      ${m.explanation.en || ""}
      <div class="feature-bn">
        ${m.explanation.bn || ""}
      </div>
    </div>
    ` : ""
  }

</div>

    </div>`;
  });

  html += `</div>`;
  return html;
}


// ================= LOAD TOPIC =================
// ================= LOAD TOPIC =================
window.loadTopic = async function(value){

  try{
    document.getElementById("theoryBox").innerHTML = `
<div class="card">
  ⏳ Loading topic...
</div>
`;

    if(!value) return;

    // 🔥 dynamic import + cache fix
    const module = await import(`./data/${value}.js?v=${Date.now()}`);

    const DATA = module.DATA;

    // 🔥 title
    document.getElementById("title").innerText =
      DATA.topic?.en || "Harrison";

    // 🔥 reset
    window.theoryContent = {};

    // ================= SECTIONS =================
    safeArray(DATA.sections).forEach(sec=>{

      if(!sec?.id) return;

      window.theoryContent[sec.id] =
        generateHTML(sec);

    });

    // ================= TREATMENT =================
    if(DATA.treatment_sequence){

      window.theoryContent["treatment"] = `

      <div class="card">

        <h3>
          ⚡ ${DATA.treatment_sequence.title?.en || "Treatment"}
        </h3>

        <div class="feature-card">

          <div class="feature-en">
            ${safeArray(DATA.treatment_sequence.steps?.en)
              .join(" → ")}
          </div>

          <div class="feature-bn">
            ${safeArray(DATA.treatment_sequence.steps?.bn)
              .join(" → ")}
          </div>

        </div>

      </div>
      `;
    }

    // ================= REVISION =================
    if(DATA.revision){

      window.theoryContent["revision"] = `

      <div class="card">

        <h3>⚡ Revision</h3>

        ${safeArray(DATA.revision?.en).map((item,i)=>`

          <div class="feature-card">

            <div class="feature-en">
              ${item}
            </div>

            <div class="feature-bn">
              ${safeArray(DATA.revision?.bn)[i] || ""}
            </div>

          </div>

        `).join("")}

      </div>
      `;
    }

    // ================= MCQ =================
    if(DATA.mcq){

      window.theoryContent["mcq"] =
        generateMCQ(DATA.mcq);

    }

    // ================= EMPTY FALLBACK =================
    if(Object.keys(window.theoryContent).length === 0){

      window.theoryContent["empty"] = `

      <div class="card">

        <h3>❌ No Data Found</h3>

        <div class="feature-card">
          Topic loaded but no valid content available.
        </div>

      </div>
      `;
    }

    // ================= CREATE TABS =================
    createTabs([

      ...safeArray(DATA.sections).map(sec=>({

        id: sec.id,

        icon:"📘",

        label: sec.title?.en || "Section"

      })),

      ...(DATA.treatment_sequence ? [{

        id:"treatment",

        icon:"⚡",

        label:"Treatment"

      }] : []),

      ...(DATA.revision ? [{

        id:"revision",

        icon:"🧠",

        label:"Revision"

      }] : []),

      ...(DATA.mcq ? [{

        id:"mcq",

        icon:"📝",

        label:"MCQ"

      }] : [])

    ]);

  }catch(err){

    console.error(err);

    document.getElementById("title").innerText =
      "Error";

    document.getElementById("theoryBox").innerHTML = `

    <div class="card">

      <h3>❌ Error Loading Topic</h3>

      <div class="feature-card">

        Topic file not found,
        syntax error,
        or invalid export.

      </div>

      <div class="feature-card">

        <b>Error:</b><br>
        ${err.message}

      </div>

    </div>
    `;

    document.getElementById("tabBar").innerHTML = "";
  }
};


// ================= MCQ CLICK =================
// ================= MCQ CLICK =================
document.addEventListener("click",(e)=>{

  // ✅ support clicking child elements
  const option = e.target.closest(".mcq-opt");

  if(!option) return;

  const box = option.closest(".mcq-box");

  if(!box) return;

  const options = box.querySelectorAll(".mcq-opt");
  const answer = box.querySelector(".mcq-answer");

  // ✅ show answer
  if(answer){
    answer.style.display = "block";
  }

  // ✅ reset previous styles
  options.forEach(o=>{
    o.classList.remove(
      "selected",
      "right",
      "wrong"
    );
  });

  // ✅ selected option
  option.classList.add("selected");

  // ✅ check correct/wrong
  if(option.classList.contains("correct")){

    option.classList.add("right");

  }else{

    option.classList.add("wrong");
  }

  // ✅ always show correct answer
  options.forEach(o=>{

    if(o.classList.contains("correct")){
      o.classList.add("right");
    }

  });

});