// importamos libreria crypto para encriptar password
import CryptoJS from "crypto-js";

// funcion para verificar si el usuario esta autenticado
export function isAutenticated() {
  return localStorage.getItem("auth_token") !== null;
}

// funcion para obtener rol de usuario
export function getUserRole() {
  const authToken = localStorage.getItem("auth_token");
  if (authToken) {
    try {
      const userData = JSON.parse(authToken);
      return userData.rol;
    } catch (error) {
      console.error("Error obtener data del localStorage", error);
      return null;
    }
  }
  return null;
}

export function updateAuthButtons() {
  const $btnLogin = document.getElementById("btnLogin");
  const $btnLogout = document.getElementById("btnLogout");

  if (!$btnLogin || !$btnLogout) {
    console.warn(
      "Uno o ambos botones de autenticación (btnLogin, btnLogout) no se encontraron en el DOM."
    );
    return;
  }

  if (isAutenticated()) {
    $btnLogin.style.display = "none";
    $btnLogout.style.display = "inline";
  } else {
    $btnLogin.style.display = "inline";
    $btnLogout.style.display = "none";
  }
}

// funcion para logearnos
export function login(token, user, pass, rol) {
  localStorage.setItem(
    "auth_token",
    JSON.stringify({
      token,
      user,
      pass,
      rol,
    })
  );
  updateAuthButtons();
}

// funcion para cerrar sesión
export function logout() {
  localStorage.removeItem("auth_token");
  updateAuthButtons();
  window.location.reload();
}

// funcion para validar credenciales del logeo
export function validateCredentials(user, pass, userApi) {
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
  // validar si usuario ingresado esta registrado
  if (username.toLowerCase() !== userApi.username.toLowerCase()) {
    alert("Usuario invalido - no registrado");
    return false;
  }

  const decryptedPass = decryptPassword(userApi.password);
  // validar si password ingresada es valida
  if (password !== decryptedPass) {
    alert("Contraseña incorrecta");
    return false;
  }
  // si pasa todas las validaciones
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
    case "/crudEventos":
      return true;
    case "/register":
      return false;
    case "/verEventos":
      return false;
    default:
      return false;
  }
}
