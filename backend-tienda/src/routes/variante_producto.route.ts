import { Router } from "express";
import { variante_productoController } from "../controllers";

const router = Router();

router.get("/", variante_productoController.getAll);
router.get("/:id", variante_productoController.getById);
router.put("/:id", variante_productoController.update);
router.delete("/:id", variante_productoController.delete);

export default router;
