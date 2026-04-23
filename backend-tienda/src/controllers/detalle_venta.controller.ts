import { Request, Response } from "express";
import { detalle_ventaService } from "../services";

export const detalle_ventaController = {
  getAll: async (_req: Request, res: Response) => {
    const detalles = await detalle_ventaService.getAll();
    res.status(200).json(detalles);
  },

  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const detalle = await detalle_ventaService.getById(Number(id));

    res.status(200).json(detalle);
  },

  create: async (req: Request, res: Response) => {
    const detalle = await detalle_ventaService.create(req.body);
    res.status(201).json(detalle);
  },
};
