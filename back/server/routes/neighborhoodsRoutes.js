import { Router } from "express";
import { getAllNeighborhoods } from "../controllers/neighborhoodsController.js";

const router = Router();
router.get("/neighborhoods", getAllNeighborhoods);

export default router;
