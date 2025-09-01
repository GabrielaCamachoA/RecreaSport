export function inscripcionView() {
  return `
    <h4 class="fw-bold mb-4 text-center text-sm-start">Gestión de Inscripciones</h4>
    <p class="text-muted text-center text-sm-start mb-4">Administra todas las inscripciones del programa.</p>
    <div class="table-responsive shadow-sm rounded">
      <table class="table table-hover align-middle mb-0" id="inscriptionsTable">
        <thead class="bg-dark text-white">
          <tr>
            <th scope="col" class="border-0 text-center">N° Inscripción</th>
            <th scope="col" class="border-0">Nombre</th>
            <th scope="col" class="border-0">Deporte</th>
            <th scope="col" class="border-0 text-center">Estado</th>
            <th scope="col" class="border-0 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          </tbody>
      </table>
    </div>
  `;
}
