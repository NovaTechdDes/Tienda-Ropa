import { Router } from "express";
import { detalle_ventaController } from "../controllers";

const router = Router();

router.get("/", detalle_ventaController.getAll);
router.get("/:id", detalle_ventaController.getById);
router.post("/", detalle_ventaController.create);

export default router;
