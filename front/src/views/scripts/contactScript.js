export default function contactScript() {
  const btnForm = document.getElementById("btn-form");
  const email = document.querySelector(".contact-form input[placeholder='Email']");
  const name = document.querySelector(".contact-form input[placeholder='Name']");
  const message = document.querySelector(".contact-form textarea");

  if (btnForm) {
    btnForm.addEventListener("click", function () {
      // Validación simple
      if (!email.value.trim() || !name.value.trim() || !message.value.trim()) {
        Toastify({
          text: "Por favor, completa todos los campos.",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          backgroundColor: "#e53935", // rojo
          close: true,
        }).showToast();
        return;
      }

      // Si todo está lleno, mostrar mensaje de éxito
      Toastify({
        text: "¡Mensaje enviado con éxito!",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        backgroundColor: "#4CAF50", // verde
        close: true,
      }).showToast();

      // Resetear formulario si deseas
      email.value = "";
      name.value = "";
      message.value = "";
    });
  }
}
