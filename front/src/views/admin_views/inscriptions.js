// src/views/admin_views/inscriptions.js
export function inscripcionView() {
  return `
    <h2>Vista de Inscripciones</h2>
    <div class="table-responsive">
      <table class="table table-striped table-hover" id="inscriptionsTable">
        <thead>
          <tr>
            <th scope="col">ID Inscripción</th>
            <th scope="col">Nombre</th>
            <th scope="col">Deporte</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;
}
