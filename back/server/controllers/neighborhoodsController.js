import { neighborhoodsService } from "../services/neighborhoodsService.js";

export async function getAllNeighborhoods(req, res) {
  try {
    const neighborhoods = await neighborhoodsService.getAllNeighborhoods();
    res.status(200).json({
      success: true,
      data: neighborhoods,
      count: neighborhoods.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener barrios",
      error: error.message,
    });
  }
}
