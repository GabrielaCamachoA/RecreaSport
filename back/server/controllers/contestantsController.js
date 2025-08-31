import { contestantsService } from "../services/contestantsService.js";

// Controller for creating a contestant
export async function createContestant(req, res) {
  const { userId } = req.body;
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

// Controller to obtain all contestants
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

// Controller to obtain a contestant by their ID
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