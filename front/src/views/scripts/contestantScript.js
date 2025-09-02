export default function contestantScript() {
  // Elementos DOM
  const loadingSection = document.getElementById("loading-section");
  const inscriptionDetails = document.getElementById("inscription-details");
  const noInscriptionSection = document.getElementById("no-inscription");
  const statusAlertContainer = document.getElementById(
    "status-alert-container"
  );

  // Obtener token de autenticación
  const getAuthToken = () => {
    return sessionStorage.getItem("auth_token");
  };

  // Mostrar u ocultar secciones
  const toggleSections = (showLoading, showDetails, showNoInscription) => {
    if (loadingSection) loadingSection.classList.toggle("d-none", !showLoading);
    if (inscriptionDetails)
      inscriptionDetails.classList.toggle("d-none", !showDetails);
    if (noInscriptionSection)
      noInscriptionSection.classList.toggle("d-none", !showNoInscription);
  };

  // Mostrar alerta de estado
  const showStatusAlert = (message, type = "info") => {
    statusAlertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  };

  // Actualizar badge de estado
  const updateStatusBadge = (status) => {
    const statusBadge = document.getElementById("insc-estado");
    if (!statusBadge) return;

    statusBadge.textContent = status;

    // Remover clases previas
    statusBadge.classList.remove(
      "bg-success",
      "bg-warning",
      "bg-danger",
      "bg-secondary"
    );

    // Añadir clase según estado
    switch (status) {
      case "Aceptada":
        statusBadge.classList.add("bg-success");
        showStatusAlert(
          "¡Felicidades! Tu inscripción ha sido aceptada.",
          "success"
        );
        break;
      case "Pendiente":
        statusBadge.classList.add("bg-warning");
        showStatusAlert(
          "Tu inscripción está en revisión. Te notificaremos cuando sea procesada.",
          "info"
        );
        break;
      case "Rechazada":
        statusBadge.classList.add("bg-danger");
        showStatusAlert(
          "Tu inscripción ha sido rechazada. Por favor, contacta con administración para más detalles.",
          "danger"
        );
        break;
      default:
        statusBadge.classList.add("bg-secondary");
    }
  };

  // Manejar errores de API
  const handleApiError = (response, errorMessage) => {
    if (!response.ok) {
      if (response.status === 404) {
        return { notFound: true };
      }
      throw new Error(errorMessage);
    }
    return null;
  };

  // Cargar datos del concursante
  const loadContestantData = async () => {
    try {
      toggleSections(true, false, false);

      // Obtener datos de usuario
      const userData = JSON.parse(getAuthToken());

      if (!userData || !userData.id) {
        throw new Error(
          "Usuario no autenticado. Por favor, inicia sesión nuevamente."
        );
      }

      // Actualizar nombre de usuario
      const userNameElement = document.getElementById("user-name");
      if (userNameElement && userData.username) {
        userNameElement.textContent = userData.username;
      }

      // 1. Obtener el concursante por ID de usuario
      const contestantResponse = await fetch(
        `http://localhost:5000/api/contestants/byUser/${userData.id}`
      );

      const contestantError = handleApiError(
        contestantResponse,
        "Error al obtener datos del concursante"
      );
      if (contestantError?.notFound) {
        toggleSections(false, false, true);
        return;
      }

      const contestantData = await contestantResponse.json();

      if (!contestantData.success || !contestantData.data) {
        toggleSections(false, false, true);
        return;
      }

      // 2. Obtener la inscripción por ID de concursante
      const inscriptionResponse = await fetch(
        `http://localhost:5000/api/inscriptions/byContestant/${contestantData.data.id_contestants}`
      );

      const inscriptionError = handleApiError(
        inscriptionResponse,
        "Error al obtener datos de inscripción"
      );
      if (inscriptionError?.notFound) {
        toggleSections(false, false, true);
        return;
      }

      const inscriptionData = await inscriptionResponse.json();

      if (!inscriptionData.success || !inscriptionData.data) {
        toggleSections(false, false, true);
        return;
      }

      // Mostrar datos de la inscripción
      const inscription = inscriptionData.data;

      document.getElementById("insc-disciplina").textContent =
        inscription.sport?.name || "No especificado";
      document.getElementById("insc-fecha").textContent = new Date(
        inscription.createdAt
      ).toLocaleDateString();
      document.getElementById("insc-localidad").textContent =
        inscription.neighborhood?.name || "No especificado";

      updateStatusBadge(inscription.status);

      toggleSections(false, true, false);
    } catch (error) {
      console.error("Error al cargar los datos del concursante:", error);

      // Mostrar error en la interfaz
      toggleSections(false, false, false);

      const contentArea = document.getElementById("contestant-content-area");
      if (contentArea) {
        contentArea.innerHTML += `
          <div class="alert alert-danger mt-3" role="alert">
            <h5 class="alert-heading">Error</h5>
            <p>${error.message}</p>
            <button class="btn btn-primary mt-2" onclick="window.location.reload()">Reintentar</button>
          </div>
        `;
      }
    }
  };

  // Inicializar
  const init = () => {
    // Configurar evento para el botón de inscribirse
    const btnInscribirse = document.getElementById("btn-inscribirse");
    if (btnInscribirse) {
      btnInscribirse.addEventListener("click", () => {
        // Redirigir a la página de inscripción
        window.location.href = "#inscripcion";
      });
    }

    // Cargar datos
    loadContestantData();
  };

  // Esperar a que el DOM esté completamente cargado
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}
