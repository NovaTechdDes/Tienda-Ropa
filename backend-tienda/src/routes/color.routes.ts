import { Router } from "express";
import { colorController } from "../controllers";

const router = Router();

router.get("/", colorController.getAll);
router.get("/:id", colorController.getById);

router.post("/", colorController.create);

router.put("/:id", colorController.update);

router.delete("/:id", colorController.delete);

export default router;
