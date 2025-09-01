import { contestantsService } from "../services/contestantsService.js";

// Controlador para crear un concursante
export async function createContestant(req, res) {
  const userId = req.body.userId;
  try {
    const newContestant = await contestantsService.createContestant(userId);
    res.status(201).json({
      success: true,
      message: "Concursante creado con éxito",
      data: newContestant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear concursante",
      error: error.message,
    });
  }
}

// Controlador para obtener todos los concursantes
export async function getAllContestants(req, res) {
  try {
    const contestants = await contestantsService.getAllContestants();
    res.status(200).json({
      success: true,
      data: contestants,
      count: contestants.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener concursantes",
      error: error.message,
    });
  }
}

// Controlador para obtener un concursante por su ID
export async function getContestantById(req, res) {
  const { id } = req.params;
  try {
    const contestant = await contestantsService.getContestantById(id);
    res.status(200).json({
      success: true,
      data: contestant,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Nuevo controlador para obtener un concursante por ID de usuario
export async function getContestantByUserId(req, res) {
  const { userId } = req.params;
  try {
    const contestant = await contestantsService.getContestantByUserId(userId);
    if (!contestant) {
      return res.status(404).json({
        success: false,
        message: "Concursante no encontrado para este usuario.",
      });
    }
    res.status(200).json({
      success: true,
      data: contestant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener concursante por ID de usuario",
      error: error.message,
    });
  }
}