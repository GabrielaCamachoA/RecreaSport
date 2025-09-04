/**
 *  library to dynamically include HTML in my index
 */

document.addEventListener("DOMContentLoaded", (e) => {
  // select all DOM elements that contain the data-include attribute.
  const $elements = document.querySelectorAll("[data-include]");
  // counter of items that have been successfully processed or processed with an error
  let loadedCount = 0;
  //total number of elements that have the data-include attribute in the DOM
  const total = $elements.length;

  if (total === 0) {
    document.dispatchEvent(new Event("includes-loaded"));
    return;
  }

  /**
 
 * We iterate over each element asynchronously to perform the fetch query with async and await.
 * Variables:
 * - urlQuery: comes in data-include from my elements.
 * - queryResult: is a file in HTML format.
 * - html: value of queryResult which is converted to text.
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
