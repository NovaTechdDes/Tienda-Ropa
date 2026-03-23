import { Request, Response } from "express";
import { configuracionService } from "../services";

export const configuracionController = {
    getAll: async (_req: Request, res: Response) => {
        const configuracion = await configuracionService.getAll();
        res.status(200).json({
            ok: true,
            ...configuracion
        });
    }
}