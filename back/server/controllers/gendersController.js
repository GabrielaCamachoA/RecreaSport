import { gendersService } from "../services/gendersService.js";

export async function getAllGenders(req, res) {
  try {
    const genders = await gendersService.getAllGenders();
    res.status(200).json({
      success: true,
      data: genders,
      count: genders.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener géneros",
      error: error.message,
    });
  }
}