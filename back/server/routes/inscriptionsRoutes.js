import { Router } from "express";
import {
  getAllInscriptions,
  createInscription,
  getInscriptionById,
  updateInscriptionStatus,
} from "../controllers/inscriptionsController.js";

const router = Router();

router.get("/inscriptions", getAllInscriptions);
router.get("/inscriptions/:id", getInscriptionById);
router.post("/inscriptions", createInscription);
router.put("/inscriptions/:id/status", updateInscriptionStatus);

export default router;
