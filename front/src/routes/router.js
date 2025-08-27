// importacion de vistas
import Admin from "../views/admin.js";
import NotFound from "../views/notFound.js";
import Home from "../views/home.js";
import Contestant from "../views/contestant.js";
import AccessDenied from "../views/accessDenied.js";
import setupAdmin from "../views/scripts/adminScript.js";
import login from "../views/login.js";
import loginScript from "../views/scripts/loginScript.js";
import Register from "../views/register.js";
import registerScript from "../views/scripts/registerScript.js";

// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": { view: Home },
  "/Admin": { view: Admin, script: setupAdmin },
  "/Contestant": { view: Contestant },
  "/login": { view: login },
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || { view: NotFound, guarded: false };

  if (route.guarded) {
    const userRole = getUserRole();
    if (!userRole || (route.role && !route.role.includes(userRole))) {
      document.getElementById("app").innerHTML = AccessDenied();
      return;
    }
  }
  document.getElementById("app").innerHTML = route.view();

  if (route.script) {
    route.script();
  }
  updateAuthButtons();
}
