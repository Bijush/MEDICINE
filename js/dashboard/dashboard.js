const PAGES = [
  { name: "Theory", icon: "📚", link: "theory.html" },
  { name: "Medicine", icon: "💊", link: "medicine.html" },
  { name: "Daignosis", icon: "🩺", link: "checkUp.html" },
   { name: "Harrison", icon: "🩺", link: "harrison.html" }
];

function renderMenu(){

  const menu = document.getElementById("menu");

  menu.innerHTML = PAGES.map(p => `
    <div class="card" onclick="go('${p.link}')">
      <h3>${p.icon} ${p.name}</h3>
    </div>
  `).join("");
}

function go(page){
  location.href = page;
}

document.addEventListener("DOMContentLoaded", renderMenu);

console.log("dashboard loaded");