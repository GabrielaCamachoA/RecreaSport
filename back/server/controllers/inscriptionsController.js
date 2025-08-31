import { inscriptionsService } from "../services/inscriptionsService.js";

// Controlador para obtener todas las inscripciones.
export async function getAllInscriptions(req, res) {
  try {
    const inscriptions = await inscriptionsService.getAllInscriptions();
    res.status(200).json({
      success: true,
      data: inscriptions,
      count: inscriptions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener inscripciones",
      error: error.message,
    });
  }
}

// Controlador para crear una nueva inscripción.
export async function createInscription(req, res) {
  const inscriptionData = req.body;
  try {
    const newInscription = await inscriptionsService.createInscription(
      inscriptionData
    );
    res.status(201).json({
      success: true,
      message: "Inscripción creada con éxito",
      data: newInscription,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear la inscripción",
      error: error.message,
    });
  }
}

// Controlador para obtener una inscripción por ID.
export async function getInscriptionById(req, res) {
  const { id } = req.params;
  try {
    const inscription = await inscriptionsService.getInscriptionById(id);
    res.status(200).json({
      success: true,
      data: inscription,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controlador para actualizar el estado de una inscripción.
export async function updateInscriptionStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedInscription =
      await inscriptionsService.updateInscriptionStatus(id, status);
    res.status(200).json({
      success: true,
      message: "Estado de inscripción actualizado con éxito",
      data: updatedInscription,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getInscriptionsCount(req, res) {
  try {
    const counts = await inscriptionsService.getInscriptionsCount();
    res.status(200).json({
      success: true,
      data: counts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el conteo de inscripciones",
      error: error.message,
    });
  }
}
