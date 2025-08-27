// importacion de vistas
import Admin from "../views/admin.js";
import NotFound from "../views/notFound.js";
import { getUserRole, updateAuthButtons, validateGuardedPath } from "../js/auth.js";
import Home from "../views/home.js";
import Trainer from "../views/trainer.js";
import Contestant from "../views/contestant.js";
import AccessDenied from "../views/accessDenied.js";
import setupAdmin from "../views/scripts/adminScript.js";
import login from "../views/login.js";
import loginScript from "../views/scripts/loginScript.js";
import Register from "../views/register.js";
import registerScript from "../views/scripts/registerScript.js";

// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": { view: Home},
  "/login": { view: login, script: loginScript},
  "/admin": { view: Admin, script: setupAdmin, guarded: validateGuardedPath("/admin"), role: [1] },
  "/trainer": { view: Trainer,  guarded: validateGuardedPath("/trainer"), role:[2]},
  "/contestant": { view: Contestant,  guarded: validateGuardedPath("/contestant"), role:[3] },
  "/register": {view: Register}
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || { view: NotFound, guarded: false};

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