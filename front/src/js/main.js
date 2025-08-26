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
    let $btnLogout = document.getElementById("btnLogout");
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
    // escuchar el boton
    if (e.target === $btnLogout) {
      console.log("click en logout");
      logout();
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