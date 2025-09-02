// import the crypto library to encrypt passwords.
import CryptoJS from "crypto-js";

// function to verify if the user is authenticated
export function isAutenticated() {
  return (
    localStorage.getItem("auth_token") !== null ||
    sessionStorage.getItem("auth_token") !== null
  );
}

// function to obtain user role
export function getUserRole() {
  const authToken =
    localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");
  if (authToken) {
    try {
      const userData = JSON.parse(authToken);
      return userData.role; // <-- Aquí se obtiene el rol
    } catch (error) {
      console.error("Error al obtener data del localStorage", error);
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

  // hide everything by default
  if (btnLogin) btnLogin.style.display = "inline";
  if (btnLogout) btnLogout.style.display = "none";
  if (btnRegister) btnRegister.style.display = "inline";
  if (btnAdmin) btnAdmin.style.display = "none";
  if (btnTrainer) btnTrainer.style.display = "none";
  if (btnContestant) btnContestant.style.display = "none";

  if (isAutenticated()) {
    // hide login, show logout
    if (btnLogin) btnLogin.style.display = "none";
    if (btnRegister) btnRegister.style.display = "none";
    if (btnLogout) btnLogout.style.display = "inline";

    const role = getUserRole();
    // show only the view button according to role
    if (role === 1 && btnAdmin) btnAdmin.style.display = "inline";
    else if (role === 2 && btnTrainer) btnTrainer.style.display = "inline";
    else if (role === 3 && btnContestant) btnContestant.style.display = "inline";
  }
}

// ✅ Final login function
export function login(userObject, rememberMe = true) {
  // `userObject` es el objeto completo 'data.user' de la respuesta de la API
  const lStorage = rememberMe ? localStorage : sessionStorage;

  // Guardamos el objeto completo en el token
  lStorage.setItem("auth_token", JSON.stringify(userObject));

  updateAuthButtons();
}

// function to log out
export function logout() {
  localStorage.removeItem("auth_token");
  sessionStorage.removeItem("auth_token");
  updateAuthButtons();
  window.location.hash = "#";
}

// function to validate login credentials
export function validateCredentials(user, pass) {
  const username = user.trim();
  const password = pass.trim();

  if (!username && !password) {
    alert("Por favor ingrese usuario y contraseña");
    return false;
  }
  if (!username) {
    alert("Por favor ingrese usuario");
    return false;
  }
  if (!password) {
    alert("Por favor ingrese password");
    return false;
  }
  return true;
}

// Function to validate credentials for creation
export function validateCredCreate(username, name, telefono, rol, pass) {
  if (!username && !name && !telefono && !rol && !pass) {
    alert("Debe ingresar datos en el formulario, está vacío.");
    return false;
  }
  if (!username) {
    alert("El username está vacío.");
    return false;
  }
  if (!name) {
    alert("El nombre está vacío.");
    return false;
  }
  if (!telefono) {
    alert("El teléfono está vacío.");
    return false;
  }
  if (!rol) {
    alert("El rol está vacío.");
    return false;
  }
  if (!pass) {
    alert("La contraseña está vacía.");
    return false;
  }
  return true;
}

// function to hash our password with AES algorithm and crypto library
export function hashPassword(password) {
  const clave = "Clavesecreta123";
  return CryptoJS.AES.encrypt(password, clave).toString();
}

// function to unhash password for login validation
export function decryptPassword(passHashed) {
  const clave = "Clavesecreta123";
  const passDecrypt = CryptoJS.AES.decrypt(passHashed, clave);
  return passDecrypt.toString(CryptoJS.enc.Utf8);
}

// validate whether the path is protected
export function validateGuardedPath(path) {
  switch (path) {
    case "/admin":
    case "/trainer":
    case "/contestant":
      return true;
    case "/":
    case "/login":
    default:
      return false;
  }
}
