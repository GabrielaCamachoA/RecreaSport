import { login, updateAuthButtons } from "../../js/auth.js";

export default function loginScript() {
  document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!data.success) {
        alert("❌ " + data.message);
        return;
      }

      // Guardar usuario en localStorage o sessionStorage
     login(data.user.username, password, data.user.role, rememberMe, window.location.pathname)
      updateAuthButtons();
      alert("✅ Login exitoso");

      // Redirige según rol
      if (data.user.role === 1) window.location.hash = "#admin";
      else if (data.user.role === 2) window.location.hash = "#trainer";
      else if (data.user.role === 3) window.location.hash = "#contestant";
      else window.location.hash = "#";
      
    } catch (error) {
      console.error("Error durante el login:", error);
      alert("Error de conexión con el servidor");
    }
  });

  function loginWithGoogle() {
    alert("Google login no implementado aún.");
  }
  const btnGoogle = document.getElementById("btnGoogleLogin");
  if (btnGoogle) {
    btnGoogle.addEventListener("click", loginWithGoogle)
  }
}
