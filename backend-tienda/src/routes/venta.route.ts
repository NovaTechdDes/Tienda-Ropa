import { Router } from "express";
import { ventaController } from "../controllers";

const router = Router();

router.get("/", ventaController.getAll);
router.get("/:id", ventaController.getById);
router.post("/", ventaController.create);

export default router;
