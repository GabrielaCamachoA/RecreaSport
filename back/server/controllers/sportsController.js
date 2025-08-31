import { sportsService } from "../services/sportsService.js";

// Controlador para obtener todos los deportes.
export async function getAllSports(req, res) {
  try {
    const sports = await sportsService.getAllSports();
    res.status(200).json({
      success: true,
      data: sports,
      count: sports.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener deportes",
      error: error.message,
    });
  }
}

// Controlador para obtener un deporte por ID.
export async function getSportById(req, res) {
  const { id } = req.params;
  try {
    const sport = await sportsService.getSportById(id);
    res.status(200).json({
      success: true,
      data: sport,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controlador para crear un nuevo deporte.
export async function createSport(req, res) {
  const sportData = req.body;
  try {
    const newSport = await sportsService.createSport(sportData);
    res.status(201).json({
      success: true,
      message: "Deporte creado con éxito",
      data: newSport,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear deporte",
      error: error.message,
    });
  }
}
