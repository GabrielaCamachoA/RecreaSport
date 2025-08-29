export default function registerScript() {
  let currentStep = 1;

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const form = document.getElementById("registroForm");

  nextBtn.addEventListener("click", () => {
    const stepDiv = document.getElementById(`step${currentStep}`);
    const inputs = stepDiv.querySelectorAll("input, select");

    for (let input of inputs) {
      if (!input.checkValidity()) {
        alert(`Por favor llena correctamente el campo: ${input.placeholder || input.name}`);
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

    // Mapeo para que coincida con lo que espera el backend
    const payload = {
      username: data.first_name,
      surname: data.last_name,
      phone: data.phone,
      at_birthday: data.birth_date,
      attendanceRate: null, // puedes ajustarlo si lo necesitas
      role: 3, // puedes definir un valor por defecto
      id_document_type: data.document_type,
      number_id: data.id_number,
      id_gender: data.gender,
      id_demographic: data.demografic,
    };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Registro exitoso");
        console.log("Respuesta del servidor:", result);
        form.reset();
        // Redireccionar o mostrar mensaje
      } else {
        alert(`❌ Error: ${result.message}`);
        console.error(result);
      }
    } catch (error) {
      alert("❌ Error al enviar los datos");
      console.error("Error en fetch:", error);
    }
  });
}
