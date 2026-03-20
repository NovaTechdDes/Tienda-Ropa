import { Router } from "express";
import { provedorController } from "../controllers";

const router = Router();

router.get("/", provedorController.getAll);
router.get("/:id", provedorController.getById);

router.post("/", provedorController.create);

router.put("/:id", provedorController.update);

router.delete("/:id", provedorController.delete);

export default router;
