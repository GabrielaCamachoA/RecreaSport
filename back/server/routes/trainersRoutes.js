import { Router } from "express";
import {
  getAllTrainers,
  getTrainerById,
  createTrainer,
} from "../controllers/trainersController.js";

const router = Router();

router.get("/trainers", getAllTrainers);
router.get("/trainers/:id", getTrainerById);
router.post("/trainers", createTrainer);

export default router;
