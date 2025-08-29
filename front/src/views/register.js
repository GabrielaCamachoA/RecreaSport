export default function Register() {
  return `
<<<<<<< HEAD
  <section class="container-register">
    <div class="register-wrapper">
    <!-- Columna izquierda -->
    <div class="register-left">
      <h1>RecreaSport</h1>
      <p>¿Ya tienes una cuenta?</p>
      <p>Inicia sesión para continuar con tus actividades deportivas.</p>
      <button class="btn-outline">Iniciar Sesión</button>
    </div>

    <!-- Columna derecha -->
    <div class="register-right">
      <h2>Únete al programa RecreaSport 2025</h2>
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
=======
  <div class="container-register">
    <h2>Únete al programa RecreaSport 2025</h2>
    
    <form id="registroForm" class="registerFrom">

      <!-- Paso 1 -->
      <div class="step" id="step1">
        <div class="mb-3">
          <label for="first_name" class="form-label">Nombre *</label>
          <input 
            type="text" 
            class="form-control" 
            id="first_name" 
            name="first_name" 
            placeholder="Escribe tu nombre"
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
            placeholder="Escribe tu apellido"
            required 
          />
        </div>

        <div class="mb-3">
          <label for="birth_date" class="form-label">Fecha de Nacimiento *</label>
          <input 
            type="date" 
            class="form-control" 
            id="birth_date" 
            name="birth_date" 
            required 
          />
        </div>

        <div class="document_par">
          <div class="mb-3">
            <label for="id_number" class="form-label">Número de Documento *</label>
            <input 
              type="text" 
              class="form-control" 
              id="id_number" 
              name="id_number" 
              required 
            />
          </div>
          <div class="mb-3">
            <label for="document_type" class="form-label">Tipo de Documento *</label>
            <select class="form-select" id="document_type" name="document_type" required>
              <option value="">Selecciona</option>
              <option value="1">CC - Cédula de Ciudadanía</option>
              <option value="2">TI - Tarjeta de Identidad</option>
              <option value="3">CE - Cédula de Extranjería</option>
              <option value="4">PA - Pasaporte</option>
            </select>
          </div>
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">Teléfono *</label>
          <input 
            type="tel" 
            class="form-control" 
            id="phone" 
            name="phone" 
            placeholder="Ej: 3001234567"
            required 
          />
        </div>

        <div class="mb-3">
          <p>Género *</p>
          <select class="form-select" id="gender" name="gender" required>
            <option value="">Selecciona</option>
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
          <input 
            type="text" 
            class="form-control" 
            id="address" 
            name="address" 
            required 
          />
        </div>

        <div class="mb-3">
          <label for="neighborhood" class="form-label">Barrio *</label>
          <select class="form-select" id="neighborhood" name="neighborhood" required>
            <option value="">Selecciona</option>
            <option value="20 DE JULIO">20 DE JULIO</option>
            <option value="VILLA DE SAN PABLO">VILLA DE SAN PABLO</option>
            <option value="LAS NIEVES">LAS NIEVES</option>
            <option value="MIRAMAR">MIRAMAR</option>
            <option value="VILLA CAROLINA">VILLA CAROLINA</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="locality" class="form-label">Localidad *</label>
          <select class="form-select" id="locality" name="locality" required>
            <option value="">Selecciona</option>
            <option value="Metropolitana">Metropolitana</option>
            <option value="Suroccidente">Suroccidente</option>
            <option value="Suroriente">Suroriente</option>
            <option value="Norte Centro Histórico">Norte Centro Histórico</option>
            <option value="Riomar">Riomar</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="sport" class="form-label">Disciplina Deportiva y horarios *</label>
          <select class="form-select" id="sport" name="sport" required>
            <option value="">Selecciona</option>
            <option value="Atletismo - Rafael Cotes: Lun/Jue 6-7 pm">Atletismo - Rafael Cotes: Lun/Jue 6-7 pm</option>
            <option value="Judo - E.metropolitano: Lun/Jue 6-7 pm">Judo - E.metropolitano: Lun/Jue 6-7 pm</option>
            <option value="Karate - E.metropolitano. Mar/Vie 6-7 pm">Karate - E.metropolitano. Mar/Vie 6-7 pm</option>
            <option value="Softbol - Bosque del Norte: Mar/Jue 8-9 pm">Softbol - Bosque del Norte: Mar/Jue 8-9 pm</option>
            <option value="Futbol - Parque Tivoli: Mar/Mie 6-7 pm">Futbol - Parque Tivoli: Mar/Mie 6-7 pm</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="demografic" class="form-label">Caracterización demográfica *</label>
          <select class="form-select" id="demografic" name="demografic" required>
            <option value="">Selecciona</option>
            <option value="1">Víctima</option>
            <option value="2">Afrodescendiente</option>
            <option value="3">Indígena</option>
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
>>>>>>> a988acc (Register user)
