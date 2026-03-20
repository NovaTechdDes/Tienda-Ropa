import { Request, Response } from "express";
import { talleService } from "../services";

export const talleController = {
  getAll: async (_req: Request, res: Response) => {
    const talles = await talleService.getAll();
    res.status(200).json(talles);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const talle = await talleService.getById(Number(id));
    res.status(200).json(talle);
  },
  create: async (req: Request, res: Response) => {
    const talle = await talleService.create(req.body);
    res.status(201).json(talle);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const talle = await talleService.update(Number(id), req.body);
    res.status(200).json(talle);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const talle = await talleService.delete(Number(id));
    res.status(200).json(talle);
  },
};
