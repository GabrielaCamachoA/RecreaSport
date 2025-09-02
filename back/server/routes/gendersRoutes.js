import { Router } from "express";
import { getAllGenders } from "../controllers/gendersController.js";

const router = Router();
router.get("/", getAllGenders); // Cambia "/genders" por "/"

export default router;