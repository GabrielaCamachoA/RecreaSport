import { schedulesService } from "../services/schedulesService.js";

// Controller to obtain all schedules
export async function getAllSchedules(req, res) {
  try {
    const schedules = await schedulesService.getAllSchedules();
    res.status(200).json({
      success: true,
      data: schedules,
      count: schedules.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener horarios",
      error: error.message,
    });
  }
}

// Controller to obtain a schedule by ID
export async function getScheduleById(req, res) {
  const { id } = req.params;
  try {
    const schedule = await schedulesService.getScheduleById(id);
    res.status(200).json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controller for creating a new schedule
export async function createSchedule(req, res) {
  const scheduleData = req.body;
  try {
    const newSchedule = await schedulesService.createSchedule(scheduleData);
    res.status(201).json({
      success: true,
      message: "Horario creado con éxito",
      data: newSchedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear el horario",
      error: error.message,
    });
  }
}

// Controller for updating a schedule
export async function updateSchedule(req, res) {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedSchedule = await schedulesService.updateSchedule(
      id,
      updatedData
    );
    res.status(200).json({
      success: true,
      message: "Horario actualizado con éxito",
      data: updatedSchedule,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

// Controller for deleting a schedule
export async function deleteSchedule(req, res) {
  const { id } = req.params;
  try {
    const result = await schedulesService.deleteSchedule(id);
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
