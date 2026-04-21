import {Router} from "express";
import {
  createPlant,
  deletePlant,
  getAllPlant,
  getPlant,
  updatePlant,
} from "../controllers/plant.controller.js";

const router = Router();

router.get("/plant/:id", getPlant);
router.get("/plant", getAllPlant);
router.post("/plant", createPlant);
router.put("/plant/:id", updatePlant);
router.delete("/plant/:id", deletePlant);

export default router;
