import { documentTypesService } from "../services/documentTypesService.js";

export async function getAllDocumentTypes(req, res) {
  try {
    const types = await documentTypesService.getAllDocumentTypes();
    res.status(200).json({
      success: true,
      data: types,
      count: types.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener tipos de documento",
      error: error.message,
    });
  }
}
