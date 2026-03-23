import { Router } from "express";
import { configuracionController } from "../controllers";

const router = Router();

router.get("/", configuracionController.getAll);

export default router;