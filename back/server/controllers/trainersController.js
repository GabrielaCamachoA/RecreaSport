import { trainersService } from "../services/trainersService.js";

// Controller to obtain all trainers.
export async function getAllTrainers(req, res) {
  try {
    const trainers = await trainersService.getAllTrainers();
    res.status(200).json({
      success: true,
      data: trainers,
      count: trainers.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener entrenadores",
      error: error.message,
    });
  }
}

// Controller for obtaining a trainer by ID.
export async function getTrainerById(req, res) {
  const { id } = req.params;
  try {
    const trainer = await trainersService.getTrainerById(id);
    res.status(200).json({
      success: true,
      data: trainer,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controller for creating a new coach.
export async function createTrainer(req, res) {
  const { userId } = req.body;
  try {
    const newTrainer = await trainersService.createTrainer(userId);
    res.status(201).json({
      success: true,
      message: "Entrenador creado con éxito",
      data: newTrainer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear entrenador",
      error: error.message,
    });
  }
}
