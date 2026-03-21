import { Request, Response } from "express";
import { productoService } from "../services";

export const productoController = {
  getAll: async (_req: Request, res: Response) => {
    const productos = await productoService.getAll();
    res.status(200).json(productos);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await productoService.getById(Number(id));
    res.status(200).json(producto);
  },
  create: async (req: Request, res: Response) => {
    const producto = await productoService.create(req.body);
    res.status(201).json(producto);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await productoService.update(Number(id), req.body);
    res.status(200).json(producto);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const producto = await productoService.delete(Number(id));
    res.status(200).json(producto);
  },
};
