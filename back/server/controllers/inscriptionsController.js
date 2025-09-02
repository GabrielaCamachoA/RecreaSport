import { inscriptionsService } from "../services/inscriptionsService.js";

//  Controller to obtain all registrations.
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

// Controller for creating a new enrollment.
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

// Controller for obtaining an ID registration.
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

// Controller for updating the status of an enrollment.
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

// Controlador para obtener una inscripción por el ID del concursante.
export async function getInscriptionByContestantId(req, res) {
  const { id } = req.params;
  try {
    const inscription = await inscriptionsService.getInscriptionByContestantId(
      id
    );
    if (!inscription) {
      return res.status(404).json({
        success: false,
        message: "Inscripción no encontrada para este concursante.",
      });
    }
    res.status(200).json({
      success: true,
      data: inscription,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener la inscripción del concursante",
      error: error.message,
    });
  }
}
