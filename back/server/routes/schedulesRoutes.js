import { Router } from "express";
import {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from "../controllers/schedulesController.js";

const router = Router();

router.get("/schedules", getAllSchedules);
router.get("/schedules/:id", getScheduleById);
router.post("/schedules", createSchedule);
router.put("/schedules/:id", updateSchedule);
router.delete("/schedules/:id", deleteSchedule);

export default router;
