// src/views/scripts/adminScript.js
import { inscripcionView } from "../admin_views/inscriptions.js";
import { reportsView } from "../admin_views/reports.js";
import { usersView } from "../admin_views/users.js";
import setupInscriptionsTable from "./inscriptionsScript.js";

const d = document;

const subViews = {
  inscriptions: inscripcionView,
  reports: reportsView,
  users: usersView,
};

async function loadInscriptionCounts() {
  try {
    const response = await fetch(
      "https://recreasport-production.up.railway.app/api/inscriptions/count"
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const resData = await response.json();
    d.getElementById("total-inscriptions").textContent =
      resData?.data?.total ?? 0;
    d.getElementById("approved-inscriptions").textContent =
      resData?.data?.approved ?? 0;
    d.getElementById("pending-inscriptions").textContent =
      resData?.data?.pending ?? 0;
  } catch (error) {
    console.error("Error fetching inscription counts:", error);
    d.getElementById("total-inscriptions").textContent = "N/A";
    d.getElementById("approved-inscriptions").textContent = "N/A";
    d.getElementById("pending-inscriptions").textContent = "N/A";
  }
}

// Modifica esta función para que sea asíncrona y más robusta.
const loadSubView = async (viewName) => {
  const contentArea = d.getElementById("admin-content-area");
  if (!contentArea) return;

  // Obtener la función de la vista.
  const viewFunction = subViews[viewName];
  if (!viewFunction) return;

  // Renderizar el HTML de la vista.
  contentArea.innerHTML = viewFunction();

  // Lógica para cargar los datos solo si la vista es 'inscriptions'.
  if (viewName === "inscriptions") {
    await loadInscriptionCounts(); // Carga los contadores.
    try {
      await setupInscriptionsTable(); // Llama a la función para cargar la tabla.
    } catch (error) {
      console.error("Failed to setup inscriptions table:", error);
      const tableBody = d.querySelector("#inscriptionsTable tbody");
      if (tableBody) {
        tableBody.innerHTML = `<tr><td colspan="5" class="text-center text-danger">Error al cargar las inscripciones.</td></tr>`;
      }
    }
  }
};

export default function setupAdmin() {
  const subNav = document.getElementById("admin-sub-nav");
  if (!subNav) return;

  // Usa un solo listener para manejar la navegación.
  subNav.addEventListener("click", (e) => {
    e.preventDefault();
    const targetLink = e.target.closest("a.sub-navbar-link");
    if (!targetLink) return;

    // Remueve 'active' de todos los enlaces y lo agrega al actual.
    document.querySelectorAll("#admin-sub-nav .nav-link").forEach((link) =>
      link.classList.remove("active")
    );
    targetLink.classList.add("active");

    // Llama a la función de carga de la vista.
    loadSubView(targetLink.dataset.view);
  });

  // ✅ Function to upload users
  async function loadUsersData() {
    try {
      console.log("Cargando datos de usuarios...");
      const response = await fetch("https://recreasport-production.up.railway.app/api/users");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Usuarios cargados:", data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Carga la vista de "Inscripciones" por defecto al iniciar.
  loadSubView("inscriptions");
}
