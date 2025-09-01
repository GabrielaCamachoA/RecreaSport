export default function Contestant() {
  return `
    <div class="container-fluid py-4 px-3 bg-light min-vh-100">

      <div class="row mb-4">
        <div class="col-6">
          <h1 class="h3 fw-bold text-dark mb-1">Mi Panel</h1>
          <p class="fs-6 text-muted">Bienvenido al Programa Deporte Recreativo 2025</p>
        </div>
        <div class="col-6 text-end d-flex flex-column justify-content-end">
          <p class="fs-6 mb-0">Hola, <span class="fw-bold" id="user-name">Usuario</span></p>
        </div>
      </div>

     

      <div class="row">
        <div class="col-12">
          <div class="card border-0 rounded-4 shadow-sm p-4 bg-white" id="contestant-content-area">
            
            <h5 class="fw-bold mb-3">Detalles de mi Inscripción</h5>
            
            <div class="row g-3 mb-4" id="inscription-details">
              <div class="col-12 col-sm-6">
                <p class="mb-2"><i class="bi bi-star-fill text-primary me-2"></i><span class="fw-bold">Disciplina:</span> <span id="insc-disciplina">Cargando...</span></p>
              </div>
              <div class="col-12 col-sm-6">
                <p class="mb-2"><i class="bi bi-calendar-check-fill text-primary me-2"></i><span class="fw-bold">Fecha de Inscripción:</span> <span id="insc-fecha">Cargando...</span></p>
              </div>
              <div class="col-12 col-sm-6">
                <p class="mb-2"><i class="bi bi-geo-alt-fill text-primary me-2"></i><span class="fw-bold">Localidad:</span> <span id="insc-localidad">Cargando...</span></p>
              </div>
              <div class="col-12 col-sm-6">
                <p class="mb-2"><i class="bi bi-person-fill text-primary me-2"></i><span class="fw-bold">Estado:</span> <span id="insc-estado" class="badge rounded-pill">Cargando...</span></p>
              </div>
            </div>

            <div id="status-alert-container">
              </div>

          </div>
        </div>
      </div>
    </div>
  `;
}
