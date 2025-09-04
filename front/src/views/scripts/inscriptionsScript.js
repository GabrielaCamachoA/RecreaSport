// src/views/scripts/inscriptionsScript.js
export default async function setupInscriptionsTable() {
  console.log("Setting up inscriptions table...");

  const table = document.querySelector("#inscriptionsTable");
  if (!table) {
    console.warn("No se encontró #inscriptionsTable");
    return;
  }

  const tableBody = table.querySelector("tbody");
  if (!tableBody) return;

  try {
    const response = await fetch("https://recreasport-production.up.railway.app/api/inscriptions/all");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json();
    const inscriptionsRaw = Array.isArray(result?.data)
      ? result.data
      : Array.isArray(result?.inscriptions)
      ? result.inscriptions
      : [];

    tableBody.innerHTML = "";

    if (inscriptionsRaw.length === 0) {
      tableBody.innerHTML = `
        <tr><td colspan="5" class="text-center">No hay inscripciones para mostrar.</td></tr>
      `;
      return;
    }

    const frag = document.createDocumentFragment();

    for (const ins of inscriptionsRaw) {
      const id = ins?.id_inscription ?? ins?.id ?? "—";

      // Accede a los datos usando los alias 'contestant' y 'user'
      const userName = ins?.contestant?.user
        ? `${ins.contestant.user?.name ?? ""} ${
            ins.contestant.user?.surname ?? ""
          }`.trim()
        : "—";

      // Accede al nombre del deporte usando el alias 'sport'
      const sportName = ins?.sport?.name ?? "—";

      const status = ins?.status ?? "Pendiente";

      const statusClass =
        status === "Aceptada"
          ? "text-success"
          : status === "Rechazada"
          ? "text-danger"
          : "text-warning";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="text-center">${id}</td>
        <td class="text-center">${userName}</td>
        <td class="text-center">${sportName}</td>
        <td class="${statusClass}  text-center">${status}</td>
        <td class="text-center">
          <button class="btn btn-success btn-sm me-2" data-id="${id}" data-action="accept">Aceptar</button>
          <button class="btn btn-danger btn-sm" data-id="${id}" data-action="reject">Rechazar</button>
        </td>
      `;
      frag.appendChild(row);
    }

    tableBody.appendChild(frag);

    // Delegación de eventos en el tbody (se reemplaza al recargar la tabla)
    tableBody.onclick = async (e) => {
      const button = e.target.closest("button[data-action]");
      if (!button) return;

      const { id, action } = button.dataset;
      const newStatus = action === "accept" ? "Aceptada" : "Rechazada";

      try {
        const updateResponse = await fetch(
          `https://recreasport-production.up.railway.app/api/inscriptions/${id}/status`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
          }
        );
        if (!updateResponse.ok)
          throw new Error("No se pudo actualizar el estado.");

        alert("Estado actualizado con éxito.");
        // Recarga la tabla
        await setupInscriptionsTable();
      } catch (error) {
        console.error("Error updating status:", error);
        alert("Error: No se pudo actualizar el estado.");
      }
    };
  } catch (error) {
    console.error("Error fetching inscriptions:", error);
    tableBody.innerHTML = `
      <tr><td colspan="5" class="text-center text-danger">Error al cargar las inscripciones.</td></tr>
    `;
  }
}
