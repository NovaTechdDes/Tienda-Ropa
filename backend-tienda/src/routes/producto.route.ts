import { Router } from "express";
import { productoController } from "../controllers";
import { upload } from "../helpers/uploadImage";

const router = Router();

router.get("/", productoController.getAll);

router.get("/variantes", productoController.getVariantes);

router.get("/:id", productoController.getById);

router.post("/", upload.single("imagen"), productoController.create);

router.put("/:id", upload.single("imagen"), productoController.update);
router.delete("/:id", productoController.delete);

export default router;
