import { Router } from "express";
import {
  createContestant,
  getAllContestants,
  getContestantById,
  getContestantByUserId,
} from "../controllers/contestantsController.js";

const router = Router();

router.post("/", createContestant);
router.get("/", getAllContestants);
router.get("/:id", getContestantById);
router.get("/byUser/:userId", getContestantByUserId);

export default router;
