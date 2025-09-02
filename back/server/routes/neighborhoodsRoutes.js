import { Router } from "express";
import { getAllNeighborhoods } from "../controllers/neighborhoodsController.js";

const router = Router();
router.get("/", getAllNeighborhoods); // Cambia "/neighborhoods" por "/"

export default router;
