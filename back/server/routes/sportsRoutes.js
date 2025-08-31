import { Router } from "express";
import {
  getAllSports,
  getSportById,
  createSport,
} from "../controllers/sportsController.js";

const router = Router();

router.get("/sports", getAllSports);
router.get("/sports/:id", getSportById);
router.post("/sports", createSport);

export default router;
