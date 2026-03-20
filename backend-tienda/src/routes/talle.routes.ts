import { Router } from "express";
import { talleController } from "../controllers";

const router = Router();

router.get("/", talleController.getAll);
router.get("/:id", talleController.getById);

router.post("/", talleController.create);

router.put("/:id", talleController.update);

router.delete("/:id", talleController.delete);

export default router;
