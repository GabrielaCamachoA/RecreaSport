import { Router } from "express";
import { getAllGenders } from "../controllers/gendersController.js";

const router = Router();
router.get("/genders", getAllGenders);

export default router;