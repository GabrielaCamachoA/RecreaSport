import { Router } from "express";
import {
  createContestant,
  getAllContestants,
  getContestantById,
} from "../controllers/contestantsController.js";

const router = Router();

router.post("/", createContestant);
router.get("/", getAllContestants);
router.get("/:id", getContestantById);

export default router;
