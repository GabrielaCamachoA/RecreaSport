export default function registerScript() {
  let currentStep = 1;

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const form = document.getElementById("registroForm");

  nextBtn.addEventListener("click", () => {
    const stepDiv = document.getElementById(`step${currentStep}`);
    const inputs = stepDiv.querySelectorAll("input");

    // Validar campos
    for (let input of inputs) {
      if (!input.checkValidity()) {
        alert(`Por favor llena correctamente el campo: ${input.placeholder}`);
        input.focus();
        return;
      }
    }

    // Avanzar al siguiente paso
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
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la SPA
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Datos a enviar:", data);

    // Aquí puedes hacer fetch a tu API
    // fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })
  });
}
