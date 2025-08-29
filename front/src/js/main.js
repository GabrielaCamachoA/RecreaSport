// importamos funcion router
import { router } from "../routes/router";
import { logout } from "./auth";
import contestantScript from "../views/scripts/contestantScript";

document.addEventListener("includes-loaded", () => {
  // ejecutamos router inicialmente
  router();

  // Initialize event delegation for Contestant tabs once
  contestantScript();

  // interceptamos clicks internos de pagina
  document.addEventListener("click", (e) => {
  // interceptar solo links internos con data-link
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();

    // caso especial: Logout
    if (e.target.id === "btnLogout") {
      logout();
    }

    history.pushState(null, null, e.target.getAttribute("href"));
    router();
  }
});
  // manejo de navegacion con botones de atras/adelante
  window.addEventListener("popstate", router);

  const generalContainer = document.querySelector(".general-container");
  const toggleBtn = document.getElementById("toggleAsideBtn");

  if (generalContainer && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      generalContainer.classList.toggle("collapsed");
      toggleBtn.textContent = generalContainer.classList.contains("collapsed")
        ? "☰"
        : "«";
    });
  }
});