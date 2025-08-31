import Trainer from "../trainer.js";

export default async function TrainerScript() {
  try {
    const request = await fetch("http://localhost:5000/api/users");
    const data = await request.json();

    console.log(data); // Verify the structure of the object

    // Let's make sure that ‘data’ is an array before using forEach.
    if (Array.isArray(data.data)) {
      // We use `data.data` because it appears that users are within this property.
      const tableBody = document.getElementById("Table-users");
      tableBody.innerHTML = ""; // Clear existing content

      data.data.forEach((usuarios) => {
        // We iterate over the user array

        if (usuarios.id_rol == "3") {
          const row = document.createElement("tr");

          const nameCell = document.createElement("td");
          nameCell.textContent =
            usuarios.name + " " + usuarios.surname || "No disponible"; // Avoid errors if the name is missing
          row.appendChild(nameCell);

          const contactCell = document.createElement("td");
          contactCell.textContent = usuarios.phone || "No disponible"; // Avoid errors if contact is missing
          row.appendChild(contactCell);

          const ageCell = document.createElement("td");

          // Obtain the date of birth
          const birthDate = new Date(usuarios.at_birthday);

          // Calculate age
          const currentDate = new Date();
          let age = currentDate.getFullYear() - birthDate.getFullYear();
          const monthDifference = currentDate.getMonth() - birthDate.getMonth();

          // Adjust the age if you have not had a birthday this year.
          if (
            monthDifference < 0 ||
            (monthDifference === 0 &&
              currentDate.getDate() < birthDate.getDate())
          ) {
            age--;
          }

          ageCell.textContent = age; // Assign the calculated age to the cell text
          row.appendChild(ageCell);

          const attendanceRateCell = document.createElement("td");
          attendanceRateCell.textContent = usuarios.attendanceRate || "N/A"; // Display N/A if attendance rate is missing
          row.appendChild(attendanceRateCell);

          tableBody.appendChild(row);
        }
      });
    } else {
      console.error("Los datos no tienen la estructura esperada:", data);
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}
