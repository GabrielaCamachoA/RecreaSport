import { Users, Trainers } from "../models/index.js"; // Asegúrate de que las rutas a tus modelos sean correctas

export async function loadTrainersToDataBase() {
  try {
    // 1. Encontrar todos los usuarios que son entrenadores (id_rol = 2)
    const usersToPromote = await Users.findAll({
      where: {
        id_rol: 2,
      },
      attributes: ["id_user", "name", "surname"], // Solo necesitamos estos campos
    });

    if (usersToPromote.length === 0) {
      console.log("No se encontraron usuarios con rol de entrenador.");
      return;
    }

    // 2. Mapear los datos para que coincidan con el modelo de Trainers
    const trainers = usersToPromote.map((user) => ({
      id_user: user.id_user,
      name: user.name,
      surname: user.surname,
    }));

    // 3. Insertar los nuevos entrenadores en la tabla Trainers
    const result = await Trainers.bulkCreate(trainers, {
      validate: true,
      ignoreDuplicates: true, // Evita errores si el script se ejecuta más de una vez
    });
    console.log(`${result.length} trainers were inserted`);
  } catch (error) {
    console.error("Error inserting trainers:", error.message);
    throw error;
  }
}
