// importacion de vistas
import Admin from "../views/admin.js";
import NotFound from "../views/notFound.js";
import Home from "../views/home.js";
import Trainer from "../views/trainer.js";
import AccessDenied from "../views/accessDenied.js";
import {
  isAutenticated,
  updateAuthButtons,
  validateGuardedPath,
  getUserRole,
} from "../js/auth.js";

// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": { view: Home, guarded: validateGuardedPath("/"), roles: [] },
  "/Admin": { view: Admin, guarded: validateGuardedPath("/about"), roles: [] },
    "/Trainer": { view: Trainer}
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || { view: NotFound, guarded: false, roles: [] };

  document.getElementById("app").innerHTML = route.view();
}
