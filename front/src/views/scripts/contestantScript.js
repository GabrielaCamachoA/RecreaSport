// contestantScript.js (VERSIÓN FINAL CORREGIDA)

export default function contestantScript() {
  const loadContestantData = async () => {
    try {
      // 1. Obtener los datos del usuario logueado de sessionStorage.
      const userData = JSON.parse(sessionStorage.getItem("auth_token"));

      if (!userData || !userData.id_contestants) {
        throw new Error(
          "ID de concursante no encontrado en el almacenamiento de sesión. Por favor, inicie sesión nuevamente."
        );
      }

      const contestantId = userData.id_contestants;
      const userName = userData.username; // <--- CAMBIO AQUÍ: Usamos 'username' en lugar de 'name'

      const userNameElement = document.getElementById("user-name");
      if (userNameElement) {
        userNameElement.textContent = userName;
      }
      // ... (resto del código)
    } catch (error) {
      console.error("Error al cargar los datos del concursante:", error);
      const contentArea = document.getElementById("contestant-content-area");
      if (contentArea) {
        contentArea.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
      }
    }
  };

  loadContestantData();
}