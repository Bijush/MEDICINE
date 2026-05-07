// ================= BACK BUTTON =================
function goBack() {
  document.getElementById("theoryBox").innerHTML = "";
  document.getElementById("tabBar").innerHTML = "";
  document.getElementById("title").innerText = "Theory";
}


// ================= CREATE TABS =================
function createTabs(tabs) {
  const tabBar = document.getElementById("tabBar");
  const box = document.getElementById("theoryBox");
  const title = document.getElementById("title");

  tabBar.innerHTML = "";

  tabs.forEach((tab, index) => {

    const btn = document.createElement("button");

    // 🔥 IMPORTANT: class add
    btn.className = "btab";

    btn.innerHTML = `
      <span>${tab.icon}</span>
      <small>${tab.label}</small>
    `;

    // ripple effect (optional but matches your CSS)
    btn.addEventListener("click", function(e){
      const ripple = document.createElement("span");
      ripple.className = "ripple";

      const rect = btn.getBoundingClientRect();
      ripple.style.left = (e.clientX - rect.left) + "px";
      ripple.style.top = (e.clientY - rect.top) + "px";

      btn.appendChild(ripple);

      setTimeout(()=> ripple.remove(), 600);
    });

    btn.onclick = () => {

      // active remove
      document.querySelectorAll(".btab")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      // render content
      box.innerHTML = window.theoryContent[tab.id] || "No content";

      // title update
      title.innerText = tab.label;
    };

    tabBar.appendChild(btn);

    // default first tab
    if (index === 0) btn.click();
  });
}


// ================= DATA =================
const DATA = {
  topic: {
    en: "Constipation Management",
    bn: "কোষ্ঠকাঠিন্য ব্যবস্থাপনা"
  },

  sections: [
    {
      id: "stimulant_laxatives",
      title: { en: "Stimulant Laxatives", bn: "উত্তেজক ল্যাক্সেটিভ" },
      content: {
        drugs: { en: ["Senna", "Bisacodyl"], bn: ["সেনা", "বিসাকোডিল"] },
        action: { en: "Stimulate intestinal peristalsis", bn: "আন্ত্রিক গতি বাড়ায়" },
        onset: { en: "6–12 hours", bn: "৬–১২ ঘন্টা" },
        use: { en: "Acute constipation", bn: "হঠাৎ কোষ্ঠকাঠিন্য" },
        side_effect: { en: "Dependency", bn: "অভ্যাস হয়ে যায়" }
      }
    },

    {
      id: "osmotic_laxatives",
      title: { en: "Osmotic Laxatives", bn: "ওসমোটিক ল্যাক্সেটিভ" },
      content: {
        drugs: { en: ["Lactulose"], bn: ["ল্যাকটুলোজ"] },
        action: { en: "Retain water", bn: "পানি ধরে রাখে" }
      }
    }
  ],

  treatment_sequence: {
    steps: {
      en: ["Fiber", "Softener", "Osmotic", "Stimulant"],
      bn: ["ফাইবার", "সফটেনার", "ওসমোটিক", "স্টিমুল্যান্ট"]
    }
  }
};


// ================= AUTO HTML GENERATOR =================
function generateSectionHTML(section) {
  let html = `
  <div class="card">
    <h3>${section.title.en} (${section.title.bn})</h3>
  `;

  for (let key in section.content) {
    const item = section.content[key];

    html += `
      <div class="feature-card">
        <b>${key.toUpperCase()}</b><br>
        ${Array.isArray(item.en) ? item.en.join(", ") : item.en}
        <span class="feature-bn">
        ${Array.isArray(item.bn) ? item.bn.join(", ") : item.bn}
        </span>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}


// ================= BUILD CONTENT =================
window.theoryContent = {};

// sections
DATA.sections.forEach(sec => {
  window.theoryContent[sec.id] = generateSectionHTML(sec);
});

// treatment
window.theoryContent["treatment"] = `
<div class="card">
<h3>⚡ Treatment</h3>

<div class="feature-card">
${DATA.treatment_sequence.steps.en.join(" → ")}
<span class="feature-bn">
${DATA.treatment_sequence.steps.bn.join(" → ")}
</span>
</div>

</div>
`;


// ================= INIT =================
createTabs([
  ...DATA.sections.map(sec => ({
    id: sec.id,
    icon: "📘",
    label: sec.title.en
  })),
  { id:"treatment", icon:"⚡", label:"Treatment" }
]);