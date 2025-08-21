/**
 *  libreria para incluir  html de manera dinamica en mi index
 */

document.addEventListener("DOMContentLoaded", (e) => {
  // seleccionamos todos los elementos del DOM que contengan el atributo; data-include
  const $elements = document.querySelectorAll("[data-include]");
  // contador de elementos que ya fueron procesados exitosamente o con error
  let loadedCount = 0;
  // total de elementos que tienen el atributo data-include en el DOM
  const total = $elements.length;

  if (total === 0) {
    document.dispatchEvent(new Event("includes-loaded"));
    return;
  }

  /**
 
 * iteramos sobre cada elemento de manera ascincrona para hacer la consulta fetch con async y await
 * variables:
 * - urlConsulta: viene en data-include de mis elemetos
 * - resConsulta: es un archivo con formato HTML
 * - html: valor de resConsulta el cual se convierte a texto
 */

  $elements.forEach(async (el) => {
    const urlConsulta = el.getAttribute("data-include");

    try {
      const resConsulta = await fetch(urlConsulta);
      const html = await resConsulta.text();

      if (!resConsulta.ok)
        throw { status: res.status, statusText: res.statusText };
      el.outerHTML = html;
    } catch (error) {
      let mensaje = error.statusText || "Ocurrio un error";
      el.outerHTML = `<p><b>Error: ${error.status} - ${mensaje}</b></p>`;
    } finally {
      loadedCount++;
      if (loadedCount === total) {
        document.dispatchEvent(new Event("includes-loaded"));
      }
    }
  });
});
