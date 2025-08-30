export default function Register() {
  return `
  <section class="container-register">
    <div class="register-wrapper">
    <!-- Columna izquierda -->
    <div class="register-left">
      <h2>Únete a RecreaSport</h2>
      <p>¿Ya tienes una cuenta?</p>
      <a class="btn-outline" href="/login" data-link>Iniciar Sesión</a>
    </div>

    <!-- Columna derecha -->
    <div class="register-right">
      <p class="subtitle">Completa tus datos para iniciar tu registro</p>
      
      <form id="registroForm" class="registerForm">
        <!-- Paso 1 -->
        <div class="step" id="step1">
          <div class="input-row">
            <div class="mb-3">
          <label for="first_name" class="form-label">Nombre *</label>
          <input 
            type="text" 
            class="form-control" 
            id="first_name" 
            name="first_name" 
            required 
          />
        </div>

        <div class="mb-3">
          <label for="last_name" class="form-label">Apellido *</label>
          <input 
            type="text" 
            class="form-control" 
            id="last_name" 
            name="last_name" 
            required 
          />
        </div>
            <div class="mb-3">
              <label for="age" class="form-label">Fecha de Nacimiento *</label>
              <input type="date" class="form-control" id="age" required />
            </div>
          </div>

          <div class="input-row">
            <div class="mb-3">
              <label for="id_number" class="form-label">Número de Documento *</label>
              <input type="text" class="form-control" id="id_number" required />
            </div>
            <div class="mb-3">
              <label for="document" class="form-label">Tipo de Documento *</label>
              <select class="form-select" required>
                <option selected>Selecciona</option>
                <option value="1">CC</option>
                <option value="2">TI</option>
                <option value="3">CE</option>
                <option value="4">Pasaporte</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">Teléfono *</label>
            <input type="tel" class="form-control" id="tel" required />
          </div>

          <div class="mb-3">
            <label for="gender" class="form-label">Género *</label>
            <select class="form-select" id="gender" required>
              <option selected>Selecciona</option>
              <option value="1">Femenino</option>
              <option value="2">Masculino</option>
              <option value="3">Otro</option>
            </select>
          </div>

          <button type="button" id="nextBtn">Siguiente</button>
        </div>

        <!-- Paso 2 -->
        <div class="step" id="step2" style="display:none;">
          <div class="mb-3">
            <label for="address" class="form-label">Dirección *</label>
            <input type="text" class="form-control" id="address" required />
          </div>
          <div class="mb-3">
            <label for="neighborhood" class="form-label">Barrio *</label>
            <select class="form-select" required>
              <option selected>Selecciona</option>
              <option value="1">20 DE JULIO</option>
              <option value="2">VILLA DE SAN PABLO</option>
              <option value="3">LAS NIEVES</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="locality" class="form-label">Localidad *</label>
            <select class="form-select" required>
              <option selected>Selecciona</option>
              <option value="1">Metropolitana</option>
              <option value="2">Suroccidente</option>
              <option value="3">Suroriente</option>
            </select>
          </div>

          <button type="button" id="prevBtn">Atrás</button>
          <button type="submit">Completar Registro</button>
        </div>
      </form>
    </div>
  </div>
  </section>
  `;
}