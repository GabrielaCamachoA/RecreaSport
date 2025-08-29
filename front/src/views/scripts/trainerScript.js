import Trainer from "../trainer.js"

export default async function TrainerScript() {
  try {
    const request = await fetch("http://localhost:5000/users");
    const data = await request.json();

    console.log(data);  // Verifica la estructura del objeto

    // Asegurémonos de que 'data' sea un array antes de usar forEach
    if (Array.isArray(data.data)) { // Usamos `data.data` porque parece que los usuarios están dentro de esta propiedad
      const tableBody = document.getElementById("Table-users");
      tableBody.innerHTML = '';  // Limpiar contenido existente

      data.data.forEach(usuarios => {  // Iteramos sobre el arreglo de usuarios

        if(usuarios.id_rol == "3"){
          const row = document.createElement("tr");
          
          const nameCell = document.createElement("td");
          nameCell.textContent = usuarios.name + " " + usuarios.surname || "No disponible";  // Evitar errores si falta el nombre
          row.appendChild(nameCell);
          
          const contactCell = document.createElement("td");
          contactCell.textContent = usuarios.phone || "No disponible";  // Evitar errores si falta el contacto
          row.appendChild(contactCell);
          
          const ageCell = document.createElement("td");
          
          // Obtener la fecha de nacimiento
          const birthDate = new Date(usuarios.at_birthday);
          
          // Calcular la edad
          const currentDate = new Date();
          let age = currentDate.getFullYear() - birthDate.getFullYear();
          const monthDifference = currentDate.getMonth() - birthDate.getMonth();
          
          // Ajustar la edad si no ha cumplido años este año
          if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
          }
          
          ageCell.textContent = age;  // Asignar la edad calculada al texto de la celda
          row.appendChild(ageCell);
          
          
          const attendanceRateCell = document.createElement("td");
          attendanceRateCell.textContent = usuarios.attendanceRate || "N/A";  // Mostrar N/A si falta tasa de asistencia
          row.appendChild(attendanceRateCell);
          
          
          
          tableBody.appendChild(row);
        }
        });
      } else {
        console.error("Los datos no tienen la estructura esperada:", data);
      }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}
