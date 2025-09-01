export default function Admin() {
  return `
  <div class="container-fluid py-3 px-1 bg-light min-vh-100">
    
    <div class="row align-items-center mb-3">
        <div class="col-12 col-md-8">
            <h1 class="h6 fw-bold text-dark mb-1 mb-sm-0 text-truncate">Panel Administrativo</h1>
            <p class="small text-muted text-truncate">Gestión integral del programa <span class="fw-semibold">Deporte Recreativo 2025</span>.</p>
        </div>
        <div class="col-12 col-md-4 text-md-end mt-2 mt-md-0">
            <button class="btn btn-primary btn-sm shadow-sm export-data w-100 w-sm-auto">
                <i class="bi bi-download me-1"></i> Exportar Datos
            </button>
        </div>
    </div>

    <div class="row g-2 mb-3">
        <div class="col-12 col-sm-6 col-md-4">
            <div class="card border-0 rounded-4 shadow-sm h-100">
                <div class="card-body p-2">
                    <h5 class="card-title text-muted text-uppercase fw-normal small mb-1">Total Inscripciones</h5>
                    <h2 class="card-text h4 fw-bold text-dark" id="total-inscriptions">Cargando...</h2>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="card border-0 rounded-4 shadow-sm h-100">
                <div class="card-body p-2">
                    <h5 class="card-title text-muted text-uppercase fw-normal small mb-1">Aprobadas</h5>
                    <h2 class="card-text h4 fw-bold text-success" id="approved-inscriptions">Cargando...</h2>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="card border-0 rounded-4 shadow-sm h-100">
                <div class="card-body p-2">
                    <h5 class="card-title text-muted text-uppercase fw-normal small mb-1">Pendientes</h5>
                    <h2 class="card-text h4 fw-bold text-warning" id="pending-inscriptions">Cargando...</h2>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row mb-3">
        <div class="col-12">
            <nav class="nav nav-pills flex-column flex-sm-row bg-white rounded-3 shadow-sm p-1" id="admin-sub-nav">
                <a class="flex-sm-fill text-sm-center nav-link py-1 px-2 small sub-navbar-link" data-view="inscriptions" href="#">Inscripciones</a>
                <a class="flex-sm-fill text-sm-center nav-link py-1 px-2 small sub-navbar-link" data-view="reports" href="#">Reportes Avanzados</a>
                <a class="flex-sm-fill text-sm-center nav-link py-1 px-2 small sub-navbar-link" data-view="users" href="#">Usuarios</a>
            </nav>
        </div>
    </div>
    
    <div class="row">
        <div class="col-12">
            <div class="card border-0 rounded-4 shadow-sm p-3 bg-white" id="admin-content-area">
                <p class="text-muted fst-italic small">Contenido principal del panel de administración (tablas, formularios, etc.).</p>
            </div>
        </div>
    </div>
  </div>
  `;
}
