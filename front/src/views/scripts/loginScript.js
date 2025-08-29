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

      // Redirige según rol
      Toastify({
        text: "¡Ingreso exitoso!",
        duration: 3000, // toast visible por 3 segundos
        gravity: "bottom",
        position: "right",
        backgroundColor: "#4CAF50",
        close: true,
      }).showToast();
      
      // Redirigir después de 3 segundos (3000 ms)
      setTimeout(() => {
        if (data.user.role === 1) {//esto es muy forzado pero es una prueba ya qula pagina se quedaba en login, pronto se cambiara esto
          window.location = "http://localhost:5173/admin";
        } else if (data.user.role === 2) {
          window.location = "http://localhost:5173/trainer";
        } else if (data.user.role === 3) {
          window.location = "http://localhost:5173/contestant";
        } else {
          window.location.hash = "#";
        }
      }, 800);
      
      
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
