import { Router } from "express";
import { marcaController } from "../controllers";

const router = Router();

router.get("/", marcaController.getAll);
router.get("/:id", marcaController.getById);

router.post("/", marcaController.create);

router.put("/:id", marcaController.update);

router.delete("/:id", marcaController.delete);

export default router;
