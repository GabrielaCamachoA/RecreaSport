// loginScript.js (VERSIÓN FINAL Y CORREGIDA)

import { login, updateAuthButtons } from "../../js/auth.js";

// Ya no necesitamos esta función, la lógica se mueve al loginScript
// async function fetchAndSaveContestantId(userId) { ... }
export default function loginScript() {
  document
    .getElementById("login-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
      const rememberMe = document.getElementById("remember-me").checked;

      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
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

        // Si el usuario es concursante (rol 3), obtenemos su perfil
        if (data.user.role === 3) {
          try {
            const contestantResponse = await fetch(
              `http://localhost:5000/api/contestants/byUser/${data.user.id_user}`
            );
            const contestantData = await contestantResponse.json();

            if (contestantData.success && contestantData.data) {
              data.user.id_contestants = contestantData.data.id_contestant;
            } else {
              console.error("No se pudo encontrar el perfil de concursante.");
            }
          } catch (error) {
            console.error("Error al obtener el ID del concursante:", error);
          }
        }

        // Guardamos al usuario en sesión/localStorage
        login(data.user, rememberMe);
        updateAuthButtons();

        // Notificación
        Toastify({
          text: "¡Ingreso exitoso!",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          backgroundColor: "#4CAF50",
          close: true,
        }).showToast();

        // Redirección por rol
        setTimeout(() => {
          if (data.user.role === 1) {
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

  // 🔹 Botón de login con Google (por ahora no implementado)
  function loginWithGoogle() {
    alert("Google login no implementado aún.");
  }
  const btnGoogle = document.getElementById("btnGoogleLogin");
  if (btnGoogle) {
    btnGoogle.addEventListener("click", loginWithGoogle);
  }
}
