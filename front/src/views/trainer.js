import "./styles/trainer.css"

import TrainerScript from "./scripts/trainerScript"

export default function Trainer() {
  return `
<div id="trainer-panel" class="container-fluid px-4 py-4">
  <!-- Header -->
  <div class="mb-4">
    <h3 class="mb-1">Panel del Entrenador</h3>
    <p class="text-muted mb-0">Gestión de entrenamientos y asistencias</p>
  </div>

  <!-- Estadísticas -->
  <div class="row g-3 mb-3">
    <div class="col-12 col-md-3">
      <div class="card-stat p-3 position-relative h-100">
        <div>
          <h6 class="stat-title mb-1">Estudiantes Asignados</h6>
          <div class="stat-value">5</div>
          <div class="small text-muted">Total de participantes</div>
        </div>
        <div class="stat-icon">
          <i class="bi bi-people-fill"></i>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-3">
      <div class="card-stat p-3 position-relative h-100">
        <div>
          <h6 class="stat-title mb-1">Asistencias</h6>
          <div class="stat-value text-success">4</div>
          <div class="small text-success">Presentes registrados</div>
        </div>
        <div class="stat-icon text-success">
          <i class="bi bi-person-check-fill"></i>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-3">
      <div class="card-stat p-3 position-relative h-100">
        <div>
          <h6 class="stat-title mb-1">Ausencias</h6>
          <div class="stat-value text-danger">1</div>
          <div class="small text-danger">Ausencias registradas</div>
        </div>
        <div class="stat-icon text-danger">
          <i class="bi bi-x-circle-fill"></i>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-3">
      <div class="card-stat p-3 position-relative h-100">
        <div>
          <h6 class="stat-title mb-1">Tardanzas</h6>
          <div class="stat-value text-warning">0</div>
          <div class="small text-warning">Llegadas tardías</div>
        </div>
        <div class="stat-icon text-warning">
          <i class="bi bi-clock-fill"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs estilo Figma -->
  <div class="mb-3">
    <ul class="nav nav-pills" id="trainer-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="tab-estudiantes" data-bs-toggle="pill" data-bs-target="#pane-estudiantes" type="button" role="tab">Estudiantes</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tab-marcar" data-bs-toggle="pill" data-bs-target="#pane-marcar" type="button" role="tab">Marcar Asistencia</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tab-historial" data-bs-toggle="pill" data-bs-target="#pane-historial" type="button" role="tab">Historial</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tab-notif" data-bs-toggle="pill" data-bs-target="#pane-notif" type="button" role="tab">Notificaciones</button>
      </li>
    </ul>
  </div>

  <!-- Tabla dentro de "card" con borde y radio -->
  <div class="table-card p-3">
    <div class="mb-3">
      <h6 class="mb-1 fw-semibold">Estudiantes Asignados</h6>
      <div class="text-muted small">Lista de participantes en tus entrenamientos</div>
    </div>

    <div class="table-responsive">
      <table class="table table-borderless align-middle mb-0 table-custom">
        <thead>
          <tr>
            <th class="fw-semibold">Estudiante</th>
            <th class="fw-semibold">Contacto</th>
            <th class="fw-semibold">Edad</th>
            <th class="fw-semibold">Tasa de Asistencia</th>
          </tr>
        </thead>
        <tbody id="Table-users">
          
        </tbody>
      </table>
    </div>
  </div>
</div>
`
}
TrainerScript()
