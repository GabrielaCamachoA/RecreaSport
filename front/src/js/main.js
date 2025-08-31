// import function router
import { router } from "../routes/router";
import { logout } from "./auth";
import contestantScript from "../views/scripts/contestantScript";

document.addEventListener("includes-loaded", () => {
  // we initially run the router
  router();

  // Initialize event delegation for Contestant tabs once
  contestantScript();

  // we intercept internal page clicks
  document.addEventListener("click", (e) => {
  // intercept only internal links with data-link
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();

    // special case: Logout
    if (e.target.id === "btnLogout") {
      logout();
    }

    history.pushState(null, null, e.target.getAttribute("href"));
    router();
  }
});
  // navigation using back/forward buttons
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
function initNavScroll() {
  const nav = document.querySelector('.header');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Wait a moment for the include to load.
  setTimeout(initNavScroll, 300);
});
