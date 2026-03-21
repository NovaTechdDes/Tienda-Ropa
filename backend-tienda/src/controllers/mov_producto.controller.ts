import { Request, Response } from "express";
import { mov_productoService } from "../services";

export const mov_productoController = {
  getAll: async (_req: Request, res: Response) => {
    const movimientos = await mov_productoService.getAll();
    res.status(200).json(movimientos);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const movimiento = await mov_productoService.getById(Number(id));
    res.status(200).json(movimiento);
  },
  create: async (req: Request, res: Response) => {
    const movimiento = await mov_productoService.create(req.body);
    res.status(201).json(movimiento);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const movimiento = await mov_productoService.update(Number(id), req.body);
    res.status(200).json(movimiento);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const movimiento = await mov_productoService.delete(Number(id));
    res.status(200).json(movimiento);
  },
};
