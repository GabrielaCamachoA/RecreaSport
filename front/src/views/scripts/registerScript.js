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

  // Final shipment
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // mapping to match what the backend expects
    const payload = {
      name: data.username,
      surname: data.surname,
      phone: data.phone,
      at_birthday: data.at_birthday,
      id_rol: 3, // you can set a default value
      id_document_type: data.id_document_type,
      number_id: data.number_id,
      id_gender: data.id_gender,
      id_demographic: data.id_demographic,
    };

    try {
      const response = await fetch("http://localhost:5000/api/register", {
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
        // Redirect or display message
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
