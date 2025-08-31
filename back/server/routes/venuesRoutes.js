import { Router } from "express";
import {
  getAllVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
} from "../controllers/venuesController.js";

const router = Router();

router.get("/venues", getAllVenues);
router.get("/venues/:id", getVenueById);
router.post("/venues", createVenue);
router.put("/venues/:id", updateVenue);
router.delete("/venues/:id", deleteVenue);

export default router;
