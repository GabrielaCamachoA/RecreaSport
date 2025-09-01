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
        as: "neighborhood",
        attributes: ["name"],
      },
      {
        model: Contestants,
        as: "contestant",
        include: {
          model: Users,
          as: "user",
          attributes: ["name", "surname", "number_id"],
        },
      },
      {
        model: Sports,
        as: "sport",
        attributes: ["name", "codename"],
        include: [
          {
            model: Trainers,
            as: "trainer",
            include: { model: Users, as: "user", attributes: ["name"] },
          },
          { model: Venues, as: "venue", attributes: ["name", "address"] },
          {
            model: Schedules,
            as: "schedule",
            attributes: ["start_date", "end_date"], // ¡Usa los campos correctos!
          },
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
      { model: Neighborhoods, as: "neighborhood", attributes: ["name"] },
      {
        model: Contestants,
        as: "contestant",
        include: { model: Users, as: "user", attributes: ["name", "surname"] },
      },
      { model: Sports, as: "sport", attributes: ["name"] },
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

// obtener conteo de inscripciones
export async function getInscriptionsCount() {
  const totalCount = await Inscriptions.count();
  const approvedCount = await Inscriptions.count({
    where: {
      status: "Aceptada",
    },
  });
  const pendingCount = await Inscriptions.count({
    where: {
      status: "Pendiente",
    },
  });

  return {
    total: totalCount,
    approved: approvedCount,
    pending: pendingCount,
  };
}

// Obtiene una inscripción por el ID del concursante.
async function getInscriptionByContestantId(contestantId) {
  const inscription = await Inscriptions.findOne({
    where: {
      id_contestants: contestantId,
    },
    include: [
      { model: Neighborhoods, as: "neighborhood", attributes: ["name"] },
      { model: Sports, as: "sport", attributes: ["name"] },
    ],
  });
  return inscription;
}

// Exporta las funciones para que el controlador pueda usarlas.
export const inscriptionsService = {
  getAllInscriptions,
  createInscription,
  getInscriptionById,
  updateInscriptionStatus,
  getInscriptionsCount,
  getInscriptionByContestantId,
};
