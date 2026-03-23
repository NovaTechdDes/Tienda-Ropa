import { Router } from "express";
import { categoriaController } from "../controllers";

const router = Router();

router.get("/", categoriaController.getAll);
router.post("/", categoriaController.create);
router.put("/:id", categoriaController.update);
router.delete("/:id", categoriaController.delete);

export default router;
