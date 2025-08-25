// importacion de vistas
import Admin from "../views/admin.js";
import NotFound from "../views/notFound.js";
import Home from "../views/home.js";
import Contestant from "../views/contestant.js";
import AccessDenied from "../views/accessDenied.js";
import setupAdmin from "../views/scripts/adminScript.js";
import login from "../views/login.js";

// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": { view: Home },
  "/Admin": { view: Admin, script: setupAdmin },
  "/Contestant": { view: Contestant },
  "/login": { view: login }

};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || { view: NotFound, guarded: false, roles: [] };

  document.getElementById("app").innerHTML = route.view();

  if (route.script) {
    route.script();
  }
}