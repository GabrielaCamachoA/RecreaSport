import Venues from "../models/Venues/Venues.js";

// Obtener todos los lugares
async function getAllVenues() {
  const venues = await Venues.findAll();
  return venues;
}

// Obtener un lugar por su ID
async function getVenueById(id) {
  const venue = await Venues.findByPk(id);
  if (!venue) {
    throw new Error("Lugar no encontrado");
  }
  return venue;
}

// Crear un nuevo lugar
async function createVenue(venueData) {
  const newVenue = await Venues.create(venueData);
  return newVenue;
}

// Actualizar un lugar
async function updateVenue(id, updatedData) {
  const venue = await Venues.findByPk(id);
  if (!venue) {
    throw new Error("Lugar no encontrado");
  }
  await venue.update(updatedData);
  return venue;
}

// Eliminar un lugar
async function deleteVenue(id) {
  const venue = await Venues.findByPk(id);
  if (!venue) {
    throw new Error("Lugar no encontrado");
  }
  await venue.destroy();
  return { message: "Lugar eliminado con éxito" };
}

// Exportar las funciones para el controlador
export const venuesService = {
  getAllVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
};
