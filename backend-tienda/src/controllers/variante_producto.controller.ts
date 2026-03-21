import { Request, Response } from "express";
import { variante_productoService } from "../services";

export const variante_productoController = {
  getAll: async (_req: Request, res: Response) => {
    const variantes = await variante_productoService.getAll();
    res.status(200).json(variantes);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const variante = await variante_productoService.getById(Number(id));
    res.status(200).json(variante);
  },
  create: async (req: Request, res: Response) => {
    const variante = await variante_productoService.create(req.body);
    res.status(201).json(variante);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const variante = await variante_productoService.update(
      Number(id),
      req.body,
    );
    res.status(200).json(variante);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const variante = await variante_productoService.delete(Number(id));
    res.status(200).json(variante);
  },
};
