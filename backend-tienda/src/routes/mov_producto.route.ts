import { Router } from "express";
import { mov_productoController } from "../controllers";

const router = Router();

router.get("/", mov_productoController.getAll);
router.get("/:id", mov_productoController.getById);
router.post("/", mov_productoController.create);
router.put("/:id", mov_productoController.update);
router.delete("/:id", mov_productoController.delete);

export default router;
