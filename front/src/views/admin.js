export default function Admin() {
  return `
  
  <div class="container-fluid px-4 py-4">
    
        <div class="row mb-4">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <div class="text-end">
                    <h1>Panel Administrativo</h1>
                    <p>Gestión integral del programa Deporte Recreativo 2025.</p>
                </div>
                <button class="btn export-data btn-success">Exportar Datos</button>
            </div>
        </div>
        
        <div class="row mb-4 justify-content-center">
            
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Total Inscripciones</h5>
                        <p class="card-text"><span id="total-inscriptions">Cargando...</span></p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Aprobadas</h5>
                        <p class="card-text"><span id="approved-inscriptions">Cargando...</span></p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Pendientes</h5>
                        <p class="card-text"><span id="pending-inscriptions">Cargando...</span></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-50 mb-3 ">
            <div class="col-12">
                <div >
                    <ul class="border sub-navbar rounded-pill nav p-1 gap-1 " id="admin-sub-nav">
                        <li class="nav-item">
                            <a class="mt-1 nav-link sub-navbar-link" data-view="inscriptions" href="#">Inscripciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="mt-1 mb-1 nav-link sub-navbar-link" data-view="reports" href="#">Reportes avanzados</a>
                        </li>
                        <li class="nav-item">
                            <a class="mt-1 mb-1 nav-link sub-navbar-link" data-view="users" href="#">Users</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <div class="p-4 border rounded" id="admin-content-area">
                    <p>Contenido principal del panel de administración (tablas, formularios, etc.).</p>
                </div>
            </div>
        </div>
    </div>

  `;
}
