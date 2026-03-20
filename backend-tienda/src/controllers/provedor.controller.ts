import { Request, Response } from "express";
import { provedorService } from "../services";

export const provedorController = {
  getAll: async (_req: Request, res: Response) => {
    const provedores = await provedorService.getAll();
    res.status(200).json(provedores);
  },
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const provedor = await provedorService.getById(Number(id));
    res.status(200).json(provedor);
  },
  create: async (req: Request, res: Response) => {
    const provedor = await provedorService.create(req.body);
    res.status(201).json(provedor);
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const provedor = await provedorService.update(Number(id), req.body);
    res.status(200).json(provedor);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const provedor = await provedorService.delete(Number(id));
    res.status(200).json(provedor);
  },
};
