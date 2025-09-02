export default function Register() {
  return `
  <section class="container-register">
  <div class="register-wrapper">
    <div class="register-left">
      <h2>Únete a RecreaSport</h2>
      <p>¿Ya tienes una cuenta?</p>
      <a class="btn-outline" href="/login" data-link>Iniciar Sesión</a>
    </div>

    <div class="register-right">
      <p class="subtitle">Completa tus datos para iniciar tu registro</p>
      
      <form id="registroForm" class="registerForm">
        <div class="step" id="step1">
          <div class="input-row">
            <div class="mb-3">
              <label for="first_name" class="form-label">Nombre *</label>
              <input 
                type="text" 
                class="form-control" 
                id="first_name" 
                name="username" 
                required 
              />
            </div>

            <div class="mb-3">
              <label for="last_name" class="form-label">Apellido *</label>
              <input 
                type="text" 
                class="form-control" 
                id="last_name" 
                name="surname" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="age" class="form-label">Fecha de Nacimiento *</label>
              <input type="date" class="form-control" id="age" name="at_birthday" required />
            </div>
          </div>

          <div class="input-row">
            <div class="mb-3">
              <label for="id_number" class="form-label">Número de Documento *</label>
              <input type="text" class="form-control" id="id_number" name="number_id" required />
            </div>
            <div class="mb-3">
              <label for="document" class="form-label">Tipo de Documento *</label>
              <select class="form-select" id="document" name="id_document_type" required>
                <option selected disabled>Selecciona</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">Teléfono *</label>
            <input type="tel" class="form-control" id="tel" name="phone" required />
          </div>

          <div class="mb-3">
            <label for="gender" class="form-label">Género *</label>
            <select class="form-select" id="gender" name="id_gender" required>
              <option selected disabled>Selecciona</option>
              </select>
          </div>

          <button type="button" id="nextBtn">Siguiente</button>
        </div>

        <div class="step" id="step2" style="display:none;">
          <div class="mb-3">
            <label for="address" class="form-label">Dirección *</label>
            <input type="text" class="form-control" id="address" name="address" required />
          </div>
          <div class="mb-3">
            <label for="neighborhood" class="form-label">Barrio *</label>
            <select class="form-select" id="neighborhood" name="id_neighborhood" required>
              <option selected disabled>Selecciona</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="locality" class="form-label">Localidad *</label>
            <select class="form-select" name="id_demographic" required>
              <option selected disabled>Selecciona</option>
              <option value="1">Metropolitana</option>
              <option value="2">Suroccidente</option>
              <option value="3">Suroriente</option>
            </select>
          </div>
          
          <div class="mb-3">
              <label for="sport" class="form-label">Deporte *</label>
              <select class="form-select" id="sport" name="id_sport" required>
                  <option selected disabled>Selecciona un deporte</option>
                  <option value="1">Fútbol</option>
                  <option value="2">Baloncesto</option>
                  <option value="3">Voleibol</option>
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