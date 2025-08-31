import Sports from "../models/Sports/Sports.js";
import Trainers from "../models/Trainers/Trainers.js";
import Venues from "../models/Venues/Venues.js";
import Schedules from "../models/Schedules/Schedules.js";

// Obtiene todos los deportes, incluyendo datos de su entrenador, lugar y horario.
async function getAllSports() {
  const sports = await Sports.findAll({
    include: [
      {
        model: Trainers,
        attributes: ["name", "id_user"],
      },
      {
        model: Venues,
        attributes: ["name", "address"],
      },
      {
        model: Schedules,
        attributes: ["day_of_week", "start_time", "end_time"],
      },
    ],
  });
  return sports;
}

// Obtiene un solo deporte por su ID, con sus datos relacionados.
async function getSportById(id) {
  const sport = await Sports.findByPk(id, {
    include: [
      {
        model: Trainers,
        attributes: ["name", "id_user"],
      },
      {
        model: Venues,
        attributes: ["name", "address"],
      },
      {
        model: Schedules,
        attributes: ["day_of_week", "start_time", "end_time"],
      },
    ],
  });
  if (!sport) {
    throw new Error("Deporte no encontrado");
  }
  return sport;
}

// Crea un nuevo deporte.
async function createSport(sportData) {
  const newSport = await Sports.create(sportData);
  return newSport;
}

// Exporta las funciones para que el controlador pueda usarlas.
export const sportsService = {
  getAllSports,
  getSportById,
  createSport,
};
