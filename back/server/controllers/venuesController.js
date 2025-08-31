import { venuesService } from "../services/venuesService.js";

// Controlador para obtener todos los lugares
export async function getAllVenues(req, res) {
  try {
    const venues = await venuesService.getAllVenues();
    res.status(200).json({
      success: true,
      data: venues,
      count: venues.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener lugares",
      error: error.message,
    });
  }
}

// Controlador para obtener un lugar por ID
export async function getVenueById(req, res) {
  const { id } = req.params;
  try {
    const venue = await venuesService.getVenueById(id);
    res.status(200).json({
      success: true,
      data: venue,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controlador para crear un nuevo lugar
export async function createVenue(req, res) {
  const venueData = req.body;
  try {
    const newVenue = await venuesService.createVenue(venueData);
    res.status(201).json({
      success: true,
      message: "Lugar creado con éxito",
      data: newVenue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear el lugar",
      error: error.message,
    });
  }
}

// Controlador para actualizar un lugar
export async function updateVenue(req, res) {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedVenue = await venuesService.updateVenue(id, updatedData);
    res.status(200).json({
      success: true,
      message: "Lugar actualizado con éxito",
      data: updatedVenue,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controlador para eliminar un lugar
export async function deleteVenue(req, res) {
  const { id } = req.params;
  try {
    const result = await venuesService.deleteVenue(id);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}
