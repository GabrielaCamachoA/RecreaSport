import { Router } from "express";
import {
  createContestant,
  getAllContestants,
  getContestantById,
} from "../controllers/contestantsController.js";

const router = Router();

router.post("/contestants", createContestant);
router.get("/contestants", getAllContestants);
router.get("/contestants/:id", getContestantById);

export default router;
