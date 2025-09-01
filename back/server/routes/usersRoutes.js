import { Router } from "express";
import {
  getAllUsers,
  login,
  register,
} from "../controllers/usersController.js";

const router = Router();

// Definir las rutas
router.get("/", getAllUsers);
router.post("/login", login);
router.post("/register", register);

export default router;
