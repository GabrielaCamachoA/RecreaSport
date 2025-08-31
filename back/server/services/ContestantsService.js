import Contestants from "../models/Contestants/Contestants.js";
import { Users } from "../models/index.js";

// Servicio para crear un nuevo concursante
async function createContestant(userId) {
  // Aquí podemos agregar lógica de validación si es necesario,
  // como verificar si el usuario ya es un concursante.
  const contestant = await Contestants.create({
    id_user: userId,
  });
  return contestant;
}

// Servicio para obtener todos los concursantes con sus datos de usuario
async function getAllContestants() {
  const contestants = await Contestants.findAll({
    include: {
      model: Users,
      attributes: ["name", "surname", "number_id"], // Atributos del modelo Users que quieres incluir
    },
  });
  return contestants;
}

// Servicio para obtener un concursante por su ID
async function getContestantById(id) {
  const contestant = await Contestants.findByPk(id, {
    include: {
      model: Users,
      attributes: ["name", "surname", "number_id"],
    },
  });
  if (!contestant) {
    throw new Error("Concursante no encontrado");
  }
  return contestant;
}

// Exporta las funciones para que puedan ser utilizadas por el controlador
export const contestantsService = {
  createContestant,
  getAllContestants,
  getContestantById,
};
