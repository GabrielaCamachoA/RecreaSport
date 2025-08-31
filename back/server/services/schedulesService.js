import Schedules from "../models/Schedules/Schedules.js";

// Obtener todos los horarios
async function getAllSchedules() {
  const schedules = await Schedules.findAll();
  return schedules;
}

// Obtener un horario por su ID
async function getScheduleById(id) {
  const schedule = await Schedules.findByPk(id);
  if (!schedule) {
    throw new Error("Horario no encontrado");
  }
  return schedule;
}

// Crear un nuevo horario
async function createSchedule(scheduleData) {
  const newSchedule = await Schedules.create(scheduleData);
  return newSchedule;
}

// Actualizar un horario
async function updateSchedule(id, updatedData) {
  const schedule = await Schedules.findByPk(id);
  if (!schedule) {
    throw new Error("Horario no encontrado");
  }
  await schedule.update(updatedData);
  return schedule;
}

// Eliminar un horario
async function deleteSchedule(id) {
  const schedule = await Schedules.findByPk(id);
  if (!schedule) {
    throw new Error("Horario no encontrado");
  }
  await schedule.destroy();
  return { message: "Horario eliminado con éxito" };
}

// Exportar las funciones para el controlador
export const schedulesService = {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};