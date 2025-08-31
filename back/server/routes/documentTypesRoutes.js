import { Router } from "express";
import { getAllDocumentTypes } from "../controllers/documentTypesController.js";

const router = Router();
router.get("/document-types", getAllDocumentTypes);

export default router;
