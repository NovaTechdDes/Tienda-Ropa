import { Request, Response } from "express";
import { colorService } from "../services";

export const colorController = {
  getAll: async (_req: Request, res: Response) => {
    const colors = await colorService.getAll();
    res.status(200).json(colors);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const color = await colorService.getById(Number(id));
    res.status(200).json(color);
  },
  create: async (req: Request, res: Response) => {
    const color = await colorService.create(req.body);
    res.status(201).json(color);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const color = await colorService.update(Number(id), req.body);
    res.status(200).json(color);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const color = await colorService.delete(Number(id));
    res.status(200).json(color);
  },
};
