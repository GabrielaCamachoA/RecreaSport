import { Router } from "express";
import { getAllDocumentTypes } from "../controllers/documentTypesController.js";

const router = Router();
router.get("/", getAllDocumentTypes); // Cambia "/document-types" por "/"

export default router;