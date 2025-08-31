export default function contactScript() {
  const btnForm = document.getElementById("btn-form");
  const email = document.querySelector(".contact-form input[placeholder='Email']");
  const name = document.querySelector(".contact-form input[placeholder='Name']");
  const message = document.querySelector(".contact-form textarea");

  if (btnForm) {
    btnForm.addEventListener("click", function () {
      // Simple validation
      if (!email.value.trim() || !name.value.trim() || !message.value.trim()) {
        Toastify({
          text: "Por favor, completa todos los campos.",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          backgroundColor: "#e53935", 
          close: true,
        }).showToast();
        return;
      }

      // If everything is full, display success message
      Toastify({
        text: "¡Mensaje enviado con éxito!",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        backgroundColor: "#4CAF50", 
        close: true,
      }).showToast();

      // Reset form
      email.value = "";
      name.value = "";
      message.value = "";
    });
  }
}
