import Document_types from "../models/Document_types/Document_types.js";

async function getAllDocumentTypes() {
  const types = await Document_types.findAll();
  return types;
}

export const documentTypesService = {
  getAllDocumentTypes,
};
