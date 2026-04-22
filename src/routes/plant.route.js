import {Router} from "express";
import {
  createPlant,
  deletePlant,
  getAllPlants,
  getPlant,
  updatePlant,
} from "../controllers/plant.controller.js";
import {requireAuth} from "../middleware/auth.middleware.js";

const router = Router();

router.get("/:id", requireAuth, getPlant);
router.get("", requireAuth, getAllPlants);
router.post("", requireAuth, createPlant);
router.put("/:id", requireAuth, updatePlant);
router.delete("/:id", requireAuth, deletePlant);

export default router;
