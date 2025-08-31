export default function registerScript() {
  let currentStep = 1;

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const form = document.getElementById("registroForm");

  // Función para llenar los selects con datos de la API
  function populateSelect(selectId, data, valueKey, textKey) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) return;

    while (selectElement.options.length > 1) {
      selectElement.remove(1);
    }

    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item[valueKey];
      option.textContent = item[textKey];
      selectElement.appendChild(option);
    });
  }

  // Funciones para obtener los datos de catálogo de la base de datos
  async function fetchDocumentTypes() {
    try {
      const response = await fetch("http://localhost:5000/api/documentTypes");
      const result = await response.json();
      if (response.ok) {
        populateSelect("document", result.data, "id_document_type", "codename");
      } else {
        console.error("Error al obtener tipos de documento:", result.message);
      }
    } catch (error) {
      console.error("Error en fetchDocumentTypes:", error);
    }
  }

  async function fetchNeighborhoods() {
    try {
      const response = await fetch("http://localhost:5000/api/neighborhoods");
      const result = await response.json();
      if (response.ok) {
        populateSelect("neighborhood", result.data, "id_neighborhood", "name");
      } else {
        console.error("Error al obtener barrios:", result.message);
      }
    } catch (error) {
      console.error("Error en fetchNeighborhoods:", error);
    }
  }

  async function fetchGenders() {
    try {
      const response = await fetch("http://localhost:5000/api/genders");
      const result = await response.json();
      if (response.ok) {
        populateSelect("gender", result.data, "id_gender", "name");
      } else {
        console.error("Error al obtener géneros:", result.message);
      }
    } catch (error) {
      console.error("Error en fetchGenders:", error);
    }
  }

  // Llama a las funciones para llenar los selects al cargar
  fetchDocumentTypes();
  fetchNeighborhoods();
  fetchGenders();

  // Navegación entre pasos del formulario
  nextBtn.addEventListener("click", () => {
    const stepDiv = document.getElementById(`step${currentStep}`);
    const inputs = stepDiv.querySelectorAll("input, select");

    for (let input of inputs) {
      if (!input.checkValidity()) {
        alert(
          `Por favor llena correctamente el campo: ${
            input.placeholder || input.name
          }`
        );
        input.focus();
        return;
      }
    }

    stepDiv.style.display = "none";
    currentStep++;
    document.getElementById(`step${currentStep}`).style.display = "block";
  });

  prevBtn.addEventListener("click", () => {
    document.getElementById(`step${currentStep}`).style.display = "none";
    currentStep--;
    document.getElementById(`step${currentStep}`).style.display = "block";
  });

  // Envío final
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    let userId;
    let contestantId;

    // ==============================
    // PASO 1: REGISTRO DEL USUARIO
    // ==============================
    try {
      const userPayload = {
        name: data.username,
        surname: data.surname,
        phone: data.phone,
        at_birthday: data.at_birthday,
        id_rol: 3,
        id_document_type: data.id_document_type,
        number_id: data.number_id,
        id_gender: data.id_gender,
        id_demographic: data.id_demographic,
      };

      const userResponse = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userPayload),
        }
      );

      const userResult = await userResponse.json();
      if (!userResponse.ok) throw new Error(userResult.message);

      // La validación en el servicio ya garantiza que este ID esté presente
      if (!userResult.user || !userResult.user.id_user) {
        throw new Error("El ID del usuario no se pudo obtener del servidor.");
      }

      userId = userResult.user.id_user; // El cambio principal es aquí, usando 'id_user'

      console.log("Usuario registrado con ID:", userId);
    } catch (error) {
      alert(`❌ Error en el registro de usuario: ${error.message}`);
      console.error("Error en fetch de usuario:", error);
      return;
    }

    // ==================================
    // PASO 2: CREACIÓN DEL CONCURSANTE
    // ==================================
    try {
      const contestantPayload = { userId: userId };
      const contestantResponse = await fetch(
        "http://localhost:5000/api/contestants",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contestantPayload),
        }
      );

      const contestantResult = await contestantResponse.json();
      if (!contestantResponse.ok) throw new Error(contestantResult.message);

      contestantId = contestantResult.data.id_contestants;
      console.log("Concursante creado con ID:", contestantId);
    } catch (error) {
      alert(`❌ Error en la creación de concursante: ${error.message}`);
      console.error("Error en fetch de concursante:", error);
      return;
    }

    // ==================================
    // PASO 3: CREACIÓN DE LA INSCRIPCIÓN
    // ==================================
    try {
      const inscriptionPayload = {
        at_inscription: new Date().toISOString(),
        id_neighborhood: data.id_neighborhood,
        id_contestants: contestantId,
        id_sport: data.id_sport,
        status: "Pendiente",
      };

      const inscriptionResponse = await fetch(
        "http://localhost:5000/api/inscriptions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inscriptionPayload),
        }
      );

      const inscriptionResult = await inscriptionResponse.json();
      if (!inscriptionResponse.ok) throw new Error(inscriptionResult.message);

      alert("✅ Registro e inscripción exitosos");
      console.log("Inscripción creada:", inscriptionResult);
      form.reset();
    } catch (error) {
      alert(`❌ Error en la creación de la inscripción: ${error.message}`);
      console.error("Error en fetch de inscripción:", error);
    }
  });
}
