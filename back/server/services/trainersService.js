import Trainers from "../models/Trainers/Trainers.js";
import { Users } from "../models/index.js";

// Obtener todos los entrenadores, incluyendo su información de usuario.
async function getAllTrainers() {
  const trainers = await Trainers.findAll({
    include: {
      model: Users,
      attributes: ["name", "surname", "number_id"],
    },
  });
  return trainers;
}

// Obtener un entrenador por su ID, con sus datos de usuario.
async function getTrainerById(id) {
  const trainer = await Trainers.findByPk(id, {
    include: {
      model: Users,
      attributes: ["name", "surname", "number_id"],
    },
  });
  if (!trainer) {
    throw new Error("Entrenador no encontrado");
  }
  return trainer;
}

// Crear un nuevo entrenador.
async function createTrainer(userId) {
  const newTrainer = await Trainers.create({ id_user: userId });
  return newTrainer;
}

// Exporta las funciones para que el controlador pueda acceder a ellas.
export const trainersService = {
  getAllTrainers,
  getTrainerById,
  createTrainer,
};
