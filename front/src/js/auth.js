// importamos libreria crypto para encriptar password
import CryptoJS from "crypto-js";

// funcion para verificar si el usuario esta autenticado
export function isAutenticated() {
  return (
    localStorage.getItem("auth_token") !== null ||
    sessionStorage.getItem("auth_token") !== null
  );
}

// funcion para obtener rol de usuario
export function getUserRole() {
  const authToken =
    localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");
  if (authToken) {
    try {
      const userData = JSON.parse(authToken);
      return userData.role;
    } catch (error) {
      console.error("Error obtener data del localStorage", error);
      return null;
    }
  }
  return null;
}

export function updateAuthButtons() {
  const btnLogin = document.getElementById("btnLogin");
  const btnRegister = document.getElementById("btnRegister");
  const btnLogout = document.getElementById("btnLogout");
  const btnAdmin = document.getElementById("btnAdmin");
  const btnTrainer = document.getElementById("btnTrainer");
  const btnContestant = document.getElementById("btnContestant");

  // ocultar todo por defecto
  if (btnLogin) btnLogin.style.display = "inline";
  if (btnLogout) btnLogout.style.display = "none";
  if (btnRegister) btnRegister.style.display = "inline";
  if (btnAdmin) btnAdmin.style.display = "none";
  if (btnTrainer) btnTrainer.style.display = "none";
  if (btnContestant) btnContestant.style.display = "none";

  if (isAutenticated()) {
    // ocultar login, mostrar logout
    if (btnLogin) btnLogin.style.display = "none";
    if (btnRegister) btnRegister.style.display = "none";
    if (btnLogout) btnLogout.style.display = "inline";

    // mostrar solo el botón de la vista según rol
    const role = getUserRole();
    if (role === 1 && btnAdmin) btnAdmin.style.display = "inline";
    else if (role === 2 && btnTrainer) btnTrainer.style.display = "inline";
    else if (role === 3 && btnContestant)
      btnContestant.style.display = "inline";
  }
}

// funcion para logearnos
export function login(user, pass, role, rememberMe = true) {
  const lStorage = rememberMe ? localStorage : sessionStorage;
  lStorage.setItem(
    "auth_token",
    JSON.stringify({
      user,
      pass,
      role,
    })
  );
  updateAuthButtons();
}

// funcion para cerrar sesión
export function logout() {
  localStorage.removeItem("auth_token");
  sessionStorage.removeItem("auth_token");
  updateAuthButtons();
  window.location.hash = "#";
}

// funcion para validar credenciales del logeo
export function validateCredentials(user, pass) {
  const username = user.trim();
  const password = pass.trim();

  // validar si los campos estan vacios:
  if (!username && !password) {
    alert("por favor ingrese usuario y contraseña");
    return false;
  }
  // validar si el nombre esta vacio
  if (!username) {
    alert("por favor ingrese usuario");
    return false;
  }
  // validar si el password esta vacio
  if (!password) {
    alert("por favor ingrese password");
    return false;
  }
  // si los campos están llenos, pasa todas las validaciones
  return true;
}

// funcion para validar credenciales de la creacion
export function validateCredCreate(username, name, telefono, rol, pass) {
  if (!username && !name && !telefono && !rol && !pass) {
    alert("Debe ingresar datos en el formulario, esta vacio.");
    return false;
  }

  if (!username) {
    alert("el username esta vacio.");
    return false;
  }

  if (!name) {
    alert("el name esta vacio.");
    return false;
  }

  if (!telefono) {
    alert("el telefono esta vacio.");
    return false;
  }
  if (!rol) {
    alert("el rol esta vacio.");
    return false;
  }
  if (!pass) {
    alert("el pass esta vacio.");
    return false;
  }
  // si pasa todas las validaciones retornamos true
  return true;
}

// funcion para hashear nuestra password con algoritmo SHA-256 y libreria crypto
export function hashPassword(password) {
  const clave = "Clavesecreta123";
  // ciframos el mensaje utilizando AES
  const passCifrada = CryptoJS.AES.encrypt(password, clave).toString();
  return passCifrada;
}

// funcion para des-hashear password para validar en inicio de sesion
export function decryptPassword(passHashed) {
  const clave = "Clavesecreta123";
  const passDecrypt = CryptoJS.AES.decrypt(passHashed, clave);
  return passDecrypt.toString(CryptoJS.enc.Utf8);
}

// validar si la ruta es protegida
export function validateGuardedPath(path) {
  switch (path) {
    case "/":
      return false;
    case "/login":
      return false;
    case "/admin":
      return true;
    case "/trainer":
      return true;
    case "/contestant":
      return true;
    default:
      return false;
  }
}
