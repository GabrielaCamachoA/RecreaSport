export default function Register() {
  return `
 <div class="container-register">
        <h2>Únete al programa RecreaSport 2025</h2>
          <form id="registroForm" class="registerFrom">
  <!-- Paso 1 -->
  <div class="step" id="step1">
     <div class="mb-3">
          <label for="name" class="form-label">Nombre Completo *</label>
          <input type="text" class="form-control" id="name" required />
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Fecha de Nacimiento *</label>
          <input type="date" class="form-control" id="age" required />
        </div>
        <div class="document_par">
            <div class="mb-3">
                <label for="id_number" class="form-label">Número de Documento *</label>
                <input type="text" class="form-control" id="id_number" required />
            </div>
            <div class="mb-3">
                <label for="document" class="form-label">Tipo de Documento *</label>
                <select class="form-select" aria-label="select" required>
                    <option selected>Selecciona</option>
                    <option value="1">CC - CEDULA DE CIUDADANIA</option>
                    <option value="2">TI - TARJETA DE IDENTIDAD</option>
                    <option value="3">CE - CEDULA DE EXTRANJERIA</option>
                    <option value="4">PA - PASAPORTE</option>
                </select>
            </div>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">Teléfono *</label>
          <input type="tel" class="form-control" id="tel" required />
        </div>
        <div class="mb-3">
            <p>Género *</p>
          <select class="form-select" aria-label="select" required>
            <option selected>Selecciona</option>
            <option value="1">Femenino</option>
            <option value="2">Masculino</option>
            <option value="3">Otro</option>
          </select>
        </div>
    <button type="button" class="btn btn-success" id="nextBtn">Siguiente</button>
  </div>

  <!-- Paso 2 -->
  <div class="step" id="step2" style="display:none;">
    <div class="mb-3">
          <label for="address" class="form-label">Dirección *</label>
          <input type="text" class="form-control" id="address" required />
        </div>
            <div class="mb-3">
            <label for="neighborhood" class="form-label">Barrio *</label>
          <select class="form-select" aria-label="select" required>
            <option selected>Selecciona</option>
            <option value="1">20 DE JULIO</option>
            <option value="2">VILLA DE SAN PABLO</option>
            <option value="3">LAS NIEVES</option>
            <option value="4">MIRAMAR</option>
            <option value="5">VILLA CAROLINA</option>
          </select>
        </div>
        <div class="mb-3">
            <label for="locality" class="form-label">Localidad *</label>
          <select class="form-select" aria-label="select" required>
            <option selected>Selecciona</option>
            <option value="1">Metropolitana</option>
            <option value="2">Suroccidente</option>
            <option value="3">Suroriente</option>
            <option value="4">Norte Centro Histórico</option>
            <option value="5">Riomar</option>
          </select>
        </div>
        <div class="mb-3">
            <label for="sport" class="form-label">Disciplina Deportiva y horarios *</label>
          <select class="form-select" aria-label="select" required>
            <option selected>Selecciona</option>
            <option value="1">Atletismo - Rafael Cotes: Lun/Jue 6-7 pm</option>
            <option value="2">Judo - E.metropolitano: Lun/Jue 6-7 pm</option>
            <option value="3">Karate - E.metropolitano. Mar/Vie 6-7 pm</option>
            <option value="4">Softbol - Bosque del Norte: Mar/Jue 8-9 pm</option>
            <option value="5">Futbol - Parque Tivoli: Mar/Mie 6-7 pm</option>
          </select>
        </div>
        <div class="mb-3">
            <label for="demografic" class="form-label">Caracterización demográfica *</label>
          <select class="form-select" aria-label="select" required>
            <option selected>Selecciona</option>
            <option value="1">Víctima</option>
            <option value="2">Afrodescendiente</option>
            <option value="3">Indigenna</option>
            <option value="4">Room</option>
            <option value="5">En condición de discapacidad</option>
            <option value="6">Ninguno</option>
          </select>
        </div>
        <button type="button" class="btn btn-success" id="prevBtn">Atrás</button>
        <button type="submit" class="btn btn-success">Completar Registro</button>
  </div>
</form>
        </div>
`;
}