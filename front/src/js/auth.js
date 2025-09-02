// import the crypto library to encrypt passwords.
import CryptoJS from "crypto-js";


// function to verify if the user is authenticated
export function isAutenticated() {
  return localStorage.getItem("auth_token") !== null || sessionStorage.getItem("auth_token") !== null;
}

// function to obtain user role
export function getUserRole() {
  const authToken = localStorage.getItem("auth_token")  || sessionStorage.getItem("auth_token");;
  if (authToken) {
    try {
      const userData = JSON.parse(authToken);
<<<<<<< HEAD
      return userData.role;
      return userData.role;
=======
      return userData.role; // <-- Aquí se obtiene el rol
>>>>>>> bb1f1a34245c1d0681b7cb23e75da046e1f24578
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

<<<<<<< HEAD
// function to log in
export function login(user, pass, role,rememberMe= true) {
  const lStorage = rememberMe ? localStorage : sessionStorage;
  lStorage.setItem(
    "auth_token",
    JSON.stringify({
      user,
      pass,
      role,
      role,
    })
  );
=======
// funcion para logearnos
export function login(userObject, rememberMe = true) {
  // `userObject` es el objeto completo 'data.user' de la respuesta de la API
  const lStorage = rememberMe ? localStorage : sessionStorage;

  // Guardamos el objeto completo en el token
  lStorage.setItem("auth_token", JSON.stringify(userObject));
>>>>>>> bb1f1a34245c1d0681b7cb23e75da046e1f24578
  updateAuthButtons();
}

// function to log out
export function logout() {
  localStorage.removeItem("auth_token");
  sessionStorage.removeItem("auth_token")
  updateAuthButtons();
   window.location.hash = "#";
}

// function to validate login credentials
export function validateCredentials(user, pass) {
  const username = user.trim();
  const password = pass.trim();

    // validate if the fields are empty:
  if (!username && !password) {
    alert("por favor ingrese usuario y contraseña");
    return false;
  }
  // validate if the name is empty
  if (!username) {
    alert("por favor ingrese usuario");
    return false;
  }
  // validate if the password is empty
  if (!password) {
    alert("por favor ingrese password");
    return false;
  }
  // if the fields are filled in, pass all validations
  return true;
}

// Function to validate credentials for creation
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
  // if it passes all validations, we return true
  return true;
}

// function to hash our password with the SHA-256 algorithm and crypto library
export function hashPassword(password) {
  const clave = "Clavesecreta123";
  // we encrypt the message using AES
  const passCifrada = CryptoJS.AES.encrypt(password, clave).toString();
  return passCifrada;
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
    case "/":
      return false;
    case "/login":
      return false;
    case "/admin":
      return true;
    case "/trainer":
      return true;
    case "/contestant":
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