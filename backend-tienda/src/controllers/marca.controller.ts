import { Request, Response } from "express";
import { marcaService } from "../services";

export const marcaController = {
  getAll: async (_req: Request, res: Response) => {
    const marcas = await marcaService.getAll();
    res.status(200).json(marcas);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const marca = await marcaService.getById(Number(id));
    res.status(200).json(marca);
  },
  create: async (req: Request, res: Response) => {
    const marca = await marcaService.create(req.body);
    res.status(201).json(marca);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const marca = await marcaService.update(Number(id), req.body);
    res.status(200).json(marca);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const marca = await marcaService.delete(Number(id));
    res.status(200).json(marca);
  },
};
