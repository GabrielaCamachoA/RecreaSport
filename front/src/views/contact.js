export default function Contact() {
  return `
    <section class="contact-section">
    <div class="contact-header">
    <h2>Contáctanos</h2>
  <p class="p-contact">¿Tienes dudas? Estamos aquí para ayudarte.</p>
    </div>

  <div class="contact-container">
    <!-- Form -->
    <form class="contact-form">
      <input type="text" placeholder="Email">
      <input type="text" placeholder="Name">
      <textarea placeholder="Message"></textarea>
      <button type="submit">Enviar</button>
    </form>
    
  <!-- Info Cards -->
  <div class="contact-info ">
    <div class="info-card">
     <img src="../public/images/phone.png" alt="phone" class="img-fluid">
      <p>(605) 339-1000</p>
    </div>

    <div class="info-card">
      <img src="../public/images/mail.png" alt="email" class="img-fluid">
      <p>deporterecreativo@barranquilla.gov.co</p>
    </div>

    <div class="info-card">
      <img src="../public/images/locationInfo.png" alt="location" class="img-fluid">
      <p>Carrera 54 No. 75 - 25 Barranquilla, Atlántico</p>
    </div>
  </div>

  </div>

  <!-- Mapa -->
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?..."></iframe>
  </div>
</section>

  `;
}
