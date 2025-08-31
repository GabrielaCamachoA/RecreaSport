import { Router } from "express";
import {
  getAllInscriptions,
  createInscription,
  getInscriptionById,
  updateInscriptionStatus,
  getInscriptionsCount,
} from "../controllers/inscriptionsController.js";

const router = Router();

router.get("/count", getInscriptionsCount);
router.get("/all", getAllInscriptions);
router.get("/:id", getInscriptionById);
router.post("/", createInscription);
router.put("/:id/status", updateInscriptionStatus);

export default router;
