import Inscriptions from "../models/Inscriptions/Inscriptions.js";
import Neighborhoods from "../models/Neighborhoods/Neighborhoods.js";
import Contestants from "../models/Contestants/Contestants.js";
import { Users } from "../models/index.js";
import Sports from "../models/Sports/Sports.js";
import Trainers from "../models/Trainers/Trainers.js";
import Venues from "../models/Venues/Venues.js";
import Schedules from "../models/Schedules/Schedules.js";

// Obtiene todas las inscripciones con sus datos relacionados.
async function getAllInscriptions() {
  const inscriptions = await Inscriptions.findAll({
    include: [
      {
        model: Neighborhoods,
        attributes: ["name"],
      },
      {
        model: Contestants,
        include: {
          model: Users,
          attributes: ["name", "surname", "number_id"],
        },
      },
      {
        model: Sports,
        attributes: ["name", "codename"],
        include: [
          {
            model: Trainers,
            include: { model: Users, attributes: ["name"] },
          },
          { model: Venues, attributes: ["name", "address"] },
          { model: Schedules, attributes: ["day_of_week", "start_time"] },
        ],
      },
    ],
  });
  return inscriptions;
}

// Crea una nueva inscripción.
async function createInscription(inscriptionData) {
  // Aquí podemos agregar lógica para validar el estado de la inscripción.
  const newInscription = await Inscriptions.create(inscriptionData);
  return newInscription;
}

// Obtiene una inscripción por su ID, con datos relacionados.
async function getInscriptionById(id) {
  const inscription = await Inscriptions.findByPk(id, {
    include: [
      { model: Neighborhoods, attributes: ["name"] },
      {
        model: Contestants,
        include: { model: Users, attributes: ["name", "surname"] },
      },
      { model: Sports, attributes: ["name"] },
    ],
  });
  if (!inscription) {
    throw new Error("Inscripción no encontrada");
  }
  return inscription;
}

// Actualiza el estado de una inscripción.
async function updateInscriptionStatus(id, newStatus) {
  const inscription = await Inscriptions.findByPk(id);
  if (!inscription) {
    throw new Error("Inscripción no encontrada");
  }
  if (!["Pendiente", "Aceptada", "Rechazada"].includes(newStatus)) {
    throw new Error("Estado de inscripción no válido");
  }
  inscription.status = newStatus;
  await inscription.save();
  return inscription;
}

// Exporta las funciones para que el controlador pueda usarlas.
export const inscriptionsService = {
  getAllInscriptions,
  createInscription,
  getInscriptionById,
  updateInscriptionStatus,
};
