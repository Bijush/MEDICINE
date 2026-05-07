const SIDEBAR_ITEMS = [
  { name: "Dashboard", link: "dashboard.html" },
  { name: "Theory", link: "theory.html" },
  { name: "Medicine", link: "medicine.html" },
  { name: "Disease", link: "disease.html" }
];


// 🔥 RENDER SIDEBAR
function renderSidebar(){

  const sidebar = document.getElementById("sidebar");

  const currentPage = location.pathname.split("/").pop();

  sidebar.innerHTML = `
    <h3>📋 Menu</h3>
    ${SIDEBAR_ITEMS.map(i => `
      <div class="sidebar-item ${i.link === currentPage ? "active" : ""}"
           data-link="${i.link}">
        ${i.name}
      </div>
    `).join("")}
  `;
}


// 🔥 NAVIGATION
function initNavigation(){

  const sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", (e) => {

    const item = e.target.closest(".sidebar-item");
    if(!item) return;

    const link = item.dataset.link;

    if(link){
      location.href = link;
    }

  });
}


// 🔥 TOGGLE SYSTEM (WITH OVERLAY + LOCK)
function initToggle(){

  const btn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  btn.addEventListener("click", () => {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    document.body.classList.toggle("sidebar-open");
  });

  // 🔥 CLICK OUTSIDE CLOSE
  overlay.addEventListener("click", () => {
    closeSidebar();
  });
}


// 🔥 CLOSE FUNCTION
function closeSidebar(){
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.body.classList.remove("sidebar-open");
}


// 🔥 ESC KEY CLOSE
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeSidebar();
  }
});


// 🚀 INIT
document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  initToggle();
  initNavigation();
});