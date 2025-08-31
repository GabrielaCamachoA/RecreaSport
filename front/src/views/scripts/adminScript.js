import { inscripcionView } from "../admin_views/inscriptions.js";
import { reportsView } from "../admin_views/reports.js";
import { usersView } from "../admin_views/users.js";

const d = document;

const subViews = {
  inscriptions: inscripcionView,
  reports: reportsView,
  users: usersView,
};

export default function setupAdmin() {
  const subNav = d.getElementById("admin-sub-nav");
  const contentArea = d.getElementById("admin-content-area");

  function loadSubView(viewName) {
    const viewFunction = subViews[viewName];
    if (contentArea && viewFunction) {
      contentArea.innerHTML = viewFunction();
    }
  }

  if (subNav) {
    subNav.addEventListener("click", (e) => {
      e.preventDefault();

      const targetLink = e.target.closest("a.sub-navbar-link");
      if (!targetLink) return;

      d.querySelectorAll("#admin-sub-nav .nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      targetLink.classList.add("active");

      const viewName = targetLink.dataset.view;
      loadSubView(viewName);
    });
  }
 
  
  // ✅ Función para cargar usuarios
  async function loadUsersData() {
    try {
      console.log("Cargando datos de usuarios...");
      const response = await fetch("http://localhost:5000/api/users");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Usuarios cargados:", data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // default load iscripitons view
  loadSubView("inscriptions");
  loadUsersData();
}
