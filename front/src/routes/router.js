// importacion de vistas
import Admin from "../views/admin.js";
import NotFound from "../views/notFound.js";
import Home from "../views/home.js";
import AccessDenied from "../views/accessDenied.js";

// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": { view: Home },
  "/Admin": { view: Admin },
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || { view: NotFound, guarded: false, roles: [] };

  document.getElementById("app").innerHTML = route.view();
}
