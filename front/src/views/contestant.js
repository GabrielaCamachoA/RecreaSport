export default function Contestant() {
  const authToken = sessionStorage.getItem("auth_token") || localStorage.getItem("auth_token");
  let userData = { user: "Invitado" };

  if (authToken) {
    try {
      userData = JSON.parse(authToken);
    } catch (error) {
      console.error("Error parsing auth_token:", error);
    }
  }

  return `
<div class="container py-4 mt-6">

  <!-- header -->
  <div class="d-flex justify-content-between align-items-start mb-4">
    <div>
      <h1 class="fw-bold">Mi Panel</h1>
      <p class="text-muted">Bienvenido al Programa Deporte Recreativo 2025</p>
    </div>
    <div class="py-2 px-3">
      <span class="greeting fw-semibold fs-6">Hola ,</span><br>
      <span class="fw-bold fs-5">${userData.user}</span>
    </div>
  </div>

  <!-- Dashboard -->
  <div class="row g-3 mb-4">
    <div class="col-md-6">
      <div class="card text-center shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">Tasa de Asistencia</h5>
          <p class="display-6 text-success fw-bold">100%</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card text-center shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">Total Sesiones</h5>
          <p class="display-6 text-primary fw-bold">3</p>
          <small class="text-muted">Entrenamientos programados</small>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <ul class="nav nav-tabs mb-4" id="contestantTabs">
    <li class="nav-item">
      <button class="nav-link active text-dark" data-bs-toggle="tab" data-tab="registration">Mi Inscripción</button>
    </li>
    <li class="nav-item">
      <button class="nav-link text-dark" data-bs-toggle="tab" data-tab="schedules">Horarios</button>
    </li>
  </ul>

  <!-- Tab Contents -->

  <!-- Registration Details -->
  <div id="tab-registration" class="tab-content active">
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title mb-3">Detalles de mi Inscripción</h5>
        <div class="row">
          <div class="col-md-6 mb-2">
            <i class="bi bi-activity text-primary"></i> <strong>Disciplina:</strong> Fútbol
          </div>
          <div class="col-md-6 mb-2">
            <i class="bi bi-calendar-event text-warning"></i> <strong>Fecha de Inscripción:</strong> 15/1/2025
          </div>
          <div class="col-md-6 mb-2">
            <i class="bi bi-geo-alt text-success"></i> <strong>Localidad:</strong> Norte Centro Histórico - Norte
          </div>
          <div class="col-md-6 mb-2">
            <i class="bi bi-person-badge text-secondary"></i> <strong>Edad:</strong> 28 años
          </div>
        </div>

      <!-- Alerts -->
      <div class="alert alert-success mt-3 mb-0" role="alert">
        🎉 ¡Felicitaciones! Tu inscripción ha sido aprobada. Ya puedes participar en los entrenamientos.
      </div>
    </div>
  </div>
</div>

  <!-- Schedules Details -->
<div id="tab-schedules" class="tab-content d-none">
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title mb-3">Horarios de Entrenamiento</h5>
      <p class="text-muted">Cronograma semanal de actividades</p>

      <ul class="list-group">

        <!-- icon -->
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center gap-2">
            <i class="bi bi-calendar-event text-primary fs-5"></i>
            <div class="d-flex flex-column">
                <span class="fw-bold">Lunes</span>
                <small class="text-muted">6:00 PM - 7:30 PM</small>
            </div>
            </div>

        <!-- location -->
            <div class="d-flex align-items-center text-muted">
            <i class="bi bi-geo-alt-fill me-1"></i>
            <span>Cancha Nueva Granada</span>
            </div>
        </li>
        <!-- icon -->
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center gap-2">
            <i class="bi bi-calendar-event text-primary fs-5"></i>
            <div class="d-flex flex-column">
                <span class="fw-bold">Miércoles</span>
                <small class="text-muted">6:00 PM - 7:30 PM</small>
            </div>
            </div>

        <!-- location -->
            <div class="d-flex align-items-center text-muted">
            <i class="bi bi-geo-alt-fill me-1"></i>
            <span>Cancha Nueva Granada</span>
            </div>
        </li>

        <!-- icon -->
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center gap-2">
            <i class="bi bi-calendar-event text-primary fs-5"></i>
            <div class="d-flex flex-column">
                <span class="fw-bold">Viernes</span>
                <small class="text-muted">6:00 PM - 7:30 PM</small>
            </div>
            </div>

        <!-- location -->
        <div class="d-flex align-items-center text-muted">
        <i class="bi bi-geo-alt-fill me-1"></i>
        <span>Cancha Nueva Granada</span>
        </div>
        </li>
      </ul>

      <!-- Important Reminder -->
      <div class="alert alert-primary mt-4">
        <h6 class="fw-bold">📌 Recordatorio Importante</h6>
        <ul class="mb-0">
          <li>Llega 15 minutos antes del inicio</li>
          <li>Trae agua y toalla</li>
          <li> La alcadía se encargara de suministrar el uniforme</li>
          <li>Informa al entrenador sobre cualquier lesión</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  `;
}