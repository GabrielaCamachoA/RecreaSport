export default function Admin() {
  return `
  
  <div class="container-fluid mx-auto text-start">
    
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
                        <h5 class="card-title">Data 1</h5>
                        <p class="card-text">Datos dinámicos aquí.</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Data 2</h5>
                        <p class="card-text">Datos dinámicos aquí.</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">Data 3</h5>
                        <p class="card-text">Datos dinámicos aquí.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-50 mb-3 ">
            <div class="col-12">
                <div >
                    <ul class="border sub-navbar rounded-pill nav p-1 gap-1 ">
                        <li class="nav-item">
                            <a class="mt-1 nav-link sub-navbar-link" href="#">Inscripciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="mt-1 mb-1 nav-link sub-navbar-link" href="#">Reportes avanzados</a>
                        </li>
                        <li class="nav-item">
                            <a class="mt-1 mb-1 nav-link sub-navbar-link" href="#">Users</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <div class="p-4 border rounded">
                    <p>Contenido principal del panel de administración (tablas, formularios, etc.).</p>
                </div>
            </div>
        </div>
    </div>

  `;
}
