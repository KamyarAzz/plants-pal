import {Router} from "express";
import {
  deleteUser,
  getUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";
import {requireAuth} from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/:id", requireAuth, getUser);
router.put("/user/:id", requireAuth, updateUser);
router.delete("/user/:id", requireAuth, deleteUser);

export default router;
